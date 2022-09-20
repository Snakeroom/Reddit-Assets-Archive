// https://www.redditstatic.com/desktop2x/ModQueuePages.86b13990cadc20e3febe.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function s(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !i && !m && !u && !p && /linux/i.test(t),
						v = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !O && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? o = {
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
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, g && (o.version = g)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (o.version = g)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var k = "";
					o.windows ? k = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (o.osversion = k);
					var j = !o.windows && k.split(".")[0];
					return O || d || "ipad" == r || i && (3 == j || j >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var r = o.element,
								i = a(r),
								d = this._rootContainsTarget(r),
								c = o.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, n),
								m = o.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, r, i, d, l, m, u, p, b = a(n), h = c(n), f = !1; !f;) {
								var x = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (f = !0, x = s) : h != t.body && h != t.documentElement && "visible" != v.overflow && (x = a(h)), x && (o = x, r = b, i = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), p = d - i, !(b = (u = m - l) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: m,
										width: u,
										height: p
									}))) break;
								h = c(h)
							}
							return b
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || s.clientWidth,
								width: n.clientWidth || s.clientWidth,
								bottom: n.clientHeight || s.clientHeight,
								height: n.clientHeight || s.clientHeight
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
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== s)
							for (var o = 0; o < this.thresholds.length; o++) {
								var r = this.thresholds[o];
								if (r == n || r == s || r < n != r < s) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = s
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
						n = t.width * t.height,
						s = this.intersectionRect,
						o = s.width * s.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, s, o, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, n, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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

				function d(e, t) {
					for (var n = t; n;) {
						if (n == e) return !0;
						n = c(n)
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
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIndexOf.js"),
				o = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = o(e) ? e : a(e), n = n && !c ? i(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && s(e, t, n) > -1
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var n = a,
					c = d(e, a);
				t = o(t), e -= a;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				var o = n ? n.call(s, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					i = Object.keys(t);
				if (r.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < r.length; d++) {
					var c = r[d];
					if (!a(c)) return !1;
					var l = e[c],
						m = t[c];
					if (!1 === (o = n ? n.call(s, l, m, c) : void 0) || void 0 === o && l !== m) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = u(o.target, o.currentTarget),
						a = p(o.target, o.currentTarget);
					r && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
						const s = t(e, r, a)(n);
						let o;
						if (s && s.actionInfo) {
							const {
								pageType: e,
								...t
							} = s.actionInfo;
							o = t
						}
						return {
							...s,
							actionInfo: Object(i.S)(n, o)
						}
					})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(s.useCallback)(d(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const o of e) t++, n += o.length, s[t] = n;
					return s
				},
				o = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const o of e) {
						for (let e = 0; e < o.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				i = Object(s.a)(o.b),
				a = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "b", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(g.p),
				_ = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(m.l)(o(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(x.Q)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.n : m.g;
					t(Object(v.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, k = Object(r.a)(g.J), j = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = n(),
						l = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					l && u && (t(Object(v.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(f.a)(a) ? await Object(m.a)(i(), e) : await Object(m.b)(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(d.d)())
				}, C = (e, t) => async (n, o, r) => {
					let {
						apiContext: i,
						gqlContext: a
					} = r;
					const l = o(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (n(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(f.a)(l) ? await Object(m.i)(a(), e, t) : await Object(m.j)(i(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(v.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(d.d)())
				}, y = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.m : m.f;
					t(Object(v.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, w = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === o.ic.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: f
						})).ok) r(Object(v.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, S = (e, t, n) => async (s, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					s(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.H.ADMIN,
							isMod: t === o.H.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(v.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.d)(c(), e, t),
						f = Object(m.e)(c(), e, !!n),
						x = [h];
					(n || !n && e === b) && x.push(f), (await Promise.all(x)).every(e => e.ok) ? n && s(k({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.u.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(v.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), s(Object(v.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ne
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "f", (function() {
				return ce
			})), n.d(t, "a", (function() {
				return le
			})), n.d(t, "b", (function() {
				return me
			})), n.d(t, "c", (function() {
				return ue
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/bulkActions/index.ts"),
				a = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/modQueue/index.ts"),
				l = n("./src/reddit/endpoints/user/index.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				p = n("./node_modules/Base64/base64.js"),
				b = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				h = n("./src/reddit/helpers/isPost.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/redditGQL/types.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const j = {
					[o.ub.Edited]: g.x.Edited,
					[o.ub.Modqueue]: g.x.Mod,
					[o.ub.Reports]: g.x.Reported,
					[o.ub.Spam]: g.x.Removed,
					[o.ub.Unmoderated]: g.x.Unmoderated
				},
				C = {
					comments: g.v.Comment,
					links: g.v.Post,
					chat_comments: g.v.ChatComment
				};

			function y(e) {
				let {
					getState: t,
					queueType: n,
					options: s
				} = e;
				const o = t();
				let r;
				s.only && (r = C[s.only]);
				const i = {};
				s.after && (i[s.sort === b.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const n = Object(h.a)(t) ? Object(x.G)(e, {
						postId: t
					}) : Object(f.b)(e, {
						commentId: t
					});
					if (n) return Object(p.btoa)(`${n.id}|${n.created}`)
				}(o, s.after));
				const a = {};
				return s.sort === b.a.OldestFirst ? a.last = 25 : a.first = 25, {
					queueType: j[n],
					moderatedAfter: s.moderatedAfter,
					...a,
					...!!r && {
						itemTypes: r
					},
					...!!s.subreddit && {
						subredditNames: Array.isArray(s.subreddit) ? s.subreddit : [s.subreddit]
					},
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === b.a.MostReportedFirst ? g.w.SortReports : g.w.SortDate,
					...i
				}
			}
			var w;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(w || (w = {}));
			const S = e => ({
					access: (null == e ? void 0 : e.isAccessEnabled) || !1,
					all: (null == e ? void 0 : e.isAllAllowed) || !1,
					chatConfig: (null == e ? void 0 : e.isChatConfigEditingAllowed) || !1,
					chatOperator: (null == e ? void 0 : e.isChatOperator) || !1,
					config: (null == e ? void 0 : e.isConfigEditingAllowed) || !1,
					flair: (null == e ? void 0 : e.isFlairEditingAllowed) || !1,
					mail: (null == e ? void 0 : e.isMailEditingAllowed) || !1,
					posts: (null == e ? void 0 : e.isPostEditingAllowed) || !1,
					wiki: (null == e ? void 0 : e.isWikiEditingAllowed) || !1
				}),
				I = e => {
					let {
						id: t,
						icon: n,
						profile: s,
						snoovatarIcon: o,
						isAcceptingFollowers: r,
						displayName: i,
						prefixedName: a,
						name: d
					} = e;
					return {
						accountIcon: null == n ? void 0 : n.url,
						displayName: i,
						displayNamePrefixed: a,
						displayText: d,
						enableFollowers: r,
						id: t,
						profileId: null == s ? void 0 : s.id,
						snoovatarFullBodyAsset: (null == o ? void 0 : o.url) || null,
						username: d
					}
				};

			function T(e) {
				let {
					modQueueItems: t,
					identity: n
				} = e;
				var s, o, r, i;
				const a = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (s = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === s ? void 0 : s.pageInfo.hasNextPage) ? null === (o = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === o ? void 0 : o.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {},
					users: {}
				};
				if (!t) return a;
				if (!t.edges) return a;
				const d = null === (i = null === (r = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.edges) || void 0 === i ? void 0 : i.reduce((e, t) => {
					var n;
					if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = S(s), e.subreddits[t.node.id] = Object(k.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return a.moderatingSubreddits = (null == d ? void 0 : d.moderatingSubreddits) || {}, a.subreddits = (null == d ? void 0 : d.subreddits) || {}, t.edges.forEach(e => {
					var t, n, s, o, r, i, d;
					if (!e) return;
					const {
						node: c
					} = e;
					if (!c) return;
					const {
						__typename: l,
						subredditInfo: m
					} = c;
					if (!m) return;
					const {
						id: u
					} = m;
					if (a.subreddits[u] = Object(k.a)(m), a.moderatingSubreddits[u] || "Subreddit" !== (null == m ? void 0 : m.__typename) || (a.moderatingSubreddits[u] = S(m.modPermissions)), !a.postFlair[u] && "Subreddit" === m.__typename) {
						const {
							position: e,
							isEnabled: n
						} = (null == m ? void 0 : m.postFlairSettings) || {};
						a.postFlair[u] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: n
							},
							...(null === (t = null == m ? void 0 : m.postFlairTemplates) || void 0 === t ? void 0 : t.reduce((e, t) => {
								let {
									id: n,
									text: s,
									isEditable: o,
									richtext: r,
									type: i,
									textColor: a,
									backgroundColor: d,
									isModOnly: c,
									cssClass: l,
									maxEmojis: m,
									allowableContent: u
								} = t;
								return n ? (e.templateIds.push(n), e.templates[n] = {
									id: n,
									text: s || "",
									textEditable: o,
									type: i || v.f.Text,
									textColor: (null == a ? void 0 : a.toLowerCase()) || void 0,
									backgroundColor: (null == d ? void 0 : d.toLowerCase()) || void 0,
									richtext: JSON.parse(r || "[]"),
									modOnly: c,
									cssClass: l,
									maxEmojis: m,
									allowableContent: null == u ? void 0 : u.toLowerCase()
								}, e) : e
							}, {
								templates: {},
								templateIds: []
							})) || {}
						}
					}
					if (l === w.Comment || l === w.ChatComment) {
						const {
							commentInfo: e
						} = c;
						if (!e) return;
						const t = Object(O.a)(e);
						if (null === (n = e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = I(null === (s = e.moderationInfo) || void 0 === s ? void 0 : s.verdictBy);
							t.username && (a.users[null == t ? void 0 : t.username] = t)
						}
						a.comments[t.id] = t, a.listingOrder.push({
							id: t.id,
							type: "comment"
						}), a.modqueue.push(t.id);
						const {
							authorInfo: r,
							authorFlair: i
						} = e, d = i ? null === (o = Object(_.a)(i)) || void 0 === o ? void 0 : o[0] : null;
						a.authorFlair[u] = {
							...a.authorFlair[u],
							...(null == r ? void 0 : r.name) ? {
								[null == r ? void 0 : r.name]: d
							} : {}
						};
						const l = [];
						t.modReports.forEach(e => {
							l.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							l.push({
								type: "user",
								reason: e[0]
							})
						}), a.reports[t.id] = l
					}
					if (l === w.Post) {
						const {
							postInfo: e
						} = c;
						if (null === (r = null == e ? void 0 : e.moderationInfo) || void 0 === r ? void 0 : r.verdictBy) {
							const t = I(null === (i = e.moderationInfo) || void 0 === i ? void 0 : i.verdictBy);
							t.username && (a.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(E.f)(e);
						a.posts[t.id] = t, a.listingOrder.push({
							id: t.id,
							type: "post"
						}), a.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: s
						} = e, o = s ? null === (d = Object(_.a)(s)) || void 0 === d ? void 0 : d[0] : null;
						a.authorFlair[u] = {
							...a.authorFlair[u],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: o
							} : {}
						};
						const l = [];
						t.modReports.forEach(e => {
							l.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							l.push({
								type: "user",
								reason: e[0]
							})
						}), a.reports[t.id] = l
					}
				}), a
			}
			var R = n("./src/reddit/models/ModQueue/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				M = n("./src/reddit/selectors/modQueue.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/reddit/selectors/telemetry.ts"),
				L = n("./src/telemetry/index.ts"),
				F = n("./src/lib/initializeClient/installReducer.ts"),
				B = n("./src/reddit/reducers/pages/modHub/index.ts"),
				D = n("./src/reddit/actions/modQueue/constants.ts");
			Object(F.a)({
				pages: {
					modHub: B.a
				}
			});
			const U = Object(r.a)(D.k),
				H = Object(r.a)(D.j),
				W = Object(r.a)(D.i),
				V = Object(r.a)(D.h),
				q = Object(r.a)(D.g),
				G = Object(r.a)(D.f),
				J = Object(r.a)(D.e),
				Q = Object(r.a)(D.o),
				K = Object(r.a)(D.n),
				z = Object(r.a)(D.m),
				X = Object(r.a)(D.r),
				Y = Object(r.a)(D.q),
				Z = Object(r.a)(D.p),
				$ = Object(r.a)(D.x),
				ee = Object(r.a)(D.w),
				te = Object(r.a)(D.v),
				ne = (e, t, n) => async (r, i, a) => {
					let {
						apiContext: m,
						gqlContext: u
					} = a;
					var p;
					let b, h, f;
					switch (t) {
						case o.ub.Edited:
							b = q, h = J, f = G;
							break;
						case o.ub.Modqueue:
							b = H, h = V, f = W;
							break;
						case o.ub.Reports:
							b = Q, h = z, f = K;
							break;
						case o.ub.Spam:
							b = X, h = Z, f = Y;
							break;
						case o.ub.Unmoderated:
							b = $, h = te, f = ee;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (r(b()), n.profile) {
						const e = null === (p = (await Object(l.b)(m(), n.profile)).body[n.profile]) || void 0 === p ? void 0 : p.profileId;
						n.profile = e
					}
					const x = y({
							getState: i,
							queueType: t,
							options: n
						}),
						v = await Object(c.b)(u(), x);
					if (!v.ok) return r(h(v.error)), void r(Object(d.f)({
						kind: N.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: g,
						...O
					} = T(v.body.data);
					Object(M.b)(i()) && r(U(g)), r(f({
						listingKey: e,
						page: `${n.page||R.b}`,
						response: O
					}))
				}, se = Object(r.a)(D.l), oe = Object(r.a)(D.b), re = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const i = n(),
						a = i.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						l = i.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = i.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = i.platform.currentPage.urlParams;
					if (e && l || m || !a) return;
					const p = y({
							getState: n,
							queueType: u,
							options: {
								moderatedAfter: a
							}
						}),
						b = await Object(c.b)(r(), p);
					if (!b.ok) return void t(Object(d.f)({
						kind: N.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const h = T(b.body.data);
					t(se(h)), h.moderatedAfter ? t(re()) : t(oe())
				}, ie = Object(r.a)(D.u), ae = Object(r.a)(D.t), de = Object(r.a)(D.s), ce = (e, t, n) => async (o, r, l) => {
					let {
						apiContext: p
					} = l;
					o(Object(i.c)());
					const b = r(),
						f = Object(M.h)(b),
						x = b.user.account && b.user.account.displayText;
					Object(m.d)(m.a.ModQueue);
					const v = Object(m.c)(m.a.ModQueue);
					Object(L.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...A.o(b),
						actionInfo: A.d(b, {
							count: f.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: A.bb(b),
						correlationId: v
					});
					for (let t = 0; t < f.length; t++) {
						const n = f[t];
						let s = e;
						[R.a.Approve, R.a.Remove, R.a.Spam].includes(e) && (Object(h.a)(n) ? s += "_link" : s += "_comment"), Object(L.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...A.o(b),
							actionInfo: A.d(b, {
								count: f.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: A.h(b, n),
							post: A.K(b, n),
							profile: A.V(b, n),
							screen: A.bb(b),
							subreddit: A.mb(b, n),
							correlationId: v
						})
					}
					Object(m.b)(m.a.ModQueue);
					const g = {
						ids: f
					};
					t && (g.text = Object(u.g)(t) || "", g.flairTemplateId = ""), n && (g.cssClass = n, g.flairTemplateId = n);
					const O = await Object(c.a)(p(), e, g);
					if (O.ok) {
						o(Object(i.b)({
							...O.body,
							operation: e,
							ids: f,
							username: x,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case R.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case R.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case R.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case R.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case R.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case R.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case R.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case R.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case R.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case R.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case R.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case R.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case R.a.Unspoiler:
								case R.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== R.a.Approve && e !== R.a.Flair) {
							let t, r;
							const l = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = l && Object(P.G)(b, l);
							e === R.a.Remove && m && f.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(a.fetchReasonsAndOpenModal)(m, f));
							const u = Object(d.e)(n, N.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: o
								} = n;
								e(ie());
								const r = t(),
									a = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									l = r.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									m = r.user.account && r.user.account.displayText;
								e(Object(i.c)());
								const u = await Object(c.a)(o(), a, {
									ids: l
								});
								u.ok ? e(ae({
									...u.body,
									operation: a,
									ids: l,
									username: m
								})) : (e(de(u.error)), e(Object(d.f)({
									kind: N.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							o(Object(d.f)(u))
						} else {
							const e = Object(d.e)(n, N.b.SuccessMod);
							o(Object(d.f)(e))
						}
					} else {
						o(Object(i.a)(O.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), N.b.Error);
						o(Object(d.f)(e))
					}
				}, le = Object(r.a)(D.a), me = Object(r.a)(D.c), ue = Object(r.a)(D.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Z
			})), n.d(t, "removalReasonsLoaded", (function() {
				return $
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), n.d(t, "editRemovalReason", (function() {
				return ce
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return pe
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return xe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), n.d(t, "submitRemovalReason", (function() {
				return ke
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return je
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case a:
					case d:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				v = Object(r.c)({
					error: f,
					pending: x
				});
			const g = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case d:
					case m: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case b: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const _ = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: o
						} = s;
						return {
							...e,
							[n]: o
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
						}
					}
					default:
						return e
				}
			};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				j = Object(r.c)({
					api: v,
					models: O,
					reasonOrder: E,
					removedItemIds: k
				}),
				C = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				w = n("./src/lib/makeCommentsPageKey/index.ts"),
				S = n("./src/lib/makeDraftKey/index.ts"),
				I = n("./src/reddit/actions/bulkActions/index.ts"),
				T = n("./src/reddit/actions/comment/index.ts"),
				R = n("./src/reddit/actions/comment/authoring.ts"),
				N = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				B = n("./src/lib/omitHeaders/index.ts"),
				D = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const H = (e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: C.mb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: C.mb.POST,
					type: "json",
					data: t
				});
			var V = n("./src/reddit/helpers/isPost.ts"),
				q = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = n("./src/reddit/helpers/routeKey/index.ts"),
				J = n("./src/reddit/models/ModQueue/index.ts"),
				Q = n("./src/reddit/models/PostDraft/index.ts"),
				K = n("./src/reddit/models/RemovalReason/index.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				X = n("./src/reddit/selectors/comments.ts"),
				Y = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: j
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(y.a)(i),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t(Z());
					const i = await ((e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.mb.GET
					}))(o(), r);
					i.ok ? t($({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, ne = Object(y.a)(a), se = Object(y.a)(d), oe = Object(y.a)(c), re = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.mb.POST,
						data: n
					}))(i(), a, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, r = {
							...t,
							id: o
						};
						n(se({
							subredditId: e,
							reason: r
						})), n(Object(A.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(d.error))
				}, ie = Object(y.a)(l), ae = Object(y.a)(m), de = Object(y.a)(u), ce = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: C.mb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), a, t);
					d.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, le = Object(y.a)(p), me = Object(y.a)(b), ue = Object(y.a)(h), pe = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(le());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: C.mb.DELETE
					}))(i(), a, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(L.a.ADD_REMOVAL_REASON))
				}, fe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, n, s, o, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? K.e.Post : K.e.Comment,
						b = p === K.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === K.e.Post ? P.S : T.j;
					if (!b || !m) return !1;
					i(fe()), i(h({
						[u]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const f = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						x = await H(c(), f);
					if (x.ok) {
						if (i(xe()), t) {
							i(ge());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								a = await W(c(), Object(K.h)(o, p), p);
							if (a.ok) {
								if ([K.f.Public, K.f.PublicAsSubreddit].includes(s)) {
									if (i(_e()), a.body) {
										const e = Object(q.a)(a.body),
											t = {
												comment: e,
												parentId: u
											},
											n = Object(Y.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(G.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(w.a)(e.postId, null, {
												sort: C.v,
												hasSortParam: !0
											})), p === K.e.Post) {
											const n = Object(S.a)(Q.c.replyToPost, u);
											i(Object(R.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[u];
											i(Object(N.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && i(Object(T.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === K.e.Comment) {
											const e = Object(S.a)(Q.c.replyToComment, b.id),
												n = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											i(Object(R.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else i(Oe());
								return !0
							}
							return i(Ee(a.error)), !1
						}
					} else i(ve(x.error)), i(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, je = (e, t, n, o, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(fe());
					const u = Object(A.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await H(c(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: J.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await W(c(), Object(K.h)(s, K.e.Bulk), K.e.Bulk);
							r.ok ? (i(Oe()), i(u)) : i(Ee(r.error))
						} else i(u)
					} else i(ve(b.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const l = (e, t) => Object(i.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				b = n("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(r.f)({
					id: e,
					kind: u.b.Error,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				f = (e, t) => Object(r.f)({
					kind: u.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				x = (e, t) => Object(r.f)({
					kind: u.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				v = Object(o.a)(p.C),
				g = (Object(o.a)(p.f), Object(o.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await l(i(), t)).ok) s && s(), f(n, O({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				O = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await m(i(), t)).ok) s && s(), x(n, g({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await l(i(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(f(n, E({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				E = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await m(i(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(x(n, _({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, o, a) => {
						let {
							gqlContext: d
						} = a;
						const l = Object(b.a)(n);
						(await ((e, t, n) => Object(i.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(v({
							subredditId: t,
							notificationLevel: n
						})), e(Object(r.f)({
							kind: u.b.SuccessCommunityGreen,
							text: Object(b.b)(n)
						}))) : e(Object(r.f)({
							kind: u.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts");
			const u = Object(o.a)(a.v),
				p = Object(o.a)(a.u),
				b = Object(o.a)(a.t),
				h = e => {
					switch (e) {
						case l.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const x = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: o,
					undoCallback: a
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: v
					} = x;
					var g, O, _;
					e(p());
					const E = h(n),
						k = await Object(c.b)(v(), t, E);
					if ((null === (O = null === (g = k.error) || void 0 === g ? void 0 : g.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(k.body) && (null === (_ = k.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					k.ok && (e(Object(r.c)({
						subredditId: t,
						notificationLevel: n
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), o && o(), e(a ? Object(d.f)(Object(d.e)(f(n), m.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(d.f)(Object(d.e)(f(n), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = n.n(r);
			const a = s.a.wrapped(o.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/trackers/modTools.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				w = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = n.n(w);
			const I = Object(h.u)(),
				T = e => `Distinguish--Dropdown--${e}`,
				R = Object(a.c)({
					currentUser: O.k,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(x.a)(e, {
							commentId: n.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(g.b)(T(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(v.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.U
				}),
				N = Object(i.b)(R, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(m.a)(n.id)),
						onDistinguishComment: (t, s) => e(Object(m.b)(n.id, t, s)),
						onLockComment: () => e(Object(m.c)(n.id)),
						onRemoveComment: () => e(Object(m.e)(n.id, !1)),
						onSpamComment: () => e(Object(m.e)(n.id, !0)),
						onShowComment: () => e(Object(m.d)(n.id)),
						onToggleDistinguishDropdown: () => e(Object(u.h)({
							tooltipId: T(n.id)
						}))
					}
				});
			t.a = I(N(l.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: b,
					onLockComment: h,
					onRemoveComment: x,
					onShowComment: v,
					onSpamComment: g,
					onToggleDistinguishDropdown: O,
					sendEvent: w,
					pageLayer: I,
					...T
				} = e;
				const R = Object(p.b)(n),
					N = n.isApproved && R,
					M = !n.isRemoved || n.bannedBy === c.l,
					P = a,
					A = e => w(Object(f.b)(e, n.id)),
					L = "chat_comments" === (null == I ? void 0 : I.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || R) && r.a.createElement(y.a, {
					text: N ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), L && w(Object(f.a)("approve", n.id)), A("approve")
					}
				}, r.a.createElement(_.a, {
					className: S.a.icon
				})), M && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: n.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), L && w(Object(f.a)("remove", n.id)), n.bannedBy === c.l ? A("confirm_remove") : A("remove")
					}
				}, r.a.createElement(k.a, {
					className: S.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), A("spam")
					}
				}, r.a.createElement(j.a, {
					className: S.a.icon
				}))), r.a.createElement(y.a, {
					text: n.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), A(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(E.a, {
					className: S.a.icon
				})), P && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(C.a, {
					className: Object(d.a)(S.a.icon, S.a.Show)
				})))
			}), "CommentModToolsFlatlist", S.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
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
				userFlairLine: "_3w527zTLhXkd08MyacMV9H",
				LastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy",
				lastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const b = e => {
				const {
					className: t,
					collapsed: n,
					comment: o,
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					isEmbeddedLiveChat: l,
					isStrong: u,
					onClick: b,
					style: h
				} = e;
				return n && a ? r.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: o.author,
					className: Object(d.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					forceOpenInNewTab: l,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: b,
					style: h
				}, o.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				O = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				E = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				S = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				R = n.n(T);
			const N = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: o,
					isLivestreaming: i,
					isEmbeddedLiveChat: a,
					isStrong: c,
					onClick: l,
					renderedInOverlay: m
				} = e;
				const u = Object(C.f)(s),
					p = r.a.createElement(S.b, {
						ignore: u || !!s.distinguishType && s.distinguishType !== w.H.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, r.a.createElement(b, {
						className: t,
						collapsed: o,
						comment: s,
						isAuthorDeleted: Object(C.f)(s),
						isCommentAuthorBlocked: Object(C.g)(s),
						isLivestreaming: i,
						isEmbeddedLiveChat: a,
						isStrong: c,
						onClick: l
					}));
				return u || a ? p : r.a.createElement(I.b, {
					className: Object(d.a)(R.a.authorHoverCard, n),
					collapsed: o,
					isCommentAuthorBlocked: Object(C.g)(s),
					postOrComment: s,
					tooltipType: m ? O.c.Lightbox : void 0
				}, p)
			};
			var M = n("./src/config.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				F = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				D = n.n(B);
			const U = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: o
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(P.h)({
						tooltipId: l
					})),
					l = L("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(D.a.cakedayIcon, t),
					src: `${M.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(A.c, {
					tooltipId: l,
					text: m
				}))
			};
			var H = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				q = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/helpers/path/index.ts");
			const J = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(i.d)(), m = L("CommentTopMeta--Created--", n.id, d), u = () => l(Object(P.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(H.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == o || o(e), Q(l, n.id), c && (e.preventDefault(), l(Object(V.Z)(Object(G.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(q.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(A.c, {
						tooltipId: m
					}, r.a.createElement(q.b, {
						seconds: n.created
					})))
				},
				Q = (e, t) => {
					window.addEventListener("focus", (function n() {
						K(e, t, n)
					}))
				},
				K = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(z);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(_.a, {
				className: X.a.crowdControlText
			}, Y._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var $ = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return r.a.createElement(_.a, {
					className: ee.a.editedText
				}, te._("edited {time}", [te._param("time", r.a.createElement(q.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var se = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				re = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ie = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				de = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Report/index.tsx"),
				le = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/selectors/modQueue.ts"),
				ue = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				pe = n.n(ue);
			const be = e => {
				let {
					comment: t,
					ignoreLock: o,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					l = Object(i.e)(me.b),
					m = e => () => c(Object(P.f)({
						tooltipId: e
					})),
					u = () => c(Object(P.i)()),
					p = e => L(e, t.id, a),
					b = p("CommentTopMeta--Approve--"),
					h = p("CommentTopMeta--Remove--"),
					f = p("CommentTopMeta--Report--"),
					x = p("CommentTopMeta--Spam--"),
					v = m(h);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: pe.a.approveIcon,
					desc: Object(oe.a)(t),
					id: b,
					onMouseEnter: m(b),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(oe.a)(t)
				})), Object(se.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					desc: Object(oe.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(oe.b)(t)
				})), Object(se.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(se.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: u
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(ae.a, {
					className: pe.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: pe.a.spamIcon,
					desc: Object(oe.d)(t),
					id: x,
					onMouseEnter: m(x),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: x,
					text: Object(oe.d)(t)
				})), Object(re.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: pe.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: f,
					onMouseEnter: m(f),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: f,
					text: Object(oe.c)(t.numReports)
				})), t.isDeleted && d && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: pe.a.userDeletion
				}, s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var he, fe = n("./src/lib/colors/constants.ts"),
				xe = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(ve);
			const Oe = {
					[he.Admin]: {
						color: fe.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: fe.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[he.ModTeam]: {
						color: fe.d,
						getLabel: () => s.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[he.Op]: {
						color: fe.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: fe.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
						color: fe.a,
						getLabel: () => s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				_e = e => {
					const t = Object(i.d)(),
						n = function(e) {
							if (e.isAdmin) return he.Admin;
							const t = e.isMod || e.distinguishType === w.H.MODERATOR;
							return t && e.author && Object(xe.a)(e.author) ? he.ModTeam : t ? he.Mod : e.isOp ? he.Op : e.distinguishType === w.H.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						getLabel: a,
						tooltipTemplate: c
					} = Oe[n], l = a(), m = L(s, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(P.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(ge.a.role, e.className),
						style: {
							color: o
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), (n === he.Mod || n === he.ModTeam) && r.a.createElement(Ee, null)), r.a.createElement(A.c, {
						tooltipId: m,
						text: u
					}))
				},
				Ee = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${M.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				je = n.n(ke);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = () => r.a.createElement(_.a, {
				className: je.a.stickiedText
			}, Ce._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Se = n.n(we);
			const Ie = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: w,
					permalink: S,
					renderContractorBadge: I,
					renderedInOverlay: T,
					subredditDisplayText: R,
					isAdmin: M
				} = e, P = Object(j.a)(), A = a.subredditId, L = Object(i.e)(e => Object(y.m)(e, {
					subredditId: A
				}));
				if (a.isDeleted && !M) return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, r.a.createElement("span", {
					className: Se.a.metaText
				}, a.deletedBy === C.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(J, {
					key: "Created",
					className: Se.a.metaText,
					comment: a,
					compact: !0,
					permalink: S,
					renderedInOverlay: T
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, !Object(C.f)(a) && r.a.createElement(f.b, {
					className: Se.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: Se.a.baselineItem
				}, r.a.createElement(N, {
					authorClassName: Se.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: T
				})), !Object(C.f)(a) && u && r.a.createElement(g.a, {
					postOrComment: a,
					className: Se.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(Z, null), r.a.createElement(_e, {
					className: Se.a.role,
					comment: a,
					subredditDisplayText: R,
					renderContractorBadge: I,
					renderedInOverlay: T
				}), a.isAuthorCakeday ? r.a.createElement(U, {
					className: Se.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: T
				}) : !Object(C.f)(a) && L && r.a.createElement(h.a, {
					className: Se.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						P(Object(k.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(v.a, {
					className: Se.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(J, {
					key: "Created",
					className: Se.a.metaText,
					comment: a,
					compact: !0,
					onClick: w,
					permalink: S,
					renderedInOverlay: T
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(ye, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: a.editedAt
				})), r.a.createElement(be, {
					comment: a,
					ignoreLock: m,
					renderedInOverlay: T,
					isAdmin: M
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: T ? O.c.Lightbox : void 0
				})), c && !Object(E.o)(c) && r.a.createElement("span", {
					className: Se.a.userFlairLine
				}, r.a.createElement(x.b, {
					className: Se.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Re = n("./src/reddit/selectors/economics.ts"),
				Ne = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Pe = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Le = n("./src/reddit/selectors/subreddit.ts"),
				Fe = n("./src/reddit/selectors/userFlair.ts"),
				Be = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				De = n.n(Be);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const He = c.a.wrapped(x.b, "RightPositionedAuthorFlair", De.a),
				We = c.a.span("DeletedText", De.a),
				Ve = c.a.wrapped(_.a, "MetaSeparator", De.a),
				qe = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Re.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Le.L)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Fe.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Pe.b,
					isBlockingInterstitialV2Enabled: Pe.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.i)(e, n.subredditId)
					}
				}));
			t.a = qe(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					hideAwards: h = !1,
					ignoreFlairPosition: g,
					ignoreLock: E,
					isAdmin: k,
					isBlockingInterstitialEnabled: j,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					isEmbeddedLiveChat: I,
					isPostComment: T,
					onCommentAuthorClick: R,
					onCommentTimestampClick: M,
					renderContractorBadge: P,
					renderedInOverlay: A,
					subredditDisplayText: L,
					userHasNft: F
				} = e, B = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te.b, {
					commentId: i.id
				}), r.a.createElement(Te.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (T) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
					className: Object(d.a)(n, {
						[De.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: u || null,
					ignoreLock: E,
					isAdmin: k,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					onCommentAuthorClick: R,
					onCommentTimestampClick: M,
					permalink: a,
					renderContractorBadge: !!P,
					renderedInOverlay: A,
					subredditDisplayText: L
				}), B);
				if (i.isDeleted) return r.a.createElement(Ge, Ue({}, e, {
					className: Object(d.a)(n, De.a.container, {
						[De.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Je, Ue({}, e, {
					className: Object(d.a)(n, De.a.container, {
						[De.a.collapsed]: s
					})
				}));
				const D = !g && p === Ne.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, De.a.container, {
						[De.a.collapsed]: s,
						[De.a.hasBadges]: b,
						[De.a.liveStreaming]: S
					}),
					"data-testid": "comment-top-meta"
				}, u && D && r.a.createElement(x.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(C.f)(i) && r.a.createElement(f.b, {
					className: De.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(N, {
					authorClassName: F ? De.a.NftAuthor : void 0,
					collapsed: s,
					comment: i,
					isLivestreaming: S,
					isEmbeddedLiveChat: I,
					isStrong: !!m,
					onClick: R,
					renderedInOverlay: A
				}), o && r.a.createElement(Z, null), o && r.a.createElement(_.c, {
					className: De.a.metaText,
					key: "crowdControlSeparator"
				}), u && !D && r.a.createElement(He, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(v.a, {
					className: De.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(_.c, {
						className: De.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), B, r.a.createElement(_e, {
					className: De.a.authorRole,
					comment: i,
					subredditDisplayText: L,
					renderContractorBadge: !!P,
					renderedInOverlay: A
				}), !m && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !T && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: De.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(_.c, {
					className: De.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(J, {
					key: "Created",
					className: De.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: A,
					isBlockingInterstitialEnabled: j || y
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: De.a.separator
				}), r.a.createElement(ye, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: De.a.separator
				}), r.a.createElement(ne, {
					editedAt: i.editedAt
				}))), r.a.createElement(be, {
					comment: i,
					ignoreLock: E,
					renderedInOverlay: A
				}), !h && r.a.createElement(l.a, {
					thing: i,
					tooltipType: A ? O.c.Lightbox : void 0
				}))
			});
			const Ge = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(We, null, i.deletedBy === C.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(J, {
						key: "Created",
						className: De.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && Qe({
						childrenInfo: t
					}))
				},
				Je = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(C.f)(t),
						collapsed: i
					})), r.a.createElement(_.b, {
						className: De.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: De.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(J, {
						key: "Created",
						className: De.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d || c
					}), Qe({
						childrenInfo: s
					}))
				},
				Qe = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ve, {
						className: De.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U",
				userDeletion: "_1KVzcRpEm0U5vCgrZbgiyN"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				c = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				f = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				x = n("./src/reddit/components/ModModeReports/index.tsx"),
				v = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				j = n("./src/reddit/selectors/modQueue.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				w = n.n(y),
				S = n("./src/lib/lessComponent.tsx");
			const I = S.a.div("VoteSpacer", w.a),
				T = S.a.div("ContentWrapper", w.a),
				R = S.a.div("CommentContentWrapper", w.a),
				N = S.a.div("CommentBody", w.a),
				M = S.a.div("ParentPostTitle", w.a),
				P = S.a.div("CommentParentWrapper", w.a),
				A = Object(i.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: E.m,
					flair: E.e,
					subreddit: C.L,
					isModQueueDisplayEnabled: j.b
				}),
				L = Object(r.b)(A, (e, t) => {
					let {
						commentId: n,
						trackClick: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(c.g)(n)),
						onVoteClick: t => {
							const [o, r] = t === _.a.upvoted ? [Object(d.s)(n), "upvote_comment"] : [Object(d.k)(n), "downvote_comment"];
							s(r)(), e(o)
						}
					}
				}),
				F = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = L(S.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: i,
					isCheckboxSelected: a = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: _,
					subreddit: E,
					showBulkActionCheckbox: k,
					toggleCheckbox: j
				} = e, C = Object(f.a)(n);
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, o.a.createElement(v.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: k,
					isCheckboxSelected: a,
					toggleCheckbox: j
				}), o.a.createElement(I, null, o.a.createElement(T, null, o.a.createElement(P, null, n.postTitle && o.a.createElement(M, null, n.postTitle), n.postAuthor && o.a.createElement(b.a, {
					comment: n
				})), o.a.createElement(R, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(N, null, o.a.createElement(g.b, {
					content: Object(O.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: F(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				})), o.a.createElement(p.a, {
					comment: n,
					flair: r,
					subredditName: E ? E.displayText : null
				}), C && o.a.createElement(h.a, {
					thing: n
				}), i && o.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && o.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", w.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : n(Object(i.a)(t, {
						context: 3
					})))(s);
					return o.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, s.children)
				}
			}
			t.a = c(Object(a.a)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = n.n(i);
			const d = r.a.div("DashWrapper", a.a);
			t.a = e => null === e.comment.parentId ? o.a.createElement(d, null, e.children) : o.a.createElement(d, null, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N",
				SubredditIcon: "_3VveukTKira5rWfNi-vDI4",
				subredditIcon: "_3VveukTKira5rWfNi-vDI4"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx");
			const u = l.a.wrapped(a.a, "Inline", c.a),
				p = l.a.wrapped(a.a, "PostedInfo", c.a),
				b = l.a.wrapped(a.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				f = l.a.wrapped(i.a, "TopMeta", c.a);
			t.a = e => {
				let {
					subredditName: t,
					className: n,
					comment: o,
					flair: i,
					subredditOrProfile: a
				} = e;
				return r.a.createElement(u, {
					className: n
				}, a && r.a.createElement(b, null, a && r.a.createElement(m.b, {
					className: c.a.SubredditIcon,
					subredditOrProfile: a
				}), a && r.a.createElement(h, null, a.displayText)), t && !a && r.a.createElement(b, null, t && r.a.createElement(h, null, t)), r.a.createElement(p, null, r.a.createElement(h, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(f, {
					collapsedBecauseCrowdControl: o.collapsedBecauseCrowdControl,
					collapsed: !1,
					comment: o,
					flair: i,
					renderedInOverlay: !1
				})))
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(r.a, "AuthorLink", l.a), h = u.a.wrapped(d.a, "Inline", l.a), f = u.a.wrapped(d.a, "SubredditWrapper", l.a), x = u.a.div("TextContainer", l.a), v = u.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(f, null, e.subredditOrProfile && o.a.createElement(v, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(x, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(i.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.F
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/ContentTooltip/index.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				v = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				g = Object(c.a)(e => {
					const {
						children: t,
						className: n,
						style: s,
						caretPosition: o,
						caretColor: i,
						onClick: a,
						hideCaret: c
					} = e;
					return r.a.createElement("div", {
						onClick: a,
						className: Object(d.a)(n, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o,
							[h.a.hideCaret]: c
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(u.a)(e).body
						}
					}, t)
				}),
				O = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				_ = Object(m.a)(g, [s.a.Click, s.a.Keydown]),
				E = Object(i.b)(O);
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const s = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									o = s.left > t.width;
									break;
								case "right":
									o = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = s.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: s
					} = this.getPositions(e);
					return r.a.createElement(_, f({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = E(k)
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb",
				freeAwardTooltip: "_1C7AEhBd1Od4VDczirG0jB",
				freeAwardContainer: "P0AA_X8_E-4IwAxzn2uke"
			}
		},
		"./src/reddit/components/GiveAwardTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				a = n("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				d = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = n("./src/reddit/components/ContentTooltip/index.tsx"),
				l = n("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				m = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					tooltipId: t
				} = e, n = Object(r.e)(d.b), l = Object(i.a)();
				return Object(s.useEffect)(() => {
					n && l(Object(a.c)())
				}, [n, l]), n ? o.a.createElement(c.a, {
					className: m.a.freeAwardTooltip,
					caretColor: {
						bottom: "#F6481E"
					},
					tooltipSizeEstimate: {
						height: 48,
						width: 148
					},
					tooltipId: t,
					defaultTooltipPosition: "top"
				}, o.a.createElement("div", {
					className: m.a.freeAwardContainer
				}, u._("Tap to give your {award name} Award", [u._param("award name", n.name)], {
					hk: "2EMqbP"
				}))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/reddit/featureFlags/component.tsx");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(o.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
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
						isSpoiler: n
					} = e;
					return r.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, r.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(r.b)(() => Object(i.c)({
					isNightmodeOn: u.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), o.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				m = n("./src/lib/opener/index.ts"),
				u = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				v = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = n.n(y);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * O.e,
				T = e => r.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[w.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				R = e => {
					const t = Object(c.a)(w.a.image, h.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${O.j}px`), e.isListing || e.isTall && I(e.height) || (n.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const i = Object(o.useRef)(null),
						[a, d] = Object(o.useState)(!1),
						l = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						m = Object(o.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(g.a)(i, l, m.current);
					const {
						width: u,
						height: p
					} = e;
					let b = 240;
					if (u / p > 1)
						if (u < 240) b = p;
						else {
							(b = p * (240 / u)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const f = Object(o.useRef)({
						height: b
					});
					return e.renderSmallMedia ? r.a.createElement("div", {
						ref: i,
						style: f.current
					}, a ? r.a.createElement(T, S({}, e, {
						className: t
					})) : r.a.createElement("noscript", null, r.a.createElement(T, S({}, e, {
						className: t
					})))) : r.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(i.b)(() => Object(d.a)(_.F, k.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(_.b)(e, s) : null
				}, E.d, _.G, (e, t, n, s, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: o
				})));
			t.a = M(e => {
				const t = Object(v.a)();
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					"data-adclicklocation": C.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, A(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, A(e)) : A(e)
			});
			const P = (e, t) => r.a.createElement(R, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[j.a]: !e
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				A = e => {
					let {
						onClick: t,
						...n
					} = e;
					const o = Object(O.L)(n.height, n.width),
						i = I(n.height) && o;
					return r.a.createElement(N, S({}, n, {
						className: `${o?`${j.a} `:""}${n.className||""}`
					}), n.isListing ? r.a.createElement("div", {
						className: n.contentImageClassName
					}, P(o, n)) : r.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: w.a.imageLink
					}, P(o, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && r.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > O.j && Object(O.L)(n.height, n.width) && r.a.createElement("div", {
						className: w.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && r.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? o.a.createElement("img", {
						className: c.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && o.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), o.a.createElement("div", {
					className: Object(r.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class m extends o.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return o.a.Children.only(this.props.children) || o.a.createElement("div", null)
					}
					return o.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var v = n("./src/lib/forceHttps/index.ts"),
				g = n("./src/lib/hooks/usePrevious.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: o,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: m,
					...u
				} = e;
				const p = Object(r.useRef)(),
					b = Object(r.useRef)(),
					h = Object(g.a)(d);

				function _(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(r.useEffect)(() => {
					if (_(!d && (t || s)), b.current && o) return p.current = function(e, t) {
						let n = !1,
							s = !1;
						const o = () => n = !0,
							r = () => s = !0;
						e.addEventListener("loadeddata", o), e.addEventListener("play", r), e.addEventListener("playing", r);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const o = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + x ? i = !0 : i && d >= a && d > a + x && (i = !1), a = d, o !== i && t(i)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", o)
						}
					}(b.current, o), () => {
						p.current && p.current()
					}
				}, []), Object(r.useEffect)(() => {
					h !== d && _(!d && (t || s))
				}, [h, d, t, s]), i.a.createElement("video", O({}, u, {
					ref: e => b.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(v.a)(m || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				k = n.n(E);
			const j = Object(d.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: r,
					started: d
				} = Object(a.e)(t => j(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: v,
					showFull: g,
					shouldPause: O,
					width: E,
					isListing: C,
					className: y,
					showCentered: w,
					originalSource: S,
					isPromoted: I
				} = e, T = t && !(I && Object(c.hasAcceptableAds)()), R = Object(a.d)();

				function N(e) {
					R(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function M() {
					return R(Object(m.z)({
						postId: b
					}))
				}
				const P = o()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && R(Object(m.s)(b))
				}, 200);

				function A(e) {
					e.persist(), P(e)
				}

				function L(e) {
					var t;
					(r || B(e), d) || (t = e.timeStamp, R(Object(m.A)(b, t)))
				}

				function F(e) {
					R(Object(m.q)(b, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						R(Object(m.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function D(e) {
					s || L(e), r || B(e), R(Object(m.C)(b))
				}

				function U() {
					const e = {};
					return w && (e.margin = "0 auto"), C || (e.maxHeight = `${p.e}px`), i.a.createElement(_, {
						autoplay: T,
						className: Object(l.a)(u.a, k.a.styledVideo),
						height: x,
						isListing: C,
						isNotCardView: v,
						key: b,
						loop: !0,
						onBufferingChange: N,
						onLoadStart: F,
						onLoadedData: L,
						onLoadedMetadata: B,
						onPause: M,
						onPlaying: D,
						onTimeUpdate: A,
						shouldLoad: h,
						shouldPause: O,
						showCentered: w,
						showFull: g,
						source: f,
						style: e,
						width: E
					})
				}
				return C ? U() : i.a.createElement("div", {
					className: Object(l.a)(k.a.container, y, {
						[k.a.centered]: w
					})
				}, i.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = n("./src/reddit/components/OverflowMenu/index.m.less"),
				v = n.n(x);
			const g = c.a.wrapped(u.a, "_Dropdown", v.a),
				O = Object(m.a)(g),
				_ = c.a.button("MenuButton", v.a),
				E = c.a.wrapped(p.b, "DropdownRow", v.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				j = Object(i.b)(k, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				h = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				v = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				C = Object(d.c)({
					flairData: g.d,
					subreddit: O.W
				});
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, a = r.displayText, {
						templates: d,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						subredditId: r.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const w = Object(a.b)(C, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(y);
			t.a = Object(l.a)(Object(c.c)(w))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: g,
					shouldShowUpvoteRatioOnHover: O
				} = e, _ = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: _,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: g,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: o.a.overlayReportFlow
				},
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportFlowNew").then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
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
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(a);
			const c = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(c, "ApproveButton", d.a),
				m = i.a.wrapped(c, "RemoveButton", d.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				m = n.n(l),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = u.a.span("InnerSpan", m.a),
				x = u.a.span("TooltipTarget", m.a),
				v = u.a.span("SpoilerWrapper", m.a),
				g = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return r.a.createElement(v, p({}, s, {
						className: Object(i.a)(t, {
							[m.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", m.a),
				O = Object(c.a)(u.a.wrapped(d.b, "Component", m.a), [a.a.Click, a.a.Keydown]);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					return r.a.createElement(g, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(f, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(O, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "w", (function() {
				return M
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				m = d.a.hr("Hr", a.a),
				u = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				h = d.a.p("P", a.a),
				f = d.a.li("Li", a.a),
				x = d.a.ul("Ul", a.a),
				v = d.a.ol("Ol", a.a),
				g = d.a.strong("B", a.a),
				O = d.a.em("I", a.a),
				_ = d.a.span("U", a.a),
				E = e => o.a.createElement("del", e),
				k = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				C = d.a.table("Table", a.a),
				y = d.a.tr("Tr", a.a),
				w = d.a.td("Tdl", a.a),
				S = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				T = d.a.th("Thl", a.a),
				R = d.a.th("Thc", a.a),
				N = (d.a.th("Thr", a.a), d.a.wrapped(e => o.a.createElement(r.b, e), "A", a.a)),
				M = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				m = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				h = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(f);
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				g = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(v, s)
				}),
				O = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				_ = e => r()(e, O),
				E = e => e.findIndex(O),
				k = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: o,
						isNSFW: r,
						isNsfwBlockingModalEligible: i,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: O,
						rtJsonElementProps: k,
						useExplicitTextColor: j,
						shouldBlur: C,
						onClickRevealSpoilerText: y,
						mediaProps: w
					} = e, S = s.document, I = [], T = e.mediaMetadata || null, R = E(S), N = _(S);
					if (C && !o && !i) return a.a.createElement(v, {
						className: Object(d.a)(u.j, n)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!r, !!c))));
					if (-1 !== R)
						for (let a = R; a <= N; a++) {
							const e = S[a];
							switch (e.e) {
								case p.k:
									I.push(h.c(e, k, a));
									break;
								case p.l:
									I.push(h.d(a));
									break;
								case p.b:
									I.push(h.a(e, T, k, a));
									break;
								case p.c:
									I.push(h.b(e, a));
									break;
								case p.p:
									I.push(h.f(e, T, k, a, y));
									break;
								case p.z:
									I.push(h.h(e, T, k, a, y));
									break;
								case p.u:
									I.push(h.g(e, T, k, a, y));
									break;
								case p.h:
									I.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.D:
									I.push(...Object(b.b)(e, a, k, T, O, f, t, w))
							}
						}
					return j ? a.a.createElement(v, {
						className: Object(d.a)(u.j, n)
					}, I) : a.a.createElement(g, {
						className: Object(d.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, I)
				};
			class j extends a.a.Component {
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
						return k(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return M
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				m = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/RichTextJson/index.ts");
			var v = e => r.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, r.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), r.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), r.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), r.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), r.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), r.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				g = n("./src/reddit/components/RichTextJson/elements.tsx"),
				O = n("./src/reddit/components/RichTextJson/media.m.less"),
				_ = n.n(O),
				E = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/helpers/media/index.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = /\/(\w+)\/asset\/(\w+)\//,
				y = E.a.wrapped(g.a, "A", _.a),
				w = E.a.wrapped(l.a, "ImageBox", _.a),
				S = E.a.wrapped(e => r.a.createElement("p", e), "Caption", _.a),
				I = E.a.div("Placeholder", _.a),
				T = E.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = n === x.D ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[m, u] = Object(o.useState)(!1);
					return Object(o.useEffect)(() => {
						d && setTimeout(() => {
							u(!0)
						}, 1500)
					}), r.a.createElement(I, j({
						className: Object(i.a)(t, {
							[_.a.renderSmallMedia]: a,
							[_.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && m && r.a.createElement(p.t, {
						priority: p.c.Plain,
						className: _.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", _.a),
				R = (e, t) => {
					let {
						c: n,
						x: s,
						y: o
					} = e;
					return r.a.createElement("div", {
						className: _.a.MediaWrapper
					}, r.a.createElement(m.a, {
						height: o,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: o,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				N = (e, t, n) => {
					const s = e.c;
					let o = "";
					return n && (n.e === x.s ? o = n.s.u : n.e === x.r ? o = n.s.gif : n.e === x.t && (o = (e => {
						const t = C.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), o ? r.a.createElement(y, {
						href: o,
						key: t,
						title: s
					}, s || o) : null
				},
				M = (e, t, n, s, o, a, c, l) => {
					const p = x.E(s, e.id);
					if (o) return [N(e, t, p)];
					const f = [];
					return !p || p.e === x.s && null === p.s.x && null === p.s.y ? f.push(((e, t, n, s) => r.a.createElement(T, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === x.s ? f.push(((e, t, n, s, o) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: u
						} = o || {};
						let p = d;
						return u && (p = Object(k.i)(240, 20, d, c)), r.a.createElement("div", {
							className: Object(i.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n,
								[_.a.hasSmallMedia]: u
							})
						}, r.a.createElement(m.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, r.a.createElement(w, {
							altText: s,
							originalSource: p.u,
							postId: a,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: u
						})))
					})(p, t, !!e.c, c, l)) : p.e === x.r ? f.push(((e, t, n, s) => {
						let {
							id: o,
							ext: a,
							s: d
						} = e;
						if (Object(h.h)(o)) {
							const e = s.renderingObjectInfo,
								c = !!e && Object(b.b)(e),
								l = a || Object(h.g)(o);
							return r.a.createElement("div", {
								className: Object(i.a)({
									[_.a.MediaWrapper]: !c,
									[_.a.CommentGifWrapper]: c,
									[_.a.mHasCaption]: n
								})
							}, r.a.createElement(y, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? r.a.createElement("video", {
								className: _.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: d.mp4
							})) : l), r.a.createElement(v, {
								className: _.a.GiphyLogo
							}))
						}
						return r.a.createElement("div", {
							className: Object(i.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n
							})
						}, r.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, r.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: o,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(p, t, !!e.c, n)) : p.e === x.t && f.push(((e, t, n, s) => {
						let {
							hlsUrl: o,
							dashUrl: a,
							x: c,
							y: l,
							isGif: u
						} = e;
						return r.a.createElement("div", {
							className: Object(i.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n
							})
						}, r.a.createElement(m.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, r.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: u,
							hlsSource: o,
							mpegDashSource: a,
							postId: s,
							isGif: u
						})))
					})(p, t, !!e.c, a)), e.c && f.push(((e, t) => r.a.createElement(S, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return R
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				o = n("./node_modules/lodash/reduce.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(f);
			const v = 1e3,
				g = 1e3;
			var O;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(O || (O = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = O.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = O.Inside, setTimeout(() => {
							this.mouseLocation === O.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = O.Outside, setTimeout(() => {
							this.mouseLocation !== O.Inside && this.setState({
								tooltipOpen: !1
							})
						}, g)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, o;
					t.e === u.s ? (n = t.s.x, s = t.s.y, o = t.s.u) : t.e === u.r && (n = t.s.x, s = t.s.y, o = t.s.gif);
					const r = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return o ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: r,
						src: o,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${r}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var E = Object(l.c)(_),
				k = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				y = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				I = n("./src/reddit/helpers/richTextJson/index.ts"),
				T = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const R = (e, t, n) => {
					const s = e.c || [],
						o = e.l,
						r = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						r.push(e.e === u.w ? e.t : U(e, t, a))
					}
					const c = d.x[o - 1];
					return a.a.createElement(c, {
						key: n
					}, r)
				},
				N = e => a.a.createElement(d.e, {
					key: e
				}),
				M = (e, t, n, s, o) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						c = [];
					for (let a = 0; a < i; a++) c.push(L(r[a], t, n, a, o));
					return a.a.createElement(d.c, {
						key: s
					}, c)
				},
				P = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				A = (e, t, n, s, o) => {
					const r = e.c,
						i = [],
						c = r.length;
					for (let m = 0; m < c; m++) {
						const e = r[m].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: m
						}, e.map((e, s) => L(e, t, n, s, o))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: s
					}, i)
				},
				L = (e, t, n, s, o) => {
					switch (e.e) {
						case u.b:
							return M(e, t, n, s, o);
						case u.c:
							return P(e, s);
						case u.k:
							return R(e, n, s);
						case u.l:
							return N(s);
						case u.p:
							return A(e, t, n, s, o);
						case u.u:
							return B(e, t, n, s, o);
						case u.z:
							return F(e, t, n, s, o)
					}
				},
				F = (e, t, n, s, o) => {
					const r = e.c,
						i = e.h,
						c = r.length,
						l = i.length,
						m = [],
						u = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = q(e.a),
							{
								c = []
							} = e;
						m.push(a.a.createElement(s, {
							key: d
						}, D(c, t, n, o))), p[d] = r
					}
					for (let b = 0; b < c; b++) {
						const e = r[b],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = p[r],
								{
									c: d = []
								} = e[r];
							i.push(a.a.createElement(s, {
								key: r
							}, D(d, t, n, o)))
						}
						u.push(a.a.createElement(d.t, {
							key: b
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, m)), a.a.createElement("tbody", null, u))
				},
				B = (e, t, n, s, o) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== u.m && r.e !== u.a || !Object(I.h)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, D(e.c, t, n, o)) : Object(k.b)(r, s, n, t)
				},
				D = (e, t, n, s) => {
					const o = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === u.A) o.push(H(r, i));
						else if (r.e === u.x) o.push(a.a.createElement(j.a, {
							key: i,
							onClickReveal: s
						}, D(r.c, t, n, s)));
						else if (r.e === u.n) o.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === u.m || r.e === u.a) {
							if (r.id.startsWith("emote|")) {
								const e = u.E(t, r.id);
								e && o.push(a.a.createElement(E, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else o.push(U(r, n, i))
					}
					return o
				},
				U = (e, t, n) => {
					switch (e.e) {
						case u.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(y.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let o, r;
							const i = Object(T.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (o = c.postId), c && Object(w.b)(c) && (r = c.id, o = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: o,
								commentId: r
							}, s);
						case u.y:
							return a.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case u.B:
						case u.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case u.g:
						case u.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: o
					} = e, r = [];
					if (!n) return V(0, o, t);
					const i = Object(s.a)(o);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = i[t], m = i[c] - l;
						l > d && r.push(V(0, o.substr(d, l - d), `between${a}`)), r.push(V(e, o.substr(l, m), a)), d = l + m
					}
					return d < o.length && r.push(V(0, o.substr(d), `remaining${a}`)), r
				},
				W = {
					[u.j.monospace]: d.h,
					[u.j.bold]: d.b,
					[u.j.italic]: d.f,
					[u.j.underline]: d.u,
					[u.j.strikethrough]: d.d,
					[u.j.subscript]: d.l,
					[u.j.superscript]: d.m
				},
				V = (e, t, n) => {
					let s = t;
					return s = r()(W, (t, s, o) => e & parseInt(o, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				q = e => {
					switch (e) {
						case u.f:
							return {
								H: d.r, D: d.q
							};
						case u.d:
							return {
								H: d.r, D: d.o
							};
						case u.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = r.a.wrapped(i.b, "SubredditIcon", c.a),
				m = r.a.wrapped(e => o.a.createElement(a.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				m = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				u = n.n(m);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return o.a.createElement("span", {
							className: u.a.subredditMentionContainer
						}, o.a.createElement(l.a, {
							href: `/r/${t}/`
						}, o.a.createElement("span", {
							className: u.a.subredditIconContainer
						}, o.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class v extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const g = Object(b.c)(v),
				O = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				_ = Object(r.b)(O),
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: r,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return o.a.createElement(g, {
						subredditName: s,
						rtJsonElementProps: i
					});
					switch (r) {
						case h.Rf.SmIcon:
							return o.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case h.Rf.SmIconHc:
							return o.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return o.a.createElement(g, {
								subredditName: s,
								rtJsonElementProps: i
							})
					}
				};
			t.b = _(E)
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, n) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = O(e);
					return Object(v.f)(t)
				},
				k = e => {
					const t = _(e);
					return Object(v.f)(t)
				};
			var j = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(j);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.u)(), S = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(x.db)(e);
					return s || o
				},
				nigtmode: x.db,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? C.a.widgetContentOnly : C.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, v = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: x
					}, m && o.a.createElement("div", {
						className: Object(a.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: i,
						style: v,
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, y._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = w(S(Object(d.a)(Object(l.c)(I))))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = i.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: o,
						...i
					} = e;
					const d = Object(a.b)(n),
						c = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(n, "number", d)], {
							hk: "2L3T21"
						}),
						m = t ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(n, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, m)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const n = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !o
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(o.e)(a, {
							commentId: e
						}),
						c = Object(r.g)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...i.o(a),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...i.o(e)
				})
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(o.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: i.T(e),
					subreddit: i.jb(e)
				}),
				d = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...a(e)
				}),
				c = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...a(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(o.b)(t) || Object(r.b)(t))) return Object(o.b)(t) ? i.SourceElement.Comment : Object(s.x)(n) ? i.SourceElement.PostDetail : Object(s.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return E
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(o || (o = {}));
			const u = e => ({
					...m.o(e),
					source: o.LINK,
					action: r.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...m.o(e),
					source: o,
					screen: m.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const o = Object(a.b)(n) ? "postId" : "commentId",
						r = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[o]: n.id
						},
						c = Object(l.A)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...r,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: m.K(e, n.id),
						subreddit: m.kb(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...u(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: r.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: m.lb(t, e),
					screen: m.bb(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: s.ITEM_POST,
					post: m.K(n, t),
					subreddit: m.lb(n, e),
					screen: m.bb(n)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: m.K(n, t),
					subreddit: m.lb(n, e),
					screen: m.bb(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: m.kb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.kb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.kb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(i.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.K(n, e),
					subreddit: i.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.o(n)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement(r.a, i({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(s || (s = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				i = 1e4,
				a = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, n) {
			e.exports = {
				navContainer: "_2fXn_K-CtsU5UyENumO_L5",
				innerContainer: "D4pTlu3VV6Kg_fC6HNcGD",
				mDisableFullScreen: "_3ZorTtV7KSImN0_z0ufG7H",
				title: "_1m63Tp27qAqd29Jg_JFZLD",
				navChild: "mhX_cNPq9TYWEg2o5OfDb",
				mIsActive: "_3qryNXFOCTdHneRR0QlSzp",
				sidebar: "_2mohSnAqr6vkIYT6O-pVcP"
			}
		},
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/reddit/components/ModQueueList/index.tsx"),
				m = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/layout/page/Listing/index.tsx"),
				f = n("./src/reddit/models/ModQueue/index.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/lib/classNames/index.ts"),
				_ = n("./node_modules/lodash/omit.js"),
				E = n.n(_),
				k = n("./src/lib/addQueryParams/index.ts"),
				j = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				y = n.n(C);
			const w = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var S = Object(a.b)(w)(e => i.a.createElement(j.default, {
				className: Object(O.a)(y.a.navChild, {
					[y.a.mIsActive]: e.isActive
				}),
				to: Object(k.a)(`/r/mod/about/${e.pathName}`, E()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var I = e => i.a.createElement("div", {
					className: y.a.navContainer
				}, i.a.createElement("div", {
					className: Object(O.a)(y.a.innerContainer, {
						[y.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, i.a.createElement("h1", {
					className: y.a.title
				}, g.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), i.a.createElement(S, {
					title: g.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), i.a.createElement(S, {
					title: g.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), i.a.createElement(S, {
					title: g.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), i.a.createElement(S, {
					title: g.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), i.a.createElement(S, {
					title: g.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				T = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				R = n("./src/config.ts"),
				N = n("./src/lib/lessComponent.tsx"),
				M = n("./src/lib/opener/index.ts"),
				P = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				A = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				L = n.n(A);
			const F = N.a.a("ExternalLink", L.a),
				B = N.a.wrapped(j.default, "InternalLink", L.a);
			var D = () => i.a.createElement(P.a, {
				title: g.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, i.a.createElement(F, {
				href: R.a.redditModHelpUrl,
				rel: M.c,
				target: M.d.BLANK
			}, g.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), i.a.createElement(F, {
				href: `${R.a.redditUrl}/help/healthycommunities/`,
				rel: M.c,
				target: M.d.BLANK
			}, g.fbt._("Moderator code of conduct", null, {
				hk: "259o41"
			})), i.a.createElement(B, {
				to: "/r/modsupport",
				rel: M.c,
				target: M.d.BLANK
			}, "r/modsupport"), i.a.createElement(F, {
				href: `${R.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: M.c,
				target: M.d.BLANK
			}, g.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var U = e => i.a.createElement("div", {
				className: y.a.sidebar
			}, e.subredditOrProfileUrl && i.a.createElement(T.a, null, i.a.createElement(P.a, {
				title: g.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, i.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, g.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), i.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, g.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), i.a.createElement(T.a, null, i.a.createElement(D, null)));
			const H = Object(b.u)(),
				W = Object(d.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return o()([...Object(c.a)(n.search)])
					}
				}),
				V = Object(d.a)(W, b.S, x.o, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.pageName
				}, (e, t, n, s) => {
					let {
						queryParams: o
					} = e;
					const r = o.subreddit,
						i = o.profile,
						a = o.only,
						d = o.sort,
						c = `${o.page||f.b}`;
					return {
						after: o.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: c,
						pageName: s,
						postTypeFilter: a,
						postSort: d,
						profileName: i,
						subredditName: r
					}
				}),
				q = Object(a.b)(V);
			class G extends i.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(v.bb)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: n,
						layout: s,
						page: o,
						pageName: r,
						profileName: a,
						postTypeFilter: d,
						postSort: c,
						subredditName: u
					} = this.props, b = u && `r/${u}` || a && `user/${a}`, f = "unmoderated" !== r, x = f ? d : void 0;
					return i.a.createElement("div", null, n && i.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: s === p.g.Large,
						navBar: i.a.createElement(I, {
							disableFullscreen: s === p.g.Large,
							pageName: r
						}),
						content: i.a.Children.toArray([i.a.createElement(m.a, {
							key: a,
							postTypeFilter: x,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: f,
							postSort: c,
							subredditName: u
						}), i.a.createElement(l.a, {
							after: e,
							key: `${a}-${u}`,
							layout: s,
							page: o,
							pageName: r,
							postSort: c,
							postTypeFilter: x,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							subredditName: u
						})]),
						sidebar: i.a.createElement(U, {
							subredditOrProfileUrl: b
						})
					}))
				}
			}
			t.default = H(q(Object(u.c)(G)))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => o.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Kf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Rf.SmIcon || t === s.Rf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(i.ab)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.86b13990cadc20e3febe.js.map