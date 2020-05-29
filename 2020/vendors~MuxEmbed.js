// https://www.redditstatic.com/desktop2x/vendors~MuxEmbed.af80344a327be37c29ed.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~MuxEmbed"], {
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
				}, t.p = "", t(t.s = 16)
			}([function(e, t) {
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
							}(e) && m.call(e, "callee") && (!b.call(e, "callee") || y.call(e) == f)
						}(e) ? function(e, t) {
							for (var r = -1, a = Array(e); ++r < e;) a[r] = t(r);
							return a
						}(e.length, String) : [],
						a = r.length,
						i = !!a;
					for (var o in e) !t && !m.call(e, o) || i && ("length" == o || n(o, a)) || r.push(o);
					return r
				}

				function i(e, t, r) {
					var a = e[t];
					m.call(e, t) && s(a, r) && (void 0 !== r || t in e) || (e[t] = r)
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
						var t = l(e) ? y.call(e) : "";
						return t == p || t == h
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
						for (var r in Object(e)) m.call(e, r) && "constructor" != r && t.push(r);
						return t
					}(e)
				}
				var c = 9007199254740991,
					f = "[object Arguments]",
					p = "[object Function]",
					h = "[object GeneratorFunction]",
					_ = /^(?:0|[1-9]\d*)$/,
					v = Object.prototype,
					m = v.hasOwnProperty,
					y = v.toString,
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
							for (var r in t) m.call(t, r) && i(e, r, t[r])
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
				(function(t) {
					var r;
					r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = r
				}).call(t, r(5))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(18)),
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
				var a = r(6),
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
					return "1" === (a.default.doNotTrack || a.default.navigator.doNotTrack || a.default.navigator.msDoNotTrack)
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(2))
			}, function(e, t, r) {
				(function(t) {
					var a, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
						n = r(21);
					"undefined" != typeof document ? a = document : (a = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (a = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = a
				}).call(t, r(5))
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
				var a = r(40),
					i = r(41),
					n = r(14);
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
				var n = a(r(3)),
					o = a(r(0)),
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
						cn: "config",
						co: "count",
						ce: "counter",
						cp: "complete",
						ct: "content",
						cu: "current",
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
				e.exports = r(17).default
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
					o = r(8),
					s = a(r(3)),
					u = a(r(9)),
					l = a(r(19)),
					d = a(r(48)),
					c = a(r(49)),
					f = {},
					p = function e(t) {
						var r = arguments;
						"string" == typeof t ? e.hasOwnProperty(t) ? n.default.setTimeout((function() {
							r = Array.prototype.splice.call(r, 1), e[t].apply(null, r)
						}), 0) : s.default.warn("`" + t + "` is an unknown task") : "function" == typeof t ? n.default.setTimeout((function() {
							t(e)
						}), 0) : s.default.warn("`" + t + "` is invalid.")
					};
				p.loaded = Date.now(), p.VERSION = "2.6.0", p.API_VERSION = "2.0", p.PLAYER_TRACKED = !1, p.monitor = function(e, t) {
					return (0, d.default)(p, e, t)
				}, p.destroyMonitor = function(e) {
					var t = (0, o.findMediaElement)(e),
						r = i(t, 1)[0];
					r && r.mux && "function" == typeof r.mux.destroy ? r.mux.destroy() : s.default.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
				}, p.addHLSJS = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					f[r] ? f[r].addHLSJS(t) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, p.addDashJS = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					f[r] ? f[r].addDashJS(t) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, p.removeHLSJS = function(e) {
					var t = (0, o.getMuxPlayerId)(e);
					f[t] ? f[t].removeHLSJS() : s.default.error("A monitor for `" + t + "` has not been initialized.")
				}, p.removeDashJS = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					f[r] ? f[r].removeDashJS(t) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, p.init = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					f[r] = new l.default(p, r, t)
				}, p.emit = function(e, t, r) {
					var a = (0, o.getMuxPlayerId)(e);
					f[a] ? (f[a].emit(t, r), "destroy" === t && delete f[a]) : s.default.error("A monitor for `" + a + "` has not been initialized.")
				}, (0, u.default)() && s.default.info("The browser's Do Not Track flag is enabled - Mux beaconing may be disabled."), n.default.addEventListener("unload", (function() {
					p.WINDOW_UNLOADING = !0
				}), !1), p.checkDoNotTrack = u.default, p.log = s.default, p.utils = c.default, t.default = p
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
					n = a(r(3)),
					o = a(r(0)),
					s = r(6),
					u = r(4),
					l = a(r(2)),
					d = a(r(1)),
					c = a(r(20)),
					f = r(23),
					p = r(24),
					h = a(r(25)),
					_ = a(r(26)),
					v = a(r(27)),
					m = a(r(28)),
					y = a(r(29)),
					b = a(r(30)),
					g = a(r(31)),
					w = a(r(32)),
					x = a(r(33)),
					S = a(r(34)),
					T = a(r(35)),
					O = a(r(36)),
					E = a(r(37)),
					k = a(r(38)),
					M = a(r(47)),
					P = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled"],
					D = function(e, t, r) {
						var a = this;
						this.DOM_CONTENT_LOADED_EVENT_END = l.default.performance && l.default.performance.timing.domContentLoadedEventEnd, this.NAVIGATION_START = l.default.performance && l.default.performance.timing.navigationStart, this.mux = e, this.id = t, (r = (0, o.default)({
							debug: !1,
							minimumRebufferDuration: 250,
							sustainedRebufferThreshold: 1e3,
							playbackHeartbeatTime: 25,
							sampleRate: 1,
							beaconDomain: "litix.io",
							disableCookies: !1,
							respectDoNotTrack: !0
						}, r)).data = r.data || {}, r.data.property_key && (r.data.env_key = r.data.property_key, delete r.data.property_key), n.default.setLevel(r.debug ? "debug" : "warn"), this.getPlayheadTime = r.getPlayheadTime, this.getStateData = r.getStateData || function() {}, this.getAdData = r.getAdData || function() {}, this.minimumRebufferDuration = r.minimumRebufferDuration, this.sustainedRebufferThreshold = r.sustainedRebufferThreshold, this.playbackHeartbeatTime = r.playbackHeartbeatTime, this.playbackEventDispatcher = new k.default(e, r.data.env_key, r), this.data = {
							player_instance_id: (0, s.generateShortID)(),
							mux_sample_rate: r.sampleRate,
							beacon_domain: r.beaconDomain
						}, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function(e, t) {
							t = (0, o.default)({
								viewer_time: Date.now()
							}, t), this.oldEmit(e, t)
						}, this.on("viewinit", (function(e, t) {
							this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, o.default)(this.data, t), this._initializeViewData();
							var r = function() {
								void 0 === this.data.view_start && (this.data.view_start = Date.now(), this.emit("viewstart"))
							}.bind(this);
							this.one("play", r), this.one("adbreakstart", r)
						})), this.on("videochange", (function(e, t) {
							this.emit("viewend"), this.send("viewend"), this.emit("viewinit", t)
						})), this.on("destroy", this.destroy);
						var i = this.destroy.bind(this);
						l.default.addEventListener("unload", i, !1), this.on("destroy", (function() {
							l.default.removeEventListener("unload", i)
						})), this.on("playerready", (function(e, t) {
							(0, o.default)(this.data, t)
						})), P.forEach((function(e) {
							a.on(e, (function(t, r) {
								0 !== e.indexOf("ad") && this._updateStateData(), (0, o.default)(this.data, r), this._sanitizeData()
							})), a.on("after" + e, (function() {
								this.send(e)
							}))
						})), this.on("viewend", (function(e, t) {
							(0, o.default)(a.data, t)
						})), this.one("playerready", (function(e) {
							var t = Date.now();
							this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
						})), v.default.apply(this), E.default.apply(this), S.default.apply(this), b.default.apply(this), _.default.apply(this), x.default.apply(this), m.default.apply(this), y.default.apply(this), T.default.apply(this), g.default.apply(this), w.default.apply(this), O.default.apply(this), M.default.apply(this), r.hlsjs && this.addHLSJS(r), r.dashjs && this.addDashJS(r), this.emit("viewinit", r.data)
					};
				(0, o.default)(D.prototype, h.default.prototype), (0, o.default)(D.prototype, b.default.prototype), (0, o.default)(D.prototype, S.default.prototype), (0, o.default)(D.prototype, _.default.prototype), (0, o.default)(D.prototype, m.default.prototype), (0, o.default)(D.prototype, y.default.prototype), (0, o.default)(D.prototype, T.default.prototype), (0, o.default)(D.prototype, g.default.prototype), (0, o.default)(D.prototype, w.default.prototype), D.prototype.destroy = function() {
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
					["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time"].forEach((function(t) {
						var r = parseInt(e.data[t], 10);
						e.data[t] = isNaN(r) ? void 0 : r
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
					this.data.video_id || (this.data.video_id = (0, c.default)(this.data.player_source_url));
					var r = function() {
						t === e.data.view_id && (0, d.default)(e.data, "player_view_count", 1)
					};
					this.data.player_is_paused ? this.one("play", r) : r()
				}, D.prototype._restartHeartBeat = function() {
					var e = this;
					l.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = l.default.setTimeout((function() {
						e.data.player_is_paused || e.emit("hb")
					}), 1e4))
				}, D.prototype.addHLSJS = function(e) {
					return e.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, void(0, f.monitorHlsJs)(this.mux, this.id, e.hlsjs, {}, e.Hls || l.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
				}, D.prototype.removeHLSJS = function() {
					this.hlsjs && ((0, f.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0)
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
				var i = a(r(10)),
					n = a(r(22))
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
				}).call(t, r(11)(e), r(5))
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
				var i = a(r(2)),
					n = a(r(7)),
					o = r(4),
					s = function(e) {
						if (!e) return {};
						var t = i.default.performance.timing.navigationStart;
						return {
							bytesLoaded: e.total,
							requestStart: Math.round(t + e.trequest),
							responseStart: Math.round(t + e.tfirst),
							responseEnd: Math.round(t + e.tload)
						}
					},
					u = function(e) {
						if (e && "function" == typeof e.getAllResponseHeaders) return (0, n.default)(e.getAllResponseHeaders())
					};
				t.monitorHlsJs = function(e, t, r) {
					var a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments[4]),
						n = e.log;
					if (i.default.performance && i.default.performance.timing) {
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
								var p = s(n),
									h = p.bytesLoaded,
									_ = p.requestStart,
									v = p.responseStart,
									m = p.responseEnd;
								l("requestcompleted", {
									request_event_type: e,
									request_bytes_loaded: h,
									request_start: _,
									request_response_start: v,
									request_response_end: m,
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
								p = d.responseStart,
								h = d.responseEnd;
							l("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: c,
								request_start: f,
								request_response_start: p,
								request_response_end: h,
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
								p = n.responseEnd;
							l("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: d,
								request_start: c,
								request_response_start: f,
								request_response_end: p,
								request_type: "manifest",
								request_hostname: (0, o.extractHostname)(r.url),
								request_response_headers: u(a)
							})
						};
						r.on(a.Events.AUDIO_TRACK_LOADED, f);
						var p = function(e, t) {
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
						r.on(a.Events.FRAG_LOADED, p);
						var h = function(e, t) {
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
						r.on(a.Events.ERROR, h);
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
						r.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _), r._stopMuxMonitor = function() {
							r.off(a.Events.MANIFEST_LOADED, d), r.off(a.Events.LEVEL_LOADED, c), r.off(a.Events.AUDIO_TRACK_LOADED, f), r.off(a.Events.FRAG_LOADED, p), r.off(a.Events.ERROR, h), r.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _), r.off(a.Events.DESTROYING, r._stopMuxMonitor), delete r._stopMuxMonitor
						}, r.on(a.Events.DESTROYING, r._stopMuxMonitor)
					} else n.warn("window.performance.timing not supported. Not tracking HLS.js.")
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
				var i = a(r(2)),
					n = a(r(7)),
					o = r(4),
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
							c = Number.isNaN(a.duration) ? 0 : a.duration,
							f = t.getMetricsFor(a.mediaType).HttpList,
							p = void 0;
						return f.length > 0 && (p = (0, n.default)(f[f.length - 1]._responseHeaders || "")), {
							requestStart: u,
							requestResponseStart: l,
							requestResponseEnd: d,
							requestBytesLoaded: s,
							requestResponseHeaders: p,
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
									p = c.requestResponseStart,
									h = c.requestResponseEnd,
									_ = c.requestResponseHeaders,
									v = c.requestMediaDuration,
									m = c.requestHostname;
								n("requestcompleted", {
									request_event_type: t,
									request_start: f,
									request_response_start: p,
									request_response_end: h,
									request_bytes_loaded: -1,
									request_type: o + "_init",
									request_response_headers: _,
									request_hostname: m,
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
								p = c.requestResponseStart,
								h = c.requestResponseEnd,
								_ = c.requestBytesLoaded,
								v = c.requestResponseHeaders,
								m = c.requestMediaDuration,
								y = c.requestHostname,
								b = u(d, r),
								g = b.currentLevel,
								w = b.renditionWidth,
								x = b.renditionHeight,
								S = b.renditionBitrate;
							n("requestcompleted", {
								request_event_type: t,
								request_start: f,
								request_response_start: p,
								request_response_end: h,
								request_bytes_loaded: _,
								request_type: d,
								request_response_headers: v,
								request_hostname: y,
								request_media_start_time: l,
								request_media_duration: m,
								request_current_level: g,
								request_labeled_bitrate: S,
								request_video_width: w,
								request_video_height: x
							})
						};
						r.on("mediaFragmentLoaded", f);
						var p = function(e) {
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
						r.on("error", p), r._stopMuxMonitor = function() {
							r.off("manifestLoaded", l), r.off("initFragmentLoaded", c), r.off("mediaFragmentLoaded", f), r.off("error", p), delete r._stopMuxMonitor
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
					}(r(2)),
					i = function() {
						this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", (function() {
							this._playheadShouldBeProgressing = !0
						})), this.on("play", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", (function() {
							this.data.player_is_paused && this._stopPlaybackHeartbeatInterval()
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
						e.viewErrored = !0
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
					}(r(1)),
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
					}(r(1)),
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
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(1)),
					i = function() {
						this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", (function() {
							this._cleanupRebufferTracker(null, {
								viewer_time: Date.now()
							})
						}))
					};
				i.prototype._checkIfRebuffering = function(e, t) {
					if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t);
					else {
						if (null === this._lastCheckedTime) return this._prepareRebufferTrackerState(t.viewer_time), void this._updateRebufferMetrics();
						if (this._lastPlayheadTime === this.data.player_playhead_time) {
							var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
							r >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, a.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(r), this.emit("rebufferstart"))), this._lastCheckedTime = t.viewer_time
						} else this._cleanupRebufferTracker(e, t, !0)
					}
				}, i.prototype._clearRebufferTrackerState = function() {
					this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
				}, i.prototype._prepareRebufferTrackerState = function(e) {
					this._lastCheckedTime = e, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
				}, i.prototype._cleanupRebufferTracker = function(e, t) {
					var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {
						viewer_time: t.viewer_time
					});
					else {
						if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
						var i = this.data.player_playhead_time - this._lastPlayheadTime,
							n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
						i > 0 && n - i > this.minimumRebufferDuration ? ((0, a.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(n - i), this.emit("rebufferstart", {
							viewer_time: this._lastPlayheadTimeUpdatedTime
						}), this.emit("rebufferend", {
							viewer_time: this._lastPlayheadTimeUpdatedTime + n - i
						})) : this._updateRebufferMetrics()
					}
					r ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
				}, i.prototype._updateRebufferMetrics = function(e) {
					e > 0 && (0, a.default)(this.data, "view_rebuffer_duration", e), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
				}, t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function() {
					this.on("viewinit", (function() {
						var e = this.data.view_id,
							t = function(t, r) {
								var a = r.viewer_time;
								"playing" === t.type && void 0 === this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(a || Date.now(), e) : "adplaying" !== t.type || void 0 !== this.data.view_time_to_first_frame && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(a || Date.now(), e)
							};
						this.one("playing", t), this.one("adplaying", t), this.one("viewend", (function() {
							this.off("playing", t), this.off("adplaying", t)
						}))
					}))
				};
				a.prototype.calculateTimeToFirstFrame = function(e, t) {
					t === this.data.view_id && (this._updateWatchTime(null, {
						viewer_time: e
					}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START))
				}, t.default = a
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
				}(r(1))
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
						(0, n.default)(this.data, t), this._lastSeekingTime = Date.now(), !1 === this.isSeeking && (this.isSeeking = !0, this.send("seeking"))
					})), this.on("seeked", (function() {
						this.isSeeking = !1;
						var e = this._lastSeekingTime || Date.now(),
							t = Date.now() - e;
						(0, i.default)(this.data, "view_seek_count", 1), (0, i.default)(this.data, "view_seek_duration", t);
						var r = this.data.view_max_seek_time || 0;
						this.data.view_max_seek_time = Math.max(r, t)
					})), this.on("viewend", (function() {
						this.isSeeking = !1
					}))
				};
				var i = a(r(1)),
					n = a(r(0))
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
					n = a(r(1)),
					o = r(4),
					s = a(r(0)),
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
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this,
						t = void 0,
						r = void 0,
						i = function() {
							t && ((0, a.default)(e.data, "view_waiting_rebuffer_duration", Date.now() - t), t = !1, window.clearInterval(r))
						},
						n = !1,
						o = function() {
							n = !1, i()
						};
					this.on("waiting", (function() {
						n && ((0, a.default)(e.data, "view_waiting_rebuffer_count", 1), t = Date.now(), r = window.setInterval((function() {
							if (t) {
								var r = Date.now();
								(0, a.default)(e.data, "view_waiting_rebuffer_duration", r - t), t = r
							}
						}), 250))
					})), this.on("playing", (function() {
						i(), n = !0
					})), this.on("pause", o), this.on("seeking", o)
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(1))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this;
					this.one("playbackheartbeat", i), this.on("playbackheartbeatend", (function() {
						e.off("before*", n), e.one("playbackheartbeat", i)
					}))
				};
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					i = function() {
						this.lastWallClockTime = Date.now(), this.on("before*", n)
					},
					n = function(e) {
						var t = Date.now(),
							r = this.lastWallClockTime;
						this.lastWallClockTime = t, t - r > 3e4 && (this.emit("devicesleep", {
							viewer_time: r
						}), (0, a.default)(this.data, {
							viewer_time: r
						}), this.send("devicesleep"), this.emit("devicewake", {
							viewer_time: t
						}), (0, a.default)(this.data, {
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
					n = r(39),
					o = a(r(3)),
					s = a(r(43)),
					u = a(r(9)),
					l = a(r(15)),
					d = a(r(44)),
					c = a(r(46)),
					f = a(r(0)),
					p = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id"],
					h = ["viewstart", "error", "ended", "viewend"],
					_ = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						this.mux = e, this.envKey = t, this.eventQueue = new d.default((0, s.default)(t, r.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = r.sampleRate, this.disableCookies = r.disableCookies, this.respectDoNotTrack = r.respectDoNotTrack, this.pageLevelData = {
							mux_api_version: this.mux.API_VERSION,
							mux_embed_version: this.mux.VERSION,
							page_url: window.location.href,
							viewer_application_name: c.default.name,
							viewer_application_version: c.default.version,
							viewer_application_engine: c.default.layout,
							viewer_device_name: c.default.product,
							viewer_device_category: "",
							viewer_device_manufacturer: c.default.manufacturer,
							viewer_os_family: c.default.os && c.default.os.family,
							viewer_os_architecture: c.default.os && c.default.os.architecture,
							viewer_os_version: c.default.os && c.default.os.version
						}, this.viewerData = this.disableCookies ? {} : (0, n.getAndUpdateViewerData)()
					};
				_.prototype.send = function(e, t) {
					if (e) {
						if (this.respectDoNotTrack && (0, u.default)()) return o.default.info("Not sending `" + e + "` because Do Not Track is enabled in your browser");
						if (!t || "object" !== (void 0 === t ? "undefined" : i(t))) return o.default.error("A data object was expected in send() but was not provided");
						var r = this.disableCookies ? {} : (0, n.getAndUpdateSessionData)(),
							a = {};
						(0, f.default)(a, this.pageLevelData), (0, f.default)(a, t), (0, f.default)(a, r), (0, f.default)(a, this.viewerData), a.event = e, a.env_key = this.envKey, a.user_id && (a.viewer_user_id = a.user_id, delete a.user_id);
						var s = a.mux_sample_number >= this.sampleRate,
							d = this._deduplicateBeaconData(e, a),
							c = (0, l.default)(d);
						if (this.lastEventTime = Date.now(), s) return o.default.info("Not sending event due to sample rate restriction", e, a, c);
						if (!this.envKey) return o.default.info("Not sending event due to missing environment key", e, a, c);
						if (!this.rateLimited)
							if (o.default.info("Sending event", e, a, c), this.rateLimited = !this.eventQueue.queueEvent(e, c), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
							else if (h.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return a.event = "eventrateexceeded", c = (0, l.default)(a), this.eventQueue.queueEvent(a.event, c), o.default.error("Beaconing disabled due to rate limit.")
					}
				}, _.prototype.destroy = function() {
					this.eventQueue.destroy(!1)
				};
				var v = function(e, t, r, a) {
					return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === (void 0 === r ? "undefined" : i(r)) && "object" === (void 0 === a ? "undefined" : i(a)) && Object.keys(r || {}).length === Object.keys(a || {}).length)
				};
				_.prototype._deduplicateBeaconData = function(e, t) {
					var r = this,
						a = {},
						i = t.view_id;
					if (!i || "viewstart" === e || "viewend" === e || !this.previousBeaconData || Date.now() - this.lastEventTime >= 6e5) a = (0, f.default)({}, t), i && (this.previousBeaconData = a), i && "viewend" === e && (this.previousBeaconData = null);
					else {
						var n = 0 === e.indexOf("request");
						Object.keys(t).forEach((function(e) {
							var i = t[e];
							(i !== r.previousBeaconData[e] || p.indexOf(e) > -1 || v(n, e, i, r.previousBeaconData[e])) && (a[e] = i, r.previousBeaconData[e] = i)
						}))
					}
					return a
				}, t.default = _
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
				var i = a(r(12)),
					n = a(r(42)),
					o = r(6),
					s = function() {
						var e = void 0;
						try {
							e = i.default.parse(n.default.get("muxData") || "")
						} catch (t) {
							e = {}
						}
						return e
					},
					u = function(e) {
						n.default.set("muxData", i.default.stringify(e), {
							expires: 7300
						})
					};
				t.getAndUpdateViewerData = function() {
					var e = s();
					return e.mux_viewer_id = e.mux_viewer_id || (0, o.generateUUID)(), e.msn = e.msn || Math.random(), u(e), {
						mux_viewer_id: e.mux_viewer_id,
						mux_sample_number: e.msn
					}
				}, t.getAndUpdateSessionData = function() {
					var e = s(),
						t = Date.now();
					return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = (0, o.generateUUID)(), e.sst = t), e.sex = t + 15e5, u(e), {
						session_id: e.sid,
						session_start: e.sst,
						session_expires: e.sex
					}
				}
			}, function(e, t, r) {
				"use strict";
				var a = r(13),
					i = r(14),
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
					u = function e(t, r, i, n, o, u, l, d, c, f, p, h) {
						var _ = t;
						if ("function" == typeof l) _ = l(r, _);
						else if (_ instanceof Date) _ = f(_);
						else if (null === _) {
							if (n) return u && !h ? u(r, s.encoder) : r;
							_ = ""
						}
						if ("string" == typeof _ || "number" == typeof _ || "boolean" == typeof _ || a.isBuffer(_)) return u ? [p(h ? r : u(r, s.encoder)) + "=" + p(u(_, s.encoder))] : [p(r) + "=" + p(String(_))];
						var v, m = [];
						if (void 0 === _) return m;
						if (Array.isArray(l)) v = l;
						else {
							var y = Object.keys(_);
							v = d ? y.sort(d) : y
						}
						for (var b = 0; b < v.length; ++b) {
							var g = v[b];
							o && null === _[g] || (m = Array.isArray(_) ? m.concat(e(_[g], i(r, g), i, n, o, u, l, d, c, f, p, h)) : m.concat(e(_[g], r + (c ? "." + g : "[" + g + "]"), i, n, o, u, l, d, c, f, p, h)))
						}
						return m
					};
				e.exports = function(e, t) {
					var r = e,
						o = t ? a.assign({}, t) : {};
					if (null !== o.encoder && void 0 !== o.encoder && "function" != typeof o.encoder) throw new TypeError("Encoder has to be a function.");
					var l = void 0 === o.delimiter ? s.delimiter : o.delimiter,
						d = "boolean" == typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
						c = "boolean" == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
						f = "boolean" == typeof o.encode ? o.encode : s.encode,
						p = "function" == typeof o.encoder ? o.encoder : s.encoder,
						h = "function" == typeof o.sort ? o.sort : null,
						_ = void 0 !== o.allowDots && o.allowDots,
						v = "function" == typeof o.serializeDate ? o.serializeDate : s.serializeDate,
						m = "boolean" == typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
					if (void 0 === o.format) o.format = i.default;
					else if (!Object.prototype.hasOwnProperty.call(i.formatters, o.format)) throw new TypeError("Unknown format option provided.");
					var y, b, g = i.formatters[o.format];
					"function" == typeof o.filter ? r = (b = o.filter)("", r) : Array.isArray(o.filter) && (y = b = o.filter);
					var w, x = [];
					if ("object" != typeof r || null === r) return "";
					w = o.arrayFormat in n ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
					var S = n[w];
					y || (y = Object.keys(r)), h && y.sort(h);
					for (var T = 0; T < y.length; ++T) {
						var O = y[T];
						c && null === r[O] || (x = x.concat(u(r[O], O, S, d, c, f ? p : null, b, h, _, v, g, m)))
					}
					var E = x.join(l),
						k = !0 === o.addQueryPrefix ? "?" : "";
					return E.length > 0 ? k + E : ""
				}
			}, function(e, t, r) {
				"use strict";
				var a = r(13),
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
								p = -1 === f ? c.indexOf("=") : f + 1; - 1 === p ? (l = t.decoder(c, n.decoder), d = t.strictNullHandling ? null : "") : (l = t.decoder(c.slice(0, p), n.decoder), d = t.decoder(c.slice(p + 1), n.decoder)), i.call(r, l) ? r[l] = [].concat(r[l]).concat(d) : r[l] = d
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
										var p = c[0].replace(l, decodeURIComponent);
										if (f = r.read ? r.read(f, p) : r(f, p) || f.replace(l, decodeURIComponent), this.json) try {
											f = JSON.parse(f)
										} catch (t) {}
										if (t === p) {
											o = f;
											break
										}
										t || (o[p] = f)
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

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = a(r(2)),
					n = a(r(3)),
					o = a(r(45)),
					s = a(r(0)),
					u = a(r(15)),
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
				var i = a(r(12)),
					n = a(r(2)),
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
						var p = {
								function: !0,
								object: !0
							},
							h = p[typeof window] && window || this,
							_ = h,
							v = p[typeof t] && t,
							m = p[typeof e] && e && !e.nodeType && e,
							y = v && m && "object" == typeof a && a;
						!y || y.global !== y && y.window !== y && y.self !== y || (h = y);
						var b = Math.pow(2, 53) - 1,
							g = /\bOpera/,
							w = this,
							x = Object.prototype,
							S = x.hasOwnProperty,
							T = x.toString,
							O = function e(t) {
								function r(e) {
									return c(e, (function(e, r) {
										var a = r.pattern || d(r);
										return !e && (e = RegExp("\\b" + a + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + a + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + a + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(r.label && !RegExp(a, "i").test(r.label) ? r.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), r = r.label || r, e = o(e[0].replace(RegExp(a, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
									}))
								}
								var a = h,
									i = t && "object" == typeof t && "String" != u(t);
								i && (a = t, t = null);
								var n = a.navigator || {},
									p = n.userAgent || "";
								t || (t = p);
								var v, m, y = i || w == _,
									b = i ? !!n.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(T.toString()),
									x = i ? "Object" : "ScriptBridgingProxyObject",
									S = i ? "Object" : "Environment",
									O = i && a.java ? "JavaPackage" : u(a.java),
									E = i ? "Object" : "RuntimeObject",
									k = /\bJava/.test(O) && a.java,
									M = k && u(a.environment) == S,
									P = k ? "a" : "α",
									D = k ? "b" : "β",
									A = a.document || {},
									q = a.operamini || a.opera,
									R = g.test(R = i && q ? q["[[Class]]"] : u(q)) ? R : q = null,
									j = t,
									I = [],
									L = null,
									C = t == p,
									N = C && q && "function" == typeof q.version && q.version(),
									H = c([{
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
									G = c(["Windows Phone", "Android", "CentOS", {
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
								if (H && (H = [H]), W && !F && (F = r([W])), (v = /\bGoogle TV\b/.exec(F)) && (F = v[0]), /\bSimulator\b/i.test(t) && (F = (F ? F + " " : "") + "Simulator"), "Opera Mini" == B && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == B && /\blike iPhone OS\b/.test(t) ? (W = (v = e(t.replace(/like iPhone OS/, ""))).manufacturer, F = v.product) : /^iP/.test(F) ? (B || (B = "Safari"), G = "iOS" + ((v = / OS ([\d_]+)/i.exec(t)) ? " " + v[1].replace(/_/g, ".") : "")) : "Konqueror" != B || /buntu/i.test(G) ? W && "Google" != W && (/Chrome/.test(B) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(G) && /^Chrome/.test(B) && /\bVersion\//i.test(t) ? (B = "Android Browser", G = /\bAndroid\b/.test(G) ? G : "Android") : "Silk" == B ? (/\bMobi/i.test(t) || (G = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "PaleMoon" == B && (v = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + v[1]) : "Firefox" == B && (v = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (G || (G = "Firefox OS"), F || (F = v[1])) : !B || (v = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !F && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(v + "/") + 8)) && (B = null), (v = F || W || G) && (F || W || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G) ? G : v) + " Browser")) : "Electron" == B && (v = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + v) : G = "Kubuntu", N || (N = function(e) {
										return c(e, (function(e, r) {
											return e || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
										}))
									}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(B), "(?:Firefox|Minefield|NetFront)"])), (v = ("iCab" == H && parseFloat(N) > 3 ? "WebKit" : /\bOpera\b/.test(B) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(H) && "WebKit" || !H && /\bMSIE\b/i.test(t) && ("Mac OS" == G ? "Tasman" : "Trident") || "WebKit" == H && /\bPlayStation\b(?! Vita\b)/i.test(B) && "NetFront") && (H = [v]), "IE" == B && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (B += " Mobile", G = "Windows Phone " + (/\+$/.test(v) ? v : v + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (B = "IE Mobile", G = "Windows Phone 8.x", I.unshift("desktop mode"), N || (N = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != B && "Trident" == H && (v = /\brv:([\d.]+)/.exec(t)) && (B && I.push("identifying as " + B + (N ? " " + N : "")), B = "IE", N = v[1]), C) {
									if (l(a, "global"))
										if (k && (j = (v = k.lang.System).getProperty("os.arch"), G = G || v.getProperty("os.name") + " " + v.getProperty("os.version")), y && l(a, "system") && (v = [a.system])[0]) {
											G || (G = v[0].os || null);
											try {
												v[1] = a.require("ringo/engine").version, N = v[1].join("."), B = "RingoJS"
											} catch (t) {
												v[0].global.system == a.system && (B = "Narwhal")
											}
										} else "object" == typeof a.process && !a.process.browser && (v = a.process) ? "object" == typeof v.versions ? "string" == typeof v.versions.electron ? (I.push("Node " + v.versions.node), B = "Electron", N = v.versions.electron) : "string" == typeof v.versions.nw && (I.push("Chromium " + N, "Node " + v.versions.node), B = "NW.js", N = v.versions.nw) : (B = "Node.js", j = v.arch, G = v.platform, N = (N = /[\d.]+/.exec(v.version)) ? N[0] : "unknown") : M && (B = "Rhino");
									else u(v = a.runtime) == x ? (B = "Adobe AIR", G = v.flash.system.Capabilities.os) : u(v = a.phantom) == E ? (B = "PhantomJS", N = (v = v.version || null) && v.major + "." + v.minor + "." + v.patch) : "number" == typeof A.documentMode && (v = /\bTrident\/(\d+)/i.exec(t)) ? (N = [N, A.documentMode], (v = +v[1] + 4) != N[1] && (I.push("IE " + N[1] + " mode"), H && (H[1] = ""), N[1] = v), N = "IE" == B ? String(N[1].toFixed(1)) : N[0]) : "number" == typeof A.documentMode && /^(?:Chrome|Firefox)\b/.test(B) && (I.push("masking as " + B + " " + N), B = "IE", N = "11.0", H = ["Trident"], G = "Windows");
									G = G && o(G)
								}
								if (N && (v = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (C && n.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (L = /b/i.test(v) ? "beta" : "alpha", N = N.replace(RegExp(v + "\\+?$"), "") + ("beta" == L ? D : P) + (/\d+\+?/.exec(v) || "")), "Fennec" == B || "Firefox" == B && /\b(?:Android|Firefox OS)\b/.test(G)) B = "Firefox Mobile";
								else if ("Maxthon" == B && N) N = N.replace(/\.[\d.]+/, ".x");
								else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (G = null), "Xbox 360" == F && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
								else if (!/^(?:Chrome|IE|Opera)$/.test(B) && (!B || F || /Browser|Mobi/.test(B)) || "Windows CE" != G && !/Mobi/i.test(t))
									if ("IE" == B && C) try {
										null === a.external && I.unshift("platform preview")
									} catch (t) {
										I.unshift("embedded")
									} else(/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(t)) && (v = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || N) ? (G = ((v = [v, /BB10/.test(t)])[1] ? (F = null, W = "BlackBerry") : "Device Software") + " " + v[0], N = null) : this != s && "Wii" != F && (C && q || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == B && /\bOS X (?:\d+\.){2,}/.test(G) || "IE" == B && (G && !/^Win/.test(G) && N > 5.5 || /\bWindows XP\b/.test(G) && N > 8 || 8 == N && !/\bTrident\b/.test(t))) && !g.test(v = e.call(s, t.replace(g, "") + ";")) && v.name && (v = "ing as " + v.name + ((v = v.version) ? " " + v : ""), g.test(B) ? (/\bIE\b/.test(v) && "Mac OS" == G && (G = null), v = "identify" + v) : (v = "mask" + v, B = R ? o(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(v) && (G = null), C || (N = null)), H = ["Presto"], I.push(v));
									else B += " Mobile";
								(v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (v = [parseFloat(v.replace(/\.(\d)$/, ".0$1")), v], "Safari" == B && "+" == v[1].slice(-1) ? (B = "WebKit Nightly", L = "alpha", N = v[1].slice(0, -1)) : N != v[1] && N != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (N = null), v[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == v[0] && 537.36 == v[2] && parseFloat(v[1]) >= 28 && "WebKit" == H && (H = ["Blink"]), C && (b || v[1]) ? (H && (H[1] = "like Chrome"), v = v[1] || ((v = v[0]) < 530 ? 1 : v < 532 ? 2 : v < 532.05 ? 3 : v < 533 ? 4 : v < 534.03 ? 5 : v < 534.07 ? 6 : v < 534.1 ? 7 : v < 534.13 ? 8 : v < 534.16 ? 9 : v < 534.24 ? 10 : v < 534.3 ? 11 : v < 535.01 ? 12 : v < 535.02 ? "13+" : v < 535.07 ? 15 : v < 535.11 ? 16 : v < 535.19 ? 17 : v < 536.05 ? 18 : v < 536.1 ? 19 : v < 537.01 ? 20 : v < 537.11 ? "21+" : v < 537.13 ? 23 : v < 537.18 ? 24 : v < 537.24 ? 25 : v < 537.36 ? 26 : "Blink" != H ? "27" : "28")) : (H && (H[1] = "like Safari"), v = (v = v[0]) < 400 ? 1 : v < 500 ? 2 : v < 526 ? 3 : v < 533 ? 4 : v < 534 ? "4+" : v < 535 ? 5 : v < 537 ? 6 : v < 538 ? 7 : v < 601 ? 8 : "8"), H && (H[1] += " " + (v += "number" == typeof v ? ".x" : /[.+]/.test(v) ? "" : "+")), "Safari" == B && (!N || parseInt(N) > 45) && (N = v)), "Opera" == B && (v = /\bzbov|zvav$/.exec(G)) ? (B += " ", I.unshift("desktop mode"), "zvav" == v ? (B += "Mini", N = null) : B += "Mobile", G = G.replace(RegExp(" *" + v + "$"), "")) : "Safari" == B && /\bChrome\b/.exec(H && H[1]) && (I.unshift("desktop mode"), B = "Chrome Mobile", N = null, /\bOS X\b/.test(G) ? (W = "Apple", G = "iOS 4.3+") : G = null), N && 0 == N.indexOf(v = /[\d.]+$/.exec(G)) && t.indexOf("/" + v + "-") > -1 && (G = f(G.replace(v, ""))), H && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || "Safari" != B && /^iOS/.test(G) && /\bSafari\b/.test(H[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(B) && H[1]) && (v = H[H.length - 1]) && I.push(v), I.length && (I = ["(" + I.join("; ") + ")"]), W && F && F.indexOf(W) < 0 && I.push("on " + W), F && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + F), G && (v = / ([\d.+]+)$/.exec(G), m = v && "/" == G.charAt(G.length - v[0].length - 1), G = {
									architecture: 32,
									family: v && !m ? G.replace(v[0], "") : G,
									version: v ? v[1] : null,
									toString: function() {
										var e = this.version;
										return this.family + (e && !m ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
									}
								}), (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(j)) && !/\bi686\b/i.test(j) ? (G && (G.architecture = 64, G.family = G.family.replace(RegExp(" *" + v), "")), B && (/\bWOW64\b/i.test(t) || C && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : G && /^OS X/.test(G.family) && "Chrome" == B && parseFloat(N) >= 39 && (G.architecture = 64), t || (t = null);
								var U = {};
								return U.description = t, U.layout = H && H[0], U.manufacturer = W, U.name = B, U.prerelease = L, U.product = F, U.ua = t, U.version = B && N, U.os = G || {
									architecture: null,
									family: null,
									version: null,
									toString: function() {
										return "null"
									}
								}, U.parse = e, U.toString = function() {
									return this.description || ""
								}, U.version && I.unshift(N), U.name && I.unshift(B), G && B && (G != String(G).split(" ")[0] || G != B.split(" ")[0] && !F) && I.push(F ? "(" + G + ")" : "on " + G), I.length && (U.description = I.join(" ")), U
							}();
						h.platform = O, void 0 !== (i = function() {
							return O
						}.call(t, r, t, e)) && (e.exports = i)
					}).call(this)
				}).call(t, r(11)(e), r(5))
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
						var c = u - s,
							f = l - u;
						if (c > 0 && f > 0 && d > 0) {
							var p = d / f * 8e3;
							i++, e += c, t += d, r += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, p), this.data.view_average_request_throughput = t / r * 8e3, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, c), this.data.view_average_request_latency = e / i, this.data.view_request_count = a
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
				var a = function(e, t) {
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
					var u = (0, n.findMediaElement)(t),
						l = a(u, 3),
						d = l[0],
						c = l[1],
						f = l[2],
						p = e.log,
						h = e.utils.getComputedStyle,
						_ = e.utils.secondsToMs;
					return d ? "video" !== f && "audio" !== f ? p.error("The element of `" + c + "` was not a media element.") : ((r = r || {}).data = (0, i.default)({
						player_software: "HTML5 Video Element",
						player_software_version: "No Versions",
						player_mux_plugin_name: "VideoElementMonitor",
						player_mux_plugin_version: "2.6.0"
					}, r.data), r.getPlayheadTime = function() {
						return _(d.currentTime)
					}, r.getStateData = function() {
						return {
							player_is_paused: d.paused,
							player_playhead_time: _(d.currentTime),
							player_width: parseInt(h(d, "width")),
							player_height: parseInt(h(d, "height")),
							player_autoplay_on: d.autoplay,
							player_preload_on: d.preload,
							video_poster_url: d.poster,
							video_source_url: d.currentSrc,
							video_source_duration: _(d.duration),
							video_source_height: d.videoHeight,
							video_source_width: d.videoWidth
						}
					}, d.mux = d.mux || {}, d.mux.destroy = function() {
						Object.keys(d.mux.listeners).forEach((function(e) {
							d.removeEventListener(e, d.mux.listeners[e], !1)
						})), delete d.mux.listeners, e.emit(c, "destroy")
					}, d.mux.swapElement = function(t) {
						var r = (0, n.findMediaElement)(t),
							o = a(r, 3),
							s = o[0],
							u = o[1],
							l = o[2];
						return s ? "video" !== l && "audio" !== l ? e.log.error("The element of `" + u + "` was not a media element.") : (s.muxId = d.muxId, delete d.muxId, s.mux = s.mux || {}, s.mux.listeners = (0, i.default)({}, d.mux.listeners), delete d.mux.listeners, Object.keys(s.mux.listeners).forEach((function(e) {
							d.removeEventListener(e, s.mux.listeners[e], !1), s.addEventListener(e, s.mux.listeners[e], !1)
						})), s.mux.swapElement = d.mux.swapElement, s.mux.destroy = d.mux.destroy, delete d.mux, void(d = s)) : e.log.error("No element was found with the `" + u + "` query selector.")
					}, d.mux.addHLSJS = function(t) {
						e.addHLSJS(c, t)
					}, d.mux.addDashJS = function(t) {
						e.addDashJS(c, t)
					}, d.mux.removeHLSJS = function() {
						e.removeHLSJS(c)
					}, d.mux.removeDashJS = function() {
						e.removeDashJS(c)
					}, e.init(c, r), e.emit(c, "playerready"), d.paused || (e.emit(c, "play"), d.readyState > 2 && e.emit(c, "playing")), d.mux.listeners = {}, void o.forEach((function(t) {
						d.mux.listeners[t] = function() {
							var r = {};
							"error" === t && (r.player_error_code = d.error && d.error.code, r.player_error_message = d.error && s[d.error.code]), e.emit(c, t, r)
						}, d.addEventListener(t, d.mux.listeners[t], !1)
					}))) : p.error("No element was found with the `" + c + "` query selector.")
				};
				var i = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					n = r(8),
					o = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
					s = {
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
				var i = a(r(50)),
					n = a(r(1)),
					o = a(r(51)),
					s = a(r(52)),
					u = a(r(0)),
					l = a(r(7)),
					d = r(4),
					c = {};
				c.safeCall = i.default, c.safeIncrement = n.default, c.getComputedStyle = o.default, c.secondsToMs = s.default, c.assign = u.default, c.headersStringToObject = l.default, c.extractHostnameAndDomain = d.extractHostnameAndDomain, t.default = c
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
				}(r(3))
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
				}(r(10))
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
//# sourceMappingURL=vendors~MuxEmbed.af80344a327be37c29ed.js.map