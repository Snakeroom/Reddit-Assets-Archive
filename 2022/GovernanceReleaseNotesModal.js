// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.65e0f42d094ff07e6e73.js
// Retrieved at 10/25/2022, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
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
					var s, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						x = !o && !u && !m && !h && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !_ && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
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
					} : p ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
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
					} : h ? (s = {
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
					} : o ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : i ? (s = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && i ? (s[i] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : E ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var w = "";
					s.windows ? w = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (s.osversion = w);
					var j = !s.windows && w.split(".")[0];
					return _ || d || "ipad" == i || o && (3 == j || j >= 4 && !y) || s.silk ? s.tablet = e : (y || "iphone" == i || "ipod" == i || o || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function i(e) {
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

				function o(e, r, s) {
					var o = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (o = t(s));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = i, n.check = function(e, t, n) {
					return !o(e, t, n)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var i = s.element,
								o = a(i),
								d = this._rootContainsTarget(i),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, d, l, u, m, h, p = a(n), b = c(n), f = !1; !f;) {
								var x = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (f = !0, x = r) : b != t.body && b != t.documentElement && "visible" != g.overflow && (x = a(b)), x && (s = x, i = p, o = void 0, d = void 0, l = void 0, u = void 0, m = void 0, h = void 0, o = Math.max(s.top, i.top), d = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), u = Math.min(s.right, i.right), h = d - o, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: o,
										bottom: d,
										left: l,
										right: u,
										width: m,
										height: h
									}))) break;
								b = c(b)
							}
							return p
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
								var i = this.thresholds[s];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
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
					var n, r, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function o(e, t, n, r) {
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
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, i) {
					n = r ? (r = !1, e) : t(n, e, s, i)
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
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? r : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), n, c, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = r(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
				if (void 0 !== s) return !!s;
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
					if (!1 === (s = n ? n.call(r, l, u, c) : void 0) || void 0 === s && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
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
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "b", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/MutedSubreddits.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var h = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				b = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const x = e => Object(i.f)({
					id: e,
					kind: h.b.Error,
					duration: i.a,
					text: r.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				g = (e, t) => Object(i.f)({
					kind: h.b.SuccessCommunityGreen,
					text: r.fbt._("Muted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(i.f)({
					kind: h.b.SuccessCommunityGreen,
					text: r.fbt._("Unmuted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var _ = n("./src/reddit/endpoints/subreddit/about.ts");
			const y = Object(s.a)(p.i),
				E = Object(s.a)(p.h),
				w = Object(s.a)(p.G),
				j = (Object(s.a)(p.j), Object(s.a)(p.F), Object(s.a)(p.g)),
				O = Object(s.a)(p.f),
				k = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						if ((await u(o(), t)).ok) r && r(), g(n, S({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						if ((await m(o(), t)).ok) r && r(), v(n, k({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				C = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						if ((await u(o(), t)).ok) r && r(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(g(n, I({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: o
						} = i;
						if ((await m(o(), t)).ok) r && r(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(n, C({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				M = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: d
						} = a;
						const l = Object(b.a)(n);
						(await ((e, t, n) => Object(o.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(w({
							subredditId: t,
							notificationLevel: n
						})), e(Object(i.f)({
							kind: h.b.SuccessCommunityGreen,
							text: Object(b.b)(n)
						}))) : e(Object(i.f)({
							kind: h.b.Error,
							text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				T = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const a = await (e => Object(o.a)(e, d))(s());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(y({
							nodes: n
						}))
					} else e(E()), e(Object(i.f)({
						duration: i.a,
						kind: h.b.Error,
						text: r.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, N = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, r, s) => {
						let {
							gqlContext: i
						} = s;
						const o = await m(i(), t),
							{
								data: a
							} = o.body;
						if (o.ok && a.deleteSubredditMuteSettings.ok) e(j(t)), e(v(n));
						else {
							e(x(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: o
						} = s;
						const a = n(),
							d = Object(f.t)(a).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (d) {
							const t = d.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(i.f)({
								id: n,
								kind: h.b.Error,
								duration: i.a,
								text: r.fbt._("Sorry, r/{subreddit name} is already muted.", [r.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const c = await Object(_.a)(o(), t, !0),
							{
								data: l
							} = c.body,
							m = l && l.subreddit;
						if (!c.ok || null === m) {
							return e(((e, t) => Object(i.f)({
								id: e,
								kind: h.b.Error,
								duration: i.a,
								text: r.fbt._("Sorry, r/{subreddit name} isn't a community.", [r.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const p = m.id,
							b = await u(o(), p),
							{
								data: v
							} = b.body;
						if (b.ok && v.updateSubredditMuteSettings.ok) e(O([m])), e(g(m.name));
						else {
							e(x(`error-muting-${p}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(a.z),
				h = Object(s.a)(a.y),
				p = Object(s.a)(a.x),
				b = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.c.OFF:
							return r.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return r.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return r.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
					successCallback: s,
					undoCallback: a
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: g
					} = x;
					var v, _, y;
					e(h());
					const E = b(n),
						w = await Object(c.b)(g(), t, E);
					if ((null === (_ = null === (v = w.error) || void 0 === v ? void 0 : v.fields) || void 0 === _ ? void 0 : _.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(w.body) && (null === (y = w.body.data.updateSubredditNotificationSettings.errors) || void 0 === y ? void 0 : y.length)) return e(p()), e(Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					w.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), s && s(), e(a ? Object(d.f)(Object(d.e)(f(n), u.b.Undo, r.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, a))) : Object(d.f)(Object(d.e)(f(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(i.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(a.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(d.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				a = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(a);

			function c(e) {
				return s.a.createElement("div", {
					className: Object(i.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.children), s.a.createElement(o.a, {
					className: d.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less": function(e, t, n) {
			e.exports = {
				date: "_1by4A-0PLBX13RXvipwRcH"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less": function(e, t, n) {
			e.exports = {
				media: "MIDgJ92fubZO3ngkh6ERh",
				text: "_3cbhcaToRzSvS3AZHJJvLi",
				title: "_1nM99kzHmBctirluJKfGFl"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_16aq4YoQYc6_O-E66cDxvD",
				container: "sBFMqVph7JM7fhtn8VIiv",
				prev: "_29Q_dDO_ANxqcMkzCOmsm-"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1eV0V57guaBVMeKljYRDZV",
				dot: "_1W94VLaridFHpaS6aIPX0M",
				dotSelected: "_8B-dKG9AXPQlHigF1i1sJ"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.m.less": function(e, t, n) {
			e.exports = {
				controls: "_1d3JALELQYjabIq8gl2EoW",
				controlBox: "_3yJ4xUsPnm94-kYEcZTx2F",
				title: "_1j-YFVTgvDYE6azr1ERUw9"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = n("./src/reddit/constants/keycodes.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/selectors/gov.ts"),
				h = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./node_modules/shallowequal/index.js"),
				f = n.n(b),
				x = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				g = n.n(x);

			function v(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function _(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), s = new Date(e.date), f()(v(n), v(s)));
				var n, s;
				return i.a.createElement("div", {
					className: Object(p.a)(g.a.date, e.className)
				}, t ? r.fbt._("today", null, {
					hk: "4pfpUs"
				}) : function(e) {
					const [t, , n] = v(e);
					return `${e.toLocaleString("en-US",{month:"short"})} ${t}, ${n}`
				}(new Date(e.date)))
			}
			var y = n("./src/reddit/components/Media/index.tsx"),
				E = n("./src/reddit/components/RichTextJson/index.tsx"),
				w = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				j = n.n(w);
			const O = {};

			function k(e) {
				return i.a.createElement("div", {
					className: e.className
				}, i.a.createElement("div", {
					className: j.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? i.a.createElement("div", {
					className: j.a.text
				}, i.a.createElement(E.b, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: O
				})) : i.a.createElement("div", {
					className: j.a.media
				}, i.a.createElement(y.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var S = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				M = n.n(I);

			function T(e) {
				return i.a.createElement("div", {
					className: Object(p.a)(M.a.container, e.className)
				}, !e.isFirst && i.a.createElement(S.o, {
					className: M.a.prev,
					onClick: e.onPrevSlide
				}, i.a.createElement(C.a, {
					className: M.a.arrow
				})), i.a.createElement(S.l, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? r.fbt._("done", null, {
					hk: "2XjG3a"
				}) : r.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var N = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				L = n.n(N);

			function R(e) {
				return i.a.createElement("div", {
					className: Object(p.a)(L.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => i.a.createElement("div", {
					className: Object(p.a)(L.a.dot, {
						[L.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var P = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				B = n.n(P);
			class F extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case l.b.ArrowRight:
								return this.handleViewNextSlide();
							case l.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case l.b.Escape:
								return this.props.onClose()
						}
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleKeyDown)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleKeyDown)
				}
				render() {
					if (!this.props.subreddit) return null;
					const e = this.props.releaseNotes[this.state.currentlyViewingIndex];
					return i.a.createElement("div", null, i.a.createElement(c.a, {
						className: B.a.title
					}, r.fbt._("What's New in {subredditName}?", [r.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), i.a.createElement(k, {
						releaseNote: e
					}), i.a.createElement("div", {
						className: B.a.controls
					}, i.a.createElement(_, {
						className: B.a.controlBox,
						date: e.created
					}), i.a.createElement(R, {
						className: B.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), i.a.createElement(T, {
						className: B.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const H = Object(h.c)({
					releaseNotes: m.f,
					subreddit: u.r
				}),
				D = Object(o.b)(H, e => ({
					onClose: () => e(Object(d.f)())
				})),
				U = Object(u.u)();
			t.default = Object(a.a)(U(D(F)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
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
				o = Object(s.a)("spBurnLinks", Object(r.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(o);
			const d = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.eb
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), s.a.createElement("iframe", {
					className: Object(d.a)(l.a, p.a.embedBox, e.className),
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
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				v = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				k = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = n.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => e > 2 * y.e,
				T = e => i.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[C.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				N = e => {
					const t = Object(c.a)(C.a.image, f.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${y.j}px`), e.isListing || e.isTall && M(e.height) || (n.maxHeight = `${y.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(s.useRef)(null),
						[a, d] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(_.a)(o, l, u.current);
					const {
						width: m,
						height: h
					} = e;
					let p = 240;
					if (m / h > 1)
						if (m < 240) p = h;
						else {
							(p = h * (240 / m)) < 20 && (p = 20)
						}
					else p = Math.min(p, h);
					const b = Object(s.useRef)({
						height: p
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: o,
						style: b.current
					}, a && i.a.createElement(T, I({}, e, {
						className: t
					}))) : i.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				L = e => {
					const t = {};
					return (!e.showFull && Object(y.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${y.j}px`, e.shouldBlur && (t.maxWidth = Object(y.L)(e.height, e.width) ? `${y.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className, {
							[C.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				R = Object(o.b)(() => Object(d.a)(E.F, j.kb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(E.b)(e, r) : null
				}, w.d, E.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = R(e => {
				const t = Object(v.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": k.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(g.a)(e.post, e.pageType))
					}
				}, B(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const P = (e, t) => i.a.createElement(N, {
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				B = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(y.L)(n.height, n.width),
						o = M(n.height) && s;
					return i.a.createElement(L, I({}, n, {
						className: `${s?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, P(s, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: C.a.imageLink
					}, P(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > y.j && Object(y.L)(n.height, n.width) && i.a.createElement("div", {
						className: C.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(p.a, {
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
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
					r = e.blurSrc ? s.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), s.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
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
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
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

			function y(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					onClick: m,
					...h
				} = e;
				const p = Object(i.useRef)(),
					b = Object(i.useRef)(),
					y = Object(v.a)(d);

				function E(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (E(!d && (t || r)), b.current && s) return p.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							i = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, r) return r = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const s = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + x ? o = !0 : o && d >= a && d > a + x && (o = !1), a = d, s !== o && t(o)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", s)
						}
					}(b.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					y !== d && E(!d && (t || r))
				}, [y, d, t, r]), o.a.createElement("video", _({}, h, {
					ref: e => b.current = e,
					muted: !0,
					onClick: m
				}), o.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = n.n(E);
			const j = Object(d.c)({
				autoplayPref: p.c,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function O(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: i,
					started: d
				} = Object(a.e)(t => j(t, e)), {
					postId: p,
					shouldLoad: b,
					source: f,
					height: x,
					isNotCardView: g,
					showFull: v,
					shouldPause: _,
					width: E,
					isListing: O,
					className: k,
					showCentered: S,
					originalSource: C,
					isPromoted: I,
					renderSmallMedia: M,
					onClick: T
				} = e, N = t && !(I && Object(c.hasAcceptableAds)()), L = Object(a.d)();

				function R(e) {
					L(e ? Object(u.r)(p) : Object(u.E)(p))
				}

				function P() {
					return L(Object(u.z)({
						postId: p
					}))
				}
				const B = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && L(Object(u.s)(p))
				}, 200);

				function F(e) {
					e.persist(), B(e)
				}

				function H(e) {
					var t;
					(i || U(e), d) || (t = e.timeStamp, L(Object(u.A)(p, t)))
				}

				function D(e) {
					L(Object(u.q)(p, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						L(Object(u.D)({
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

				function A(e) {
					r || H(e), i || U(e), L(Object(u.C)(p))
				}

				function G() {
					const e = {};
					return S && (e.margin = "0 auto"), O || (e.maxHeight = `${h.e}px`), o.a.createElement(y, {
						autoplay: N,
						className: Object(l.a)(m.a, w.a.styledVideo, {
							[w.a.renderSmallMedia]: M
						}),
						height: M ? void 0 : x,
						isListing: O,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: R,
						onClick: T,
						onLoadStart: D,
						onLoadedData: H,
						onLoadedMetadata: U,
						onPause: P,
						onPlaying: A,
						onTimeUpdate: F,
						shouldLoad: b,
						shouldPause: _,
						showCentered: S,
						showFull: v,
						source: f,
						style: M ? void 0 : e,
						width: M ? void 0 : E
					})
				}
				return O ? G() : o.a.createElement("div", {
					className: Object(l.a)(w.a.container, k, {
						[w.a.centered]: S
					})
				}, o.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, G()))
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				h = n.n(m);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
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
				}, "StyledRawHTMLDisplay", h.a);
			t.a = p(Object(a.a)(b))
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
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return i.a.createElement(g, h({}, r, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class y extends i.a.Component {
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
					return i.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = y
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
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "w", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				h = d.a.pre("Pre", a.a),
				p = d.a.blockquote("Blockquote", a.a),
				b = d.a.p("P", a.a),
				f = d.a.li("Li", a.a),
				x = d.a.ul("Ul", a.a),
				g = d.a.ol("Ol", a.a),
				v = d.a.strong("B", a.a),
				_ = d.a.em("I", a.a),
				y = d.a.span("U", a.a),
				E = e => s.a.createElement("del", e),
				w = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				O = d.a.table("Table", a.a),
				k = d.a.tr("Tr", a.a),
				S = d.a.td("Tdl", a.a),
				C = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				M = d.a.th("Thl", a.a),
				T = d.a.th("Thc", a.a),
				N = (d.a.th("Thr", a.a), d.a.wrapped(e => s.a.createElement(i.b, e), "A", a.a)),
				L = d.a.wrapped(c.a, "A", a.a)
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
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(f);
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				v = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return a.a.createElement(g, r)
				}),
				_ = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.v || !!e.c && !e.c.every(e => e.e === h.B && !e.t),
				y = e => i()(e, _),
				E = e => e.findIndex(_),
				w = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: _,
						rtJsonElementProps: w,
						useExplicitTextColor: j,
						shouldBlur: O,
						onClickRevealSpoilerText: k,
						mediaProps: S
					} = e, C = r.document, I = [], M = e.mediaMetadata || null, T = E(C), N = y(C);
					if (O && !s && !o) return a.a.createElement(g, {
						className: Object(d.a)(m.j, n)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== T)
						for (let a = T; a <= N; a++) {
							const e = C[a];
							switch (e.e) {
								case h.k:
									I.push(b.c(e, w, a));
									break;
								case h.l:
									I.push(b.d(a));
									break;
								case h.b:
									I.push(b.a(e, M, w, a));
									break;
								case h.c:
									I.push(b.b(e, a));
									break;
								case h.p:
									I.push(b.f(e, M, w, a, k));
									break;
								case h.A:
									I.push(b.h(e, M, w, a, k));
									break;
								case h.v:
									I.push(b.g(e, M, w, a, k, S));
									break;
								case h.h:
									I.push(Object(p.a)(e, a));
									break;
								case h.m:
								case h.a:
								case h.E:
									I.push(...Object(p.b)({
										node: e,
										key: a,
										rtJsonElementProps: w,
										mediaMetadata: M,
										renderMediaAsLinks: _,
										postId: f,
										altText: t,
										mediaProps: S
									}))
							}
						}
					return j ? a.a.createElement(g, {
						className: Object(d.a)(m.j, n)
					}, I) : a.a.createElement(v, {
						className: Object(d.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, I)
				};
			class j extends a.a.Component {
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
						return w(t)
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
				return T
			})), n.d(t, "b", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/RichTextJson/index.ts");
			var g = e => i.a.createElement("svg", {
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
				v = n("./src/reddit/components/RichTextJson/elements.tsx"),
				_ = n("./src/reddit/components/RichTextJson/media.m.less"),
				y = n.n(_),
				E = n("./src/lib/lessComponent.tsx"),
				w = n("./src/reddit/helpers/media/index.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				k = E.a.wrapped(v.a, "A", y.a),
				S = E.a.wrapped(l.a, "ImageBox", y.a),
				C = E.a.wrapped(e => i.a.createElement("p", e), "Caption", y.a),
				I = E.a.div("Placeholder", y.a),
				M = E.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = n === x.E ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(I, j({
						className: Object(o.a)(t, {
							[y.a.renderSmallMedia]: a,
							[y.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && i.a.createElement(h.t, {
						priority: h.c.Plain,
						className: y.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", y.a),
				T = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return i.a.createElement("div", {
						className: y.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				N = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === x.s ? s = n.s.u : n.e === x.r ? s = n.s.gif : n.e === x.t && (s = (e => {
						const t = O.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? i.a.createElement(k, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				L = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: r,
						mediaMetadata: s,
						renderMediaAsLinks: a,
						postId: c,
						altText: l,
						mediaProps: h
					} = e;
					const f = x.F(s, t.id);
					if (a) return [N(t, n, f)];
					const v = [];
					return !f || f.e === x.s && null === f.s.x && null === f.s.y ? v.push(((e, t, n, r) => i.a.createElement(M, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(t.e, n, null == h ? void 0 : h.renderSmallMedia, null == h ? void 0 : h.onReload)) : f.e === x.s ? v.push(((e, t, n, r, s) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: h
						} = s || {};
						let p = d;
						return m && (p = Object(w.i)(240, 20, d, c)), i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n,
								[y.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, i.a.createElement(S, {
							altText: r,
							originalSource: d.u,
							postId: a,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m,
							onClick: h
						})))
					})(f, n, !!t.c, l, h)) : f.e === x.r ? v.push(((e, t, n, r, s) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						if (Object(b.h)(a)) {
							const e = r.renderingObjectInfo,
								l = !!e && Object(p.b)(e),
								u = d || Object(b.g)(a);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[y.a.MediaWrapper]: !l,
									[y.a.CommentGifWrapper]: l,
									[y.a.mHasCaption]: n
								})
							}, i.a.createElement(k, {
								href: u,
								key: t,
								target: "_blank"
							}, c.mp4 ? i.a.createElement("video", {
								className: y.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0,
								onClick: null == s ? void 0 : s.onClick
							}, i.a.createElement("source", {
								src: c.mp4
							})) : u), i.a.createElement(g, {
								className: y.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n,
								[y.a.hasSmallMedia]: null == s ? void 0 : s.renderSmallMedia
							})
						}, i.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, i.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: a,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !(null == s ? void 0 : s.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == s ? void 0 : s.renderSmallMedia,
							onClick: null == s ? void 0 : s.onClick
						})))
					})(f, n, !!t.c, r, h)) : f.e === x.t && v.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n
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
							hlsSource: s,
							mpegDashSource: a,
							postId: r,
							isGif: m
						})))
					})(f, n, !!t.c, c)), t.c && v.push(((e, t) => i.a.createElement(C, {
						key: t
					}, e))(t.c, `caption${n}`)), v
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "e", (function() {
				return U
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(p.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(f);
			const g = 1e3,
				v = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.jb(t)
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
					t.e === m.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === m.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const i = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return s ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${i}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var E = Object(l.c)(y),
				w = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				C = n("./src/reddit/helpers/isPost.ts"),
				I = n("./src/reddit/helpers/richTextJson/index.ts"),
				M = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						i = [],
						o = r.length;
					for (let a = 0; a < o; a++) {
						const e = r[a];
						i.push(e.e === m.x ? e.t : U(e, t, a))
					}
					const c = d.x[s - 1];
					return a.a.createElement(c, {
						key: n
					}, i)
				},
				N = e => a.a.createElement(d.e, {
					key: e
				}),
				L = (e, t, n, r, s) => {
					const i = e.c;
					if (!i) return;
					const o = i.length,
						c = [];
					for (let a = 0; a < o; a++) c.push(B(i[a], t, n, a, s));
					return a.a.createElement(d.c, {
						key: r
					}, c)
				},
				R = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				P = (e, t, n, r, s) => {
					const i = e.c,
						o = [],
						c = i.length;
					for (let u = 0; u < c; u++) {
						const e = i[u].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, r) => B(e, t, n, r, s))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: r
					}, o)
				},
				B = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return L(e, t, n, r, s);
						case m.c:
							return R(e, r);
						case m.k:
							return T(e, n, r);
						case m.l:
							return N(r);
						case m.p:
							return P(e, t, n, r, s);
						case m.v:
							return H(e, t, n, r, s);
						case m.A:
							return F(e, t, n, r, s)
					}
				},
				F = (e, t, n, r, s) => {
					const i = e.c,
						o = e.h,
						c = i.length,
						l = o.length,
						u = [],
						m = [],
						h = [];
					for (let d = 0; d < l; d++) {
						const e = o[d],
							{
								H: r,
								D: i
							} = W(e.a),
							{
								c = []
							} = e;
						u.push(a.a.createElement(r, {
							key: d
						}, D(c, t, n, s))), h[d] = i
					}
					for (let p = 0; p < c; p++) {
						const e = i[p],
							r = e.length,
							o = [];
						for (let i = 0; i < r; i++) {
							const r = h[i],
								{
									c: d = []
								} = e[i];
							o.push(a.a.createElement(r, {
								key: i
							}, D(d, t, n, s)))
						}
						m.push(a.a.createElement(d.t, {
							key: p
						}, o))
					}
					return a.a.createElement(d.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, u)), a.a.createElement("tbody", null, m))
				},
				H = (e, t, n, r, s, i) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(I.h)(o.id) ? a.a.createElement(d.j, {
						key: r
					}, D(e.c, t, n, s)) : Object(w.b)({
						node: o,
						key: r,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: i
					})
				},
				D = (e, t, n, r) => {
					const s = [],
						i = e.length;
					for (let o = 0; o < i; o++) {
						const i = e[o];
						if (i.e === m.B) s.push(A(i, o));
						else if (i.e === m.y) s.push(a.a.createElement(j.a, {
							key: o,
							onClickReveal: r
						}, D(i.c, t, n, r)));
						else if (i.e === m.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.F(t, i.id);
								e && s.push(a.a.createElement(E, {
									key: o,
									node: i,
									media: e
								}))
							}
						} else s.push(U(i, n, o))
					}
					return s
				},
				U = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const r = A({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, i;
							const o = Object(M.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(C.b)(c) && (s = c.postId), c && Object(S.b)(c) && (i = c.id, s = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: i
							}, r);
						case m.z:
							return a.a.createElement(O.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: s
					} = e, i = [];
					if (!n) return V(0, s, t);
					const o = Object(r.a)(s);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, r] = n[a], c = t + r, l = o[t], u = o[c] - l;
						l > d && i.push(V(0, s.substr(d, l - d), `between${a}`)), i.push(V(e, s.substr(l, u), a)), d = l + u
					}
					return d < s.length && i.push(V(0, s.substr(d), `remaining${a}`)), i
				},
				G = {
					[m.j.monospace]: d.h,
					[m.j.bold]: d.b,
					[m.j.italic]: d.f,
					[m.j.underline]: d.u,
					[m.j.strikethrough]: d.d,
					[m.j.subscript]: d.l,
					[m.j.superscript]: d.m
				},
				V = (e, t, n) => {
					let r = t;
					return r = i()(G, (t, r, s) => e & parseInt(s, 10) ? a.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				W = e => {
					switch (e) {
						case m.f:
							return {
								H: d.r, D: d.q
							};
						case m.d:
							return {
								H: d.r, D: d.o
							};
						case m.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
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
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => s.a.createElement(a.b, e), "S", c.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
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
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends s.a.PureComponent {
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
			const v = Object(p.c)(g),
				_ = Object(o.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				y = Object(i.b)(_),
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return s.a.createElement(v, {
						subredditName: r,
						rtJsonElementProps: o
					});
					switch (i) {
						case b.Wf.SmIcon:
							return s.a.createElement(h, {
								subredditName: r,
								rtJsonElementProps: o
							});
						case b.Wf.SmIconHc:
							return s.a.createElement(h, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(v, {
								subredditName: r,
								rtJsonElementProps: o
							})
					}
				};
			t.b = y(E)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, o = i;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
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
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(s);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(r.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(i.b)(t))) return Object(s.b)(t) ? o.SourceElement.Comment : Object(r.x)(n) ? o.SourceElement.PostDetail : Object(r.H)(n) ? o.SourceElement.ListingPostDetail : void 0
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
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return E
			}));
			var r, s, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: i.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				h = e => ({
					...u.o(e),
					source: s,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const s = Object(a.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${r}/`,
							sourceElement: Object(d.a)(t),
							subredditName: r,
							[s]: n.id
						},
						c = Object(l.C)(e, {
							subredditName: r
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
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {};
					const r = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.kb(e, r),
						...p(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...b(t, e)
				}),
				x = e => t => ({
					...h(t),
					source: "global",
					action: i.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				v = (e, t) => n => ({
					...h(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const i = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				o = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				a = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				d = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				c = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				l = () => e => ({
					source: s.f.SubredditIdBanner,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				u = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				m = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
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
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				i = {},
				o = (e, t) => {
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				a = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				d = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
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
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => s.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.Qf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === r.Wf.SmIcon || t === r.Wf.SmIconHc
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
					const r = Object(o.cb)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"2717435b2dc0"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.65e0f42d094ff07e6e73.js.map