// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.2ca76c53d72f2702c8b1.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						v = !s && !l && /macintosh/i.test(t),
						h = !i && !u && !m && !p && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !_ && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (o.msedge = e, o.version = g) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, x && (o.version = x)) : s ? (o = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, x && (o.version = x)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && x && (o.version = x)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : v ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : h && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var j = "";
					o.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var k = !o.windows && j.split(".")[0];
					return _ || c || "ipad" == s || i && (3 == k || k >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == s || "ipod" == s || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function s(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = o(e, (function(e) {
							var n = t - r(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, o) {
					var i = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = s, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
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
					var n = [];
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var s = o.element,
								i = a(s),
								c = this._rootContainsTarget(s),
								d = o.entry,
								l = t && c && this._computeTargetAndRootIntersection(s, n),
								u = o.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, s, i, c, l, u, m, p, b = a(n), f = d(n), v = !1; !v;) {
								var h = null,
									g = 1 == f.nodeType ? e.getComputedStyle(f) : {};
								if ("none" == g.display) return;
								if (f == this.root || f == t ? (v = !0, h = r) : f != t.body && f != t.documentElement && "visible" != g.overflow && (h = a(f)), h && (o = h, s = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(o.top, s.top), c = Math.min(o.bottom, s.bottom), l = Math.max(o.left, s.left), u = Math.min(o.right, s.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								f = d(f)
							}
							return b
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, o.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, n) {
								return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
							})),
							n = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return n.width = n.right - n.left, n.height = n.bottom - n.top, n
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var s = this.thresholds[o];
								if (s == n || s == r || s < n != s < r) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = r
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
						n = t.width * t.height,
						r = this.intersectionRect,
						o = r.width * r.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, r, o, s = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function s(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (n) {}
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
					for (var n = t; n;) {
						if (n == e) return !0;
						n = d(n)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, o) {
				return o(e, (function(e, o, s) {
					n = r ? (r = !1, e) : t(n, e, o, s)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), r(o(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, o)
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var o = n ? n.call(r, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var s = Object.keys(e),
					i = Object.keys(t);
				if (s.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < s.length; c++) {
					var d = s[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (o = n ? n.call(r, l, u, d) : void 0) || void 0 === o && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
				...i.q(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.f(e),
				app: i.g(e),
				feed: i.t(e),
				geo: i.v(e),
				platform: i.K(e),
				referrer: i.bb(e),
				request: i.cb(e),
				screen: i.eb(e),
				session: i.jb(e),
				user: i.ub(e),
				media: n ? i.E(e, n) : null,
				post: n ? i.M(e, n) : null
			});
			var c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const n = Object(s.f)().getState(),
						{
							post: r
						} = {
							...t
						};
					return r && r.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, r) {
							var o, s;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(r)(n, i, null === (s = t.post) || void 0 === s ? void 0 : s.postId)) : Object(d.a)(a(r)(n, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/lib/avatarShareImages.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const r = 16765092,
				o = "https://i.redd.it/snoovatar",
				s = "snoovatars",
				i = "avatars";

			function a(e) {
				return `${o}/${+e>=r?i:s}/shared/${e}.png`
			}
		},
		"./src/lib/postParentMessage/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t) {
				let {
					type: n,
					data: r = {}
				} = e, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*", s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.parent;
				if (s !== window) {
					const e = {
						type: t ? `${n}.${t}` : n,
						data: r
					};
					s.postMessage(JSON.stringify(e), o)
				}
			}
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(r.a)(o("awardSheetInfoRequested")),
				i = Object(r.a)(o("manageableAwardsRequested")),
				a = Object(r.a)(o("createCommunityAward")),
				c = Object(r.a)(o("createGlobalAward")),
				d = Object(r.a)(o("createModAward")),
				l = Object(r.a)(o("createAwardFailed")),
				u = Object(r.a)(o("createAwardSuccessful")),
				m = Object(r.a)(o("removeCommunityAward")),
				p = Object(r.a)(o("disableAwardinCommunity")),
				b = Object(r.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return P
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				s = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/telemetry/index.ts"),
				v = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(r.a)(v.J),
				g = e => async (t, n) => {
					const r = n();
					Object(m.d)(r) || t(h(e))
				}, x = Object(r.a)(v.f), _ = () => async (e, t) => {
					const r = t();
					e(x()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(r))
				}, y = Object(r.a)(v.I), O = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, o) => {
						const a = o();
						if (Object(m.d)(a)) return;
						const c = t ? Object(u.a)(a, t) : void 0;
						e(y({
							award: c && c.isEnabled ? c : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(i.a.GOLD_GILD_MODAL));
						const f = Object(b.O)(a, {
							thingId: r
						});
						let v = null;
						if (f) v = f.id;
						else if (Object(s.a)(r)) {
							const e = Object(p.F)(a, {
								postId: r
							});
							e && (v = e.belongsTo.id)
						}
						v && Object(d.a)(v, r)
					}
				}, j = Object(r.a)(v.e), k = Object(r.a)(v.H), w = () => async (e, t) => {
					const r = t(),
						s = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(j()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(r)), Object(c.b)(c.a.GildingFlow)
				}, P = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(o.a)(b),
				v = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(v),
				g = (e, t, n) => async (r, o, s) => {
					let {
						apiContext: u
					} = s;
					var b, f, v, h;
					const g = Object(m.b)(o()),
						x = await (async (e, t, n, r, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.nb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, g);
					if (!x.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(x.body)), {
						accountIcon: null === (f = null === (b = x.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (v = x.body) || void 0 === v ? void 0 : v.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, x = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.nb.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}, _ = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.nb.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/login.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/telemetry/index.ts");
			const m = () => async (e, t) => {
				const n = t();
				Object(u.a)(Object(d.l)(n)), e(Object(a.s)({
					forceFetch: !0
				})), await e(Object(s.g)(c.a.SNOOVATAR_MODAL))
			};

			function p() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: a,
						share: m,
						source: p,
						activeTab: b,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: h
					} = e, g = n();
					a && Object(u.a)(Object(d.g)(a)(g)), Object(l.S)(g) ? (await t(Object(s.h)(c.a.SNOOVATAR_MODAL, {
						share: m,
						source: p,
						activeTab: b,
						activeMeSubpage: f,
						activeDetails: v,
						shopTabState: h
					})), t(Object(i.n)({
						title: Object(r.n)()
					}))) : await t(Object(o.openLoginModal)())
				}
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/helpers/trackers/modTools.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				p = n("./src/reddit/components/Hovercards/helpers.ts"),
				b = n("./src/reddit/components/PostTopMeta/index.tsx"),
				f = n("./src/reddit/hooks/useIsOverlay.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/redditGQL/types.ts");
			const g = Object(l.v)();
			t.a = g(e => {
				let {
					pageLayer: t,
					postOrComment: n,
					className: l
				} = e;
				var g;
				const x = Object(f.a)(),
					_ = Object(i.d)(),
					y = Object(a.a)(),
					O = (null === (g = null == t ? void 0 : t.urlParams) || void 0 === g ? void 0 : g.pageName) === d.vb.Modqueue,
					j = Object(o.useCallback)(() => {
						const e = Object(p.b)({
							itemId: n.id,
							tooltipIdPrefix: m.a,
							tooltipType: x ? b.f.Lightbox : void 0
						});
						_(Object(u.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: h.z.Note
							}
						})), y(Object(c.a)(n.id, n.authorId))
					}, [n, _, x, y]);
				return !O || Object(v.p)(n.author) ? null : s.a.createElement("button", {
					className: l,
					onClick: j
				}, r.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.e, null, s.a.createElement(a.i, null, s.a.createElement(d.a, null, s.a.createElement(a.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, s.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.g, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				m = n("./src/reddit/components/PostMeta/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				b = n("./src/reddit/components/SourceLink/index.tsx"),
				f = n("./src/reddit/components/Thumbnail/index.tsx"),
				v = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CrosspostBox/index.m.less"),
				y = n.n(_),
				O = n("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 8,
				w = 1,
				P = O.a.div("Container", y.a),
				I = O.a.div("PostMetaWrapper", y.a),
				E = O.a.wrapped(p.c, "PostTitle", y.a),
				C = O.a.div("FlatList", y.a),
				T = O.a.div("FlatItem", y.a),
				S = O.a.span("FlatListDotSpacer", y.a),
				M = O.a.wrapped(P, "LinkContainer", y.a),
				A = O.a.div("Content", y.a),
				N = O.a.div("ThumbnailContainer", y.a),
				L = Object(c.c)({
					isCurrentUserProfilePost: g.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== v.Sb.TOPIC),
					shouldOpenPostInNewTab: x.lb
				}),
				R = Object(i.b)(L);
			t.c = Object(h.b)(R(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: r,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: r,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return i && !i.media ? s.a.createElement(M, {
					className: d
				}, s.a.createElement(A, null, s.a.createElement(I, null, s.a.createElement(m.a, c)), B(i), i.source && s.a.createElement(b.a, {
					post: i
				}), U(e)), G(e)) : s.a.createElement(P, {
					className: d
				}, s.a.createElement(I, null, s.a.createElement(m.a, c)), B(i), F(e), U(e))
			}));
			const B = e => s.a.createElement(E, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, r = {
						...t,
						post: n,
						crosspost: t.post
					};
					return s.a.createElement("div", null, s.a.createElement(u.a, j({}, r, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return s.a.createElement(C, null, s.a.createElement(T, null, r.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [r.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), s.a.createElement(S, null), s.a.createElement(T, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return s.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, r.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [r.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				G = e => s.a.createElement(N, null, s.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/models/Media/index.ts"),
				a = n("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const {
					post: t
				} = e, n = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(i.G)(t) ? o.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, o.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, o.a.createElement("div", {
					className: "max-w-[294px] my-md leading-5 text-neutral-content"
				}, o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("We're launching a new type of custom post. For now, it must be opened in a new window.", null, {
					hk: "v8S8Z"
				})), o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("It's us, not you.", null, {
					hk: "4wyEYD"
				}))), o.a.createElement(s.a, {
					className: "m-auto mt-sm",
					kind: s.b.ExternalLink,
					href: n,
					target: "_blank",
					priority: s.c.Primary,
					rplStyle: !0
				}, o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [i, d] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? o.a.createElement("div", c({
					className: Object(s.a)(a.a.tooltip, n.className, {
						[a.a.visible]: i
					})
				}, n.popperProps), n.children, i && o.a.createElement("div", c({
					className: a.a.arrow
				}, n.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/helpers/isRemoved.ts"),
				h = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				O = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = n("./src/reddit/icons/fonts/Report/index.tsx"),
				w = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = n("./src/reddit/models/Post/index.ts"),
				E = n("./src/reddit/selectors/modQueue.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/components/PostBadges/index.m.less"),
				S = n.n(T);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => s.a.createElement("span", M({
					className: S.a.removalReason
				}, e), e.children),
				N = () => r.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => r.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => r.fbt._("Moderator of {community name}", [r.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				B = () => r.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => r.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				U = (e, t, n) => {
					const r = `PostBadges--${e}--${t}`;
					return n ? `${r}--${n}` : r
				},
				D = Object(f.v)({
					isProfilePostListing: f.N,
					isSubreddit: f.Q
				}),
				G = Object(a.c)({
					isModQueueDisplayEnabled: e => {
						const t = p.e[Object(f.U)(e, {})] === p.d.Card;
						return Object(E.b)(e, t)
					},
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(C.q)(e, {
							postId: n.id
						})
					},
					modModeEnabled: f.W
				}),
				W = Object(i.b)(G, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([n.e("CommentsPage~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~cad4f428"), n.e("removalReasonActions")]).then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(W(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: p,
					isProfilePostListing: f,
					modModeEnabled: E,
					onHideTooltip: C,
					onOpenRemovalReasonModal: T,
					onShowTooltip: D,
					post: G,
					tooltipType: W,
					isModQueueDisplayEnabled: q
				} = e;
				const H = {
						caretOnTop: !1
					},
					z = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === b.a.SUBREDDIT,
					V = U("Approve", G.id, W),
					K = U("Archived", G.id, W),
					J = U("Lock", G.id, W),
					X = U("Mod", G.id, W),
					Y = U("Remove", G.id, W),
					Z = U("Report", G.id, W),
					Q = U("Spam", G.id, W),
					$ = U("Sticky", G.id, W),
					ee = U("Pinned", G.id, W);
				return s.a.createElement("div", {
					className: t
				}, a && n && G.distinguishType === d.H.MODERATOR && s.a.createElement(o.Fragment, null, s.a.createElement(x.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.modIcon)
				}), s.a.createElement(u.c, M({
					tooltipId: X,
					text: R(n)
				}, H))), G.isArchived && s.a.createElement(o.Fragment, null, s.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.archivedIcon),
					desc: N(),
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: K,
					text: N()
				}, H))), G.isLocked && !G.isSponsored && s.a.createElement(o.Fragment, null, s.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.lockIcon),
					desc: L(),
					id: J,
					onMouseEnter: D(J),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: J,
					text: L()
				}, H))), i && Object(I.v)(G) && !l && s.a.createElement(o.Fragment, null, s.a.createElement(P.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: B(),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: $,
					text: B()
				}, H))), f && p && s.a.createElement(o.Fragment, null, s.a.createElement(P.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: F(),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: ee,
					text: F()
				}, H))), !q && s.a.createElement(s.a.Fragment, null, (G.isApproved || G.approvedBy) && s.a.createElement(o.Fragment, null, s.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.approveIcon),
					desc: Object(h.a)(G),
					id: V,
					onMouseEnter: D(V),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: V,
					text: Object(h.a)(G)
				}, H))), Object(v.a)(G) && s.a.createElement(o.Fragment, null, s.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.removeIcon),
					desc: Object(h.b)(G),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: C
				}), z && s.a.createElement(m.a, {
					className: S.a.addRemovalReason,
					onClick: T,
					text: r.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && s.a.createElement(A, {
					onMouseEnter: D(Y),
					onMouseLeave: C
				}, r.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), s.a.createElement(u.c, M({
					tooltipId: Y,
					text: Object(h.b)(G)
				}, H))), G.bannedBy && G.isSpam && s.a.createElement(o.Fragment, null, s.a.createElement(w.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.spamIcon),
					desc: Object(h.d)(G),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: Q,
					text: Object(h.d)(G)
				}, H)))), Object(g.a)(G) && !E && !q && s.a.createElement(o.Fragment, null, s.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.reportIcon),
					desc: Object(h.c)(G.numReports),
					id: Z,
					onMouseEnter: D(Z),
					onMouseLeave: C
				}), s.a.createElement(u.c, M({
					tooltipId: Z,
					text: Object(h.c)(G.numReports)
				}, H))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						s = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				y = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(O);
			const k = Object(p.a)(() => Object(s.c)({
					basePixelMetadata: Object(g.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(f.b)(e, n.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(f.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(v.d)(e).pageType
				})),
				w = "post-container";
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: v,
						ref: g,
						shouldAddGalleryViewability: x = !0
					} = this.props, _ = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, s, p))(n), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(j.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": w,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": y.a.BACKGROUND
					}, n), O = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.H)(l.media) && x ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || O ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = k(Object(_.a)(Object(x.a)(Object(m.c)(P))))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return oe
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/constants/adEvents.ts"),
				p = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/helpers/chooseVariant/index.ts"),
				f = n("./node_modules/reselect/es/index.js");
			const v = Object(f.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.zc
			}), e => e === p.Rd);
			var h = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/lib/classNames/index.ts"),
				x = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				y = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				k = n.n(j);
			const w = e => {
				let {
					postId: t,
					className: n
				} = e;
				const r = Object(l.e)(e => Object(y.F)(e, {
						postId: t
					})),
					s = Object(l.e)(e => "subreddit" === (null == r ? void 0 : r.belongsTo.type) ? Object(O.X)(e, {
						subredditId: r.belongsTo.id
					}) : null);
				return s ? o.a.createElement(x.a, {
					className: Object(g.a)(k.a.link, n),
					to: s.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(_.b, {
					className: k.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: s
				}), o.a.createElement("span", {
					className: k.a.subredditName
				}, s.displayText)) : null
			};
			var P = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				I = n("./src/reddit/connectors/PostViewable/index.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/hooks/useClickSourceData.ts"),
				M = n("./src/reddit/hooks/useIsOverlay.ts"),
				A = n("./src/reddit/hooks/usePageLayer.ts"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				L = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = n.n(L);
			const B = e => {
				let {
					post: t
				} = e;
				const n = `${Object(N.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					r = `${Object(N.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: R.a.postInformation
				}, o.a.createElement("h5", {
					className: R.a.title
				}, t.title), o.a.createElement("div", {
					className: R.a.interactions
				}, o.a.createElement("p", null, n), o.a.createElement("p", null, r)))
			};
			var F = n("./src/lib/isUrl/index.ts"),
				U = n("./src/reddit/actions/profile/index.ts"),
				D = n("./src/reddit/components/Thumbnail/index.tsx"),
				G = n("./src/reddit/components/UserIcon/index.tsx"),
				W = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				q = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				H = n("./src/reddit/selectors/profile.ts"),
				z = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				V = n.n(z);
			const K = e => {
				let {
					post: t
				} = e;
				var n, s, i, a;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(H.l)(t.author)),
					u = Object(r.useMemo)(() => Object(D.c)({
						post: t
					}), [t]),
					m = Object(r.useMemo)(() => Object(F.a)(u), [u]);
				Object(r.useEffect)(() => {
					m || c(Object(U.d)(t.author))
				}, [c, t.author, m]);
				const p = !m && Object(q.a)(null === (n = null == d ? void 0 : d.icon) || void 0 === n ? void 0 : n.url),
					b = Object(W.c)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url);
				return o.a.createElement("div", {
					className: V.a.media
				}, m ? o.a.createElement(D.b, {
					post: t,
					url: u,
					className: V.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: V.a.mediaThumbnailContainer
				}) : null, !m && (null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url) && o.a.createElement("div", {
					className: V.a.userIconContainer
				}, o.a.createElement(G.a, {
					className: Object(g.a)({
						[V.a.snoovatarUserIcon]: p,
						[V.a.defaultUserIcon]: b
					}, V.a.userIcon),
					iconUrl: null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url,
					userName: d.name,
					wrapperClassName: V.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var J = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				X = n.n(J);
			const Y = Object(I.a)(null);
			var Z = Object(C.b)(Y(e => {
					let {
						post: t
					} = e;
					const n = Object(A.a)(),
						r = Object(M.a)(),
						s = Object(S.a)(),
						i = Object(E.x)(n) && !r;
					return o.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(T.b)(t.permalink) : Object(P.a)(t.permalink, !1, s)
					}, o.a.createElement("div", {
						className: X.a.container
					}, o.a.createElement(B, {
						post: t
					}), o.a.createElement(K, {
						post: t
					})))
				})),
				Q = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = n.n(Q);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const n = t.map(e => o.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: $.a.container
				}, n)
			};
			var te = n("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ne = n.n(te);
			const re = e => {
				let {
					post: t
				} = e;
				const n = Object(l.d)();
				if (!Object(l.e)(v) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [r] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ne.a.container,
					onClick: () => n(Object(u.y)(t, m.a.Click))
				}, o.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(w, {
					postId: r,
					className: ne.a.communityLink
				}))
			};

			function oe(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(s.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * s.b - 2 * s.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(c.B)(t) && Object(c.A)(t) ? o.a.createElement(re, {
					post: t
				}) : Object(a.G)(t) ? o.a.createElement(d.a, {
					post: t
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				v = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				_ = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/components/PostMeta/index.m.less"),
				j = n.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: O,
					isOverlay: k,
					isTopicPage: w,
					post: P,
					shouldShowSubscribeButton: I,
					subredditOrProfile: E,
					tooltipType: C
				} = e, T = !!w, S = Object(_.a)(), M = Object(s.e)(e => !!E && Object(i.i)(e, E.id)), A = !(!E || !Object(y.i)(E));
				return o.a.createElement("div", {
					className: j.a.metaContainer
				}, !r && !P.isSponsored && E && o.a.createElement(d.a, {
					postId: P.id,
					subredditName: E.name,
					isProfile: A
				}, o.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: E.url,
						state: S
					}
				}, E.displayText)), E && E.isQuarantined && o.a.createElement(p.a, null), !r && !P.isSponsored && E && I && !O && o.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(x.n)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: E.name,
						type: Object(y.i)(E) ? v.a.PROFILE : v.a.SUBREDDIT
					},
					postId: P.id,
					size: h.d.XXS,
					small: !0
				}), !r && !P.isSponsored && o.a.createElement(g.b, null), !r && !P.isSponsored && o.a.createElement(l.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), o.a.createElement(m.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: C,
					isModWithUserNotesPermissions: M
				}), o.a.createElement(u.a, {
					displayText: E ? E.displayText : null,
					inSubredditOrProfile: !!r,
					post: P,
					tooltipType: C
				}), !T && o.a.createElement(a.a, {
					hideCta: n,
					thing: P,
					tooltipType: k ? m.f.Lightbox : void 0
				}), M && o.a.createElement(c.a, {
					postOrComment: P,
					className: j.a.addModNote
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = n.n(f);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: a,
					post: f,
					share: g
				} = e;
				const x = Object(l.b)(),
					_ = Object(i.d)(),
					y = f && f.id,
					O = f && f.voteState;
				let j = null;
				y || (j = t ? "user_hovercard" : "profile_overview");
				const k = Object(o.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, x, n]);
				return s.a.createElement(u.t, {
					onClick: () => {
						a ? (x(m.i), y && O === b.a.notVoted && _(Object(c.ib)(y))) : k();
						const e = a ? "postify" : "copy";
						_(Object(d.b)({
							clickSource: j,
							share: g,
							source: e
						}))
					},
					className: Object(r.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(r.a)({
						[v.a.shirtIcon]: !a,
						[v.a.avatarPostButtonShirtIcon]: a
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: v.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, n) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, n) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, n) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return s.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, r, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									o && r(n, o), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(r.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(r.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(f))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => o.a.createElement("button", {
					className: Object(s.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(s.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				m = e => o.a.createElement("button", {
					className: Object(s.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, n) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SidebarNativeAd", (function() {
				return $
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/PostMedia/index.tsx"),
				c = n("./src/reddit/components/PostTitle/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/getShortenedLink.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/opener/index.ts"),
				b = n("./src/reddit/actions/ads/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				v = n("./src/reddit/components/PostContainer/index.tsx"),
				h = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/contexts/InsideOverlay.tsx"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				_ = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = n("./src/reddit/helpers/adCount/index.ts"),
				O = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = n("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				w = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				I = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				M = n("./src/reddit/components/NativeBannerAd/index.m.less"),
				A = n.n(M);
			const N = m.a.wrapped(e => s.a.createElement("img", {
				"data-adclicklocation": S.a.MEDIA,
				className: e.className,
				src: e.src
			}), "BannerAdImage", A.a);
			class L extends s.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(T.P)(e.media) || Object(T.J)(e.media) ? "" : e.media.content,
						{
							type: n
						} = e.media;
					if (!t || !n) return null;
					switch (n) {
						case C.ub.IMAGE:
							return s.a.createElement(N, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var R = n("./src/reddit/components/SidebarNativeAd/index.m.less"),
				B = n.n(R);
			const F = m.a.wrapped(d.g, "PostTopMeta", B.a),
				U = m.a.div("BannerAdContainer", B.a),
				D = e => {
					let {
						children: t
					} = e;
					return s.a.createElement("div", null, t)
				},
				G = m.a.div("PromotedPostContainer", B.a),
				W = m.a.wrapped(w.a, "OutboundLinkIcon", B.a),
				q = m.a.div("SourceLinkWrapper", B.a),
				H = m.a.div("TopLine", B.a),
				z = m.a.wrapped(c.c, "PostTitle", B.a),
				V = m.a.div("PostMediaWrapper", B.a),
				K = m.a.div("BackgroundWrapper", B.a),
				J = m.a.wrapped(v.b, "PostContainer", B.a),
				X = 640,
				Y = e => Object(k.a)(e.title, 100),
				Z = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(j.a)(Object(O.a)(e), P.a.actionIcon, P.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				Q = e => ({
					background: Object(I.f)(Object(E.a)(e).body, null, null) || ""
				});
			class $ extends s.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, h.a.Click), t.source ? t.source.outboundUrl ? Object(p.e)(t.source.outboundUrl, p.d.BLANK) : Object(p.e)(t.source.url, p.d.BLANK) : Object(p.e)(t.permalink, p.d.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: n,
						isOverlay: o
					} = this.props;
					let i, l, m = {};
					return e.isBlank ? (i = D, l = null) : e.isMediaOnly ? (i = U, m = {
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = s.a.createElement(L, {
						post: e
					})) : (i = G, l = s.a.createElement(K, {
						style: Q(this.props)
					}, s.a.createElement(H, null, s.a.createElement(F, {
						tooltipType: o ? d.f.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), s.a.createElement(z, {
						post: e,
						size: c.b.Large,
						format: Y
					}), e.source && s.a.createElement(q, null, s.a.createElement(_.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), s.a.createElement(W, null))), s.a.createElement(V, null, e.media && s.a.createElement(a.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: X,
						shouldLoad: !0
					})))), s.a.createElement(i, m, s.a.createElement(J, {
						className: t,
						isOverlay: o,
						post: e,
						onClick: this.onClick,
						eventFactory: n,
						style: Z(this.props)
					}, l))
				}
			}
			const ee = Object(i.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, n) => {
					e(Object(f.y)(t, n))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: n,
						placementIndex: r,
						isOverlay: o
					} = t;
					e(Object(b.c)(Object(y.a)(n, !!o, r)))
				}
			}));
			t.default = Object(x.b)(ee(Object(g.b)(Object(l.a)($))))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/ads/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/getShortenedLink.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/lib/avatarShareImages.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = n("./src/reddit/components/AvatarPost/index.m.less"),
				m = n.n(u);
			var p = e => {
					let {
						sourceUrl: t,
						username: n,
						post: r
					} = e;
					const [s, i] = new URL(t).pathname.split("/").slice(2), a = Object(d.a)(i);
					return o.a.createElement("div", {
						className: m.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: m.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(l.a, {
						isHovercard: !1,
						username: n,
						isAvatarPost: !0,
						post: r,
						share: {
							username: s,
							avatarId: i
						}
					}))
				},
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				v = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				h = n("./src/reddit/components/SourceLink/index.m.less"),
				g = n.n(h),
				x = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const O = x.a.wrapped(v.a, "OutboundLinkIcon", g.a),
				j = x.a.div("SourceLinkWrapper", g.a);

			function k(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: r,
					pageLayer: c
				} = e, d = r ? _.SourceElement.PostLink : _.SourceElement.ListingPostLink, {
					source: l
				} = n, u = n.isSponsored || Object(s.u)(c), m = Object(f.a)(n), v = Object(y.a)();
				return !l || v ? null : m ? o.a.createElement(p, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : o.a.createElement(j, {
					className: Object(i.a)({
						[g.a["m-comment"]]: r
					}, t)
				}, o.a.createElement(b.a, {
					href: l.url,
					isSponsored: u,
					postId: n.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...n,
					isSponsored: u
				}), o.a.createElement(O, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = n.n(o);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", s.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: s,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: v,
							...h
						} = this.props, g = this.state.isHovered, x = Object(c.a)({
							type: t.type,
							key: g ? "unsubscribe" : "subscribed"
						}), _ = h.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return o.a.createElement(a.t, u({
							className: e,
							priority: f || _,
							rplStyle: v,
							text: x,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: s,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: v,
							...h
						} = this.props, g = Object(c.a)({
							type: t.type,
							key: "subscribe"
						}), x = h.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return o.a.createElement(a.t, u({
							className: e,
							priority: f || x,
							size: a.d.XSP,
							rplStyle: v,
							text: g,
							onClick: this.onClick
						}, h, {
							id: `subscribe-button-${s}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(s.c)(p))
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const s = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? r.fbt._("Approved by {username} at {time}", [r.fbt._param("username", e.approvedBy), r.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : r.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : r.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + r.fbt._("Reason by {username}:", [r.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + r.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => r.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [r.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed as spam by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : r.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(a.q)(e),
					subreddit: Object(a.nb)(e),
					profile: Object(a.V)(e),
					post: Object(a.M)(e, t),
					comment: Object(a.j)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const n = Object(i.c)(e, {
							commentId: t
						}),
						o = n && Object(r.a)(n.postId);
					if (!n || !o) return null;
					const c = {
							commentId: t,
							commentsPageKey: o
						},
						d = t && o && Object(s.j)(e, c) || 0;
					return Object(a.B)(e, void 0, {
						depth: d
					})
				},
				u = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				m = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(a.M)(n, t),
					source: c.a.ChatView,
					subreddit: Object(a.nb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: o.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: l(n, t)
				}),
				b = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.SUBMIT,
					noun: "reply",
					post: Object(a.M)(t, e),
					comment: Object(a.j)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(a.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLICK,
					noun: "comment",
					actionInfo: Object(a.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(a.M)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				g = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLOSE,
					noun: "warning",
					post: Object(a.M)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				x = e => t => ({
					...d(t, e),
					source: "global",
					action: o.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				_ = (e, t, n) => r => ({
					...d(r, t),
					source: c.a.Chat,
					action: o.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				y = (e, t, n) => r => ({
					...d(r, t),
					source: c.a.Chat,
					action: o.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				O = () => e => {
					var t;
					return {
						...Object(a.q)(e),
						subreddit: Object(a.nb)(e),
						profile: Object(a.V)(e),
						actionInfo: {
							...Object(a.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: o.c.VIEW,
						noun: "hint"
					}
				},
				j = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.CLICK,
						noun: "chat_thread",
						actionInfo: Object(a.d)(t, {
							pageType: "actions_menu"
						})
					}
				},
				k = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.SUBMIT,
						noun: "comment",
						actionInfo: Object(a.d)(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return h
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...o.q(e),
					screen: o.eb(e),
					subreddit: o.nb(e),
					userSubreddit: o.wb(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.e.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => o => ({
					...a(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: o.W(r, t),
					subreddit: o.ob(r, t)
				}),
				v = (e, t) => f(e, t, "disable_in_community"),
				h = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return b
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return v
			})), n.d(t, "clickConfirmHideAward", (function() {
				return h
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return k
			})), n.d(t, "clickReportAward", (function() {
				return w
			})), n.d(t, "clickCancelReportAward", (function() {
				return P
			})), n.d(t, "clickConfirmReportAward", (function() {
				return I
			})), n.d(t, "viewGildModalEvent", (function() {
				return E
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return C
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), n.d(t, "clickMessageInputEvent", (function() {
				return S
			})), n.d(t, "typeMessageInputEvent", (function() {
				return M
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return B
			})), n.d(t, "clickNextButtonEvent", (function() {
				return F
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return U
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return D
			})), n.d(t, "clickFilterEvent", (function() {
				return G
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return W
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return q
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === o.e.Global && e.awardSubType === o.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === o.e.Global && e.awardSubType === o.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === o.e.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === o.e.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === o.e.Global && e.awardSubType === o.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const o = t && Object(s.g)(e, {
						commentId: t
					});
					return {
						...i.q(e),
						actionInfo: i.d(e, {
							reason: o ? "live_post" : void 0,
							...n
						}),
						comment: t ? i.j({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
						post: t ? i.M(e, t) : void 0,
						screen: i.eb(e),
						subreddit: i.nb(e),
						userSubreddit: i.wb(e),
						listing: t ? Object(r.k)(e, t) : void 0
					}
				},
				b = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: i.t(n)
				}),
				f = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: i.t(t)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				h = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				g = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				x = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				_ = x("award_hovercard_report"),
				y = x("cancel_award_hovercard_report"),
				O = x("flag_award"),
				j = x("cancel_flag_award"),
				k = x("confirm_flag_award"),
				w = x("report_community_award"),
				P = x("cancel_report_community_award"),
				I = x("confirm_report_community_award"),
				E = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				C = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				T = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				S = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				M = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				R = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				B = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				F = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				U = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				D = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: o,
						thingId: s
					} = e;
					return e => ({
						...p(e, s),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(s) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: o,
							...m(t)
						}
					})
				},
				G = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				W = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				q = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, f = !!n, v = s.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = f ? h : a.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = l || a.u(e), y = [...Object(i.d)(e), ...Object(i.e)(e)].filter(e => e.mobileId === _)[0], O = t.offerContext || (v && 0 === v.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(y, f)), j = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0, k = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0, w = y ? y.baselinePennies !== y.pennies ? `${j}_percent_price` : y.baselineCoins !== y.coins ? `${k}_percent_bonus` : void 0 : void 0, P = g === d.GoldPurchaseType.Premium ? r.Db : y ? y.pennies : void 0;
					return {
						...c.q(e),
						comment: n ? c.j({
							state: e,
							commentId: n
						}) : null,
						correlationId: a.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.M(e, n) : null,
						screen: c.eb(e),
						subreddit: n ? c.nb(e) : null,
						goldPurchase: {
							...v ? Object(b.a)(v) : null,
							type: g,
							gildedContent: f,
							contentType: x,
							numberCoins: y ? y.coins : void 0,
							offerContext: O,
							offerType: w
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: P
						},
						purchase: {
							priceMicros: P
						}
					}
				},
				v = (e, t, n) => r => ({
					...f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				y = (e, t) => n => ({
					...f(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, n) => r => {
					const o = f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : a.p(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				k = e => t => {
					var n;
					const r = f(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return i
			})), n.d(t, "n", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return j
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: Object(o.eb)(e),
					profile: Object(o.V)(e),
					subreddit: Object(o.nb)(e),
					userSubreddit: Object(o.wb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...s(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					...s(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(o.l)(n, t)
					},
					...s(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.CLICK,
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...s(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				b = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					post: Object(o.M)(n, t),
					...s(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					...s(n)
				}),
				v = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.M)(n, t),
					subreddit: Object(o.qb)(n, t)
				}),
				h = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.j)({
						state: n,
						commentId: t
					}),
					post: Object(o.M)(n, t),
					subreddit: Object(o.qb)(n, t)
				}),
				g = (e, t, n, r) => s => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.M)(s, n),
					subreddit: Object(o.qb)(s, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(o.j)({
							state: s,
							commentId: n
						})
					}
				}),
				x = () => e => ({
					...s(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				_ = (e, t, n) => r => ({
					...s(r),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(o.j)({
						state: r,
						commentId: e
					}) || void 0,
					post: Object(o.M)(r, e)
				}),
				y = (e, t) => n => ({
					...s(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(o.j)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(o.M)(n, e),
					modAction: {
						targetUserId: t
					}
				}),
				O = (e, t, n, r) => i => ({
					source: "post_mod_action_menu",
					action: "click",
					post: Object(o.M)(i, t),
					noun: e,
					setting: {
						value: n,
						oldValue: r
					},
					...s(i)
				}),
				j = (e, t, n, r) => i => ({
					source: "post_mod_action_menu",
					action: "save",
					post: Object(o.M)(i, t),
					noun: e,
					setting: {
						value: n,
						oldValue: r
					},
					...s(i)
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "m", (function() {
				return S
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts");
			const c = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				d = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.q(t)
					};
					return Object(o.a)(t) && Object.assign(n, c), n
				},
				l = (e, t) => n => {
					const {
						id: r
					} = Object(i.Db)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.q(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				u = e => ({
					...s.q(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.lb(e)
				}),
				m = e => ({
					...s.q(e, {
						isGVSEvent: !0
					}),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: s.lb(e)
				}),
				p = e => ({
					...s.q(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.lb(e)
				}),
				b = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.q(e),
					...c
				}),
				f = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...s.q(e),
					...c
				}),
				v = e => t => ({
					...s.q(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				h = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.q(n),
					snoovatar: s.lb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				g = h("view"),
				x = h("click"),
				_ = h("dismiss"),
				y = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...s.q(r),
					snoovatar: s.lb(r)
				}),
				O = y("anniversary_achievement", "view", "anniversary_achievement"),
				j = y("anniversary_achievement", "click", "close"),
				k = y("anniversary_achievement", "click", "equip"),
				w = e => () => t => ({
					...s.q(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				P = w("view"),
				I = w("click"),
				E = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...s.q(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.lb(r)
				}),
				C = e => E("onboarding", "click", e),
				T = () => E("avatar", "view", "onboarding"),
				S = e => {
					let {
						user: t,
						pageType: n,
						userHasNft: r
					} = e;
					return e => {
						const o = Object(a.a)(t.accountIcon),
							i = (null == t ? void 0 : t.id) && (null == t ? void 0 : t.username);
						return {
							source: "profile",
							action: "screen",
							noun: "load",
							...s.q(e),
							actionInfo: {
								pageType: n
							},
							profile: i ? {
								id: t.id,
								name: t.username
							} : null,
							snoovatar: {
								snoovatarActive: o,
								userHasNft: r
							},
							marketplace: {
								hasCollectibleCollection: !1
							}
						}
					}
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./src/lib/hooks/useTooltip.ts");
			const i = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, i))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				s = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(r.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: n,
						avatarShareUrl: r
					} = e;
					const a = i.test(r.trim()),
						c = o.includes(t),
						d = s.includes(n);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.a)(t)
			})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, o, s = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [r.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					},
					pushcard: null
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_pushcard",
				p = "avatar_promo_archived";
			var b;
			! function(e) {
				e.MaxEventViews = "targeting:max_event_views", e.Title = "copy:pushcard_title", e.Cta = "copy:pushcard_cta", e.BannerTitle = "copy:banner_title", e.BannerBody = "copy:banner_body", e.Deeplink = "deeplink"
			}(b || (b = {}));
			const f = e => {
					let {
						startsAt: t,
						endsAt: n
					} = e;
					const r = t && new Date(t) <= new Date,
						o = !!n && new Date(n) < new Date;
					return !!r && !o
				},
				v = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: r
					} = e, [o, s] = r, i = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(i[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: o,
							title: i[b.BannerTitle],
							body: i[b.BannerBody]
						},
						imageUrl: s,
						title: i[b.Title],
						cta: i[b.Cta],
						deeplink: i[b.Deeplink]
					}
				},
				h = e => {
					const t = {};
					return null == e || e.forEach(e => {
						if (null == e ? void 0 : e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function g(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: r,
						tags: o
					} = e;
					if (!(null == o ? void 0 : o.includes(p))) {
						if ((null == o ? void 0 : o.includes(m)) && r && r.length >= 2 && (t.pushcard = v(e)), null == o ? void 0 : o.includes(l)) {
							const {
								text: n,
								id: s
							} = e, i = r || null, a = h(o);
							t.quickCreateV1 = {
								...a,
								id: s,
								text: n,
								active: f(e) && !!i,
								webAssetUrls: i
							}
						}
						if (null == o ? void 0 : o.includes(u)) {
							const s = r || null,
								i = (null === (n = o.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: f(e) && !!s,
								assetUrls: s,
								experimentRequired: i
							}
						}
					}
				}), t
			}
			var x = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				_ = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/constants/modals.ts");
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case _.s:
						const {
							avatarMarketingEvents: o
						} = t.payload;
						return o ? {
							...d,
							...g(o)
						} : d;
					case x.b:
					case x.c:
					case x.f:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case y.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === O.a.SNOOVATAR_MODAL ? {
							...d,
							pushcard: null !== (r = null == e ? void 0 : e.pushcard) && void 0 !== r ? r : null
						} : e;
					default:
						return e
				}
			};
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: j,
				avatarUser: c,
				randomAvatar: k
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const o = e.authorFlair.models[r];
					if (!o) return null;
					const s = n.author;
					return s && o[s] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const s = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, r, o;
					const i = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (o = null == i ? void 0 : i.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(s.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					} = e;
					return t.awardSubType === o.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: o
						} = e, s = t;
						if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[t.id] && t.tiers) {
							const e = o.awardCountsById[t.id];
							s = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(s, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					}) : u(t, r, n)
				},
				p = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					const i = Object(d.d)(e),
						c = l.find(e => e >= r),
						u = o ? Object(a.F)(e, {
							postId: o
						}) || Object(s.c)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: c,
						prefersReducedMotion: i,
						postOrComment: u
					})), e), {})
				}),
				b = (e, t) => {
					let {
						award: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: o
					})[n.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const o = Object(c.Db)(e, {
						userName: r
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return b(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				v = e => {
					const t = Object(i.b)(e),
						n = Object(i.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "t", (function() {
				return a
			})), n.d(t, "s", (function() {
				return c
			})), n.d(t, "v", (function() {
				return d
			})), n.d(t, "u", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "y", (function() {
				return _
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "z", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return S
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				O = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				k = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				w = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				P = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				C = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.2ca76c53d72f2702c8b1.js.map