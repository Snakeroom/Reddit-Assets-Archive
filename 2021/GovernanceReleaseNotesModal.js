// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.9391b4a8fe82c97532ff.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
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
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						f = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !h && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !_ && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : p ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (r.msedge = e, r.version = g) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : E ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var w = "";
					r.windows ? w = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (r.osversion = w);
					var j = !r.windows && w.split(".")[0];
					return _ || d || "ipad" == o || i && (3 == j || j >= 4 && !y) || r.silk ? r.tablet = e : (y || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function o(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, r) {
					var i = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
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
					r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, r.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, r.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, r.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, r.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, r.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, r.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, r.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var o = r.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, n),
								u = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, o, i, d, l, u, m, h, p = a(n), b = c(n), f = !1; !f;) {
								var x = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (f = !0, x = s) : b != t.body && b != t.documentElement && "visible" != g.overflow && (x = a(b)), x && (r = x, o = p, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, h = void 0, i = Math.max(r.top, o.top), d = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), h = d - i, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: i,
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
					}, r.prototype._getRootRect = function() {
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
					}, r.prototype._expandRectByRootMargin = function(e) {
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
					}, r.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== s)
							for (var r = 0; r < this.thresholds.length; r++) {
								var o = this.thresholds[r];
								if (o == n || o == s || o < n != o < s) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = s
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
						r = s.width * s.height;
					this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var n, s, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, s) {
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
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), n, c, r)
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				var r = n ? n.call(s, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (r = n ? n.call(s, l, u, c) : void 0) || void 0 === r && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const r = new Map,
				o = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!o.get(t)) {
						o.set(t, n);
						const s = r.get(t);
						if (s) {
							s(e, n && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						r.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						r.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(o.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(a.f)()), t && t()
				}
			}))((function(e) {
				return r.a.createElement(d.a, {
					className: Object(i.a)(l.a.closeIcon, e.className),
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				a = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(a);

			function c(e) {
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, r.a.createElement("div", {
					className: d.a.title
				}, e.children), r.a.createElement(i.a, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
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
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), r = new Date(e.date), f()(v(n), v(r)));
				var n, r;
				return o.a.createElement("div", {
					className: Object(p.a)(g.a.date, e.className)
				}, t ? s.fbt._("today", null, {
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

			function I(e) {
				return o.a.createElement("div", {
					className: e.className
				}, o.a.createElement("div", {
					className: j.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? o.a.createElement("div", {
					className: j.a.text
				}, o.a.createElement(E.a, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: O
				})) : o.a.createElement("div", {
					className: j.a.media
				}, o.a.createElement(y.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var T = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				S = n.n(k);

			function N(e) {
				return o.a.createElement("div", {
					className: Object(p.a)(S.a.container, e.className)
				}, !e.isFirst && o.a.createElement(T.n, {
					className: S.a.prev,
					onClick: e.onPrevSlide
				}, o.a.createElement(C.a, {
					className: S.a.arrow
				})), o.a.createElement(T.k, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? s.fbt._("done", null, {
					hk: "2XjG3a"
				}) : s.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var M = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				L = n.n(M);

			function R(e) {
				return o.a.createElement("div", {
					className: Object(p.a)(L.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => o.a.createElement("div", {
					className: Object(p.a)(L.a.dot, {
						[L.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var B = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				P = n.n(B);
			class D extends o.a.Component {
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
					return o.a.createElement("div", null, o.a.createElement(c.a, {
						className: P.a.title
					}, s.fbt._("What's New in {subredditName}?", [s.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), o.a.createElement(I, {
						releaseNote: e
					}), o.a.createElement("div", {
						className: P.a.controls
					}, o.a.createElement(_, {
						className: P.a.controlBox,
						date: e.created
					}), o.a.createElement(R, {
						className: P.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), o.a.createElement(N, {
						className: P.a.controlBox,
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
				F = Object(i.b)(H, e => ({
					onClose: () => e(Object(d.f)())
				})),
				A = Object(u.u)();
			t.default = Object(a.a)(A(F(D)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
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
				i = Object(r.a)("spBurnLinks", Object(s.a)({
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const d = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = ({
					isNSFW: e,
					isSpoiler: t
				}) => o.a.createElement("div", {
					className: a.a.unblurButtonContainer
				}, o.a.createElement("button", {
					className: a.a.unblurButton
				}, d(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.X
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
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/constants/tracking.ts"),
				O = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = n.n(O);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * v.e,
				k = e => {
					const t = Object(c.a)(I.a.image, b.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && C(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(v.K)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.K)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(I.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(i.b)(() => Object(d.a)(y.G, w.db, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(y.b)(e, n) : null, _.a, E.actionInfo, y.H, (e, t, n, s, r, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					sendGoodVisitEvent: s,
					pageType: r.pageType,
					post: o
				})));
			t.a = N(e => {
				const t = e.sendGoodVisitEvent ? Object(g.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, L(e)) : L(e)
			});
			const M = (e, t) => o.a.createElement(k, {
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
					width: t.width
				}),
				L = ({
					onClick: e,
					...t
				}) => {
					const n = Object(v.K)(t.height, t.width),
						r = C(t.height) && n;
					return o.a.createElement(S, T({}, t, {
						className: `${n?`${j.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, M(n, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: I.a.imageLink
					}, M(n, t), t.shouldBlur && !t.isVideoThumbnail && o.a.createElement(h.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > v.j && Object(v.K)(t.height, t.width) && o.a.createElement("div", {
						className: I.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: e
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
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
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				g = n("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function _({
				autoplay: e,
				isListing: t,
				isNotCardView: n,
				onBufferingChange: s,
				shouldLoad: r,
				shouldPause: a,
				showCentered: d,
				showFull: c,
				source: l,
				...u
			}) {
				const m = Object(o.useRef)(),
					h = Object(o.useRef)(),
					p = Object(g.a)(a);

				function _(e) {
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
					if (_(!a && (e || n)), h.current && s) return m.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + f ? i = !0 : i && d >= a && d > a + f && (i = !1), a = d, r !== i && t(i)
						}, b);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(h.current, s), () => {
						m.current && m.current()
					}
				}, []), Object(o.useEffect)(() => {
					p !== a && _(!a && (e || n))
				}, [p, a, e, n]), i.a.createElement("video", v({}, u, {
					ref: e => h.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(x.a)(l || "")
				}))
			}
			var y = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(y);
			const w = Object(d.c)({
				autoplayPref: h.b,
				consumed: p.a,
				loadTimes: p.f,
				metadata: p.h,
				started: p.k
			});

			function j(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: o,
					started: d
				} = Object(a.e)(t => w(t, e)), {
					postId: h,
					shouldLoad: p,
					source: b,
					height: f,
					isNotCardView: x,
					showFull: g,
					shouldPause: v,
					width: y,
					isListing: j,
					className: O,
					showCentered: I,
					originalSource: T
				} = e, C = Object(a.d)();

				function k(e) {
					C(e ? Object(l.r)(h) : Object(l.E)(h))
				}

				function S() {
					return C(Object(l.z)({
						postId: h
					}))
				}
				const N = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && C(Object(l.s)(h))
				}, 200);

				function M(e) {
					e.persist(), N(e)
				}

				function L(e) {
					var t;
					(o || B(e), d) || (t = e.timeStamp, C(Object(l.A)(h, t)))
				}

				function R(e) {
					C(Object(l.q)(h, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						C(Object(l.D)({
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

				function P(e) {
					s || L(e), o || B(e), C(Object(l.C)(h))
				}

				function D() {
					const e = {};
					return I && (e.margin = "0 auto"), j || (e.maxHeight = `${m.e}px`), i.a.createElement(_, {
						autoplay: t,
						className: Object(c.a)(u.a, E.a.styledVideo),
						height: f,
						isListing: j,
						isNotCardView: x,
						key: h,
						loop: !0,
						onBufferingChange: k,
						onLoadStart: R,
						onLoadedData: L,
						onLoadedMetadata: B,
						onPause: S,
						onPlaying: P,
						onTimeUpdate: M,
						shouldLoad: p,
						shouldPause: v,
						showCentered: I,
						showFull: g,
						source: b,
						style: e,
						width: y
					})
				}
				return j ? D() : i.a.createElement("div", {
					className: Object(c.a)(E.a.container, O, {
						[E.a.centered]: I
					})
				}, i.a.createElement("a", {
					href: T,
					target: "_blank",
					rel: "noopener noreferrer"
				}, D()))
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
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				h = n.n(m);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => o.a.createElement(g, h({}, n, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				_ = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class y extends o.a.Component {
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
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
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
				return I
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "w", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
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
				E = e => r.a.createElement("del", e),
				w = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				O = d.a.table("Table", a.a),
				I = d.a.tr("Tr", a.a),
				T = d.a.td("Tdl", a.a),
				C = d.a.td("Tdc", a.a),
				k = d.a.td("Tdr", a.a),
				S = d.a.th("Thl", a.a),
				N = d.a.th("Thc", a.a),
				M = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				L = d.a.wrapped(c.a, "A", a.a)
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
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				y = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => i.a.createElement(_, v({}, n, {
					style: {
						color: Object(h.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				E = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				w = e => r()(e, E),
				j = e => e.findIndex(E),
				O = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: h,
						rtJsonElementProps: x,
						useExplicitTextColor: v,
						shouldBlur: E
					} = e, O = s.document, I = [], T = e.mediaMetadata || null, C = j(O), k = w(O);
					if (E && !r) return i.a.createElement(_, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: c
					}, Object(l.b)(!!o, !!d))));
					if (-1 !== C)
						for (let i = C; i <= k; i++) {
							const e = O[i];
							switch (e.e) {
								case p.k:
									I.push(f.c(e, x, i));
									break;
								case p.l:
									I.push(f.d(i));
									break;
								case p.b:
									I.push(f.a(e, T, x, i));
									break;
								case p.c:
									I.push(f.b(e, i));
									break;
								case p.p:
									I.push(f.f(e, T, x, i));
									break;
								case p.z:
									I.push(f.h(e, T, x, i));
									break;
								case p.u:
									I.push(f.g(e, T, x, i));
									break;
								case p.h:
									I.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									I.push(...Object(b.b)(e, i, T, h, m, t))
							}
						}
					return v ? i.a.createElement(_, {
						className: Object(a.a)(u.j, n)
					}, I) : i.a.createElement(y, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, I)
				};
			class I extends i.a.Component {
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
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
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
				return I
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				y = g.a.wrapped(b.a, "A", x.a),
				E = g.a.wrapped(l.a, "ImageBox", x.a),
				w = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				j = g.a.div("Placeholder", x.a),
				O = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === p.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(j, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", x.a),
				I = ({
					c: e,
					x: t,
					y: n
				}, s) => o.a.createElement("div", {
					className: x.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				T = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === p.s ? r = n.s.u : n.e === p.r ? r = n.s.gif : n.e === p.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(y, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				C = (e, t, n, s, r, a) => {
					const c = p.E(n, e.id);
					if (s) return [T(e, t, c)];
					const l = [];
					return c ? c.e === p.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(E, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, a)) : c.e === p.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(h.g)(e)) {
							const a = t || Object(h.f)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: r
								})
							}, o.a.createElement(y, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, o.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === p.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, a, c, l) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(O, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(w, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return M
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const v = 1e3,
				_ = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === h.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === h.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
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
			var w = Object(u.c)(E),
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				O = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				I = n("./src/reddit/components/SubredditMention/index.tsx"),
				T = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const M = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === h.w ? e.t : U(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, o)
				},
				L = e => a.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(D(r[a], t, n, a));
					return a.a.createElement(d.c, {
						key: s
					}, i)
				},
				B = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				P = (e, t, n, s) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => D(e, t, n, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, o)
				},
				D = (e, t, n, s) => {
					switch (e.e) {
						case h.b:
							return R(e, t, n, s);
						case h.c:
							return B(e, s);
						case h.k:
							return M(e, n, s);
						case h.l:
							return L(s);
						case h.p:
							return P(e, t, n, s);
						case h.u:
							return F(e, t, n, s);
						case h.z:
							return H(e, t, n, s)
					}
				},
				H = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						c = o.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = o[d],
							{
								H: s,
								D: r
							} = J(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, A(i, t, n))), m[d] = r
					}
					for (let h = 0; h < i; h++) {
						const e = r[h],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, A(i, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: h
						}, o))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				F = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== h.m && r.e !== h.a || !Object(S.g)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, A(e.c, t, n)) : Object(j.b)(r, s, t)
				},
				A = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === h.A) s.push(V(r, o));
						else if (r.e === h.x) s.push(a.a.createElement(O.a, {
							key: o
						}, A(r.c, t, n)));
						else if (r.e === h.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === h.m || r.e === h.a) {
							if (r.id.startsWith("emote|")) {
								const e = h.E(t, r.id);
								e && s.push(a.a.createElement(w, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(U(r, n, o))
					}
					return s
				},
				U = (e, t, n) => {
					switch (e.e) {
						case h.o:
							const s = V({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(T.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, o;
							const i = Object(N.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(k.b)(c) && (r = c.postId), c && Object(C.b)(c) && (o = c.id, r = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, s);
						case h.y:
							return a.a.createElement(I.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				V = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return W(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = i[t], u = i[c] - l;
						l > d && o.push(W(0, r.substr(d, l - d), `between${a}`)), o.push(W(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && o.push(W(0, r.substr(d), `remaining${a}`)), o
				},
				G = {
					[h.j.monospace]: d.h,
					[h.j.bold]: d.b,
					[h.j.italic]: d.f,
					[h.j.underline]: d.u,
					[h.j.strikethrough]: d.d,
					[h.j.subscript]: d.l,
					[h.j.superscript]: d.m
				},
				W = (e, t, n) => {
					let s = t;
					return s = o()(G, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				J = e => {
					switch (e) {
						case h.f:
							return {
								H: d.r, D: d.q
							};
						case h.d:
							return {
								H: d.r, D: d.o
							};
						case h.e:
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = o.a.wrapped(i.b, "SubredditIcon", c.a),
				u = o.a.wrapped(e => r.a.createElement(a.b, e), "S", c.a)
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
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
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
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(p.c)(g),
				_ = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				y = Object(o.b)(_),
				E = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(v, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (s) {
						case b.Ce.SmIcon:
							return r.a.createElement(h, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case b.Ce.SmIconHc:
							return r.a.createElement(h, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(v, {
								subredditName: n,
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
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
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const i = ({
					isLoading: e
				}) => Object(s.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(o.b)(e))) return Object(r.b)(e) ? i.SourceElement.Comment : Object(s.x)(t) ? i.SourceElement.PostDetail : Object(s.G)(t) ? i.SourceElement.ListingPostDetail : void 0
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
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[r]: n.id
						},
						c = Object(l.w)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...o,
							url: c.url,
							subredditId: c.id
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
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
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
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				v = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
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
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				o = {},
				i = (e, t) => {
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
					} : o
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				u = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(s.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
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
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.we
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Ce.SmIcon || t === s.Ce.SmIconHc
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
					const n = Object(i.U)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.9391b4a8fe82c97532ff.js.map