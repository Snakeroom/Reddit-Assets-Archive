// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.164adfd93d8964e98e4a.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
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
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !o && !l && /macintosh/i.test(t),
						v = !i && !u && !m && !p && /linux/i.test(t),
						_ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !O && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, _ ? (s.msedge = e, s.version = _) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, g && (s.version = g)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, g && (s.version = g)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && g && (s.version = g)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : x ? (s.xbox = e, s.osname = "Xbox") : f ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var j = "";
					s.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (s.osversion = j);
					var k = !s.windows && j.split(".")[0];
					return O || c || "ipad" == o || i && (3 == k || k >= 4 && !y) || s.silk ? s.tablet = e : (y || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
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
					s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, s.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, s.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, s.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, s.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, s.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, s.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var o = s.element,
								i = a(o),
								c = this._rootContainsTarget(o),
								d = s.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, o, i, c, l, u, m, p, b = a(n), f = d(n), h = !1; !h;) {
								var v = null,
									_ = 1 == f.nodeType ? e.getComputedStyle(f) : {};
								if ("none" == _.display) return;
								if (f == this.root || f == t ? (h = !0, v = r) : f != t.body && f != t.documentElement && "visible" != _.overflow && (v = a(f)), v && (s = v, o = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), c = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
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
					}, s.prototype._getRootRect = function() {
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
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var o = this.thresholds[s];
								if (o == n || o == r || o < n != o < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
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
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, r) {
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
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, s)
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
					var d = o[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (s = n ? n.call(r, l, u, d) : void 0) || void 0 === s && l !== u) return !1
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
				...i.p(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.f(e),
				app: i.g(e),
				feed: i.s(e),
				geo: i.u(e),
				platform: i.J(e),
				referrer: i.ab(e),
				request: i.bb(e),
				screen: i.db(e),
				session: i.ib(e),
				user: i.tb(e),
				media: n ? i.D(e, n) : null,
				post: n ? i.L(e, n) : null
			});
			var c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const n = Object(o.f)().getState(),
						{
							post: r
						} = {
							...t
						};
					return r && r.isSponsored ? s.a.createElement("div", {
						onClickCapture: function(e, r) {
							var s, o;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(r)(n, i, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(a(r)(n, c.a.UNKNOWN, null === (s = t.post) || void 0 === s ? void 0 : s.postId)))
						}
					}, s.a.createElement(e, t)) : s.a.createElement(e, t)
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
				s = "https://i.redd.it/snoovatar",
				o = "snoovatars",
				i = "avatars";

			function a(e) {
				return `${s}/${+e>=r?i:o}/shared/${e}.png`
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: s,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = i || Object(r.E)(e)
				} else c = Object(r.E)(e);
				const d = o.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.yc, s.ub, s.D, s.U, s.pb, s.Xb],
				i = {
					[s.Xb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.U]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.D]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.ub]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.yc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Xb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.U]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.D]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.yc]: "",
						[s.ub]: "",
						[s.D]: "",
						[s.U]: "",
						[s.pb]: "",
						[s.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
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
			const s = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(r.a)(s("awardSheetInfoRequested")),
				i = Object(r.a)(s("manageableAwardsRequested")),
				a = Object(r.a)(s("createCommunityAward")),
				c = Object(r.a)(s("createGlobalAward")),
				d = Object(r.a)(s("createModAward")),
				l = Object(r.a)(s("createAwardFailed")),
				u = Object(r.a)(s("createAwardSuccessful")),
				m = Object(r.a)(s("removeCommunityAward")),
				p = Object(r.a)(s("disableAwardinCommunity")),
				b = Object(r.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "f", (function() {
				return k
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(r.a)(f.J),
				v = Object(r.a)(f.f),
				_ = () => async (e, t) => {
					const r = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(s()(r))
				}, g = Object(r.a)(f.I), O = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, s) => {
						const a = s(),
							c = t ? Object(u.a)(a, t) : void 0;
						e(g({
							award: c && c.isEnabled ? c : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(i.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(a, {
							thingId: r
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(o.a)(r)) {
							const e = Object(m.F)(a, {
								postId: r
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, r)
					}
				}, y = Object(r.a)(f.e), x = Object(r.a)(f.H), j = () => async (e, t) => {
					const r = t(),
						o = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(y()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(r)), Object(c.b)(c.a.GildingFlow)
				}, k = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
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
				f = Object(s.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				v = Object(s.a)(h),
				_ = (e, t, n) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var b, f, h, v;
					const _ = Object(m.b)(s()),
						g = await (async (e, t, n, r, s) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": s || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, _);
					if (!g.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(g.body)), {
						accountIcon: null === (f = null === (b = g.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (h = g.body) || void 0 === h ? void 0 : h.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, g = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (s) {
						o.c.captureException(s)
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(r());
						t.ok && e(v(t.body))
					} catch (s) {
						o.c.captureException(s)
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
				s = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
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
				})), await e(Object(o.g)(c.a.SNOOVATAR_MODAL))
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
						activeDetails: h,
						shopTabState: v
					} = e, _ = n();
					a && Object(u.a)(Object(d.g)(a)(_)), Object(l.S)(_) ? (await t(Object(o.h)(c.a.SNOOVATAR_MODAL, {
						share: m,
						source: p,
						activeTab: b,
						activeMeSubpage: f,
						activeDetails: h,
						shopTabState: v
					})), t(Object(i.n)({
						title: Object(r.n)()
					}))) : await t(Object(s.openLoginModal)())
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				h = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/redditGQL/types.ts");
			const _ = Object(l.v)();
			t.a = _(e => {
				let {
					pageLayer: t,
					postOrComment: n,
					className: l
				} = e;
				var _;
				const g = Object(f.a)(),
					O = Object(i.d)(),
					y = Object(a.a)(),
					x = (null === (_ = null == t ? void 0 : t.urlParams) || void 0 === _ ? void 0 : _.pageName) === d.wb.Modqueue,
					j = Object(s.useCallback)(() => {
						const e = Object(p.b)({
							itemId: n.id,
							tooltipIdPrefix: m.a,
							tooltipType: g ? b.f.Lightbox : void 0
						});
						O(Object(u.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: v.z.Note
							}
						})), y(Object(c.a)(n.id, n.authorId))
					}, [n, O, g, y]);
				return !x || Object(h.p)(n.author) ? null : o.a.createElement("button", {
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.e, null, o.a.createElement(a.i, null, o.a.createElement(d.a, null, o.a.createElement(a.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.l, null, o.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(a.g, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.u, {
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				h = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/contexts/Post/index.tsx"),
				_ = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/CrosspostBox/index.m.less"),
				y = n.n(O),
				x = n("./src/lib/lessComponent.tsx");

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
				E = 1,
				I = x.a.div("Container", y.a),
				C = x.a.div("PostMetaWrapper", y.a),
				P = x.a.wrapped(p.c, "PostTitle", y.a),
				w = x.a.div("FlatList", y.a),
				S = x.a.div("FlatItem", y.a),
				T = x.a.span("FlatListDotSpacer", y.a),
				N = x.a.wrapped(I, "LinkContainer", y.a),
				M = x.a.div("Content", y.a),
				L = x.a.div("ThumbnailContainer", y.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Tb.TOPIC),
					shouldOpenPostInNewTab: g.lb
				}),
				R = Object(i.b)(A);
			t.c = Object(v.b)(R(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: r,
					mediaProps: s,
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
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					d = t;
				return i && !i.media ? o.a.createElement(N, {
					className: d
				}, o.a.createElement(M, null, o.a.createElement(C, null, o.a.createElement(m.a, c)), B(i), i.source && o.a.createElement(b.a, {
					post: i
				}), U(e)), G(e)) : o.a.createElement(I, {
					className: d
				}, o.a.createElement(C, null, o.a.createElement(m.a, c)), B(i), F(e), U(e))
			}));
			const B = e => o.a.createElement(P, {
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
					return o.a.createElement("div", null, o.a.createElement(u.a, j({}, r, {
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
					return o.a.createElement(w, null, o.a.createElement(S, null, r.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [r.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), o.a.createElement(T, null), o.a.createElement(S, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, r.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [r.fbt._plural(s, "comment count", Object(l.b)(s))], {
						hk: "xPYWL"
					}))
				},
				G = e => o.a.createElement(L, null, o.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
			t.a = s.a.memo((function(e) {
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
				}, [t]), t ? s.a.createElement("div", c({
					className: Object(o.a)(a.a.tooltip, n.className, {
						[a.a.visible]: i
					})
				}, n.popperProps), n.children, i && s.a.createElement("div", c({
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Xb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				h = n("./src/reddit/helpers/isRemoved.ts"),
				v = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				_ = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				x = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = n("./src/reddit/icons/fonts/Report/index.tsx"),
				E = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				I = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				C = n("./src/reddit/models/Post/index.ts"),
				P = n("./src/reddit/selectors/modQueue.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/components/PostBadges/index.m.less"),
				T = n.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => o.a.createElement("span", N({
					className: T.a.removalReason
				}, e), e.children),
				L = () => r.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				A = () => r.fbt._("Comments are locked", null, {
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
						return Object(P.b)(e, t)
					},
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(w.q)(e, {
							postId: n.id
						})
					},
					modModeEnabled: f.W
				}),
				W = Object(i.b)(G, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([n.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), n.e("removalReasonActions")]).then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
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
					modModeEnabled: P,
					onHideTooltip: w,
					onOpenRemovalReasonModal: S,
					onShowTooltip: D,
					post: G,
					tooltipType: W,
					isModQueueDisplayEnabled: H
				} = e;
				const V = {
						caretOnTop: !1
					},
					z = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === b.a.SUBREDDIT,
					q = U("Approve", G.id, W),
					K = U("Archived", G.id, W),
					X = U("Lock", G.id, W),
					J = U("Mod", G.id, W),
					Y = U("Remove", G.id, W),
					Q = U("Report", G.id, W),
					Z = U("Spam", G.id, W),
					$ = U("Sticky", G.id, W),
					ee = U("Pinned", G.id, W);
				return o.a.createElement("div", {
					className: t
				}, a && n && G.distinguishType === d.I.MODERATOR && o.a.createElement(s.Fragment, null, o.a.createElement(g.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.modIcon)
				}), o.a.createElement(u.c, N({
					tooltipId: J,
					text: R(n)
				}, V))), G.isArchived && o.a.createElement(s.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.archivedIcon),
					desc: L(),
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: K,
					text: L()
				}, V))), G.isLocked && !G.isSponsored && o.a.createElement(s.Fragment, null, o.a.createElement(x.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.lockIcon),
					desc: A(),
					id: X,
					onMouseEnter: D(X),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: X,
					text: A()
				}, V))), i && Object(C.v)(G) && !l && o.a.createElement(s.Fragment, null, o.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: B(),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: $,
					text: B()
				}, V))), f && p && o.a.createElement(s.Fragment, null, o.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: F(),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: ee,
					text: F()
				}, V))), !H && o.a.createElement(o.a.Fragment, null, (G.isApproved || G.approvedBy) && o.a.createElement(s.Fragment, null, o.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.approveIcon),
					desc: Object(v.a)(G),
					id: q,
					onMouseEnter: D(q),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: q,
					text: Object(v.a)(G)
				}, V))), Object(h.a)(G) && o.a.createElement(s.Fragment, null, o.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.removeIcon),
					desc: Object(v.b)(G),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: w
				}), z && o.a.createElement(m.a, {
					className: T.a.addRemovalReason,
					onClick: S,
					text: r.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && o.a.createElement(M, {
					onMouseEnter: D(Y),
					onMouseLeave: w
				}, r.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, N({
					tooltipId: Y,
					text: Object(v.b)(G)
				}, V))), G.bannedBy && G.isSpam && o.a.createElement(s.Fragment, null, o.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.spamIcon),
					desc: Object(v.d)(G),
					id: Z,
					onMouseEnter: D(Z),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: Z,
					text: Object(v.d)(G)
				}, V)))), Object(_.a)(G) && !P && !H && o.a.createElement(s.Fragment, null, o.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.reportIcon),
					desc: Object(v.c)(G.numReports),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: w
				}), o.a.createElement(u.c, N({
					tooltipId: Q,
					text: Object(v.c)(G.numReports)
				}, V))))
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
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						o = Object(r.useCallback)(t => {
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
					return Object(d.a)(t, o, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/objectSelector/index.ts"),
				g = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				y = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(x);
			const k = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(_.a)((e, t) => {
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
					pageType: e => Object(h.d)(e).pageType
				})),
				E = "post-container";
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: h,
						ref: _,
						shouldAddGalleryViewability: g = !0
					} = this.props, O = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: _,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, o, p))(n), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(j.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": E,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": y.a.BACKGROUND
					}, n), x = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && g ? s.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || x ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(O))
				}
			}
			t.b = k(Object(O.a)(Object(g.a)(Object(m.c)(I))))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ne
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx"),
				a = n("./src/reddit/models/Post/index.ts"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/constants/adEvents.ts"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.Dc
			}), e => e === u.Xd);
			var f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				g = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				x = n.n(y);
			const j = e => {
				let {
					postId: t,
					className: n
				} = e;
				const r = Object(c.e)(e => Object(g.F)(e, {
						postId: t
					})),
					o = Object(c.e)(e => "subreddit" === (null == r ? void 0 : r.belongsTo.type) ? Object(O.X)(e, {
						subredditId: r.belongsTo.id
					}) : null);
				return o ? s.a.createElement(v.a, {
					className: Object(h.a)(x.a.link, n),
					to: o.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), s.a.createElement(_.b, {
					className: x.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), s.a.createElement("span", {
					className: x.a.subredditName
				}, o.displayText)) : null
			};
			var k = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				E = n("./src/reddit/connectors/PostViewable/index.ts"),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/contexts/Post/index.tsx"),
				P = n("./src/reddit/helpers/path/index.ts"),
				w = n("./src/reddit/hooks/useClickSourceData.ts"),
				S = n("./src/reddit/hooks/useIsOverlay.ts"),
				T = n("./src/reddit/hooks/usePageLayer.ts"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				M = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				L = n.n(M);
			const A = e => {
				let {
					post: t
				} = e;
				const n = `${Object(N.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					r = `${Object(N.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return s.a.createElement("div", {
					className: L.a.postInformation
				}, s.a.createElement("h5", {
					className: L.a.title
				}, t.title), s.a.createElement("div", {
					className: L.a.interactions
				}, s.a.createElement("p", null, n), s.a.createElement("p", null, r)))
			};
			var R = n("./src/lib/isUrl/index.ts"),
				B = n("./src/reddit/actions/profile/index.ts"),
				F = n("./src/reddit/components/Thumbnail/index.tsx"),
				U = n("./src/reddit/components/UserIcon/index.tsx"),
				D = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				G = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = n("./src/reddit/selectors/profile.ts"),
				H = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				V = n.n(H);
			const z = e => {
				let {
					post: t
				} = e;
				var n, o, i, a;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(W.l)(t.author)),
					u = Object(r.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					m = Object(r.useMemo)(() => Object(R.a)(u), [u]);
				Object(r.useEffect)(() => {
					m || d(Object(B.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(G.a)(null === (n = null == l ? void 0 : l.icon) || void 0 === n ? void 0 : n.url),
					b = Object(D.c)(null === (o = null == l ? void 0 : l.icon) || void 0 === o ? void 0 : o.url);
				return s.a.createElement("div", {
					className: V.a.media
				}, m ? s.a.createElement(F.b, {
					post: t,
					url: u,
					className: V.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: V.a.mediaThumbnailContainer
				}) : null, !m && (null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url) && s.a.createElement("div", {
					className: V.a.userIconContainer
				}, s.a.createElement(U.a, {
					className: Object(h.a)({
						[V.a.snoovatarUserIcon]: p,
						[V.a.defaultUserIcon]: b
					}, V.a.userIcon),
					iconUrl: null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url,
					userName: l.name,
					wrapperClassName: V.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var q = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				K = n.n(q);
			const X = Object(E.a)(null);
			var J = Object(C.b)(X(e => {
					let {
						post: t
					} = e;
					const n = Object(T.a)(),
						r = Object(S.a)(),
						o = Object(w.a)(),
						i = Object(I.x)(n) && !r;
					return s.a.createElement(v.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(P.b)(t.permalink) : Object(k.a)(t.permalink, !1, o)
					}, s.a.createElement("div", {
						className: K.a.container
					}, s.a.createElement(A, {
						post: t
					}), s.a.createElement(z, {
						post: t
					})))
				})),
				Y = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Q = n.n(Y);
			const Z = e => {
				let {
					postIds: t
				} = e;
				const n = t.map(e => s.a.createElement(J, {
					postId: e,
					key: e
				}));
				return s.a.createElement("div", {
					className: Q.a.container
				}, n)
			};
			var $ = n("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = n.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const n = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [r] = t.adPromotedUserPostIds;
				return s.a.createElement("div", {
					className: ee.a.container,
					onClick: () => n(Object(d.y)(t, l.a.Click))
				}, s.a.createElement(Z, {
					postIds: t.adPromotedUserPostIds
				}), s.a.createElement(j, {
					postId: r,
					className: ee.a.communityLink
				}))
			};

			function ne(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(a.B)(t) && Object(a.A)(t) ? s.a.createElement(te, {
					post: t
				}) : s.a.createElement(i.a, {
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
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
				h = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = n("./src/reddit/helpers/trackers/post.ts"),
				O = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/models/Subreddit/index.ts"),
				x = n("./src/reddit/components/PostMeta/index.m.less"),
				j = n.n(x);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: x,
					isOverlay: k,
					isTopicPage: E,
					post: I,
					shouldShowSubscribeButton: C,
					subredditOrProfile: P,
					tooltipType: w
				} = e, S = !!E, T = Object(O.a)(), N = Object(o.e)(e => !!P && Object(i.i)(e, P.id));
				return s.a.createElement("div", {
					className: j.a.metaContainer
				}, !r && !I.isSponsored && P && s.a.createElement(d.a, {
					postId: I.id,
					subredditName: P.name
				}, s.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: T
					}
				}, P.displayText)), P && P.isQuarantined && s.a.createElement(p.a, null), !r && !I.isSponsored && P && C && !x && s.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(g.n)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(y.i)(P) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: I.id,
					size: v.d.XXS,
					small: !0
				}), !r && !I.isSponsored && s.a.createElement(_.b, null), !r && !I.isSponsored && s.a.createElement(l.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), s.a.createElement(m.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: I,
					tooltipType: w,
					isModWithUserNotesPermissions: N
				}), s.a.createElement(u.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!r,
					post: I,
					tooltipType: w
				}), !S && s.a.createElement(a.a, {
					hideCta: n,
					thing: I,
					tooltipType: k ? m.f.Lightbox : void 0
				}), N && s.a.createElement(c.a, {
					postOrComment: I,
					className: j.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return F
			})), n.d(t, "a", (function() {
				return Y
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				v = n("./src/reddit/actions/post.ts"),
				_ = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				x = n("./src/reddit/hooks/usePostContext.ts"),
				j = n("./src/reddit/hooks/useTheme.ts"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/Media/index.ts"),
				C = n("./src/reddit/models/Post/index.ts"),
				P = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/lib/getShortenedLink.ts"),
				T = n("./src/reddit/components/FlairWrapper/index.tsx"),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				M = n("./src/lib/prettyPrintNumber/index.ts"),
				L = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				R = n.n(A);
			const B = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, U = Object(a.b)(B)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(y.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, R.a.proposalMetaData)
					}, i.a.createElement("span", null, N.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [N.fbt._param("count", Object(M.a)(r)), N.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(L.a, {
						className: R.a.proposalExpiry,
						poll: t
					}))
				})),
				D = n("./src/reddit/components/SEOTitle/index.tsx"),
				G = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				W = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				V = n("./src/telemetry/models/Outbound.ts"),
				z = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				K = n("./src/reddit/components/PostTitle/index.m.less"),
				X = n.n(K);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(F || (F = {}));
			const Y = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: o,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(j.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = X.a.ExtraLarge;
							break;
						case F.Large:
							m = X.a.Large;
							break;
						case F.Medium:
							m = X.a.Medium;
							break;
						case F.Small:
							m = X.a.Small;
							break;
						case F.ExtraSmall:
							m = X.a.ExtraSmall;
							break;
						case F.Metadata:
							m = X.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(X.a.Title, a, m, {
							[X.a.isNoWrap]: s,
							[X.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(w.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, r ? i.a.createElement(D.b, {
						type: r
					}, o) : o)
				},
				Q = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...o
					} = e;
					return i.a.createElement(c.a, J({}, o, {
						className: Object(u.a)(t, X.a.styledLink, {
							[X.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(X.a.titleContainer, r, {
							[X.a.isNoWrap]: n,
							[X.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				$ = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(p.r)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: W.e,
					shouldOpenPostInNewTab: H.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: n
					} = t, r = Object(a.d)(), s = Object(O.a)(), o = Object(a.e)(G.b), c = Object(a.e)(G.c), d = e => {
						(o || c) && (e.preventDefault(), r(Object(v.Z)(Object(g.b)(t.permalink), t.id))), t.isSponsored && Object(C.A)(t) && r(Object(v.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(te, e)); {
						const r = t.permalink,
							o = e.isCommentPermalink ? Object(g.b)(r) : Object(h.a)(r, void 0, s);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(C.A)(t) ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? i.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, i.a.createElement(te, t)) : i.a.createElement(te, t)
						})(t, e) : i.a.createElement(Q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: d
						}, i.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const o = e.isCommentsPage ? D.a.PostComments : D.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(Y, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && i.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				ne = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, o = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink;
					if (Object(y.a)()) return null;
					if (n && r.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== F.Large && !r.isSponsored && (r.source || r.media && (r.media.type === I.o.GIFVIDEO || r.media.type === I.o.IMAGE || r.media.type === I.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(I.E)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: o
						}, Object(S.a)(r), !r.isSponsored && i.a.createElement(k.a, {
							name: "external_link",
							className: X.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: o
					}, Object(S.a)(r), !r.isSponsored && i.a.createElement(k.a, {
						name: "external_link",
						className: X.a.outboundLinkIcon
					}));
					return null
				};
			class re extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${X.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(w.a)(this.props).bodyText,Object(w.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: o,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === E.b.Left, b = Object(T.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(z.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), v = !o && !s && !t, _ = v && f && f.length > 0, g = v && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(X.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": q.a.TITLE,
						onClick: m
					}, !d && _ && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(P.b)(c) && i.a.createElement(ee, J({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && i.a.createElement(U, {
						className: X.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(ne, this.props), g && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: X.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.ib)(),
					n = Object(p.x)(t),
					r = Object(x.a)(),
					s = Object(a.e)(s => $(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					o = Object(j.a)(),
					c = Object(m.b)();
				return r ? i.a.createElement(re, J({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: o,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				h = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: a,
					post: f,
					share: _
				} = e;
				const g = Object(l.b)(),
					O = Object(i.d)(),
					y = f && f.id,
					x = f && f.voteState;
				let j = null;
				y || (j = t ? "user_hovercard" : "profile_overview");
				const k = Object(s.useCallback)(() => g(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, g, n]);
				return o.a.createElement(u.t, {
					onClick: () => {
						a ? (g(m.i), y && x === b.a.notVoted && O(Object(c.ib)(y))) : k();
						const e = a ? "postify" : "copy";
						O(Object(d.b)({
							clickSource: j,
							share: _,
							source: e
						}))
					},
					className: Object(r.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(r.a)({
						[h.a.shirtIcon]: !a,
						[h.a.avatarPostButtonShirtIcon]: a
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: h.a.chevronIcon
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, r, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									s && r(n, s), t(n)
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(o.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				m = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				h = n("./src/reddit/components/PostContainer/index.tsx"),
				v = n("./src/reddit/constants/adEvents.ts"),
				_ = n("./src/reddit/contexts/InsideOverlay.tsx"),
				g = n("./src/reddit/contexts/Post/index.tsx"),
				O = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = n("./src/reddit/helpers/adCount/index.ts"),
				x = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = n("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				E = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				P = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				S = n("./src/reddit/models/Media/index.ts"),
				T = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				N = n("./src/reddit/components/NativeBannerAd/index.m.less"),
				M = n.n(N);
			const L = m.a.wrapped(e => o.a.createElement("img", {
				"data-adclicklocation": T.a.MEDIA,
				className: e.className,
				src: e.src
			}), "BannerAdImage", M.a);
			class A extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(S.O)(e.media) || Object(S.I)(e.media) ? "" : e.media.content,
						{
							type: n
						} = e.media;
					if (!t || !n) return null;
					switch (n) {
						case w.vb.IMAGE:
							return o.a.createElement(L, {
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
					return o.a.createElement("div", null, t)
				},
				G = m.a.div("PromotedPostContainer", B.a),
				W = m.a.wrapped(E.a, "OutboundLinkIcon", B.a),
				H = m.a.div("SourceLinkWrapper", B.a),
				V = m.a.div("TopLine", B.a),
				z = m.a.wrapped(c.c, "PostTitle", B.a),
				q = m.a.div("PostMediaWrapper", B.a),
				K = m.a.div("BackgroundWrapper", B.a),
				X = m.a.wrapped(h.b, "PostContainer", B.a),
				J = 640,
				Y = e => Object(k.a)(e.title, 100),
				Q = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(j.a)(Object(x.a)(e), I.a.actionIcon, I.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				Z = e => ({
					background: Object(C.g)(Object(P.a)(e).body, null, null) || ""
				});
			class $ extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, v.a.Click), t.source ? t.source.outboundUrl ? Object(p.e)(t.source.outboundUrl, p.d.BLANK) : Object(p.e)(t.source.url, p.d.BLANK) : Object(p.e)(t.permalink, p.d.BLANK)
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
						isOverlay: s
					} = this.props;
					let i, l, m = {};
					return e.isBlank ? (i = D, l = null) : e.isMediaOnly ? (i = U, m = {
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = o.a.createElement(A, {
						post: e
					})) : (i = G, l = o.a.createElement(K, {
						style: Z(this.props)
					}, o.a.createElement(V, null, o.a.createElement(F, {
						tooltipType: s ? d.f.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(z, {
						post: e,
						size: c.b.Large,
						format: Y
					}), e.source && o.a.createElement(H, null, o.a.createElement(O.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), o.a.createElement(W, null))), o.a.createElement(q, null, e.media && o.a.createElement(a.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: J,
						shouldLoad: !0
					})))), o.a.createElement(i, m, o.a.createElement(X, {
						className: t,
						isOverlay: s,
						post: e,
						onClick: this.onClick,
						eventFactory: n,
						style: Q(this.props)
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
						isOverlay: s
					} = t;
					e(Object(b.c)(Object(y.a)(n, !!s, r)))
				}
			}));
			t.default = Object(g.b)(ee(Object(_.b)(Object(l.a)($))))
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
				s = n.n(r),
				o = n("./src/lib/ads/index.ts"),
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
					const [o, i] = new URL(t).pathname.split("/").slice(2), a = Object(d.a)(i);
					return s.a.createElement("div", {
						className: m.a.avatarPostContainer
					}, s.a.createElement("img", {
						className: m.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), s.a.createElement(l.a, {
						isHovercard: !1,
						username: n,
						isAvatarPost: !0,
						post: r,
						share: {
							username: o,
							avatarId: i
						}
					}))
				},
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				h = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = n("./src/reddit/components/SourceLink/index.m.less"),
				_ = n.n(v),
				g = n("./src/lib/lessComponent.tsx"),
				O = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const x = g.a.wrapped(h.a, "OutboundLinkIcon", _.a),
				j = g.a.div("SourceLinkWrapper", _.a);

			function k(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: r,
					pageLayer: c
				} = e, d = r ? O.SourceElement.PostLink : O.SourceElement.ListingPostLink, {
					source: l
				} = n, u = n.isSponsored || Object(o.u)(c), m = Object(f.a)(n), h = Object(y.a)();
				return !l || h ? null : m ? s.a.createElement(p, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : s.a.createElement(j, {
					className: Object(i.a)({
						[_.a["m-comment"]]: r
					}, t)
				}, s.a.createElement(b.a, {
					href: l.url,
					isSponsored: u,
					postId: n.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...n,
					isSponsored: u
				}), s.a.createElement(x, {
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
				s = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(s);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
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
				s = n.n(r),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
			class p extends s.a.Component {
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
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: h,
							...v
						} = this.props, _ = this.state.isHovered, g = Object(c.a)({
							type: t.type,
							key: _ ? "unsubscribe" : "subscribed"
						}), O = v.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return s.a.createElement(a.t, u({
							className: e,
							priority: f || O,
							rplStyle: h,
							text: g,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, v))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: h,
							...v
						} = this.props, _ = Object(c.a)({
							type: t.type,
							key: "subscribe"
						}), g = v.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return s.a.createElement(a.t, u({
							className: e,
							priority: f || g,
							size: a.d.XSP,
							rplStyle: h,
							text: _,
							onClick: this.onClick
						}, v, {
							id: `subscribe-button-${o}`,
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
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(o.c)(p))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? r.fbt._("Approved by {username} at {time}", [r.fbt._param("username", e.approvedBy), r.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : r.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
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
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed as spam by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : r.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.K.NO_STRIPE_SUBSCRIPTION:
							case r.K.USER_DOESNT_EXIST:
							case r.K.USER_REQUIRED_ERROR:
							case r.K.VALIDATION_ERROR:
								return e;
							case r.K.NO_USER:
							case r.K.NO_TEXT:
							case r.K.NO_URL:
								return r.K.VALIDATION_ERROR;
							case r.K.CREDIT_CARD_FAILURE:
							case r.K.CREDIT_CARD_FAILURE_GENERIC:
								return r.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.K.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
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
				return h
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(a.p)(e),
					subreddit: Object(a.mb)(e),
					profile: Object(a.U)(e),
					post: Object(a.L)(e, t),
					comment: Object(a.i)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const n = Object(i.c)(e, {
							commentId: t
						}),
						s = n && Object(r.a)(n.postId);
					if (!n || !s) return null;
					const c = {
							commentId: t,
							commentsPageKey: s
						},
						d = t && s && Object(o.j)(e, c) || 0;
					return Object(a.A)(e, void 0, {
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
					post: Object(a.L)(n, t),
					source: c.b.ChatView,
					subreddit: Object(a.mb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: s.c.CLICK,
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
					action: s.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.SUBMIT,
					noun: "reply",
					post: Object(a.L)(t, e),
					comment: Object(a.i)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(a.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.CLICK,
					noun: "comment",
					actionInfo: Object(a.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.VIEW,
					noun: "warning",
					post: Object(a.L)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				_ = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.CLOSE,
					noun: "warning",
					post: Object(a.L)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				g = e => t => ({
					...d(t, e),
					source: "global",
					action: s.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				O = (e, t, n) => r => ({
					...d(r, t),
					source: c.b.Chat,
					action: s.c.CLICK,
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
					source: c.b.Chat,
					action: s.c.DELETE,
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
				x = () => e => {
					var t;
					return {
						...Object(a.p)(e),
						subreddit: Object(a.mb)(e),
						profile: Object(a.U)(e),
						actionInfo: {
							...Object(a.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: s.c.VIEW,
						noun: "hint"
					}
				},
				j = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: s.c.CLICK,
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
						action: s.c.SUBMIT,
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
				return h
			})), n.d(t, "i", (function() {
				return v
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...s.p(e),
					screen: s.db(e),
					subreddit: s.mb(e),
					userSubreddit: s.vb(e)
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => s => ({
					...a(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: s.V(r, t),
					subreddit: s.nb(r, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				v = (e, t) => f(e, t, "enable_in_community")
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
				return h
			})), n.d(t, "clickConfirmHideAward", (function() {
				return v
			})), n.d(t, "clickCancelHideAward", (function() {
				return _
			})), n.d(t, "clickAwardReportFlow", (function() {
				return O
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return k
			})), n.d(t, "clickReportAward", (function() {
				return E
			})), n.d(t, "clickCancelReportAward", (function() {
				return I
			})), n.d(t, "clickConfirmReportAward", (function() {
				return C
			})), n.d(t, "viewGildModalEvent", (function() {
				return P
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return w
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return S
			})), n.d(t, "clickMessageInputEvent", (function() {
				return T
			})), n.d(t, "typeMessageInputEvent", (function() {
				return N
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return M
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return L
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return A
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
				return H
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === s.e.Global && e.awardSubType === s.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === s.e.Global && e.awardSubType === s.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === s.e.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === s.e.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === s.e.Global && e.awardSubType === s.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const s = t && Object(o.g)(e, {
						commentId: t
					});
					return {
						...i.p(e),
						actionInfo: i.d(e, {
							reason: s ? "live_post" : void 0,
							...n
						}),
						comment: t ? i.i({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
						post: t ? i.L(e, t) : void 0,
						screen: i.db(e),
						subreddit: i.mb(e),
						userSubreddit: i.vb(e),
						listing: t ? Object(r.k)(e, t) : void 0
					}
				},
				b = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: i.s(n)
				}),
				f = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: i.s(t)
				}),
				h = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				_ = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				g = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				O = g("award_hovercard_report"),
				y = g("cancel_award_hovercard_report"),
				x = g("flag_award"),
				j = g("cancel_flag_award"),
				k = g("confirm_flag_award"),
				E = g("report_community_award"),
				I = g("cancel_report_community_award"),
				C = g("confirm_report_community_award"),
				P = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				w = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				S = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				M = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				L = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				A = (e, t) => n => ({
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
						numberCoins: s,
						thingId: o
					} = e;
					return e => ({
						...p(e, o),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(o) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: s,
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
				H = () => e => ({
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
				return h
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
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
					} = t, f = !!n, h = o.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, _ = f ? v : a.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, g = n ? Object(p.a)(n) ? "comment" : "post" : void 0, O = l || a.u(e), y = [...Object(i.d)(e), ...Object(i.e)(e)].filter(e => e.mobileId === O)[0], x = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(y, f)), j = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0, k = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0, E = y ? y.baselinePennies !== y.pennies ? `${j}_percent_price` : y.baselineCoins !== y.coins ? `${k}_percent_bonus` : void 0 : void 0, I = _ === d.GoldPurchaseType.Premium ? r.Eb : y ? y.pennies : void 0;
					return {
						...c.p(e),
						comment: n ? c.i({
							state: e,
							commentId: n
						}) : null,
						correlationId: a.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.L(e, n) : null,
						screen: c.db(e),
						subreddit: n ? c.mb(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: _,
							gildedContent: f,
							contentType: g,
							numberCoins: y ? y.coins : void 0,
							offerContext: x,
							offerType: E
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
						}
					}
				},
				h = (e, t, n) => r => ({
					...f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				O = e => t => ({
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
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, n) => r => {
					const s = f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
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
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.db)(e),
					profile: Object(s.U)(e),
					subreddit: Object(s.mb)(e),
					userSubreddit: Object(s.vb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(s.k)(n, t)
					},
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.CLICK,
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				b = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					post: Object(s.L)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					...o(n)
				}),
				h = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.L)(n, t),
					subreddit: Object(s.pb)(n, t)
				}),
				v = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.i)({
						state: n,
						commentId: t
					}),
					post: Object(s.L)(n, t),
					subreddit: Object(s.pb)(n, t)
				}),
				_ = (e, t, n, r) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.L)(o, n),
					subreddit: Object(s.pb)(o, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(s.i)({
							state: o,
							commentId: n
						})
					}
				}),
				g = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				O = (e, t, n) => r => ({
					...o(r),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(s.i)({
						state: r,
						commentId: e
					}) || void 0,
					post: Object(s.L)(r, e)
				}),
				y = (e, t) => n => ({
					...o(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(s.i)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(s.L)(n, e),
					modAction: {
						targetUserId: t
					}
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
				return h
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "m", (function() {
				return T
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
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
						...o.p(t)
					};
					return Object(s.a)(t) && Object.assign(n, c), n
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
						...o.p(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				u = e => ({
					...o.p(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.kb(e)
				}),
				m = e => ({
					...o.p(e, {
						isGVSEvent: !0
					}),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.kb(e)
				}),
				p = e => ({
					...o.p(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.kb(e)
				}),
				b = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.p(e),
					...c
				}),
				f = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.p(e),
					...c
				}),
				h = e => t => ({
					...o.p(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				v = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.p(n),
					snoovatar: o.kb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				_ = v("view"),
				g = v("click"),
				O = v("dismiss"),
				y = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...o.p(r),
					snoovatar: o.kb(r)
				}),
				x = y("anniversary_achievement", "view", "anniversary_achievement"),
				j = y("anniversary_achievement", "click", "close"),
				k = y("anniversary_achievement", "click", "equip"),
				E = e => () => t => ({
					...o.p(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				I = E("view"),
				C = E("click"),
				P = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...o.p(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.kb(r)
				}),
				w = e => P("onboarding", "click", e),
				S = () => P("avatar", "view", "onboarding"),
				T = e => {
					let {
						user: t,
						pageType: n,
						userHasNft: r
					} = e;
					return e => {
						const s = Object(a.a)(t.accountIcon),
							i = (null == t ? void 0 : t.id) && (null == t ? void 0 : t.username);
						return {
							source: "profile",
							action: "screen",
							noun: "load",
							...o.p(e),
							actionInfo: {
								pageType: n
							},
							profile: i ? {
								id: t.id,
								name: t.username
							} : null,
							snoovatar: {
								snoovatarActive: s,
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
				s = n("./node_modules/react/index.js"),
				o = n("./src/lib/hooks/useTooltip.ts");
			const i = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react-redux/es/index.js");
			const s = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				o = ["t5_q0gj4", "t5_2rjli"],
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
						c = s.includes(t),
						d = o.includes(n);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.a)(t)
			})
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/removedPosts.ts");
			const o = () => Object(r.e)(e => Object(s.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
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
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
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
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
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
						s = !!n && new Date(n) < new Date;
					return !!r && !s
				},
				h = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: r
					} = e, [s, o] = r, i = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(i[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: s,
							title: i[b.BannerTitle],
							body: i[b.BannerBody]
						},
						imageUrl: o,
						title: i[b.Title],
						cta: i[b.Cta],
						deeplink: i[b.Deeplink]
					}
				},
				v = e => {
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

			function _(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: r,
						tags: s
					} = e;
					if (!(null == s ? void 0 : s.includes(p))) {
						if ((null == s ? void 0 : s.includes(m)) && r && r.length >= 2 && (t.pushcard = h(e)), null == s ? void 0 : s.includes(l)) {
							const {
								text: n,
								id: o
							} = e, i = r || null, a = v(s);
							t.quickCreateV1 = {
								...a,
								id: o,
								text: n,
								active: f(e) && !!i,
								webAssetUrls: i
							}
						}
						if (null == s ? void 0 : s.includes(u)) {
							const o = r || null,
								i = (null === (n = s.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: f(e) && !!o,
								assetUrls: o,
								experimentRequired: i
							}
						}
					}
				}), t
			}
			var g = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				O = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/constants/modals.ts");
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case O.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? {
							...d,
							..._(s)
						} : d;
					case g.b:
					case g.c:
					case g.f:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case y.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === x.a.SNOOVATAR_MODAL ? {
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
			t.a = Object(o.c)({
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
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const s = e.authorFlair.models[r];
					if (!s) return null;
					const o = n.author;
					return o && s[o] || null
				},
				s = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					return s ? s[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const o = e => {
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
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, r, s;
					const i = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (s = null == i ? void 0 : i.assetUrls) || void 0 === s ? void 0 : s.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(o.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
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
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
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
				return h
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
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
						postOrComment: o
					} = e;
					return t.awardSubType === s.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: s
						} = e, o = t;
						if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[t.id] && t.tiers) {
							const e = s.awardCountsById[t.id];
							o = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(o, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: o
					}) : u(t, r, n)
				},
				p = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: s
					} = t;
					const i = Object(d.d)(e),
						c = l.find(e => e >= r),
						u = s ? Object(a.F)(e, {
							postId: s
						}) || Object(o.c)(e, {
							commentId: s
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
						postOrCommentId: s
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: s
					})[n.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const s = Object(c.Db)(e, {
						userName: r
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return b(e, {
						award: s.awardedLastMonth.topAward,
						minSize: n
					})
				},
				h = e => {
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
				return s
			}));
			const r = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
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
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
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
				h = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				g = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				k = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				E = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				P = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				p = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				b = Object(s.a)(o.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(s.a)(d.m, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(s.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.164adfd93d8964e98e4a.js.map