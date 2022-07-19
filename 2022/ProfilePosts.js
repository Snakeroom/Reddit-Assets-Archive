// https://www.redditstatic.com/desktop2x/ProfilePosts.6a24c215d560ef6537b6.js
// Retrieved at 7/19/2022, 12:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function s(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var n, i = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						g = !o && !u && !m && !p && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = r(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: v || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: v || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (n.msedge = e, n.version = x) : (n.msie = e, n.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, v && (n.version = v)) : i ? (n = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (n.version = v)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: r(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && v && (n.version = v)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || r(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && i ? (n[i] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : E ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var O = "";
					n.windows ? O = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? O = (O = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? O = (O = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? O = r(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = r(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = r(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
					var _ = !n.windows && O.split(".")[0];
					return y || d || "ipad" == i || o && (3 == _ || _ >= 4 && !w) || n.silk ? n.tablet = e : (w || "iphone" == i || "ipod" == i || o || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var r, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) s.push(t(e[r]));
					return s
				}

				function i(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), r = n(e, (function(e) {
							var r = t - s(e);
							return n((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, s, n) {
					var o = r;
					"string" == typeof s && (n = s, s = void 0), void 0 === s && (s = !1), n && (o = t(n));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return s
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = o, r.compareVersions = i, r.check = function(e, t, r) {
					return !o(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = s() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
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
					var r = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var i = n.element,
								o = a(i),
								d = this._rootContainsTarget(i),
								c = n.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, r),
								u = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: r,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(r, s) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var n, i, o, d, l, u, m, p, h = a(r), b = c(r), f = !1; !f;) {
								var g = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (f = !0, g = s) : b != t.body && b != t.documentElement && "visible" != x.overflow && (g = a(b)), g && (n = g, i = h, o = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(n.top, i.top), d = Math.min(n.bottom, i.bottom), l = Math.max(n.left, i.left), u = Math.min(n.right, i.right), p = d - o, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: o,
										bottom: d,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = c(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var r = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || s.clientWidth,
								width: r.clientWidth || s.clientWidth,
								bottom: r.clientHeight || s.clientHeight,
								height: r.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, r) {
								return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
							})),
							r = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var i = this.thresholds[n];
								if (i == r || i == s || i < r != i < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = s
				}

				function s(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						r = t.width * t.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = r ? n / r : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var r, s, n, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							r(), n = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, r, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function o(e, t, r, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (r) {}
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

				function d(e, t) {
					for (var r = t; r;) {
						if (r == e) return !0;
						r = c(r)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, s, n) {
				return n(e, (function(e, n, i) {
					r = s ? (s = !1, e) : t(r, e, n, i)
				})), r
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseClamp.js"),
				n = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = n(r)) == r ? r : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), s(n(e), t, r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayReduce.js"),
				n = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var d = a(e) ? s : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), r, c, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseTimes.js"),
				n = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var r = a,
					c = d(e, a);
				t = n(t), e -= a;
				for (var l = s(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var n = r ? r.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < i.length; d++) {
					var c = i[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (n = r ? r.call(s, l, u, c) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => {
					let t = 0,
						r = 0;
					const s = [0];
					for (const n of e) t++, r += n.length, s[t] = r;
					return s
				},
				n = e => {
					let t = 0,
						r = 0;
					const s = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) s[r] = t, r++;
						t++
					}
					return s[r] = t, s
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "b", (function() {
				return S
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/performanceTimings/index.tsx"),
				o = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var c, l = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(o.g),
				f = Object(n.a)(o.e),
				g = Object(n.a)(o.h),
				x = Object(n.a)(o.c),
				v = Object(n.a)(o.f),
				y = Object(n.a)(o.j),
				w = Object(n.a)(o.i),
				E = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const i = t(),
						o = Object(m.e)(i),
						c = Object(m.d)(i),
						p = Object(h.P)(i);
					if (o || !c) return;
					e(g());
					let v = !1;
					try {
						const t = p ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, r) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (O(t)) {
								if (_(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
								} else if (j(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: n,
											category: i
										} = r.focusRecommendations[0],
										o = [s, n],
										a = Object(u.d)(o),
										d = Object(l.b)(o),
										c = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(m)), v = !0
								}
							} else v = !1
						}
					} catch (y) {
						v = !1
					}
					v || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						s = t && t.type;
					return !!(r && !_(e) && s === c.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, S = () => async (e, t, r) => {
					var s, n;
					const o = t(),
						a = Object(m.g)(o);
					if (Object(m.f)(o) || null === a || "client" === a) {
						const r = null === (n = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.Q)(o);
						return Object(i.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "privateListingPending", (function() {
				return N
			})), r.d(t, "privateMixedListingLoaded", (function() {
				return R
			})), r.d(t, "privatePostListingLoaded", (function() {
				return M
			})), r.d(t, "privateListingFailed", (function() {
				return B
			})), r.d(t, "profilePrivateRequested", (function() {
				return F
			})), r.d(t, "morePending", (function() {
				return D
			})), r.d(t, "moreMixedLoaded", (function() {
				return G
			})), r.d(t, "morePostLoaded", (function() {
				return H
			})), r.d(t, "moreFailed", (function() {
				return V
			})), r.d(t, "moreProfilePrivateRequested", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/externalAccount.ts"),
				i = r("./src/reddit/actions/pages/profileShared.ts"),
				o = r("./src/reddit/actions/profile/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/ProfileDownvoted.json"),
				c = r("./src/redditGQL/operations/ProfileGivenGildings.json"),
				l = r("./src/redditGQL/operations/ProfileHidden.json"),
				u = r("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				m = r("./src/redditGQL/operations/ProfileSaved.json"),
				p = r("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = r("./src/reddit/models/Comment/index.ts"),
				b = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/models/Profile/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var j = e => {
					const {
						listingType: t,
						rawData: r,
						includeIdentity: s,
						includeModerated: n
					} = e, {
						identity: i
					} = r, o = (e => {
						const t = {
							account: null,
							authorFlair: {},
							moderatedPageInfo: void 0,
							moderatedSubredditIds: void 0,
							postFlair: {},
							posts: {},
							preferences: void 0,
							profiles: {},
							pageInfo: void 0,
							subreddits: {},
							itemIds: []
						};
						return e !== f.b.Saved && e !== f.b.ReceivedGildings && e !== f.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!i) return o;
					if (s && (o.account = Object(_.a)(i) || null, o.preferences = Object(w.a)(i.preferences, i.interactions) || null, i.redditor.profile && (o.profiles[i.redditor.profile.id] = Object(E.a)(i.redditor.profile))), n && i.redditor && i.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: r
						} = Object(E.b)(i.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = r
					}
					const a = ((e, t) => {
						switch (t) {
							case f.b.Downvoted:
								return e.identity.downvotedPosts;
							case f.b.Hidden:
								return e.identity.hiddenPosts;
							case f.b.Saved:
								return e.identity.saved;
							case f.b.Upvoted:
								return e.identity.upvotedPosts;
							case f.b.ReceivedGildings:
								return e.identity.receivedGildings;
							case f.b.GivenGildings:
								return e.identity.givenGildings
						}
					})(r, t);
					if (!a) return o;
					o.pageInfo = a.pageInfo;
					for (const {
							node: d
						} of a.edges) {
						let e;
						if (d.__typename === h.d.Comment) {
							const t = Object(g.a)(d);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), d.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(x.a)(d.authorFlair)[0]), e = d.postInfo, d.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(y.a)(d.postInfo);
								o.posts[e.id] = e, t && (o.posts[t.id] = t)
							}
						} else e = d, o.itemIds || (o.itemIds = []), o.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: r
						} = e && Object(y.a)(e);
						o.posts[t.id] = t, r && (o.posts[r.id] = r), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(x.a)(e.authorFlair)[0]), Object(b.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(E.a)(e.profile)) : Object(b.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(O.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(v.a)(e.subreddit))))
					}
					return o
				},
				S = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				k = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				C = r("./src/lib/initializeClient/installReducer.ts"),
				I = r("./src/reddit/reducers/features/comments/index.ts");
			Object(C.a)({
				features: {
					comments: I.a
				}
			});
			const T = {
					[f.b.Downvoted]: (e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}),
					[f.b.Hidden]: (e, t) => Object(a.a)(e, {
						...l,
						variables: t
					}),
					[f.b.Saved]: (e, t) => Object(a.a)(e, {
						...m,
						variables: t
					}),
					[f.b.Upvoted]: (e, t) => Object(a.a)(e, {
						...p,
						variables: t
					}),
					[f.b.ReceivedGildings]: (e, t) => Object(a.a)(e, {
						...u,
						variables: t
					}),
					[f.b.GivenGildings]: (e, t) => Object(a.a)(e, {
						...c,
						variables: t
					})
				},
				P = (e, t) => {
					switch (e) {
						case f.b.Downvoted:
						case f.b.Hidden:
						case f.b.Saved:
						case f.b.Upvoted:
						case f.b.ReceivedGildings:
						case f.b.GivenGildings:
							return t.body.data
					}
				},
				L = e => {
					switch (e.listingType) {
						case f.b.Downvoted:
						case f.b.Hidden:
						case f.b.Saved:
						case f.b.Upvoted:
						case f.b.ReceivedGildings:
						case f.b.GivenGildings:
							return j(e)
					}
				},
				N = Object(s.a)(k.b),
				R = Object(s.a)(k.c),
				M = Object(s.a)(k.i),
				B = Object(s.a)(k.a),
				F = e => async (t, r, s) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, c = r(), l = Object(S.c)(a.toLowerCase(), d), u = c.profilePrivatePage.ids[l] && c.profilePrivatePage.ids[l].length > 0, m = !!c.profilePrivatePage.api.error[l];
					if (c.profilePrivatePage.api.pending[l] || u && !m) return;
					const {
						account: p
					} = c.user, h = !p, b = !(p && p.displayText && c.profiles.moderated.models[p.displayText.toLowerCase()] && c.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(N({
						listingKey: l
					}));
					const g = {
							includeIdentity: h,
							includeModerated: b,
							first: k.h,
							after: null
						},
						x = await T[d](s.gqlContext(), g);
					if (x.ok && x.body) {
						const e = L({
							rawData: P(d, x),
							listingType: d,
							includeIdentity: h,
							includeModerated: b
						});
						d === f.b.Saved || d === f.b.ReceivedGildings || d === f.b.GivenGildings ? await t(R({
							listingKey: l,
							profileName: a,
							...e
						})) : await t(M({
							listingKey: l,
							profileName: a,
							...e
						})), await Promise.all([t(Object(i.d)(a)), t(Object(n.o)(a)), t(Object(o.d)(a))])
					} else t(B({
						listingKey: l,
						error: x.error
					}))
				}, D = Object(s.a)(k.f), G = Object(s.a)(k.e), H = Object(s.a)(k.g), V = Object(s.a)(k.d), A = e => async (t, r, s) => {
					const n = r(),
						i = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!i) return;
					const o = Object(S.c)(i, e);
					if (!n.profilePrivatePage.ids[o] || !n.profilePrivatePage.ids[o].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[o].hasNextPage || n.profilePrivatePage.api.error[o] || n.profilePrivatePage.api.pending[o]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[o].endCursor,
						first: k.h
					};
					t(D({
						listingKey: o
					}));
					const d = await T[e](s.gqlContext(), a);
					if (d.ok && d.body) {
						const r = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === f.b.Saved || e === f.b.ReceivedGildings || e === f.b.GivenGildings ? await t(G({
							listingKey: o,
							profileName: i,
							...r
						})) : await t(H({
							listingKey: o,
							profileName: i,
							...r
						}))
					} else t(V({
						listingKey: o,
						error: d.error
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/BackToTop/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: r,
					style: s
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(t, c.a.container),
					style: s
				}, n.a.createElement(a.l, {
					className: c.a.button,
					onClick: () => u(r)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, r) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				a = r.n(o),
				d = r("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(a.a.container, t)
				}, n.a.createElement("div", {
					className: a.a.innerContainer
				}, c._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), n.a.createElement(d.a, null)))
			}
		},
		"./src/reddit/components/CreatorStats/Icon.m.less": function(e, t, r) {
			e.exports = {
				icon: "D7SJKwX8OlPkNjhgXO71s"
			}
		},
		"./src/reddit/components/CreatorStats/Icon.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/icons.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				c = r("./src/reddit/components/CreatorStats/helpers.ts"),
				l = r("./src/reddit/components/CreatorStats/Icon.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: r
				} = e;
				const l = Object(o.e)(e => r ? Object(d.U)(e, {
						subredditId: r
					}) : void 0),
					[m, p] = Object(n.useState)(!0);
				return Object(n.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const r = Object(c.e)(t);
						e = e && !r
					}
					if (void 0 !== l) {
						const t = l.isQuarantined;
						e = e && !t
					}
					p(e)
				}, [t, l]), i.a.createElement(a.a, {
					name: s.a.statistics,
					className: m ? u.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(n.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/PostList/index.tsx"),
				n = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(s.a)
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/reddit/components/Media/index.m.less"),
				a = r.n(o);
			const d = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: r
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, r)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, r) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/forceHttps/index.ts"),
				l = r("./src/reddit/constants/tracking.ts"),
				u = r("./src/reddit/models/Media/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = r.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					r = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), n.a.createElement("iframe", {
					className: Object(d.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: r,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return k
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/forceHttps/index.ts"),
				u = r("./src/lib/opener/index.ts"),
				m = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = r("./src/reddit/components/Media/BlurredContent.tsx"),
				h = r("./src/reddit/components/PlayButton/index.tsx"),
				b = r("./src/reddit/constants/elementClassNames.ts"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				x = r("./src/reddit/hooks/useClickSourceData.ts"),
				v = r("./src/reddit/models/Media/index.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				w = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/constants/tracking.ts"),
				_ = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				j = r.n(_);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * v.e,
				C = e => {
					const t = Object(c.a)(j.a.image, b.g, e.className, {
							[j.a.mShowCentered]: e.showCentered,
							[j.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					return e.showFull || e.isTall || (r.maxHeight = `${v.j}px`), e.isListing || e.isTall && k(e.height) || (r.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: r
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(j.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(o.b)(() => Object(d.a)(y.F, E.jb, (e, t) => {
					let {
						isSponsored: r,
						postId: s
					} = t;
					return r && s ? Object(y.b)(e, s) : null
				}, w.d, y.G, (e, t, r, s, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					pageType: s.pageType,
					post: n
				})));
			t.a = T(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const P = (e, t) => i.a.createElement(C, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[O.a]: !e
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
				L = e => {
					let {
						onClick: t,
						...r
					} = e;
					const n = Object(v.L)(r.height, r.width),
						o = k(r.height) && n;
					return i.a.createElement(I, S({}, r, {
						className: `${n?`${O.a} `:""}${r.className||""}`
					}), r.isListing ? i.a.createElement("div", {
						className: r.contentImageClassName
					}, P(n, r)) : i.a.createElement("a", {
						href: r.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: j.a.imageLink
					}, P(n, r), r.shouldBlur && !r.isVideoThumbnail && !r.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!r.isNSFW,
						isSpoiler: !!r.isSpoiler
					})), r.isListing && !r.showFull && r.height > v.j && Object(v.L)(r.height, r.width) && i.a.createElement("div", {
						className: j.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), r.isVideoThumbnail && i.a.createElement(h.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/forceHttps/index.ts"),
				a = r("./src/reddit/models/Media/index.ts"),
				d = r("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = r.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const r = {
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
					s = e.blurSrc ? n.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : r
				}, s, !e.isGalleryTileLayout && n.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), n.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
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
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			}));
			var s = r("./node_modules/lodash/throttle.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./node_modules/@reddit/adblock-detection/browser.js"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/video.ts"),
				m = r("./src/reddit/constants/tracking.ts"),
				p = r("./src/reddit/models/Media/index.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var x = r("./src/lib/forceHttps/index.ts"),
				v = r("./src/lib/hooks/usePrevious.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function w(e) {
				let {
					autoplay: t,
					isListing: r,
					isNotCardView: s,
					onBufferingChange: n,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(i.useRef)(),
					h = Object(i.useRef)(),
					b = Object(v.a)(d);

				function w(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (w(!d && (t || s)), h.current && n) return p.current = function(e, t) {
						let r = !1,
							s = !1;
						const n = () => r = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", n), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !r) return void(a = d);
							const n = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + g ? o = !0 : o && d >= a && d > a + g && (o = !1), a = d, n !== o && t(o)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", n)
						}
					}(h.current, n), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					b !== d && w(!d && (t || s))
				}, [b, d, t, s]), o.a.createElement("video", y({}, m, {
					ref: e => h.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var E = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = r.n(E);
			const _ = Object(d.c)({
				autoplayPref: h.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function j(e) {
				const {
					autoplayPref: t,
					consumed: r,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(a.e)(t => _(t, e)), {
					postId: h,
					shouldLoad: b,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: v,
					shouldPause: y,
					width: E,
					isListing: j,
					className: S,
					showCentered: k,
					originalSource: C,
					isPromoted: I
				} = e, T = t && !(I && Object(c.hasAcceptableAds)()), P = Object(a.d)();

				function L(e) {
					P(e ? Object(u.r)(h) : Object(u.E)(h))
				}

				function N() {
					return P(Object(u.z)({
						postId: h
					}))
				}
				const R = n()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(h))
				}, 200);

				function M(e) {
					e.persist(), R(e)
				}

				function B(e) {
					var t;
					(i || D(e), d) || (t = e.timeStamp, P(Object(u.A)(h, t)))
				}

				function F(e) {
					P(Object(u.q)(h, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						P(Object(u.D)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function G(e) {
					s || B(e), i || D(e), P(Object(u.C)(h))
				}

				function H() {
					const e = {};
					return k && (e.margin = "0 auto"), j || (e.maxHeight = `${p.e}px`), o.a.createElement(w, {
						autoplay: T,
						className: Object(l.a)(m.a, O.a.styledVideo),
						height: g,
						isListing: j,
						isNotCardView: x,
						key: h,
						loop: !0,
						onBufferingChange: L,
						onLoadStart: F,
						onLoadedData: B,
						onLoadedMetadata: D,
						onPause: N,
						onPlaying: G,
						onTimeUpdate: M,
						shouldLoad: b,
						shouldPause: y,
						showCentered: k,
						showFull: v,
						source: f,
						style: e,
						width: E
					})
				}
				return j ? H() : o.a.createElement("div", {
					className: Object(l.a)(O.a.container, S, {
						[O.a.centered]: k
					})
				}, o.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = r("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = r.n(m);
			const h = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: r => {
							((e, t, r, s, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const r = e.target.getAttribute("href");
									n && s(r, n), t(r)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), r && r(e)
							})(r, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, r) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, r) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: r,
						...s
					} = e;
					return i.a.createElement(x, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: r
						})
					}))
				}, "SpoilerWrapper", u.a),
				y = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class w extends i.a.Component {
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
					return i.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = w
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, r) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "x", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "w", (function() {
				return N
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/controls/OutboundLink/index.tsx"),
				o = r("./src/reddit/components/RichTextJson/elements.m.less"),
				a = r.n(o),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				h = d.a.blockquote("Blockquote", a.a),
				b = d.a.p("P", a.a),
				f = d.a.li("Li", a.a),
				g = d.a.ul("Ul", a.a),
				x = d.a.ol("Ol", a.a),
				v = d.a.strong("B", a.a),
				y = d.a.em("I", a.a),
				w = d.a.span("U", a.a),
				E = e => n.a.createElement("del", e),
				O = d.a.sub("Sub", a.a),
				_ = d.a.sup("Sup", a.a),
				j = d.a.table("Table", a.a),
				S = d.a.tr("Tr", a.a),
				k = d.a.td("Tdl", a.a),
				C = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				T = d.a.th("Thl", a.a),
				P = d.a.th("Thc", a.a),
				L = (d.a.th("Thr", a.a), d.a.wrapped(e => n.a.createElement(i.b, e), "A", a.a)),
				N = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return _
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "b", (function() {
				return k
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/findLastIndex.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/components/Media/BlurredContent.tsx"),
				m = r("./src/reddit/constants/elementClassNames.ts"),
				p = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = r("./src/reddit/models/RichTextJson/index.ts"),
				f = r("./src/reddit/components/RichTextJson/media.tsx"),
				g = r("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = r("./src/reddit/components/RichTextJson/index.m.less"),
				v = r.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = r("./src/lib/lessComponent.tsx").a.div("Container", v.a),
				E = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: r,
						...s
					} = e;
					return a.a.createElement(w, y({}, s, {
						style: {
							color: Object(h.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: r,
								...s
							}))
						}
					}))
				}),
				O = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				_ = e => i()(e, O),
				j = e => e.findIndex(O),
				S = e => {
					const {
						altText: t,
						className: r,
						content: s,
						isListing: n,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: h,
						rtJsonElementProps: x,
						useExplicitTextColor: y,
						shouldBlur: O
					} = e, S = s.document, k = [], C = e.mediaMetadata || null, I = j(S), T = _(S);
					if (O && !n && !o) return a.a.createElement(w, {
						className: Object(d.a)(m.j, r)
					}, a.a.createElement("div", {
						className: v.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: v.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== I)
						for (let a = I; a <= T; a++) {
							const e = S[a];
							switch (e.e) {
								case b.k:
									k.push(g.c(e, x, a));
									break;
								case b.l:
									k.push(g.d(a));
									break;
								case b.b:
									k.push(g.a(e, C, x, a));
									break;
								case b.c:
									k.push(g.b(e, a));
									break;
								case b.p:
									k.push(g.f(e, C, x, a));
									break;
								case b.z:
									k.push(g.h(e, C, x, a));
									break;
								case b.u:
									k.push(g.g(e, C, x, a));
									break;
								case b.h:
									k.push(Object(f.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									k.push(...Object(f.b)(e, a, x, C, h, p, t))
							}
						}
					return y ? a.a.createElement(w, {
						className: Object(d.a)(m.j, r)
					}, k) : a.a.createElement(E, {
						className: Object(d.a)(m.j, r),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, k)
				};
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return S(t)
					} catch (r) {
						return this.hasError = !0, this.logError(r), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, r) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return T
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = r("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = r("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = r("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = r("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = r("./src/reddit/helpers/isComment.ts"),
				h = r("./src/reddit/helpers/richTextJson/index.ts"),
				b = r("./src/reddit/models/RichTextJson/index.ts");
			var f = e => i.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, i.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), i.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), i.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), i.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), i.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), i.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				g = r("./src/reddit/components/RichTextJson/elements.tsx"),
				x = r("./src/reddit/components/RichTextJson/media.m.less"),
				v = r.n(x),
				y = r("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				O = y.a.wrapped(g.a, "A", v.a),
				_ = y.a.wrapped(l.a, "ImageBox", v.a),
				j = y.a.wrapped(e => i.a.createElement("p", e), "Caption", v.a),
				S = y.a.div("Placeholder", v.a),
				k = y.a.wrapped(e => {
					let {
						className: t,
						e: r,
						...n
					} = e;
					const o = r === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(S, w({
						className: t,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, n))
				}, "Placeholder", v.a),
				C = (e, t) => {
					let {
						c: r,
						x: s,
						y: n
					} = e;
					return i.a.createElement("div", {
						className: v.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: n,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: r,
						height: n,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				I = (e, t, r) => {
					const s = e.c;
					let n = "";
					return r && (r.e === b.s ? n = r.s.u : r.e === b.r ? n = r.s.gif : r.e === b.t && (n = (e => {
						const t = E.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), n ? i.a.createElement(O, {
						href: n,
						key: t,
						title: s
					}, s || n) : null
				},
				T = (e, t, r, s, n, a, c) => {
					const l = b.E(s, e.id);
					if (n) return [I(e, t, l)];
					const g = [];
					return l ? l.e === b.s ? g.push(((e, t, r, s) => {
						let {
							id: n,
							s: a
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, i.a.createElement(_, {
							altText: s,
							originalSource: a.u,
							postId: n,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(l, t, !!e.c, c)) : l.e === b.r ? g.push(((e, t, r, s) => {
						let {
							id: n,
							ext: a,
							s: d
						} = e;
						if (Object(h.g)(n)) {
							const e = s.renderingObjectInfo,
								c = !!e && Object(p.b)(e),
								l = a || Object(h.f)(n);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[v.a.MediaWrapper]: !c,
									[v.a.CommentGifWrapper]: c,
									[v.a.mHasCaption]: r
								})
							}, i.a.createElement(O, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? i.a.createElement("video", {
								className: v.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: d.mp4
							})) : {
								originalSource: l
							}), i.a.createElement(f, {
								className: v.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: n,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, r)) : l.e === b.t && g.push(((e, t, r, s) => {
						let {
							hlsUrl: n,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, i.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: n,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(l, t, !!e.c, a)) : g.push(((e, t) => i.a.createElement(k, {
						e,
						key: t
					}))(e.e, t)), e.c && g.push(((e, t) => i.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return L
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "i", (function() {
				return H
			})), r.d(t, "e", (function() {
				return V
			}));
			var s = r("./src/lib/unicodeUtils/index.ts"),
				n = r("./node_modules/lodash/reduce.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/reddit/components/RichTextJson/elements.tsx"),
				c = r("./node_modules/uuid/v4.js"),
				l = r.n(c),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/models/Product/index.ts"),
				p = r("./src/reddit/models/RichTextJson/index.ts"),
				h = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("RichTextJsonEmoteTooltip").then(r.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = r.n(g);
			const v = 1e3,
				y = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = w.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = w.Inside, setTimeout(() => {
							this.mouseLocation === w.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = w.Outside, setTimeout(() => {
							this.mouseLocation !== w.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const r = h.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...r,
								actionInfo: {
									...r.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.hb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let r, s, n;
					t.e === p.s ? (r = t.s.x, s = t.s.y, n = t.s.u) : t.e === p.r && (r = t.s.x, s = t.s.y, n = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return n ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: n,
						width: r,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(E),
				_ = r("./src/reddit/components/RichTextJson/media.tsx"),
				j = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = r("./src/reddit/components/SubredditMention/index.tsx"),
				k = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = r("./src/reddit/helpers/isComment.ts"),
				I = r("./src/reddit/helpers/isPost.ts"),
				T = r("./src/reddit/helpers/richTextJson/index.ts"),
				P = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, r) => {
					const s = e.c || [],
						n = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === p.w ? e.t : V(e, t, a))
					}
					const c = d.x[n - 1];
					return a.a.createElement(c, {
						key: r
					}, i)
				},
				N = e => a.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, r, s) => {
					const n = e.c;
					if (!n) return;
					const i = n.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(F(n[a], t, r, a));
					return a.a.createElement(d.c, {
						key: s
					}, o)
				},
				M = (e, t) => {
					const r = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, r.reduce((e, t, r, s) => e += t.t + (r < s.length ? "\n" : ""), "")))
				},
				B = (e, t, r, s) => {
					const n = e.c,
						i = [],
						o = n.length;
					for (let l = 0; l < o; l++) {
						const e = n[l].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => F(e, t, r, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, i)
				},
				F = (e, t, r, s) => {
					switch (e.e) {
						case p.b:
							return R(e, t, r, s);
						case p.c:
							return M(e, s);
						case p.k:
							return L(e, r, s);
						case p.l:
							return N(s);
						case p.p:
							return B(e, t, r, s);
						case p.u:
							return G(e, t, r, s);
						case p.z:
							return D(e, t, r, s)
					}
				},
				D = (e, t, r, s) => {
					const n = e.c,
						i = e.h,
						o = n.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: n
							} = q(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, H(o, t, r))), m[d] = n
					}
					for (let p = 0; p < o; p++) {
						const e = n[p],
							s = e.length,
							i = [];
						for (let n = 0; n < s; n++) {
							const s = m[n],
								{
									c: o = []
								} = e[n];
							i.push(a.a.createElement(s, {
								key: n
							}, H(o, t, r)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				G = (e, t, r, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const n = e.c[0];
					return n.e !== p.m && n.e !== p.a || !Object(T.g)(n.id) ? a.a.createElement(d.j, {
						key: s
					}, H(e.c, t, r)) : Object(_.b)(n, s, r, t)
				},
				H = (e, t, r) => {
					const s = [],
						n = e.length;
					for (let i = 0; i < n; i++) {
						const n = e[i];
						if (n.e === p.A) s.push(A(n, i));
						else if (n.e === p.x) s.push(a.a.createElement(j.a, {
							key: i
						}, H(n.c, t, r)));
						else if (n.e === p.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (n.e === p.m || n.e === p.a) {
							if (n.id.startsWith("emote|")) {
								const e = p.E(t, n.id);
								e && s.push(a.a.createElement(O, {
									key: i,
									node: n,
									media: e
								}))
							}
						} else s.push(V(n, r, i))
					}
					return s
				},
				V = (e, t, r) => {
					switch (e.e) {
						case p.o:
							const s = A({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: r,
								title: e.a
							}, s);
							let n, i;
							const o = Object(P.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(I.b)(c) && (n = c.postId), c && Object(C.b)(c) && (i = c.id, n = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: r,
								title: e.a,
								sourceElement: o,
								postId: n,
								commentId: i
							}, s);
						case p.y:
							return a.a.createElement(S.b, {
								key: r,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: r
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: r
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: r,
						t: n
					} = e, i = [];
					if (!r) return W(0, n, t);
					const o = Object(s.a)(n);
					let a = 0,
						d = 0;
					const c = r.length;
					for (; a < c; a++) {
						const [e, t, s] = r[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(W(0, n.substr(d, l - d), `between${a}`)), i.push(W(e, n.substr(l, u), a)), d = l + u
					}
					return d < n.length && i.push(W(0, n.substr(d), `remaining${a}`)), i
				},
				U = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				W = (e, t, r) => {
					let s = t;
					return s = i()(U, (t, s, n) => e & parseInt(n, 10) ? a.a.createElement(s, {
						key: r
					}, t) : t, s)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				b = r("./src/reddit/helpers/trackers/navigation.ts"),
				f = r("./src/reddit/selectors/experiments/countrySites.ts"),
				g = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = r("./src/reddit/selectors/meta.ts"),
				y = r("./src/reddit/components/SidebarFooter/index.m.less"),
				w = r.n(y);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), O = d.a.a("Link", w.a), _ = Object(o.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: x.a
			}), j = Object(i.b)(_), S = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return n.a.createElement("div", {
					className: w.a.GreyRereddit
				}, r, n.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && n.a.createElement(n.a.Fragment, null, n.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), n.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: w.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), n.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})), n.a.createElement("div", {
					className: w.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = S(j(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(f.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? n.a.createElement(l.a, {
					className: w.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: w.a.LinkContainer
				}, n.a.createElement("div", {
					className: w.a.Column
				}, n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: w.a.Column
				}, n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), n.a.createElement("div", {
					className: w.a.Copyright
				}, E._("© {year} Reddit, Inc. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? n.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, s[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ic.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Ic.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Ic.LargeImagePreview ? e.reredditButtons : [];
					return n.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return n.a.createElement(l.a, {
					className: w.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: w.a.LinkContainer
				}, n.a.createElement("div", {
					className: w.a.Column
				}, n.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(O, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, E._("Communities", null, {
					hk: "3CJu37"
				})), n.a.createElement(O, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, E._("Rereddit", null, {
					hk: "1z3k7C"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/topics/a-1/"
				}, E._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && n.a.createElement(n.a.Fragment, null, n.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), n.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: w.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), n.a.createElement("div", {
					className: w.a.Column
				}, n.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), n.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), n.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: w.a.CountryLinkContainer
				}, n.a.createElement("div", {
					className: w.a.Column
				}, s("en"), s("fr"), s("it")), n.a.createElement("div", {
					className: w.a.Column
				}, s("de"), s("es"), s("pt"))), n.a.createElement("div", {
					className: w.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = r.n(s),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/lodash/throttle.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/components/BackToTop/index.tsx"),
				l = r("./src/reddit/components/SidebarFooter/index.tsx"),
				u = r("./src/reddit/constants/componentSizes.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				h = r.n(p),
				b = r("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.e[1] + 24,
				x = u.f + 8,
				v = x + 152 + 16,
				y = v + g + 8,
				w = b.a.div("Container", h.a),
				E = b.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...s
					} = e;
					return a.a.createElement(c.a, f({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?x:8}px)`
						}
					}, s))
				}, "BackToTop", h.a),
				O = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: n,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(r, {
							[h.a.BottomStickyStyles]: o,
							[h.a.StickyStyles]: !o && i && !n,
							[h.a.StickyStylesFakeOverlay]: !o && !!n
						})
					}, t)
				};
			class _ extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
						shouldFooterSticky: this.windowHeight > v
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
							adComponentOnFakeOverlay: r,
							children: s,
							className: n,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return a.a.createElement(w, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(O, {
						isFakeOverlay: r,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, d, !i && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(E, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const j = Object(m.u)();
			t.a = j(_)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SubredditIcon/index.tsx"),
				a = r("./src/reddit/controls/OutboundLink/index.tsx"),
				d = r("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = r.n(d);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => n.a.createElement(a.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, r) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/RichTextJson/elements.tsx"),
				d = r("./src/higherOrderComponents/makeAsync.tsx"),
				c = r("./src/lib/loadWithRetries/index.ts"),
				l = r("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = r.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => r.e("SubredditMentionWithIcon").then(r.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return n.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, n.a.createElement(l.a, {
							href: `/r/${t}/`
						}, n.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, n.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				h = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = r("./src/reddit/selectors/subredditMention.ts");
			class x extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: r
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: r
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
			const v = Object(h.c)(x),
				y = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				w = Object(i.b)(y),
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: r,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!r || !t) return n.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case b.wf.SmIcon:
							return n.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.wf.SmIconHc:
							return n.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return n.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = w(E)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				h = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = r("./src/reddit/selectors/experiments/topPosts.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/models/Theme/index.ts"),
				v = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				O = e => {
					const t = w(e);
					return Object(x.f)(t)
				};
			var _ = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = r.n(_);
			const {
				fbt: S
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), C = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: r
						}),
						n = Object(g.db)(e);
					return s || n
				},
				nigtmode: g.db,
				subredditId: u.n,
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = r ? j.a.widgetContentOnly : j.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!d,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(a.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: o,
						style: x,
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(j.a.widgetTitle, p)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(b, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(C(Object(d.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "b", (function() {
				return k
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/actions/ads/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/index.ts"),
				d = r("./src/reddit/actions/gold/tooltips.ts"),
				c = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/postList.ts"),
				u = r("./src/reddit/actions/survey/index.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/components/PostList/Placeholder.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				x = r("./src/reddit/selectors/experiments/survey.ts"),
				v = r("./src/reddit/selectors/listings.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const _ = O(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: v.g,
					postsById: y.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: r,
							listingName: s,
							inSubredditOrProfile: n
						} = t;
						return Object(y.D)(e, r, s, n)
					}),
					subredditsById: w.bb,
					viewportDataLoaded: E.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				S = Object(n.c)(j),
				k = e => ({
					onBottomViewed: (t, r) => e(l.c(t, r)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, r) => {
						e(c.z(t, r))
					},
					trackOnPostEnteredViewport: (t, r, s, n) => {
						e(c.O(t, s, n))
					},
					trackOnPostExitedViewport: (t, r, s, n) => {
						e(c.P(t, s, n))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				C = e => Object(h.b)({
					...e
				}),
				I = (e, t, r, s) => {
					const {
						listingKey: n,
						hostPostData: i,
						listingBelowVariant: o
					} = s;
					return Object(b.k)(e, t, "post", n, i, o, void 0)
				},
				T = Object(s.b)(S, k, (e, t, r) => ({
					...e,
					...t,
					...r,
					postComponentForLayout: C,
					postClickEventFactory: I
				}));
			t.a = e => Object(m.c)(_(T(e)))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: s = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/featureFlags/index.ts");

			function d(e, t, r) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? n.a.createElement(t, o) : void 0 !== r ? n.a.createElement(r, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const r = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === s.b.NO_ADS);
				return !r && !n
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = r.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				o = r("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: r
				} = e;
				if (t && (Object(n.b)(t) || Object(i.b)(t))) return Object(n.b)(t) ? o.SourceElement.Comment : Object(s.x)(r) ? o.SourceElement.PostDetail : Object(s.H)(r) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "e", (function() {
				return E
			}));
			var s, n, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/isComment.ts"),
				a = r("./src/reddit/helpers/isPost.ts"),
				d = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(n || (n = {}));
			const m = e => ({
					...u.n(e),
					source: n.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: n,
					screen: u.Z(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: r,
						subredditName: s
					} = t;
					if (!r || !Object(a.b)(r) && !Object(o.b)(r)) return {
						outbound: void 0
					};
					const n = Object(a.b)(r) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[n]: r.id
						},
						c = Object(l.z)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...i,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: r
					} = t;
					if (!r || !Object(a.b)(r) && !Object(o.b)(r)) return {};
					const s = Object(a.b)(r) ? r.belongsTo.id : r.subredditId;
					return {
						post: u.I(e, r.id),
						subreddit: u.ib(e, s),
						...h(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...b(t, e)
				}),
				g = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.jb(t, e),
					screen: u.Z(t)
				}),
				x = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.I(r, t),
					subreddit: u.jb(r, e),
					screen: u.Z(r)
				}),
				v = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.I(r, t),
					subreddit: u.jb(r, e),
					screen: u.Z(r)
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var s, n, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => r => ({
					source: n.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.vb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => r => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.I(r, e),
					subreddit: o.hb(r),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.n(r)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: s,
					widthLeft: i,
					gutter: a,
					...l
				} = e;
				return n.a.createElement("div", c({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: i,
						height: s,
						marginRight: a
					}
				}, Array.isArray(r) && r[0]), n.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(r) && r[1]))
			}, 2)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/ProfilePosts/index.m.less": function(e, t, r) {
			e.exports = {
				creatorStatsEducationUnit: "_3z4ZLgygqBtdU8Fy77oHl-"
			}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/lodash/fromPairs.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				p = r("./src/reddit/actions/pages/profilePosts.ts"),
				h = r("./src/reddit/actions/pages/profileShared.ts"),
				b = r("./src/reddit/components/ContentGate/index.tsx"),
				f = r("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				g = r("./src/reddit/components/EmptyProfile/index.ts"),
				x = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				v = r("./src/reddit/components/JumpToContent/index.tsx"),
				y = r("./src/reddit/components/ListingPostList/index.tsx"),
				w = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				E = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				O = r("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				j = r("./src/reddit/helpers/localStorage/index.ts"),
				S = r("./src/reddit/helpers/name/index.ts"),
				k = r("./src/reddit/helpers/trackers/screenview.ts"),
				C = r("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				I = r("./src/reddit/layout/page/Listing/index.tsx"),
				T = r("./src/reddit/models/ContentGate.ts"),
				P = r("./src/reddit/pages/ErrorPages/index.tsx"),
				L = r("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				N = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				R = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				M = r("./src/reddit/selectors/profile.ts"),
				B = r("./src/reddit/selectors/user.ts"),
				F = r("./src/server/helpers/profileRedirect.ts"),
				D = r("./src/reddit/pages/ProfilePosts/index.m.less"),
				G = r.n(D);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(_.u)(),
				A = Object(d.a)(_.E, B.kb, (e, t) => {
					let {
						location: r
					} = t;
					return n()([...Object(l.a)(r.search)])
				}, _.S, (e, t) => {
					let {
						match: r
					} = t;
					return r.params.profileName
				}, (e, t) => {
					let {
						match: r
					} = t;
					return Object(M.j)(e, {
						profileName: r.params.profileName
					})
				}, B.Q, (e, t) => {
					let {
						match: r
					} = t;
					return Object(B.f)(e, c.kc + r.params.profileName)
				}, N.c, (e, t) => {
					let {
						match: r
					} = t;
					return Object(B.L)(e, {
						profileName: r.params.profileName
					})
				}, R.f, (e, t, r, s, n, i, o, a, d, c, l) => {
					var m, p;
					const {
						sort: b,
						t: f
					} = Object(h.b)(r), g = Object(u.a)(`u_${n}`, b, r);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: s,
						listingKey: g,
						profileName: n,
						sort: b,
						timeSort: f,
						avatar: null === (m = null == i ? void 0 : i.icon) || void 0 === m ? void 0 : m.url,
						isProfileBlockInterstitialEnabled: d,
						isBlocked: c,
						profileId: null !== (p = null == i ? void 0 : i.id) && void 0 !== p ? p : "",
						nsfwBlockingExperiment: l
					}
				}),
				U = Object(a.b)(A, (e, t) => ({
					onLoadMore: () => e(p.morePostsRequested()),
					onLayoutChange: () => e(p.profilePostsRequested({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(m.a)())
				}));
			class W extends o.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(j.K)() <= 2
						})
					}, this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-posts",
							render: () => o.a.createElement(f.a, {
								className: G.a.creatorStatsEducationUnit
							})
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(j.K)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === R.a.Blurred && this.props.openNsfwModal()
				}
				componentWillUnmount() {
					window.removeEventListener("storage", this.onStorage)
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: r,
						isOwnProfile: s,
						isProfileBlockInterstitialEnabled: n,
						isProfileNSFW: i,
						listingKey: a,
						nsfwBlockingExperiment: d,
						onLayoutChange: l,
						onLoadMore: u,
						over18Prefs: m,
						pageLayer: p,
						profileId: h,
						profileName: f,
						sort: _,
						timeSort: j
					} = this.props;
					if (!p || !f) return null;
					if (t && (t.profileDeleted || t.profileSuspended)) return o.a.createElement(b.default, {
						contentGateType: t.profileDeleted ? T.a.ProfileDeleted : T.a.ProfileSuspended,
						profileName: f
					});
					const C = p.queryParams && "true" === p.queryParams.consent;
					if (403 === p.status || r && !C) return n ? o.a.createElement(L.a, {
						username: f,
						avatar: e,
						uid: h
					}) : o.a.createElement(P.a, null);
					if (404 === p.status) return o.a.createElement(b.default, {
						contentGateType: T.a.ProfileDoesNotExist,
						profileName: f
					});
					const N = f.toLowerCase(),
						M = Object(F.a)(f, !0),
						B = {
							listingKey: a,
							listingName: N
						};
					if (i && !s && d === R.a.NoPreview) return o.a.createElement(O.a, {
						contentTitle: Object(S.d)(f)
					});
					if (!m && i && !s && d !== R.a.Blurred) return o.a.createElement(b.default, {
						contentGateType: T.a.Nsfw,
						subredditName: f
					});
					const D = {
						sort: _,
						baseUrl: M,
						sortOptions: c.Db,
						subredditId: this.props.subredditId,
						timeSort: j
					};
					return o.a.createElement(I.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(w.a, {
							profileName: f,
							viewBlockedConsent: C
						})),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, D), o.a.createElement(v.a, null), o.a.createElement(y.a, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile ? this.getInjectChildren : void 0,
							listingKey: a,
							listingName: N,
							listingViewed: (e, t) => Object(k.r)(a, _, t, e, j),
							noPostsComponent: () => o.a.createElement(g.c, {
								profileName: f,
								timeSort: j
							}),
							onLoadMore: u,
							onTryAgain: l,
							inSubredditOrProfile: !1,
							shouldShowInsightsButton: s
						})),
						sidebar: o.a.createElement(E.a, H({}, B, {
							profileName: f
						}))
					})
				}
			}
			t.default = V(U(Object(C.d)(W)))
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts"),
				a = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.mc
				}), o.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.lc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: i.Q,
						experimentName: s.cd
					});
					return !(!t || Object(s.Tf)(t))
				},
				a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: i.Q,
						experimentName: s.cd
					}) === s.Bd.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "d", (function() {
				return w
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				o = r("./src/reddit/selectors/subreddit.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const r = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (r) {
						const t = Object(o.U)(e, {
							subredditId: r
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(s.a)((e, t) => {
					const r = p(e, t);
					if (!r) return u;
					const s = Object(o.Y)(e, {
						subredditName: r.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(o.U)(e, {
						subredditId: r
					}) : null
				},
				h = (e, t, r, s, n) => {
					const o = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + r > t) && (!(t + r > a) && !((e, t, r) => {
						const s = r[t - 1],
							n = r[t],
							o = n && Object(i.G)(e, {
								postId: s
							}) || null,
							a = n && Object(i.G)(e, {
								postId: n
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, s)))
				},
				b = [3],
				f = Object(s.a)((e, t) => {
					let {
						existingDUPositions: r,
						listingProps: s
					} = t;
					const n = r.slice().sort();
					let o = -1;
					const a = Object(i.z)(e, {
							listingKey: s.listingKey
						}),
						d = [];
					return b.forEach(t => {
						let r = o + t;
						if (!(r >= a.length)) {
							for (; r < a.length && !h(e, r, t, a, n);) r += 1;
							r < a.length && (d.push(r), o = r)
						}
					}), d
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				w = e => {
					const t = Object(a.P)(e),
						r = n.d.geoSubredditRecommendationDULoggedIn(e),
						s = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && r || !t && s
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			const a = e => n.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.pf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.wf.SmIcon || t === s.wf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.pending[r]
				},
				u = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.error[r]
				},
				m = (e, t) => {
					let {
						subredditName: r
					} = t;
					const s = Object(o.Y)(e, {
						subredditName: r
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: r
				} = t;
				return e.tracking.viewportDataLoaded[r]
			}
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4acc506c916a"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"f649d259b459"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"9446fd0182a5"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"a50776ef134a"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"298208a63798"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4450c1a22029"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePosts.6a24c215d560ef6537b6.js.map