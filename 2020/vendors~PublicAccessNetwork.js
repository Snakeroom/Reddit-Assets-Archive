// https://www.redditstatic.com/desktop2x/vendors~PublicAccessNetwork.813a715a14171c9ead66.js
// Retrieved at 1/18/2020, 2:30:21 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PublicAccessNetwork"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var i;
			i = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function i(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var a, n = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						l = !o && /nexus\s*[0-9]+/i.test(t),
						u = /CrOS/.test(t),
						d = /silk/i.test(t),
						c = /sailfish/i.test(t),
						f = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						g = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						m = !n && !d && /macintosh/i.test(t),
						v = !s && !c && !f && !h && /linux/i.test(t),
						y = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = r(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						b = !_ && /[^-]mobi/i.test(t),
						T = /xbox/i.test(t);
					/opera/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: E || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? a = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? a = {
						name: "Opera Coast",
						coast: e,
						version: E || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? a = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? a = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? a = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? a = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? a = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? a = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? a = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : p ? (a = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, y ? (a.msedge = e, a.version = y) : (a.msie = e, a.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? a = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : u ? a = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? a = {
						name: "Microsoft Edge",
						msedge: e,
						version: y
					} : /vivaldi/i.test(t) ? a = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : c ? a = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? a = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (a = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (a.firefoxos = e, a.osname = "Firefox OS")) : d ? a = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? a = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? a = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? a = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: E || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (a = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (a.touchpad = e)) : /bada/i.test(t) ? a = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : f ? a = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? a = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? a = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? a = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? a = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (a = {
						name: "Safari",
						safari: e
					}, E && (a.version = E)) : n ? (a = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, E && (a.version = E)) : a = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: r(/^(.*)\/(.*) /),
						version: i(/^(.*)\/(.*) /)
					}, !a.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (a.name = a.name || "Blink", a.blink = e) : (a.name = a.name || "Webkit", a.webkit = e), !a.version && E && (a.version = E)) : !a.opera && /gecko\//i.test(t) && (a.name = a.name || "Gecko", a.gecko = e, a.version = a.version || r(/gecko\/(\d+(\.\d+)?)/i)), a.windowsphone || !s && !a.silk ? !a.windowsphone && n ? (a[n] = e, a.ios = e, a.osname = "iOS") : m ? (a.mac = e, a.osname = "macOS") : T ? (a.xbox = e, a.osname = "Xbox") : g ? (a.windows = e, a.osname = "Windows") : v && (a.linux = e, a.osname = "Linux") : (a.android = e, a.osname = "Android");
					var S = "";
					a.windows ? S = function(e) {
						switch (e) {
							case "NT":
								return "NT";
							case "XP":
								return "XP";
							case "NT 5.0":
								return "2000";
							case "NT 5.1":
								return "XP";
							case "NT 5.2":
								return "2003";
							case "NT 6.0":
								return "Vista";
							case "NT 6.1":
								return "7";
							case "NT 6.2":
								return "8";
							case "NT 6.3":
								return "8.1";
							case "NT 10.0":
								return "10";
							default:
								return
						}
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : a.windowsphone ? S = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a.mac ? S = (S = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? S = (S = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? S = r(/android[ \/-](\d+(\.\d+)*)/i) : a.webos ? S = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : a.blackberry ? S = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : a.bada ? S = r(/bada\/(\d+(\.\d+)*)/i) : a.tizen && (S = r(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (a.osversion = S);
					var A = !a.windows && S.split(".")[0];
					return _ || l || "ipad" == n || s && (3 == A || A >= 4 && !b) || a.silk ? a.tablet = e : (b || "iphone" == n || "ipod" == n || s || o || a.blackberry || a.webos || a.bada) && (a.mobile = e), a.msedge || a.msie && a.version >= 10 || a.yandexbrowser && a.version >= 15 || a.vivaldi && a.version >= 1 || a.chrome && a.version >= 20 || a.samsungBrowser && a.version >= 4 || a.firefox && a.version >= 20 || a.safari && a.version >= 6 || a.opera && a.version >= 10 || a.ios && a.osversion && a.osversion.split(".")[0] >= 6 || a.blackberry && a.version >= 10.1 || a.chromium && a.version >= 20 ? a.a = e : a.msie && a.version < 10 || a.chrome && a.version < 20 || a.firefox && a.version < 20 || a.safari && a.version < 6 || a.opera && a.version < 10 || a.ios && a.osversion && a.osversion.split(".")[0] < 6 || a.chromium && a.version < 20 ? a.c = e : a.x = e, a
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function i(e) {
					return e.split(".").length
				}

				function a(e, t) {
					var r, i = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) i.push(t(e[r]));
					return i
				}

				function n(e) {
					for (var t = Math.max(i(e[0]), i(e[1])), r = a(e, (function(e) {
							var r = t - i(e);
							return a((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, i, a) {
					var s = r;
					"string" == typeof i && (a = i, i = void 0), void 0 === i && (i = !1), a && (s = t(a));
					var o = "" + s.version;
					for (var l in e)
						if (e.hasOwnProperty(l) && s[l]) {
							if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
							return n([o, e[l]]) < 0
						} return i
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var i = e[t];
						if ("string" == typeof i && i in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = s, r.compareVersions = n, r.check = function(e, t, r) {
					return !s(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = i() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", i)
		},
		"./node_modules/hls.js/dist/hls.js": function(e, t, r) {
			var i;
			"undefined" != typeof window && (i = function() {
				return function(e) {
					var t = {};

					function r(i) {
						if (t[i]) return t[i].exports;
						var a = t[i] = {
							i,
							l: !1,
							exports: {}
						};
						return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
					}
					return r.m = e, r.c = t, r.d = function(e, t, i) {
						r.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: i
						})
					}, r.r = function(e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, r.t = function(e, t) {
						if (1 & t && (e = r(e)), 8 & t) return e;
						if (4 & t && "object" == typeof e && e && e.__esModule) return e;
						var i = Object.create(null);
						if (r.r(i), Object.defineProperty(i, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
							for (var a in e) r.d(i, a, function(t) {
								return e[t]
							}.bind(null, a));
						return i
					}, r.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return r.d(t, "a", t), t
					}, r.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, r.p = "/dist/", r(r.s = "./src/hls.js")
				}({
					"./node_modules/eventemitter3/index.js": function(e, t, r) {
						"use strict";
						var i = Object.prototype.hasOwnProperty,
							a = "~";

						function n() {}

						function s(e, t, r) {
							this.fn = e, this.context = t, this.once = r || !1
						}

						function o(e, t, r, i, n) {
							if ("function" != typeof r) throw new TypeError("The listener must be a function");
							var o = new s(r, i || e, n),
								l = a ? a + t : t;
							return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
						}

						function l(e, t) {
							0 == --e._eventsCount ? e._events = new n : delete e._events[t]
						}

						function u() {
							this._events = new n, this._eventsCount = 0
						}
						Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), u.prototype.eventNames = function() {
							var e, t, r = [];
							if (0 === this._eventsCount) return r;
							for (t in e = this._events) i.call(e, t) && r.push(a ? t.slice(1) : t);
							return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
						}, u.prototype.listeners = function(e) {
							var t = a ? a + e : e,
								r = this._events[t];
							if (!r) return [];
							if (r.fn) return [r.fn];
							for (var i = 0, n = r.length, s = new Array(n); i < n; i++) s[i] = r[i].fn;
							return s
						}, u.prototype.listenerCount = function(e) {
							var t = a ? a + e : e,
								r = this._events[t];
							return r ? r.fn ? 1 : r.length : 0
						}, u.prototype.emit = function(e, t, r, i, n, s) {
							var o = a ? a + e : e;
							if (!this._events[o]) return !1;
							var l, u, d = this._events[o],
								c = arguments.length;
							if (d.fn) {
								switch (d.once && this.removeListener(e, d.fn, void 0, !0), c) {
									case 1:
										return d.fn.call(d.context), !0;
									case 2:
										return d.fn.call(d.context, t), !0;
									case 3:
										return d.fn.call(d.context, t, r), !0;
									case 4:
										return d.fn.call(d.context, t, r, i), !0;
									case 5:
										return d.fn.call(d.context, t, r, i, n), !0;
									case 6:
										return d.fn.call(d.context, t, r, i, n, s), !0
								}
								for (u = 1, l = new Array(c - 1); u < c; u++) l[u - 1] = arguments[u];
								d.fn.apply(d.context, l)
							} else {
								var f, h = d.length;
								for (u = 0; u < h; u++) switch (d[u].once && this.removeListener(e, d[u].fn, void 0, !0), c) {
									case 1:
										d[u].fn.call(d[u].context);
										break;
									case 2:
										d[u].fn.call(d[u].context, t);
										break;
									case 3:
										d[u].fn.call(d[u].context, t, r);
										break;
									case 4:
										d[u].fn.call(d[u].context, t, r, i);
										break;
									default:
										if (!l)
											for (f = 1, l = new Array(c - 1); f < c; f++) l[f - 1] = arguments[f];
										d[u].fn.apply(d[u].context, l)
								}
							}
							return !0
						}, u.prototype.on = function(e, t, r) {
							return o(this, e, t, r, !1)
						}, u.prototype.once = function(e, t, r) {
							return o(this, e, t, r, !0)
						}, u.prototype.removeListener = function(e, t, r, i) {
							var n = a ? a + e : e;
							if (!this._events[n]) return this;
							if (!t) return l(this, n), this;
							var s = this._events[n];
							if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || l(this, n);
							else {
								for (var o = 0, u = [], d = s.length; o < d; o++)(s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
								u.length ? this._events[n] = 1 === u.length ? u[0] : u : l(this, n)
							}
							return this
						}, u.prototype.removeAllListeners = function(e) {
							var t;
							return e ? (t = a ? a + e : e, this._events[t] && l(this, t)) : (this._events = new n, this._eventsCount = 0), this
						}, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, e.exports = u
					},
					"./node_modules/node-libs-browser/node_modules/events/events.js": function(e, t) {
						function r() {
							this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
						}

						function i(e) {
							return "function" == typeof e
						}

						function a(e) {
							return "object" == typeof e && null !== e
						}

						function n(e) {
							return void 0 === e
						}
						e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
							if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
							return this._maxListeners = e, this
						}, r.prototype.emit = function(e) {
							var t, r, s, o, l, u;
							if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
								if ((t = arguments[1]) instanceof Error) throw t;
								var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");
								throw d.context = t, d
							}
							if (n(r = this._events[e])) return !1;
							if (i(r)) switch (arguments.length) {
								case 1:
									r.call(this);
									break;
								case 2:
									r.call(this, arguments[1]);
									break;
								case 3:
									r.call(this, arguments[1], arguments[2]);
									break;
								default:
									o = Array.prototype.slice.call(arguments, 1), r.apply(this, o)
							} else if (a(r))
								for (o = Array.prototype.slice.call(arguments, 1), s = (u = r.slice()).length, l = 0; l < s; l++) u[l].apply(this, o);
							return !0
						}, r.prototype.addListener = function(e, t) {
							var s;
							if (!i(t)) throw TypeError("listener must be a function");
							return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (s = n(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
						}, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
							if (!i(t)) throw TypeError("listener must be a function");
							var r = !1;

							function a() {
								this.removeListener(e, a), r || (r = !0, t.apply(this, arguments))
							}
							return a.listener = t, this.on(e, a), this
						}, r.prototype.removeListener = function(e, t) {
							var r, n, s, o;
							if (!i(t)) throw TypeError("listener must be a function");
							if (!this._events || !this._events[e]) return this;
							if (s = (r = this._events[e]).length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
							else if (a(r)) {
								for (o = s; o-- > 0;)
									if (r[o] === t || r[o].listener && r[o].listener === t) {
										n = o;
										break
									} if (n < 0) return this;
								1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
							}
							return this
						}, r.prototype.removeAllListeners = function(e) {
							var t, r;
							if (!this._events) return this;
							if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
							if (0 === arguments.length) {
								for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
								return this.removeAllListeners("removeListener"), this._events = {}, this
							}
							if (i(r = this._events[e])) this.removeListener(e, r);
							else if (r)
								for (; r.length;) this.removeListener(e, r[r.length - 1]);
							return delete this._events[e], this
						}, r.prototype.listeners = function(e) {
							return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
						}, r.prototype.listenerCount = function(e) {
							if (this._events) {
								var t = this._events[e];
								if (i(t)) return 1;
								if (t) return t.length
							}
							return 0
						}, r.listenerCount = function(e, t) {
							return e.listenerCount(t)
						}
					},
					"./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, r) {
						var i, a, n, s, o;
						i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, a = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, o = {
							buildAbsoluteURL: function(e, t, r) {
								if (r = r || {}, e = e.trim(), !(t = t.trim())) {
									if (!r.alwaysNormalize) return e;
									var i = o.parseURL(e);
									if (!i) throw new Error("Error trying to parse base URL.");
									return i.path = o.normalizePath(i.path), o.buildURLFromParts(i)
								}
								var n = o.parseURL(t);
								if (!n) throw new Error("Error trying to parse relative URL.");
								if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : t;
								var s = o.parseURL(e);
								if (!s) throw new Error("Error trying to parse base URL.");
								if (!s.netLoc && s.path && "/" !== s.path[0]) {
									var l = a.exec(s.path);
									s.netLoc = l[1], s.path = l[2]
								}
								s.netLoc && !s.path && (s.path = "/");
								var u = {
									scheme: s.scheme,
									netLoc: n.netLoc,
									path: null,
									params: n.params,
									query: n.query,
									fragment: n.fragment
								};
								if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0]))
									if (n.path) {
										var d = s.path,
											c = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
										u.path = o.normalizePath(c)
									} else u.path = s.path, n.params || (u.params = s.params, n.query || (u.query = s.query));
								return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path), o.buildURLFromParts(u)
							},
							parseURL: function(e) {
								var t = i.exec(e);
								return t ? {
									scheme: t[1] || "",
									netLoc: t[2] || "",
									path: t[3] || "",
									params: t[4] || "",
									query: t[5] || "",
									fragment: t[6] || ""
								} : null
							},
							normalizePath: function(e) {
								for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(s, "")).length;);
								return e.split("").reverse().join("")
							},
							buildURLFromParts: function(e) {
								return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
							}
						}, e.exports = o
					},
					"./node_modules/webworkify-webpack/index.js": function(e, t, r) {
						function i(e) {
							var t = {};

							function r(i) {
								if (t[i]) return t[i].exports;
								var a = t[i] = {
									i,
									l: !1,
									exports: {}
								};
								return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
							}
							r.m = e, r.c = t, r.i = function(e) {
								return e
							}, r.d = function(e, t, i) {
								r.o(e, t) || Object.defineProperty(e, t, {
									configurable: !1,
									enumerable: !0,
									get: i
								})
							}, r.r = function(e) {
								Object.defineProperty(e, "__esModule", {
									value: !0
								})
							}, r.n = function(e) {
								var t = e && e.__esModule ? function() {
									return e.default
								} : function() {
									return e
								};
								return r.d(t, "a", t), t
							}, r.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t)
							}, r.p = "/", r.oe = function(e) {
								throw console.error(e), e
							};
							var i = r(r.s = ENTRY_MODULE);
							return i.default || i
						}
						var a = "[\\.|\\-|\\+|\\w|/|@]+",
							n = "\\((/\\*.*?\\*/)?s?.*?(" + a + ").*?\\)";

						function s(e) {
							return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
						}

						function o(e, t, i) {
							var o = {};
							o[i] = [];
							var l = t.toString(),
								u = l.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
							if (!u) return o;
							for (var d, c = u[1], f = new RegExp("(\\\\n|\\W)" + s(c) + n, "g"); d = f.exec(l);) "dll-reference" !== d[3] && o[i].push(d[3]);
							for (f = new RegExp("\\(" + s(c) + '\\("(dll-reference\\s(' + a + '))"\\)\\)' + n, "g"); d = f.exec(l);) e[d[2]] || (o[i].push(d[1]), e[d[2]] = r(d[1]).m), o[d[2]] = o[d[2]] || [], o[d[2]].push(d[4]);
							for (var h, p = Object.keys(o), g = 0; g < p.length; g++)
								for (var m = 0; m < o[p[g]].length; m++) h = o[p[g]][m], isNaN(1 * h) || (o[p[g]][m] = 1 * o[p[g]][m]);
							return o
						}

						function l(e) {
							return Object.keys(e).reduce((function(t, r) {
								return t || e[r].length > 0
							}), !1)
						}
						e.exports = function(e, t) {
							t = t || {};
							var a = {
									main: r.m
								},
								n = t.all ? {
									main: Object.keys(a.main)
								} : function(e, t) {
									for (var r = {
											main: [t]
										}, i = {
											main: []
										}, a = {
											main: {}
										}; l(r);)
										for (var n = Object.keys(r), s = 0; s < n.length; s++) {
											var u = n[s],
												d = r[u].pop();
											if (a[u] = a[u] || {}, !a[u][d] && e[u][d]) {
												a[u][d] = !0, i[u] = i[u] || [], i[u].push(d);
												for (var c = o(e, e[u][d], u), f = Object.keys(c), h = 0; h < f.length; h++) r[f[h]] = r[f[h]] || [], r[f[h]] = r[f[h]].concat(c[f[h]])
											}
										}
									return i
								}(a, e),
								s = "";
							Object.keys(n).filter((function(e) {
								return "main" !== e
							})).forEach((function(e) {
								for (var t = 0; n[e][t];) t++;
								n[e].push(t), a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", s = s + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n[e].map((function(t) {
									return JSON.stringify(t) + ": " + a[e][t].toString()
								})).join(",") + "});\n"
							})), s = s + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n.main.map((function(e) {
								return JSON.stringify(e) + ": " + a.main[e].toString()
							})).join(",") + "}))(self);";
							var u = new window.Blob([s], {
								type: "text/javascript"
							});
							if (t.bare) return u;
							var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
								c = new window.Worker(d);
							return c.objectURL = d, c
						}
					},
					"./src/config.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/controller/abr-controller.js"),
							a = r("./src/controller/buffer-controller.js"),
							n = r("./src/controller/cap-level-controller.js"),
							s = r("./src/controller/fps-controller.js"),
							o = r("./src/utils/xhr-loader.js"),
							l = r("./src/controller/audio-track-controller.js"),
							u = r("./src/controller/audio-stream-controller.js"),
							d = r("./src/utils/cues.js"),
							c = r("./src/controller/timeline-controller.js"),
							f = r("./src/controller/subtitle-track-controller.js"),
							h = r("./src/controller/subtitle-stream-controller.js"),
							p = r("./src/controller/eme-controller.js"),
							g = r("./src/utils/mediakeys-helper.js");
						t.hlsDefaultConfig = {
							autoStartLoad: !0,
							startPosition: -1,
							defaultAudioCodec: void 0,
							debug: !1,
							capLevelOnFPSDrop: !1,
							capLevelToPlayerSize: !1,
							initialLiveManifestSize: 1,
							maxBufferLength: 30,
							maxBufferSize: 6e7,
							maxBufferHole: .5,
							lowBufferWatchdogPeriod: .5,
							highBufferWatchdogPeriod: 3,
							nudgeOffset: .1,
							nudgeMaxRetry: 3,
							maxFragLookUpTolerance: .25,
							liveSyncDurationCount: 3,
							liveMaxLatencyDurationCount: 1 / 0,
							liveSyncDuration: void 0,
							liveMaxLatencyDuration: void 0,
							liveDurationInfinity: !1,
							liveBackBufferLength: 1 / 0,
							maxMaxBufferLength: 600,
							enableWorker: !0,
							enableSoftwareAES: !0,
							manifestLoadingTimeOut: 1e4,
							manifestLoadingMaxRetry: 1,
							manifestLoadingRetryDelay: 1e3,
							manifestLoadingMaxRetryTimeout: 64e3,
							startLevel: void 0,
							levelLoadingTimeOut: 1e4,
							levelLoadingMaxRetry: 4,
							levelLoadingRetryDelay: 1e3,
							levelLoadingMaxRetryTimeout: 64e3,
							fragLoadingTimeOut: 2e4,
							fragLoadingMaxRetry: 6,
							fragLoadingRetryDelay: 1e3,
							fragLoadingMaxRetryTimeout: 64e3,
							startFragPrefetch: !1,
							fpsDroppedMonitoringPeriod: 5e3,
							fpsDroppedMonitoringThreshold: .2,
							appendErrorMaxRetry: 3,
							loader: o.default,
							fLoader: void 0,
							pLoader: void 0,
							xhrSetup: void 0,
							licenseXhrSetup: void 0,
							abrController: i.default,
							bufferController: a.default,
							capLevelController: n.default,
							fpsController: s.default,
							stretchShortVideoTrack: !1,
							maxAudioFramesDrift: 1,
							forceKeyFrameOnDiscontinuity: !0,
							abrEwmaFastLive: 3,
							abrEwmaSlowLive: 9,
							abrEwmaFastVoD: 3,
							abrEwmaSlowVoD: 9,
							abrEwmaDefaultEstimate: 5e5,
							abrBandWidthFactor: .95,
							abrBandWidthUpFactor: .7,
							abrMaxWithRealBitrate: !1,
							maxStarvationDelay: 4,
							maxLoadingDelay: 4,
							minAutoBitrate: 0,
							emeEnabled: !1,
							widevineLicenseUrl: void 0,
							requestMediaKeySystemAccessFunc: g.requestMediaKeySystemAccess
						}, t.hlsDefaultConfig.subtitleStreamController = h.SubtitleStreamController, t.hlsDefaultConfig.subtitleTrackController = f.default, t.hlsDefaultConfig.timelineController = c.default, t.hlsDefaultConfig.cueHandler = d, t.hlsDefaultConfig.enableCEA708Captions = !0, t.hlsDefaultConfig.enableWebVTT = !0, t.hlsDefaultConfig.captionsTextTrack1Label = "English", t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en", t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish", t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es", t.hlsDefaultConfig.audioStreamController = u.default, t.hlsDefaultConfig.audioTrackController = l.default, t.hlsDefaultConfig.emeController = p.default
					},
					"./src/controller/abr-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/utils/buffer-helper.js"),
								l = r("./src/errors.js"),
								u = r("./src/utils/logger.js"),
								d = r("./src/utils/ewma-bandwidth-estimator.js"),
								c = window.performance,
								f = function(t) {
									function r(e) {
										var r = t.call(this, e, n.default.FRAG_LOADING, n.default.FRAG_LOADED, n.default.FRAG_BUFFERED, n.default.ERROR) || this;
										return r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = e, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(r), r
									}
									return a(r, t), r.prototype.destroy = function() {
										this.clearTimer(), s.default.prototype.destroy.call(this)
									}, r.prototype.onFragLoading = function(e) {
										var t = e.frag;
										if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
											var r = this.hls,
												i = r.config,
												a = t.level,
												n = void 0,
												s = void 0;
											r.levels[a].details.live ? (n = i.abrEwmaFastLive, s = i.abrEwmaSlowLive) : (n = i.abrEwmaFastVoD, s = i.abrEwmaSlowVoD), this._bwEstimator = new d.default(r, s, n, i.abrEwmaDefaultEstimate)
										}
									}, r.prototype._abandonRulesCheck = function() {
										var e = this.hls,
											t = e.media,
											r = this.fragCurrent;
										if (r) {
											var i = r.loader,
												a = e.minAutoLevel;
											if (!i || i.stats && i.stats.aborted) return u.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
											var s = i.stats;
											if (t && s && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
												var l = c.now() - s.trequest,
													d = Math.abs(t.playbackRate);
												if (l > 500 * r.duration / d) {
													var f = e.levels,
														h = Math.max(1, s.bw ? s.bw / 8 : 1e3 * s.loaded / l),
														p = f[r.level],
														g = p.realBitrate ? Math.max(p.realBitrate, p.bitrate) : p.bitrate,
														m = s.total ? s.total : Math.max(s.loaded, Math.round(r.duration * g / 8)),
														v = t.currentTime,
														y = (m - s.loaded) / h,
														E = (o.BufferHelper.bufferInfo(t, v, e.config.maxBufferHole).end - v) / d;
													if (E < 2 * r.duration / d && y > E) {
														var _ = void 0,
															b = void 0;
														for (b = r.level - 1; b > a; b--) {
															var T = f[b].realBitrate ? Math.max(f[b].realBitrate, f[b].bitrate) : f[b].bitrate;
															if ((_ = r.duration * T / (6.4 * h)) < E) break
														}
														_ < y && (u.logger.warn("loading too slow, abort fragment loading and switch to level " + b + ":fragLoadedDelay[" + b + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + _.toFixed(1) + "<" + y.toFixed(1) + ":" + E.toFixed(1)), e.nextLoadLevel = b, this._bwEstimator.sample(l, s.loaded), i.abort(), this.clearTimer(), e.trigger(n.default.FRAG_LOAD_EMERGENCY_ABORTED, {
															frag: r,
															stats: s
														}))
													}
												}
											}
										}
									}, r.prototype.onFragLoaded = function(t) {
										var r = t.frag;
										if ("main" === r.type && e.isFinite(r.sn)) {
											if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
												var i = this.hls.levels[r.level],
													a = (i.loaded ? i.loaded.bytes : 0) + t.stats.loaded,
													n = (i.loaded ? i.loaded.duration : 0) + t.frag.duration;
												i.loaded = {
													bytes: a,
													duration: n
												}, i.realBitrate = Math.round(8 * a / n)
											}
											if (t.frag.bitrateTest) {
												var s = t.stats;
												s.tparsed = s.tbuffered = s.tload, this.onFragBuffered(t)
											}
										}
									}, r.prototype.onFragBuffered = function(t) {
										var r = t.stats,
											i = t.frag;
										if (!0 !== r.aborted && "main" === i.type && e.isFinite(i.sn) && (!i.bitrateTest || r.tload === r.tbuffered)) {
											var a = r.tparsed - r.trequest;
											u.logger.log("latency/loading/parsing/append/kbps:" + Math.round(r.tfirst - r.trequest) + "/" + Math.round(r.tload - r.tfirst) + "/" + Math.round(r.tparsed - r.tload) + "/" + Math.round(r.tbuffered - r.tparsed) + "/" + Math.round(8 * r.loaded / (r.tbuffered - r.trequest))), this._bwEstimator.sample(a, r.loaded), r.bwEstimate = this._bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
										}
									}, r.prototype.onError = function(e) {
										switch (e.details) {
											case l.ErrorDetails.FRAG_LOAD_ERROR:
											case l.ErrorDetails.FRAG_LOAD_TIMEOUT:
												this.clearTimer()
										}
									}, r.prototype.clearTimer = function() {
										clearInterval(this.timer), this.timer = null
									}, Object.defineProperty(r.prototype, "nextAutoLevel", {
										get: function() {
											var e = this._nextAutoLevel,
												t = this._bwEstimator;
											if (!(-1 === e || t && t.canEstimate())) return e;
											var r = this._nextABRAutoLevel;
											return -1 !== e && (r = Math.min(e, r)), r
										},
										set: function(e) {
											this._nextAutoLevel = e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "_nextABRAutoLevel", {
										get: function() {
											var e = this.hls,
												t = e.maxAutoLevel,
												r = e.levels,
												i = e.config,
												a = e.minAutoLevel,
												n = e.media,
												s = this.lastLoadedFragLevel,
												l = this.fragCurrent ? this.fragCurrent.duration : 0,
												d = n ? n.currentTime : 0,
												c = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
												f = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
												h = (o.BufferHelper.bufferInfo(n, d, i.maxBufferHole).end - d) / c,
												p = this._findBestLevel(s, l, f, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
											if (p >= 0) return p;
											u.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
											var g = l ? Math.min(l, i.maxStarvationDelay) : i.maxStarvationDelay,
												m = i.abrBandWidthFactor,
												v = i.abrBandWidthUpFactor;
											if (0 === h) {
												var y = this.bitrateTestDelay;
												y && (g = (l ? Math.min(l, i.maxLoadingDelay) : i.maxLoadingDelay) - y, u.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), m = v = 1)
											}
											return p = this._findBestLevel(s, l, f, a, t, h + g, m, v, r), Math.max(p, 0)
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._findBestLevel = function(e, t, r, i, a, n, s, o, l) {
										for (var d = a; d >= i; d--) {
											var c = l[d];
											if (c) {
												var f = c.details,
													h = f ? f.totalduration / f.fragments.length : t,
													p = !!f && f.live,
													g = void 0;
												g = d <= e ? s * r : o * r;
												var m = l[d].realBitrate ? Math.max(l[d].realBitrate, l[d].bitrate) : l[d].bitrate,
													v = m * h / g;
												if (u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(g) + "/" + m + "/" + h + "/" + n + "/" + v), g > m && (!v || p && !this.bitrateTestDelay || v < n)) return d
											}
										}
										return -1
									}, r
								}(s.default);
							t.default = f
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/audio-stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/binary-search.js"),
								s = r("./src/utils/buffer-helper.js"),
								o = r("./src/demux/demuxer.js"),
								l = r("./src/events.js"),
								u = r("./src/controller/level-helper.js"),
								d = r("./src/utils/time-ranges.js"),
								c = r("./src/errors.js"),
								f = r("./src/utils/logger.js"),
								h = r("./src/utils/discontinuities.js"),
								p = r("./src/controller/fragment-tracker.js"),
								g = r("./src/loader/fragment.js"),
								m = r("./src/controller/base-stream-controller.js"),
								v = window.performance,
								y = function(t) {
									function r(e, r) {
										var i = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.AUDIO_TRACKS_UPDATED, l.default.AUDIO_TRACK_SWITCHING, l.default.AUDIO_TRACK_LOADED, l.default.KEY_LOADED, l.default.FRAG_LOADED, l.default.FRAG_PARSING_INIT_SEGMENT, l.default.FRAG_PARSING_DATA, l.default.FRAG_PARSED, l.default.ERROR, l.default.BUFFER_RESET, l.default.BUFFER_CREATED, l.default.BUFFER_APPENDED, l.default.BUFFER_FLUSHED, l.default.INIT_PTS_FOUND) || this;
										return i.fragmentTracker = r, i.config = e.config, i.audioCodecSwap = !1, i._state = m.State.STOPPED, i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i
									}
									return a(r, t), r.prototype.onInitPtsFound = function(e) {
										var t = e.id,
											r = e.frag.cc,
											i = e.initPTS;
										"main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, f.logger.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === m.State.WAITING_INIT_PTS && this.tick())
									}, r.prototype.startLoad = function(e) {
										if (this.tracks) {
											var t = this.lastCurrentTime;
											this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (f.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = m.State.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = m.State.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
										} else this.startPosition = e, this.state = m.State.STOPPED
									}, Object.defineProperty(r.prototype, "state", {
										get: function() {
											return this._state
										},
										set: function(e) {
											if (this.state !== e) {
												var t = this.state;
												this._state = e, f.logger.log("audio stream:" + t + "->" + e)
											}
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.doTick = function() {
										var t, r, i, a = this.hls,
											o = a.config;
										switch (this.state) {
											case m.State.ERROR:
											case m.State.PAUSED:
											case m.State.BUFFER_FLUSHING:
												break;
											case m.State.STARTING:
												this.state = m.State.WAITING_TRACK, this.loadedmetadata = !1;
												break;
											case m.State.IDLE:
												var u = this.tracks;
												if (!u) break;
												if (!this.media && (this.startFragRequested || !o.startFragPrefetch)) break;
												if (this.loadedmetadata) t = this.media.currentTime;
												else if (void 0 === (t = this.nextLoadPosition)) break;
												var d = this.mediaBuffer ? this.mediaBuffer : this.media,
													c = this.videoBuffer ? this.videoBuffer : this.media,
													g = s.BufferHelper.bufferInfo(d, t, o.maxBufferHole),
													y = s.BufferHelper.bufferInfo(c, t, o.maxBufferHole),
													E = g.len,
													_ = g.end,
													b = this.fragPrevious,
													T = Math.min(o.maxBufferLength, o.maxMaxBufferLength),
													S = Math.max(T, y.len),
													A = this.audioSwitch,
													R = this.trackId;
												if ((E < S || A) && R < u.length) {
													if (void 0 === (i = u[R].details)) {
														this.state = m.State.WAITING_TRACK;
														break
													}
													if (!A && this._streamEnded(g, i)) return this.hls.trigger(l.default.BUFFER_EOS, {
														type: "audio"
													}), void(this.state = m.State.ENDED);
													var D = i.fragments,
														L = D.length,
														w = D[0].start,
														O = D[L - 1].start + D[L - 1].duration,
														k = void 0;
													if (A)
														if (i.live && !i.PTSKnown) f.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), _ = 0;
														else if (_ = t, i.PTSKnown && t < w) {
														if (!(g.end > w || g.nextStart)) return;
														f.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = w + .05
													}
													if (i.initSegment && !i.initSegment.data) k = i.initSegment;
													else if (_ <= w) {
														if (k = D[0], null !== this.videoTrackCC && k.cc !== this.videoTrackCC && (k = h.findFragWithCC(D, this.videoTrackCC)), i.live && k.loadIdx && k.loadIdx === this.fragLoadIdx) {
															var I = g.nextStart ? g.nextStart : w;
															return f.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (I + .05)), void(this.media.currentTime = I + .05)
														}
													} else {
														var P = void 0,
															C = o.maxFragLookUpTolerance,
															x = b ? D[b.sn - D[0].sn + 1] : void 0,
															F = function(e) {
																var t = Math.min(C, e.duration);
																return e.start + e.duration - t <= _ ? 1 : e.start - t > _ && e.start ? -1 : 0
															};
														_ < O ? (_ > O - C && (C = 0), P = x && !F(x) ? x : n.default.search(D, F)) : P = D[L - 1], P && (k = P, w = P.start, b && k.level === b.level && k.sn === b.sn && (k.sn < i.endSN ? (k = D[k.sn + 1 - i.startSN], f.logger.log("SN just loaded, load next one: " + k.sn)) : k = null))
													}
													k && (k.encrypted ? (f.logger.log("Loading key for " + k.sn + " of [" + i.startSN + " ," + i.endSN + "],track " + R), this.state = m.State.KEY_LOADING, a.trigger(l.default.KEY_LOADING, {
														frag: k
													})) : (f.logger.log("Loading " + k.sn + ", cc: " + k.cc + " of [" + i.startSN + " ," + i.endSN + "],track " + R + ", currentTime:" + t + ",bufferEnd:" + _.toFixed(3)), this.fragCurrent = k, (A || this.fragmentTracker.getState(k) === p.FragmentState.NOT_LOADED) && (this.startFragRequested = !0, e.isFinite(k.sn) && (this.nextLoadPosition = k.start + k.duration), a.trigger(l.default.FRAG_LOADING, {
														frag: k
													}), this.state = m.State.FRAG_LOADING)))
												}
												break;
											case m.State.WAITING_TRACK:
												(r = this.tracks[this.trackId]) && r.details && (this.state = m.State.IDLE);
												break;
											case m.State.FRAG_LOADING_WAITING_RETRY:
												var M = v.now(),
													N = this.retryDate,
													j = (d = this.media) && d.seeking;
												(!N || M >= N || j) && (f.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = m.State.IDLE);
												break;
											case m.State.WAITING_INIT_PTS:
												var U = this.videoTrackCC;
												if (void 0 === this.initPTS[U]) break;
												var B = this.waitingFragment;
												if (B) {
													var G = B.frag.cc;
													U !== G ? (r = this.tracks[this.trackId]).details && r.details.live && (f.logger.warn("Waiting fragment CC (" + G + ") does not match video track CC (" + U + ")"), this.waitingFragment = null, this.state = m.State.IDLE) : (this.state = m.State.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
												} else this.state = m.State.IDLE;
												break;
											case m.State.STOPPED:
											case m.State.FRAG_LOADING:
											case m.State.PARSING:
											case m.State.PARSED:
											case m.State.ENDED:
										}
									}, r.prototype.onMediaAttached = function(e) {
										var t = this.media = this.mediaBuffer = e.media;
										this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
										var r = this.config;
										this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
									}, r.prototype.onMediaDetaching = function() {
										var e = this.media;
										e && e.ended && (f.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
									}, r.prototype.onAudioTracksUpdated = function(e) {
										f.logger.log("audio tracks updated"), this.tracks = e.audioTracks
									}, r.prototype.onAudioTrackSwitching = function(e) {
										var t = !!e.url;
										this.trackId = e.id, this.fragCurrent = null, this.state = m.State.PAUSED, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = m.State.IDLE), this.tick()
									}, r.prototype.onAudioTrackLoaded = function(t) {
										var r = t.details,
											i = t.id,
											a = this.tracks[i],
											n = r.totalduration,
											s = 0;
										if (f.logger.log("track " + i + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + n), r.live) {
											var o = a.details;
											o && r.fragments.length > 0 ? (u.mergeDetails(o, r), s = r.fragments[0].start, r.PTSKnown ? f.logger.log("live audio playlist sliding:" + s.toFixed(3)) : f.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (r.PTSKnown = !1, f.logger.log("live audio playlist - first load, unknown sliding"))
										} else r.PTSKnown = !1;
										if (a.details = r, !this.startFragRequested) {
											if (-1 === this.startPosition) {
												var l = r.startTimeOffset;
												e.isFinite(l) ? (f.logger.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : this.startPosition = 0
											}
											this.nextLoadPosition = this.startPosition
										}
										this.state === m.State.WAITING_TRACK && (this.state = m.State.IDLE), this.tick()
									}, r.prototype.onKeyLoaded = function() {
										this.state === m.State.KEY_LOADING && (this.state = m.State.IDLE, this.tick())
									}, r.prototype.onFragLoaded = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (this.state === m.State.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
											var i = this.tracks[this.trackId],
												a = i.details,
												n = a.totalduration,
												s = t.level,
												u = t.sn,
												d = t.cc,
												c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
												h = this.stats = e.stats;
											if ("initSegment" === u) this.state = m.State.IDLE, h.tparsed = h.tbuffered = v.now(), a.initSegment.data = e.payload, this.hls.trigger(l.default.FRAG_BUFFERED, {
												stats: h,
												frag: t,
												id: "audio"
											}), this.tick();
											else {
												this.state = m.State.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new o.default(this.hls, "audio"));
												var p = this.initPTS[d],
													g = a.initSegment ? a.initSegment.data : [];
												a.initSegment || void 0 !== p ? (this.pendingBuffering = !0, f.logger.log("Demuxing " + u + " of [" + a.startSN + " ," + a.endSN + "],track " + s), this.demuxer.push(e.payload, g, c, null, t, n, !1, p)) : (f.logger.log("unknown video PTS for continuity counter " + d + ", waiting for video PTS before demuxing audio frag " + u + " of [" + a.startSN + " ," + a.endSN + "],track " + s), this.waitingFragment = e, this.state = m.State.WAITING_INIT_PTS)
											}
										}
										this.fragLoadError = 0
									}, r.prototype.onFragParsingInitSegment = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === m.State.PARSING) {
											var i = e.tracks,
												a = void 0;
											if (i.video && delete i.video, a = i.audio) {
												a.levelCodec = a.codec, a.id = e.id, this.hls.trigger(l.default.BUFFER_CODECS, i), f.logger.log("audio track:audio,container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
												var n = a.initSegment;
												if (n) {
													var s = {
														type: "audio",
														data: n,
														parent: "audio",
														content: "initSegment"
													};
													this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(l.default.BUFFER_APPENDING, s))
												}
												this.tick()
											}
										}
									}, r.prototype.onFragParsingData = function(t) {
										var r = this,
											i = this.fragCurrent,
											a = t.frag;
										if (i && "audio" === t.id && "audio" === t.type && a.sn === i.sn && a.level === i.level && this.state === m.State.PARSING) {
											var n = this.trackId,
												s = this.tracks[n],
												o = this.hls;
											e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), i.addElementaryStream(g.default.ElementaryStreamTypes.AUDIO), f.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), u.updateFragPTSDTS(s.details, i, t.startPTS, t.endPTS);
											var d = this.audioSwitch,
												h = this.media,
												p = !1;
											if (d && h)
												if (h.readyState) {
													var v = h.currentTime;
													f.logger.log("switching audio track : currentTime:" + v), v >= t.startPTS && (f.logger.log("switching audio track : flushing all audio"), this.state = m.State.BUFFER_FLUSHING, o.trigger(l.default.BUFFER_FLUSHING, {
														startOffset: 0,
														endOffset: e.POSITIVE_INFINITY,
														type: "audio"
													}), p = !0, this.audioSwitch = !1, o.trigger(l.default.AUDIO_TRACK_SWITCHED, {
														id: n
													}))
												} else this.audioSwitch = !1, o.trigger(l.default.AUDIO_TRACK_SWITCHED, {
													id: n
												});
											var y = this.pendingData;
											if (!y) return f.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void o.trigger(l.default.ERROR, {
												type: c.ErrorTypes.MEDIA_ERROR,
												details: null,
												fatal: !0
											});
											this.audioSwitch || ([t.data1, t.data2].forEach((function(e) {
												e && e.length && y.push({
													type: t.type,
													data: e,
													parent: "audio",
													content: "data"
												})
											})), !p && y.length && (y.forEach((function(e) {
												r.state === m.State.PARSING && (r.pendingBuffering = !0, r.hls.trigger(l.default.BUFFER_APPENDING, e))
											})), this.pendingData = [], this.appended = !0)), this.tick()
										}
									}, r.prototype.onFragParsed = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === m.State.PARSING && (this.stats.tparsed = v.now(), this.state = m.State.PARSED, this._checkAppendedParsed())
									}, r.prototype.onBufferReset = function() {
										this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
									}, r.prototype.onBufferCreated = function(e) {
										var t = e.tracks.audio;
										t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
									}, r.prototype.onBufferAppended = function(e) {
										if ("audio" === e.parent) {
											var t = this.state;
											t !== m.State.PARSING && t !== m.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
										}
									}, r.prototype._checkAppendedParsed = function() {
										if (!(this.state !== m.State.PARSED || this.appended && this.pendingBuffering)) {
											var e = this.fragCurrent,
												t = this.stats,
												r = this.hls;
											if (e) {
												this.fragPrevious = e, t.tbuffered = v.now(), r.trigger(l.default.FRAG_BUFFERED, {
													stats: t,
													frag: e,
													id: "audio"
												});
												var i = this.mediaBuffer ? this.mediaBuffer : this.media;
												f.logger.log("audio buffered : " + d.default.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(l.default.AUDIO_TRACK_SWITCHED, {
													id: this.trackId
												})), this.state = m.State.IDLE
											}
											this.tick()
										}
									}, r.prototype.onError = function(t) {
										var r = t.frag;
										if (!r || "audio" === r.type) switch (t.details) {
											case c.ErrorDetails.FRAG_LOAD_ERROR:
											case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
												var i = t.frag;
												if (i && "audio" !== i.type) break;
												if (!t.fatal) {
													var a = this.fragLoadError;
													if (a ? a++ : a = 1, a <= (o = this.config).fragLoadingMaxRetry) {
														this.fragLoadError = a;
														var n = Math.min(Math.pow(2, a - 1) * o.fragLoadingRetryDelay, o.fragLoadingMaxRetryTimeout);
														f.logger.warn("AudioStreamController: frag loading failed, retry in " + n + " ms"), this.retryDate = v.now() + n, this.state = m.State.FRAG_LOADING_WAITING_RETRY
													} else f.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = m.State.ERROR
												}
												break;
											case c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
											case c.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
											case c.ErrorDetails.KEY_LOAD_ERROR:
											case c.ErrorDetails.KEY_LOAD_TIMEOUT:
												this.state !== m.State.ERROR && (this.state = t.fatal ? m.State.ERROR : m.State.IDLE, f.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
												break;
											case c.ErrorDetails.BUFFER_FULL_ERROR:
												if ("audio" === t.parent && (this.state === m.State.PARSING || this.state === m.State.PARSED)) {
													var o, u = this.mediaBuffer,
														d = this.media.currentTime;
													u && s.BufferHelper.isBuffered(u, d) && s.BufferHelper.isBuffered(u, d + .5) ? ((o = this.config).maxMaxBufferLength >= o.maxBufferLength && (o.maxMaxBufferLength /= 2, f.logger.warn("AudioStreamController: reduce max buffer length to " + o.maxMaxBufferLength + "s")), this.state = m.State.IDLE) : (f.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = m.State.BUFFER_FLUSHING, this.hls.trigger(l.default.BUFFER_FLUSHING, {
														startOffset: 0,
														endOffset: e.POSITIVE_INFINITY,
														type: "audio"
													}))
												}
										}
									}, r.prototype.onBufferFlushed = function() {
										var e = this,
											t = this.pendingData;
										t && t.length ? (f.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) {
											e.hls.trigger(l.default.BUFFER_APPENDING, t)
										})), this.appended = !0, this.pendingData = [], this.state = m.State.PARSED) : (this.state = m.State.IDLE, this.fragPrevious = null, this.tick())
									}, r
								}(m.default);
							t.default = y
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/audio-track-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							s = r("./src/task-loop.js"),
							o = r("./src/utils/logger.js"),
							l = r("./src/errors.js"),
							u = function(e) {
								function t(t) {
									var r = e.call(this, t, n.default.MANIFEST_LOADING, n.default.MANIFEST_PARSED, n.default.AUDIO_TRACK_LOADED, n.default.AUDIO_TRACK_SWITCHED, n.default.LEVEL_LOADED, n.default.ERROR) || this;
									return r._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r
								}
								return a(t, e), t.prototype.onManifestLoading = function() {
									this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
								}, t.prototype.onManifestParsed = function(e) {
									var t = this.tracks = e.audioTracks || [];
									this.hls.trigger(n.default.AUDIO_TRACKS_UPDATED, {
										audioTracks: t
									})
								}, t.prototype.onAudioTrackLoaded = function(e) {
									if (e.id >= this.tracks.length) o.logger.warn("Invalid audio track id:", e.id);
									else {
										if (o.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
											var t = 1e3 * e.details.targetduration;
											this.setInterval(t)
										}!e.details.live && this.hasInterval() && this.clearInterval()
									}
								}, t.prototype.onAudioTrackSwitched = function(e) {
									var t = this.tracks[e.id].groupId;
									t && this.audioGroupId !== t && (this.audioGroupId = t)
								}, t.prototype.onLevelLoaded = function(e) {
									var t = this.hls.levels[e.level];
									if (t.audioGroupIds) {
										var r = t.audioGroupIds[t.urlId];
										this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
									}
								}, t.prototype.onError = function(e) {
									e.type === l.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (o.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
								}, Object.defineProperty(t.prototype, "audioTracks", {
									get: function() {
										return this.tracks
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTrack", {
									get: function() {
										return this._trackId
									},
									set: function(e) {
										this._setAudioTrack(e), this._selectDefaultTrack = !1
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype._setAudioTrack = function(e) {
									if (this._trackId === e && this.tracks[this._trackId].details) o.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
									else if (e < 0 || e >= this.tracks.length) o.logger.warn("Invalid id passed to audio-track controller");
									else {
										var t = this.tracks[e];
										o.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
										var r = t.url,
											i = t.type,
											a = t.id;
										this.hls.trigger(n.default.AUDIO_TRACK_SWITCHING, {
											id: a,
											type: i,
											url: r
										}), this._loadTrackDetailsIfNeeded(t)
									}
								}, t.prototype.doTick = function() {
									this._updateTrack(this._trackId)
								}, t.prototype._selectInitialAudioTrack = function() {
									var e = this,
										t = this.tracks;
									if (t.length) {
										var r = this.tracks[this._trackId],
											i = null;
										if (r && (i = r.name), this._selectDefaultTrack) {
											var a = t.filter((function(e) {
												return e.default
											}));
											a.length ? t = a : o.logger.warn("No default audio tracks defined")
										}
										var s = !1,
											u = function() {
												t.forEach((function(t) {
													s || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), s = !0)
												}))
											};
										u(), s || (i = null, u()), s || (o.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(n.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
											fatal: !0
										}))
									}
								}, t.prototype._needsTrackLoading = function(e) {
									var t = e.details,
										r = e.url;
									return !(t && !t.live || !r)
								}, t.prototype._loadTrackDetailsIfNeeded = function(e) {
									if (this._needsTrackLoading(e)) {
										var t = e.url,
											r = e.id;
										o.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger(n.default.AUDIO_TRACK_LOADING, {
											url: t,
											id: r
										})
									}
								}, t.prototype._updateTrack = function(e) {
									if (!(e < 0 || e >= this.tracks.length)) {
										this.clearInterval(), this._trackId = e, o.logger.log("trying to update audio-track " + e);
										var t = this.tracks[e];
										this._loadTrackDetailsIfNeeded(t)
									}
								}, t.prototype._handleLoadError = function() {
									this.trackIdBlacklist[this._trackId] = !0;
									var e = this._trackId,
										t = this.tracks[e],
										r = t.name,
										i = t.language,
										a = t.groupId;
									o.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
									for (var n = e, s = 0; s < this.tracks.length; s++)
										if (!this.trackIdBlacklist[s] && this.tracks[s].name === r) {
											n = s;
											break
										} n !== e ? (o.logger.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId), this._setAudioTrack(n)) : o.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
								}, t
							}(s.default);
						t.default = u
					},
					"./src/controller/base-stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/task-loop.js"),
								s = r("./src/controller/fragment-tracker.js"),
								o = r("./src/utils/buffer-helper.js"),
								l = r("./src/utils/logger.js");
							t.State = {
								STOPPED: "STOPPED",
								STARTING: "STARTING",
								IDLE: "IDLE",
								PAUSED: "PAUSED",
								KEY_LOADING: "KEY_LOADING",
								FRAG_LOADING: "FRAG_LOADING",
								FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
								WAITING_TRACK: "WAITING_TRACK",
								PARSING: "PARSING",
								PARSED: "PARSED",
								BUFFER_FLUSHING: "BUFFER_FLUSHING",
								ENDED: "ENDED",
								ERROR: "ERROR",
								WAITING_INIT_PTS: "WAITING_INIT_PTS",
								WAITING_LEVEL: "WAITING_LEVEL"
							};
							var u = function(r) {
								function i() {
									return null !== r && r.apply(this, arguments) || this
								}
								return a(i, r), i.prototype.doTick = function() {}, i.prototype.startLoad = function() {}, i.prototype.stopLoad = function() {
									var e = this.fragCurrent;
									e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = t.State.STOPPED
								}, i.prototype._streamEnded = function(e, t) {
									var r = this.fragCurrent,
										i = this.fragmentTracker;
									if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
										var a = i.getState(r);
										return a === s.FragmentState.PARTIAL || a === s.FragmentState.OK
									}
									return !1
								}, i.prototype.onMediaSeeking = function() {
									var r = this.config,
										i = this.media,
										a = this.mediaBuffer,
										n = this.state,
										s = i ? i.currentTime : null,
										u = o.BufferHelper.bufferInfo(a || i, s, this.config.maxBufferHole);
									if (e.isFinite(s) && l.logger.log("media seeking to " + s.toFixed(3)), n === t.State.FRAG_LOADING) {
										var d = this.fragCurrent;
										if (0 === u.len && d) {
											var c = r.maxFragLookUpTolerance,
												f = d.start - c,
												h = d.start + d.duration + c;
											s < f || s > h ? (d.loader && (l.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), d.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = t.State.IDLE) : l.logger.log("seeking outside of buffer but within currently loaded fragment range")
										}
									} else n === t.State.ENDED && (0 === u.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = t.State.IDLE);
									i && (this.lastCurrentTime = s), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = s), this.tick()
								}, i.prototype.onMediaEnded = function() {
									this.startPosition = this.lastCurrentTime = 0
								}, i.prototype.onHandlerDestroying = function() {
									this.stopLoad(), r.prototype.onHandlerDestroying.call(this)
								}, i.prototype.onHandlerDestroyed = function() {
									this.state = t.State.STOPPED, this.fragmentTracker = null
								}, i
							}(n.default);
							t.default = u
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/buffer-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/utils/logger.js"),
								l = r("./src/errors.js"),
								u = r("./src/utils/mediasource-helper.js").getMediaSource(),
								d = function(t) {
									function r(e) {
										var r = t.call(this, e, n.default.MEDIA_ATTACHING, n.default.MEDIA_DETACHING, n.default.MANIFEST_PARSED, n.default.BUFFER_RESET, n.default.BUFFER_APPENDING, n.default.BUFFER_CODECS, n.default.BUFFER_EOS, n.default.BUFFER_FLUSHING, n.default.LEVEL_PTS_UPDATED, n.default.LEVEL_UPDATED) || this;
										return r._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r.bufferCodecEventsExpected = 0, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r
									}
									return a(r, t), r.prototype.destroy = function() {
										s.default.prototype.destroy.call(this)
									}, r.prototype.onLevelPtsUpdated = function(e) {
										var t = e.type,
											r = this.tracks.audio;
										if ("audio" === t && r && "audio/mpeg" === r.container) {
											var i = this.sourceBuffer.audio;
											if (Math.abs(i.timestampOffset - e.start) > .1) {
												var a = i.updating;
												try {
													i.abort()
												} catch (n) {
													o.logger.warn("can not abort audio buffer: " + n)
												}
												a ? this.audioTimestampOffset = e.start : (o.logger.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start)
											}
										}
									}, r.prototype.onManifestParsed = function(e) {
										this.bufferCodecEventsExpected = e.altAudio ? 2 : 1, o.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
									}, r.prototype.onMediaAttaching = function(e) {
										var t = this.media = e.media;
										if (t) {
											var r = this.mediaSource = new u;
											this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
										}
									}, r.prototype.onMediaDetaching = function() {
										o.logger.log("media source detaching");
										var e = this.mediaSource;
										if (e) {
											if ("open" === e.readyState) try {
												e.endOfStream()
											} catch (t) {
												o.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
											}
											e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : o.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
										}
										this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(n.default.MEDIA_DETACHED)
									}, r.prototype.onMediaSourceOpen = function() {
										o.logger.log("media source opened"), this.hls.trigger(n.default.MEDIA_ATTACHED, {
											media: this.media
										});
										var e = this.mediaSource;
										e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
									}, r.prototype.checkPendingTracks = function() {
										var e = this.bufferCodecEventsExpected,
											t = this.pendingTracks,
											r = Object.keys(t).length;
										(r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
									}, r.prototype.onMediaSourceClose = function() {
										o.logger.log("media source closed")
									}, r.prototype.onMediaSourceEnded = function() {
										o.logger.log("media source ended")
									}, r.prototype.onSBUpdateEnd = function() {
										if (this.audioTimestampOffset) {
											var e = this.sourceBuffer.audio;
											o.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
										}
										this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
										var t = this.parent,
											r = this.segments.reduce((function(e, r) {
												return r.parent === t ? e + 1 : e
											}), 0),
											i = {},
											a = this.sourceBuffer;
										for (var s in a) i[s] = a[s].buffered;
										this.hls.trigger(n.default.BUFFER_APPENDED, {
											parent: t,
											pending: r,
											timeRanges: i
										}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration(), 0 === r && this.flushLiveBackBuffer()
									}, r.prototype.onSBUpdateError = function(e) {
										o.logger.error("sourceBuffer error:", e), this.hls.trigger(n.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.BUFFER_APPENDING_ERROR,
											fatal: !1
										})
									}, r.prototype.onBufferReset = function() {
										var e = this.sourceBuffer;
										for (var t in e) {
											var r = e[t];
											try {
												this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
											} catch (i) {}
										}
										this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
									}, r.prototype.onBufferCodecs = function(e) {
										var t = this;
										if (!Object.keys(this.sourceBuffer).length) {
											Object.keys(e).forEach((function(r) {
												t.pendingTracks[r] = e[r]
											}));
											var r = this.mediaSource;
											this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), r && "open" === r.readyState && this.checkPendingTracks()
										}
									}, r.prototype.createSourceBuffers = function(e) {
										var t = this.sourceBuffer,
											r = this.mediaSource;
										for (var i in e)
											if (!t[i]) {
												var a = e[i],
													s = a.levelCodec || a.codec,
													u = a.container + ";codecs=" + s;
												o.logger.log("creating sourceBuffer(" + u + ")");
												try {
													var d = t[i] = r.addSourceBuffer(u);
													d.addEventListener("updateend", this.onsbue), d.addEventListener("error", this.onsbe), this.tracks[i] = {
														codec: s,
														container: a.container
													}, a.buffer = d
												} catch (c) {
													o.logger.error("error while trying to add sourceBuffer:" + c.message), this.hls.trigger(n.default.ERROR, {
														type: l.ErrorTypes.MEDIA_ERROR,
														details: l.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
														fatal: !1,
														err: c,
														mimeType: u
													})
												}
											} this.hls.trigger(n.default.BUFFER_CREATED, {
											tracks: e
										})
									}, r.prototype.onBufferAppending = function(e) {
										this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
									}, r.prototype.onBufferAppendFail = function(e) {
										o.logger.error("sourceBuffer error:", e.event), this.hls.trigger(n.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.BUFFER_APPENDING_ERROR,
											fatal: !1
										})
									}, r.prototype.onBufferEos = function(e) {
										var t = this.sourceBuffer,
											r = e.type;
										for (var i in t) r && i !== r || t[i].ended || (t[i].ended = !0, o.logger.log(i + " sourceBuffer now EOS"));
										this.checkEos()
									}, r.prototype.checkEos = function() {
										var e = this.sourceBuffer,
											t = this.mediaSource;
										if (t && "open" === t.readyState) {
											for (var r in e) {
												var i = e[r];
												if (!i.ended) return;
												if (i.updating) return void(this._needsEos = !0)
											}
											o.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
											try {
												t.endOfStream()
											} catch (a) {
												o.logger.warn("exception while calling mediaSource.endOfStream()")
											}
											this._needsEos = !1
										} else this._needsEos = !1
									}, r.prototype.onBufferFlushing = function(e) {
										this.flushRange.push({
											start: e.startOffset,
											end: e.endOffset,
											type: e.type
										}), this.flushBufferCounter = 0, this.doFlush()
									}, r.prototype.flushLiveBackBuffer = function() {
										if (this._live) {
											var e = this.hls.config.liveBackBufferLength;
											if (isFinite(e) && !(e < 0))
												for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
													var s = i[n],
														o = r[s].buffered;
													o.length > 0 && a > o.start(0) && this.removeBufferRange(s, r[s], 0, a)
												}
										}
									}, r.prototype.onLevelUpdated = function(e) {
										var t = e.details;
										t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
									}, r.prototype.updateMediaElementDuration = function() {
										var t, r = this.hls.config;
										if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
											for (var i in this.sourceBuffer)
												if (!0 === this.sourceBuffer[i].updating) return;
											t = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === r.liveDurationInfinity ? (o.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (o.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
										}
									}, r.prototype.doFlush = function() {
										for (; this.flushRange.length;) {
											var e = this.flushRange[0];
											if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
											this.flushRange.shift(), this.flushBufferCounter = 0
										}
										if (0 === this.flushRange.length) {
											this._needsFlush = !1;
											var t = 0,
												r = this.sourceBuffer;
											try {
												for (var i in r) t += r[i].buffered.length
											} catch (a) {
												o.logger.error("error while accessing sourceBuffer.buffered")
											}
											this.appended = t, this.hls.trigger(n.default.BUFFER_FLUSHED)
										}
									}, r.prototype.doAppending = function() {
										var e = this.hls,
											t = this.segments,
											r = this.sourceBuffer;
										if (Object.keys(r).length) {
											if (this.media.error) return this.segments = [], void o.logger.error("trying to append although a media error occured, flush segment and abort");
											if (this.appending) return;
											if (t && t.length) {
												var i = t.shift();
												try {
													var a = r[i.type];
													a ? a.updating ? t.unshift(i) : (a.ended = !1, this.parent = i.parent, a.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
												} catch (u) {
													o.logger.error("error while trying to append buffer:" + u.message), t.unshift(i);
													var s = {
														type: l.ErrorTypes.MEDIA_ERROR,
														parent: i.parent
													};
													22 !== u.code ? (this.appendError ? this.appendError++ : this.appendError = 1, s.details = l.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (o.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], s.fatal = !0, e.trigger(n.default.ERROR, s)) : (s.fatal = !1, e.trigger(n.default.ERROR, s))) : (this.segments = [], s.details = l.ErrorDetails.BUFFER_FULL_ERROR, s.fatal = !1, e.trigger(n.default.ERROR, s))
												}
											}
										}
									}, r.prototype.flushBuffer = function(e, t, r) {
										var i, a = this.sourceBuffer;
										if (Object.keys(a).length) {
											if (o.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
												for (var n in a)
													if (!r || n === r) {
														if ((i = a[n]).ended = !1, i.updating) return o.logger.warn("cannot flush, sb updating in progress"), !1;
														if (this.removeBufferRange(n, i, e, t)) return this.flushBufferCounter++, !1
													}
											} else o.logger.warn("abort flushing too many retries");
											o.logger.log("buffer flushed")
										}
										return !0
									}, r.prototype.removeBufferRange = function(e, t, r, i) {
										try {
											for (var a = 0; a < t.buffered.length; a++) {
												var n = t.buffered.start(a),
													s = t.buffered.end(a),
													l = Math.max(n, r),
													u = Math.min(s, i);
												if (Math.min(u, s) - l > .5) return o.logger.log("sb remove " + e + " [" + l + "," + u + "], of [" + n + "," + s + "], pos:" + this.media.currentTime), t.remove(l, u), !0
											}
										} catch (d) {
											o.logger.warn("removeBufferRange failed", d)
										}
										return !1
									}, r
								}(s.default);
							t.default = d
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/cap-level-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = function(t) {
									function r(r) {
										var i = t.call(this, r, n.default.FPS_DROP_LEVEL_CAPPING, n.default.MEDIA_ATTACHING, n.default.MANIFEST_PARSED, n.default.BUFFER_CODECS, n.default.MEDIA_DETACHING) || this;
										return i.autoLevelCapping = e.POSITIVE_INFINITY, i.firstLevel = null, i.levels = [], i.media = null, i.restrictedLevels = [], i.timer = null, i
									}
									return a(r, t), r.prototype.destroy = function() {
										this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
									}, r.prototype.onFpsDropLevelCapping = function(e) {
										r.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
									}, r.prototype.onMediaAttaching = function(e) {
										this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
									}, r.prototype.onManifestParsed = function(e) {
										var t = this.hls;
										this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this._startCapping()
									}, r.prototype.onBufferCodecs = function(e) {
										this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
									}, r.prototype.onLevelsUpdated = function(e) {
										this.levels = e.levels
									}, r.prototype.onMediaDetaching = function() {
										this._stopCapping()
									}, r.prototype.detectPlayerSize = function() {
										if (this.media) {
											var e = this.levels ? this.levels.length : 0;
											if (e) {
												var t = this.hls;
												t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
											}
										}
									}, r.prototype.getMaxLevel = function(e) {
										var t = this;
										if (!this.levels) return -1;
										var i = this.levels.filter((function(i, a) {
											return r.isLevelAllowed(a, t.restrictedLevels) && a <= e
										}));
										return r.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
									}, r.prototype._startCapping = function() {
										this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
									}, r.prototype._stopCapping = function() {
										this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = e.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
									}, Object.defineProperty(r.prototype, "mediaWidth", {
										get: function() {
											var e, t = this.media;
											return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= r.contentScaleFactor), e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "mediaHeight", {
										get: function() {
											var e, t = this.media;
											return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= r.contentScaleFactor), e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r, "contentScaleFactor", {
										get: function() {
											var e = 1;
											try {
												e = window.devicePixelRatio
											} catch (t) {}
											return e
										},
										enumerable: !0,
										configurable: !0
									}), r.isLevelAllowed = function(e, t) {
										return void 0 === t && (t = []), -1 === t.indexOf(e)
									}, r.getMaxLevelByMediaSize = function(e, t, r) {
										if (!e || e && !e.length) return -1;
										for (var i, a, n = e.length - 1, s = 0; s < e.length; s += 1) {
											var o = e[s];
											if ((o.width >= t || o.height >= r) && (i = o, !(a = e[s + 1]) || i.width !== a.width || i.height !== a.height)) {
												n = s;
												break
											}
										}
										return n
									}, r
								}(r("./src/event-handler.js").default);
							t.default = s
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/eme-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/event-handler.js"),
							s = r("./src/events.js"),
							o = r("./src/errors.js"),
							l = r("./src/utils/logger.js"),
							u = window.XMLHttpRequest,
							d = "com.widevine.alpha",
							c = "com.microsoft.playready",
							f = function(e) {
								function t(t) {
									var r = e.call(this, t, s.default.MEDIA_ATTACHED, s.default.MANIFEST_PARSED) || this;
									return r._widevineLicenseUrl = t.config.widevineLicenseUrl, r._licenseXhrSetup = t.config.licenseXhrSetup, r._emeEnabled = t.config.emeEnabled, r._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._isMediaEncrypted = !1, r._requestLicenseFailureCount = 0, r
								}
								return a(t, e), t.prototype.getLicenseServerUrl = function(e) {
									var t;
									switch (e) {
										case d:
											t = this._widevineLicenseUrl;
											break;
										default:
											t = null
									}
									return t || (l.logger.error('No license server URL configured for key-system "' + e + '"'), this.hls.trigger(s.default.ERROR, {
										type: o.ErrorTypes.KEY_SYSTEM_ERROR,
										details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: !0
									})), t
								}, t.prototype._attemptKeySystemAccess = function(e, t, r) {
									var i = this,
										a = function(e, t, r) {
											switch (e) {
												case d:
													return function(e, t, r) {
														var i = {
															videoCapabilities: []
														};
														return t.forEach((function(e) {
															i.videoCapabilities.push({
																contentType: 'video/mp4; codecs="' + e + '"'
															})
														})), [i]
													}(0, r);
												default:
													throw Error("Unknown key-system: " + e)
											}
										}(e, 0, r);
									a ? (l.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, a).then((function(t) {
										i._onMediaKeySystemAccessObtained(e, t)
									})).catch((function(t) {
										l.logger.error('Failed to obtain key-system "' + e + '" access:', t)
									}))) : l.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e)
								}, Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
									get: function() {
										if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
										return this._requestMediaKeySystemAccess
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
									var r = this;
									l.logger.log('Access for key-system "' + e + '" obtained');
									var i = {
										mediaKeys: null,
										mediaKeysSession: null,
										mediaKeysSessionInitialized: !1,
										mediaKeySystemAccess: t,
										mediaKeySystemDomain: e
									};
									this._mediaKeysList.push(i), t.createMediaKeys().then((function(t) {
										i.mediaKeys = t, l.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated()
									})).catch((function(e) {
										l.logger.error("Failed to create media-keys:", e)
									}))
								}, t.prototype._onMediaKeysCreated = function() {
									var e = this;
									this._mediaKeysList.forEach((function(t) {
										t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
									}))
								}, t.prototype._onNewMediaKeySession = function(e) {
									var t = this;
									l.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) {
										t._onKeySessionMessage(e, r.message)
									}), !1)
								}, t.prototype._onKeySessionMessage = function(e, t) {
									l.logger.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) {
										l.logger.log("Received license data, updating key-session"), e.update(t)
									}))
								}, t.prototype._onMediaEncrypted = function(e, t) {
									l.logger.log('Media is encrypted using "' + e + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = e, this._mediaEncryptionInitData = t, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
								}, t.prototype._attemptSetMediaKeys = function() {
									if (!this._hasSetMediaKeys) {
										var e = this._mediaKeysList[0];
										if (!e || !e.mediaKeys) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(s.default.ERROR, {
											type: o.ErrorTypes.KEY_SYSTEM_ERROR,
											details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
											fatal: !0
										});
										l.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
									}
								}, t.prototype._generateRequestWithPreferredKeySession = function() {
									var e = this,
										t = this._mediaKeysList[0];
									if (!t) return l.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(s.default.ERROR, {
										type: o.ErrorTypes.KEY_SYSTEM_ERROR,
										details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
										fatal: !0
									});
									if (t.mediaKeysSessionInitialized) l.logger.warn("Key-Session already initialized but requested again");
									else {
										var r = t.mediaKeysSession;
										r || (l.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(s.default.ERROR, {
											type: o.ErrorTypes.KEY_SYSTEM_ERROR,
											details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
											fatal: !0
										}));
										var i = this._mediaEncryptionInitDataType,
											a = this._mediaEncryptionInitData;
										l.logger.log('Generating key-session request for "' + i + '" init data type'), t.mediaKeysSessionInitialized = !0, r.generateRequest(i, a).then((function() {
											l.logger.debug("Key-session generation succeeded")
										})).catch((function(t) {
											l.logger.error("Error generating key-session request:", t), e.hls.trigger(s.default.ERROR, {
												type: o.ErrorTypes.KEY_SYSTEM_ERROR,
												details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
												fatal: !1
											})
										}))
									}
								}, t.prototype._createLicenseXhr = function(e, t, r) {
									var i = new u,
										a = this._licenseXhrSetup;
									try {
										if (a) try {
											a(i, e)
										} catch (n) {
											i.open("POST", e, !0), a(i, e)
										}
										i.readyState || i.open("POST", e, !0)
									} catch (n) {
										return l.logger.error("Error setting up key-system license XHR", n), void this.hls.trigger(s.default.ERROR, {
											type: o.ErrorTypes.KEY_SYSTEM_ERROR,
											details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
											fatal: !0
										})
									}
									return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r), i
								}, t.prototype._onLicenseRequestReadyStageChange = function(e, t, r, i) {
									switch (e.readyState) {
										case 4:
											if (200 === e.status) this._requestLicenseFailureCount = 0, l.logger.log("License request succeeded"), i(e.response);
											else {
												if (l.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount <= 3) {
													var a = 3 - this._requestLicenseFailureCount + 1;
													return l.logger.warn("Retrying license request, " + a + " attempts left"), void this._requestLicense(r, i)
												}
												this.hls.trigger(s.default.ERROR, {
													type: o.ErrorTypes.KEY_SYSTEM_ERROR,
													details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
													fatal: !0
												})
											}
									}
								}, t.prototype._generateLicenseRequestChallenge = function(e, t) {
									var r;
									return e.mediaKeySystemDomain === c ? l.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === d ? r = t : l.logger.error("Unsupported key-system:", e.mediaKeySystemDomain), r
								}, t.prototype._requestLicense = function(e, t) {
									l.logger.log("Requesting content license for key-system");
									var r = this._mediaKeysList[0];
									if (!r) return l.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(s.default.ERROR, {
										type: o.ErrorTypes.KEY_SYSTEM_ERROR,
										details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
										fatal: !0
									});
									var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
										a = this._createLicenseXhr(i, e, t);
									l.logger.log("Sending license request to URL: " + i), a.send(this._generateLicenseRequestChallenge(r, e))
								}, t.prototype.onMediaAttached = function(e) {
									var t = this;
									if (this._emeEnabled) {
										var r = e.media;
										this._media = r, r.addEventListener("encrypted", (function(e) {
											t._onMediaEncrypted(e.initDataType, e.initData)
										}))
									}
								}, t.prototype.onManifestParsed = function(e) {
									if (this._emeEnabled) {
										var t = e.levels.map((function(e) {
												return e.audioCodec
											})),
											r = e.levels.map((function(e) {
												return e.videoCodec
											}));
										this._attemptKeySystemAccess(d, t, r)
									}
								}, t
							}(n.default);
						t.default = f
					},
					"./src/controller/fps-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							s = r("./src/event-handler.js"),
							o = r("./src/utils/logger.js"),
							l = window.performance,
							u = function(e) {
								function t(t) {
									return e.call(this, t, n.default.MEDIA_ATTACHING) || this
								}
								return a(t, e), t.prototype.destroy = function() {
									this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
								}, t.prototype.onMediaAttaching = function(e) {
									var t = this.hls.config;
									t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
								}, t.prototype.checkFPS = function(e, t, r) {
									var i = l.now();
									if (t) {
										if (this.lastTime) {
											var a = i - this.lastTime,
												s = r - this.lastDroppedFrames,
												u = t - this.lastDecodedFrames,
												d = 1e3 * s / a,
												c = this.hls;
											if (c.trigger(n.default.FPS_DROP, {
													currentDropped: s,
													currentDecoded: u,
													totalDroppedFrames: r
												}), d > 0 && s > c.config.fpsDroppedMonitoringThreshold * u) {
												var f = c.currentLevel;
												o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + f), f > 0 && (-1 === c.autoLevelCapping || c.autoLevelCapping >= f) && (f -= 1, c.trigger(n.default.FPS_DROP_LEVEL_CAPPING, {
													level: f,
													droppedLevel: c.currentLevel
												}), c.autoLevelCapping = f, c.streamController.nextLevelSwitch())
											}
										}
										this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t
									}
								}, t.prototype.checkFPSInterval = function() {
									var e = this.video;
									if (e)
										if (this.isVideoPlaybackQualityAvailable) {
											var t = e.getVideoPlaybackQuality();
											this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
										} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
								}, t
							}(s.default);
						t.default = u
					},
					"./src/controller/fragment-finders.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./src/utils/binary-search.js");

							function a(e, t, r) {
								void 0 === e && (e = 0), void 0 === t && (t = 0);
								var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
								return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
							}

							function n(e, t, r) {
								var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
								return r.endProgramDateTime - i > e
							}
							t.findFragmentByPDT = function(t, r, i) {
								if (!Array.isArray(t) || !t.length || !e.isFinite(r)) return null;
								if (r < t[0].programDateTime) return null;
								if (r >= t[t.length - 1].endProgramDateTime) return null;
								i = i || 0;
								for (var a = 0; a < t.length; ++a) {
									var s = t[a];
									if (n(r, i, s)) return s
								}
								return null
							}, t.findFragmentByPTS = function(e, t, r, n) {
								void 0 === r && (r = 0), void 0 === n && (n = 0);
								var s = e ? t[e.sn - t[0].sn + 1] : null;
								return s && !a(r, n, s) ? s : i.default.search(t, a.bind(null, r, n))
							}, t.fragmentWithinToleranceTest = a, t.pdtWithinToleranceTest = n
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/fragment-tracker.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/event-handler.js"),
								s = r("./src/events.js");
							t.FragmentState = {
								NOT_LOADED: "NOT_LOADED",
								APPENDING: "APPENDING",
								PARTIAL: "PARTIAL",
								OK: "OK"
							};
							var o = function(r) {
								function i(e) {
									var t = r.call(this, e, s.default.BUFFER_APPENDED, s.default.FRAG_BUFFERED, s.default.FRAG_LOADED) || this;
									return t.bufferPadding = .2, t.fragments = Object.create(null), t.timeRanges = Object.create(null), t.config = e.config, t
								}
								return a(i, r), i.prototype.destroy = function() {
									this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, n.default.prototype.destroy.call(this), r.prototype.destroy.call(this)
								}, i.prototype.getBufferedFrag = function(e, t) {
									var r = this.fragments,
										i = Object.keys(r).filter((function(i) {
											var a = r[i];
											if (a.body.type !== t) return !1;
											if (!a.buffered) return !1;
											var n = a.body;
											return n.startPTS <= e && e <= n.endPTS
										}));
									if (0 === i.length) return null;
									var a = i.pop();
									return r[a].body
								}, i.prototype.detectEvictedFragments = function(e, t) {
									var r, i, a = this;
									Object.keys(this.fragments).forEach((function(n) {
										var s = a.fragments[n];
										if (!0 === s.buffered) {
											var o = s.range[e];
											if (o) {
												r = o.time;
												for (var l = 0; l < r.length; l++)
													if (i = r[l], !1 === a.isTimeBuffered(i.startPTS, i.endPTS, t)) {
														a.removeFragment(s.body);
														break
													}
											}
										}
									}))
								}, i.prototype.detectPartialFragments = function(e) {
									var t = this,
										r = this.getFragmentKey(e),
										i = this.fragments[r];
									i && (i.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
										if (e.hasElementaryStream(r)) {
											var a = t.timeRanges[r];
											i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
										}
									})))
								}, i.prototype.getBufferedTimes = function(e, t, r) {
									for (var i, a, n = [], s = !1, o = 0; o < r.length; o++) {
										if (i = r.start(o) - this.bufferPadding, a = r.end(o) + this.bufferPadding, e >= i && t <= a) {
											n.push({
												startPTS: Math.max(e, r.start(o)),
												endPTS: Math.min(t, r.end(o))
											});
											break
										}
										if (e < a && t > i) n.push({
											startPTS: Math.max(e, r.start(o)),
											endPTS: Math.min(t, r.end(o))
										}), s = !0;
										else if (t <= i) break
									}
									return {
										time: n,
										partial: s
									}
								}, i.prototype.getFragmentKey = function(e) {
									return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
								}, i.prototype.getPartialFragment = function(e) {
									var t, r, i, a = this,
										n = null,
										s = 0;
									return Object.keys(this.fragments).forEach((function(o) {
										var l = a.fragments[o];
										a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding, i = l.body.endPTS + a.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), s <= t && (n = l.body, s = t)))
									})), n
								}, i.prototype.getState = function(e) {
									var r = this.getFragmentKey(e),
										i = this.fragments[r],
										a = t.FragmentState.NOT_LOADED;
									return void 0 !== i && (a = i.buffered ? !0 === this.isPartial(i) ? t.FragmentState.PARTIAL : t.FragmentState.OK : t.FragmentState.APPENDING), a
								}, i.prototype.isPartial = function(e) {
									return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
								}, i.prototype.isTimeBuffered = function(e, t, r) {
									for (var i, a, n = 0; n < r.length; n++) {
										if (i = r.start(n) - this.bufferPadding, a = r.end(n) + this.bufferPadding, e >= i && t <= a) return !0;
										if (t <= i) return !1
									}
									return !1
								}, i.prototype.onFragLoaded = function(t) {
									var r = t.frag;
									e.isFinite(r.sn) && !r.bitrateTest && (this.fragments[this.getFragmentKey(r)] = {
										body: r,
										range: Object.create(null),
										buffered: !1
									})
								}, i.prototype.onBufferAppended = function(e) {
									var t = this;
									this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach((function(e) {
										var r = t.timeRanges[e];
										t.detectEvictedFragments(e, r)
									}))
								}, i.prototype.onFragBuffered = function(e) {
									this.detectPartialFragments(e.frag)
								}, i.prototype.hasFragment = function(e) {
									var t = this.getFragmentKey(e);
									return void 0 !== this.fragments[t]
								}, i.prototype.removeFragment = function(e) {
									var t = this.getFragmentKey(e);
									delete this.fragments[t]
								}, i.prototype.removeAllFragments = function() {
									this.fragments = Object.create(null)
								}, i
							}(n.default);
							t.FragmentTracker = o
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/gap-controller.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/buffer-helper.js"),
							a = r("./src/errors.js"),
							n = r("./src/events.js"),
							s = r("./src/utils/logger.js"),
							o = function() {
								function e(e, t, r, i) {
									this.config = e, this.media = t, this.fragmentTracker = r, this.hls = i, this.stallReported = !1
								}
								return e.prototype.poll = function(e, t) {
									var r = this.config,
										a = this.media,
										n = a.currentTime,
										o = window.performance.now();
									if (n !== e) return this.stallReported && (s.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(o - this.stalled) + "ms"), this.stallReported = !1), this.stalled = null, void(this.nudgeRetry = 0);
									if (!(a.ended || !a.buffered.length || a.readyState > 2 || a.seeking && i.BufferHelper.isBuffered(a, n))) {
										var l = o - this.stalled,
											u = i.BufferHelper.bufferInfo(a, n, r.maxBufferHole);
										this.stalled ? (l >= 1e3 && this._reportStall(u.len), this._tryFixBufferStall(u, l)) : this.stalled = o
									}
								}, e.prototype._tryFixBufferStall = function(e, t) {
									var r = this.config,
										i = this.fragmentTracker,
										a = this.media.currentTime,
										n = i.getPartialFragment(a);
									n && this._trySkipBufferHole(n), e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
								}, e.prototype._reportStall = function(e) {
									var t = this.hls,
										r = this.media;
									this.stallReported || (this.stallReported = !0, s.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(n.default.ERROR, {
										type: a.ErrorTypes.MEDIA_ERROR,
										details: a.ErrorDetails.BUFFER_STALLED_ERROR,
										fatal: !1,
										buffer: e
									}))
								}, e.prototype._trySkipBufferHole = function(e) {
									for (var t = this.hls, r = this.media, i = r.currentTime, o = 0, l = 0; l < r.buffered.length; l++) {
										var u = r.buffered.start(l);
										if (i >= o && i < u) return r.currentTime = Math.max(u, r.currentTime + .1), s.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + r.currentTime), this.stalled = null, void t.trigger(n.default.ERROR, {
											type: a.ErrorTypes.MEDIA_ERROR,
											details: a.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
											fatal: !1,
											reason: "fragment loaded with buffer holes, seeking from " + i + " to " + r.currentTime,
											frag: e
										});
										o = r.buffered.end(l)
									}
								}, e.prototype._tryNudgeBuffer = function() {
									var e = this.config,
										t = this.hls,
										r = this.media,
										i = r.currentTime,
										o = (this.nudgeRetry || 0) + 1;
									if (this.nudgeRetry = o, o < e.nudgeMaxRetry) {
										var l = i + o * e.nudgeOffset;
										s.logger.log("adjust currentTime from " + i + " to " + l), r.currentTime = l, t.trigger(n.default.ERROR, {
											type: a.ErrorTypes.MEDIA_ERROR,
											details: a.ErrorDetails.BUFFER_NUDGE_ON_STALL,
											fatal: !1
										})
									} else s.logger.error("still stuck in high buffer @" + i + " after " + e.nudgeMaxRetry + ", raise fatal error"), t.trigger(n.default.ERROR, {
										type: a.ErrorTypes.MEDIA_ERROR,
										details: a.ErrorDetails.BUFFER_STALLED_ERROR,
										fatal: !0
									})
								}, e
							}();
						t.default = o
					},
					"./src/controller/id3-track-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							s = r("./src/event-handler.js"),
							o = r("./src/demux/id3.js"),
							l = r("./src/utils/texttrack-utils.js"),
							u = function(e) {
								function t(t) {
									var r = e.call(this, t, n.default.MEDIA_ATTACHED, n.default.MEDIA_DETACHING, n.default.FRAG_PARSING_METADATA) || this;
									return r.id3Track = void 0, r.media = void 0, r
								}
								return a(t, e), t.prototype.destroy = function() {
									s.default.prototype.destroy.call(this)
								}, t.prototype.onMediaAttached = function(e) {
									this.media = e.media, this.media
								}, t.prototype.onMediaDetaching = function() {
									l.clearCurrentCues(this.id3Track), this.id3Track = void 0, this.media = void 0
								}, t.prototype.getID3Track = function(e) {
									for (var t = 0; t < e.length; t++) {
										var r = e[t];
										if ("metadata" === r.kind && "id3" === r.label) return l.sendAddTrackEvent(r, this.media), r
									}
									return this.media.addTextTrack("metadata", "id3")
								}, t.prototype.onFragParsingMetadata = function(e) {
									var t = e.frag,
										r = e.samples;
									this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
									for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, a = 0; a < r.length; a++) {
										var n = o.default.getID3Frames(r[a].data);
										if (n) {
											var s = r[a].pts,
												l = a < r.length - 1 ? r[a + 1].pts : t.endPTS;
											s === l && (l += 1e-4);
											for (var u = 0; u < n.length; u++) {
												var d = n[u];
												if (!o.default.isTimeStampFrame(d)) {
													var c = new i(s, l, "");
													c.value = d, this.id3Track.addCue(c)
												}
											}
										}
									}
								}, t
							}(s.default);
						t.default = u
					},
					"./src/controller/level-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n, s = r("./src/events.js"),
							o = r("./src/event-handler.js"),
							l = r("./src/utils/logger.js"),
							u = r("./src/errors.js"),
							d = r("./src/utils/codecs.js"),
							c = r("./src/controller/level-helper.js"),
							f = (window.performance, function(e) {
								function t(t) {
									var r = e.call(this, t, s.default.MANIFEST_LOADED, s.default.LEVEL_LOADED, s.default.AUDIO_TRACK_SWITCHED, s.default.FRAG_LOADED, s.default.ERROR) || this;
									return r.canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, n = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r
								}
								return a(t, e), t.prototype.onHandlerDestroying = function() {
									this.clearTimer(), this.manualLevelIndex = -1
								}, t.prototype.clearTimer = function() {
									null !== this.timer && (clearTimeout(this.timer), this.timer = null)
								}, t.prototype.startLoad = function() {
									var e = this._levels;
									this.canload = !0, this.levelRetryCount = 0, e && e.forEach((function(e) {
										e.loadError = 0;
										var t = e.details;
										t && t.live && (e.details = void 0)
									})), null !== this.timer && this.loadLevel()
								}, t.prototype.stopLoad = function() {
									this.canload = !1
								}, t.prototype.onManifestLoaded = function(e) {
									var t, r = [],
										i = [],
										a = {},
										o = null,
										f = !1,
										h = !1;
									if (e.levels.forEach((function(e) {
											var t = e.attrs;
											e.loadError = 0, e.fragmentError = !1, f = f || !!e.videoCodec, h = h || !!e.audioCodec, n && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (o = a[e.bitrate]) ? o.url.push(e.url) : (e.url = [e.url], e.urlId = 0, a[e.bitrate] = e, r.push(e)), t && (t.AUDIO && (h = !0, c.addGroupId(o || e, "audio", t.AUDIO)), t.SUBTITLES && c.addGroupId(o || e, "text", t.SUBTITLES))
										})), f && h && (r = r.filter((function(e) {
											return !!e.videoCodec
										}))), r = r.filter((function(e) {
											var t = e.audioCodec,
												r = e.videoCodec;
											return (!t || d.isCodecSupportedInMp4(t, "audio")) && (!r || d.isCodecSupportedInMp4(r, "video"))
										})), e.audioTracks && (i = e.audioTracks.filter((function(e) {
											return !e.audioCodec || d.isCodecSupportedInMp4(e.audioCodec, "audio")
										}))).forEach((function(e, t) {
											e.id = t
										})), r.length > 0) {
										t = r[0].bitrate, r.sort((function(e, t) {
											return e.bitrate - t.bitrate
										})), this._levels = r;
										for (var p = 0; p < r.length; p++)
											if (r[p].bitrate === t) {
												this._firstLevel = p, l.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
												break
											} this.hls.trigger(s.default.MANIFEST_PARSED, {
											levels: r,
											audioTracks: i,
											firstLevel: this._firstLevel,
											stats: e.stats,
											audio: h,
											video: f,
											altAudio: i.some((function(e) {
												return !!e.url
											}))
										})
									} else this.hls.trigger(s.default.ERROR, {
										type: u.ErrorTypes.MEDIA_ERROR,
										details: u.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
										fatal: !0,
										url: this.hls.url,
										reason: "no level with compatible codecs found in manifest"
									})
								}, Object.defineProperty(t.prototype, "levels", {
									get: function() {
										return this._levels
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "level", {
									get: function() {
										return this.currentLevelIndex
									},
									set: function(e) {
										var t = this._levels;
										t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.setLevelInternal = function(e) {
									var t = this._levels,
										r = this.hls;
									if (e >= 0 && e < t.length) {
										if (this.clearTimer(), this.currentLevelIndex !== e) {
											l.logger.log("switching to level " + e), this.currentLevelIndex = e;
											var i = t[e];
											i.level = e, r.trigger(s.default.LEVEL_SWITCHING, i)
										}
										var a = t[e],
											n = a.details;
										if (!n || n.live) {
											var o = a.urlId;
											r.trigger(s.default.LEVEL_LOADING, {
												url: a.url[o],
												level: e,
												id: o
											})
										}
									} else r.trigger(s.default.ERROR, {
										type: u.ErrorTypes.OTHER_ERROR,
										details: u.ErrorDetails.LEVEL_SWITCH_ERROR,
										level: e,
										fatal: !1,
										reason: "invalid level idx"
									})
								}, Object.defineProperty(t.prototype, "manualLevel", {
									get: function() {
										return this.manualLevelIndex
									},
									set: function(e) {
										this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "firstLevel", {
									get: function() {
										return this._firstLevel
									},
									set: function(e) {
										this._firstLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "startLevel", {
									get: function() {
										if (void 0 === this._startLevel) {
											var e = this.hls.config.startLevel;
											return void 0 !== e ? e : this._firstLevel
										}
										return this._startLevel
									},
									set: function(e) {
										this._startLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.onError = function(e) {
									if (e.fatal) e.type === u.ErrorTypes.NETWORK_ERROR && this.clearTimer();
									else {
										var t, r = !1,
											i = !1;
										switch (e.details) {
											case u.ErrorDetails.FRAG_LOAD_ERROR:
											case u.ErrorDetails.FRAG_LOAD_TIMEOUT:
											case u.ErrorDetails.KEY_LOAD_ERROR:
											case u.ErrorDetails.KEY_LOAD_TIMEOUT:
												t = e.frag.level, i = !0;
												break;
											case u.ErrorDetails.LEVEL_LOAD_ERROR:
											case u.ErrorDetails.LEVEL_LOAD_TIMEOUT:
												t = e.context.level, r = !0;
												break;
											case u.ErrorDetails.REMUX_ALLOC_ERROR:
												t = e.level, r = !0
										}
										void 0 !== t && this.recoverLevel(e, t, r, i)
									}
								}, t.prototype.recoverLevel = function(e, t, r, i) {
									var a, n, s, o = this,
										u = this.hls.config,
										d = e.details,
										c = this._levels[t];
									if (c.loadError++, c.fragmentError = i, r) {
										if (!(this.levelRetryCount + 1 <= u.levelLoadingMaxRetry)) return l.logger.error("level controller, cannot recover from " + d + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
										n = Math.min(Math.pow(2, this.levelRetryCount) * u.levelLoadingRetryDelay, u.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() {
											return o.loadLevel()
										}), n), e.levelRetry = !0, this.levelRetryCount++, l.logger.warn("level controller, " + d + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
									}(r || i) && ((a = c.url.length) > 1 && c.loadError < a ? (c.urlId = (c.urlId + 1) % a, c.details = void 0, l.logger.warn("level controller, " + d + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1, l.logger.warn("level controller, " + d + ": switch to " + s), this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (l.logger.warn("level controller, " + d + ": reload a fragment"), this.currentLevelIndex = null))
								}, t.prototype.onFragLoaded = function(e) {
									var t = e.frag;
									if (void 0 !== t && "main" === t.type) {
										var r = this._levels[t.level];
										void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
									}
								}, t.prototype.onLevelLoaded = function(e) {
									var t = this,
										r = e.level,
										i = e.details;
									if (r === this.currentLevelIndex) {
										var a = this._levels[r];
										if (a.fragmentError || (a.loadError = 0, this.levelRetryCount = 0), i.live) {
											var n = c.computeReloadInterval(a.details, i, e.stats.trequest);
											l.logger.log("live playlist, reload in " + Math.round(n) + " ms"), this.timer = setTimeout((function() {
												return t.loadLevel()
											}), n)
										} else this.clearTimer()
									}
								}, t.prototype.onAudioTrackSwitched = function(e) {
									var t = this.hls.audioTracks[e.id].groupId,
										r = this.hls.levels[this.currentLevelIndex];
									if (r && r.audioGroupIds) {
										for (var i = -1, a = 0; a < r.audioGroupIds.length; a++)
											if (r.audioGroupIds[a] === t) {
												i = a;
												break
											} i !== r.urlId && (r.urlId = i, this.startLoad())
									}
								}, t.prototype.loadLevel = function() {
									if (l.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
										var e = this._levels[this.currentLevelIndex];
										if ("object" == typeof e && e.url.length > 0) {
											var t = this.currentLevelIndex,
												r = e.urlId,
												i = e.url[r];
											l.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(s.default.LEVEL_LOADING, {
												url: i,
												level: t,
												id: r
											})
										}
									}
								}, Object.defineProperty(t.prototype, "nextLoadLevel", {
									get: function() {
										return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
									},
									set: function(e) {
										this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
									},
									enumerable: !0,
									configurable: !0
								}), t
							}(o.default));
						t.default = f
					},
					"./src/controller/level-helper.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./src/utils/logger.js");

							function a(t, r, a) {
								var n = t[r],
									s = t[a],
									o = s.startPTS;
								e.isFinite(o) ? a > r ? (n.duration = o - n.start, n.duration < 0 && i.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (s.duration = n.start - o, s.duration < 0 && i.logger.warn("negative duration computed for frag " + s.sn + ",level " + s.level + ", there should be some duration drift between playlist and fragment!")) : s.start = a > r ? n.start + n.duration : Math.max(n.start - s.duration, 0)
							}

							function n(t, r, i, n, s, o) {
								var l = i;
								if (e.isFinite(r.startPTS)) {
									var u = Math.abs(r.startPTS - i);
									e.isFinite(r.deltaPTS) ? r.deltaPTS = Math.max(u, r.deltaPTS) : r.deltaPTS = u, l = Math.max(i, r.startPTS), i = Math.min(i, r.startPTS), n = Math.max(n, r.endPTS), s = Math.min(s, r.startDTS), o = Math.max(o, r.endDTS)
								}
								var d = i - r.start;
								r.start = r.startPTS = i, r.maxStartPTS = l, r.endPTS = n, r.startDTS = s, r.endDTS = o, r.duration = n - i;
								var c, f, h, p = r.sn;
								if (!t || p < t.startSN || p > t.endSN) return 0;
								for (c = p - t.startSN, (f = t.fragments)[c] = r, h = c; h > 0; h--) a(f, h, h - 1);
								for (h = c; h < f.length - 1; h++) a(f, h, h + 1);
								return t.PTSKnown = !0, d
							}

							function s(e, t, r) {
								if (e && t)
									for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, s = i; s <= a; s++) {
										var o = e.fragments[n + s],
											l = t.fragments[s];
										if (!o || !l) break;
										r(o, l, s)
									}
							}

							function o(e, t) {
								var r = t.startSN - e.startSN,
									i = e.fragments,
									a = t.fragments;
								if (!(r < 0 || r > i.length))
									for (var n = 0; n < a.length; n++) a[n].start += i[r].start
							}
							t.addGroupId = function(e, t, r) {
								switch (t) {
									case "audio":
										e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
										break;
									case "text":
										e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
								}
							}, t.updatePTS = a, t.updateFragPTSDTS = n, t.mergeDetails = function(t, r) {
								r.initSegment && t.initSegment && (r.initSegment = t.initSegment);
								var a, l = 0;
								if (s(t, r, (function(t, i) {
										l = t.cc - i.cc, e.isFinite(t.startPTS) && (i.start = i.startPTS = t.startPTS, i.endPTS = t.endPTS, i.duration = t.duration, i.backtracked = t.backtracked, i.dropped = t.dropped, a = i), r.PTSKnown = !0
									})), r.PTSKnown) {
									if (l) {
										i.logger.log("discontinuity sliding from playlist, take drift into account");
										for (var u = r.fragments, d = 0; d < u.length; d++) u[d].cc += l
									}
									a ? n(r, a, a.startPTS, a.endPTS, a.startDTS, a.endDTS) : o(t, r), r.PTSKnown = t.PTSKnown
								}
							}, t.mergeSubtitlePlaylists = function(e, t, r) {
								void 0 === r && (r = 0);
								var i = -1;
								s(e, t, (function(e, t, r) {
									t.start = e.start, i = r
								}));
								var a = t.fragments;
								if (i < 0) a.forEach((function(e) {
									e.start += r
								}));
								else
									for (var n = i + 1; n < a.length; n++) a[n].start = a[n - 1].start + a[n - 1].duration
							}, t.mapFragmentIntersection = s, t.adjustSliding = o, t.computeReloadInterval = function(e, t, r) {
								var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
									a = i / 2;
								return e && t.endSN === e.endSN && (i = a), r && (i = Math.max(a, i - (window.performance.now() - r))), Math.round(i)
							}
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/binary-search.js"),
								s = r("./src/utils/buffer-helper.js"),
								o = r("./src/demux/demuxer.js"),
								l = r("./src/events.js"),
								u = r("./src/controller/fragment-tracker.js"),
								d = r("./src/loader/fragment.js"),
								c = r("./src/loader/playlist-loader.js"),
								f = r("./src/controller/level-helper.js"),
								h = r("./src/utils/time-ranges.js"),
								p = r("./src/errors.js"),
								g = r("./src/utils/logger.js"),
								m = r("./src/utils/discontinuities.js"),
								v = r("./src/controller/fragment-finders.js"),
								y = r("./src/controller/gap-controller.js"),
								E = r("./src/controller/base-stream-controller.js"),
								_ = function(t) {
									function r(e, r) {
										var i = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.MANIFEST_LOADING, l.default.MANIFEST_PARSED, l.default.LEVEL_LOADED, l.default.KEY_LOADED, l.default.FRAG_LOADED, l.default.FRAG_LOAD_EMERGENCY_ABORTED, l.default.FRAG_PARSING_INIT_SEGMENT, l.default.FRAG_PARSING_DATA, l.default.FRAG_PARSED, l.default.ERROR, l.default.AUDIO_TRACK_SWITCHING, l.default.AUDIO_TRACK_SWITCHED, l.default.BUFFER_CREATED, l.default.BUFFER_APPENDED, l.default.BUFFER_FLUSHED) || this;
										return i.fragmentTracker = r, i.config = e.config, i.audioCodecSwap = !1, i._state = E.State.STOPPED, i.stallReported = !1, i.gapController = null, i
									}
									return a(r, t), r.prototype.startLoad = function(e) {
										if (this.levels) {
											var t = this.lastCurrentTime,
												r = this.hls;
											if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
												var i = r.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
											}
											t > 0 && -1 === e && (g.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = E.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
										} else this.forceStartLoad = !0, this.state = E.State.STOPPED
									}, r.prototype.stopLoad = function() {
										this.forceStartLoad = !1, t.prototype.stopLoad.call(this)
									}, r.prototype.doTick = function() {
										switch (this.state) {
											case E.State.BUFFER_FLUSHING:
												this.fragLoadError = 0;
												break;
											case E.State.IDLE:
												this._doTickIdle();
												break;
											case E.State.WAITING_LEVEL:
												var e = this.levels[this.level];
												e && e.details && (this.state = E.State.IDLE);
												break;
											case E.State.FRAG_LOADING_WAITING_RETRY:
												var t = window.performance.now(),
													r = this.retryDate;
												(!r || t >= r || this.media && this.media.seeking) && (g.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = E.State.IDLE);
												break;
											case E.State.ERROR:
											case E.State.STOPPED:
											case E.State.FRAG_LOADING:
											case E.State.PARSING:
											case E.State.PARSED:
											case E.State.ENDED:
										}
										this._checkBuffer(), this._checkFragmentChanged()
									}, r.prototype._doTickIdle = function() {
										var e = this.hls,
											t = e.config,
											r = this.media;
										if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
											var i;
											i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
											var a = e.nextLoadLevel,
												n = this.levels[a];
											if (n) {
												var o, u = n.bitrate;
												o = u ? Math.max(8 * t.maxBufferSize / u, t.maxBufferLength) : t.maxBufferLength, o = Math.min(o, t.maxMaxBufferLength);
												var d = s.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, t.maxBufferHole),
													c = d.len;
												if (!(c >= o)) {
													g.logger.trace("buffer length of " + c.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = a;
													var f = n.details;
													if (!f || f.live && this.levelLastLoaded !== a) this.state = E.State.WAITING_LEVEL;
													else {
														if (this._streamEnded(d, f)) {
															var h = {};
															return this.altAudio && (h.type = "video"), this.hls.trigger(l.default.BUFFER_EOS, h), void(this.state = E.State.ENDED)
														}
														this._fetchPayloadOrEos(i, d, f)
													}
												}
											}
										}
									}, r.prototype._fetchPayloadOrEos = function(e, t, r) {
										var i = this.fragPrevious,
											a = this.level,
											n = r.fragments,
											s = n.length;
										if (0 !== s) {
											var o, l = n[0].start,
												u = n[s - 1].start + n[s - 1].duration,
												d = t.end;
											if (r.initSegment && !r.initSegment.data) o = r.initSegment;
											else if (r.live) {
												var c = this.config.initialLiveManifestSize;
												if (s < c) return void g.logger.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + c);
												if (null === (o = this._ensureFragmentAtLivePoint(r, d, l, u, i, n, s))) return
											} else d < l && (o = n[0]);
											o || (o = this._findFragment(l, i, s, n, d, u, r)), o && (o.encrypted ? (g.logger.log("Loading key for " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a), this._loadKey(o)) : (g.logger.log("Loading " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + d.toFixed(3)), this._loadFragment(o)))
										}
									}, r.prototype._ensureFragmentAtLivePoint = function(e, t, r, i, a, s, o) {
										var l, u = this.hls.config,
											d = this.media,
											c = void 0 !== u.liveMaxLatencyDuration ? u.liveMaxLatencyDuration : u.liveMaxLatencyDurationCount * e.targetduration;
										if (t < Math.max(r - u.maxFragLookUpTolerance, i - c)) {
											var f = this.liveSyncPosition = this.computeLivePosition(r, e);
											g.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + f.toFixed(3)), t = f, d && d.readyState && d.duration > f && (d.currentTime = f), this.nextLoadPosition = f
										}
										if (e.PTSKnown && t > i && d && d.readyState) return null;
										if (this.startFragRequested && !e.PTSKnown) {
											if (a)
												if (e.hasProgramDateTime) g.logger.log("live playlist, switching playlist, load frag with same PDT: " + a.programDateTime), l = v.findFragmentByPDT(s, a.endProgramDateTime, u.maxFragLookUpTolerance);
												else {
													var h = a.sn + 1;
													if (h >= e.startSN && h <= e.endSN) {
														var p = s[h - e.startSN];
														a.cc === p.cc && (l = p, g.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
													}
													l || (l = n.default.search(s, (function(e) {
														return a.cc - e.cc
													}))) && g.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
												} l || (l = s[Math.min(o - 1, Math.round(o / 2))], g.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
										}
										return l
									}, r.prototype._findFragment = function(e, t, r, i, a, n, s) {
										var o, l = this.hls.config;
										if (a < n) {
											var u = a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance;
											o = v.findFragmentByPTS(t, i, a, u)
										} else o = i[r - 1];
										if (o) {
											var d = o.sn - s.startSN,
												c = t && o.level === t.level,
												f = i[d - 1],
												h = i[d + 1];
											if (t && o.sn === t.sn)
												if (c && !o.backtracked)
													if (o.sn < s.endSN) {
														var p = t.deltaPTS;
														p && p > l.maxBufferHole && t.dropped && d ? (o = f, g.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (o = h, g.logger.log("SN just loaded, load next one: " + o.sn, o))
													} else o = null;
											else o.backtracked && (h && h.backtracked ? (g.logger.warn("Already backtracked from fragment " + h.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + h.sn), o = h) : (g.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, f ? (o = f).backtracked = !0 : d && (o = null)))
										}
										return o
									}, r.prototype._loadKey = function(e) {
										this.state = E.State.KEY_LOADING, this.hls.trigger(l.default.KEY_LOADING, {
											frag: e
										})
									}, r.prototype._loadFragment = function(t) {
										var r = this.fragmentTracker.getState(t);
										this.fragCurrent = t, this.startFragRequested = !0, e.isFinite(t.sn) && !t.bitrateTest && (this.nextLoadPosition = t.start + t.duration), t.backtracked || r === u.FragmentState.NOT_LOADED || r === u.FragmentState.PARTIAL ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(l.default.FRAG_LOADING, {
											frag: t
										}), this.demuxer || (this.demuxer = new o.default(this.hls, "main")), this.state = E.State.FRAG_LOADING) : r === u.FragmentState.APPENDING && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
									}, Object.defineProperty(r.prototype, "state", {
										get: function() {
											return this._state
										},
										set: function(e) {
											if (this.state !== e) {
												var t = this.state;
												this._state = e, g.logger.log("main stream:" + t + "->" + e), this.hls.trigger(l.default.STREAM_STATE_TRANSITION, {
													previousState: t,
													nextState: e
												})
											}
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.getBufferedFrag = function(e) {
										return this.fragmentTracker.getBufferedFrag(e, c.default.LevelType.MAIN)
									}, Object.defineProperty(r.prototype, "currentLevel", {
										get: function() {
											var e = this.media;
											if (e) {
												var t = this.getBufferedFrag(e.currentTime);
												if (t) return t.level
											}
											return -1
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "nextBufferedFrag", {
										get: function() {
											var e = this.media;
											return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.followingBufferedFrag = function(e) {
										return e ? this.getBufferedFrag(e.endPTS + .5) : null
									}, Object.defineProperty(r.prototype, "nextLevel", {
										get: function() {
											var e = this.nextBufferedFrag;
											return e ? e.level : -1
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._checkFragmentChanged = function() {
										var e, t, r = this.media;
										if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), s.BufferHelper.isBuffered(r, t) ? e = this.getBufferedFrag(t) : s.BufferHelper.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
											var i = e;
											if (i !== this.fragPlaying) {
												this.hls.trigger(l.default.FRAG_CHANGED, {
													frag: i
												});
												var a = i.level;
												this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(l.default.LEVEL_SWITCHED, {
													level: a
												}), this.fragPlaying = i
											}
										}
									}, r.prototype.immediateLevelSwitch = function() {
										if (g.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
											this.immediateSwitch = !0;
											var t = this.media,
												r = void 0;
											t ? (r = t.paused, t.pause()) : r = !0, this.previouslyPaused = r
										}
										var i = this.fragCurrent;
										i && i.loader && i.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)
									}, r.prototype.immediateLevelSwitchEnd = function() {
										var e = this.media;
										e && e.buffered.length && (this.immediateSwitch = !1, s.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
									}, r.prototype.nextLevelSwitch = function() {
										var t = this.media;
										if (t && t.readyState) {
											var r, i = void 0,
												a = void 0;
											if ((r = this.getBufferedFrag(t.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) i = 0;
											else {
												var n = this.hls.nextLoadLevel,
													s = this.levels[n],
													o = this.fragLastKbps;
												i = o && this.fragCurrent ? this.fragCurrent.duration * s.bitrate / (1e3 * o) + 1 : 0
											}
											if ((a = this.getBufferedFrag(t.currentTime + i)) && (a = this.followingBufferedFrag(a))) {
												var l = this.fragCurrent;
												l && l.loader && l.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(a.maxStartPTS, e.POSITIVE_INFINITY)
											}
										}
									}, r.prototype.flushMainBuffer = function(e, t) {
										this.state = E.State.BUFFER_FLUSHING;
										var r = {
											startOffset: e,
											endOffset: t
										};
										this.altAudio && (r.type = "video"), this.hls.trigger(l.default.BUFFER_FLUSHING, r)
									}, r.prototype.onMediaAttached = function(e) {
										var t = this.media = this.mediaBuffer = e.media;
										this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
										var r = this.config;
										this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new y.default(r, t, this.fragmentTracker, this.hls)
									}, r.prototype.onMediaDetaching = function() {
										var e = this.media;
										e && e.ended && (g.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
										var t = this.levels;
										t && t.forEach((function(e) {
											e.details && e.details.fragments.forEach((function(e) {
												e.backtracked = void 0
											}))
										})), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
									}, r.prototype.onMediaSeeked = function() {
										var t = this.media,
											r = t ? t.currentTime : void 0;
										e.isFinite(r) && g.logger.log("media seeked to " + r.toFixed(3)), this.tick()
									}, r.prototype.onManifestLoading = function() {
										g.logger.log("trigger BUFFER_RESET"), this.hls.trigger(l.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
									}, r.prototype.onManifestParsed = function(e) {
										var t, r = !1,
											i = !1;
										e.levels.forEach((function(e) {
											(t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
										})), this.audioCodecSwitch = r && i, this.audioCodecSwitch && g.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1;
										var a = this.config;
										(a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
									}, r.prototype.onLevelLoaded = function(t) {
										var r = t.details,
											i = t.level,
											a = this.levels[this.levelLastLoaded],
											n = this.levels[i],
											s = r.totalduration,
											o = 0;
										if (g.logger.log("level " + i + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + s), r.live) {
											var u = n.details;
											u && r.fragments.length > 0 ? (f.mergeDetails(u, r), o = r.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, u), r.PTSKnown && e.isFinite(o) ? g.logger.log("live playlist sliding:" + o.toFixed(3)) : (g.logger.log("live playlist - outdated PTS, unknown sliding"), m.alignStream(this.fragPrevious, a, r))) : (g.logger.log("live playlist - first load, unknown sliding"), r.PTSKnown = !1, m.alignStream(this.fragPrevious, a, r))
										} else r.PTSKnown = !1;
										if (n.details = r, this.levelLastLoaded = i, this.hls.trigger(l.default.LEVEL_UPDATED, {
												details: r,
												level: i
											}), !1 === this.startFragRequested) {
											if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
												var d = r.startTimeOffset;
												e.isFinite(d) ? (d < 0 && (g.logger.log("negative start time offset " + d + ", count from end of last fragment"), d = o + s + d), g.logger.log("start time offset found in playlist, adjust startPosition to " + d), this.startPosition = d) : r.live ? (this.startPosition = this.computeLivePosition(o, r), g.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
											}
											this.nextLoadPosition = this.startPosition
										}
										this.state === E.State.WAITING_LEVEL && (this.state = E.State.IDLE), this.tick()
									}, r.prototype.onKeyLoaded = function() {
										this.state === E.State.KEY_LOADING && (this.state = E.State.IDLE, this.tick())
									}, r.prototype.onFragLoaded = function(e) {
										var t = this.fragCurrent,
											r = this.hls,
											i = this.levels,
											a = this.media,
											n = e.frag;
										if (this.state === E.State.FRAG_LOADING && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
											var s = e.stats,
												u = i[t.level],
												d = u.details;
											if (this.bitrateTest = !1, this.stats = s, g.logger.log("Loaded " + t.sn + " of [" + d.startSN + " ," + d.endSN + "],level " + t.level), n.bitrateTest && r.nextLoadLevel) this.state = E.State.IDLE, this.startFragRequested = !1, s.tparsed = s.tbuffered = window.performance.now(), r.trigger(l.default.FRAG_BUFFERED, {
												stats: s,
												frag: t,
												id: "main"
											}), this.tick();
											else if ("initSegment" === n.sn) this.state = E.State.IDLE, s.tparsed = s.tbuffered = window.performance.now(), d.initSegment.data = e.payload, r.trigger(l.default.FRAG_BUFFERED, {
												stats: s,
												frag: t,
												id: "main"
											}), this.tick();
											else {
												g.logger.log("Parsing " + t.sn + " of [" + d.startSN + " ," + d.endSN + "],level " + t.level + ", cc " + t.cc), this.state = E.State.PARSING, this.pendingBuffering = !0, this.appended = !1, n.bitrateTest && (n.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
													frag: n
												}));
												var c = !(a && a.seeking) && (d.PTSKnown || !d.live),
													f = d.initSegment ? d.initSegment.data : [],
													h = this._getAudioCodec(u);
												(this.demuxer = this.demuxer || new o.default(this.hls, "main")).push(e.payload, f, h, u.videoCodec, t, d.totalduration, c)
											}
										}
										this.fragLoadError = 0
									}, r.prototype.onFragParsingInitSegment = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === E.State.PARSING) {
											var i = e.tracks,
												a = void 0,
												n = void 0;
											if (i.audio && this.altAudio && delete i.audio, n = i.audio) {
												var s = this.levels[this.level].audioCodec,
													o = navigator.userAgent.toLowerCase();
												s && this.audioCodecSwap && (g.logger.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== o.indexOf("android") && "audio/mpeg" !== n.container && (s = "mp4a.40.2", g.logger.log("Android: force audio codec to " + s)), n.levelCodec = s, n.id = e.id
											}
											for (a in (n = i.video) && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), this.hls.trigger(l.default.BUFFER_CODECS, i), i) {
												n = i[a], g.logger.log("main track:" + a + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
												var u = n.initSegment;
												u && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(l.default.BUFFER_APPENDING, {
													type: a,
													data: u,
													parent: "main",
													content: "initSegment"
												}))
											}
											this.tick()
										}
									}, r.prototype.onFragParsingData = function(t) {
										var r = this,
											i = this.fragCurrent,
											a = t.frag;
										if (i && "main" === t.id && a.sn === i.sn && a.level === i.level && ("audio" !== t.type || !this.altAudio) && this.state === E.State.PARSING) {
											var n = this.levels[this.level],
												s = i;
											if (e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), !0 === t.hasAudio && s.addElementaryStream(d.default.ElementaryStreamTypes.AUDIO), !0 === t.hasVideo && s.addElementaryStream(d.default.ElementaryStreamTypes.VIDEO), g.logger.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
												if (s.dropped = t.dropped, s.dropped)
													if (s.backtracked) g.logger.warn("Already backtracked on this fragment, appending with the gap", s.sn);
													else {
														var o = n.details;
														if (!o || s.sn !== o.startSN) return g.logger.warn("missing video frame(s), backtracking fragment", s.sn), this.fragmentTracker.removeFragment(s), s.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = E.State.IDLE, this.fragPrevious = s, void this.tick();
														g.logger.warn("missing video frame(s) on first frag, appending with gap", s.sn)
													}
											else s.backtracked = !1;
											var u = f.updateFragPTSDTS(n.details, s, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
												c = this.hls;
											c.trigger(l.default.LEVEL_PTS_UPDATED, {
												details: n.details,
												level: this.level,
												drift: u,
												type: t.type,
												start: t.startPTS,
												end: t.endPTS
											}), [t.data1, t.data2].forEach((function(e) {
												e && e.length && r.state === E.State.PARSING && (r.appended = !0, r.pendingBuffering = !0, c.trigger(l.default.BUFFER_APPENDING, {
													type: t.type,
													data: e,
													parent: "main",
													content: "data"
												}))
											})), this.tick()
										}
									}, r.prototype.onFragParsed = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === E.State.PARSING && (this.stats.tparsed = window.performance.now(), this.state = E.State.PARSED, this._checkAppendedParsed())
									}, r.prototype.onAudioTrackSwitching = function(t) {
										var r = !!t.url,
											i = t.id;
										if (!r) {
											if (this.mediaBuffer !== this.media) {
												g.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
												var a = this.fragCurrent;
												a.loader && (g.logger.log("switching to main audio track, cancel main fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = E.State.IDLE
											}
											var n = this.hls;
											n.trigger(l.default.BUFFER_FLUSHING, {
												startOffset: 0,
												endOffset: e.POSITIVE_INFINITY,
												type: "audio"
											}), n.trigger(l.default.AUDIO_TRACK_SWITCHED, {
												id: i
											}), this.altAudio = !1
										}
									}, r.prototype.onAudioTrackSwitched = function(e) {
										var t = e.id,
											r = !!this.hls.audioTracks[t].url;
										if (r) {
											var i = this.videoBuffer;
											i && this.mediaBuffer !== i && (g.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
										}
										this.altAudio = r, this.tick()
									}, r.prototype.onBufferCreated = function(e) {
										var t, r, i = e.tracks,
											a = !1;
										for (var n in i) {
											var s = i[n];
											"main" === s.id ? (r = n, t = s, "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0
										}
										a && t ? (g.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
									}, r.prototype.onBufferAppended = function(e) {
										if ("main" === e.parent) {
											var t = this.state;
											t !== E.State.PARSING && t !== E.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
										}
									}, r.prototype._checkAppendedParsed = function() {
										if (!(this.state !== E.State.PARSED || this.appended && this.pendingBuffering)) {
											var e = this.fragCurrent;
											if (e) {
												var t = this.mediaBuffer ? this.mediaBuffer : this.media;
												g.logger.log("main buffered : " + h.default.toString(t.buffered)), this.fragPrevious = e;
												var r = this.stats;
												r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(l.default.FRAG_BUFFERED, {
													stats: r,
													frag: e,
													id: "main"
												}), this.state = E.State.IDLE
											}
											this.tick()
										}
									}, r.prototype.onError = function(t) {
										var r = t.frag || this.fragCurrent;
										if (!r || "main" === r.type) {
											var i = !!this.media && s.BufferHelper.isBuffered(this.media, this.media.currentTime) && s.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
											switch (t.details) {
												case p.ErrorDetails.FRAG_LOAD_ERROR:
												case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
												case p.ErrorDetails.KEY_LOAD_ERROR:
												case p.ErrorDetails.KEY_LOAD_TIMEOUT:
													if (!t.fatal)
														if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
															var a = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
															g.logger.warn("mediaController: frag loading failed, retry in " + a + " ms"), this.retryDate = window.performance.now() + a, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = E.State.FRAG_LOADING_WAITING_RETRY
														} else g.logger.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = E.State.ERROR;
													break;
												case p.ErrorDetails.LEVEL_LOAD_ERROR:
												case p.ErrorDetails.LEVEL_LOAD_TIMEOUT:
													this.state !== E.State.ERROR && (t.fatal ? (this.state = E.State.ERROR, g.logger.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== E.State.WAITING_LEVEL || (this.state = E.State.IDLE));
													break;
												case p.ErrorDetails.BUFFER_FULL_ERROR:
													"main" !== t.parent || this.state !== E.State.PARSING && this.state !== E.State.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = E.State.IDLE) : (g.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)))
											}
										}
									}, r.prototype._reduceMaxBufferLength = function(e) {
										var t = this.config;
										return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, g.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
									}, r.prototype._checkBuffer = function() {
										var e = this.media;
										if (e && 0 !== e.readyState) {
											var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
											!this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
										}
									}, r.prototype.onFragLoadEmergencyAborted = function() {
										this.state = E.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
									}, r.prototype.onBufferFlushed = function() {
										var e = this.mediaBuffer ? this.mediaBuffer : this.media;
										e && this.fragmentTracker.detectEvictedFragments(d.default.ElementaryStreamTypes.VIDEO, e.buffered), this.state = E.State.IDLE, this.fragPrevious = null
									}, r.prototype.swapAudioCodec = function() {
										this.audioCodecSwap = !this.audioCodecSwap
									}, r.prototype.computeLivePosition = function(e, t) {
										var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
										return e + Math.max(0, t.totalduration - r)
									}, r.prototype._seekToStartPos = function() {
										var e = this.media,
											t = e.currentTime,
											r = e.seeking ? t : this.startPosition;
										t !== r && (g.logger.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
									}, r.prototype._getAudioCodec = function(e) {
										var t = this.config.defaultAudioCodec || e.audioCodec;
										return this.audioCodecSwap && (g.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
									}, Object.defineProperty(r.prototype, "liveSyncPosition", {
										get: function() {
											return this._liveSyncPosition
										},
										set: function(e) {
											this._liveSyncPosition = e
										},
										enumerable: !0,
										configurable: !0
									}), r
								}(E.default);
							t.default = _
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/subtitle-stream-controller.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							s = r("./src/utils/logger.js"),
							o = r("./src/crypt/decrypter.js"),
							l = r("./src/utils/buffer-helper.js"),
							u = r("./src/controller/fragment-finders.js"),
							d = r("./src/controller/fragment-tracker.js"),
							c = r("./src/controller/base-stream-controller.js"),
							f = r("./src/controller/level-helper.js"),
							h = window.performance,
							p = function(e) {
								function t(t, r) {
									var i = e.call(this, t, n.default.MEDIA_ATTACHED, n.default.MEDIA_DETACHING, n.default.ERROR, n.default.KEY_LOADED, n.default.FRAG_LOADED, n.default.SUBTITLE_TRACKS_UPDATED, n.default.SUBTITLE_TRACK_SWITCH, n.default.SUBTITLE_TRACK_LOADED, n.default.SUBTITLE_FRAG_PROCESSED, n.default.LEVEL_UPDATED) || this;
									return i.fragmentTracker = r, i.config = t.config, i.state = c.State.STOPPED, i.tracks = [], i.tracksBuffered = [], i.currentTrackId = -1, i.decrypter = new o.default(t, t.config), i.lastAVStart = 0, i._onMediaSeeking = i.onMediaSeeking.bind(i), i
								}
								return a(t, e), t.prototype.onSubtitleFragProcessed = function(e) {
									var t = e.frag,
										r = e.success;
									if (this.fragPrevious = t, this.state = c.State.IDLE, r) {
										var i = this.tracksBuffered[this.currentTrackId];
										if (i) {
											for (var a, n = t.start, s = 0; s < i.length; s++)
												if (n >= i[s].start && n <= i[s].end) {
													a = i[s];
													break
												} var o = t.start + t.duration;
											a ? a.end = o : (a = {
												start: n,
												end: o
											}, i.push(a))
										}
									}
								}, t.prototype.onMediaAttached = function(e) {
									var t = e.media;
									this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = c.State.IDLE
								}, t.prototype.onMediaDetaching = function() {
									this.media.removeEventListener("seeking", this._onMediaSeeking), this.media = null, this.state = c.State.STOPPED
								}, t.prototype.onError = function(e) {
									var t = e.frag;
									t && "subtitle" === t.type && (this.state = c.State.IDLE)
								}, t.prototype.onSubtitleTracksUpdated = function(e) {
									var t = this;
									s.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach((function(e) {
										t.tracksBuffered[e.id] = []
									}))
								}, t.prototype.onSubtitleTrackSwitch = function(e) {
									if (this.currentTrackId = e.id, this.tracks && -1 !== this.currentTrackId) {
										var t = this.tracks[this.currentTrackId];
										t && t.details && this.setInterval(500)
									} else this.clearInterval()
								}, t.prototype.onSubtitleTrackLoaded = function(e) {
									var t = e.id,
										r = e.details,
										i = this.currentTrackId,
										a = this.tracks,
										n = a[i];
									t >= a.length || t !== i || !n || (r.live && f.mergeSubtitlePlaylists(n.details, r, this.lastAVStart), n.details = r, this.setInterval(500))
								}, t.prototype.onKeyLoaded = function() {
									this.state === c.State.KEY_LOADING && (this.state = c.State.IDLE)
								}, t.prototype.onFragLoaded = function(e) {
									var t = this.fragCurrent,
										r = e.frag.decryptdata,
										i = e.frag,
										a = this.hls;
									if (this.state === c.State.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
										var s = h.now();
										this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
											var t = h.now();
											a.trigger(n.default.FRAG_DECRYPTED, {
												frag: i,
												payload: e,
												stats: {
													tstart: s,
													tdecrypt: t
												}
											})
										}))
									}
								}, t.prototype.onLevelUpdated = function(e) {
									var t = e.details.fragments;
									this.lastAVStart = t.length ? t[0].start : 0
								}, t.prototype.doTick = function() {
									if (this.media) switch (this.state) {
										case c.State.IDLE:
											var e = this,
												t = e.config,
												r = e.currentTrackId,
												i = e.fragmentTracker,
												a = e.media,
												o = e.tracks;
											if (!o || !o[r] || !o[r].details) break;
											var f = t.maxBufferHole,
												h = t.maxFragLookUpTolerance,
												p = Math.min(t.maxBufferLength, t.maxMaxBufferLength),
												g = l.BufferHelper.bufferedInfo(this._getBuffered(), a.currentTime, f),
												m = g.end,
												v = g.len,
												y = o[r].details,
												E = y.fragments,
												_ = E.length,
												b = E[_ - 1].start + E[_ - 1].duration;
											if (v > p) return;
											var T = void 0,
												S = this.fragPrevious;
											m < b ? (S && y.hasProgramDateTime && (T = u.findFragmentByPDT(E, S.endProgramDateTime, h)), T || (T = u.findFragmentByPTS(S, E, m, h))) : T = E[_ - 1], T && T.encrypted ? (s.logger.log("Loading key for " + T.sn), this.state = c.State.KEY_LOADING, this.hls.trigger(n.default.KEY_LOADING, {
												frag: T
											})) : T && i.getState(T) === d.FragmentState.NOT_LOADED && (this.fragCurrent = T, this.state = c.State.FRAG_LOADING, this.hls.trigger(n.default.FRAG_LOADING, {
												frag: T
											}))
									} else this.state = c.State.IDLE
								}, t.prototype.stopLoad = function() {
									this.lastAVStart = 0, e.prototype.stopLoad.call(this)
								}, t.prototype._getBuffered = function() {
									return this.tracksBuffered[this.currentTrackId] || []
								}, t.prototype.onMediaSeeking = function() {
									this.fragPrevious = null
								}, t
							}(c.default);
						t.SubtitleStreamController = p
					},
					"./src/controller/subtitle-track-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/utils/logger.js"),
								l = r("./src/controller/level-helper.js"),
								u = function(t) {
									function r(e) {
										var r = t.call(this, e, n.default.MEDIA_ATTACHED, n.default.MEDIA_DETACHING, n.default.MANIFEST_LOADED, n.default.SUBTITLE_TRACK_LOADED) || this;
										return r.tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r
									}
									return a(r, t), r.prototype.destroy = function() {
										s.default.prototype.destroy.call(this)
									}, r.prototype.onMediaAttached = function(e) {
										var t = this;
										this.media = e.media, this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
											t.trackChangeListener()
										}), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
									}, r.prototype.onMediaDetaching = function() {
										this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
									}, r.prototype.onManifestLoaded = function(e) {
										var t = this,
											r = e.subtitles || [];
										this.tracks = r, this.hls.trigger(n.default.SUBTITLE_TRACKS_UPDATED, {
											subtitleTracks: r
										}), r.forEach((function(e) {
											e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
										}))
									}, r.prototype.onSubtitleTrackLoaded = function(e) {
										var t = this,
											r = e.id,
											i = e.details,
											a = this.trackId,
											n = this.tracks,
											s = n[a];
										if (r >= n.length || r !== a || !s || this.stopped) this._clearReloadTimer();
										else if (o.logger.log("subtitle track " + r + " loaded"), i.live) {
											var u = l.computeReloadInterval(s.details, i, e.stats.trequest);
											o.logger.log("Reloading live subtitle playlist in " + u + "ms"), this.timer = setTimeout((function() {
												t._loadCurrentTrack()
											}), u)
										} else this._clearReloadTimer()
									}, r.prototype.startLoad = function() {
										this.stopped = !1, this._loadCurrentTrack()
									}, r.prototype.stopLoad = function() {
										this.stopped = !0, this._clearReloadTimer()
									}, Object.defineProperty(r.prototype, "subtitleTracks", {
										get: function() {
											return this.tracks
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "subtitleTrack", {
										get: function() {
											return this.trackId
										},
										set: function(e) {
											this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._clearReloadTimer = function() {
										this.timer && (clearTimeout(this.timer), this.timer = null)
									}, r.prototype._loadCurrentTrack = function() {
										var e = this.trackId,
											t = this.tracks,
											r = this.hls,
											i = t[e];
										e < 0 || !i || i.details && !i.details.live || (o.logger.log("Loading subtitle track " + e), r.trigger(n.default.SUBTITLE_TRACK_LOADING, {
											url: i.url,
											id: e
										}))
									}, r.prototype._toggleTrackModes = function(e) {
										var t = this.media,
											r = this.subtitleDisplay,
											i = this.trackId;
										if (t) {
											var a = d(t.textTracks);
											if (-1 === e)[].slice.call(a).forEach((function(e) {
												e.mode = "disabled"
											}));
											else {
												var n = a[i];
												n && (n.mode = "disabled")
											}
											var s = a[e];
											s && (s.mode = r ? "showing" : "hidden")
										}
									}, r.prototype._setSubtitleTrackInternal = function(t) {
										var r = this.hls,
											i = this.tracks;
										!e.isFinite(t) || t < -1 || t >= i.length || (this.trackId = t, o.logger.log("Switching to subtitle track " + t), r.trigger(n.default.SUBTITLE_TRACK_SWITCH, {
											id: t
										}), this._loadCurrentTrack())
									}, r.prototype._onTextTracksChanged = function() {
										if (this.media) {
											for (var e = -1, t = d(this.media.textTracks), r = 0; r < t.length; r++)
												if ("hidden" === t[r].mode) e = r;
												else if ("showing" === t[r].mode) {
												e = r;
												break
											}
											this.subtitleTrack = e
										}
									}, r
								}(s.default);

							function d(e) {
								for (var t = [], r = 0; r < e.length; r++) {
									var i = e[r];
									"subtitles" === i.kind && i.label && t.push(e[r])
								}
								return t
							}
							t.default = u
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/timeline-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/utils/cea-608-parser.js"),
								l = r("./src/utils/output-filter.js"),
								u = r("./src/utils/webvtt-parser.js"),
								d = r("./src/utils/logger.js"),
								c = r("./src/utils/texttrack-utils.js");

							function f(e, t) {
								return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
							}
							var h = function(t) {
								function r(e) {
									var r = t.call(this, e, n.default.MEDIA_ATTACHING, n.default.MEDIA_DETACHING, n.default.FRAG_PARSING_USERDATA, n.default.FRAG_DECRYPTED, n.default.MANIFEST_LOADING, n.default.MANIFEST_LOADED, n.default.FRAG_LOADED, n.default.LEVEL_SWITCHING, n.default.INIT_PTS_FOUND) || this;
									if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = [], r.cueRanges = [], r.captionsTracks = {}, r.captionsProperties = {
											textTrack1: {
												label: r.config.captionsTextTrack1Label,
												languageCode: r.config.captionsTextTrack1LanguageCode
											},
											textTrack2: {
												label: r.config.captionsTextTrack2Label,
												languageCode: r.config.captionsTextTrack2LanguageCode
											}
										}, r.config.enableCEA708Captions) {
										var i = new l.default(r, "textTrack1"),
											a = new l.default(r, "textTrack2");
										r.cea608Parser = new o.default(0, i, a)
									}
									return r
								}
								return a(r, t), r.prototype.addCues = function(e, t, r, i) {
									for (var a, n, s, o, l = this.cueRanges, u = !1, d = l.length; d--;) {
										var c = l[d],
											f = (a = c[0], n = c[1], s = t, o = r, Math.min(n, o) - Math.max(a, s));
										if (f >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], r), u = !0, f / (r - t) > .5)) return
									}
									u || l.push([t, r]), this.Cues.newCue(this.captionsTracks[e], t, r, i)
								}, r.prototype.onInitPtsFound = function(e) {
									var t = this;
									if ("main" === e.id && (this.initPTS[e.frag.cc] = e.initPTS), this.unparsedVttFrags.length) {
										var r = this.unparsedVttFrags;
										this.unparsedVttFrags = [], r.forEach((function(e) {
											t.onFragLoaded(e)
										}))
									}
								}, r.prototype.getExistingTrack = function(e) {
									var t = this.media;
									if (t)
										for (var r = 0; r < t.textTracks.length; r++) {
											var i = t.textTracks[r];
											if (i[e]) return i
										}
									return null
								}, r.prototype.createCaptionsTrack = function(e) {
									var t = this.captionsProperties[e],
										r = t.label,
										i = t.languageCode,
										a = this.captionsTracks;
									if (!a[e]) {
										var n = this.getExistingTrack(e);
										if (n) a[e] = n, c.clearCurrentCues(a[e]), c.sendAddTrackEvent(a[e], this.media);
										else {
											var s = this.createTextTrack("captions", r, i);
											s && (s[e] = !0, a[e] = s)
										}
									}
								}, r.prototype.createTextTrack = function(e, t, r) {
									var i = this.media;
									if (i) return i.addTextTrack(e, t, r)
								}, r.prototype.destroy = function() {
									s.default.prototype.destroy.call(this)
								}, r.prototype.onMediaAttaching = function(e) {
									this.media = e.media, this._cleanTracks()
								}, r.prototype.onMediaDetaching = function() {
									var e = this.captionsTracks;
									Object.keys(e).forEach((function(t) {
										c.clearCurrentCues(e[t]), delete e[t]
									}))
								}, r.prototype.onManifestLoading = function() {
									this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
										ccOffset: 0,
										presentationOffset: 0,
										0: {
											start: 0,
											prevCC: -1,
											new: !1
										}
									}, this._cleanTracks()
								}, r.prototype._cleanTracks = function() {
									var e = this.media;
									if (e) {
										var t = e.textTracks;
										if (t)
											for (var r = 0; r < t.length; r++) c.clearCurrentCues(t[r])
									}
								}, r.prototype.onManifestLoaded = function(e) {
									var t = this;
									if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
										this.tracks = e.subtitles || [];
										var r = this.media ? this.media.textTracks : [];
										this.tracks.forEach((function(e, i) {
											var a;
											if (i < r.length) {
												for (var n = null, s = 0; s < r.length; s++)
													if (f(r[s], e)) {
														n = r[s];
														break
													} n && (a = n)
											}
											a || (a = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? a.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : a.mode = "disabled", t.textTracks.push(a)
										}))
									}
								}, r.prototype.onLevelSwitching = function() {
									this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
								}, r.prototype.onFragLoaded = function(t) {
									var r = t.frag,
										i = t.payload;
									if ("main" === r.type) {
										var a = r.sn;
										if (a !== this.lastSn + 1) {
											var s = this.cea608Parser;
											s && s.reset()
										}
										this.lastSn = a
									} else if ("subtitle" === r.type)
										if (i.byteLength) {
											if (!e.isFinite(this.initPTS[r.cc])) return this.unparsedVttFrags.push(t), void(this.initPTS.length && this.hls.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
												success: !1,
												frag: r
											}));
											var o = r.decryptdata;
											null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(r, i)
										} else this.hls.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: r
										})
								}, r.prototype._parseVTTs = function(e, t) {
									var r = this.vttCCs;
									r[e.cc] || (r[e.cc] = {
										start: e.start,
										prevCC: this.prevCC,
										new: !0
									}, this.prevCC = e.cc);
									var i = this.textTracks,
										a = this.hls;
									u.default.parse(t, this.initPTS[e.cc], r, e.cc, (function(t) {
										var r = i[e.level];
										"disabled" !== r.mode ? (t.forEach((function(e) {
											if (!r.cues.getCueById(e.id)) try {
												r.addCue(e)
											} catch (i) {
												var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
												t.id = e.id, r.addCue(t)
											}
										})), a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
											success: !0,
											frag: e
										})) : a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: e
										})
									}), (function(t) {
										d.logger.log("Failed to parse VTT cue: " + t), a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: e
										})
									}))
								}, r.prototype.onFragDecrypted = function(t) {
									var r = t.payload,
										i = t.frag;
									if ("subtitle" === i.type) {
										if (!e.isFinite(this.initPTS[i.cc])) return void this.unparsedVttFrags.push(t);
										this._parseVTTs(i, r)
									}
								}, r.prototype.onFragParsingUserdata = function(e) {
									if (this.enabled && this.config.enableCEA708Captions)
										for (var t = 0; t < e.samples.length; t++) {
											var r = this.extractCea608Data(e.samples[t].bytes);
											this.cea608Parser.addData(e.samples[t].pts, r)
										}
								}, r.prototype.extractCea608Data = function(e) {
									for (var t, r, i, a = 31 & e[0], n = 2, s = [], o = 0; o < a; o++) t = e[n++], r = 127 & e[n++], i = 127 & e[n++], 0 === r && 0 === i || 0 != (4 & t) && 0 == (3 & t) && (s.push(r), s.push(i));
									return s
								}, r
							}(s.default);
							t.default = h
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/crypt/aes-crypto.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e(e, t) {
								this.subtle = e, this.aesIV = t
							}
							return e.prototype.decrypt = function(e, t) {
								return this.subtle.decrypt({
									name: "AES-CBC",
									iv: this.aesIV
								}, t, e)
							}, e
						}();
						t.default = i
					},
					"./src/crypt/aes-decryptor.js": function(e, t, r) {
						"use strict";

						function i(e) {
							var t = e.byteLength,
								r = t && new DataView(e).getUint8(t - 1);
							return r ? e.slice(0, t - r) : e
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.removePadding = i;
						var a = function() {
							function e() {
								this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
							}
							return e.prototype.uint8ArrayToUint32Array_ = function(e) {
								for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i);
								return r
							}, e.prototype.initTable = function() {
								var e = this.sBox,
									t = this.invSBox,
									r = this.subMix,
									i = r[0],
									a = r[1],
									n = r[2],
									s = r[3],
									o = this.invSubMix,
									l = o[0],
									u = o[1],
									d = o[2],
									c = o[3],
									f = new Uint32Array(256),
									h = 0,
									p = 0,
									g = 0;
								for (g = 0; g < 256; g++) f[g] = g < 128 ? g << 1 : g << 1 ^ 283;
								for (g = 0; g < 256; g++) {
									var m = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
									m = m >>> 8 ^ 255 & m ^ 99, e[h] = m, t[m] = h;
									var v = f[h],
										y = f[v],
										E = f[y],
										_ = 257 * f[m] ^ 16843008 * m;
									i[h] = _ << 24 | _ >>> 8, a[h] = _ << 16 | _ >>> 16, n[h] = _ << 8 | _ >>> 24, s[h] = _, _ = 16843009 * E ^ 65537 * y ^ 257 * v ^ 16843008 * h, l[m] = _ << 24 | _ >>> 8, u[m] = _ << 16 | _ >>> 16, d[m] = _ << 8 | _ >>> 24, c[m] = _, h ? (h = v ^ f[f[f[E ^ v]]], p ^= f[f[p]]) : h = p = 1
								}
							}, e.prototype.expandKey = function(e) {
								for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i], i++;
								if (!r) {
									this.key = t;
									var a = this.keySize = t.length;
									if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
									var n, s, o, l, u = this.ksRows = 4 * (a + 6 + 1),
										d = this.keySchedule = new Uint32Array(u),
										c = this.invKeySchedule = new Uint32Array(u),
										f = this.sBox,
										h = this.rcon,
										p = this.invSubMix,
										g = p[0],
										m = p[1],
										v = p[2],
										y = p[3];
									for (n = 0; n < u; n++) n < a ? o = d[n] = t[n] : (l = o, n % a == 0 ? (l = f[(l = l << 8 | l >>> 24) >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), d[n] = o = (d[n - a] ^ l) >>> 0);
									for (s = 0; s < u; s++) n = u - s, l = 3 & s ? d[n] : d[n - 4], c[s] = s < 4 || n <= 4 ? l : g[f[l >>> 24]] ^ m[f[l >>> 16 & 255]] ^ v[f[l >>> 8 & 255]] ^ y[f[255 & l]], c[s] = c[s] >>> 0
								}
							}, e.prototype.networkToHostOrderSwap = function(e) {
								return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
							}, e.prototype.decrypt = function(e, t, r, a) {
								for (var n, s, o, l, u, d, c, f, h, p, g, m, v, y, E = this.keySize + 6, _ = this.invKeySchedule, b = this.invSBox, T = this.invSubMix, S = T[0], A = T[1], R = T[2], D = T[3], L = this.uint8ArrayToUint32Array_(r), w = L[0], O = L[1], k = L[2], I = L[3], P = new Int32Array(e), C = new Int32Array(P.length), x = this.networkToHostOrderSwap; t < P.length;) {
									for (h = x(P[t]), p = x(P[t + 1]), g = x(P[t + 2]), m = x(P[t + 3]), u = h ^ _[0], d = m ^ _[1], c = g ^ _[2], f = p ^ _[3], v = 4, y = 1; y < E; y++) n = S[u >>> 24] ^ A[d >> 16 & 255] ^ R[c >> 8 & 255] ^ D[255 & f] ^ _[v], s = S[d >>> 24] ^ A[c >> 16 & 255] ^ R[f >> 8 & 255] ^ D[255 & u] ^ _[v + 1], o = S[c >>> 24] ^ A[f >> 16 & 255] ^ R[u >> 8 & 255] ^ D[255 & d] ^ _[v + 2], l = S[f >>> 24] ^ A[u >> 16 & 255] ^ R[d >> 8 & 255] ^ D[255 & c] ^ _[v + 3], u = n, d = s, c = o, f = l, v += 4;
									n = b[u >>> 24] << 24 ^ b[d >> 16 & 255] << 16 ^ b[c >> 8 & 255] << 8 ^ b[255 & f] ^ _[v], s = b[d >>> 24] << 24 ^ b[c >> 16 & 255] << 16 ^ b[f >> 8 & 255] << 8 ^ b[255 & u] ^ _[v + 1], o = b[c >>> 24] << 24 ^ b[f >> 16 & 255] << 16 ^ b[u >> 8 & 255] << 8 ^ b[255 & d] ^ _[v + 2], l = b[f >>> 24] << 24 ^ b[u >> 16 & 255] << 16 ^ b[d >> 8 & 255] << 8 ^ b[255 & c] ^ _[v + 3], v += 3, C[t] = x(n ^ w), C[t + 1] = x(l ^ O), C[t + 2] = x(o ^ k), C[t + 3] = x(s ^ I), w = h, O = p, k = g, I = m, t += 4
								}
								return a ? i(C.buffer) : C.buffer
							}, e.prototype.destroy = function() {
								this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
							}, e
						}();
						t.default = a
					},
					"./src/crypt/decrypter.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/crypt/aes-crypto.js"),
							a = r("./src/crypt/fast-aes-key.js"),
							n = r("./src/crypt/aes-decryptor.js"),
							s = r("./src/errors.js"),
							o = r("./src/utils/logger.js"),
							l = r("./src/events.js"),
							u = r("./src/utils/get-self-scope.js").getSelfScope(),
							d = function() {
								function e(e, t, r) {
									var i = (void 0 === r ? {} : r).removePKCS7Padding,
										a = void 0 === i || i;
									if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try {
										var n = u.crypto;
										n && (this.subtle = n.subtle || n.webkitSubtle)
									} catch (s) {}
									this.disableWebCrypto = !this.subtle
								}
								return e.prototype.isSync = function() {
									return this.disableWebCrypto && this.config.enableSoftwareAES
								}, e.prototype.decrypt = function(e, t, r, s) {
									var l = this;
									if (this.disableWebCrypto && this.config.enableSoftwareAES) {
										this.logEnabled && (o.logger.log("JS AES decrypt"), this.logEnabled = !1);
										var u = this.decryptor;
										u || (this.decryptor = u = new n.default), u.expandKey(t), s(u.decrypt(e, 0, r, this.removePKCS7Padding))
									} else {
										this.logEnabled && (o.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
										var d = this.subtle;
										this.key !== t && (this.key = t, this.fastAesKey = new a.default(d, t)), this.fastAesKey.expandKey().then((function(a) {
											new i.default(d, r).decrypt(e, a).catch((function(i) {
												l.onWebCryptoError(i, e, t, r, s)
											})).then((function(e) {
												s(e)
											}))
										})).catch((function(i) {
											l.onWebCryptoError(i, e, t, r, s)
										}))
									}
								}, e.prototype.onWebCryptoError = function(e, t, r, i, a) {
									this.config.enableSoftwareAES ? (o.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (o.logger.error("decrypting error : " + e.message), this.observer.trigger(l.default.ERROR, {
										type: s.ErrorTypes.MEDIA_ERROR,
										details: s.ErrorDetails.FRAG_DECRYPT_ERROR,
										fatal: !0,
										reason: e.message
									}))
								}, e.prototype.destroy = function() {
									var e = this.decryptor;
									e && (e.destroy(), this.decryptor = void 0)
								}, e
							}();
						t.default = d
					},
					"./src/crypt/fast-aes-key.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e(e, t) {
								this.subtle = e, this.key = t
							}
							return e.prototype.expandKey = function() {
								return this.subtle.importKey("raw", this.key, {
									name: "AES-CBC"
								}, !1, ["encrypt", "decrypt"])
							}, e
						}();
						t.default = i
					},
					"./src/demux/aacdemuxer.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./src/demux/adts.js"),
								a = r("./src/utils/logger.js"),
								n = r("./src/demux/id3.js"),
								s = function() {
									function t(e, t, r) {
										this.observer = e, this.config = r, this.remuxer = t
									}
									return t.prototype.resetInitSegment = function(e, t, r, i) {
										this._audioTrack = {
											container: "audio/adts",
											type: "audio",
											id: 0,
											sequenceNumber: 0,
											isAAC: !0,
											samples: [],
											len: 0,
											manifestCodec: t,
											duration: i,
											inputTimeScale: 9e4
										}
									}, t.prototype.resetTimeStamp = function() {}, t.probe = function(e) {
										if (!e) return !1;
										for (var t = (n.default.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
											if (i.probe(e, t)) return a.logger.log("ADTS sync word found !"), !0;
										return !1
									}, t.prototype.append = function(t, r, s, o) {
										for (var l = this._audioTrack, u = n.default.getID3Data(t, 0) || [], d = n.default.getTimeStamp(u), c = e.isFinite(d) ? 90 * d : 9e4 * r, f = 0, h = c, p = t.length, g = u.length, m = [{
												pts: h,
												dts: h,
												data: u
											}]; g < p - 1;)
											if (i.isHeader(t, g) && g + 5 < p) {
												i.initTrackConfig(l, this.observer, t, g, l.manifestCodec);
												var v = i.appendFrame(l, t, g, c, f);
												if (!v) {
													a.logger.log("Unable to parse AAC frame");
													break
												}
												g += v.length, h = v.sample.pts, f++
											} else n.default.isHeader(t, g) ? (u = n.default.getID3Data(t, g), m.push({
												pts: h,
												dts: h,
												data: u
											}), g += u.length) : g++;
										this.remuxer.remux(l, {
											samples: []
										}, {
											samples: m,
											inputTimeScale: 9e4
										}, {
											samples: []
										}, r, s, o)
									}, t.prototype.destroy = function() {}, t
								}();
							t.default = s
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/demux/adts.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/logger.js"),
							a = r("./src/errors.js"),
							n = r("./src/events.js");

						function s(e, t, r, s) {
							var o, l, u, d, c, f = navigator.userAgent.toLowerCase(),
								h = s,
								p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
							if (o = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > p.length - 1)) return d = (1 & t[r + 2]) << 2, d |= (192 & t[r + 3]) >>> 6, i.logger.log("manifest codec:" + s + ",ADTS data:type:" + o + ",sampleingIndex:" + l + "[" + p[l] + "Hz],channelConfig:" + d), /firefox/i.test(f) ? l >= 6 ? (o = 5, c = new Array(4), u = l - 3) : (o = 2, c = new Array(2), u = l) : -1 !== f.indexOf("android") ? (o = 2, c = new Array(2), u = l) : (o = 5, c = new Array(4), s && (-1 !== s.indexOf("mp4a.40.29") || -1 !== s.indexOf("mp4a.40.5")) || !s && l >= 6 ? u = l - 3 : ((s && -1 !== s.indexOf("mp4a.40.2") && (l >= 6 && 1 === d || /vivaldi/i.test(f)) || !s && 1 === d) && (o = 2, c = new Array(2)), u = l)), c[0] = o << 3, c[0] |= (14 & l) >> 1, c[1] |= (1 & l) << 7, c[1] |= d << 3, 5 === o && (c[1] |= (14 & u) >> 1, c[2] = (1 & u) << 7, c[2] |= 8, c[3] = 0), {
								config: c,
								samplerate: p[l],
								channelCount: d,
								codec: "mp4a.40." + o,
								manifestCodec: h
							};
							e.trigger(n.default.ERROR, {
								type: a.ErrorTypes.MEDIA_ERROR,
								details: a.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "invalid ADTS sampling index:" + l
							})
						}

						function o(e, t) {
							return 255 === e[t] && 240 == (246 & e[t + 1])
						}

						function l(e, t) {
							return 1 & e[t + 1] ? 7 : 9
						}

						function u(e, t) {
							return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
						}

						function d(e) {
							return 9216e4 / e
						}

						function c(e, t, r, i, a) {
							var n, s, o = e.length;
							if (n = l(e, t), s = u(e, t), (s -= n) > 0 && t + n + s <= o) return {
								headerLength: n,
								frameLength: s,
								stamp: r + i * a
							}
						}
						t.getAudioConfig = s, t.isHeaderPattern = o, t.getHeaderLength = l, t.getFullFrameLength = u, t.isHeader = function(e, t) {
							return !!(t + 1 < e.length && o(e, t))
						}, t.probe = function(e, t) {
							if (t + 1 < e.length && o(e, t)) {
								var r = l(e, t);
								t + 5 < e.length && (r = u(e, t));
								var i = t + r;
								if (i === e.length || i + 1 < e.length && o(e, i)) return !0
							}
							return !1
						}, t.initTrackConfig = function(e, t, r, a, n) {
							if (!e.samplerate) {
								var o = s(t, r, a, n);
								e.config = o.config, e.samplerate = o.samplerate, e.channelCount = o.channelCount, e.codec = o.codec, e.manifestCodec = o.manifestCodec, i.logger.log("parsed codec:" + e.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
							}
						}, t.getFrameDuration = d, t.parseFrameHeader = c, t.appendFrame = function(e, t, r, i, a) {
							var n = c(t, r, i, a, d(e.samplerate));
							if (n) {
								var s = n.stamp,
									o = n.headerLength,
									l = n.frameLength,
									u = {
										unit: t.subarray(r + o, r + o + l),
										pts: s,
										dts: s
									};
								return e.samples.push(u), e.len += l, {
									sample: u,
									length: l + o
								}
							}
						}
					},
					"./src/demux/demuxer-inline.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i, a = r("./src/events.js"),
							n = r("./src/errors.js"),
							s = r("./src/crypt/decrypter.js"),
							o = r("./src/demux/aacdemuxer.js"),
							l = r("./src/demux/mp4demuxer.js"),
							u = r("./src/demux/tsdemuxer.js"),
							d = r("./src/demux/mp3demuxer.js"),
							c = r("./src/remux/mp4-remuxer.js"),
							f = r("./src/remux/passthrough-remuxer.js"),
							h = r("./src/utils/get-self-scope.js"),
							p = r("./src/utils/logger.js"),
							g = h.getSelfScope();
						try {
							i = g.performance.now.bind(g.performance)
						} catch (v) {
							p.logger.debug("Unable to use Performance API on this environment"), i = g.Date.now
						}
						var m = function() {
							function e(e, t, r, i) {
								this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i
							}
							return e.prototype.destroy = function() {
								var e = this.demuxer;
								e && e.destroy()
							}, e.prototype.push = function(e, t, r, n, o, l, u, d, c, f, h, p) {
								var g = this;
								if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
									var m = this.decrypter;
									null == m && (m = this.decrypter = new s.default(this.observer, this.config));
									var v = i();
									m.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
										var s = i();
										g.observer.trigger(a.default.FRAG_DECRYPTED, {
											stats: {
												tstart: v,
												tdecrypt: s
											}
										}), g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, o, l, u, d, c, f, h, p)
									}))
								} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, o, l, u, d, c, f, h, p)
							}, e.prototype.pushDecrypted = function(e, t, r, i, s, h, p, g, m, v, y, E) {
								var _ = this.demuxer;
								if (!_ || (p || g) && !this.probe(e)) {
									for (var b = this.observer, T = this.typeSupported, S = this.config, A = [{
											demux: u.default,
											remux: c.default
										}, {
											demux: l.default,
											remux: f.default
										}, {
											demux: o.default,
											remux: c.default
										}, {
											demux: d.default,
											remux: c.default
										}], R = 0, D = A.length; R < D; R++) {
										var L = A[R],
											w = L.demux.probe;
										if (w(e)) {
											var O = this.remuxer = new L.remux(b, S, T, this.vendor);
											_ = new L.demux(b, O, S, T), this.probe = w;
											break
										}
									}
									if (!_) return void b.trigger(a.default.ERROR, {
										type: n.ErrorTypes.MEDIA_ERROR,
										details: n.ErrorDetails.FRAG_PARSING_ERROR,
										fatal: !0,
										reason: "no demux matching with content found"
									});
									this.demuxer = _
								}
								var k = this.remuxer;
								(p || g) && (_.resetInitSegment(r, i, s, v), k.resetInitSegment()), p && (_.resetTimeStamp(E), k.resetTimeStamp(E)), "function" == typeof _.setDecryptData && _.setDecryptData(t), _.append(e, h, m, y)
							}, e
						}();
						t.default = m
					},
					"./src/demux/demuxer-worker.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/demux/demuxer-inline.js"),
							a = r("./src/events.js"),
							n = r("./src/utils/logger.js"),
							s = r("./node_modules/node-libs-browser/node_modules/events/events.js");
						t.default = function(e) {
							var t = new s.EventEmitter;
							t.trigger = function(e) {
								for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
								t.emit.apply(t, [e, e].concat(r))
							}, t.off = function(e) {
								for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
								t.removeListener.apply(t, [e].concat(r))
							};
							var r = function(t, r) {
								e.postMessage({
									event: t,
									data: r
								})
							};
							e.addEventListener("message", (function(a) {
								var s = a.data;
								switch (s.cmd) {
									case "init":
										var o = JSON.parse(s.config);
										e.demuxer = new i.default(t, s.typeSupported, o, s.vendor), n.enableLogs(o.debug), r("init", null);
										break;
									case "demux":
										e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
								}
							})), t.on(a.default.FRAG_DECRYPTED, r), t.on(a.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(a.default.FRAG_PARSED, r), t.on(a.default.ERROR, r), t.on(a.default.FRAG_PARSING_METADATA, r), t.on(a.default.FRAG_PARSING_USERDATA, r), t.on(a.default.INIT_PTS_FOUND, r), t.on(a.default.FRAG_PARSING_DATA, (function(t, r) {
								var i = [],
									a = {
										event: t,
										data: r
									};
								r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(a, i)
							}))
						}
					},
					"./src/demux/demuxer.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./node_modules/webworkify-webpack/index.js"),
								a = r("./src/events.js"),
								n = r("./src/demux/demuxer-inline.js"),
								s = r("./src/utils/logger.js"),
								o = r("./src/errors.js"),
								l = r("./src/utils/mediasource-helper.js"),
								u = r("./src/utils/get-self-scope.js"),
								d = r("./src/observer.js"),
								c = u.getSelfScope(),
								f = l.getMediaSource(),
								h = function() {
									function t(e, t) {
										var r = this;
										this.hls = e, this.id = t;
										var l = this.observer = new d.Observer,
											u = e.config,
											h = function(t, i) {
												(i = i || {}).frag = r.frag, i.id = r.id, e.trigger(t, i)
											};
										l.on(a.default.FRAG_DECRYPTED, h), l.on(a.default.FRAG_PARSING_INIT_SEGMENT, h), l.on(a.default.FRAG_PARSING_DATA, h), l.on(a.default.FRAG_PARSED, h), l.on(a.default.ERROR, h), l.on(a.default.FRAG_PARSING_METADATA, h), l.on(a.default.FRAG_PARSING_USERDATA, h), l.on(a.default.INIT_PTS_FOUND, h);
										var p = {
												mp4: f.isTypeSupported("video/mp4"),
												mpeg: f.isTypeSupported("audio/mpeg"),
												mp3: f.isTypeSupported('audio/mp4; codecs="mp3"')
											},
											g = navigator.vendor;
										if (u.enableWorker && "undefined" != typeof Worker) {
											s.logger.log("demuxing in webworker");
											var m = void 0;
											try {
												m = this.w = i("./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), m.addEventListener("message", this.onwmsg), m.onerror = function(t) {
													e.trigger(a.default.ERROR, {
														type: o.ErrorTypes.OTHER_ERROR,
														details: o.ErrorDetails.INTERNAL_EXCEPTION,
														fatal: !0,
														event: "demuxerWorker",
														err: {
															message: t.message + " (" + t.filename + ":" + t.lineno + ")"
														}
													})
												}, m.postMessage({
													cmd: "init",
													typeSupported: p,
													vendor: g,
													id: t,
													config: JSON.stringify(u)
												})
											} catch (v) {
												s.logger.warn("Error in worker:", v), s.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), m && c.URL.revokeObjectURL(m.objectURL), this.demuxer = new n.default(l, p, u, g), this.w = void 0
											}
										} else this.demuxer = new n.default(l, p, u, g)
									}
									return t.prototype.destroy = function() {
										var e = this.w;
										if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
										else {
											var t = this.demuxer;
											t && (t.destroy(), this.demuxer = null)
										}
										var r = this.observer;
										r && (r.removeAllListeners(), this.observer = null)
									}, t.prototype.push = function(t, r, i, a, n, o, l, u) {
										var d = this.w,
											c = e.isFinite(n.startPTS) ? n.startPTS : n.start,
											f = n.decryptdata,
											h = this.frag,
											p = !(h && n.cc === h.cc),
											g = !(h && n.level === h.level),
											m = h && n.sn === h.sn + 1,
											v = !g && m;
										if (p && s.logger.log(this.id + ":discontinuity detected"), g && s.logger.log(this.id + ":switch detected"), this.frag = n, d) d.postMessage({
											cmd: "demux",
											data: t,
											decryptdata: f,
											initSegment: r,
											audioCodec: i,
											videoCodec: a,
											timeOffset: c,
											discontinuity: p,
											trackSwitch: g,
											contiguous: v,
											duration: o,
											accurateTimeOffset: l,
											defaultInitPTS: u
										}, t instanceof ArrayBuffer ? [t] : []);
										else {
											var y = this.demuxer;
											y && y.push(t, f, r, i, a, c, p, g, v, o, l, u)
										}
									}, t.prototype.onWorkerMessage = function(e) {
										var t = e.data,
											r = this.hls;
										switch (t.event) {
											case "init":
												c.URL.revokeObjectURL(this.w.objectURL);
												break;
											case a.default.FRAG_PARSING_DATA:
												t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
											default:
												t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
										}
									}, t
								}();
							t.default = h
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/demux/exp-golomb.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/logger.js"),
							a = function() {
								function e(e) {
									this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
								}
								return e.prototype.loadWord = function() {
									var e = this.data,
										t = this.bytesAvailable,
										r = e.byteLength - t,
										i = new Uint8Array(4),
										a = Math.min(4, t);
									if (0 === a) throw new Error("no bytes available");
									i.set(e.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a
								}, e.prototype.skipBits = function(e) {
									var t;
									this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
								}, e.prototype.readBits = function(e) {
									var t = Math.min(this.bitsAvailable, e),
										r = this.word >>> 32 - t;
									return e > 32 && i.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
								}, e.prototype.skipLZ = function() {
									var e;
									for (e = 0; e < this.bitsAvailable; ++e)
										if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
									return this.loadWord(), e + this.skipLZ()
								}, e.prototype.skipUEG = function() {
									this.skipBits(1 + this.skipLZ())
								}, e.prototype.skipEG = function() {
									this.skipBits(1 + this.skipLZ())
								}, e.prototype.readUEG = function() {
									var e = this.skipLZ();
									return this.readBits(e + 1) - 1
								}, e.prototype.readEG = function() {
									var e = this.readUEG();
									return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
								}, e.prototype.readBoolean = function() {
									return 1 === this.readBits(1)
								}, e.prototype.readUByte = function() {
									return this.readBits(8)
								}, e.prototype.readUShort = function() {
									return this.readBits(16)
								}, e.prototype.readUInt = function() {
									return this.readBits(32)
								}, e.prototype.skipScalingList = function(e) {
									var t, r = 8,
										i = 8;
									for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256), r = 0 === i ? r : i
								}, e.prototype.readSPS = function() {
									var e, t, r, i, a, n, s, o = 0,
										l = 0,
										u = 0,
										d = 0,
										c = this.readUByte.bind(this),
										f = this.readBits.bind(this),
										h = this.readUEG.bind(this),
										p = this.readBoolean.bind(this),
										g = this.skipBits.bind(this),
										m = this.skipEG.bind(this),
										v = this.skipUEG.bind(this),
										y = this.skipScalingList.bind(this);
									if (c(), e = c(), f(5), g(3), c(), v(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
										var E = h();
										if (3 === E && g(1), v(), v(), g(1), p())
											for (n = 3 !== E ? 8 : 12, s = 0; s < n; s++) p() && y(s < 6 ? 16 : 64)
									}
									v();
									var _ = h();
									if (0 === _) h();
									else if (1 === _)
										for (g(1), m(), m(), t = h(), s = 0; s < t; s++) m();
									v(), g(1), r = h(), i = h(), 0 === (a = f(1)) && g(1), g(1), p() && (o = h(), l = h(), u = h(), d = h());
									var b = [1, 1];
									if (p() && p()) switch (c()) {
										case 1:
											b = [1, 1];
											break;
										case 2:
											b = [12, 11];
											break;
										case 3:
											b = [10, 11];
											break;
										case 4:
											b = [16, 11];
											break;
										case 5:
											b = [40, 33];
											break;
										case 6:
											b = [24, 11];
											break;
										case 7:
											b = [20, 11];
											break;
										case 8:
											b = [32, 11];
											break;
										case 9:
											b = [80, 33];
											break;
										case 10:
											b = [18, 11];
											break;
										case 11:
											b = [15, 11];
											break;
										case 12:
											b = [64, 33];
											break;
										case 13:
											b = [160, 99];
											break;
										case 14:
											b = [4, 3];
											break;
										case 15:
											b = [3, 2];
											break;
										case 16:
											b = [2, 1];
											break;
										case 255:
											b = [c() << 8 | c(), c() << 8 | c()]
									}
									return {
										width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
										height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d),
										pixelRatio: b
									}
								}, e.prototype.readSliceType = function() {
									return this.readUByte(), this.readUEG(), this.readUEG()
								}, e
							}();
						t.default = a
					},
					"./src/demux/id3.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
								function e() {}
								return e.isHeader = function(e, t) {
									return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
								}, e.isFooter = function(e, t) {
									return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
								}, e.getID3Data = function(t, r) {
									for (var i = r, a = 0; e.isHeader(t, r);) a += 10, a += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (a += 10), r += a;
									if (a > 0) return t.subarray(i, i + a)
								}, e._readSize = function(e, t) {
									var r = 0;
									return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
								}, e.getTimeStamp = function(t) {
									for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
										var a = r[i];
										if (e.isTimeStampFrame(a)) return e._readTimeStamp(a)
									}
								}, e.isTimeStampFrame = function(e) {
									return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
								}, e._getFrameData = function(t) {
									var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
										i = e._readSize(t, 4);
									return {
										type: r,
										size: i,
										data: t.subarray(10, 10 + i)
									}
								}, e.getID3Frames = function(t) {
									for (var r = 0, i = []; e.isHeader(t, r);) {
										for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) {
											var s = e._getFrameData(t.subarray(r)),
												o = e._decodeFrame(s);
											o && i.push(o), r += s.size + 10
										}
										e.isFooter(t, r) && (r += 10)
									}
									return i
								}, e._decodeFrame = function(t) {
									return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
								}, e._readTimeStamp = function(e) {
									if (8 === e.data.byteLength) {
										var t = new Uint8Array(e.data),
											r = 1 & t[3],
											i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
										return i /= 45, r && (i += 47721858.84), Math.round(i)
									}
								}, e._decodePrivFrame = function(t) {
									if (!(t.size < 2)) {
										var r = e._utf8ArrayToStr(t.data, !0),
											i = new Uint8Array(t.data.subarray(r.length + 1));
										return {
											key: t.type,
											info: r,
											data: i.buffer
										}
									}
								}, e._decodeTextFrame = function(t) {
									if (!(t.size < 2)) {
										if ("TXXX" === t.type) {
											var r = 1,
												i = e._utf8ArrayToStr(t.data.subarray(r));
											r += i.length + 1;
											var a = e._utf8ArrayToStr(t.data.subarray(r));
											return {
												key: t.type,
												info: i,
												data: a
											}
										}
										var n = e._utf8ArrayToStr(t.data.subarray(1));
										return {
											key: t.type,
											data: n
										}
									}
								}, e._decodeURLFrame = function(t) {
									if ("WXXX" === t.type) {
										if (t.size < 2) return;
										var r = 1,
											i = e._utf8ArrayToStr(t.data.subarray(r));
										r += i.length + 1;
										var a = e._utf8ArrayToStr(t.data.subarray(r));
										return {
											key: t.type,
											info: i,
											data: a
										}
									}
									var n = e._utf8ArrayToStr(t.data);
									return {
										key: t.type,
										data: n
									}
								}, e._utf8ArrayToStr = function(e, t) {
									void 0 === t && (t = !1);
									for (var r, i, a, n = e.length, s = "", o = 0; o < n;) {
										if (0 === (r = e[o++]) && t) return s;
										if (0 !== r && 3 !== r) switch (r >> 4) {
											case 0:
											case 1:
											case 2:
											case 3:
											case 4:
											case 5:
											case 6:
											case 7:
												s += String.fromCharCode(r);
												break;
											case 12:
											case 13:
												i = e[o++], s += String.fromCharCode((31 & r) << 6 | 63 & i);
												break;
											case 14:
												i = e[o++], a = e[o++], s += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | (63 & a) << 0)
										}
									}
									return s
								}, e
							}(),
							a = i._utf8ArrayToStr;
						t.utf8ArrayToStr = a, t.default = i
					},
					"./src/demux/mp3demuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/demux/id3.js"),
							a = r("./src/utils/logger.js"),
							n = r("./src/demux/mpegaudio.js"),
							s = function() {
								function e(e, t, r) {
									this.observer = e, this.config = r, this.remuxer = t
								}
								return e.prototype.resetInitSegment = function(e, t, r, i) {
									this._audioTrack = {
										container: "audio/mpeg",
										type: "audio",
										id: -1,
										sequenceNumber: 0,
										isAAC: !1,
										samples: [],
										len: 0,
										manifestCodec: t,
										duration: i,
										inputTimeScale: 9e4
									}
								}, e.prototype.resetTimeStamp = function() {}, e.probe = function(e) {
									var t, r, s = i.default.getID3Data(e, 0);
									if (s && void 0 !== i.default.getTimeStamp(s))
										for (t = s.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
											if (n.default.probe(e, t)) return a.logger.log("MPEG Audio sync word found !"), !0;
									return !1
								}, e.prototype.append = function(e, t, r, a) {
									for (var s = i.default.getID3Data(e, 0), o = i.default.getTimeStamp(s), l = o ? 90 * o : 9e4 * t, u = s.length, d = e.length, c = 0, f = 0, h = this._audioTrack, p = [{
											pts: l,
											dts: l,
											data: s
										}]; u < d;)
										if (n.default.isHeader(e, u)) {
											var g = n.default.appendFrame(h, e, u, l, c);
											if (!g) break;
											u += g.length, f = g.sample.pts, c++
										} else i.default.isHeader(e, u) ? (s = i.default.getID3Data(e, u), p.push({
											pts: f,
											dts: f,
											data: s
										}), u += s.length) : u++;
									this.remuxer.remux(h, {
										samples: []
									}, {
										samples: p,
										inputTimeScale: 9e4
									}, {
										samples: []
									}, t, r, a)
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = s
					},
					"./src/demux/mp4demuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/logger.js"),
							a = r("./src/events.js"),
							n = Math.pow(2, 32) - 1,
							s = function() {
								function e(e, t) {
									this.observer = e, this.remuxer = t
								}
								return e.prototype.resetTimeStamp = function(e) {
									this.initPTS = e
								}, e.prototype.resetInitSegment = function(t, r, i, n) {
									if (t && t.byteLength) {
										var s = this.initData = e.parseInitSegment(t);
										null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
										var o = {};
										s.audio && s.video ? o.audiovideo = {
											container: "video/mp4",
											codec: r + "," + i,
											initSegment: n ? t : null
										} : (s.audio && (o.audio = {
											container: "audio/mp4",
											codec: r,
											initSegment: n ? t : null
										}), s.video && (o.video = {
											container: "video/mp4",
											codec: i,
											initSegment: n ? t : null
										})), this.observer.trigger(a.default.FRAG_PARSING_INIT_SEGMENT, {
											tracks: o
										})
									} else r && (this.audioCodec = r), i && (this.videoCodec = i)
								}, e.probe = function(t) {
									return e.findBox({
										data: t,
										start: 0,
										end: Math.min(t.length, 16384)
									}, ["moof"]).length > 0
								}, e.bin2str = function(e) {
									return String.fromCharCode.apply(null, e)
								}, e.readUint16 = function(e, t) {
									e.data && (t += e.start, e = e.data);
									var r = e[t] << 8 | e[t + 1];
									return r < 0 ? 65536 + r : r
								}, e.readUint32 = function(e, t) {
									e.data && (t += e.start, e = e.data);
									var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
									return r < 0 ? 4294967296 + r : r
								}, e.writeUint32 = function(e, t, r) {
									e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
								}, e.findBox = function(t, r) {
									var i, a, n, s, o, l, u = [];
									if (t.data ? (o = t.start, n = t.end, t = t.data) : (o = 0, n = t.byteLength), !r.length) return null;
									for (i = o; i < n;) l = (a = e.readUint32(t, i)) > 1 ? i + a : n, e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? u.push({
										data: t,
										start: i + 8,
										end: l
									}) : (s = e.findBox({
										data: t,
										start: i + 8,
										end: l
									}, r.slice(1))).length && (u = u.concat(s))), i = l;
									return u
								}, e.parseSegmentIndex = function(t) {
									var r, i = e.findBox(t, ["moov"])[0],
										a = i ? i.end : null,
										n = 0,
										s = e.findBox(t, ["sidx"]);
									if (!s || !s[0]) return null;
									r = [];
									var o = (s = s[0]).data[0];
									n = 0 === o ? 8 : 16;
									var l = e.readUint32(s, n);
									n += 4, n += 0 === o ? 8 : 16, n += 2;
									var u = s.end + 0,
										d = e.readUint16(s, n);
									n += 2;
									for (var c = 0; c < d; c++) {
										var f = n,
											h = e.readUint32(s, f);
										f += 4;
										var p = 2147483647 & h;
										if (1 == (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
										var g = e.readUint32(s, f);
										f += 4, r.push({
											referenceSize: p,
											subsegmentDuration: g,
											info: {
												duration: g / l,
												start: u,
												end: u + p - 1
											}
										}), u += p, n = f += 4
									}
									return {
										earliestPresentationTime: 0,
										timescale: l,
										version: o,
										referencesCount: d,
										references: r,
										moovEndOffset: a
									}
								}, e.parseInitSegment = function(t) {
									var r = [];
									return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
										var a = e.findBox(t, ["tkhd"])[0];
										if (a) {
											var n = a.data[a.start],
												s = 0 === n ? 12 : 20,
												o = e.readUint32(a, s),
												l = e.findBox(t, ["mdia", "mdhd"])[0];
											if (l) {
												s = 0 === (n = l.data[l.start]) ? 12 : 20;
												var u = e.readUint32(l, s),
													d = e.findBox(t, ["mdia", "hdlr"])[0];
												if (d) {
													var c = {
														soun: "audio",
														vide: "video"
													} [e.bin2str(d.data.subarray(d.start + 8, d.start + 12))];
													if (c) {
														var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
														if (f.length) {
															f = f[0];
															var h = e.bin2str(f.data.subarray(f.start + 12, f.start + 16));
															i.logger.log("MP4Demuxer:" + c + ":" + h + " found")
														}
														r[o] = {
															timescale: u,
															type: c
														}, r[c] = {
															timescale: u,
															id: o
														}
													}
												}
											}
										}
									})), r
								}, e.getStartDTS = function(t, r) {
									var i, a, n;
									return i = e.findBox(r, ["moof", "traf"]), a = [].concat.apply([], i.map((function(r) {
										return e.findBox(r, ["tfhd"]).map((function(i) {
											var a, n;
											return a = e.readUint32(i, 4), n = t[a].timescale || 9e4, e.findBox(r, ["tfdt"]).map((function(t) {
												var r, i;
												return r = t.data[t.start], i = e.readUint32(t, 4), 1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)), i
											}))[0] / n
										}))
									}))), n = Math.min.apply(null, a), isFinite(n) ? n : 0
								}, e.offsetStartDTS = function(t, r, i) {
									e.findBox(r, ["moof", "traf"]).map((function(r) {
										return e.findBox(r, ["tfhd"]).map((function(a) {
											var s = e.readUint32(a, 4),
												o = t[s].timescale || 9e4;
											e.findBox(r, ["tfdt"]).map((function(t) {
												var r = t.data[t.start],
													a = e.readUint32(t, 4);
												if (0 === r) e.writeUint32(t, 4, a - i * o);
												else {
													a *= Math.pow(2, 32), a += e.readUint32(t, 8), a -= i * o, a = Math.max(a, 0);
													var s = Math.floor(a / (n + 1)),
														l = Math.floor(a % (n + 1));
													e.writeUint32(t, 4, s), e.writeUint32(t, 8, l)
												}
											}))
										}))
									}))
								}, e.prototype.append = function(t, r, i, n) {
									var s = this.initData;
									s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), s = this.initData);
									var o, l = this.initPTS;
									if (void 0 === l) {
										var u = e.getStartDTS(s, t);
										this.initPTS = l = u - r, this.observer.trigger(a.default.INIT_PTS_FOUND, {
											initPTS: l
										})
									}
									e.offsetStartDTS(s, t, l), o = e.getStartDTS(s, t), this.remuxer.remux(s.audio, s.video, null, null, o, i, n, t)
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = s
					},
					"./src/demux/mpegaudio.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = {
							BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
							SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
							SamplesCoefficients: [
								[0, 72, 144, 12],
								[0, 0, 0, 0],
								[0, 72, 144, 12],
								[0, 144, 144, 12]
							],
							BytesInSlot: [0, 1, 1, 4],
							appendFrame: function(e, t, r, i, a) {
								if (!(r + 24 > t.length)) {
									var n = this.parseHeader(t, r);
									if (n && r + n.frameLength <= t.length) {
										var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
											o = {
												unit: t.subarray(r, r + n.frameLength),
												pts: s,
												dts: s
											};
										return e.config = [], e.channelCount = n.channelCount, e.samplerate = n.sampleRate, e.samples.push(o), e.len += n.frameLength, {
											sample: o,
											length: n.frameLength
										}
									}
								}
							},
							parseHeader: function(e, t) {
								var r = e[t + 1] >> 3 & 3,
									a = e[t + 1] >> 1 & 3,
									n = e[t + 2] >> 4 & 15,
									s = e[t + 2] >> 2 & 3,
									o = e[t + 2] >> 1 & 1;
								if (1 !== r && 0 !== n && 15 !== n && 3 !== s) {
									var l = 3 === r ? 3 - a : 3 === a ? 3 : 4,
										u = 1e3 * i.BitratesMap[14 * l + n - 1],
										d = 3 === r ? 0 : 2 === r ? 1 : 2,
										c = i.SamplingRateMap[3 * d + s],
										f = e[t + 3] >> 6 == 3 ? 1 : 2,
										h = i.SamplesCoefficients[r][a],
										p = i.BytesInSlot[a],
										g = 8 * h * p;
									return {
										sampleRate: c,
										channelCount: f,
										frameLength: parseInt(h * u / c + o, 10) * p,
										samplesPerFrame: g
									}
								}
							},
							isHeaderPattern: function(e, t) {
								return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
							},
							isHeader: function(e, t) {
								return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
							},
							probe: function(e, t) {
								if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
									var r = this.parseHeader(e, t),
										i = 4;
									r && r.frameLength && (i = r.frameLength);
									var a = t + i;
									if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return !0
								}
								return !1
							}
						};
						t.default = i
					},
					"./src/demux/sample-aes.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/crypt/decrypter.js"),
							a = function() {
								function e(e, t, r, a) {
									this.decryptdata = r, this.discardEPB = a, this.decrypter = new i.default(e, t, {
										removePKCS7Padding: !1
									})
								}
								return e.prototype.decryptBuffer = function(e, t) {
									this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
								}, e.prototype.decryptAacSample = function(e, t, r, i) {
									var a = e[t].unit,
										n = a.subarray(16, a.length - a.length % 16),
										s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
										o = this;
									this.decryptBuffer(s, (function(n) {
										n = new Uint8Array(n), a.set(n, 16), i || o.decryptAacSamples(e, t + 1, r)
									}))
								}, e.prototype.decryptAacSamples = function(e, t, r) {
									for (;; t++) {
										if (t >= e.length) return void r();
										if (!(e[t].unit.length < 32)) {
											var i = this.decrypter.isSync();
											if (this.decryptAacSample(e, t, r, i), !i) return
										}
									}
								}, e.prototype.getAvcEncryptedData = function(e) {
									for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) r.set(e.subarray(a, a + 16), i);
									return r
								}, e.prototype.getAvcDecryptedUnit = function(e, t) {
									t = new Uint8Array(t);
									for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i);
									return e
								}, e.prototype.decryptAvcSample = function(e, t, r, i, a, n) {
									var s = this.discardEPB(a.data),
										o = this.getAvcEncryptedData(s),
										l = this;
									this.decryptBuffer(o.buffer, (function(o) {
										a.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(e, t, r + 1, i)
									}))
								}, e.prototype.decryptAvcSamples = function(e, t, r, i) {
									for (;; t++, r = 0) {
										if (t >= e.length) return void i();
										for (var a = e[t].units; !(r >= a.length); r++) {
											var n = a[r];
											if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
												var s = this.decrypter.isSync();
												if (this.decryptAvcSample(e, t, r, i, n, s), !s) return
											}
										}
									}
								}, e
							}();
						t.default = a
					},
					"./src/demux/tsdemuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/demux/adts.js"),
							a = r("./src/demux/mpegaudio.js"),
							n = r("./src/events.js"),
							s = r("./src/demux/exp-golomb.js"),
							o = r("./src/demux/sample-aes.js"),
							l = r("./src/utils/logger.js"),
							u = r("./src/errors.js"),
							d = {
								video: 1,
								audio: 2,
								id3: 3,
								text: 4
							},
							c = function() {
								function e(e, t, r, i) {
									this.observer = e, this.config = r, this.typeSupported = i, this.remuxer = t, this.sampleAes = null
								}
								return e.prototype.setDecryptData = function(e) {
									null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new o.default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
								}, e.probe = function(t) {
									var r = e._syncOffset(t);
									return !(r < 0 || (r && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
								}, e._syncOffset = function(e) {
									for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
										if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
										r++
									}
									return -1
								}, e.createTrack = function(e, t) {
									return {
										container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
										type: e,
										id: d[e],
										pid: -1,
										inputTimeScale: 9e4,
										sequenceNumber: 0,
										samples: [],
										len: 0,
										dropped: "video" === e ? 0 : void 0,
										isAAC: "audio" === e || void 0,
										duration: "audio" === e ? t : void 0
									}
								}, e.prototype.resetInitSegment = function(t, r, i, a) {
									this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", a), this._audioTrack = e.createTrack("audio", a), this._id3Track = e.createTrack("id3", a), this._txtTrack = e.createTrack("text", a), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = a
								}, e.prototype.resetTimeStamp = function() {}, e.prototype.append = function(t, r, i, a) {
									var s, o, d, c, f, h = t.length,
										p = !1;
									this.contiguous = i;
									var g = this.pmtParsed,
										m = this._avcTrack,
										v = this._audioTrack,
										y = this._id3Track,
										E = m.pid,
										_ = v.pid,
										b = y.pid,
										T = this._pmtId,
										S = m.pesData,
										A = v.pesData,
										R = y.pesData,
										D = this._parsePAT,
										L = this._parsePMT,
										w = this._parsePES,
										O = this._parseAVCPES.bind(this),
										k = this._parseAACPES.bind(this),
										I = this._parseMPEGPES.bind(this),
										P = this._parseID3PES.bind(this),
										C = e._syncOffset(t);
									for (h -= (h + C) % 188, s = C; s < h; s += 188)
										if (71 === t[s]) {
											if (o = !!(64 & t[s + 1]), d = ((31 & t[s + 1]) << 8) + t[s + 2], (48 & t[s + 3]) >> 4 > 1) {
												if ((c = s + 5 + t[s + 4]) === s + 188) continue
											} else c = s + 4;
											switch (d) {
												case E:
													o && (S && (f = w(S)) && void 0 !== f.pts && O(f, !1), S = {
														data: [],
														size: 0
													}), S && (S.data.push(t.subarray(c, s + 188)), S.size += s + 188 - c);
													break;
												case _:
													o && (A && (f = w(A)) && void 0 !== f.pts && (v.isAAC ? k(f) : I(f)), A = {
														data: [],
														size: 0
													}), A && (A.data.push(t.subarray(c, s + 188)), A.size += s + 188 - c);
													break;
												case b:
													o && (R && (f = w(R)) && void 0 !== f.pts && P(f), R = {
														data: [],
														size: 0
													}), R && (R.data.push(t.subarray(c, s + 188)), R.size += s + 188 - c);
													break;
												case 0:
													o && (c += t[c] + 1), T = this._pmtId = D(t, c);
													break;
												case T:
													o && (c += t[c] + 1);
													var x = L(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
													(E = x.avc) > 0 && (m.pid = E), (_ = x.audio) > 0 && (v.pid = _, v.isAAC = x.isAAC), (b = x.id3) > 0 && (y.pid = b), p && !g && (l.logger.log("reparse from beginning"), p = !1, s = C - 188), g = this.pmtParsed = !0;
													break;
												case 17:
												case 8191:
													break;
												default:
													p = !0
											}
										} else this.observer.trigger(n.default.ERROR, {
											type: u.ErrorTypes.MEDIA_ERROR,
											details: u.ErrorDetails.FRAG_PARSING_ERROR,
											fatal: !1,
											reason: "TS packet did not start with 0x47"
										});
									S && (f = w(S)) && void 0 !== f.pts ? (O(f, !0), m.pesData = null) : m.pesData = S, A && (f = w(A)) && void 0 !== f.pts ? (v.isAAC ? k(f) : I(f), v.pesData = null) : (A && A.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"), v.pesData = A), R && (f = w(R)) && void 0 !== f.pts ? (P(f), y.pesData = null) : y.pesData = R, null == this.sampleAes ? this.remuxer.remux(v, m, y, this._txtTrack, r, i, a) : this.decryptAndRemux(v, m, y, this._txtTrack, r, i, a)
								}, e.prototype.decryptAndRemux = function(e, t, r, i, a, n, s) {
									if (e.samples && e.isAAC) {
										var o = this;
										this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
											o.decryptAndRemuxAvc(e, t, r, i, a, n, s)
										}))
									} else this.decryptAndRemuxAvc(e, t, r, i, a, n, s)
								}, e.prototype.decryptAndRemuxAvc = function(e, t, r, i, a, n, s) {
									if (t.samples) {
										var o = this;
										this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
											o.remuxer.remux(e, t, r, i, a, n, s)
										}))
									} else this.remuxer.remux(e, t, r, i, a, n, s)
								}, e.prototype.destroy = function() {
									this._initPTS = this._initDTS = void 0, this._duration = 0
								}, e.prototype._parsePAT = function(e, t) {
									return (31 & e[t + 10]) << 8 | e[t + 11]
								}, e.prototype._parsePMT = function(e, t, r, i) {
									var a, n, s = {
										audio: -1,
										avc: -1,
										id3: -1,
										isAAC: !0
									};
									for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
										switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
											case 207:
												if (!i) {
													l.logger.log("unkown stream type:" + e[t]);
													break
												}
												case 15:
													-1 === s.audio && (s.audio = n);
													break;
												case 21:
													-1 === s.id3 && (s.id3 = n);
													break;
												case 219:
													if (!i) {
														l.logger.log("unkown stream type:" + e[t]);
														break
													}
													case 27:
														-1 === s.avc && (s.avc = n);
														break;
													case 3:
													case 4:
														r ? -1 === s.audio && (s.audio = n, s.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
														break;
													case 36:
														l.logger.warn("HEVC stream type found, not supported for now");
														break;
													default:
														l.logger.log("unkown stream type:" + e[t])
										}
										t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
									}
									return s
								}, e.prototype._parsePES = function(e) {
									var t, r, i, a, n, s, o, u, d = 0,
										c = e.data;
									if (!e || 0 === e.size) return null;
									for (; c[0].length < 19 && c.length > 1;) {
										var f = new Uint8Array(c[0].length + c[1].length);
										f.set(c[0]), f.set(c[1], c[0].length), c[0] = f, c.splice(1, 1)
									}
									if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
										if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
										192 & (r = t[7]) && ((s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (s -= 8589934592), 64 & r ? ((o = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (o -= 8589934592), s - o > 54e5 && (l.logger.warn(Math.round((s - o) / 9e4) + "s delta between PTS and DTS, align them"), s = o)) : o = s), u = (a = t[8]) + 9, e.size -= u, n = new Uint8Array(e.size);
										for (var h = 0, p = c.length; h < p; h++) {
											var g = (t = c[h]).byteLength;
											if (u) {
												if (u > g) {
													u -= g;
													continue
												}
												t = t.subarray(u), g -= u, u = 0
											}
											n.set(t, d), d += g
										}
										return i && (i -= a + 3), {
											data: n,
											pts: s,
											dts: o,
											len: i
										}
									}
									return null
								}, e.prototype.pushAccesUnit = function(e, t) {
									if (e.units.length && e.frame) {
										var r = t.samples,
											i = r.length;
										!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++
									}
									e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
								}, e.prototype._parseAVCPES = function(e, t) {
									var r, i, a, n = this,
										o = this._avcTrack,
										l = this._parseAVCNALu(e.data),
										u = this.avcSample,
										d = !1,
										c = this.pushAccesUnit.bind(this),
										f = function(e, t, r, i) {
											return {
												key: e,
												pts: t,
												dts: r,
												units: [],
												debug: i
											}
										};
									e.data = null, u && l.length && !o.audFound && (c(u, o), u = this.avcSample = f(!1, e.pts, e.dts, "")), l.forEach((function(t) {
										switch (t.type) {
											case 1:
												i = !0, u || (u = n.avcSample = f(!0, e.pts, e.dts, "")), u.frame = !0;
												var l = t.data;
												if (d && l.length > 4) {
													var h = new s.default(l).readSliceType();
													2 !== h && 4 !== h && 7 !== h && 9 !== h || (u.key = !0)
												}
												break;
											case 5:
												i = !0, u || (u = n.avcSample = f(!0, e.pts, e.dts, "")), u.key = !0, u.frame = !0;
												break;
											case 6:
												i = !0, (r = new s.default(n.discardEPB(t.data))).readUByte();
												for (var p = 0, g = 0, m = !1, v = 0; !m && r.bytesAvailable > 1;) {
													p = 0;
													do {
														p += v = r.readUByte()
													} while (255 === v);
													g = 0;
													do {
														g += v = r.readUByte()
													} while (255 === v);
													if (4 === p && 0 !== r.bytesAvailable) {
														if (m = !0, 181 === r.readUByte() && 49 === r.readUShort() && 1195456820 === r.readUInt() && 3 === r.readUByte()) {
															var y = r.readUByte(),
																E = 31 & y,
																_ = [y, r.readUByte()];
															for (a = 0; a < E; a++) _.push(r.readUByte()), _.push(r.readUByte()), _.push(r.readUByte());
															n._insertSampleInOrder(n._txtTrack.samples, {
																type: 3,
																pts: e.pts,
																bytes: _
															})
														}
													} else if (g < r.bytesAvailable)
														for (a = 0; a < g; a++) r.readUByte()
												}
												break;
											case 7:
												if (i = !0, d = !0, !o.sps) {
													var b = (r = new s.default(t.data)).readSPS();
													o.width = b.width, o.height = b.height, o.pixelRatio = b.pixelRatio, o.sps = [t.data], o.duration = n._duration;
													var T = t.data.subarray(1, 4),
														S = "avc1.";
													for (a = 0; a < 3; a++) {
														var A = T[a].toString(16);
														A.length < 2 && (A = "0" + A), S += A
													}
													o.codec = S
												}
												break;
											case 8:
												i = !0, o.pps || (o.pps = [t.data]);
												break;
											case 9:
												i = !1, o.audFound = !0, u && c(u, o), u = n.avcSample = f(!1, e.pts, e.dts, "");
												break;
											case 12:
												i = !1;
												break;
											default:
												i = !1, u && (u.debug += "unknown NAL " + t.type + " ")
										}
										u && i && u.units.push(t)
									})), t && u && (c(u, o), this.avcSample = null)
								}, e.prototype._insertSampleInOrder = function(e, t) {
									var r = e.length;
									if (r > 0) {
										if (t.pts >= e[r - 1].pts) e.push(t);
										else
											for (var i = r - 1; i >= 0; i--)
												if (t.pts < e[i].pts) {
													e.splice(i, 0, t);
													break
												}
									} else e.push(t)
								}, e.prototype._getLastNalUnit = function() {
									var e, t = this.avcSample;
									if (!t || 0 === t.units.length) {
										var r = this._avcTrack.samples;
										t = r[r.length - 1]
									}
									if (t) {
										var i = t.units;
										e = i[i.length - 1]
									}
									return e
								}, e.prototype._parseAVCNALu = function(e) {
									var t, r, i, a, n = 0,
										s = e.byteLength,
										o = this._avcTrack,
										l = o.naluState || 0,
										u = l,
										d = [],
										c = -1;
									for (-1 === l && (c = 0, a = 31 & e[0], l = 0, n = 1); n < s;)
										if (t = e[n++], l)
											if (1 !== l)
												if (t)
													if (1 === t) {
														var f, h;
														c >= 0 ? (i = {
															data: e.subarray(c, n - l - 1),
															type: a
														}, d.push(i)) : (f = this._getLastNalUnit()) && (u && n <= 4 - u && f.state && (f.data = f.data.subarray(0, f.data.byteLength - u)), (r = n - l - 1) > 0 && ((h = new Uint8Array(f.data.byteLength + r)).set(f.data, 0), h.set(e.subarray(0, r), f.data.byteLength), f.data = h)), n < s ? (c = n, a = 31 & e[n], l = 0) : l = -1
													} else l = 0;
									else l = 3;
									else l = t ? 0 : 2;
									else l = t ? 0 : 1;
									return c >= 0 && l >= 0 && (i = {
										data: e.subarray(c, s),
										type: a,
										state: l
									}, d.push(i)), 0 === d.length && (f = this._getLastNalUnit()) && ((h = new Uint8Array(f.data.byteLength + e.byteLength)).set(f.data, 0), h.set(e, f.data.byteLength), f.data = h), o.naluState = l, d
								}, e.prototype.discardEPB = function(e) {
									for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++;
									if (0 === a.length) return e;
									t = i - a.length, r = new Uint8Array(t);
									var s = 0;
									for (n = 0; n < t; s++, n++) s === a[0] && (s++, a.shift()), r[n] = e[s];
									return r
								}, e.prototype._parseAACPES = function(e) {
									var t, r, a, s, o, d = this._audioTrack,
										c = e.data,
										f = e.pts,
										h = this.aacOverFlow,
										p = this.aacLastPTS;
									if (h) {
										var g = new Uint8Array(h.byteLength + c.byteLength);
										g.set(h, 0), g.set(c, h.byteLength), c = g
									}
									for (a = 0, o = c.length; a < o - 1 && !i.isHeader(c, a); a++);
									if (a) {
										var m = void 0,
											v = void 0;
										if (a < o - 1 ? (m = "AAC PES did not start with ADTS header,offset:" + a, v = !1) : (m = "no ADTS header found in AAC PES", v = !0), l.logger.warn("parsing error:" + m), this.observer.trigger(n.default.ERROR, {
												type: u.ErrorTypes.MEDIA_ERROR,
												details: u.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: v,
												reason: m
											}), v) return
									}
									if (i.initTrackConfig(d, this.observer, c, a, this.audioCodec), r = 0, t = i.getFrameDuration(d.samplerate), h && p) {
										var y = p + t;
										Math.abs(y - f) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((y - f) / 90)), f = y)
									}
									for (; a < o;)
										if (i.isHeader(c, a) && a + 5 < o) {
											var E = i.appendFrame(d, c, a, f, r);
											if (!E) break;
											a += E.length, s = E.sample.pts, r++
										} else a++;
									h = a < o ? c.subarray(a, o) : null, this.aacOverFlow = h, this.aacLastPTS = s
								}, e.prototype._parseMPEGPES = function(e) {
									for (var t = e.data, r = t.length, i = 0, n = 0, s = e.pts; n < r;)
										if (a.default.isHeader(t, n)) {
											var o = a.default.appendFrame(this._audioTrack, t, n, s, i);
											if (!o) break;
											n += o.length, i++
										} else n++
								}, e.prototype._parseID3PES = function(e) {
									this._id3Track.samples.push(e)
								}, e
							}();
						t.default = c
					},
					"./src/errors.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.ErrorTypes = {
							NETWORK_ERROR: "networkError",
							MEDIA_ERROR: "mediaError",
							KEY_SYSTEM_ERROR: "keySystemError",
							MUX_ERROR: "muxError",
							OTHER_ERROR: "otherError"
						}, t.ErrorDetails = {
							KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
							KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
							KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
							KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
							MANIFEST_LOAD_ERROR: "manifestLoadError",
							MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
							MANIFEST_PARSING_ERROR: "manifestParsingError",
							MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
							LEVEL_LOAD_ERROR: "levelLoadError",
							LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
							LEVEL_SWITCH_ERROR: "levelSwitchError",
							AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
							AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
							FRAG_LOAD_ERROR: "fragLoadError",
							FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
							FRAG_DECRYPT_ERROR: "fragDecryptError",
							FRAG_PARSING_ERROR: "fragParsingError",
							REMUX_ALLOC_ERROR: "remuxAllocError",
							KEY_LOAD_ERROR: "keyLoadError",
							KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
							BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
							BUFFER_APPEND_ERROR: "bufferAppendError",
							BUFFER_APPENDING_ERROR: "bufferAppendingError",
							BUFFER_STALLED_ERROR: "bufferStalledError",
							BUFFER_FULL_ERROR: "bufferFullError",
							BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
							BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
							INTERNAL_EXCEPTION: "internalException"
						}
					},
					"./src/event-handler.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/logger.js"),
							a = r("./src/errors.js"),
							n = r("./src/events.js"),
							s = {
								hlsEventGeneric: !0,
								hlsHandlerDestroying: !0,
								hlsHandlerDestroyed: !0
							},
							o = function() {
								function e(e) {
									for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
									this.hls = e, this.onEvent = this.onEvent.bind(this), this.handledEvents = t, this.useGenericHandler = !0, this.registerListeners()
								}
								return e.prototype.destroy = function() {
									this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
								}, e.prototype.onHandlerDestroying = function() {}, e.prototype.onHandlerDestroyed = function() {}, e.prototype.isEventHandler = function() {
									return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
								}, e.prototype.registerListeners = function() {
									this.isEventHandler() && this.handledEvents.forEach((function(e) {
										if (s[e]) throw new Error("Forbidden event-name: " + e);
										this.hls.on(e, this.onEvent)
									}), this)
								}, e.prototype.unregisterListeners = function() {
									this.isEventHandler() && this.handledEvents.forEach((function(e) {
										this.hls.off(e, this.onEvent)
									}), this)
								}, e.prototype.onEvent = function(e, t) {
									this.onEventGeneric(e, t)
								}, e.prototype.onEventGeneric = function(e, t) {
									try {
										(function(e, t) {
											var r = "on" + e.replace("hls", "");
											if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
											return this[r].bind(this, t)
										}).call(this, e, t).call()
									} catch (r) {
										i.logger.error("An internal error happened while handling event " + e + '. Error message: "' + r.message + '". Here is a stacktrace:', r), this.hls.trigger(n.default.ERROR, {
											type: a.ErrorTypes.OTHER_ERROR,
											details: a.ErrorDetails.INTERNAL_EXCEPTION,
											fatal: !1,
											event: e,
											err: r
										})
									}
								}, e
							}();
						t.default = o
					},
					"./src/events.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							MEDIA_ATTACHING: "hlsMediaAttaching",
							MEDIA_ATTACHED: "hlsMediaAttached",
							MEDIA_DETACHING: "hlsMediaDetaching",
							MEDIA_DETACHED: "hlsMediaDetached",
							BUFFER_RESET: "hlsBufferReset",
							BUFFER_CODECS: "hlsBufferCodecs",
							BUFFER_CREATED: "hlsBufferCreated",
							BUFFER_APPENDING: "hlsBufferAppending",
							BUFFER_APPENDED: "hlsBufferAppended",
							BUFFER_EOS: "hlsBufferEos",
							BUFFER_FLUSHING: "hlsBufferFlushing",
							BUFFER_FLUSHED: "hlsBufferFlushed",
							MANIFEST_LOADING: "hlsManifestLoading",
							MANIFEST_LOADED: "hlsManifestLoaded",
							MANIFEST_PARSED: "hlsManifestParsed",
							LEVEL_SWITCHING: "hlsLevelSwitching",
							LEVEL_SWITCHED: "hlsLevelSwitched",
							LEVEL_LOADING: "hlsLevelLoading",
							LEVEL_LOADED: "hlsLevelLoaded",
							LEVEL_UPDATED: "hlsLevelUpdated",
							LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
							AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
							AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
							AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
							AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
							AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
							SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
							SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
							SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
							SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
							SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
							INIT_PTS_FOUND: "hlsInitPtsFound",
							FRAG_LOADING: "hlsFragLoading",
							FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
							FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
							FRAG_LOADED: "hlsFragLoaded",
							FRAG_DECRYPTED: "hlsFragDecrypted",
							FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
							FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
							FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
							FRAG_PARSING_DATA: "hlsFragParsingData",
							FRAG_PARSED: "hlsFragParsed",
							FRAG_BUFFERED: "hlsFragBuffered",
							FRAG_CHANGED: "hlsFragChanged",
							FPS_DROP: "hlsFpsDrop",
							FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
							ERROR: "hlsError",
							DESTROYING: "hlsDestroying",
							KEY_LOADING: "hlsKeyLoading",
							KEY_LOADED: "hlsKeyLoaded",
							STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
						}
					},
					"./src/hls.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
							s = r("./src/errors.js"),
							o = r("./src/loader/playlist-loader.js"),
							l = r("./src/loader/fragment-loader.js"),
							u = r("./src/loader/key-loader.js"),
							d = r("./src/controller/fragment-tracker.js"),
							c = r("./src/controller/stream-controller.js"),
							f = r("./src/controller/level-controller.js"),
							h = r("./src/controller/id3-track-controller.js"),
							p = r("./src/is-supported.js"),
							g = r("./src/utils/logger.js"),
							m = r("./src/config.js"),
							v = r("./src/events.js"),
							y = function(e) {
								function t(r) {
									void 0 === r && (r = {});
									var i = e.call(this) || this,
										a = t.DefaultConfig;
									if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
									for (var n in a) n in r || (r[n] = a[n]);
									if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
									if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
									g.enableLogs(r.debug), i.config = r, i._autoLevelCapping = -1;
									var s = i.abrController = new r.abrController(i),
										p = new r.bufferController(i),
										m = new r.capLevelController(i),
										v = new r.fpsController(i),
										y = new o.default(i),
										E = new l.default(i),
										_ = new u.default(i),
										b = new h.default(i),
										T = i.levelController = new f.default(i),
										S = new d.FragmentTracker(i),
										A = [T, i.streamController = new c.default(i, S)],
										R = r.audioStreamController;
									R && A.push(new R(i, S)), i.networkControllers = A;
									var D = [y, E, _, s, p, m, v, b, S];
									if (R = r.audioTrackController) {
										var L = new R(i);
										i.audioTrackController = L, D.push(L)
									}
									if (R = r.subtitleTrackController) {
										var w = new R(i);
										i.subtitleTrackController = w, A.push(w)
									}
									if (R = r.emeController) {
										var O = new R(i);
										i.emeController = O, D.push(O)
									}
									return (R = r.subtitleStreamController) && A.push(new R(i, S)), (R = r.timelineController) && D.push(new R(i)), i.coreComponents = D, i
								}
								return a(t, e), Object.defineProperty(t, "version", {
									get: function() {
										return "0.12.4"
									},
									enumerable: !0,
									configurable: !0
								}), t.isSupported = function() {
									return p.isSupported()
								}, Object.defineProperty(t, "Events", {
									get: function() {
										return v.default
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "ErrorTypes", {
									get: function() {
										return s.ErrorTypes
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "ErrorDetails", {
									get: function() {
										return s.ErrorDetails
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "DefaultConfig", {
									get: function() {
										return t.defaultConfig ? t.defaultConfig : m.hlsDefaultConfig
									},
									set: function(e) {
										t.defaultConfig = e
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.destroy = function() {
									g.logger.log("destroy"), this.trigger(v.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach((function(e) {
										e.destroy()
									})), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
								}, t.prototype.attachMedia = function(e) {
									g.logger.log("attachMedia"), this.media = e, this.trigger(v.default.MEDIA_ATTACHING, {
										media: e
									})
								}, t.prototype.detachMedia = function() {
									g.logger.log("detachMedia"), this.trigger(v.default.MEDIA_DETACHING), this.media = null
								}, t.prototype.loadSource = function(e) {
									e = n.buildAbsoluteURL(window.location.href, e, {
										alwaysNormalize: !0
									}), g.logger.log("loadSource:" + e), this.url = e, this.trigger(v.default.MANIFEST_LOADING, {
										url: e
									})
								}, t.prototype.startLoad = function(e) {
									void 0 === e && (e = -1), g.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) {
										t.startLoad(e)
									}))
								}, t.prototype.stopLoad = function() {
									g.logger.log("stopLoad"), this.networkControllers.forEach((function(e) {
										e.stopLoad()
									}))
								}, t.prototype.swapAudioCodec = function() {
									g.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
								}, t.prototype.recoverMediaError = function() {
									g.logger.log("recoverMediaError");
									var e = this.media;
									this.detachMedia(), this.attachMedia(e)
								}, Object.defineProperty(t.prototype, "levels", {
									get: function() {
										return this.levelController.levels
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "currentLevel", {
									get: function() {
										return this.streamController.currentLevel
									},
									set: function(e) {
										g.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextLevel", {
									get: function() {
										return this.streamController.nextLevel
									},
									set: function(e) {
										g.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "loadLevel", {
									get: function() {
										return this.levelController.level
									},
									set: function(e) {
										g.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextLoadLevel", {
									get: function() {
										return this.levelController.nextLoadLevel
									},
									set: function(e) {
										this.levelController.nextLoadLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "firstLevel", {
									get: function() {
										return Math.max(this.levelController.firstLevel, this.minAutoLevel)
									},
									set: function(e) {
										g.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "startLevel", {
									get: function() {
										return this.levelController.startLevel
									},
									set: function(e) {
										g.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "autoLevelCapping", {
									get: function() {
										return this._autoLevelCapping
									},
									set: function(e) {
										g.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "autoLevelEnabled", {
									get: function() {
										return -1 === this.levelController.manualLevel
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "manualLevel", {
									get: function() {
										return this.levelController.manualLevel
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "minAutoLevel", {
									get: function() {
										for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++)
											if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i;
										return 0
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "maxAutoLevel", {
									get: function() {
										var e = this.levels,
											t = this.autoLevelCapping;
										return -1 === t && e && e.length ? e.length - 1 : t
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextAutoLevel", {
									get: function() {
										return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
									},
									set: function(e) {
										this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTracks", {
									get: function() {
										var e = this.audioTrackController;
										return e ? e.audioTracks : []
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTrack", {
									get: function() {
										var e = this.audioTrackController;
										return e ? e.audioTrack : -1
									},
									set: function(e) {
										var t = this.audioTrackController;
										t && (t.audioTrack = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "liveSyncPosition", {
									get: function() {
										return this.streamController.liveSyncPosition
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleTracks", {
									get: function() {
										var e = this.subtitleTrackController;
										return e ? e.subtitleTracks : []
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleTrack", {
									get: function() {
										var e = this.subtitleTrackController;
										return e ? e.subtitleTrack : -1
									},
									set: function(e) {
										var t = this.subtitleTrackController;
										t && (t.subtitleTrack = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleDisplay", {
									get: function() {
										var e = this.subtitleTrackController;
										return !!e && e.subtitleDisplay
									},
									set: function(e) {
										var t = this.subtitleTrackController;
										t && (t.subtitleDisplay = e)
									},
									enumerable: !0,
									configurable: !0
								}), t
							}(r("./src/observer.js").Observer);
						t.default = y
					},
					"./src/is-supported.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/mediasource-helper.js");
						t.isSupported = function() {
							var e = i.getMediaSource(),
								t = window.SourceBuffer || window.WebKitSourceBuffer,
								r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
								a = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
							return !!r && !!a
						}
					},
					"./src/loader/fragment-loader.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/errors.js"),
								l = r("./src/utils/logger.js"),
								u = function(t) {
									function r(e) {
										var r = t.call(this, e, n.default.FRAG_LOADING) || this;
										return r.loaders = {}, r
									}
									return a(r, t), r.prototype.destroy = function() {
										var e = this.loaders;
										for (var r in e) {
											var i = e[r];
											i && i.destroy()
										}
										this.loaders = {}, t.prototype.destroy.call(this)
									}, r.prototype.onFragLoading = function(t) {
										var r = t.frag,
											i = r.type,
											a = this.loaders,
											n = this.hls.config,
											s = n.fLoader,
											o = n.loader;
										r.loaded = 0;
										var u, d, c, f = a[i];
										f && (l.logger.warn("abort previous fragment loader for type: " + i), f.abort()), f = a[i] = r.loader = n.fLoader ? new s(n) : new o(n), u = {
											url: r.url,
											frag: r,
											responseType: "arraybuffer",
											progressData: !1
										};
										var h = r.byteRangeStartOffset,
											p = r.byteRangeEndOffset;
										e.isFinite(h) && e.isFinite(p) && (u.rangeStart = h, u.rangeEnd = p), d = {
											timeout: n.fragLoadingTimeOut,
											maxRetry: 0,
											retryDelay: 0,
											maxRetryDelay: n.fragLoadingMaxRetryTimeout
										}, c = {
											onSuccess: this.loadsuccess.bind(this),
											onError: this.loaderror.bind(this),
											onTimeout: this.loadtimeout.bind(this),
											onProgress: this.loadprogress.bind(this)
										}, f.load(u, d, c)
									}, r.prototype.loadsuccess = function(e, t, r, i) {
										void 0 === i && (i = null);
										var a = e.data,
											s = r.frag;
										s.loader = void 0, this.loaders[s.type] = void 0, this.hls.trigger(n.default.FRAG_LOADED, {
											payload: a,
											frag: s,
											stats: t,
											networkDetails: i
										})
									}, r.prototype.loaderror = function(e, t, r) {
										void 0 === r && (r = null);
										var i = t.frag,
											a = i.loader;
										a && a.abort(), this.loaders[i.type] = void 0, this.hls.trigger(n.default.ERROR, {
											type: o.ErrorTypes.NETWORK_ERROR,
											details: o.ErrorDetails.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: t.frag,
											response: e,
											networkDetails: r
										})
									}, r.prototype.loadtimeout = function(e, t, r) {
										void 0 === r && (r = null);
										var i = t.frag,
											a = i.loader;
										a && a.abort(), this.loaders[i.type] = void 0, this.hls.trigger(n.default.ERROR, {
											type: o.ErrorTypes.NETWORK_ERROR,
											details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: t.frag,
											networkDetails: r
										})
									}, r.prototype.loadprogress = function(e, t, r, i) {
										void 0 === i && (i = null);
										var a = t.frag;
										a.loaded = e.loaded, this.hls.trigger(n.default.FRAG_LOAD_PROGRESS, {
											frag: a,
											stats: e,
											networkDetails: i
										})
									}, r
								}(s.default);
							t.default = u
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/fragment.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
								a = r("./src/loader/level-key.js"),
								n = function() {
									function t() {
										var e;
										this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this.programDateTime = null, this.rawProgramDateTime = null, this._elementaryStreams = ((e = {})[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
									}
									return Object.defineProperty(t, "ElementaryStreamTypes", {
										get: function() {
											return {
												AUDIO: "audio",
												VIDEO: "video"
											}
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "url", {
										get: function() {
											return !this._url && this.relurl && (this._url = i.buildAbsoluteURL(this.baseurl, this.relurl, {
												alwaysNormalize: !0
											})), this._url
										},
										set: function(e) {
											this._url = e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRange", {
										get: function() {
											if (!this._byteRange && !this.rawByteRange) return [];
											if (this._byteRange) return this._byteRange;
											var e = [];
											if (this.rawByteRange) {
												var t = this.rawByteRange.split("@", 2);
												if (1 === t.length) {
													var r = this.lastByteRangeEndOffset;
													e[0] = r || 0
												} else e[0] = parseInt(t[1]);
												e[1] = parseInt(t[0]) + e[0], this._byteRange = e
											}
											return e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRangeStartOffset", {
										get: function() {
											return this.byteRange[0]
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRangeEndOffset", {
										get: function() {
											return this.byteRange[1]
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "decryptdata", {
										get: function() {
											return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "endProgramDateTime", {
										get: function() {
											if (!e.isFinite(this.programDateTime)) return null;
											var t = e.isFinite(this.duration) ? this.duration : 0;
											return this.programDateTime + 1e3 * t
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "encrypted", {
										get: function() {
											return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
										},
										enumerable: !0,
										configurable: !0
									}), t.prototype.addElementaryStream = function(e) {
										this._elementaryStreams[e] = !0
									}, t.prototype.hasElementaryStream = function(e) {
										return !0 === this._elementaryStreams[e]
									}, t.prototype.createInitializationVector = function(e) {
										for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
										return t
									}, t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
										var r = e;
										return e && e.method && e.uri && !e.iv && ((r = new a.default).method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)), r
									}, t
								}();
							t.default = n
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/key-loader.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							s = r("./src/event-handler.js"),
							o = r("./src/errors.js"),
							l = r("./src/utils/logger.js"),
							u = function(e) {
								function t(t) {
									var r = e.call(this, t, n.default.KEY_LOADING) || this;
									return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r
								}
								return a(t, e), t.prototype.destroy = function() {
									for (var e in this.loaders) {
										var t = this.loaders[e];
										t && t.destroy()
									}
									this.loaders = {}, s.default.prototype.destroy.call(this)
								}, t.prototype.onKeyLoading = function(e) {
									var t = e.frag,
										r = t.type,
										i = this.loaders[r],
										a = t.decryptdata,
										s = a.uri;
									if (s !== this.decrypturl || null === this.decryptkey) {
										var o, u, d, c = this.hls.config;
										i && (l.logger.warn("abort previous key loader for type:" + r), i.abort()), t.loader = this.loaders[r] = new c.loader(c), this.decrypturl = s, this.decryptkey = null, o = {
											url: s,
											frag: t,
											responseType: "arraybuffer"
										}, u = {
											timeout: c.fragLoadingTimeOut,
											maxRetry: 0,
											retryDelay: c.fragLoadingRetryDelay,
											maxRetryDelay: c.fragLoadingMaxRetryTimeout
										}, d = {
											onSuccess: this.loadsuccess.bind(this),
											onError: this.loaderror.bind(this),
											onTimeout: this.loadtimeout.bind(this)
										}, t.loader.load(o, u, d)
									} else this.decryptkey && (a.key = this.decryptkey, this.hls.trigger(n.default.KEY_LOADED, {
										frag: t
									}))
								}, t.prototype.loadsuccess = function(e, t, r) {
									var i = r.frag;
									this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(n.default.KEY_LOADED, {
										frag: i
									})
								}, t.prototype.loaderror = function(e, t) {
									var r = t.frag,
										i = r.loader;
									i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(n.default.ERROR, {
										type: o.ErrorTypes.NETWORK_ERROR,
										details: o.ErrorDetails.KEY_LOAD_ERROR,
										fatal: !1,
										frag: r,
										response: e
									})
								}, t.prototype.loadtimeout = function(e, t) {
									var r = t.frag,
										i = r.loader;
									i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(n.default.ERROR, {
										type: o.ErrorTypes.NETWORK_ERROR,
										details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
										fatal: !1,
										frag: r
									})
								}, t
							}(s.default);
						t.default = u
					},
					"./src/loader/level-key.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
							a = function() {
								function e() {
									this.method = null, this.key = null, this.iv = null, this._uri = null
								}
								return Object.defineProperty(e.prototype, "uri", {
									get: function() {
										return !this._uri && this.reluri && (this._uri = i.buildAbsoluteURL(this.baseuri, this.reluri, {
											alwaysNormalize: !0
										})), this._uri
									},
									enumerable: !0,
									configurable: !0
								}), e
							}();
						t.default = a
					},
					"./src/loader/level.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var r = function() {
								function t(e) {
									this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
								}
								return Object.defineProperty(t.prototype, "hasProgramDateTime", {
									get: function() {
										return !(!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
									},
									enumerable: !0,
									configurable: !0
								}), t
							}();
							t.default = r
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/m3u8-parser.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
								a = r("./src/loader/fragment.js"),
								n = r("./src/loader/level.js"),
								s = r("./src/loader/level-key.js"),
								o = r("./src/utils/attr-list.js"),
								l = r("./src/utils/logger.js"),
								u = r("./src/utils/codecs.js"),
								d = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
								c = /#EXT-X-MEDIA:(.*)/g,
								f = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
								h = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
								p = /\.(mp4|m4s|m4v|m4a)$/i,
								g = function() {
									function t() {}
									return t.findGroup = function(e, t) {
										if (!e) return null;
										for (var r = null, i = 0; i < e.length; i++) {
											var a = e[i];
											a.id === t && (r = a)
										}
										return r
									}, t.convertAVC1ToAVCOTI = function(e) {
										var t, r = e.split(".");
										return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t
									}, t.resolve = function(e, t) {
										return i.buildAbsoluteURL(t, e, {
											alwaysNormalize: !0
										})
									}, t.parseMasterPlaylist = function(e, r) {
										var i, a = [];

										function n(e, t) {
											["video", "audio"].forEach((function(r) {
												var i = e.filter((function(e) {
													return u.isCodecType(e, r)
												}));
												if (i.length) {
													var a = i.filter((function(e) {
														return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
													}));
													t[r + "Codec"] = a.length > 0 ? a[0] : i[0], e = e.filter((function(e) {
														return -1 === i.indexOf(e)
													}))
												}
											})), t.unknownCodecs = e
										}
										for (d.lastIndex = 0; null != (i = d.exec(e));) {
											var s = {},
												l = s.attrs = new o.default(i[1]);
											s.url = t.resolve(i[2], r);
											var c = l.decimalResolution("RESOLUTION");
											c && (s.width = c.width, s.height = c.height), s.bitrate = l.decimalInteger("AVERAGE-BANDWIDTH") || l.decimalInteger("BANDWIDTH"), s.name = l.NAME, n([].concat((l.CODECS || "").split(/[ ,]+/)), s), s.videoCodec && -1 !== s.videoCodec.indexOf("avc1") && (s.videoCodec = t.convertAVC1ToAVCOTI(s.videoCodec)), a.push(s)
										}
										return a
									}, t.parseMasterPlaylistMedia = function(e, r, i, a) {
										var n;
										void 0 === a && (a = []);
										var s = [],
											l = 0;
										for (c.lastIndex = 0; null !== (n = c.exec(e));) {
											var u = {},
												d = new o.default(n[1]);
											if (d.TYPE === i) {
												if (u.groupId = d["GROUP-ID"], u.name = d.NAME, u.type = i, u.default = "YES" === d.DEFAULT, u.autoselect = "YES" === d.AUTOSELECT, u.forced = "YES" === d.FORCED, d.URI && (u.url = t.resolve(d.URI, r)), u.lang = d.LANGUAGE, u.name || (u.name = u.lang), a.length) {
													var f = t.findGroup(a, u.groupId);
													u.audioCodec = f ? f.codec : a[0].codec
												}
												u.id = l++, s.push(u)
											}
										}
										return s
									}, t.parseLevelPlaylist = function(t, r, i, u, d) {
										var c, g, v = 0,
											y = 0,
											E = new n.default(r),
											_ = new s.default,
											b = 0,
											T = null,
											S = new a.default,
											A = null;
										for (f.lastIndex = 0; null !== (c = f.exec(t));) {
											var R = c[1];
											if (R) {
												S.duration = parseFloat(R);
												var D = (" " + c[2]).slice(1);
												S.title = D || null, S.tagList.push(D ? ["INF", R, D] : ["INF", R])
											} else if (c[3]) {
												if (e.isFinite(S.duration)) {
													var L = v++;
													S.type = u, S.start = y, S.levelkey = _, S.sn = L, S.level = i, S.cc = b, S.urlId = d, S.baseurl = r, S.relurl = (" " + c[3]).slice(1), m(S, T), E.fragments.push(S), T = S, y += S.duration, S = new a.default
												}
											} else if (c[4]) {
												if (S.rawByteRange = (" " + c[4]).slice(1), T) {
													var w = T.byteRangeEndOffset;
													w && (S.lastByteRangeEndOffset = w)
												}
											} else if (c[5]) S.rawProgramDateTime = (" " + c[5]).slice(1), S.tagList.push(["PROGRAM-DATE-TIME", S.rawProgramDateTime]), null === A && (A = E.fragments.length);
											else {
												for (c = c[0].match(h), g = 1; g < c.length && void 0 === c[g]; g++);
												var O = (" " + c[g + 1]).slice(1),
													k = (" " + c[g + 2]).slice(1);
												switch (c[g]) {
													case "#":
														S.tagList.push(k ? [O, k] : [O]);
														break;
													case "PLAYLIST-TYPE":
														E.type = O.toUpperCase();
														break;
													case "MEDIA-SEQUENCE":
														v = E.startSN = parseInt(O);
														break;
													case "TARGETDURATION":
														E.targetduration = parseFloat(O);
														break;
													case "VERSION":
														E.version = parseInt(O);
														break;
													case "EXTM3U":
														break;
													case "ENDLIST":
														E.live = !1;
														break;
													case "DIS":
														b++, S.tagList.push(["DIS"]);
														break;
													case "DISCONTINUITY-SEQ":
														b = parseInt(O);
														break;
													case "KEY":
														var I = O,
															P = new o.default(I),
															C = P.enumeratedString("METHOD"),
															x = P.URI,
															F = P.hexadecimalInteger("IV");
														C && (_ = new s.default, x && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(C) >= 0 && (_.method = C, _.baseuri = r, _.reluri = x, _.key = null, _.iv = F));
														break;
													case "START":
														var M = O,
															N = new o.default(M).decimalFloatingPoint("TIME-OFFSET");
														e.isFinite(N) && (E.startTimeOffset = N);
														break;
													case "MAP":
														var j = new o.default(O);
														S.relurl = j.URI, S.rawByteRange = j.BYTERANGE, S.baseurl = r, S.level = i, S.type = u, S.sn = "initSegment", E.initSegment = S, (S = new a.default).rawProgramDateTime = E.initSegment.rawProgramDateTime;
														break;
													default:
														l.logger.warn("line parsed but not handled: " + c)
												}
											}
										}
										return (S = T) && !S.relurl && (E.fragments.pop(), y -= S.duration), E.totalduration = y, E.averagetargetduration = y / E.fragments.length, E.endSN = v - 1, E.startCC = E.fragments[0] ? E.fragments[0].cc : 0, E.endCC = b, !E.initSegment && E.fragments.length && E.fragments.every((function(e) {
											return p.test(e.relurl)
										})) && (l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (S = new a.default).relurl = E.fragments[0].relurl, S.baseurl = r, S.level = i, S.type = u, S.sn = "initSegment", E.initSegment = S, E.needSidxRanges = !0), A && function(e, t) {
											for (var r = e[t], i = t - 1; i >= 0; i--) {
												var a = e[i];
												a.programDateTime = r.programDateTime - 1e3 * a.duration, r = a
											}
										}(E.fragments, A), E
									}, t
								}();

							function m(t, r) {
								t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : r && r.programDateTime && (t.programDateTime = r.endProgramDateTime), e.isFinite(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
							}
							t.default = g
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/playlist-loader.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/events.js"),
								s = r("./src/event-handler.js"),
								o = r("./src/errors.js"),
								l = r("./src/utils/logger.js"),
								u = r("./src/demux/mp4demuxer.js"),
								d = r("./src/loader/m3u8-parser.js"),
								c = window.performance,
								f = {
									MANIFEST: "manifest",
									LEVEL: "level",
									AUDIO_TRACK: "audioTrack",
									SUBTITLE_TRACK: "subtitleTrack"
								},
								h = {
									MAIN: "main",
									AUDIO: "audio",
									SUBTITLE: "subtitle"
								},
								p = function(t) {
									function r(e) {
										var r = t.call(this, e, n.default.MANIFEST_LOADING, n.default.LEVEL_LOADING, n.default.AUDIO_TRACK_LOADING, n.default.SUBTITLE_TRACK_LOADING) || this;
										return r.loaders = {}, r
									}
									return a(r, t), Object.defineProperty(r, "ContextType", {
										get: function() {
											return f
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r, "LevelType", {
										get: function() {
											return h
										},
										enumerable: !0,
										configurable: !0
									}), r.canHaveQualityLevels = function(e) {
										return e !== f.AUDIO_TRACK && e !== f.SUBTITLE_TRACK
									}, r.mapContextToLevelType = function(e) {
										switch (e.type) {
											case f.AUDIO_TRACK:
												return h.AUDIO;
											case f.SUBTITLE_TRACK:
												return h.SUBTITLE;
											default:
												return h.MAIN
										}
									}, r.getResponseUrl = function(e, t) {
										var r = e.url;
										return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
									}, r.prototype.createInternalLoader = function(e) {
										var t = this.hls.config,
											r = t.pLoader,
											i = t.loader,
											a = new(r || i)(t);
										return e.loader = a, this.loaders[e.type] = a, a
									}, r.prototype.getInternalLoader = function(e) {
										return this.loaders[e.type]
									}, r.prototype.resetInternalLoader = function(e) {
										this.loaders[e] && delete this.loaders[e]
									}, r.prototype.destroyInternalLoaders = function() {
										for (var e in this.loaders) {
											var t = this.loaders[e];
											t && t.destroy(), this.resetInternalLoader(e)
										}
									}, r.prototype.destroy = function() {
										this.destroyInternalLoaders(), t.prototype.destroy.call(this)
									}, r.prototype.onManifestLoading = function(e) {
										this.load(e.url, {
											type: f.MANIFEST,
											level: 0,
											id: null
										})
									}, r.prototype.onLevelLoading = function(e) {
										this.load(e.url, {
											type: f.LEVEL,
											level: e.level,
											id: e.id
										})
									}, r.prototype.onAudioTrackLoading = function(e) {
										this.load(e.url, {
											type: f.AUDIO_TRACK,
											level: null,
											id: e.id
										})
									}, r.prototype.onSubtitleTrackLoading = function(e) {
										this.load(e.url, {
											type: f.SUBTITLE_TRACK,
											level: null,
											id: e.id
										})
									}, r.prototype.load = function(e, t) {
										var r = this.hls.config;
										l.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
										var i, a, n, s, o = this.getInternalLoader(t);
										if (o) {
											var u = o.context;
											if (u && u.url === e) return l.logger.trace("playlist request ongoing"), !1;
											l.logger.warn("aborting previous loader for type: " + t.type), o.abort()
										}
										switch (t.type) {
											case f.MANIFEST:
												i = r.manifestLoadingMaxRetry, a = r.manifestLoadingTimeOut, n = r.manifestLoadingRetryDelay, s = r.manifestLoadingMaxRetryTimeout;
												break;
											case f.LEVEL:
												i = 0, a = r.levelLoadingTimeOut;
												break;
											default:
												i = r.levelLoadingMaxRetry, a = r.levelLoadingTimeOut, n = r.levelLoadingRetryDelay, s = r.levelLoadingMaxRetryTimeout
										}
										o = this.createInternalLoader(t), t.url = e, t.responseType = t.responseType || "";
										var d = {
												timeout: a,
												maxRetry: i,
												retryDelay: n,
												maxRetryDelay: s
											},
											c = {
												onSuccess: this.loadsuccess.bind(this),
												onError: this.loaderror.bind(this),
												onTimeout: this.loadtimeout.bind(this)
											};
										return l.logger.debug("Calling internal loader delegate for URL: " + e), o.load(t, d, c), !0
									}, r.prototype.loadsuccess = function(e, t, r, i) {
										if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, i);
										this.resetInternalLoader(r.type);
										var a = e.data;
										t.tload = c.now(), 0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
									}, r.prototype.loaderror = function(e, t, r) {
										void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e)
									}, r.prototype.loadtimeout = function(e, t, r) {
										void 0 === r && (r = null), this._handleNetworkError(t, r, !0)
									}, r.prototype._handleMasterPlaylist = function(e, t, i, a) {
										var s = this.hls,
											o = e.data,
											u = r.getResponseUrl(e, i),
											c = d.default.parseMasterPlaylist(o, u);
										if (c.length) {
											var f = c.map((function(e) {
													return {
														id: e.attrs.AUDIO,
														codec: e.audioCodec
													}
												})),
												h = d.default.parseMasterPlaylistMedia(o, u, "AUDIO", f),
												p = d.default.parseMasterPlaylistMedia(o, u, "SUBTITLES");
											if (h.length) {
												var g = !1;
												h.forEach((function(e) {
													e.url || (g = !0)
												})), !1 === g && c[0].audioCodec && !c[0].attrs.AUDIO && (l.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), h.unshift({
													type: "main",
													name: "main"
												}))
											}
											s.trigger(n.default.MANIFEST_LOADED, {
												levels: c,
												audioTracks: h,
												subtitles: p,
												url: u,
												stats: t,
												networkDetails: a
											})
										} else this._handleManifestParsingError(e, i, "no level found in manifest", a)
									}, r.prototype._handleTrackOrLevelPlaylist = function(t, i, a, s) {
										var o = this.hls,
											l = a.id,
											u = a.level,
											h = a.type,
											p = r.getResponseUrl(t, a),
											g = e.isFinite(l) ? l : 0,
											m = e.isFinite(u) ? u : g,
											v = r.mapContextToLevelType(a),
											y = d.default.parseLevelPlaylist(t.data, p, m, v, g);
										if (y.tload = i.tload, h === f.MANIFEST) {
											var E = {
												url: p,
												details: y
											};
											o.trigger(n.default.MANIFEST_LOADED, {
												levels: [E],
												audioTracks: [],
												url: p,
												stats: i,
												networkDetails: s
											})
										}
										if (i.tparsed = c.now(), y.needSidxRanges) {
											var _ = y.initSegment.url;
											this.load(_, {
												isSidxRequest: !0,
												type: h,
												level: u,
												levelDetails: y,
												id: l,
												rangeStart: 0,
												rangeEnd: 2048,
												responseType: "arraybuffer"
											})
										} else a.levelDetails = y, this._handlePlaylistLoaded(t, i, a, s)
									}, r.prototype._handleSidxRequest = function(e, t) {
										var r = u.default.parseSegmentIndex(new Uint8Array(e.data));
										if (r) {
											var i = r.references,
												a = t.levelDetails;
											i.forEach((function(e, t) {
												var r = e.info,
													i = a.fragments[t];
												0 === i.byteRange.length && (i.rawByteRange = String(1 + r.end - r.start) + "@" + String(r.start))
											})), a.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
										}
									}, r.prototype._handleManifestParsingError = function(e, t, r, i) {
										this.hls.trigger(n.default.ERROR, {
											type: o.ErrorTypes.NETWORK_ERROR,
											details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
											fatal: !0,
											url: e.url,
											reason: r,
											networkDetails: i
										})
									}, r.prototype._handleNetworkError = function(e, t, r, i) {
										var a, s;
										void 0 === r && (r = !1), void 0 === i && (i = null), l.logger.info("A network error occured while loading a " + e.type + "-type playlist");
										var u = this.getInternalLoader(e);
										switch (e.type) {
											case f.MANIFEST:
												a = r ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT : o.ErrorDetails.MANIFEST_LOAD_ERROR, s = !0;
												break;
											case f.LEVEL:
												a = r ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT : o.ErrorDetails.LEVEL_LOAD_ERROR, s = !1;
												break;
											case f.AUDIO_TRACK:
												a = r ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, s = !1;
												break;
											default:
												s = !1
										}
										u && (u.abort(), this.resetInternalLoader(e.type));
										var d = {
											type: o.ErrorTypes.NETWORK_ERROR,
											details: a,
											fatal: s,
											url: u.url,
											loader: u,
											context: e,
											networkDetails: t
										};
										i && (d.response = i), this.hls.trigger(n.default.ERROR, d)
									}, r.prototype._handlePlaylistLoaded = function(e, t, i, a) {
										var s = i.type,
											o = i.level,
											l = i.id,
											u = i.levelDetails;
										if (u.targetduration)
											if (r.canHaveQualityLevels(i.type)) this.hls.trigger(n.default.LEVEL_LOADED, {
												details: u,
												level: o || 0,
												id: l || 0,
												stats: t,
												networkDetails: a
											});
											else switch (s) {
												case f.AUDIO_TRACK:
													this.hls.trigger(n.default.AUDIO_TRACK_LOADED, {
														details: u,
														id: l,
														stats: t,
														networkDetails: a
													});
													break;
												case f.SUBTITLE_TRACK:
													this.hls.trigger(n.default.SUBTITLE_TRACK_LOADED, {
														details: u,
														id: l,
														stats: t,
														networkDetails: a
													})
											} else this._handleManifestParsingError(e, i, "invalid target duration", a)
									}, r
								}(s.default);
							t.default = p
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/observer.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return a(t, e), t.prototype.trigger = function(e) {
								for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
								this.emit.apply(this, [e, e].concat(t))
							}, t
						}(r("./node_modules/eventemitter3/index.js").EventEmitter);
						t.Observer = n
					},
					"./src/polyfills/number.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/get-self-scope.js").getSelfScope().Number;
						t.Number = i, i.isFinite = i.isFinite || function(e) {
							return "number" == typeof e && isFinite(e)
						}
					},
					"./src/remux/aac-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e() {}
							return e.getSilentFrame = function(e, t) {
								switch (e) {
									case "mp4a.40.2":
										if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
										if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
										if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
										if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
										if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
										if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
										break;
									default:
										if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
										if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
										if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
								}
								return null
							}, e
						}();
						t.default = i
					},
					"./src/remux/mp4-generator.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = Math.pow(2, 32) - 1,
							a = function() {
								function e() {}
								return e.init = function() {
									var t;
									for (t in e.types = {
											avc1: [],
											avcC: [],
											btrt: [],
											dinf: [],
											dref: [],
											esds: [],
											ftyp: [],
											hdlr: [],
											mdat: [],
											mdhd: [],
											mdia: [],
											mfhd: [],
											minf: [],
											moof: [],
											moov: [],
											mp4a: [],
											".mp3": [],
											mvex: [],
											mvhd: [],
											pasp: [],
											sdtp: [],
											stbl: [],
											stco: [],
											stsc: [],
											stsd: [],
											stsz: [],
											stts: [],
											tfdt: [],
											tfhd: [],
											traf: [],
											trak: [],
											trun: [],
											trex: [],
											tkhd: [],
											vmhd: [],
											smhd: []
										}, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
									var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
										i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
									e.HDLR_TYPES = {
										video: r,
										audio: i
									};
									var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
										n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
									e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
									var s = new Uint8Array([105, 115, 111, 109]),
										o = new Uint8Array([97, 118, 99, 49]),
										l = new Uint8Array([0, 0, 0, 1]);
									e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
								}, e.box = function(e) {
									for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength;
									for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) t.set(r[a], i), i += r[a].byteLength;
									return t
								}, e.hdlr = function(t) {
									return e.box(e.types.hdlr, e.HDLR_TYPES[t])
								}, e.mdat = function(t) {
									return e.box(e.types.mdat, t)
								}, e.mdhd = function(t, r) {
									r *= t;
									var a = Math.floor(r / (i + 1)),
										n = Math.floor(r % (i + 1));
									return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
								}, e.mdia = function(t) {
									return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
								}, e.mfhd = function(t) {
									return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
								}, e.minf = function(t) {
									return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
								}, e.moof = function(t, r, i) {
									return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
								}, e.moov = function(t) {
									for (var r = t.length, i = []; r--;) i[r] = e.trak(t[r]);
									return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
								}, e.mvex = function(t) {
									for (var r = t.length, i = []; r--;) i[r] = e.trex(t[r]);
									return e.box.apply(null, [e.types.mvex].concat(i))
								}, e.mvhd = function(t, r) {
									r *= t;
									var a = Math.floor(r / (i + 1)),
										n = Math.floor(r % (i + 1)),
										s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
									return e.box(e.types.mvhd, s)
								}, e.sdtp = function(t) {
									var r, i, a = t.samples || [],
										n = new Uint8Array(4 + a.length);
									for (i = 0; i < a.length; i++) r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
									return e.box(e.types.sdtp, n)
								}, e.stbl = function(t) {
									return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
								}, e.avc1 = function(t) {
									var r, i, a, n = [],
										s = [];
									for (r = 0; r < t.sps.length; r++) a = (i = t.sps[r]).byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i));
									for (r = 0; r < t.pps.length; r++) a = (i = t.pps[r]).byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(i));
									var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s))),
										l = t.width,
										u = t.height,
										d = t.pixelRatio[0],
										c = t.pixelRatio[1];
									return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
								}, e.esds = function(e) {
									var t = e.config.length;
									return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
								}, e.mp4a = function(t) {
									var r = t.samplerate;
									return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
								}, e.mp3 = function(t) {
									var r = t.samplerate;
									return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
								}, e.stsd = function(t) {
									return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
								}, e.tkhd = function(t) {
									var r = t.id,
										a = t.duration * t.timescale,
										n = t.width,
										s = t.height,
										o = Math.floor(a / (i + 1)),
										l = Math.floor(a % (i + 1));
									return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
								}, e.traf = function(t, r) {
									var a = e.sdtp(t),
										n = t.id,
										s = Math.floor(r / (i + 1)),
										o = Math.floor(r % (i + 1));
									return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.trun(t, a.length + 16 + 20 + 8 + 16 + 8 + 8), a)
								}, e.trak = function(t) {
									return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
								}, e.trex = function(t) {
									var r = t.id;
									return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
								}, e.trun = function(t, r) {
									var i, a, n, s, o, l, u = t.samples || [],
										d = u.length,
										c = 12 + 16 * d,
										f = new Uint8Array(c);
									for (r += 8 + c, f.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) n = (a = u[i]).duration, s = a.size, o = a.flags, l = a.cts, f.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
									return e.box(e.types.trun, f)
								}, e.initSegment = function(t) {
									e.types || e.init();
									var r, i = e.moov(t);
									return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP), r.set(i, e.FTYP.byteLength), r
								}, e
							}();
						t.default = a
					},
					"./src/remux/mp4-remuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/remux/aac-helper.js"),
							a = r("./src/remux/mp4-generator.js"),
							n = r("./src/events.js"),
							s = r("./src/errors.js"),
							o = r("./src/utils/logger.js"),
							l = function() {
								function e(e, t, r, i) {
									this.observer = e, this.config = t, this.typeSupported = r;
									var a = navigator.userAgent;
									this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1
								}
								return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function(e) {
									this._initPTS = this._initDTS = e
								}, e.prototype.resetInitSegment = function() {
									this.ISGenerated = !1
								}, e.prototype.remux = function(e, t, r, i, a, s, l) {
									if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) {
										var u = e.samples.length,
											d = t.samples.length,
											c = a,
											f = a;
										if (u && d) {
											var h = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
											c += Math.max(0, h), f += Math.max(0, -h)
										}
										if (u) {
											e.timescale || (o.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a));
											var p = this.remuxAudio(e, c, s, l);
											if (d) {
												var g = void 0;
												p && (g = p.endPTS - p.startPTS), t.timescale || (o.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)), this.remuxVideo(t, f, s, g, l)
											}
										} else if (d) {
											var m = this.remuxVideo(t, f, s, 0, l);
											m && e.codec && this.remuxEmptyAudio(e, c, s, m)
										}
									}
									r.samples.length && this.remuxID3(r, a), i.samples.length && this.remuxText(i, a), this.observer.trigger(n.default.FRAG_PARSED)
								}, e.prototype.generateIS = function(e, t, r) {
									var i, l, u = this.observer,
										d = e.samples,
										c = t.samples,
										f = this.typeSupported,
										h = "audio/mp4",
										p = {},
										g = {
											tracks: p
										},
										m = void 0 === this._initPTS;
									if (m && (i = l = 1 / 0), e.config && d.length && (e.timescale = e.samplerate, o.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (f.mpeg ? (h = "audio/mpeg", e.codec = "") : f.mp3 && (e.codec = "mp3")), p.audio = {
											container: h,
											codec: e.codec,
											initSegment: !e.isAAC && f.mpeg ? new Uint8Array : a.default.initSegment([e]),
											metadata: {
												channelCount: e.channelCount
											}
										}, m && (i = l = d[0].pts - e.inputTimeScale * r)), t.sps && t.pps && c.length) {
										var v = t.inputTimeScale;
										t.timescale = v, p.video = {
											container: "video/mp4",
											codec: t.codec,
											initSegment: a.default.initSegment([t]),
											metadata: {
												width: t.width,
												height: t.height
											}
										}, m && (i = Math.min(i, c[0].pts - v * r), l = Math.min(l, c[0].dts - v * r), this.observer.trigger(n.default.INIT_PTS_FOUND, {
											initPTS: i
										}))
									}
									Object.keys(p).length ? (u.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, m && (this._initPTS = i, this._initDTS = l)) : u.trigger(n.default.ERROR, {
										type: s.ErrorTypes.MEDIA_ERROR,
										details: s.ErrorDetails.FRAG_PARSING_ERROR,
										fatal: !1,
										reason: "no audio/video samples found"
									})
								}, e.prototype.remuxVideo = function(e, t, r, i, l) {
									var u, d, c, f, h, p, g, m = 8,
										v = e.timescale,
										y = e.samples,
										E = [],
										_ = y.length,
										b = this._PTSNormalize,
										T = this._initPTS,
										S = this.nextAvcDts,
										A = this.isSafari;
									if (0 !== _) {
										A && (r |= y.length && S && (l && Math.abs(t - S / v) < .1 || Math.abs(y[0].pts - S - T) < v / 5)), r || (S = t * v), y.forEach((function(e) {
											e.pts = b(e.pts - T, S), e.dts = b(e.dts - T, S)
										})), y.sort((function(e, t) {
											var r = e.dts - t.dts,
												i = e.pts - t.pts;
											return r || i || e.id - t.id
										}));
										var R = y.reduce((function(e, t) {
											return Math.max(Math.min(e, t.pts - t.dts), -18e3)
										}), 0);
										if (R < 0) {
											o.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(R / 90) + " ms to overcome this issue");
											for (var D = 0; D < y.length; D++) y[D].dts += R
										}
										var L = y[0];
										h = Math.max(L.dts, 0), f = Math.max(L.pts, 0);
										var w = Math.round((h - S) / 90);
										r && w && (w > 1 ? o.logger.log("AVC:" + w + " ms hole between fragments detected,filling it") : w < -1 && o.logger.log("AVC:" + -w + " ms overlapping between fragments detected"), h = S, y[0].dts = h, f = Math.max(f - w, S), y[0].pts = f, o.logger.log("Video/PTS/DTS adjusted: " + Math.round(f / 90) + "/" + Math.round(h / 90) + ",delta:" + w + " ms")), L = y[y.length - 1], g = Math.max(L.dts, 0), p = Math.max(L.pts, 0, g), A && (u = Math.round((g - h) / (y.length - 1)));
										var O = 0,
											k = 0;
										for (D = 0; D < _; D++) {
											for (var I = y[D], P = I.units, C = P.length, x = 0, F = 0; F < C; F++) x += P[F].data.length;
											k += x, O += C, I.length = x, I.dts = A ? h + D * u : Math.max(I.dts, h), I.pts = Math.max(I.pts, I.dts)
										}
										var M = k + 4 * O + 8;
										try {
											d = new Uint8Array(M)
										} catch (Z) {
											return void this.observer.trigger(n.default.ERROR, {
												type: s.ErrorTypes.MUX_ERROR,
												details: s.ErrorDetails.REMUX_ALLOC_ERROR,
												fatal: !1,
												bytes: M,
												reason: "fail allocating video mdat " + M
											})
										}
										var N = new DataView(d.buffer);
										for (N.setUint32(0, M), d.set(a.default.types.mdat, 4), D = 0; D < _; D++) {
											var j = y[D],
												U = j.units,
												B = 0,
												G = void 0;
											for (F = 0, C = U.length; F < C; F++) {
												var K = U[F],
													H = K.data,
													V = K.data.byteLength;
												N.setUint32(m, V), m += 4, d.set(H, m), m += V, B += 4 + V
											}
											if (A) G = Math.max(0, u * Math.round((j.pts - j.dts) / u));
											else {
												if (D < _ - 1) u = y[D + 1].dts - j.dts;
												else {
													var W = this.config,
														Y = j.dts - y[D > 0 ? D - 1 : D].dts;
													if (W.stretchShortVideoTrack) {
														var q = W.maxBufferHole,
															z = Math.floor(q * v),
															X = (i ? f + i * v : this.nextAudioPts) - j.pts;
														X > z ? ((u = X - Y) < 0 && (u = Y), o.logger.log("It is approximately " + X / 90 + " ms to the next segment; using duration " + u / 90 + " ms for the last video frame.")) : u = Y
													} else u = Y
												}
												G = Math.round(j.pts - j.dts)
											}
											E.push({
												size: B,
												duration: u,
												cts: G,
												flags: {
													isLeading: 0,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradPrio: 0,
													dependsOn: j.key ? 2 : 1,
													isNonSync: j.key ? 0 : 1
												}
											})
										}
										this.nextAvcDts = g + u;
										var Q = e.dropped;
										if (e.len = 0, e.nbNalu = 0, e.dropped = 0, E.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
											var J = E[0].flags;
											J.dependsOn = 2, J.isNonSync = 0
										}
										e.samples = E, c = a.default.moof(e.sequenceNumber++, h, e), e.samples = [];
										var $ = {
											data1: c,
											data2: d,
											startPTS: f / v,
											endPTS: (p + u) / v,
											startDTS: h / v,
											endDTS: this.nextAvcDts / v,
											type: "video",
											hasAudio: !1,
											hasVideo: !0,
											nb: E.length,
											dropped: Q
										};
										return this.observer.trigger(n.default.FRAG_PARSING_DATA, $), $
									}
								}, e.prototype.remuxAudio = function(e, t, r, l) {
									var u, d, c, f, h, p, g, m = e.inputTimeScale,
										v = e.timescale,
										y = m / v,
										E = (e.isAAC ? 1024 : 1152) * y,
										_ = this._PTSNormalize,
										b = this._initPTS,
										T = !e.isAAC && this.typeSupported.mpeg,
										S = e.samples,
										A = [],
										R = this.nextAudioPts;
									if (r |= S.length && R && (l && Math.abs(t - R / m) < .1 || Math.abs(S[0].pts - R - b) < 20 * E), S.forEach((function(e) {
											e.pts = e.dts = _(e.pts - b, t * m)
										})), 0 !== (S = S.filter((function(e) {
											return e.pts >= 0
										}))).length) {
										if (r || (R = l ? t * m : S[0].pts), e.isAAC)
											for (var D = this.config.maxAudioFramesDrift, L = 0, w = R; L < S.length;) {
												var O, k = S[L];
												O = (j = k.pts) - w;
												var I = Math.abs(1e3 * O / m);
												if (O <= -D * E) o.logger.warn("Dropping 1 audio frame @ " + (w / m).toFixed(3) + "s due to " + Math.round(I) + " ms overlap."), S.splice(L, 1), e.len -= k.unit.length;
												else if (O >= D * E && I < 1e4 && w) {
													var P = Math.round(O / E);
													o.logger.warn("Injecting " + P + " audio frame @ " + (w / m).toFixed(3) + "s due to " + Math.round(1e3 * O / m) + " ms gap.");
													for (var C = 0; C < P; C++) {
														var x = Math.max(w, 0);
														(c = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), c = k.unit.subarray()), S.splice(L, 0, {
															unit: c,
															pts: x,
															dts: x
														}), e.len += c.length, w += E, L++
													}
													k.pts = k.dts = w, w += E, L++
												} else Math.abs(O), k.pts = k.dts = w, w += E, L++
											}
										C = 0;
										for (var F = S.length; C < F; C++) {
											var M = S[C],
												N = M.unit,
												j = M.pts;
											if (void 0 !== g) d.duration = Math.round((j - g) / y);
											else {
												var U = Math.round(1e3 * (j - R) / m),
													B = 0;
												if (r && e.isAAC && U) {
													if (U > 0 && U < 1e4) B = Math.round((j - R) / E), o.logger.log(U + " ms hole between AAC samples detected,filling it"), B > 0 && ((c = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (c = N.subarray()), e.len += B * c.length);
													else if (U < -12) {
														o.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (R / m).toFixed(3) + "s/" + (j / m).toFixed(3) + "s/" + -U + "ms"), e.len -= N.byteLength;
														continue
													}
													j = R
												}
												if (p = j, !(e.len > 0)) return;
												var G = T ? e.len : e.len + 8;
												u = T ? 0 : 8;
												try {
													f = new Uint8Array(G)
												} catch (z) {
													return void this.observer.trigger(n.default.ERROR, {
														type: s.ErrorTypes.MUX_ERROR,
														details: s.ErrorDetails.REMUX_ALLOC_ERROR,
														fatal: !1,
														bytes: G,
														reason: "fail allocating audio mdat " + G
													})
												}
												for (T || (new DataView(f.buffer).setUint32(0, G), f.set(a.default.types.mdat, 4)), L = 0; L < B; L++)(c = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), c = N.subarray()), f.set(c, u), u += c.byteLength, d = {
													size: c.byteLength,
													cts: 0,
													duration: 1024,
													flags: {
														isLeading: 0,
														isDependedOn: 0,
														hasRedundancy: 0,
														degradPrio: 0,
														dependsOn: 1
													}
												}, A.push(d)
											}
											f.set(N, u);
											var K = N.byteLength;
											u += K, d = {
												size: K,
												cts: 0,
												duration: 0,
												flags: {
													isLeading: 0,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradPrio: 0,
													dependsOn: 1
												}
											}, A.push(d), g = j
										}
										var H = 0,
											V = A.length;
										if (V >= 2 && (H = A[V - 2].duration, d.duration = H), V) {
											this.nextAudioPts = R = g + y * H, e.len = 0, e.samples = A, h = T ? new Uint8Array : a.default.moof(e.sequenceNumber++, p / y, e), e.samples = [];
											var W = p / m,
												Y = R / m,
												q = {
													data1: h,
													data2: f,
													startPTS: W,
													endPTS: Y,
													startDTS: W,
													endDTS: Y,
													type: "audio",
													hasAudio: !0,
													hasVideo: !1,
													nb: V
												};
											return this.observer.trigger(n.default.FRAG_PARSING_DATA, q), q
										}
										return null
									}
								}, e.prototype.remuxEmptyAudio = function(e, t, r, a) {
									var n = e.inputTimeScale,
										s = n / (e.samplerate ? e.samplerate : n),
										l = this.nextAudioPts,
										u = (void 0 !== l ? l : a.startDTS * n) + this._initDTS,
										d = a.endDTS * n + this._initDTS,
										c = 1024 * s,
										f = Math.ceil((d - u) / c),
										h = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
									if (o.logger.warn("remux empty Audio"), h) {
										for (var p = [], g = 0; g < f; g++) {
											var m = u + g * c;
											p.push({
												unit: h,
												pts: m,
												dts: m
											}), e.len += h.length
										}
										e.samples = p, this.remuxAudio(e, t, r)
									} else o.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
								}, e.prototype.remuxID3 = function(e) {
									var t, r = e.samples.length,
										i = e.inputTimeScale,
										a = this._initPTS,
										s = this._initDTS;
									if (r) {
										for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - a) / i, t.dts = (t.dts - s) / i;
										this.observer.trigger(n.default.FRAG_PARSING_METADATA, {
											samples: e.samples
										})
									}
									e.samples = []
								}, e.prototype.remuxText = function(e) {
									e.samples.sort((function(e, t) {
										return e.pts - t.pts
									}));
									var t, r = e.samples.length,
										i = e.inputTimeScale,
										a = this._initPTS;
									if (r) {
										for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - a) / i;
										this.observer.trigger(n.default.FRAG_PARSING_USERDATA, {
											samples: e.samples
										})
									}
									e.samples = []
								}, e.prototype._PTSNormalize = function(e, t) {
									var r;
									if (void 0 === t) return e;
									for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
									return e
								}, e
							}();
						t.default = l
					},
					"./src/remux/passthrough-remuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/events.js"),
							a = function() {
								function e(e) {
									this.observer = e
								}
								return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment = function() {}, e.prototype.remux = function(e, t, r, a, n, s, o, l) {
									var u = this.observer,
										d = "";
									e && (d += "audio"), t && (d += "video"), u.trigger(i.default.FRAG_PARSING_DATA, {
										data1: l,
										startPTS: n,
										startDTS: n,
										type: d,
										hasAudio: !!e,
										hasVideo: !!t,
										nb: 1,
										dropped: 0
									}), u.trigger(i.default.FRAG_PARSED)
								}, e
							}();
						t.default = a
					},
					"./src/task-loop.js": function(e, t, r) {
						"use strict";
						var i, a = this && this.__extends || (i = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function(e) {
							function t(t) {
								for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
								var a = e.apply(this, [t].concat(r)) || this;
								return a._tickInterval = null, a._tickTimer = null, a._tickCallCount = 0, a._boundTick = a.tick.bind(a), a
							}
							return a(t, e), t.prototype.onHandlerDestroying = function() {
								this.clearNextTick(), this.clearInterval()
							}, t.prototype.hasInterval = function() {
								return !!this._tickInterval
							}, t.prototype.hasNextTick = function() {
								return !!this._tickTimer
							}, t.prototype.setInterval = function(e) {
								return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e), !0)
							}, t.prototype.clearInterval = function() {
								return !!this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
							}, t.prototype.clearNextTick = function() {
								return !!this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
							}, t.prototype.tick = function() {
								this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
							}, t.prototype.doTick = function() {}, t
						}(r("./src/event-handler.js").default);
						t.default = n
					},
					"./src/utils/attr-list.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var r = /^(\d+)x(\d+)$/,
								i = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
								a = function() {
									function t(e) {
										for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
									}
									return t.prototype.decimalInteger = function(t) {
										var r = parseInt(this[t], 10);
										return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
									}, t.prototype.hexadecimalInteger = function(e) {
										if (this[e]) {
											var t = (this[e] || "0x").slice(2);
											t = (1 & t.length ? "0" : "") + t;
											for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
											return r
										}
										return null
									}, t.prototype.hexadecimalIntegerAsNumber = function(t) {
										var r = parseInt(this[t], 16);
										return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
									}, t.prototype.decimalFloatingPoint = function(e) {
										return parseFloat(this[e])
									}, t.prototype.enumeratedString = function(e) {
										return this[e]
									}, t.prototype.decimalResolution = function(e) {
										var t = r.exec(this[e]);
										if (null !== t) return {
											width: parseInt(t[1], 10),
											height: parseInt(t[2], 10)
										}
									}, t.parseAttrList = function(e) {
										var t, r = {};
										for (i.lastIndex = 0; null !== (t = i.exec(e));) {
											var a = t[2];
											0 === a.indexOf('"') && a.lastIndexOf('"') === a.length - 1 && (a = a.slice(1, -1)), r[t[1]] = a
										}
										return r
									}, t
								}();
							t.default = a
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/binary-search.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							search: function(e, t) {
								for (var r = 0, i = e.length - 1, a = null, n = null; r <= i;) {
									var s = t(n = e[a = (r + i) / 2 | 0]);
									if (s > 0) r = a + 1;
									else {
										if (!(s < 0)) return n;
										i = a - 1
									}
								}
								return null
							}
						}
					},
					"./src/utils/buffer-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e() {}
							return e.isBuffered = function(e, t) {
								try {
									if (e)
										for (var r = e.buffered, i = 0; i < r.length; i++)
											if (t >= r.start(i) && t <= r.end(i)) return !0
								} catch (a) {}
								return !1
							}, e.bufferInfo = function(e, t, r) {
								try {
									if (e) {
										var i = e.buffered,
											a = [],
											n = void 0;
										for (n = 0; n < i.length; n++) a.push({
											start: i.start(n),
											end: i.end(n)
										});
										return this.bufferedInfo(a, t, r)
									}
								} catch (s) {}
								return {
									len: 0,
									start: t,
									end: t,
									nextStart: void 0
								}
							}, e.bufferedInfo = function(e, t, r) {
								var i, a, n, s, o, l = [];
								for (e.sort((function(e, t) {
										var r = e.start - t.start;
										return r || t.end - e.end
									})), o = 0; o < e.length; o++) {
									var u = l.length;
									if (u) {
										var d = l[u - 1].end;
										e[o].start - d < r ? e[o].end > d && (l[u - 1].end = e[o].end) : l.push(e[o])
									} else l.push(e[o])
								}
								for (o = 0, i = 0, a = n = t; o < l.length; o++) {
									var c = l[o].start,
										f = l[o].end;
									if (t + r >= c && t < f) a = c, i = (n = f) - t;
									else if (t + r < c) {
										s = c;
										break
									}
								}
								return {
									len: i,
									start: a,
									end: n,
									nextStart: s
								}
							}, e
						}();
						t.BufferHelper = i
					},
					"./src/utils/cea-608-parser.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = {
								42: 225,
								92: 233,
								94: 237,
								95: 243,
								96: 250,
								123: 231,
								124: 247,
								125: 209,
								126: 241,
								127: 9608,
								128: 174,
								129: 176,
								130: 189,
								131: 191,
								132: 8482,
								133: 162,
								134: 163,
								135: 9834,
								136: 224,
								137: 32,
								138: 232,
								139: 226,
								140: 234,
								141: 238,
								142: 244,
								143: 251,
								144: 193,
								145: 201,
								146: 211,
								147: 218,
								148: 220,
								149: 252,
								150: 8216,
								151: 161,
								152: 42,
								153: 8217,
								154: 9473,
								155: 169,
								156: 8480,
								157: 8226,
								158: 8220,
								159: 8221,
								160: 192,
								161: 194,
								162: 199,
								163: 200,
								164: 202,
								165: 203,
								166: 235,
								167: 206,
								168: 207,
								169: 239,
								170: 212,
								171: 217,
								172: 249,
								173: 219,
								174: 171,
								175: 187,
								176: 195,
								177: 227,
								178: 205,
								179: 204,
								180: 236,
								181: 210,
								182: 242,
								183: 213,
								184: 245,
								185: 123,
								186: 125,
								187: 92,
								188: 94,
								189: 95,
								190: 124,
								191: 8764,
								192: 196,
								193: 228,
								194: 214,
								195: 246,
								196: 223,
								197: 165,
								198: 164,
								199: 9475,
								200: 197,
								201: 229,
								202: 216,
								203: 248,
								204: 9487,
								205: 9491,
								206: 9495,
								207: 9499
							},
							a = function(e) {
								var t = e;
								return i.hasOwnProperty(e) && (t = i[e]), String.fromCharCode(t)
							},
							n = 15,
							s = 100,
							o = {
								17: 1,
								18: 3,
								21: 5,
								22: 7,
								23: 9,
								16: 11,
								19: 12,
								20: 14
							},
							l = {
								17: 2,
								18: 4,
								21: 6,
								22: 8,
								23: 10,
								19: 13,
								20: 15
							},
							u = {
								25: 1,
								26: 3,
								29: 5,
								30: 7,
								31: 9,
								24: 11,
								27: 12,
								28: 14
							},
							d = {
								25: 2,
								26: 4,
								29: 6,
								30: 8,
								31: 10,
								27: 13,
								28: 15
							},
							c = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
							f = {
								verboseFilter: {
									DATA: 3,
									DEBUG: 3,
									INFO: 2,
									WARNING: 2,
									TEXT: 1,
									ERROR: 0
								},
								time: null,
								verboseLevel: 0,
								setTime: function(e) {
									this.time = e
								},
								log: function(e, t) {
									this.verboseFilter[e], this.verboseLevel
								}
							},
							h = function(e) {
								for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
								return t
							},
							p = function() {
								function e(e, t, r, i, a) {
									this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = i || "black", this.flash = a || !1
								}
								return e.prototype.reset = function() {
									this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
								}, e.prototype.setStyles = function(e) {
									for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
										var i = t[r];
										e.hasOwnProperty(i) && (this[i] = e[i])
									}
								}, e.prototype.isDefault = function() {
									return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
								}, e.prototype.equals = function(e) {
									return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
								}, e.prototype.copy = function(e) {
									this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
								}, e.prototype.toString = function() {
									return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
								}, e
							}(),
							g = function() {
								function e(e, t, r, i, a, n) {
									this.uchar = e || " ", this.penState = new p(t, r, i, a, n)
								}
								return e.prototype.reset = function() {
									this.uchar = " ", this.penState.reset()
								}, e.prototype.setChar = function(e, t) {
									this.uchar = e, this.penState.copy(t)
								}, e.prototype.setPenState = function(e) {
									this.penState.copy(e)
								}, e.prototype.equals = function(e) {
									return this.uchar === e.uchar && this.penState.equals(e.penState)
								}, e.prototype.copy = function(e) {
									this.uchar = e.uchar, this.penState.copy(e.penState)
								}, e.prototype.isEmpty = function() {
									return " " === this.uchar && this.penState.isDefault()
								}, e
							}(),
							m = function() {
								function e() {
									this.chars = [];
									for (var e = 0; e < s; e++) this.chars.push(new g);
									this.pos = 0, this.currPenState = new p
								}
								return e.prototype.equals = function(e) {
									for (var t = !0, r = 0; r < s; r++)
										if (!this.chars[r].equals(e.chars[r])) {
											t = !1;
											break
										} return t
								}, e.prototype.copy = function(e) {
									for (var t = 0; t < s; t++) this.chars[t].copy(e.chars[t])
								}, e.prototype.isEmpty = function() {
									for (var e = !0, t = 0; t < s; t++)
										if (!this.chars[t].isEmpty()) {
											e = !1;
											break
										} return e
								}, e.prototype.setCursor = function(e) {
									this.pos !== e && (this.pos = e), this.pos < 0 ? (f.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > s && (f.log("ERROR", "Too large cursor position " + this.pos), this.pos = s)
								}, e.prototype.moveCursor = function(e) {
									var t = this.pos + e;
									if (e > 1)
										for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
									this.setCursor(t)
								}, e.prototype.backSpace = function() {
									this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
								}, e.prototype.insertChar = function(e) {
									e >= 144 && this.backSpace();
									var t = a(e);
									this.pos >= s ? f.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
								}, e.prototype.clearFromPos = function(e) {
									var t;
									for (t = e; t < s; t++) this.chars[t].reset()
								}, e.prototype.clear = function() {
									this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
								}, e.prototype.clearToEndOfRow = function() {
									this.clearFromPos(this.pos)
								}, e.prototype.getTextString = function() {
									for (var e = [], t = !0, r = 0; r < s; r++) {
										var i = this.chars[r].uchar;
										" " !== i && (t = !1), e.push(i)
									}
									return t ? "" : e.join("")
								}, e.prototype.setPenStyles = function(e) {
									this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
								}, e
							}(),
							v = function() {
								function e() {
									this.rows = [];
									for (var e = 0; e < n; e++) this.rows.push(new m);
									this.currRow = n - 1, this.nrRollUpRows = null, this.reset()
								}
								return e.prototype.reset = function() {
									for (var e = 0; e < n; e++) this.rows[e].clear();
									this.currRow = n - 1
								}, e.prototype.equals = function(e) {
									for (var t = !0, r = 0; r < n; r++)
										if (!this.rows[r].equals(e.rows[r])) {
											t = !1;
											break
										} return t
								}, e.prototype.copy = function(e) {
									for (var t = 0; t < n; t++) this.rows[t].copy(e.rows[t])
								}, e.prototype.isEmpty = function() {
									for (var e = !0, t = 0; t < n; t++)
										if (!this.rows[t].isEmpty()) {
											e = !1;
											break
										} return e
								}, e.prototype.backSpace = function() {
									this.rows[this.currRow].backSpace()
								}, e.prototype.clearToEndOfRow = function() {
									this.rows[this.currRow].clearToEndOfRow()
								}, e.prototype.insertChar = function(e) {
									this.rows[this.currRow].insertChar(e)
								}, e.prototype.setPen = function(e) {
									this.rows[this.currRow].setPenStyles(e)
								}, e.prototype.moveCursor = function(e) {
									this.rows[this.currRow].moveCursor(e)
								}, e.prototype.setCursor = function(e) {
									f.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
								}, e.prototype.setPAC = function(e) {
									f.log("INFO", "pacData = " + JSON.stringify(e));
									var t = e.row - 1;
									if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
										for (var r = 0; r < n; r++) this.rows[r].clear();
										var i = this.currRow + 1 - this.nrRollUpRows,
											a = this.lastOutputScreen;
										if (a) {
											var s = a.rows[i].cueStartTime;
											if (s && s < f.time)
												for (r = 0; r < this.nrRollUpRows; r++) this.rows[t - this.nrRollUpRows + r + 1].copy(a.rows[i + r])
										}
									}
									this.currRow = t;
									var o = this.rows[this.currRow];
									if (null !== e.indent) {
										var l = e.indent,
											u = Math.max(l - 1, 0);
										o.setCursor(e.indent), e.color = o.chars[u].penState.foreground
									}
									var d = {
										foreground: e.color,
										underline: e.underline,
										italics: e.italics,
										background: "black",
										flash: !1
									};
									this.setPen(d)
								}, e.prototype.setBkgData = function(e) {
									f.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
								}, e.prototype.setRollUpRows = function(e) {
									this.nrRollUpRows = e
								}, e.prototype.rollUp = function() {
									if (null !== this.nrRollUpRows) {
										f.log("TEXT", this.getDisplayText());
										var e = this.currRow + 1 - this.nrRollUpRows,
											t = this.rows.splice(e, 1)[0];
										t.clear(), this.rows.splice(this.currRow, 0, t), f.log("INFO", "Rolling up")
									} else f.log("DEBUG", "roll_up but nrRollUpRows not set yet")
								}, e.prototype.getDisplayText = function(e) {
									e = e || !1;
									for (var t = [], r = "", i = -1, a = 0; a < n; a++) {
										var s = this.rows[a].getTextString();
										s && (i = a + 1, e ? t.push("Row " + i + ": '" + s + "'") : t.push(s.trim()))
									}
									return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
								}, e.prototype.getTextAndFormat = function() {
									return this.rows
								}, e
							}(),
							y = function() {
								function e(e, t) {
									this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new v, this.nonDisplayedMemory = new v, this.lastOutputScreen = new v, this.currRollUpRow = this.displayedMemory.rows[n - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
								}
								return e.prototype.reset = function() {
									this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[n - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
								}, e.prototype.getHandler = function() {
									return this.outputFilter
								}, e.prototype.setHandler = function(e) {
									this.outputFilter = e
								}, e.prototype.setPAC = function(e) {
									this.writeScreen.setPAC(e)
								}, e.prototype.setBkgData = function(e) {
									this.writeScreen.setBkgData(e)
								}, e.prototype.setMode = function(e) {
									e !== this.mode && (this.mode = e, f.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
								}, e.prototype.insertChars = function(e) {
									for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
									var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
									f.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (f.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
								}, e.prototype.ccRCL = function() {
									f.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
								}, e.prototype.ccBS = function() {
									f.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
								}, e.prototype.ccAOF = function() {}, e.prototype.ccAON = function() {}, e.prototype.ccDER = function() {
									f.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
								}, e.prototype.ccRU = function(e) {
									f.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
								}, e.prototype.ccFON = function() {
									f.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
										flash: !0
									})
								}, e.prototype.ccRDC = function() {
									f.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
								}, e.prototype.ccTR = function() {
									f.log("INFO", "TR"), this.setMode("MODE_TEXT")
								}, e.prototype.ccRTD = function() {
									f.log("INFO", "RTD"), this.setMode("MODE_TEXT")
								}, e.prototype.ccEDM = function() {
									f.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
								}, e.prototype.ccCR = function() {
									f.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
								}, e.prototype.ccENM = function() {
									f.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
								}, e.prototype.ccEOC = function() {
									if (f.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
										var e = this.displayedMemory;
										this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, f.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
									}
									this.outputDataUpdate(!0)
								}, e.prototype.ccTO = function(e) {
									f.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
								}, e.prototype.ccMIDROW = function(e) {
									var t = {
										flash: !1
									};
									if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
									else {
										var r = Math.floor(e / 2) - 16;
										t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
									}
									f.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
								}, e.prototype.outputDataUpdate = function(e) {
									void 0 === e && (e = !1);
									var t = f.time;
									null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
								}, e.prototype.cueSplitAtTime = function(e) {
									this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
								}, e
							}(),
							E = function() {
								function e(e, t, r) {
									this.field = e || 1, this.outputs = [t, r], this.channels = [new y(1, t), new y(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
										padding: 0,
										char: 0,
										cmd: 0,
										other: 0
									}
								}
								return e.prototype.getHandler = function(e) {
									return this.channels[e].getHandler()
								}, e.prototype.setHandler = function(e, t) {
									this.channels[e].setHandler(t)
								}, e.prototype.addData = function(e, t) {
									var r, i, a, n = !1;
									this.lastTime = e, f.setTime(e);
									for (var s = 0; s < t.length; s += 2) i = 127 & t[s], a = 127 & t[s + 1], 0 !== i || 0 !== a ? (f.log("DATA", "[" + h([t[s], t[s + 1]]) + "] -> (" + h([i, a]) + ")"), (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), r || (n = this.parseChars(i, a)) && (this.currChNr && this.currChNr >= 0 ? this.channels[this.currChNr - 1].insertChars(n) : f.log("WARNING", "No channel found yet. TEXT-MODE?")), r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, f.log("WARNING", "Couldn't parse cleaned data " + h([i, a]) + " orig: " + h([t[s], t[s + 1]])))) : this.dataCounters.padding += 2
								}, e.prototype.parseCmd = function(e, t) {
									var r = null;
									if (!((20 === e || 28 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
									if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, f.log("DEBUG", "Repeated command (" + h([e, t]) + ") is dropped"), !0;
									r = 20 === e || 23 === e ? 1 : 2;
									var i = this.channels[r - 1];
									return 20 === e || 28 === e ? 32 === t ? i.ccRCL() : 33 === t ? i.ccBS() : 34 === t ? i.ccAOF() : 35 === t ? i.ccAON() : 36 === t ? i.ccDER() : 37 === t ? i.ccRU(2) : 38 === t ? i.ccRU(3) : 39 === t ? i.ccRU(4) : 40 === t ? i.ccFON() : 41 === t ? i.ccRDC() : 42 === t ? i.ccTR() : 43 === t ? i.ccRTD() : 44 === t ? i.ccEDM() : 45 === t ? i.ccCR() : 46 === t ? i.ccENM() : 47 === t && i.ccEOC() : i.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
								}, e.prototype.parseMidrow = function(e, t) {
									var r = null;
									return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (f.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), f.log("DEBUG", "MIDROW (" + h([e, t]) + ")"), !0))
								}, e.prototype.parsePAC = function(e, t) {
									var r, i = null;
									if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
									if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
									r = e <= 23 ? 1 : 2, i = t >= 64 && t <= 95 ? 1 === r ? o[e] : u[e] : 1 === r ? l[e] : d[e];
									var a = this.interpretPAC(i, t);
									return this.channels[r - 1].setPAC(a), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
								}, e.prototype.interpretPAC = function(e, t) {
									var r = t,
										i = {
											color: null,
											italics: !1,
											indent: null,
											underline: !1,
											row: e
										};
									return r = t > 95 ? t - 96 : t - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
								}, e.prototype.parseChars = function(e, t) {
									var r = null,
										i = null,
										n = null;
									if (e >= 25 ? (r = 2, n = e - 8) : (r = 1, n = e), n >= 17 && n <= 19) {
										var s = t;
										s = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144, f.log("INFO", "Special char '" + a(s) + "' in channel " + r), i = [s]
									} else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
									if (i) {
										var o = h(i);
										f.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
									}
									return i
								}, e.prototype.parseBackgroundAttributes = function(e, t) {
									var r, i, a;
									return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {}, 16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), r.background = c[i], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), a = e < 24 ? 1 : 2, this.channels[a - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
								}, e.prototype.reset = function() {
									for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
									this.lastCmdA = null, this.lastCmdB = null
								}, e.prototype.cueSplitAtTime = function(e) {
									for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
								}, e
							}();
						t.default = E
					},
					"./src/utils/codecs.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = {
							audio: {
								a3ds: !0,
								"ac-3": !0,
								"ac-4": !0,
								alac: !0,
								alaw: !0,
								dra1: !0,
								"dts+": !0,
								"dts-": !0,
								dtsc: !0,
								dtse: !0,
								dtsh: !0,
								"ec-3": !0,
								enca: !0,
								g719: !0,
								g726: !0,
								m4ae: !0,
								mha1: !0,
								mha2: !0,
								mhm1: !0,
								mhm2: !0,
								mlpa: !0,
								mp4a: !0,
								"raw ": !0,
								Opus: !0,
								samr: !0,
								sawb: !0,
								sawp: !0,
								sevc: !0,
								sqcp: !0,
								ssmv: !0,
								twos: !0,
								ulaw: !0
							},
							video: {
								avc1: !0,
								avc2: !0,
								avc3: !0,
								avc4: !0,
								avcp: !0,
								drac: !0,
								dvav: !0,
								dvhe: !0,
								encv: !0,
								hev1: !0,
								hvc1: !0,
								mjp2: !0,
								mp4v: !0,
								mvc1: !0,
								mvc2: !0,
								mvc3: !0,
								mvc4: !0,
								resv: !0,
								rv60: !0,
								s263: !0,
								svc1: !0,
								svc2: !0,
								"vc-1": !0,
								vp08: !0,
								vp09: !0
							}
						};
						t.isCodecType = function(e, t) {
							var r = i[t];
							return !!r && !0 === r[e.slice(0, 4)]
						}, t.isCodecSupportedInMp4 = function(e, t) {
							return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
						}
					},
					"./src/utils/cues.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/vttparser.js");
						t.newCue = function(e, t, r, a) {
							for (var n, s, o, l, u, d = window.VTTCue || window.TextTrackCue, c = 0; c < a.rows.length; c++)
								if (o = !0, l = 0, u = "", !(n = a.rows[c]).isEmpty()) {
									for (var f = 0; f < n.chars.length; f++) n.chars[f].uchar.match(/\s/) && o ? l++ : (u += n.chars[f].uchar, o = !1);
									n.cueStartTime = t, t === r && (r += 1e-4), s = new d(t, r, i.fixLineBreaks(u.trim())), l >= 16 ? l-- : l++, navigator.userAgent.match(/Firefox\//) ? s.line = c + 1 : s.line = c > 7 ? c - 2 : c + 1, s.align = "left", s.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(s)
								}
						}
					},
					"./src/utils/discontinuities.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./src/utils/binary-search.js"),
								a = r("./src/utils/logger.js");

							function n(e, t) {
								for (var r = null, i = 0; i < e.length; i += 1) {
									var a = e[i];
									if (a && a.cc === t) {
										r = a;
										break
									}
								}
								return r
							}

							function s(e, t, r) {
								var i = !1;
								return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0), i
							}

							function o(e, t) {
								var r = e.fragments,
									i = t.fragments;
								if (i.length && r.length) {
									var s = n(r, i[0].cc);
									if (s && (!s || s.startPTS)) return s;
									a.logger.log("No frag in previous level to align on")
								} else a.logger.log("No fragments to align")
							}

							function l(e, t) {
								t.fragments.forEach((function(t) {
									if (t) {
										var r = t.start + e;
										t.start = t.startPTS = r, t.endPTS = r + t.duration
									}
								})), t.PTSKnown = !0
							}

							function u(e, t, r) {
								if (s(e, r, t)) {
									var i = o(r.details, t);
									i && (a.logger.log("Adjusting PTS using last level due to CC increase within current level"), l(i.start, t))
								}
							}

							function d(t, r) {
								if (r && r.fragments.length) {
									if (!t.hasProgramDateTime || !r.hasProgramDateTime) return;
									var i = r.fragments[0].programDateTime,
										n = (t.fragments[0].programDateTime - i) / 1e3 + r.fragments[0].start;
									e.isFinite(n) && (a.logger.log("adjusting PTS using programDateTime delta, sliding:" + n.toFixed(3)), l(n, t))
								}
							}
							t.findFirstFragWithCC = n, t.findFragWithCC = function(e, t) {
								return i.default.search(e, (function(e) {
									return e.cc < t ? 1 : e.cc > t ? -1 : 0
								}))
							}, t.shouldAlignOnDiscontinuities = s, t.findDiscontinuousReferenceFrag = o, t.adjustPts = l, t.alignStream = function(e, t, r) {
								u(e, r, t), !r.PTSKnown && t && d(r, t.details)
							}, t.alignDiscontinuities = u, t.alignPDT = d
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/ewma-bandwidth-estimator.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/ewma.js"),
							a = function() {
								function e(e, t, r, a) {
									this.hls = e, this.defaultEstimate_ = a, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new i.default(t), this.fast_ = new i.default(r)
								}
								return e.prototype.sample = function(e, t) {
									var r = 8e3 * t / (e = Math.max(e, this.minDelayMs_)),
										i = e / 1e3;
									this.fast_.sample(i, r), this.slow_.sample(i, r)
								}, e.prototype.canEstimate = function() {
									var e = this.fast_;
									return e && e.getTotalWeight() >= this.minWeight_
								}, e.prototype.getEstimate = function() {
									return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = a
					},
					"./src/utils/ewma.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e(e) {
								this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
							}
							return e.prototype.sample = function(e, t) {
								var r = Math.pow(this.alpha_, e);
								this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
							}, e.prototype.getTotalWeight = function() {
								return this.totalWeight_
							}, e.prototype.getEstimate = function() {
								if (this.alpha_) {
									var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
									return this.estimate_ / e
								}
								return this.estimate_
							}, e
						}();
						t.default = i
					},
					"./src/utils/get-self-scope.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.getSelfScope = function() {
							return "undefined" == typeof window ? self : window
						}
					},
					"./src/utils/logger.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/get-self-scope.js");

						function a() {}
						var n = {
								trace: a,
								debug: a,
								log: a,
								warn: a,
								info: a,
								error: a
							},
							s = n;

						function o(e, t) {
							return t = "[" + e + "] > " + t
						}
						var l = i.getSelfScope();

						function u(e) {
							for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
							t.forEach((function(t) {
								s[t] = e[t] ? e[t].bind(e) : function(e) {
									var t = l.console[e];
									return t ? function() {
										for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
										r[0] && (r[0] = o(e, r[0])), t.apply(l.console, r)
									} : a
								}(t)
							}))
						}
						t.enableLogs = function(e) {
							if (!0 === e || "object" == typeof e) {
								u(e, "debug", "log", "info", "warn", "error");
								try {
									s.log()
								} catch (t) {
									s = n
								}
							} else s = n
						}, t.logger = s
					},
					"./src/utils/mediakeys-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
						t.requestMediaKeySystemAccess = i
					},
					"./src/utils/mediasource-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.getMediaSource = function() {
							if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
						}
					},
					"./src/utils/output-filter.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function() {
							function e(e, t) {
								this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null
							}
							return e.prototype.dispatchCue = function() {
								null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
							}, e.prototype.newCue = function(e, t, r) {
								(null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
							}, e
						}();
						t.default = i
					},
					"./src/utils/texttrack-utils.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.sendAddTrackEvent = function(e, t) {
							var r = null;
							try {
								r = new window.Event("addtrack")
							} catch (i) {
								(r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
							}
							r.track = e, t.dispatchEvent(r)
						}, t.clearCurrentCues = function(e) {
							if (e && e.cues)
								for (; e.cues.length > 0;) e.removeCue(e.cues[0])
						}
					},
					"./src/utils/time-ranges.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							toString: function(e) {
								for (var t = "", r = e.length, i = 0; i < r; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
								return t
							}
						}
					},
					"./src/utils/vttcue.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = function() {
							if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
							var e = "auto",
								t = {
									"": !0,
									lr: !0,
									rl: !0
								},
								r = {
									start: !0,
									middle: !0,
									end: !0,
									left: !0,
									right: !0
								};

							function i(e) {
								return "string" == typeof e && !!r[e.toLowerCase()] && e.toLowerCase()
							}

							function a(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = arguments[t];
									for (var i in r) e[i] = r[i]
								}
								return e
							}

							function n(r, n, s) {
								var o = this,
									l = function() {
										if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
									}(),
									u = {};
								l ? o = document.createElement("custom") : u.enumerable = !0, o.hasBeenReset = !1;
								var d = "",
									c = !1,
									f = r,
									h = n,
									p = s,
									g = null,
									m = "",
									v = !0,
									y = "auto",
									E = "start",
									_ = 50,
									b = "middle",
									T = 50,
									S = "middle";
								if (Object.defineProperty(o, "id", a({}, u, {
										get: function() {
											return d
										},
										set: function(e) {
											d = "" + e
										}
									})), Object.defineProperty(o, "pauseOnExit", a({}, u, {
										get: function() {
											return c
										},
										set: function(e) {
											c = !!e
										}
									})), Object.defineProperty(o, "startTime", a({}, u, {
										get: function() {
											return f
										},
										set: function(e) {
											if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
											f = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "endTime", a({}, u, {
										get: function() {
											return h
										},
										set: function(e) {
											if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
											h = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "text", a({}, u, {
										get: function() {
											return p
										},
										set: function(e) {
											p = "" + e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "region", a({}, u, {
										get: function() {
											return g
										},
										set: function(e) {
											g = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "vertical", a({}, u, {
										get: function() {
											return m
										},
										set: function(e) {
											var r = function(e) {
												return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
											}(e);
											if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
											m = r, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "snapToLines", a({}, u, {
										get: function() {
											return v
										},
										set: function(e) {
											v = !!e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "line", a({}, u, {
										get: function() {
											return y
										},
										set: function(t) {
											if ("number" != typeof t && t !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
											y = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "lineAlign", a({}, u, {
										get: function() {
											return E
										},
										set: function(e) {
											var t = i(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											E = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "position", a({}, u, {
										get: function() {
											return _
										},
										set: function(e) {
											if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
											_ = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "positionAlign", a({}, u, {
										get: function() {
											return b
										},
										set: function(e) {
											var t = i(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											b = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "size", a({}, u, {
										get: function() {
											return T
										},
										set: function(e) {
											if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
											T = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(o, "align", a({}, u, {
										get: function() {
											return S
										},
										set: function(e) {
											var t = i(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											S = t, this.hasBeenReset = !0
										}
									})), o.displayState = void 0, l) return o
							}
							return n.prototype.getCueAsHTML = function() {
								return window.WebVTT.convertCueToDOMTree(window, this.text)
							}, n
						}()
					},
					"./src/utils/vttparser.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/vttcue.js"),
							a = function() {
								return {
									decode: function(e) {
										if (!e) return "";
										if ("string" != typeof e) throw new Error("Error - expected string data.");
										return decodeURIComponent(encodeURIComponent(e))
									}
								}
							};

						function n() {
							this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new a, this.regionList = []
						}

						function s() {
							this.values = Object.create(null)
						}

						function o(e, t, r, i) {
							var a = i ? e.split(i) : [e];
							for (var n in a)
								if ("string" == typeof a[n]) {
									var s = a[n].split(r);
									2 === s.length && t(s[0], s[1])
								}
						}
						s.prototype = {
							set: function(e, t) {
								this.get(e) || "" === t || (this.values[e] = t)
							},
							get: function(e, t, r) {
								return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
							},
							has: function(e) {
								return e in this.values
							},
							alt: function(e, t, r) {
								for (var i = 0; i < r.length; ++i)
									if (t === r[i]) {
										this.set(e, t);
										break
									}
							},
							integer: function(e, t) {
								/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
							},
							percent: function(e, t) {
								return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
							}
						};
						var l = new i.default(0, 0, 0),
							u = "middle" === l.align ? "middle" : "center";

						function d(e, t, r) {
							var i = e;

							function a() {
								var t = function(e) {
									function t(e, t, r, i) {
										return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
									}
									var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
									return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
								}(e);
								if (null === t) throw new Error("Malformed timestamp: " + i);
								return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
							}

							function n() {
								e = e.replace(/^\s+/, "")
							}
							if (n(), t.startTime = a(), n(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
							e = e.substr(3), n(), t.endTime = a(), n(),
								function(e, t) {
									var i = new s;
									o(e, (function(e, t) {
										switch (e) {
											case "region":
												for (var a = r.length - 1; a >= 0; a--)
													if (r[a].id === t) {
														i.set(e, r[a].region);
														break
													} break;
											case "vertical":
												i.alt(e, t, ["rl", "lr"]);
												break;
											case "line":
												var n = t.split(","),
													s = n[0];
												i.integer(e, s), i.percent(e, s) && i.set("snapToLines", !1), i.alt(e, s, ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", u, "end"]);
												break;
											case "position":
												n = t.split(","), i.percent(e, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", u, "end", "line-left", "line-right", "auto"]);
												break;
											case "size":
												i.percent(e, t);
												break;
											case "align":
												i.alt(e, t, ["start", u, "end", "left", "right"])
										}
									}), /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", "");
									var a = i.get("line", "auto");
									"auto" === a && -1 === l.line && (a = -1), t.line = a, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", u);
									var n = i.get("position", "auto");
									"auto" === n && 50 === l.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = n
								}(e, t)
						}

						function c(e) {
							return e.replace(/<br(?: \/)?>/gi, "\n")
						}
						t.fixLineBreaks = c, n.prototype = {
							parse: function(e) {
								var t = this;

								function r() {
									var e = t.buffer,
										r = 0;
									for (e = c(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
									var i = e.substr(0, r);
									return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), i
								}
								e && (t.buffer += t.decoder.decode(e, {
									stream: !0
								}));
								try {
									var a = void 0;
									if ("INITIAL" === t.state) {
										if (!/\r\n|\n/.test(t.buffer)) return this;
										var n = (a = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
										if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
										t.state = "HEADER"
									}
									for (var s = !1; t.buffer;) {
										if (!/\r\n|\n/.test(t.buffer)) return this;
										switch (s ? s = !1 : a = r(), t.state) {
											case "HEADER":
												/:/.test(a) ? o(a, (function(e, t) {}), /:/) : a || (t.state = "ID");
												continue;
											case "NOTE":
												a || (t.state = "ID");
												continue;
											case "ID":
												if (/^NOTE($|[ \t])/.test(a)) {
													t.state = "NOTE";
													break
												}
												if (!a) continue;
												if (t.cue = new i.default(0, 0, ""), t.state = "CUE", -1 === a.indexOf("--\x3e")) {
													t.cue.id = a;
													continue
												}
												case "CUE":
													try {
														d(a, t.cue, t.regionList)
													} catch (u) {
														t.cue = null, t.state = "BADCUE";
														continue
													}
													t.state = "CUETEXT";
													continue;
												case "CUETEXT":
													var l = -1 !== a.indexOf("--\x3e");
													if (!a || l && (s = !0)) {
														t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
														continue
													}
													t.cue.text && (t.cue.text += "\n"), t.cue.text += a;
													continue;
												case "BADCUE":
													a || (t.state = "ID");
													continue
										}
									}
								} catch (u) {
									"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
								}
								return this
							},
							flush: function() {
								try {
									if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
								} catch (e) {
									throw e
								}
								return this.onflush && this.onflush(), this
							}
						}, t.default = n
					},
					"./src/utils/webvtt-parser.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r("./src/utils/vttparser.js"),
								a = r("./src/demux/id3.js"),
								n = function(e, t, r) {
									return e.substr(r || 0, t.length) === t
								},
								s = function(e) {
									for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
									return (t >>> 0).toString()
								},
								o = {
									parse: function(t, r, o, l, u, d) {
										var c, f = a.utf8ArrayToStr(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
											h = "00:00.000",
											p = 0,
											g = 0,
											m = 0,
											v = [],
											y = !0,
											E = new i.default;
										E.oncue = function(e) {
											var t = o[l],
												r = o.ccOffset;
											t && t.new && (void 0 !== g ? r = o.ccOffset = t.start : function(e, t, r) {
												var i = e[t],
													a = e[i.prevCC];
												if (!a || !a.new && i.new) return e.ccOffset = e.presentationOffset = i.start, void(i.new = !1);
												for (; a && a.new;) e.ccOffset += i.start - a.start, i.new = !1, a = e[(i = a).prevCC];
												e.presentationOffset = r
											}(o, l, m)), m && (r = m - o.presentationOffset), e.startTime += r - g, e.endTime += r - g, e.id = s(e.startTime.toString()) + s(e.endTime.toString()) + s(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && v.push(e)
										}, E.onparsingerror = function(e) {
											c = e
										}, E.onflush = function() {
											c && d ? d(c) : u(v)
										}, f.forEach((function(t) {
											if (y) {
												if (n(t, "X-TIMESTAMP-MAP=")) {
													y = !1, t.substr(16).split(",").forEach((function(e) {
														n(e, "LOCAL:") ? h = e.substr(6) : n(e, "MPEGTS:") && (p = parseInt(e.substr(7)))
													}));
													try {
														r + (9e4 * o[l].start || 0) < 0 && (r += 8589934592), p -= r, i = h, a = parseInt(i.substr(-3)), s = parseInt(i.substr(-6, 2)), u = parseInt(i.substr(-9, 2)), d = i.length > 9 ? parseInt(i.substr(0, i.indexOf(":"))) : 0, g = (e.isFinite(a) && e.isFinite(s) && e.isFinite(u) && e.isFinite(d) ? (a += 1e3 * s, a += 6e4 * u, a += 36e5 * d) : -1) / 1e3, m = p / 9e4, -1 === g && (c = new Error("Malformed X-TIMESTAMP-MAP: " + t))
													} catch (f) {
														c = new Error("Malformed X-TIMESTAMP-MAP: " + t)
													}
													return
												}
												"" === t && (y = !1)
											}
											var i, a, s, u, d;
											E.parse(t + "\n")
										})), E.flush()
									}
								};
							t.default = o
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/xhr-loader.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = r("./src/utils/logger.js"),
							a = window.performance,
							n = window.XMLHttpRequest,
							s = function() {
								function e(e) {
									e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
								}
								return e.prototype.destroy = function() {
									this.abort(), this.loader = null
								}, e.prototype.abort = function() {
									var e = this.loader;
									e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
								}, e.prototype.load = function(e, t, r) {
									this.context = e, this.config = t, this.callbacks = r, this.stats = {
										trequest: a.now(),
										retry: 0
									}, this.retryDelay = t.retryDelay, this.loadInternal()
								}, e.prototype.loadInternal = function() {
									var e, t = this.context;
									e = this.loader = new n;
									var r = this.stats;
									r.tfirst = 0, r.loaded = 0;
									var i = this.xhrSetup;
									try {
										if (i) try {
											i(e, t.url)
										} catch (a) {
											e.open("GET", t.url, !0), i(e, t.url)
										}
										e.readyState || e.open("GET", t.url, !0)
									} catch (a) {
										return void this.callbacks.onError({
											code: e.status,
											text: a.message
										}, t, e)
									}
									t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
								}, e.prototype.readystatechange = function(e) {
									var t = e.currentTarget,
										r = t.readyState,
										n = this.stats,
										s = this.context,
										o = this.config;
									if (!n.aborted && r >= 2)
										if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(a.now(), n.trequest)), 4 === r) {
											var l = t.status;
											if (l >= 200 && l < 300) {
												n.tload = Math.max(n.tfirst, a.now());
												var u = void 0,
													d = void 0;
												d = "arraybuffer" === s.responseType ? (u = t.response).byteLength : (u = t.responseText).length, n.loaded = n.total = d;
												var c = {
													url: t.responseURL,
													data: u
												};
												this.callbacks.onSuccess(c, n, s, t)
											} else n.retry >= o.maxRetry || l >= 400 && l < 499 ? (i.logger.error(l + " while loading " + s.url), this.callbacks.onError({
												code: l,
												text: t.statusText
											}, s, t)) : (i.logger.warn(l + " while loading " + s.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), n.retry++)
										} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout)
								}, e.prototype.loadtimeout = function() {
									i.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
								}, e.prototype.loadprogress = function(e) {
									var t = e.currentTarget,
										r = this.stats;
									r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
									var i = this.callbacks.onProgress;
									i && i(r, this.context, null, t)
								}, e
							}();
						t.default = s
					}
				}).default
			}, e.exports = i())
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_baseClamp.js"),
				a = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = a(r)) == r ? r : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), i(a(e), t, r)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=vendors~PublicAccessNetwork.813a715a14171c9ead66.js.map