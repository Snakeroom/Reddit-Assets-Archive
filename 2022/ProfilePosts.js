// https://www.redditstatic.com/desktop2x/ProfilePosts.312831d1f0bac191f33c.js
// Retrieved at 6/27/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts", "reddit-components-ContentGate"], {
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
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !o && !l && /macintosh/i.test(t),
						g = !i && !u && !m && !p && /linux/i.test(t),
						x = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !_ && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (s.msedge = e, s.version = x) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: x
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : y ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var E = "";
					s.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var k = !s.windows && E.split(".")[0];
					return _ || c || "ipad" == o || i && (3 == k || k >= 4 && !w) || s.silk ? s.tablet = e : (w || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
							for (var s, o, i, c, l, u, m, p, h = a(n), b = d(n), f = !1; !f;) {
								var g = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (f = !0, g = r) : b != t.body && b != t.documentElement && "visible" != x.overflow && (g = a(b)), g && (s = g, o = h, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), c = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), p = c - i, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = d(b)
							}
							return h
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
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
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
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var l = r(d, t); ++n < e;) t(n);
				return l
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
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: i
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(s.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${i}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return O
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const b = Object(s.a)(i.g),
				f = Object(s.a)(i.e),
				g = Object(s.a)(i.h),
				x = Object(s.a)(i.c),
				v = Object(s.a)(i.f),
				_ = Object(s.a)(i.j),
				w = Object(s.a)(i.i),
				y = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						i = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(h.P)(o);
					if (i || !d) return;
					e(g());
					let v = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(a.a)(e, {
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
								if (k(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
								} else if (S(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										i = [r, s],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(m)), v = !0
								}
							} else v = !1
						}
					} catch (_) {
						v = !1
					}
					v || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !k(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, O = () => async (e, t, n) => {
					var r, s;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(h.Q)(i);
						return Object(o.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "privateListingPending", (function() {
				return T
			})), n.d(t, "privateMixedListingLoaded", (function() {
				return B
			})), n.d(t, "privatePostListingLoaded", (function() {
				return R
			})), n.d(t, "privateListingFailed", (function() {
				return D
			})), n.d(t, "profilePrivateRequested", (function() {
				return M
			})), n.d(t, "morePending", (function() {
				return F
			})), n.d(t, "moreMixedLoaded", (function() {
				return U
			})), n.d(t, "morePostLoaded", (function() {
				return A
			})), n.d(t, "moreFailed", (function() {
				return W
			})), n.d(t, "moreProfilePrivateRequested", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/externalAccount.ts"),
				o = n("./src/reddit/actions/pages/profileShared.ts"),
				i = n("./src/reddit/actions/profile/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/ProfileDownvoted.json"),
				d = n("./src/redditGQL/operations/ProfileGivenGildings.json"),
				l = n("./src/redditGQL/operations/ProfileHidden.json"),
				u = n("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				m = n("./src/redditGQL/operations/ProfileSaved.json"),
				p = n("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = n("./src/reddit/models/Comment/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/Profile/index.ts"),
				g = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var S = e => {
					const {
						listingType: t,
						rawData: n,
						includeIdentity: r,
						includeModerated: s
					} = e, {
						identity: o
					} = n, i = (e => {
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
					if (!o) return i;
					if (r && (i.account = Object(k.a)(o) || null, i.preferences = Object(w.a)(o.preferences, o.interactions) || null, o.redditor.profile && (i.profiles[o.redditor.profile.id] = Object(y.a)(o.redditor.profile))), s && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: n
						} = Object(y.b)(o.redditor.moderatedSubreddits);
						i.moderatedPageInfo = t, i.moderatedSubredditIds = e, i.subreddits = n
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
					})(n, t);
					if (!a) return i;
					i.pageInfo = a.pageInfo;
					for (const {
							node: c
						} of a.edges) {
						let e;
						if (c.__typename === h.d.Comment) {
							const t = Object(g.a)(c);
							if (i.comments || (i.comments = {}), i.comments[t.id] = t, i.itemIds || (i.itemIds = []), i.itemIds.push(t.id), c.authorFlair && (i.authorFlair[t.subredditId] || (i.authorFlair[t.subredditId] = {}), i.authorFlair[t.subredditId][t.author] = Object(x.a)(c.authorFlair)[0]), e = c.postInfo, c.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(_.a)(c.postInfo);
								i.posts[e.id] = e, t && (i.posts[t.id] = t)
							}
						} else e = c, i.itemIds || (i.itemIds = []), i.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: n
						} = e && Object(_.a)(e);
						i.posts[t.id] = t, n && (i.posts[n.id] = n), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (i.authorFlair[t.belongsTo.id] || (i.authorFlair[t.belongsTo.id] = {}), i.authorFlair[t.belongsTo.id][t.author] = Object(x.a)(e.authorFlair)[0]), Object(b.l)(e) ? i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(y.a)(e.profile)) : Object(b.n)(e) && (i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(E.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(v.a)(e.subreddit))))
					}
					return i
				},
				O = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				C = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				I = n("./src/reddit/reducers/features/comments/index.ts");
			Object(j.a)({
				features: {
					comments: I.a
				}
			});
			const N = {
					[f.b.Downvoted]: (e, t) => Object(a.a)(e, {
						...c,
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
						...d,
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
							return S(e)
					}
				},
				T = Object(r.a)(C.b),
				B = Object(r.a)(C.c),
				R = Object(r.a)(C.i),
				D = Object(r.a)(C.a),
				M = e => async (t, n, r) => {
					const {
						profileName: a,
						listingType: c
					} = e.params, d = n(), l = Object(O.b)(a.toLowerCase(), c), u = d.profilePrivatePage.ids[l] && d.profilePrivatePage.ids[l].length > 0, m = !!d.profilePrivatePage.api.error[l];
					if (d.profilePrivatePage.api.pending[l] || u && !m) return;
					const {
						account: p
					} = d.user, h = !p, b = !(p && p.displayText && d.profiles.moderated.models[p.displayText.toLowerCase()] && d.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(T({
						listingKey: l
					}));
					const g = {
							includeIdentity: h,
							includeModerated: b,
							first: C.h,
							after: null
						},
						x = await N[c](r.gqlContext(), g);
					if (x.ok && x.body) {
						const e = L({
							rawData: P(c, x),
							listingType: c,
							includeIdentity: h,
							includeModerated: b
						});
						c === f.b.Saved || c === f.b.ReceivedGildings || c === f.b.GivenGildings ? await t(B({
							listingKey: l,
							profileName: a,
							...e
						})) : await t(R({
							listingKey: l,
							profileName: a,
							...e
						})), await Promise.all([t(Object(o.d)(a)), t(Object(s.o)(a)), t(Object(i.d)(a))])
					} else t(D({
						listingKey: l,
						error: x.error
					}))
				}, F = Object(r.a)(C.f), U = Object(r.a)(C.e), A = Object(r.a)(C.g), W = Object(r.a)(C.d), H = e => async (t, n, r) => {
					const s = n(),
						o = s.user.account && s.user.account.displayText && s.user.account.displayText.toLowerCase();
					if (!o) return;
					const i = Object(O.b)(o, e);
					if (!s.profilePrivatePage.ids[i] || !s.profilePrivatePage.ids[i].length || !s.profilePrivatePage.pageInfo || !s.profilePrivatePage.pageInfo[i].hasNextPage || s.profilePrivatePage.api.error[i] || s.profilePrivatePage.api.pending[i]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: s.profilePrivatePage.pageInfo[i].endCursor,
						first: C.h
					};
					t(F({
						listingKey: i
					}));
					const c = await N[e](r.gqlContext(), a);
					if (c.ok && c.body) {
						const n = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: c.body.data
						});
						e === f.b.Saved || e === f.b.ReceivedGildings || e === f.b.GivenGildings ? await t(U({
							listingKey: i,
							profileName: o,
							...n
						})) : await t(A({
							listingKey: i,
							profileName: o,
							...n
						}))
					} else t(W({
						listingKey: i,
						error: c.error
					}))
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				g = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = n("./src/reddit/components/TextWithLinks/index.tsx"),
				w = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/chat/controls/Svg/index.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var O = e => o.a.createElement(k.a, S({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				C = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				I = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/user.ts");
			var P = n("./src/reddit/selectors/meta.ts"),
				L = n("./src/reddit/components/ContentGate/index.m.less"),
				T = n.n(L);
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = l.a.wrapped(O, "PrivateKey", T.a), D = l.a.div("ButtonsContainer", T.a), M = l.a.div("Container", T.a), F = l.a.div("ContainerExp", T.a), U = l.a.div("Description", T.a), A = l.a.div("PrivateSubredditDetails", T.a), W = l.a.div("PrivateSubredditDescription", T.a), H = l.a.h3("PrivateSubredditName", T.a), G = l.a.a("Link", T.a), q = l.a.wrapped(E.n, "LinkRouterButton", T.a), z = l.a.wrapped(E.m, "LinkButton", T.a), V = l.a.wrapped(E.q, "SecondaryLinkRouterButton", T.a), K = l.a.wrapped(E.p, "SecondaryLinkButton", T.a), Y = l.a.wrapped(q, "GoHomeLinkButton", T.a), J = l.a.wrapped(b.a, "CreateCommunityButton", T.a), Z = l.a.img("Image", T.a), X = l.a.img("ImagePlaceholder", T.a), Q = l.a.wrapped(q, "LeftLinkRouterButton", T.a), $ = l.a.wrapped(z, "LeftLinkButton", T.a), ee = l.a.wrapped(K, "SecondaryLeftLinkButton", T.a), te = l.a.wrapped(V, "SecondaryLeftLinkRouterButton", T.a), ne = l.a.h3("Title", T.a), re = l.a.div("PageBody", T.a), se = l.a.div("InterstitialMessageWrapper", T.a), oe = Object(d.c)({
				isLoggedIn: N.P,
				origin: P.j,
				user: N.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(N.Q)(e)) return !1;
					const t = Object(I.d)(e);
					if (!t) return !1;
					const n = Object(N.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * j.B;
					return r > Date.now() - s
				})(e),
				isSeo: P.g
			}), ie = Object(y.u)(), ae = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: i,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: E,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: S,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: I,
					setNSFWPreference: N,
					subredditDescription: P,
					subredditName: L,
					user: M
				} = e, F = async () => {
					if (a ? await N() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.g, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case C.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, B._("r/{community name} is a Reddit Premium community", [B._param("community name", L)], {
							hk: "2lyDwB"
						})), o.a.createElement(U, null, B._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(D, null, M ? o.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, B._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), M ? o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(K, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, B._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case C.a.Nsfw:
					case C.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === C.a.Nsfw ? B._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : B._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(U, null, B._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(D, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, B._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(K, {
							onClick: F,
							redditStyle: !0
						}, B._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case C.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(R, null), o.a.createElement(ne, null, "r/", L, " ", B._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && o.a.createElement(A, null, o.a.createElement(H, null, "r/", L), o.a.createElement(W, null, o.a.createElement("div", null, P))), o.a.createElement(U, null, B._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", B._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), B._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(D, null, M ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: T.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, B._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && o.a.createElement(v.a, {
							subredditName: L
						}));
					case C.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, B._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(U, null, B._("This community is {=quarantined}", [B._param("=quarantined", o.a.createElement(G, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, B._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(se, null, S ? o.a.createElement(x.b, {
							content: S,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? o.a.createElement(g.a, {
							html: k
						}) : E || B._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), B._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(D, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(D, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(z, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, B._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(D, null, o.a.createElement(Q, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(K, {
								onClick: t,
								redditStyle: !0
							}, B._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(M, s, y)));
					case C.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, B._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(U, null, o.a.createElement(se, null, I ? o.a.createElement(x.b, {
							content: I,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(g.a, {
							html: j
						}) : O), B._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(D, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, B._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(K, {
							onClick: i,
							redditStyle: !0
						}, B._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case C.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, B._("r/{community name} has been banned from Reddit", [B._param("community name", L)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(U, null, e ? o.a.createElement(_.a, {
							linkClassName: T.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : B._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(D, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(D, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(X, null), o.a.createElement(ne, null, B._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(U, null, B._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(D, null, M && o.a.createElement(J, {
							eventSource: "content_gate"
						}), o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.ProfileDoesNotExist:
					case C.a.ProfileDeleted:
					case C.a.ProfileSuspended:
					case C.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case C.a.ProfileBlockedForLegalReason:
									return B._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case C.a.ProfileDeleted:
									return B._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case C.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, B._("This account has been {=suspended} .", [B._param("=suspended", o.a.createElement(G, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, B._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case C.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, B._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(U, null, B._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(D, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(D, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(D, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ie(ae(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? F : M;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(re, null, ce(e))), o.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				_ = x.a.wrapped(l.c, "StyledTooltip", g.a),
				w = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.pb)(e),
					userIsSuspended: b.X
				});
			t.a = Object(i.b)(w, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, n) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				a = n.n(i),
				c = n("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(a.a.container, t)
				}, s.a.createElement("div", {
					className: a.a.innerContainer
				}, d._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), s.a.createElement(c.a, null)))
			}
		},
		"./src/reddit/components/CreatorStats/Icon.m.less": function(e, t, n) {
			e.exports = {
				icon: "D7SJKwX8OlPkNjhgXO71s"
			}
		},
		"./src/reddit/components/CreatorStats/Icon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/icons.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/selectors/subreddit.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/components/CreatorStats/Icon.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: n
				} = e;
				const l = Object(i.e)(e => n ? Object(c.U)(e, {
						subredditId: n
					}) : void 0),
					[m, p] = Object(s.useState)(!0);
				return Object(s.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const n = Object(d.e)(t);
						e = e && !n
					}
					if (void 0 !== l) {
						const t = l.isQuarantined;
						e = e && !t
					}
					p(e)
				}, [t, l]), o.a.createElement(a.a, {
					name: r.a.statistics,
					className: m ? u.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/PostList/Placeholder.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(l);
			var m = e => {
				let {
					children: t,
					className: n
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.Wrapper, n)
				}, o.a.createElement(c.a, {
					className: u.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), o.a.createElement("div", {
					className: u.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: n,
					timeSort: s = i.ic.ALL
				} = e;
				return o.a.createElement(m, {
					className: t
				}, s === i.ic.ALL ? r.fbt._("hmm... {profileName} hasn't commented on anything", [r.fbt._param("profileName", `u/${n}`)], {
					hk: "1MHn3t"
				}) : r.fbt._("hmm... {profileName} hasn't commented recently", [r.fbt._param("profileName", `u/${n}`)], {
					hk: "qN3uL"
				}))
			};
			var h = e => {
				let {
					className: t,
					profileName: n,
					timeSort: s = i.ic.ALL
				} = e;
				return o.a.createElement(m, {
					className: t
				}, s === i.ic.ALL ? r.fbt._("hmm... {profileName} hasn't posted anything", [r.fbt._param("profileName", `u/${n}`)], {
					hk: "28vBEd"
				}) : r.fbt._("hmm... {profileName} hasn't posted recently", [r.fbt._param("profileName", `u/${n}`)], {
					hk: "38GhqN"
				}))
			};
			var b = e => {
					let {
						className: t,
						text: n
					} = e;
					return o.a.createElement(m, {
						className: t
					}, n)
				},
				f = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				g = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				x = n.n(g);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = () => o.a.createElement("div", {
				className: x.a.container
			}, o.a.createElement(f.a, {
				className: x.a.hideIcon
			}), o.a.createElement("h3", {
				className: x.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: x.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", d.a), m = a.a.a("UserAgreementLink", d.a), p = a.a.a("PrivacyLink", d.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(i.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === h.Grey,
					[d.a.mIsWhite]: e.textColor === h.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				w = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = n.n(y);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				O = "LayoutSwitch--picker",
				C = Object(c.a)(g.a),
				j = {
					[h.d.Card]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[h.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				N = Object(b.u)(),
				P = Object(a.c)({
					dropdownIsOpen: Object(w.b)(O),
					postLayout: b.S,
					redditStyle: b.D
				}),
				L = Object(i.b)(P, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: O
					}))
				}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(_.Z)(t),
							subreddit: Object(_.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, i = n || h.e[s], a = e === i, c = j[e], l = I[e];
						return o.a.createElement(x.b, k({}, t, {
							className: Object(d.a)(E.a.LayoutItem, {
								[E.a.selected]: a,
								[E.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: E.a.LayoutIcon,
							onClick: a ? void 0 : r,
							isFilled: a && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(C, k({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: O
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || h.e[r];
					return o.a.createElement("div", {
						className: Object(d.a)(E.a.Container, e),
						id: S
					}, o.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: O,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(L(Object(p.c)(Object(l.a)(T))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				h = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/actions/tooltip.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/reddit/constants/history.ts"),
				w = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				E = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/trackers/navigation.ts"),
				C = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				I = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = n("./src/reddit/components/ListingSort/index.m.less"),
				B = n.n(T),
				R = n("./src/lib/lessComponent.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const M = "ListingSort--SortPicker",
				F = Object(v.a)(R.a.wrapped(E.a, "Dropdown", B.a)),
				U = R.a.wrapped(L.a, "ListingSortIcon", B.a),
				A = (R.a.wrapped(C.b, "DropdownTriangle", B.a), R.a.div("Title", B.a)),
				W = R.a.wrapped(e => s.a.createElement(k.b, D({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", B.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", D({}, n, {
						className: Object(i.a)(B.a.SortWrapper, n.className, {
							[B.a.isDisabled]: t
						})
					}))
				},
				G = R.a.div("DropdownRowDisabled", B.a),
				q = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				z = Object(f.c)({
					isAwardListingExperimentEnabled: I.a,
					isBestSortPopularEnabled: j.a,
					user: P.k,
					dropdownIsOpen: (e, t) => Object(N.b)(t.dropdownId || M)(e),
					isPopularPage: l.F
				}),
				V = Object(o.b)(z, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(g.h)({
							tooltipId: n || M
						}))
					}
				});
			var K = R.a.wrapped(q(V(Object(d.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(A, null, x.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(w.a)(e.sort),
					id: e.dropdownId || M,
					showDropdownTriangle: !0
				}, s.a.createElement(U, {
					sort: e.sort
				}))), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(F, D({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || M
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(G, null, x.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (e && (n || r) || t && r) && o.unshift(h.W.BEST), t && s && o.splice(3, 0, h.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(S.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(k.b, {
						className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(w.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(O.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(U, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", B.a),
				Y = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Z[e];
					return t && t() || ""
				},
				Z = {
					[h.fc.AllStates]: () => x.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.fc.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.fc.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.fc.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.fc.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.fc.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.fc.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.fc.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.fc.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.fc.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.fc.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.fc.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.fc.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.fc.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.fc.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.fc.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.fc.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.fc.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.fc.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.fc.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.fc.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.fc.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.fc.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.fc.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.fc.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.fc.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.fc.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.fc.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.fc.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.fc.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.fc.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.fc.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.fc.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.fc.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.fc.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.fc.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.fc.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.fc.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.fc.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.fc.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.fc.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.fc.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.fc.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.fc.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.fc.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.fc.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.fc.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.fc.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.fc.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.fc.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.fc.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.fc.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(E.a, "_Dropdown", Q.a),
				te = Object(v.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === h.z.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return h.fc.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = re(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ie = Object(l.u)(),
				ae = Object(f.c)({
					dropdownIsOpen: Object(N.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ae, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(c.w)(h.z.UnitedStates + "_" + n))
					}
				}));
			var de = R.a.wrapped(ie(ce(e => {
				const t = `${e.baseUrl}?${Y.h}=${h.z.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.fc).map(n => {
					const r = h.fc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.fc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(k.b, {
						className: Object(i.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: J(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Q.a);
			const le = {
				[h.z.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.z.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.z.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.z.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.z.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.z.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.z.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.z.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.z.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.z.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.z.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.z.France]: () => x.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.z.Germany]: () => x.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.z.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.z.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.z.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.z.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.z.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.z.Italy]: () => x.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.z.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.z.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.z.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.z.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.z.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.z.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.z.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.z.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.z.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.z.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.z.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.z.Spain]: () => x.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.z.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.z.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.z.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.z.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.z.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const he = "CountrySort--CountrySortPicker",
				be = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(N.b)(he)
				});
			var ge = be(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t, {
							[_.b.FeedLoadReason]: _.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${Y.h}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(i.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[h.z.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: he
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.z).map(n => {
						const o = h.z[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(k.b, {
							className: Object(i.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === h.z.UnitedStates && s.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				xe = n("./node_modules/path-browserify/index.js"),
				ve = n.n(xe),
				_e = n("./src/reddit/components/TimeSort/index.m.less"),
				we = n.n(_e);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(v.a)(E.a),
				ke = R.a.div("ListingSortContainer", we.a),
				Se = Object(l.u)(),
				Oe = Object(f.c)({
					dropdownIsOpen: Object(N.b)("TimeSort--SortPicker")
				});
			var Ce = Se(Object(o.b)(Oe, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => s.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(w.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(Ee, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.ic.HOUR, h.ic.DAY, h.ic.WEEK, h.ic.MONTH, h.ic.YEAR, h.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = ve.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[Y.C]: t
						}),
						o = r.split("?")[0],
						a = `${r.replace(o+"?","")}`;
					return s.a.createElement(k.b, {
						className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(w.b)(t),
						href: {
							pathname: o,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
							},
							search: a
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(O.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Ie = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/index.tsx"),
				Pe = n("./src/reddit/selectors/meta.ts"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Le);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				De = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				Me = new Set([h.W.CONTROVERSIAL]),
				Fe = "ListingSort--Overflow",
				Ue = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ae = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, P.k, l.F, I.a, Pe.i, (e, t, n, r, s, o, i) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: i
					};
					const a = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (t && (r || n) || s && n) && a.unshift(h.W.BEST), s && o && a.splice(3, 0, h.W.AWARDED), {
						isPopularPage: s,
						sortOptions: a,
						locale: i
					}
				});
			class We extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(O.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(p.a)(n, {
							sort: e
						}) : Object(S.a)(n, `${e}/`), a = o.split("?")[0], c = r ? o.replace(a + "?", "") : void 0;
						return s.a.createElement(Ie.t, {
							className: Object(i.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Ie.b.InternalLink,
							priority: Ie.c.Plain,
							Icon: n => s.a.createElement(U, Be({}, n, {
								className: Object(i.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(w.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: a,
								state: {
									[_.b.FeedLoadReason]: _.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, i = r && !!n && e === h.W.HOT && o === h.W.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && s.a.createElement(ge, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === h.W.AWARDED && (t === h.W.HOT || t === h.W.TOP) : e === h.W.BEST && t === h.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([h.W.TOP, h.W.NEW]);
					return Me.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return De.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: a
					} = this.props, c = !t && Re.has(r), d = De.has(r), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(K, Be({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(i.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(i.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && s.a.createElement(Ce, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: a || h.jc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(K, Be({}, this.props, {
						className: Object(i.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Fe
					}, s.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Ue(Object(o.b)(Ae)(Object(d.c)(We))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = n.n(Ge);
			const ze = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ve = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const s = Object(a.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.J)(n, s))
							}
						}
					}
				});
			class Ke extends s.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: r = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !o && s.a.createElement(m.a, {
						className: qe.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ze(Ve(Object(d.c)(Ke)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
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
				i = Object(s.a)("spBurnLinks", Object(r.a)({
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
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			const l = {
				[i.W.BEST]: "best",
				[i.W.HOT]: "hot",
				[i.W.NEW]: "new",
				[i.W.CONTROVERSIAL]: "controversial",
				[i.W.TOP]: "top",
				[i.W.RISING]: "rising",
				[i.W.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: r
				} = e;
				return l[r] ? s.a.createElement(a.a, {
					name: l[r],
					isFilled: n,
					className: Object(o.a)(t, d.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const c = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				k = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(k);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * v.e,
				j = e => {
					const t = Object(d.a)(S.a.image, b.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && C(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(S.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(i.b)(() => Object(c.a)(_.F, y.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(_.b)(e, r) : null
				}, w.d, _.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = N(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const P = (e, t) => o.a.createElement(j, {
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
				L = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(v.L)(n.height, n.width),
						i = C(n.height) && s;
					return o.a.createElement(I, O({}, n, {
						className: `${s?`${E.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, P(s, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, P(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.L)(n.height, n.width) && o.a.createElement("div", {
						className: S.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(h.a, {
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
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
					r = e.blurSrc ? s.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
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
				return S
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				v = n("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function w(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					h = Object(o.useRef)(),
					b = Object(v.a)(c);

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
				return Object(o.useEffect)(() => {
					if (w(!c && (t || r)), h.current && s) return p.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							o = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const s = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + g ? i = !0 : i && c >= a && c > a + g && (i = !1), a = c, s !== i && t(i)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", s)
						}
					}(h.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== c && w(!c && (t || r))
				}, [b, c, t, r]), i.a.createElement("video", _({}, m, {
					ref: e => h.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var y = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(y);
			const k = Object(c.c)({
				autoplayPref: h.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function S(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: o,
					started: c
				} = Object(a.e)(t => k(t, e)), {
					postId: h,
					shouldLoad: b,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: v,
					shouldPause: _,
					width: y,
					isListing: S,
					className: O,
					showCentered: C,
					originalSource: j,
					isPromoted: I
				} = e, N = t && !(I && Object(d.hasAcceptableAds)()), P = Object(a.d)();

				function L(e) {
					P(e ? Object(u.r)(h) : Object(u.E)(h))
				}

				function T() {
					return P(Object(u.z)({
						postId: h
					}))
				}
				const B = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(h))
				}, 200);

				function R(e) {
					e.persist(), B(e)
				}

				function D(e) {
					var t;
					(o || F(e), c) || (t = e.timeStamp, P(Object(u.A)(h, t)))
				}

				function M(e) {
					P(Object(u.q)(h, e.timeStamp))
				}

				function F(e) {
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

				function U(e) {
					r || D(e), o || F(e), P(Object(u.C)(h))
				}

				function A() {
					const e = {};
					return C && (e.margin = "0 auto"), S || (e.maxHeight = `${p.e}px`), i.a.createElement(w, {
						autoplay: N,
						className: Object(l.a)(m.a, E.a.styledVideo),
						height: g,
						isListing: S,
						isNotCardView: x,
						key: h,
						loop: !0,
						onBufferingChange: L,
						onLoadStart: M,
						onLoadedData: D,
						onLoadedMetadata: F,
						onPause: T,
						onPlaying: U,
						onTimeUpdate: R,
						shouldLoad: b,
						shouldPause: _,
						showCentered: C,
						showFull: v,
						source: f,
						style: e,
						width: y
					})
				}
				return S ? A() : i.a.createElement("div", {
					className: Object(l.a)(E.a.container, O, {
						[E.a.centered]: C
					})
				}, i.a.createElement("a", {
					href: j,
					target: "_blank",
					rel: "noopener noreferrer"
				}, A()))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						isOpen: n,
						...r
					} = e;
					return o.a.createElement(x, p({}, r, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class w extends o.a.Component {
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
					return o.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = w
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
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				h = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				g = c.a.ul("Ul", a.a),
				x = c.a.ol("Ol", a.a),
				v = c.a.strong("B", a.a),
				_ = c.a.em("I", a.a),
				w = c.a.span("U", a.a),
				y = e => s.a.createElement("del", e),
				E = c.a.sub("Sub", a.a),
				k = c.a.sup("Sup", a.a),
				S = c.a.table("Table", a.a),
				O = c.a.tr("Tr", a.a),
				C = c.a.td("Tdl", a.a),
				j = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				N = c.a.th("Thl", a.a),
				P = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => s.a.createElement(o.b, e), "A", a.a)),
				T = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				f = n("./src/reddit/components/RichTextJson/media.tsx"),
				g = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				v = n.n(x);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = n("./src/lib/lessComponent.tsx").a.div("Container", v.a),
				y = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return a.a.createElement(w, _({}, r, {
						style: {
							color: Object(h.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: n,
								...r
							}))
						}
					}))
				}),
				E = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				k = e => o()(e, E),
				S = e => e.findIndex(E),
				O = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: h,
						rtJsonElementProps: x,
						useExplicitTextColor: _,
						shouldBlur: E
					} = e, O = r.document, C = [], j = e.mediaMetadata || null, I = S(O), N = k(O);
					if (E && !s && !i) return a.a.createElement(w, {
						className: Object(c.a)(m.j, n)
					}, a.a.createElement("div", {
						className: v.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: v.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== I)
						for (let a = I; a <= N; a++) {
							const e = O[a];
							switch (e.e) {
								case b.k:
									C.push(g.c(e, x, a));
									break;
								case b.l:
									C.push(g.d(a));
									break;
								case b.b:
									C.push(g.a(e, j, x, a));
									break;
								case b.c:
									C.push(g.b(e, a));
									break;
								case b.p:
									C.push(g.f(e, j, x, a));
									break;
								case b.z:
									C.push(g.h(e, j, x, a));
									break;
								case b.u:
									C.push(g.g(e, j, x, a));
									break;
								case b.h:
									C.push(Object(f.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									C.push(...Object(f.b)(e, a, j, h, p, t))
							}
						}
					return _ ? a.a.createElement(w, {
						className: Object(c.a)(m.j, n)
					}, C) : a.a.createElement(y, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, C)
				};
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
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
						return O(t)
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
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				w = x.a.wrapped(b.a, "A", g.a),
				y = x.a.wrapped(l.a, "ImageBox", g.a),
				E = x.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				k = x.a.div("Placeholder", g.a),
				S = x.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...s
					} = e;
					const i = n === h.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(k, v({
						className: t,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, s))
				}, "Placeholder", g.a),
				O = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return o.a.createElement("div", {
						className: g.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				C = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === h.s ? s = n.s.u : n.e === h.r ? s = n.s.gif : n.e === h.t && (s = (e => {
						const t = _.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? o.a.createElement(w, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				j = (e, t, n, r, s, a) => {
					const d = h.E(n, e.id);
					if (r) return [C(e, t, d)];
					const l = [];
					return d ? d.e === h.s ? l.push(((e, t, n, r) => {
						let {
							id: s,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(y, {
							altText: r,
							originalSource: a.u,
							postId: s,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(d, t, !!e.c, a)) : d.e === h.r ? l.push(((e, t, n) => {
						let {
							id: r,
							ext: s,
							s: a
						} = e;
						if (Object(p.g)(r)) {
							const e = s || Object(p.f)(r);
							return o.a.createElement("div", {
								className: Object(i.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: n
								})
							}, o.a.createElement(w, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? o.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: r,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === h.t && l.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: s,
							mpegDashSource: a,
							postId: r,
							isGif: m
						})))
					})(d, t, !!e.c, s)) : l.push(((e, t) => o.a.createElement(S, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(E, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return W
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(g);
			const v = 1e3,
				_ = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class y extends a.a.Component {
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
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
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
					let n, r, s;
					t.e === p.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === p.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return s ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: s,
						width: n,
						height: r,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var E = Object(u.c)(y),
				k = n("./src/reddit/components/RichTextJson/media.tsx"),
				S = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = n("./src/reddit/components/SubredditMention/index.tsx"),
				C = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/isPost.ts"),
				N = n("./src/reddit/helpers/richTextJson/index.ts"),
				P = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						o = [],
						i = r.length;
					for (let a = 0; a < i; a++) {
						const e = r[a];
						o.push(e.e === p.w ? e.t : W(e, t, a))
					}
					const d = c.x[s - 1];
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				T = e => a.a.createElement(c.e, {
					key: e
				}),
				B = (e, t, n, r) => {
					const s = e.c;
					if (!s) return;
					const o = s.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(M(s[a], t, n, a));
					return a.a.createElement(c.c, {
						key: r
					}, i)
				},
				R = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				D = (e, t, n, r) => {
					const s = e.c,
						o = [],
						i = s.length;
					for (let l = 0; l < i; l++) {
						const e = s[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, r) => M(e, t, n, r))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: r
					}, o)
				},
				M = (e, t, n, r) => {
					switch (e.e) {
						case p.b:
							return B(e, t, n, r);
						case p.c:
							return R(e, r);
						case p.k:
							return L(e, n, r);
						case p.l:
							return T(r);
						case p.p:
							return D(e, t, n, r);
						case p.u:
							return U(e, t, n, r);
						case p.z:
							return F(e, t, n, r)
					}
				},
				F = (e, t, n, r) => {
					const s = e.c,
						o = e.h,
						i = s.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: r,
								D: s
							} = z(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(r, {
							key: c
						}, A(i, t, n))), m[c] = s
					}
					for (let p = 0; p < i; p++) {
						const e = s[p],
							r = e.length,
							o = [];
						for (let s = 0; s < r; s++) {
							const r = m[s],
								{
									c: i = []
								} = e[s];
							o.push(a.a.createElement(r, {
								key: s
							}, A(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				U = (e, t, n, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const s = e.c[0];
					return s.e !== p.m && s.e !== p.a || !Object(N.g)(s.id) ? a.a.createElement(c.j, {
						key: r
					}, A(e.c, t, n)) : Object(k.b)(s, r, t)
				},
				A = (e, t, n) => {
					const r = [],
						s = e.length;
					for (let o = 0; o < s; o++) {
						const s = e[o];
						if (s.e === p.A) r.push(H(s, o));
						else if (s.e === p.x) r.push(a.a.createElement(S.a, {
							key: o
						}, A(s.c, t, n)));
						else if (s.e === p.n) r.push(a.a.createElement("br", {
							key: o
						}));
						else if (s.e === p.m || s.e === p.a) {
							if (s.id.startsWith("emote|")) {
								const e = p.E(t, s.id);
								e && r.push(a.a.createElement(E, {
									key: o,
									node: s,
									media: e
								}))
							}
						} else r.push(W(s, n, o))
					}
					return r
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const r = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, o;
							const i = Object(P.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(I.b)(d) && (s = d.postId), d && Object(j.b)(d) && (o = d.id, s = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: s,
								commentId: o
							}, r);
						case p.y:
							return a.a.createElement(O.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: s
					} = e, o = [];
					if (!n) return q(0, s, t);
					const i = Object(r.a)(s);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, r] = n[a], d = t + r, l = i[t], u = i[d] - l;
						l > c && o.push(q(0, s.substr(c, l - c), `between${a}`)), o.push(q(e, s.substr(l, u), a)), c = l + u
					}
					return c < s.length && o.push(q(0, s.substr(c), `remaining${a}`)), o
				},
				G = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				q = (e, t, n) => {
					let r = t;
					return r = o()(G, (t, r, s) => e & parseInt(s, 10) ? a.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				z = e => {
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
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => s.a.createElement(a.b, e), "S", d.a)
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
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class x extends s.a.PureComponent {
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
					return s.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(h.c)(x),
				_ = Object(i.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				w = Object(o.b)(_),
				y = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return s.a.createElement(v, {
						subredditName: r,
						rtJsonElementProps: i
					});
					switch (o) {
						case b.Bf.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: i
							});
						case b.Bf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return s.a.createElement(v, {
								subredditName: r,
								rtJsonElementProps: i
							})
					}
				};
			t.b = w(y)
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(i.e)(a.e),
						n = Object(i.e)(a.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = n("./src/reddit/selectors/telemetry.ts");
			const _ = "nsfw_dialog";
			var w = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				y = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				E = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				k = n.n(E);
			const S = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				O = e => {
					const t = Object(a.d)(),
						n = Object(b.b)(),
						r = Object(a.e)(y.f),
						u = Object(o.useCallback)(() => {
							r === y.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						h = (e => e ? i.a.createElement("div", {
							className: k.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: k.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === y.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.c)(r)
					}, [r]), i.a.createElement("div", {
						className: Object(l.a)(k.a.mainCta)
					}, i.a.createElement(w, null), h, i.a.createElement("div", {
						className: k.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: k.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: k.a.buttonContainer
					}, i.a.createElement(g.j, {
						className: Object(l.a)(k.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "click",
								noun: _
							}))()), u(), Object(x.b)(x.a.Login), t(Object(m.i)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(g.j, {
						className: k.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: _
							}))()), Object(x.b)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				C = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: k.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: k.a.qrCodeInner
					}, i.a.createElement("img", {
						className: k.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: k.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: k.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: k.a.sneakySnoo,
						src: t
					})))
				}),
				j = e => {
					const t = Object(b.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(v.n)(e),
							source: "xpromo",
							action: "view",
							noun: _
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(a.e)(y.g), s = Object(a.e)(y.h), o = Object(a.e)(y.f), c = o === y.a.Blurred ? h.a.White : o === y.a.NoPreview ? h.a.Grey : void 0;
					return i.a.createElement("div", {
						className: k.a.container
					}, i.a.createElement(O, {
						contentTitle: n
					}), i.a.createElement("div", {
						className: Object(l.a)(k.a.footerWrapper, {
							[k.a.mIsModal]: o === y.a.Blurred
						})
					}, i.a.createElement(h.b, {
						textColor: c
					})), i.a.createElement(C, {
						qrCodeAsset: (() => r === f.Ec.Enabled || s === f.qb.BlurredPreview || s === f.qb.NoPreview ? S.d2x_nsfw_signup_blocking_de_v1 : S.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/tracking.ts");

			function E() {
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
			const k = E(),
				S = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: v.g,
					postsById: _.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(_.D)(e, n, r, s)
					}),
					subredditsById: w.bb,
					viewportDataLoaded: y.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				O = Object(s.c)(S),
				C = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
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
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(d.O(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.P(t, r, s))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				j = e => Object(h.b)({
					...e
				}),
				I = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: i
					} = r;
					return Object(b.k)(e, t, "post", s, o, i, void 0)
				},
				N = Object(r.b)(O, C, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: j,
					postClickEventFactory: I
				}));
			t.a = e => Object(m.c)(k(N(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = {
					[s.W.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.W.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.W.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.W.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.W.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.W.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.W.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = o[e];
					return t && t() || ""
				},
				a = {
					[s.ic.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.ic.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.ic.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.ic.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.ic.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.ic.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = a[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext({})
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
			}
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(r.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(o.b)(t))) return Object(s.b)(t) ? i.SourceElement.Comment : Object(r.x)(n) ? i.SourceElement.PostDetail : Object(r.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return y
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.n(e),
					source: s.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: s,
					screen: u.Z(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const s = Object(a.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[s]: n.id
						},
						d = Object(l.z)(e, {
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
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const r = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.I(e, n.id),
						subreddit: u.ib(e, r),
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
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.jb(t, e),
					screen: u.Z(t)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.Z(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.Z(n)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: o,
					gutter: a,
					...l
				} = e;
				return s.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: r,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1tjWF-96KbJjdBGufYe6Lu",
				accent: "_1IHNP4dWxy7U5QgxQxi5If",
				title: "KY1h4po8s5PdqDHk-wjpB",
				subtitle: "_2hJJe3AbHRX6HhK43NwbWS",
				avatarContainer: "CE8h3MaaAIApJVVopVtob",
				avatar: "_3irN5APGI7MZ0SaDRl6MqN",
				avatarBlockIcon: "_9vWkG7-BD-CXaW0ZmaAYA",
				avatarIconContainer: "_26b11ZsQwO7zJjCuPAI89x",
				btnContainer: "_3uDT2KC9eHKU_3y6ZKXSZ-",
				btn: "_1yQHj4iPQKoswy8UZ3MADy"
			}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/Event.ts");
			var c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx");
			var l = e => s.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, s.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), s.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, s.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = n.n(m);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: n,
					avatar: o,
					history: m,
					location: b
				} = e;
				const f = Object(c.a)();
				return Object(r.useEffect)(() => {
					f((e => t => ({
						source: a.f.BlockedProfileInterstitial,
						action: a.d.View,
						noun: a.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...i.n(t)
					}))(n))
				}, [f, n]), s.a.createElement("div", {
					className: p.a.container
				}, s.a.createElement(l, {
					className: p.a.accent
				}), s.a.createElement("div", {
					className: p.a.avatarContainer
				}, s.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: h._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), s.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, s.a.createElement(d.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), s.a.createElement("h3", {
					className: p.a.title
				}, h._("u/{name} is blocked", [h._param("name", t)], {
					hk: "18rExM"
				})), s.a.createElement("p", {
					className: p.a.subtitle
				}, h._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), s.a.createElement("div", {
					className: p.a.btnContainer
				}, s.a.createElement(u.t, {
					className: p.a.btn,
					to: `${b.pathname}?consent=true`,
					kind: u.b.InternalLink,
					priority: u.c.Primary,
					size: u.d.L,
					onClick: () => f((e => t => ({
						source: a.f.BlockedProfileInterstitial,
						action: a.d.Accept,
						noun: a.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...i.n(t)
					}))(n)),
					isFullWidth: !0,
					isSquare: !0
				}, h._("Continue", null, {
					hk: "3eqDZf"
				})), s.a.createElement(u.t, {
					className: p.a.btn,
					to: "#",
					kind: u.b.InternalLink,
					priority: u.c.Secondary,
					size: u.d.L,
					onClick: () => {
						f((e => t => ({
							source: a.f.BlockedProfileInterstitial,
							action: a.d.Deny,
							noun: a.e.BlockedProfileInterstitial,
							blockedUser: {
								id: e
							},
							...i.n(t)
						}))(n)), m.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, h._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfilePosts/index.m.less": function(e, t, n) {
			e.exports = {
				creatorStatsEducationUnit: "_3z4ZLgygqBtdU8Fy77oHl-"
			}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				p = n("./src/reddit/actions/pages/profilePosts.ts"),
				h = n("./src/reddit/actions/pages/profileShared.ts"),
				b = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				g = n("./src/reddit/components/EmptyProfile/index.ts"),
				x = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				v = n("./src/reddit/components/JumpToContent/index.tsx"),
				_ = n("./src/reddit/components/ListingPostList/index.tsx"),
				w = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				y = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				E = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/helpers/localStorage/index.ts"),
				O = n("./src/reddit/helpers/name/index.ts"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				j = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				I = n("./src/reddit/layout/page/Listing/index.tsx"),
				N = n("./src/reddit/models/ContentGate.ts"),
				P = n("./src/reddit/pages/ErrorPages/index.tsx"),
				L = n("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				T = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = n("./src/reddit/selectors/experiments/creatorStats.ts"),
				R = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				D = n("./src/reddit/selectors/profile.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/pages/ProfilePosts/index.m.less"),
				U = n.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(k.u)(),
				H = Object(c.a)(k.E, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(k.E)(e, {
						pageLayer: n
					}) && Object(B.a)(e)
				}, M.kb, (e, t) => {
					let {
						location: n
					} = t;
					return s()([...Object(l.a)(n.search)])
				}, k.S, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(D.j)(e, {
						profileName: n.params.profileName
					})
				}, M.Q, (e, t) => {
					let {
						match: n
					} = t;
					return Object(M.f)(e, d.kc + n.params.profileName)
				}, T.c, (e, t) => {
					let {
						match: n
					} = t;
					return Object(M.L)(e, {
						profileName: n.params.profileName
					})
				}, R.f, (e, t, n, r, s, o, i, a, c, d, l, m) => {
					var p, b;
					const {
						sort: f,
						t: g
					} = Object(h.b)(r), x = Object(u.a)(`u_${o}`, f, r);
					return {
						contentGateInfo: c,
						over18Prefs: n,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileCreatorStatsEnabled: t,
						isProfileNSFW: !!i && i.isNSFW,
						layout: s,
						listingKey: x,
						profileName: o,
						sort: f,
						timeSort: g,
						avatar: null === (p = null == i ? void 0 : i.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: d,
						isBlocked: l,
						profileId: null !== (b = null == i ? void 0 : i.id) && void 0 !== b ? b : "",
						nsfwBlockingExperiment: m
					}
				}),
				G = Object(a.b)(H, (e, t) => ({
					onLoadMore: () => e(p.morePostsRequested()),
					onLayoutChange: () => e(p.profilePostsRequested({
						...t.match,
						queryParams: s()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(m.a)())
				}));
			class q extends i.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(S.K)() <= 2
						})
					}, this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-posts",
							render: () => i.a.createElement(f.a, {
								className: U.a.creatorStatsEducationUnit
							})
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(S.K)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === R.a.Blurred && this.props.openNsfwModal()
				}
				componentWillUnmount() {
					window.removeEventListener("storage", this.onStorage)
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: n,
						isOwnProfile: r,
						isProfileBlockInterstitialEnabled: s,
						isProfileCreatorStatsEnabled: o,
						isProfileNSFW: a,
						listingKey: c,
						nsfwBlockingExperiment: l,
						onLayoutChange: u,
						onLoadMore: m,
						over18Prefs: p,
						pageLayer: h,
						profileId: f,
						profileName: k,
						sort: S,
						timeSort: j
					} = this.props;
					if (!h || !k) return null;
					if (t && (t.profileDeleted || t.profileSuspended)) return i.a.createElement(b.default, {
						contentGateType: t.profileDeleted ? N.a.ProfileDeleted : N.a.ProfileSuspended,
						profileName: k
					});
					const T = h.queryParams && "true" === h.queryParams.consent;
					if (403 === h.status || n && !T) return s ? i.a.createElement(L.a, {
						username: k,
						avatar: e,
						uid: f
					}) : i.a.createElement(P.a, null);
					if (404 === h.status) return i.a.createElement(b.default, {
						contentGateType: N.a.ProfileDoesNotExist,
						profileName: k
					});
					const B = k.toLowerCase(),
						D = `/user/${k}/posts/`,
						M = {
							listingKey: c,
							listingName: B
						};
					if (a && !r && l === R.a.NoPreview) return i.a.createElement(E.a, {
						contentTitle: Object(O.d)(k)
					});
					if (!p && a && !r && l !== R.a.Blurred) return i.a.createElement(b.default, {
						contentGateType: N.a.Nsfw,
						subredditName: k
					});
					const F = {
						sort: S,
						baseUrl: D,
						sortOptions: d.Db,
						subredditId: this.props.subredditId,
						timeSort: j
					};
					return i.a.createElement(I.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(w.a, {
							profileName: k,
							viewBlockedConsent: T
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, F), i.a.createElement(v.a, null), i.a.createElement(_.a, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled ? this.getInjectChildren : void 0,
							listingKey: c,
							listingName: B,
							listingViewed: (e, t) => Object(C.r)(c, S, t, e, j),
							noPostsComponent: () => i.a.createElement(g.c, {
								profileName: k,
								timeSort: j
							}),
							onLoadMore: m,
							onTryAgain: u,
							inSubredditOrProfile: !1,
							isProfileCreatorStatsEnabled: o && r
						})),
						sidebar: i.a.createElement(y.a, A({}, M, {
							profileName: k
						}))
					})
				}
			}
			t.default = W(G(Object(j.d)(q)))
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: o.Q,
					experimentName: r.Ne
				}) === r.vd
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.ad
					});
					return !(!t || Object(r.Xf)(t))
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.ad
					}) === r.zd.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "d", (function() {
				return w
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(i.U)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(i.Y)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(i.U)(e, {
						subredditId: n
					}) : null
				},
				h = (e, t, n, r, s) => {
					const i = s.find(e => e <= t) || -1,
						a = s.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + n > t) && (!(t + n > a) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							i = s && Object(o.G)(e, {
								postId: r
							}) || null,
							a = s && Object(o.G)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				b = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let i = -1;
					const a = Object(o.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return b.forEach(t => {
						let n = i + t;
						if (!(n >= a.length)) {
							for (; n < a.length && !h(e, n, t, a, s);) n += 1;
							n < a.length && (c.push(n), i = n)
						}
					}), c
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				_ = e => e.focusedVerticals.lastLoadedEnv,
				w = e => {
					const t = Object(a.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.uf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Bf.SmIcon || t === r.Bf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = Object(i.Y)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePosts.312831d1f0bac191f33c.js.map