// https://www.redditstatic.com/desktop2x/ModQueuePages.3cb6f4203599a18afbcc.js
// Retrieved at 3/24/2022, 7:40:05 PM by Reddit Dataminer v1.0.0
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
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						f = !o && !l && /macintosh/i.test(t),
						x = !a && !m && !u && !p && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !O && /[^-]mobi/i.test(t),
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
					} : b ? (r = {
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
					} : m ? r = {
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
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
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
					} : a ? r = {
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
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : E ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var k = "";
					r.windows ? k = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (r.osversion = k);
					var C = !r.windows && k.split(".")[0];
					return O || d || "ipad" == o || a && (3 == C || C >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == o || "ipod" == o || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function a(e, s, r) {
					var a = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([i, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = o, n.check = function(e, t, n) {
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
								a = i(o),
								d = this._rootContainsTarget(o),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, n),
								m = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: a,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, o, a, d, l, m, u, p, b = i(n), h = c(n), f = !1; !f;) {
								var x = null,
									g = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == g.display) return;
								if (h == this.root || h == t ? (f = !0, x = s) : h != t.body && h != t.documentElement && "visible" != g.overflow && (x = i(h)), x && (r = x, o = b, a = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, a = Math.max(r.top, o.top), d = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), m = Math.min(r.right, o.right), p = d - a, !(b = (u = m - l) >= 0 && p >= 0 && {
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
					}, r.prototype._getRootRect = function() {
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
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIndexOf.js"),
				r = n("./node_modules/lodash/isArrayLike.js"),
				o = n("./node_modules/lodash/isString.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				i = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = r(e) ? e : i(e), n = n && !c ? a(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), o(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && s(e, t, n) > -1
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = i(e) ? s : a,
					c = arguments.length < 3;
				return d(e, o(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var n = i,
					c = d(e, i);
				t = r(t), e -= i;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				var r = n ? n.call(s, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					a = Object.keys(t);
				if (o.length !== a.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!i(c)) return !1;
					var l = e[c],
						m = t[c];
					if (!1 === (r = n ? n.call(s, l, m, c) : void 0) || void 0 === r && l !== m) return !1
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
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const d = (e, t, n) => (s = (() => {})) => r => {
				const o = u(r.target, r.currentTarget),
					i = p(r.target, r.currentTarget);
				o && n && t && (m(r.target, r.currentTarget, l.anchors) ? n(t(e, o, i)) : n(n => {
					const s = t(e, o, i)(n);
					let r;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						r = t
					}
					return {
						...s,
						actionInfo: Object(a.Q)(n, r)
					}
				})), m(r.target, r.currentTarget, l.anchorsAndButtons) && s(r)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: o,
						clickTrackingId: a,
						...c
					} = t, l = Object(s.useCallback)(d(a, o, n), [a, o, n]);
					return r.a.createElement(e, i({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(o.c)(t)
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
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(s.a)(r.c),
				a = Object(s.a)(r.b),
				i = Object(s.a)(r.a)
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
				return y
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "b", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
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
				f = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const O = Object(o.a)(v.n),
				_ = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, {
					apiContext: r
				}) => {
					if (!Object(x.P)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.isLocked ? m.l : m.e;
					t(Object(g.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(g.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, k = Object(o.a)(v.G), C = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = o.features.comments.models[e],
						i = o.user.account ? o.user.account.displayText : null;
					a && i && (t(Object(g.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(g.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(d.d)())
				}, y = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r(),
						i = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					i && l && (n(Object(g.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(o(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(g.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, j = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.ignoreReports ? m.k : m.d;
					t(Object(g.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(g.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, I = (e, t, n) => async (o, a, {
					gqlContext: i
				}) => {
					const d = Object(h.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = n === r.dc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) o(Object(g.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(c.f)(e))
					}
				}, S = (e, t, n) => async (s, o, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = o(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						b = r.g[t];
					let h;
					if (s(Object(g.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === r.G.ADMIN,
								isMod: t === r.G.MODERATOR,
								isStickied: !!n
							}
						})), n && p && p !== e && s(Object(g.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(f.a)(o())) {
						const s = Object(m.b)(d(), e, t),
							r = Object(m.c)(d(), e, !!n),
							o = [s];
						(n || !n && e === p) && o.push(r), h = {
							ok: (await Promise.all(o)).every(e => e.ok)
						}
					} else h = await Object(m.g)(i(), e, b, n || null);
					h.ok ? n && s(k({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: r.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (s(Object(g.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), s(Object(g.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return U
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "c", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/modQueueTriggers/index.ts"),
				d = n("./src/reddit/actions/removalReasons/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/modQueue/index.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				p = n("./src/reddit/helpers/isPost.ts"),
				b = n("./src/reddit/models/ModQueue/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/chooseVariant/index.ts");
			var g = n("./src/reddit/selectors/modQueue.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/telemetry/index.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				k = n("./src/reddit/reducers/pages/modHub/index.ts"),
				C = n("./src/reddit/actions/modQueue/constants.ts");
			Object(E.a)({
				pages: {
					modHub: k.a
				}
			});
			const y = Object(o.a)(C.j),
				j = Object(o.a)(C.i),
				I = Object(o.a)(C.h),
				S = Object(o.a)(C.g),
				T = Object(o.a)(C.f),
				w = Object(o.a)(C.e),
				N = Object(o.a)(C.n),
				M = Object(o.a)(C.m),
				R = Object(o.a)(C.l),
				L = Object(o.a)(C.q),
				P = Object(o.a)(C.p),
				A = Object(o.a)(C.o),
				B = Object(o.a)(C.w),
				F = Object(o.a)(C.v),
				D = Object(o.a)(C.u),
				U = (e, t, o) => async (a, d, {
					apiContext: m,
					gqlContext: u
				}) => {
					var p;
					let g, v, O;
					switch (t) {
						case r.rb.Edited:
							g = S, v = w, O = T;
							break;
						case r.rb.Modqueue:
							g = y, v = I, O = j;
							break;
						case r.rb.Reports:
							g = N, v = R, O = M;
							break;
						case r.rb.Spam:
							g = L, v = A, O = P;
							break;
						case r.rb.Unmoderated:
							g = B, v = D, O = F;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(g());
					const _ = await Object(l.c)(m(), t, o);
					if (_.ok) {
						if (function(e) {
								return Object(x.c)(e, {
									experimentEligibilitySelector: x.a,
									experimentName: f.ud
								}) === f.hd
							}(d())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: s
							} = await n.e(11).then(n.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: r
							} = await n.e(8).then(n.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), a = _.body, i = {
								...o
							};
							if (i.subreddit) {
								const e = null === (p = Object.values(a.subreddits).find(({
									name: e
								}) => e === o.subreddit)) || void 0 === p ? void 0 : p.id;
								i.subreddit = e
							}
							const c = s({
									getState: d,
									queueType: t,
									options: i
								}),
								m = await Object(l.b)(u(), c);
							if (!m.ok) return;
							const b = e(m.body.data),
								h = {
									posts: a.posts,
									comments: a.comments,
									modqueue: a.modqueue,
									reports: a.reports,
									authorFlair: a.authorFlair
								},
								f = {
									..._.body,
									...b
								};
							_.body = f, r({
								normalizedGqlResponse: b,
								gatewayResponse: h,
								rawGqlResponse: m.body.data
							})
						}
						const s = _.body;
						a(O({
							listingKey: e,
							page: `${o.page||b.b}`,
							response: s
						})), a(Object(i.a)({
							postIds: s.posts ? Object.keys(s.posts) : void 0,
							commentIds: s.comments ? Object.keys(s.comments) : void 0
						}))
					} else a(v(_.error)), a(Object(c.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, W = Object(o.a)(C.k), H = Object(o.a)(C.b), V = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = o.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						i = o.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						d = o.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = o.platform.currentPage.urlParams,
						u = m;
					if (e && i || d || !a) return;
					const p = await Object(l.c)(r(), u, {
						moderated_after: a
					});
					if (p.ok) {
						const e = p.body;
						t(W(e)), e.moderatedAfter ? t(V()) : t(H())
					} else t(Object(c.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, Q = Object(o.a)(C.t), q = Object(o.a)(C.s), G = Object(o.a)(C.r), J = (e, t, n) => async (r, o, {
					apiContext: i
				}) => {
					r(Object(a.c)());
					const f = o(),
						x = Object(g.f)(f),
						E = f.user.account && f.user.account.displayText;
					Object(m.e)(m.a.ModQueue);
					const k = Object(m.c)(m.a.ModQueue);
					Object(_.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...O.o(f),
						actionInfo: O.d(f, {
							count: x.length,
							paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: O.ab(f),
						correlationId: k
					});
					for (let t = 0; t < x.length; t++) {
						const n = x[t];
						let s = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(p.a)(n) ? s += "_link" : s += "_comment"), Object(_.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...O.o(f),
							actionInfo: O.d(f, {
								count: x.length,
								paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: O.i(f, n),
							post: O.I(f, n),
							profile: O.T(f, n),
							screen: O.ab(f),
							subreddit: O.lb(f, n),
							correlationId: k
						})
					}
					Object(m.b)(m.a.ModQueue);
					const C = {
						ids: x
					};
					t && (C.text = Object(u.g)(t) || "", C.flairTemplateId = ""), n && (C.cssClass = n, C.flairTemplateId = n);
					const y = await Object(l.a)(i(), e, C);
					if (y.ok) {
						r(Object(a.b)({
							...y.body,
							operation: e,
							ids: x,
							username: E,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case b.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case b.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case b.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case b.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case b.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case b.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case b.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case b.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case b.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case b.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case b.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case b.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case b.a.Unspoiler:
								case b.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, x.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, o;
							const i = f.platform.currentPage && f.platform.currentPage.queryParams && f.platform.currentPage.queryParams.subreddit,
								m = i && Object(v.D)(f, i);
							e === b.a.Remove && m && x.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(d.fetchReasonsAndOpenModal)(m, x));
							const u = Object(c.e)(n, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: n
							}) => {
								e(Q());
								const r = t(),
									o = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									i = r.pages.modHub.modQueue.bulkAction.undoLastAction[o],
									d = r.user.account && r.user.account.displayText;
								e(Object(a.c)());
								const m = await Object(l.a)(n(), o, {
									ids: i
								});
								m.ok ? e(q({
									...m.body,
									operation: o,
									ids: i,
									username: d
								})) : (e(G(m.error)), e(Object(c.f)({
									kind: h.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							r(Object(c.f)(u))
						} else {
							const e = Object(c.e)(n, h.b.SuccessMod);
							r(Object(c.f)(e))
						}
					} else {
						r(Object(a.a)(y.error));
						const e = Object(c.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						r(Object(c.f)(e))
					}
				}, X = Object(o.a)(C.a), K = Object(o.a)(C.c), z = Object(o.a)(C.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Y
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), n.d(t, "removalReasonsFailed", (function() {
				return $
			})), n.d(t, "removalReasonsRequested", (function() {
				return ee
			})), n.d(t, "removalReasonAddedPending", (function() {
				return te
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return oe
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), n.d(t, "deleteRemovalReason", (function() {
				return ue
			})), n.d(t, "removedItemsSelected", (function() {
				return pe
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return be
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), n.d(t, "submitRemovalReason", (function() {
				return Ee
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				b = "REMOVALREASONS__DELETE_FAILED";
			var h = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case a:
					case i:
					case c:
					case l:
					case u:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case b:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case l:
						case m:
						case p:
						case b:
							return !1;
						default:
							return e
					}
				},
				x = Object(o.c)({
					error: h,
					pending: f
				});
			const g = {};
			var v = (e = g, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
					case i:
					case l: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case p: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const O = {};
			var _ = (e = O, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: r
						} = s;
						return {
							...e,
							[n]: r
						}
					}
					case i: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case p: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, r = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var E = (e = null, t) => {
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
				k = Object(o.c)({
					api: x,
					models: v,
					reasonOrder: _,
					removedItemIds: E
				}),
				C = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				j = n("./src/lib/makeCommentsPageKey/index.ts"),
				I = n("./src/lib/makeDraftKey/index.ts"),
				S = n("./src/reddit/actions/bulkActions/index.ts"),
				T = n("./src/reddit/actions/comment/index.ts"),
				w = n("./src/reddit/actions/comment/authoring.ts"),
				N = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				A = n("./src/lib/makeApiRequest/index.ts"),
				B = n("./src/lib/omitHeaders/index.ts"),
				F = n("./src/reddit/constants/headers.ts"),
				D = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(A.a)(Object(B.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: C.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, n) => Object(A.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(D.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: C.jb.POST,
					type: "json",
					data: t
				});
			var H = n("./src/reddit/helpers/isPost.ts"),
				V = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				Q = n("./src/reddit/helpers/routeKey/index.ts"),
				q = n("./src/reddit/models/ModQueue/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RemovalReason/index.ts"),
				X = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: k
				}
			});
			const Y = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(y.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().subreddits.models[e].name;
					t(Y());
					const o = await ((e, t) => Object(A.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.jb.GET
					}))(s(), r);
					o.ok ? t(Z({
						subredditId: e,
						response: o.body
					})) : t($(o.error))
				}, te = Object(y.a)(a), ne = Object(y.a)(i), se = Object(y.a)(d), re = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r().subreddits.models[e].name;
					n(te());
					const i = await ((e, t, n) => Object(A.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.jb.POST,
						data: n
					}))(o(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, o = {
							...t,
							id: r
						};
						n(ne({
							subredditId: e,
							reason: o
						})), n(Object(L.f)({
							kind: X.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(i.error))
				}, oe = Object(y.a)(c), ae = Object(y.a)(l), ie = Object(y.a)(m), de = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r().subreddits.models[e].name;
					n(oe());
					const i = await ((e, t, n) => Object(A.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: C.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(o(), a, t);
					i.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(L.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ie(i.error))
				}, ce = Object(y.a)(u), le = Object(y.a)(p), me = Object(y.a)(b), ue = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r().subreddits.models[e].name;
					n(ce());
					const i = await ((e, t, n) => Object(A.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: C.jb.DELETE
					}))(o(), a, t);
					i.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(L.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), be = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(pe({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(P.a.ADD_REMOVAL_REASON))
				}, he = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Ee = (e, t, n, s, r) => async (o, a, {
					apiContext: i
				}) => {
					const d = a(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? J.e.Post : J.e.Comment,
						u = m === J.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === J.e.Post ? R.S : T.i;
					if (!u || !c) return !1;
					o(he()), o(p({
						[l]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const b = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						h = await U(i(), b);
					if (h.ok) {
						if (o(fe()), t) {
							o(ge());
							const r = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								a = await W(i(), Object(J.h)(r, m), m);
							if (a.ok) {
								if (s === J.f.Public) {
									if (o(Oe()), a.body) {
										const e = Object(V.a)(a.body, c),
											t = {
												comment: e,
												parentId: l
											},
											n = Object(z.f)(d),
											s = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let r = n && s && Object(Q.a)(s, d, d.posts.models[e.postId]);
										if (r || (r = Object(j.a)(e.postId, null, {
												sort: C.v,
												hasSortParam: !0
											})), m === J.e.Post) {
											const n = Object(I.a)(G.c.replyToPost, l);
											o(Object(w.p)({
												...t,
												headCommentId: Object(K.w)(d, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: n
											}));
											const s = d.postStickiedComments.data[l];
											o(Object(N.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && o(Object(T.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === J.e.Comment) {
											const e = Object(I.a)(G.c.replyToComment, u.id),
												n = Object(K.j)(d, {
													commentId: l,
													commentsPageKey: r
												});
											o(Object(w.n)({
												...t,
												parentCommentId: l,
												commentsPageKey: r,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else o(ve());
								return !0
							}
							return o(_e(a.error)), !1
						}
					} else o(xe(h.error)), o(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, n, r, o) => async (a, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					a(he());
					const m = Object(L.f)({
							kind: X.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						p = await U(d(), u);
					if (p.ok) {
						const s = {
							ids: e,
							operation: q.a.RemovalReason,
							username: l,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (a(Object(S.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: r
								},
								o = await W(d(), Object(J.h)(s, J.e.Bulk), J.e.Bulk);
							o.ok ? (a(ve()), a(m)) : a(_e(o.error))
						} else a(m)
					} else a(xe(p.error))
				}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = n.n(o);
			const i = s.a.wrapped(r.c, "RestrictedButton", a.a);
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				y = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = n.n(I);
			const T = Object(h.u)(),
				w = e => `Distinguish--Dropdown--${e}`,
				N = Object(i.c)({
					currentUser: O.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(x.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(v.b)(w(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(g.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.T
				}),
				M = Object(a.b)(N, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: w(t.id)
					}))
				}));
			t.a = T(M(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: r,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: x,
				onSpamComment: g,
				onToggleDistinguishDropdown: v,
				sendEvent: O,
				...I
			}) => {
				const T = Object(p.b)(t),
					w = t.isApproved && T,
					N = !t.isRemoved || t.bannedBy === c.l,
					M = a,
					R = e => O(Object(f.a)(e, t.id));
				return o.a.createElement("div", {
					className: e
				}, (t.bannedBy || T) && o.a.createElement(j.a, {
					text: w ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), R("approve")
					}
				}, o.a.createElement(_.a, {
					className: S.a.icon
				})), N && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
					text: t.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === c.l ? R("confirm_remove") : R("remove")
					}
				}, o.a.createElement(k.a, {
					className: S.a.icon
				})), o.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), R("spam")
					}
				}, o.a.createElement(C.a, {
					className: S.a.icon
				}))), o.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), R(t.isLocked ? "unlock" : "lock")
					}
				}, o.a.createElement(E.a, {
					className: S.a.icon
				})), M && o.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, o.a.createElement(y.a, {
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					comment: r,
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					onClick: u,
					style: b
				} = e;
				return n && i ? o.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : o.a.createElement(m.a, {
					author: r.author,
					className: Object(d.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: u,
					style: b
				}, r.author)
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
				y = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				I = n("./src/lib/constants/index.ts"),
				S = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(w);
			const M = ({
				authorClassName: e,
				className: t,
				comment: n,
				collapsed: s,
				isLivestreaming: r,
				isStrong: a,
				onClick: i,
				renderedInOverlay: c
			}) => {
				const l = Object(y.f)(n),
					m = o.a.createElement(S.b, {
						ignore: l || !!n.distinguishType && n.distinguishType !== I.G.NONE,
						subredditId: n.subredditId,
						userId: n.authorId
					}, o.a.createElement(b, {
						className: e,
						collapsed: s,
						comment: n,
						isAuthorDeleted: Object(y.f)(n),
						isCommentAuthorBlocked: Object(y.g)(n),
						isLivestreaming: r,
						isStrong: a,
						onClick: i
					}));
				return l ? m : o.a.createElement(T.b, {
					className: Object(d.a)(N.a.authorHoverCard, t),
					collapsed: s,
					isCommentAuthorBlocked: Object(y.g)(n),
					postOrComment: n,
					tooltipType: c ? O.c.Lightbox : void 0
				}, m)
			};
			var R = n("./src/config.ts"),
				L = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(B);
			const D = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const r = Object(a.d)(),
					i = () => r(Object(L.h)({
						tooltipId: c
					})),
					c = A("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, e),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), o.a.createElement(P.c, {
					tooltipId: c,
					text: l
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				V = n("./src/reddit/components/HumanDate/index.tsx"),
				Q = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: r,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(a.d)(), m = A("CommentTopMeta--Created--", n.id, d), u = () => l(Object(L.h)({
						tooltipId: m
					}));
					return o.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == r || r(e), G(l, n.id), c && (e.preventDefault(), l(Object(H.Z)(Object(Q.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, o.a.createElement(V.d, {
						seconds: n.created,
						shortenedUnit: s
					}), o.a.createElement(P.c, {
						tooltipId: m
					}, o.a.createElement(V.b, {
						seconds: n.created
					})))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function n() {
						J(e, t, n)
					}))
				},
				J = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				K = n.n(X);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => o.a.createElement(_.a, {
				className: K.a.crowdControlText
			}, z._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				compact: e,
				editedAt: t
			}) => o.a.createElement(_.a, {
				className: $.a.editedText
			}, ee._("edited {time}", [ee._param("time", o.a.createElement(V.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				re = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: r
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(L.f)({
						tooltipId: e
					})),
					c = () => i(Object(L.i)()),
					l = t => A(t, e.id, r),
					m = l("CommentTopMeta--Approve--"),
					u = l("CommentTopMeta--Remove--"),
					p = l("CommentTopMeta--Report--"),
					b = l("CommentTopMeta--Spam--"),
					h = d(u);
				return o.a.createElement(o.a.Fragment, null, (e.approvedBy || e.isApproved) && o.a.createElement(o.a.Fragment, null, o.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: c,
					isFilled: !0
				}), o.a.createElement(P.c, {
					tooltipId: m,
					text: Object(se.a)(e)
				})), Object(ne.a)(e) && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(e),
					id: u,
					onMouseEnter: h,
					onMouseLeave: c,
					isFilled: !0
				}), o.a.createElement(P.c, {
					tooltipId: u,
					text: Object(se.b)(e)
				})), Object(ne.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && o.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && o.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && o.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), o.a.createElement(P.c, {
					tooltipId: b,
					text: Object(se.d)(e)
				})), Object(re.a)(e) && o.a.createElement(o.a.Fragment, null, o.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(e.numReports),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: c,
					isFilled: !0
				}), o.a.createElement(P.c, {
					tooltipId: p,
					text: Object(se.c)(e.numReports)
				})))
			};
			var pe, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				fe = n.n(he);
			const xe = {
					[pe.Admin]: {
						color: be.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: be.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: be.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: be.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: be.a,
						getLabel: () => s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ge = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === I.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: r,
						getLabel: i,
						tooltipTemplate: c
					} = xe[n], l = i(), m = A(s, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(L.h)({
						tooltipId: m
					}));
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: Object(d.a)(fe.a.role, e.className),
						style: {
							color: r
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, o.a.createElement("span", null, l), n === pe.Mod && o.a.createElement(ve, null)), o.a.createElement(P.c, {
						tooltipId: m,
						text: u
					}))
				},
				ve = () => o.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: fe.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = n.n(Oe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => o.a.createElement(_.a, {
				className: _e.a.stickiedText
			}, Ee._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(Ce);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: r,
					comment: i,
					flair: c,
					ignoreLock: m,
					isInModNotesExperiment: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: I,
					permalink: S,
					renderContractorBadge: T,
					renderedInOverlay: w,
					subredditDisplayText: N
				} = e, R = Object(C.a)(), L = i.subredditId, P = Object(a.e)(e => Object(j.h)(e, {
					subredditId: L
				}));
				if (i.isDeleted) return o.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, o.a.createElement("span", {
					className: ye.a.authorLine
				}, o.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), o.a.createElement(_.c, {
					className: ye.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: S,
					renderedInOverlay: w
				})));
				return o.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, o.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(y.f)(i) && o.a.createElement(f.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), o.a.createElement("div", {
					className: ye.a.baselineItem
				}, o.a.createElement(M, {
					authorClassName: ye.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: w
				})), !Object(y.f)(i) && u && o.a.createElement(v.a, {
					postOrComment: i,
					className: ye.a.LastAuthorModNoteIcon
				}), r && o.a.createElement(Y, null), o.a.createElement(ge, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: w
				}), i.isAuthorCakeday ? o.a.createElement(D, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: w
				}) : !Object(y.f)(i) && P && o.a.createElement(h.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), o.a.createElement(g.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), o.a.createElement(_.c, {
					className: ye.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					onClick: I,
					permalink: S,
					renderedInOverlay: w
				}), i.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: ye.a.separator
				}), o.a.createElement(ke, null)), i.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: ye.a.separator
				}), o.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), o.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: w
				}), o.a.createElement(l.a, {
					thing: i,
					tooltipType: w ? O.c.Lightbox : void 0
				})), c && !Object(E.o)(c) && o.a.createElement("span", {
					className: ye.a.userFlairLine
				}, o.a.createElement(x.b, {
					className: ye.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Se = n("./src/reddit/selectors/economics.ts"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				we = n("./src/reddit/selectors/comments.ts"),
				Ne = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				Me = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/selectors/userFlair.ts"),
				Pe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ae = n.n(Pe);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Ae.a),
				De = c.a.span("DeletedText", Ae.a),
				Ue = c.a.wrapped(_.a, "MetaSeparator", Ae.a),
				We = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Se.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Re.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Le.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(we.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Me.b,
					isInModNotesExperiment: (e, {
						comment: t
					}) => Object(Ne.a)(e, t.subredditId)
				}));
			t.a = We(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: r,
					comment: a,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					ignoreFlairPosition: h,
					ignoreLock: v,
					isBlockingInterstitialEnabled: E,
					isInModNotesExperiment: k,
					isLivestreaming: C,
					isPostComment: j,
					onCommentAuthorClick: I,
					onCommentTimestampClick: S,
					renderContractorBadge: T,
					renderedInOverlay: w,
					subredditDisplayText: N,
					userHasNft: R
				} = e, L = o.a.createElement(o.a.Fragment, null, o.a.createElement(Ie.b, {
					commentId: a.id
				}), o.a.createElement(Ie.a, {
					commentId: a.id,
					commentsPageKey: c
				}));
				if (j) return o.a.createElement(o.a.Fragment, null, o.a.createElement(je, {
					className: Object(d.a)(n, {
						[Ae.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: r,
					comment: a,
					flair: u || null,
					ignoreLock: v,
					isInModNotesExperiment: k,
					isLivestreaming: C,
					onCommentAuthorClick: I,
					onCommentTimestampClick: S,
					permalink: i,
					renderContractorBadge: !!T,
					renderedInOverlay: w,
					subredditDisplayText: N
				}), L);
				if (a.isDeleted) return o.a.createElement(He, Be({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				if (s) return o.a.createElement(Ve, Be({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				const P = !h && p === Te.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s,
						[Ae.a.hasBadges]: b,
						[Ae.a.liveStreaming]: C
					}),
					"data-testid": "comment-top-meta"
				}, u && P && o.a.createElement(x.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(y.f)(a) && o.a.createElement(f.b, {
					className: Ae.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, o.a.createElement(M, {
					authorClassName: R ? Ae.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: C,
					isStrong: !!m,
					onClick: I,
					renderedInOverlay: w
				}), r && o.a.createElement(Y, null), r && o.a.createElement(_.c, {
					className: Ae.a.metaText,
					key: "crowdControlSeparator"
				}), u && !P && o.a.createElement(Fe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && o.a.createElement(g.a, {
					className: Ae.a.publicPoints,
					contentId: a.id,
					metaSeparator: o.a.createElement(_.c, {
						className: Ae.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), L, o.a.createElement(ge, {
					className: Ae.a.authorRole,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: !!T,
					renderedInOverlay: w
				}), !m && o.a.createElement(o.a.Fragment, null, !a.isDeleted && !j && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.b, {
					className: Ae.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), o.a.createElement(_.c, {
					className: Ae.a.metaText,
					key: "scoreCreatedSeparator"
				})), o.a.createElement(q, {
					key: "Created",
					className: Ae.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: w,
					isBlockingInterstitialEnabled: E
				}), a.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: Ae.a.separator
				}), o.a.createElement(ke, null)), a.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: Ae.a.separator
				}), o.a.createElement(te, {
					editedAt: a.editedAt
				}))), o.a.createElement(ue, {
					comment: a,
					ignoreLock: v,
					renderedInOverlay: w
				}), o.a.createElement(l.a, {
					thing: a,
					tooltipType: w ? O.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: r,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(De, null, a.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), o.a.createElement(q, {
						key: "Created",
						className: Ae.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					}), n && Qe({
						childrenInfo: t
					}))
				},
				Ve = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: r,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: a
					})), o.a.createElement(_.b, {
						className: Ae.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), o.a.createElement(_.c, {
						className: Ae.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(q, {
						key: "Created",
						className: Ae.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: r,
						isBlockingInterstitialEnabled: d
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
					return o.a.createElement(Ue, {
						className: Ae.a.metaText
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
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
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
				return P
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				y = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				j = n.n(y),
				I = n("./src/lib/lessComponent.tsx");
			const S = I.a.div("VoteSpacer", j.a),
				T = I.a.div("ContentWrapper", j.a),
				w = I.a.div("CommentContentWrapper", j.a),
				N = I.a.div("CommentBody", j.a),
				M = I.a.div("ParentPostTitle", j.a),
				R = I.a.div("CommentParentWrapper", j.a),
				L = Object(a.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: E.m,
					flair: E.e,
					subreddit: C.H
				}),
				P = Object(o.b)(L, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [r, o] = s === _.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(o)(), e(r)
					}
				})),
				A = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = P(I.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: o,
					hasReports: a,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: _,
					subreddit: E,
					showBulkActionCheckbox: k,
					toggleCheckbox: C
				} = e, y = Object(f.d)(n);
				return r.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, r.a.createElement(g.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: k,
					isCheckboxSelected: i,
					toggleCheckbox: C
				}), r.a.createElement(S, null, r.a.createElement(T, null, r.a.createElement(R, null, n.postTitle && r.a.createElement(M, null, n.postTitle), n.postAuthor && r.a.createElement(b.a, {
					comment: n
				})), r.a.createElement(w, null, r.a.createElement(u.a, {
					comment: n
				}, r.a.createElement(N, null, r.a.createElement(v.a, {
					content: Object(O.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: A(e)
				})), r.a.createElement(p.a, {
					comment: n,
					flair: o,
					subredditName: E ? E.displayText : null
				}), y && r.a.createElement(h.a, {
					thing: n
				}), a && r.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && r.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", j.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, o = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(a.a)(t, {
						context: 3
					})) : n(Object(a.a)(t, {
						context: 3
					})))(s);
					return r.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
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
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(a);
			const d = o.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? r.a.createElement(d, null, e.children) : r.a.createElement(d, null, r.a.createElement(d, null, e.children))
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			t.a = e => o.a.createElement(m, {
				className: e.className
			}, e.subredditName && o.a.createElement(p, null, e.subredditName && o.a.createElement(b, null, e.subredditName)), o.a.createElement(u, null, o.a.createElement(b, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(h, {
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
				r = n.n(s),
				o = n("./src/reddit/components/AuthorLink/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(o.a, "AuthorLink", l.a), h = u.a.wrapped(d.a, "Inline", l.a), f = u.a.wrapped(d.a, "SubredditWrapper", l.a), x = u.a.div("TextContainer", l.a), g = u.a.wrapped(i.b, "SubredditIcon", l.a);
			t.a = e => r.a.createElement(h, null, e.subredditOrProfile && r.a.createElement(f, null, e.subredditOrProfile && r.a.createElement(g, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && r.a.createElement(x, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && r.a.createElement(a.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, r.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.E
			}, `u/${e.comment.postAuthor}`)))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => o.a.createElement(i.e, null, o.a.createElement(i.i, null, o.a.createElement(c.a, null, o.a.createElement(i.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.l, null, o.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(i.g, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
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
				a = Object(r.a)("spBurnLinks", Object(s.a)({
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
				a = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(a);
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
					className: i.a.unblurButtonContainer
				}, o.a.createElement("button", {
					className: i.a.unblurButton
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
				f = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: u.cb
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
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
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
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				y = n.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * v.e,
				S = e => {
					const t = Object(c.a)(y.a.image, h.g, e.className, {
							[y.a.mShowCentered]: e.showCentered,
							[y.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && I(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				T = e => {
					const t = {};
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(y.a.container, e.className),
						style: t
					}, e.children)
				},
				w = Object(a.b)(() => Object(d.a)(O.F, E.ib, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(O.b)(e, n) : null, _.d, O.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = w(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, M(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, M(e)) : M(e)
			});
			const N = (e, t) => o.a.createElement(S, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[k.a]: !e
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
				M = ({
					onClick: e,
					...t
				}) => {
					const n = Object(v.L)(t.height, t.width),
						r = I(t.height) && n;
					return o.a.createElement(T, j({}, t, {
						className: `${n?`${k.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, N(n, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: y.a.imageLink
					}, N(n, t), t.shouldBlur && !t.isVideoThumbnail && o.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > v.j && Object(v.L)(t.height, t.width) && o.a.createElement("div", {
						className: y.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(b.a, {
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
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(i.B)(e.height, e.width, e.forceAspectRatio);
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
			class m extends r.a.Component {
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
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
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

			function O({
				autoplay: e,
				isListing: t,
				isNotCardView: n,
				onBufferingChange: s,
				shouldLoad: r,
				shouldPause: i,
				showCentered: d,
				showFull: c,
				source: l,
				...m
			}) {
				const u = Object(o.useRef)(),
					p = Object(o.useRef)(),
					b = Object(g.a)(i);

				function O(e) {
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
					if (O(!i && (e || n)), p.current && s) return u.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(i = d);
							if (e.paused || e.seeking || !n) return void(i = d);
							const r = a;
							4 === e.readyState ? a = !1 : !a && d >= i && d < i + f ? a = !0 : a && d >= i && d > i + f && (a = !1), i = d, r !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(p.current, s), () => {
						u.current && u.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== i && O(!i && (e || n))
				}, [b, i, e, n]), a.a.createElement("video", v({}, m, {
					ref: e => p.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(x.a)(l || "")
				}))
			}
			var _ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(_);
			const k = Object(d.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: o,
					started: d
				} = Object(i.e)(t => k(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: x,
					showFull: g,
					shouldPause: v,
					width: _,
					isListing: C,
					className: y,
					showCentered: j,
					originalSource: I
				} = e, S = Object(i.d)();

				function T(e) {
					S(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function w() {
					return S(Object(l.z)({
						postId: p
					}))
				}
				const N = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && S(Object(l.s)(p))
				}, 200);

				function M(e) {
					e.persist(), N(e)
				}

				function R(e) {
					var t;
					(o || P(e), d) || (t = e.timeStamp, S(Object(l.A)(p, t)))
				}

				function L(e) {
					S(Object(l.q)(p, e.timeStamp))
				}

				function P(e) {
					! function(e) {
						S(Object(l.D)({
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
					s || R(e), o || P(e), S(Object(l.C)(p))
				}

				function B() {
					const e = {};
					return j && (e.margin = "0 auto"), C || (e.maxHeight = `${u.e}px`), a.a.createElement(O, {
						autoplay: t,
						className: Object(c.a)(m.a, E.a.styledVideo),
						height: f,
						isListing: C,
						isNotCardView: x,
						key: p,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: L,
						onLoadedData: R,
						onLoadedMetadata: P,
						onPause: w,
						onPlaying: A,
						onTimeUpdate: M,
						shouldLoad: b,
						shouldPause: v,
						showCentered: j,
						showFull: g,
						source: h,
						style: e,
						width: _
					})
				}
				return C ? B() : a.a.createElement("div", {
					className: Object(c.a)(E.a.container, y, {
						[E.a.centered]: j
					})
				}, a.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, B()))
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
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD),
				o = e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL),
				a = e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT),
				i = e => r(e) || o(e) || a(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(d.a.banner, d.a.staticBanner)
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
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(d.a.banner, d.a.staticBanner)
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
				filterMargin: "_2bX-c80byEShP8Q3c-pyFF",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, n) {
			"use strict";
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/actions/modQueue/index.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/LayoutSwitch/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				g = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/lib/addQueryParams/index.ts"),
				E = n("./src/lib/filterQueryParams/index.ts"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				I = n.n(j);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(s || (s = {}));
			const S = u.a.wrapped(k.b, "Row", I.a),
				T = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: y.j
				});
			var w = Object(i.b)(T)(e => a.a.createElement("div", null, a.a.createElement(C.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(S, {
					displayText: r.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(C.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(_.a)(Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Posts
					})
				}, a.a.createElement(S, {
					displayText: r.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === s.Posts
				})), a.a.createElement(C.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(_.a)(Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Comments
					})
				}, a.a.createElement(S, {
					displayText: r.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === s.Comments
				})))),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				M = n("./src/reddit/controls/SearchBar/index.tsx"),
				R = n("./src/reddit/selectors/moderatorPermissions.ts"),
				L = n("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				P = n.n(L);
			const A = Object(N.u)({
					currentPageUrl: N.f
				}),
				B = Object(d.c)({
					moderatingSubreddits: R.n,
					origin: y.j
				}),
				F = Object(i.b)(B),
				D = u.a.div("DropdownContainer", P.a),
				U = u.a.div("SearchBarContainer", P.a),
				W = u.a.wrapped(k.b, "Row", P.a),
				H = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class V extends a.a.Component {
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
					return a.a.createElement(D, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(U, null, a.a.createElement(M.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: r.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(C.a, {
						to: Object(E.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(W, {
						displayText: r.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const n = H(t);
						return a.a.createElement(C.a, {
							key: t.id,
							to: Object(_.a)(Object(E.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), n)
						}, a.a.createElement(W, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var Q = A(F(V)),
				q = n("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				G = n.n(q);
			const J = Object(m.a)(b.a),
				X = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				K = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				z = u.a.wrapped(x.a, "Inline", G.a),
				Y = u.a.div("Filter", G.a),
				Z = u.a.wrapped(h.a, "LayoutSwitch", G.a),
				$ = e => {
					switch (e) {
						case "allPostTypes":
							return r.fbt._("Posts and Comments", null, {
								hk: "2oWJdB"
							});
						case "allSubreddits":
							return r.fbt._("All subreddits", null, {
								hk: "OqzeW"
							});
						case "comments":
							return r.fbt._("Comments", null, {
								hk: "1a9mt8"
							});
						case "links":
							return r.fbt._("Posts", null, {
								hk: "fijEw"
							});
						case "searchPlaceholder":
							return r.fbt._("Find subreddit", null, {
								hk: "3yJKEz"
							})
					}
				},
				ee = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(O.b)(K),
					isSubredditFilterDropdownOpen: Object(O.b)(X),
					profile: (e, {
						profileName: t
					}) => t ? Object(g.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(v.x)(e, {
						subredditName: t
					}) : null
				}),
				te = Object(i.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(p.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					}))
				}));
			class ne extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(X), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(K), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || r.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), n = e.postTypeFilter && $(e.postTypeFilter) || r.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					});
					return a.a.createElement(z, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(Y, {
						id: X,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(J, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: X
					}, a.a.createElement(Q, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && a.a.createElement("div", {
						className: Object(c.a)({
							[G.a.filterMargin]: !e.hideSubredditFilter
						})
					}, a.a.createElement(Y, {
						id: K,
						onClick: this.onOpenPostTypeFilterDropdown
					}, n, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(J, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: K
					}, a.a.createElement(w, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(Z, null))
				}
			}
			t.a = te(ne)
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
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, n) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
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
				r = n.n(s),
				o = n("./node_modules/lodash/includes.js"),
				a = n.n(o),
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
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = n("./src/lib/logs/console.ts"),
				w = n("./src/lib/objectSelector/index.ts"),
				N = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				R = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				P = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				A = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
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
				K = u.a.div("CommentColumn", G.a),
				z = u.a.div("VoteColumn", G.a),
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
						flair: r,
						isCheckboxSelected: o = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: u
					} = e, p = Object(F.d)(n), b = Object(h.c)(n);
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
						isCheckboxSelected: o,
						toggleCheckbox: u
					})), d.a.createElement(z, null, d.a.createElement(Z, {
						compact: !1,
						model: n,
						onVoteClick: i,
						scoreClassName: G.a.score
					})), d.a.createElement(K, null, d.a.createElement(te, null, n.postTitle && d.a.createElement(ee, null, n.postTitle), n.postAuthor && d.a.createElement(A.a, {
						comment: n
					})), d.a.createElement($, null, d.a.createElement(L.a, {
						comment: n
					}, d.a.createElement(U.a, {
						content: Object(V.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ne(e)
					}), d.a.createElement(P.a, {
						comment: n,
						flair: r,
						subredditName: l ? l.displayText : null
					}), p && d.a.createElement(B.a, {
						thing: n
					}), b && d.a.createElement(D.a, {
						onIgnoreReports: a,
						reportable: n
					}), c && !n.isDeleted && d.a.createElement(Y, {
						comment: n
					})))))
				}),
				re = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				oe = n("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = n.n(oe);
			const ie = u.a.div("VoteSpacer", ae.a),
				de = u.a.div("ContentWrapper", ae.a),
				ce = u.a.wrapped(P.a, "Meta", ae.a),
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
						flair: r,
						hasReports: o,
						isCheckboxSelected: a = !1,
						onIgnoreReports: i,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: u,
						toggleCheckbox: p
					} = e, b = Object(F.d)(n);
					return d.a.createElement(R.a, {
						className: t,
						clickTrackingId: n.id,
						permalink: s
					}, d.a.createElement(re.a, {
						model: n,
						handleVote: c,
						showBulkActionCheckbox: u,
						isCheckboxSelected: a,
						toggleCheckbox: p
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(le, null, n.postAuthor && d.a.createElement(A.a, {
						comment: n,
						subredditOrProfile: m
					}), n.postTitle && d.a.createElement(M.a, null, n.postTitle)), d.a.createElement(L.a, {
						comment: n
					}, d.a.createElement(me, null, d.a.createElement(U.a, {
						content: Object(V.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ue(e)
					})), b && d.a.createElement(B.a, {
						thing: n
					}), o && d.a.createElement(D.a, {
						onIgnoreReports: i,
						reportable: n
					}), d.a.createElement(ce, {
						comment: n,
						flair: r
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
				ye = n.n(Ce);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, Se = u.a.div("Container", ye.a), Te = u.a.div("Image", ye.a), we = u.a.div("Title", ye.a), Ne = u.a.div("Text", ye.a);
			var Me = () => d.a.createElement(Se, null, d.a.createElement(Te, {
					style: {
						backgroundImage: `url(${Ie})`
					}
				}), d.a.createElement(we, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Ne, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Re = n("./src/reddit/components/PostList/Placeholder.tsx");
			const Le = Object(y.u)(),
				Pe = Object(l.c)({
					layout: y.R
				});
			var Ae = Le(Object(c.b)(Pe)(e => d.a.createElement(Re.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Be = n("./node_modules/lodash/flatten.js"),
				Fe = n.n(Be),
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
				Ke = n("./src/reddit/controls/Dropdown/index.tsx"),
				ze = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ye = n("./src/reddit/helpers/flair.ts"),
				Ze = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/selectors/moderatorPermissions.ts"),
				et = n("./src/reddit/selectors/postFlair.ts"),
				tt = n("./src/reddit/selectors/posts.ts"),
				nt = n("./src/reddit/selectors/tooltip.ts"),
				st = n("./src/reddit/components/TrackingHelper/index.tsx"),
				rt = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				ot = n.n(rt);
			const at = e => d.a.createElement("button", {
					className: Object(x.a)(ot.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(l.c)({
					selectedItems: _e.f
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
				ct = e => e.some(e => Object(j.a)(e));
			var lt = Object(qe.a)(dt(Object(st.c)(e => d.a.createElement("div", {
				className: Object(x.a)(ot.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: ot.a.StatusContainer
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
				isDropdownOpen: (e, {
					tooltipId: t
				}) => Object(nt.b)(t)(e)
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
				xt = Object(qe.a)(Ke.a),
				gt = e => d.a.createElement(ze.b, {
					className: Object(x.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				vt = Object(l.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(nt.b)(ht),
					flairData: et.d,
					isApiPending: _e.a,
					moderatorPermissions: $e.m,
					posts: tt.J,
					selectedItems: _e.f
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
					const n = Fe()(e.map(e => t[e].flair));
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
						flairData: r,
						isAnyItemSelected: o,
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
					} = e, y = [{
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
					}], j = c && c.flair, I = E && r && r.displaySettings.isEnabled && j && !ct(O);
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
					}, y.map(e => d.a.createElement(gt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => C(e.filterType)
					})))), o && d.a.createElement(i.Fragment, null, d.a.createElement(Xe.c, {
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
					})), d.a.createElement("div", null, I && d.a.createElement(Xe.c, {
						disabled: a,
						onClick: g,
						className: bt.a.Button
					}, d.a.createElement(Qe.a, null)))), o && E && t === ft && d.a.createElement(Je.a, {
						flairs: _t(O, v),
						modalId: ft,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							p(e, t)
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
				yt = n.n(Ct);
			const jt = e => Object(I.a)(e.id),
				It = u.a.div("ItemContainer", yt.a),
				St = u.a.div("ButtonContainer", yt.a),
				Tt = Object(y.u)({
					currentProfileName: y.i,
					isCommentPermalink: y.w,
					isCommentsPage: y.x,
					isFrontpage: y.A,
					isProfilePostListing: y.L,
					isTopicPage: y.Q,
					queryParams: y.W,
					pageLayer: e => e
				}),
				wt = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: _e.b,
					loadMore: _e.d,
					modQueueListingItems: _e.c,
					origin: Oe.j,
					selectedItems: _e.f,
					subredditId: (e, t) => t.subredditName ? Object(Ee.D)(e, t.subredditName) : null
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
				Lt = e => Math.max(ve.b, Mt(e) - 1),
				Pt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Mt(e) === ve.b ? t : 25 * Lt(e) + t
				},
				At = e => Mt(e) === ve.b ? ve.b : 25 * Lt(e) + 1;
			var Bt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Bt || (Bt = {}));
			class Ft extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = r()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Bt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Bt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(I.a)(e.id)) {
										const n = e;
										n.flair && n.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(n.id)
									}
								});
								break;
							case Bt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(I.a)(e.id)) {
										const n = e;
										n.media && n.media.type === ge.o.TEXT && t.push(n.id)
									}
								});
								break;
							case Bt.spamFiltered:
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
							if (jt(t)) {
								const s = t,
									r = Object(S.b)({
										layout: e.layout,
										post: s
									});
								return d.a.createElement(It, {
									key: n
								}, d.a.createElement(r, {
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
							return d.a.createElement(It, {
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
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(St, null, d.a.createElement(E, {
							prevButtonEnabled: n,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Lt(e),
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
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], n = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(Et, {
						endNumItems: Pt(e),
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
			t.a = Tt(Nt(Ft))
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
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
			const C = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				y = Object(d.c)({
					flairData: v.d,
					subreddit: O.S
				});
			class j extends a.a.Component {
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
						subreddit: o
					} = e, i = o.displayText, {
						templates: d,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(p.a, {
						className: n
					}, a.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select {subredditName} flair", [r.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: r.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: o.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: k.a.buttonsRow
					}, a.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(i.b)(y, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(c.c)(I))
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && r.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), r.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: _,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(o.a)(u.a.score, {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(i);
			const c = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(c, "ApproveButton", d.a),
				m = a.a.wrapped(c, "RemoveButton", d.a),
				u = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.removalReasonButton, e.className),
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				v = u.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => o.a.createElement(g, p({}, n, {
					className: Object(a.a)(e, {
						[m.a.isOpen]: t
					})
				})), "SpoilerWrapper", m.a),
				O = Object(c.a)(u.a.wrapped(d.b, "Component", m.a), [i.a.Click, i.a.Keydown]);
			class _ extends o.a.Component {
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
					}), o.a.createElement(O, {
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
				return y
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "o", (function() {
				return S
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
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
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
				E = e => r.a.createElement("del", e),
				k = d.a.sub("Sub", i.a),
				C = d.a.sup("Sup", i.a),
				y = d.a.table("Table", i.a),
				j = d.a.tr("Tr", i.a),
				I = d.a.td("Tdl", i.a),
				S = d.a.td("Tdc", i.a),
				T = d.a.td("Tdr", i.a),
				w = d.a.th("Thl", i.a),
				N = d.a.th("Thc", i.a),
				M = (d.a.th("Thr", i.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				R = d.a.wrapped(c.a, "A", i.a)
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
				return k
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
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
			const O = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				_ = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => a.a.createElement(O, v({}, n, {
					style: {
						color: Object(p.a)(Object(u.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				E = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				k = e => r()(e, E),
				C = e => e.findIndex(E),
				y = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: u,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: v,
						shouldBlur: E
					} = e, y = s.document, j = [], I = e.mediaMetadata || null, S = C(y), T = k(y);
					if (E && !r) return a.a.createElement(O, {
						className: Object(i.a)(m.j, n)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: c
					}, Object(l.b)(!!o, !!d))));
					if (-1 !== S)
						for (let a = S; a <= T; a++) {
							const e = y[a];
							switch (e.e) {
								case b.k:
									j.push(f.c(e, x, a));
									break;
								case b.l:
									j.push(f.d(a));
									break;
								case b.b:
									j.push(f.a(e, I, x, a));
									break;
								case b.c:
									j.push(f.b(e, a));
									break;
								case b.p:
									j.push(f.f(e, I, x, a));
									break;
								case b.z:
									j.push(f.h(e, I, x, a));
									break;
								case b.u:
									j.push(f.g(e, I, x, a));
									break;
								case b.h:
									j.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									j.push(...Object(h.b)(e, a, I, p, u, t))
							}
						}
					return v ? a.a.createElement(O, {
						className: Object(i.a)(m.j, n)
					}, j) : a.a.createElement(_, {
						className: Object(i.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, j)
				};
			class j extends a.a.Component {
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
						return y(t)
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
				return j
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				m = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
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
			const O = /\/(\w+)\/asset\/(\w+)\//,
				_ = g.a.wrapped(h.a, "A", x.a),
				E = g.a.wrapped(l.a, "ImageBox", x.a),
				k = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				C = g.a.div("Placeholder", x.a),
				y = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(C, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", x.a),
				j = ({
					c: e,
					x: t,
					y: n
				}, s) => o.a.createElement("div", {
					className: x.a.MediaWrapper
				}, o.a.createElement(m.a, {
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
				I = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = O.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(_, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				S = (e, t, n, s, r, i) => {
					const c = b.E(n, e.id);
					if (s) return [I(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => o.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, o.a.createElement(m.a, {
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
					}))))(c, t, !!e.c, i)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.g)(e)) {
							const i = t || Object(p.f)(e);
							return o.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: r
								})
							}, o.a.createElement(_, {
								href: i,
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
								originalSource: i
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, o.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, o.a.createElement(u.a, {
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
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, i, c, l) => o.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, o.a.createElement(m.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: i,
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
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(y, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(k, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
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
							const n = b.o(t);
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
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var k = Object(m.c)(E),
				C = n("./src/reddit/components/RichTextJson/media.tsx"),
				y = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				j = n("./src/reddit/components/SubredditMention/index.tsx"),
				I = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const M = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						a = s.length;
					for (let i = 0; i < a; i++) {
						const e = s[i];
						o.push(e.e === p.w ? e.t : W(e, t, i))
					}
					const c = d.x[r - 1];
					return i.a.createElement(c, {
						key: n
					}, o)
				},
				R = e => i.a.createElement(d.e, {
					key: e
				}),
				L = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(B(r[i], t, n, i));
					return i.a.createElement(d.c, {
						key: s
					}, a)
				},
				P = (e, t) => {
					const n = e.c;
					return i.a.createElement(d.k, {
						key: t
					}, i.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				A = (e, t, n, s) => {
					const r = e.c,
						o = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && o.push(i.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => B(e, t, n, s))))
					}
					const c = e.o ? d.i : d.v;
					return i.a.createElement(c, {
						key: s
					}, o)
				},
				B = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return L(e, t, n, s);
						case p.c:
							return P(e, s);
						case p.k:
							return M(e, n, s);
						case p.l:
							return R(s);
						case p.p:
							return A(e, t, n, s);
						case p.u:
							return D(e, t, n, s);
						case p.z:
							return F(e, t, n, s)
					}
				},
				F = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						a = r.length,
						c = o.length,
						l = [],
						m = [],
						u = [];
					for (let d = 0; d < c; d++) {
						const e = o[d],
							{
								H: s,
								D: r
							} = q(e.a),
							{
								c: a = []
							} = e;
						l.push(i.a.createElement(s, {
							key: d
						}, U(a, t, n))), u[d] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = u[r],
								{
									c: a = []
								} = e[r];
							o.push(i.a.createElement(s, {
								key: r
							}, U(a, t, n)))
						}
						m.push(i.a.createElement(d.t, {
							key: p
						}, o))
					}
					return i.a.createElement(d.n, {
						key: s
					}, i.a.createElement("thead", null, i.a.createElement(d.t, null, l)), i.a.createElement("tbody", null, m))
				},
				D = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(d.j, {
						key: e
					}, i.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(w.g)(r.id) ? i.a.createElement(d.j, {
						key: s
					}, U(e.c, t, n)) : Object(C.b)(r, s, t)
				},
				U = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(H(r, o));
						else if (r.e === p.x) s.push(i.a.createElement(y.a, {
							key: o
						}, U(r.c, t, n)));
						else if (r.e === p.n) s.push(i.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(i.a.createElement(k, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(W(r, n, o))
					}
					return s
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(I.b)(e.u)) return i.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, o;
							const a = Object(N.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (r = c.postId), c && Object(S.b)(c) && (o = c.id, r = c.postId), i.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, s);
						case p.y:
							return i.a.createElement(j.b, {
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
						t: r
					} = e, o = [];
					if (!n) return Q(0, r, t);
					const a = Object(s.a)(r);
					let i = 0,
						d = 0;
					const c = n.length;
					for (; i < c; i++) {
						const [e, t, s] = n[i], c = t + s, l = a[t], m = a[c] - l;
						l > d && o.push(Q(0, r.substr(d, l - d), `between${i}`)), o.push(Q(e, r.substr(l, m), i)), d = l + m
					}
					return d < r.length && o.push(Q(0, r.substr(d), `remaining${i}`)), o
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
					return s = o()(V, (t, s, r) => e & parseInt(r, 10) ? i.a.createElement(s, {
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
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
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
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = o.a.wrapped(a.b, "SubredditIcon", c.a),
				m = o.a.wrapped(e => r.a.createElement(i.b, e), "S", c.a)
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
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: u.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: u.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
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
					return r.a.createElement(i.a, {
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
				_ = Object(o.b)(O),
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
						case h.hf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case h.hf.SmIconHc:
							return r.a.createElement(p, {
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
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				y = n.n(C);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = Object(m.u)(), S = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(x.cb)(e);
					return s || r
				},
				nigtmode: x.cb,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class T extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
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
						headerButton: o,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? y.a.widgetContentOnly : y.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, y.a.widgetBackground, {
							[y.a.redditStyle]: s,
							[y.a.clickable]: !!d,
							[y.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: x
					}, m && r.a.createElement("div", {
						className: Object(i.a)(y.a.widgetHeader, {
							[y.a.clickable]: !!l
						}),
						id: a,
						style: g,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(y.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[y.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: y.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = I(S(Object(d.a)(Object(l.c)(T))))
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
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
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, f({}, t, {
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
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle,
					[h.a.modNotes]: t.isModNotesStyle
				});
				return a.a.createElement(x, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/reddit/controls/LayoutSwitch/index.m.less"),
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
			const O = e => Object(d.a)(g.a.iconStyles, e.className, {
					[g.a.mRedditStyle]: e.redditStyle
				}),
				_ = ({
					className: e,
					redditStyle: t,
					...n
				}) => o.a.createElement(h.a, v({
					name: "view_compact",
					className: O({
						className: e,
						redditStyle: t
					})
				}, n)),
				E = ({
					className: e,
					redditStyle: t,
					...n
				}) => o.a.createElement(h.a, v({
					name: "view_classic",
					className: O({
						className: e,
						redditStyle: t
					})
				}, n)),
				k = ({
					className: e,
					redditStyle: t,
					...n
				}) => o.a.createElement(h.a, v({
					name: "view_card",
					className: O({
						className: e,
						redditStyle: t
					})
				}, n)),
				C = ({
					isActive: e,
					...t
				}) => o.a.createElement("button", v({
					className: Object(d.a)(g.a.layoutButton, {
						[g.a.mIsActive]: e
					})
				}, t)),
				y = Object(b.u)(),
				j = Object(i.c)({
					postLayout: b.R,
					redditStyle: b.D
				}),
				I = Object(a.b)(j, e => ({
					onListingLayoutChange: (t, n) => e(Object(l.y)(t, n)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = y(I(Object(u.c)(e => {
				const {
					sendEvent: t,
					subredditId: n
				} = e, r = e.layout || p.e[e.postLayout];
				return o.a.createElement("div", {
					className: Object(d.a)(g.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, o.a.createElement("div", {
					className: g.a.title
				}, s.fbt._("View", null, {
					hk: "18a931"
				})), o.a.createElement("div", {
					className: g.a.iconContainer
				}, (() => [{
					layout: p.d.Card,
					Icon: k,
					text: s.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: p.d.Classic,
					Icon: E,
					text: s.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: p.d.Compact,
					Icon: _,
					text: s.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(s => {
					const a = () => (s => {
							e.onChange ? e.onChange(s) : (e.onListingLayoutChange(s, n), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: s,
								screen: Object(f.ab)(e),
								subreddit: Object(f.ib)(e)
							})))
						})(s.layout),
						i = () => e.toggleTooltip(d),
						d = "layoutSwitch--" + s.layout,
						l = s.layout === r;
					return o.a.createElement(C, {
						"aria-label": s.text,
						"aria-pressed": l,
						id: d,
						isActive: l,
						key: s.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, o.a.createElement(s.Icon, {
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: l
					}), o.a.createElement(c.c, {
						tooltipId: d,
						text: s.text
					}))
				})))
			})))
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => o.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...r
				}) => {
					const a = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, r, c)
				},
				p = e => o.a.createElement(l, null, s.fbt._({
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Search/index.tsx"),
				i = n("./src/reddit/controls/SearchBar/index.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(d.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(o.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, r.a.createElement(a.a, null)))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, a = o;
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let s = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
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
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
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
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const a = ({
					isLoading: e
				}) => Object(s.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				i = e => Object(s.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(r.e)(i, {
							commentId: e
						}),
						c = Object(o.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.o(i),
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
					...a.o(e)
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(o.b)(e))) return Object(r.b)(e) ? a.SourceElement.Comment : Object(s.x)(t) ? a.SourceElement.PostDetail : Object(s.H)(t) ? a.SourceElement.ListingPostDetail : void 0
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
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
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
			}(r || (r = {}));
			const u = e => ({
					...m.o(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...m.o(e),
					source: r,
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
					const r = Object(i.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[r]: n.id
						},
						c = Object(l.x)(e, {
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
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: m.I(e, n.id),
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
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: m.kb(t, e),
					screen: m.ab(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: m.I(n, t),
					subreddit: m.kb(n, e),
					screen: m.ab(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: m.I(n, t),
					subreddit: m.kb(n, e),
					screen: m.ab(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
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
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.ib(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const r = e => e.category === s.Supporter,
				o = e => e.category === s.Achievement
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL"
				}(s || (s = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
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
			const r = 50,
				o = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
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
						type: e.type
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
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				y = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				j = n.n(y);
			const I = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var S = Object(i.b)(I)(e => a.a.createElement(C.a, {
				className: Object(O.a)(j.a.navChild, {
					[j.a.mIsActive]: e.isActive
				}),
				to: Object(k.a)(`/r/mod/about/${e.pathName}`, E()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var T = e => a.a.createElement("div", {
					className: j.a.navContainer
				}, a.a.createElement("div", {
					className: Object(O.a)(j.a.innerContainer, {
						[j.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, a.a.createElement("h1", {
					className: j.a.title
				}, v.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), a.a.createElement(S, {
					title: v.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), a.a.createElement(S, {
					title: v.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), a.a.createElement(S, {
					title: v.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), a.a.createElement(S, {
					title: v.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), a.a.createElement(S, {
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
				L = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				P = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				A = n.n(P);
			const B = M.a.a("ExternalLink", A.a),
				F = M.a.wrapped(C.a, "InternalLink", A.a);
			var D = () => a.a.createElement(L.a, {
				title: v.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, a.a.createElement(B, {
				href: N.a.redditModHelpUrl,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), a.a.createElement(B, {
				href: `${N.a.redditUrl}/help/healthycommunities/`,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), a.a.createElement(F, {
				to: "/r/modsupport",
				rel: R.c,
				target: R.d.BLANK
			}, "r/modsupport"), a.a.createElement(B, {
				href: `${N.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: R.c,
				target: R.d.BLANK
			}, v.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var U = e => a.a.createElement("div", {
				className: j.a.sidebar
			}, e.subredditOrProfileUrl && a.a.createElement(w.a, null, a.a.createElement(L.a, {
				title: v.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, a.a.createElement(B, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, v.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), a.a.createElement(B, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, v.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), a.a.createElement(w.a, null, a.a.createElement(D, null)));
			const W = Object(b.u)(),
				H = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => r()([...Object(c.a)(t.search)])
				}),
				V = Object(d.a)(H, b.R, x.n, (e, {
					match: t
				}) => t.params.pageName, ({
					queryParams: e
				}, t, n, s) => {
					const r = e.subreddit,
						o = e.profile,
						a = e.only,
						i = `${e.page||f.b}`;
					return {
						after: e.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: i,
						pageName: s,
						postTypeFilter: a,
						profileName: o,
						subredditName: r
					}
				}),
				Q = Object(i.b)(V);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
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
						page: r,
						pageName: o,
						profileName: i,
						postTypeFilter: d,
						subredditName: c
					} = this.props, u = c && `r/${c}` || i && `user/${i}`, b = "unmoderated" !== o, f = b ? d : void 0;
					return a.a.createElement("div", null, n && a.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: s === p.g.Large,
						navBar: a.a.createElement(T, {
							disableFullscreen: s === p.g.Large,
							pageName: o
						}),
						content: a.a.Children.toArray([a.a.createElement(m.a, {
							key: i,
							postTypeFilter: f,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: b,
							subredditName: c
						}), a.a.createElement(l.a, {
							after: e,
							key: `${i}-${c}`,
							layout: s,
							page: r,
							pageName: o,
							postTypeFilter: f,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							subredditName: c
						})]),
						sidebar: a.a.createElement(U, {
							subredditOrProfileUrl: u
						})
					}))
				}
			}
			t.default = W(Q(Object(u.c)(q)))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts"),
				o = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case r.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(o.a).map(e => e.type),
								d = s.filter(o.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let r = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(o.a),
									s = n.map(({
										type: e
									}) => e),
									i = a.filter(o.b),
									d = i.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(i);
								r = {
									...r,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: r
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: r,
								pendingSupporterType: o
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: r,
								preferredSupporterType: o,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: r
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const r = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: r.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, r;
					return t && n ? null === (r = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === r ? void 0 : r[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, u], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						r = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === r
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([i, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: r
					} = e, {
						supporterTypes: o,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, o, r, c || i),
						achievementFlairs: g(s, a, r, l || d)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				x = Object(s.a)([i, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				v = (e, {
					commentId: t
				}) => {
					const n = Object(r.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						o = null == n ? void 0 : n.authorId;
					return !(!s || !o) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, r, o;
						return t && n ? null === (o = null === (r = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === r ? void 0 : r[n]) || void 0 === o ? void 0 : o[t] : null
					})(e, {
						subredditId: s,
						userId: o
					})
				}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/constants/index.ts");
			var s = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/comments/index.ts"),
				i = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: i.a
				}
			});
			const d = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(r.a)((e, t) => {
					var n, s, r;
					const {
						pageName: o,
						page: a
					} = t, i = d(0, t);
					if (!(null === (r = null === (s = null === (n = e.pages.modHub.modQueue[o]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === r ? void 0 : r[a])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[i][a];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
					var n;
					const {
						pageName: s
					} = t;
					return null === (n = e.pages.modHub.modQueue[s]) || void 0 === n || !n.api || e.pages.modHub.modQueue[s].api.pending
				},
				m = (e, t) => {
					var n;
					const s = d(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[s]
				},
				u = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
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
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.af
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.hf.SmIcon || t === s.hf.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					const n = Object(a.W)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.3cb6f4203599a18afbcc.js.map