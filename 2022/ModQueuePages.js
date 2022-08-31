// https://www.redditstatic.com/desktop2x/ModQueuePages.e2158b9428813065f011.js
// Retrieved at 8/31/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !a && !m && !u && !p && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !O && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, v && (o.version = v)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, v && (o.version = v)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (o.osversion = k);
					var C = !o.windows && k.split(".")[0];
					return O || d || "ipad" == r || a && (3 == C || C >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function a(e, s, o) {
					var a = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = r, n.check = function(e, t, n) {
					return !a(e, t, n)
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
								a = i(r),
								d = this._rootContainsTarget(r),
								c = o.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, n),
								m = o.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: a,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, r, a, d, l, m, u, p, b = i(n), h = c(n), f = !1; !f;) {
								var x = null,
									g = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == g.display) return;
								if (h == this.root || h == t ? (f = !0, x = s) : h != t.body && h != t.documentElement && "visible" != g.overflow && (x = i(h)), x && (o = x, r = b, a = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, a = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), p = d - a, !(b = (u = m - l) >= 0 && p >= 0 && {
										top: a,
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
						if (this.root) e = i(this.root);
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

				function a(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function i(e) {
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
				a = n("./node_modules/lodash/toInteger.js"),
				i = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = o(e) ? e : i(e), n = n && !c ? a(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && s(e, t, n) > -1
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = i(e) ? s : a,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var n = i,
					c = d(e, i);
				t = o(t), e -= i;
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
					a = Object.keys(t);
				if (r.length !== a.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), d = 0; d < r.length; d++) {
					var c = r[d];
					if (!i(c)) return !1;
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
				a = n("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
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
						i = p(o.target, o.currentTarget);
					r && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, r, i)) : n(n => {
						const s = t(e, r, i)(n);
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
							actionInfo: Object(a.R)(n, o)
						}
					})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: a,
						...c
					} = t, l = Object(s.useCallback)(d(a, r, n), [a, r, n]);
					return o.a.createElement(e, i({}, c, {
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
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				a = Object(s.a)(o.b),
				i = Object(s.a)(o.a)
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
				return C
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "b", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
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
				g = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(v.p),
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
					if (!Object(x.Q)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = n().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? m.n : m.g;
					t(Object(g.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(g.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, k = Object(r.a)(v.J), C = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: a
					} = o;
					const i = n(),
						l = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
					l && u && (t(Object(g.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(f.a)(i) ? await Object(m.a)(a(), e) : await Object(m.b)(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(g.j)({
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
				}, j = (e, t) => async (n, o, r) => {
					let {
						apiContext: a,
						gqlContext: i
					} = r;
					const l = o(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (n(Object(g.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(f.a)(l) ? await Object(m.i)(i(), e, t) : await Object(m.j)(a(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(g.j)({
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
					const a = n().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.m : m.f;
					t(Object(g.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(g.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, S = (e, t, n) => async (r, a, i) => {
					let {
						gqlContext: d
					} = i;
					const l = Object(h.b)(a(), {
						commentId: e
					});
					if (!l) return;
					const m = n === o.hc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: f
						})).ok) r(Object(g.j)({
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
				}, I = (e, t, n) => async (s, r, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					s(Object(g.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.H.ADMIN,
							isMod: t === o.H.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(g.j)({
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
						commentsPageKey: Object(a.a)(p, null, {
							sort: o.u.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(g.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), s(Object(g.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "f", (function() {
				return ae
			})), n.d(t, "a", (function() {
				return ie
			})), n.d(t, "b", (function() {
				return de
			})), n.d(t, "c", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/removalReasons/index.ts"),
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
				g = n("./src/redditGQL/types.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const k = {
					[o.ub.Edited]: g.v.Edited,
					[o.ub.Modqueue]: g.v.Mod,
					[o.ub.Reports]: g.v.Reported,
					[o.ub.Spam]: g.v.Removed,
					[o.ub.Unmoderated]: g.v.Unmoderated
				},
				C = {
					comments: g.t.Comment,
					links: g.t.Post,
					chat_comments: g.t.ChatComment
				};

			function j(e) {
				let {
					getState: t,
					queueType: n,
					options: s
				} = e;
				const o = t();
				let r;
				s.only && (r = C[s.only]);
				const a = {};
				s.after && (a[s.sort === b.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const n = Object(h.a)(t) ? Object(x.G)(e, {
						postId: t
					}) : Object(f.b)(e, {
						commentId: t
					});
					if (n) return Object(p.btoa)(`${n.id}|${n.created}`)
				}(o, s.after));
				const i = {};
				return s.sort === b.a.OldestFirst ? i.last = 25 : i.first = 25, {
					queueType: k[n],
					moderatedAfter: s.moderatedAfter,
					...i,
					...!!r && {
						itemTypes: r
					},
					...!!s.subreddit && {
						subredditNames: Array.isArray(s.subreddit) ? s.subreddit : [s.subreddit]
					},
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === b.a.MostReportedFirst ? g.u.SortReports : g.u.SortDate,
					...a
				}
			}
			var y;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(y || (y = {}));
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
			});

			function I(e) {
				let {
					modQueueItems: t,
					identity: n
				} = e;
				var s, o, r, a;
				const i = {
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
					userFlair: {}
				};
				if (!t) return i;
				if (!t.edges) return i;
				const d = null === (a = null === (r = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.edges) || void 0 === a ? void 0 : a.reduce((e, t) => {
					var n;
					if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = S(s), e.subreddits[t.node.id] = Object(E.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return i.moderatingSubreddits = (null == d ? void 0 : d.moderatingSubreddits) || {}, i.subreddits = (null == d ? void 0 : d.subreddits) || {}, t.edges.forEach(e => {
					var t, n;
					if (!e) return;
					const {
						node: s
					} = e;
					if (!s) return;
					const {
						__typename: o,
						subredditInfo: r
					} = s;
					if (!r) return;
					const {
						id: a
					} = r;
					if (i.subreddits[a] = Object(E.a)(r), i.moderatingSubreddits[a] || "Subreddit" !== (null == r ? void 0 : r.__typename) || (i.moderatingSubreddits[a] = S(r.modPermissions)), !i.postFlair[a] && "Subreddit" === r.__typename) {
						const {
							position: e,
							isEnabled: t
						} = (null == r ? void 0 : r.postFlairSettings) || {};
						i.postFlair[a] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: t
							}
						}
					}
					if (o === y.Comment || o === y.ChatComment) {
						const {
							commentInfo: e
						} = s;
						if (!e) return;
						const n = Object(v.a)(e);
						i.comments[n.id] = n, i.listingOrder.push({
							id: n.id,
							type: "comment"
						}), i.modqueue.push(n.id);
						const {
							authorInfo: o,
							authorFlair: r
						} = e, d = r ? null === (t = Object(O.a)(r)) || void 0 === t ? void 0 : t[0] : null;
						i.authorFlair[a] = {
							...i.authorFlair[a],
							...(null == o ? void 0 : o.name) ? {
								[null == o ? void 0 : o.name]: d
							} : {}
						};
						const c = [];
						n.modReports.forEach(e => {
							c.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), n.userReports.forEach(e => {
							c.push({
								type: "user",
								reason: e[0]
							})
						}), i.reports[n.id] = c
					}
					if (o === y.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const t = Object(_.f)(e);
						i.posts[t.id] = t, i.listingOrder.push({
							id: t.id,
							type: "post"
						}), i.modqueue.push(t.id);
						const {
							authorInfo: o,
							authorFlair: r
						} = e, d = r ? null === (n = Object(O.a)(r)) || void 0 === n ? void 0 : n[0] : null;
						i.authorFlair[a] = {
							...i.authorFlair[a],
							...(null == o ? void 0 : o.name) ? {
								[null == o ? void 0 : o.name]: d
							} : {}
						};
						const c = [];
						t.modReports.forEach(e => {
							c.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							c.push({
								type: "user",
								reason: e[0]
							})
						}), i.reports[t.id] = c
					}
				}), i
			}
			var T = n("./src/reddit/models/ModQueue/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/selectors/modQueue.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				R = n("./src/reddit/selectors/telemetry.ts"),
				P = n("./src/telemetry/index.ts"),
				L = n("./src/lib/initializeClient/installReducer.ts"),
				A = n("./src/reddit/reducers/pages/modHub/index.ts"),
				F = n("./src/reddit/actions/modQueue/constants.ts");
			Object(L.a)({
				pages: {
					modHub: A.a
				}
			});
			const B = Object(r.a)(F.j),
				D = Object(r.a)(F.i),
				U = Object(r.a)(F.h),
				W = Object(r.a)(F.g),
				H = Object(r.a)(F.f),
				V = Object(r.a)(F.e),
				Q = Object(r.a)(F.n),
				q = Object(r.a)(F.m),
				G = Object(r.a)(F.l),
				J = Object(r.a)(F.q),
				X = Object(r.a)(F.p),
				z = Object(r.a)(F.o),
				K = Object(r.a)(F.w),
				Y = Object(r.a)(F.v),
				Z = Object(r.a)(F.u),
				$ = (e, t, n) => async (r, a, i) => {
					let {
						apiContext: m,
						gqlContext: u
					} = i;
					var p;
					let b, h, f;
					switch (t) {
						case o.ub.Edited:
							b = W, h = V, f = H;
							break;
						case o.ub.Modqueue:
							b = B, h = U, f = D;
							break;
						case o.ub.Reports:
							b = Q, h = G, f = q;
							break;
						case o.ub.Spam:
							b = J, h = z, f = X;
							break;
						case o.ub.Unmoderated:
							b = K, h = Z, f = Y;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (r(b()), n.profile) {
						const e = null === (p = (await Object(l.b)(m(), n.profile)).body[n.profile]) || void 0 === p ? void 0 : p.profileId;
						n.profile = e
					}
					const x = j({
							getState: a,
							queueType: t,
							options: n
						}),
						g = await Object(c.b)(u(), x);
					if (!g.ok) return r(h(g.error)), void r(Object(d.f)({
						kind: w.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const v = I(g.body.data);
					r(f({
						listingKey: e,
						page: `${n.page||T.b}`,
						response: v
					}))
				}, ee = Object(r.a)(F.k), te = Object(r.a)(F.b), ne = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const a = n(),
						i = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						l = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = a.platform.currentPage.urlParams;
					if (e && l || m || !i) return;
					const p = j({
							getState: n,
							queueType: u,
							options: {
								moderatedAfter: i
							}
						}),
						b = await Object(c.b)(r(), p);
					if (!b.ok) return void t(Object(d.f)({
						kind: w.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const h = I(b.body.data);
					t(ee(h)), h.moderatedAfter ? t(ne()) : t(te())
				}, se = Object(r.a)(F.t), oe = Object(r.a)(F.s), re = Object(r.a)(F.r), ae = (e, t, n) => async (o, r, l) => {
					let {
						apiContext: p
					} = l;
					o(Object(a.c)());
					const b = r(),
						f = Object(N.g)(b),
						x = b.user.account && b.user.account.displayText;
					Object(m.d)(m.a.ModQueue);
					const g = Object(m.c)(m.a.ModQueue);
					Object(P.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...R.n(b),
						actionInfo: R.d(b, {
							count: f.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: R.ab(b),
						correlationId: g
					});
					for (let t = 0; t < f.length; t++) {
						const n = f[t];
						let s = e;
						[T.a.Approve, T.a.Remove, T.a.Spam].includes(e) && (Object(h.a)(n) ? s += "_link" : s += "_comment"), Object(P.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...R.n(b),
							actionInfo: R.d(b, {
								count: f.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: R.h(b, n),
							post: R.J(b, n),
							profile: R.U(b, n),
							screen: R.ab(b),
							subreddit: R.lb(b, n),
							correlationId: g
						})
					}
					Object(m.b)(m.a.ModQueue);
					const v = {
						ids: f
					};
					t && (v.text = Object(u.g)(t) || "", v.flairTemplateId = ""), n && (v.cssClass = n, v.flairTemplateId = n);
					const O = await Object(c.a)(p(), e, v);
					if (O.ok) {
						o(Object(a.b)({
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
								case T.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case T.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case T.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case T.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case T.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case T.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case T.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case T.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case T.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case T.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case T.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case T.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case T.a.Unspoiler:
								case T.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== T.a.Approve && e !== T.a.Flair) {
							let t, r;
							const l = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = l && Object(M.G)(b, l);
							e === T.a.Remove && m && f.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(i.fetchReasonsAndOpenModal)(m, f));
							const u = Object(d.e)(n, w.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: o
								} = n;
								e(se());
								const r = t(),
									i = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									l = r.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									m = r.user.account && r.user.account.displayText;
								e(Object(a.c)());
								const u = await Object(c.a)(o(), i, {
									ids: l
								});
								u.ok ? e(oe({
									...u.body,
									operation: i,
									ids: l,
									username: m
								})) : (e(re(u.error)), e(Object(d.f)({
									kind: w.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							o(Object(d.f)(u))
						} else {
							const e = Object(d.e)(n, w.b.SuccessMod);
							o(Object(d.f)(e))
						}
					} else {
						o(Object(a.a)(O.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), w.b.Error);
						o(Object(d.f)(e))
					}
				}, ie = Object(r.a)(F.a), de = Object(r.a)(F.c), ce = Object(r.a)(F.d)
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
				return ae
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ie
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
				return ge
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), n.d(t, "submitRemovalReason", (function() {
				return ke
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
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
					case a:
					case i:
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
						case i:
						case l:
						case p:
							return !0;
						case a:
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
				g = Object(r.c)({
					error: f,
					pending: x
				});
			const v = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
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
					case a: {
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
				C = Object(r.c)({
					api: g,
					models: O,
					reasonOrder: E,
					removedItemIds: k
				}),
				j = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				S = n("./src/lib/makeCommentsPageKey/index.ts"),
				I = n("./src/lib/makeDraftKey/index.ts"),
				T = n("./src/reddit/actions/bulkActions/index.ts"),
				w = n("./src/reddit/actions/comment/index.ts"),
				N = n("./src/reddit/actions/comment/authoring.ts"),
				M = n("./src/reddit/actions/comment/moderation.ts"),
				R = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				B = n("./src/lib/omitHeaders/index.ts"),
				D = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: j.mb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: j.mb.POST,
					type: "json",
					data: t
				});
			var V = n("./src/reddit/helpers/isPost.ts"),
				Q = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				J = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/RemovalReason/index.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				Y = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(y.a)(a),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: j.mb.GET
					}))(o(), r);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, ne = Object(y.a)(i), se = Object(y.a)(d), oe = Object(y.a)(c), re = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: j.mb.POST,
						data: n
					}))(a(), i, t);
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
						})), n(Object(L.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(d.error))
				}, ae = Object(y.a)(l), ie = Object(y.a)(m), de = Object(y.a)(u), ce = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(ae());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: j.mb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(a(), i, t);
					d.ok ? (n(ie({
						subredditId: e,
						reason: t
					})), n(Object(L.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, le = Object(y.a)(p), me = Object(y.a)(b), ue = Object(y.a)(h), pe = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(le());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: j.mb.DELETE
					}))(a(), i, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(L.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(R.i)(A.a.ADD_REMOVAL_REASON))
				}, fe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, n, s, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? X.e.Post : X.e.Comment,
						b = p === X.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === X.e.Post ? P.S : w.j;
					if (!b || !m) return !1;
					a(fe()), a(h({
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
						x = await W(c(), f);
					if (x.ok) {
						if (a(xe()), t) {
							a(ve());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								i = await H(c(), Object(X.h)(o, p), p);
							if (i.ok) {
								if ([X.f.Public, X.f.PublicAsSubreddit].includes(s)) {
									if (a(_e()), i.body) {
										const e = Object(Q.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											n = Object(Y.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(q.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: j.v,
												hasSortParam: !0
											})), p === X.e.Post) {
											const n = Object(I.a)(J.c.replyToPost, u);
											a(Object(N.r)({
												...t,
												headCommentId: Object(K.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[u];
											a(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && a(Object(w.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === X.e.Comment) {
											const e = Object(I.a)(J.c.replyToComment, b.id),
												n = Object(K.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											a(Object(N.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else a(Oe());
								return !0
							}
							return a(Ee(i.error)), !1
						}
					} else a(ge(x.error)), a(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, n, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(fe());
					const u = Object(L.f)({
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
						b = await W(c(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(T.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await H(c(), Object(X.h)(s, X.e.Bulk), X.e.Bulk);
							r.ok ? (a(Oe()), a(u)) : a(Ee(r.error))
						} else a(u)
					} else a(ge(b.error))
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
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts");
			const u = Object(o.a)(i.v),
				p = Object(o.a)(i.u),
				b = Object(o.a)(i.t),
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
					undoCallback: i
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: g
					} = x;
					var v, O, _;
					e(p());
					const E = h(n),
						k = await Object(c.b)(g(), t, E);
					if ((null === (O = null === (v = k.error) || void 0 === v ? void 0 : v.fields) || void 0 === O ? void 0 : O.length) || function(e) {
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
					})), o && o(), e(i ? Object(d.f)(Object(d.e)(f(n), m.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, i))) : Object(d.f)(Object(d.e)(f(n), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = n.n(r);
			const i = s.a.wrapped(o.c, "RestrictedButton", a.a);
			t.a = i
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				S = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				I = n.n(S);
			const T = Object(h.u)(),
				w = e => `Distinguish--Dropdown--${e}`,
				N = Object(i.c)({
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
						return Object(v.b)(w(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(g.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.U
				}),
				M = Object(a.b)(N, (e, t) => {
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
							tooltipId: w(n.id)
						}))
					}
				});
			t.a = T(M(l.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: o,
					isCommentAuthor: a,
					collapsedBecauseCrowdControl: i,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: b,
					onLockComment: h,
					onRemoveComment: x,
					onShowComment: g,
					onSpamComment: v,
					onToggleDistinguishDropdown: O,
					sendEvent: S,
					pageLayer: T,
					...w
				} = e;
				const N = Object(p.b)(n),
					M = n.isApproved && N,
					R = !n.isRemoved || n.bannedBy === c.l,
					P = i,
					L = e => S(Object(f.b)(e, n.id)),
					A = "chat_comments" === (null == T ? void 0 : T.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && r.a.createElement(y.a, {
					text: M ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), A && S(Object(f.a)("approve", n.id)), L("approve")
					}
				}, r.a.createElement(_.a, {
					className: I.a.icon
				})), R && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: n.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), A && S(Object(f.a)("remove", n.id)), n.bannedBy === c.l ? L("confirm_remove") : L("remove")
					}
				}, r.a.createElement(k.a, {
					className: I.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), L("spam")
					}
				}, r.a.createElement(C.a, {
					className: I.a.icon
				}))), r.a.createElement(y.a, {
					text: n.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), L(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(E.a, {
					className: I.a.icon
				})), P && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, r.a.createElement(j.a, {
					className: Object(d.a)(I.a.icon, I.a.Show)
				})))
			}), "CommentModToolsFlatlist", I.a)))
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isEmbeddedLiveChat: l,
					isStrong: u,
					onClick: b,
					style: h
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: o.author,
					className: Object(d.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
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
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				v = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				O = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				E = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				C = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				S = n("./src/lib/constants/index.ts"),
				I = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(w);
			const M = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: o,
					isLivestreaming: a,
					isEmbeddedLiveChat: i,
					isStrong: c,
					onClick: l,
					renderedInOverlay: m
				} = e;
				const u = Object(j.f)(s),
					p = r.a.createElement(I.b, {
						ignore: u || !!s.distinguishType && s.distinguishType !== S.H.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, r.a.createElement(b, {
						className: t,
						collapsed: o,
						comment: s,
						isAuthorDeleted: Object(j.f)(s),
						isCommentAuthorBlocked: Object(j.g)(s),
						isLivestreaming: a,
						isEmbeddedLiveChat: i,
						isStrong: c,
						onClick: l
					}));
				return u || i ? p : r.a.createElement(T.b, {
					className: Object(d.a)(N.a.authorHoverCard, n),
					collapsed: o,
					isCommentAuthorBlocked: Object(j.g)(s),
					postOrComment: s,
					tooltipType: m ? O.c.Lightbox : void 0
				}, p)
			};
			var R = n("./src/config.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = function(e, t) {
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
				const i = Object(a.d)(),
					c = () => i(Object(P.h)({
						tooltipId: l
					})),
					l = A("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(D.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(L.c, {
					tooltipId: l,
					text: m
				}))
			};
			var W = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				Q = n("./src/reddit/components/HumanDate/index.tsx"),
				q = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(a.d)(), m = A("CommentTopMeta--Created--", n.id, d), u = () => l(Object(P.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(W.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == o || o(e), J(l, n.id), c && (e.preventDefault(), l(Object(V.Z)(Object(q.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(Q.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(L.c, {
						tooltipId: m
					}, r.a.createElement(Q.b, {
						seconds: n.created
					})))
				},
				J = (e, t) => {
					window.addEventListener("focus", (function n() {
						X(e, t, n)
					}))
				},
				X = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				K = n.n(z);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(_.a, {
				className: K.a.crowdControlText
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
				}, te._("edited {time}", [te._param("time", r.a.createElement(Q.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var se = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				re = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				de = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Report/index.tsx"),
				le = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ue = n.n(me);
			const pe = e => {
				let {
					comment: t,
					ignoreLock: o,
					renderedInOverlay: i,
					isAdmin: d
				} = e;
				const c = Object(a.d)(),
					l = e => () => c(Object(P.f)({
						tooltipId: e
					})),
					m = () => c(Object(P.i)()),
					u = e => A(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					b = u("CommentTopMeta--Remove--"),
					h = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					x = l(b);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: ue.a.approveIcon,
					desc: Object(oe.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: p,
					text: Object(oe.a)(t)
				})), Object(se.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: ue.a.removeIcon,
					desc: Object(oe.b)(t),
					id: b,
					onMouseEnter: x,
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: b,
					text: Object(oe.b)(t)
				})), Object(se.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement("a", {
					className: ue.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(se.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement("a", {
					className: ue.a.removalReason,
					onMouseEnter: x,
					onMouseLeave: m
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(ie.a, {
					className: ue.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: ue.a.spamIcon,
					desc: Object(oe.d)(t),
					id: f,
					onMouseEnter: l(f),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: f,
					text: Object(oe.d)(t)
				})), Object(re.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: ue.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: h,
					onMouseEnter: l(h),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: h,
					text: Object(oe.c)(t.numReports)
				})), t.isDeleted && d && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: ue.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: ue.a.userDeletion
				}, s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var be, he = n("./src/lib/colors/constants.ts"),
				fe = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(be || (be = {}));
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(xe);
			const ve = {
					[be.Admin]: {
						color: he.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[be.Mod]: {
						color: he.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[be.ModTeam]: {
						color: he.d,
						getLabel: () => s.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[be.Op]: {
						color: he.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[be.AlumniAdmin]: {
						color: he.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[be.Contractor]: {
						color: he.a,
						getLabel: () => s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				Oe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							if (e.isAdmin) return be.Admin;
							const t = e.isMod || e.distinguishType === S.H.MODERATOR;
							return t && e.author && Object(fe.a)(e.author) ? be.ModTeam : t ? be.Mod : e.isOp ? be.Op : e.distinguishType === S.H.ALUMNI_ADMIN ? be.AlumniAdmin : e.authorIsContractor ? be.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === be.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						getLabel: i,
						tooltipTemplate: c
					} = ve[n], l = i(), m = A(s, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(P.h)({
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
					}, r.a.createElement("span", null, l), (n === be.Mod || n === be.ModTeam) && r.a.createElement(_e, null)), r.a.createElement(L.c, {
						tooltipId: m,
						text: u
					}))
				},
				_e = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = n.n(Ee);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = () => r.a.createElement(_.a, {
				className: ke.a.stickiedText
			}, Ce._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Se = n.n(ye);
			const Ie = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: S,
					permalink: I,
					renderContractorBadge: T,
					renderedInOverlay: w,
					subredditDisplayText: N,
					isAdmin: R
				} = e, P = Object(C.a)(), L = i.subredditId, A = Object(a.e)(e => Object(y.m)(e, {
					subredditId: L
				}));
				if (i.isDeleted && !R) return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, r.a.createElement("span", {
					className: Se.a.metaText
				}, i.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Se.a.metaText,
					comment: i,
					compact: !0,
					permalink: I,
					renderedInOverlay: w
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, !Object(j.f)(i) && r.a.createElement(f.b, {
					className: Se.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Se.a.baselineItem
				}, r.a.createElement(M, {
					authorClassName: Se.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: w
				})), !Object(j.f)(i) && u && r.a.createElement(v.a, {
					postOrComment: i,
					className: Se.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(Z, null), r.a.createElement(Oe, {
					className: Se.a.role,
					comment: i,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: w
				}), i.isAuthorCakeday ? r.a.createElement(U, {
					className: Se.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: w
				}) : !Object(j.f)(i) && A && r.a.createElement(h.a, {
					className: Se.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						P(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(g.a, {
					className: Se.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Se.a.metaText,
					comment: i,
					compact: !0,
					onClick: S,
					permalink: I,
					renderedInOverlay: w
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(je, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: w,
					isAdmin: R
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: w ? O.c.Lightbox : void 0
				})), c && !Object(E.o)(c) && r.a.createElement("span", {
					className: Se.a.userFlairLine
				}, r.a.createElement(x.b, {
					className: Se.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				we = n("./src/reddit/selectors/economics.ts"),
				Ne = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Re = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Le = n("./src/reddit/selectors/subreddit.ts"),
				Ae = n("./src/reddit/selectors/userFlair.ts"),
				Fe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Be = n.n(Fe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Be.a),
				We = c.a.span("DeletedText", Be.a),
				He = c.a.wrapped(_.a, "MetaSeparator", Be.a),
				Ve = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(we.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Le.K)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Re.b,
					isBlockingInterstitialV2Enabled: Re.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Pe.i)(e, n.subredditId)
					}
				}));
			t.a = Ve(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					hideAwards: h = !1,
					ignoreFlairPosition: v,
					ignoreLock: E,
					isAdmin: k,
					isBlockingInterstitialEnabled: C,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: S,
					isLivestreaming: I,
					isEmbeddedLiveChat: T,
					isPostComment: w,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					renderContractorBadge: P,
					renderedInOverlay: L,
					subredditDisplayText: A,
					userHasNft: F
				} = e, B = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te.b, {
					commentId: a.id
				}), r.a.createElement(Te.a, {
					commentId: a.id,
					commentsPageKey: c
				}));
				if (w) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
					className: Object(d.a)(n, {
						[Be.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: u || null,
					ignoreLock: E,
					isAdmin: k,
					isModWithUserNotesPermissions: S,
					isLivestreaming: I,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					permalink: i,
					renderContractorBadge: !!P,
					renderedInOverlay: L,
					subredditDisplayText: A
				}), B);
				if (a.isDeleted) return r.a.createElement(Qe, De({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(qe, De({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: s
					})
				}));
				const D = !v && p === Ne.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: s,
						[Be.a.hasBadges]: b,
						[Be.a.liveStreaming]: I
					}),
					"data-testid": "comment-top-meta"
				}, u && D && r.a.createElement(x.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(j.f)(a) && r.a.createElement(f.b, {
					className: Be.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(M, {
					authorClassName: F ? Be.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: I,
					isEmbeddedLiveChat: T,
					isStrong: !!m,
					onClick: N,
					renderedInOverlay: L
				}), o && r.a.createElement(Z, null), o && r.a.createElement(_.c, {
					className: Be.a.metaText,
					key: "crowdControlSeparator"
				}), u && !D && r.a.createElement(Ue, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(g.a, {
					className: Be.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(_.c, {
						className: Be.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), B, r.a.createElement(Oe, {
					className: Be.a.authorRole,
					comment: a,
					subredditDisplayText: A,
					renderContractorBadge: !!P,
					renderedInOverlay: L
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !w && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: Be.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(_.c, {
					className: Be.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Be.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: L,
					isBlockingInterstitialEnabled: C || y
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Be.a.separator
				}), r.a.createElement(je, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Be.a.separator
				}), r.a.createElement(ne, {
					editedAt: a.editedAt
				}))), r.a.createElement(pe, {
					comment: a,
					ignoreLock: E,
					renderedInOverlay: L
				}), !h && r.a.createElement(l.a, {
					thing: a,
					tooltipType: L ? O.c.Lightbox : void 0
				}))
			});
			const Qe = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(We, null, a.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && Ge({
						childrenInfo: t
					}))
				},
				qe = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t),
						collapsed: a
					})), r.a.createElement(_.b, {
						className: Be.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: Be.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d || c
					}), Ge({
						childrenInfo: s
					}))
				},
				Ge = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(He, {
						className: Be.a.metaText
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
		"./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				BulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				bulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				UnthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				unthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				CommentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				commentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				ModToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				modToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				CommentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				commentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				CommentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				commentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				LeftRail: "Z9hmG99TfBJCAbBf-qUN5",
				leftRail: "Z9hmG99TfBJCAbBf-qUN5",
				hasBorder: "_1XsRq0m2kXDelxfbhz55U6",
				VoteColumn: "raHWe-JvKoiuubD1zI79q",
				voteColumn: "raHWe-JvKoiuubD1zI79q",
				Votes: "EJ8j2TI5xV293AHVFV98I",
				votes: "EJ8j2TI5xV293AHVFV98I",
				score: "_1dQ0ZDSConSfUQpPh7-fct",
				ParentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				parentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				Component: "_3WdgziOPlXBwthdefEr85r",
				component: "_3WdgziOPlXBwthdefEr85r",
				isBanned: "_34REldWOs0k5_KaRonS2V5",
				isReported: "sYxWb5PNRmW4dH0vC6Qiy"
			}
		},
		"./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				voteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				ContentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				contentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				Meta: "TmC-aUr9G4BhD7f1fazLW",
				meta: "TmC-aUr9G4BhD7f1fazLW",
				CommentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				commentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				CommentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				commentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				Component: "_3Pul81GjcQcqXueoAqkS0P",
				component: "_3Pul81GjcQcqXueoAqkS0P"
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
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
				g = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = n.n(j),
				S = n("./src/lib/lessComponent.tsx");
			const I = S.a.div("VoteSpacer", y.a),
				T = S.a.div("ContentWrapper", y.a),
				w = S.a.div("CommentContentWrapper", y.a),
				N = S.a.div("CommentBody", y.a),
				M = S.a.div("ParentPostTitle", y.a),
				R = S.a.div("CommentParentWrapper", y.a),
				P = Object(a.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: E.m,
					flair: E.e,
					subreddit: C.K
				}),
				L = Object(r.b)(P, (e, t) => {
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
				A = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = L(S.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: a,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: _,
					subreddit: E,
					showBulkActionCheckbox: k,
					toggleCheckbox: C
				} = e, j = Object(f.a)(n);
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, o.a.createElement(g.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: k,
					isCheckboxSelected: i,
					toggleCheckbox: C
				}), o.a.createElement(I, null, o.a.createElement(T, null, o.a.createElement(R, null, n.postTitle && o.a.createElement(M, null, n.postTitle), n.postAuthor && o.a.createElement(b.a, {
					comment: n
				})), o.a.createElement(w, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(N, null, o.a.createElement(v.b, {
					content: Object(O.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: A(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				})), o.a.createElement(p.a, {
					comment: n,
					flair: r,
					subredditName: E ? E.displayText : null
				}), j && o.a.createElement(h.a, {
					thing: n
				}), a && o.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && o.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", y.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
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
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(a.a)(t, {
						context: 3
					})) : n(Object(a.a)(t, {
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
			t.a = c(Object(i.a)(l))
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
				a = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(a);
			const d = r.a.div("DashWrapper", i.a);
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
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(i.a, "Inline", c.a),
				u = l.a.wrapped(i.a, "PostedInfo", c.a),
				p = l.a.wrapped(i.a, "SubredditWrapper", c.a),
				b = l.a.div("TextContainer", c.a),
				h = l.a.wrapped(a.a, "TopMeta", c.a);
			t.a = e => r.a.createElement(m, {
				className: e.className
			}, e.subredditName && r.a.createElement(p, null, e.subredditName && r.a.createElement(b, null, e.subredditName)), r.a.createElement(u, null, r.a.createElement(b, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
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
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(r.a, "AuthorLink", l.a), h = u.a.wrapped(d.a, "Inline", l.a), f = u.a.wrapped(d.a, "SubredditWrapper", l.a), x = u.a.div("TextContainer", l.a), g = u.a.wrapped(i.b, "SubredditIcon", l.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(f, null, e.subredditOrProfile && o.a.createElement(g, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(x, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(a.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.F
			}, `u/${e.comment.postAuthor}`)))
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				E = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				k = n.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				y = "LayoutSwitch--picker",
				S = Object(d.a)(x.a),
				I = {
					[b.d.Card]: function(e) {
						return r.a.createElement(v.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return r.a.createElement(v.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return r.a.createElement(v.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				T = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				w = Object(h.u)(),
				N = Object(i.c)({
					dropdownIsOpen: Object(_.b)(y),
					postLayout: h.S,
					redditStyle: h.D
				}),
				M = Object(a.b)(N, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.y)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: y
					}))
				}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: o
						} = this.props;
						t ? t(e) : (n(e, o), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.ab)(t),
							subreddit: Object(O.ib)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: o
						} = this.props, a = n || b.e[o], i = e === a, d = I[e], l = T[e];
						return r.a.createElement(g.b, C({}, t, {
							className: Object(c.a)(k.a.LayoutItem, {
								[k.a.selected]: i,
								[k.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: k.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: k.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: k.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(S, C({}, e, {
							className: k.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: k.a.DropdownRow,
							rowIconClassName: k.a.DropdownRowIcon,
							rowSelectedClassName: k.a.DropdownRowSelected,
							tooltipId: y
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, o = t || b.e[s];
					return r.a.createElement("div", {
						className: Object(c.a)(k.a.Container, e),
						id: j
					}, r.a.createElement("div", {
						className: k.a.DropdownContainer,
						onClick: n
					}, this.renderItem(o, {
						id: y,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = w(M(Object(p.c)(Object(l.a)(R))))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
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
				a = Object(o.a)("spBurnLinks", Object(s.a)({
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
				a = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(a);
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
						className: i.a.unblurButtonContainer
					}, r.a.createElement("button", {
						className: i.a.unblurButton
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(r.b)(() => Object(a.c)({
					isNightmodeOn: u.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(i.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
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
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/constants/tracking.ts"),
				j = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(y);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * O.e,
				w = e => r.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[S.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				N = e => {
					const t = Object(c.a)(S.a.image, h.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${O.j}px`), e.isListing || e.isTall && T(e.height) || (n.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const a = Object(o.useRef)(null),
						[i, d] = Object(o.useState)(!1),
						l = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && d(!0)
							})
						}, [i]),
						m = Object(o.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(a, l, m.current);
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
						ref: a,
						style: f.current
					}, i ? r.a.createElement(w, I({}, e, {
						className: t
					})) : r.a.createElement("noscript", null, r.a.createElement(w, I({}, e, {
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
				M = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				R = Object(a.b)(() => Object(d.a)(_.F, k.jb, (e, t) => {
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
			t.a = R(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					"data-adclicklocation": j.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const P = (e, t) => r.a.createElement(N, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[C.a]: !e
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
				L = e => {
					let {
						onClick: t,
						...n
					} = e;
					const o = Object(O.L)(n.height, n.width),
						a = T(n.height) && o;
					return r.a.createElement(M, I({}, n, {
						className: `${o?`${C.a} `:""}${n.className||""}`
					}), n.isListing ? r.a.createElement("div", {
						className: n.contentImageClassName
					}, P(o, n)) : r.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: S.a.imageLink
					}, P(o, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && r.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > O.j && Object(O.L)(n.height, n.width) && r.a.createElement("div", {
						className: S.a.seeMore
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
				a = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(i.B)(e.height, e.width, e.forceAspectRatio);
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
				return j
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
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
			var g = n("./src/lib/forceHttps/index.ts"),
				v = n("./src/lib/hooks/usePrevious.ts");

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
					shouldLoad: i,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: m,
					...u
				} = e;
				const p = Object(r.useRef)(),
					b = Object(r.useRef)(),
					h = Object(v.a)(d);

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
						let a = !1,
							i = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(i = d);
							if (e.paused || e.seeking || !n) return void(i = d);
							const o = a;
							4 === e.readyState ? a = !1 : !a && d >= i && d < i + x ? a = !0 : a && d >= i && d > i + x && (a = !1), i = d, o !== a && t(a)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", o)
						}
					}(b.current, o), () => {
						p.current && p.current()
					}
				}, []), Object(r.useEffect)(() => {
					h !== d && _(!d && (t || s))
				}, [h, d, t, s]), a.a.createElement("video", O({}, u, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(g.a)(m || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				k = n.n(E);
			const C = Object(d.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function j(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: r,
					started: d
				} = Object(i.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: g,
					showFull: v,
					shouldPause: O,
					width: E,
					isListing: j,
					className: y,
					showCentered: S,
					originalSource: I,
					isPromoted: T
				} = e, w = t && !(T && Object(c.hasAcceptableAds)()), N = Object(i.d)();

				function M(e) {
					N(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function R() {
					return N(Object(m.z)({
						postId: b
					}))
				}
				const P = o()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(m.s)(b))
				}, 200);

				function L(e) {
					e.persist(), P(e)
				}

				function A(e) {
					var t;
					(r || B(e), d) || (t = e.timeStamp, N(Object(m.A)(b, t)))
				}

				function F(e) {
					N(Object(m.q)(b, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						N(Object(m.D)({
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
					s || A(e), r || B(e), N(Object(m.C)(b))
				}

				function U() {
					const e = {};
					return S && (e.margin = "0 auto"), j || (e.maxHeight = `${p.e}px`), a.a.createElement(_, {
						autoplay: w,
						className: Object(l.a)(u.a, k.a.styledVideo),
						height: x,
						isListing: j,
						isNotCardView: g,
						key: b,
						loop: !0,
						onBufferingChange: M,
						onLoadStart: F,
						onLoadedData: A,
						onLoadedMetadata: B,
						onPause: R,
						onPlaying: D,
						onTimeUpdate: L,
						shouldLoad: h,
						shouldPause: O,
						showCentered: S,
						showFull: v,
						source: f,
						style: e,
						width: E
					})
				}
				return j ? U() : a.a.createElement("div", {
					className: Object(l.a)(k.a.container, y, {
						[k.a.centered]: S
					})
				}, a.a.createElement("a", {
					href: I,
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
				a = n.n(r),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
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
				fallback: a.a.createElement(l, null),
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
				a = n.n(r),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3gono-WZrSL-d6xVXvjtMy",
				container: "_3gono-WZrSL-d6xVXvjtMy",
				Image: "cSzjL6IStvPqHPZ7Y7ly8",
				image: "cSzjL6IStvPqHPZ7Y7ly8",
				Title: "_15y0pZYrlSHF1PcfsddZ-q",
				title: "_15y0pZYrlSHF1PcfsddZ-q",
				Text: "_2jaFduo9u1gW746Eq2bUKo",
				text: "_2jaFduo9u1gW746Eq2bUKo"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.m.less": function(e, t, n) {
			e.exports = {
				Inline: "_3JHX3et1k6IdasjG0oW12P",
				inline: "_3JHX3et1k6IdasjG0oW12P",
				Filter: "_1OcIyF84egvn4Y6482t8jQ",
				filter: "_1OcIyF84egvn4Y6482t8jQ",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, n) {
			"use strict";
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modQueue/index.ts"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				g = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				E = n("./src/lib/addQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				j = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/selectors/experiments/chat.ts"),
				I = n("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				T = n.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(s || (s = {}));
			const w = m.a.wrapped(C.b, "Row", T.a),
				N = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: y.k,
					isModQChatCommentsFilterEnabled: S.k
				});
			var M = Object(i.b)(N)(e => a.a.createElement("div", null, a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(w, {
					displayText: o.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Posts
					})
				}, a.a.createElement(w, {
					displayText: o.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === s.Posts
				})), a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Comments
					})
				}, a.a.createElement(w, {
					displayText: o.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === s.Comments
				})), e.isModQChatCommentsFilterEnabled && a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.ChatPosts
					})
				}, a.a.createElement(w, {
					displayText: o.fbt._("Live Chat Messages", null, {
						hk: "26ZmtR"
					}),
					isSelected: e.postTypeFilter === s.ChatPosts
				})))),
				R = n("./src/reddit/hooks/useLocalStorage.ts"),
				P = n("./src/reddit/hooks/useMounted.ts"),
				L = n("./src/reddit/constants/experiments.ts"),
				A = n("./src/reddit/helpers/chooseVariant/index.ts"),
				F = n("./src/reddit/selectors/user.ts");
			const B = e => Object(A.c)(e, {
				experimentEligibilitySelector: F.Q,
				experimentName: L.kc
			}) === L.Od;
			var D = n("./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less"),
				U = n.n(D);
			const W = e => {
				let {
					children: t
				} = e;
				const [n, s] = Object(R.a)("sort_num_reports_seen_count", 0), d = Object(i.e)(B), c = Object(P.a)(), l = !d || !c || n > 3;
				Object(r.useEffect)(() => {
					l || s(n + 1)
				}, [l]);
				return l ? t : a.a.createElement("div", {
					className: U.a.wrapper,
					onClick: () => {
						s(4)
					}
				}, a.a.createElement("span", {
					className: U.a.tooltip
				}, o.fbt._("NEW! More sort options added", null, {
					hk: "5y9ye"
				})), t)
			};
			var H = n("./src/reddit/contexts/PageLayer/index.tsx"),
				V = n("./src/reddit/controls/SearchBar/index.tsx"),
				Q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				q = n("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				G = n.n(q);
			const J = Object(H.u)({
					currentPageUrl: H.f
				}),
				X = Object(d.c)({
					moderatingSubreddits: Q.o,
					origin: y.k
				}),
				z = Object(i.b)(X),
				K = m.a.div("DropdownContainer", G.a),
				Y = m.a.div("SearchBarContainer", G.a),
				Z = m.a.wrapped(C.b, "Row", G.a),
				$ = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class ee extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						search: ""
					}, this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, this.state)
				}
				UNSAFE_componentWillUpdate(e, t) {
					e.moderatingSubreddits !== this.props.moderatingSubreddits ? (this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, t)) : t.search !== this.state.search && this.updateFilteredSubreddits(e, t)
				}
				updateSortedSubreddits(e) {
					this.sortedSubreddits = e.moderatingSubreddits.slice().sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1)
				}
				updateFilteredSubreddits(e, t) {
					if (!t.search) return void(this.filteredSubreddits = this.sortedSubreddits);
					const n = t.search.toLowerCase();
					let s;
					s = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== n.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = s.filter(e => -1 !== e.displayText.toLowerCase().indexOf(n))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(K, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(Y, null, a.a.createElement(V.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: o.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(j.default, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(Z, {
						displayText: o.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const n = $(t);
						return a.a.createElement(j.default, {
							key: t.id,
							to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), n)
						}, a.a.createElement(Z, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var te = J(z(ee)),
				ne = n("./src/reddit/helpers/trackers/modTools.ts"),
				se = n("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				oe = n.n(se);
			const re = Object(l.a)(h.a),
				ae = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				ie = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				de = "MODQ--POST_SORT_DROPDOWN",
				ce = m.a.wrapped(x.a, "Inline", oe.a),
				le = m.a.div("Filter", oe.a),
				me = m.a.wrapped(p.a, "LayoutSwitch", oe.a),
				ue = e => {
					switch (e) {
						case "allPostTypes":
							return o.fbt._("Posts and Comments", null, {
								hk: "2BGBVi"
							});
						case "allSubreddits":
							return o.fbt._("All subreddits", null, {
								hk: "3GnUZA"
							});
						case "comments":
							return o.fbt._("Comments", null, {
								hk: "3PSW3P"
							});
						case "links":
							return o.fbt._("Posts", null, {
								hk: "1nfhQO"
							});
						case "searchPlaceholder":
							return o.fbt._("Find subreddit", null, {
								hk: "2rRq64"
							});
						case "chat_comments":
							return o.fbt._("Live Chat Messages", null, {
								hk: "4iL79y"
							})
					}
				},
				pe = e => {
					switch (e) {
						case "oldest":
							return o.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						case "most_reported":
							return o.fbt._("Most Reported First", null, {
								hk: "mANyW"
							});
						default:
							return o.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				be = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(O.b)(ie),
					isSubredditFilterDropdownOpen: Object(O.b)(ae),
					isPostSortDropdownOpen: Object(O.b)(de),
					isModQChatCommentsFilterEnabled: S.k,
					profile: (e, t) => {
						let {
							profileName: n
						} = t;
						return n ? Object(g.k)(e, {
							profileName: n
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: n
						} = t;
						return n ? Object(v.A)(e, {
							subredditName: n
						}) : null
					}
				}),
				he = Object(i.b)(be, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(c.h)({
						tooltipId: t
					})),
					sendLivePostFilterDisplayedEvent: () => e(ne.h)
				}));
			class fe extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(ae), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(ie), this.props.sendEventWithName("content_type")(), this.props.isModQChatCommentsFilterEnabled && !this.props.isPostTypeFilterDropdownOpen && this.props.sendEvent(Object(ne.h)())
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown(de), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || o.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), n = e.postTypeFilter && ue(e.postTypeFilter) || o.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), s = pe(null == e ? void 0 : e.postSort);
					return a.a.createElement(ce, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(le, {
						id: ae,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: ae
					}, a.a.createElement(te, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), a.a.createElement(W, null, a.a.createElement(le, {
						id: de,
						onClick: this.onOpenPostSortDropdown
					}, s, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: de
					}, a.a.createElement(_.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					}))), e.showTypeFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(le, {
						id: ie,
						onClick: this.onOpenPostTypeFilterDropdown
					}, n, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: ie
					}, a.a.createElement(M, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(me, null))
				}
			}
			t.a = he(Object(b.c)(fe))
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less": function(e, t, n) {
			e.exports = {
				StatusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				statusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				StatusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				statusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				StatusList: "B7xBQCW-i0XkgeJ22rgLC",
				statusList: "B7xBQCW-i0XkgeJ22rgLC"
			}
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				checkboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				Checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				Button: "abvVqLDYtaKz3przU1pme",
				button: "abvVqLDYtaKz3przU1pme",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				left: "_1IovB6jH5oyEgCXjUwXpJs",
				right: "_1aKgaRqDhtICtELEl5XEw3",
				ModToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8",
				modToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, n) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/filterQueryParams/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/selectors/meta.ts"),
				h = n("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				f = n.n(h);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(s || (s = {}));
			const x = m.a.wrapped(u.b, "Row", f.a),
				g = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: b.k
				}),
				v = Object(i.b)(g);
			t.b = v(e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, a.a.createElement(x, {
				displayText: o.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.OldestFirst
				})
			}, a.a.createElement(x, {
				displayText: o.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === s.OldestFirst
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.MostReportedFirst
				})
			}, a.a.createElement(x, {
				displayText: o.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === s.MostReportedFirst
			}))))
		},
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, n) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
			}
		},
		"./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "FWSg-pojW6Y4suOH94gHp",
				tooltip: "_2CgvwZaR7MuuZGWt19TMWD"
			}
		},
		"./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less": function(e, t, n) {
			e.exports = {
				DropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				dropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				SearchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				searchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				Row: "_2-Mqfq2jQLCLoIJJX5d6ER",
				row: "_2-Mqfq2jQLCLoIJJX5d6ER"
			}
		},
		"./src/reddit/components/ModQueueList/index.m.less": function(e, t, n) {
			e.exports = {
				ItemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				itemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				ButtonContainer: "_1UWG2tG2gGruVUIlnO6Qwr",
				buttonContainer: "_1UWG2tG2gGruVUIlnO6Qwr"
			}
		},
		"./src/reddit/components/ModQueueList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/difference.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/includes.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/actions/modQueue/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/components/ModModeReports/helpers.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/layout/row/Inline/index.tsx"),
				O = n("./src/reddit/components/PaginationButtons/index.m.less"),
				_ = n.n(O);
			var E = e => d.a.createElement(v.a, {
					className: _.a.buttonContainer
				}, d.a.createElement(g.s, {
					className: Object(x.a)(_.a.routerLink, {
						[_.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, f.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(g.s, {
					className: Object(x.a)(_.a.routerLink, {
						[_.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				k = n("./src/reddit/components/PostList/index.tsx"),
				C = n("./src/reddit/constants/componentSizes.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				I = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = n("./src/lib/logs/console.ts"),
				w = n("./src/lib/objectSelector/index.ts"),
				N = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				R = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				P = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				L = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				A = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = n("./src/reddit/components/ModModeReports/index.tsx"),
				U = n("./src/reddit/components/RichTextJson/index.tsx"),
				W = n("./src/reddit/components/VerticalVotes/index.tsx"),
				H = n("./src/reddit/controls/Checkbox/index.tsx"),
				V = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Q = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = n("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				G = n.n(q);
			const J = u.a.div("LeftRail", G.a),
				X = u.a.wrapped(H.a, "BulkActionCheckbox", G.a),
				z = u.a.div("CommentColumn", G.a),
				K = u.a.div("VoteColumn", G.a),
				Y = u.a.wrapped(N.a, "ModToolsFlatlist", G.a),
				Z = u.a.wrapped(W.a, "Votes", G.a),
				$ = u.a.div("CommentContentWrapper", G.a),
				ee = u.a.div("ParentPostTitle", G.a),
				te = u.a.div("CommentParentWrapper", G.a),
				ne = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var se = Object(M.b)(e => {
					const {
						className: t,
						comment: n,
						commentPermalink: s,
						flair: o,
						isCheckboxSelected: r = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: u
					} = e, p = Object(B.a)(n), b = Object(h.c)(n);
					return d.a.createElement(R.a, {
						className: Object(x.a)(t, G.a.Component, G.a.UnthreadedCommentContainer, {
							[G.a.isBanned]: !!n.bannedBy,
							[G.a.isReported]: Object(Q.a)(n)
						}),
						clickTrackingId: n.id,
						permalink: s
					}, d.a.createElement(J, {
						className: Object(x.a)({
							[G.a.hasBorder]: !!n.bannedBy || Object(Q.a)(n)
						})
					}, m && d.a.createElement(X, {
						isCheckboxSelected: r,
						toggleCheckbox: u
					})), d.a.createElement(K, null, d.a.createElement(Z, {
						compact: !1,
						model: n,
						onVoteClick: i,
						scoreClassName: G.a.score
					})), d.a.createElement(z, null, d.a.createElement(te, null, n.postTitle && d.a.createElement(ee, null, n.postTitle), n.postAuthor && d.a.createElement(A.a, {
						comment: n
					})), d.a.createElement($, null, d.a.createElement(P.a, {
						comment: n
					}, d.a.createElement(U.b, {
						content: Object(V.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ne(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					}), d.a.createElement(L.a, {
						comment: n,
						flair: o,
						subredditName: l ? l.displayText : null
					}), p && d.a.createElement(F.a, {
						thing: n
					}), b && d.a.createElement(D.a, {
						onIgnoreReports: a,
						reportable: n
					}), c && !n.isDeleted && d.a.createElement(Y, {
						comment: n
					})))))
				}),
				oe = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = n("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = n.n(re);
			const ie = u.a.div("VoteSpacer", ae.a),
				de = u.a.div("ContentWrapper", ae.a),
				ce = u.a.wrapped(L.a, "Meta", ae.a),
				le = u.a.div("CommentParentWrapper", ae.a),
				me = u.a.div("CommentContentWrapper", ae.a),
				ue = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var pe = Object(M.b)(u.a.wrapped(e => {
					const {
						className: t,
						comment: n,
						commentPermalink: s,
						flair: o,
						hasReports: r,
						isCheckboxSelected: a = !1,
						onIgnoreReports: i,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: u,
						toggleCheckbox: p
					} = e, b = Object(B.a)(n);
					return d.a.createElement(R.a, {
						className: t,
						clickTrackingId: n.id,
						permalink: s
					}, d.a.createElement(oe.a, {
						model: n,
						handleVote: c,
						showBulkActionCheckbox: u,
						isCheckboxSelected: a,
						toggleCheckbox: p
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(le, null, n.postAuthor && d.a.createElement(A.a, {
						comment: n,
						subredditOrProfile: m
					}), n.postTitle && d.a.createElement(M.a, null, n.postTitle)), d.a.createElement(P.a, {
						comment: n
					}, d.a.createElement(me, null, d.a.createElement(U.b, {
						content: Object(V.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ue(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})), b && d.a.createElement(F.a, {
						thing: n
					}), r && d.a.createElement(D.a, {
						onIgnoreReports: i,
						reportable: n
					}), d.a.createElement(ce, {
						comment: n,
						flair: o
					}))), l && !n.isDeleted && d.a.createElement(N.a, {
						comment: n
					})))
				}, "Component", ae.a)),
				be = n("./src/reddit/constants/postLayout.ts");
			const he = {
					[be.g.Large]: pe,
					[be.g.Medium]: M.c,
					[be.g.Classic]: M.c,
					[be.g.Compact]: se
				},
				fe = e => null;
			var xe = n("./src/reddit/models/Flair/index.ts"),
				ge = n("./src/reddit/models/Media/index.ts"),
				ve = n("./src/reddit/models/ModQueue/index.ts"),
				Oe = n("./src/reddit/selectors/meta.ts"),
				_e = n("./src/reddit/selectors/modQueue.ts"),
				Ee = n("./src/reddit/selectors/subreddit.ts"),
				ke = n("./src/config.ts"),
				Ce = n("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				je = n.n(Ce);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = u.a.div("Container", je.a), Te = u.a.div("Image", je.a), we = u.a.div("Title", je.a), Ne = u.a.div("Text", je.a);
			var Me = () => d.a.createElement(Ie, null, d.a.createElement(Te, {
					style: {
						backgroundImage: `url(${Se})`
					}
				}), d.a.createElement(we, null, ye._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Ne, null, ye._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Re = n("./src/reddit/components/PostList/Placeholder.tsx");
			const Pe = Object(j.u)(),
				Le = Object(l.c)({
					layout: j.S
				});
			var Ae = Pe(Object(c.b)(Le)(e => d.a.createElement(Re.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Fe = n("./node_modules/lodash/flatten.js"),
				Be = n.n(Fe),
				De = n("./src/reddit/actions/tooltip.ts"),
				Ue = n("./src/reddit/icons/fonts/index.tsx"),
				We = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				He = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ve = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Qe = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = n("./src/higherOrderComponents/asTooltip.tsx"),
				Ge = n("./src/reddit/actions/modal.ts"),
				Je = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Xe = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ze = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ke = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ye = n("./src/reddit/helpers/flair.ts"),
				Ze = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/selectors/moderatorPermissions.ts"),
				et = n("./src/reddit/selectors/postFlair.ts"),
				tt = n("./src/reddit/selectors/posts.ts"),
				nt = n("./src/reddit/selectors/tooltip.ts"),
				st = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ot = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				rt = n.n(ot);
			const at = e => d.a.createElement("button", {
					className: Object(x.a)(rt.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(l.c)({
					selectedItems: _e.g
				}),
				dt = Object(c.b)(it, e => ({
					onIgnoreReports: () => e(Object(p.f)(ve.a.IgnoreReports)),
					onLock: () => e(Object(p.f)(ve.a.Lock)),
					onMarkNSFW: () => e(Object(p.f)(ve.a.MarkNSFW)),
					onSpoiler: () => e(Object(p.f)(ve.a.Spoiler)),
					onUnignoreReports: () => e(Object(p.f)(ve.a.UnignoreReports)),
					onUnlock: () => e(Object(p.f)(ve.a.Unlock)),
					onUnmarkNSFW: () => e(Object(p.f)(ve.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(p.f)(ve.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(y.a)(e));
			var lt = Object(qe.a)(dt(Object(st.c)(e => d.a.createElement("div", {
				className: Object(x.a)(rt.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: rt.a.StatusContainer
			}, d.a.createElement(at, {
				onClick: e.onIgnoreReports,
				buttonText: f.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(at, {
				onClick: e.onUnignoreReports,
				buttonText: f.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: f.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: f.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: f.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: f.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: f.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: f.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const mt = Object(l.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: n
					} = t;
					return Object(nt.b)(n)(e)
				}
			});
			var ut = Object(c.b)(mt)(Object(st.c)(e => {
					const {
						className: t,
						isDropdownOpen: n,
						tooltipId: s
					} = e;
					return d.a.createElement("div", {
						id: s,
						className: t
					}, d.a.createElement(lt, {
						isOpen: n,
						tooltipId: s
					}))
				})),
				pt = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = n.n(pt);
			const ht = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				xt = Object(qe.a)(ze.a),
				gt = e => d.a.createElement(Ke.b, {
					className: Object(x.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				vt = Object(l.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(nt.b)(ht),
					flairData: et.d,
					isApiPending: _e.a,
					moderatorPermissions: $e.n,
					posts: tt.J,
					selectedItems: _e.g
				}),
				Ot = Object(c.b)(vt, e => ({
					onApprove: () => e(Object(p.f)(ve.a.Approve)),
					onFlair: (t, n) => e(Object(p.f)(ve.a.Flair, t, n)),
					onOpenDropdown: () => e(Object(De.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(De.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(p.f)(ve.a.Remove)),
					onSpam: () => e(Object(p.f)(ve.a.Spam)),
					onToggleFlairModal: () => e(Object(Ge.i)(ft))
				})),
				_t = (e, t) => {
					const n = Be()(e.map(e => t[e].flair));
					if (n.length <= 1) return n;
					const s = [];
					return n.forEach(e => {
						if (e.type === xe.f.Text || e.type === xe.f.Richtext) {
							const t = Object(Ye.g)(e);
							a()(s, t) || s.push(t)
						}
					}), s.length > 1 ? [{
						type: xe.f.Text,
						text: f.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : n
				};
			var Et = Ot(e => {
					const {
						activeModalId: t,
						className: n,
						endNumItems: s,
						flairData: o,
						isAnyItemSelected: r,
						isApiPending: a,
						moderatorPermissions: c,
						numSelected: l,
						numShowing: m,
						onApprove: u,
						onFlair: p,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: g,
						posts: v,
						selectedItems: O,
						startNumItems: _,
						subredditId: E,
						toggleSelectAll: k,
						toggleSelectByFilter: C
					} = e, j = [{
						name: f.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: f.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: f.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: f.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: f.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: f.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}, {
						name: f.fbt._("Chat posts", null, {
							hk: "1uSGtz"
						}),
						filterType: "chat_comments"
					}], y = c && c.flair, S = E && o && o.displaySettings.isEnabled && y && !ct(O);
					return d.a.createElement("div", {
						className: Object(x.a)(bt.a.ModToolsBulkOperations, n)
					}, d.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, d.a.createElement(H.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: k
					}), d.a.createElement(Ue.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, j.map(e => d.a.createElement(gt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => C(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: u
					}, d.a.createElement(We.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(He.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(Ve.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(ut, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Ue.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, S && d.a.createElement(Xe.c, {
						disabled: a,
						onClick: g,
						className: bt.a.Button
					}, d.a.createElement(Qe.a, null)))), r && E && t === ft && d.a.createElement(Je.a, {
						flairs: _t(O, v),
						modalId: ft,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: n
							} = e;
							p(t, n)
						},
						subredditId: E
					}), m > 0 && d.a.createElement("div", {
						className: bt.a.Text
					}, d.a.createElement("span", {
						className: bt.a.right
					}, f.fbt._("Items {startNumItems}-{endNumItems}", [f.fbt._param("startNumItems", `${_}`), f.fbt._param("endNumItems", `${s}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: bt.a.left
					}, f.fbt._("{numSelected} selected", [f.fbt._param("numSelected", `${l}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				kt = n("./src/reddit/contexts/Post/index.tsx"),
				Ct = n("./src/reddit/components/ModQueueList/index.m.less"),
				jt = n.n(Ct);
			const yt = e => Object(S.a)(e.id),
				St = u.a.div("ItemContainer", jt.a),
				It = u.a.div("ButtonContainer", jt.a),
				Tt = Object(j.u)({
					currentProfileName: j.i,
					isCommentPermalink: j.w,
					isCommentsPage: j.x,
					isFrontpage: j.A,
					isProfilePostListing: j.L,
					isTopicPage: j.R,
					queryParams: j.X,
					pageLayer: e => e
				}),
				wt = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: _e.c,
					loadMore: _e.e,
					modQueueListingItems: _e.d,
					origin: Oe.k,
					selectedItems: _e.g,
					subredditId: (e, t) => t.subredditName ? Object(Ee.G)(e, t.subredditName) : null
				}),
				Nt = Object(c.b)(wt, e => ({
					addSelectedItems: t => e(Object(p.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(p.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(p.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, n) => e(Object(b.z)(t, n)),
					openPost: t => e(Object(b.L)(t))
				})),
				Mt = e => e.page ? parseInt(e.page, 10) : ve.b,
				Rt = e => Mt(e) + 1,
				Pt = e => Math.max(ve.b, Mt(e) - 1),
				Lt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Mt(e) === ve.b ? t : 25 * Pt(e) + t
				},
				At = e => Mt(e) === ve.b ? ve.b : 25 * Pt(e) + 1;
			var Ft;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Ft || (Ft = {}));
			class Bt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = o()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Ft.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(S.a)(e.id) && t.push(e.id)
								});
								break;
							case Ft.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case Ft.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Ft.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(S.a)(e.id)) {
										const n = e;
										n.flair && n.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(n.id)
									}
								});
								break;
							case Ft.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(S.a)(e.id)) {
										const n = e;
										n.media && n.media.type === ge.o.TEXT && t.push(n.id)
									}
								});
								break;
							case Ft.spamFiltered:
								this.props.modQueueListingItems.forEach(e => {
									e.isSpam && t.push(e.id)
								})
						}
						this.props.bulkSelectItems(t)
					}, this.isAnyItemSelected = () => this.props.selectedItems.length > 0, this.renderItems = e => {
						let t;
						const n = !!e.page && "1" !== e.page,
							s = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const n = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (yt(t)) {
								const s = t,
									o = Object(I.b)({
										layout: e.layout,
										post: s
									});
								return d.a.createElement(St, {
									key: n
								}, d.a.createElement(o, {
									availableWidth: C.g,
									currentProfileName: e.currentProfileName,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(s.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: s.id,
									onClickPost: Object(k.b)(s.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(s.id), [s.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const s = function(e, t) {
								const n = he[t];
								return void 0 === n ? (Object(T.a)(void 0, `Could not find component for layout ${t}.`), fe) : n
							}(0, e.layout);
							return d.a.createElement(St, {
								key: n
							}, d.a.createElement(kt.a, {
								postId: t.postId
							}, d.a.createElement(s, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(It, null, d.a.createElement(E, {
							prevButtonEnabled: n,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Pt(e),
								after: null
							}),
							nextButtonEnabled: s,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Rt(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				UNSAFE_componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter && e.postSort === this.props.postSort || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], n = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(Et, {
						endNumItems: Lt(e),
						numSelected: n,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: At(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Me, null) : e.isModQueueListingPending ? d.a.createElement(Ae, null) : null)
				}
			}
			t.a = Tt(Nt(Bt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
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
				return C
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
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
				g = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/selectors/postFlair.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				j = Object(d.c)({
					flairData: v.d,
					subreddit: O.V
				});
			class y extends a.a.Component {
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
					} = e, i = r.displayText, {
						templates: d,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(p.a, {
						className: n
					}, a.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: k.a.buttonsRow
					}, a.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const S = Object(i.b)(j, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(y);
			t.a = Object(l.a)(Object(c.c)(S))
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
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
					isVoteCountAnimation: g,
					postId: v,
					shouldShowUpvoteRatioOnHover: O
				} = e, _ = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: _,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
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
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(i);
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
				l = a.a.wrapped(c, "ApproveButton", d.a),
				m = a.a.wrapped(c, "RemoveButton", d.a),
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
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
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
				g = u.a.span("SpoilerWrapper", m.a),
				v = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return r.a.createElement(g, p({}, s, {
						className: Object(a.a)(t, {
							[m.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", m.a),
				O = Object(c.a)(u.a.wrapped(d.b, "Component", m.a), [i.a.Click, i.a.Keydown]);
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
					return r.a.createElement(v, {
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
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "w", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(a),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", i.a), d.a.div("H2", i.a), d.a.div("H3", i.a), d.a.div("H4", i.a), d.a.div("H5", i.a), d.a.div("H6", i.a)],
				m = d.a.hr("Hr", i.a),
				u = d.a.code("M", i.a),
				p = d.a.pre("Pre", i.a),
				b = d.a.blockquote("Blockquote", i.a),
				h = d.a.p("P", i.a),
				f = d.a.li("Li", i.a),
				x = d.a.ul("Ul", i.a),
				g = d.a.ol("Ol", i.a),
				v = d.a.strong("B", i.a),
				O = d.a.em("I", i.a),
				_ = d.a.span("U", i.a),
				E = e => o.a.createElement("del", e),
				k = d.a.sub("Sub", i.a),
				C = d.a.sup("Sup", i.a),
				j = d.a.table("Table", i.a),
				y = d.a.tr("Tr", i.a),
				S = d.a.td("Tdl", i.a),
				I = d.a.td("Tdc", i.a),
				T = d.a.td("Tdr", i.a),
				w = d.a.th("Thl", i.a),
				N = d.a.th("Thc", i.a),
				M = (d.a.th("Thr", i.a), d.a.wrapped(e => o.a.createElement(r.b, e), "A", i.a)),
				R = d.a.wrapped(c.a, "A", i.a)
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
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
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
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				v = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return i.a.createElement(g, s)
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
						isNsfwBlockingModalEligible: a,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: O,
						rtJsonElementProps: k,
						useExplicitTextColor: C,
						shouldBlur: j,
						onClickRevealSpoilerText: y,
						mediaProps: S
					} = e, I = s.document, T = [], w = e.mediaMetadata || null, N = E(I), M = _(I);
					if (j && !o && !a) return i.a.createElement(g, {
						className: Object(d.a)(u.j, n)
					}, i.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!r, !!c))));
					if (-1 !== N)
						for (let i = N; i <= M; i++) {
							const e = I[i];
							switch (e.e) {
								case p.k:
									T.push(h.c(e, k, i));
									break;
								case p.l:
									T.push(h.d(i));
									break;
								case p.b:
									T.push(h.a(e, w, k, i));
									break;
								case p.c:
									T.push(h.b(e, i));
									break;
								case p.p:
									T.push(h.f(e, w, k, i, y));
									break;
								case p.z:
									T.push(h.h(e, w, k, i, y));
									break;
								case p.u:
									T.push(h.g(e, w, k, i, y));
									break;
								case p.h:
									T.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									T.push(...Object(b.b)(e, i, k, w, O, f, t, S))
							}
						}
					return C ? i.a.createElement(g, {
						className: Object(d.a)(u.j, n)
					}, T) : i.a.createElement(v, {
						className: Object(d.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, T)
				};
			class C extends i.a.Component {
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
				return N
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
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
			var g = e => r.a.createElement("svg", {
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
				v = n("./src/reddit/components/RichTextJson/elements.tsx"),
				O = n("./src/reddit/components/RichTextJson/media.m.less"),
				_ = n.n(O),
				E = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/helpers/media/index.ts");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = /\/(\w+)\/asset\/(\w+)\//,
				y = E.a.wrapped(v.a, "A", _.a),
				S = E.a.wrapped(l.a, "ImageBox", _.a),
				I = E.a.wrapped(e => r.a.createElement("p", e), "Caption", _.a),
				T = E.a.div("Placeholder", _.a),
				w = E.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: i,
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
					}), r.a.createElement(T, C({
						className: Object(a.a)(t, {
							[_.a.renderSmallMedia]: i,
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
				N = (e, t) => {
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
				M = (e, t, n) => {
					const s = e.c;
					let o = "";
					return n && (n.e === x.s ? o = n.s.u : n.e === x.r ? o = n.s.gif : n.e === x.t && (o = (e => {
						const t = j.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), o ? r.a.createElement(y, {
						href: o,
						key: t,
						title: s
					}, s || o) : null
				},
				R = (e, t, n, s, o, i, c, l) => {
					const p = x.E(s, e.id);
					if (o) return [M(e, t, p)];
					const f = [];
					return !p || p.e === x.s && null === p.s.x && null === p.s.y ? f.push(((e, t, n, s) => r.a.createElement(w, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === x.s ? f.push(((e, t, n, s, o) => {
						let {
							id: i,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: u
						} = o || {};
						let p = d;
						return u && (p = Object(k.i)(240, 20, d, c)), r.a.createElement("div", {
							className: Object(a.a)(_.a.MediaWrapper, {
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
						}, r.a.createElement(S, {
							altText: s,
							originalSource: p.u,
							postId: i,
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
							ext: i,
							s: d
						} = e;
						if (Object(h.g)(o)) {
							const e = s.renderingObjectInfo,
								c = !!e && Object(b.b)(e),
								l = i || Object(h.f)(o);
							return r.a.createElement("div", {
								className: Object(a.a)({
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
							})) : l), r.a.createElement(g, {
								className: _.a.GiphyLogo
							}))
						}
						return r.a.createElement("div", {
							className: Object(a.a)(_.a.MediaWrapper, {
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
							dashUrl: i,
							x: c,
							y: l,
							isGif: u
						} = e;
						return r.a.createElement("div", {
							className: Object(a.a)(_.a.MediaWrapper, {
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
							mpegDashSource: i,
							postId: s,
							isGif: u
						})))
					})(p, t, !!e.c, i)), e.c && f.push(((e, t) => r.a.createElement(I, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				o = n("./node_modules/lodash/reduce.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const v = 1e3,
				O = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, O)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.ib(t)
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
					t.e === p.s ? (n = t.s.x, s = t.s.y, o = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, o = t.s.gif);
					const r = this.state.tooltipOpen ? l()() : void 0;
					return o ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: r,
						src: o,
						width: n,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var k = Object(m.c)(E),
				C = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				y = n("./src/reddit/components/SubredditMention/index.tsx"),
				S = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const M = (e, t, n) => {
					const s = e.c || [],
						o = e.l,
						r = [],
						a = s.length;
					for (let i = 0; i < a; i++) {
						const e = s[i];
						r.push(e.e === p.w ? e.t : W(e, t, i))
					}
					const c = d.x[o - 1];
					return i.a.createElement(c, {
						key: n
					}, r)
				},
				R = e => i.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, s, o) => {
					const r = e.c;
					if (!r) return;
					const a = r.length,
						c = [];
					for (let i = 0; i < a; i++) c.push(F(r[i], t, n, i, o));
					return i.a.createElement(d.c, {
						key: s
					}, c)
				},
				L = (e, t) => {
					const n = e.c;
					return i.a.createElement(d.k, {
						key: t
					}, i.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				A = (e, t, n, s, o) => {
					const r = e.c,
						a = [],
						c = r.length;
					for (let m = 0; m < c; m++) {
						const e = r[m].c;
						e && e.length && a.push(i.a.createElement(d.g, {
							key: m
						}, e.map((e, s) => F(e, t, n, s, o))))
					}
					const l = e.o ? d.i : d.v;
					return i.a.createElement(l, {
						key: s
					}, a)
				},
				F = (e, t, n, s, o) => {
					switch (e.e) {
						case p.b:
							return P(e, t, n, s, o);
						case p.c:
							return L(e, s);
						case p.k:
							return M(e, n, s);
						case p.l:
							return R(s);
						case p.p:
							return A(e, t, n, s, o);
						case p.u:
							return D(e, t, n, s, o);
						case p.z:
							return B(e, t, n, s, o)
					}
				},
				B = (e, t, n, s, o) => {
					const r = e.c,
						a = e.h,
						c = r.length,
						l = a.length,
						m = [],
						u = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = a[d],
							{
								H: s,
								D: r
							} = q(e.a),
							{
								c = []
							} = e;
						m.push(i.a.createElement(s, {
							key: d
						}, U(c, t, n, o))), p[d] = r
					}
					for (let b = 0; b < c; b++) {
						const e = r[b],
							s = e.length,
							a = [];
						for (let r = 0; r < s; r++) {
							const s = p[r],
								{
									c: d = []
								} = e[r];
							a.push(i.a.createElement(s, {
								key: r
							}, U(d, t, n, o)))
						}
						u.push(i.a.createElement(d.t, {
							key: b
						}, a))
					}
					return i.a.createElement(d.n, {
						key: s
					}, i.a.createElement("thead", null, i.a.createElement(d.t, null, m)), i.a.createElement("tbody", null, u))
				},
				D = (e, t, n, s, o) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(d.j, {
						key: e
					}, i.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(w.g)(r.id) ? i.a.createElement(d.j, {
						key: s
					}, U(e.c, t, n, o)) : Object(C.b)(r, s, n, t)
				},
				U = (e, t, n, s) => {
					const o = [],
						r = e.length;
					for (let a = 0; a < r; a++) {
						const r = e[a];
						if (r.e === p.A) o.push(H(r, a));
						else if (r.e === p.x) o.push(i.a.createElement(j.a, {
							key: a,
							onClickReveal: s
						}, U(r.c, t, n, s)));
						else if (r.e === p.n) o.push(i.a.createElement("br", {
							key: a
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && o.push(i.a.createElement(k, {
									key: a,
									node: r,
									media: e
								}))
							}
						} else o.push(W(r, n, a))
					}
					return o
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return i.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let o, r;
							const a = Object(N.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (o = c.postId), c && Object(I.b)(c) && (r = c.id, o = c.postId), i.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: o,
								commentId: r
							}, s);
						case p.y:
							return i.a.createElement(y.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(d.a, {
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
					if (!n) return Q(0, o, t);
					const a = Object(s.a)(o);
					let i = 0,
						d = 0;
					const c = n.length;
					for (; i < c; i++) {
						const [e, t, s] = n[i], c = t + s, l = a[t], m = a[c] - l;
						l > d && r.push(Q(0, o.substr(d, l - d), `between${i}`)), r.push(Q(e, o.substr(l, m), i)), d = l + m
					}
					return d < o.length && r.push(Q(0, o.substr(d), `remaining${i}`)), r
				},
				V = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				Q = (e, t, n) => {
					let s = t;
					return s = r()(V, (t, s, o) => e & parseInt(o, 10) ? i.a.createElement(s, {
						key: n
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
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = r.a.wrapped(a.b, "SubredditIcon", c.a),
				m = r.a.wrapped(e => o.a.createElement(i.b, e), "S", c.a)
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
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
			class g extends o.a.PureComponent {
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
					return o.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(g),
				O = Object(a.c)({
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
						rtJsonElementProps: a
					} = e;
					if (!n || !t) return o.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: a
					});
					switch (r) {
						case h.Rf.SmIcon:
							return o.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case h.Rf.SmIconHc:
							return o.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return o.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: a
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
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
				g = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = O(e);
					return Object(g.f)(t)
				},
				k = e => {
					const t = _(e);
					return Object(g.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(C);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.u)(), I = Object(r.b)(() => Object(a.c)({
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
			class T extends o.a.Component {
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
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? j.a.widgetContentOnly : j.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!d,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: x
					}, m && o.a.createElement("div", {
						className: Object(i.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: a,
						style: g,
						onClick: l
					}, o.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(i.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, y._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(I(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext({})
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
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
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
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: o,
						...a
					} = e;
					const d = Object(i.b)(n),
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
					return r.a.createElement(l, a, m)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Search/index.tsx"),
				i = n("./src/reddit/controls/SearchBar/index.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("div", {
				className: Object(r.a)(d.a.searchContainer, e.className)
			}, o.a.createElement("input", {
				className: Object(r.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), o.a.createElement("div", {
				className: Object(r.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, o.a.createElement(a.a, null)))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, a = r;
					return s ? o.a.createElement(t, a) : void 0 !== n ? o.a.createElement(n, a) : null
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let o = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (o += `--[${e.onlyOfType}]`), e.sort !== s.a.NewestFirst && (o += `--[${e.sort}]`), o
			}
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
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
				a = e => {
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
				i = e => s.fbt._({
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(o.e)(i, {
							commentId: e
						}),
						c = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.n(i),
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
					...a.n(e)
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(o.b)(t) || Object(r.b)(t))) return Object(o.b)(t) ? a.SourceElement.Comment : Object(s.x)(n) ? a.SourceElement.PostDetail : Object(s.H)(n) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return E
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
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
					...m.n(e),
					source: o.LINK,
					action: r.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...m.n(e),
					source: o,
					screen: m.ab(e),
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
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const o = Object(i.b)(n) ? "postId" : "commentId",
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
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: m.J(e, n.id),
						subreddit: m.jb(e, s),
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
					subreddit: m.kb(t, e),
					screen: m.ab(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: s.ITEM_POST,
					post: m.J(n, t),
					subreddit: m.kb(n, e),
					screen: m.ab(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: m.J(n, t),
					subreddit: m.kb(n, e),
					screen: m.ab(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const i = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				d = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.J(n, e),
					subreddit: a.ib(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.n(n)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...a.n(t),
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
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement(r.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
				return a
			})), n.d(t, "b", (function() {
				return i
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
				a = 1e4,
				i = 100;
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
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
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
				g = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/lib/classNames/index.ts"),
				_ = n("./node_modules/lodash/omit.js"),
				E = n.n(_),
				k = n("./src/lib/addQueryParams/index.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				y = n.n(j);
			const S = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var I = Object(i.b)(S)(e => a.a.createElement(C.default, {
				className: Object(O.a)(y.a.navChild, {
					[y.a.mIsActive]: e.isActive
				}),
				to: Object(k.a)(`/r/mod/about/${e.pathName}`, E()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var T = e => a.a.createElement("div", {
					className: y.a.navContainer
				}, a.a.createElement("div", {
					className: Object(O.a)(y.a.innerContainer, {
						[y.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, a.a.createElement("h1", {
					className: y.a.title
				}, v.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), a.a.createElement(I, {
					title: v.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), a.a.createElement(I, {
					title: v.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), a.a.createElement(I, {
					title: v.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), a.a.createElement(I, {
					title: v.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), a.a.createElement(I, {
					title: v.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				w = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				N = n("./src/config.ts"),
				M = n("./src/lib/lessComponent.tsx"),
				R = n("./src/lib/opener/index.ts"),
				P = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				L = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				A = n.n(L);
			const F = M.a.a("ExternalLink", A.a),
				B = M.a.wrapped(C.default, "InternalLink", A.a);
			var D = () => a.a.createElement(P.a, {
				title: v.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, a.a.createElement(F, {
				href: N.a.redditModHelpUrl,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), a.a.createElement(F, {
				href: `${N.a.redditUrl}/help/healthycommunities/`,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), a.a.createElement(B, {
				to: "/r/modsupport",
				rel: R.c,
				target: R.d.BLANK
			}, "r/modsupport"), a.a.createElement(F, {
				href: `${N.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var U = e => a.a.createElement("div", {
				className: y.a.sidebar
			}, e.subredditOrProfileUrl && a.a.createElement(w.a, null, a.a.createElement(P.a, {
				title: v.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, a.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, v.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), a.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, v.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), a.a.createElement(w.a, null, a.a.createElement(D, null)));
			const W = Object(b.u)(),
				H = Object(d.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return o()([...Object(c.a)(n.search)])
					}
				}),
				V = Object(d.a)(H, b.S, x.o, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.pageName
				}, (e, t, n, s) => {
					let {
						queryParams: o
					} = e;
					const r = o.subreddit,
						a = o.profile,
						i = o.only,
						d = o.sort,
						c = `${o.page||f.b}`;
					return {
						after: o.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: c,
						pageName: s,
						postTypeFilter: i,
						postSort: d,
						profileName: a,
						subredditName: r
					}
				}),
				Q = Object(i.b)(V);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(g.ab)(t)
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
						profileName: i,
						postTypeFilter: d,
						postSort: c,
						subredditName: u
					} = this.props, b = u && `r/${u}` || i && `user/${i}`, f = "unmoderated" !== r, x = f ? d : void 0;
					return a.a.createElement("div", null, n && a.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: s === p.g.Large,
						navBar: a.a.createElement(T, {
							disableFullscreen: s === p.g.Large,
							pageName: r
						}),
						content: a.a.Children.toArray([a.a.createElement(m.a, {
							key: i,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: f,
							postSort: c,
							subredditName: u
						}), a.a.createElement(l.a, {
							after: e,
							key: `${i}-${u}`,
							layout: s,
							page: o,
							pageName: r,
							postSort: c,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							subredditName: u
						})]),
						sidebar: a.a.createElement(U, {
							subredditOrProfileUrl: b
						})
					}))
				}
			}
			t.default = W(Q(Object(u.c)(q)))
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/comments/index.ts"),
				d = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(a.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: d.a
				}
			});
			const c = (e, t) => Object(o.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(r.a)((e, t) => {
					var n, s, o;
					const {
						pageName: r,
						page: a
					} = t, i = c(0, t);
					if (!(null === (o = null === (s = null === (n = e.pages.modHub.modQueue[r]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === o ? void 0 : o[a])) return;
					const d = e.pages.modHub.modQueue[r].itemOrder[i][a];
					return d ? d.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				m = (e, t) => {
					var n;
					const {
						pageName: s
					} = t;
					return null === (n = e.pages.modHub.modQueue[s]) || void 0 === n || !n.api || e.pages.modHub.modQueue[s].api.pending
				},
				u = (e, t) => {
					var n;
					const s = c(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[s]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				h = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				f = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Qb.MODERATION_PAGES || t.meta.name === s.Qb.MODQUEUE_PAGES)
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
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
				a = n("./src/reddit/selectors/subreddit.ts");
			const i = e => o.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.Lf
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
					const s = Object(a.Z)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.e2158b9428813065f011.js.map