// https://www.redditstatic.com/desktop2x/SearchResults.1faabe7c74bc096776ef.js
// Retrieved at 12/1/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function r(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, a = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						C = !a && !l && /macintosh/i.test(t),
						x = !o && !m && !u && !p && /linux/i.test(t),
						f = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !g && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: y || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: y || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, f ? (n.msedge = e, n.version = f) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, y && (n.version = y)) : a ? (n = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, y && (n.version = y)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && a ? (n[a] = e, n.ios = e, n.osname = "iOS") : C ? (n.mac = e, n.osname = "macOS") : O ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : x && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var E = "";
					n.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (n.osversion = E);
					var j = !n.windows && E.split(".")[0];
					return g || c || "ipad" == a || o && (3 == j || j >= 4 && !v) || n.silk ? n.tablet = e : (v || "iphone" == a || "ipod" == a || o || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function a(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = n(e, (function(e) {
							var s = t - r(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, r, n) {
					var o = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (o = t(n));
					var i = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return a([i, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = a, s.check = function(e, t, s) {
					return !o(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var s = [];
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, n.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, n.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var a = n.element,
								o = i(a),
								c = this._rootContainsTarget(a),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(a, s),
								m = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: a,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, a, o, c, l, m, u, p, h = i(s), b = d(s), C = !1; !C;) {
								var x = null,
									f = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == f.display) return;
								if (b == this.root || b == t ? (C = !0, x = r) : b != t.body && b != t.documentElement && "visible" != f.overflow && (x = i(b)), x && (n = x, a = h, o = void 0, c = void 0, l = void 0, m = void 0, u = void 0, p = void 0, o = Math.max(n.top, a.top), c = Math.min(n.bottom, a.bottom), l = Math.max(n.left, a.left), m = Math.min(n.right, a.right), p = c - o, !(h = (u = m - l) >= 0 && p >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: m,
										width: u,
										height: p
									}))) break;
								b = d(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var s = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || r.clientWidth,
								width: s.clientWidth || r.clientWidth,
								bottom: s.clientHeight || r.clientHeight,
								height: s.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, s) {
								return "px" == t.unit ? t.value : t.value * (s % 2 ? e.width : e.height) / 100
							})),
							s = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return s.width = s.right - s.left, s.height = s.bottom - s.top, s
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== r)
							for (var n = 0; n < this.thresholds.length; n++) {
								var a = this.thresholds[n];
								if (a == s || a == r || a < s != a < r) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = r
				}

				function r(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						s = t.width * t.height,
						r = this.intersectionRect,
						n = r.width * r.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, r, n, a = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (a.root && 1 != a.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(a.rootMargin), this.thresholds = this._initThresholds(a.threshold), this.root = a.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function a(e, t, s, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function i(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (s) {}
					return t ? (t.width && t.height || (t = {
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						width: t.right - t.left,
						height: t.bottom - t.top
					}), t) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function c(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = d(s)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, r, n) {
				return n(e, (function(e, n, a) {
					s = r ? (r = !1, e) : t(s, e, n, a)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), r(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? r : o,
					d = arguments.length < 3;
				return c(e, a(t, 4), s, d, n)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = i,
					d = c(e, i);
				t = n(t), e -= i;
				for (var l = r(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return r(e) + t
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					o = Object.keys(t);
				if (a.length !== o.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
					var d = a[c];
					if (!i(d)) return !1;
					var l = e[d],
						m = t[d];
					if (!1 === (n = s ? s.call(r, l, m, d) : void 0) || void 0 === n && l !== m) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return k
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/performanceTimings/index.tsx"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(o.g),
				C = Object(n.a)(o.e),
				x = Object(n.a)(o.h),
				f = Object(n.a)(o.c),
				y = Object(n.a)(o.f),
				g = Object(n.a)(o.j),
				v = Object(n.a)(o.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						a = Object(u.e)(n),
						o = Object(u.d)(n),
						d = Object(h.J)(n);
					if (a || !o) return;
					e(x());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (E(t)) {
								if (j(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (_(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: a
										} = s.focusRecommendations[0],
										o = [r, n],
										i = Object(m.d)(o),
										c = Object(l.b)(o),
										d = Object(m.c)(r),
										u = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: a,
											lastLoadedEnv: "client"
										};
									e(b(u)), p = !0
								}
							} else p = !1
						}
					} catch (y) {
						p = !1
					}
					p || e(C({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !j(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var r, n;
					const o = t(),
						i = Object(u.g)(o);
					if (Object(u.f)(o) || null === i || "client" === i) {
						const s = null === (n = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							i = Object(h.K)(o);
						return Object(a.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/helpers/isArrayEqual.ts"),
				p = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts");
			const h = e => r.fbt._("reddit.com: search results - {query}", [r.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				b = e => async (t, s) => {
					const r = s(),
						n = Object(p.d)(r),
						b = Object(p.e)(r),
						C = Object(i.e)(a()(e.queryParams, m.t), b),
						x = {
							...C,
							type: Object(p.a)(n, b, C.type)
						},
						f = e.params.subredditName || e.params.multiredditName,
						{
							username: y
						} = e.params,
						g = Object(i.b)(f, y, x);
					if (n && !Object(u.a)(x.type, [o.Zb.Subreddits, o.Zb.Users])) {
						const e = {
								...x,
								type: [o.Zb.Subreddits, o.Zb.Users]
							},
							s = Object(i.b)(f, y, e);
						await Promise.all([t(Object(d.d)(g, x, f, y)), b ? Promise.resolve() : t(Object(d.d)(s, e, f, y))])
					} else await t(Object(d.d)(g, x, f, y));
					let v = !1;
					const {
						type: O = []
					} = x, E = O.indexOf(o.Zb.Posts) > -1, j = O.indexOf(o.Zb.Subreddits) > -1 || O.indexOf(o.Zb.Users) > -1;
					E && r.listings.postOrder.api.error[g] && (v = !0), j && r.listings.listingOrder.api.error[g] && (v = !0), t(v ? l.m({
						title: Object(c.d)()
					}) : l.m({
						title: h(x.q)
					}))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return g
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/blade.ts"),
				d = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/telemetry/index.ts");
			const b = Object(n.a)(o.w),
				C = Object(n.a)(o.x),
				x = Object(n.a)(o.v),
				f = (e, t, s) => async (r, n, a) => {
					const o = Object(p.w)(n(), {
						subredditName: e
					});
					if (o) return g(o, t, s)(r, n, a)
				}, y = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), g = (e, t, s) => async (n, o, p) => {
					const f = await Object(l.e)(t);
					n(b());
					const g = o();
					try {
						await Object(a.g)("communityIcon", f, e.id)(n, o, p)
					} catch (O) {
						return Object(h.a)(Object(d.c)(g, "something went wrong with the uploading the image")), n(Object(i.f)({
							kind: m.b.Error,
							text: y()
						})), void n(x())
					}
					const v = Object(u.c)(o(), {
						name: "communityIcon"
					});
					if (!v) return Object(h.a)(Object(d.c)(g, "image is null")), n(Object(i.f)({
						kind: m.b.Error,
						text: y()
					})), void n(x());
					await Object(a.k)(e.id, {
						communityIcon: v
					}, c.b.idCard, s)(n, o, p), n(Object(i.f)({
						kind: m.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), n(C())
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(r);
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = a
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !n && a.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), a.a.createElement(i.a, {
					href: c.url.replace(r.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && a.a.createElement(o.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement(o.b, d({
				className: Object(a.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SearchResultsClassicPost", (function() {
				return ne
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/ads/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/config.ts"),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(C),
				f = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				y = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var v = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, s = () => Math.floor(10 * Math.random() + 1), a = Object(h.e)(b.X), [i, c] = Object(r.useState)(!1), [d, l] = Object(r.useState)(s());
					return Object(r.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), l(s())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: x.a.classicSpeaker
					}, i && n.a.createElement(y.a, {
						className: Object(o.a)(x.a.speakerRings, {
							[x.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: x.a.snoovatar,
						src: `${p.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: g._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && n.a.createElement("div", {
						className: x.a.muteContainer
					}, n.a.createElement(f.a, {
						className: x.a.muteIcon
					})))) : n.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, n.a.createElement(f.a, {
						className: x.a.muteIcon
					}))
				},
				O = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = s("./src/reddit/components/ExpandoButton/index.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				S = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				N = s("./src/reddit/components/ModModeReports/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				w = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = s("./src/reddit/components/PostContainer/index.tsx"),
				L = s("./src/reddit/components/PostMeta/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				F = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				M = s("./src/reddit/components/PostTitle/index.tsx"),
				A = s("./src/reddit/components/PostTopMeta/index.tsx"),
				D = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				B = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				K = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/contexts/Post/index.tsx"),
				z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				G = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				J = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Q = s("./src/reddit/helpers/search/renderMedia.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(Y),
				ee = s("./src/reddit/components/ClassicPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						handleVote: p,
						isExpanded: h,
						inSubredditOrProfile: b,
						eventFactory: C,
						first: x,
						flairStyleTemplate: f,
						formatTitle: y,
						hostPostData: g,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: q,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: Y,
						isLoggedIn: ee,
						isOverlay: re,
						imageGalleryCurrentItem: ne,
						moderatorPermissions: ae,
						modModeEnabled: oe,
						onClickPost: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						onSizeChanged: le,
						poll: me,
						post: ue,
						postId: pe,
						redditStyle: he,
						scrollerItemRef: be,
						showBulkActionCheckbox: Ce,
						showEditFlair: xe,
						showMedia: fe,
						subredditOrProfile: ye,
						toggleCheckbox: ge,
						userIsOp: ve,
						shouldShowGalleryTileOption: Oe,
						showPromotedCTA: Ee
					} = e, je = Object(d.a)(h);
					Object(r.useEffect)(() => {
						le && je !== h && le(ue.id)
					}, [h, le, ue.id, je]);
					const _e = he ? void 0 : f,
						ke = s || void 0,
						Se = Object(J.a)(ae),
						Ne = Object(z.a)(ae),
						Ie = Object(G.a)(ae),
						Pe = oe && J.a,
						we = Object(S.c)(ue),
						Te = Object(I.c)(ue),
						Le = !!ue.media && ue.media.type === W.o.RTJSON,
						Re = ve && Le,
						Fe = b && !fe,
						Me = !!ue.media && Object(W.H)(ue.media),
						Ae = !!ue.recommendationContext,
						De = {
							flairStyleTemplate: _e,
							post: ue,
							inSubredditOrProfile: b,
							isCurrentUserProfilePost: q,
							isOverlay: re,
							shouldShowSubscribeButton: !(Z && ee) || Ae && ee,
							subredditOrProfile: ye
						},
						Be = Object(a.t)(ue, ne),
						{
							source: Ue
						} = Be;
					let We = n.a.createElement(V.a, {
						className: te.a.classicThumbnail,
						crosspost: ke && ue,
						isMeta: ue.isMeta,
						post: ke || ue,
						redditStyle: he,
						templatePlaceholderImage: _e && _e.postPlaceholderImage,
						removeLink: Me
					});
					Object(U.a)(ue) && (We = n.a.createElement(v, {
						post: ue
					}));
					const Ve = n.a.createElement(T.a, {
						className: Object(o.a)($.a.classicPostStyles, te.a.postContainer, Object(X.a)(e), x ? te.a.mFirst : void 0, t),
						isOverlay: re,
						style: {
							...Object(X.d)(e),
							...Object(X.b)(_e)
						},
						post: ue,
						onClick: ie,
						eventFactory: C
					}, n.a.createElement(F.a, {
						model: ue,
						handleVote: p,
						showBulkActionCheckbox: Ce,
						isCheckboxSelected: H,
						toggleCheckbox: ge,
						flairStyleTemplate: _e,
						redditStyle: he,
						postId: pe
					}), n.a.createElement(w.a, {
						"data-click-id": "background",
						flairStyleTemplate: _e
					}, n.a.createElement(O.a, {
						className: te.a.eventMeta,
						post: ue
					}), n.a.createElement("div", {
						className: te.a.mainBody
					}, n.a.createElement("div", {
						className: Fe ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Fe && We, n.a.createElement(E.a, {
						crosspost: ke,
						className: te.a.rightExpando,
						isExpanded: !!h,
						post: ue,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: Object(o.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: Ce
						}),
						"data-click-id": "body"
					}, !!ue.recommendationContext && n.a.createElement(P.a, {
						content: ue.recommendationContext.content,
						layout: K.g.Classic,
						post: ue
					}), n.a.createElement(M.c, {
						className: me ? te.a.titleWithPoll : void 0,
						format: y,
						poll: me,
						post: ue,
						redditStyle: he,
						size: M.b.Medium,
						titleColor: _e && _e.postTitleColor,
						isOverlay: re
					}, ue.source && !ke && n.a.createElement(B.a, {
						href: ue.source.url,
						isSponsored: ue.isSponsored,
						postId: ue.id,
						source: ue.source
					}, Object(c.a)(ue))), n.a.createElement(L.a, se({
						key: "PostMeta"
					}, De)), oe && Se && we && n.a.createElement(k.a, {
						thing: ue
					}), oe && Se && Te && n.a.createElement(N.a, {
						onIgnoreReports: ce,
						reportable: ue
					}), Ee && Ue && Ue.url && n.a.createElement(l.a, {
						className: te.a.adLinkWrapper
					}, n.a.createElement(m.a, {
						post: ue,
						adLinkContent: Be
					})), n.a.createElement("div", {
						className: te.a.flatlistContainer
					}, n.a.createElement(E.a, {
						className: te.a.leftExpando,
						crosspost: ke,
						isExpanded: !!h,
						post: ue,
						useMediaIcons: !1
					}), n.a.createElement(u.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: _e,
						model: ue,
						onVoteClick: p
					}), n.a.createElement(j.a, {
						className: te.a.flatlistSeparator
					}), n.a.createElement(j.c, {
						className: te.a.flatlist,
						currentUser: i,
						hasModFlairPerms: Ne,
						hasModPostPerms: Se,
						hasModFullPerms: Ie,
						hostPostData: g,
						isOverlay: !!re,
						modModeEnabled: oe,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: ue,
						showEditPost: Re,
						showEditFlair: xe,
						tooltipType: re ? A.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(R.b)({
							editPost: !Pe,
							hide: !Pe,
							report: !Pe
						})
					})), n.a.createElement(_.d, null))), Object(Q.a)(ue, te.a, be, h, Oe, Y)));
					return n.a.createElement(D.b, null, Ve)
				}),
				ne = Object(Z.b)(Object(q.a)(re));
			t.default = Object(H.a)(re)
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, s) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, s) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, s) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, s) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, s) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, s) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, s) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/AwardBadges/index.tsx"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = s.n(u);
			const h = e => {
				const {
					className: t,
					comment: s,
					isCommentAuthorBlocked: n,
					isAuthorDeleted: o,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: u
				} = e;
				return u && n ? a.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, r.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					className: Object(c.a)(p.a.commentAuthorLink, t),
					author: s.author,
					isCommentAuthorBlocked: n,
					isAuthorDeleted: o,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, s.author)
			};
			var b = s("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Flair/index.tsx"),
				f = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				g = s("./src/reddit/controls/MetaData/index.tsx"),
				v = s("./src/reddit/helpers/flair.ts"),
				O = s("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				E = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				_ = s("./src/reddit/selectors/gold/powerups/index.ts"),
				k = s("./src/lib/constants/index.ts"),
				S = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				N = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				I = s("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				P = s.n(I);
			const w = ({
				authorClassName: e,
				className: t,
				comment: s,
				isLivestreaming: r,
				isStrong: n,
				renderedInOverlay: o,
				collapsed: i
			}) => a.a.createElement(N.b, {
				className: Object(c.a)(P.a.authorHoverCard, t),
				postOrComment: s,
				tooltipType: o ? y.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(j.g)(s),
				collapsed: i
			}, a.a.createElement(S.b, {
				ignore: Object(j.f)(s) || !!s.distinguishType && s.distinguishType !== k.G.NONE,
				subredditId: s.subredditId,
				userId: s.authorId
			}, a.a.createElement(h, {
				className: e,
				comment: s,
				isLivestreaming: r,
				isStrong: n,
				isCommentAuthorBlocked: Object(j.g)(s),
				isAuthorDeleted: Object(j.f)(s),
				collapsed: i
			})));
			var T = s("./src/config.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/components/InfoTextTooltip/index.tsx");
			const F = (e, t, s = !1) => `${e}${t}${s?"inOverlay":""}`;
			var M = s("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				A = s.n(M);
			const D = ({
				className: e,
				commentId: t,
				renderedInOverlay: s
			}) => {
				const n = Object(o.d)(),
					i = () => n(Object(L.h)({
						tooltipId: d
					})),
					d = F("CommentTopMeta--cakeday--", t, s),
					l = r.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(A.a.cakedayIcon, e),
					src: `${T.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(R.c, {
					tooltipId: d,
					text: l
				}))
			};
			var B = s("./src/lib/addQueryParams/index.ts"),
				U = s("./src/reddit/actions/comment/index.ts"),
				W = s("./src/reddit/components/HumanDate/index.tsx");
			const V = e => {
					const {
						className: t,
						comment: s,
						compact: r,
						permalink: n,
						renderedInOverlay: i
					} = e, c = Object(o.d)(), d = F("CommentTopMeta--Created--", s.id, i), l = () => c(Object(L.h)({
						tooltipId: d
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(B.a)(n, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							H(c, s.id)
						},
						onMouseEnter: l,
						onMouseLeave: l,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, a.a.createElement(W.d, {
						seconds: s.created,
						noPostfix: r,
						shortenedUnit: r
					}), a.a.createElement(R.c, {
						tooltipId: d
					}, a.a.createElement(W.b, {
						seconds: s.created
					})))
				},
				H = (e, t) => {
					window.addEventListener("focus", (function s() {
						q(e, t, s)
					}))
				},
				q = (e, t, s) => {
					window.removeEventListener("focus", s), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var K = s("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Z = s.n(K);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = () => a.a.createElement(g.a, {
				className: Z.a.crowdControlText
			}, z._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var J = s("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Q = s.n(J);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(g.a, {
				className: Q.a.editedText
			}, X._("edited {time}", [X._param("time", a.a.createElement(W.d, {
				seconds: t,
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var $ = s("./src/reddit/helpers/isRemoved.ts"),
				ee = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				te = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				se = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				ne = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				ae = s("./src/reddit/icons/fonts/Report/index.tsx"),
				oe = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				ie = s("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ce = s.n(ie);
			const de = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: n
			}) => {
				const i = Object(o.d)(),
					c = e => () => i(Object(L.f)({
						tooltipId: e
					})),
					d = () => i(Object(L.i)()),
					l = t => F(t, e.id, n),
					m = l("CommentTopMeta--Approve--"),
					u = l("CommentTopMeta--Remove--"),
					p = l("CommentTopMeta--Report--"),
					h = l("CommentTopMeta--Spam--"),
					b = c(u);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(se.a, {
					className: ce.a.approveIcon,
					desc: Object(ee.a)(e),
					id: m,
					onMouseEnter: c(m),
					onMouseLeave: d,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: m,
					text: Object(ee.a)(e)
				})), Object($.a)(e) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ne.a, {
					className: ce.a.removeIcon,
					desc: Object(ee.b)(e),
					id: u,
					onMouseEnter: b,
					onMouseLeave: d,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: u,
					text: Object(ee.b)(e)
				})), Object($.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: ce.a.removalReason,
					onClick: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, r.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object($.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && a.a.createElement("a", {
					className: ce.a.removalReason,
					onMouseEnter: b,
					onMouseLeave: d
				}, r.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(re.a, {
					className: ce.a.lockIcon,
					desc: r.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(oe.a, {
					className: ce.a.spamIcon,
					desc: Object(ee.d)(e),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: d,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: h,
					text: Object(ee.d)(e)
				})), Object(te.a)(e) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ae.a, {
					className: ce.a.reportIcon,
					desc: Object(ee.c)(e.numReports),
					id: p,
					onMouseEnter: c(p),
					onMouseLeave: d,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: p,
					text: Object(ee.c)(e.numReports)
				})))
			};
			var le, me = s("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(le || (le = {}));
			var ue = s("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				pe = s.n(ue);
			const he = {
					[le.Admin]: {
						color: me.c,
						label: r.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => r.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[le.Mod]: {
						color: me.d,
						label: r.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => r.fbt._("Moderator of {subredditDisplayText}, speaking officially", [r.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[le.Op]: {
						color: me.a,
						label: r.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => r.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[le.AlumniAdmin]: {
						color: me.c,
						label: r.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => r.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[le.Contractor]: {
						color: me.a,
						label: r.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => r.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				be = e => {
					const t = Object(o.d)(),
						s = function(e) {
							return e.isAdmin ? le.Admin : e.isMod ? le.Mod : e.isOp ? le.Op : e.distinguishType === k.G.ALUMNI_ADMIN ? le.AlumniAdmin : e.authorIsContractor ? le.Contractor : null
						}(e.comment);
					if (!s) return null;
					if (s === le.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: r,
						color: n,
						label: i,
						tooltipTemplate: d
					} = he[s], l = F(r, e.comment.id, e.renderedInOverlay), m = d(e), u = () => t(Object(L.h)({
						tooltipId: l
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(pe.a.role, e.className),
						style: {
							color: n
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, a.a.createElement("span", null, i), s === le.Mod && a.a.createElement(Ce, null)), a.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				Ce = () => a.a.createElement("img", {
					alt: "Moderator Achievement",
					className: pe.a.modAchievement,
					src: `${T.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var xe = s("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				fe = s.n(xe);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ge = () => a.a.createElement(g.a, {
				className: fe.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ve = s("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Oe = s.n(ve);
			const Ee = e => {
				const {
					className: t,
					collapsed: s,
					collapsedBecauseCrowdControl: n,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: u,
					permalink: p,
					renderedInOverlay: h,
					subredditDisplayText: k,
					renderContractorBadge: S
				} = e, N = Object(E.a)(), I = i.subredditId, P = Object(o.e)(e => Object(_.h)(e, {
					subredditId: I
				}));
				if (i.isDeleted) return a.a.createElement("div", {
					className: Object(c.a)(Oe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: Oe.a.authorLine
				}, a.a.createElement("span", {
					className: Oe.a.metaText
				}, i.deletedBy === j.c.User ? r.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : r.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(g.c, {
					className: Oe.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: h
				})));
				return a.a.createElement("div", {
					className: Object(c.a)(Oe.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: Oe.a.authorLine
				}, !Object(j.f)(i) && a.a.createElement(C.b, {
					className: Oe.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: Oe.a.baselineItem
				}, a.a.createElement(w, {
					authorClassName: Oe.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: h,
					collapsed: s
				})), n && a.a.createElement(G, null), a.a.createElement(be, {
					className: Oe.a.role,
					comment: i,
					subredditDisplayText: k,
					renderContractorBadge: S,
					renderedInOverlay: h
				}), i.isAuthorCakeday ? a.a.createElement(D, {
					className: Oe.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: h
				}) : !Object(j.f)(i) && P && a.a.createElement(b.a, {
					className: Oe.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						N(Object(O.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(f.a, {
					className: Oe.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(g.c, {
					className: Oe.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: h
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(g.c, {
					className: Oe.a.separator
				}), a.a.createElement(ge, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(g.c, {
					className: Oe.a.separator
				}), a.a.createElement(Y, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(de, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: h
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: h ? y.c.Lightbox : void 0
				})), d && !Object(v.o)(d) && a.a.createElement("span", {
					className: Oe.a.userFlairLine
				}, a.a.createElement(x.b, {
					className: Oe.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var je = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_e = s("./src/reddit/selectors/economics.ts"),
				ke = s("./src/reddit/models/Flair/index.ts"),
				Se = s("./src/reddit/selectors/subreddit.ts"),
				Ne = s("./src/reddit/selectors/userFlair.ts"),
				Ie = s("./src/reddit/selectors/comments.ts"),
				Pe = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				we = s.n(Pe);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = d.a.wrapped(x.b, "RightPositionedAuthorFlair", we.a),
				Re = d.a.span("DeletedText", we.a),
				Fe = d.a.wrapped(g.a, "MetaSeparator", we.a),
				Me = Object(o.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(_e.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const s = Object(Se.F)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ne.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Ie.m)(e, {
						commentId: t.comment.id
					})
				}));
			t.a = Me(e => {
				const {
					children: t,
					className: s,
					collapsed: r,
					collapsedBecauseCrowdControl: n,
					comment: o,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					isLivestreaming: b,
					isPostComment: v,
					ignoreFlairPosition: O,
					ignoreLock: E,
					renderContractorBadge: _,
					renderedInOverlay: k,
					subredditDisplayText: S,
					userHasNft: N
				} = e, I = a.a.createElement(a.a.Fragment, null, a.a.createElement(je.b, {
					commentId: o.id
				}), a.a.createElement(je.a, {
					commentId: o.id,
					commentsPageKey: d
				}));
				if (v) return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ee, {
					className: Object(c.a)(s, {
						[we.a.collapsed]: r
					}),
					collapsedBecauseCrowdControl: n,
					comment: o,
					flair: u || null,
					ignoreLock: E,
					isLivestreaming: b,
					permalink: i,
					renderedInOverlay: k,
					subredditDisplayText: S,
					renderContractorBadge: !!_,
					collapsed: r
				}), I);
				if (o.isDeleted) return a.a.createElement(Ae, Te({}, e, {
					className: Object(c.a)(s, we.a.container, {
						[we.a.collapsed]: r
					})
				}));
				if (r) return a.a.createElement(De, Te({}, e, {
					className: Object(c.a)(s, we.a.container, {
						[we.a.collapsed]: r
					})
				}));
				const P = !O && p === ke.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(s, we.a.container, {
						[we.a.collapsed]: r,
						[we.a.hasBadges]: h,
						[we.a.liveStreaming]: b
					}),
					"data-testid": "comment-top-meta"
				}, u && P && a.a.createElement(x.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(j.f)(o) && a.a.createElement(C.b, {
					className: we.a.userBadges,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), t && t, a.a.createElement(w, {
					authorClassName: N ? we.a.NftAuthor : void 0,
					comment: o,
					isLivestreaming: b,
					isStrong: !!m,
					renderedInOverlay: k,
					collapsed: r
				}), n && a.a.createElement(G, null), n && a.a.createElement(g.c, {
					className: we.a.metaText,
					key: "crowdControlSeparator"
				}), u && !P && a.a.createElement(Le, {
					flair: u,
					forceSmallEmojis: m
				}), !m && a.a.createElement(f.a, {
					className: we.a.publicPoints,
					contentId: o.id,
					metaSeparator: a.a.createElement(g.c, {
						className: we.a.metaText
					}),
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), I, a.a.createElement(be, {
					className: we.a.authorRole,
					comment: o,
					subredditDisplayText: S,
					renderContractorBadge: !!_,
					renderedInOverlay: k
				}), !m && a.a.createElement(a.a.Fragment, null, !o.isDeleted && !v && a.a.createElement(a.a.Fragment, null, a.a.createElement(g.b, {
					className: we.a.metaText,
					isScoreHidden: o.isScoreHidden,
					score: o.score
				}), a.a.createElement(g.c, {
					className: we.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(V, {
					key: "Created",
					className: we.a.MetaLink,
					comment: o,
					permalink: i,
					renderedInOverlay: k
				}), o.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(g.c, {
					className: we.a.separator
				}), a.a.createElement(ge, null)), o.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(g.c, {
					className: we.a.separator
				}), a.a.createElement(Y, {
					editedAt: o.editedAt
				}))), a.a.createElement(de, {
					comment: o,
					ignoreLock: E,
					renderedInOverlay: k
				}), a.a.createElement(l.a, {
					thing: o,
					tooltipType: k ? y.c.Lightbox : void 0
				}))
			});
			const Ae = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: n,
						comment: o,
						commentPermalink: i,
						renderedInOverlay: c
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement(Re, null, o.deletedBy === j.c.User ? r.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : r.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(V, {
						key: "Created",
						className: we.a.MetaLink,
						comment: o,
						permalink: i,
						renderedInOverlay: c
					}), s && Be({
						childrenInfo: t
					}))
				},
				De = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: r,
						renderedInOverlay: n,
						collapsed: o,
						commentPermalink: i
					} = e;
					return a.a.createElement("div", {
						className: s
					}, a.a.createElement("div", null, a.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t),
						collapsed: o
					})), a.a.createElement(g.b, {
						className: we.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(g.c, {
						className: we.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(V, {
						key: "Created",
						className: we.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: n
					}), Be({
						childrenInfo: r
					}))
				},
				Be = e => {
					const {
						hasContinueThread: t,
						numChildren: s
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Fe, {
						className: we.a.metaText
					}, t ? r.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [r.fbt._plural(s, "number")], {
						hk: "13XC7a"
					}) : r.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [r.fbt._plural(s, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, s) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, s) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				c = s("./src/reddit/helpers/overlay/index.ts");
			const d = Object(a.b)(null, e => ({
				openLightbox: t => e(Object(c.a)(t))
			}));
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...r
					} = this.props, a = r => e(() => r.metaKey || r.ctrlKey || 1 === r.button ? window.open(Object(o.a)(t, {
						context: 3
					})) : s(Object(o.a)(t, {
						context: 3
					})))(r);
					return n.a.createElement("div", {
						className: r.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && a(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && a(e)
						}
					}, r.children)
				}
			}
			t.a = d(Object(i.a)(l))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(C),
				f = s("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				g = f.a.wrapped(l.c, "StyledTooltip", x.a),
				v = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ib)(e),
					userIsSuspended: b.R
				});
			t.a = Object(o.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(h.c)(t)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(m.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: n,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d,
				onClick: l
			}) => {
				return a.a.createElement(p.t, {
					className: e,
					disabled: d || c,
					onClick: e => {
						l && l(e), o(i)
					},
					onMouseEnter: s,
					onMouseLeave: n,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? a.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: y,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: y,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/CreateCommunitySidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				i = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				c = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = d.a.div("ButtonContainer", c.a), u = d.a.div("Container", c.a), p = d.a.img("BannerImg", c.a), h = d.a.img("SnooImg", c.a), b = d.a.div("CommunityText", c.a);
			t.a = () => a.a.createElement(u, null, a.a.createElement(p, {
				src: `${r.a.assetPath}/img/search-results-community-banner.png`
			}), a.a.createElement(h, {
				src: `${r.a.assetPath}/img/snoo-thinking.png`
			}), a.a.createElement(b, null, l._("Have an idea for a new community?", null, {
				hk: "LfgUP"
			})), a.a.createElement(m, null, a.a.createElement(o.a, {
				className: c.a.Button,
				eventSource: "sidebar"
			})))
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			}));
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				l = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				m = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				u = s.n(m);
			const p = e => o.a.createElement("button", {
					className: Object(i.a)(u.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(d.a, {
					className: u.a.arrowIcon,
					seed: e.seed
				})),
				h = e => o.a.createElement("button", {
					className: Object(i.a)(u.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(l.a, {
					className: u.a.arrowIcon,
					seed: e.seed
				}));
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: {
								...this.state.viewableItems,
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							}
						})
					}, this.getVisibleItemsCount = () => {
						return n()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: r = 0
					}) => {
						return e - s * (t + r) + r
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: r = 0,
						visibleItemsCount: n
					}) => {
						let a = 0;
						if (s === t && n) {
							const t = n * e + this.getSpacerCount(n) * r;
							a = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (a = 0);
						return a
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.spacerWidth = 0, this.itemWidth = 0, this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					}), this.calcItemsFitInContainer()
				}
				componentDidUpdate(e, t) {
					this.calcItemsFitInContainer()
				}
				calcItemsFitInContainer() {
					c.a.read(() => {
						this.setState(e => {
							const t = this.doItemsFitInContainer({
								container: this.container,
								items: this.props.items,
								itemWidth: this.itemWidth,
								spacerWidth: this.spacerWidth
							});
							return e.itemsFitInContainer !== t ? {
								itemsFitInContainer: t
							} : null
						})
					})
				}
				doItemsFitInContainer({
					container: e,
					items: t,
					itemWidth: s,
					spacerWidth: r = 0
				}) {
					if (!e) return !0;
					const n = t.length * s,
						a = this.getSpacerCount(t.length) * r;
					return e.offsetWidth >= n + a
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						r = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: r,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = b
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/clickSourceData/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/isUrl/index.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/constants/posts.ts"),
				O = s("./src/lib/constants/index.ts"),
				E = s("./src/reddit/components/HumanDate/index.tsx"),
				j = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				k = s("./src/reddit/layout/row/Inline/index.tsx"),
				S = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				N = s.n(S);
			var I = e => {
					const t = v.a.PROFILE,
						s = Object(j.a)(e.author, t),
						r = Object(_.a)();
					return a.a.createElement("div", {
						className: Object(c.a)(N.a.container, e.className)
					}, a.a.createElement(k.a, {
						className: N.a.layout
					}, a.a.createElement("div", {
						className: N.a.textContainer
					}, a.a.createElement("span", {
						className: N.a.description
					}, C.fbt._("posted by", null, {
						hk: "wl0iP"
					})), a.a.createElement(g.a, {
						className: N.a.authorName,
						to: {
							pathname: s,
							state: r
						}
					}, Object(j.b)(e.author, t)), a.a.createElement("span", {
						className: N.a.timestamp
					}, a.a.createElement(E.d, {
						seconds: e.created / O.Rb
					})))))
				},
				P = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				T = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				L = s.n(T);
			var R = e => {
					const t = Object(j.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(L.a.container, e.className)
					}, a.a.createElement(w.a, {
						className: L.a.layout
					}, a.a.createElement("div", {
						className: L.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: L.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(P.a, {
						className: L.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: L.a.textContainer
					}, a.a.createElement(g.a, {
						"data-click-id": "subreddit",
						className: L.a.name,
						to: t
					}, Object(j.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: L.a.separator
					}, "•"), a.a.createElement("span", {
						className: L.a.timestamp
					}, a.a.createElement(E.d, {
						seconds: e.created / O.Rb
					})))))
				},
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/Media/index.tsx"),
				A = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				D = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostTitle/index.tsx"),
				V = s("./src/reddit/connectors/miniCardPost.ts"),
				H = s("./src/reddit/contexts/Post/index.tsx"),
				q = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				K = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Z = s("./src/reddit/helpers/widgets/index.tsx"),
				z = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/models/Subreddit/index.ts"),
				J = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Q = s.n(J),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(X),
				$ = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class se extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: r,
						crosspostSubredditOrProfile: n,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: d,
						hideNSFWPref: l,
						isMiniCard: m = !0,
						onClickPost: u,
						post: p,
						scrollerItemRef: h,
						shouldPause: b,
						showAuthorBlock: y = !1,
						showMetaLine: g = !0,
						showSubscribeBlock: v = !1,
						subredditOrProfile: O
					} = this.props, {
						media: E
					} = r || p, j = !E && !!p.source && Object(x.a)(p.source.url);
					let _ = E && a.a.createElement(M.a, {
							autoplayPref: e,
							availableWidth: t,
							className: Q.a.media,
							forceAspectRatio: z.c,
							imageBoxClassName: Q.a.mediaImageBox,
							imageBoxContentImageClassName: Q.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: r || p,
							scrollerItemRef: h,
							shouldPause: b,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						k = !1;
					E && _ && (E.type !== z.o.RTJSON && E.type !== z.o.TEXT ? (_ = a.a.createElement("div", {
						className: ee.a.mediaWrapper
					}, _), k = !0) : E && E.content && Object(q.a)(p) && (_ = a.a.createElement("div", {
						className: ee.a.textWrapper
					}, _)));
					const S = !k && !j;
					let N;
					return O && (N = Object(G.h)(O) ? Object(Z.b)(O) : Object(Z.c)(O)), a.a.createElement(U.a, {
						className: Object(c.a)(ee.a.container, Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, Q.a.postContainer, Object(K.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: o,
						style: {
							...Object(K.b)(this.props.flairStyleTemplate),
							...Object(K.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(B.a, {
						className: Q.a.backgroundWrapper,
						flairStyleTemplate: i
					}, a.a.createElement("div", {
						className: Object(c.a)(ee.a.innerContainer, Q.a.innerContainer)
					}, v && O && a.a.createElement(R, te({
						created: p.created
					}, N)), y && O && a.a.createElement(I, te({
						created: p.created,
						author: p.author
					}, N)), a.a.createElement(W.c, {
						className: S ? ee.a.postTitle : ee.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: W.b.Large,
						titleColor: i && i.postTitleColor
					}), g && O && a.a.createElement(A.a, {
						className: ee.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: l,
						post: p,
						subredditOrProfile: O
					}), (k || j) && a.a.createElement("div", {
						className: ee.a.flexSpacer
					}), j && a.a.createElement("div", {
						className: ee.a.mediaWrapper
					}, a.a.createElement(D.a, {
						className: ee.a.thumbnailWrapper,
						thumbnailClassName: ee.a.thumbnail,
						thumbnailContainerClassName: ee.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), _, a.a.createElement("div", {
						className: ee.a.metaWrapper
					}, a.a.createElement("span", {
						className: ee.a.meta
					}, C.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [C.fbt._plural(p.score, "number", Object(f.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: ee.a.meta
					}, C.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [C.fbt._plural(p.numComments, "number", Object(f.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(F.d, null))
				}
			}
			const re = Object(H.b)(Object(V.a)(Object(y.a)(se)));
			class ne extends a.a.Component {
				render() {
					return a.a.createElement(re, this.props)
				}
			}
			var ae = s("./node_modules/reselect/es/index.js"),
				oe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ie = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ce = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				de = s("./src/reddit/models/Vote/index.ts"),
				le = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				me = s.n(le);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = Object(m.u)(),
				he = Object(ae.c)({
					isFakeSubreddit: m.y
				}),
				be = Object(i.b)(he),
				Ce = e => {
					const t = {
						interactive: !1,
						voteState: de.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(c.a)(me.a.emptyVotes, e.className)
					}, a.a.createElement(ie.d, t), a.a.createElement("div", {
						className: Object(c.a)(me.a.emptyScore, Object(ce.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(ie.c, t))
				};
			var xe = pe(be(Object(y.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...r
				}) => a.a.createElement("div", {
					className: Object(c.a)(me.a.container, Y.a.largeAndMediumPostStyles, e)
				}, a.a.createElement("div", {
					className: Object(c.a)(me.a.thumbnail, Object(ce.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: me.a.content
				}, a.a.createElement("div", {
					className: me.a.titleContainer
				}, a.a.createElement("div", {
					className: Object(c.a)(me.a.title, Object(ce.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(me.a.title, Object(ce.b)({
						isLoading: t
					}))
				})), s && a.a.createElement(k.a, {
					className: me.a.subreddit
				}, a.a.createElement(oe.a, ue({
					className: Object(c.a)(Object(ce.b)({
						isLoading: !1
					}))
				}, r)), a.a.createElement("div", {
					className: Object(c.a)(me.a.subredditName, Object(ce.b)({
						isLoading: t
					}))
				})), a.a.createElement(k.a, null, a.a.createElement(Ce, ue({
					isLoading: t
				}, r)), a.a.createElement("div", {
					className: Object(c.a)(me.a.comments, Object(ce.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(me.a.share, Object(ce.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(me.a.ellipsis, Object(ce.b)({
						isLoading: t
					}))
				}))))))),
				fe = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				ye = s.n(fe);
			var ge = e => a.a.createElement("div", {
					className: Object(c.a)(ye.a.container, e.className)
				}, a.a.createElement("div", {
					className: ye.a.largePosts
				}, a.a.createElement(xe, {
					className: ye.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(xe, {
					className: ye.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(xe, {
					className: ye.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				ve = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Oe = s.n(ve);
			const Ee = 326,
				je = 12,
				_e = {
					stiffness: 210,
					damping: 30
				},
				ke = 100,
				Se = "post_carousel_item",
				Ne = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...n
				}) => {
					const o = s ? s(n) : a.a.createElement(ne, n);
					return a.a.createElement(r.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, o)
				},
				Ie = Object(i.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: r
				}) => ({
					openOverlay: t => e(Object(p.a)({
						pathname: Object(h.b)(t.permalink),
						state: Object(u.a)(r)
					})),
					trackPostClick: (t, r) => e((e, n) => s ? b.r(n(), s, t, r) : null),
					trackPostSubredditClick: r => e((e, n) => t ? b.t(n(), t, r) : s ? b.t(n(), s, r) : null)
				})),
				Pe = Object(m.u)();
			class we extends d.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							discoveryUnit: s,
							discoveryUnitSubreddit: r,
							listingKey: n,
							pageLayer: a,
							searchDiscoveryUnit: o,
							searchOptions: i
						} = this.props;
						let c;
						return (c = "subreddit" === t && i ? b.C(i, a, n, o) : o && i ? b.D(i, a, n, o) : b.q(s, r))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: r,
							singleSubredditMode: n
						} = this.props;
						return a.a.createElement(Ne, {
							"data-click-id": Se,
							className: Oe.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!n,
							showMetaLine: !1,
							showSubscribeBlock: !n,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: r,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => a.a.createElement("div", {
						className: Oe.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					if (super.componentDidUpdate(e, t), this.state !== t) {
						const e = Object.keys(this.state.viewableItems).filter(e => !1 === t.viewableItems[e] && !0 === this.state.viewableItems[e]);
						this.trackPostsViewed(this.props, e)
					}
				}
				trackPostsViewed(e, t) {
					e.isLoading || 0 === e.items.length || t.forEach(t => {
						this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, e.items[t], e.searchOptions, e.listingKey, e.pageLayer) : this.props.discoveryUnit && e.onPostView(this.props.discoveryUnit, e.items[t])
					})
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: r
					} = this.props, n = s || e;
					n && t && t(n, r)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick()
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: r,
						shouldSlideIn: n,
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(ge, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = Ee
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), h = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: je,
						visibleItemsCount: u
					}), b = e ? ke : this.getMarginLeft({
						adjustment: h,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: je
					});
					return a.a.createElement("div", {
						className: Object(c.a)(Oe.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || n ? ke : 0
						},
						style: {
							marginLeft: Object(o.spring)(b, i || _e)
						}
					}, this.renderPosts), 0 !== m && a.a.createElement(d.a, {
						className: Object(c.a)(Oe.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: r
					}), !this.state.itemsFitInContainer && (null == p || m < p) && a.a.createElement(d.b, {
						className: Object(c.a)(Oe.a.arrowRight, n && !e && Oe.a.slideIn, s),
						onClick: this.onClickNext,
						seed: r
					}))
				}
			}
			t.a = Pe(Ie(Object(l.c)(we)))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(o);
			class c extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(a.a)(i.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(a.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_9NiPD_Y6ULK2kfnj6HAWU",
				widgetHeader: "_399v9gOxlS3W_H9wZmXoNb"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1COz1Tx5o15cdern21VVSz",
				banner: "_2QcNoBY8XDHeNxLPPWosos",
				count: "_3dhl5ru8XWXWiHceQZgvmX",
				description: "_2NDrYKicDgvwWzXCzmbe3B",
				searchCommunity: "_2avCQIRO_XhtwE35l4pHKk",
				subscribeButton: "_3rBXfFCJtMOpkX5d1qOs3t",
				subscribeButtonWrapper: "qvXmbzEDFiJbX3a20kAq2",
				titleWrapper: "_2As61Nvoof8WaOWg8gK3hL",
				userCounts: "_11nEOgdNBB8PVfb7gfCXMS"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				communitiesWrapper: "ASRebb1StRvOIky_q-Mo3",
				community: "_1tyb0MHpubC9eZwyNDYbS",
				more: "_2KPjJc9CYMGLqb1xtu4BRB",
				arrow: "R7D7NBsG_dBVhgcyLjeRr",
				arrowLeft: "_2XUWhMpaHEcva44sK2SHlK",
				arrowRight: "_1VaaTlcbtbOY3vMVVUs95z",
				searchCommunityPlaceholder: "_1TqF5iTUMrGQD9IW-Geul6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const a = n.a.createContext(() => {}),
				o = n.a.createContext(() => {});

			function i() {
				return Object(r.useContext)(a)
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "MDNEpwVbINN2HKkEgewE",
				title: "_28leyXRU4PE0vSyWQBBfCO",
				categoryColor: "_3IpRhkSUKq2uGRGPp6qbrS",
				categoryIcon: "_3pQECr4zYB0SAUZkRjo6YZ",
				categoryIconImage: "_1SQZ_ROOFGoOb-mG8rau8h",
				categoryName: "_1JAksQIWTP0gR9_SMTJ9zL",
				categoryNameLink: "ZYsipABw5xewyrDRkYWOH",
				titlePlaceholder: "_2XTuSC4OKqz0VJ6Tjr3-KI",
				categoryIconPlaceholder: "_2Ycj9YQX1II68m3spPXScd",
				categoryNamePlaceholder: "_2k0YcuIbGygzb-DrLnF5H6",
				subTitle: "X17uzKWGZ45lx2ERTqFPA",
				viewCategoryLink: "_3kOnUMhkqJziBPMilQ9yPH",
				layout: "_31dK3_ftR_ZBlLq-y0ygJV",
				widgetHeader: "SrCd6nizt-45KR76UdCv3"
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, n.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), n.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), n.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				opacity: "0.8"
			}, n.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), n.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), n.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#FF538C"
			}), n.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), n.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#FF538C"
			}), n.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), n.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#FF538C"
			}), n.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				fadein: "gReZnzbKn95aY9xCmFx8M",
				reverb: "_3ZoXC3S9OH5sdTAi4tFt7Z",
				fadeout: "_3os88AwHIpr1NBABjT_1zz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UserAchievementFlair").then(s.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const h = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(m.a)(s)) return null;
				const r = s && s.eventInfo,
					i = Object(l.a)(s),
					u = r && Object(o.c)(r.eventStart, r.eventEnd);
				return n.a.createElement("div", {
					className: Object(a.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, n.a.createElement(h, {
					className: p.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					post: s
				}), !i && u && n.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/eventTools/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var m = e => n.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => n.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = s.n(h),
				C = s("./src/lib/lessComponent.tsx");
			const x = C.a.span("PostEventFutureText", b.a),
				f = C.a.span("PostEventPastText", b.a),
				y = C.a.span("PostEventNowText", b.a),
				g = C.a.span("Container", b.a),
				v = C.a.wrapped(m, "CalendarIcon", b.a),
				O = C.a.wrapped(u, "LiveIcon", b.a),
				E = C.a.div("LoadingState", b.a);
			class j extends r.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: r,
						eventIsLive: i,
						eventStart: c
					} = s, d = Object(a.e)(c, r);
					let l, m;
					if (this.state.mounted || d === a.a.Live) l = n.a.createElement(p.c, {
						startTime: c,
						endTime: r,
						isLive: i
					});
					else {
						const e = Object(o.a)({
							isLoading: !0
						});
						l = n.a.createElement(E, {
							className: e
						})
					}
					if (i) m = n.a.createElement(y, null, n.a.createElement(O, null), l);
					else if (d === a.a.Future) m = n.a.createElement(x, null, n.a.createElement(v, null), l);
					else {
						if (d !== a.a.Past) return null;
						m = n.a.createElement(f, null, n.a.createElement(v, null), l)
					}
					return n.a.createElement(g, {
						className: e
					}, m)
				}
			}
			t.a = j
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				x = s.n(C);
			const f = Object(o.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				y = (e, t = !1, s) => {
					const r = Object(c.a)(x.a.icon, x.a.hideOnHover);
					if (t) return a.a.createElement(p.a, {
						name: "crosspost",
						className: r
					});
					if (s.pollData) return a.a.createElement(p.a, {
						name: "poll_post",
						className: r
					});
					if (s.audioRoom) return a.a.createElement(p.a, {
						name: "audio",
						className: r
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return a.a.createElement(p.a, {
								name: "gif_post",
								className: r
							});
						case h.o.IMAGE:
							return a.a.createElement(p.a, {
								name: "image_post",
								className: r
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return a.a.createElement(p.a, {
								name: "text_post",
								className: r
							});
						case h.o.VIDEO:
							return a.a.createElement(p.a, {
								name: "video_post",
								className: r
							});
						case h.o.GALLERY:
							return a.a.createElement(p.a, {
								name: "media_gallery",
								className: r
							});
						case h.o.EMBED:
						default:
							return a.a.createElement(p.a, {
								name: "embed",
								className: r
							})
					}
				};
			t.a = f(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: o,
					isExpanded: l,
					post: h,
					toggle: C,
					useMediaIcons: f
				} = e, g = s || h, v = n && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type || "liveaudio" === g.media.type) && !Object(u.a)(g)) || !!h.pollData ? a.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: C
				}, l ? a.a.createElement(p.a, {
					name: "collapse",
					className: x.a.icon
				}) : f ? a.a.createElement(a.a.Fragment, null, y(g.media && g.media.type, v, h), a.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(x.a.icon, x.a.showOnHover)
				})) : a.a.createElement(p.a, {
					name: "expand",
					className: x.a.icon
				})) : g.source && g.source.url ? a.a.createElement(m.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: o ? b.SourceElement.PostImage : b.SourceElement.ListingPostImage,
					target: "_blank"
				}, a.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(x.a.icon, x.a.outboundLinkIcon)
				})) : a.a.createElement(i.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, a.a.createElement(p.a, {
					name: "text_post",
					className: x.a.icon
				}))
			})
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/IdCard/placeholder.m.less"),
				i = s.n(o);
			t.a = n.a.memo(e => n.a.createElement("div", {
				className: Object(a.a)(i.a.container)
			}, n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.banner)
			}), n.a.createElement("div", {
				className: i.a.title
			}, n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.icon)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.name)
			})), n.a.createElement("div", {
				className: i.a.counts
			}, n.a.createElement("div", {
				className: i.a.side
			}, n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.count)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.text)
			})), n.a.createElement("div", {
				className: i.a.side
			}, n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.count)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.text)
			}))), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.desc, i.a.one)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.desc, i.a.two)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.desc, i.a.three)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.desc, i.a.four)
			}), n.a.createElement("div", {
				className: Object(a.a)(i.a.shimmer, i.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				l = s("./src/reddit/hooks/useClickSourceData.ts"),
				m = s("./src/reddit/components/IdCard/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function h(e) {
				const t = Object(n.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: s,
						isTargetBlank: m,
						largeSubredditIcon: h,
						linkUrl: b,
						subredditIcon: C,
						titleText: x,
						primaryColor: f,
						subreddit: y,
						onOpenFilePicker: g
					} = e,
					v = C.url ? p._("Update icon", null, {
						hk: "GXdPy"
					}) : p._("Add icon", null, {
						hk: "31odkm"
					}),
					O = Object(l.a)();
				return a.a.createElement("div", {
					className: Object(i.a)(u.a.Title, e.className)
				}, s && y ? a.a.createElement(d.a, {
					className: h ? u.a.largeSubredditIcon : u.a.subredditIcon,
					key: C.url,
					iconUrl: C.url,
					primaryColor: f,
					subreddit: y,
					inTopBar: !1
				}) : a.a.createElement(c.b, {
					altText: C.altText,
					className: h ? u.a.largeSubredditIcon : u.a.subredditIcon,
					key: C.url,
					iconUrl: C.url,
					primaryColor: f
				}), a.a.createElement("div", {
					className: u.a.titleTextContainer
				}, b ? a.a.createElement(o.a, {
					className: u.a.TitleLink,
					key: b,
					to: {
						pathname: Object(r.c)(b).pathname,
						state: O,
						search: Object(r.c)(b).search
					},
					onClick: t,
					target: m ? "_blank" : void 0,
					rel: m ? "noopener noreferrer" : void 0
				}, a.a.createElement("span", {
					className: u.a.TitleText,
					title: x
				}, x)) : a.a.createElement("span", {
					className: u.a.TitleText,
					key: x
				}, x), s && y && g && a.a.createElement("div", {
					className: u.a.editIconText,
					onClick: g
				}, v)))
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, s) {
			e.exports = {
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				shimmer: "_2hgXdc8jVQaXYAXvnqEyED",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				container: "_1KWSZXqSM_BLhBzkPyJFGR"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: u,
					subredditOrProfile: h
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, a.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, a.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), a.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": r.fbt._("Crossposted by{author}from{community}", [r.fbt._param("author", Object(l.d)(e)), r.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), h && h.isQuarantined && a.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, n.a.createElement(o.a, {
					className: Object(a.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			}));
			const r = s("./src/lib/constants/index.ts").l.toLowerCase(),
				n = e => "string" == typeof e.bannedBy && e.bannedBy.toLowerCase() === r,
				a = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				o = e => n(e) || a(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => o.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(r.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: o.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => o.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(r.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: o.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/MoreCommunitiesIcon/index.m.less": function(e, t, s) {
			e.exports = {
				moreCommunities: "z54Tq9pM9dZADYsxyAlMi",
				numCommunities: "_1-PSRpyxO4pzCPYOJNRMwe",
				InternalLink: "_1YInFAwL0if5cbF4P9QIJb",
				internalLink: "_1YInFAwL0if5cbF4P9QIJb"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = s.n(d);
			const m = Object(o.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: s
			}) => n.a.createElement(i.a, {
				className: Object(a.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: m(s),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return u
			}));
			var r, n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(r || (r = {}));
			const l = {
					[r.BUTTON]: void 0,
					[r.TAB_GROUP]: c.a.tabGroup
				},
				m = (e, t) => {
					if (t !== r.BUTTON) return e ? c.a.active : c.a.inactive
				},
				u = ({
					active: e = !0,
					children: t,
					className: s,
					disabled: r = !1,
					onClick: n,
					variant: i,
					...u
				}) => a.a.createElement("button", d({}, u, {
					className: Object(o.a)(c.a.primaryButton, l[i], m(e, i), s),
					disabled: r,
					onClick: n
				}), t)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: o,
					post: c,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return n.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(r.useRef)(null),
						s = Object(l.a)(),
						a = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						o = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, a, o), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				y = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(g);
			const O = Object(p.a)(() => Object(a.c)({
				basePixelMetadata: Object(f.a)((e, {
					post: t
				}) => Object(b.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(b.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(C.actionInfo)(e).pageType
			}));
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: r,
						imageGalleryCurrentItem: a,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: b,
						style: C,
						ref: f,
						shouldAddGalleryViewability: y = !0
					} = this.props, g = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: C,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, a, p))(s), l.id && a) {
								const {
									source: e
								} = Object(o.t)(l, a);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(v.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), O = !!l.media && l.media.type === h.o.VIDEO;
					return l.isSponsored || O ? n.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(h.E)(l.media) && y ? n.a.createElement(m, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = O(Object(y.a)(Object(u.c)(E)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class h extends a.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: r
							},
							sendEvent: n
						} = this.props, a = !!r;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: a
						}) : Object(m.g)({
							postId: s,
							isFollowed: a
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, o = s.isFollowed;
					let i = o ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return o && n && (i = r.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), a.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const b = Object(o.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(h))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				o = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(a.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * a.b - 2 * a.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(o.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: C,
					isOverlay: x,
					isVoteCountAnimation: f,
					postId: y,
					isReadingIndicatorsExperimentEnabled: g
				} = e, v = `upvote-button-${t.id}${x?"-overlay":""}`;
				return n.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: C
				}, r && n.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: C,
					upvoteTooltipId: v,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: p,
					postId: y,
					scoreClassName: Object(a.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					isReadingIndicatorsExperimentEnabled: g
				}))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less": function(e, t, s) {
			e.exports = {
				commentMeta: "_2GB9z5qEEGqUlVd7_AZ0Gd",
				postedInfo: "_1IuU3sDpVjxHmNu8hy7ke-"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EfAVKHNVRtvNT-8VkDC-8",
				layout: "CVce26qZfY7ojFzPuc8YO",
				icon: "_3HND8rCvmfwgjXVVqJERhm",
				header: "_2_cX1qWUgmW8pfAWGvFh8p",
				postTitle: "O2eUhZf8GsGivGF4UEz5D",
				postIcon: "K-RJ57NaqoKc87tgv6tg7",
				innerContainer: "_2AFBK0BD8EbiNGolgAo1Hq",
				bodyWrapper: "_1tvEudu_F3pE1RiVAQrGvD",
				mediaPlaceholder: "_2C0inkNJdF-Ov9MOBPF4zU",
				mediaWrapper: "_1FoZeus-f2nDzrVv5WpY_G",
				thumbnail: "_3gEhWanOXMU-ksmhp_q6lV",
				flexSpacer: "vB0xdI2bqGNNfqozIzmfD",
				arrowIcon: "_1R6w1GOLZm3dSI11WCzCQG",
				seeFullPost: "_1cwpynsCToYyTFd63E30QA",
				commentWrapper: "_1OQ-tv6o7fwLv-Xi-aDeHM",
				numComments: "_2Y_MxrLEpKLdjpgTcHwdp",
				commentIcon: "_2-ZseoXCsZV7Xau4_E7Om_",
				textMediaWrapper: "_3pcRVwv7cNJ8Pv-9ZM98wD",
				textMedia: "DX83wFTjNyEjCXYelqumz",
				seeMore: "_3Tyc8Rp7EGv_mZ37PKjpfQ",
				outboundLink: "_1hIKBJ8OWtaPMnfYwyHGFc",
				adLinkWrapper: "_3A4sFX94xrspYFRVMV-s6U",
				layoutBody: "_2tbAAoNeEb_-ogWVF8pxCo",
				layoutHeader: "_3mCoL3r3LzuKXr4dtE3b_v",
				callToAction: "_1i9ocNVQgxgTH0Os3zmf_6"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/TrendingHeroScrollWrapper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Scroller/Simple.tsx"),
				c = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				d = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				l = s("./src/reddit/hooks/usePageLayer.ts"),
				m = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const u = 376,
				p = new r.a(1);

			function h({
				discoveryUnit: e,
				listingKey: t,
				searchOptions: s,
				postId: r,
				children: n
			}) {
				const h = Object(o.d)(),
					b = Object(l.a)();
				if (!e || !r) return null;
				const C = () => {
					const n = `entered-hero-unit-${r}`;
					let a = c.a.get(n);
					if (void 0 === a) {
						const o = e.layout.viewTypeWeb === m.b.PromotedTrendHero;
						a = () => {
							h((n, a) => Object(d.E)(a(), e, r, s, b, t, o))
						}, c.a.set(n, a)
					}
					return a
				};
				return a.a.createElement(i.b, null, (() => {
					const s = `hero-unit-search-${t}`;
					let r;
					return void 0 === (r = p.get(s)) && (r = {
						estHeight: u,
						trackOnEnteredViewport: C(),
						id: e.id,
						render: () => n
					}), p.set(s, r), [r]
				})())
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less": function(e, t, s) {
			e.exports = {
				container: "_1qi8CaHgb-Xm_3oGIAF8wc",
				commentContentWrapper: "_5y5OcwmowpRI5lhW8hAf8",
				commentBody: "_1vkza3ACM30oYHiA5vOGJh"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "h5UKl2V1Is5GCXY54VWZi",
				layout: "_3jaIP3UzpcymE9ShGaYPRY",
				icon: "_1pffhH3DYAI7rRTUAlHpsg",
				header: "_3mXJ9ydjIpRKpQ-KxPLqwA",
				postTitle: "_2VhF1mF_293NpbRPStvDPF",
				postIcon: "T0ysSxk3cKkw05qgwX4rE",
				innerContainer: "_3MpvbgSzWyQ81sLfHzYAgT",
				bodyWrapper: "_2OVKLZk2ubyZ0t5amZqqZN",
				mediaPlaceholder: "_3d88aDP4u4C5DLMu8SfYZ8",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				thumbnail: "_22Yz5UFhuhlNCyt3gMwKtc",
				flexSpacer: "_16ij1n1alsDJYUSapHkvTu",
				arrowIcon: "_2j1ValrGx6OpuxteMFAH40",
				forwardIcon: "ub4fEA5JEd91Dm3G37lsf",
				seeFullPost: "_20vqKvo2gYgPLLM2nvt9xx",
				commentWrapper: "_28vLaY2cJfWy30C_YcyA76",
				numComments: "_3Nr7HrlwLllPDfaR7Mo2-l",
				commentIcon: "_6cbxXo8Vg0cqLtcSW7sfq",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/redesign.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2j7UR_yvkCwpS-HPfFH4l5",
				eventMeta: "_3ZQoOnCRAFrSL6FsdqA8RU",
				postContent: "_3vDll9mLXhUvHx_sSjjIzQ",
				postItemMetaContainer: "_35K702KAG3DvgnPYIK_ypy",
				postItemTitleContainer: "_2tpkhC2QCXdWCL1WDFFg4P",
				postItemFlatlistContainer: "_10nOMgIinej4MqZ6hIiowh",
				mediaWrapper: "_1psVAAiSmYVB_YK5TsT7mN",
				marginCancel: "_2Hinle4K74HK6s2WgEMwXA",
				twitterEmbed: "GvFZl4E7FJWNEgWpOi-f1",
				promotedTrend: "_1p_ho4rXajjQ5jSOI3DO9B",
				mediaContent: "_1YA190EaEjb8shjVnRdqVf",
				textMediaWrapper: "gFNBTv7Sftp7j3rlmZin6",
				textMedia: "_1eWnkq7LE-By6f08Vq_9G-",
				seeMore: "_2mIxud7fSGsWLHcil-Va9d",
				adLinkWrapper: "PxmcGAExvX_Rv361d5sef",
				outboundLink: "_2GJdECzk76j2w-44naorhr",
				adCallToAction: "_8urUcnAgdjo9sdH_rPpHD",
				active: "MU04zE9yfnlUSdPMduHKV",
				redditStyle: "U1-3tQ8QleU24TJt_F5LX"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/index.m.less": function(e, t, s) {
			e.exports = {
				bold: "_3j9XjJayuKq7dJ8huVnCuS",
				container: "_2SYp_6fbfcr6uPKUz5DybH",
				metaDataContainer: "_2eSrmICxfeYScrkl_a0PPz",
				metaData: "_1z_GZgOeapyyCdKo34Eqir",
				icon: "GDc4zpCBZubZHeypInBQJ",
				follow: "tlgyC9DArM6YOdfYfAA4R",
				share: "_1zFWIhf2ANVvGFxQN9FG5X",
				header: "_3S4kZJ2srKP3X_EH9Rx1wn",
				postIcon: "HU9OnSjgAUl0uezzCEN8G",
				metadataContainer: "_3sYSU_0JVt4q8DdUaqBPDp",
				metaSeparator: "_3GCG9ku78CvsDODsUdz3ze",
				postBadges: "_2_3bLbSOJmeKpz84PVvmCy"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);

			function l({
				post: e,
				className: t
			}) {
				const s = Object.values(e.awardCountsById || {}).reduce((e, t) => e += t, 0);
				return a.a.createElement("div", {
					className: Object(o.a)(d.a.flatlistContainer, t)
				}, a.a.createElement("span", {
					className: Object(o.a)(d.a.flatlistItem)
				}, r.fbt._("{upvotesCount} upvotes", [r.fbt._param("upvotesCount", Object(i.b)(e.score))], {
					hk: "4pEh4K"
				})), a.a.createElement("span", {
					className: Object(o.a)(d.a.flatlistItem)
				}, r.fbt._("{commentsCount} comments", [r.fbt._param("commentsCount", Object(i.b)(e.numComments))], {
					hk: "25X8If"
				})), a.a.createElement("span", {
					className: Object(o.a)(d.a.flatlistItem)
				}, r.fbt._("{awardsCount} awards", [r.fbt._param("awardsCount", Object(i.b)(s))], {
					hk: "2DUF36"
				})))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				d = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				b = s.n(h);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					post: n,
					subredditOrProfile: h,
					tooltipType: C
				} = e, x = Object(u.a)();
				return a.a.createElement("div", {
					className: Object(r.a)(t, b.a.metaContainer)
				}, !n.isSponsored && h && a.a.createElement(o.a, {
					className: Object(r.a)(b.a.hovercardContainer, b.a.hovercardContainer),
					postId: n.id,
					subredditName: h.name
				}, a.a.createElement(p.b, {
					className: b.a.subredditIcon,
					subredditOrProfile: h,
					linkTo: h.url
				}), a.a.createElement(l.a, {
					className: b.a.subredditName,
					"data-testid": "subreddit-name",
					"data-click-id": "subreddit",
					to: {
						pathname: h.url,
						state: x
					}
				}, h.displayText)), h && h.isQuarantined && a.a.createElement(d.a, null), !n.isSponsored && a.a.createElement(a.a.Fragment, null, a.a.createElement(m.b, null), a.a.createElement(i.h, {
					type: n.belongsTo.type,
					id: n.belongsTo.id
				})), a.a.createElement(c.d, {
					className: b.a.postTopMeta,
					flairStyleTemplate: s,
					post: n,
					tooltipType: C
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			}));
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/selectors/searchResults.ts"),
				y = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/telemetry/index.ts"),
				v = s("./src/telemetry/models/Timer.ts"),
				O = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				j = s.n(E),
				_ = s("./src/reddit/components/SearchResultsContent/Community/redesign.tsx"),
				k = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx");
			const S = Object(c.c)({
					apiError: f.b,
					apiPending: f.c,
					loadMore: f.r,
					viewportDataLoaded: y.a
				}),
				N = e => {
					const t = Object(a.useRef)(!1);
					let s = !1,
						r = !1;
					const c = new m.a(O.d),
						f = Object(a.useRef)(),
						y = Object(a.useRef)(null),
						E = [d.Zb.Users],
						N = Object(C.eb)(),
						I = Object(b.b)(),
						P = Object(i.d)(),
						{
							identifiers: w,
							listingKey: T,
							searchOptions: L,
							sidebar: R
						} = e,
						{
							apiError: F,
							apiPending: M,
							loadMore: A,
							viewportDataLoaded: D
						} = Object(i.e)(t => S(t, e)),
						B = R ? O.e : w.length,
						U = R ? O.e : O.c,
						W = () => {
							if (!Z()) return;
							const e = g.c.end(T);
							I(Object(x.u)(T, L, v.TimerType.InApp, e, N))
						},
						V = () => {
							const e = f.current && Array.from(f.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(a.useEffect)(() => {
						W(), y.current && Object(g.b)(d.n.Redesign, {
							type: "mount",
							component: "authorSearchResults",
							duration: g.c.end(y.current)
						})
					}, []), Object(a.useEffect)(() => {
						if (W(), y.current && g.c.has(y.current)) {
							const e = g.c.end(y.current);
							if (e < 10) return;
							Object(g.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "authorSearchResults"
							})
						}
					});
					const H = Object(l.a)(T),
						q = Object(l.a)(w.length);
					Object(a.useEffect)(() => {
						y.current && g.c.cancel(y.current), w.length && (y.current = g.c.start()), (T !== H || !V() && w.length !== q) && (t.current = !1)
					}, [y, T, w.length, H, q, t]), Object(a.useEffect)(() => () => {
						y.current && g.c.cancel(y.current), f.current = void 0, t.current = !1
					});
					const K = () => {
							t.current = !0, W()
						},
						Z = () => {
							const e = V();
							return g.c.has(T) && (F || !r && (s || t && (e || D)))
						},
						z = e => {
							f.current = e instanceof Element ? e : void 0
						},
						G = () => {
							const e = w.slice(0, B).map((e, t) => ((e, t) => {
								const s = {
										...L,
										id: e.id,
										eventType: e.type
									},
									r = `author-search-${t}-${T}`,
									n = Object(h.b)(e, T, I, s);
								let a;
								if (void 0 === (a = c.get(r))) {
									const s = `author-search-item-[id:${e.id}]`,
										r = () => o.a.createElement(_.a, {
											className: j.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: s,
											listingKey: T,
											searchOptions: L,
											sidebar: R
										});
									a = {
										estHeight: O.b,
										trackOnEnteredViewport: n,
										id: e.id,
										render: r
									}
								}
								return c.set(r, a), a
							})(e, t));
							return o.a.createElement(p.b, {
								key: T,
								innerRef: z,
								loadMoreToken: A && A.token ? A.token : void 0,
								onLastVisibleChildRendered: K,
								onLoadMore: () => {
									R || P(Object(u.q)(E))
								}
							}, e)
						};
					return (() => w.length > 0)() ? (s = !1, r = !1, G()) : (() => Boolean(F) || !1 === M)() ? (s = !0, r = !1, G()) : (s = !1, r = !0, (() => {
						const e = !F;
						return o.a.createElement("div", {
							"data-testid": "authors-list-placeholder"
						}, n()(U, t => o.a.createElement(k.a, {
							className: j.a.communityPlaceholder,
							key: t,
							isLoading: e,
							sidebar: R
						})))
					})())
				}
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return W
			})), s.d(t, "a", (function() {
				return H
			}));
			var r = s("./node_modules/lodash/constant.js"),
				n = s.n(r),
				a = s("./node_modules/lodash/take.js"),
				o = s.n(a),
				i = s("./node_modules/lodash/times.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/LRUCache/index.ts"),
				b = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/Community/index.tsx"),
				y = s("./src/reddit/constants/history.ts"),
				g = s("./src/reddit/helpers/history/index.ts"),
				v = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/trackers/searchResults.ts"),
				S = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				N = s("./src/reddit/selectors/searchResults.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/reddit/components/SearchResultsContent/Community/redesign.tsx"),
				w = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx"),
				T = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				L = s.n(T);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = Object(E.u)({
				pageLayer: e => e,
				queryParams: E.V
			}), M = Object(u.c)({
				apiError: N.p,
				apiPending: N.q,
				identifiers: (e, {
					listingKey: t
				}) => Object(S.e)(e) ? Object(N.d)(e, {
					listingKey: t
				}) : Object(N.l)(e, {
					listingKey: t
				}),
				loadMore: N.t,
				isSerpExperimentOverride: S.d
			}), A = 36, D = 5, B = Object(m.b)(M), U = (e, t) => () => e(e => ({
				...Object(k.c)(e),
				source: "search",
				action: "click",
				noun: "view_more_communities",
				correlationId: Object(_.c)(_.a.SearchResults),
				actionInfo: I.actionInfo(e),
				search: I.search(e, t)
			})), W = e => {
				const {
					loadMore: t,
					identifiers: s
				} = e;
				return Boolean(t && t.token) && s.length > 0
			};
			class V extends l.a.Component {
				constructor() {
					super(...arguments), this.scrollChildCache = new h.a(D)
				}
				scrollChildForItem(e, t) {
					const {
						isSerpExperimentOverride: s,
						listingKey: r,
						searchOptions: n,
						sendEvent: a
					} = this.props, o = {
						...n,
						id: e.id,
						eventType: e.type
					}, i = Object(v.b)(e, r, a, n), c = `community-search-${t}-${r}`;
					let d;
					if (void 0 === (d = this.scrollChildCache.get(c))) {
						const n = s ? P.a : f.a;
						d = {
							estHeight: A,
							trackOnEnteredViewport: i,
							id: e.id,
							render: () => l.a.createElement(n, {
								className: L.a.previewCommunityStyles,
								first: 0 === t,
								identifier: e,
								key: e.id,
								listingKey: r,
								searchOptions: o
							})
						}
					}
					return this.scrollChildCache.set(c, d), d
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						identifiers: s,
						isSerpExperimentOverride: r,
						listingKey: a,
						loadMore: i,
						preview: d,
						queryParams: m,
						searchOptions: u,
						sendEvent: h
					} = this.props, f = r ? w.a : C.a;
					if (d) {
						let r;
						if (t || e) r = c()(3, t => l.a.createElement(f, {
							className: L.a.previewCommunityStyles,
							key: t,
							isLoading: !e
						}));
						else {
							let e = s.map((e, t) => this.scrollChildForItem(e, t));
							e = o()(e, 3), r = l.a.createElement(x.b, null, e)
						}
						return l.a.createElement("div", {
							className: L.a.container,
							"data-testid": "communities-list"
						}, l.a.createElement("span", {
							className: L.a.title
						}, R._("Communities and users", null, {
							hk: "3edzgd"
						})), l.a.createElement("div", {
							className: L.a.separator
						}), r, l.a.createElement(j.a, {
							className: L.a.viewMore,
							onClick: U(h, u),
							to: {
								pathname: "/search",
								state: {
									[y.b.SearchOriginPage]: Object(g.b)(y.b.SearchOriginPage)
								},
								search: Object(p.a)("", {
									...m,
									type: "sr,user"
								})
							}
						}, R._("View more", null, {
							hk: "JKJPb"
						})))
					}
					return l.a.createElement("div", {
						className: L.a.container,
						"data-testid": "communities-list"
					}, !u.is_multi && l.a.createElement(b.a, {
						identifiers: s,
						listingKey: a,
						searchOptions: u
					}), W({
						identifiers: s,
						loadMore: i
					}) && l.a.Children.toArray(c()(3, n()(l.a.createElement(f, {
						className: L.a.loadMoreItem,
						isLoading: !0
					})))))
				}
			}
			const H = F(B(Object(O.c)(V)))
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_12I4LEbhoIMSoIIXC_OHwT"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "a", (function() {
				return R
			}));
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/LRUCache/index.ts"),
				m = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				y = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/tracking.ts"),
				v = s("./src/telemetry/index.ts"),
				O = s("./src/telemetry/models/Timer.ts"),
				E = s("./src/reddit/components/SearchResultsContent/Community/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/Community/redesign.tsx"),
				_ = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				k = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx"),
				S = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				N = s.n(S);
			const I = 32,
				P = 250,
				w = 10,
				T = 5,
				L = Object(c.c)({
					apiError: (e, {
						listingKey: t
					}) => Object(f.e)(e) ? Object(y.e)(e, {
						listingKey: t
					}) : Object(y.p)(e, {
						listingKey: t
					}),
					apiPending: (e, {
						listingKey: t
					}) => Object(f.e)(e) ? Object(y.f)(e, {
						listingKey: t
					}) : Object(y.q)(e, {
						listingKey: t
					}),
					isSerpRedesignM1: f.d,
					isSerpRedesignM2: f.e,
					loadMore: (e, {
						listingKey: t
					}) => Object(f.e)(e) ? Object(y.s)(e, {
						listingKey: t
					}) : Object(y.t)(e, {
						listingKey: t
					}),
					viewportDataLoaded: g.a
				}),
				R = e => {
					const t = Object(a.useRef)(!1);
					let s = !1,
						r = !1;
					const c = new l.a(P),
						f = Object(a.useRef)(),
						y = Object(a.useRef)(null),
						g = Object(C.eb)(),
						S = Object(b.b)(),
						R = Object(i.d)(),
						{
							identifiers: F,
							listingKey: M,
							searchOptions: A,
							sidebar: D
						} = e,
						{
							apiError: B,
							apiPending: U,
							isSerpRedesignM1: W,
							isSerpRedesignM2: V,
							loadMore: H,
							viewportDataLoaded: q
						} = Object(i.e)(t => L(t, e)),
						K = {
							component: W ? j.a : E.a,
							identifierCount: D ? T : F.length,
							placeholderComponent: W ? k.a : _.a,
							placeholderCount: D ? T : w,
							moreResultsTypes: V ? [d.Zb.Subreddits] : [d.Zb.Subreddits, d.Zb.Users]
						},
						Z = () => {
							if (!X()) return;
							const e = v.c.end(M);
							S(Object(x.u)(M, A, O.TimerType.InApp, e, g))
						},
						z = () => {
							const e = f.current && Array.from(f.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(a.useEffect)(() => {
						Z(), y.current && Object(v.b)(d.n.Redesign, {
							type: "mount",
							component: "communitySearchResults",
							duration: v.c.end(y.current)
						})
					}, []), Object(a.useEffect)(() => {
						if (Z(), y.current && v.c.has(y.current)) {
							const e = v.c.end(y.current);
							if (e < 10) return;
							Object(v.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "communitySearchResults"
							})
						}
					});
					const G = Object(m.a)(M),
						J = Object(m.a)(F.length);
					Object(a.useEffect)(() => {
						y.current && v.c.cancel(y.current), F.length && (y.current = v.c.start()), (M !== G || !z() && F.length !== J) && (t.current = !1)
					}, [y, M, F.length, G, J, t]), Object(a.useEffect)(() => () => {
						y.current && v.c.cancel(y.current), f.current = void 0, t.current = !1
					});
					const Q = () => {
							t.current = !0, Z()
						},
						X = () => {
							const e = z();
							return v.c.has(M) && (B || !r && (s || t && (e || q)))
						},
						Y = e => {
							f.current = e instanceof Element ? e : void 0
						},
						$ = () => {
							const e = F.slice(0, K.identifierCount).map((e, t) => ((e, t) => {
								const s = {
										...A,
										id: e.id,
										eventType: e.type
									},
									r = `community-search-${t}-${M}`,
									n = Object(h.b)(e, M, S, s);
								let a;
								if (void 0 === (a = c.get(r))) {
									const s = `community-search-item-[id:${e.id}]`,
										r = K.component,
										i = () => o.a.createElement(r, {
											className: N.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: s,
											listingKey: M,
											searchOptions: A,
											sidebar: D
										});
									a = {
										estHeight: I,
										trackOnEnteredViewport: n,
										id: e.id,
										render: i
									}
								}
								return c.set(r, a), a
							})(e, t));
							return o.a.createElement(p.b, {
								key: M,
								innerRef: Y,
								loadMoreToken: H && H.token ? H.token : void 0,
								onLastVisibleChildRendered: Q,
								onLoadMore: () => {
									D || R(Object(u.q)(K.moreResultsTypes))
								}
							}, e)
						};
					return (() => F.length > 0)() ? (s = !1, r = !1, $()) : (() => Boolean(B) || !1 === U)() ? (s = !0, r = !1, $()) : (s = !1, r = !0, (() => {
						const e = !B,
							t = K.placeholderComponent;
						return o.a.createElement("div", {
							"data-testid": "communities-list-placeholder"
						}, n()(K.placeholderCount, s => o.a.createElement(t, {
							className: N.a.communityPlaceholder,
							key: s,
							isLoading: e,
							sidebar: D
						})))
					})())
				}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				userInfo: "_3eEGmb1TERzQ2jBCUr-XNg",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				titleContainer: "NnbPVsleaxwPg_xH-gVn4",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Flair/index.tsx"),
				d = s("./src/reddit/components/SearchResultsContent/helpers/communityConfig.tsx"),
				l = s("./src/reddit/components/SearchResultsContent/helpers/subscribeCheck.ts"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				b = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/searchFix.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				O = s.n(v);
			const E = Object(o.c)({
					hideNSFWPref: g.C,
					subredditOrProfile: y.I,
					subredditOrProfileAboutInfo: y.E,
					userIsSubscriber: y.cb
				}),
				j = e => {
					const {
						className: t,
						identifier: s,
						listingKey: o,
						searchOptions: y
					} = e, g = Object(C.a)(), v = Object(b.a)(), j = Object(u.eb)(), {
						hideNSFWPref: _,
						subredditOrProfile: k,
						subredditOrProfileAboutInfo: S
					} = Object(a.e)(t => E(t, e)), N = Object(r.useCallback)(() => {
						g(Object(h.p)(s.type, y, Object(f.b)({
							pageLayer: j
						}))), g(Object(h.m)(y, j, s, o))
					}, [g, y, j, o, s]), I = Object(r.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), g(Object(h.m)(y, j, s, o))
					}, [g, y, j, s, o]);
					if (!k) return null;
					const P = k.displayText,
						w = S.publicDescription,
						T = Object(d.b)(s.type, S),
						L = Object(d.a)({
							identifierType: s.type,
							subredditOrProfile: k,
							subredditOrProfileAboutInfo: S,
							onSubscribeButtonClick: I,
							subscribeEventFactory: e => e ? "profile" === s.type ? Object(l.a)(y) : void 0 : Object(l.b)(s.type, y)
						});
					return n.a.createElement(p.a, {
						"data-testid": "community-link",
						className: Object(i.a)(O.a.container, t),
						onClick: N,
						to: {
							pathname: k.url,
							state: v
						}
					}, n.a.createElement("div", {
						className: O.a.userInfo
					}, n.a.createElement(m.b, {
						className: O.a.subredditIcon,
						shouldHideNsfwIcon: _,
						subredditOrProfile: k
					}), n.a.createElement("div", {
						className: O.a.titleContainer
					}, n.a.createElement("div", {
						className: O.a.title
					}, P), T ? n.a.createElement("div", {
						className: O.a.subtitle
					}, T) : null, k.isNSFW && n.a.createElement(c.b, {
						flair: {
							type: x.f.Nsfw,
							text: "nsfw"
						}
					}))), n.a.createElement("div", {
						className: O.a.description
					}, w), n.a.createElement("div", {
						className: O.a.buttonContainer
					}, L))
				}
		},
		"./src/reddit/components/SearchResultsContent/Community/redesign.m.less": function(e, t, s) {
			e.exports = {
				container: "_3K_3Lkp9Y0UOvx4jLCEO1t",
				mFirst: "_2DUH3f7VrWC1DqRH4885YM",
				subredditIcon: "_3NNJELf9FmGhKjI7UZ8cia",
				contentContainer: "_1P9xc8Vuhfh3gnFtpZ8Re4",
				subredditInfo: "CCriDGNZMkvnfCBh2RHK4",
				sidebar: "_2qMwaXWIn_m8Wdxt7k-zJc",
				title: "_2aQkt7SngMSaKmFJN0J64X",
				subtitle: "_37cCjYJHqjK_4BJSpMj0h_",
				flair: "_3W3FIQq139KfrknzxMxx6E",
				description: "_3UB4KidGixx_PMhgV4sqIN",
				buttonContainer: "_2arN9o-oddMZY7RpPcYD-9"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/components/SearchResultsContent/helpers/communityConfig.tsx"),
				m = s("./src/reddit/components/SearchResultsContent/helpers/subscribeCheck.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/searchResults.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/selectors/searchFix.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SearchResultsContent/Community/redesign.m.less"),
				_ = s.n(j);
			const k = Object(o.c)({
					hideNSFWPref: E.C,
					subredditOrProfile: O.I,
					subredditOrProfileAboutInfo: O.E,
					userIsSubscriber: O.cb
				}),
				S = e => {
					const {
						className: t,
						first: s,
						identifier: o,
						listingKey: O,
						searchOptions: E,
						sidebar: j
					} = e, S = Object(p.eb)(), N = Object(y.a)(), I = Object(f.a)(), {
						hideNSFWPref: P,
						subredditOrProfile: w,
						subredditOrProfileAboutInfo: T
					} = Object(a.e)(t => k(t, e)), L = Object(r.useCallback)(() => {
						N(Object(x.p)(o.type, E, Object(v.b)({
							pageLayer: S
						}))), N(Object(x.m)(E, S, o, O))
					}, [N, E, S, O, o]), R = Object(r.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), N(Object(x.m)(E, S, o, O))
					}, [N, E, S, o, O]);
					if (!w) return null;
					const F = w.displayText,
						M = T.publicDescription,
						A = Object(l.b)(o.type, T),
						D = Object(l.a)({
							identifierType: o.type,
							subredditOrProfile: w,
							subredditOrProfileAboutInfo: T,
							onSubscribeButtonClick: R,
							subscribeEventFactory: e => {
								if (!e) return Object(m.b)(o.type, E)
							},
							priority: h.c.Tertiary
						});
					return n.a.createElement(b.a, {
						"data-testid": `${o.type}-link`,
						className: Object(i.a)(_.a.container, s ? _.a.mFirst : void 0, t),
						onClick: L,
						to: {
							pathname: w.url,
							state: I
						}
					}, n.a.createElement("div", {
						className: _.a.iconContainer
					}, n.a.createElement(u.b, {
						className: _.a.subredditIcon,
						shouldHideNsfwIcon: P,
						subredditOrProfile: w
					})), n.a.createElement("div", {
						className: _.a.contentContainer
					}, n.a.createElement("div", {
						className: Object(i.a)(_.a.subredditInfo, {
							[_.a.sidebar]: j
						})
					}, n.a.createElement("h6", {
						className: _.a.title
					}, F), w.isNSFW && n.a.createElement(d.b, {
						className: _.a.flair,
						flair: {
							type: g.f.Nsfw,
							text: "nsfw"
						}
					}), A && n.a.createElement(n.a.Fragment, null, n.a.createElement("p", {
						className: _.a.subtitle
					}, !j && n.a.createElement(C.b, null), A))), !j && n.a.createElement("p", {
						className: _.a.description
					}, Object(c.a)(M, 150, "..."))), n.a.createElement("div", {
						className: _.a.buttonContainer
					}, D))
				}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ObyNmd6TiLgPGR5-1jj_R",
				userInfo: "_3_4sSzkdFVidwJjdKcy3N1",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				titleContainer: "_1PHQ-ZJkmjaCiPbk9dZtbl",
				title: "_11V3zVIqp59I7JvzWnky0w",
				subtitle: "_1udmVL2hhq7PSlgxTaeJw2",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				descriptionContainer: "_3zCQAIsCB1OIYQILnEJD61",
				button: "DEgV8HnF3Dr9R22X_SHUw"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(i);
			const d = e => n.a.createElement("div", {
				className: Object(a.a)(c.a.container, e.className),
				"data-testid": "community-placeholder"
			}, n.a.createElement("div", {
				className: c.a.userInfo
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.subreddtiIcon, Object(o.a)(e))
			}), n.a.createElement("div", {
				className: c.a.titleContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.title, Object(o.b)(e))
			}), n.a.createElement("div", {
				className: Object(a.a)(c.a.subtitle, Object(o.b)(e))
			}))), n.a.createElement("div", {
				className: c.a.descriptionContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(o.b)(e))
			}), n.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(o.b)(e))
			})), n.a.createElement("div", {
				className: Object(a.a)(c.a.button, Object(o.b)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2pxKtgutl18_N5KOldF-Dc",
				sidebar: "wIjcV9aUA-Gkc9FfR3Zs5",
				subreddtiIcon: "_2I9vYEOgmN3MmZK8_WfT3q",
				contentContainer: "_1M0KrXVhGoyABs0B78fLVq",
				subredditInfo: "_3MFe8cvhJMw78Ej2icnVg6",
				title: "_2VUick6HygFpjyu9dOhXHG",
				author: "_2ZnNtYTsjS-8BJDxOlTeja",
				description: "_1WbzuokBhS90PZmJr91aeu",
				buttonContainer: "_25ImoQyWvbjPImn35ndf7o"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.m.less"),
				c = s.n(i);
			const d = e => n.a.createElement("div", {
				className: Object(a.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.subreddtiIcon, Object(o.a)(e))
			}), n.a.createElement("div", {
				className: c.a.contentContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.title, Object(o.b)(e))
			}), n.a.createElement("div", {
				className: Object(a.a)(c.a.author, Object(o.b)(e))
			})), !e.sidebar && n.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(o.b)(e))
			})), n.a.createElement("div", {
				className: Object(a.a)(c.a.buttonContainer, Object(o.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "FkQALOgNG0XnM_qGE3GOB",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				semiBold: "_2Kn5gtljobl1Fv05YLAeKK",
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/hooks/useTracking.ts"),
				o = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				i = s("./src/reddit/helpers/trackers/searchResults.ts"),
				c = s("./src/reddit/icons/svgs/SnooCrying/index.tsx"),
				d = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				l = s.n(d);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u;

			function p({
				type: e,
				searchOptions: t,
				query: s
			}) {
				const d = Object(a.a)();
				if (Object(r.useEffect)(() => {
						d(Object(i.j)(e, t))
					}, []), Object(o.a)(s)) return null;
				let p;
				return p = e === u.Category ? m._("Sorry, there were no results for the category {=“ [search query] ”}", [m._param("=“ [search query] ”", n.a.createElement("span", {
					className: l.a.semiBold
				}, m._("“ {search query} ”", [m._param("search query", s)], {
					hk: "2vXsw0"
				})))], {
					hk: "42nr3u"
				}) : e === u.Communities ? m._("Sorry, there were no community results for {=“ [search query] ”}", [m._param("=“ [search query] ”", n.a.createElement("span", {
					className: l.a.semiBold
				}, m._("“ {search query} ”", [m._param("search query", s)], {
					hk: "41Nh2l"
				})))], {
					hk: "ztoCJ"
				}) : m._("Sorry, there were no post results for {=“ [search query] ”}", [m._param("=“ [search query] ”", n.a.createElement("span", {
					className: l.a.semiBold
				}, m._("“ {search query} ”", [m._param("search query", s)], {
					hk: "2n8mO1"
				})))], {
					hk: "3fsKtO"
				}), n.a.createElement("div", {
					className: l.a.noResults,
					"data-testid": "no-results"
				}, n.a.createElement(c.a, {
					className: l.a.icon
				}), n.a.createElement("div", {
					className: l.a.text
				}, p))
			}! function(e) {
				e.Category = "category", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(u || (u = {}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/redesign.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1bAIpCWdJW4VCiZ55NX4PG",
				withSidebar: "_3F2EFH9YJwtfIgIJ3OyHWX",
				header: "_2kkXJACUPg0C3rAApibsNx",
				text: "_1HdpURvGcZHFI9a88P1LMQ"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/hooks/useTracking.ts");
			const c = e => a.a.createElement("svg", {
				width: "68",
				height: "68",
				viewBox: "0 0 68 68",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				opacity: "0.5"
			}, a.a.createElement("path", {
				opacity: "0.5",
				d: "M24.0765 62.221H23.88C18.8437 61.8013 13.8553 61.1585 9.8284 60.4201L1.83309 59.926C1.39607 59.8973 0.988164 59.6968 0.698496 59.3683C0.408829 59.0398 0.260945 58.6101 0.287153 58.1729C0.287153 58.1198 0.287153 58.0773 0.287153 58.0294C0.866215 54.3319 1.22747 50.4698 1.59403 46.3366C1.74278 44.7429 1.89153 43.1491 2.0509 41.5554C2.36434 38.3679 2.68309 35.4566 3.0284 32.6357L3.63403 27.5676C3.78809 26.2129 3.94746 24.8104 4.16528 23.3973C4.57965 20.6719 5.16403 17.7926 6.64621 15.2107C7.02845 14.5512 7.4713 13.9287 7.96903 13.3513C8.4702 12.7333 9.05486 12.188 9.70621 11.731C10.8469 10.9717 12.0672 10.3393 13.3453 9.84507L13.4356 9.80788C14.5122 9.38724 15.5518 8.87723 16.5434 8.2832C17.4179 7.68273 18.1985 6.95586 18.8596 6.12632L19.3218 5.59507C19.9725 4.78196 20.6828 4.0184 21.4468 3.3107C22.4656 2.39364 23.6358 1.66027 24.9053 1.1432C25.1841 1.02221 25.4696 0.917551 25.7606 0.829758H25.835C26.1427 0.713538 26.4567 0.614223 26.7753 0.532258C27.4035 0.375443 28.0429 0.267104 28.6878 0.208195C29.909 0.108959 31.1372 0.133878 32.3534 0.28257C33.5406 0.415061 34.7127 0.658735 35.8543 1.01038C36.4183 1.1836 36.9717 1.38937 37.5118 1.62663C38.0431 1.85507 38.5106 2.08351 38.9834 2.31726L39.3393 2.49257C40.8642 3.31976 42.4816 3.96352 44.1578 4.41038C44.3118 4.44226 44.45 4.46882 44.5934 4.49007H44.7475C45.7208 4.39665 46.6842 4.2189 47.6268 3.95882C48.1262 3.83132 48.6415 3.68788 49.1781 3.53913C49.8156 3.35851 50.4796 3.17257 51.1809 3.00788C52.6324 2.61618 54.1293 2.4179 55.6328 2.4182C56.4944 2.42917 57.3511 2.54875 58.1828 2.77413C59.0231 3.0092 59.834 3.33892 60.6 3.75695C62.1234 4.58147 63.4262 5.76036 64.3984 7.19413C65.2572 8.42103 65.9553 9.75292 66.4756 11.1573C66.5978 11.4866 66.7146 11.8054 66.8209 12.1241C66.9388 12.4728 67.0381 12.8275 67.1184 13.1866C67.2667 13.8442 67.3661 14.5119 67.4159 15.1841C67.478 15.872 67.4494 16.565 67.3309 17.2454C67.208 17.8817 66.9989 18.4984 66.7093 19.0782C66.6721 19.1473 66.6403 19.2057 66.6031 19.2641V19.3066C66.302 20.0633 65.9037 20.7777 65.4184 21.4316C64.9598 22.0295 64.4515 22.5875 63.899 23.0998L63.7184 23.2644C63.9321 23.5088 64.1207 23.774 64.2815 24.056C64.9398 25.1788 65.2348 26.4777 65.1262 27.7748C65.0637 29.0497 64.6318 30.279 63.8831 31.3129C63.1645 32.2477 62.2461 33.01 61.195 33.5441C60.2717 34.0316 59.2946 34.4095 58.2837 34.6704C57.3238 34.9128 56.3442 35.0692 55.3565 35.1379C54.7562 35.191 54.1559 35.2335 53.5715 35.2707C52.503 35.314 51.4383 35.4258 50.384 35.6054C48.8748 35.9097 47.4033 36.3783 45.9959 37.0026C45.6028 37.1726 45.215 37.3479 44.8325 37.5338C44.094 38.166 43.2387 38.8354 42.2559 39.5154C40.4692 40.7482 38.5981 41.8542 36.6565 42.8251C36.1253 43.1013 35.525 43.3829 34.9193 43.6644L34.0003 44.0948L33.0175 44.5091C32.0665 44.8704 31.0625 45.2104 29.7875 45.5716V45.6141C29.6546 45.8957 29.5165 46.1826 29.3943 46.4801C29.1393 47.0698 28.895 47.6913 28.6718 48.3341C28.208 49.6498 27.8125 50.9885 27.4872 52.3451C26.885 54.9125 26.4888 57.5239 26.3025 60.1544C26.2684 60.7191 26.018 61.2488 25.6035 61.6337C25.189 62.0185 24.6421 62.2289 24.0765 62.221ZM24.0287 60.7123C24.2062 60.7211 24.3802 60.6607 24.514 60.5438C24.6478 60.4268 24.731 60.2625 24.7459 60.0854C24.936 57.3565 25.3446 54.6473 25.9678 51.9838C26.3078 50.5732 26.721 49.1812 27.2056 47.8135C27.4393 47.1441 27.6996 46.4907 27.9653 45.8691C28.0981 45.5557 28.2415 45.2476 28.385 44.9501L28.5656 44.5888L28.7143 44.2966L29.0278 44.2063C30.4196 43.7973 31.4715 43.4519 32.449 43.0748L33.3787 42.6816L34.2659 42.2832C34.8556 42.0123 35.424 41.7519 35.9553 41.4704C37.8565 40.5281 39.6886 39.4522 41.4378 38.251C42.3127 37.6437 43.1567 36.993 43.9665 36.3013L44.0462 36.2323L44.1365 36.1898C44.5668 35.9826 45.0025 35.786 45.4487 35.5948C46.9536 34.9297 48.5265 34.4309 50.1396 34.1073C51.2605 33.9149 52.3927 33.796 53.529 33.7513C54.1028 33.7141 54.6871 33.6769 55.2768 33.6238C56.1728 33.5619 57.0616 33.4215 57.9331 33.2041C58.8295 32.9725 59.696 32.6373 60.515 32.2054C61.3636 31.771 62.1057 31.1542 62.6878 30.3991C63.2626 29.6003 63.593 28.6516 63.6387 27.6685C63.7229 26.6822 63.5022 25.6938 63.0065 24.8369C62.7721 24.449 62.4612 24.1128 62.0928 23.8488L61.2959 23.2751L62.0503 22.6535C62.3106 22.441 62.5815 22.2126 62.8259 21.9788C63.3145 21.5251 63.7641 21.031 64.17 20.5019C64.5849 19.9434 64.9243 19.3325 65.1793 18.6851L65.2909 18.4726L65.3387 18.3823C65.5693 17.9257 65.7356 17.4394 65.8328 16.9373C65.9268 16.3846 65.9483 15.822 65.8965 15.2638C65.852 14.6649 65.7632 14.07 65.6309 13.4841C65.5618 13.1788 65.4767 12.8774 65.3759 12.581C65.275 12.2729 65.1634 11.9701 65.0518 11.6619C64.575 10.3781 63.9358 9.16049 63.15 8.03882C62.3116 6.79679 61.1852 5.77607 59.8668 5.06382C59.2018 4.70203 58.4978 4.41687 57.7684 4.21382C57.058 4.02163 56.3262 3.91989 55.5903 3.91101C54.2165 3.91084 52.8486 4.08942 51.5209 4.44226C50.8356 4.61226 50.1875 4.7982 49.5659 4.97351C48.9443 5.14882 48.5034 5.27632 47.9721 5.40382C46.9457 5.68206 45.8969 5.87048 44.8378 5.96695H44.6518H44.4925H44.4181C44.2162 5.94038 44.0143 5.9032 43.8125 5.8607C42.017 5.39122 40.2849 4.70624 38.654 3.8207L38.2981 3.64538C37.8359 3.42226 37.3684 3.19913 36.8797 2.98132C36.3943 2.77611 35.8977 2.59873 35.3922 2.45007C34.3526 2.12887 33.2856 1.90479 32.2046 1.7807C31.0854 1.64317 29.9551 1.62003 28.8312 1.71163C28.2461 1.75436 27.6652 1.84317 27.094 1.97726C26.8152 2.04322 26.5403 2.12481 26.2706 2.22163L26.1856 2.2482C25.9381 2.32283 25.6951 2.41152 25.4578 2.51382C24.3365 2.96721 23.3028 3.6126 22.4031 4.42101C21.6915 5.07992 21.0292 5.79016 20.4215 6.54601L19.954 7.07726C19.1956 8.01988 18.3002 8.84359 17.2978 9.52101C16.2342 10.1616 15.1181 10.7108 13.9615 11.1626L13.8765 11.1998C12.6977 11.6532 11.5719 12.2339 10.519 12.9316C9.97908 13.3107 9.49454 13.763 9.07934 14.2757C8.65896 14.7947 8.28728 15.3513 7.96903 15.9385C6.60903 18.3079 6.06184 21.0173 5.67403 23.5991C5.47215 24.9804 5.31278 26.3723 5.14278 27.7163L4.53715 32.8057C4.19715 35.5948 3.8784 38.5219 3.56496 41.6935C3.40028 43.2873 3.25153 44.881 3.10809 46.4748C2.72028 50.6132 2.35903 54.5179 1.79059 58.2366C1.78599 58.2577 1.78586 58.2794 1.79019 58.3005C1.79452 58.3216 1.80322 58.3416 1.81573 58.3591C1.82825 58.3766 1.84429 58.3913 1.86284 58.4022C1.88138 58.4132 1.90202 58.4201 1.9234 58.4226L9.96121 58.9166H10.0515C14.0465 59.6551 19.0084 60.2873 24.0181 60.7069L24.0287 60.7123Z",
				fill: "white"
			}), a.a.createElement("path", {
				opacity: "0.5",
				d: "M60.6689 67.7829C59.3729 67.8082 58.1043 67.409 57.0564 66.646C56.5109 66.2282 56.0433 65.7174 55.6752 65.1372C55.4308 64.76 55.2183 64.3882 55.0377 64.0747L54.8836 63.7985C54.6987 63.4549 54.4874 63.1263 54.2514 62.8157C54.0498 62.5698 53.8115 62.3566 53.5448 62.1835L53.3908 62.0772C53.0295 61.8344 52.69 61.5607 52.3761 61.2591C52.2281 61.1105 52.0896 60.9525 51.9617 60.7863L51.8873 60.6907C51.7864 60.5685 51.6855 60.4304 51.5898 60.2975L51.4995 60.1754L51.4464 60.1063C51.3422 60.2021 51.2429 60.3032 51.1489 60.4091C49.9918 61.7902 49.373 63.543 49.4064 65.3444C49.3999 65.7444 49.2572 66.1302 49.0018 66.4382C48.7465 66.7461 48.3938 66.9578 48.0019 67.0383C47.6101 67.1187 47.2025 67.0632 46.8465 66.8808C46.4904 66.6984 46.2072 66.4001 46.0436 66.035C45.6842 65.2167 45.4083 64.3641 45.2202 63.4904C45.0382 62.6605 44.9315 61.8159 44.9014 60.9669C43.7456 62.332 42.7985 63.8609 42.0911 65.5038C41.9437 65.8462 41.6889 66.1312 41.3652 66.3159C41.0414 66.5006 40.6663 66.5749 40.2966 66.5275C39.9269 66.48 39.5827 66.3135 39.3161 66.0531C39.0494 65.7927 38.8748 65.4526 38.8186 65.0841C38.4296 62.5593 38.5927 59.9801 39.2967 57.5244C39.5395 56.6631 39.8559 55.8241 40.2423 55.0169C40.7135 53.3184 41.5493 51.743 42.6914 50.4004C43.0842 49.9409 43.5123 49.5129 43.9717 49.12C44.434 48.7153 44.922 48.3409 45.4326 47.9991C46.5736 47.2327 47.8287 46.6517 49.1514 46.2779C50.1547 46.0035 51.1875 45.8518 52.2273 45.8263C51.9033 45.2738 51.4884 44.7799 51.0002 44.3654C50.0261 43.5553 48.9164 42.924 47.7223 42.5007C46.1911 42.006 44.5757 41.8253 42.973 41.9694C42.598 42.0281 42.2144 41.9511 41.8911 41.7522C41.5679 41.5533 41.3262 41.2455 41.2097 40.8843C41.0931 40.5231 41.1093 40.1321 41.2553 39.7818C41.4013 39.4315 41.6675 39.1447 42.0061 38.9732C43.707 37.9656 45.59 37.3034 47.5472 37.0244C49.5043 36.7455 51.4973 36.8553 53.412 37.3475C54.4476 37.6135 55.4507 37.993 56.403 38.4791C57.3613 38.9656 58.2735 39.5382 59.1283 40.1897C60.9056 41.5404 62.4032 43.2238 63.5377 45.1463C64.3333 46.5228 64.9679 47.9863 65.4289 49.5079C65.6255 50.1772 65.8061 50.8572 66.0027 51.6329C66.1762 52.3412 66.3409 53.0336 66.4967 53.71C66.842 55.2507 67.0811 56.616 67.2405 57.8857L67.4689 59.8672C67.5598 60.5721 67.6094 61.2816 67.6177 61.9922C67.6355 62.8397 67.4876 63.6825 67.182 64.4732C66.8056 65.4086 66.1037 66.1765 65.2058 66.6354C64.8863 66.8037 64.5563 66.951 64.2177 67.0763C63.9042 67.1985 63.5748 67.31 63.2455 67.4004C62.5838 67.5937 61.9036 67.7166 61.2161 67.7669C61.0319 67.7775 60.8495 67.7829 60.6689 67.7829ZM51.8395 57.9547L52.2752 58.5816C52.4292 58.8419 52.5727 59.0597 52.7161 59.2616L52.8064 59.3891C52.8861 59.4954 52.9605 59.6069 53.0508 59.7132L53.1411 59.83C53.2312 59.9494 53.3288 60.063 53.4333 60.17C53.687 60.4106 53.9607 60.6292 54.2514 60.8235L54.4108 60.935C54.7941 61.1897 55.1363 61.5014 55.4255 61.8594C55.7111 62.23 55.9669 62.6225 56.1905 63.0335L56.3498 63.315C56.5305 63.6391 56.7164 63.9685 56.9342 64.3032C57.2083 64.7397 57.5572 65.1246 57.9648 65.44C58.8758 66.0837 59.9903 66.3727 61.0992 66.2529C61.6824 66.2094 62.2594 66.1043 62.8205 65.9394C63.1073 65.8597 63.3889 65.7641 63.6652 65.6579C63.9528 65.5524 64.2332 65.4282 64.5045 65.286C65.0732 64.9909 65.5206 64.5059 65.7689 63.9154C66.0032 63.2946 66.1151 62.6343 66.0983 61.971C66.0896 61.3207 66.0435 60.6715 65.9602 60.0266L65.7317 58.0557C65.583 56.8444 65.3492 55.5269 65.0145 54.0288C64.8622 53.3523 64.7011 52.6706 64.5311 51.9835C64.3398 51.2025 64.1645 50.5438 63.9998 49.9063C63.5735 48.4998 62.9871 47.1468 62.252 45.8741C61.2177 44.1204 59.8518 42.5848 58.2305 41.3532C57.4473 40.7563 56.6116 40.2317 55.7336 39.786C54.888 39.3516 53.9972 39.0113 53.0773 38.7713C49.6066 37.8975 45.9316 38.4181 42.8401 40.2216C42.8174 40.2313 42.7981 40.2476 42.7848 40.2685C42.7715 40.2894 42.7649 40.3138 42.7658 40.3385C42.7664 40.3529 42.77 40.3671 42.7763 40.3801C42.7826 40.3931 42.7915 40.4047 42.8025 40.4141C42.8134 40.4236 42.8262 40.4307 42.84 40.435C42.8537 40.4394 42.8683 40.4409 42.8826 40.4394C44.6987 40.2831 46.5275 40.4964 48.2589 41.0663C49.6136 41.5508 50.8725 42.2701 51.9776 43.1913C52.7127 43.7938 53.3166 44.5405 53.752 45.3854C53.906 45.7015 54.0271 46.0326 54.1133 46.3735L54.3842 47.3882L53.3217 47.3191C50.8347 47.1427 48.3607 47.8089 46.2986 49.2104C45.838 49.5178 45.3979 49.855 44.9811 50.2197C44.5786 50.5634 44.2038 50.9382 43.8601 51.3407C42.8463 52.5319 42.108 53.9323 41.698 55.4419L41.6501 55.5694C41.2842 56.3207 40.9856 57.1029 40.7576 57.9069C40.1132 60.1501 39.9628 62.5063 40.3167 64.8132C40.3208 64.851 40.3347 64.8871 40.3571 64.9178C40.3795 64.9486 40.4095 64.9729 40.4442 64.9885C40.4957 65.0098 40.5535 65.0101 40.6052 64.9892C40.6568 64.9684 40.6982 64.928 40.7205 64.8769C41.5554 62.9541 42.6944 61.1783 44.0939 59.6175C44.4605 59.2085 44.843 58.8207 45.268 58.4222L46.8139 56.9719L46.527 59.0969C46.527 59.1394 46.527 59.1819 46.527 59.2244V59.2829C46.3044 61.3763 46.6265 63.4918 47.462 65.4241C47.4807 65.4714 47.5127 65.5122 47.5543 65.5414C47.5958 65.5707 47.645 65.5872 47.6958 65.5888C47.762 65.5888 47.8255 65.5625 47.8723 65.5157C47.9192 65.4688 47.9455 65.4053 47.9455 65.3391C47.9103 63.1656 48.6654 61.0532 50.0705 59.3944C50.3928 59.0467 50.7487 58.7318 51.133 58.4541L51.8395 57.9547Z",
				fill: "white"
			})), a.a.createElement("path", {
				d: "M66.0614 15.9394C65.1674 13.0745 63.7239 10.4111 61.8114 8.09819C60.0264 5.936 57.0301 4.30506 54.3739 4.33694C51.7176 4.36881 48.3389 5.93069 45.7676 6.05288C42.7342 6.18569 39.637 4.26256 36.8214 3.046C33.8995 1.81881 29.6283 1.40444 26.7861 2.2385C21.4417 3.83225 20.8945 7.551 17.4254 9.761C14.7161 11.5035 11.5233 11.9551 9.4992 14.2288C6.0142 18.1388 5.91326 24.041 4.97295 31.3988C3.48014 43.0279 3.0392 51.5863 1.94482 58.2694L24.0608 59.7994C24.2201 50.9701 25.7236 44.6748 31.6311 41.7369",
				fill: "#6FC437"
			}), a.a.createElement("path", {
				d: "M31.6255 41.7569C31.6574 41.826 31.243 42.0969 30.494 42.6282C29.4203 43.4202 28.4865 44.3863 27.7315 45.4863C26.5832 47.2611 25.8028 49.2482 25.4365 51.33C25.1826 52.6396 25.0052 53.9629 24.9052 55.2932C24.799 56.7116 24.7511 58.2203 24.7352 59.8141C24.7345 59.9034 24.7162 59.9917 24.6814 60.0739C24.6466 60.1562 24.5959 60.2307 24.5323 60.2934C24.4686 60.356 24.3933 60.4055 24.3105 60.4391C24.2278 60.4726 24.1392 60.4895 24.0499 60.4888H24.0021C17.7174 60.1435 10.2268 59.6972 1.8702 59.1713C1.75222 59.1638 1.63686 59.1332 1.53075 59.0811C1.42464 59.0289 1.32987 58.9564 1.25188 58.8675C1.17389 58.7787 1.11421 58.6753 1.07628 58.5633C1.03835 58.4513 1.0229 58.333 1.03083 58.215C1.03083 58.215 1.03083 58.1619 1.03083 58.1353C1.8277 53.0035 2.23145 47.436 2.81583 41.6188C3.09916 38.7111 3.42323 35.7432 3.78802 32.715L4.31927 28.1622C4.49458 26.6269 4.66458 25.0757 4.89833 23.4978C5.30739 20.8416 5.87052 18.0525 7.28895 15.5769C7.63715 14.9527 8.04265 14.3623 8.5002 13.8132C8.95968 13.2441 9.49607 12.7417 10.094 12.3203C11.2182 11.5751 12.4207 10.9551 13.6799 10.4716C14.7961 10.0322 15.873 9.49901 16.8993 8.87784C17.8359 8.23664 18.6736 7.46164 19.3855 6.57753C20.1599 5.60279 21.0013 4.68327 21.9036 3.82566C22.8578 2.96483 23.9543 2.27636 25.1443 1.79097C25.4344 1.68029 25.7306 1.58628 26.0315 1.50941C26.3256 1.40444 26.6253 1.31576 26.9293 1.24378C27.5283 1.10098 28.1375 1.00507 28.7515 0.956905C29.925 0.862861 31.1051 0.88778 32.2736 1.03128C33.405 1.15862 34.522 1.39161 35.6099 1.72722C36.1521 1.89272 36.6843 2.08962 37.2036 2.31691C37.6977 2.54003 38.1758 2.76316 38.6433 2.99159C40.508 3.89472 42.2558 4.7819 43.993 5.14847C44.828 5.33715 45.6904 5.37136 46.5377 5.2494C47.3988 5.12057 48.2519 4.9432 49.093 4.71816C50.7824 4.29847 52.424 3.79378 54.1505 3.73534C55.7567 3.73943 57.3338 4.16438 58.7246 4.96784C59.9212 5.62127 60.9916 6.48301 61.8855 7.51253C62.5955 8.37218 63.2384 9.28507 63.8086 10.2432C64.6045 11.5532 65.2462 12.9508 65.7211 14.4082C66.0346 15.4069 66.1143 15.9541 66.0558 15.97C65.9974 15.986 65.7743 15.4866 65.3439 14.5569C64.7229 13.2004 63.9871 11.8994 63.1446 10.6682C62.5431 9.78564 61.881 8.94601 61.163 8.15534C60.3072 7.25948 59.3024 6.51891 58.1933 5.96659C56.962 5.31067 55.5824 4.98315 54.1877 5.01566C52.5783 5.21055 50.9925 5.5665 49.4543 6.07815C48.5643 6.34301 47.6596 6.55587 46.7449 6.71566C45.7303 6.88416 44.6937 6.86796 43.6849 6.66784C41.6449 6.28003 39.7802 5.35566 37.9155 4.49503C37.448 4.27722 36.9858 4.06472 36.513 3.86816C36.0553 3.67683 35.5871 3.51187 35.1105 3.37409C34.1197 3.08571 33.1041 2.89008 32.0771 2.78972C31.0173 2.6823 29.9494 2.6823 28.8896 2.78972C28.3683 2.83628 27.8514 2.92331 27.3436 3.05003C27.0879 3.11341 26.836 3.19146 26.5893 3.28378C26.3341 3.36238 26.084 3.45641 25.8402 3.56534C24.851 3.97859 23.9413 4.56105 23.1521 5.28659C22.3201 6.09878 21.5445 6.96673 20.8305 7.88441C20.0036 8.92168 19.028 9.83108 17.9352 10.5832C16.819 11.2687 15.646 11.8571 14.429 12.3416C13.3109 12.7756 12.2423 13.3277 11.2415 13.9885C10.781 14.3122 10.3696 14.7005 10.0196 15.1413C9.64672 15.5917 9.31596 16.0754 9.03145 16.5863C7.83614 18.6688 7.28895 21.1975 6.90645 23.7953C6.68333 25.32 6.51333 26.8553 6.3327 28.3907C6.15208 29.926 5.96614 31.4666 5.80145 32.9594C5.41541 35.9663 5.07541 38.92 4.78145 41.8207C4.15458 47.6166 3.71895 53.1841 2.83177 58.4382L2.00302 57.3757C10.349 58.0078 17.8343 58.6028 24.103 59.1235L23.3752 59.7875C23.4336 58.1938 23.5293 56.6319 23.6886 55.1763C23.8397 53.803 24.0757 52.4404 24.3952 51.0963C24.8704 48.908 25.8048 46.8456 27.1365 45.0453C27.9933 43.9327 29.0623 43.001 30.2815 42.3041C30.6872 42.0315 31.1447 41.8452 31.6255 41.7569Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M40.6621 30.193C46.1817 29.6617 52.7267 28.4664 57.2955 25.7145C59.6277 24.3067 62.3211 22.7449 64.0689 20.402C65.2324 18.8083 66.1408 15.913 64.6002 15.2542C63.3252 14.723 60.4458 15.2224 58.8521 16.0299C54.6021 18.1867 48.8274 22.5802 42.3833 23.5099C39.573 23.9189 36.7255 23.4302 33.9205 22.9786C31.1155 22.527 27.9297 22.9095 25.1513 23.5099C21.4001 24.9733 17.0586 24.9389 17.0002 28.0414C16.9683 30.6605 21.2502 30.0708 24.1667 28.9127",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M24.1882 28.9123C24.1882 28.9708 23.9439 29.1673 23.3754 29.4436C22.5375 29.8133 21.6582 30.0808 20.7564 30.2405C20.0767 30.3537 19.3842 30.368 18.7004 30.283H18.4029L18.0948 30.198C17.8741 30.1329 17.6619 30.0419 17.4626 29.927C17.0017 29.6385 16.666 29.1871 16.5223 28.6626C16.4253 28.1332 16.4546 27.5883 16.6079 27.0723C16.7611 26.5563 17.2571 26.2749 17.6273 25.8842C18.362 25.0958 19.0701 24.9885 20.0476 24.5348C21.0606 24.0391 21.9192 23.7013 22.9994 23.3767C24.1644 23.0009 25.692 22.5998 26.9029 22.4205C29.4848 22.0805 32.0242 21.783 34.6804 22.1814C37.3367 22.5798 40.1735 22.9942 42.9201 22.4205C45.847 21.7755 48.6568 20.6824 51.2501 19.1798C52.6207 18.4361 53.9595 17.6445 55.2929 16.8689C55.9623 16.4811 56.6317 16.0933 57.3117 15.7214C57.6464 15.5301 58.0023 15.3548 58.3423 15.1901C58.7183 15.0004 59.107 14.8371 59.5057 14.7014C60.2695 14.4491 61.0559 14.2712 61.8539 14.1701C62.6821 14.0309 63.5278 14.0309 64.356 14.1701C64.6082 14.2224 64.8527 14.3063 65.0839 14.4198C65.2251 14.4938 65.3601 14.5791 65.4876 14.6748C65.6082 14.7825 65.7218 14.8979 65.8276 15.0201C66.1607 15.4639 66.3465 16.0008 66.3589 16.5555C66.3717 17.3865 66.2125 18.2113 65.8914 18.978C65.6119 19.6876 65.2404 20.3574 64.7864 20.9701C64.3555 21.5405 63.8775 22.0736 63.3573 22.5639C62.3866 23.4534 61.3335 24.2485 60.2123 24.9386C59.681 25.2733 59.1498 25.5867 58.6504 25.8842C58.1511 26.1817 57.6464 26.4739 57.1151 26.7555C56.1241 27.2826 55.096 27.7371 54.0392 28.1155C52.2463 28.7504 50.4059 29.2424 48.5354 29.587C46.8939 29.8951 45.4701 30.0705 44.2854 30.182C41.9532 30.3998 40.6623 30.3573 40.6464 30.2298C40.6304 30.1023 41.9001 29.8526 44.1685 29.4011C47.3558 28.823 50.4811 27.9443 53.5026 26.7767C54.4771 26.3799 55.4232 25.9167 56.3342 25.3901C56.7964 25.1245 57.2904 24.8111 57.7898 24.4976C58.2892 24.1842 58.7832 23.8655 59.2773 23.5308C60.293 22.8605 61.2445 22.0975 62.1195 21.2517C62.5568 20.8249 62.9584 20.363 63.3201 19.8705C63.664 19.3772 63.9425 18.8415 64.1489 18.2767C64.3599 17.7553 64.4664 17.1976 64.4623 16.6351C64.467 16.4759 64.4245 16.3187 64.3401 16.1836C64.3401 16.1836 64.3082 16.1836 64.3029 16.1517C64.2976 16.1198 64.2657 16.1517 64.2498 16.1251C64.158 16.0852 64.0617 16.0566 63.9629 16.0401C63.3558 15.9437 62.7372 15.9437 62.1301 16.0401C61.4612 16.137 60.8031 16.297 60.1645 16.5183C59.853 16.6263 59.5495 16.7559 59.2561 16.9061C58.932 17.0814 58.6079 17.2408 58.2839 17.4373C57.6357 17.7986 56.9823 18.1811 56.3182 18.5689C54.9954 19.3498 53.662 20.1626 52.217 20.9276C49.4471 22.5214 46.4418 23.6654 43.3132 24.317C41.7877 24.5977 40.2312 24.671 38.686 24.5348C37.1985 24.4233 35.7801 24.1948 34.436 23.9717C31.7214 23.5467 29.2192 23.1536 26.9029 23.3767C25.7786 23.5126 24.6666 23.7364 23.5773 24.0461C22.5643 24.309 21.5732 24.6501 20.6129 25.0661C19.7762 25.4064 19.0105 25.9001 18.3551 26.5217C18.2187 26.6567 18.0975 26.8064 17.9939 26.968L17.8451 27.1964L17.7495 27.4355C17.6329 27.7324 17.5909 28.0535 17.6273 28.3705C17.6819 28.6241 17.8274 28.8489 18.0364 29.0026C18.2902 29.1658 18.5736 29.2777 18.8704 29.332C19.4625 29.4402 20.0661 29.4706 20.6661 29.4223C21.5367 29.3475 22.4012 29.2125 23.2532 29.0186C23.8429 28.907 24.1617 28.8433 24.1882 28.9123Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M30.1169 6.61499C33.6922 6.80093 34.2766 9.57405 34.0535 11.2581C33.9279 12.1042 33.6207 12.9131 33.1531 13.6293C32.6854 14.3455 32.0683 14.952 31.3441 15.4072C30.6646 15.86 29.8815 16.1335 29.0678 16.2022C28.2541 16.271 27.4363 16.1327 26.6904 15.8003C24.7407 14.8016 24.1138 12.1612 25.0276 10.2222C25.9413 8.28312 28.0557 7.03468 30.2285 6.67874",
				fill: "#FFE100"
			}), a.a.createElement("path", {
				d: "M30.2234 6.70437C30.2234 6.84781 29.8568 7.02844 29.2034 7.35781C28.3079 7.78652 27.4922 8.36505 26.7915 9.06844C26.3496 9.52813 26.0013 10.0694 25.7662 10.6622C25.5259 11.303 25.4635 11.9969 25.5856 12.6703C25.6967 13.3812 26.0405 14.0351 26.5631 14.5297C27.1303 15.0238 27.8679 15.2773 28.619 15.2363C29.4212 15.1929 30.2 14.9507 30.8853 14.5315C31.5706 14.1123 32.1409 13.5294 32.5449 12.835C32.9181 12.2251 33.1554 11.542 33.2409 10.8322C33.3093 10.2247 33.2422 9.60964 33.0443 9.03125C32.8745 8.611 32.6213 8.22954 32.2998 7.90996C31.9784 7.59037 31.5955 7.33928 31.1743 7.17188L30.7334 6.98594C30.6006 6.93281 30.489 6.89562 30.3934 6.85312C30.2074 6.76812 30.1065 6.68844 30.1118 6.61938C30.1171 6.55031 30.2234 6.49188 30.4359 6.44938C30.5597 6.41572 30.6857 6.39086 30.8131 6.375C30.9689 6.375 31.146 6.375 31.3443 6.375C31.862 6.43362 32.3626 6.59625 32.8159 6.85312C33.4476 7.21722 33.9647 7.75091 34.3087 8.39375C34.707 9.1685 34.906 10.0303 34.8878 10.9013C34.8642 11.8885 34.6094 12.8565 34.144 13.7275C33.6405 14.691 32.9115 15.5185 32.019 16.1394C31.0401 16.8273 29.8836 17.2183 28.6881 17.2656C28.0543 17.2918 27.4217 17.1916 26.827 16.9709C26.2323 16.7502 25.6875 16.4133 25.2243 15.98C24.3918 15.1629 23.8712 14.0804 23.7528 12.92C23.6314 11.9062 23.8048 10.8788 24.2521 9.96094C24.6371 9.20405 25.1807 8.53905 25.8459 8.01125C26.7532 7.2829 27.8325 6.79995 28.9803 6.60875C29.7506 6.49187 30.2021 6.57156 30.2234 6.70437Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M30.8976 6.72683C31.1579 6.66308 31.5298 7.04558 31.7423 7.78933C31.9784 8.79378 31.8949 9.84689 31.5032 10.8015C31.2935 11.3272 31.0051 11.818 30.6479 12.2571C30.3463 12.6165 29.9873 12.9235 29.5854 13.1656C28.8948 13.5746 28.3636 13.58 28.2201 13.3515C28.0767 13.1231 28.2839 12.6928 28.5814 12.1456C28.9746 11.4865 29.3225 10.8013 29.6226 10.095C29.8963 9.36535 30.1269 8.62032 30.3132 7.86371C30.4726 7.23683 30.6161 6.79058 30.8976 6.72683Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M41.5334 9.92461C41.4803 10.1849 40.4178 10.254 38.8028 9.79711C37.8882 9.51813 36.9937 9.17735 36.1253 8.77711C35.1627 8.31315 34.1598 7.93795 33.1291 7.65617C32.1244 7.42754 31.0907 7.35409 30.0638 7.43836C29.2286 7.52398 28.4086 7.7205 27.6253 8.02273C26.2494 8.55398 25.4578 9.14898 25.2347 8.93648C25.1391 8.84617 25.2028 8.56461 25.4738 8.16086C25.8736 7.59955 26.3788 7.12139 26.9613 6.75305C27.8287 6.18636 28.8003 5.79808 29.8194 5.61086C31.0702 5.37841 32.3551 5.4019 33.5966 5.67992C34.7826 5.99304 35.9183 6.47237 36.97 7.10367L39.3713 8.46367C40.6941 9.21804 41.5972 9.63773 41.5334 9.92461Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M16.3469 27.1684C15.1834 31.5194 19.8691 30.6906 21.0909 30.3559C23.1767 29.6804 25.2069 28.8438 27.1631 27.8538C31.8594 25.6491 37.1719 27.8909 42.2559 28.2097C46.1712 28.4541 51.2234 27.5031 54.7031 25.4791C55.7226 24.8009 56.8041 24.221 57.9331 23.7472C59.0753 23.3488 60.9241 23.3169 61.9387 24.0235C63.575 25.1656 63.8087 27.9388 62.7941 29.7716C61.7794 31.6044 59.3409 32.6138 57.4497 33.0547C55.5584 33.4956 52.5303 33.4691 50.6178 33.7825C46.4581 34.4625 42.6491 36.7044 38.8825 38.7763C35.1159 40.8481 31.1369 42.8191 26.9294 42.8988C22.7219 42.9784 18.2116 40.6994 16.5966 36.3644",
				fill: "#6FC437"
			}), a.a.createElement("path", {
				d: "M16.5962 36.3647C16.6706 36.3382 16.8566 36.6729 17.2284 37.2732C17.7658 38.1426 18.4322 38.9254 19.2047 39.5947C19.7596 40.068 20.3591 40.4861 20.995 40.8432C21.7502 41.2551 22.5483 41.5829 23.375 41.8207C24.3242 42.0909 25.3048 42.2355 26.2916 42.251C27.4037 42.2551 28.5125 42.1303 29.5959 41.8791C32.1194 41.2339 34.543 40.2473 36.7997 38.9466C39.3072 37.6079 41.9263 35.9504 44.965 34.5797C46.5396 33.8536 48.1893 33.3031 49.8844 32.9382C51.6272 32.6706 53.3827 32.4933 55.1438 32.4069C55.9739 32.3443 56.7969 32.2092 57.6034 32.0032C58.4019 31.7924 59.1737 31.4912 59.9038 31.1054C60.5918 30.7561 61.1954 30.2612 61.6728 29.655C62.1005 29.05 62.344 28.3341 62.3741 27.5938C62.4391 26.8671 62.2836 26.1376 61.9278 25.5007C61.7735 25.2369 61.5631 25.0102 61.3116 24.8366C61.035 24.6788 60.7298 24.5776 60.4138 24.5391C59.6799 24.4319 58.9313 24.4937 58.225 24.7197C57.4612 25.0208 56.7297 25.3982 56.0416 25.846C55.2653 26.3294 54.4578 26.7607 53.6244 27.1369C52.8035 27.4992 51.9607 27.8097 51.1009 28.0666C49.4514 28.5604 47.7575 28.8913 46.0434 29.0547C44.4089 29.2203 42.7612 29.2079 41.1294 29.0175C39.5356 28.8263 38.08 28.5288 36.6722 28.2738C35.3402 28.0081 33.9938 27.8201 32.64 27.7107C31.4336 27.6159 30.2199 27.7001 29.0381 27.9604C28.7672 28.04 28.5069 28.1038 28.2253 28.1888L27.4603 28.481L25.8984 29.1663C24.8784 29.6125 23.9009 30.0057 22.9606 30.335C22.0782 30.665 21.1627 30.8983 20.23 31.031C19.4208 31.1435 18.5977 31.1056 17.8022 30.9194C17.4568 30.8459 17.1313 30.6986 16.848 30.4877C16.5647 30.2769 16.3302 30.0073 16.1606 29.6975C16.0412 29.4467 15.9657 29.1771 15.9375 28.9007C15.9375 28.7785 15.9375 28.6616 15.9375 28.5554L15.9747 28.2525C16.0038 27.969 16.0755 27.6914 16.1872 27.4291C16.258 27.252 16.3094 27.167 16.3413 27.1741C16.3731 27.1741 16.3891 27.2857 16.3891 27.4716C16.3709 27.7369 16.3709 28.0032 16.3891 28.2685V28.5394C16.3891 28.6297 16.4316 28.7254 16.4528 28.821C16.4983 29.0281 16.5753 29.227 16.6812 29.4107C16.8327 29.6195 17.0263 29.7941 17.2497 29.9232C17.473 30.0522 17.721 30.1328 17.9775 30.1597C18.6848 30.2584 19.4038 30.2332 20.1025 30.0854C20.9525 29.9041 21.782 29.6371 22.5781 29.2885C23.46 28.9219 24.395 28.4916 25.3725 28.0082L26.8919 27.2485L27.7631 26.8713C28.0659 26.7597 28.3741 26.6694 28.6875 26.5685C30.0025 26.2244 31.3619 26.0811 32.7197 26.1435C34.1446 26.2123 35.5639 26.3684 36.9697 26.611C38.4041 26.8341 39.8544 27.0944 41.3366 27.2379C42.8462 27.3836 44.3672 27.3676 45.8734 27.19C47.4612 27.0144 49.0284 26.687 50.5538 26.2125C51.334 25.9712 52.0987 25.682 52.8434 25.3466C53.5987 24.9951 54.3299 24.5941 55.0322 24.146C55.8266 23.6269 56.6721 23.1908 57.5556 22.8444C58.5801 22.4962 59.6729 22.3978 60.7431 22.5575C61.3352 22.6353 61.9048 22.8342 62.4166 23.1419C62.922 23.4764 63.3466 23.9192 63.6597 24.4382C64.2328 25.4266 64.4904 26.5665 64.3981 27.7054C64.344 28.834 63.9639 29.9227 63.3038 30.8397C62.6476 31.6843 61.8132 32.3736 60.86 32.8585C59.9903 33.3172 59.0704 33.6737 58.1188 33.921C57.2003 34.1502 56.2635 34.2977 55.3191 34.3619C53.5234 34.5266 51.7916 34.5319 50.2563 34.8347C48.6967 35.1505 47.1756 35.6331 45.7194 36.2744C42.8241 37.5229 40.1891 39.106 37.5806 40.4235C35.165 41.7338 32.5747 42.6926 29.8881 43.271C28.6882 43.5036 27.4646 43.591 26.2438 43.5313C24.1971 43.4083 22.2153 42.7666 20.485 41.6666C19.8217 41.2309 19.2072 40.7251 18.6522 40.1579C17.8852 39.3815 17.2771 38.463 16.8619 37.4538C16.5962 36.7738 16.5378 36.386 16.5962 36.3647Z",
				fill: "black"
			}), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M15.9056 56.1432C15.9322 56.0423 16.66 56.2016 18.0306 56.2973C19.9614 56.4358 21.9006 56.1994 23.7416 55.6013V56.6054C21.675 56.106 19.2419 55.5004 16.5006 54.8098C16.3366 54.7683 16.1933 54.6685 16.0975 54.5291C16.0018 54.3896 15.9601 54.22 15.9802 54.052C16.0004 53.8841 16.0811 53.7292 16.2072 53.6164C16.3333 53.5036 16.4962 53.4406 16.6653 53.4391L24.3844 53.3807L24.2038 54.9745L16.15 53.3435C15.9098 53.3203 15.6886 53.2025 15.5352 53.0162C15.3818 52.8299 15.3086 52.5903 15.3319 52.3501C15.3551 52.1099 15.4729 51.8887 15.6592 51.7353C15.8455 51.5818 16.0851 51.5087 16.3253 51.532H24.5703L24.2516 53.4126L15.7091 50.496C15.474 50.4083 15.2803 50.2357 15.1661 50.0122C15.0519 49.7887 15.0256 49.5306 15.0922 49.2887C15.1589 49.0468 15.3137 48.8386 15.5262 48.7051C15.7387 48.5716 15.9935 48.5226 16.2403 48.5676C18.6243 49.1407 21.1091 49.1498 23.4972 48.5941C23.8691 48.5091 24.2356 48.4082 24.5969 48.2966L24.7085 50.257C21.5321 49.6143 18.5436 48.2573 15.9694 46.2885C15.7461 46.1476 15.5879 45.9238 15.5296 45.6662C15.4713 45.4087 15.5177 45.1386 15.6586 44.9152C15.7995 44.6919 16.0233 44.5337 16.2809 44.4754C16.5384 44.4172 16.8086 44.4636 17.0319 44.6045C19.6027 45.9258 22.5624 46.2802 25.3725 45.6032L25.4681 47.4626C21.9273 46.9125 18.653 45.2512 16.1181 42.7185C15.9739 42.5722 15.8867 42.3791 15.8724 42.1741C15.8581 41.9691 15.9176 41.7658 16.0402 41.6009C16.1627 41.4359 16.3403 41.3203 16.5407 41.2749C16.7411 41.2295 16.9511 41.2573 17.1328 41.3532C20.4843 43.127 24.3187 43.7716 28.066 43.1913L28.2147 44.5513C26.3054 44.5726 24.4142 44.1794 22.6716 43.3989C20.9289 42.6183 19.3764 41.4691 18.121 40.0304C16.3997 37.9904 16.081 36.5029 16.1606 36.487C16.2403 36.471 16.8725 37.7513 18.6628 39.5151C19.7495 40.5677 21.0069 41.4281 22.3816 42.0598C24.1869 42.8963 26.1693 43.2793 28.1563 43.1754C28.3281 43.1674 28.4966 43.2244 28.6284 43.3349C28.7602 43.4454 28.8456 43.6014 28.8677 43.772C28.8898 43.9426 28.8469 44.1152 28.7476 44.2557C28.6483 44.3961 28.4998 44.4941 28.3316 44.5301C24.2582 45.3238 20.0364 44.7407 16.3306 42.8726L17.3347 41.4966C19.6443 43.7046 22.5867 45.1349 25.7497 45.5873C25.9635 45.6218 26.1591 45.7283 26.3042 45.8891C26.4492 46.0499 26.535 46.2554 26.5474 46.4716C26.5598 46.6878 26.498 46.9018 26.3723 47.0781C26.2466 47.2545 26.0644 47.3826 25.856 47.4413C22.5937 48.2777 19.1387 47.9001 16.1341 46.3788L17.1966 44.6895C19.5492 46.4691 22.2731 47.6949 25.1653 48.2754C25.3887 48.3155 25.592 48.4297 25.7425 48.5995C25.8929 48.7694 25.9818 48.985 25.9947 49.2115C26.0076 49.4381 25.9437 49.6624 25.8135 49.8482C25.6833 50.034 25.4942 50.1705 25.2769 50.2357C24.8678 50.3579 24.4588 50.4695 24.0444 50.5704C21.353 51.1955 18.5524 51.1791 15.8685 50.5226L16.3997 48.5995L24.9369 51.5745C25.1503 51.6522 25.3295 51.8026 25.4431 51.9993C25.5567 52.196 25.5975 52.4264 25.5582 52.6502C25.5189 52.8739 25.4021 53.0766 25.2282 53.2228C25.0544 53.369 24.8347 53.4494 24.6075 53.4498L16.3625 53.3595L16.5591 51.5638L24.5863 53.3966C24.7668 53.4559 24.9211 53.5761 25.0227 53.7367C25.1243 53.8973 25.1667 54.0883 25.1429 54.2768C25.119 54.4653 25.0302 54.6397 24.8918 54.7699C24.7534 54.9001 24.574 54.978 24.3844 54.9904L16.6706 54.8045L16.8619 53.4338C19.5766 54.2307 21.9778 54.9479 24.0125 55.5588H24.0444C24.1452 55.5971 24.232 55.6651 24.2932 55.7538C24.3544 55.8425 24.3872 55.9478 24.3872 56.0556C24.3872 56.1634 24.3544 56.2686 24.2932 56.3573C24.232 56.446 24.1452 56.514 24.0444 56.5523C22.0621 57.0867 19.985 57.1684 17.9669 56.7913C16.5538 56.5629 15.8791 56.2229 15.9056 56.1432Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M49.2576 33.4109C49.2895 33.5065 48.3438 33.9421 46.4526 34.16C45.2942 34.2589 44.1279 34.2053 42.9835 34.0006C41.4356 33.7344 39.9444 33.2062 38.5741 32.4387L39.5145 31.6684C39.8429 32.4763 40.396 33.1732 41.1082 33.6765C41.8809 34.2352 42.8109 34.5347 43.7645 34.5318C43.952 34.5325 44.133 34.6007 44.2744 34.7239C44.4158 34.8471 44.5082 35.017 44.5346 35.2027C44.561 35.3884 44.5198 35.5773 44.4184 35.7351C44.3169 35.8928 44.1621 36.0088 43.9823 36.0618C41.9311 36.6168 39.7691 36.615 37.7188 36.0565C35.4533 35.4519 33.4122 34.2025 31.8432 32.46L33.4688 31.7481C33.6742 33.1589 34.3636 34.4544 35.419 35.4129C36.4744 36.3714 37.8301 36.9332 39.2541 37.0021C39.5029 37.004 39.7421 37.0987 39.9247 37.2676C40.1074 37.4366 40.2204 37.6676 40.2417 37.9155C40.263 38.1634 40.1909 38.4103 40.0397 38.6079C39.8885 38.8054 39.669 38.9395 39.4241 38.9837C36.6893 39.444 33.8798 38.9167 31.4979 37.4962C29.5513 36.3645 27.9766 34.6901 26.9663 32.6778L28.8682 32.3059C28.8229 33.9808 29.3879 35.615 30.4581 36.9042C31.5284 38.1933 33.0308 39.0495 34.6854 39.3131C34.9012 39.3677 35.0907 39.4972 35.22 39.6784C35.3494 39.8596 35.4102 40.0809 35.3917 40.3027C35.3732 40.5246 35.2766 40.7327 35.1191 40.89C34.9615 41.0474 34.7532 41.1437 34.5313 41.1618C29.6802 40.9632 25.0459 39.0982 21.4095 35.8812L22.6154 35.0631C23.1301 36.7477 24.165 38.2262 25.5717 39.2865C26.9784 40.3467 28.6847 40.9344 30.446 40.9653C31.4366 40.9885 32.4251 40.8631 33.3785 40.5934C34.0426 40.4075 34.3932 40.2746 34.441 40.349C34.4888 40.4234 34.1913 40.6678 33.5432 40.9971C32.5824 41.4638 31.5389 41.7364 30.4726 41.7993C28.7433 41.9263 27.0146 41.544 25.5001 40.6996C23.473 39.5681 21.9307 37.7329 21.1651 35.5412C21.1104 35.3879 21.1075 35.2208 21.1569 35.0656C21.2063 34.9105 21.3052 34.7758 21.4385 34.6823C21.5718 34.5889 21.7321 34.5417 21.8948 34.5481C22.0575 34.5545 22.2136 34.6141 22.3391 34.7178H22.3657C25.8186 37.5513 30.1191 39.15 34.5845 39.2599L34.457 41.1299C32.3117 40.8323 30.3519 39.7529 28.9538 38.0989C27.5556 36.4448 26.8176 34.3326 26.8813 32.1678C26.8961 31.9485 26.9825 31.7402 27.1271 31.5747C27.2717 31.4092 27.4667 31.2958 27.682 31.2518C27.8973 31.2077 28.1211 31.2356 28.319 31.331C28.517 31.4264 28.6782 31.5841 28.7779 31.78C29.6236 33.4296 30.9254 34.8015 32.5285 35.7325C34.4951 36.9066 36.8105 37.3558 39.0735 37.0021L39.2382 38.9837C37.3357 38.9005 35.5245 38.1446 34.1274 36.8506C32.7303 35.5566 31.838 33.8086 31.6095 31.9181C31.5927 31.7204 31.6389 31.5225 31.7415 31.3527C31.844 31.1829 31.9977 31.0498 32.1804 30.9726C32.3631 30.8954 32.5656 30.8779 32.7589 30.9228C32.9521 30.9676 33.1262 31.0724 33.2563 31.2221C34.5188 32.6497 36.1403 33.7135 37.9526 34.3029C39.7649 34.8924 41.7019 34.9861 43.5626 34.5743L43.7538 36.115C42.481 36.0776 41.2538 35.6325 40.2529 34.8453C39.347 34.1481 38.6654 33.2006 38.2926 32.12V32.0934C38.2495 31.9688 38.2461 31.8339 38.2828 31.7072C38.3196 31.5806 38.3947 31.4685 38.4978 31.3863C38.601 31.3041 38.727 31.256 38.8587 31.2485C38.9903 31.241 39.1211 31.2744 39.2329 31.3443C40.4533 32.1095 41.7874 32.6762 43.1854 33.0231C44.2447 33.2852 45.3297 33.4295 46.4207 33.4534C48.227 33.4693 49.2257 33.2728 49.2576 33.4109Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M60.5631 23.7427C60.5631 23.6524 60.9456 23.6046 61.429 23.9711C61.7639 24.2552 62.0232 24.6179 62.1836 25.0268C62.344 25.4356 62.4005 25.8779 62.3481 26.3139C62.2524 27.5146 61.2856 28.7152 59.9202 29.3155C58.5549 29.9158 56.8974 29.9211 55.3887 29.8467L55.9731 28.0724C57.1635 28.7524 58.5499 29.0072 59.9043 28.7949C60.7699 28.6681 61.5959 28.3485 62.3215 27.8599H62.3534C62.5116 27.7504 62.6985 27.6897 62.8909 27.6855C63.0832 27.6812 63.2726 27.7336 63.4356 27.8359C63.5985 27.9383 63.7278 28.0863 63.8074 28.2615C63.887 28.4367 63.9134 28.6314 63.8834 28.8214C63.7869 29.3568 63.5845 29.8676 63.2881 30.3237C62.9916 30.7799 62.607 31.1722 62.1568 31.4777C61.7608 31.7608 61.3236 31.9812 60.8606 32.1311C60.4399 32.2674 60.005 32.3548 59.5643 32.3914C58.8034 32.4487 58.0382 32.4005 57.2906 32.248C56.6732 32.1277 56.0658 31.9607 55.4737 31.7486C53.3487 30.9517 52.3234 29.9742 52.4456 29.7936C52.5677 29.613 53.7737 30.1124 55.819 30.5108C56.9795 30.76 58.1732 30.8157 59.3518 30.6755C59.9645 30.5886 60.5445 30.3452 61.0359 29.9689C61.5085 29.6212 61.8268 29.1028 61.9231 28.5239L63.4849 29.4642C62.5166 30.1633 61.3941 30.6188 60.2124 30.7924C58.3863 31.078 56.5186 30.6889 54.9584 29.698H54.9212C54.7438 29.5799 54.6109 29.4059 54.5437 29.2036C54.4765 29.0014 54.4788 28.7824 54.5502 28.5816C54.6216 28.3808 54.758 28.2096 54.9379 28.0952C55.1177 27.9808 55.3306 27.9298 55.5427 27.9502C57.0462 28.1149 58.3265 28.1786 59.3146 27.8333C59.7356 27.7196 60.1237 27.5077 60.4469 27.215C60.7702 26.9222 61.0193 26.557 61.174 26.1492C61.2537 25.8645 61.2764 25.5668 61.2409 25.2733C61.2053 24.9797 61.1122 24.6961 60.9668 24.4386C60.7649 24.0242 60.5312 23.8596 60.5631 23.7427Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M40.0247 15.3553C39.844 15.3606 39.844 14.3459 39.2065 12.7999C38.8191 11.8681 38.2807 11.0065 37.6128 10.2499C36.7769 9.2701 35.721 8.50189 34.5315 8.00807L35.4028 6.83932C36.6817 8.3338 37.5026 10.1654 37.7668 12.1146C38.0973 14.3746 37.6794 16.6806 36.5768 18.6809L34.9406 17.6503C35.6649 16.5473 36.0896 15.2749 36.1731 13.9581C36.2556 12.5818 35.954 11.2097 35.3018 9.99494C34.9259 9.2886 34.4399 8.64661 33.8622 8.09307L35.4187 6.83932C36.1252 8.00669 36.5313 9.33095 36.6007 10.6937C36.6701 12.0564 36.4007 13.4151 35.8165 14.6482C35.2323 15.8813 34.3516 16.9504 33.2531 17.7598C32.1546 18.5692 30.8726 19.0938 29.5218 19.2865H29.49C29.2939 19.304 29.098 19.252 28.9363 19.1396C28.7747 19.0272 28.6578 18.8616 28.6059 18.6717C28.554 18.4819 28.5705 18.2798 28.6524 18.1009C28.7344 17.9219 28.8767 17.7775 29.0543 17.6928C30.6463 17.0222 31.9917 15.8754 32.9059 14.4096C33.6102 13.264 34.0326 11.9677 34.1384 10.6271C34.2044 9.73943 34.158 8.84695 34.0003 7.97088C33.8993 7.35463 33.8303 7.01463 33.9153 6.97745C34.0003 6.94026 34.2181 7.22182 34.489 7.82745C34.8665 8.71431 35.0755 9.66374 35.1053 10.6271C35.1566 12.1756 34.8013 13.7106 34.0747 15.079C33.1075 16.8959 31.5771 18.3499 29.7131 19.2228L29.2456 17.629C30.2238 17.438 31.1474 17.032 31.9495 16.4403C32.7516 15.8486 33.4122 15.086 33.8834 14.2078C34.3808 13.2216 34.622 12.1262 34.5849 11.0223C34.5477 9.91845 34.2334 8.84169 33.6709 7.8912C33.5465 7.6823 33.5017 7.43553 33.5448 7.19626C33.5878 6.95698 33.7157 6.74126 33.905 6.58876C34.0944 6.43626 34.3324 6.35722 34.5753 6.36616C34.8183 6.37511 35.0499 6.47144 35.2275 6.63745C35.9671 7.33144 36.5897 8.14054 37.0709 9.03338C37.8952 10.5833 38.2636 12.335 38.1334 14.0856C38.0122 15.7483 37.4512 17.3489 36.5078 18.7234C36.3669 18.9397 36.1458 19.0911 35.8933 19.1444C35.6407 19.1977 35.3773 19.1485 35.1611 19.0076C34.9448 18.8667 34.7933 18.6457 34.74 18.3931C34.6867 18.1405 34.7359 17.8772 34.8768 17.6609C35.7409 16.1231 36.1392 14.3673 36.0232 12.6072C35.9072 10.8471 35.2819 9.15878 34.2234 7.74776L34.1915 7.70526C34.0908 7.57321 34.0372 7.41125 34.0393 7.24521C34.0413 7.07916 34.0988 6.91857 34.2027 6.78901C34.3066 6.65946 34.4509 6.5684 34.6125 6.53034C34.7741 6.49228 34.9439 6.50942 35.0947 6.57901C36.4742 7.22799 37.6661 8.21697 38.5584 9.45307C39.2257 10.3634 39.7126 11.3931 39.9928 12.4865C40.4337 14.3459 40.1362 15.3712 40.0247 15.3553Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M53.1677 6.63077C53.1252 6.5139 53.8318 6.09952 55.2927 5.89234C56.1786 5.79214 57.0746 5.82978 57.9489 6.0039C59.1332 6.2359 60.2598 6.69992 61.2639 7.36921C61.4041 7.46442 61.5067 7.60555 61.5539 7.76827C61.6012 7.93099 61.5902 8.1051 61.5228 8.26059C61.4555 8.41607 61.336 8.54318 61.185 8.62C61.0339 8.69682 60.8608 8.71853 60.6955 8.6814H60.6317C59.5297 8.427 58.3818 8.4489 57.2902 8.74515C56.0696 9.0716 54.9651 9.73426 54.1027 10.6576L52.9127 9.20202C54.2865 8.31694 55.8747 7.8212 57.508 7.76765C59.2396 7.7375 60.9488 8.16251 62.4646 9.00015C62.6576 9.10657 62.8108 9.27296 62.9009 9.47417C62.9909 9.67538 63.013 9.90045 62.9638 10.1153C62.9146 10.3302 62.7967 10.5232 62.6281 10.6652C62.4594 10.8071 62.2491 10.8903 62.0289 10.902H61.9971L61.2533 10.9339C59.3054 11.069 57.4233 11.694 55.7814 12.7508C54.3007 13.7231 53.035 14.9888 52.0627 16.4695L50.6336 15.407C52.0227 13.9334 53.7388 12.807 55.6433 12.1186C57.0915 11.5828 58.6255 11.3163 60.1696 11.3323C62.7408 11.3855 64.0742 12.1239 64.0158 12.2673C63.9627 12.4958 62.5655 12.1398 60.2227 12.3948C58.8329 12.549 57.4759 12.92 56.2011 13.4945C54.5737 14.2088 53.1229 15.2715 51.9511 16.6076C51.8028 16.7769 51.5962 16.8843 51.3724 16.9085C51.1487 16.9326 50.924 16.8719 50.7429 16.7382C50.5618 16.6046 50.4375 16.4078 50.3946 16.1868C50.3517 15.9658 50.3934 15.7368 50.5114 15.5451C51.5705 13.7663 53.0068 12.2412 54.7189 11.0773C56.6201 9.81518 58.8172 9.06999 61.0939 8.91515L61.9652 8.87796L61.4924 10.7798C60.2871 10.0943 58.9264 9.72857 57.5399 9.71734C56.2508 9.74296 54.9916 10.1096 53.8902 10.7798H53.8583C53.6629 10.8955 53.432 10.9361 53.2088 10.894C52.9856 10.8519 52.7854 10.73 52.6455 10.5511C52.5056 10.3722 52.4356 10.1484 52.4486 9.92169C52.4616 9.69493 52.5567 9.48066 52.7161 9.3189C53.857 8.16683 55.3106 7.37447 56.8971 7.03984C58.2706 6.73971 59.6986 6.80195 61.0408 7.22046L60.4086 8.52202C58.934 7.40477 57.1565 6.75858 55.3086 6.66796C53.9805 6.63609 53.2102 6.79015 53.1677 6.63077Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M12.0118 17.4526C11.8683 17.4101 11.9746 16.353 12.7927 14.6848C13.9874 12.3457 15.8321 10.4014 18.1052 9.08545C18.2714 8.9849 18.4679 8.94637 18.6598 8.97668C18.8517 9.00698 19.0267 9.10417 19.1539 9.25105C19.2811 9.39793 19.3522 9.58505 19.3547 9.77932C19.3573 9.97359 19.291 10.1625 19.1677 10.3126L19.1305 10.3551C17.6679 12.1595 16.8624 14.4075 16.8461 16.7301L14.8752 16.5389C15.4115 13.1328 16.9269 9.95615 19.2368 7.39608C19.3903 7.17839 19.6241 7.03063 19.8866 6.9853C20.1491 6.93997 20.4189 7.00078 20.6366 7.15436C20.8543 7.30793 21.0021 7.5417 21.0474 7.80422C21.0927 8.06674 21.0319 8.33652 20.8783 8.5542C19.6049 10.865 19.1446 13.5367 19.5715 16.1405L17.813 16.3264C17.8123 13.1603 18.6717 10.0534 20.2993 7.33764C21.4946 5.40389 22.5199 4.57514 22.6474 4.68139C22.7749 4.78764 22.0896 5.84483 21.2502 7.82108C20.0689 10.4829 19.5094 13.3789 19.614 16.2892C19.6172 16.5069 19.5404 16.7181 19.398 16.8828C19.2556 17.0475 19.0577 17.1541 18.8418 17.1823C18.626 17.2105 18.4073 17.1584 18.2274 17.0358C18.0475 16.9133 17.9189 16.7288 17.8661 16.5176V16.4805C17.2198 13.4588 17.6659 10.3058 19.1252 7.58201L20.7508 8.73483C18.7241 11.0332 17.3646 13.8421 16.8196 16.8576V16.8842C16.7871 17.1368 16.6574 17.3668 16.4579 17.5251C16.2585 17.6835 16.0051 17.7578 15.7517 17.7322C15.4984 17.7066 15.265 17.5831 15.1013 17.388C14.9376 17.1929 14.8564 16.9416 14.8752 16.6876C14.948 13.93 16.0095 11.2904 17.8661 9.25014L18.8861 10.5198C16.7786 11.6163 14.9671 13.2055 13.6055 15.1523C12.6068 16.5814 12.219 17.5323 12.0118 17.4526Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M48.6468 10.7373C48.5512 10.8436 48.2537 10.7373 47.8181 10.5089C47.5835 10.3898 47.3356 10.2989 47.0796 10.2379C46.8292 10.1815 46.5671 10.2115 46.3359 10.3229C46.2563 10.366 46.1943 10.4355 46.1606 10.5195C46.1021 10.6258 46.0225 10.8329 45.8737 11.1304C45.7765 11.3261 45.6492 11.5054 45.4965 11.6617C45.2541 11.903 44.9364 12.0541 44.5962 12.0899C44.256 12.1256 43.9138 12.0439 43.6265 11.8583C43.405 11.7189 43.2121 11.5386 43.0581 11.327C42.9376 11.1599 42.8327 10.982 42.7446 10.7958C42.7021 10.7054 42.665 10.6151 42.6331 10.5301C42.6128 10.4758 42.5898 10.4226 42.564 10.3708C42.5218 10.2741 42.4624 10.1859 42.3887 10.1104C42.4404 10.1381 42.4971 10.1552 42.5555 10.1606C42.6139 10.1661 42.6728 10.1599 42.7287 10.1423C42.8202 10.1125 42.8988 10.0526 42.9518 9.97232C42.9492 10.0219 42.9492 10.0715 42.9518 10.1211C42.9445 10.252 42.9445 10.3833 42.9518 10.5142C42.9518 11.0454 42.9518 11.5767 42.9518 12.0654C42.954 12.2782 42.8878 12.4861 42.763 12.6585C42.6382 12.8308 42.4613 12.9585 42.2584 13.0228C42.0555 13.087 41.8374 13.0845 41.6361 13.0154C41.4348 12.9463 41.261 12.8145 41.1403 12.6392C40.0435 11.1035 38.7321 9.73307 37.2462 8.56982C36.1146 7.66138 35.3496 7.14607 35.4506 6.90169C35.5515 6.65732 36.5131 6.77419 37.9421 7.43294C39.8465 8.36926 41.4988 9.74829 42.7606 11.4545L40.9065 12.0389V10.4876C40.8931 10.2771 40.8931 10.066 40.9065 9.85544C40.9372 9.56904 41.0181 9.29029 41.1456 9.032C41.3353 8.64295 41.6716 8.34495 42.0806 8.20325C42.2923 8.13438 42.516 8.11061 42.7375 8.13349C42.9589 8.15636 43.1731 8.22537 43.3662 8.33607C43.626 8.49178 43.849 8.70204 44.0196 8.95232C44.1488 9.14319 44.2557 9.34816 44.3384 9.56325C44.3756 9.65357 44.4234 9.79169 44.4393 9.8395L44.4925 9.99888C44.5236 10.0847 44.5609 10.1681 44.604 10.2486L44.6412 10.3176C44.6076 10.3538 44.5774 10.3929 44.5509 10.4345C44.4393 10.5992 44.4765 10.6576 44.4659 10.5461C44.4553 10.4345 44.4659 10.5461 44.4659 10.5461C44.4559 10.5252 44.4434 10.5056 44.4287 10.4876C44.4014 10.4452 44.3693 10.4059 44.3331 10.3708C44.2959 10.3389 44.3756 10.3229 44.4234 10.2379C44.5788 10.0051 44.7454 9.77989 44.9228 9.56325C45.1749 9.26755 45.5128 9.05773 45.8896 8.96294C46.4432 8.82939 47.0268 8.91304 47.5206 9.19669C47.8395 9.37488 48.1195 9.61512 48.344 9.90325C48.6575 10.3442 48.7425 10.6258 48.6468 10.7373Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M13.4247 56.2881C13.4619 56.3678 12.3622 56.9468 10.1204 56.8884C8.52214 56.8154 6.96021 56.3876 5.54789 55.6359C4.13556 54.8843 2.90827 53.8277 1.95505 52.5428C1.88048 52.4326 1.84101 52.3025 1.84181 52.1695C1.84261 52.0365 1.88366 51.9068 1.95954 51.7976C2.03543 51.6884 2.14261 51.6047 2.26697 51.5575C2.39134 51.5104 2.52706 51.5019 2.6563 51.5334H2.69349C5.22456 52.2627 7.86652 52.5291 10.4922 52.3196L10.3435 53.9134C8.66603 53.4903 7.10475 52.6965 5.77444 51.5905C4.44414 50.4845 3.37864 49.0944 2.6563 47.5225C2.57928 47.3506 2.5566 47.1593 2.59131 46.9741C2.62601 46.789 2.71644 46.6189 2.85049 46.4866C2.98454 46.3543 3.15581 46.2661 3.34137 46.2338C3.52693 46.2015 3.71793 46.2267 3.8888 46.3059L8.2238 48.3778L7.1188 49.8971C6.19471 48.8709 5.39578 47.7385 4.7388 46.5237C4.08116 45.2873 3.5302 43.997 3.09192 42.6668C3.02161 42.4768 3.01078 42.2698 3.06087 42.0735C3.11096 41.8771 3.2196 41.7006 3.37236 41.5674C3.52512 41.4343 3.71478 41.3507 3.91614 41.3279C4.1175 41.3051 4.32105 41.3441 4.49974 41.4397L9.24911 43.9312L8.05911 45.525C7.52613 44.9916 7.03088 44.4217 6.57692 43.8197C5.01261 41.7008 3.95654 39.2506 3.49036 36.6584C3.45006 36.4414 3.48278 36.2171 3.58343 36.0206C3.68408 35.8242 3.84697 35.6666 4.04666 35.5725C4.24635 35.4785 4.47158 35.4532 4.68715 35.5007C4.90272 35.5481 5.09649 35.6657 5.23817 35.835C6.49203 37.3474 8.12306 38.502 9.9663 39.1818L8.96755 40.8181C7.61693 39.5707 6.53887 38.0574 5.80109 36.3734C5.0633 34.6894 4.68174 32.871 4.68036 31.0325C4.6779 30.8215 4.75068 30.6166 4.88565 30.4545C5.02062 30.2924 5.20895 30.1836 5.41684 30.1478C5.62473 30.112 5.83859 30.1514 6.02003 30.259C6.20148 30.3666 6.33865 30.5354 6.40693 30.735C6.7417 31.6355 7.27967 32.4467 7.97901 33.1055C8.67834 33.7643 9.52019 34.2529 10.4391 34.5334L9.56255 35.7447C8.0215 33.37 6.98869 30.702 6.52911 27.9087C6.17105 25.8004 6.14954 23.6487 6.46536 21.5337C6.99661 18.0434 8.11224 16.3275 8.20786 16.3806C8.40974 16.4497 7.6288 18.2665 7.36849 21.6347C7.22319 23.6548 7.3681 25.6853 7.7988 27.6643C8.34628 30.2355 9.39708 32.6729 10.8907 34.8362C10.9836 34.9708 11.0332 35.1306 11.0327 35.2941C11.0323 35.4577 10.9819 35.6172 10.8883 35.7512C10.7946 35.8853 10.6622 35.9876 10.5089 36.0443C10.3555 36.1011 10.1884 36.1096 10.03 36.0687C8.83993 35.7507 7.74111 35.1576 6.82207 34.3373C5.90304 33.517 5.18946 32.4924 4.7388 31.3459L6.46536 31.0325C6.50371 32.6056 6.86108 34.1546 7.51583 35.5856C8.17059 37.0166 9.10908 38.2997 10.2744 39.3572C10.4439 39.5081 10.5553 39.7135 10.5892 39.9379C10.6231 40.1623 10.5774 40.3915 10.4601 40.5858C10.3428 40.78 10.1612 40.9271 9.94683 41.0016C9.73244 41.076 9.49877 41.0731 9.2863 40.9934C8.226 40.6058 7.2178 40.0883 6.28474 39.4528C5.33029 38.7879 4.46756 38.0002 3.7188 37.11L5.46661 36.2706C5.88363 38.5773 6.82314 40.758 8.21317 42.6456C8.61082 43.1704 9.04392 43.6674 9.50942 44.1331C9.67281 44.3058 9.76996 44.5307 9.78377 44.7681C9.79757 45.0054 9.72714 45.2401 9.58489 45.4306C9.44263 45.6211 9.23769 45.7553 9.00618 45.8095C8.77468 45.8637 8.53147 45.8344 8.31942 45.7268L3.57005 43.23L4.98849 42.024C5.71117 44.4427 6.92667 46.6856 8.55849 48.6115C8.70634 48.7764 8.79276 48.9872 8.80313 49.2085C8.81351 49.4297 8.74721 49.6477 8.61544 49.8257C8.48367 50.0037 8.2945 50.1307 8.0799 50.1853C7.86529 50.24 7.6384 50.2189 7.43755 50.1256L3.13442 48.0006L4.37224 46.7521C4.9624 48.0897 5.83933 49.2813 6.94096 50.2424C8.04259 51.2036 9.342 51.9109 10.7472 52.3143C10.9321 52.3663 11.0926 52.4821 11.2003 52.6411C11.3079 52.8001 11.3558 52.9921 11.3355 53.183C11.3151 53.374 11.2278 53.5515 11.089 53.6843C10.9502 53.817 10.7689 53.8963 10.5772 53.9081C7.77483 54.0597 4.96889 53.6831 2.30567 52.7978L3.05474 51.7884C3.96665 53.1458 5.20285 54.2541 6.6513 55.0131C7.7542 55.5968 8.94918 55.9868 10.1841 56.1659C12.2188 56.4421 13.3929 56.1234 13.4247 56.2881Z",
				fill: "#46A508"
			}))), a.a.createElement("path", {
				d: "M3.83093 57.9069C3.93186 57.211 12.4584 57.9494 24.1512 58.5444L22.6053 59.915C22.7157 57.0513 23.1018 54.2048 23.7581 51.4151C24.1151 49.9196 24.5622 48.4472 25.0969 47.0057C25.3589 46.2973 25.6458 45.6067 25.9575 44.9338C26.1116 44.5938 26.2762 44.2644 26.4462 43.9351C26.6162 43.6057 26.7809 43.2976 27.0147 42.9204C27.2088 42.6072 27.5177 42.3823 27.8753 42.2935C29.2406 41.9535 30.5953 41.5976 31.7853 41.231L32.2156 41.0822L32.6672 40.9122L33.5544 40.5776C34.1387 40.3544 34.7054 40.1295 35.2544 39.9029C37.4484 39.0051 39.345 38.1019 40.9069 37.3157C44.0253 35.7219 45.8475 34.6594 46.0653 34.9569C46.2831 35.2544 44.8009 36.7951 41.8153 38.8722C40.0442 40.094 38.189 41.1894 36.2637 42.1501C35.7148 42.4298 35.1428 42.7043 34.5478 42.9735L33.6447 43.3772L33.1825 43.5791L32.6778 43.781C31.3497 44.3122 30.0216 44.7001 28.5766 45.1144L29.4425 44.4769C29.3256 44.6841 29.1662 45.0082 29.0281 45.2791C28.89 45.5501 28.7519 45.8688 28.6191 46.1716C28.3534 46.7826 28.0878 47.4147 27.8753 48.0682C27.4027 49.4081 27.0002 50.7717 26.6694 52.1535C26.069 54.7638 25.6781 57.4178 25.5006 60.0904V60.1382C25.4878 60.326 25.438 60.5095 25.3541 60.678C25.2702 60.8465 25.1538 60.9968 25.0116 61.1202C24.8695 61.2436 24.7043 61.3377 24.5257 61.3971C24.347 61.4565 24.1584 61.48 23.9706 61.4663C12.1556 60.4835 3.71936 58.5869 3.83093 57.9069Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M61.0938 23.0134C61.0035 22.9019 61.4179 22.4344 62.1563 21.6534C63.2259 20.6567 64.0872 19.4578 64.6904 18.1259C64.8536 17.7096 64.9625 17.2739 65.0144 16.8297C65.0554 16.3424 65.0376 15.8518 64.9613 15.3688C64.8863 14.82 64.7745 14.2769 64.6266 13.7431C64.5519 13.4714 64.4632 13.2036 64.361 12.9409C64.2547 12.6541 64.1379 12.3725 64.0157 12.0856C63.5273 10.9102 62.9033 9.7959 62.1563 8.76532C61.405 7.69276 60.4135 6.81047 59.261 6.18876C58.6792 5.87159 58.0647 5.61864 57.4282 5.43438C56.817 5.26316 56.1873 5.16683 55.5529 5.14751C54.2787 5.13018 53.007 5.26573 51.7651 5.55126C50.5326 5.80626 49.3319 6.11438 48.1685 6.3322C47.0724 6.55643 45.9563 6.66857 44.8376 6.66688C43.1679 6.69204 41.532 6.19624 40.1572 5.24845C39.2169 4.53126 38.9566 3.9097 39.0522 3.83532C39.1479 3.76095 39.626 4.14345 40.5663 4.57376C41.9042 5.15017 43.3663 5.37862 44.8163 5.23782C45.832 5.1476 46.838 4.96986 47.8232 4.70657C48.8857 4.43032 50.081 4.06907 51.3719 3.74501C52.758 3.37292 54.1868 3.18361 55.6219 3.18188C56.4224 3.19139 57.2185 3.30206 57.9913 3.51126C58.7736 3.72447 59.5293 4.02566 60.2438 4.40907C61.6616 5.17264 62.8751 6.26585 63.7819 7.59657C64.6041 8.77137 65.2736 10.046 65.7741 11.3897C65.891 11.7031 66.0079 12.0166 66.1088 12.33C66.2182 12.6525 66.3104 12.9806 66.3851 13.3128C66.5253 13.9354 66.6194 14.5676 66.6666 15.2041C66.7219 15.8263 66.6969 16.453 66.5922 17.0688C66.4819 17.6388 66.2943 18.1911 66.0344 18.7103C65.5981 19.5601 65.0175 20.3277 64.3185 20.9788C63.8132 21.4539 63.2675 21.884 62.6876 22.2644C61.7526 22.8753 61.1841 23.1197 61.0938 23.0134Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M56.2864 52.0966C56.7114 49.2544 56.1217 46.7841 53.2636 44.1278C51.881 42.8163 50.2426 41.8044 48.4509 41.1554C46.6592 40.5063 44.7528 40.2342 42.8511 40.3559C44.8569 39.2047 47.1259 38.5906 49.4386 38.5729C51.7513 38.5552 54.0294 39.1346 56.0526 40.255C60.1061 42.5341 62.7092 45.9978 64.0214 50.9119C64.8555 53.8096 65.435 56.7746 65.7533 59.7731C65.9604 61.4519 66.2526 63.5609 65.1104 64.7137C64.7433 65.0506 64.3138 65.3123 63.8461 65.4841C61.7795 66.3606 59.2348 66.6953 57.5879 65.0962C56.6051 64.1347 56.1323 62.6525 55.1654 61.6697C54.5651 61.0641 53.7417 60.7453 53.1786 60.1078C51.2342 57.9191 50.3204 55.4381 50.7136 52.5641",
				fill: "#6FC437"
			}), a.a.createElement("path", {
				d: "M50.687 52.5476C50.7667 52.5476 50.772 52.861 50.8145 53.4189C50.8575 54.2185 50.9948 55.0102 51.2235 55.7776C51.595 56.9672 52.2001 58.0707 53.0032 59.0235C53.1201 59.1617 53.237 59.3051 53.3645 59.4432C53.4809 59.5795 53.6051 59.709 53.7363 59.831C54.0379 60.0731 54.3576 60.2915 54.6926 60.4845C54.8838 60.6067 55.0804 60.7342 55.2876 60.8935C55.4961 61.053 55.6899 61.2308 55.8667 61.4248C56.2001 61.8096 56.5005 62.2219 56.7645 62.6573C57.2957 63.4914 57.7526 64.3201 58.4379 64.7823C59.2065 65.2646 60.1233 65.4532 61.0198 65.3135C61.5326 65.2584 62.0383 65.1497 62.5285 64.9895C62.7835 64.9098 63.0598 64.8142 63.2882 64.7079C63.5326 64.6121 63.7704 64.5003 64.0001 64.3732C64.3659 64.1836 64.6466 63.863 64.7863 63.4754C64.9476 62.9914 65.0161 62.4814 64.9882 61.972C64.9672 61.3638 64.9122 60.7572 64.8235 60.1551L64.5685 58.2054C64.3932 56.9145 64.1329 55.6182 63.8248 54.2901C63.6689 53.6243 63.5043 52.9531 63.3307 52.2767C63.1607 51.5967 62.9748 50.9167 62.7995 50.2685C62.397 48.9556 61.8481 47.6922 61.1632 46.502C60.2127 44.8871 58.9611 43.4696 57.4763 42.3264C56.7477 41.786 55.9726 41.3113 55.1601 40.9079C54.3864 40.5013 53.5705 40.1807 52.727 39.9517C49.5467 39.0995 46.16 39.5107 43.276 41.0992L42.782 39.5054C45.7395 39.3434 48.6739 40.1086 51.1757 41.6942C52.2028 42.3392 53.1451 43.1102 53.9807 43.9892C54.7069 44.7257 55.3257 45.5609 55.8188 46.4701C56.5149 47.7548 56.8126 49.2177 56.6742 50.6723C56.5679 51.6498 56.3713 52.1385 56.2917 52.1279C56.212 52.1173 56.212 51.5967 56.1482 50.667C56.0747 49.3455 55.6631 48.065 54.9529 46.9482C54.4411 46.1632 53.8285 45.4488 53.1307 44.8232C52.3249 44.0714 51.4333 43.417 50.4745 42.8735C48.1872 41.5701 45.56 40.9869 42.936 41.2001C42.7414 41.2201 42.5457 41.1731 42.3813 41.067C42.2169 40.9608 42.0936 40.8018 42.0317 40.6161C41.9698 40.4305 41.9731 40.2293 42.0409 40.0457C42.1087 39.8621 42.2371 39.7072 42.4048 39.6064C45.6644 37.6925 49.5476 37.1427 53.2104 38.0764C54.1941 38.3244 55.1474 38.6808 56.0526 39.1389C56.9698 39.6042 57.8428 40.1519 58.661 40.7751C60.362 42.0652 61.7948 43.6749 62.8792 45.5139C63.6443 46.8401 64.2539 48.2502 64.696 49.716C64.9085 50.4439 65.0892 51.1345 65.2538 51.841C65.4185 52.5476 65.5885 53.217 65.7426 53.9023C66.0454 55.2729 66.3057 56.6489 66.4704 58.0035L66.6988 59.9798C66.7859 60.6547 66.8338 61.3341 66.8423 62.0145C66.8607 62.7652 66.7326 63.5122 66.4651 64.2139C66.1584 64.9726 65.5941 65.599 64.8713 65.9829C64.5727 66.1398 64.2639 66.2764 63.947 66.392C63.6495 66.5089 63.3467 66.6116 63.0385 66.7001C62.4273 66.8797 61.7986 66.9937 61.1632 67.0401C59.8717 67.1758 58.5753 66.8337 57.5188 66.0785C57.043 65.7111 56.6349 65.2634 56.3129 64.7557C56.0101 64.2935 55.7817 63.8473 55.5426 63.4382C55.3375 63.066 55.103 62.7107 54.8413 62.3757C54.597 62.077 54.3086 61.8172 53.986 61.6054C53.609 61.3539 53.2536 61.0714 52.9235 60.7607C52.7676 60.5927 52.6221 60.4153 52.4879 60.2295C52.3551 60.0701 52.2382 59.9001 52.1213 59.7407C51.3049 58.6279 50.7427 57.3493 50.4745 55.9954C50.3088 55.1514 50.2909 54.285 50.4214 53.4348C50.501 52.8239 50.6285 52.537 50.687 52.5476Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M58.6821 51.5324C55.1759 48.042 50.6496 48.1536 46.2562 50.693C41.8628 53.2323 39.7271 59.4002 40.524 64.8136C42.7659 59.7455 47.2071 55.9417 52.1584 54.8633",
				fill: "#6FC437"
			}), a.a.createElement("path", {
				d: "M52.1586 54.8578C52.2223 55.1181 50.5648 55.5218 48.2911 56.9828C46.9336 57.8598 45.7006 58.9158 44.6255 60.1225C43.2791 61.629 42.1865 63.3443 41.3901 65.2012C41.3088 65.395 41.1662 65.5568 40.9842 65.6618C40.8021 65.7668 40.5907 65.8094 40.3823 65.7829C40.1738 65.7563 39.9797 65.6623 39.8298 65.515C39.6799 65.3678 39.5823 65.1754 39.552 64.9675C39.1812 62.5558 39.3389 60.0924 40.0142 57.7478C40.9067 54.5603 42.8405 51.6968 45.4223 50.1296C47.898 48.6421 50.5383 47.9621 52.7695 48.1534C54.5167 48.2849 56.1791 48.9591 57.5242 50.0818C57.8752 50.3812 58.1907 50.7199 58.4645 51.0912C58.6505 51.3462 58.7195 51.5056 58.6664 51.5534C58.6133 51.6012 58.4539 51.5534 58.1883 51.394C57.9226 51.2346 57.5508 51.0115 57.0726 50.73C55.7414 49.9849 54.242 49.5917 52.7164 49.5878C50.4602 49.6915 48.2786 50.4279 46.4211 51.7128C44.3758 53.0568 42.7501 55.4846 41.9586 58.3162C41.3649 60.386 41.1969 62.5547 41.4645 64.6912L39.6264 64.4415C40.5616 62.4009 41.8594 60.5468 43.4567 58.9697C44.7007 57.7362 46.1359 56.7118 47.7067 55.9362C48.7229 55.4226 49.8068 55.056 50.9261 54.8471C51.7017 54.7196 52.1373 54.7515 52.1586 54.8578Z",
				fill: "black"
			}), a.a.createElement("path", {
				d: "M58.9691 59.0916C57.0778 56.855 54.0178 56.6744 51.5316 58.0291C49.0453 59.3837 47.7278 62.21 47.6587 65.2859C46.3997 62.4119 46.0331 57.9228 48.3706 55.0328C50.7081 52.1428 54.7881 52.1162 58.1562 53.6091",
				fill: "#6FC437"
			}), a.a.createElement("path", {
				d: "M58.1564 53.6259C58.098 53.764 57.5614 53.6259 56.637 53.4825C55.3703 53.2382 54.0708 53.2148 52.7961 53.4134C51.9185 53.5518 51.0844 53.8896 50.3578 54.4007C49.6311 54.9118 49.0314 55.5827 48.6045 56.3618C47.6164 58.0884 47.4358 60.5215 47.9458 62.8909C48.0924 63.5805 48.3041 64.2547 48.578 64.9043L46.6495 65.2868C46.649 62.8127 47.6 60.4331 49.3058 58.6409C49.7037 58.2536 50.1418 57.9099 50.6126 57.6156C51.0539 57.3494 51.52 57.127 52.0045 56.9515C52.865 56.631 53.7802 56.483 54.698 56.5159C56.0163 56.5361 57.2819 57.0367 58.2573 57.9237C58.9055 58.5559 59.0701 59.0287 58.9851 59.0978C58.9001 59.1668 58.5123 58.8906 57.8217 58.5134C56.8747 57.9938 55.7956 57.7647 54.7192 57.8547C53.9814 57.9197 53.2615 58.1177 52.5942 58.439C52.2227 58.6088 51.8671 58.8115 51.5317 59.0447C51.1877 59.2962 50.8692 59.5809 50.5808 59.8947C49.3045 61.4205 48.6233 63.3565 48.6629 65.3453C48.6579 65.5727 48.5757 65.7916 48.43 65.9662C48.2843 66.1408 48.0836 66.2607 47.8608 66.3064C47.638 66.3521 47.4063 66.3207 47.2036 66.2176C47.0009 66.1144 46.8393 65.9454 46.7451 65.7384C46.4086 64.9713 46.1505 64.1721 45.9748 63.3531C45.6706 61.9921 45.5952 60.5899 45.7517 59.204C45.8859 57.8729 46.3141 56.5882 47.0055 55.4428C47.6407 54.3813 48.544 53.5056 49.6245 52.9034C50.5382 52.3922 51.5508 52.0824 52.5942 51.995C54.0492 51.8938 55.5072 52.1453 56.8442 52.7281C57.7845 53.1265 58.2095 53.509 58.1564 53.6259Z",
				fill: "black"
			}), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M57.4124 63.2938C57.4124 63.2142 57.6461 63.1557 58.0605 63.0442C58.6544 62.8919 59.2285 62.6708 59.7711 62.3854C60.5979 61.9511 61.3112 61.3288 61.8536 60.5685C62.5478 59.5868 62.9191 58.4134 62.9161 57.211L64.3133 57.5935C63.5012 59.1117 62.2544 60.3529 60.7327 61.1582C58.9871 62.1107 56.9716 62.4475 55.0111 62.1145C54.79 62.0734 54.5906 61.9554 54.4483 61.7812C54.306 61.6071 54.23 61.3882 54.2338 61.1633C54.2376 60.9385 54.321 60.7223 54.4692 60.5531C54.6173 60.3839 54.8206 60.2726 55.043 60.2392H55.0749C56.4247 60.0242 57.6891 59.4414 58.7294 58.5549C59.7697 57.6683 60.5455 56.5122 60.9717 55.2135L62.7461 56.122C62.5442 56.3717 62.3477 56.6532 62.1246 56.871C61.0218 58.1308 59.6313 59.1058 58.0711 59.7132C56.5689 60.2714 54.953 60.4538 53.3642 60.2445C53.1268 60.2142 52.909 60.0969 52.753 59.9153C52.597 59.7337 52.5139 59.5007 52.5199 59.2613C52.5258 59.022 52.6204 58.7934 52.7852 58.6197C52.95 58.4461 53.1734 58.3398 53.4121 58.3213C55.029 58.1782 56.5284 57.4171 57.5983 56.1963C58.572 55.0859 59.2128 53.7233 59.4471 52.2651L60.9239 52.6635C60.2754 54.0839 59.334 55.3512 58.1614 56.3823C57.291 57.1526 56.3004 57.7753 55.2289 58.2257C53.4546 58.9482 52.3655 58.8898 52.3496 58.757C52.3336 58.6242 53.3217 58.3373 54.8411 57.4448C55.7485 56.9049 56.5778 56.2436 57.3061 55.4792C58.2529 54.4942 58.9982 53.3339 59.5002 52.0632C59.5689 51.8907 59.6976 51.7488 59.8626 51.6637C60.0276 51.5785 60.2178 51.5558 60.3982 51.5998C60.5787 51.6438 60.7371 51.7514 60.8444 51.903C60.9518 52.0545 61.0008 52.2397 60.9824 52.4245V52.4617C60.7967 54.2547 60.0893 55.954 58.9477 57.3492C57.613 58.9819 55.6894 60.0239 53.5927 60.2498L53.6192 58.3267C54.8923 58.4648 56.1799 58.2973 57.3752 57.8379C58.6301 57.3318 59.7478 56.5363 60.6371 55.5163C60.823 55.3198 60.9824 55.0967 61.1683 54.8948L61.2055 54.8523C61.3553 54.6729 61.5628 54.5511 61.7925 54.5077C62.0221 54.4642 62.2597 54.5018 62.4648 54.614C62.6698 54.7263 62.8295 54.9062 62.9167 55.1231C63.0038 55.3399 63.013 55.5803 62.9427 55.8032C62.4029 57.4655 61.4034 58.9409 60.0599 60.0588C58.7164 61.1766 57.0838 61.8912 55.3511 62.1198L55.4149 60.2392C56.9637 60.5329 58.5661 60.3128 59.9783 59.6123C61.2426 59.0076 62.3065 58.0524 63.0436 56.8604L63.0702 56.8126C63.1552 56.6706 63.2854 56.5613 63.4399 56.5022C63.5945 56.443 63.7644 56.4375 63.9225 56.4865C64.0805 56.5356 64.2176 56.6362 64.3115 56.7724C64.4055 56.9086 64.4511 57.0724 64.4408 57.2376C64.3563 58.7284 63.7852 60.1505 62.8152 61.2857C62.0978 62.1246 61.1727 62.7603 60.1324 63.1292C59.4932 63.3634 58.8153 63.4734 58.1349 63.4532C57.6408 63.4479 57.4071 63.3629 57.4124 63.2938Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M59.9148 50.4699C59.6651 50.5018 59.442 49.1896 58.5017 47.2824C57.9476 46.1514 57.2455 45.0991 56.4139 44.1533C55.3829 42.9699 54.1442 41.985 52.7588 41.2474L53.7895 39.6536C55.3353 40.7807 56.5677 42.2837 57.37 44.0204C58.1724 45.757 58.518 47.6698 58.3742 49.5774C58.355 49.8118 58.2524 50.0317 58.085 50.1969C57.9176 50.3622 57.6965 50.4619 57.4618 50.4779C57.2271 50.494 56.9944 50.4254 56.806 50.2845C56.6176 50.1436 56.486 49.9399 56.4351 49.7102C56.0638 48.0099 55.3398 46.4064 54.3101 45.0033C53.4824 43.864 52.4844 42.8589 51.351 42.023C49.4173 40.5939 47.951 40.1636 48.0254 39.898C48.0254 39.7864 48.4451 39.7652 49.157 39.898C50.1644 40.1006 51.1341 40.4591 52.031 40.9605C53.4142 41.7235 54.6429 42.7379 55.6542 43.9514C56.9555 45.4893 57.8828 47.3076 58.3635 49.2639L56.4245 49.4074C56.4828 48.0684 56.264 46.7319 55.7817 45.4814C55.1481 43.7841 54.0601 42.2937 52.6367 41.173L52.5942 41.1464C52.4895 41.0767 52.3996 40.987 52.3297 40.8825C52.2597 40.778 52.211 40.6607 52.1863 40.5374C52.1616 40.4141 52.1615 40.2871 52.1859 40.1637C52.2103 40.0403 52.2588 39.923 52.3285 39.8183C52.3983 39.7137 52.488 39.6238 52.5925 39.5538C52.697 39.4838 52.8143 39.4351 52.9376 39.4104C53.1867 39.3606 53.4453 39.4118 53.6567 39.5527C55.2217 40.4544 56.585 41.6677 57.6623 43.1174C58.506 44.2412 59.156 45.4981 59.5854 46.8361C60.3079 49.0727 60.1007 50.4699 59.9148 50.4699Z",
				fill: "#46A508"
			}))), a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M55.4415 53.5724C55.4415 53.8806 53.7308 53.854 51.218 54.6031C49.7586 55.0389 48.3661 55.6735 47.0796 56.489C45.5142 57.4726 44.1407 58.7327 43.0262 60.2077C42.882 60.3983 42.6749 60.5315 42.4417 60.5836C42.2085 60.6358 41.9644 60.6036 41.7527 60.4927C41.5411 60.3817 41.3757 60.1993 41.2859 59.9779C41.1961 59.7565 41.1878 59.5104 41.2624 59.2834C41.358 59.0018 41.4483 58.7149 41.5652 58.4334C42.4095 56.3207 43.8607 54.5054 45.7355 53.2165C47.2488 52.1768 49.0024 51.5405 50.8302 51.3678C52.0338 51.2431 53.2502 51.355 54.4108 51.6971C55.2183 51.9521 55.6115 52.2284 55.5743 52.3559C55.5371 52.4834 55.0749 52.4834 54.2887 52.4781C53.2019 52.4556 52.1163 52.559 51.0533 52.7862C49.5222 53.1186 48.0825 53.7823 46.8352 54.7306C45.3306 55.8851 44.1637 57.4226 43.4565 59.1824C43.3608 59.4109 43.2865 59.6499 43.2068 59.8837L41.4271 58.9806C42.7039 57.2985 44.318 55.9016 46.1658 54.8793C47.6505 54.0496 49.2685 53.4851 50.9471 53.2112C52.054 53.0157 53.1839 52.987 54.2993 53.1262C55.0377 53.2749 55.4521 53.4449 55.4415 53.5724Z",
				fill: "#46A508"
			}))), a.a.createElement("path", {
				d: "M40.9863 58.9697C40.7844 58.9697 40.6091 58.4385 40.625 57.4291C40.6872 56.0193 41.0399 54.6375 41.661 53.3704C42.0825 52.4713 42.6182 51.6303 43.2547 50.8682C43.6215 50.4393 44.0211 50.0396 44.45 49.6729C44.8923 49.2888 45.359 48.9339 45.8472 48.6104C48.0885 47.0896 50.7816 46.3793 53.4813 46.5969C54.0986 46.6422 54.7124 46.7256 55.3194 46.8466L53.5185 48.2704C53.573 47.4013 53.4047 46.5328 53.0297 45.7469C52.6367 44.9938 52.0944 44.3287 51.436 43.7919C50.2132 42.7771 48.8011 42.015 47.2816 41.55C45.9482 41.1144 44.7953 40.8966 43.9932 40.7C43.191 40.5035 42.7288 40.3388 42.7235 40.1369C42.7182 39.935 43.1697 39.7332 44.025 39.5791C45.2557 39.3795 46.5094 39.367 47.7438 39.5419C49.6828 39.7888 51.5311 40.5095 53.1253 41.6404C54.1525 42.3565 55.0087 43.2907 55.6328 44.3763C56.303 45.6055 56.6262 46.9938 56.5678 48.3925C56.561 48.59 56.5153 48.7842 56.4333 48.964C56.3514 49.1438 56.2348 49.3057 56.0902 49.4404C55.9456 49.5751 55.7759 49.6799 55.5908 49.749C55.4057 49.8181 55.2088 49.85 55.0113 49.8429H54.82H54.7616C54.2747 49.7547 53.7835 49.6926 53.29 49.6569C51.2176 49.4862 49.1427 49.9553 47.3453 51.001C46.9274 51.2387 46.5231 51.4994 46.1341 51.7819C45.7746 52.0297 45.432 52.3012 45.1088 52.5947C44.5158 53.153 43.9818 53.7707 43.515 54.4382C42.8249 55.4541 42.241 56.5382 41.7725 57.6735C41.4378 58.5129 41.1988 59.0016 40.9863 58.9697Z",
				fill: "black"
			}));
			var d = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				l = s("./src/reddit/components/SearchResultsContent/NoResults/redesign.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				query: e,
				type: t,
				searchOptions: s
			}) {
				const l = Object(i.a)();
				return Object(n.useEffect)(() => {
					l(Object(o.j)(t, s))
				}, []), a.a.createElement("div", {
					className: Object(r.a)(m.a.noResults, t === d.b.Posts && m.a.withSidebar),
					"data-testid": "no-results"
				}, a.a.createElement(c, null), a.a.createElement("h2", {
					className: m.a.header
				}, u._("If there aren’t any search results for “", null, {
					hk: "jdZLH"
				}), u._("{search query}", [u._param("search query", e)], {
					hk: "4vP3YT"
				}), u._("”, does it even exist?", null, {
					hk: "3Pa0q2"
				})), a.a.createElement("p", {
					className: m.a.text
				}, u._("Looks like there aren’t any results for “", null, {
					hk: "4zRIzA"
				}), u._("{search query}", [u._param("search query", e)], {
					hk: "4vP3YT"
				}), u._("”. Try double-checking your spelling or searching for a related topic.", null, {
					hk: "2wIbnh"
				})))
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsPostList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ie
			}));
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/getShortenedLink.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				b = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				C = s("./src/reddit/components/ModModeReports/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				E = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				j = s("./src/reddit/components/Thumbnail/index.tsx"),
				_ = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/poll/index.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/selectors/user.ts");
			const T = {
					crosspost: P.d,
					isActive: P.j,
					isLoggedIn: w.K,
					moderatorPermissions: S.l,
					modModeEnabled: k.S,
					poll: N.e,
					showEditFlair: I.a,
					flairStyleTemplate: k.U
				},
				L = () => Object(a.c)(T);
			var R = s("./src/reddit/contexts/Post/index.tsx"),
				F = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/lib/isUrl/index.ts"),
				U = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				W = s("./src/reddit/components/SearchPost/index.m.less"),
				V = s.n(W);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(l.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: r,
						first: n,
						flairStyleTemplate: a,
						isLoggedIn: o,
						isOverlay: l,
						moderatorPermissions: _,
						modModeEnabled: k,
						onClickPost: S,
						onIgnoreReports: N,
						poll: I,
						post: P,
						redditStyle: w,
						showBulkActionCheckbox: T,
						subredditOrProfile: L,
						searchQuery: R
					} = e, W = w ? void 0 : a, q = s || void 0, K = Object(M.a)(_), Z = Object(b.c)(P), z = Object(x.c)(P), G = Object(j.b)({
						crosspost: s,
						post: P,
						url: void 0,
						usePreview: !1
					}), J = G && Object(B.a)(G), Q = !!P.media && Object(D.H)(P.media), X = !o, Y = Object(i.useMemo)(() => Object(U.a)(R, e => c.a.createElement("span", {
						className: Object(d.a)(V.a.syntaxHighlight)
					}, e), e => e), [R]), $ = {
						flairStyleTemplate: W,
						post: P,
						isOverlay: l,
						shouldShowSubscribeButton: X,
						subredditOrProfile: L
					}, ee = c.a.createElement(y.a, {
						className: Object(d.a)(V.a.postContainer, Object(A.a)(e), n ? V.a.mFirst : void 0, t),
						eventFactory: r,
						isOverlay: l,
						onClick: S,
						post: P,
						style: {
							...Object(A.d)(e),
							...Object(A.b)(W)
						}
					}, c.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: W,
						redditStyle: !0
					}, c.a.createElement(u.a, {
						className: V.a.eventMeta,
						post: P
					}), c.a.createElement("div", {
						className: Object(d.a)(V.a.postContent, {
							[V.a.showBulkActionCheckbox]: T
						}),
						"data-click-id": "body"
					}, c.a.createElement(E.a, H({
						className: V.a.postItemMetaContainer,
						key: "PostMeta"
					}, $)), c.a.createElement("div", {
						className: V.a.postItemTitleContainer
					}, c.a.createElement("div", null, c.a.createElement(g.c, {
						format: Y,
						hideSourceLink: !0,
						poll: I,
						post: P,
						redditStyle: w,
						size: g.b.Medium,
						titleColor: W && W.postTitleColor,
						isOverlay: l
					}), P.source && !q && c.a.createElement(F.a, {
						className: V.a.outboundLink,
						href: P.source.url,
						isSponsored: P.isSponsored,
						postId: P.id,
						source: P.source
					}, Object(m.a)(P))), J && c.a.createElement("div", {
						className: V.a.thumbnailContainer
					}, c.a.createElement(j.a, {
						className: V.a.thumbnail,
						crosspost: q && P,
						isMeta: P.isMeta,
						post: q || P,
						redditStyle: w,
						templatePlaceholderImage: W && W.postPlaceholderImage,
						removeLink: Q
					}))), k && K && Z && c.a.createElement(h.a, {
						thing: P
					}), k && K && z && c.a.createElement(C.a, {
						onIgnoreReports: N,
						reportable: P
					}), c.a.createElement(O.a, {
						className: Object(d.a)(V.a.postItemFlatlistContainer),
						post: P
					}), c.a.createElement(p.d, null))));
					return c.a.createElement(v.b, null, ee)
				}),
				K = Object(R.b)((e => t => {
					const s = Object(k.eb)(),
						r = ((e, {
							postId: t
						}) => ({
							onIgnoreReports: () => e(Object(_.Z)(t))
						}))(Object(n.d)(), {
							...t
						}),
						a = Object(k.Y)(s),
						o = Object(n.e)(L),
						i = {
							...t,
							...o,
							...r,
							searchQuery: a
						};
					return c.a.createElement(e, i)
				})(q));
			var Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				G = s("./src/reddit/helpers/trackers/post.ts"),
				J = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Q = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				X = s("./src/reddit/selectors/searchFix.ts"),
				Y = s("./src/reddit/selectors/searchResults.ts"),
				$ = s("./src/reddit/selectors/tracking.ts"),
				ee = s("./src/reddit/components/SearchResultsContent/helpers/getHeroPostId.tsx"),
				te = s("./src/reddit/selectors/searchDiscoveryUnits.ts"),
				se = s("./src/reddit/connectors/PostList/index.ts");
			const re = Object(se.c)(),
				ne = Object(a.c)({
					...se.d,
					layout: Y.v,
					viewportDataLoaded: $.a,
					isSerpExperimentOverride: Q.d,
					postIds: (e, {
						heroPostId: t,
						listingKey: s,
						listingName: r,
						inSubredditOrProfile: n,
						searchDiscoveryUnit: a
					}) => {
						const o = a && a.postOrder,
							i = Object(Q.d)(e),
							c = Object(ee.a)(Object(te.b)(e));
						if (o && o.length > 0) {
							if (t) {
								const s = o.indexOf(t);
								if (s > -1) return o.splice(s, 1), Object(P.W)(e, o)
							}
							return Object(P.W)(e, o)
						}
						const {
							models: d
						} = e.posts;
						return Object(P.E)(e, s, r, !!n).filter(e => d && d[e] && !d[e].isSponsored && (!i || c !== e))
					}
				}),
				ae = (e, t, s, r) => {
					if (s) return Object(G.h)(e, t);
					const {
						sendEvent: n,
						listingKey: a,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: c
					} = r;
					return "body" === t || "background" === t || "expando_open" === t || "image" === t || "timestamp" === t ? (n(Object(J.k)(a, e, {
						...o,
						id: e,
						eventType: "post"
					}, Object(X.b)(r))), n(Object(J.n)(e, {
						...o,
						id: e,
						eventType: "post"
					}, i, a, c))) : "subreddit" === t ? (n(Object(J.r)({
						...o,
						id: e,
						eventType: "subreddit"
					}, Object(X.b)(r))), n(Object(J.m)(o, i, void 0, a, e, c))) : "comments" === t && (((e, t, s = "post") => e(e => ({
						...Object(J.c)(e, t),
						action: "click",
						noun: s,
						source: "search_results"
					})))(n, o, "comments"), n(Object(J.n)(e, {
						...o,
						id: e,
						eventType: "post"
					}, i, a, c))), Object(G.h)(e, t)
				},
				oe = Object(n.b)(ne, (e, t) => ({
					...Object(se.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(J.o)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, Object(X.b)(t))), t.sendEvent(Object(J.q)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: ae,
					postComponentForLayout: ({
						post: t
					}) => t.isBlank ? z.a : e.isSerpExperimentOverride ? K : o.SearchResultsClassicPost
				}));
			const ie = (e => Object(Z.c)(re(oe(e))))(r.a)
		},
		"./src/reddit/components/SearchResultsContent/helpers/communityConfig.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/index.tsx"),
				c = s("./src/reddit/helpers/karma.ts");
			const d = ({
					identifierType: e,
					subredditOrProfile: t,
					subredditOrProfileAboutInfo: s,
					onSubscribeButtonClick: r,
					subscribeEventFactory: n,
					priority: o
				}) => {
					if ("subreddit" !== e) return t.acceptFollowers ? a.a.createElement(i.a, {
						getEventFactory: n,
						identifier: {
							name: t.name,
							type: "profile"
						},
						onClick: r,
						priority: o,
						small: !0
					}) : null;
					return "number" == typeof s.subscribers ? a.a.createElement(i.a, {
						getEventFactory: n,
						identifier: {
							name: t.name,
							type: "subreddit"
						},
						onClick: r,
						priority: o,
						small: !0
					}) : null
				},
				l = (e, t) => {
					if ("subreddit" !== e) {
						const e = t,
							s = Object(c.a)(e),
							n = Object(o.b)(s);
						return r.fbt._({
							"*": "{karma count} Karma",
							_1: "1 Karma"
						}, [r.fbt._plural(s, "karma count", n)], {
							hk: "4r0tyT"
						})
					}
					const s = t;
					return "number" == typeof s.subscribers ? r.fbt._({
						"*": "{number of subscribers} Members",
						_1: "1 Member"
					}, [r.fbt._plural(s.subscribers, "number of subscribers", Object(o.b)(s.subscribers))], {
						hk: "vb11y"
					}) : null
				}
		},
		"./src/reddit/components/SearchResultsContent/helpers/getHeroPostId.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const {
				Hero: n,
				PromotedTrendHero: a
			} = r.b;

			function o(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === n || e.layout.viewTypeWeb === a);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/subscribeCheck.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					correlationId: Object(n.c)(n.a.SearchResults),
					actionInfo: a.actionInfo(t),
					search: a.search(t, e)
				}),
				i = (e, t) => s => ({
					source: "search",
					action: r.c.CLICK,
					noun: `result_subscribe_${e}`,
					...o(t)
				}),
				c = e => t => ({
					source: "search",
					action: r.c.CLICK,
					noun: "result_unsubscribe_profile",
					...o(e)
				})
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = new r.a(250),
				c = (e, t, s, r) => {
					const n = `last-${t}`,
						a = `entered-${e.id}-${n}`;
					let o = i.get(a);
					return void 0 === o && (o = "subreddit" === e.type ? () => l(s, e.id, r) : () => d(s, e.id, r), i.set(a, o)), o
				},
				d = (e, t, s) => e(e => ({
					...Object(a.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(n.c)(n.a.SearchResults),
					actionInfo: o.actionInfo(e),
					search: o.search(e, s),
					profile: o.profile(e)
				})),
				l = (e, t, s) => e(e => ({
					...Object(a.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(n.c)(n.a.SearchResults),
					actionInfo: o.actionInfo(e),
					search: o.search(e, s),
					subreddit: o.subreddit(e)
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/search.ts"),
				d = s("./src/lib/search/index.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/lib/makeListingKey/index.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./src/reddit/selectors/discoveryUnit.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				f = s("./src/reddit/selectors/searchDiscoveryUnits.ts"),
				y = s("./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less"),
				g = s.n(y);
			var v = Object(a.b)(() => {
					const e = Object(C.a)();
					return Object(o.c)({
						isDataPending: (e, {
							categoryId: t,
							discoveryUnit: s,
							listingKey: r
						}) => {
							if (r) return Object(x.h)(e, {
								listingKey: r
							});
							if (!t || !s) return !1;
							const n = Object(m.a)(s.unitName, i.W.HOT, {
								category: t
							});
							return Object(x.h)(e, {
								listingKey: n
							})
						},
						postIds: (t, {
							categoryId: s,
							discoveryUnit: r,
							searchDiscoveryUnit: n,
							heroPostId: a
						}) => s && r ? e(t, {
							unitName: r.unitName,
							id: s
						}) : Object(f.a)(n, a)
					})
				}, e => ({
					trackPostView: (t, s, r, n, a) => "unitName" in t ? e((e, n) => b.u(n(), t, s, r)) : r ? e((e, o) => b.E(o(), t, s, r, a, n)) : void 0
				}))(e => {
					const t = n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, {
						className: g.a.widgetHeader
					}, e.categoryId && e.category ? l.fbt._("Top {category} Posts", [l.fbt._param("category", e.category)], {
						hk: "zMaSt"
					}) : l.fbt._("Top posts across Reddit", null, {
						hk: "SCQfF"
					})));
					return e.isDataPending || e.postIds && 0 !== e.postIds.length ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement(u.a, {
						className: g.a.layout,
						header: t,
						hidePadding: !0
					}, n.a.createElement(p.a, {
						discoveryUnit: e.discoveryUnit,
						listingKey: e.listingKey,
						searchDiscoveryUnit: e.searchDiscoveryUnit,
						isLoading: e.isDataPending,
						items: e.postIds,
						searchOptions: e.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						onPostView: e.trackPostView
					}))) : null
				}),
				O = s("./node_modules/lodash/memoize.js"),
				E = s.n(O),
				j = s("./node_modules/react-router-redux/es/index.js"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				S = s("./src/reddit/selectors/category.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts"),
				P = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				w = s("./node_modules/react-motion/lib/react-motion.js"),
				T = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				R = s("./src/lib/classNames/index.ts"),
				F = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/IdCard/Title.tsx"),
				D = s("./src/reddit/components/SubscribeButton/index.tsx"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				U = s("./src/reddit/models/Theme/index.ts"),
				W = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				V = s("./src/reddit/components/IdCard/index.m.less"),
				H = s.n(V),
				q = s("./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less"),
				K = s.n(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class z extends n.a.Component {
				constructor(e) {
					super(e), this.onSubscribeClick = this.onSubscribeClick.bind(this), this.onTitleClick = this.onTitleClick.bind(this)
				}
				onSubscribeClick(e, t) {
					e.stopPropagation(), this.props.id && t({
						id: this.props.id,
						type: this.props.type
					})
				}
				onTitleClick(e) {
					return () => {
						this.props.id && e({
							id: this.props.id,
							type: this.props.type
						})
					}
				}
				render() {
					const {
						onCommunityClick: e
					} = this.props, t = Object(U.g)(this.props.bannerBackgroundColor || this.props.primaryColor || Object(W.a)(this.props).active, this.props.bannerBackgroundImage || Object(W.a)(this.props).banner.backgroundImage, "cover");
					return n.a.createElement("div", {
						className: Object(R.a)(K.a.container, this.props.className),
						style: this.props.style
					}, n.a.createElement("div", {
						className: K.a.searchCommunity,
						onClick: this.props.onClick
					}, n.a.createElement("div", {
						className: K.a.banner,
						style: {
							background: t
						}
					}), n.a.createElement(A.a, {
						className: K.a.titleWrapper,
						largeSubredditIcon: !0,
						linkUrl: `/r/${this.props.name}`,
						subredditIcon: {
							url: this.props.iconUrl || void 0
						},
						titleText: `r/${this.props.name}`,
						primaryColor: this.props.primaryColor,
						onTitleClick: this.onTitleClick(e)
					}), this.props.subscribers && n.a.createElement("span", {
						className: K.a.count
					}, l.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [l.fbt._plural(this.props.subscribers, "number", Object(M.b)(this.props.subscribers))], {
						hk: "2ji2gJ"
					})), n.a.createElement("div", {
						className: Object(R.a)(H.a.Description, K.a.description)
					}, this.props.description), n.a.createElement("div", {
						className: K.a.subscribeButtonWrapper
					}, n.a.createElement(D.a, {
						className: K.a.subscribeButton,
						identifier: {
							name: this.props.name,
							type: this.props.type
						},
						getEventFactory: this.props.getSubscribeEventFactory,
						onClick: t => this.onSubscribeClick(t, e),
						size: B.d.S
					}))))
				}
			}
			const G = Object(F.a)(z);
			class J extends n.a.Component {
				constructor() {
					super(...arguments), this.renderCommunityItem = e => n.a.createElement(G, Z({}, this.props, {
						onCommunityClick: e
					}))
				}
				render() {
					return n.a.createElement(I.a.Consumer, null, this.renderCommunityItem)
				}
			}
			var Q = J,
				X = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				Y = s("./src/reddit/constants/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const re = 338,
				ne = {
					stiffness: 210,
					damping: 30
				},
				ae = Object(a.b)(() => Object(o.c)({
					toolTipId: $.a
				}), (e, t) => ({
					toggleTooltip: t => e(Object(T.h)({
						tooltipId: t
					}))
				})),
				oe = ({
					root: e,
					handleVisibilityChange: t,
					...s
				}) => n.a.createElement(P.a, {
					root: e,
					threshold: .99,
					rootMargin: "0px 0px 0px 0px",
					onChange: t
				}, n.a.createElement(Q, s));
			class ie extends L.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.id = "CollectionInfoCommunities", this.itemWidth = re, this.spacerWidth = 0
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					super.componentDidUpdate(e, t), this.trackCommunitiesViewed()
				}
				onClickNext() {
					super.onClickNext(), this.trackCommunitiesViewed()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackCommunitiesViewed()
				}
				trackCommunitiesViewed() {
					if (this.props.isLoading || 0 === this.props.items.length) return;
					const e = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length),
						t = this.state.scrollIndex;
					void 0 !== t && this.props.items.slice(t, e).map(e => this.props.onCommunityView(e))
				}
				render() {
					const {
						items: e,
						isLoading: t,
						searchResults: s,
						toggleTooltip: r
					} = this.props, a = !t && e.length > 0, {
						scrollIndex: o,
						visibleItemsCount: i
					} = this.state, c = this.getMaxScrollIndex(i), d = this.getAdjustment({
						itemWidth: re,
						maxScrollIndex: c,
						scrollIndex: o,
						visibleItemsCount: i
					}), l = this.getMarginLeft({
						adjustment: d,
						itemWidth: re,
						scrollIndex: o
					});
					return n.a.createElement(n.a.Fragment, null, s && a && n.a.createElement("div", {
						className: te.a.communitiesWrapper,
						id: this.id,
						ref: this.setContainerRef
					}, n.a.createElement(w.Motion, {
						defaultStyle: {
							marginLeft: 0
						},
						style: {
							marginLeft: Object(w.spring)(l, ne)
						}
					}, t => n.a.createElement(n.a.Fragment, null, e.map((e, s) => n.a.createElement(oe, se({}, e, {
						className: te.a.community,
						handleVisibilityChange: this.makeVisibilityChangeHandler(s),
						key: e.name,
						root: this.id,
						style: 0 === s ? t : void 0,
						onClick: () => this.props.onCommunityClick(e),
						toggleTooltip: r,
						type: e.type || Y.a.SUBREDDIT
					}))))), 0 !== o && n.a.createElement(L.a, {
						className: te.a.arrowLeft,
						onClick: this.onClickPrev
					}), !this.state.itemsFitInContainer && (null == c || o < c) && n.a.createElement(L.b, {
						className: te.a.arrowRight,
						onClick: this.onClickNext
					})), s && !a && n.a.createElement("div", {
						className: te.a.searchCommunityPlaceholder
					}, n.a.createElement(X.a, null), n.a.createElement(X.a, null), n.a.createElement(X.a, null), n.a.createElement(X.a, null)))
				}
			}
			var ce = ae(ie),
				de = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less"),
				le = s.n(de);
			const me = Object(a.b)(() => Object(o.c)({
				subredditCategory: (e, {
					categoryId: t
				}) => Object(S.l)(e, {
					id: t
				}),
				communities: (e, {
					categoryId: t,
					searchDiscoveryUnit: s
				}) => t ? Object(S.a)(e, {
					id: t
				}) : s && s.subredditOrder ? Object(N.e)(e, {
					subredditIds: s.subredditOrder
				}) : [],
				isDataPending: (e, {
					categoryId: t,
					listingKey: s
				}) => t ? !!Object(S.n)(e, {
					id: t
				}) : !!s && Object(x.h)(e, {
					listingKey: s
				})
			}), (e, {
				discoveryUnit: t,
				listingKey: s,
				pageLayer: r,
				searchDiscoveryUnit: n,
				searchOptions: a
			}) => ({
				trackSubredditView: E()((t, s) => e((e, r) => b.w(r(), t, s, a)), ({
					id: e
				}, {
					name: t
				}) => `${e}-${t}`),
				navigateToSubreddit: o => {
					e((e, s) => {
						t ? b.o(s(), t, o) : n && b.F(s(), n, o), o.displayText && e(Object(j.b)({
							pathname: `/${o.displayText}`,
							state: Object(k.a)(r)
						}))
					}), n && a && o.id && e((e, t) => b.B(t(), a, r, {
						id: o.id,
						type: o.type
					}, s, n))
				},
				onCommunityClick: t => {
					n && a && e((e, o) => b.B(o(), a, r, t, s, n))
				}
			}));
			class ue extends n.a.Component {
				trackCommunityView(e) {
					this.props.discoveryUnit ? this.props.trackSubredditView(this.props.discoveryUnit, e) : this.props.searchDiscoveryUnit && this.props.trackSubredditView(this.props.searchDiscoveryUnit, e)
				}
				onCommunityClick(e) {
					this.props.navigateToSubreddit(e)
				}
				render() {
					const {
						categoryName: e,
						onCommunityClick: t
					} = this.props, s = n.a.createElement(h.a, {
						className: le.a.widgetHeader
					}, e ? l.fbt._("Top {categoryName} Communities", [l.fbt._param("categoryName", e)], {
						hk: "301UWB"
					}) : l.fbt._("Communities talking about this", null, {
						hk: "Azews"
					}));
					return this.props.isDataPending || this.props.communities && 0 !== this.props.communities.length ? n.a.createElement("div", {
						className: le.a.container
					}, n.a.createElement(u.a, {
						header: s,
						hidePadding: !0,
						className: le.a.layout
					}, n.a.createElement(I.a.Provider, {
						value: t
					}, n.a.createElement(ce, {
						category: this.props.subredditCategory,
						items: this.props.communities,
						isLoading: this.props.isDataPending,
						onCommunityClick: e => this.onCommunityClick(e),
						onCommunityView: e => this.trackCommunityView(e),
						searchResults: !0
					})))) : null
				}
			}
			var pe = Object(_.u)()(me(ue)),
				he = s("./src/reddit/components/SearchResultsContent/Communities/index.tsx"),
				be = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				Ce = s("./src/reddit/components/SearchResultsContent/SearchResultsPostList.tsx"),
				xe = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				fe = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				ye = s("./src/reddit/constants/parameters.ts"),
				ge = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				ve = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				Oe = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Ee = s("./src/reddit/hooks/useTracking.ts"),
				je = s("./src/reddit/selectors/searchFix.ts"),
				_e = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ke = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				Se = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less"),
				Ne = s.n(Se);
			const Ie = s("./src/lib/lessComponent.tsx").a.div("Spacer", Ne.a),
				Pe = () => null,
				we = Object(_.u)({
					pageLayer: e => e,
					queryParams: _.V
				}),
				Te = Object(o.c)({
					fromSubreddit: ke.a,
					apiPending: x.d,
					communityApiPending: x.h,
					shouldShowGlobalSearchSwitcher: je.c
				});
			var Le = we(Object(a.b)(Te)(e => {
					const t = Object(Ee.a)(),
						{
							hasCommunityResults: s,
							hasPostResults: a,
							fromSubreddit: o,
							listingKey: i,
							listingName: c,
							morePostsRequested: l,
							onViewed: m,
							pageLayer: u,
							postsDiscoveryUnit: p,
							searchOptions: h,
							shouldShowGlobalSearchSwitcher: b,
							subredditsDiscoveryUnit: C,
							tab: x,
							queryParams: f,
							apiPending: y,
							communityApiPending: g
						} = e,
						O = Object(r.useCallback)(e => {
							t(Object(Oe.m)(h, u, void 0, i, e))
						}, [i, u, h, t]),
						E = Object(d.a)(h[ye.c]),
						j = h.category,
						_ = h.is_multi,
						k = !h.restrict_sr && !j && !E,
						S = p && j && E,
						N = C && j && E,
						P = s && !Object(ge.a)(h.q) && !h.category,
						w = void 0 === y || y,
						T = void 0 === g || g;
					return n.a.createElement(n.a.Fragment, null, b && o && n.a.createElement(fe.a, {
						searchOptions: h,
						subreddit: o,
						url: Object(ve.a)(f, o.name)
					}), k && n.a.createElement(Ie, {
						key: "subNav"
					}, n.a.createElement(xe.a, {
						searchOptions: h,
						subredditName: c,
						tab: x
					})), N && n.a.createElement(pe, {
						key: "subredditsDiscoveryUnit",
						categoryId: j,
						categoryName: E,
						discoveryUnit: C
					}), S && n.a.createElement(v, {
						key: "postsDiscoveryUnit",
						categoryId: j,
						category: E,
						discoveryUnit: p
					}), P || T ? n.a.createElement(Ie, {
						key: "communitiesPreview"
					}, n.a.createElement(he.a, {
						listingKey: i,
						preview: !0,
						searchOptions: h
					})) : !_ && !j && n.a.createElement(be.a, {
						query: Object(d.a)(h.q || ""),
						type: be.b.Communities,
						searchOptions: h
					}), a || w ? n.a.createElement(I.b.Provider, {
						value: O
					}, n.a.createElement(_e.a.Provider, {
						value: !0
					}, n.a.createElement(Ce.a, {
						key: "posts",
						listingKey: i,
						listingName: c,
						listingViewed: m,
						inSubredditOrProfile: !1,
						noPostsComponent: Pe,
						onLoadMore: l,
						searchOptions: h
					}))) : n.a.createElement(be.a, {
						query: Object(d.a)(h.q || ""),
						type: be.b.Posts,
						searchOptions: h
					}))
				})),
				Re = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/CommunitiesResults.tsx");
			const Fe = () => null,
				Me = e => {
					const {
						hasPostResults: t,
						listingKey: s,
						listingName: r,
						location: o,
						morePostsRequested: i,
						onViewed: c,
						searchOptions: l,
						tab: m
					} = e, u = Object(d.a)(l.q || ""), p = Object(_.eb)(), h = Object(_.O)(p), b = Object(_.V)(p), C = Object(a.e)(t => Object(x.d)(t, e)), f = void 0 === C || C;
					return n.a.createElement(n.a.Fragment, null, h && n.a.createElement(fe.a, {
						searchOptions: l,
						url: Object(ve.a)(b)
					}), n.a.createElement(xe.a, {
						key: "subNav",
						searchOptions: l,
						shouldHideGlobalSearchLink: h,
						subredditName: r,
						tab: m
					}), t || f ? n.a.createElement(Ce.a, {
						key: "posts",
						listingKey: s,
						listingName: r,
						listingViewed: c,
						location: o,
						inSubredditOrProfile: !1,
						noPostsComponent: Fe,
						onLoadMore: i,
						searchOptions: l
					}) : n.a.createElement(be.a, {
						query: u,
						type: be.b.Posts,
						searchOptions: l
					}))
				};
			var Ae = s("./src/reddit/components/SearchResultsContent/helpers/getHeroPostId.tsx"),
				De = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Be = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				Ue = s("./src/config.ts"),
				We = s("./src/lib/intersectionObserver/index.ts"),
				Ve = s("./src/lib/isUrl/index.ts"),
				He = s("./src/lib/objectSelector/index.ts"),
				qe = s("./src/lib/opener/index.ts"),
				Ke = s("./src/reddit/actions/post.ts"),
				Ze = s("./src/reddit/components/BlankPost/index.tsx"),
				ze = s("./src/reddit/components/Media/index.tsx"),
				Ge = s("./src/reddit/components/PostContainer/index.tsx"),
				Je = s("./src/reddit/components/Thumbnail/index.tsx"),
				Qe = s("./src/reddit/connectors/PostViewable/index.ts"),
				Xe = s("./src/reddit/constants/adEvents.ts"),
				Ye = s("./src/reddit/contexts/Post/index.tsx"),
				$e = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				et = s("./src/reddit/helpers/overlay/index.ts"),
				tt = s("./src/reddit/helpers/path/index.ts"),
				st = s("./src/reddit/models/Media/index.ts"),
				rt = s("./src/reddit/selectors/posts.ts"),
				nt = s("./src/reddit/selectors/user.ts"),
				at = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ot = s("./src/reddit/components/PostTitle/index.tsx"),
				it = s("./src/lib/makeCommentPermalink/index.ts"),
				ct = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				dt = s("./src/reddit/components/RichTextJson/index.tsx"),
				lt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				mt = s("./src/reddit/layout/row/Inline/index.tsx"),
				ut = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less"),
				pt = s.n(ut);
			var ht = e => n.a.createElement(mt.a, {
					className: Object(R.a)(pt.a.commentMeta, e.className)
				}, n.a.createElement(mt.a, {
					className: pt.a.postedInfo
				}, n.a.createElement(lt.a, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: e.comment,
					flair: e.flair,
					renderedInOverlay: !1
				}))),
				bt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ct = s("./src/reddit/selectors/comments.ts"),
				xt = s("./src/reddit/selectors/commentSelector.ts"),
				ft = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less"),
				yt = s.n(ft);
			const gt = Object(o.c)({
					comment: (e, t) => Object(xt.b)(e, t),
					flair: Ct.e,
					subreddit: N.F
				}),
				vt = Object(a.b)(gt),
				Ot = Object(He.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var Et = vt(e => {
					var t;
					const {
						className: s,
						comment: r,
						flair: a,
						subreddit: o
					} = e, i = Object(it.a)(null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : "", r.postId, r.id);
					return n.a.createElement(ct.a, {
						className: Object(R.a)(yt.a.container, s),
						clickTrackingId: r.id,
						permalink: i
					}, n.a.createElement("div", null, n.a.createElement(ht, {
						comment: r,
						flair: a,
						subredditName: o ? o.displayText : null
					}), n.a.createElement("div", {
						className: yt.a.commentContentWrapper
					}, n.a.createElement("div", {
						className: yt.a.commentBody
					}, n.a.createElement(dt.a, {
						content: Object(bt.a)(r),
						rtJsonElementProps: Ot(e)
					})))))
				}),
				jt = s("./src/reddit/icons/fonts/index.tsx"),
				_t = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				kt = s("./src/reddit/components/HumanDate/index.tsx"),
				St = s("./src/reddit/components/PostBadges/index.tsx"),
				Nt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				It = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				Pt = s("./src/reddit/controls/MetaData/index.tsx"),
				wt = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				Tt = s("./src/reddit/helpers/name/index.ts"),
				Lt = s("./src/reddit/hooks/useClickSourceData.ts"),
				Rt = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				Ft = s.n(Rt);

			function Mt(e) {
				const {
					className: t,
					post: s,
					subredditOrProfile: r
				} = e, {
					isSponsored: a,
					author: o
				} = s, c = Object(Lt.a)();
				return n.a.createElement("div", {
					className: Object(R.a)(t, Ft.a.metadataContainer)
				}, !a && r && n.a.createElement(n.a.Fragment, null, n.a.createElement(Nt.b, {
					className: Ft.a.postIcon,
					subredditOrProfile: r
				}), n.a.createElement(It.a, {
					"data-click-id": "subreddit",
					to: {
						pathname: r.url,
						state: c
					}
				}, r.displayText)), a && n.a.createElement(n.a.Fragment, null, n.a.createElement(Nt.b, {
					className: Ft.a.postIcon,
					subredditOrProfile: r
				}), Object(Tt.d)(o)), n.a.createElement(at.e, null), n.a.createElement(wt.b, {
					className: Ft.a.metaSeparator
				}), n.a.createElement(kt.d, {
					seconds: s.created / i.Rb
				}), !a && n.a.createElement(n.a.Fragment, null, n.a.createElement(wt.b, {
					className: Ft.a.metaSeparator
				}), n.a.createElement(Pt.b, {
					isScoreHidden: s.isScoreHidden,
					score: s.score
				})), a && r && n.a.createElement(St.a, {
					className: Ft.a.postBadges,
					displayText: r.displayText,
					inSubredditOrProfile: !1,
					post: s
				}))
			}
			var At = s("./src/reddit/components/ClassicPost/index.m.less"),
				Dt = s.n(At),
				Bt = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Ut = s.n(Bt);
			const {
				fbt: Wt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Vt = ({
					mainContent: e,
					post: t,
					previewText: s,
					searchDiscoveryUnit: r,
					subredditOrProfile: a
				}) => {
					const o = {
						inSubredditOrProfile: !0,
						post: t,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a
					};
					return n.a.createElement("div", {
						className: Dt.a.mainBody,
						"data-click-id": "body"
					}, e, n.a.createElement("div", {
						className: Ut.a.innerContainer
					}, n.a.createElement(Mt, o), n.a.createElement(ot.c, {
						className: Ut.a.postTitle,
						isOverlay: !1,
						post: t,
						size: ot.b.Medium
					}), s, n.a.createElement("div", {
						className: Ut.a.numComments
					}, n.a.createElement(_t.a, {
						className: Object(R.a)(Ut.a.icon, Ut.a.commentIcon)
					}), Wt._({
						"*": "{Comments count} Comments",
						_1: "1 Comment"
					}, [Wt._plural(t.numComments, "Comments count")], {
						hk: "1EFnt0"
					})), n.a.createElement(at.d, null), n.a.createElement("div", {
						className: Ut.a.commentWrapper
					}, r.commentOrder && r.commentOrder.map(e => n.a.createElement(Et, {
						commentId: e,
						key: e
					}))), n.a.createElement("div", {
						className: Ut.a.seeFullPost
					}, Wt._("See full post", null, {
						hk: "SntP8"
					}), n.a.createElement(jt.a, {
						name: "forward",
						className: Ut.a.forwardIcon
					}))))
				},
				Ht = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				qt = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Kt = s("./src/reddit/controls/OutboundLink/index.tsx"),
				Zt = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less"),
				zt = s.n(Zt);
			var Gt = ({
					header: e,
					mainContent: t,
					post: s,
					showPromotedCTA: r,
					subredditOrProfile: a
				}) => {
					const o = {
						inSubredditOrProfile: !0,
						post: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a
					};
					return n.a.createElement("div", {
						className: Object(R.a)(Dt.a.mainBody, Dt.a.promotedMainBody),
						"data-click-id": "body"
					}, t, n.a.createElement("div", {
						className: zt.a.innerContainer
					}, n.a.createElement(Mt, o), n.a.createElement(ot.c, {
						className: zt.a.postTitle,
						isOverlay: !1,
						post: s,
						size: ot.b.Large
					}), !!(r && s.source && s.source.url) && n.a.createElement(Ht.a, {
						className: zt.a.adLinkWrapper
					}, n.a.createElement(Kt.b, {
						className: zt.a.outboundLink,
						href: s.source.url.replace(Ue.a.redditUrl, ""),
						isSponsored: s.isSponsored,
						postId: s.id,
						source: s.source
					}, s.source.displayText), s.callToAction && n.a.createElement(qt.a, {
						className: zt.a.callToAction,
						href: s.source.url.replace(Ue.a.redditUrl, ""),
						isSponsored: s.isSponsored,
						postId: s.id,
						source: s.source
					}, s.callToAction)), n.a.createElement(at.d, null)), n.a.createElement("hr", null), e)
				},
				Jt = s("./src/reddit/selectors/showPromotedCTA.ts");
			const {
				fbt: Qt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Xt = `${Ue.a.assetPath}/img/link-placeholder.png`, Yt = (e, t) => t && t.length ? Object(rt.H)(e, {
				postId: t[0]
			}) : void 0, $t = {
				fireAdPixelsOfType: Ke.z,
				openLightbox: e => Object(et.a)(e)
			}, es = Object(Qe.a)(() => Object(o.c)({
				autoplayPref: nt.b,
				crosspostRoot: (e, t) => {
					const s = Yt(e, t.searchDiscoveryUnit.postOrder);
					if (s) return Object(rt.d)(e, {
						postId: s.id
					})
				},
				showPromotedCTA: (e, t) => {
					const s = Yt(e, t.searchDiscoveryUnit.postOrder);
					return !!s && Object(Jt.a)(e, s)
				},
				post: (e, t) => Yt(e, t.searchDiscoveryUnit.postOrder),
				subredditOrProfile: Object(He.a)((e, t) => {
					const s = Yt(e, t.searchDiscoveryUnit.postOrder);
					if (s) return Object(N.I)(e, {
						identifier: s.belongsTo
					})
				})
			}), $t);
			class ts extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.scrollerItemRef = null, this.setRef = e => {
						this.ref = e
					}, this.scrollerItemRefFn = e => {
						this.scrollerItemRef = e && this.isVideo() && this.isSponsored() ? e : null
					}, this.onClickMedia = e => {
						this.isSponsored() && this.isVideo() || this.onClickPost(e), this.isSponsored() && this.onClickAd(e)
					}, this.onClickPost = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							post: t,
							pageLayer: s
						} = this.props;
						t && (this.props.sendEvent(Object(Oe.s)(t.id, "search_result_post", this.props.searchOptions, this.props.searchDiscoveryUnit)), t.isSponsored ? (this.props.fireAdPixelsOfType(t, Xe.a.Click), t.source ? t.source.outboundUrl ? Object(qe.e)(t.source.outboundUrl, qe.d.BLANK) : Object(qe.e)(t.source.url, qe.d.BLANK) : Object(qe.e)(t.permalink, qe.d.BLANK)) : this.props.openLightbox({
							pathname: Object(tt.b)(t.permalink),
							state: Object(k.a)(s)
						}))
					}, this.onClickAd = e => {
						this.isVideo() || (e.stopPropagation(), e.preventDefault());
						const {
							listingKey: t,
							pageLayer: s,
							post: r,
							searchOptions: n,
							searchDiscoveryUnit: a
						} = this.props;
						r && this.props.sendEvent(Object(Oe.u)(r.id, n, a, t, s))
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							listingKey: s,
							searchDiscoveryUnit: r,
							searchOptions: n,
							pageLayer: a,
							post: o
						} = this.props;
						let i;
						return (i = "subreddit" === t ? b.C(n, a, s, r) : o && o.isSponsored ? b.A(n, a, s, r) : b.D(n, a, s, r))(e)
					}
				}
				componentDidMount() {
					this.ref && We.a(this.ref, (e, t) => {
						this.scrollerItemRef && (t ? this.scrollerItemRef.focusContent() : this.scrollerItemRef.pauseContent())
					}), Object(Oe.h)(this.props.listingKey, this.props.searchOptions, this.props.searchDiscoveryUnit)
				}
				componentWillUnmount() {
					this.ref && We.b(this.ref), this.scrollerItemRef && this.scrollerItemRef.stopContent(), this.ref = null, this.scrollerItemRef = null
				}
				isSponsored() {
					return !!this.props.post && this.props.post.isSponsored
				}
				isVideo() {
					const {
						crosspostRoot: e,
						post: t
					} = this.props;
					if (t) {
						const {
							media: s
						} = e || t;
						return !!s && (s.type === st.o.VIDEO || s.type === st.o.GIFVIDEO)
					}
					return !1
				}
				render() {
					const {
						autoplayPref: e,
						crosspostRoot: t,
						post: s,
						onPostViewable: r,
						searchDiscoveryUnit: a,
						showPromotedCTA: o,
						subredditOrProfile: i
					} = this.props;
					if (!s) return null;
					if (s.isBlank) return n.a.createElement(Ze.BlankPost, {
						onPostViewable: r,
						post: s,
						postId: s.id
					});
					const {
						media: c
					} = t || s, d = o ? zt.a : Ut.a, l = o ? Gt : Vt, m = c && n.a.createElement("div", {
						onClickCapture: e => this.onClickMedia(e),
						ref: this.setRef
					}, n.a.createElement(ze.a, {
						autoplayPref: e,
						isListing: !1,
						isMiniCard: !s.isSponsored,
						isNotCardView: !1,
						isPromotedTrend: s.isSponsored,
						post: t || s,
						primaryContent: s.isSponsored,
						scrollerItemRef: this.scrollerItemRefFn,
						shouldLoad: !0,
						shouldPause: !0,
						showCentered: !1,
						showFull: s.isSponsored
					}));
					let p = n.a.createElement("div", {
						className: d.flexSpacer
					});
					const b = !!s.source && Object(Ve.a)(s.source.url) || !!s.thumbnail && Object(Ve.a)(s.thumbnail.url);
					let C;
					if (!c && b) p = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: d.mediaWrapper
					}, n.a.createElement(Je.a, {
						className: d.thumbnail,
						post: s,
						templatePlaceholderImage: Xt,
						usePreview: !0
					})));
					else if (c && m)
						if (c.type !== st.o.RTJSON && c.type !== st.o.TEXT) p = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
							className: d.mediaWrapper
						}, m));
						else {
							p = n.a.createElement("div", {
								className: d.mediaPlaceholder
							}), (c.type === st.o.RTJSON && c.richtextContent || c.type === st.o.TEXT && c.content) && Object($e.a)(s) && (C = n.a.createElement("div", {
								className: d.textMediaWrapper,
								onClickCapture: e => this.onClickPost(e)
							}, n.a.createElement(ze.a, {
								autoplayPref: e,
								className: d.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: t || s,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !1,
								showFull: !0
							}), n.a.createElement("div", {
								className: d.seeMore
							}, "...", Qt._("More", null, {
								hk: "362mDE"
							}))))
						} const x = n.a.createElement(h.a, {
						className: d.header
					}, s.isSponsored ? Qt._("Promoted", null, {
						hk: "2QTd86"
					}) : Qt._("Top Post", null, {
						hk: "R69MV"
					}));
					return n.a.createElement(Ye.a, {
						postId: s.id
					}, n.a.createElement(Ge.a, {
						className: d.container,
						eventFactory: this.itemPostClickEventFactory,
						onClick: e => this.onClickPost(e),
						post: s,
						"data-click-id": "hero_unit"
					}, n.a.createElement(u.a, {
						className: d.layout,
						headerClassName: Object(R.a)({
							[d.layoutHeader]: s.isSponsored
						}),
						bodyClassName: Object(R.a)({
							[d.layoutBody]: s.isSponsored
						}),
						header: s.isSponsored ? null : x
					}, n.a.createElement(l, {
						header: x,
						mainContent: p,
						post: s,
						previewText: C,
						searchDiscoveryUnit: a,
						subredditOrProfile: i,
						showPromotedCTA: o
					}))))
				}
			}
			var ss = Object(_.u)()(es(Object(De.c)(ts))),
				rs = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/TrendingHeroScrollWrapper.tsx"),
				ns = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less"),
				as = s.n(ns);
			const os = Object(_.u)(),
				is = () => null;
			var cs = os(n.a.memo(e => {
				const {
					listingKey: t,
					pageLayer: s,
					searchOptions: a,
					searchDiscoveryUnit: o
				} = e, i = Object(Ee.a)(), c = Object(r.useCallback)(e => {
					i(Object(Oe.m)(a, s, void 0, t, e, o))
				}, [i, a, s, t, o]);
				return n.a.createElement(I.b.Provider, {
					value: c
				}, n.a.createElement(_e.a.Provider, {
					value: !0
				}, n.a.createElement(Ce.a, {
					className: as.a.postList,
					disablePlaceholder: !0,
					heroPostId: e.heroPostId,
					key: "posts",
					listingKey: e.listingKey,
					listingName: e.listingName,
					listingViewed: e.onViewed,
					location: e.location,
					inSubredditOrProfile: !1,
					noPostsComponent: is,
					onLoadMore: e.morePostsRequested,
					searchOptions: e.searchOptions,
					searchDiscoveryUnit: e.searchDiscoveryUnit
				})))
			}));
			var ds = Object(_.u)()(Object(De.c)(e => {
					const {
						listingKey: t,
						listingName: s,
						location: r,
						onViewed: a,
						searchDiscoveryUnitsModels: o,
						searchDiscoveryUnitsOrder: i,
						searchOptions: c
					} = e, d = Object(Ae.a)(o);
					return n.a.createElement(n.a.Fragment, null, i.map(e => {
						if (o[e]) return ((e, o) => {
							const {
								viewTypeWeb: i
							} = e.layout, {
								Carousel: d,
								Hero: l,
								PromotedTrendHero: m,
								Row: u
							} = Be.b;
							switch (e.type) {
								case Be.a.Posts:
									if (i === d) return n.a.createElement(v, {
										heroPostId: o,
										listingKey: t,
										key: e.id,
										searchDiscoveryUnit: e,
										searchOptions: c
									});
									if (i === l || i === m) return n.a.createElement(rs.a, {
										key: o,
										postId: o,
										discoveryUnit: e,
										searchOptions: c,
										listingKey: t
									}, n.a.createElement(ss, {
										searchDiscoveryUnit: e,
										searchOptions: c,
										listingKey: t
									}));
									if (i === u) return n.a.createElement(cs, {
										searchDiscoveryUnit: e,
										heroPostId: o,
										key: e.id,
										listingKey: t,
										listingName: s,
										location: r,
										onViewed: a,
										morePostsRequested: () => {},
										searchOptions: c
									});
									break;
								case Be.a.Communities:
									if (i === d) return n.a.createElement(pe, {
										listingKey: t,
										key: e.id,
										searchDiscoveryUnit: e,
										searchOptions: c
									});
									break;
								default:
									return null
							}
						})(o[e], d || "")
					}))
				})),
				ls = s("./src/reddit/constants/page.ts"),
				ms = s("./src/reddit/helpers/trackers/screenview.ts"),
				us = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ps = s("./src/reddit/selectors/searchResults.ts");
			const hs = {
					unitName: us.g
				},
				bs = {
					unitName: us.h
				},
				Cs = Object(o.c)({
					hasCommunityResults: ps.i,
					hasPostResults: ps.j,
					postsDiscoveryUnit: e => Object(C.c)(e, hs),
					subredditsDiscoveryUnit: e => Object(C.c)(e, bs),
					searchDiscoveryUnitsModels: f.b,
					searchDiscoveryUnitsOrder: f.c,
					viewTreatment: ps.w
				}),
				xs = Object(a.b)(Cs, e => ({
					morePostsRequested: () => e(Object(c.q)([i.Zb.Posts]))
				})),
				fs = Object(_.u)();
			class ys extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(ms.u)(this.props.listingKey, this.props.searchOptions, t, e, this.props.pageLayer, Object(je.b)(this.props))
				}
				render() {
					const {
						hasCommunityResults: e,
						hasPostResults: t,
						listingKey: s,
						listingName: r,
						location: a,
						morePostsRequested: o,
						postsDiscoveryUnit: i,
						searchDiscoveryUnitsModels: c,
						searchDiscoveryUnitsOrder: d,
						searchOptions: l,
						subredditsDiscoveryUnit: m,
						tab: u,
						viewTreatment: p
					} = this.props;
					switch (u) {
						case ls.h.Posts:
							return n.a.createElement(Me, {
								hasPostResults: t,
								listingKey: s,
								listingName: r,
								location: a,
								morePostsRequested: o,
								onViewed: this.onViewed,
								searchOptions: l,
								tab: u
							});
						case ls.h.Listings:
							return n.a.createElement(Re.a, {
								hasCommunityResults: e,
								listingKey: s,
								listingName: r,
								searchOptions: l,
								tab: u
							});
						case ls.h.Top:
						default: {
							const h = p === Be.c.Trending;
							return n.a.createElement(n.a.Fragment, null, h ? n.a.createElement(ds, {
								listingKey: s,
								listingName: r,
								location: a,
								morePostsRequested: o,
								onViewed: this.onViewed,
								searchDiscoveryUnitsModels: c,
								searchDiscoveryUnitsOrder: d,
								searchOptions: l
							}) : n.a.createElement(Le, {
								hasCommunityResults: e,
								hasPostResults: t,
								listingKey: s,
								listingName: r,
								morePostsRequested: o,
								onViewed: this.onViewed,
								postsDiscoveryUnit: i,
								searchOptions: l,
								subredditsDiscoveryUnit: m,
								tab: u
							}))
						}
					}
				}
			}
			t.a = fs(xs(ys))
		},
		"./src/reddit/components/SearchResultsContent/redesign.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "EmAI60CZ6hqtjh7kIC2SS"
			}
		},
		"./src/reddit/components/SearchResultsContent/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Be
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/search/index.ts"),
				c = s("./node_modules/lodash/constant.js"),
				d = s.n(c),
				l = s("./node_modules/lodash/times.js"),
				m = s.n(l),
				u = s("./src/reddit/components/SearchResultsContent/Communities/index.tsx"),
				p = s("./src/reddit/selectors/searchResults.ts"),
				h = s("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx"),
				b = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				C = s.n(b),
				x = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx");
			const f = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, r = Object(o.e)(e => Object(p.a)(e, {
					listingKey: t
				})), n = Object(o.e)(e => Object(p.r)(e, {
					listingKey: t
				}));
				return a.a.createElement("div", {
					className: C.a.container,
					"data-testid": "authors-list"
				}, !s.is_multi && a.a.createElement(h.a, {
					identifiers: r,
					listingKey: t,
					searchOptions: s
				}), Object(u.b)({
					identifiers: r,
					loadMore: n
				}) && a.a.Children.toArray(m()(3, d()(a.a.createElement(x.a, {
					className: C.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var y = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				g = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				v = s("./src/reddit/components/SearchResultsContent/NoResults/redesign.tsx");

			function O(e) {
				const {
					hasAuthorsResults: t,
					listingKey: s,
					searchOptions: r
				} = e, n = r.is_multi || r.category, c = t && !Object(y.a)(r.q), d = Object(i.a)(r.q || ""), l = Object(o.e)(t => Object(p.c)(t, e)), m = void 0 === l || l;
				return a.a.createElement(a.a.Fragment, null, c || m ? a.a.createElement(f, {
					key: "authorsPreview",
					listingKey: s,
					searchOptions: r
				}) : !n && a.a.createElement(v.a, {
					searchOptions: r,
					query: d,
					type: g.b.People
				}))
			}
			var E = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/CommunitiesResults.tsx"),
				j = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				_ = s.n(j),
				k = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/hooks/usePrevious.ts"),
				N = s("./src/lib/makeSearchKey/index.ts"),
				I = s("./src/reddit/actions/search.ts"),
				P = s("./src/config.ts"),
				w = s("./src/lib/intersectionObserver/index.ts"),
				T = s("./src/lib/isUrl/index.ts"),
				L = s("./src/lib/opener/index.ts"),
				R = s("./src/reddit/actions/post.ts"),
				F = s("./src/reddit/components/BlankPost/index.tsx"),
				M = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/Media/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				V = s("./src/reddit/constants/adEvents.ts"),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/Post/index.tsx"),
				K = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Z = s("./src/reddit/helpers/clickSourceData/index.ts"),
				z = s("./src/reddit/helpers/overlay/index.ts"),
				G = s("./src/reddit/helpers/path/index.ts"),
				J = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Q = s("./src/reddit/helpers/trackers/searchResults.ts"),
				X = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/showPromotedCTA.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./node_modules/reselect/es/index.js"),
				se = s("./src/lib/getShortenedLink.ts"),
				re = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				ne = s("./src/reddit/components/PostTitle/index.tsx"),
				ae = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				oe = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				ie = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ce = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				de = s("./src/reddit/components/CallToActionButton/index.tsx"),
				le = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				me = s("./src/reddit/hooks/useTheme.ts"),
				ue = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/redesign.m.less"),
				pe = s.n(ue);
			const {
				fbt: he
			} = s("./node_modules/fbt/lib/FbtPublic.js"), be = `${P.a.assetPath}/img/link-placeholder.png`, Ce = Object(te.c)({
				autoplayPref: ee.b,
				showPromotedCTA: $.b,
				flairStyleTemplate: H.U
			});

			function xe(e) {
				var t;
				const {
					postId: s,
					listingKey: i,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(n.useRef)(), m = Object(n.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: p,
					showPromotedCTA: h
				} = Object(o.e)(t => Ce(t, e)), b = Object(o.e)(e => Object(Y.d)(e, {
					postId: s
				})), C = Object(H.eb)(), x = Object(W.b)(), f = Object(o.d)(), y = Object(me.a)(), {
					post: g,
					subredditOrProfile: v
				} = Object(q.d)(s), O = Object(n.useCallback)((e, t) => {
					f(Object(R.P)(e, t))
				}, [f]), E = !!g.source && !b;
				if (Object(n.useEffect)(() => (l.current && Object(w.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(Q.h)(i, c, d), () => {
						l.current && Object(w.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !g) return null;
				const {
					media: j
				} = b || g || {}, _ = (null == j ? void 0 : j.type) === X.o.EMBED && (null == j ? void 0 : j.provider) === X.v.Twitter, k = (null == j ? void 0 : j.type) === X.o.VIDEO || (null == j ? void 0 : j.type) === X.o.GIFVIDEO;

				function S(e) {
					e.stopPropagation(), e.preventDefault(), x(Object(Q.s)(g.id, "search_result_post", c, d)), g.isSponsored ? (f(Object(R.z)(g, V.a.Click)), g.source ? g.source.outboundUrl ? Object(L.e)(g.source.outboundUrl, L.d.BLANK) : Object(L.e)(g.source.url, L.d.BLANK) : Object(L.e)(g.permalink, L.d.BLANK)) : f(Object(z.a)({
						pathname: Object(G.b)(g.permalink),
						state: Object(Z.a)(C)
					}))
				}

				function N(e) {
					g.isSponsored && k || S(e), g.isSponsored && function(e) {
						k || (e.stopPropagation(), e.preventDefault()), x(Object(Q.u)(g.id, c, d, i, C))
					}(e)
				}
				return g.isBlank ? a.a.createElement(F.BlankPost, {
					onPostViewable: O,
					post: g,
					postId: g.id
				}) : a.a.createElement(q.a, {
					postId: s
				}, a.a.createElement(B.a, {
					className: pe.a.postContainer,
					eventFactory: function(e, t) {
						let s;
						return (s = "subreddit" === t ? J.C(c, C, i, d) : g && g.isSponsored ? J.A(c, C, i, d) : J.D(c, C, i, d))(e)
					},
					onClick: S,
					post: g,
					"data-click-id": "hero_unit",
					style: {
						...Object(le.d)({
							theme: y,
							flairStyleTemplate: p,
							redditStyle: !1
						}),
						...Object(le.b)(p)
					}
				}, a.a.createElement(re.a, {
					"data-click-id": "background"
				}, a.a.createElement(M.a, {
					className: pe.a.eventMeta,
					post: g
				}), a.a.createElement("div", {
					className: Object(r.a)(pe.a.postContent, {}),
					"data-click-id": "body"
				}, a.a.createElement(oe.a, {
					className: pe.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: g,
					subredditOrProfile: v
				}), a.a.createElement("div", {
					className: pe.a.postItemTitleContainer
				}, a.a.createElement(ne.c, {
					hideSourceLink: !0,
					post: g,
					size: ne.b.Medium,
					isOverlay: !1
				}), !h && E && a.a.createElement(ie.a, {
					className: pe.a.outboundLink,
					href: (null === (t = null == g ? void 0 : g.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: g.isSponsored,
					postId: g.id,
					source: g.source
				}, Object(se.a)(g))), function() {
					let e = a.a.createElement(a.a.Fragment, null);
					const t = !!g.source && Object(T.a)(g.source.url) || !!g.thumbnail && Object(T.a)(g.thumbnail.url),
						s = !j && t,
						n = Object(r.a)(pe.a.mediaWrapper, {
							[pe.a.marginCancel]: h && !!g.source,
							[pe.a.promotedTrend]: g.isSponsored
						});
					if (s) e = a.a.createElement("div", {
						className: n
					}, a.a.createElement(U.a, {
						className: pe.a.thumbnail,
						post: g,
						templatePlaceholderImage: be,
						usePreview: !0
					}));
					else if (j)
						if (j.type !== X.o.RTJSON && j.type !== X.o.TEXT) e = a.a.createElement("div", {
							className: Object(r.a)(n, _ && pe.a.twitterEmbed),
							onClickCapture: N,
							ref: e => l.current = e
						}, a.a.createElement(D.a, {
							className: pe.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: g.isSponsored,
							post: b || g,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = a.a.createElement("div", {
								className: pe.a.mediaPlaceholder
							}), (j.type === X.o.RTJSON && j.richtextContent || j.type === X.o.TEXT && j.content) && Object(K.a)(g) && (e = a.a.createElement("div", {
								className: n,
								onClickCapture: S,
								ref: e => l.current = e
							}, a.a.createElement(D.a, {
								autoplayPref: u,
								className: pe.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: b || g,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), a.a.createElement("div", {
								className: pe.a.seeMore
							}, he._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), h && g.source && a.a.createElement(ce.a, {
					className: pe.a.adLinkWrapper
				}, a.a.createElement(ie.a, {
					className: Object(r.a)(pe.a.outboundLink),
					href: g.source.url.replace(P.a.redditUrl, ""),
					isSponsored: g.isSponsored,
					postId: g.id,
					source: g.source
				}, g.source.displayText), g.callToAction && a.a.createElement(de.a, {
					className: pe.a.adCallToAction,
					href: g.source.url.replace(P.a.redditUrl, ""),
					isSponsored: g.isSponsored,
					postId: g.id,
					source: g.source
				}, g.callToAction)), !g.isSponsored && a.a.createElement(ae.a, {
					className: Object(r.a)(pe.a.postItemFlatlistContainer),
					post: g
				}), a.a.createElement(A.d, null)))))
			}
			var fe = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/TrendingHeroScrollWrapper.tsx"),
				ye = s("./src/reddit/helpers/trackers/screenview.ts"),
				ge = s("./src/reddit/hooks/usePageLayer.ts"),
				ve = s("./src/reddit/hooks/useTracking.ts"),
				Oe = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ee = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				je = s("./src/reddit/selectors/listings.ts"),
				_e = s("./src/reddit/selectors/platform.ts"),
				ke = s("./src/reddit/selectors/searchDiscoveryUnits.ts"),
				Se = s("./src/reddit/selectors/searchFix.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Ie = s("./src/telemetry/models/Timer.ts"),
				Pe = s("./src/reddit/components/SearchResultsContent/helpers/getHeroPostId.tsx"),
				we = s("./src/reddit/components/SearchResultsContent/SearchResultsPostList.tsx");
			const Te = () => null,
				Le = Object(te.c)({
					viewTreatment: p.w,
					searchDiscoveryUnitsModels: ke.b,
					hasBestResults: p.j,
					apiPending: je.d,
					postIds: Y.A,
					posts: Y.z,
					loadMore: je.g,
					isOverlayOpen: _e.i
				});

			function Re(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: c
				} = e, d = Object(ge.a)(), l = Object(ve.a)(), m = Object(o.d)(), {
					viewTreatment: u,
					searchDiscoveryUnitsModels: h,
					hasBestResults: b,
					postIds: C,
					posts: x,
					loadMore: f,
					isOverlayOpen: y,
					apiPending: O
				} = Object(o.e)(t => Le(t, e)), E = Object(o.e)(e => Object(H.o)(e, {
					pageLayer: d
				})), {
					username: j,
					multiredditName: P
				} = Object(H.d)(d) || {}, w = Object(S.a)(y), T = Object(N.b)(E || P, j, {
					...c,
					type: [k.Zb.Posts]
				}), L = Object(o.e)(e => Object(p.j)(e, {
					listingKey: T
				})), R = void 0 === O || O, F = (e, s) => l(Object(ye.u)(t, c, s, e, d, Object(Se.b)({
					pageLayer: d
				})));
				let M;
				Object(n.useEffect)(() => {
					!b || L || _()(C) || m(Object(I.p)(T, C, x, [k.Zb.Posts], f))
				}, [b, L, C]), Object(n.useEffect)(() => {
					b && !_()(C) && U()
				}, [b, C]), Object(n.useEffect)(() => {
					w && !y && U()
				}, [y, w]), u === Ee.c.Trending && (M = Object(Pe.a)(h));
				const A = Object(i.a)(c.q || ""),
					D = Object(n.useMemo)(() => Object.values(h).find(e => e.name === Oe.m || e.name === Oe.f), [h]),
					B = M && D;

				function U() {
					if (Ne.c.has(t)) {
						const e = Ne.c.end(t);
						F(e, Ie.TimerType.InApp)
					}
				}
				return b || B || R ? a.a.createElement(a.a.Fragment, null, B && a.a.createElement(fe.a, {
					key: M,
					postId: M,
					discoveryUnit: D,
					searchOptions: c,
					listingKey: t
				}, a.a.createElement(xe, {
					key: M,
					discoveryUnit: D,
					postId: M,
					listingKey: t,
					searchOptions: c
				})), (b || R) && a.a.createElement(we.a, {
					key: "posts",
					listingKey: T,
					listingName: s,
					location: r,
					inSubredditOrProfile: !1,
					noPostsComponent: Te,
					onLoadMore: function() {
						m(Object(I.q)([k.Zb.Posts]))
					},
					searchOptions: c
				})) : a.a.createElement(v.a, {
					query: A,
					type: g.b.Posts,
					searchOptions: c
				})
			}
			var Fe = s("./src/reddit/constants/page.ts"),
				Me = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				Ae = s("./src/reddit/components/SearchResultsContent/redesign.m.less"),
				De = s.n(Ae);

			function Be(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: i,
					tab: c
				} = e, d = Object(o.e)(e => Object(Me.e)(e)), l = Object(o.e)(s => d ? Object(p.h)(s, {
					listingKey: t
				}) : Object(p.i)(s, e)), m = Object(o.e)(e => Object(p.g)(e, {
					listingKey: t
				}));
				return a.a.createElement("div", {
					className: Object(r.a)(De.a.resultsContainer)
				}, c === Fe.h.Listings ? a.a.createElement(E.a, {
					hasCommunityResults: l,
					listingKey: t,
					listingName: s,
					searchOptions: i,
					tab: c
				}) : d && c === Fe.h.Authors ? a.a.createElement(O, {
					hasAuthorsResults: m,
					listingKey: t,
					searchOptions: i
				}) : a.a.createElement(Re, {
					key: t,
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: i
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less": function(e, t, s) {
			e.exports = {
				Spacer: "GOElXytTteFnMub22F_Vt",
				spacer: "GOElXytTteFnMub22F_Vt"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/CommunitiesResults.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/search/index.ts"),
				i = s("./src/reddit/components/SearchResultsContent/Communities/index.tsx"),
				c = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				d = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				l = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				m = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				u = s("./src/reddit/selectors/listings.ts"),
				p = s("./src/reddit/components/SearchResultsContent/NoResults/redesign.tsx");

			function h(e) {
				const {
					hasCommunityResults: t,
					listingKey: s,
					listingName: r,
					searchOptions: h,
					tab: b
				} = e, C = h.is_multi || h.category, x = Object(a.e)(m.d), f = Object(a.e)(t => Object(u.h)(t, e)), y = t && !Object(l.a)(h.q), g = Object(o.a)(h.q || ""), v = void 0 === f || f;
				return n.a.createElement(n.a.Fragment, null, x ? y || v ? n.a.createElement(i.a, {
					key: "communitiesPreview",
					listingKey: s,
					searchOptions: h
				}) : !C && n.a.createElement(p.a, {
					query: g,
					type: c.b.Communities,
					searchOptions: h
				}) : n.a.createElement(n.a.Fragment, null, n.a.createElement(d.a, {
					key: "subNav",
					searchOptions: h,
					subredditName: r,
					tab: b
				}), y || v ? n.a.createElement(i.a, {
					key: "communitiesPreview",
					listingKey: s,
					searchOptions: h
				}) : !C && n.a.createElement(c.a, {
					query: g,
					type: c.b.Communities,
					searchOptions: h
				})))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less": function(e, t, s) {
			e.exports = {
				postList: "_3DKpvMPtj9USfmesFmERqc"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/selectors/searchFix.ts"),
				n = s("./src/reddit/selectors/subreddit.ts");
			const a = (e, t) => {
				const s = Object(r.a)(e, t);
				return s ? Object(n.w)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				subredditName: "_2qt_wFNwf1Nfy1x73i1HFG",
				icon: "_3DuNwpHyVCczHzo0uGKTbQ"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/history/esm/history.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/search/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/components/MoreCommunitiesIcon/index.m.less"),
				u = s.n(m);
			const p = s("./src/lib/lessComponent.tsx").a.wrapped(l.a, "InternalLink", u.a),
				h = ({
					currentPageUrl: e,
					numCommunities: t,
					searchQuery: s
				}) => o.a.createElement(p, {
					className: u.a.moreCommunities,
					to: e ? Object(c.c)(e, s, {
						type: [i.Zb.Subreddits, i.Zb.Users].join(",")
					}) : "#"
				}, o.a.createElement("span", {
					className: u.a.numCommunities
				}, t));
			var b = s("./src/reddit/components/ShareMenu/index.tsx"),
				C = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/trackers/searchResults.ts"),
				g = s("./src/reddit/icons/fonts/Share/index.tsx"),
				v = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				O = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				E = s.n(O);
			const j = 5,
				_ = [];
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.onFollow = () => {
						this.props.sendEvent(Object(y.g)("trending_header", this.state.isFollowed ? "unfollow" : "follow", this.props.searchOptions)), this.setState({
							isFollowed: !this.state.isFollowed
						})
					}, this.onShare = () => {
						this.props.sendEvent(Object(y.g)("trending_header", "share", this.props.searchOptions))
					}, this.onShareMenuClick = e => {
						this.props.sendEvent(Object(y.A)(e, this.props.searchOptions))
					}, this.state = {
						isFollowed: !1
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isCategorySearch: s,
						isInFollowExperiment: n,
						isSubreddit: a,
						isTrendingSearch: i,
						searchOptions: d,
						searchQuery: l,
						suffix: m
					} = this.props, u = t && !a && t.subredditIcons ? t.subredditIcons.length <= j ? t.subredditIcons : t.subredditIcons.slice(0, j - 1) : _, p = Object(c.a)(l).replace("flair_name:", "flair:").replace('"', "").replace('"', ""), y = t && t.subredditIcons.length > j && o.a.createElement(h, {
						currentPageUrl: e,
						searchQuery: l,
						numCommunities: t.subredditIcons.length ? t.subredditIcons.length - j + 1 : 0
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: E.a.bold
					}, s ? d[C.c] : p), o.a.createElement("p", {
						className: E.a.metaData
					}, m), o.a.createElement("div", {
						className: E.a.metaDataContainer
					}, o.a.createElement(f.a, {
						className: E.a.metaData,
						isHeaderContent: !0,
						subredditIcons: u,
						suffix: y
					}), i && n && (this.state.isFollowed ? o.a.createElement(x.o, {
						className: E.a.follow,
						onClick: this.onFollow
					}, r.fbt._("Unfollow", null, {
						hk: "ddl2J"
					})) : o.a.createElement(x.l, {
						className: E.a.follow,
						onClick: this.onFollow
					}, o.a.createElement(v.a, {
						className: E.a.icon
					}), r.fbt._("Follow", null, {
						hk: "4ddkyZ"
					}))), i && !n && e && o.a.createElement(b.a, {
						dropdownId: "rails-share-button",
						permalink: e,
						sendEventWithName: this.onShareMenuClick,
						subredditType: null
					}, o.a.createElement(S, {
						onClick: this.onShare
					}))))
				}
			}
			const S = o.a.memo(({
				onClick: e
			}) => {
				const t = r.fbt._("Share", null, {
					hk: "1PIfHd"
				});
				return o.a.createElement(x.t, {
					className: E.a.share,
					"data-click-id": "share",
					onClick: e,
					text: t,
					Icon: g.a,
					priority: x.c.Plain,
					size: x.d.XS
				})
			});
			var N = k,
				I = s("./src/reddit/components/SubredditIcon/index.tsx"),
				P = s("./src/reddit/components/TabNav/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				L = s("./src/reddit/constants/page.ts"),
				R = s("./src/reddit/helpers/history/index.ts"),
				F = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				M = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				A = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				B = s.n(D);
			class U extends o.a.Component {
				constructor() {
					super(...arguments), this.sendTopTabClickEvent = () => {
						this.props.tab === L.h.Top && this.props.sendEvent(Object(y.i)(y.a.TopResults, this.props.searchOptions))
					}, this.sendPostsTabClickEvent = () => {
						this.props.tab === L.h.Posts && this.props.sendEvent(Object(y.i)(y.a.Posts, this.props.searchOptions))
					}, this.sendCommunitiesTabClickEvent = () => {
						this.props.tab === L.h.Listings && this.props.sendEvent(Object(y.i)(y.a.CommunitiesAndUsers, this.props.searchOptions))
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: a,
						searchOptions: m,
						sendEvent: u,
						subreddit: p,
						tab: h,
						viewTreatment: b
					} = this.props, x = m[C.c] || (t ? t.searchQuery || "" : m.q || ""), f = !(!p || !m.restrict_sr), y = !!m[C.c], g = b === A.c.Trending, v = Object(n.e)(a);
					let O = r.fbt._("Search results", null, {
						hk: "1N3gsY"
					});
					x && (f ? O = p.icon && p.icon.url ? o.a.createElement("span", null, r.fbt._("Search results in {subreddit name}", [r.fbt._param("subreddit name", o.a.createElement(d.a, {
						subredditName: p.name
					}, o.a.createElement(l.a, {
						to: `/r/${p.name}/`
					}, o.a.createElement(I.b, {
						className: B.a.icon,
						key: p.icon.url,
						iconUrl: p.icon.url
					}), o.a.createElement("span", {
						className: B.a.subredditName
					}, p.displayText))))], {
						hk: "JrpKl"
					})) : r.fbt._("Search results in {subreddit name}", [r.fbt._param("subreddit name", p.displayText)], {
						hk: "JrpKl"
					}) : (y || g) && t && t.displayText && (O = r.fbt._("Topic • {topic name} and {num occurrences} more communities talking about this", [r.fbt._param("topic name", t.displayText), r.fbt._param("num occurrences", t.subredditOccurrences.toString())], {
						hk: "4hWnTn"
					})));
					const E = o.a.createElement(N, {
						currentPageUrl: e,
						headerContent: g || y ? t : void 0,
						isInFollowExperiment: s,
						isSubreddit: f,
						isCategorySearch: y,
						isTrendingSearch: g,
						searchOptions: m,
						searchQuery: x,
						sendEvent: u,
						suffix: O
					});
					return o.a.createElement(P.c, {
						title: E,
						isCategoryPage: !!m[C.c]
					}, !f && o.a.createElement(o.a.Fragment, null, o.a.createElement(P.a, {
						active: h === L.h.Top,
						onClick: this.sendTopTabClickEvent,
						key: "top",
						to: Object(M.a)(a, x, "")
					}, r.fbt._("Best results", null, {
						hk: "40v7Dh"
					})), !Object(F.a)(x) && o.a.createElement(P.a, {
						active: h === L.h.Posts,
						onClick: this.sendPostsTabClickEvent,
						key: "posts",
						to: Object(M.a)(a, x, i.Zb.Posts)
					}, r.fbt._("Posts", null, {
						hk: "vNVpl"
					})), !Object(F.a)(x) && !m.is_multi && o.a.createElement(P.a, {
						active: h === L.h.Listings,
						onClick: this.sendCommunitiesTabClickEvent,
						key: "listings",
						to: {
							pathname: a.pathname,
							state: {
								[T.b.SearchOriginPage]: Object(R.b)(T.b.SearchOriginPage)
							},
							search: Object(c.c)(v, x, {
								type: [i.Zb.Subreddits, i.Zb.Users].join(",")
							}).replace(a.pathname + "?", "")
						}
					}, r.fbt._("Communities and users", null, {
						hk: "xcZ7c"
					}))))
				}
			}
			t.a = Object(w.c)(U)
		},
		"./src/reddit/components/SearchResultsNav/redesign.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_3ZVtna7z8ubZ_0xlkz8Ciq",
				pillRow: "_17ENg3CVcX9h4tizklzbBA",
				pillElement: "_3VRnVFcuw-VlyOQOYOl2aT",
				nsfwToggleContainer: "_3KyUURG8nII7n1aWXzDEp5",
				searchSwitcherContainer: "_2BNEgx5vpNc1uuNtccLon7"
			}
		},
		"./src/reddit/components/SearchResultsNav/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/page.ts"),
				d = s("./src/reddit/constants/parameters.ts"),
				l = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/trackers/searchResults.ts"),
				h = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./node_modules/lodash/noop.js"),
				C = s.n(b),
				x = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				f = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				y = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./node_modules/history/esm/history.js"),
				O = s("./node_modules/react-router-redux/es/index.js"),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/colors/constants.ts"),
				_ = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				k = s("./src/reddit/constants/tracking.ts"),
				S = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				N = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				w = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				T = s.n(w);
			const L = "safe-search-toggle";

			function R({
				searchOptions: e
			}) {
				const t = Object(m.a)(),
					[s, n] = a.a.useState(!0);
				a.a.useEffect(() => n(null), []);
				const i = Object(N.a)({}),
					{
						nsfwSessionSetting: c,
						setNsfwSessionSetting: l
					} = Object(P.a)(),
					u = Object(o.d)();
				i.arrowProps.style = {
					...i.arrowProps.style,
					borderBottom: `3px solid ${j.e}`
				}, i.popperProps.style = {
					...i.popperProps.style,
					backgroundColor: j.e
				};
				const p = null != s ? s : !c;
				return a.a.createElement("div", {
					className: Object(E.a)(T.a.searchNSFWToggle),
					"data-testid": L,
					onMouseEnter: i.show,
					onMouseLeave: i.hide
				}, a.a.createElement("label", {
					htmlFor: L,
					className: Object(E.a)(T.a.searchNSFWToggleLabel)
				}, r.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(S.a, {
					activeColorOverride: j.a,
					id: L,
					onToggle: function() {
						t(t => (function(t, s) {
							return {
								action: s ? k.c.DISABLE : k.c.ENABLE,
								source: "search",
								noun: "nsfw",
								actionInfo: Object(I.actionInfo)(t),
								search: Object(I.search)(t, e)
							}
						})(t, !p));
						const s = !c;
						l(s);
						const r = new URLSearchParams(location.search);
						s ? r.set(d.i, "1") : r.delete(d.i), u(Object(O.b)(Object(v.c)({
							pathname: location.pathname,
							search: r.toString()
						})))
					},
					on: p,
					redditStyle: !0,
					ref: i.target.ref
				}), a.a.createElement(_.a, {
					visible: i.visible,
					arrowProps: i.arrowProps,
					popperProps: i.popperProps
				}, p && r.fbt._("Turn off safe search to show adult and NSFW (Not Safe for Work) search results", null, {
					hk: "E5puY"
				}), !p && r.fbt._("Turn on safe search to hide adult and NSFW (Not Safe for Work) search results", null, {
					hk: "1G2k8"
				})))
			}
			var F = s("./src/reddit/components/SearchResultsNav/redesign.m.less"),
				M = s.n(F);

			function A({
				activeTab: e,
				location: t,
				searchOptions: s,
				searchSwitcher: n
			}) {
				const b = Object(m.a)(),
					v = Object(o.e)(g.eb),
					O = Object(o.e)(y.w),
					E = Object(o.e)(f.e),
					j = Object(o.e)(f.b),
					_ = Object(o.e)(f.c),
					k = Object(o.e)(f.f),
					S = O === x.c.Trending,
					N = s[d.c] || s.q || "",
					I = {
						condition: !0,
						active: e === c.h.Posts,
						target: p.a.Posts,
						key: "posts",
						contentTypes: "",
						text: r.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					P = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Listings,
						target: p.a.CommunitiesAndUsers,
						key: "listings",
						contentTypes: [i.Zb.Subreddits, i.Zb.Users].join(","),
						text: r.fbt._("Communities and People", null, {
							hk: "1RJS0U"
						})
					},
					w = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Listings,
						target: p.a.Communities,
						key: "communities",
						contentTypes: i.Zb.Subreddits,
						text: r.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					T = {
						...w,
						text: r.fbt._("Communities and People", null, {
							hk: "1RJS0U"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Authors,
						target: p.a.Authors,
						key: "authors",
						contentTypes: i.Zb.Users,
						text: r.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					F = [I, ...E ? j ? [w, L] : [T] : [P]],
					A = _ && v && !S && (!k || "1" !== s.sr_nsfw);
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: M.a.searchResultsNav
				}, a.a.createElement("div", {
					className: M.a.pillRow,
					role: "tablist"
				}, F.filter(e => e.condition).map(e => {
					const {
						active: r,
						key: n,
						text: o,
						contentTypes: i
					} = e;
					return a.a.createElement(u.a, {
						key: n,
						to: Object(l.a)(t, N, i),
						"aria-selected": r,
						role: "tab",
						className: M.a.pillElement,
						onClick: () => (e => {
							e.active && b(Object(p.i)(e.target, s))
						})(e)
					}, a.a.createElement(h.a, {
						active: r,
						onClick: C.a,
						variant: h.b.TAB_GROUP
					}, o))
				})), n && a.a.createElement("div", {
					className: M.a.searchSwitcherContainer
				}, n), A && a.a.createElement("div", {
					className: M.a.nsfwToggleContainer
				}, a.a.createElement(R, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/CreateCommunitySidebar/index.tsx"),
				c = s("./src/reddit/components/IdCard/async.tsx"),
				d = s("./src/reddit/components/SidebarContainer/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				p = s("./src/reddit/components/Widgets/RelatedQueries/index.tsx"),
				h = s("./src/reddit/selectors/searchResults.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/widgets.ts");
			const f = Object(o.c)({
				isLoggedIn: C.K,
				subredditId: (e, {
					listingName: t
				}) => Object(b.B)(e, t),
				postFlairWidgets: (e, {
					listingName: t
				}) => {
					const s = Object(b.B)(e, t);
					return Object(x.g)(e, {
						subredditId: s
					})
				},
				relatedQueries: (e, {
					searchOptions: t
				}) => Object(h.u)(e, t.q),
				idCardWidget: (e, {
					listingName: t
				}) => Object(x.d)(e, {
					subredditName: t
				})
			});
			t.a = Object(a.b)(f)(e => n.a.createElement(d.a, {
				className: e.className
			}, e.subredditId && e.searchOptions.restrict_sr && e.idCardWidget && n.a.createElement(c.a, {
				listingName: e.listingName
			}), !e.searchOptions.restrict_sr && e.isLoggedIn && n.a.createElement(i.a, null), e.subredditId && e.searchOptions.restrict_sr && e.postFlairWidgets && e.postFlairWidgets.map((t, s) => n.a.createElement(l.a, {
				key: `widgetSpacer-${s}`
			}, n.a.createElement(u.a, {
				subredditName: e.listingName,
				widget: t
			}))), e.searchOptions.q && e.relatedQueries && e.relatedQueries.length > 0 && n.a.createElement(l.a, {
				key: "widgetSpacer-relatedQueries"
			}, n.a.createElement(p.a, {
				searchOptions: e.searchOptions,
				relatedQueries: e.relatedQueries
			})), n.a.createElement(m.a, null)))
		},
		"./src/reddit/components/SearchResultsSidebar/redesign.m.less": function(e, t, s) {
			e.exports = {
				container: "_2JPypBjLPFQo1pLekHV0qq",
				header: "_1yTIcK7yas2a1pWJ4dACIl",
				link: "bu5zz8fSZ1Co_SUENbJO0",
				noResults: "_3PeQ2IPF2UQbSSKdEQNQuH"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/CreateCommunitySidebar/index.tsx"),
				l = s("./src/reddit/components/IdCard/async.tsx"),
				m = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				u = s("./src/reddit/components/SidebarContainer/index.tsx"),
				p = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				b = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				C = s("./src/reddit/components/Widgets/RelatedQueries/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				y = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				g = s("./src/reddit/selectors/searchResults.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/selectors/widgets.ts"),
				j = s("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx"),
				_ = s("./src/reddit/components/SearchResultsSidebar/redesign.m.less"),
				k = s.n(_);
			const S = Object(i.c)({
					authorIdentifiers: (e, {
						listingKey: t
					}) => Object(g.a)(e, {
						listingKey: t
					}),
					communityIdentifiers: (e, {
						listingKey: t
					}) => Object(y.e)(e) ? Object(g.d)(e, {
						listingKey: t
					}) : Object(g.l)(e, {
						listingKey: t
					}),
					isLoggedIn: O.K,
					hasCommunityResults: (e, {
						listingKey: t
					}) => Object(y.e)(e) ? Object(g.h)(e, {
						listingKey: t
					}) : Object(g.i)(e, {
						listingKey: t
					}),
					hasAuthorResults: (e, {
						listingKey: t
					}) => Object(g.g)(e, {
						listingKey: t
					}),
					peopleSerpRedesignLayoutM2: e => Object(y.b)(e),
					serpRedesignLayoutM2: e => Object(y.e)(e),
					subredditId: (e, {
						listingName: t
					}) => Object(v.B)(e, t),
					postFlairWidgets: (e, {
						listingName: t
					}) => {
						const s = Object(v.B)(e, t);
						return Object(E.g)(e, {
							subredditId: s
						})
					},
					relatedQueries: (e, {
						searchOptions: t
					}) => Object(g.u)(e, t.q),
					idCardWidget: (e, {
						listingName: t
					}) => Object(E.d)(e, {
						subredditName: t
					})
				}),
				N = ({
					authorIdentifiers: e,
					className: t,
					communityIdentifiers: s,
					hasAuthorResults: n,
					hasCommunityResults: o,
					listingKey: i,
					listingName: y,
					location: g,
					idCardWidget: v,
					isLoggedIn: O,
					peopleSerpRedesignLayoutM2: E,
					postFlairWidgets: _,
					relatedQueries: S,
					searchOptions: N,
					serpRedesignLayoutM2: I,
					subredditId: P
				}) => {
					const w = N.q || "",
						T = Boolean(P && N.restrict_sr),
						L = s.length - m.e >= 1,
						R = e.length - m.e >= 1;
					let F;
					return F = I ? E ? {
						title: r.fbt._("Communities", null, {
							hk: "3FBMAP"
						}),
						description: "Title: Communities section on search page",
						linkTitle: "See more communities",
						linkDescription: "Link: View full list of communities",
						linkTo: c.Zb.Subreddits,
						noResults: "Text: There are no communities results for your query"
					} : {
						title: r.fbt._("Communities and People", null, {
							hk: "OgL26"
						}),
						description: "Title: Communities and people section on search page",
						linkTitle: "See more communities and people",
						linkDescription: "Link: View full list of communities and people",
						linkTo: c.Zb.Subreddits,
						noResults: "Text: There are no communities or users results for your query"
					} : {
						title: r.fbt._("Communities and People", null, {
							hk: "OgL26"
						}),
						description: "Title: Communities and people section on search page",
						linkTitle: "See more communities and people",
						linkDescription: "Link: View full list of communities and people",
						linkTo: [c.Zb.Subreddits, c.Zb.Users].join(","),
						noResults: "Text: There are no communities or users results for your query"
					}, a.a.createElement(u.a, {
						"data-testid": "search-results-sidebar",
						className: t
					}, T ? a.a.createElement(a.a.Fragment, null, v && a.a.createElement(l.a, {
						listingName: y
					}), _ && _.map((e, t) => a.a.createElement(p.a, {
						key: `widgetSpacer-${t}`
					}, a.a.createElement(b.a, {
						subredditName: y,
						widget: e
					})))) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: k.a.container,
						"data-testid": "communities-list"
					}, a.a.createElement("h4", {
						className: k.a.header
					}, r.fbt._("{title}", [r.fbt._param("title", F.title), r.fbt._param("description", F.description)], {
						hk: "1gfp1L"
					})), o ? a.a.createElement(a.a.Fragment, null, !N.is_multi && a.a.createElement(m.a, {
						identifiers: s,
						listingKey: i,
						searchOptions: N,
						sidebar: !0
					}), L && a.a.createElement(x.a, {
						to: Object(f.a)(g, w, F.linkTo)
					}, a.a.createElement("p", {
						className: k.a.link
					}, r.fbt._("{link}", [r.fbt._param("link", F.linkTitle), r.fbt._param("link description", F.linkDescription)], {
						hk: "2nAtmm"
					})))) : a.a.createElement("p", {
						className: k.a.noResults
					}, r.fbt._("No results", [r.fbt._param("no results", F.noResults)], {
						hk: "ANbEn"
					}))), E && a.a.createElement("div", {
						className: k.a.container,
						"data-testid": "authors-list"
					}, a.a.createElement("h4", {
						className: k.a.header
					}, r.fbt._("People", null, {
						hk: "2M8TqB"
					})), n ? a.a.createElement(a.a.Fragment, null, !N.is_multi && a.a.createElement(j.a, {
						identifiers: e,
						listingKey: i,
						searchOptions: N,
						sidebar: !0
					}), R && a.a.createElement(x.a, {
						to: Object(f.a)(g, w, c.Zb.Users)
					}, a.a.createElement("p", {
						className: k.a.link
					}, r.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : a.a.createElement("p", {
						className: k.a.noResults
					}, r.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), O && a.a.createElement("div", {
						className: k.a.container
					}, a.a.createElement(d.a, null))), N.q && S && S.length > 0 && a.a.createElement(p.a, {
						key: "widgetSpacer-relatedQueries"
					}, a.a.createElement(C.a, {
						searchOptions: N,
						relatedQueries: S
					})), a.a.createElement(h.a, null))
				},
				I = e => {
					const t = Object(o.e)(t => S(t, e)),
						s = {
							...e,
							...t
						};
					return a.a.createElement(N, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/redesign.m.less": function(e, t, s) {
			e.exports = {
				SelectOptionRedesign: "uWk70qio6t9QaZ6O9_s7u",
				selectOptionRedesign: "uWk70qio6t9QaZ6O9_s7u",
				mIsSelected: "_1PCdvR-YgsZNx_SQwQ5196"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "beZ4JMoRI6utWyse5_dN3",
				component: "beZ4JMoRI6utWyse5_dN3",
				Title: "_36R3mEb-DeOz8uVYz46Gne",
				title: "_36R3mEb-DeOz8uVYz46Gne",
				DropdownTriangle: "_2yIW0h0fmzbVgiwwIkTLv3",
				dropdownTriangle: "_2yIW0h0fmzbVgiwwIkTLv3",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				ValueWrapper: "_1X5hAyYe2R-8Lz5D4lkfOi",
				valueWrapper: "_1X5hAyYe2R-8Lz5D4lkfOi",
				mIsOpen: "dJwEyyjgiKsX0FpI3N_-Y",
				caret: "OGoNN0lGfOACQsVwIa1wo"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/redesign.m.less": function(e, t, s) {
			e.exports = {
				caret: "_26YOIiLM0ZScbbxLq0o7I0",
				Wrapper: "_22_pCIPvWXgGDvfV4Hi_RZ",
				wrapper: "_22_pCIPvWXgGDvfV4Hi_RZ",
				caretOpen: "IygZewkx3mdNzJaZsXdvC",
				filterButton: "_2RO66v7UQZQ1jiF36lZdHr",
				hasValue: "_3ZtWvkO9UzBqHzGtsFazKv",
				Dropdown: "quoXc7zY6HHwOG6MkhLif",
				dropdown: "quoXc7zY6HHwOG6MkhLif"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return je
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/lib/search/index.ts");
			const C = (e, t, s, r, n, a) => {
				var o;
				const i = Object(b.b)(null !== (o = e[h.p]) && void 0 !== o ? o : ""),
					c = e && e[s],
					d = {};
				let l = Object(b.c)(t || "", i, {
					[s]: n
				});
				const m = [];
				for (const u of r) {
					const e = Object(b.c)(t || "", i, {
						[s]: u
					});
					d[e] = a[u](), m.push(e), c === u && (l = e)
				}
				return {
					optionLabels: d,
					options: m,
					value: l
				}
			};
			var x = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/selectors/tooltip.ts");
			const O = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(v.b)(t)(e)
				}),
				E = e => {
					const {
						isOpen: t
					} = Object(a.e)(t => O(t, {
						tooltipId: e
					})), s = Object(a.d)();
					return {
						isOpen: t,
						onClick: t ? () => s(Object(g.i)()) : () => s(Object(g.f)({
							tooltipId: e
						}))
					}
				};
			var j = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				_ = s.n(j),
				k = s("./node_modules/query-string/index.js"),
				S = s.n(k),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/history.ts"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				T = s("./src/reddit/helpers/history/index.ts"),
				L = s("./node_modules/lodash/fromPairs.js"),
				R = s.n(L),
				F = s("./src/lib/extractQueryParams/index.ts"),
				M = s("./src/reddit/helpers/correlationIdTracker.ts"),
				A = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const B = (e, t) => {
					const s = R()([...Object(F.a)(e)]);
					return Object(p.pc)(s.sort) && (t.sort = s.sort), Object(p.rc)(s.t) && (t.t = s.t), t
				},
				U = (e, t, s, r) => () => e(e => ({
					...Object(A.c)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(M.c)(M.a.SearchResults),
					actionInfo: D.actionInfo(e),
					search: D.search(e, B(s, r))
				})),
				W = ({
					option: e,
					...t
				}) => {
					const s = Object(I.b)();
					return n.a.createElement(N.a, {
						key: e,
						to: {
							pathname: S.a.parseUrl(e).url,
							state: {
								[P.b.SearchOriginPage]: Object(T.b)(P.b.SearchOriginPage)
							},
							search: e.replace(S.a.parseUrl(e).url + "?", "")
						},
						onClick: U(s, "full_search_filter_changed", e, t.searchOptions)
					}, n.a.createElement(w.b, {
						className: Object(i.a)(t.styles.SelectOption, t.isSelected && t.styles.mIsSelected),
						displayText: t.displayText,
						isSelected: t.isSelected
					}))
				};
			var V = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				H = s.n(V);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(x.a)(e => n.a.createElement(f.a, q({
					className: _.a.Component
				}, e))),
				Z = ({
					children: e,
					isOpen: t,
					...s
				}) => n.a.createElement("div", q({
					className: Object(i.a)(_.a.ValueWrapper, !!t && _.a.mIsOpen)
				}, s), e),
				z = ({
					label: e,
					options: t,
					optionLabels: s,
					searchOptions: r,
					tooltipId: a,
					value: o,
					...c
				}) => {
					const {
						isOpen: d,
						onClick: l
					} = E(a);
					return n.a.createElement("div", q({}, c, {
						className: Object(i.a)(_.a.Wrapper),
						onClick: l
					}), n.a.createElement("div", {
						className: _.a.Title
					}, e), n.a.createElement(Z, {
						id: a
					}, s[o], n.a.createElement(y.a, {
						name: "caret_down",
						className: _.a.caret
					}), n.a.createElement(K, {
						className: _.a.Component,
						isOpen: !!d,
						tooltipId: a
					}, t.map((e, t) => n.a.createElement(W, {
						displayText: s[e],
						key: t,
						isSelected: e === o,
						option: e,
						searchOptions: r,
						styles: {
							mIsSelected: H.a.mIsSelected,
							SelectOption: H.a.SelectOption
						}
					})))))
				};
			var G = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				J = s("./src/reddit/components/SearchResultsSubNav/Select/redesign.m.less"),
				Q = s.n(J),
				X = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/redesign.m.less"),
				Y = s.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = Object(x.a)(e => n.a.createElement(f.a, $({
					className: Q.a.Component
				}, e))),
				te = ({
					active: e,
					label: t,
					options: s,
					optionLabels: r,
					searchOptions: a,
					tooltipId: o,
					value: c,
					...d
				}) => {
					const {
						isOpen: l,
						onClick: m
					} = E(o);
					return n.a.createElement("div", {
						className: Q.a.Wrapper
					}, n.a.createElement(G.a, $({}, d, {
						active: l,
						className: Object(i.a)(Q.a.filterButton, e && Q.a.hasValue),
						onClick: m,
						variant: G.b.TAB_GROUP
					}), t, n.a.createElement(y.a, {
						name: "caret_down",
						className: Object(i.a)(Q.a.caret, l && Q.a.caretOpen)
					})), n.a.createElement("div", {
						id: o
					}, n.a.createElement(ee, {
						className: Q.a.Dropdown,
						isOpen: l,
						tooltipId: o
					}, s.map((e, t) => n.a.createElement(W, {
						displayText: r[e],
						key: t,
						isSelected: e === c,
						option: e,
						searchOptions: a,
						styles: {
							mIsSelected: Y.a.mIsSelected,
							SelectOption: Y.a.SelectOptionRedesign
						}
					})))))
				},
				se = [p.Xb.Relevance, p.Xb.Hot, p.Xb.Top, p.Xb.New, p.Xb.Comments],
				re = {
					[p.Xb.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[p.Xb.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[p.Xb.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[p.Xb.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[p.Xb.Comments]: () => u.fbt._("Comments", null, {
						hk: "3s76RE"
					})
				};

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = s("./src/reddit/constants/page.ts");
			const oe = [p.fc.HOUR, p.fc.DAY, p.fc.WEEK, p.fc.MONTH, p.fc.YEAR, p.fc.ALL],
				ie = {
					[p.fc.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[p.fc.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[p.fc.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[p.fc.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[p.fc.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[p.fc.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var de;
			! function(e) {
				e.SORT = "SORT", e.TIME = "TIME"
			}(de || (de = {}));
			const le = [de.SORT, de.TIME],
				me = {
					[de.SORT]: e => {
						const {
							options: t,
							optionLabels: s,
							value: r
						} = C(e.queryParams, e.url, h.w, se, p.Pb, re), a = {
							"data-testid": "search-results-filter-sort",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: r
						};
						return e.isSerpRedesignLayout ? n.a.createElement(te, ne({}, a, {
							active: Boolean(e.queryParams[h.w]),
							label: e.queryParams[h.w] ? s[r] : u.fbt._("Sort", null, {
								hk: "2COMme"
							})
						})) : n.a.createElement(z, ne({}, a, {
							label: u.fbt._("Sort By", null, {
								hk: "4Dbt40"
							})
						}))
					},
					[de.TIME]: e => {
						const {
							options: t,
							optionLabels: s,
							value: r
						} = C(e.queryParams, e.url, h.A, e.isSerpRedesignLayout ? oe.slice().reverse() : oe, p.Qb, ie), a = e.tab === ae.h.Listings ? u.fbt._("Communities From", null, {
							hk: "1oVrVu"
						}) : u.fbt._("Posts From", null, {
							hk: "1abcgn"
						});
						if (!e.searchOptions || e.searchOptions.sort === p.W.NEW || e.searchOptions.sort === p.W.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: r
						};
						return e.isSerpRedesignLayout ? n.a.createElement(te, ce({}, o, {
							active: Boolean(e.queryParams[h.A]),
							label: e.queryParams[h.A] ? s[r] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							})
						})) : n.a.createElement(z, ce({}, o, {
							label: a
						}))
					}
				};
			var ue = s("./src/lib/lessComponent.tsx"),
				pe = s("./src/reddit/controls/Button/index.tsx"),
				he = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				be = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				Ce = s.n(be);
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = ue.a.wrapped(pe.r, "TertiaryButton", Ce.a), ye = ue.a.wrapped(fe, "AllRedditResultsButton", Ce.a), ge = e => {
				const t = Object(I.b)();
				return n.a.createElement(N.a, {
					to: Object(he.a)(e.queryParams)
				}, n.a.createElement(ye, {
					onClick: () => {
						t(t => ({
							...Object(A.c)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, xe._("All reddit results", null, {
					hk: "2IBCsX"
				}), n.a.createElement(y.a, {
					name: "forward"
				})))
			};
			var ve = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				Oe = s.n(ve);
			const Ee = Object(o.c)({
					isSerpRedesignLayout: l.d,
					subreddit: m.w
				}),
				je = e => {
					const {
						isSerpRedesignLayout: t,
						subreddit: s
					} = Object(a.e)(t => Ee(t, e)), r = Object(c.eb)(), o = Object(c.V)(r), l = Object(c.db)(r), m = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return n.a.createElement(d.a, {
						className: Object(i.a)(t ? Oe.a.ComponentRedesign : Oe.a.Component),
						"data-testid": "search-results-subnav"
					}, le.map((s, r) => {
						const a = me[s];
						return n.a.createElement(a, {
							key: r,
							isSerpRedesignLayout: t,
							queryParams: o,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: l
						})
					}), m && n.a.createElement(ge, {
						queryParams: o,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/trackers/searchResults.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				C = s.n(b);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class f extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(p.y)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, r = {
						[C.a.mSr]: !!t
					}, {
						pathname: a,
						search: l
					} = o.a.parse(s), m = t ? c.Yb.ToSubreddit : c.Yb.ToGlobal, p = t ? n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, x._("Show results from", null, {
						hk: "3aVDvz"
					})), n.a.createElement(d.b, {
						className: C.a.subredditIcon,
						subredditOrProfile: t
					}), n.a.createElement("p", {
						className: Object(i.a)(C.a.searchSwitcherText, r)
					}, t.displayText)) : n.a.createElement(n.a.Fragment, null, x._("{=Show results from}{=all of Reddit}", [x._param("=Show results from", n.a.createElement("span", null, x._("Show results from", null, {
						hk: "4l8fSw"
					}))), x._param("=all of Reddit", n.a.createElement("p", {
						className: Object(i.a)(C.a.searchSwitcherText, r)
					}, x._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return n.a.createElement(u.a, {
						className: Object(i.a)(C.a.searchSwitcher, e && C.a.redesign, r),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: a,
							search: l,
							state: {
								searchSwitcherType: m
							}
						}
					}, p, n.a.createElement(h.a, {
						name: "forward",
						className: Object(i.a)(C.a.arrowIcon, r)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? n.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, n.a.createElement(f, e)) : n.a.createElement(f, e))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SidebarFooter/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = a.a.a("Link", u.a), b = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), C = Object(o.b)(b), x = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = x(C(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? n.a.createElement(i.a, {
				className: u.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: u.a.LinkContainer
			}, n.a.createElement("div", {
				className: u.a.Column
			}, n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), n.a.createElement("div", {
				className: u.a.Column
			}, n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), n.a.createElement("div", {
				className: u.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : n.a.createElement(i.a, {
				className: u.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: u.a.LinkContainer
			}, n.a.createElement("div", {
				className: u.a.Column
			}, n.a.createElement(h, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(h, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(h, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(h, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(h, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(h, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), n.a.createElement(h, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: u.a.Column
			}, n.a.createElement(h, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(h, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(h, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(h, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(h, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: u.a.Copyright
			}, p._("Reddit Inc © {year} . All rights reserved", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = ({
					className: e,
					isOverlay: t,
					style: s
				}) => i.a.createElement("div", {
					className: Object(r.a)(e, u.a.container),
					style: s
				}, i.a.createElement(l.l, {
					className: u.a.button,
					onClick: () => h(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				C = s("./src/reddit/components/SidebarFooter/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = c.e[1] + 24,
				j = x.f + 8,
				_ = j + 152 + 16,
				k = _ + E + 8,
				S = v.a.div("Container", g.a),
				N = v.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => i.a.createElement(b, O({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?j:8}px)`
					}
				}, s)), "BackToTop", g.a),
				I = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: n
				}) => i.a.createElement("div", {
					className: Object(r.a)(t, {
						[g.a.StickyStyles]: n && !s,
						[g.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class P extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > _
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: r,
							className: n,
							hideFooter: a,
							pageLayer: o
						}
					} = this, c = this.state.isAdSticky && !(!t && !r);
					return i.a.createElement(S, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(I, {
						isFakeOverlay: s,
						isSticky: c
					}, t, r, !a && i.a.createElement(C.a, null)), !this.props.hideBackToTop && i.a.createElement(N, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const w = Object(f.u)();
			t.a = w(P)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				h = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/ApiRequestState/index.ts"),
				x = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.m.less"),
				y = s.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: r,
						...n
					} = e, o = [s, y.a.inTopBar, y.a.iconContainer];
					return r ? o.push(y.a.emptyEditableIconInTopBar) : o.push(y.a.editableIcon, y.a.emptyEditableIcon), a.a.createElement("span", g({}, n, {
						className: Object(c.a)(...o)
					}), r ? a.a.createElement(b.a, {
						name: "upload",
						className: y.a.emptyUploadButton
					}) : a.a.createElement(b.a, {
						name: "add",
						className: y.a.emptyPlusButton
					}), e.children)
				},
				O = e => {
					const {
						iconColor: t,
						className: s,
						alt: r,
						role: n,
						onClick: o,
						inTopBar: i,
						src: d
					} = e;
					return a.a.createElement("span", {
						className: y.a.iconContainer
					}, a.a.createElement("img", {
						alt: r,
						onClick: o,
						role: n,
						src: d,
						className: Object(c.a)(s, {
							[y.a.editableIcon]: !i
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(i.c)({
					isLoading: x.b
				});
			class j extends a.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(h.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(m.a, {
						className: y.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(C.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? a.a.createElement("span", {
						className: y.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : r.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = a.a.createElement(a.a.Fragment, null, a.a.createElement(O, g({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, a.a.createElement(v, g({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : a.a.createElement(a.a.Fragment, null, a.a.createElement(v, g({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [y.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(y.a.loadingIconInTopBar), t = 32), a.a.createElement(u.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? a.a.createElement("div", {
						className: y.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(E, (e, t) => ({
				onFileSelected: (s, r) => {
					e(Object(d.a)(t.subreddit, s, r))
				}
			}))(Object(l.c)(j))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, s) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return O
			}));
			var r, n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/constants/zIndex.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = s("./src/reddit/components/TabNav/index.m.less"),
				C = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(r || (r = {}));
			const f = l.a.wrapped(h.a, "Gear", C.a),
				y = l.a.h3("Title", C.a),
				g = l.a.div("TabNavContainer", C.a),
				v = l.a.div("Tabs", C.a),
				O = l.a.wrapped(({
					active: e,
					children: t,
					enabled: s,
					...r
				}) => i.a.createElement(p.a, x({}, r, {
					"aria-selected": e,
					className: Object(c.a)(r.className, {
						[C.a.mIsActive]: e,
						[C.a.mIsEnabled]: !1 !== s
					}),
					role: "tab"
				}), t), "Tab", C.a),
				E = e => {
					switch (e) {
						case r.GEAR:
							return i.a.createElement(f, null);
						default:
							return null
					}
				},
				j = () => window.pageYOffset || window.scrollY,
				_ = 75,
				k = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: u.f
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? j() < _ && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : j() >= _ && this.setState({
							sticky: !0
						})
					}, d.K), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: s
					} = this.props, r = Object(c.a)({
						[C.a.mResponsive]: t
					});
					return i.a.createElement(g, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: s
					}, i.a.createElement(y, {
						className: Object(c.a)(r, {
							[C.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), i.a.createElement(v, {
						className: Object(c.a)(r, {
							[C.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? k : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => n.a.createElement("div", t, n.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === r.a.PROFILE ? Object(n.d)(e) : Object(n.c)(e)
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				y = s("./src/reddit/helpers/trackers/postFlair.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 129,
				k = Object(b.u)({
					filterName: e => Object(b.V)(e)[h.g],
					url: e => Object(b.db)(e)
				}),
				S = Object(i.c)({
					subredditId: (e, t) => Object(v.B)(e, t.subredditName)
				}),
				N = Object(o.b)(S),
				I = l.a.div("WidgetContent", E.a),
				P = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: s,
					...r
				}) => a.a.createElement("li", {
					className: Object(c.a)(E.a.StyledFlair, e === g.g.Cloud && E.a.cloudDisplay, {
						[E.a.flairFilter]: t,
						[E.a["m-selected"]]: r.isSelected
					}),
					onMouseDown: s
				}, a.a.createElement(m.b, j({}, r, {
					className: E.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class w extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(y.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(y.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(y.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(y.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > _ && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(C.r, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(P, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(P, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, r = t.order, n = this.getFlairsFromIds(r), o = e && this.getSelectedFlair(n) || void 0, i = t.order.length > r.length || s && !o;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(I, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(n), i && this.renderButton()))
				}
			}
			t.a = k(N(Object(u.c)(w)))
		},
		"./src/reddit/components/Widgets/RelatedQueries/index.m.less": function(e, t, s) {
			e.exports = {
				searchIcon: "_340rztSaG5YZbk-QlUAAnx",
				relatedQuery: "BX_EeSBX4OAnmdUGshwZt",
				relatedQueryItem: "_3BhePshwzZv2tclBZKhutZ"
			}
		},
		"./src/reddit/components/Widgets/RelatedQueries/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/helpers/trackers/searchResults.ts"),
				m = s("./src/reddit/icons/svgs/Search/index.tsx"),
				u = s("./src/reddit/components/Widgets/RelatedQueries/index.m.less"),
				p = s.n(u);
			const h = Object(i.c)(e => {
				const {
					className: t,
					relatedQueries: s,
					searchOptions: n,
					sendEvent: i
				} = e;
				return a.a.createElement(c.a, {
					className: t,
					title: r.fbt._("People also searched for", null, {
						hk: "tjjwf"
					})
				}, s.slice(0, 8).map(e => {
					i(Object(l.t)("view", n));
					const t = {
						...n,
						q: e.q
					};
					return a.a.createElement(d.a, {
						className: p.a.relatedQuery,
						key: e.q,
						onClick: e => i(Object(l.t)("click", t)),
						to: Object(o.a)("/search", {
							q: e.q
						})
					}, a.a.createElement("li", {
						className: p.a.relatedQueryItem
					}, a.a.createElement(m.a, {
						className: p.a.searchIcon
					}), e.q))
				}))
			});
			t.a = h
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const g = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = g(e);
					return Object(f.f)(t)
				},
				E = e => {
					const t = v(e);
					return Object(f.f)(t)
				};
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(j);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.u)(), N = Object(a.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						r = t.redditStyle || Object(C.l)(e, {
							subredditId: s
						}),
						n = Object(x.X)(e);
					return r || n
				},
				nigtmode: x.X,
				subredditId: m.n,
				topPostVariant: b.d
			}));
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: a,
						onClick: o,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? _.a.widgetContentOnly : _.a.widgetContent, h = !r && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, C = h ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(i.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: r,
							[_.a.clickable]: !!o,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: o,
						style: b
					}, c && n.a.createElement("div", {
						className: _.a.widgetHeader,
						style: C
					}, n.a.createElement("div", {
						className: Object(i.a)(_.a.widgetTitle, l)
					}, n.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), a), n.a.createElement("div", {
						className: Object(i.a)(p, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(u.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(N(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return y
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/showPromotedCTA.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const f = {
					autoplayPref: x.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: x.K,
					showPromotedCTA: C.b,
					moderatorPermissions: p.l,
					modModeEnabled: d.S,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: d.s,
					flairStyleTemplate: d.U
				},
				y = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const r = s === i.a.upvoted ? Object(a.db)(t) : Object(a.w)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(a.Z)(t)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}),
				g = Object(r.b)(() => Object(n.c)(f), y, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(g(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(i.u)({
					searchQuery: i.Y
				}),
				m = Object(a.b)(() => Object(o.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: Object(c.a)(s.searchQuery || "", e => n.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => n.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(m(e))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return S
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.z,
					isProfilePostListing: p.K,
					isTopicPage: p.P,
					pageLayer: e => e
				})
			}
			const j = E(),
				_ = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.Q)(e, t),
					loadMore: y.g,
					postsById: g.S,
					postIds: Object(a.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: r
					}) => Object(g.E)(e, t, s, r)),
					subredditsById: v.X,
					viewportDataLoaded: O.a,
					pageReferrer: p.T,
					postListPlaceholderComponent: () => C.a,
					isNpsScrollSurveyEnabled: f.e
				},
				k = Object(n.c)(_),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r, n) => {
						e(d.N(t, r, n))
					},
					trackOnPostExitedViewport: (t, s, r, n, a) => {
						e(d.O(t, r, n, a))
					},
					surveyTriggerScrollCounted: () => e(Object(m.k)())
				}),
				N = e => Object(h.b)({
					...e
				}),
				I = (e, t, s, r) => {
					const {
						listingKey: n,
						hostPostData: a,
						listingBelowVariant: o
					} = r;
					return Object(b.h)(e, t, "post", n, a, o, void 0)
				},
				P = Object(r.b)(k, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(j(P(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const o = new r.a(250),
				i = (e, t, s) => {
					const r = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const n = `${e.id}-${r}`;
						let i = o.get(n);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${r}\\b)`, "gi"),
								d = e.title.split(c);
							i = s(a.a.createElement(a.a.Fragment, null, a.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), o.set(n, i)
						}
						return i
					}
				}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.U,
				hideNSFWPref: h.C,
				isActive: p.j,
				moderatorPermissions: m.l,
				modModeEnabled: d.S,
				showEditFlair: u.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(o.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === c.a.upvoted ? Object(a.db)(t) : Object(a.w)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(a.Z)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(c.a, C({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, C({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(x, C({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, a = s || r;
					return n.a.createElement("div", {
						className: e.className
					}, s && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = o.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...n
				}) => {
					const o = Object(i.b)(t),
						c = r.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [r.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						d = e ? r.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? c : r.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [r.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, n, d)
				},
				p = e => a.a.createElement(l, null, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(a);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						...a
					} = e, o = a;
					return r ? n.a.createElement(t, o) : void 0 !== s ? n.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(r.f)(s));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/search/hasSearchGrammar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = e => {
				return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
			}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/PostMedia/index.tsx");
			const o = (e, t, s, r, a, o) => r ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, a, o)) : i(e, s, a, o) : null,
				i = (e, t, s, r) => n.a.createElement(a.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./src/lib/search/index.ts"),
				a = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const i = (e, t, s) => {
				const i = Object(r.e)(e);
				return {
					pathname: e.pathname,
					state: {
						[a.b.SearchOriginPage]: Object(o.b)(a.b.SearchOriginPage)
					},
					search: Object(n.c)(i, t, {
						type: s
					}).replace(e.pathname + "?", "")
				}
			}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/constants/page.ts");
			const a = (e, t, s) => s || t.includes(r.Zb.Posts) ? n.h.Posts : e && t.includes(r.Zb.Users) && !t.includes(r.Zb.Subreddits) ? n.h.Authors : n.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/lib/addQueryParams/index.ts"),
				n = s("./src/lib/search/index.ts"),
				a = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search",
					o = "",
					i = e && e[a.p] || "";
				t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1") : i = i.replace("flair_name:", "flair:");
				const c = Object(r.a)(s, {
					[a.p]: i,
					[a.s]: o
				});
				return Object(n.c)(c, i, {
					[a.s]: o
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return x
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				h = e => Object(r.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				C = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(a.a)(Object(n.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = s.n(n);
			const o = ({
					isLoading: e
				}) => Object(r.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(r.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/selectors/comments.ts"),
				a = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => i => {
					const c = Object(n.e)(i, {
							commentId: e
						}),
						d = Object(a.g)(i, {
							subredditId: t,
							userId: s
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.defaults(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(r.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.defaults(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var r, n, a = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const i = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.defaults
				}),
				c = (e, t) => s => ({
					source: n.POST,
					action: a.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.post(s, e),
					subreddit: o.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.defaults(s)
				}),
				d = () => e => ({
					source: n.SIDEBAR,
					action: a.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.defaults(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: r.TOPIC,
					...o.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				m = s.n(l),
				u = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(u);
			t.a = ({
				backgroundColor: e,
				className: t,
				containerRef: s,
				content: l,
				navBar: u,
				redditStyle: h,
				sidebar: b,
				subredditId: C
			}) => {
				const x = Object(r.useContext)(c.a),
					f = Boolean(b);
				return n.a.createElement(o.a, {
					subredditId: C
				}, n.a.createElement("div", {
					className: Object(a.a)(m.a.outerContainer, i.i, t, {
						[m.a.outerContainerExp]: x
					}),
					ref: s
				}, n.a.createElement(d.a, {
					className: i.h,
					redditStyle: h,
					backgroundColor: e
				}), n.a.createElement("div", {
					className: m.a.innerContainer
				}, n.a.createElement("div", {
					className: p.a.bodyContainer
				}, n.a.createElement("div", {
					className: p.a.contentContainer
				}, n.a.createElement("div", {
					className: p.a.navContent
				}, u), n.a.createElement("div", {
					className: Object(a.a)(p.a.content, f && p.a.withSidebar)
				}, n.a.createElement("div", {
					className: Object(a.a)(p.a.mainContent, f && p.a.withSidebar)
				}, l), f && n.a.createElement("div", {
					className: p.a.sidebarContent
				}, b)))))))
			}
		},
		"./src/reddit/models/Audio/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return Boolean(e.audioRoom)
			}
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(r || (r = {}))
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(r || (r = {}));
			const n = e => e.category === r.Supporter,
				a = e => e.category === r.Achievement
		},
		"./src/reddit/pages/SearchResults/experimentWrapper.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/pages/SearchResults/redesign.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/redesign.tsx"
					}
				}),
				l = ({
					history: e,
					location: t,
					match: s
				}) => {
					const r = {
						history: e,
						location: t,
						match: s
					};
					return Object(o.e)(i.d) ? a.a.createElement(d, r) : a.a.createElement(c, r)
				};
			t.default = l
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/JumpToContent/index.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				b = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				C = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/covid.ts"),
				y = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/correlationIdTracker.ts"),
				E = s("./src/reddit/helpers/trackers/searchResults.ts"),
				j = s("./src/reddit/layout/page/Listing/index.tsx"),
				_ = s("./src/reddit/selectors/experiments/railsSearchResults.ts"),
				k = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/searchResults.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/pages/SearchResults/index.m.less"),
				P = s.n(I);
			const w = 3e3,
				T = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				L = Object(v.u)({
					currentPageUrl: v.f,
					queryParams: v.V,
					shouldShowCovidBanner: v.bb
				}),
				R = () => Object(d.c)({
					headerContent: S.k,
					isInFollowExperiment: _.a,
					origin: k.j,
					subreddit: (e, t) => Object(N.w)(e, {
						subredditName: t.match.params.subredditName
					}),
					viewTreatment: S.w
				}),
				F = e => ({
					searchViewedTrigger: () => e(Object(u.i)())
				}),
				M = Object(c.b)(R, F);
			class A extends i.a.Component {
				constructor(e) {
					super(e), this.renderCovidBanner = () => {
						const {
							queryParams: e,
							sendEvent: t
						} = this.props, s = s => t(Object(E.b)(s, Object(m.e)(a()(e || {}, g.t))));
						return this.state.didSendCovidSeenEvent || (s("view"), this.setState({
							didSendCovidSeenEvent: !0
						})), i.a.createElement(T, {
							announcement: f.a,
							className: P.a.announcement,
							onBtnClick: () => s("click"),
							onClose: () => {
								s("dismiss"), this.setState({
									isCovidBannerHidden: !0
								})
							}
						})
					}, this.state = {
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					}, this.triggerTimeoutId = 0
				}
				componentDidMount() {
					Object(O.c)(O.a.SearchResults) || Object(O.d)(O.a.SearchResults), this.triggerTimeoutId = window.setTimeout(() => this.props.searchViewedTrigger(), w)
				}
				componentWillUnmount() {
					Object(O.b)(O.a.SearchResults), window.clearTimeout(this.triggerTimeoutId)
				}
				componentDidUpdate(e) {
					this.props.queryParams !== e.queryParams && this.setState({
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					}), this.props.queryParams && e.queryParams && this.props.queryParams[g.p] !== e.queryParams[g.p] && (Object(O.b)(O.a.SearchResults), Object(O.d)(O.a.SearchResults))
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: r,
						match: n,
						origin: o,
						queryParams: c,
						shouldShowCovidBanner: d,
						subreddit: u,
						viewTreatment: x
					} = this.props, {
						isCovidBannerHidden: f
					} = this.state, v = n.params.subredditName || n.params.multiredditName || "", O = n.params.username, E = Object(m.e)(a()(c || {}, g.t)), _ = {
						...E,
						sort: E.category ? l.Xb.Relevance : E.sort,
						t: E.category ? l.fc.DAY : E.t
					}, k = Object(m.b)(v, O, _);
					let S;
					return S = u && E.restrict_sr || 1 === _.type.length && _.type[0] === l.Zb.Posts ? y.h.Posts : _.type.length > 0 && -1 === _.type.indexOf(l.Zb.Posts) && (_.type.indexOf(l.Zb.Subreddits) > -1 || _.type.indexOf(l.Zb.Users) > -1) ? y.h.Listings : y.h.Top, i.a.createElement(j.a, {
						className: this.props.className,
						navBar: i.a.createElement(b.a, {
							currentPageUrl: `${o}${e}`,
							headerContent: t,
							isInFollowExperiment: s,
							location: r,
							searchOptions: _,
							subreddit: u,
							tab: S,
							viewTreatment: x
						}),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(p.a, null), d && !f && this.renderCovidBanner(), i.a.createElement(h.a, {
							listingKey: k,
							listingName: v,
							location: r,
							searchOptions: _,
							tab: S
						})),
						sidebar: i.a.createElement(C.a, {
							className: P.a.sidebar,
							listingKey: k,
							listingName: v || y.c,
							searchOptions: _,
							tab: S
						})
					})
				}
			}
			t.default = L(M(Object(x.c)(A)))
		},
		"./src/reddit/pages/SearchResults/redesign.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return W
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/JumpToContent/index.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/redesign.tsx"),
				b = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				C = s("./src/reddit/components/SearchResultsNav/redesign.tsx"),
				x = s("./src/reddit/components/SearchResultsSidebar/redesign.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				y = s("./src/reddit/constants/covid.ts"),
				g = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/correlationIdTracker.ts"),
				j = s("./src/reddit/helpers/search/searchTabType.ts"),
				_ = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				k = s("./src/reddit/helpers/trackers/searchResults.ts"),
				S = s("./src/reddit/hooks/useTheme.ts"),
				N = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/selectors/searchFix.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				F = s("./src/reddit/pages/SearchResults/index.m.less"),
				M = s.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = 3e3,
				B = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				U = {
					[g.h.Listings]: {
						tab: g.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[g.h.Authors]: {
						tab: g.h.Authors,
						sidebar: !1,
						filterNav: !1
					},
					[g.h.Posts]: {
						tab: g.h.Posts,
						sidebar: !0,
						filterNav: !0
					}
				};

			function W({
				location: e,
				match: t
			}) {
				const s = Object(c.d)(),
					r = Object(O.eb)(),
					n = Object(L.b)(),
					F = Object(S.a)(),
					W = Object(o.useRef)(!1),
					V = Object(c.e)(e => Object(w.w)(e, {
						subredditName: t.params.subredditName
					})),
					H = Object(c.e)(e => Object(b.a)(e, {
						pageLayer: r
					})),
					q = Object(c.e)(e => Object(P.c)(e, {
						pageLayer: r
					})),
					K = Object(c.e)(R.e),
					Z = Object(O.V)(r),
					z = Object(O.bb)(r),
					[G, J] = Object(o.useState)(!1),
					Q = Object(l.a)(Z) || {};
				Object(o.useEffect)(() => {
					let e = 0;
					return Object(E.c)(E.a.SearchResults) || Object(E.d)(E.a.SearchResults), e = window.setTimeout(() => s(Object(u.h)()), D), () => {
						Object(E.b)(E.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(o.useEffect)(() => {
					Z !== Q && (W.current = !1, J(!1)), Z && Q && Z[v.p] !== Q[v.p] && (Object(E.b)(E.a.SearchResults), Object(E.d)(E.a.SearchResults))
				}, [Z, Q]);
				const X = t.params.subredditName || t.params.multiredditName || "",
					Y = t.params.username,
					$ = Object(m.e)(a()(Z || {}, v.t), K),
					ee = V && $.restrict_sr,
					te = Object(j.a)(K, $.type, ee),
					se = {
						...$,
						type: Object(R.a)(!0, K, $.type)
					},
					re = Object(m.b)(X, Y, se),
					ne = {
						...se,
						type: K ? [d.Zb.Posts, d.Zb.Subreddits, d.Zb.Users] : [d.Zb.Subreddits, d.Zb.Users]
					},
					ae = Object(m.b)(X, Y, ne),
					oe = {
						redesign: !0,
						searchOptions: se
					};
				let ie;
				Object(O.O)(r) || Object(O.B)(r) ? ie = i.a.createElement(f.a, A({}, oe, {
					url: Object(_.a)(Z)
				})) : H && q && (ie = i.a.createElement(f.a, A({}, oe, {
					subreddit: H,
					url: Object(_.a)(Z, H.name)
				})));
				const ce = U[te].tab,
					de = U[te].sidebar,
					le = U[te].filterNav,
					me = Object(I.a)({
						redditStyle: !0,
						theme: F
					});
				return i.a.createElement(N.a, {
					backgroundColor: me.canvas,
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(p.a, null), z && !G && (() => {
						const e = e => n(Object(k.b)(e, Object(m.e)(a()(Z || {}, v.t))));
						return W.current || (e("view"), W.current = !0), i.a.createElement(B, {
							announcement: y.a,
							className: M.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), J(!0)
							}
						})
					})(), i.a.createElement(h.a, {
						listingKey: re,
						listingName: X,
						location: e,
						searchOptions: se,
						tab: ce
					})),
					navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, {
						activeTab: ce,
						location: e,
						searchOptions: se,
						searchSwitcher: ie
					}), le && i.a.createElement(T.a, {
						key: "subNav",
						searchOptions: $,
						shouldHideGlobalSearchLink: !0,
						subredditName: X,
						tab: ce
					}), ie && i.a.createElement("div", {
						className: M.a.searchSwitcherContainer
					}, ie)),
					sidebar: de && i.a.createElement(x.a, {
						className: M.a.sidebar,
						listingKey: ae,
						listingName: X || g.c,
						location: e,
						searchOptions: ne,
						tab: ce
					})
				})
			}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/gold/constants.ts"),
				a = s("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var i = s("./node_modules/icepick/icepick.js"),
				c = s("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {},
				l = e => {
					var t, s;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (s = e[0]) || void 0 === s ? void 0 : s.type)
				},
				m = {};
			t.a = Object(r.c)({
				subredditPowerupsFlairs: (e = o, t) => {
					switch (t.type) {
						case n.pb:
							const {
								subredditId: s, subredditAchievementFlairs: r
							} = t.payload;
							if (!(null == r ? void 0 : r.length)) return e;
							const o = r.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = r.filter(a.a).map(e => e.type),
								c = r.filter(a.b).map(e => e.type);
							return {
								...e, [s]: {
									flairsByType: o,
									achievementTypes: i,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = d, t) => {
					switch (t.type) {
						case c.d: {
							const {
								id: s,
								userAchievementFlairsByRedditorIds: r
							} = t.payload;
							let n = e[s] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of r) {
								const s = o.filter(a.a),
									r = s.map(({
										type: e
									}) => e),
									i = o.filter(a.b),
									c = i.map(({
										type: e
									}) => e),
									d = l(s),
									m = l(i);
								n = {
									...n,
									[e]: {
										achievementTypes: r,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[s]: n
							}
						}
						case c.f: {
							const {
								subredditId: s,
								userId: r,
								achievementFlairType: n,
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [s, r], e => ({
								...e,
								pendingAchievementType: n,
								pendingSupporterType: a
							}))
						}
						case c.g: {
							const {
								subredditId: s,
								userId: r,
								achievementFlairType: n,
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [s, r], e => ({
								...e,
								preferredAchievementType: n,
								preferredSupporterType: a,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: s,
								userId: r
							} = t.payload;
							return Object(i.updateIn)(e, [s, r], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: s,
								userId: r,
								isHidden: n
							} = t.payload;
							return Object(i.updateIn)(e, [s, r], e => ({
								...e,
								isHidden: n
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.i: {
							let s = {};
							return t.payload.forEach(e => {
								const t = e.id,
									r = e.powerups;
								if (!t || !r) return;
								const n = r.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								s = {
									...s,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/railsSearchResults.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.Fe.Treatment1 === Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: r.we
			})
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			}));
			var r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(r.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const r = Object(o.U)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, r, n) => {
					const o = n.find(e => e <= t) || -1,
						i = n.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							o = n && Object(a.H)(e, {
								postId: r
							}) || null,
							i = n && Object(a.H)(e, {
								postId: n
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				b = [3],
				C = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const r = t.slice().sort();
					let n = -1;
					const o = Object(a.A)(e, {
							listingKey: s.listingKey
						}),
						i = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= o.length)) {
							for (; s < o.length && !h(e, s, t, o, r);) s += 1;
							s < o.length && (i.push(s), n = s)
						}
					}), i
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				g = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(i.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "a", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/commentSelector.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: o.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var s;
					return t ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[t] : null
				},
				c = (e, {
					subredditId: t
				}) => {
					var s, r;
					return t ? null === (r = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				d = (e, {
					subredditId: t,
					userId: s
				}) => {
					var r, n;
					return t && s ? null === (n = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === n ? void 0 : n[s] : null
				},
				l = Object(r.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(r.a)([c, l], (e, t) => e && t ? e[t] : null),
				u = Object(r.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(r.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(r.a)([c, d], (e, t) => {
					if (!e) return [];
					const s = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						r = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						n = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !s.includes(e.type),
						isPreferred: e.type === r || e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(r.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: s,
						achievementTypes: r,
						flairsByType: n
					} = e, {
						supporterTypes: a,
						achievementTypes: o,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: f(s, a, n, d || i),
						achievementFlairs: f(r, o, n, l || c)
					}
				}),
				C = Object(r.a)([d], e => !!e && e.isHidden),
				x = Object(r.a)([i, d, p], (e, t, s) => {
					if (!e || !t) return [];
					const r = t.achievementTypes.map(t => e.flairsByType[t]);
					return s ? [s, ...r] : r
				}),
				f = (e, t, s, r) => e.map(e => ({
					...s[e],
					isLocked: !t.includes(e),
					isPreferred: e === r
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				y = (e, {
					commentId: t
				}) => {
					const s = Object(n.b)(e, {
							commentId: t
						}),
						r = null == s ? void 0 : s.subredditId,
						a = null == s ? void 0 : s.authorId;
					return !(!r || !a) && !!((e, {
						subredditId: t,
						userId: s
					}) => {
						var r, n, a;
						return t && s ? null === (a = null === (n = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === n ? void 0 : n[s]) || void 0 === a ? void 0 : a[t] : null
					})(e, {
						subredditId: r,
						userId: a
					})
				}
		},
		"./src/reddit/selectors/searchDiscoveryUnits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = [],
				n = e => {
					const t = e.listings.activeKey,
						s = e.searchDiscoveryUnits.models[t];
					return s || {}
				},
				a = e => {
					const t = e.listings.activeKey,
						s = e.searchDiscoveryUnits.order[t];
					return s || r
				},
				o = (e, t) => {
					if (!e) return r;
					const s = e.postOrder;
					if (t && s) {
						const e = s.indexOf(t);
						if (e > -1) return s.splice(e, 1), s
					}
					return s || r
				}
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx");
			const o = {},
				i = ({
					pageLayer: e
				}) => e && e.locationState || o,
				c = Object(r.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				d = Object(r.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				l = ({
					pageLayer: e
				}) => e && e.locationState && e.locationState.searchSwitcherType,
				m = Object(r.a)(d, (e, {
					pageLayer: t
				}) => Object(a.A)(t), (e, t) => t && (e === n.Mb.COMMENTS || e === n.Mb.SUBREDDIT))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const i = e => Object(a.c)(e, {
					experimentName: n.le,
					experimentEligibilitySelector: a.a
				}),
				c = (e, t) => t === n.ue.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(r.a)(o.H, i, (e, t) => c(e, t)),
				l = Object(r.a)((e, t) => t, i, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"65b1021b8d4c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.1faabe7c74bc096776ef.js.map