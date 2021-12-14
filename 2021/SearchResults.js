// https://www.redditstatic.com/desktop2x/SearchResults.0c9867b10d3d77316ae8.js
// Retrieved at 12/14/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
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
					var n, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						C = !o && !l && /macintosh/i.test(t),
						f = !i && !u && !m && !p && /linux/i.test(t),
						x = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !v && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (n.msedge = e, n.version = x) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: x
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : u ? n = {
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
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? n = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, g && (n.version = g)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, g && (n.version = g)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && g && (n.version = g)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : C ? (n.mac = e, n.osname = "macOS") : y ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var j = "";
					n.windows ? j = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? j = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? j = (j = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? j = (j = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? j = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? j = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? j = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (j = s(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (n.osversion = j);
					var E = !n.windows && j.split(".")[0];
					return v || c || "ipad" == o || i && (3 == E || E >= 4 && !O) || n.silk ? n.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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

				function o(e) {
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

				function i(e, r, n) {
					var i = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (i = t(n));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var o = n.element,
								i = a(o),
								c = this._rootContainsTarget(o),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, s),
								u = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, o, i, c, l, u, m, p, b = a(s), h = d(s), C = !1; !C;) {
								var f = null,
									x = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == x.display) return;
								if (h == this.root || h == t ? (C = !0, f = r) : h != t.body && h != t.documentElement && "visible" != x.overflow && (f = a(h)), f && (n = f, o = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(n.top, o.top), c = Math.min(n.bottom, o.bottom), l = Math.max(n.left, o.left), u = Math.min(n.right, o.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								h = d(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
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
								var o = this.thresholds[n];
								if (o == s || o == r || o < s != o < r) return !0
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
					var s, r, n, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function a(e) {
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
				return n(e, (function(e, n, o) {
					s = r ? (r = !1, e) : t(s, e, n, o)
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
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = r(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
				if (void 0 !== n) return !!n;
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
					if (!1 === (n = s ? s.call(r, l, u, d) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			const r = e => {
					let t = 0,
						s = 0;
					const r = [0];
					for (const n of e) t++, s += n.length, r[t] = s;
					return r
				},
				n = e => {
					let t = 0,
						s = 0;
					const r = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) r[s] = t, s++;
						t++
					}
					return r[s] = t, r
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return C
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(r.a)(i.a),
				c = Object(r.a)(i.b),
				d = Object(r.a)(i.c),
				l = Object(r.a)(i.d),
				u = Object(r.a)(i.e),
				m = Object(r.a)(i.f),
				p = Object(r.a)(i.g),
				b = Object(r.a)(i.h),
				h = Object(r.a)(i.i),
				C = e => Object(n.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return S
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(i.g),
				C = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				x = Object(n.a)(i.c),
				g = Object(n.a)(i.f),
				v = Object(n.a)(i.j),
				O = Object(n.a)(i.i),
				y = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						o = Object(m.e)(n),
						i = Object(m.d)(n),
						d = Object(b.J)(n);
					if (o || !i) return;
					e(f());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
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
							if (j(t)) {
								if (E(t)) {
									e(x({
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
											category: o
										} = s.focusRecommendations[0],
										i = [r, n],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), p = !0
								}
							} else p = !1
						}
					} catch (g) {
						p = !1
					}
					p || e(C({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !E(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, S = () => async (e, t, s) => {
					var r, n;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.K)(i);
						return Object(o.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(g({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				m = s("./src/reddit/helpers/isArrayEqual.ts"),
				p = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts");
			const b = e => r.fbt._("reddit.com: search results - {query}", [r.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				h = e => async (t, s) => {
					const r = s(),
						n = Object(p.c)(r),
						h = Object(a.e)(o()(e.queryParams, u.u), n),
						C = {
							...h,
							type: Object(p.a)(n, h.type)
						},
						f = e.params.subredditName || e.params.multiredditName,
						{
							username: x
						} = e.params,
						g = Object(a.b)(f, x, C);
					if (Object(m.a)(C.type, [i.Zb.Subreddits, i.Zb.Users])) await t(Object(d.d)(g, C, f, x));
					else {
						const e = {
								...C,
								type: [i.Zb.Subreddits, i.Zb.Users]
							},
							s = Object(a.b)(f, x, e);
						await Promise.all([t(Object(d.d)(g, C, f, x)), n ? Promise.resolve() : t(Object(d.d)(s, e, f, x))])
					}
					let v = !1;
					const {
						type: O = []
					} = C, y = O.indexOf(i.Zb.Posts) > -1, j = O.indexOf(i.Zb.Subreddits) > -1 || O.indexOf(i.Zb.Users) > -1;
					y && r.listings.postOrder.api.error[g] && (v = !0), j && r.listings.listingOrder.api.error[g] && (v = !0), t(v ? l.m({
						title: Object(c.e)()
					}) : l.m({
						title: b(C.q)
					}))
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
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = o
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/hooks/useClickSourceData.ts"),
				u = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = s("./src/reddit/components/AuthorLink/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const t = Object(i.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					s = Object(l.a)(),
					r = Object(o.d)(),
					m = Object(o.e)(u.b),
					b = t => {
						if (m) {
							const s = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${a.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), r(Object(c.cb)(s))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", {
					className: t,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: b
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(i.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(d.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: s
					},
					onClick: b
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "a", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("SubredditPremiumBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				C = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				v = s.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "add-custom-badge-tooltip",
				j = 100,
				E = 2 * j,
				_ = 24;
			class S extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(c.a)(v.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${y}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || _;
					return n.a.createElement(r.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: v.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: v.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(C.a, {
						className: v.a.addCustom
					})), n.a.createElement(x, {
						className: v.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(f.d)(s, s, e),
							o = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(c.a)(v.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(o),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: v.a.image,
							id: o,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${s}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: v.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: o,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: o,
							text: e.title
						})))
					}))
				}
			}
			const k = [],
				w = Object(i.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: s
					}) => {
						var r;
						return (null === (r = e.users.appliedBadges[s]) || void 0 === r ? void 0 : r[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				T = Object(i.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var s;
						const r = e.user.account;
						return r && (null === (s = e.users.appliedBadges[r.id]) || void 0 === s ? void 0 : s[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				I = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function L(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...r
				} = e, o = t.map(e => s[e]).filter(Boolean);
				return n.a.createElement(S, O({
					badges: o
				}, r))
			}
			const P = Object(o.b)(w, I)(L),
				N = Object(o.b)(T, I)(L)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

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
			}) => n.a.createElement(i.b, d({
				className: Object(o.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
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
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(C),
				x = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", f.a),
				O = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ib)(e),
					userIsSuspended: h.R
				});
			t.a = Object(i.b)(O, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(b.c)(t)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: n,
				openCommunityCreation: i,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d,
				onClick: l
			}) => {
				return o.a.createElement(p.t, {
					className: e,
					disabled: d || c,
					onClick: e => {
						l && l(e), i(a)
					},
					onMouseEnter: s,
					onMouseLeave: n,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
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
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
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
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				m = s("./src/reddit/hooks/useUserContext.ts"),
				p = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = s.n(b);

			function C(e) {
				var t, s;
				const {
					currentUser: r
				} = Object(m.a)(), o = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (s = e.allBadges) && void 0 !== s ? s : {});
				return o.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: o,
					badgeSize: e.badgeSize,
					className: Object(a.a)(e.className, h.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && o.length < 2 && (null == r ? void 0 : r.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const f = [];
			t.b = Object(o.b)(() => Object(i.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: s
				}) => {
					var r;
					return (null === (r = e.users.appliedBadges[s]) || void 0 === r ? void 0 : r[t]) || f
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(d.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(d.i)()),
				onOpenUploadDialog: () => e(Object(c.j)())
			}))(C)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/selectors/economics.ts");

			function c(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? n.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? {
						...e.children.props.style || {},
						color: s.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(o.b)(() => Object(i.c)({
				badges: (e, {
					subredditId: t,
					userId: s
				}) => Object(a.q)(e, t, s)
			}))(c)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const r = s && s.eventInfo,
					a = Object(l.a)(s),
					m = r && Object(i.c)(r.eventStart, r.eventEnd);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, n.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					post: s
				}), !a && m && n.a.createElement(d.a, {
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
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => n.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => n.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(b),
				C = s("./src/lib/lessComponent.tsx");
			const f = C.a.span("PostEventFutureText", h.a),
				x = C.a.span("PostEventPastText", h.a),
				g = C.a.span("PostEventNowText", h.a),
				v = C.a.span("Container", h.a),
				O = C.a.wrapped(u, "CalendarIcon", h.a),
				y = C.a.wrapped(m, "LiveIcon", h.a),
				j = C.a.div("LoadingState", h.a);
			class E extends r.Component {
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
						eventIsLive: a,
						eventStart: c
					} = s, d = Object(o.e)(c, r);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = n.a.createElement(p.c, {
						startTime: c,
						endTime: r,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = n.a.createElement(j, {
							className: e
						})
					}
					if (a) u = n.a.createElement(g, null, n.a.createElement(y, null), l);
					else if (d === o.a.Future) u = n.a.createElement(f, null, n.a.createElement(O, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = n.a.createElement(x, null, n.a.createElement(O, null), l)
					}
					return n.a.createElement(v, {
						className: e
					}, u)
				}
			}
			t.a = E
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceUserPublicPointsDisplay").then(s.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(n.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts");
			const a = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? n.a.createElement(n.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: c,
				getComponent: () => Object(i.a)(() => s.e("AuthorHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "i", (function() {
				return w
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/lodash/isNil.js"),
				c = s.n(a),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...r
							}
						} = this;
						l.a.publish(d.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.b)(e, t),
					r = Object(C.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(o.b)(() => Object(i.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const g = (e, t) => {
				const s = Object(h.b)(e, t),
					r = Object(C.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(o.b)(() => Object(i.a)(g, e => e))(e => n.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var O = Object(o.b)(() => Object(i.c)({
					subreddit: C.R
				}))(e => n.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				y = s("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const t = Object(y.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var E = e => {
				const t = Object(y.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var _ = e => {
				const t = Object(y.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var S = Object(o.b)(() => Object(i.c)({
				subreddit: C.R
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var k = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(C.J)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var w = Object(o.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(C.R)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/components/Media/index.m.less"),
				a = s.n(i);
			const c = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = ({
					isNSFW: e,
					isSpoiler: t
				}) => o.a.createElement("div", {
					className: a.a.unblurButtonContainer
				}, o.a.createElement("button", {
					className: a.a.unblurButton
				}, c(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				C = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.X
				}));
			t.a = C(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), n.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/ads.ts"),
				x = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/constants/tracking.ts"),
				_ = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = s.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e > 2 * g.e,
				T = e => {
					const t = Object(d.a)(S.a.image, h.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && w(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(g.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.L)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(S.a.container, e.className),
						style: t
					}, e.children)
				},
				L = Object(i.b)(() => Object(c.a)(O.G, j.db, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(O.b)(e, s) : null, v.a, y.d, O.H, (e, t, s, r, n, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: r,
					pageType: n.pageType,
					post: o
				})));
			t.a = L(e => {
				const t = e.sendGoodVisitEvent ? Object(x.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(C.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, N(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink),
					onClick: e.onPostMediaClick
				}, N(e)) : N(e)
			});
			const P = (e, t) => o.a.createElement(T, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[E.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				N = ({
					onClick: e,
					...t
				}) => {
					const s = Object(g.L)(t.height, t.width),
						n = w(t.height) && s;
					return o.a.createElement(I, k({}, t, {
						className: `${s?`${E.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, P(s, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: n ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, P(s, t), t.shouldBlur && !t.isVideoThumbnail && o.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > g.j && Object(g.L)(t.height, t.width) && o.a.createElement("div", {
						className: S.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: e
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					r = e.blurSrc ? n.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return n.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, r, !e.isGalleryTileLayout && n.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), n.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends n.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return n.a.Children.only(this.props.children) || n.a.createElement("div", null)
					}
					return n.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				C = h / 2 / 1e3;
			var f = s("./src/lib/forceHttps/index.ts"),
				x = s("./src/lib/hooks/usePrevious.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function v({
				autoplay: e,
				isListing: t,
				isNotCardView: s,
				onBufferingChange: r,
				shouldLoad: n,
				shouldPause: a,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(o.useRef)(),
					p = Object(o.useRef)(),
					b = Object(x.a)(a);

				function v(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (v(!a && (e || s)), p.current && r) return m.current = function(e, t) {
						let s = !1,
							r = !1;
						const n = () => s = !0,
							o = () => r = !0;
						e.addEventListener("loadeddata", n), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(a = c);
							if (e.paused || e.seeking || !s) return void(a = c);
							const n = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + C ? i = !0 : i && c >= a && c > a + C && (i = !1), a = c, n !== i && t(i)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", n)
						}
					}(p.current, r), () => {
						m.current && m.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== a && v(!a && (e || s))
				}, [b, a, e, s]), i.a.createElement("video", g({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(f.a)(l || "")
				}))
			}
			var O = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(O);
			const j = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: r,
					metadata: o,
					started: c
				} = Object(a.e)(t => j(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: C,
					isNotCardView: f,
					showFull: x,
					shouldPause: g,
					width: O,
					isListing: E,
					className: _,
					showCentered: S,
					originalSource: k
				} = e, w = Object(a.d)();

				function T(e) {
					w(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function I() {
					return w(Object(l.z)({
						postId: p
					}))
				}
				const L = n()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && w(Object(l.s)(p))
				}, 200);

				function P(e) {
					e.persist(), L(e)
				}

				function N(e) {
					var t;
					(o || M(e), c) || (t = e.timeStamp, w(Object(l.A)(p, t)))
				}

				function R(e) {
					w(Object(l.q)(p, e.timeStamp))
				}

				function M(e) {
					! function(e) {
						w(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function F(e) {
					r || N(e), o || M(e), w(Object(l.C)(p))
				}

				function B() {
					const e = {};
					return S && (e.margin = "0 auto"), E || (e.maxHeight = `${m.e}px`), i.a.createElement(v, {
						autoplay: t,
						className: Object(d.a)(u.a, y.a.styledVideo),
						height: C,
						isListing: E,
						isNotCardView: f,
						key: p,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: R,
						onLoadedData: N,
						onLoadedMetadata: M,
						onPause: I,
						onPlaying: F,
						onTimeUpdate: P,
						shouldLoad: b,
						shouldPause: g,
						showCentered: S,
						showFull: x,
						source: h,
						style: e,
						width: O
					})
				}
				return E ? B() : i.a.createElement("div", {
					className: Object(d.a)(y.a.container, _, {
						[y.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: k,
					target: "_blank",
					rel: "noopener noreferrer"
				}, B()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
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
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => "string" == typeof e.bannedBy && e.bannedBy === r.l || !!Object(n.b)(e, n.a.AUTOMOD),
				i = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				a = e => !!e.bannedBy && !!Object(n.b)(e, n.a.HATEFUL_CONTENT),
				c = e => o(e) || i(e) || a(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(r.a)({
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			const r = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(r.a)({
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
				return m
			}));
			var r, n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(a);

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
				u = (e, t) => {
					if (t !== r.BUTTON) return e ? c.a.active : c.a.inactive
				},
				m = ({
					active: e = !0,
					children: t,
					className: s,
					disabled: r = !1,
					onClick: n,
					variant: a,
					...m
				}) => o.a.createElement("button", d({}, m, {
					className: Object(i.a)(c.a.primaryButton, l[a], u(e, a), s),
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(r, e),
					onClick: i
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
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = n.a.memo(e => {
					const t = Object(r.useRef)(null),
						s = Object(l.a)(),
						o = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(v);
			const y = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(x.a)((e, {
					post: t
				}) => Object(h.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(h.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(C.d)(e).pageType
			}));
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: r,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: h,
						style: C,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, v = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: C,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(O.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || y ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, v) : l.media && Object(b.E)(l.media) && g ? n.a.createElement(u, {
						postId: l.id
					}, v) : v
				}
			}
			t.a = y(Object(g.a)(Object(m.c)(j)))
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
				return h
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends o.a.Component {
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
						} = this.props, o = !!r;
						n(e ? Object(u.o)({
							postId: s,
							isFollowed: o
						}) : Object(u.g)({
							postId: s,
							isFollowed: o
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
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let a = i ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = r.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				iconTooltipHoverBox: "FCXb7huCxyBIXH7T23q_k",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
				crosspostIcon: "_3hh-iGjzOv78L_7t_PUHev",
				userIcon: "_1ra0Iw9wwPoS0QhWWssr-u",
				link: "eQgJJIfdY4JNXam_N622j",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				isActionFont: "_1qzCGTSJOhg8noWqRayhmN",
				outboundLink: "_3V0C4FGg6153xIBQjwsycq",
				flairContainer: "NAURX0ARMmhJ5eqxQrlQW",
				externalLink: "_3jOxDPIQ0KaOWpzvSQo-1s",
				sponsored: "_1iAifs5p5MzPoJz5YrErUW",
				text: "_2fCzxBE1dlMh4OFc7B3Dun",
				MetaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				powerupBadge: "_22mcWwgVXFmw2-GrK4ZsJd",
				powerupIcon: "_1QXVZCgv3qdc2eb_RSi7qB"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return he
			})), s.d(t, "e", (function() {
				return Ce
			})), s.d(t, "a", (function() {
				return fe
			})), s.d(t, "b", (function() {
				return ve
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/isCrosspost.ts"),
				h = s("./src/reddit/helpers/trackers/powerups.ts"),
				C = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				g = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				v = s("./src/reddit/components/AuthorLink/index.tsx"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./src/reddit/models/Audio/index.ts"),
				j = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(j);
			var _ = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e;
					if (!t) return null;
					const {
						recordingStatus: s
					} = t, r = [y.a.NotAvailable, y.a.Removed].includes(null != s ? s : y.a.NotAvailable);
					return !t.isLive && r ? null : n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, "• "), n.a.createElement("span", {
						"data-testid": "audio-meta-status",
						className: Object(i.a)(E.a.metaStatus, {
							[E.a.isLive]: t.isLive
						})
					}, t.isLive && O.fbt._("Live", null, {
						hk: "1wPVEx"
					}), !t.isLive && s === y.a.Available && O.fbt._("Recording", null, {
						hk: "1bhFSx"
					}), !t.isLive && s === y.a.Processing && O.fbt._("Processing...", null, {
						hk: "2MMuzJ"
					})))
				},
				S = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				k = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				L = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				P = s("./src/reddit/components/HumanDate/index.tsx"),
				N = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				F = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				B = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				A = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/contexts/InsideOverlay.tsx"),
				D = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				U = s("./src/lib/portal/index.tsx"),
				W = s("./src/reddit/constants/elementIds.ts"),
				V = n.a.memo((function({
					children: e
				}) {
					const [t, s] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => (s(!0), () => s(!1)), []), t ? n.a.createElement(U.a, {
						container: document.getElementById(W.d)
					}, n.a.Children.only(e)) : null
				})),
				K = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				q = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				G = s("./src/reddit/hooks/useClickSourceData.ts"),
				Z = s("./src/reddit/icons/fonts/helpers.tsx"),
				z = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				J = s.n(z);
			var X = e => n.a.createElement("i", {
					className: Object(i.a)(Object(Z.b)("admin", e.isFilled), J.a.adminIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(Z.a, null, e.desc)),
				Y = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/components/UserIcon/index.tsx")),
				Q = s("./src/reddit/constants/postLayout.ts"),
				$ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = s("./src/reddit/models/Flair/index.ts"),
				te = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				se = s("./src/reddit/models/Post/index.ts"),
				re = s("./src/reddit/models/Subreddit/index.ts"),
				ne = s("./src/reddit/selectors/authorFlair.ts"),
				oe = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				ie = s("./src/reddit/selectors/experiments/econ/index.ts"),
				ae = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ce = s("./src/reddit/selectors/gold/powerups/index.ts"),
				de = s("./src/reddit/selectors/platform.ts"),
				le = s("./src/reddit/selectors/userFlair.ts"),
				ue = s("./src/reddit/components/PostTopMeta/index.m.less"),
				me = s.n(ue);
			const {
				fbt: pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), be = {
				placement: "top"
			};
			var he;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(he || (he = {}));
			const Ce = e => Object(q.a)(Object(K.a)(e), te.a.metaText, te.b.metaText),
				fe = d.a.wrapped(D.b, "MetaSeparator", me.a),
				xe = d.a.span("text", me.a),
				ge = Object($.u)(),
				ve = e => {
					const t = Object(C.a)(be),
						s = pe._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						r = pe._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						o = !e.isDeleted && e.post.distinguishType === a.G.ADMIN;
					return n.a.createElement(v.a, {
						author: e.post.author,
						className: Object(i.a)(me.a.authorLink, {
							[me.a.isActionFont]: e.showActionFont
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isUnstyled: !0,
						style: e.style
					}, `u/${e.post.author}`, o && n.a.createElement(n.a.Fragment, null, n.a.createElement(X, {
						className: me.a.adminIcon,
						isFilled: !0,
						desc: s
					}), n.a.createElement("span", {
						className: me.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(V, null, n.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s))), e.renderContractorBadge && n.a.createElement(n.a.Fragment, null, n.a.createElement(X, {
						className: me.a.contractorIcon,
						isFilled: !0,
						desc: r
					}), n.a.createElement("span", {
						className: me.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(V, null, n.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s))), !1)
				},
				Oe = n.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: s,
						isOverlay: c,
						pageLayer: d,
						post: v,
						showSub: O = !1,
						showTimestamp: j = !0,
						subredditOrProfile: E,
						tooltipType: H
					} = e, D = Object(o.d)(), U = Object(f.a)(), W = Object(o.e)(oe.a), K = Object(o.e)(de.d), q = Object(o.e)(de.g) || ["popular", "all"].includes(K || ""), Z = Object(o.e)(ae.b), z = !(!v.isSponsored || !W || Object(p.uf)(W));
					Object(r.useEffect)(() => {
						z && D(Object(m.d)(v.author))
					}, []);
					const J = v.belongsTo.id,
						X = Object(r.useCallback)(e => Object(ne.a)(e, {
							post: v
						}), [v]),
						te = Object(o.e)(X),
						ue = Object(G.a)(),
						he = Object(r.useCallback)(e => Object(le.a)(e, {
							subredditId: J
						}), [J]),
						ge = Object(o.e)(he),
						Oe = Object(r.useCallback)(e => Object(ce.a)(e, {
							subredditId: J,
							userId: v.authorId
						}), [J, v.authorId]),
						ye = Object(o.e)(ie.y),
						je = Object(o.e)(Oe),
						Ee = Object(r.useCallback)(e => Object(le.e)(e, {
							subredditId: J
						}), [J]),
						_e = Object(o.e)(Ee),
						Se = Object(C.a)(be),
						ke = Object(C.a)(be),
						we = d && d.meta && d.meta.name === a.Mb.COMMENTS,
						Te = Object(b.a)(v),
						Ie = _e === ee.b.Left,
						Le = v.authorIsContractor && !!E && E.type === re.f.EmployeesOnly,
						Pe = !!E && je,
						Ne = !c && !we,
						Re = () => n.a.createElement(fe, {
							className: e.metaSeparatorClassName
						}, "•"),
						Me = Object(o.e)(e => Object($.Q)(e, {
							pageLayer: d
						})),
						Fe = Q.e[Me] === Q.d.Card,
						Be = q && Fe || !!we,
						Ae = z && (q || !!we),
						He = n.a.createElement(n.a.Fragment, null, te && Ie && n.a.createElement("div", {
							className: me.a.flairContainer
						}, n.a.createElement(w.b, {
							disabled: !ge,
							flair: te,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ne
						})), Object(se.o)(v.author) ? n.a.createElement(ve, {
							post: v,
							isDeleted: !0,
							renderContractorBadge: Le,
							showActionFont: Ae,
							style: z ? {} : {
								color: Ce(e)
							}
						}) : n.a.createElement(n.a.Fragment, null, n.a.createElement(S.b, {
							className: me.a.badge,
							subredditId: J,
							uniqueIdentifier: `${v.id}-${c}`,
							userId: v.authorId
						}), n.a.createElement(I.b, {
							postOrComment: v,
							tooltipType: H
						}, n.a.createElement(k.b, {
							ignore: !!v.distinguishType && v.distinguishType !== a.G.NONE,
							subredditId: J,
							userId: v.authorId
						}, n.a.createElement(ve, {
							post: v,
							forceOpenInNewTab: s,
							renderContractorBadge: Le,
							style: z ? {} : {
								color: Ce(e)
							},
							showActionFont: Ae
						}))), Pe && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
							className: me.a.powerupBadge,
							onMouseEnter: ke.show,
							onMouseLeave: ke.hide,
							onClick: () => {
								U(Object(h.J)(H ? "post" : "postlist")), D(Object(l.g)("post_top_supporter_badge"))
							},
							ref: ke.target.ref
						}, n.a.createElement(g.a, {
							className: me.a.powerupIcon
						})), n.a.createElement(V, null, n.a.createElement(N.a, {
							arrowProps: ke.arrowProps,
							popperProps: ke.popperProps,
							visible: ke.visible
						}, pe._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), te && !Ie && n.a.createElement("div", {
							className: me.a.flairContainer
						}, n.a.createElement(w.b, {
							disabled: !ge,
							flair: te,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ne
						})), v.belongsTo.type === A.a.SUBREDDIT && !Object(se.o)(v.author) && n.a.createElement(T.a, {
							className: me.a.publicWallet,
							contentId: v.id,
							metaSeparator: n.a.createElement(Re, null),
							subredditId: J,
							userId: v.authorId,
							username: v.author
						})),
						De = pe._("{=Posted by}{author}", [pe._param("=Posted by", n.a.createElement(xe, {
							style: {
								color: Ce(e)
							}
						}, pe._("Posted by", null, {
							hk: "274iff"
						}))), pe._param("author", He)], {
							hk: "1abNaj"
						}),
						Ue = n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
							className: me.a.crosspostIcon
						}), pe._("{=Crossposted by}{author}", [pe._param("=Crossposted by", n.a.createElement(xe, {
							style: {
								color: Ce(e)
							}
						}, pe._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), pe._param("author", He)], {
							hk: "3BfJwk"
						})),
						We = () => Te || z ? Te ? Ue : He : De;
					return n.a.createElement("div", {
						className: Object(i.a)(me.a.container, t)
					}, O && E && n.a.createElement(L.a, {
						postId: v.id,
						subredditName: E.name,
						tooltipType: H
					}, n.a.createElement(B.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: E.url,
							state: ue
						}
					}, E.displayText)), E && E.isQuarantined && n.a.createElement(M.a, null), O && !Te && n.a.createElement(Re, null), z ? n.a.createElement(n.a.Fragment, null, (null == E ? void 0 : E.icon) && Be && n.a.createElement(Y.a, {
						iconUrl: E.icon.url,
						isNSFW: E.isNSFW,
						userName: E.name,
						className: me.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), We(), v.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(Re, null), n.a.createElement(F.a, {
						adHeaderVariant: W,
						greyTextColor: Ce(e)
					}))) : n.a.createElement(n.a.Fragment, null, v.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(F.a, null), n.a.createElement(Re, null)), We()), n.a.createElement(R.e, null), j && !z && n.a.createElement(n.a.Fragment, null, n.a.createElement("a", {
						className: me.a.externalLink,
						"data-click-id": "timestamp",
						href: v.permalink,
						onMouseEnter: Se.show,
						onMouseLeave: Se.hide,
						ref: Se.target.ref,
						style: {
							color: Ce(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer",
						onClick: e => {
							Z && (e.preventDefault(), D(Object(u.ab)(v.permalink, v.id)))
						}
					}, n.a.createElement(P.d, {
						seconds: v.created / a.Rb
					})), n.a.createElement(V, null, n.a.createElement(N.a, {
						arrowProps: Se.arrowProps,
						popperProps: Se.popperProps,
						visible: Se.visible
					}, n.a.createElement(P.b, {
						seconds: v.created / a.Rb
					})))), Object(y.b)(v) && ye && n.a.createElement(_, {
						post: v
					}))
				}));
			t.d = ge(Object(H.b)(Object(c.a)(Oe)))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const o = Object(r.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = ({
					children: e
				}) => {
					const [t, s] = Object(r.useState)(0), [i, a] = Object(r.useState)(!1), [c, d] = Object(r.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: i,
						setIsLive: a,
						totalTime: c,
						setTotalTime: d
					};
					return n.a.createElement(o.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				b = ["center", "bottom"],
				h = a.a.div("Container", m.a),
				C = Object(i.a)(c.b),
				f = Object(d.u)({
					isProfileListingPage: d.H
				});
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return o.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, o.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), r.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(C, {
						text: r.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: b
					}))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, r, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									n && r(s, n), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(r.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(r.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				C = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				g = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => o.a.createElement(x, p({}, s, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				v = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(g, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(C, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = O
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "q", (function() {
				return T
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "w", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				C = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				x = c.a.ol("Ol", a.a),
				g = c.a.strong("B", a.a),
				v = c.a.em("I", a.a),
				O = c.a.span("U", a.a),
				y = e => n.a.createElement("del", e),
				j = c.a.sub("Sub", a.a),
				E = c.a.sup("Sup", a.a),
				_ = c.a.table("Table", a.a),
				S = c.a.tr("Tr", a.a),
				k = c.a.td("Tdl", a.a),
				w = c.a.td("Tdc", a.a),
				T = c.a.td("Tdr", a.a),
				I = c.a.th("Thl", a.a),
				L = c.a.th("Thc", a.a),
				P = (c.a.th("Thr", a.a), c.a.wrapped(e => n.a.createElement(o.b, e), "A", a.a)),
				N = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return S
			}));
			var r = s("./node_modules/lodash/findLastIndex.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/BlurredContent.tsx"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				C = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
				x = s.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = s("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				O = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => i.a.createElement(v, g({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				y = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				j = e => n()(e, y),
				E = e => e.findIndex(y),
				_ = e => {
					const {
						altText: t,
						className: s,
						content: r,
						isListing: n,
						isNSFW: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: f,
						useExplicitTextColor: g,
						shouldBlur: y
					} = e, _ = r.document, S = [], k = e.mediaMetadata || null, w = E(_), T = j(_);
					if (y && !n) return i.a.createElement(v, {
						className: Object(a.a)(u.j, s)
					}, i.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!o, !!c))));
					if (-1 !== w)
						for (let i = w; i <= T; i++) {
							const e = _[i];
							switch (e.e) {
								case b.k:
									S.push(C.c(e, f, i));
									break;
								case b.l:
									S.push(C.d(i));
									break;
								case b.b:
									S.push(C.a(e, k, f, i));
									break;
								case b.c:
									S.push(C.b(e, i));
									break;
								case b.p:
									S.push(C.f(e, k, f, i));
									break;
								case b.z:
									S.push(C.h(e, k, f, i));
									break;
								case b.u:
									S.push(C.g(e, k, f, i));
									break;
								case b.h:
									S.push(Object(h.a)(e, i));
									break;
								case b.m:
								case b.a:
								case b.D:
									S.push(...Object(h.b)(e, i, k, p, m, t))
							}
						}
					return g ? i.a.createElement(v, {
						className: Object(a.a)(u.j, s)
					}, S) : i.a.createElement(O, {
						className: Object(a.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, S)
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return _(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return w
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				C = s("./src/reddit/components/RichTextJson/media.m.less"),
				f = s.n(C),
				x = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				O = x.a.wrapped(h.a, "A", f.a),
				y = x.a.wrapped(l.a, "ImageBox", f.a),
				j = x.a.wrapped(e => o.a.createElement("p", e), "Caption", f.a),
				E = x.a.div("Placeholder", f.a),
				_ = x.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const n = t === b.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(E, g({
						className: e,
						style: {
							"--placeholder-content-text": `'${n}'`
						}
					}, s))
				}, "Placeholder", f.a),
				S = ({
					c: e,
					x: t,
					y: s
				}, r) => o.a.createElement("div", {
					className: f.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: r,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, s) => {
					const r = e.c;
					let n = "";
					return s && (s.e === b.s ? n = s.s.u : s.e === b.r ? n = s.s.gif : s.e === b.t && (n = (e => {
						const t = v.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), n ? o.a.createElement(O, {
						href: n,
						key: t,
						title: r
					}, r || n) : null
				},
				w = (e, t, s, r, n, a) => {
					const d = b.E(s, e.id);
					if (r) return [k(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, r, n) => o.a.createElement("div", {
						className: Object(i.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: r
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(y, {
						altText: n,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, a)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, r, n) => {
						if (Object(p.g)(e)) {
							const a = t || Object(p.f)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: n
								})
							}, o.a.createElement(O, {
								href: a,
								key: r,
								target: "_blank"
							}, s.mp4 ? o.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: a
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: r,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, o.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: r,
						isGif: n
					}, a, d, l) => o.a.createElement("div", {
						className: Object(i.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: d
						})
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: n,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: n
					}))))(d, t, !!e.c, n)) : l.push(((e, t) => o.a.createElement(_, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "h", (function() {
				return A
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return U
			}));
			var r = s("./src/lib/unicodeUtils/index.ts"),
				n = s("./node_modules/lodash/reduce.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var C = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = s.n(f);
			const g = 1e3,
				v = 1e3;
			var O;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(O || (O = {}));
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = O.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = O.Inside, setTimeout(() => {
							this.mouseLocation === O.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = O.Outside, setTimeout(() => {
							this.mouseLocation !== O.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.hb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, r, n;
					t.e === p.s ? (s = t.s.x, r = t.s.y, n = t.s.u) : t.e === p.r && (s = t.s.x, r = t.s.y, n = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return n ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: n,
						width: s,
						height: r,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(C, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(u.c)(y),
				E = s("./src/reddit/components/RichTextJson/media.tsx"),
				_ = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = s("./src/reddit/components/SubredditMention/index.tsx"),
				k = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				I = s("./src/reddit/helpers/richTextJson/index.ts"),
				L = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, s) => {
					const r = e.c || [],
						n = e.l,
						o = [],
						i = r.length;
					for (let a = 0; a < i; a++) {
						const e = r[a];
						o.push(e.e === p.w ? e.t : U(e, t, a))
					}
					const d = c.x[n - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				N = e => a.a.createElement(c.e, {
					key: e
				}),
				R = (e, t, s, r) => {
					const n = e.c;
					if (!n) return;
					const o = n.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(B(n[a], t, s, a));
					return a.a.createElement(c.c, {
						key: r
					}, i)
				},
				M = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, r) => e += t.t + (s < r.length ? "\n" : ""), "")))
				},
				F = (e, t, s, r) => {
					const n = e.c,
						o = [],
						i = n.length;
					for (let l = 0; l < i; l++) {
						const e = n[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, r) => B(e, t, s, r))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: r
					}, o)
				},
				B = (e, t, s, r) => {
					switch (e.e) {
						case p.b:
							return R(e, t, s, r);
						case p.c:
							return M(e, r);
						case p.k:
							return P(e, s, r);
						case p.l:
							return N(r);
						case p.p:
							return F(e, t, s, r);
						case p.u:
							return H(e, t, s, r);
						case p.z:
							return A(e, t, s, r)
					}
				},
				A = (e, t, s, r) => {
					const n = e.c,
						o = e.h,
						i = n.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: r,
								D: n
							} = q(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(r, {
							key: c
						}, D(i, t, s))), m[c] = n
					}
					for (let p = 0; p < i; p++) {
						const e = n[p],
							r = e.length,
							o = [];
						for (let n = 0; n < r; n++) {
							const r = m[n],
								{
									c: i = []
								} = e[n];
							o.push(a.a.createElement(r, {
								key: n
							}, D(i, t, s)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				H = (e, t, s, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const n = e.c[0];
					return n.e !== p.m && n.e !== p.a || !Object(I.g)(n.id) ? a.a.createElement(c.j, {
						key: r
					}, D(e.c, t, s)) : Object(E.b)(n, r, t)
				},
				D = (e, t, s) => {
					const r = [],
						n = e.length;
					for (let o = 0; o < n; o++) {
						const n = e[o];
						if (n.e === p.A) r.push(W(n, o));
						else if (n.e === p.x) r.push(a.a.createElement(_.a, {
							key: o
						}, D(n.c, t, s)));
						else if (n.e === p.n) r.push(a.a.createElement("br", {
							key: o
						}));
						else if (n.e === p.m || n.e === p.a) {
							if (n.id.startsWith("emote|")) {
								const e = p.E(t, n.id);
								e && r.push(a.a.createElement(j, {
									key: o,
									node: n,
									media: e
								}))
							}
						} else r.push(U(n, s, o))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const r = W({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, r);
							let n, o;
							const i = Object(L.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(T.b)(d) && (n = d.postId), d && Object(w.b)(d) && (o = d.id, n = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: i,
								postId: n,
								commentId: o
							}, r);
						case p.y:
							return a.a.createElement(S.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				W = (e, t) => {
					const {
						f: s,
						t: n
					} = e, o = [];
					if (!s) return K(0, n, t);
					const i = Object(r.a)(n);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, r] = s[a], d = t + r, l = i[t], u = i[d] - l;
						l > c && o.push(K(0, n.substr(c, l - c), `between${a}`)), o.push(K(e, n.substr(l, u), a)), c = l + u
					}
					return c < n.length && o.push(K(0, n.substr(c), `remaining${a}`)), o
				},
				V = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				K = (e, t, s) => {
					let r = t;
					return r = o()(V, (t, r, n) => e & parseInt(n, 10) ? a.a.createElement(r, {
						key: s
					}, t) : t, r)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
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
		"./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/LRUCache/index.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/trackers/screenview.ts"),
				x = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/tracking.ts"),
				v = s("./src/telemetry/index.ts"),
				O = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				E = s.n(j),
				_ = s("./src/reddit/components/SearchResultsContent/Community/redesign.tsx"),
				S = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx");
			const k = Object(c.c)({
					apiError: x.b,
					apiPending: x.c,
					loadMore: x.q,
					viewportDataLoaded: g.a
				}),
				w = e => {
					const t = Object(o.useRef)(!1);
					let s = !1,
						r = !1;
					const c = new u.a(y.d),
						x = Object(o.useRef)(),
						g = Object(o.useRef)(null),
						j = [d.Zb.Users],
						w = Object(C.eb)(),
						T = Object(h.b)(),
						I = Object(a.d)(),
						{
							identifiers: L,
							listingKey: P,
							searchOptions: N,
							sidebar: R
						} = e,
						{
							apiError: M,
							apiPending: F,
							loadMore: B,
							viewportDataLoaded: A
						} = Object(a.e)(t => k(t, e)),
						H = R ? y.e : L.length,
						D = R ? y.e : y.c,
						U = () => {
							if (!G()) return;
							const e = v.c.end(P);
							T(Object(f.u)(P, N, O.TimerType.InApp, e, w))
						},
						W = () => {
							const e = x.current && Array.from(x.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(o.useEffect)(() => {
						U(), g.current && Object(v.b)(d.n.Redesign, {
							type: "mount",
							component: "authorSearchResults",
							duration: v.c.end(g.current)
						})
					}, []), Object(o.useEffect)(() => {
						if (U(), g.current && v.c.has(g.current)) {
							const e = v.c.end(g.current);
							if (e < 10) return;
							Object(v.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "authorSearchResults"
							})
						}
					});
					const V = Object(l.a)(P),
						K = Object(l.a)(L.length);
					Object(o.useEffect)(() => {
						g.current && v.c.cancel(g.current), L.length && (g.current = v.c.start()), (P !== V || !W() && L.length !== K) && (t.current = !1)
					}, [g, P, L.length, V, K, t]), Object(o.useEffect)(() => () => {
						g.current && v.c.cancel(g.current), x.current = void 0, t.current = !1
					});
					const q = () => {
							t.current = !0, U()
						},
						G = () => {
							const e = W();
							return v.c.has(P) && (M || !r && (s || t && (e || A)))
						},
						Z = e => {
							x.current = e instanceof Element ? e : void 0
						},
						z = () => {
							const e = L.slice(0, H).map((e, t) => ((e, t) => {
								const s = {
										...N,
										id: e.id,
										eventType: e.type
									},
									r = `author-search-${t}-${P}`,
									n = Object(b.b)(e, P, T, s);
								let o;
								if (void 0 === (o = c.get(r))) {
									const s = `author-search-item-[id:${e.id}]`,
										r = () => i.a.createElement(_.a, {
											className: E.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: s,
											listingKey: P,
											searchOptions: N,
											sidebar: R
										});
									o = {
										estHeight: y.b,
										trackOnEnteredViewport: n,
										id: e.id,
										render: r
									}
								}
								return c.set(r, o), o
							})(e, t));
							return i.a.createElement(p.b, {
								key: P,
								innerRef: Z,
								loadMoreToken: B && B.token ? B.token : void 0,
								onLastVisibleChildRendered: q,
								onLoadMore: () => {
									R || I(Object(m.o)(j))
								}
							}, e)
						};
					return (() => L.length > 0)() ? (s = !1, r = !1, z()) : (() => Boolean(M) || !1 === F)() ? (s = !0, r = !1, z()) : (s = !1, r = !0, (() => {
						const e = !M;
						return i.a.createElement("div", {
							"data-testid": "authors-list-placeholder"
						}, n()(D, t => i.a.createElement(S.a, {
							className: E.a.communityPlaceholder,
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
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_12I4LEbhoIMSoIIXC_OHwT"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			}));
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/trackers/screenview.ts"),
				x = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				g = s("./src/reddit/selectors/searchResults.ts"),
				v = s("./src/reddit/selectors/tracking.ts"),
				O = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				j = s("./src/reddit/components/SearchResultsContent/Community/redesign.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx"),
				_ = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				S = s.n(_);
			const k = 32,
				w = 250,
				T = 10,
				I = 5,
				L = Object(c.c)({
					apiError: (e, {
						listingKey: t
					}) => Object(x.c)(e) ? Object(g.e)(e, {
						listingKey: t
					}) : Object(g.o)(e, {
						listingKey: t
					}),
					apiPending: (e, {
						listingKey: t
					}) => Object(x.c)(e) ? Object(g.f)(e, {
						listingKey: t
					}) : Object(g.p)(e, {
						listingKey: t
					}),
					isSerpRedesignM2: x.c,
					loadMore: (e, {
						listingKey: t
					}) => Object(x.c)(e) ? Object(g.r)(e, {
						listingKey: t
					}) : Object(g.s)(e, {
						listingKey: t
					}),
					viewportDataLoaded: v.a
				}),
				P = e => {
					const t = Object(o.useRef)(!1);
					let s = !1,
						r = !1;
					const c = new l.a(w),
						x = Object(o.useRef)(),
						g = Object(o.useRef)(null),
						v = Object(C.eb)(),
						_ = Object(h.b)(),
						P = Object(a.d)(),
						{
							identifiers: N,
							listingKey: R,
							searchOptions: M,
							sidebar: F
						} = e,
						{
							apiError: B,
							apiPending: A,
							isSerpRedesignM2: H,
							loadMore: D,
							viewportDataLoaded: U
						} = Object(a.e)(t => L(t, e)),
						W = {
							identifierCount: F ? I : N.length,
							placeholderCount: F ? I : T,
							moreResultsTypes: H ? [d.Zb.Subreddits] : [d.Zb.Subreddits, d.Zb.Users]
						},
						V = () => {
							if (!z()) return;
							const e = O.c.end(R);
							_(Object(f.u)(R, M, y.TimerType.InApp, e, v))
						},
						K = () => {
							const e = x.current && Array.from(x.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(o.useEffect)(() => {
						V(), g.current && Object(O.b)(d.n.Redesign, {
							type: "mount",
							component: "communitySearchResults",
							duration: O.c.end(g.current)
						})
					}, []), Object(o.useEffect)(() => {
						if (V(), g.current && O.c.has(g.current)) {
							const e = O.c.end(g.current);
							if (e < 10) return;
							Object(O.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "communitySearchResults"
							})
						}
					});
					const q = Object(u.a)(R),
						G = Object(u.a)(N.length);
					Object(o.useEffect)(() => {
						g.current && O.c.cancel(g.current), N.length && (g.current = O.c.start()), (R !== q || !K() && N.length !== G) && (t.current = !1)
					}, [g, R, N.length, q, G, t]), Object(o.useEffect)(() => () => {
						g.current && O.c.cancel(g.current), x.current = void 0, t.current = !1
					});
					const Z = () => {
							t.current = !0, V()
						},
						z = () => {
							const e = K();
							return O.c.has(R) && (B || !r && (s || t && (e || U)))
						},
						J = e => {
							x.current = e instanceof Element ? e : void 0
						},
						X = () => {
							const e = N.slice(0, W.identifierCount).map((e, t) => ((e, t) => {
								const s = {
										...M,
										id: e.id,
										eventType: e.type
									},
									r = `community-search-${t}-${R}`,
									n = Object(b.b)(e, R, _, s);
								let o;
								if (void 0 === (o = c.get(r))) {
									const s = `community-search-item-[id:${e.id}]`,
										r = () => i.a.createElement(j.a, {
											className: S.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: s,
											listingKey: R,
											searchOptions: M,
											sidebar: F
										});
									o = {
										estHeight: k,
										trackOnEnteredViewport: n,
										id: e.id,
										render: r
									}
								}
								return c.set(r, o), o
							})(e, t));
							return i.a.createElement(p.b, {
								key: R,
								innerRef: J,
								loadMoreToken: D && D.token ? D.token : void 0,
								onLastVisibleChildRendered: Z,
								onLoadMore: () => {
									F || P(Object(m.o)(W.moreResultsTypes))
								}
							}, e)
						};
					return (() => N.length > 0)() ? (s = !1, r = !1, X()) : (() => Boolean(B) || !1 === A)() ? (s = !0, r = !1, X()) : (s = !1, r = !0, (() => {
						const e = !B;
						return i.a.createElement("div", {
							"data-testid": "communities-list-placeholder"
						}, n()(W.placeholderCount, t => i.a.createElement(E.a, {
							className: S.a.communityPlaceholder,
							key: t,
							isLoading: e,
							sidebar: F
						})))
					})())
				}
		},
		"./src/reddit/components/SearchResultsContent/Community/redesign.m.less": function(e, t, s) {
			e.exports = {
				container: "_3K_3Lkp9Y0UOvx4jLCEO1t",
				sidebar: "_2qMwaXWIn_m8Wdxt7k-zJc",
				mFirst: "_2DUH3f7VrWC1DqRH4885YM",
				subredditIcon: "_3NNJELf9FmGhKjI7UZ8cia",
				contentContainer: "_1P9xc8Vuhfh3gnFtpZ8Re4",
				subredditInfo: "CCriDGNZMkvnfCBh2RHK4",
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
				return M
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/truncateText/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/helpers/karma.ts");
			var h = s("./src/reddit/constants/tracking.ts"),
				C = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			const x = e => t => ({
				correlationId: Object(C.c)(C.a.SearchResults),
				actionInfo: f.d(t),
				search: f.bb(t, e)
			});
			var g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/searchResults.ts"),
				S = s("./src/reddit/hooks/useClickSourceData.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				w = s("./src/reddit/models/Flair/index.ts"),
				T = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/SearchResultsContent/Community/redesign.m.less"),
				N = s.n(P);
			const R = Object(c.c)({
					isBlockingInterstitialEnabled: T.b,
					hideNSFWPref: L.C,
					subredditOrProfile: I.J,
					subredditOrProfileAboutInfo: I.F,
					userIsSubscriber: I.db
				}),
				M = e => {
					const {
						className: t,
						first: s,
						identifier: c,
						listingKey: C,
						searchOptions: f,
						sidebar: T
					} = e, I = Object(O.eb)(), L = Object(k.a)(), P = Object(S.a)(), {
						isBlockingInterstitialEnabled: M,
						hideNSFWPref: F,
						subredditOrProfile: B,
						subredditOrProfileAboutInfo: A
					} = Object(a.e)(t => R(t, e)), H = Object(a.d)(), D = Object(o.useCallback)(e => {
						B && c.type === v.a.PROFILE && M && (e.preventDefault(), H(Object(d.cb)(B.url))), L(Object(_.k)(f, I, c, C))
					}, [L, f, I, C, c, M, H, B]), U = Object(o.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), L(Object(_.k)(f, I, c, C))
					}, [L, f, I, c, C]);
					if (!B) return null;
					const W = B.displayText,
						V = A.publicDescription,
						K = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(b.a)(e),
									r = Object(m.b)(s);
								return u.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [u.fbt._plural(s, "karma count", r)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? u.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [u.fbt._plural(s.subscribers, "number of subscribers", Object(m.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(c.type, A),
						q = (({
							identifierType: e,
							subredditOrProfile: t,
							subredditOrProfileAboutInfo: s,
							onSubscribeButtonClick: r,
							subscribeEventFactory: n,
							priority: o
						}) => {
							if ("subreddit" !== e) return t.acceptFollowers ? i.a.createElement(p.a, {
								getEventFactory: n,
								identifier: {
									name: t.name,
									type: "profile"
								},
								onClick: r,
								priority: o,
								small: !0
							}) : null;
							return "number" == typeof s.subscribers ? i.a.createElement(p.a, {
								getEventFactory: n,
								identifier: {
									name: t.name,
									type: "subreddit"
								},
								onClick: r,
								priority: o,
								small: !0
							}) : null
						})({
							identifierType: c.type,
							subredditOrProfile: B,
							subredditOrProfileAboutInfo: A,
							onSubscribeButtonClick: U,
							subscribeEventFactory: e => {
								if (!e) return ((e, t) => s => ({
									source: "search",
									action: h.c.CLICK,
									noun: `result_subscribe_${e}`,
									...x(t)
								}))(c.type, f)
							},
							priority: y.c.Tertiary
						});
					return i.a.createElement(j.a, {
						"data-testid": `${c.type}-link`,
						className: Object(r.a)(N.a.container, T && N.a.sidebar, s ? N.a.mFirst : void 0, t),
						onClick: D,
						to: {
							pathname: B.url,
							state: P
						}
					}, i.a.createElement("div", {
						className: N.a.iconContainer
					}, i.a.createElement(g.b, {
						className: N.a.subredditIcon,
						shouldHideNsfwIcon: F,
						subredditOrProfile: B
					})), i.a.createElement("div", {
						className: N.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(r.a)(N.a.subredditInfo, T && N.a.sidebar)
					}, i.a.createElement("h6", {
						className: N.a.title
					}, W), B.isNSFW && i.a.createElement(l.b, {
						className: N.a.flair,
						flair: {
							type: w.f.Nsfw,
							text: "nsfw"
						}
					}), K && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: N.a.subtitle
					}, !T && i.a.createElement(E.b, null), K))), !T && i.a.createElement("p", {
						className: N.a.description
					}, Object(n.a)(V, 150, "..."))), i.a.createElement("div", {
						className: N.a.buttonContainer
					}, q))
				}
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.m.less"),
				c = s.n(a);
			const d = e => n.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, n.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), n.a.createElement("div", {
				className: c.a.contentContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, n.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), n.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && n.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(i.b)(e))
			})), n.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/redesign.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1bAIpCWdJW4VCiZ55NX4PG",
				withSidebar: "_3F2EFH9YJwtfIgIJ3OyHWX",
				header: "_2kkXJACUPg0C3rAApibsNx",
				text: "_1HdpURvGcZHFI9a88P1LMQ"
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = new r.a(250),
				c = (e, t, s, r) => {
					const n = `last-${t}`,
						o = `entered-${e.id}-${n}`;
					let i = a.get(o);
					return void 0 === i && (i = "subreddit" === e.type ? () => l(s, e.id, r) : () => d(s, e.id, r), a.set(o, i)), i
				},
				d = (e, t, s) => e(e => ({
					...Object(o.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(n.c)(n.a.SearchResults),
					actionInfo: i.d(e),
					search: i.bb(e, s),
					profile: i.R(e)
				})),
				l = (e, t, s) => e(e => ({
					...Object(o.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(n.c)(n.a.SearchResults),
					actionInfo: i.d(e),
					search: i.bb(e, s),
					subreddit: i.hb(e)
				}))
		},
		"./src/reddit/components/SearchResultsContent/redesign.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "EmAI60CZ6hqtjh7kIC2SS"
			}
		},
		"./src/reddit/components/SearchResultsContent/redesign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Dt
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/search/index.ts"),
				c = s("./node_modules/lodash/constant.js"),
				d = s.n(c),
				l = s("./node_modules/lodash/times.js"),
				u = s.n(l),
				m = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				p = s("./src/reddit/selectors/searchResults.ts"),
				b = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/redesign.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				f = s.n(C);
			const x = (e, t) => Boolean(t && t.token) && e.length > 0,
				g = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, r = Object(i.e)(e => Object(m.c)(e) ? Object(p.d)(e, {
						listingKey: t
					}) : Object(p.k)(e, {
						listingKey: t
					})), n = Object(i.e)(e => Object(p.s)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: f.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(b.a, {
						identifiers: r,
						listingKey: t,
						searchOptions: s
					}), x(r, n) && o.a.Children.toArray(u()(3, d()(o.a.createElement(h.a, {
						className: f.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var v = s("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx");
			const O = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, r = Object(i.e)(e => Object(p.a)(e, {
						listingKey: t
					})), n = Object(i.e)(e => Object(p.q)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: f.a.container,
						"data-testid": "authors-list"
					}, !s.is_multi && o.a.createElement(v.a, {
						identifiers: r,
						listingKey: t,
						searchOptions: s
					}), x(r, n) && o.a.Children.toArray(u()(3, d()(o.a.createElement(h.a, {
						className: f.a.loadMoreItem,
						isLoading: !0
					})))))
				},
				y = e => {
					return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
				};
			var j = s("./src/reddit/helpers/trackers/searchResults.ts"),
				E = s("./src/reddit/hooks/useTracking.ts");
			const _ = e => o.a.createElement("svg", {
				width: "68",
				height: "68",
				viewBox: "0 0 68 68",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.5"
			}, o.a.createElement("path", {
				opacity: "0.5",
				d: "M24.0765 62.221H23.88C18.8437 61.8013 13.8553 61.1585 9.8284 60.4201L1.83309 59.926C1.39607 59.8973 0.988164 59.6968 0.698496 59.3683C0.408829 59.0398 0.260945 58.6101 0.287153 58.1729C0.287153 58.1198 0.287153 58.0773 0.287153 58.0294C0.866215 54.3319 1.22747 50.4698 1.59403 46.3366C1.74278 44.7429 1.89153 43.1491 2.0509 41.5554C2.36434 38.3679 2.68309 35.4566 3.0284 32.6357L3.63403 27.5676C3.78809 26.2129 3.94746 24.8104 4.16528 23.3973C4.57965 20.6719 5.16403 17.7926 6.64621 15.2107C7.02845 14.5512 7.4713 13.9287 7.96903 13.3513C8.4702 12.7333 9.05486 12.188 9.70621 11.731C10.8469 10.9717 12.0672 10.3393 13.3453 9.84507L13.4356 9.80788C14.5122 9.38724 15.5518 8.87723 16.5434 8.2832C17.4179 7.68273 18.1985 6.95586 18.8596 6.12632L19.3218 5.59507C19.9725 4.78196 20.6828 4.0184 21.4468 3.3107C22.4656 2.39364 23.6358 1.66027 24.9053 1.1432C25.1841 1.02221 25.4696 0.917551 25.7606 0.829758H25.835C26.1427 0.713538 26.4567 0.614223 26.7753 0.532258C27.4035 0.375443 28.0429 0.267104 28.6878 0.208195C29.909 0.108959 31.1372 0.133878 32.3534 0.28257C33.5406 0.415061 34.7127 0.658735 35.8543 1.01038C36.4183 1.1836 36.9717 1.38937 37.5118 1.62663C38.0431 1.85507 38.5106 2.08351 38.9834 2.31726L39.3393 2.49257C40.8642 3.31976 42.4816 3.96352 44.1578 4.41038C44.3118 4.44226 44.45 4.46882 44.5934 4.49007H44.7475C45.7208 4.39665 46.6842 4.2189 47.6268 3.95882C48.1262 3.83132 48.6415 3.68788 49.1781 3.53913C49.8156 3.35851 50.4796 3.17257 51.1809 3.00788C52.6324 2.61618 54.1293 2.4179 55.6328 2.4182C56.4944 2.42917 57.3511 2.54875 58.1828 2.77413C59.0231 3.0092 59.834 3.33892 60.6 3.75695C62.1234 4.58147 63.4262 5.76036 64.3984 7.19413C65.2572 8.42103 65.9553 9.75292 66.4756 11.1573C66.5978 11.4866 66.7146 11.8054 66.8209 12.1241C66.9388 12.4728 67.0381 12.8275 67.1184 13.1866C67.2667 13.8442 67.3661 14.5119 67.4159 15.1841C67.478 15.872 67.4494 16.565 67.3309 17.2454C67.208 17.8817 66.9989 18.4984 66.7093 19.0782C66.6721 19.1473 66.6403 19.2057 66.6031 19.2641V19.3066C66.302 20.0633 65.9037 20.7777 65.4184 21.4316C64.9598 22.0295 64.4515 22.5875 63.899 23.0998L63.7184 23.2644C63.9321 23.5088 64.1207 23.774 64.2815 24.056C64.9398 25.1788 65.2348 26.4777 65.1262 27.7748C65.0637 29.0497 64.6318 30.279 63.8831 31.3129C63.1645 32.2477 62.2461 33.01 61.195 33.5441C60.2717 34.0316 59.2946 34.4095 58.2837 34.6704C57.3238 34.9128 56.3442 35.0692 55.3565 35.1379C54.7562 35.191 54.1559 35.2335 53.5715 35.2707C52.503 35.314 51.4383 35.4258 50.384 35.6054C48.8748 35.9097 47.4033 36.3783 45.9959 37.0026C45.6028 37.1726 45.215 37.3479 44.8325 37.5338C44.094 38.166 43.2387 38.8354 42.2559 39.5154C40.4692 40.7482 38.5981 41.8542 36.6565 42.8251C36.1253 43.1013 35.525 43.3829 34.9193 43.6644L34.0003 44.0948L33.0175 44.5091C32.0665 44.8704 31.0625 45.2104 29.7875 45.5716V45.6141C29.6546 45.8957 29.5165 46.1826 29.3943 46.4801C29.1393 47.0698 28.895 47.6913 28.6718 48.3341C28.208 49.6498 27.8125 50.9885 27.4872 52.3451C26.885 54.9125 26.4888 57.5239 26.3025 60.1544C26.2684 60.7191 26.018 61.2488 25.6035 61.6337C25.189 62.0185 24.6421 62.2289 24.0765 62.221ZM24.0287 60.7123C24.2062 60.7211 24.3802 60.6607 24.514 60.5438C24.6478 60.4268 24.731 60.2625 24.7459 60.0854C24.936 57.3565 25.3446 54.6473 25.9678 51.9838C26.3078 50.5732 26.721 49.1812 27.2056 47.8135C27.4393 47.1441 27.6996 46.4907 27.9653 45.8691C28.0981 45.5557 28.2415 45.2476 28.385 44.9501L28.5656 44.5888L28.7143 44.2966L29.0278 44.2063C30.4196 43.7973 31.4715 43.4519 32.449 43.0748L33.3787 42.6816L34.2659 42.2832C34.8556 42.0123 35.424 41.7519 35.9553 41.4704C37.8565 40.5281 39.6886 39.4522 41.4378 38.251C42.3127 37.6437 43.1567 36.993 43.9665 36.3013L44.0462 36.2323L44.1365 36.1898C44.5668 35.9826 45.0025 35.786 45.4487 35.5948C46.9536 34.9297 48.5265 34.4309 50.1396 34.1073C51.2605 33.9149 52.3927 33.796 53.529 33.7513C54.1028 33.7141 54.6871 33.6769 55.2768 33.6238C56.1728 33.5619 57.0616 33.4215 57.9331 33.2041C58.8295 32.9725 59.696 32.6373 60.515 32.2054C61.3636 31.771 62.1057 31.1542 62.6878 30.3991C63.2626 29.6003 63.593 28.6516 63.6387 27.6685C63.7229 26.6822 63.5022 25.6938 63.0065 24.8369C62.7721 24.449 62.4612 24.1128 62.0928 23.8488L61.2959 23.2751L62.0503 22.6535C62.3106 22.441 62.5815 22.2126 62.8259 21.9788C63.3145 21.5251 63.7641 21.031 64.17 20.5019C64.5849 19.9434 64.9243 19.3325 65.1793 18.6851L65.2909 18.4726L65.3387 18.3823C65.5693 17.9257 65.7356 17.4394 65.8328 16.9373C65.9268 16.3846 65.9483 15.822 65.8965 15.2638C65.852 14.6649 65.7632 14.07 65.6309 13.4841C65.5618 13.1788 65.4767 12.8774 65.3759 12.581C65.275 12.2729 65.1634 11.9701 65.0518 11.6619C64.575 10.3781 63.9358 9.16049 63.15 8.03882C62.3116 6.79679 61.1852 5.77607 59.8668 5.06382C59.2018 4.70203 58.4978 4.41687 57.7684 4.21382C57.058 4.02163 56.3262 3.91989 55.5903 3.91101C54.2165 3.91084 52.8486 4.08942 51.5209 4.44226C50.8356 4.61226 50.1875 4.7982 49.5659 4.97351C48.9443 5.14882 48.5034 5.27632 47.9721 5.40382C46.9457 5.68206 45.8969 5.87048 44.8378 5.96695H44.6518H44.4925H44.4181C44.2162 5.94038 44.0143 5.9032 43.8125 5.8607C42.017 5.39122 40.2849 4.70624 38.654 3.8207L38.2981 3.64538C37.8359 3.42226 37.3684 3.19913 36.8797 2.98132C36.3943 2.77611 35.8977 2.59873 35.3922 2.45007C34.3526 2.12887 33.2856 1.90479 32.2046 1.7807C31.0854 1.64317 29.9551 1.62003 28.8312 1.71163C28.2461 1.75436 27.6652 1.84317 27.094 1.97726C26.8152 2.04322 26.5403 2.12481 26.2706 2.22163L26.1856 2.2482C25.9381 2.32283 25.6951 2.41152 25.4578 2.51382C24.3365 2.96721 23.3028 3.6126 22.4031 4.42101C21.6915 5.07992 21.0292 5.79016 20.4215 6.54601L19.954 7.07726C19.1956 8.01988 18.3002 8.84359 17.2978 9.52101C16.2342 10.1616 15.1181 10.7108 13.9615 11.1626L13.8765 11.1998C12.6977 11.6532 11.5719 12.2339 10.519 12.9316C9.97908 13.3107 9.49454 13.763 9.07934 14.2757C8.65896 14.7947 8.28728 15.3513 7.96903 15.9385C6.60903 18.3079 6.06184 21.0173 5.67403 23.5991C5.47215 24.9804 5.31278 26.3723 5.14278 27.7163L4.53715 32.8057C4.19715 35.5948 3.8784 38.5219 3.56496 41.6935C3.40028 43.2873 3.25153 44.881 3.10809 46.4748C2.72028 50.6132 2.35903 54.5179 1.79059 58.2366C1.78599 58.2577 1.78586 58.2794 1.79019 58.3005C1.79452 58.3216 1.80322 58.3416 1.81573 58.3591C1.82825 58.3766 1.84429 58.3913 1.86284 58.4022C1.88138 58.4132 1.90202 58.4201 1.9234 58.4226L9.96121 58.9166H10.0515C14.0465 59.6551 19.0084 60.2873 24.0181 60.7069L24.0287 60.7123Z",
				fill: "white"
			}), o.a.createElement("path", {
				opacity: "0.5",
				d: "M60.6689 67.7829C59.3729 67.8082 58.1043 67.409 57.0564 66.646C56.5109 66.2282 56.0433 65.7174 55.6752 65.1372C55.4308 64.76 55.2183 64.3882 55.0377 64.0747L54.8836 63.7985C54.6987 63.4549 54.4874 63.1263 54.2514 62.8157C54.0498 62.5698 53.8115 62.3566 53.5448 62.1835L53.3908 62.0772C53.0295 61.8344 52.69 61.5607 52.3761 61.2591C52.2281 61.1105 52.0896 60.9525 51.9617 60.7863L51.8873 60.6907C51.7864 60.5685 51.6855 60.4304 51.5898 60.2975L51.4995 60.1754L51.4464 60.1063C51.3422 60.2021 51.2429 60.3032 51.1489 60.4091C49.9918 61.7902 49.373 63.543 49.4064 65.3444C49.3999 65.7444 49.2572 66.1302 49.0018 66.4382C48.7465 66.7461 48.3938 66.9578 48.0019 67.0383C47.6101 67.1187 47.2025 67.0632 46.8465 66.8808C46.4904 66.6984 46.2072 66.4001 46.0436 66.035C45.6842 65.2167 45.4083 64.3641 45.2202 63.4904C45.0382 62.6605 44.9315 61.8159 44.9014 60.9669C43.7456 62.332 42.7985 63.8609 42.0911 65.5038C41.9437 65.8462 41.6889 66.1312 41.3652 66.3159C41.0414 66.5006 40.6663 66.5749 40.2966 66.5275C39.9269 66.48 39.5827 66.3135 39.3161 66.0531C39.0494 65.7927 38.8748 65.4526 38.8186 65.0841C38.4296 62.5593 38.5927 59.9801 39.2967 57.5244C39.5395 56.6631 39.8559 55.8241 40.2423 55.0169C40.7135 53.3184 41.5493 51.743 42.6914 50.4004C43.0842 49.9409 43.5123 49.5129 43.9717 49.12C44.434 48.7153 44.922 48.3409 45.4326 47.9991C46.5736 47.2327 47.8287 46.6517 49.1514 46.2779C50.1547 46.0035 51.1875 45.8518 52.2273 45.8263C51.9033 45.2738 51.4884 44.7799 51.0002 44.3654C50.0261 43.5553 48.9164 42.924 47.7223 42.5007C46.1911 42.006 44.5757 41.8253 42.973 41.9694C42.598 42.0281 42.2144 41.9511 41.8911 41.7522C41.5679 41.5533 41.3262 41.2455 41.2097 40.8843C41.0931 40.5231 41.1093 40.1321 41.2553 39.7818C41.4013 39.4315 41.6675 39.1447 42.0061 38.9732C43.707 37.9656 45.59 37.3034 47.5472 37.0244C49.5043 36.7455 51.4973 36.8553 53.412 37.3475C54.4476 37.6135 55.4507 37.993 56.403 38.4791C57.3613 38.9656 58.2735 39.5382 59.1283 40.1897C60.9056 41.5404 62.4032 43.2238 63.5377 45.1463C64.3333 46.5228 64.9679 47.9863 65.4289 49.5079C65.6255 50.1772 65.8061 50.8572 66.0027 51.6329C66.1762 52.3412 66.3409 53.0336 66.4967 53.71C66.842 55.2507 67.0811 56.616 67.2405 57.8857L67.4689 59.8672C67.5598 60.5721 67.6094 61.2816 67.6177 61.9922C67.6355 62.8397 67.4876 63.6825 67.182 64.4732C66.8056 65.4086 66.1037 66.1765 65.2058 66.6354C64.8863 66.8037 64.5563 66.951 64.2177 67.0763C63.9042 67.1985 63.5748 67.31 63.2455 67.4004C62.5838 67.5937 61.9036 67.7166 61.2161 67.7669C61.0319 67.7775 60.8495 67.7829 60.6689 67.7829ZM51.8395 57.9547L52.2752 58.5816C52.4292 58.8419 52.5727 59.0597 52.7161 59.2616L52.8064 59.3891C52.8861 59.4954 52.9605 59.6069 53.0508 59.7132L53.1411 59.83C53.2312 59.9494 53.3288 60.063 53.4333 60.17C53.687 60.4106 53.9607 60.6292 54.2514 60.8235L54.4108 60.935C54.7941 61.1897 55.1363 61.5014 55.4255 61.8594C55.7111 62.23 55.9669 62.6225 56.1905 63.0335L56.3498 63.315C56.5305 63.6391 56.7164 63.9685 56.9342 64.3032C57.2083 64.7397 57.5572 65.1246 57.9648 65.44C58.8758 66.0837 59.9903 66.3727 61.0992 66.2529C61.6824 66.2094 62.2594 66.1043 62.8205 65.9394C63.1073 65.8597 63.3889 65.7641 63.6652 65.6579C63.9528 65.5524 64.2332 65.4282 64.5045 65.286C65.0732 64.9909 65.5206 64.5059 65.7689 63.9154C66.0032 63.2946 66.1151 62.6343 66.0983 61.971C66.0896 61.3207 66.0435 60.6715 65.9602 60.0266L65.7317 58.0557C65.583 56.8444 65.3492 55.5269 65.0145 54.0288C64.8622 53.3523 64.7011 52.6706 64.5311 51.9835C64.3398 51.2025 64.1645 50.5438 63.9998 49.9063C63.5735 48.4998 62.9871 47.1468 62.252 45.8741C61.2177 44.1204 59.8518 42.5848 58.2305 41.3532C57.4473 40.7563 56.6116 40.2317 55.7336 39.786C54.888 39.3516 53.9972 39.0113 53.0773 38.7713C49.6066 37.8975 45.9316 38.4181 42.8401 40.2216C42.8174 40.2313 42.7981 40.2476 42.7848 40.2685C42.7715 40.2894 42.7649 40.3138 42.7658 40.3385C42.7664 40.3529 42.77 40.3671 42.7763 40.3801C42.7826 40.3931 42.7915 40.4047 42.8025 40.4141C42.8134 40.4236 42.8262 40.4307 42.84 40.435C42.8537 40.4394 42.8683 40.4409 42.8826 40.4394C44.6987 40.2831 46.5275 40.4964 48.2589 41.0663C49.6136 41.5508 50.8725 42.2701 51.9776 43.1913C52.7127 43.7938 53.3166 44.5405 53.752 45.3854C53.906 45.7015 54.0271 46.0326 54.1133 46.3735L54.3842 47.3882L53.3217 47.3191C50.8347 47.1427 48.3607 47.8089 46.2986 49.2104C45.838 49.5178 45.3979 49.855 44.9811 50.2197C44.5786 50.5634 44.2038 50.9382 43.8601 51.3407C42.8463 52.5319 42.108 53.9323 41.698 55.4419L41.6501 55.5694C41.2842 56.3207 40.9856 57.1029 40.7576 57.9069C40.1132 60.1501 39.9628 62.5063 40.3167 64.8132C40.3208 64.851 40.3347 64.8871 40.3571 64.9178C40.3795 64.9486 40.4095 64.9729 40.4442 64.9885C40.4957 65.0098 40.5535 65.0101 40.6052 64.9892C40.6568 64.9684 40.6982 64.928 40.7205 64.8769C41.5554 62.9541 42.6944 61.1783 44.0939 59.6175C44.4605 59.2085 44.843 58.8207 45.268 58.4222L46.8139 56.9719L46.527 59.0969C46.527 59.1394 46.527 59.1819 46.527 59.2244V59.2829C46.3044 61.3763 46.6265 63.4918 47.462 65.4241C47.4807 65.4714 47.5127 65.5122 47.5543 65.5414C47.5958 65.5707 47.645 65.5872 47.6958 65.5888C47.762 65.5888 47.8255 65.5625 47.8723 65.5157C47.9192 65.4688 47.9455 65.4053 47.9455 65.3391C47.9103 63.1656 48.6654 61.0532 50.0705 59.3944C50.3928 59.0467 50.7487 58.7318 51.133 58.4541L51.8395 57.9547Z",
				fill: "white"
			})), o.a.createElement("path", {
				d: "M66.0614 15.9394C65.1674 13.0745 63.7239 10.4111 61.8114 8.09819C60.0264 5.936 57.0301 4.30506 54.3739 4.33694C51.7176 4.36881 48.3389 5.93069 45.7676 6.05288C42.7342 6.18569 39.637 4.26256 36.8214 3.046C33.8995 1.81881 29.6283 1.40444 26.7861 2.2385C21.4417 3.83225 20.8945 7.551 17.4254 9.761C14.7161 11.5035 11.5233 11.9551 9.4992 14.2288C6.0142 18.1388 5.91326 24.041 4.97295 31.3988C3.48014 43.0279 3.0392 51.5863 1.94482 58.2694L24.0608 59.7994C24.2201 50.9701 25.7236 44.6748 31.6311 41.7369",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M31.6255 41.7569C31.6574 41.826 31.243 42.0969 30.494 42.6282C29.4203 43.4202 28.4865 44.3863 27.7315 45.4863C26.5832 47.2611 25.8028 49.2482 25.4365 51.33C25.1826 52.6396 25.0052 53.9629 24.9052 55.2932C24.799 56.7116 24.7511 58.2203 24.7352 59.8141C24.7345 59.9034 24.7162 59.9917 24.6814 60.0739C24.6466 60.1562 24.5959 60.2307 24.5323 60.2934C24.4686 60.356 24.3933 60.4055 24.3105 60.4391C24.2278 60.4726 24.1392 60.4895 24.0499 60.4888H24.0021C17.7174 60.1435 10.2268 59.6972 1.8702 59.1713C1.75222 59.1638 1.63686 59.1332 1.53075 59.0811C1.42464 59.0289 1.32987 58.9564 1.25188 58.8675C1.17389 58.7787 1.11421 58.6753 1.07628 58.5633C1.03835 58.4513 1.0229 58.333 1.03083 58.215C1.03083 58.215 1.03083 58.1619 1.03083 58.1353C1.8277 53.0035 2.23145 47.436 2.81583 41.6188C3.09916 38.7111 3.42323 35.7432 3.78802 32.715L4.31927 28.1622C4.49458 26.6269 4.66458 25.0757 4.89833 23.4978C5.30739 20.8416 5.87052 18.0525 7.28895 15.5769C7.63715 14.9527 8.04265 14.3623 8.5002 13.8132C8.95968 13.2441 9.49607 12.7417 10.094 12.3203C11.2182 11.5751 12.4207 10.9551 13.6799 10.4716C14.7961 10.0322 15.873 9.49901 16.8993 8.87784C17.8359 8.23664 18.6736 7.46164 19.3855 6.57753C20.1599 5.60279 21.0013 4.68327 21.9036 3.82566C22.8578 2.96483 23.9543 2.27636 25.1443 1.79097C25.4344 1.68029 25.7306 1.58628 26.0315 1.50941C26.3256 1.40444 26.6253 1.31576 26.9293 1.24378C27.5283 1.10098 28.1375 1.00507 28.7515 0.956905C29.925 0.862861 31.1051 0.88778 32.2736 1.03128C33.405 1.15862 34.522 1.39161 35.6099 1.72722C36.1521 1.89272 36.6843 2.08962 37.2036 2.31691C37.6977 2.54003 38.1758 2.76316 38.6433 2.99159C40.508 3.89472 42.2558 4.7819 43.993 5.14847C44.828 5.33715 45.6904 5.37136 46.5377 5.2494C47.3988 5.12057 48.2519 4.9432 49.093 4.71816C50.7824 4.29847 52.424 3.79378 54.1505 3.73534C55.7567 3.73943 57.3338 4.16438 58.7246 4.96784C59.9212 5.62127 60.9916 6.48301 61.8855 7.51253C62.5955 8.37218 63.2384 9.28507 63.8086 10.2432C64.6045 11.5532 65.2462 12.9508 65.7211 14.4082C66.0346 15.4069 66.1143 15.9541 66.0558 15.97C65.9974 15.986 65.7743 15.4866 65.3439 14.5569C64.7229 13.2004 63.9871 11.8994 63.1446 10.6682C62.5431 9.78564 61.881 8.94601 61.163 8.15534C60.3072 7.25948 59.3024 6.51891 58.1933 5.96659C56.962 5.31067 55.5824 4.98315 54.1877 5.01566C52.5783 5.21055 50.9925 5.5665 49.4543 6.07815C48.5643 6.34301 47.6596 6.55587 46.7449 6.71566C45.7303 6.88416 44.6937 6.86796 43.6849 6.66784C41.6449 6.28003 39.7802 5.35566 37.9155 4.49503C37.448 4.27722 36.9858 4.06472 36.513 3.86816C36.0553 3.67683 35.5871 3.51187 35.1105 3.37409C34.1197 3.08571 33.1041 2.89008 32.0771 2.78972C31.0173 2.6823 29.9494 2.6823 28.8896 2.78972C28.3683 2.83628 27.8514 2.92331 27.3436 3.05003C27.0879 3.11341 26.836 3.19146 26.5893 3.28378C26.3341 3.36238 26.084 3.45641 25.8402 3.56534C24.851 3.97859 23.9413 4.56105 23.1521 5.28659C22.3201 6.09878 21.5445 6.96673 20.8305 7.88441C20.0036 8.92168 19.028 9.83108 17.9352 10.5832C16.819 11.2687 15.646 11.8571 14.429 12.3416C13.3109 12.7756 12.2423 13.3277 11.2415 13.9885C10.781 14.3122 10.3696 14.7005 10.0196 15.1413C9.64672 15.5917 9.31596 16.0754 9.03145 16.5863C7.83614 18.6688 7.28895 21.1975 6.90645 23.7953C6.68333 25.32 6.51333 26.8553 6.3327 28.3907C6.15208 29.926 5.96614 31.4666 5.80145 32.9594C5.41541 35.9663 5.07541 38.92 4.78145 41.8207C4.15458 47.6166 3.71895 53.1841 2.83177 58.4382L2.00302 57.3757C10.349 58.0078 17.8343 58.6028 24.103 59.1235L23.3752 59.7875C23.4336 58.1938 23.5293 56.6319 23.6886 55.1763C23.8397 53.803 24.0757 52.4404 24.3952 51.0963C24.8704 48.908 25.8048 46.8456 27.1365 45.0453C27.9933 43.9327 29.0623 43.001 30.2815 42.3041C30.6872 42.0315 31.1447 41.8452 31.6255 41.7569Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M40.6621 30.193C46.1817 29.6617 52.7267 28.4664 57.2955 25.7145C59.6277 24.3067 62.3211 22.7449 64.0689 20.402C65.2324 18.8083 66.1408 15.913 64.6002 15.2542C63.3252 14.723 60.4458 15.2224 58.8521 16.0299C54.6021 18.1867 48.8274 22.5802 42.3833 23.5099C39.573 23.9189 36.7255 23.4302 33.9205 22.9786C31.1155 22.527 27.9297 22.9095 25.1513 23.5099C21.4001 24.9733 17.0586 24.9389 17.0002 28.0414C16.9683 30.6605 21.2502 30.0708 24.1667 28.9127",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M24.1882 28.9123C24.1882 28.9708 23.9439 29.1673 23.3754 29.4436C22.5375 29.8133 21.6582 30.0808 20.7564 30.2405C20.0767 30.3537 19.3842 30.368 18.7004 30.283H18.4029L18.0948 30.198C17.8741 30.1329 17.6619 30.0419 17.4626 29.927C17.0017 29.6385 16.666 29.1871 16.5223 28.6626C16.4253 28.1332 16.4546 27.5883 16.6079 27.0723C16.7611 26.5563 17.2571 26.2749 17.6273 25.8842C18.362 25.0958 19.0701 24.9885 20.0476 24.5348C21.0606 24.0391 21.9192 23.7013 22.9994 23.3767C24.1644 23.0009 25.692 22.5998 26.9029 22.4205C29.4848 22.0805 32.0242 21.783 34.6804 22.1814C37.3367 22.5798 40.1735 22.9942 42.9201 22.4205C45.847 21.7755 48.6568 20.6824 51.2501 19.1798C52.6207 18.4361 53.9595 17.6445 55.2929 16.8689C55.9623 16.4811 56.6317 16.0933 57.3117 15.7214C57.6464 15.5301 58.0023 15.3548 58.3423 15.1901C58.7183 15.0004 59.107 14.8371 59.5057 14.7014C60.2695 14.4491 61.0559 14.2712 61.8539 14.1701C62.6821 14.0309 63.5278 14.0309 64.356 14.1701C64.6082 14.2224 64.8527 14.3063 65.0839 14.4198C65.2251 14.4938 65.3601 14.5791 65.4876 14.6748C65.6082 14.7825 65.7218 14.8979 65.8276 15.0201C66.1607 15.4639 66.3465 16.0008 66.3589 16.5555C66.3717 17.3865 66.2125 18.2113 65.8914 18.978C65.6119 19.6876 65.2404 20.3574 64.7864 20.9701C64.3555 21.5405 63.8775 22.0736 63.3573 22.5639C62.3866 23.4534 61.3335 24.2485 60.2123 24.9386C59.681 25.2733 59.1498 25.5867 58.6504 25.8842C58.1511 26.1817 57.6464 26.4739 57.1151 26.7555C56.1241 27.2826 55.096 27.7371 54.0392 28.1155C52.2463 28.7504 50.4059 29.2424 48.5354 29.587C46.8939 29.8951 45.4701 30.0705 44.2854 30.182C41.9532 30.3998 40.6623 30.3573 40.6464 30.2298C40.6304 30.1023 41.9001 29.8526 44.1685 29.4011C47.3558 28.823 50.4811 27.9443 53.5026 26.7767C54.4771 26.3799 55.4232 25.9167 56.3342 25.3901C56.7964 25.1245 57.2904 24.8111 57.7898 24.4976C58.2892 24.1842 58.7832 23.8655 59.2773 23.5308C60.293 22.8605 61.2445 22.0975 62.1195 21.2517C62.5568 20.8249 62.9584 20.363 63.3201 19.8705C63.664 19.3772 63.9425 18.8415 64.1489 18.2767C64.3599 17.7553 64.4664 17.1976 64.4623 16.6351C64.467 16.4759 64.4245 16.3187 64.3401 16.1836C64.3401 16.1836 64.3082 16.1836 64.3029 16.1517C64.2976 16.1198 64.2657 16.1517 64.2498 16.1251C64.158 16.0852 64.0617 16.0566 63.9629 16.0401C63.3558 15.9437 62.7372 15.9437 62.1301 16.0401C61.4612 16.137 60.8031 16.297 60.1645 16.5183C59.853 16.6263 59.5495 16.7559 59.2561 16.9061C58.932 17.0814 58.6079 17.2408 58.2839 17.4373C57.6357 17.7986 56.9823 18.1811 56.3182 18.5689C54.9954 19.3498 53.662 20.1626 52.217 20.9276C49.4471 22.5214 46.4418 23.6654 43.3132 24.317C41.7877 24.5977 40.2312 24.671 38.686 24.5348C37.1985 24.4233 35.7801 24.1948 34.436 23.9717C31.7214 23.5467 29.2192 23.1536 26.9029 23.3767C25.7786 23.5126 24.6666 23.7364 23.5773 24.0461C22.5643 24.309 21.5732 24.6501 20.6129 25.0661C19.7762 25.4064 19.0105 25.9001 18.3551 26.5217C18.2187 26.6567 18.0975 26.8064 17.9939 26.968L17.8451 27.1964L17.7495 27.4355C17.6329 27.7324 17.5909 28.0535 17.6273 28.3705C17.6819 28.6241 17.8274 28.8489 18.0364 29.0026C18.2902 29.1658 18.5736 29.2777 18.8704 29.332C19.4625 29.4402 20.0661 29.4706 20.6661 29.4223C21.5367 29.3475 22.4012 29.2125 23.2532 29.0186C23.8429 28.907 24.1617 28.8433 24.1882 28.9123Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.1169 6.61499C33.6922 6.80093 34.2766 9.57405 34.0535 11.2581C33.9279 12.1042 33.6207 12.9131 33.1531 13.6293C32.6854 14.3455 32.0683 14.952 31.3441 15.4072C30.6646 15.86 29.8815 16.1335 29.0678 16.2022C28.2541 16.271 27.4363 16.1327 26.6904 15.8003C24.7407 14.8016 24.1138 12.1612 25.0276 10.2222C25.9413 8.28312 28.0557 7.03468 30.2285 6.67874",
				fill: "#FFE100"
			}), o.a.createElement("path", {
				d: "M30.2234 6.70437C30.2234 6.84781 29.8568 7.02844 29.2034 7.35781C28.3079 7.78652 27.4922 8.36505 26.7915 9.06844C26.3496 9.52813 26.0013 10.0694 25.7662 10.6622C25.5259 11.303 25.4635 11.9969 25.5856 12.6703C25.6967 13.3812 26.0405 14.0351 26.5631 14.5297C27.1303 15.0238 27.8679 15.2773 28.619 15.2363C29.4212 15.1929 30.2 14.9507 30.8853 14.5315C31.5706 14.1123 32.1409 13.5294 32.5449 12.835C32.9181 12.2251 33.1554 11.542 33.2409 10.8322C33.3093 10.2247 33.2422 9.60964 33.0443 9.03125C32.8745 8.611 32.6213 8.22954 32.2998 7.90996C31.9784 7.59037 31.5955 7.33928 31.1743 7.17188L30.7334 6.98594C30.6006 6.93281 30.489 6.89562 30.3934 6.85312C30.2074 6.76812 30.1065 6.68844 30.1118 6.61938C30.1171 6.55031 30.2234 6.49188 30.4359 6.44938C30.5597 6.41572 30.6857 6.39086 30.8131 6.375C30.9689 6.375 31.146 6.375 31.3443 6.375C31.862 6.43362 32.3626 6.59625 32.8159 6.85312C33.4476 7.21722 33.9647 7.75091 34.3087 8.39375C34.707 9.1685 34.906 10.0303 34.8878 10.9013C34.8642 11.8885 34.6094 12.8565 34.144 13.7275C33.6405 14.691 32.9115 15.5185 32.019 16.1394C31.0401 16.8273 29.8836 17.2183 28.6881 17.2656C28.0543 17.2918 27.4217 17.1916 26.827 16.9709C26.2323 16.7502 25.6875 16.4133 25.2243 15.98C24.3918 15.1629 23.8712 14.0804 23.7528 12.92C23.6314 11.9062 23.8048 10.8788 24.2521 9.96094C24.6371 9.20405 25.1807 8.53905 25.8459 8.01125C26.7532 7.2829 27.8325 6.79995 28.9803 6.60875C29.7506 6.49187 30.2021 6.57156 30.2234 6.70437Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.8976 6.72683C31.1579 6.66308 31.5298 7.04558 31.7423 7.78933C31.9784 8.79378 31.8949 9.84689 31.5032 10.8015C31.2935 11.3272 31.0051 11.818 30.6479 12.2571C30.3463 12.6165 29.9873 12.9235 29.5854 13.1656C28.8948 13.5746 28.3636 13.58 28.2201 13.3515C28.0767 13.1231 28.2839 12.6928 28.5814 12.1456C28.9746 11.4865 29.3225 10.8013 29.6226 10.095C29.8963 9.36535 30.1269 8.62032 30.3132 7.86371C30.4726 7.23683 30.6161 6.79058 30.8976 6.72683Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M41.5334 9.92461C41.4803 10.1849 40.4178 10.254 38.8028 9.79711C37.8882 9.51813 36.9937 9.17735 36.1253 8.77711C35.1627 8.31315 34.1598 7.93795 33.1291 7.65617C32.1244 7.42754 31.0907 7.35409 30.0638 7.43836C29.2286 7.52398 28.4086 7.7205 27.6253 8.02273C26.2494 8.55398 25.4578 9.14898 25.2347 8.93648C25.1391 8.84617 25.2028 8.56461 25.4738 8.16086C25.8736 7.59955 26.3788 7.12139 26.9613 6.75305C27.8287 6.18636 28.8003 5.79808 29.8194 5.61086C31.0702 5.37841 32.3551 5.4019 33.5966 5.67992C34.7826 5.99304 35.9183 6.47237 36.97 7.10367L39.3713 8.46367C40.6941 9.21804 41.5972 9.63773 41.5334 9.92461Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M16.3469 27.1684C15.1834 31.5194 19.8691 30.6906 21.0909 30.3559C23.1767 29.6804 25.2069 28.8438 27.1631 27.8538C31.8594 25.6491 37.1719 27.8909 42.2559 28.2097C46.1712 28.4541 51.2234 27.5031 54.7031 25.4791C55.7226 24.8009 56.8041 24.221 57.9331 23.7472C59.0753 23.3488 60.9241 23.3169 61.9387 24.0235C63.575 25.1656 63.8087 27.9388 62.7941 29.7716C61.7794 31.6044 59.3409 32.6138 57.4497 33.0547C55.5584 33.4956 52.5303 33.4691 50.6178 33.7825C46.4581 34.4625 42.6491 36.7044 38.8825 38.7763C35.1159 40.8481 31.1369 42.8191 26.9294 42.8988C22.7219 42.9784 18.2116 40.6994 16.5966 36.3644",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M16.5962 36.3647C16.6706 36.3382 16.8566 36.6729 17.2284 37.2732C17.7658 38.1426 18.4322 38.9254 19.2047 39.5947C19.7596 40.068 20.3591 40.4861 20.995 40.8432C21.7502 41.2551 22.5483 41.5829 23.375 41.8207C24.3242 42.0909 25.3048 42.2355 26.2916 42.251C27.4037 42.2551 28.5125 42.1303 29.5959 41.8791C32.1194 41.2339 34.543 40.2473 36.7997 38.9466C39.3072 37.6079 41.9263 35.9504 44.965 34.5797C46.5396 33.8536 48.1893 33.3031 49.8844 32.9382C51.6272 32.6706 53.3827 32.4933 55.1438 32.4069C55.9739 32.3443 56.7969 32.2092 57.6034 32.0032C58.4019 31.7924 59.1737 31.4912 59.9038 31.1054C60.5918 30.7561 61.1954 30.2612 61.6728 29.655C62.1005 29.05 62.344 28.3341 62.3741 27.5938C62.4391 26.8671 62.2836 26.1376 61.9278 25.5007C61.7735 25.2369 61.5631 25.0102 61.3116 24.8366C61.035 24.6788 60.7298 24.5776 60.4138 24.5391C59.6799 24.4319 58.9313 24.4937 58.225 24.7197C57.4612 25.0208 56.7297 25.3982 56.0416 25.846C55.2653 26.3294 54.4578 26.7607 53.6244 27.1369C52.8035 27.4992 51.9607 27.8097 51.1009 28.0666C49.4514 28.5604 47.7575 28.8913 46.0434 29.0547C44.4089 29.2203 42.7612 29.2079 41.1294 29.0175C39.5356 28.8263 38.08 28.5288 36.6722 28.2738C35.3402 28.0081 33.9938 27.8201 32.64 27.7107C31.4336 27.6159 30.2199 27.7001 29.0381 27.9604C28.7672 28.04 28.5069 28.1038 28.2253 28.1888L27.4603 28.481L25.8984 29.1663C24.8784 29.6125 23.9009 30.0057 22.9606 30.335C22.0782 30.665 21.1627 30.8983 20.23 31.031C19.4208 31.1435 18.5977 31.1056 17.8022 30.9194C17.4568 30.8459 17.1313 30.6986 16.848 30.4877C16.5647 30.2769 16.3302 30.0073 16.1606 29.6975C16.0412 29.4467 15.9657 29.1771 15.9375 28.9007C15.9375 28.7785 15.9375 28.6616 15.9375 28.5554L15.9747 28.2525C16.0038 27.969 16.0755 27.6914 16.1872 27.4291C16.258 27.252 16.3094 27.167 16.3413 27.1741C16.3731 27.1741 16.3891 27.2857 16.3891 27.4716C16.3709 27.7369 16.3709 28.0032 16.3891 28.2685V28.5394C16.3891 28.6297 16.4316 28.7254 16.4528 28.821C16.4983 29.0281 16.5753 29.227 16.6812 29.4107C16.8327 29.6195 17.0263 29.7941 17.2497 29.9232C17.473 30.0522 17.721 30.1328 17.9775 30.1597C18.6848 30.2584 19.4038 30.2332 20.1025 30.0854C20.9525 29.9041 21.782 29.6371 22.5781 29.2885C23.46 28.9219 24.395 28.4916 25.3725 28.0082L26.8919 27.2485L27.7631 26.8713C28.0659 26.7597 28.3741 26.6694 28.6875 26.5685C30.0025 26.2244 31.3619 26.0811 32.7197 26.1435C34.1446 26.2123 35.5639 26.3684 36.9697 26.611C38.4041 26.8341 39.8544 27.0944 41.3366 27.2379C42.8462 27.3836 44.3672 27.3676 45.8734 27.19C47.4612 27.0144 49.0284 26.687 50.5538 26.2125C51.334 25.9712 52.0987 25.682 52.8434 25.3466C53.5987 24.9951 54.3299 24.5941 55.0322 24.146C55.8266 23.6269 56.6721 23.1908 57.5556 22.8444C58.5801 22.4962 59.6729 22.3978 60.7431 22.5575C61.3352 22.6353 61.9048 22.8342 62.4166 23.1419C62.922 23.4764 63.3466 23.9192 63.6597 24.4382C64.2328 25.4266 64.4904 26.5665 64.3981 27.7054C64.344 28.834 63.9639 29.9227 63.3038 30.8397C62.6476 31.6843 61.8132 32.3736 60.86 32.8585C59.9903 33.3172 59.0704 33.6737 58.1188 33.921C57.2003 34.1502 56.2635 34.2977 55.3191 34.3619C53.5234 34.5266 51.7916 34.5319 50.2563 34.8347C48.6967 35.1505 47.1756 35.6331 45.7194 36.2744C42.8241 37.5229 40.1891 39.106 37.5806 40.4235C35.165 41.7338 32.5747 42.6926 29.8881 43.271C28.6882 43.5036 27.4646 43.591 26.2438 43.5313C24.1971 43.4083 22.2153 42.7666 20.485 41.6666C19.8217 41.2309 19.2072 40.7251 18.6522 40.1579C17.8852 39.3815 17.2771 38.463 16.8619 37.4538C16.5962 36.7738 16.5378 36.386 16.5962 36.3647Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M15.9056 56.1432C15.9322 56.0423 16.66 56.2016 18.0306 56.2973C19.9614 56.4358 21.9006 56.1994 23.7416 55.6013V56.6054C21.675 56.106 19.2419 55.5004 16.5006 54.8098C16.3366 54.7683 16.1933 54.6685 16.0975 54.5291C16.0018 54.3896 15.9601 54.22 15.9802 54.052C16.0004 53.8841 16.0811 53.7292 16.2072 53.6164C16.3333 53.5036 16.4962 53.4406 16.6653 53.4391L24.3844 53.3807L24.2038 54.9745L16.15 53.3435C15.9098 53.3203 15.6886 53.2025 15.5352 53.0162C15.3818 52.8299 15.3086 52.5903 15.3319 52.3501C15.3551 52.1099 15.4729 51.8887 15.6592 51.7353C15.8455 51.5818 16.0851 51.5087 16.3253 51.532H24.5703L24.2516 53.4126L15.7091 50.496C15.474 50.4083 15.2803 50.2357 15.1661 50.0122C15.0519 49.7887 15.0256 49.5306 15.0922 49.2887C15.1589 49.0468 15.3137 48.8386 15.5262 48.7051C15.7387 48.5716 15.9935 48.5226 16.2403 48.5676C18.6243 49.1407 21.1091 49.1498 23.4972 48.5941C23.8691 48.5091 24.2356 48.4082 24.5969 48.2966L24.7085 50.257C21.5321 49.6143 18.5436 48.2573 15.9694 46.2885C15.7461 46.1476 15.5879 45.9238 15.5296 45.6662C15.4713 45.4087 15.5177 45.1386 15.6586 44.9152C15.7995 44.6919 16.0233 44.5337 16.2809 44.4754C16.5384 44.4172 16.8086 44.4636 17.0319 44.6045C19.6027 45.9258 22.5624 46.2802 25.3725 45.6032L25.4681 47.4626C21.9273 46.9125 18.653 45.2512 16.1181 42.7185C15.9739 42.5722 15.8867 42.3791 15.8724 42.1741C15.8581 41.9691 15.9176 41.7658 16.0402 41.6009C16.1627 41.4359 16.3403 41.3203 16.5407 41.2749C16.7411 41.2295 16.9511 41.2573 17.1328 41.3532C20.4843 43.127 24.3187 43.7716 28.066 43.1913L28.2147 44.5513C26.3054 44.5726 24.4142 44.1794 22.6716 43.3989C20.9289 42.6183 19.3764 41.4691 18.121 40.0304C16.3997 37.9904 16.081 36.5029 16.1606 36.487C16.2403 36.471 16.8725 37.7513 18.6628 39.5151C19.7495 40.5677 21.0069 41.4281 22.3816 42.0598C24.1869 42.8963 26.1693 43.2793 28.1563 43.1754C28.3281 43.1674 28.4966 43.2244 28.6284 43.3349C28.7602 43.4454 28.8456 43.6014 28.8677 43.772C28.8898 43.9426 28.8469 44.1152 28.7476 44.2557C28.6483 44.3961 28.4998 44.4941 28.3316 44.5301C24.2582 45.3238 20.0364 44.7407 16.3306 42.8726L17.3347 41.4966C19.6443 43.7046 22.5867 45.1349 25.7497 45.5873C25.9635 45.6218 26.1591 45.7283 26.3042 45.8891C26.4492 46.0499 26.535 46.2554 26.5474 46.4716C26.5598 46.6878 26.498 46.9018 26.3723 47.0781C26.2466 47.2545 26.0644 47.3826 25.856 47.4413C22.5937 48.2777 19.1387 47.9001 16.1341 46.3788L17.1966 44.6895C19.5492 46.4691 22.2731 47.6949 25.1653 48.2754C25.3887 48.3155 25.592 48.4297 25.7425 48.5995C25.8929 48.7694 25.9818 48.985 25.9947 49.2115C26.0076 49.4381 25.9437 49.6624 25.8135 49.8482C25.6833 50.034 25.4942 50.1705 25.2769 50.2357C24.8678 50.3579 24.4588 50.4695 24.0444 50.5704C21.353 51.1955 18.5524 51.1791 15.8685 50.5226L16.3997 48.5995L24.9369 51.5745C25.1503 51.6522 25.3295 51.8026 25.4431 51.9993C25.5567 52.196 25.5975 52.4264 25.5582 52.6502C25.5189 52.8739 25.4021 53.0766 25.2282 53.2228C25.0544 53.369 24.8347 53.4494 24.6075 53.4498L16.3625 53.3595L16.5591 51.5638L24.5863 53.3966C24.7668 53.4559 24.9211 53.5761 25.0227 53.7367C25.1243 53.8973 25.1667 54.0883 25.1429 54.2768C25.119 54.4653 25.0302 54.6397 24.8918 54.7699C24.7534 54.9001 24.574 54.978 24.3844 54.9904L16.6706 54.8045L16.8619 53.4338C19.5766 54.2307 21.9778 54.9479 24.0125 55.5588H24.0444C24.1452 55.5971 24.232 55.6651 24.2932 55.7538C24.3544 55.8425 24.3872 55.9478 24.3872 56.0556C24.3872 56.1634 24.3544 56.2686 24.2932 56.3573C24.232 56.446 24.1452 56.514 24.0444 56.5523C22.0621 57.0867 19.985 57.1684 17.9669 56.7913C16.5538 56.5629 15.8791 56.2229 15.9056 56.1432Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M49.2576 33.4109C49.2895 33.5065 48.3438 33.9421 46.4526 34.16C45.2942 34.2589 44.1279 34.2053 42.9835 34.0006C41.4356 33.7344 39.9444 33.2062 38.5741 32.4387L39.5145 31.6684C39.8429 32.4763 40.396 33.1732 41.1082 33.6765C41.8809 34.2352 42.8109 34.5347 43.7645 34.5318C43.952 34.5325 44.133 34.6007 44.2744 34.7239C44.4158 34.8471 44.5082 35.017 44.5346 35.2027C44.561 35.3884 44.5198 35.5773 44.4184 35.7351C44.3169 35.8928 44.1621 36.0088 43.9823 36.0618C41.9311 36.6168 39.7691 36.615 37.7188 36.0565C35.4533 35.4519 33.4122 34.2025 31.8432 32.46L33.4688 31.7481C33.6742 33.1589 34.3636 34.4544 35.419 35.4129C36.4744 36.3714 37.8301 36.9332 39.2541 37.0021C39.5029 37.004 39.7421 37.0987 39.9247 37.2676C40.1074 37.4366 40.2204 37.6676 40.2417 37.9155C40.263 38.1634 40.1909 38.4103 40.0397 38.6079C39.8885 38.8054 39.669 38.9395 39.4241 38.9837C36.6893 39.444 33.8798 38.9167 31.4979 37.4962C29.5513 36.3645 27.9766 34.6901 26.9663 32.6778L28.8682 32.3059C28.8229 33.9808 29.3879 35.615 30.4581 36.9042C31.5284 38.1933 33.0308 39.0495 34.6854 39.3131C34.9012 39.3677 35.0907 39.4972 35.22 39.6784C35.3494 39.8596 35.4102 40.0809 35.3917 40.3027C35.3732 40.5246 35.2766 40.7327 35.1191 40.89C34.9615 41.0474 34.7532 41.1437 34.5313 41.1618C29.6802 40.9632 25.0459 39.0982 21.4095 35.8812L22.6154 35.0631C23.1301 36.7477 24.165 38.2262 25.5717 39.2865C26.9784 40.3467 28.6847 40.9344 30.446 40.9653C31.4366 40.9885 32.4251 40.8631 33.3785 40.5934C34.0426 40.4075 34.3932 40.2746 34.441 40.349C34.4888 40.4234 34.1913 40.6678 33.5432 40.9971C32.5824 41.4638 31.5389 41.7364 30.4726 41.7993C28.7433 41.9263 27.0146 41.544 25.5001 40.6996C23.473 39.5681 21.9307 37.7329 21.1651 35.5412C21.1104 35.3879 21.1075 35.2208 21.1569 35.0656C21.2063 34.9105 21.3052 34.7758 21.4385 34.6823C21.5718 34.5889 21.7321 34.5417 21.8948 34.5481C22.0575 34.5545 22.2136 34.6141 22.3391 34.7178H22.3657C25.8186 37.5513 30.1191 39.15 34.5845 39.2599L34.457 41.1299C32.3117 40.8323 30.3519 39.7529 28.9538 38.0989C27.5556 36.4448 26.8176 34.3326 26.8813 32.1678C26.8961 31.9485 26.9825 31.7402 27.1271 31.5747C27.2717 31.4092 27.4667 31.2958 27.682 31.2518C27.8973 31.2077 28.1211 31.2356 28.319 31.331C28.517 31.4264 28.6782 31.5841 28.7779 31.78C29.6236 33.4296 30.9254 34.8015 32.5285 35.7325C34.4951 36.9066 36.8105 37.3558 39.0735 37.0021L39.2382 38.9837C37.3357 38.9005 35.5245 38.1446 34.1274 36.8506C32.7303 35.5566 31.838 33.8086 31.6095 31.9181C31.5927 31.7204 31.6389 31.5225 31.7415 31.3527C31.844 31.1829 31.9977 31.0498 32.1804 30.9726C32.3631 30.8954 32.5656 30.8779 32.7589 30.9228C32.9521 30.9676 33.1262 31.0724 33.2563 31.2221C34.5188 32.6497 36.1403 33.7135 37.9526 34.3029C39.7649 34.8924 41.7019 34.9861 43.5626 34.5743L43.7538 36.115C42.481 36.0776 41.2538 35.6325 40.2529 34.8453C39.347 34.1481 38.6654 33.2006 38.2926 32.12V32.0934C38.2495 31.9688 38.2461 31.8339 38.2828 31.7072C38.3196 31.5806 38.3947 31.4685 38.4978 31.3863C38.601 31.3041 38.727 31.256 38.8587 31.2485C38.9903 31.241 39.1211 31.2744 39.2329 31.3443C40.4533 32.1095 41.7874 32.6762 43.1854 33.0231C44.2447 33.2852 45.3297 33.4295 46.4207 33.4534C48.227 33.4693 49.2257 33.2728 49.2576 33.4109Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M60.5631 23.7427C60.5631 23.6524 60.9456 23.6046 61.429 23.9711C61.7639 24.2552 62.0232 24.6179 62.1836 25.0268C62.344 25.4356 62.4005 25.8779 62.3481 26.3139C62.2524 27.5146 61.2856 28.7152 59.9202 29.3155C58.5549 29.9158 56.8974 29.9211 55.3887 29.8467L55.9731 28.0724C57.1635 28.7524 58.5499 29.0072 59.9043 28.7949C60.7699 28.6681 61.5959 28.3485 62.3215 27.8599H62.3534C62.5116 27.7504 62.6985 27.6897 62.8909 27.6855C63.0832 27.6812 63.2726 27.7336 63.4356 27.8359C63.5985 27.9383 63.7278 28.0863 63.8074 28.2615C63.887 28.4367 63.9134 28.6314 63.8834 28.8214C63.7869 29.3568 63.5845 29.8676 63.2881 30.3237C62.9916 30.7799 62.607 31.1722 62.1568 31.4777C61.7608 31.7608 61.3236 31.9812 60.8606 32.1311C60.4399 32.2674 60.005 32.3548 59.5643 32.3914C58.8034 32.4487 58.0382 32.4005 57.2906 32.248C56.6732 32.1277 56.0658 31.9607 55.4737 31.7486C53.3487 30.9517 52.3234 29.9742 52.4456 29.7936C52.5677 29.613 53.7737 30.1124 55.819 30.5108C56.9795 30.76 58.1732 30.8157 59.3518 30.6755C59.9645 30.5886 60.5445 30.3452 61.0359 29.9689C61.5085 29.6212 61.8268 29.1028 61.9231 28.5239L63.4849 29.4642C62.5166 30.1633 61.3941 30.6188 60.2124 30.7924C58.3863 31.078 56.5186 30.6889 54.9584 29.698H54.9212C54.7438 29.5799 54.6109 29.4059 54.5437 29.2036C54.4765 29.0014 54.4788 28.7824 54.5502 28.5816C54.6216 28.3808 54.758 28.2096 54.9379 28.0952C55.1177 27.9808 55.3306 27.9298 55.5427 27.9502C57.0462 28.1149 58.3265 28.1786 59.3146 27.8333C59.7356 27.7196 60.1237 27.5077 60.4469 27.215C60.7702 26.9222 61.0193 26.557 61.174 26.1492C61.2537 25.8645 61.2764 25.5668 61.2409 25.2733C61.2053 24.9797 61.1122 24.6961 60.9668 24.4386C60.7649 24.0242 60.5312 23.8596 60.5631 23.7427Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M40.0247 15.3553C39.844 15.3606 39.844 14.3459 39.2065 12.7999C38.8191 11.8681 38.2807 11.0065 37.6128 10.2499C36.7769 9.2701 35.721 8.50189 34.5315 8.00807L35.4028 6.83932C36.6817 8.3338 37.5026 10.1654 37.7668 12.1146C38.0973 14.3746 37.6794 16.6806 36.5768 18.6809L34.9406 17.6503C35.6649 16.5473 36.0896 15.2749 36.1731 13.9581C36.2556 12.5818 35.954 11.2097 35.3018 9.99494C34.9259 9.2886 34.4399 8.64661 33.8622 8.09307L35.4187 6.83932C36.1252 8.00669 36.5313 9.33095 36.6007 10.6937C36.6701 12.0564 36.4007 13.4151 35.8165 14.6482C35.2323 15.8813 34.3516 16.9504 33.2531 17.7598C32.1546 18.5692 30.8726 19.0938 29.5218 19.2865H29.49C29.2939 19.304 29.098 19.252 28.9363 19.1396C28.7747 19.0272 28.6578 18.8616 28.6059 18.6717C28.554 18.4819 28.5705 18.2798 28.6524 18.1009C28.7344 17.9219 28.8767 17.7775 29.0543 17.6928C30.6463 17.0222 31.9917 15.8754 32.9059 14.4096C33.6102 13.264 34.0326 11.9677 34.1384 10.6271C34.2044 9.73943 34.158 8.84695 34.0003 7.97088C33.8993 7.35463 33.8303 7.01463 33.9153 6.97745C34.0003 6.94026 34.2181 7.22182 34.489 7.82745C34.8665 8.71431 35.0755 9.66374 35.1053 10.6271C35.1566 12.1756 34.8013 13.7106 34.0747 15.079C33.1075 16.8959 31.5771 18.3499 29.7131 19.2228L29.2456 17.629C30.2238 17.438 31.1474 17.032 31.9495 16.4403C32.7516 15.8486 33.4122 15.086 33.8834 14.2078C34.3808 13.2216 34.622 12.1262 34.5849 11.0223C34.5477 9.91845 34.2334 8.84169 33.6709 7.8912C33.5465 7.6823 33.5017 7.43553 33.5448 7.19626C33.5878 6.95698 33.7157 6.74126 33.905 6.58876C34.0944 6.43626 34.3324 6.35722 34.5753 6.36616C34.8183 6.37511 35.0499 6.47144 35.2275 6.63745C35.9671 7.33144 36.5897 8.14054 37.0709 9.03338C37.8952 10.5833 38.2636 12.335 38.1334 14.0856C38.0122 15.7483 37.4512 17.3489 36.5078 18.7234C36.3669 18.9397 36.1458 19.0911 35.8933 19.1444C35.6407 19.1977 35.3773 19.1485 35.1611 19.0076C34.9448 18.8667 34.7933 18.6457 34.74 18.3931C34.6867 18.1405 34.7359 17.8772 34.8768 17.6609C35.7409 16.1231 36.1392 14.3673 36.0232 12.6072C35.9072 10.8471 35.2819 9.15878 34.2234 7.74776L34.1915 7.70526C34.0908 7.57321 34.0372 7.41125 34.0393 7.24521C34.0413 7.07916 34.0988 6.91857 34.2027 6.78901C34.3066 6.65946 34.4509 6.5684 34.6125 6.53034C34.7741 6.49228 34.9439 6.50942 35.0947 6.57901C36.4742 7.22799 37.6661 8.21697 38.5584 9.45307C39.2257 10.3634 39.7126 11.3931 39.9928 12.4865C40.4337 14.3459 40.1362 15.3712 40.0247 15.3553Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M53.1677 6.63077C53.1252 6.5139 53.8318 6.09952 55.2927 5.89234C56.1786 5.79214 57.0746 5.82978 57.9489 6.0039C59.1332 6.2359 60.2598 6.69992 61.2639 7.36921C61.4041 7.46442 61.5067 7.60555 61.5539 7.76827C61.6012 7.93099 61.5902 8.1051 61.5228 8.26059C61.4555 8.41607 61.336 8.54318 61.185 8.62C61.0339 8.69682 60.8608 8.71853 60.6955 8.6814H60.6317C59.5297 8.427 58.3818 8.4489 57.2902 8.74515C56.0696 9.0716 54.9651 9.73426 54.1027 10.6576L52.9127 9.20202C54.2865 8.31694 55.8747 7.8212 57.508 7.76765C59.2396 7.7375 60.9488 8.16251 62.4646 9.00015C62.6576 9.10657 62.8108 9.27296 62.9009 9.47417C62.9909 9.67538 63.013 9.90045 62.9638 10.1153C62.9146 10.3302 62.7967 10.5232 62.6281 10.6652C62.4594 10.8071 62.2491 10.8903 62.0289 10.902H61.9971L61.2533 10.9339C59.3054 11.069 57.4233 11.694 55.7814 12.7508C54.3007 13.7231 53.035 14.9888 52.0627 16.4695L50.6336 15.407C52.0227 13.9334 53.7388 12.807 55.6433 12.1186C57.0915 11.5828 58.6255 11.3163 60.1696 11.3323C62.7408 11.3855 64.0742 12.1239 64.0158 12.2673C63.9627 12.4958 62.5655 12.1398 60.2227 12.3948C58.8329 12.549 57.4759 12.92 56.2011 13.4945C54.5737 14.2088 53.1229 15.2715 51.9511 16.6076C51.8028 16.7769 51.5962 16.8843 51.3724 16.9085C51.1487 16.9326 50.924 16.8719 50.7429 16.7382C50.5618 16.6046 50.4375 16.4078 50.3946 16.1868C50.3517 15.9658 50.3934 15.7368 50.5114 15.5451C51.5705 13.7663 53.0068 12.2412 54.7189 11.0773C56.6201 9.81518 58.8172 9.06999 61.0939 8.91515L61.9652 8.87796L61.4924 10.7798C60.2871 10.0943 58.9264 9.72857 57.5399 9.71734C56.2508 9.74296 54.9916 10.1096 53.8902 10.7798H53.8583C53.6629 10.8955 53.432 10.9361 53.2088 10.894C52.9856 10.8519 52.7854 10.73 52.6455 10.5511C52.5056 10.3722 52.4356 10.1484 52.4486 9.92169C52.4616 9.69493 52.5567 9.48066 52.7161 9.3189C53.857 8.16683 55.3106 7.37447 56.8971 7.03984C58.2706 6.73971 59.6986 6.80195 61.0408 7.22046L60.4086 8.52202C58.934 7.40477 57.1565 6.75858 55.3086 6.66796C53.9805 6.63609 53.2102 6.79015 53.1677 6.63077Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M12.0118 17.4526C11.8683 17.4101 11.9746 16.353 12.7927 14.6848C13.9874 12.3457 15.8321 10.4014 18.1052 9.08545C18.2714 8.9849 18.4679 8.94637 18.6598 8.97668C18.8517 9.00698 19.0267 9.10417 19.1539 9.25105C19.2811 9.39793 19.3522 9.58505 19.3547 9.77932C19.3573 9.97359 19.291 10.1625 19.1677 10.3126L19.1305 10.3551C17.6679 12.1595 16.8624 14.4075 16.8461 16.7301L14.8752 16.5389C15.4115 13.1328 16.9269 9.95615 19.2368 7.39608C19.3903 7.17839 19.6241 7.03063 19.8866 6.9853C20.1491 6.93997 20.4189 7.00078 20.6366 7.15436C20.8543 7.30793 21.0021 7.5417 21.0474 7.80422C21.0927 8.06674 21.0319 8.33652 20.8783 8.5542C19.6049 10.865 19.1446 13.5367 19.5715 16.1405L17.813 16.3264C17.8123 13.1603 18.6717 10.0534 20.2993 7.33764C21.4946 5.40389 22.5199 4.57514 22.6474 4.68139C22.7749 4.78764 22.0896 5.84483 21.2502 7.82108C20.0689 10.4829 19.5094 13.3789 19.614 16.2892C19.6172 16.5069 19.5404 16.7181 19.398 16.8828C19.2556 17.0475 19.0577 17.1541 18.8418 17.1823C18.626 17.2105 18.4073 17.1584 18.2274 17.0358C18.0475 16.9133 17.9189 16.7288 17.8661 16.5176V16.4805C17.2198 13.4588 17.6659 10.3058 19.1252 7.58201L20.7508 8.73483C18.7241 11.0332 17.3646 13.8421 16.8196 16.8576V16.8842C16.7871 17.1368 16.6574 17.3668 16.4579 17.5251C16.2585 17.6835 16.0051 17.7578 15.7517 17.7322C15.4984 17.7066 15.265 17.5831 15.1013 17.388C14.9376 17.1929 14.8564 16.9416 14.8752 16.6876C14.948 13.93 16.0095 11.2904 17.8661 9.25014L18.8861 10.5198C16.7786 11.6163 14.9671 13.2055 13.6055 15.1523C12.6068 16.5814 12.219 17.5323 12.0118 17.4526Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M48.6468 10.7373C48.5512 10.8436 48.2537 10.7373 47.8181 10.5089C47.5835 10.3898 47.3356 10.2989 47.0796 10.2379C46.8292 10.1815 46.5671 10.2115 46.3359 10.3229C46.2563 10.366 46.1943 10.4355 46.1606 10.5195C46.1021 10.6258 46.0225 10.8329 45.8737 11.1304C45.7765 11.3261 45.6492 11.5054 45.4965 11.6617C45.2541 11.903 44.9364 12.0541 44.5962 12.0899C44.256 12.1256 43.9138 12.0439 43.6265 11.8583C43.405 11.7189 43.2121 11.5386 43.0581 11.327C42.9376 11.1599 42.8327 10.982 42.7446 10.7958C42.7021 10.7054 42.665 10.6151 42.6331 10.5301C42.6128 10.4758 42.5898 10.4226 42.564 10.3708C42.5218 10.2741 42.4624 10.1859 42.3887 10.1104C42.4404 10.1381 42.4971 10.1552 42.5555 10.1606C42.6139 10.1661 42.6728 10.1599 42.7287 10.1423C42.8202 10.1125 42.8988 10.0526 42.9518 9.97232C42.9492 10.0219 42.9492 10.0715 42.9518 10.1211C42.9445 10.252 42.9445 10.3833 42.9518 10.5142C42.9518 11.0454 42.9518 11.5767 42.9518 12.0654C42.954 12.2782 42.8878 12.4861 42.763 12.6585C42.6382 12.8308 42.4613 12.9585 42.2584 13.0228C42.0555 13.087 41.8374 13.0845 41.6361 13.0154C41.4348 12.9463 41.261 12.8145 41.1403 12.6392C40.0435 11.1035 38.7321 9.73307 37.2462 8.56982C36.1146 7.66138 35.3496 7.14607 35.4506 6.90169C35.5515 6.65732 36.5131 6.77419 37.9421 7.43294C39.8465 8.36926 41.4988 9.74829 42.7606 11.4545L40.9065 12.0389V10.4876C40.8931 10.2771 40.8931 10.066 40.9065 9.85544C40.9372 9.56904 41.0181 9.29029 41.1456 9.032C41.3353 8.64295 41.6716 8.34495 42.0806 8.20325C42.2923 8.13438 42.516 8.11061 42.7375 8.13349C42.9589 8.15636 43.1731 8.22537 43.3662 8.33607C43.626 8.49178 43.849 8.70204 44.0196 8.95232C44.1488 9.14319 44.2557 9.34816 44.3384 9.56325C44.3756 9.65357 44.4234 9.79169 44.4393 9.8395L44.4925 9.99888C44.5236 10.0847 44.5609 10.1681 44.604 10.2486L44.6412 10.3176C44.6076 10.3538 44.5774 10.3929 44.5509 10.4345C44.4393 10.5992 44.4765 10.6576 44.4659 10.5461C44.4553 10.4345 44.4659 10.5461 44.4659 10.5461C44.4559 10.5252 44.4434 10.5056 44.4287 10.4876C44.4014 10.4452 44.3693 10.4059 44.3331 10.3708C44.2959 10.3389 44.3756 10.3229 44.4234 10.2379C44.5788 10.0051 44.7454 9.77989 44.9228 9.56325C45.1749 9.26755 45.5128 9.05773 45.8896 8.96294C46.4432 8.82939 47.0268 8.91304 47.5206 9.19669C47.8395 9.37488 48.1195 9.61512 48.344 9.90325C48.6575 10.3442 48.7425 10.6258 48.6468 10.7373Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.4247 56.2881C13.4619 56.3678 12.3622 56.9468 10.1204 56.8884C8.52214 56.8154 6.96021 56.3876 5.54789 55.6359C4.13556 54.8843 2.90827 53.8277 1.95505 52.5428C1.88048 52.4326 1.84101 52.3025 1.84181 52.1695C1.84261 52.0365 1.88366 51.9068 1.95954 51.7976C2.03543 51.6884 2.14261 51.6047 2.26697 51.5575C2.39134 51.5104 2.52706 51.5019 2.6563 51.5334H2.69349C5.22456 52.2627 7.86652 52.5291 10.4922 52.3196L10.3435 53.9134C8.66603 53.4903 7.10475 52.6965 5.77444 51.5905C4.44414 50.4845 3.37864 49.0944 2.6563 47.5225C2.57928 47.3506 2.5566 47.1593 2.59131 46.9741C2.62601 46.789 2.71644 46.6189 2.85049 46.4866C2.98454 46.3543 3.15581 46.2661 3.34137 46.2338C3.52693 46.2015 3.71793 46.2267 3.8888 46.3059L8.2238 48.3778L7.1188 49.8971C6.19471 48.8709 5.39578 47.7385 4.7388 46.5237C4.08116 45.2873 3.5302 43.997 3.09192 42.6668C3.02161 42.4768 3.01078 42.2698 3.06087 42.0735C3.11096 41.8771 3.2196 41.7006 3.37236 41.5674C3.52512 41.4343 3.71478 41.3507 3.91614 41.3279C4.1175 41.3051 4.32105 41.3441 4.49974 41.4397L9.24911 43.9312L8.05911 45.525C7.52613 44.9916 7.03088 44.4217 6.57692 43.8197C5.01261 41.7008 3.95654 39.2506 3.49036 36.6584C3.45006 36.4414 3.48278 36.2171 3.58343 36.0206C3.68408 35.8242 3.84697 35.6666 4.04666 35.5725C4.24635 35.4785 4.47158 35.4532 4.68715 35.5007C4.90272 35.5481 5.09649 35.6657 5.23817 35.835C6.49203 37.3474 8.12306 38.502 9.9663 39.1818L8.96755 40.8181C7.61693 39.5707 6.53887 38.0574 5.80109 36.3734C5.0633 34.6894 4.68174 32.871 4.68036 31.0325C4.6779 30.8215 4.75068 30.6166 4.88565 30.4545C5.02062 30.2924 5.20895 30.1836 5.41684 30.1478C5.62473 30.112 5.83859 30.1514 6.02003 30.259C6.20148 30.3666 6.33865 30.5354 6.40693 30.735C6.7417 31.6355 7.27967 32.4467 7.97901 33.1055C8.67834 33.7643 9.52019 34.2529 10.4391 34.5334L9.56255 35.7447C8.0215 33.37 6.98869 30.702 6.52911 27.9087C6.17105 25.8004 6.14954 23.6487 6.46536 21.5337C6.99661 18.0434 8.11224 16.3275 8.20786 16.3806C8.40974 16.4497 7.6288 18.2665 7.36849 21.6347C7.22319 23.6548 7.3681 25.6853 7.7988 27.6643C8.34628 30.2355 9.39708 32.6729 10.8907 34.8362C10.9836 34.9708 11.0332 35.1306 11.0327 35.2941C11.0323 35.4577 10.9819 35.6172 10.8883 35.7512C10.7946 35.8853 10.6622 35.9876 10.5089 36.0443C10.3555 36.1011 10.1884 36.1096 10.03 36.0687C8.83993 35.7507 7.74111 35.1576 6.82207 34.3373C5.90304 33.517 5.18946 32.4924 4.7388 31.3459L6.46536 31.0325C6.50371 32.6056 6.86108 34.1546 7.51583 35.5856C8.17059 37.0166 9.10908 38.2997 10.2744 39.3572C10.4439 39.5081 10.5553 39.7135 10.5892 39.9379C10.6231 40.1623 10.5774 40.3915 10.4601 40.5858C10.3428 40.78 10.1612 40.9271 9.94683 41.0016C9.73244 41.076 9.49877 41.0731 9.2863 40.9934C8.226 40.6058 7.2178 40.0883 6.28474 39.4528C5.33029 38.7879 4.46756 38.0002 3.7188 37.11L5.46661 36.2706C5.88363 38.5773 6.82314 40.758 8.21317 42.6456C8.61082 43.1704 9.04392 43.6674 9.50942 44.1331C9.67281 44.3058 9.76996 44.5307 9.78377 44.7681C9.79757 45.0054 9.72714 45.2401 9.58489 45.4306C9.44263 45.6211 9.23769 45.7553 9.00618 45.8095C8.77468 45.8637 8.53147 45.8344 8.31942 45.7268L3.57005 43.23L4.98849 42.024C5.71117 44.4427 6.92667 46.6856 8.55849 48.6115C8.70634 48.7764 8.79276 48.9872 8.80313 49.2085C8.81351 49.4297 8.74721 49.6477 8.61544 49.8257C8.48367 50.0037 8.2945 50.1307 8.0799 50.1853C7.86529 50.24 7.6384 50.2189 7.43755 50.1256L3.13442 48.0006L4.37224 46.7521C4.9624 48.0897 5.83933 49.2813 6.94096 50.2424C8.04259 51.2036 9.342 51.9109 10.7472 52.3143C10.9321 52.3663 11.0926 52.4821 11.2003 52.6411C11.3079 52.8001 11.3558 52.9921 11.3355 53.183C11.3151 53.374 11.2278 53.5515 11.089 53.6843C10.9502 53.817 10.7689 53.8963 10.5772 53.9081C7.77483 54.0597 4.96889 53.6831 2.30567 52.7978L3.05474 51.7884C3.96665 53.1458 5.20285 54.2541 6.6513 55.0131C7.7542 55.5968 8.94918 55.9868 10.1841 56.1659C12.2188 56.4421 13.3929 56.1234 13.4247 56.2881Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M3.83093 57.9069C3.93186 57.211 12.4584 57.9494 24.1512 58.5444L22.6053 59.915C22.7157 57.0513 23.1018 54.2048 23.7581 51.4151C24.1151 49.9196 24.5622 48.4472 25.0969 47.0057C25.3589 46.2973 25.6458 45.6067 25.9575 44.9338C26.1116 44.5938 26.2762 44.2644 26.4462 43.9351C26.6162 43.6057 26.7809 43.2976 27.0147 42.9204C27.2088 42.6072 27.5177 42.3823 27.8753 42.2935C29.2406 41.9535 30.5953 41.5976 31.7853 41.231L32.2156 41.0822L32.6672 40.9122L33.5544 40.5776C34.1387 40.3544 34.7054 40.1295 35.2544 39.9029C37.4484 39.0051 39.345 38.1019 40.9069 37.3157C44.0253 35.7219 45.8475 34.6594 46.0653 34.9569C46.2831 35.2544 44.8009 36.7951 41.8153 38.8722C40.0442 40.094 38.189 41.1894 36.2637 42.1501C35.7148 42.4298 35.1428 42.7043 34.5478 42.9735L33.6447 43.3772L33.1825 43.5791L32.6778 43.781C31.3497 44.3122 30.0216 44.7001 28.5766 45.1144L29.4425 44.4769C29.3256 44.6841 29.1662 45.0082 29.0281 45.2791C28.89 45.5501 28.7519 45.8688 28.6191 46.1716C28.3534 46.7826 28.0878 47.4147 27.8753 48.0682C27.4027 49.4081 27.0002 50.7717 26.6694 52.1535C26.069 54.7638 25.6781 57.4178 25.5006 60.0904V60.1382C25.4878 60.326 25.438 60.5095 25.3541 60.678C25.2702 60.8465 25.1538 60.9968 25.0116 61.1202C24.8695 61.2436 24.7043 61.3377 24.5257 61.3971C24.347 61.4565 24.1584 61.48 23.9706 61.4663C12.1556 60.4835 3.71936 58.5869 3.83093 57.9069Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M61.0938 23.0134C61.0035 22.9019 61.4179 22.4344 62.1563 21.6534C63.2259 20.6567 64.0872 19.4578 64.6904 18.1259C64.8536 17.7096 64.9625 17.2739 65.0144 16.8297C65.0554 16.3424 65.0376 15.8518 64.9613 15.3688C64.8863 14.82 64.7745 14.2769 64.6266 13.7431C64.5519 13.4714 64.4632 13.2036 64.361 12.9409C64.2547 12.6541 64.1379 12.3725 64.0157 12.0856C63.5273 10.9102 62.9033 9.7959 62.1563 8.76532C61.405 7.69276 60.4135 6.81047 59.261 6.18876C58.6792 5.87159 58.0647 5.61864 57.4282 5.43438C56.817 5.26316 56.1873 5.16683 55.5529 5.14751C54.2787 5.13018 53.007 5.26573 51.7651 5.55126C50.5326 5.80626 49.3319 6.11438 48.1685 6.3322C47.0724 6.55643 45.9563 6.66857 44.8376 6.66688C43.1679 6.69204 41.532 6.19624 40.1572 5.24845C39.2169 4.53126 38.9566 3.9097 39.0522 3.83532C39.1479 3.76095 39.626 4.14345 40.5663 4.57376C41.9042 5.15017 43.3663 5.37862 44.8163 5.23782C45.832 5.1476 46.838 4.96986 47.8232 4.70657C48.8857 4.43032 50.081 4.06907 51.3719 3.74501C52.758 3.37292 54.1868 3.18361 55.6219 3.18188C56.4224 3.19139 57.2185 3.30206 57.9913 3.51126C58.7736 3.72447 59.5293 4.02566 60.2438 4.40907C61.6616 5.17264 62.8751 6.26585 63.7819 7.59657C64.6041 8.77137 65.2736 10.046 65.7741 11.3897C65.891 11.7031 66.0079 12.0166 66.1088 12.33C66.2182 12.6525 66.3104 12.9806 66.3851 13.3128C66.5253 13.9354 66.6194 14.5676 66.6666 15.2041C66.7219 15.8263 66.6969 16.453 66.5922 17.0688C66.4819 17.6388 66.2943 18.1911 66.0344 18.7103C65.5981 19.5601 65.0175 20.3277 64.3185 20.9788C63.8132 21.4539 63.2675 21.884 62.6876 22.2644C61.7526 22.8753 61.1841 23.1197 61.0938 23.0134Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M56.2864 52.0966C56.7114 49.2544 56.1217 46.7841 53.2636 44.1278C51.881 42.8163 50.2426 41.8044 48.4509 41.1554C46.6592 40.5063 44.7528 40.2342 42.8511 40.3559C44.8569 39.2047 47.1259 38.5906 49.4386 38.5729C51.7513 38.5552 54.0294 39.1346 56.0526 40.255C60.1061 42.5341 62.7092 45.9978 64.0214 50.9119C64.8555 53.8096 65.435 56.7746 65.7533 59.7731C65.9604 61.4519 66.2526 63.5609 65.1104 64.7137C64.7433 65.0506 64.3138 65.3123 63.8461 65.4841C61.7795 66.3606 59.2348 66.6953 57.5879 65.0962C56.6051 64.1347 56.1323 62.6525 55.1654 61.6697C54.5651 61.0641 53.7417 60.7453 53.1786 60.1078C51.2342 57.9191 50.3204 55.4381 50.7136 52.5641",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M50.687 52.5476C50.7667 52.5476 50.772 52.861 50.8145 53.4189C50.8575 54.2185 50.9948 55.0102 51.2235 55.7776C51.595 56.9672 52.2001 58.0707 53.0032 59.0235C53.1201 59.1617 53.237 59.3051 53.3645 59.4432C53.4809 59.5795 53.6051 59.709 53.7363 59.831C54.0379 60.0731 54.3576 60.2915 54.6926 60.4845C54.8838 60.6067 55.0804 60.7342 55.2876 60.8935C55.4961 61.053 55.6899 61.2308 55.8667 61.4248C56.2001 61.8096 56.5005 62.2219 56.7645 62.6573C57.2957 63.4914 57.7526 64.3201 58.4379 64.7823C59.2065 65.2646 60.1233 65.4532 61.0198 65.3135C61.5326 65.2584 62.0383 65.1497 62.5285 64.9895C62.7835 64.9098 63.0598 64.8142 63.2882 64.7079C63.5326 64.6121 63.7704 64.5003 64.0001 64.3732C64.3659 64.1836 64.6466 63.863 64.7863 63.4754C64.9476 62.9914 65.0161 62.4814 64.9882 61.972C64.9672 61.3638 64.9122 60.7572 64.8235 60.1551L64.5685 58.2054C64.3932 56.9145 64.1329 55.6182 63.8248 54.2901C63.6689 53.6243 63.5043 52.9531 63.3307 52.2767C63.1607 51.5967 62.9748 50.9167 62.7995 50.2685C62.397 48.9556 61.8481 47.6922 61.1632 46.502C60.2127 44.8871 58.9611 43.4696 57.4763 42.3264C56.7477 41.786 55.9726 41.3113 55.1601 40.9079C54.3864 40.5013 53.5705 40.1807 52.727 39.9517C49.5467 39.0995 46.16 39.5107 43.276 41.0992L42.782 39.5054C45.7395 39.3434 48.6739 40.1086 51.1757 41.6942C52.2028 42.3392 53.1451 43.1102 53.9807 43.9892C54.7069 44.7257 55.3257 45.5609 55.8188 46.4701C56.5149 47.7548 56.8126 49.2177 56.6742 50.6723C56.5679 51.6498 56.3713 52.1385 56.2917 52.1279C56.212 52.1173 56.212 51.5967 56.1482 50.667C56.0747 49.3455 55.6631 48.065 54.9529 46.9482C54.4411 46.1632 53.8285 45.4488 53.1307 44.8232C52.3249 44.0714 51.4333 43.417 50.4745 42.8735C48.1872 41.5701 45.56 40.9869 42.936 41.2001C42.7414 41.2201 42.5457 41.1731 42.3813 41.067C42.2169 40.9608 42.0936 40.8018 42.0317 40.6161C41.9698 40.4305 41.9731 40.2293 42.0409 40.0457C42.1087 39.8621 42.2371 39.7072 42.4048 39.6064C45.6644 37.6925 49.5476 37.1427 53.2104 38.0764C54.1941 38.3244 55.1474 38.6808 56.0526 39.1389C56.9698 39.6042 57.8428 40.1519 58.661 40.7751C60.362 42.0652 61.7948 43.6749 62.8792 45.5139C63.6443 46.8401 64.2539 48.2502 64.696 49.716C64.9085 50.4439 65.0892 51.1345 65.2538 51.841C65.4185 52.5476 65.5885 53.217 65.7426 53.9023C66.0454 55.2729 66.3057 56.6489 66.4704 58.0035L66.6988 59.9798C66.7859 60.6547 66.8338 61.3341 66.8423 62.0145C66.8607 62.7652 66.7326 63.5122 66.4651 64.2139C66.1584 64.9726 65.5941 65.599 64.8713 65.9829C64.5727 66.1398 64.2639 66.2764 63.947 66.392C63.6495 66.5089 63.3467 66.6116 63.0385 66.7001C62.4273 66.8797 61.7986 66.9937 61.1632 67.0401C59.8717 67.1758 58.5753 66.8337 57.5188 66.0785C57.043 65.7111 56.6349 65.2634 56.3129 64.7557C56.0101 64.2935 55.7817 63.8473 55.5426 63.4382C55.3375 63.066 55.103 62.7107 54.8413 62.3757C54.597 62.077 54.3086 61.8172 53.986 61.6054C53.609 61.3539 53.2536 61.0714 52.9235 60.7607C52.7676 60.5927 52.6221 60.4153 52.4879 60.2295C52.3551 60.0701 52.2382 59.9001 52.1213 59.7407C51.3049 58.6279 50.7427 57.3493 50.4745 55.9954C50.3088 55.1514 50.2909 54.285 50.4214 53.4348C50.501 52.8239 50.6285 52.537 50.687 52.5476Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.6821 51.5324C55.1759 48.042 50.6496 48.1536 46.2562 50.693C41.8628 53.2323 39.7271 59.4002 40.524 64.8136C42.7659 59.7455 47.2071 55.9417 52.1584 54.8633",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M52.1586 54.8578C52.2223 55.1181 50.5648 55.5218 48.2911 56.9828C46.9336 57.8598 45.7006 58.9158 44.6255 60.1225C43.2791 61.629 42.1865 63.3443 41.3901 65.2012C41.3088 65.395 41.1662 65.5568 40.9842 65.6618C40.8021 65.7668 40.5907 65.8094 40.3823 65.7829C40.1738 65.7563 39.9797 65.6623 39.8298 65.515C39.6799 65.3678 39.5823 65.1754 39.552 64.9675C39.1812 62.5558 39.3389 60.0924 40.0142 57.7478C40.9067 54.5603 42.8405 51.6968 45.4223 50.1296C47.898 48.6421 50.5383 47.9621 52.7695 48.1534C54.5167 48.2849 56.1791 48.9591 57.5242 50.0818C57.8752 50.3812 58.1907 50.7199 58.4645 51.0912C58.6505 51.3462 58.7195 51.5056 58.6664 51.5534C58.6133 51.6012 58.4539 51.5534 58.1883 51.394C57.9226 51.2346 57.5508 51.0115 57.0726 50.73C55.7414 49.9849 54.242 49.5917 52.7164 49.5878C50.4602 49.6915 48.2786 50.4279 46.4211 51.7128C44.3758 53.0568 42.7501 55.4846 41.9586 58.3162C41.3649 60.386 41.1969 62.5547 41.4645 64.6912L39.6264 64.4415C40.5616 62.4009 41.8594 60.5468 43.4567 58.9697C44.7007 57.7362 46.1359 56.7118 47.7067 55.9362C48.7229 55.4226 49.8068 55.056 50.9261 54.8471C51.7017 54.7196 52.1373 54.7515 52.1586 54.8578Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.9691 59.0916C57.0778 56.855 54.0178 56.6744 51.5316 58.0291C49.0453 59.3837 47.7278 62.21 47.6587 65.2859C46.3997 62.4119 46.0331 57.9228 48.3706 55.0328C50.7081 52.1428 54.7881 52.1162 58.1562 53.6091",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M58.1564 53.6259C58.098 53.764 57.5614 53.6259 56.637 53.4825C55.3703 53.2382 54.0708 53.2148 52.7961 53.4134C51.9185 53.5518 51.0844 53.8896 50.3578 54.4007C49.6311 54.9118 49.0314 55.5827 48.6045 56.3618C47.6164 58.0884 47.4358 60.5215 47.9458 62.8909C48.0924 63.5805 48.3041 64.2547 48.578 64.9043L46.6495 65.2868C46.649 62.8127 47.6 60.4331 49.3058 58.6409C49.7037 58.2536 50.1418 57.9099 50.6126 57.6156C51.0539 57.3494 51.52 57.127 52.0045 56.9515C52.865 56.631 53.7802 56.483 54.698 56.5159C56.0163 56.5361 57.2819 57.0367 58.2573 57.9237C58.9055 58.5559 59.0701 59.0287 58.9851 59.0978C58.9001 59.1668 58.5123 58.8906 57.8217 58.5134C56.8747 57.9938 55.7956 57.7647 54.7192 57.8547C53.9814 57.9197 53.2615 58.1177 52.5942 58.439C52.2227 58.6088 51.8671 58.8115 51.5317 59.0447C51.1877 59.2962 50.8692 59.5809 50.5808 59.8947C49.3045 61.4205 48.6233 63.3565 48.6629 65.3453C48.6579 65.5727 48.5757 65.7916 48.43 65.9662C48.2843 66.1408 48.0836 66.2607 47.8608 66.3064C47.638 66.3521 47.4063 66.3207 47.2036 66.2176C47.0009 66.1144 46.8393 65.9454 46.7451 65.7384C46.4086 64.9713 46.1505 64.1721 45.9748 63.3531C45.6706 61.9921 45.5952 60.5899 45.7517 59.204C45.8859 57.8729 46.3141 56.5882 47.0055 55.4428C47.6407 54.3813 48.544 53.5056 49.6245 52.9034C50.5382 52.3922 51.5508 52.0824 52.5942 51.995C54.0492 51.8938 55.5072 52.1453 56.8442 52.7281C57.7845 53.1265 58.2095 53.509 58.1564 53.6259Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M57.4124 63.2938C57.4124 63.2142 57.6461 63.1557 58.0605 63.0442C58.6544 62.8919 59.2285 62.6708 59.7711 62.3854C60.5979 61.9511 61.3112 61.3288 61.8536 60.5685C62.5478 59.5868 62.9191 58.4134 62.9161 57.211L64.3133 57.5935C63.5012 59.1117 62.2544 60.3529 60.7327 61.1582C58.9871 62.1107 56.9716 62.4475 55.0111 62.1145C54.79 62.0734 54.5906 61.9554 54.4483 61.7812C54.306 61.6071 54.23 61.3882 54.2338 61.1633C54.2376 60.9385 54.321 60.7223 54.4692 60.5531C54.6173 60.3839 54.8206 60.2726 55.043 60.2392H55.0749C56.4247 60.0242 57.6891 59.4414 58.7294 58.5549C59.7697 57.6683 60.5455 56.5122 60.9717 55.2135L62.7461 56.122C62.5442 56.3717 62.3477 56.6532 62.1246 56.871C61.0218 58.1308 59.6313 59.1058 58.0711 59.7132C56.5689 60.2714 54.953 60.4538 53.3642 60.2445C53.1268 60.2142 52.909 60.0969 52.753 59.9153C52.597 59.7337 52.5139 59.5007 52.5199 59.2613C52.5258 59.022 52.6204 58.7934 52.7852 58.6197C52.95 58.4461 53.1734 58.3398 53.4121 58.3213C55.029 58.1782 56.5284 57.4171 57.5983 56.1963C58.572 55.0859 59.2128 53.7233 59.4471 52.2651L60.9239 52.6635C60.2754 54.0839 59.334 55.3512 58.1614 56.3823C57.291 57.1526 56.3004 57.7753 55.2289 58.2257C53.4546 58.9482 52.3655 58.8898 52.3496 58.757C52.3336 58.6242 53.3217 58.3373 54.8411 57.4448C55.7485 56.9049 56.5778 56.2436 57.3061 55.4792C58.2529 54.4942 58.9982 53.3339 59.5002 52.0632C59.5689 51.8907 59.6976 51.7488 59.8626 51.6637C60.0276 51.5785 60.2178 51.5558 60.3982 51.5998C60.5787 51.6438 60.7371 51.7514 60.8444 51.903C60.9518 52.0545 61.0008 52.2397 60.9824 52.4245V52.4617C60.7967 54.2547 60.0893 55.954 58.9477 57.3492C57.613 58.9819 55.6894 60.0239 53.5927 60.2498L53.6192 58.3267C54.8923 58.4648 56.1799 58.2973 57.3752 57.8379C58.6301 57.3318 59.7478 56.5363 60.6371 55.5163C60.823 55.3198 60.9824 55.0967 61.1683 54.8948L61.2055 54.8523C61.3553 54.6729 61.5628 54.5511 61.7925 54.5077C62.0221 54.4642 62.2597 54.5018 62.4648 54.614C62.6698 54.7263 62.8295 54.9062 62.9167 55.1231C63.0038 55.3399 63.013 55.5803 62.9427 55.8032C62.4029 57.4655 61.4034 58.9409 60.0599 60.0588C58.7164 61.1766 57.0838 61.8912 55.3511 62.1198L55.4149 60.2392C56.9637 60.5329 58.5661 60.3128 59.9783 59.6123C61.2426 59.0076 62.3065 58.0524 63.0436 56.8604L63.0702 56.8126C63.1552 56.6706 63.2854 56.5613 63.4399 56.5022C63.5945 56.443 63.7644 56.4375 63.9225 56.4865C64.0805 56.5356 64.2176 56.6362 64.3115 56.7724C64.4055 56.9086 64.4511 57.0724 64.4408 57.2376C64.3563 58.7284 63.7852 60.1505 62.8152 61.2857C62.0978 62.1246 61.1727 62.7603 60.1324 63.1292C59.4932 63.3634 58.8153 63.4734 58.1349 63.4532C57.6408 63.4479 57.4071 63.3629 57.4124 63.2938Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M59.9148 50.4699C59.6651 50.5018 59.442 49.1896 58.5017 47.2824C57.9476 46.1514 57.2455 45.0991 56.4139 44.1533C55.3829 42.9699 54.1442 41.985 52.7588 41.2474L53.7895 39.6536C55.3353 40.7807 56.5677 42.2837 57.37 44.0204C58.1724 45.757 58.518 47.6698 58.3742 49.5774C58.355 49.8118 58.2524 50.0317 58.085 50.1969C57.9176 50.3622 57.6965 50.4619 57.4618 50.4779C57.2271 50.494 56.9944 50.4254 56.806 50.2845C56.6176 50.1436 56.486 49.9399 56.4351 49.7102C56.0638 48.0099 55.3398 46.4064 54.3101 45.0033C53.4824 43.864 52.4844 42.8589 51.351 42.023C49.4173 40.5939 47.951 40.1636 48.0254 39.898C48.0254 39.7864 48.4451 39.7652 49.157 39.898C50.1644 40.1006 51.1341 40.4591 52.031 40.9605C53.4142 41.7235 54.6429 42.7379 55.6542 43.9514C56.9555 45.4893 57.8828 47.3076 58.3635 49.2639L56.4245 49.4074C56.4828 48.0684 56.264 46.7319 55.7817 45.4814C55.1481 43.7841 54.0601 42.2937 52.6367 41.173L52.5942 41.1464C52.4895 41.0767 52.3996 40.987 52.3297 40.8825C52.2597 40.778 52.211 40.6607 52.1863 40.5374C52.1616 40.4141 52.1615 40.2871 52.1859 40.1637C52.2103 40.0403 52.2588 39.923 52.3285 39.8183C52.3983 39.7137 52.488 39.6238 52.5925 39.5538C52.697 39.4838 52.8143 39.4351 52.9376 39.4104C53.1867 39.3606 53.4453 39.4118 53.6567 39.5527C55.2217 40.4544 56.585 41.6677 57.6623 43.1174C58.506 44.2412 59.156 45.4981 59.5854 46.8361C60.3079 49.0727 60.1007 50.4699 59.9148 50.4699Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M55.4415 53.5724C55.4415 53.8806 53.7308 53.854 51.218 54.6031C49.7586 55.0389 48.3661 55.6735 47.0796 56.489C45.5142 57.4726 44.1407 58.7327 43.0262 60.2077C42.882 60.3983 42.6749 60.5315 42.4417 60.5836C42.2085 60.6358 41.9644 60.6036 41.7527 60.4927C41.5411 60.3817 41.3757 60.1993 41.2859 59.9779C41.1961 59.7565 41.1878 59.5104 41.2624 59.2834C41.358 59.0018 41.4483 58.7149 41.5652 58.4334C42.4095 56.3207 43.8607 54.5054 45.7355 53.2165C47.2488 52.1768 49.0024 51.5405 50.8302 51.3678C52.0338 51.2431 53.2502 51.355 54.4108 51.6971C55.2183 51.9521 55.6115 52.2284 55.5743 52.3559C55.5371 52.4834 55.0749 52.4834 54.2887 52.4781C53.2019 52.4556 52.1163 52.559 51.0533 52.7862C49.5222 53.1186 48.0825 53.7823 46.8352 54.7306C45.3306 55.8851 44.1637 57.4226 43.4565 59.1824C43.3608 59.4109 43.2865 59.6499 43.2068 59.8837L41.4271 58.9806C42.7039 57.2985 44.318 55.9016 46.1658 54.8793C47.6505 54.0496 49.2685 53.4851 50.9471 53.2112C52.054 53.0157 53.1839 52.987 54.2993 53.1262C55.0377 53.2749 55.4521 53.4449 55.4415 53.5724Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M40.9863 58.9697C40.7844 58.9697 40.6091 58.4385 40.625 57.4291C40.6872 56.0193 41.0399 54.6375 41.661 53.3704C42.0825 52.4713 42.6182 51.6303 43.2547 50.8682C43.6215 50.4393 44.0211 50.0396 44.45 49.6729C44.8923 49.2888 45.359 48.9339 45.8472 48.6104C48.0885 47.0896 50.7816 46.3793 53.4813 46.5969C54.0986 46.6422 54.7124 46.7256 55.3194 46.8466L53.5185 48.2704C53.573 47.4013 53.4047 46.5328 53.0297 45.7469C52.6367 44.9938 52.0944 44.3287 51.436 43.7919C50.2132 42.7771 48.8011 42.015 47.2816 41.55C45.9482 41.1144 44.7953 40.8966 43.9932 40.7C43.191 40.5035 42.7288 40.3388 42.7235 40.1369C42.7182 39.935 43.1697 39.7332 44.025 39.5791C45.2557 39.3795 46.5094 39.367 47.7438 39.5419C49.6828 39.7888 51.5311 40.5095 53.1253 41.6404C54.1525 42.3565 55.0087 43.2907 55.6328 44.3763C56.303 45.6055 56.6262 46.9938 56.5678 48.3925C56.561 48.59 56.5153 48.7842 56.4333 48.964C56.3514 49.1438 56.2348 49.3057 56.0902 49.4404C55.9456 49.5751 55.7759 49.6799 55.5908 49.749C55.4057 49.8181 55.2088 49.85 55.0113 49.8429H54.82H54.7616C54.2747 49.7547 53.7835 49.6926 53.29 49.6569C51.2176 49.4862 49.1427 49.9553 47.3453 51.001C46.9274 51.2387 46.5231 51.4994 46.1341 51.7819C45.7746 52.0297 45.432 52.3012 45.1088 52.5947C44.5158 53.153 43.9818 53.7707 43.515 54.4382C42.8249 55.4541 42.241 56.5382 41.7725 57.6735C41.4378 58.5129 41.1988 59.0016 40.9863 58.9697Z",
				fill: "black"
			}));
			var S = s("./src/reddit/components/SearchResultsContent/NoResults/redesign.m.less"),
				k = s.n(S);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T;

			function I({
				query: e,
				type: t,
				searchOptions: s
			}) {
				const i = Object(E.a)();
				return Object(n.useEffect)(() => {
					i(Object(j.i)(t, s))
				}, []), o.a.createElement("div", {
					className: Object(r.a)(k.a.noResults, t === T.Posts && k.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement(_, null), o.a.createElement("h2", {
					className: k.a.header
				}, w._("If there aren’t any search results for “", null, {
					hk: "jdZLH"
				}), w._("{search query}", [w._param("search query", e)], {
					hk: "4vP3YT"
				}), w._("”, does it even exist?", null, {
					hk: "3Pa0q2"
				})), o.a.createElement("p", {
					className: k.a.text
				}, w._("Looks like there aren’t any results for “", null, {
					hk: "4zRIzA"
				}), w._("{search query}", [w._param("search query", e)], {
					hk: "4vP3YT"
				}), w._("”. Try double-checking your spelling or searching for a related topic.", null, {
					hk: "2wIbnh"
				})))
			}

			function L(e) {
				const {
					hasAuthorsResults: t,
					listingKey: s,
					searchOptions: r
				} = e, n = r.is_multi || r.category, c = t && !y(r.q), d = Object(a.a)(r.q || ""), l = Object(i.e)(t => Object(p.c)(t, e)), u = void 0 === l || l;
				return o.a.createElement(o.a.Fragment, null, c || u ? o.a.createElement(O, {
					key: "authorsPreview",
					listingKey: s,
					searchOptions: r
				}) : !n && o.a.createElement(I, {
					searchOptions: r,
					query: d,
					type: T.People
				}))
			}! function(e) {
				e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(T || (T = {}));
			var P = s("./src/reddit/selectors/listings.ts");

			function N(e) {
				const {
					hasCommunityResults: t,
					listingKey: s,
					searchOptions: r
				} = e, n = r.is_multi || r.category, c = Object(i.e)(t => Object(P.h)(t, e)), d = t && !y(r.q), l = Object(a.a)(r.q || ""), u = void 0 === c || c;
				return o.a.createElement(o.a.Fragment, null, d || u ? o.a.createElement(g, {
					key: "communitiesPreview",
					listingKey: s,
					searchOptions: r
				}) : !n && o.a.createElement(I, {
					query: l,
					type: T.Communities,
					searchOptions: r
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var R = s("./node_modules/lodash/isEmpty.js"),
				M = s.n(R),
				F = s("./src/lib/constants/index.ts"),
				B = s("./src/lib/hooks/usePrevious.ts"),
				A = s("./src/lib/makeSearchKey/index.ts"),
				H = s("./src/reddit/actions/search.ts"),
				D = s("./src/config.ts"),
				U = s("./src/lib/intersectionObserver/index.ts"),
				W = s("./src/lib/isUrl/index.ts"),
				V = s("./src/lib/opener/index.ts"),
				K = s("./src/reddit/actions/post.ts"),
				q = s("./src/reddit/components/BlankPost/index.tsx"),
				G = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/Media/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/Thumbnail/index.tsx"),
				Y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/adEvents.ts"),
				$ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = s("./src/reddit/contexts/Post/index.tsx"),
				te = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				se = s("./src/reddit/helpers/clickSourceData/index.ts"),
				re = s("./src/reddit/helpers/overlay/index.ts"),
				ne = s("./src/reddit/helpers/path/index.ts"),
				oe = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ie = s("./src/reddit/models/Media/index.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				ce = s("./src/reddit/selectors/showPromotedCTA.ts"),
				de = s("./src/reddit/selectors/user.ts"),
				le = s("./node_modules/reselect/es/index.js"),
				ue = s("./src/lib/getShortenedLink.ts"),
				me = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				pe = s("./src/reddit/components/PostTitle/index.tsx"),
				be = s("./node_modules/fbt/lib/FbtPublic.js"),
				he = s("./src/lib/prettyPrintNumber/index.ts"),
				Ce = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				fe = s.n(Ce);

			function xe({
				post: e,
				className: t
			}) {
				const s = Object.values(e.awardCountsById || {}).reduce((e, t) => e += t, 0);
				return o.a.createElement("div", {
					className: Object(r.a)(fe.a.flatlistContainer, t)
				}, o.a.createElement("span", {
					className: Object(r.a)(fe.a.flatlistItem)
				}, be.fbt._("{upvotesCount} upvotes", [be.fbt._param("upvotesCount", Object(he.b)(e.score))], {
					hk: "4pEh4K"
				})), o.a.createElement("span", {
					className: Object(r.a)(fe.a.flatlistItem)
				}, be.fbt._("{commentsCount} comments", [be.fbt._param("commentsCount", Object(he.b)(e.numComments))], {
					hk: "25X8If"
				})), o.a.createElement("span", {
					className: Object(r.a)(fe.a.flatlistItem)
				}, be.fbt._("{awardsCount} awards", [be.fbt._param("awardsCount", Object(he.b)(s))], {
					hk: "2DUF36"
				})))
			}
			var ge = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				ve = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Oe = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				ye = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				je = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				Ee = s("./src/reddit/hooks/useClickSourceData.ts"),
				_e = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				Se = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				ke = s.n(Se);
			var we = e => {
					const {
						className: t,
						flairStyleTemplate: s,
						post: n,
						subredditOrProfile: i,
						tooltipType: a
					} = e, c = Object(Ee.a)();
					return o.a.createElement("div", {
						className: Object(r.a)(t, ke.a.metaContainer)
					}, !n.isSponsored && i && o.a.createElement(ge.a, {
						className: Object(r.a)(ke.a.hovercardContainer, ke.a.hovercardContainer),
						postId: n.id,
						subredditName: i.name
					}, o.a.createElement(_e.b, {
						className: ke.a.subredditIcon,
						subredditOrProfile: i,
						linkTo: i.url
					}), o.a.createElement(ye.a, {
						className: ke.a.subredditName,
						"data-testid": "subreddit-name",
						"data-click-id": "subreddit",
						to: {
							pathname: i.url,
							state: c
						}
					}, i.displayText)), i && i.isQuarantined && o.a.createElement(Oe.a, null), !n.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(je.b, null), o.a.createElement(Z.h, {
						type: n.belongsTo.type,
						id: n.belongsTo.id
					})), o.a.createElement(ve.d, {
						className: ke.a.postTopMeta,
						flairStyleTemplate: s,
						post: n,
						tooltipType: a
					}))
				},
				Te = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				Ie = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Le = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Pe = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Ne = s("./src/reddit/hooks/useTheme.ts"),
				Re = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Me = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/redesign.m.less"),
				Fe = s.n(Me);
			const {
				fbt: Be
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ae = `${D.a.assetPath}/img/link-placeholder.png`, He = Object(le.c)({
				autoplayPref: de.b,
				showPromotedCTA: ce.a,
				flairStyleTemplate: $.U
			});

			function De(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(n.useRef)(), u = Object(n.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: p,
					showPromotedCTA: b
				} = Object(i.e)(t => He(t, e)), h = Object(i.e)(e => Object(ae.d)(e, {
					postId: s
				})), C = Object(i.e)(Re.b), f = Object($.eb)(), x = Object(Y.b)(), g = Object(i.d)(), v = Object(Ne.a)(), {
					post: O,
					subredditOrProfile: y
				} = Object(ee.d)(s), E = Object(n.useCallback)((e, t) => {
					g(Object(K.Q)(e, t))
				}, [g]), _ = !!O.source && !h;
				if (Object(n.useEffect)(() => (l.current && Object(U.a)(l.current, (e, t) => {
						u.current && (t ? u.current.focusContent() : u.current.pauseContent())
					}), Object(j.g)(a, c, d), () => {
						l.current && Object(U.b)(l.current), u.current && u.current.stopContent(), l.current = null, u.current = null
					}), []), !O) return null;
				const {
					media: S
				} = h || O || {}, k = (null == S ? void 0 : S.type) === ie.o.EMBED && (null == S ? void 0 : S.provider) === ie.v.Twitter, w = (null == S ? void 0 : S.type) === ie.o.VIDEO || (null == S ? void 0 : S.type) === ie.o.GIFVIDEO;

				function T(e) {
					e.stopPropagation(), e.preventDefault(), O.isSponsored ? (g(Object(K.z)(O, Q.a.Click)), O.source ? O.source.outboundUrl ? Object(V.e)(O.source.outboundUrl, V.d.BLANK) : Object(V.e)(O.source.url, V.d.BLANK) : Object(V.e)(O.permalink, V.d.BLANK)) : g(C ? Object(K.ab)(Object(ne.b)(O.permalink), O.id) : Object(re.a)({
						pathname: Object(ne.b)(O.permalink),
						state: Object(se.a)(f)
					}))
				}

				function I(e) {
					O.isSponsored && w || T(e), O.isSponsored && function(e) {
						w || (e.stopPropagation(), e.preventDefault()), x(Object(j.o)(O.id, c, d, a, f))
					}(e)
				}
				return O.isBlank ? o.a.createElement(q.BlankPost, {
					onPostViewable: E,
					post: O,
					postId: O.id
				}) : o.a.createElement(ee.a, {
					postId: s
				}, o.a.createElement(J.a, {
					className: Fe.a.postContainer,
					eventFactory: function(e, t) {
						let s;
						return (s = "subreddit" === t ? oe.z(c, f, a, d) : O && O.isSponsored ? oe.y(c, f, a, d) : oe.A(c, f, a, d))(e)
					},
					onClick: T,
					post: O,
					"data-click-id": "hero_unit",
					style: {
						...Object(Pe.d)({
							theme: v,
							flairStyleTemplate: p,
							redditStyle: !1
						}),
						...Object(Pe.b)(p)
					}
				}, o.a.createElement(me.a, {
					"data-click-id": "background"
				}, o.a.createElement(G.a, {
					className: Fe.a.eventMeta,
					post: O
				}), o.a.createElement("div", {
					className: Object(r.a)(Fe.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(we, {
					className: Fe.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: O,
					subredditOrProfile: y
				}), o.a.createElement("div", {
					className: Fe.a.postItemTitleContainer
				}, o.a.createElement(pe.c, {
					hideSourceLink: !0,
					post: O,
					size: pe.b.Medium,
					isOverlay: !1
				}), !b && _ && o.a.createElement(Te.a, {
					className: Fe.a.outboundLink,
					href: (null === (t = null == O ? void 0 : O.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: O.isSponsored,
					postId: O.id,
					source: O.source
				}, Object(ue.a)(O))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!O.source && Object(W.a)(O.source.url) || !!O.thumbnail && Object(W.a)(O.thumbnail.url),
						s = !S && t,
						n = Object(r.a)(Fe.a.mediaWrapper, {
							[Fe.a.marginCancel]: b && !!O.source,
							[Fe.a.promotedTrend]: O.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: n
					}, o.a.createElement(X.a, {
						className: Fe.a.thumbnail,
						post: O,
						templatePlaceholderImage: Ae,
						usePreview: !0
					}));
					else if (S)
						if (S.type !== ie.o.RTJSON && S.type !== ie.o.TEXT) e = o.a.createElement("div", {
							className: Object(r.a)(n, k && Fe.a.twitterEmbed),
							onClickCapture: I,
							ref: e => l.current = e
						}, o.a.createElement(z.a, {
							className: Fe.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: O.isSponsored,
							post: h || O,
							primaryContent: !0,
							scrollerItemRef: e => u.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: Fe.a.mediaPlaceholder
							}), (S.type === ie.o.RTJSON && S.richtextContent || S.type === ie.o.TEXT && S.content) && Object(te.a)(O) && (e = o.a.createElement("div", {
								className: n,
								onClickCapture: T,
								ref: e => l.current = e
							}, o.a.createElement(z.a, {
								autoplayPref: m,
								className: Fe.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: h || O,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: Fe.a.seeMore
							}, Be._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), b && O.source && o.a.createElement(Ie.a, {
					className: Fe.a.adLinkWrapper
				}, o.a.createElement(Te.a, {
					className: Object(r.a)(Fe.a.outboundLink),
					href: O.source.url.replace(D.a.redditUrl, ""),
					isSponsored: O.isSponsored,
					postId: O.id,
					source: O.source
				}, O.source.displayText), O.callToAction && o.a.createElement(Le.a, {
					className: Fe.a.adCallToAction,
					href: O.source.url.replace(D.a.redditUrl, ""),
					isSponsored: O.isSponsored,
					postId: O.id,
					source: O.source
				}, O.callToAction)), !O.isSponsored && o.a.createElement(xe, {
					className: Object(r.a)(Fe.a.postItemFlatlistContainer),
					post: O
				}), o.a.createElement(Z.d, null)))))
			}
			var Ue = s("./src/lib/LRUCache/index.ts"),
				We = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ve = s("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				Ke = s("./src/reddit/hooks/usePageLayer.ts"),
				qe = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Ge = 376,
				Ze = new Ue.a(1);

			function ze({
				discoveryUnit: e,
				listingKey: t,
				searchOptions: s,
				postId: r,
				children: n
			}) {
				const a = Object(i.d)(),
					c = Object(Ke.a)();
				if (!e || !r) return null;
				const d = () => {
					const n = `entered-hero-unit-${r}`;
					let o = Ve.a.get(n);
					if (void 0 === o) {
						const i = e.layout.viewTypeWeb === qe.b.PromotedTrendHero;
						o = () => {
							a((n, o) => Object(oe.B)(o(), e, r, s, c, t, i))
						}, Ve.a.set(n, o)
					}
					return o
				};
				return o.a.createElement(We.b, null, (() => {
					const s = `hero-unit-search-${t}`;
					let r;
					return void 0 === (r = Ze.get(s)) && (r = {
						estHeight: Ge,
						trackOnEnteredViewport: d(),
						id: e.id,
						render: () => n
					}), Ze.set(s, r), [r]
				})())
			}
			var Je = s("./src/reddit/helpers/trackers/screenview.ts"),
				Xe = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ye = s("./src/reddit/selectors/platform.ts");
			const Qe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var $e = s("./src/reddit/selectors/searchFix.ts"),
				et = s("./src/telemetry/index.ts"),
				tt = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: st,
				PromotedTrendHero: rt
			} = qe.b;

			function nt(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === st || e.layout.viewTypeWeb === rt);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var ot = s("./src/reddit/components/PostList/index.tsx"),
				it = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				at = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ct = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				dt = s("./src/reddit/components/ModModeReports/index.tsx"),
				lt = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ut = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				mt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				pt = s("./src/reddit/selectors/poll/index.ts"),
				bt = s("./src/reddit/selectors/postFlair.ts");
			const ht = {
					crosspost: ae.d,
					isActive: ae.j,
					isLoggedIn: de.K,
					moderatorPermissions: mt.l,
					modModeEnabled: $.S,
					poll: pt.e,
					showEditFlair: bt.a,
					flairStyleTemplate: $.U
				},
				Ct = () => Object(le.c)(ht);
			var ft = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				xt = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				gt = s("./src/reddit/components/SearchPost/index.m.less"),
				vt = s.n(gt);

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const yt = Object(it.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: a,
						flairStyleTemplate: c,
						isLoggedIn: d,
						isOverlay: l,
						moderatorPermissions: u,
						modModeEnabled: m,
						onClickPost: p,
						onIgnoreReports: b,
						poll: h,
						post: C,
						redditStyle: f,
						showBulkActionCheckbox: x,
						subredditOrProfile: g,
						searchQuery: v
					} = e, O = f ? void 0 : c, y = s || void 0, j = Object(ft.a)(u), E = Object(ct.d)(C), _ = Object(lt.c)(C), S = Object(X.b)({
						crosspost: s,
						post: C,
						url: void 0,
						usePreview: !1
					}), k = S && Object(W.a)(S), w = !!C.media && Object(ie.H)(C.media), T = !d, I = Object(n.useMemo)(() => Object(xt.a)(v, e => o.a.createElement("span", {
						className: Object(r.a)(vt.a.syntaxHighlight)
					}, e), e => e), [v]), L = {
						flairStyleTemplate: O,
						post: C,
						isOverlay: l,
						shouldShowSubscribeButton: T,
						subredditOrProfile: g
					}, P = o.a.createElement(J.a, {
						className: Object(r.a)(vt.a.postContainer, Object(Pe.a)(e), a ? vt.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: l,
						onClick: p,
						post: C,
						style: {
							...Object(Pe.d)(e),
							...Object(Pe.b)(O)
						}
					}, o.a.createElement(me.a, {
						"data-click-id": "background",
						flairStyleTemplate: O,
						redditStyle: !0
					}, o.a.createElement(G.a, {
						className: vt.a.eventMeta,
						post: C
					}), o.a.createElement("div", {
						className: Object(r.a)(vt.a.postContent, {
							[vt.a.showBulkActionCheckbox]: x
						}),
						"data-click-id": "body"
					}, o.a.createElement(we, Ot({
						className: vt.a.postItemMetaContainer,
						key: "PostMeta"
					}, L)), o.a.createElement("div", {
						className: vt.a.postItemTitleContainer
					}, o.a.createElement("div", null, o.a.createElement(pe.c, {
						format: I,
						hideSourceLink: !0,
						poll: h,
						post: C,
						redditStyle: f,
						size: pe.b.Medium,
						titleColor: O && O.postTitleColor,
						isOverlay: l
					}), C.source && !y && o.a.createElement(Te.a, {
						className: vt.a.outboundLink,
						href: C.source.url,
						isSponsored: C.isSponsored,
						postId: C.id,
						source: C.source
					}, Object(ue.a)(C))), k && o.a.createElement("div", {
						className: vt.a.thumbnailContainer
					}, o.a.createElement(X.a, {
						className: vt.a.thumbnail,
						crosspost: y && C,
						isMeta: C.isMeta,
						post: y || C,
						redditStyle: f,
						templatePlaceholderImage: O && O.postPlaceholderImage,
						removeLink: w
					}))), m && j && E && o.a.createElement(at.a, {
						thing: C
					}), m && j && _ && o.a.createElement(dt.a, {
						onIgnoreReports: b,
						reportable: C
					}), o.a.createElement(xe, {
						className: Object(r.a)(vt.a.postItemFlatlistContainer),
						post: C
					}), o.a.createElement(Z.d, null))));
					return o.a.createElement(ut.b, null, P)
				}),
				jt = Object(ee.b)((e => t => {
					const s = Object($.eb)(),
						r = ((e, {
							postId: t
						}) => ({
							onIgnoreReports: () => e(Object(K.fb)(t))
						}))(Object(i.d)(), {
							...t
						}),
						n = Object($.Y)(s),
						a = Object(i.e)(Ct),
						c = {
							...t,
							...a,
							...r,
							searchQuery: n
						};
					return o.a.createElement(e, c)
				})(yt));
			var Et = s("./src/reddit/constants/postLayout.ts"),
				_t = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				St = s("./src/reddit/helpers/trackers/post.ts"),
				kt = s("./src/reddit/selectors/tracking.ts"),
				wt = s("./src/reddit/connectors/PostList/index.ts");
			const Tt = Object(wt.c)(),
				It = Object(le.c)({
					...wt.d,
					layout: () => Et.g.Search,
					viewportDataLoaded: kt.a,
					postIds: (e, {
						heroPostId: t,
						listingKey: s,
						listingName: r,
						inSubredditOrProfile: n,
						searchDiscoveryUnit: o
					}) => {
						const i = o && o.postOrder,
							a = nt(Qe(e));
						if (i && i.length > 0) {
							if (t) {
								const s = i.indexOf(t);
								if (s > -1) return i.splice(s, 1), Object(ae.W)(e, i)
							}
							return Object(ae.W)(e, i)
						}
						const {
							models: c
						} = e.posts;
						return Object(ae.E)(e, s, r, !!n).filter(e => c && c[e] && !c[e].isSponsored && a !== e)
					}
				}),
				Lt = (e, t, s, r) => {
					if (s) return Object(St.h)(e, t);
					const {
						sendEvent: n,
						listingKey: o,
						searchOptions: i,
						pageLayer: a,
						searchDiscoveryUnit: c
					} = r;
					return "body" === t || "background" === t || "expando_open" === t || "image" === t || "timestamp" === t ? n(Object(j.l)(e, {
						...i,
						id: e,
						eventType: "post"
					}, a, o, c)) : "subreddit" === t ? n(Object(j.k)(i, a, void 0, o, e, c)) : "comments" === t && n(Object(j.l)(e, {
						...i,
						id: e,
						eventType: "post"
					}, a, o, c)), Object(St.h)(e, t)
				},
				Pt = Object(i.b)(It, (e, t) => ({
					...Object(wt.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(j.m)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, Object($e.b)(t))), t.sendEvent(Object(j.n)(t.listingKey, e, {
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
					postClickEventFactory: Lt,
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? _t.a : jt
				}));
			const Nt = (e => Object(Y.c)(Tt(Pt(e))))(ot.a),
				Rt = () => null,
				Mt = Object(le.c)({
					viewTreatment: p.t,
					searchDiscoveryUnitsModels: Qe,
					hasBestResults: p.j,
					apiPending: P.d,
					postIds: ae.A,
					posts: ae.z,
					loadMore: P.g,
					isOverlayOpen: Ye.i
				});

			function Ft(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: c
				} = e, d = Object(Ke.a)(), l = Object(E.a)(), u = Object(i.d)(), {
					viewTreatment: m,
					searchDiscoveryUnitsModels: b,
					hasBestResults: h,
					postIds: C,
					posts: f,
					loadMore: x,
					isOverlayOpen: g,
					apiPending: v
				} = Object(i.e)(t => Mt(t, e)), O = Object(i.e)(e => Object($.o)(e, {
					pageLayer: d
				})), {
					username: y,
					multiredditName: j
				} = Object($.d)(d) || {}, _ = Object(B.a)(g), S = Object(A.b)(O || j, y, {
					...c,
					type: [F.Zb.Posts]
				}), k = Object(i.e)(e => Object(p.j)(e, {
					listingKey: S
				})), w = void 0 === v || v, L = (e, s) => l(Object(Je.u)(t, c, s, e, d, Object($e.b)({
					pageLayer: d
				})));
				let P;
				Object(n.useEffect)(() => {
					!h || k || M()(C) || u(Object(H.n)(S, C, f, [F.Zb.Posts], x))
				}, [h, k, C]), Object(n.useEffect)(() => {
					h && !M()(C) && U()
				}, [h, C]), Object(n.useEffect)(() => {
					_ && !g && U()
				}, [g, _]), m === qe.c.Trending && (P = nt(b));
				const N = Object(a.a)(c.q || ""),
					R = Object(n.useMemo)(() => Object.values(b).find(e => e.name === Xe.l || e.name === Xe.f), [b]),
					D = P && R;

				function U() {
					if (et.c.has(t)) {
						const e = et.c.end(t);
						L(e, tt.TimerType.InApp)
					}
				}
				return h || D || w ? o.a.createElement(o.a.Fragment, null, D && o.a.createElement(ze, {
					key: P,
					postId: P,
					discoveryUnit: R,
					searchOptions: c,
					listingKey: t
				}, o.a.createElement(De, {
					key: P,
					discoveryUnit: R,
					postId: P,
					listingKey: t,
					searchOptions: c
				})), (h || w) && o.a.createElement(Nt, {
					key: "posts",
					listingKey: S,
					listingName: s,
					location: r,
					inSubredditOrProfile: !1,
					noPostsComponent: Rt,
					onLoadMore: function() {
						u(Object(H.o)([F.Zb.Posts]))
					},
					searchOptions: c
				})) : o.a.createElement(I, {
					query: N,
					type: T.Posts,
					searchOptions: c
				})
			}
			var Bt = s("./src/reddit/constants/page.ts"),
				At = s("./src/reddit/components/SearchResultsContent/redesign.m.less"),
				Ht = s.n(At);

			function Dt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(m.c)(e)), l = Object(i.e)(s => d ? Object(p.h)(s, {
					listingKey: t
				}) : Object(p.i)(s, e)), u = Object(i.e)(e => Object(p.g)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Object(r.a)(Ht.a.resultsContainer)
				}, c === Bt.h.Listings ? o.a.createElement(N, {
					hasCommunityResults: l,
					listingKey: t,
					searchOptions: a
				}) : d && c === Bt.h.Authors ? o.a.createElement(L, {
					hasAuthorsResults: u,
					listingKey: t,
					searchOptions: a
				}) : o.a.createElement(Ft, {
					key: t,
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/selectors/searchFix.ts"),
				n = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(r.a)(e, t);
				return s ? Object(n.w)(e, {
					subredditName: s
				}) : null
			}
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
				return H
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/page.ts"),
				d = s("./src/reddit/constants/parameters.ts"),
				l = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/trackers/searchResults.ts"),
				b = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				h = s("./node_modules/lodash/noop.js"),
				C = s.n(h),
				f = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				x = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				g = s("./src/reddit/selectors/searchResults.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./node_modules/history/esm/history.js"),
				y = s("./node_modules/react-router-redux/es/index.js"),
				j = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/colors/constants.ts"),
				_ = s("./src/lib/search/index.ts"),
				S = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				k = s("./src/reddit/constants/tracking.ts"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				I = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				N = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				R = s.n(N);
			const M = "safe-search-toggle";

			function F({
				searchOptions: e
			}) {
				const t = Object(u.a)(),
					s = Object(I.a)(),
					[n, a] = o.a.useState(!0);
				o.a.useEffect(() => a(null), []);
				const c = Object(T.a)({}),
					{
						nsfwSessionSetting: l,
						setNsfwSessionSetting: m
					} = Object(P.a)(),
					p = Object(i.d)();
				c.arrowProps.style = {
					...c.arrowProps.style,
					borderBottom: `3px solid ${E.e}`
				}, c.popperProps.style = {
					...c.popperProps.style,
					backgroundColor: E.e
				};
				const b = null != n ? n : !l;
				return o.a.createElement("div", {
					className: Object(j.a)(R.a.searchNSFWToggle),
					"data-testid": M,
					onMouseEnter: c.show,
					onMouseLeave: c.hide
				}, o.a.createElement("label", {
					htmlFor: M,
					className: Object(j.a)(R.a.searchNSFWToggleLabel)
				}, r.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), o.a.createElement(w.a, {
					activeColorOverride: E.a,
					id: M,
					onToggle: function() {
						t(t => (function(t, s) {
							return {
								action: s ? k.c.DISABLE : k.c.ENABLE,
								source: "search",
								noun: "nsfw",
								actionInfo: Object(L.d)(t),
								search: Object(L.bb)(t, e)
							}
						})(t, !b));
						const r = !l;
						m(r);
						const n = (null == s ? void 0 : s.queryParams[d.q]) || "",
							{
								include_over_18: o,
								...i
							} = (null == s ? void 0 : s.queryParams) || {},
							a = {
								...i,
								...r && {
									[d.j]: "1"
								}
							},
							c = {
								pathname: location.pathname,
								search: Object(_.c)(location.pathname, n, a).replace(location.pathname + "?", "")
							};
						p(Object(y.b)(Object(O.c)(c)))
					},
					on: b,
					redditStyle: !0,
					ref: c.target.ref
				}), o.a.createElement(S.a, {
					visible: c.visible,
					arrowProps: c.arrowProps,
					popperProps: c.popperProps
				}, b && r.fbt._("Turn off safe search to show adult and NSFW (Not Safe for Work) search results", null, {
					hk: "E5puY"
				}), !b && r.fbt._("Turn on safe search to hide adult and NSFW (Not Safe for Work) search results", null, {
					hk: "1G2k8"
				})))
			}
			var B = s("./src/reddit/components/SearchResultsNav/redesign.m.less"),
				A = s.n(B);

			function H({
				activeTab: e,
				location: t,
				searchOptions: s,
				searchSwitcher: n
			}) {
				const h = Object(u.a)(),
					O = Object(i.e)(v.eb),
					y = Object(i.e)(g.t),
					j = Object(i.e)(x.c),
					E = Object(i.e)(x.b),
					_ = y === f.c.Trending,
					S = s[d.c] || s.q || "",
					k = {
						condition: !0,
						active: e === c.h.Posts,
						target: p.a.Posts,
						key: "posts",
						contentTypes: "",
						text: r.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					w = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Listings,
						target: p.a.CommunitiesAndUsers,
						key: "listings",
						contentTypes: [a.Zb.Subreddits, a.Zb.Users].join(","),
						text: r.fbt._("Communities and People", null, {
							hk: "1RJS0U"
						})
					},
					T = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Listings,
						target: p.a.Communities,
						key: "communities",
						contentTypes: a.Zb.Subreddits,
						text: r.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					I = {
						...T,
						text: r.fbt._("Communities and People", null, {
							hk: "1RJS0U"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: e === c.h.Authors,
						target: p.a.Authors,
						key: "authors",
						contentTypes: a.Zb.Users,
						text: r.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					P = [k, ...j ? E ? [T, L] : [I] : [w]],
					N = O && !_ && "1" !== s.sr_nsfw;
				return o.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: A.a.searchResultsNav
				}, o.a.createElement("div", {
					className: A.a.pillRow,
					role: "tablist"
				}, P.filter(e => e.condition).map(e => {
					const {
						active: r,
						key: n,
						text: i,
						contentTypes: a
					} = e;
					return o.a.createElement(m.a, {
						key: n,
						to: Object(l.a)(t, S, a),
						"aria-selected": r,
						role: "tab",
						className: A.a.pillElement,
						onClick: () => (e => {
							e.active && h(Object(p.h)(e.target, s))
						})(e)
					}, o.a.createElement(b.a, {
						active: r,
						onClick: C.a,
						variant: b.b.TAB_GROUP
					}, i))
				})), n && o.a.createElement("div", {
					className: A.a.searchSwitcherContainer
				}, n), N && o.a.createElement("div", {
					className: A.a.nsfwToggleContainer
				}, o.a.createElement(F, {
					searchOptions: s
				})))
			}
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
				return H
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				m = s.n(u),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", m.a), C = p.a.div("Container", m.a), f = p.a.img("BannerImg", m.a), x = p.a.img("SnooImg", m.a), g = p.a.div("CommunityText", m.a);
			var v = () => o.a.createElement(C, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(x, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(g, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: m.a.Button,
					eventSource: "sidebar"
				}))),
				O = s("./src/reddit/components/IdCard/async.tsx"),
				y = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				j = s("./src/reddit/components/SidebarContainer/index.tsx"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				T = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				I = s("./src/reddit/selectors/searchResults.ts"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/selectors/widgets.ts"),
				R = s("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx"),
				M = s("./src/reddit/components/SearchResultsSidebar/redesign.m.less"),
				F = s.n(M);
			const B = Object(a.c)({
					authorIdentifiers: (e, {
						listingKey: t
					}) => Object(I.a)(e, {
						listingKey: t
					}),
					communityIdentifiers: (e, {
						listingKey: t
					}) => Object(T.c)(e) ? Object(I.d)(e, {
						listingKey: t
					}) : Object(I.k)(e, {
						listingKey: t
					}),
					isLoggedIn: P.K,
					hasCommunityResults: (e, {
						listingKey: t
					}) => Object(T.c)(e) ? Object(I.h)(e, {
						listingKey: t
					}) : Object(I.i)(e, {
						listingKey: t
					}),
					hasAuthorResults: (e, {
						listingKey: t
					}) => Object(I.g)(e, {
						listingKey: t
					}),
					peopleSerpRedesignLayoutM2: e => Object(T.b)(e),
					serpRedesignLayoutM2: e => Object(T.c)(e),
					subredditId: (e, {
						listingName: t
					}) => Object(L.C)(e, t),
					postFlairWidgets: (e, {
						listingName: t
					}) => {
						const s = Object(L.C)(e, t);
						return Object(N.g)(e, {
							subredditId: s
						})
					},
					idCardWidget: (e, {
						listingName: t
					}) => Object(N.d)(e, {
						subredditName: t
					})
				}),
				A = ({
					authorIdentifiers: e,
					className: t,
					communityIdentifiers: s,
					hasAuthorResults: n,
					hasCommunityResults: i,
					listingKey: a,
					listingName: d,
					location: l,
					idCardWidget: u,
					isLoggedIn: m,
					peopleSerpRedesignLayoutM2: p,
					postFlairWidgets: b,
					searchOptions: h,
					serpRedesignLayoutM2: C,
					subredditId: f
				}) => {
					const x = h.q || "",
						g = Boolean(f && h.restrict_sr),
						T = s.length - y.e >= 1,
						I = e.length - y.e >= 1;
					let L;
					return L = C ? p ? {
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
					}, o.a.createElement(j.a, {
						"data-testid": "search-results-sidebar",
						className: t
					}, g ? o.a.createElement(o.a.Fragment, null, u && o.a.createElement(O.a, {
						listingName: d
					}), b && b.map((e, t) => o.a.createElement(E.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(S.a, {
						subredditName: d,
						widget: e
					})))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, r.fbt._("{title}", [r.fbt._param("title", L.title), r.fbt._param("description", L.description)], {
						hk: "1gfp1L"
					})), i ? o.a.createElement(o.a.Fragment, null, !h.is_multi && o.a.createElement(y.a, {
						identifiers: s,
						listingKey: a,
						searchOptions: h,
						sidebar: !0
					}), T && o.a.createElement(k.a, {
						to: Object(w.a)(l, x, L.linkTo)
					}, o.a.createElement("p", {
						className: F.a.link
					}, r.fbt._("{link}", [r.fbt._param("link", L.linkTitle), r.fbt._param("link description", L.linkDescription)], {
						hk: "2nAtmm"
					})))) : o.a.createElement("p", {
						className: F.a.noResults
					}, r.fbt._("No results", [r.fbt._param("no results", L.noResults)], {
						hk: "ANbEn"
					}))), p && o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, r.fbt._("People", null, {
						hk: "2M8TqB"
					})), n ? o.a.createElement(o.a.Fragment, null, !h.is_multi && o.a.createElement(R.a, {
						identifiers: e,
						listingKey: a,
						searchOptions: h,
						sidebar: !0
					}), I && o.a.createElement(k.a, {
						to: Object(w.a)(l, x, c.Zb.Users)
					}, o.a.createElement("p", {
						className: F.a.link
					}, r.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: F.a.noResults
					}, r.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), m && o.a.createElement("div", {
						className: F.a.container
					}, o.a.createElement(v, null))), o.a.createElement(_.a, null))
				},
				H = e => {
					const t = Object(i.e)(t => B(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
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
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/redesign.m.less": function(e, t, s) {
			e.exports = {
				SelectOptionRedesign: "uWk70qio6t9QaZ6O9_s7u",
				selectOptionRedesign: "uWk70qio6t9QaZ6O9_s7u",
				mIsSelected: "_1PCdvR-YgsZNx_SQwQ5196"
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
				return pe
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/lib/search/index.ts");
			const h = (e, t, s, r, n, o) => {
				var i;
				const a = Object(b.b)(null !== (i = e[p.q]) && void 0 !== i ? i : ""),
					c = e && e[s],
					d = {};
				let l = Object(b.c)(t || "", a, {
					[s]: n
				});
				const u = [];
				for (const m of r) {
					const e = Object(b.c)(t || "", a, {
						[s]: m
					});
					d[e] = o[m](), u.push(e), c === m && (l = e)
				}
				return {
					optionLabels: d,
					options: u,
					value: l
				}
			};
			var C = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/actions/tooltip.ts"),
				O = s("./src/reddit/selectors/tooltip.ts");
			const y = Object(i.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(O.b)(t)(e)
			});
			var j = s("./src/reddit/components/SearchResultsSubNav/Select/redesign.m.less"),
				E = s.n(j),
				_ = s("./node_modules/query-string/index.js"),
				S = s.n(_),
				k = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				L = s("./src/reddit/helpers/history/index.ts"),
				P = s("./node_modules/lodash/fromPairs.js"),
				N = s.n(P),
				R = s("./src/lib/extractQueryParams/index.ts"),
				M = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/trackers/searchResults.ts"),
				B = s("./src/reddit/selectors/telemetry.ts");
			const A = (e, t) => {
					const s = N()([...Object(R.a)(e)]);
					return Object(m.pc)(s.sort) && (t.sort = s.sort), Object(m.rc)(s.t) && (t.t = s.t), t
				},
				H = (e, t, s, r) => () => e(e => ({
					...Object(F.c)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(M.c)(M.a.SearchResults),
					actionInfo: B.d(e),
					search: B.bb(e, A(s, r))
				})),
				D = ({
					option: e,
					...t
				}) => {
					const s = Object(w.b)();
					return n.a.createElement(k.a, {
						key: e,
						to: {
							pathname: S.a.parseUrl(e).url,
							state: {
								[T.b.SearchOriginPage]: Object(L.b)(T.b.SearchOriginPage)
							},
							search: e.replace(S.a.parseUrl(e).url + "?", "")
						},
						onClick: H(s, "full_search_filter_changed", e, t.searchOptions)
					}, n.a.createElement(I.b, {
						className: Object(a.a)(t.styles.SelectOption, t.isSelected && t.styles.mIsSelected),
						displayText: t.displayText,
						isSelected: t.isSelected
					}))
				};
			var U = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/redesign.m.less"),
				W = s.n(U);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(C.a)(e => n.a.createElement(x.a, V({
					className: E.a.Component
				}, e))),
				q = ({
					active: e,
					label: t,
					options: s,
					optionLabels: r,
					searchOptions: i,
					tooltipId: c,
					value: d,
					...l
				}) => {
					const {
						isOpen: u,
						onClick: m
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => y(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(v.i)()) : () => s(Object(v.f)({
								tooltipId: e
							}))
						}
					})(c);
					return n.a.createElement("div", {
						className: E.a.Wrapper
					}, n.a.createElement(f.a, V({}, l, {
						active: u,
						className: Object(a.a)(E.a.filterButton, e && E.a.hasValue),
						onClick: m,
						variant: f.b.TAB_GROUP
					}), t, n.a.createElement(g.a, {
						name: "caret_down",
						className: Object(a.a)(E.a.caret, u && E.a.caretOpen)
					})), n.a.createElement("div", {
						id: c
					}, n.a.createElement(K, {
						className: E.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, s.map((e, t) => n.a.createElement(D, {
						displayText: r[e],
						key: t,
						isSelected: e === d,
						option: e,
						searchOptions: i,
						styles: {
							mIsSelected: W.a.mIsSelected,
							SelectOption: W.a.SelectOptionRedesign
						}
					})))))
				},
				G = [m.Xb.Relevance, m.Xb.Hot, m.Xb.Top, m.Xb.New, m.Xb.Comments],
				Z = {
					[m.Xb.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.Xb.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.Xb.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.Xb.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.Xb.Comments]: () => u.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const J = [m.fc.HOUR, m.fc.DAY, m.fc.WEEK, m.fc.MONTH, m.fc.YEAR, m.fc.ALL],
				X = {
					[m.fc.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.fc.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.fc.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.fc.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.fc.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.fc.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Q;
			! function(e) {
				e.SORT = "SORT", e.TIME = "TIME"
			}(Q || (Q = {}));
			const $ = [Q.SORT, Q.TIME],
				ee = {
					[Q.SORT]: e => {
						const {
							options: t,
							optionLabels: s,
							value: r
						} = h(e.queryParams, e.url, p.x, G, m.Pb, Z), o = {
							"data-testid": "search-results-filter-sort",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: r
						};
						return n.a.createElement(q, z({}, o, {
							active: Boolean(e.queryParams[p.x]),
							label: e.queryParams[p.x] ? s[r] : u.fbt._("Sort", null, {
								hk: "2COMme"
							})
						}))
					},
					[Q.TIME]: e => {
						const {
							options: t,
							optionLabels: s,
							value: r
						} = h(e.queryParams, e.url, p.B, J.slice().reverse(), m.Qb, X);
						if (!e.searchOptions || e.searchOptions.sort === m.W.NEW || e.searchOptions.sort === m.W.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: r
						};
						return n.a.createElement(q, Y({}, o, {
							active: Boolean(e.queryParams[p.B]),
							label: e.queryParams[p.B] ? s[r] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							})
						}))
					}
				};
			var te = s("./src/lib/lessComponent.tsx"),
				se = s("./src/reddit/controls/Button/index.tsx"),
				re = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				ne = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				oe = s.n(ne);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = te.a.wrapped(se.r, "TertiaryButton", oe.a), ce = te.a.wrapped(ae, "AllRedditResultsButton", oe.a), de = e => {
				const t = Object(w.b)();
				return n.a.createElement(k.a, {
					to: Object(re.a)(e.queryParams)
				}, n.a.createElement(ce, {
					onClick: () => {
						t(t => ({
							...Object(F.c)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ie._("All reddit results", null, {
					hk: "2IBCsX"
				}), n.a.createElement(g.a, {
					name: "forward"
				})))
			};
			var le = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				ue = s.n(le);
			const me = Object(i.c)({
					subreddit: l.w
				}),
				pe = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => me(t, e)), s = Object(c.eb)(), r = Object(c.V)(s), i = Object(c.db)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return n.a.createElement(d.a, {
						className: Object(a.a)(ue.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, $.map((t, s) => {
						const o = ee[t];
						return n.a.createElement(o, {
							key: s,
							queryParams: r,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: i
						})
					}), l && n.a.createElement(de, {
						queryParams: r,
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
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/trackers/searchResults.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				C = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class x extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(p.s)(!!s, e))
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
						pathname: o,
						search: l
					} = i.a.parse(s), u = t ? c.Yb.ToSubreddit : c.Yb.ToGlobal, p = t ? n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, f._("Show results from", null, {
						hk: "3aVDvz"
					})), n.a.createElement(d.b, {
						className: C.a.subredditIcon,
						subredditOrProfile: t
					}), n.a.createElement("p", {
						className: Object(a.a)(C.a.searchSwitcherText, r)
					}, t.displayText)) : n.a.createElement(n.a.Fragment, null, f._("{=Show results from}{=all of Reddit}", [f._param("=Show results from", n.a.createElement("span", null, f._("Show results from", null, {
						hk: "4l8fSw"
					}))), f._param("=all of Reddit", n.a.createElement("p", {
						className: Object(a.a)(C.a.searchSwitcherText, r)
					}, f._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return n.a.createElement(m.a, {
						className: Object(a.a)(C.a.searchSwitcher, e && C.a.redesign, r),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: u
							}
						}
					}, p, n.a.createElement(b.a, {
						name: "forward",
						className: Object(a.a)(C.a.arrowIcon, r)
					}))
				}
			}
			t.a = Object(u.c)(e => e.subreddit ? n.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, n.a.createElement(x, e)) : n.a.createElement(x, e))
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
				o = s.n(n);
			t.a = r.a.div("container", o.a)
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
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/components/SidebarFooter/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), C = Object(i.b)(h), f = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = f(C(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? n.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: m.a.LinkContainer
			}, n.a.createElement("div", {
				className: m.a.Column
			}, n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), n.a.createElement("div", {
				className: m.a.Column
			}, n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), n.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : n.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: m.a.LinkContainer
			}, n.a.createElement("div", {
				className: m.a.Column
			}, n.a.createElement(b, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(b, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(b, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(b, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(b, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(b, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), n.a.createElement(b, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: m.a.Column
			}, n.a.createElement(b, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(b, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(b, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(b, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(b, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: m.a.Copyright
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
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", n.a)
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
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: s
				}) => a.a.createElement("div", {
					className: Object(r.a)(e, m.a.container),
					style: s
				}, a.a.createElement(l.l, {
					className: m.a.button,
					onClick: () => b(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				C = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(g),
				O = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = c.e[1] + 24,
				E = f.f + 8,
				_ = E + 152 + 16,
				S = _ + j + 8,
				k = O.a.div("Container", v.a),
				w = O.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => a.a.createElement(h, y({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?E:8}px)`
					}
				}, s)), "BackToTop", v.a),
				T = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: n
				}) => a.a.createElement("div", {
					className: Object(r.a)(t, {
						[v.a.StickyStyles]: n && !s,
						[v.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class I extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
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
					}, this.handleResize = o()(() => {
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
							hideFooter: o,
							pageLayer: i
						}
					} = this, c = this.state.isAdSticky && !(!t && !r);
					return a.a.createElement(k, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(T, {
						isFakeOverlay: s,
						isSticky: c
					}, t, r, !o && a.a.createElement(C.a, null)), !this.props.hideBackToTop && a.a.createElement(w, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const L = Object(x.u)();
			t.a = L(I)
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				isPromotedBlue: "_3NAtxpywJRrKZN5zIU9vwP",
				isPromotedGrey: "V0WjfoF5BV7_qbExmbmeR"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/constants/experiments.ts");
			const u = d.a.span("Wrapper", a.a);
			t.a = ({
				className: e,
				adHeaderVariant: t,
				greyTextColor: s
			}) => {
				const n = t === l.t.PromotedGrey || t === l.t.NoLockIcon;
				return o.a.createElement(u, {
					className: Object(c.a)(e, {
						[a.a.isPromotedBlue]: t === l.t.PromotedBlue,
						[a.a.isPromotedGrey]: n
					})
				}, o.a.createElement("span", {
					style: n ? {
						color: s
					} : {}
				}, r.fbt._("promoted", null, {
					hk: "1R81m"
				})))
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => n.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => n.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, n.a.createElement(l.a, {
						href: `/r/${e}/`
					}, n.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, n.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class x extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(C.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return n.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const g = Object(b.c)(x),
				v = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				O = Object(o.b)(v),
				y = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: r,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return n.a.createElement(g, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (r) {
						case h.Ze.SmIcon:
							return n.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.Ze.SmIconHc:
							return n.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return n.a.createElement(g, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = O(y)
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
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				j = s.n(y);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 129,
				S = Object(h.u)({
					filterName: e => Object(h.V)(e)[b.g],
					url: e => Object(h.db)(e)
				}),
				k = Object(a.c)({
					subredditId: (e, t) => Object(O.C)(e, t.subredditName)
				}),
				w = Object(i.b)(k),
				T = l.a.div("WidgetContent", j.a),
				I = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: s,
					...r
				}) => o.a.createElement("li", {
					className: Object(c.a)(j.a.StyledFlair, e === v.g.Cloud && j.a.cloudDisplay, {
						[j.a.flairFilter]: t,
						[j.a["m-selected"]]: r.isSelected
					}),
					onMouseDown: s
				}, o.a.createElement(u.b, E({}, r, {
					className: j.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class L extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(g.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(g.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(g.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.e)(f.a.SearchResults), this.props.sendEvent(Object(g.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
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
					return o.a.createElement(C.r, {
						className: j.a.flairFilterButton,
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
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: j.a.flairFilterContainer,
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
					return o.a.createElement("ul", null, o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, r = t.order, n = this.getFlairsFromIds(r), i = e && this.getSelectedFlair(n) || void 0, a = t.order.length > r.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(T, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(n), a && this.renderButton()))
				}
			}
			t.a = S(w(Object(m.c)(L)))
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				j = e => {
					const t = O(e);
					return Object(x.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(E);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), w = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(C.l)(e, {
							subredditId: s
						}),
						n = Object(f.X)(e);
					return r || n
				},
				nigtmode: f.X,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class T extends n.a.Component {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: o,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? _.a.widgetContentOnly : _.a.widgetContent, C = !r && this.props.styles, f = C ? this.getWidgetBackgroundStyles() : {}, x = C ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: r,
							[_.a.clickable]: !!c,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: c,
						style: f
					}, u && n.a.createElement("div", {
						className: Object(a.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!l
						}),
						id: i,
						style: x,
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(_.a.widgetTitle, p)
					}, n.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), o), n.a.createElement("div", {
						className: Object(a.a)(h, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(w(Object(c.a)(Object(l.c)(T))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return k
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function j() {
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
			const E = j(),
				_ = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.Q)(e, t),
					loadMore: g.g,
					postsById: v.S,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: r
					}) => Object(v.E)(e, t, s, r)),
					subredditsById: O.Y,
					viewportDataLoaded: y.a,
					pageReferrer: p.T,
					postListPlaceholderComponent: () => C.a,
					isNpsScrollSurveyEnabled: x.e
				},
				S = Object(n.c)(_),
				k = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r, n) => {
						e(d.O(t, r, n))
					},
					trackOnPostExitedViewport: (t, s, r, n, o) => {
						e(d.P(t, r, n, o))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.j)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				T = (e, t, s, r) => {
					const {
						listingKey: n,
						hostPostData: o,
						listingBelowVariant: i
					} = r;
					return Object(h.h)(e, t, "post", n, o, i, void 0)
				},
				I = Object(r.b)(S, k, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: T
				}));
			t.a = e => Object(m.c)(E(I(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const i = new r.a(250),
				a = (e, t, s) => {
					const r = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const n = `${e.id}-${r}`;
						let a = i.get(n);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${r}\\b)`, "gi"),
								d = e.title.split(c);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(n, a)
						}
						return a
					}
				}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(b);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends i.a.Component {
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
					}, s = Object(a.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, C({}, t, {
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
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, C({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(f, C({
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
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				a = s.n(i);
			const c = e => n.a.createElement("span", {
				className: Object(o.a)(a.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(c, {
				className: Object(o.a)(a.a.metaSeparator, e),
				isSmall: t
			})
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
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(o);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? n.a.createElement(t, i) : void 0 !== s ? n.a.createElement(s, i) : null
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
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./src/lib/search/index.ts"),
				o = s("./src/reddit/constants/history.ts"),
				i = s("./src/reddit/helpers/history/index.ts");
			const a = (e, t, s) => {
				const a = Object(r.e)(e);
				return {
					pathname: e.pathname,
					state: {
						[o.b.SearchOriginPage]: Object(i.b)(o.b.SearchOriginPage)
					},
					search: Object(n.c)(a, t, {
						type: s
					}).replace(e.pathname + "?", "")
				}
			}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/constants/page.ts");
			const o = (e, t, s) => s || t.includes(r.Zb.Posts) ? n.h.Posts : e && t.includes(r.Zb.Users) && !t.includes(r.Zb.Subreddits) ? n.h.Authors : n.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/lib/addQueryParams/index.ts"),
				n = s("./src/lib/search/index.ts"),
				o = s("./src/reddit/constants/parameters.ts");

			function i(e, t) {
				let s = "/search",
					i = "",
					a = e && e[o.q] || "";
				t ? (a = a.replace("flair:", "flair_name:"), s = `/r/${t}/search`, i = "1") : a = a.replace("flair_name:", "flair:");
				const c = Object(r.a)(s, {
					[o.q]: a,
					[o.t]: i
				});
				return Object(n.c)(c, a, {
					[o.t]: i
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return f
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(r.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				C = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(n);
			const i = ({
					isLoading: e
				}) => Object(r.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				a = e => Object(r.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(n.b)(e) || Object(o.b)(e))) return Object(n.b)(e) ? i.SourceElement.Comment : Object(r.x)(t) ? i.SourceElement.PostDetail : Object(r.G)(t) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			}));
			var r, n, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(r || (r = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const d = e => t => ({
					source: r.collection,
					noun: n.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: r.collection,
					noun: t ? n.unfollow : n.follow,
					...m(s, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: i.a.postEvent,
					noun: t ? n.unfollow : n.follow,
					...m(s, e)
				}),
				m = (e, t) => {
					const s = {
						...c.o(e),
						action: o.c.CLICK,
						subreddit: c.hb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.I(e, t),
						postCollection: c.K(e, {
							postId: t
						}),
						postEvent: c.L(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: n.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: n.collectionEducationGotIt
				}),
				h = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: n.eventEducation
				}),
				C = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: n.eventEducationGotIt
				}),
				f = e => ({
					...c.o(e),
					subreddit: c.hb(e),
					source: r.postComposer
				}),
				x = (e, t) => s => ({
					...m(s, e),
					source: t || r.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				g = e => t => ({
					...m(t, e),
					source: r.collectionComposer,
					noun: n.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: r.collectionComposer,
					noun: n.collectionCancel
				}),
				O = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: r.collectionComposer,
						noun: n.collectionCreate
					}
				},
				y = () => e => ({
					...m(e),
					source: r.collectionComposer,
					noun: n.collectionSelect
				}),
				j = e => t => ({
					...c.o(t),
					subreddit: c.hb(t),
					source: r.collectionComposer,
					action: o.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...m(t),
					source: r.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...m(t, e),
					source: r.collectionComposer,
					noun: n.startEvent
				}),
				S = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: r.collectionComposer,
						action: o.c.VIEW,
						noun: n.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(r || (r = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: r.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.hb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: r.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.hb(e),
						postEvent: v(e),
						postComposer: O(e)
					})
				},
				C = () => e => ({
					source: r.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...E(t, Object(d.o)(t)),
					source: r.postComposer,
					noun: "apply",
					postComposer: y(e)
				}),
				x = () => e => ({
					...E(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				g = e => t => ({
					...E(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: O(t),
					postEvent: j(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && j(t)
				},
				O = e => y(Object(l.p)(e)),
				y = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Rb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Rb,
						s = Object(i.f)(e.endDate).getTime() / n.Rb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				E = (e, t) => {
					const s = {
						source: r.eventComposer,
						action: a.c.CLICK,
						subreddit: u.hb(e)
					};
					return t ? {
						...s,
						post: u.I(e, t),
						postEvent: u.L(e, {
							postId: t
						}),
						postCollection: u.K(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return y
			}));
			var r, n, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(n || (n = {}));
			const m = e => ({
					...u.o(e),
					source: n.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: n,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: r
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {
						outbound: void 0
					};
					const n = Object(a.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[n]: s.id
						},
						d = Object(l.w)(e, {
							subredditName: r
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {};
					const r = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.I(e, s.id),
						subreddit: u.ib(e, r),
						...b(e, t)
					}
				},
				C = e => t => ({
					...m(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.jb(t, e),
					screen: u.ab(t)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: u.I(s, t),
					subreddit: u.jb(s, e),
					screen: u.ab(s)
				}),
				g = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: u.I(s, t),
					subreddit: u.jb(s, e),
					screen: u.ab(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var r, n, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(i.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: n.POST,
					action: o.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: i.I(s, e),
					subreddit: i.hb(s),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: n.SIDEBAR,
					action: o.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: r.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), n.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				u = s.n(l),
				m = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(m);
			t.a = ({
				backgroundColor: e,
				className: t,
				containerRef: s,
				content: l,
				navBar: m,
				redditStyle: b,
				sidebar: h,
				subredditId: C
			}) => {
				const f = Object(r.useContext)(c.a),
					x = Boolean(h);
				return n.a.createElement(i.a, {
					subredditId: C
				}, n.a.createElement("div", {
					className: Object(o.a)(u.a.outerContainer, a.i, t, {
						[u.a.outerContainerExp]: f
					}),
					ref: s
				}, n.a.createElement(d.a, {
					className: a.h,
					redditStyle: b,
					backgroundColor: e
				}), n.a.createElement("div", {
					className: u.a.innerContainer
				}, n.a.createElement("div", {
					className: p.a.bodyContainer
				}, n.a.createElement("div", {
					className: p.a.contentContainer
				}, n.a.createElement("div", {
					className: p.a.navContent
				}, m), n.a.createElement("div", {
					className: Object(o.a)(p.a.content, x && p.a.withSidebar)
				}, n.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, x && p.a.withSidebar)
				}, l), x && n.a.createElement("div", {
					className: p.a.sidebarContent
				}, h)))))))
			}
		},
		"./src/reddit/models/Audio/index.ts": function(e, t, s) {
			"use strict";
			var r, n;

			function o(e) {
				return Boolean(e.audioRoom)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(r || (r = {})),
				function(e) {
					e[e.NotAvailable = 0] = "NotAvailable", e[e.Processing = 1] = "Processing", e[e.Available = 2] = "Available", e[e.Removed = 3] = "Removed"
				}(n || (n = {}))
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT"
				}(r || (r = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, o, i;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/redesign.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return q
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/actions/correlationId/index.tsx"),
				p = s("./src/reddit/actions/survey/index.ts"),
				b = s("./src/reddit/components/JumpToContent/index.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/redesign.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				f = s("./src/reddit/components/SearchResultsNav/redesign.tsx"),
				x = s("./src/reddit/components/SearchResultsSidebar/redesign.tsx"),
				g = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				v = s("./src/reddit/constants/covid.ts"),
				O = s("./src/reddit/constants/page.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/search/searchTabType.ts"),
				S = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				k = s("./src/reddit/helpers/trackers/searchResults.ts"),
				w = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				T = s("./src/reddit/hooks/useTheme.ts"),
				I = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				L = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/selectors/correlationId.ts"),
				N = s("./src/reddit/selectors/searchFix.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				A = s("./src/reddit/pages/SearchResults/index.m.less"),
				H = s.n(A);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 3e3,
				W = Object(r.a)({
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
				V = {
					[O.h.Listings]: {
						tab: O.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.Authors]: {
						tab: O.h.Authors,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.Posts]: {
						tab: O.h.Posts,
						sidebar: !0,
						filterNav: !0
					}
				},
				K = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(e => Object(P.a)(e, E.a.SearchResults));
					Object(i.useEffect)(() => {
						t ? (Object(E.d)(E.a.SearchResults, t), e(Object(m.d)({
							key: E.a.SearchResults
						}))) : Object(E.c)(E.a.SearchResults) || Object(E.e)(E.a.SearchResults)
					}, [])
				};

			function q({
				location: e,
				match: t
			}) {
				const s = Object(c.d)(),
					r = Object(j.eb)(),
					n = Object(F.b)(),
					m = Object(T.a)(),
					P = Object(i.useRef)(!1),
					A = Object(c.e)(e => Object(R.w)(e, {
						subredditName: t.params.subredditName
					})),
					q = Object(c.e)(e => Object(C.a)(e, {
						pageLayer: r
					})),
					G = Object(c.e)(e => Object(N.c)(e, {
						pageLayer: r
					})),
					Z = Object(c.e)(B.c),
					z = Object(j.V)(r),
					J = Object(j.bb)(r),
					[X, Y] = Object(i.useState)(!1),
					Q = Object(l.a)(z) || null;
				K(), Object(w.b)(), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => s(Object(p.h)()), U), () => {
						Object(E.b)(E.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					z !== Q && (P.current = !1, Y(!1)), z && Q && z[y.q] !== Q[y.q] && (Object(E.b)(E.a.SearchResults), Object(E.e)(E.a.SearchResults))
				}, [z, Q]);
				const $ = t.params.subredditName || t.params.multiredditName || "",
					ee = t.params.username,
					te = Object(u.e)(o()(z || {}, y.u), Z),
					se = A && te.restrict_sr,
					re = Object(_.a)(Z, te.type, se),
					ne = {
						...te,
						type: Object(B.a)(Z, te.type)
					},
					oe = Object(u.b)($, ee, ne),
					ie = {
						...ne,
						type: Z ? [d.Zb.Posts, d.Zb.Subreddits, d.Zb.Users] : [d.Zb.Subreddits, d.Zb.Users]
					},
					ae = Object(u.b)($, ee, ie),
					ce = {
						redesign: !0,
						searchOptions: ne
					};
				let de;
				Object(j.O)(r) || Object(j.B)(r) ? de = a.a.createElement(g.a, D({}, ce, {
					url: Object(S.a)(z)
				})) : q && G && (de = a.a.createElement(g.a, D({}, ce, {
					subreddit: q,
					url: Object(S.a)(z, q.name)
				})));
				const le = V[re].tab,
					ue = V[re].sidebar,
					me = V[re].filterNav,
					pe = Object(L.a)({
						redditStyle: !0,
						theme: m
					});
				return a.a.createElement(I.a, {
					backgroundColor: pe.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, null), J && !X && (() => {
						const e = e => n(Object(k.b)(e, Object(u.e)(o()(z || {}, y.u))));
						return P.current || (e("view"), P.current = !0), a.a.createElement(W, {
							announcement: v.a,
							className: H.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), Y(!0)
							}
						})
					})(), a.a.createElement(h.a, {
						listingKey: oe,
						listingName: $,
						location: e,
						searchOptions: ne,
						tab: le
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(f.a, {
						activeTab: le,
						location: e,
						searchOptions: ne,
						searchSwitcher: de
					}), me && a.a.createElement(M.a, {
						key: "subNav",
						searchOptions: te,
						shouldHideGlobalSearchLink: !0,
						subredditName: $,
						tab: le
					}), de && a.a.createElement("div", {
						className: H.a.searchSwitcherContainer
					}, de)),
					sidebar: ue && a.a.createElement(x.a, {
						className: H.a.sidebar,
						listingKey: ae,
						listingName: $ || O.c,
						location: e,
						searchOptions: ie,
						tab: le
					})
				})
			}
		},
		"./src/reddit/selectors/correlationId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => e.correlationId[t]
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "x", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "z", (function() {
				return E
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "j", (function() {
				return T
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "r", (function() {
				return M
			})), s.d(t, "y", (function() {
				return F
			})), s.d(t, "u", (function() {
				return B
			})), s.d(t, "v", (function() {
				return A
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "s", (function() {
				return U
			})), s.d(t, "t", (function() {
				return W
			})), s.d(t, "g", (function() {
				return V
			})), s.d(t, "m", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				o = s("./src/reddit/helpers/richTextJson/index.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/commentSelector.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts"),
				b = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const h = [],
				C = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				f = (e, t) => {
					const s = C(e, t);
					return s && s.endsAt || null
				};
			var x;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(x || (x = {}));
			const g = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const s = f(e, t),
							r = Date.now();
						return s && r < s ? x.Subscribed : x.NotSubscribed
					}
					return x.DontKnow
				},
				v = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[a.a.Loyalty]: r.find(e => e.placement === i.a.First),
							[a.a.Achievement]: r.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const y = (e, t, s) => {
					var n;
					if (!r.d.spBadges(e)) return h;
					return O(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				j = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === u.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function _(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(s) && s.userId === n) return s;
				const o = e.badges.models,
					a = e.user.ownedBadges[r] || {},
					c = Object(i.e)(s) ? s.type : s.id;
				return Object.keys(a).map(e => o[e]).find(e => e && e.type === c)
			}

			function S(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					if (s === a.a.Loyalty || s === a.a.Achievement) return n.data.collections[s];
					if (s === a.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return h
			}

			function k(e, t) {
				const s = S(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function w(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					const e = s.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return h
			}

			function T(e, t) {
				return S(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const I = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var L;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(L || (L = {}));
			const P = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				R = (e, t) => {
					if (!t) return {};
					const s = P.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = C(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				M = (e, t) => {
					var s, r, n, o;
					const i = (null === (o = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || P;
					return {
						prices: R(e, t),
						member: i.member || P.member,
						memberPlural: i.memberPlural || P.memberPlural,
						memberAlt: i.memberAlt || P.memberAlt,
						memberAltPlural: i.memberAltPlural || P.memberAltPlural,
						membership: i.membership || P.membership,
						membershipAlt: i.membershipAlt || P.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				A = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				H = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				U = (e, t, s) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== s && Object(m.b)(e, {
						commentId: s
					});
					return !(!r || !Object(o.a)(r))
				},
				W = (e, t, s) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== s && Object(m.b)(e, {
						commentId: s
					});
					if (n && Object(o.b)(n)) return !0;
					const i = r.d.spGiphy(e),
						a = D(e, t);
					return !(!i || !a) || i && a
				},
				V = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/adHeaderExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(r.a)(e => Object(o.c)(e, {
				experimentName: n.pb,
				experimentEligibilitySelector: o.a
			}), e => e)
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
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.R)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const s = p(e, t);
					if (!s) return u;
					const r = Object(i.V)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.R)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, r, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							i = n && Object(o.H)(e, {
								postId: r
							}) || null,
							a = n && Object(o.H)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				h = [3],
				C = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const r = t.slice().sort();
					let n = -1;
					const i = Object(o.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !b(e, s, t, i, r);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx");
			const i = {},
				a = ({
					pageLayer: e
				}) => e && e.locationState || i,
				c = Object(r.a)((e, t) => a(t), e => e.fromPage && e.fromPage.subredditName),
				d = Object(r.a)((e, t) => a(t), e => e.fromPage && e.fromPage.routeName),
				l = ({
					pageLayer: e
				}) => e && e.locationState && e.locationState.searchSwitcherType,
				u = Object(r.a)(d, (e, {
					pageLayer: t
				}) => Object(o.A)(t), (e, t) => t && (e === n.Mb.COMMENTS || e === n.Mb.SUBREDDIT))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(o.c)(e, {
					experimentName: n.te,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === n.Ce.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(r.a)(i.H, a, (e, t) => c(e, t));
			Object(r.a)((e, t) => t, a, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => n.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.Te
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Ze.SmIcon || t === r.Ze.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(i.V)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
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
			e.exports = JSON.parse('{"id":"07269d01f4b6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.0c9867b10d3d77316ae8.js.map