// https://www.redditstatic.com/desktop2x/ModQueuePages.507545834b46c6fbb162.js
// Retrieved at 7/14/2022, 5:50:05 PM by Reddit Dataminer v1.0.0
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
			const d = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
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
				}
			});

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
				return j
			})), n.d(t, "g", (function() {
				return y
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
				f = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const O = Object(o.a)(v.p),
				_ = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					n().features.comments.models[e] && (await Object(m.k)(r(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					if (!Object(x.Q)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = n().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? m.m : m.f;
					t(Object(g.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(o(), e)).ok ? t(Object(c.f)({
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
				}, k = Object(o.a)(v.I), C = e => async (t, n, r) => {
					let {
						apiContext: o,
						gqlContext: a
					} = r;
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
					})), (Object(f.a)(i) ? await Object(m.a)(a(), e) : await Object(m.b)(o(), e)).ok ? t(Object(c.f)({
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
				}, j = (e, t) => async (n, r, o) => {
					let {
						apiContext: a,
						gqlContext: i
					} = o;
					const l = r(),
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
					})), (Object(f.a)(l) ? await Object(m.h)(i(), e, t) : await Object(m.i)(a(), e, t)).ok ? n(Object(c.f)({
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
				}, y = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const a = n().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.l : m.e;
					t(Object(g.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(o(), e)).ok ? t(Object(c.f)({
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
				}, I = (e, t, n) => async (o, a, i) => {
					let {
						gqlContext: d
					} = i;
					const l = Object(h.b)(a(), {
						commentId: e
					});
					if (!l) return;
					const m = n === r.ec.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: f
						})).ok) o(Object(g.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(c.f)(e))
					}
				}, S = (e, t, n) => async (s, o, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					const l = o(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					s(Object(g.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.G.ADMIN,
							isMod: t === r.G.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(g.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.c)(c(), e, t),
						f = Object(m.d)(c(), e, !!n),
						x = [h];
					(n || !n && e === b) && x.push(f), (await Promise.all(x)).every(e => e.ok) ? n && s(k({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: r.t.CONFIDENCE,
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
				return Y
			})), n.d(t, "d", (function() {
				return ee
			})), n.d(t, "f", (function() {
				return re
			})), n.d(t, "a", (function() {
				return oe
			})), n.d(t, "b", (function() {
				return ae
			})), n.d(t, "c", (function() {
				return ie
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
				m = n("./src/reddit/endpoints/user/index.ts"),
				u = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				b = n("./node_modules/Base64/base64.js"),
				h = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				f = n("./src/reddit/helpers/isPost.ts"),
				x = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/redditGQL/types.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const k = {
					[r.rb.Edited]: v.t.Edited,
					[r.rb.Modqueue]: v.t.Mod,
					[r.rb.Reports]: v.t.Reported,
					[r.rb.Spam]: v.t.Removed,
					[r.rb.Unmoderated]: v.t.Unmoderated
				},
				C = {
					comments: v.r.Comment,
					links: v.r.Post,
					chat_comments: v.r.ChatComment
				};

			function j(e) {
				let {
					getState: t,
					queueType: n,
					options: s
				} = e;
				const r = t();
				let o;
				s.only && (o = C[s.only]);
				const a = {};
				s.after && (a[s.sort === h.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const n = Object(f.a)(t) ? Object(g.G)(e, {
						postId: t
					}) : Object(x.b)(e, {
						commentId: t
					});
					if (n) return Object(b.btoa)(`${n.id}|${n.created}`)
				}(r, s.after));
				const i = {};
				return s.sort === h.a.OldestFirst ? i.last = 25 : i.first = 25, {
					queueType: k[n],
					...i,
					...!!o && {
						itemTypes: o
					},
					...!!s.subreddit && {
						subredditIds: [s.subreddit]
					},
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === h.a.MostReportedFirst ? v.s.SortReports : v.s.SortDate,
					...a
				}
			}
			var y;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(y || (y = {}));
			var I = n("./src/reddit/models/ModQueue/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/modQueue.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				R = n("./src/telemetry/index.ts"),
				M = n("./src/lib/initializeClient/installReducer.ts"),
				P = n("./src/reddit/reducers/pages/modHub/index.ts"),
				L = n("./src/reddit/actions/modQueue/constants.ts");
			Object(M.a)({
				pages: {
					modHub: P.a
				}
			});
			const A = Object(o.a)(L.j),
				F = Object(o.a)(L.i),
				B = Object(o.a)(L.h),
				D = Object(o.a)(L.g),
				U = Object(o.a)(L.f),
				W = Object(o.a)(L.e),
				H = Object(o.a)(L.n),
				V = Object(o.a)(L.m),
				Q = Object(o.a)(L.l),
				q = Object(o.a)(L.q),
				G = Object(o.a)(L.p),
				J = Object(o.a)(L.o),
				X = Object(o.a)(L.w),
				z = Object(o.a)(L.v),
				K = Object(o.a)(L.u),
				Y = (e, t, n) => async (o, a, d) => {
					let {
						apiContext: u,
						gqlContext: p
					} = d;
					var b, h;
					let f, x, g;
					switch (t) {
						case r.rb.Edited:
							f = D, x = W, g = U;
							break;
						case r.rb.Modqueue:
							f = A, x = B, g = F;
							break;
						case r.rb.Reports:
							f = H, x = Q, g = V;
							break;
						case r.rb.Spam:
							f = q, x = J, g = G;
							break;
						case r.rb.Unmoderated:
							f = X, x = K, g = z;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(f());
					const v = await Object(l.c)(u(), t, n);
					if (v.ok) {
						const r = v.body,
							d = {
								...n
							};
						if (d.subreddit) {
							const e = null === (b = Object.values(r.subreddits).find(e => {
								let {
									name: t
								} = e;
								return t === n.subreddit
							})) || void 0 === b ? void 0 : b.id;
							d.subreddit = e
						}
						if (d.profile) {
							const e = null === (h = (await Object(m.b)(u(), d.profile)).body[d.profile]) || void 0 === h ? void 0 : h.profileId;
							d.profile = e
						}
						const f = j({
								getState: a,
								queueType: t,
								options: d
							}),
							k = await Object(l.b)(p(), f);
						if (!k.ok) return o(x(k.error)), void o(Object(c.f)({
							kind: S.b.Error,
							text: s.fbt._("Oh no! Something went wrong!", null, {
								hk: "16O2Sk"
							})
						}));
						const C = function(e) {
							let {
								modQueueItems: t
							} = e;
							const n = {
								posts: {},
								comments: {},
								reports: {},
								modqueue: [],
								authorFlair: {},
								listingOrder: []
							};
							return t && t.edges ? (t.edges.forEach(e => {
								var t, s;
								if (!e) return;
								const {
									node: r
								} = e;
								if (!r) return;
								const {
									__typename: o,
									subredditInfo: a
								} = r;
								if (!a) return;
								const {
									id: i
								} = a;
								if (o === y.Comment || o === y.ChatComment) {
									const {
										commentInfo: e
									} = r;
									if (!e) return;
									const s = Object(O.a)(e);
									n.comments[s.id] = s, n.listingOrder.push({
										id: s.id,
										type: "comment"
									}), n.modqueue.push(s.id);
									const {
										authorInfo: o,
										authorFlair: a
									} = e, d = a ? null === (t = Object(_.a)(a)) || void 0 === t ? void 0 : t[0] : null;
									n.authorFlair[i] = {
										...n.authorFlair[i],
										...(null == o ? void 0 : o.name) ? {
											[null == o ? void 0 : o.name]: d
										} : {}
									};
									const c = [];
									s.modReports.forEach(e => {
										c.push({
											type: "moderator",
											reason: e[0],
											reporter: e[1]
										})
									}), s.userReports.forEach(e => {
										c.push({
											type: "user",
											reason: e[0]
										})
									}), n.reports[s.id] = c
								}
								if (o === y.Post) {
									const {
										postInfo: e
									} = r;
									if (!e) return;
									const t = Object(E.f)(e);
									n.posts[t.id] = t, n.listingOrder.push({
										id: t.id,
										type: "post"
									}), n.modqueue.push(t.id);
									const {
										authorInfo: o,
										authorFlair: a
									} = e, d = a ? null === (s = Object(_.a)(a)) || void 0 === s ? void 0 : s[0] : null;
									n.authorFlair[i] = {
										...n.authorFlair[i],
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
									}), n.reports[t.id] = c
								}
							}), n) : n
						}(k.body.data);
						o(g({
							listingKey: e,
							page: `${n.page||I.b}`,
							response: {
								...r,
								...C
							}
						})), o(Object(i.a)({
							postIds: r.posts ? Object.keys(r.posts) : void 0,
							commentIds: r.comments ? Object.keys(r.comments) : void 0
						}))
					} else o(x(v.error)), o(Object(c.f)({
						kind: S.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, Z = Object(o.a)(L.k), $ = Object(o.a)(L.b), ee = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const a = n(),
						i = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = a.platform.currentPage.urlParams,
						p = u;
					if (e && d || m || !i) return;
					const b = await Object(l.c)(o(), p, {
						moderated_after: i
					});
					if (b.ok) {
						const e = b.body;
						t(Z(e)), e.moderatedAfter ? t(ee()) : t($())
					} else t(Object(c.f)({
						kind: S.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, te = Object(o.a)(L.t), ne = Object(o.a)(L.s), se = Object(o.a)(L.r), re = (e, t, n) => async (r, o, i) => {
					let {
						apiContext: m
					} = i;
					r(Object(a.c)());
					const b = o(),
						h = Object(T.g)(b),
						x = b.user.account && b.user.account.displayText;
					Object(u.d)(u.a.ModQueue);
					const g = Object(u.c)(u.a.ModQueue);
					Object(R.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...N.n(b),
						actionInfo: N.d(b, {
							count: h.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: N.Z(b),
						correlationId: g
					});
					for (let t = 0; t < h.length; t++) {
						const n = h[t];
						let s = e;
						[I.a.Approve, I.a.Remove, I.a.Spam].includes(e) && (Object(f.a)(n) ? s += "_link" : s += "_comment"), Object(R.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...N.n(b),
							actionInfo: N.d(b, {
								count: h.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: N.h(b, n),
							post: N.I(b, n),
							profile: N.T(b, n),
							screen: N.Z(b),
							subreddit: N.kb(b, n),
							correlationId: g
						})
					}
					Object(u.b)(u.a.ModQueue);
					const v = {
						ids: h
					};
					t && (v.text = Object(p.g)(t) || "", v.flairTemplateId = ""), n && (v.cssClass = n, v.flairTemplateId = n);
					const O = await Object(l.a)(m(), e, v);
					if (O.ok) {
						r(Object(a.b)({
							...O.body,
							operation: e,
							ids: h,
							username: x,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case I.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case I.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case I.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case I.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case I.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case I.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case I.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case I.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case I.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case I.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case I.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case I.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case I.a.Unspoiler:
								case I.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, h.length);
						if (e !== I.a.Approve && e !== I.a.Flair) {
							let t, o;
							const i = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = i && Object(w.F)(b, i);
							e === I.a.Remove && m && h.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(d.fetchReasonsAndOpenModal)(m, h));
							const u = Object(c.e)(n, S.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: r
								} = n;
								e(te());
								const o = t(),
									i = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = o.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									m = o.user.account && o.user.account.displayText;
								e(Object(a.c)());
								const u = await Object(l.a)(r(), i, {
									ids: d
								});
								u.ok ? e(ne({
									...u.body,
									operation: i,
									ids: d,
									username: m
								})) : (e(se(u.error)), e(Object(c.f)({
									kind: S.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							r(Object(c.f)(u))
						} else {
							const e = Object(c.e)(n, S.b.SuccessMod);
							r(Object(c.f)(e))
						}
					} else {
						r(Object(a.a)(O.error));
						const e = Object(c.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), S.b.Error);
						r(Object(c.f)(e))
					}
				}, oe = Object(o.a)(L.a), ae = Object(o.a)(L.c), ie = Object(o.a)(L.d)
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
				return re
			})), n.d(t, "addRemovalReason", (function() {
				return oe
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
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./node_modules/redux/es/redux.js");
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
				g = Object(o.c)({
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
							...r
						} = e;
						return r
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
							order: r
						} = s;
						return {
							...e,
							[n]: r
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
				C = Object(o.c)({
					api: g,
					models: O,
					reasonOrder: E,
					removedItemIds: k
				}),
				j = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				I = n("./src/lib/makeCommentsPageKey/index.ts"),
				S = n("./src/lib/makeDraftKey/index.ts"),
				T = n("./src/reddit/actions/bulkActions/index.ts"),
				w = n("./src/reddit/actions/comment/index.ts"),
				N = n("./src/reddit/actions/comment/authoring.ts"),
				R = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				B = n("./src/lib/omitHeaders/index.ts"),
				D = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: j.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: j.jb.POST,
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
			Object(r.a)({
				features: {
					removalReasons: C
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(y.a)(a),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: j.jb.GET
					}))(r(), o);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, ne = Object(y.a)(i), se = Object(y.a)(d), re = Object(y.a)(c), oe = (e, t) => async (n, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: j.jb.POST,
						data: n
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, o = {
							...t,
							id: r
						};
						n(se({
							subredditId: e,
							reason: o
						})), n(Object(L.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(re(d.error))
				}, ae = Object(y.a)(l), ie = Object(y.a)(m), de = Object(y.a)(u), ce = (e, t) => async (n, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					n(ae());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: j.jb.PUT,
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
				}, le = Object(y.a)(p), me = Object(y.a)(b), ue = Object(y.a)(h), pe = (e, t) => async (n, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					n(le());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: j.jb.DELETE
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
				}, be = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const a = s();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(A.a.ADD_REMOVAL_REASON))
				}, fe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, n, s, r) => async (o, a, i) => {
					let {
						apiContext: d
					} = i;
					const c = a(),
						l = c.user.account && c.user.account.displayText,
						m = e[0],
						u = Object(V.a)(m) ? X.e.Post : X.e.Comment,
						p = u === X.e.Post ? c.posts.models[m] : c.features.comments.models[m],
						b = u === X.e.Post ? P.S : w.j;
					if (!p || !l) return !1;
					o(fe()), o(b({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const h = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						f = await W(d(), h);
					if (f.ok) {
						if (o(xe()), t) {
							o(ve());
							const r = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								a = await H(d(), Object(X.h)(r, u), u);
							if (a.ok) {
								if ([X.f.Public, X.f.PublicSubreddit].includes(s)) {
									if (o(_e()), a.body) {
										const e = Object(Q.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Y.f)(c),
											s = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let r = n && s && Object(q.a)(s, c, c.posts.models[e.postId]);
										if (r || (r = Object(I.a)(e.postId, null, {
												sort: j.u,
												hasSortParam: !0
											})), u === X.e.Post) {
											const n = Object(S.a)(J.c.replyToPost, m);
											o(Object(N.r)({
												...t,
												headCommentId: Object(K.w)(c, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: n
											}));
											const s = c.postStickiedComments.data[m];
											o(Object(R.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && o(Object(w.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === X.e.Comment) {
											const e = Object(S.a)(J.c.replyToComment, p.id),
												n = Object(K.j)(c, {
													commentId: m,
													commentsPageKey: r
												});
											o(Object(N.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else o(Oe());
								return !0
							}
							return o(Ee(a.error)), !1
						}
					} else o(ge(f.error)), o(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, n, r, o) => async (a, i, d) => {
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
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await W(c(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (a(Object(T.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: r
								},
								o = await H(c(), Object(X.h)(s, X.e.Bulk), X.e.Bulk);
							o.ok ? (a(Oe()), a(u)) : a(Ee(o.error))
						} else a(u)
					} else a(ge(b.error))
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
				j = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = n.n(I);
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
				R = Object(a.b)(N, (e, t) => {
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
			t.a = T(R(l.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: r,
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
					sendEvent: I,
					pageLayer: T,
					...w
				} = e;
				const N = Object(p.b)(n),
					R = n.isApproved && N,
					M = !n.isRemoved || n.bannedBy === c.k,
					P = i,
					L = e => I(Object(f.b)(e, n.id)),
					A = "chat_comments" === (null == T ? void 0 : T.queryParams.only);
				return o.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && o.a.createElement(y.a, {
					text: R ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), A && I(Object(f.a)("approve", n.id)), L("approve")
					}
				}, o.a.createElement(_.a, {
					className: S.a.icon
				})), M && o.a.createElement(o.a.Fragment, null, o.a.createElement(y.a, {
					text: n.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), A && I(Object(f.a)("remove", n.id)), n.bannedBy === c.k ? L("confirm_remove") : L("remove")
					}
				}, o.a.createElement(k.a, {
					className: S.a.icon
				})), o.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), L("spam")
					}
				}, o.a.createElement(C.a, {
					className: S.a.icon
				}))), o.a.createElement(y.a, {
					text: n.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), L(n.isLocked ? "unlock" : "lock")
					}
				}, o.a.createElement(E.a, {
					className: S.a.icon
				})), P && o.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, o.a.createElement(j.a, {
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
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				I = n("./src/lib/constants/index.ts"),
				S = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(w);
			const R = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: r,
					isLivestreaming: a,
					isStrong: i,
					onClick: c,
					renderedInOverlay: l
				} = e;
				const m = Object(j.f)(s),
					u = o.a.createElement(S.b, {
						ignore: m || !!s.distinguishType && s.distinguishType !== I.G.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, o.a.createElement(b, {
						className: t,
						collapsed: r,
						comment: s,
						isAuthorDeleted: Object(j.f)(s),
						isCommentAuthorBlocked: Object(j.g)(s),
						isLivestreaming: a,
						isStrong: i,
						onClick: c
					}));
				return m ? u : o.a.createElement(T.b, {
					className: Object(d.a)(N.a.authorHoverCard, n),
					collapsed: r,
					isCommentAuthorBlocked: Object(j.g)(s),
					postOrComment: s,
					tooltipType: l ? O.c.Lightbox : void 0
				}, u)
			};
			var M = n("./src/config.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${n?"inOverlay":""}`
			};
			var F = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(F);
			const D = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: r
				} = e;
				const i = Object(a.d)(),
					c = () => i(Object(P.h)({
						tooltipId: l
					})),
					l = A("CommentTopMeta--cakeday--", n, r),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: Object(d.a)(B.a.cakedayIcon, t),
					src: `${M.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), o.a.createElement(L.c, {
					tooltipId: l,
					text: m
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
					} = e, l = Object(a.d)(), m = A("CommentTopMeta--Created--", n.id, d), u = () => l(Object(P.h)({
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
					}), o.a.createElement(L.c, {
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
					window.removeEventListener("focus", n), e(Object(W.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				z = n.n(X);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => o.a.createElement(_.a, {
				className: z.a.crowdControlText
			}, K._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return o.a.createElement(_.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", o.a.createElement(V.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
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
			const ue = e => {
				let {
					comment: t,
					ignoreLock: r,
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
				return o.a.createElement(o.a.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(o.a.Fragment, null, o.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(L.c, {
					tooltipId: p,
					text: Object(se.a)(t)
				})), Object(ne.a)(t) && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(t),
					id: b,
					onMouseEnter: x,
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(L.c, {
					tooltipId: b,
					text: Object(se.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: x,
					onMouseLeave: m
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !r && o.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(t),
					id: f,
					onMouseEnter: l(f),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(L.c, {
					tooltipId: f,
					text: Object(se.d)(t)
				})), Object(re.a)(t) && o.a.createElement(o.a.Fragment, null, o.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: h,
					onMouseEnter: l(h),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(L.c, {
					tooltipId: h,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && d && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: me.a.userDeletion
				}, s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
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
					} = xe[n], l = i(), m = A(s, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(P.h)({
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
					}, o.a.createElement("span", null, l), n === pe.Mod && o.a.createElement(ve, null)), o.a.createElement(L.c, {
						tooltipId: m,
						text: u
					}))
				},
				ve = () => o.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: fe.a.modAchievement,
					src: `${M.a.assetPath}/img/powerups/moderator-achievement.svg`
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
				je = n.n(Ce);
			const ye = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: r,
					comment: i,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: I,
					permalink: S,
					renderContractorBadge: T,
					renderedInOverlay: w,
					subredditDisplayText: N,
					isAdmin: M
				} = e, P = Object(C.a)(), L = i.subredditId, A = Object(a.e)(e => Object(y.f)(e, {
					subredditId: L
				}));
				if (i.isDeleted && !M) return o.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, o.a.createElement("span", {
					className: je.a.authorLine
				}, o.a.createElement("span", {
					className: je.a.metaText
				}, i.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), o.a.createElement(_.c, {
					className: je.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: je.a.metaText,
					comment: i,
					compact: !0,
					permalink: S,
					renderedInOverlay: w
				})));
				return o.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header"
				}, o.a.createElement("span", {
					className: je.a.authorLine
				}, !Object(j.f)(i) && o.a.createElement(f.b, {
					className: je.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), o.a.createElement("div", {
					className: je.a.baselineItem
				}, o.a.createElement(R, {
					authorClassName: je.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: w
				})), !Object(j.f)(i) && u && o.a.createElement(v.a, {
					postOrComment: i,
					className: je.a.LastAuthorModNoteIcon
				}), r && o.a.createElement(Y, null), o.a.createElement(ge, {
					className: je.a.role,
					comment: i,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: w
				}), i.isAuthorCakeday ? o.a.createElement(D, {
					className: je.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: w
				}) : !Object(j.f)(i) && A && o.a.createElement(h.a, {
					className: je.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						P(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), o.a.createElement(g.a, {
					className: je.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), o.a.createElement(_.c, {
					className: je.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: je.a.metaText,
					comment: i,
					compact: !0,
					onClick: I,
					permalink: S,
					renderedInOverlay: w
				}), i.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: je.a.separator
				}), o.a.createElement(ke, null)), i.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: je.a.separator
				}), o.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), o.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: w,
					isAdmin: M
				}), o.a.createElement(l.a, {
					thing: i,
					tooltipType: w ? O.c.Lightbox : void 0
				})), c && !Object(E.o)(c) && o.a.createElement("span", {
					className: je.a.userFlairLine
				}, o.a.createElement(x.b, {
					className: je.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Se = n("./src/reddit/selectors/economics.ts"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				we = n("./src/reddit/selectors/comments.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Re = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Me = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./src/reddit/selectors/userFlair.ts"),
				Le = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ae = n.n(Le);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Ae.a),
				De = c.a.span("DeletedText", Ae.a),
				Ue = c.a.wrapped(_.a, "MetaSeparator", Ae.a),
				We = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Se.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Me.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Pe.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(we.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ne.b,
					isBlockingInterstitialV2Enabled: Ne.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Re.i)(e, n.subredditId)
					}
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
					hideAwards: h = !1,
					ignoreFlairPosition: v,
					ignoreLock: E,
					isAdmin: k,
					isBlockingInterstitialEnabled: C,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: I,
					isLivestreaming: S,
					isPostComment: T,
					onCommentAuthorClick: w,
					onCommentTimestampClick: N,
					renderContractorBadge: M,
					renderedInOverlay: P,
					subredditDisplayText: L,
					userHasNft: A
				} = e, F = o.a.createElement(o.a.Fragment, null, o.a.createElement(Ie.b, {
					commentId: a.id
				}), o.a.createElement(Ie.a, {
					commentId: a.id,
					commentsPageKey: c
				}));
				if (T) return o.a.createElement(o.a.Fragment, null, o.a.createElement(ye, {
					className: Object(d.a)(n, {
						[Ae.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: r,
					comment: a,
					flair: u || null,
					ignoreLock: E,
					isAdmin: k,
					isModWithUserNotesPermissions: I,
					isLivestreaming: S,
					onCommentAuthorClick: w,
					onCommentTimestampClick: N,
					permalink: i,
					renderContractorBadge: !!M,
					renderedInOverlay: P,
					subredditDisplayText: L
				}), F);
				if (a.isDeleted) return o.a.createElement(He, Fe({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				if (s) return o.a.createElement(Ve, Fe({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				const B = !v && p === Te.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s,
						[Ae.a.hasBadges]: b,
						[Ae.a.liveStreaming]: S
					}),
					"data-testid": "comment-top-meta"
				}, u && B && o.a.createElement(x.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(j.f)(a) && o.a.createElement(f.b, {
					className: Ae.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, o.a.createElement(R, {
					authorClassName: A ? Ae.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: S,
					isStrong: !!m,
					onClick: w,
					renderedInOverlay: P
				}), r && o.a.createElement(Y, null), r && o.a.createElement(_.c, {
					className: Ae.a.metaText,
					key: "crowdControlSeparator"
				}), u && !B && o.a.createElement(Be, {
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
				}), F, o.a.createElement(ge, {
					className: Ae.a.authorRole,
					comment: a,
					subredditDisplayText: L,
					renderContractorBadge: !!M,
					renderedInOverlay: P
				}), !m && o.a.createElement(o.a.Fragment, null, !a.isDeleted && !T && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.b, {
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
					renderedInOverlay: P,
					isBlockingInterstitialEnabled: C || y
				}), a.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: Ae.a.separator
				}), o.a.createElement(ke, null)), a.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.c, {
					className: Ae.a.separator
				}), o.a.createElement(te, {
					editedAt: a.editedAt
				}))), o.a.createElement(ue, {
					comment: a,
					ignoreLock: E,
					renderedInOverlay: P
				}), !h && o.a.createElement(l.a, {
					thing: a,
					tooltipType: P ? O.c.Lightbox : void 0
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
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: l
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(De, null, a.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), o.a.createElement(q, {
						key: "Created",
						className: Ae.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
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
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t),
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
				return R
			})), n.d(t, "b", (function() {
				return L
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
				j = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = n.n(j),
				I = n("./src/lib/lessComponent.tsx");
			const S = I.a.div("VoteSpacer", y.a),
				T = I.a.div("ContentWrapper", y.a),
				w = I.a.div("CommentContentWrapper", y.a),
				N = I.a.div("CommentBody", y.a),
				R = I.a.div("ParentPostTitle", y.a),
				M = I.a.div("CommentParentWrapper", y.a),
				P = Object(a.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: E.m,
					flair: E.e,
					subreddit: C.J
				}),
				L = Object(o.b)(P, (e, t) => {
					let {
						commentId: n,
						trackClick: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(c.g)(n)),
						onVoteClick: t => {
							const [r, o] = t === _.a.upvoted ? [Object(d.r)(n), "upvote_comment"] : [Object(d.k)(n), "downvote_comment"];
							s(o)(), e(r)
						}
					}
				}),
				A = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = L(I.a.wrapped(e => {
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
				} = e, j = Object(f.a)(n);
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
				}), r.a.createElement(S, null, r.a.createElement(T, null, r.a.createElement(M, null, n.postTitle && r.a.createElement(R, null, n.postTitle), n.postAuthor && r.a.createElement(b.a, {
					comment: n
				})), r.a.createElement(w, null, r.a.createElement(u.a, {
					comment: n
				}, r.a.createElement(N, null, r.a.createElement(v.b, {
					content: Object(O.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: A(e)
				})), r.a.createElement(p.a, {
					comment: n,
					flair: o,
					subredditName: E ? E.displayText : null
				}), j && r.a.createElement(h.a, {
					thing: n
				}), a && r.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && r.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", y.a))
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				I = Object(d.a)(x.a),
				S = {
					[b.d.Card]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
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
				R = Object(a.b)(N, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.y)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: y
					}))
				}));
			class M extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.Z)(t),
							subreddit: Object(O.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || b.e[r], i = e === a, d = S[e], l = T[e];
						return o.a.createElement(g.b, C({}, t, {
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
						}), o.a.createElement(d, {
							className: k.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(I, C({}, e, {
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
					} = this.props, r = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(c.a)(k.a.Container, e),
						id: j
					}, o.a.createElement("div", {
						className: k.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: y,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = w(R(Object(p.c)(Object(l.a)(M))))
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
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return o.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, o.a.createElement("button", {
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
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), r.a.createElement("iframe", {
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
				j = n.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * v.e,
				S = e => {
					const t = Object(c.a)(j.a.image, h.g, e.className, {
							[j.a.mShowCentered]: e.showCentered,
							[j.a.mShowBlurred]: e.shouldBlur
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
						className: Object(c.a)(j.a.container, e.className),
						style: t
					}, e.children)
				},
				w = Object(a.b)(() => Object(d.a)(O.F, E.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(O.b)(e, s) : null
				}, _.d, O.G, (e, t, n, s, r) => ({
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
				}, R(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, R(e)) : R(e)
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
				R = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(v.L)(n.height, n.width),
						a = I(n.height) && r;
					return o.a.createElement(T, y({}, n, {
						className: `${r?`${k.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, N(r, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: j.a.imageLink
					}, N(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.L)(n.height, n.width) && o.a.createElement("div", {
						className: j.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(b.a, {
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
				return j
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
					onBufferingChange: r,
					shouldLoad: i,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: m,
					...u
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
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
				return Object(o.useEffect)(() => {
					if (_(!d && (t || s)), b.current && r) return p.current = function(e, t) {
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
							4 === e.readyState ? a = !1 : !a && d >= i && d < i + x ? a = !0 : a && d >= i && d > i + x && (a = !1), i = d, r !== a && t(a)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
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
					metadata: o,
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
					showCentered: I,
					originalSource: S,
					isPromoted: T
				} = e, w = t && !(T && Object(c.hasAcceptableAds)()), N = Object(i.d)();

				function R(e) {
					N(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function M() {
					return N(Object(m.z)({
						postId: b
					}))
				}
				const P = r()(e => {
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
					(o || B(e), d) || (t = e.timeStamp, N(Object(m.A)(b, t)))
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
					s || A(e), o || B(e), N(Object(m.C)(b))
				}

				function U() {
					const e = {};
					return I && (e.margin = "0 auto"), j || (e.maxHeight = `${p.e}px`), a.a.createElement(_, {
						autoplay: w,
						className: Object(l.a)(u.a, k.a.styledVideo),
						height: x,
						isListing: j,
						isNotCardView: g,
						key: b,
						loop: !0,
						onBufferingChange: R,
						onLoadStart: F,
						onLoadedData: A,
						onLoadedMetadata: B,
						onPause: M,
						onPlaying: D,
						onTimeUpdate: L,
						shouldLoad: h,
						shouldPause: O,
						showCentered: I,
						showFull: v,
						source: f,
						style: e,
						width: E
					})
				}
				return j ? U() : a.a.createElement("div", {
					className: Object(l.a)(k.a.container, y, {
						[k.a.centered]: I
					})
				}, a.a.createElement("a", {
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
				return r
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT))(e)
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
				I = n("./src/reddit/selectors/experiments/chat.ts"),
				S = n("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				T = n.n(S);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(s || (s = {}));
			const w = m.a.wrapped(C.b, "Row", T.a),
				N = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: y.k,
					isModQChatCommentsFilterEnabled: I.h
				});
			var R = Object(i.b)(N)(e => a.a.createElement("div", null, a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(w, {
					displayText: r.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Posts
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === s.Posts
				})), a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Comments
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === s.Comments
				})), e.isModQChatCommentsFilterEnabled && a.a.createElement(j.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.ChatPosts
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Live Chat Messages", null, {
						hk: "26ZmtR"
					}),
					isSelected: e.postTypeFilter === s.ChatPosts
				})))),
				M = n("./src/reddit/hooks/useLocalStorage.ts"),
				P = n("./src/reddit/hooks/useMounted.ts"),
				L = n("./src/reddit/constants/experiments.ts"),
				A = n("./src/reddit/helpers/chooseVariant/index.ts"),
				F = n("./src/reddit/selectors/user.ts");
			const B = e => Object(A.c)(e, {
				experimentEligibilitySelector: F.Q,
				experimentName: L.ec
			}) === L.zd;
			var D = n("./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less"),
				U = n.n(D);
			const W = e => {
				let {
					children: t
				} = e;
				const [n, s] = Object(M.a)("sort_num_reports_seen_count", 0), d = Object(i.e)(B), c = Object(P.a)(), l = !d || !c || n > 3;
				Object(o.useEffect)(() => {
					l || s(n + 1)
				}, [l]);
				return l ? t : a.a.createElement("div", {
					className: U.a.wrapper,
					onClick: () => {
						s(4)
					}
				}, a.a.createElement("span", {
					className: U.a.tooltip
				}, r.fbt._("NEW! More sort options added", null, {
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
						placeholder: r.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(j.default, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(Z, {
						displayText: r.fbt._("All subreddits", null, {
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
				re = n.n(se);
			const oe = Object(l.a)(h.a),
				ae = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				ie = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				de = "MODQ--POST_SORT_DROPDOWN",
				ce = m.a.wrapped(x.a, "Inline", re.a),
				le = m.a.div("Filter", re.a),
				me = m.a.wrapped(p.a, "LayoutSwitch", re.a),
				ue = e => {
					switch (e) {
						case "allPostTypes":
							return r.fbt._("Posts and Comments", null, {
								hk: "2BGBVi"
							});
						case "allSubreddits":
							return r.fbt._("All subreddits", null, {
								hk: "3GnUZA"
							});
						case "comments":
							return r.fbt._("Comments", null, {
								hk: "3PSW3P"
							});
						case "links":
							return r.fbt._("Posts", null, {
								hk: "1nfhQO"
							});
						case "searchPlaceholder":
							return r.fbt._("Find subreddit", null, {
								hk: "2rRq64"
							});
						case "chat_comments":
							return r.fbt._("Live Chat Messages", null, {
								hk: "4iL79y"
							})
					}
				},
				pe = e => {
					switch (e) {
						case "oldest":
							return r.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						case "most_reported":
							return r.fbt._("Most Reported First", null, {
								hk: "mANyW"
							});
						default:
							return r.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				be = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(O.b)(ie),
					isSubredditFilterDropdownOpen: Object(O.b)(ae),
					isPostSortDropdownOpen: Object(O.b)(de),
					isModQChatCommentsFilterEnabled: I.h,
					profile: (e, t) => {
						let {
							profileName: n
						} = t;
						return n ? Object(g.j)(e, {
							profileName: n
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: n
						} = t;
						return n ? Object(v.z)(e, {
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
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || r.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), n = e.postTypeFilter && ue(e.postTypeFilter) || r.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), s = pe(null == e ? void 0 : e.postSort);
					return a.a.createElement(ce, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(le, {
						id: ae,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(oe, {
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
					})), a.a.createElement(oe, {
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
					})), a.a.createElement(oe, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: ie
					}, a.a.createElement(R, {
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
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.OldestFirst
				})
			}, a.a.createElement(x, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === s.OldestFirst
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.MostReportedFirst
				})
			}, a.a.createElement(x, {
				displayText: r.fbt._("Most reported first", null, {
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
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = n("./src/lib/logs/console.ts"),
				w = n("./src/lib/objectSelector/index.ts"),
				N = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				M = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
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
			var se = Object(R.b)(e => {
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
					} = e, p = Object(B.a)(n), b = Object(h.c)(n);
					return d.a.createElement(M.a, {
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
						rtJsonElementProps: ne(e)
					}), d.a.createElement(L.a, {
						comment: n,
						flair: r,
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
				re = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				oe = n("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = n.n(oe);
			const ie = u.a.div("VoteSpacer", ae.a),
				de = u.a.div("ContentWrapper", ae.a),
				ce = u.a.wrapped(L.a, "Meta", ae.a),
				le = u.a.div("CommentParentWrapper", ae.a),
				me = u.a.div("CommentContentWrapper", ae.a),
				ue = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var pe = Object(R.b)(u.a.wrapped(e => {
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
					} = e, b = Object(B.a)(n);
					return d.a.createElement(M.a, {
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
					}), n.postTitle && d.a.createElement(R.a, null, n.postTitle)), d.a.createElement(P.a, {
						comment: n
					}, d.a.createElement(me, null, d.a.createElement(U.b, {
						content: Object(V.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ue(e)
					})), b && d.a.createElement(F.a, {
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
					[be.g.Medium]: R.c,
					[be.g.Classic]: R.c,
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, Se = u.a.div("Container", je.a), Te = u.a.div("Image", je.a), we = u.a.div("Title", je.a), Ne = u.a.div("Text", je.a);
			var Re = () => d.a.createElement(Se, null, d.a.createElement(Te, {
					style: {
						backgroundImage: `url(${Ie})`
					}
				}), d.a.createElement(we, null, ye._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Ne, null, ye._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Me = n("./src/reddit/components/PostList/Placeholder.tsx");
			const Pe = Object(j.u)(),
				Le = Object(l.c)({
					layout: j.S
				});
			var Ae = Pe(Object(c.b)(Le)(e => d.a.createElement(Me.a, {
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
					}], y = c && c.flair, I = E && r && r.displaySettings.isEnabled && y && !ct(O);
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
			const yt = e => Object(I.a)(e.id),
				It = u.a.div("ItemContainer", jt.a),
				St = u.a.div("ButtonContainer", jt.a),
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
					subredditId: (e, t) => t.subredditName ? Object(Ee.F)(e, t.subredditName) : null
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
				Rt = e => e.page ? parseInt(e.page, 10) : ve.b,
				Mt = e => Rt(e) + 1,
				Pt = e => Math.max(ve.b, Rt(e) - 1),
				Lt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Rt(e) === ve.b ? t : 25 * Pt(e) + t
				},
				At = e => Rt(e) === ve.b ? ve.b : 25 * Pt(e) + 1;
			var Ft;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Ft || (Ft = {}));
			class Bt extends d.a.Component {
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
							case Ft.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
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
									if (Object(I.a)(e.id)) {
										const n = e;
										n.flair && n.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(n.id)
									}
								});
								break;
							case Ft.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(I.a)(e.id)) {
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
								page: Pt(e),
								after: null
							}),
							nextButtonEnabled: s,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Mt(e),
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
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Re, null) : e.isModQueueListingPending ? d.a.createElement(Ae, null) : null)
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
			const C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				j = Object(d.c)({
					flairData: v.d,
					subreddit: O.U
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
			const I = Object(i.b)(j, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(y);
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
				v = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement(g, p({}, s, {
						className: Object(a.a)(t, {
							[m.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", m.a),
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
				return j
			})), n.d(t, "t", (function() {
				return y
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
				return R
			})), n.d(t, "w", (function() {
				return M
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
				j = d.a.table("Table", i.a),
				y = d.a.tr("Tr", i.a),
				I = d.a.td("Tdl", i.a),
				S = d.a.td("Tdc", i.a),
				T = d.a.td("Tdr", i.a),
				w = d.a.th("Thl", i.a),
				N = d.a.th("Thc", i.a),
				R = (d.a.th("Thr", i.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				M = d.a.wrapped(c.a, "A", i.a)
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
				return C
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				m = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				f = n("./src/reddit/components/RichTextJson/media.tsx"),
				x = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				v = n.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = n("./src/lib/lessComponent.tsx").a.div("Container", v.a),
				E = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return i.a.createElement(_, O({}, s, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: n,
								...s
							}))
						}
					}))
				}),
				k = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				C = e => o()(e, k),
				j = e => e.findIndex(k),
				y = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: g,
						useExplicitTextColor: O,
						shouldBlur: k
					} = e, y = s.document, I = [], S = e.mediaMetadata || null, T = j(y), w = C(y);
					if (k && !r && !a) return i.a.createElement(_, {
						className: Object(d.a)(u.j, n)
					}, i.a.createElement("div", {
						className: v.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: v.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!o, !!c))));
					if (-1 !== T)
						for (let i = T; i <= w; i++) {
							const e = y[i];
							switch (e.e) {
								case h.k:
									I.push(x.c(e, g, i));
									break;
								case h.l:
									I.push(x.d(i));
									break;
								case h.b:
									I.push(x.a(e, S, g, i));
									break;
								case h.c:
									I.push(x.b(e, i));
									break;
								case h.p:
									I.push(x.f(e, S, g, i));
									break;
								case h.z:
									I.push(x.h(e, S, g, i));
									break;
								case h.u:
									I.push(x.g(e, S, g, i));
									break;
								case h.h:
									I.push(Object(f.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									I.push(...Object(f.b)(e, i, g, S, b, p, t))
							}
						}
					return O ? i.a.createElement(_, {
						className: Object(d.a)(u.j, n)
					}, I) : i.a.createElement(E, {
						className: Object(d.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, I)
				};
			class I extends i.a.Component {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return w
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
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts");
			var f = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				x = n("./src/reddit/components/RichTextJson/elements.tsx"),
				g = n("./src/reddit/components/RichTextJson/media.m.less"),
				v = n.n(g),
				O = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				k = O.a.wrapped(x.a, "A", v.a),
				C = O.a.wrapped(l.a, "ImageBox", v.a),
				j = O.a.wrapped(e => o.a.createElement("p", e), "Caption", v.a),
				y = O.a.div("Placeholder", v.a),
				I = O.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...r
					} = e;
					const a = n === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(y, _({
						className: t,
						style: {
							"--placeholder-content-text": `'${a}'`
						}
					}, r))
				}, "Placeholder", v.a),
				S = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: v.a.MediaWrapper
					}, o.a.createElement(m.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				T = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === h.s ? r = n.s.u : n.e === h.r ? r = n.s.gif : n.e === h.t && (r = (e => {
						const t = E.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(k, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				w = (e, t, n, s, r, i, c) => {
					const l = h.E(s, e.id);
					if (r) return [T(e, t, l)];
					const x = [];
					return l ? l.e === h.s ? x.push(((e, t, n, s) => {
						let {
							id: r,
							s: i
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(m.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, o.a.createElement(C, {
							altText: s,
							originalSource: i.u,
							postId: r,
							source: i.u,
							height: i.y,
							width: i.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(l, t, !!e.c, c)) : l.e === h.r ? x.push(((e, t, n, s) => {
						let {
							id: r,
							ext: i,
							s: d
						} = e;
						if (Object(b.g)(r)) {
							const e = s.renderingObjectInfo,
								c = !!e && Object(p.b)(e),
								l = i || Object(b.f)(r);
							return o.a.createElement("div", {
								className: Object(a.a)({
									[v.a.MediaWrapper]: !c,
									[v.a.CommentGifWrapper]: c,
									[v.a.mHasCaption]: n
								})
							}, o.a.createElement(k, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? o.a.createElement("video", {
								className: v.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: d.mp4
							})) : {
								originalSource: l
							}), o.a.createElement(f, {
								className: v.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, o.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: r,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, n)) : l.e === h.t && x.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: i,
							x: c,
							y: l,
							isGif: u
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(m.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, o.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: u,
							hlsSource: r,
							mpegDashSource: i,
							postId: s,
							isGif: u
						})))
					})(l, t, !!e.c, i)) : x.push(((e, t) => o.a.createElement(I, {
						e,
						key: t
					}))(e.e, t)), e.c && x.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return R
			})), n.d(t, "d", (function() {
				return M
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
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				y = n("./src/reddit/components/SubredditMention/index.tsx"),
				I = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const R = (e, t, n) => {
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
				M = e => i.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(F(r[i], t, n, i));
					return i.a.createElement(d.c, {
						key: s
					}, a)
				},
				L = (e, t) => {
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
						}, e.map((e, s) => F(e, t, n, s))))
					}
					const c = e.o ? d.i : d.v;
					return i.a.createElement(c, {
						key: s
					}, o)
				},
				F = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return P(e, t, n, s);
						case p.c:
							return L(e, s);
						case p.k:
							return R(e, n, s);
						case p.l:
							return M(s);
						case p.p:
							return A(e, t, n, s);
						case p.u:
							return D(e, t, n, s);
						case p.z:
							return B(e, t, n, s)
					}
				},
				B = (e, t, n, s) => {
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
					}, U(e.c, t, n)) : Object(C.b)(r, s, n, t)
				},
				U = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(H(r, o));
						else if (r.e === p.x) s.push(i.a.createElement(j.a, {
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
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: u.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: u.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
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
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!n || !t) return r.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Cf.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case h.Cf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(v, {
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
				j = n.n(C);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = Object(m.u)(), S = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(x.db)(e);
					return s || r
				},
				nigtmode: x.db,
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
					} = this.props, h = n ? j.a.widgetContentOnly : j.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!d,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: x
					}, m && r.a.createElement("div", {
						className: Object(i.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: a,
						style: g,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, y._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = I(S(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
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
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: r,
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
						}) : r ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(n, "number", d)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, a, m)
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
			var s = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let r = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort !== s.a.NewestFirst && (r += `--[${e.sort}]`), r
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
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
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
						c = Object(o.f)(i, {
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
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(s.x)(n) ? a.SourceElement.PostDetail : Object(s.H)(n) ? a.SourceElement.ListingPostDetail : void 0
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
					...m.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...m.n(e),
					source: r,
					screen: m.Z(e),
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
						c = Object(l.z)(e, {
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
						subreddit: m.ib(e, s),
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
					subreddit: m.jb(t, e),
					screen: m.Z(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: m.I(n, t),
					subreddit: m.jb(n, e),
					screen: m.Z(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: m.I(n, t),
					subreddit: m.jb(n, e),
					screen: m.Z(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: m.ib(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.ib(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.ib(t, e) || null,
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
					widget: Object(a.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.n(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
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
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}
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
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, a({
				name: "award"
			}, e))
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
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
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
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicSubreddit = "public_subreddit"
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
						type: e.type === d.PublicSubreddit ? d.Public : e.type,
						use_proxy: e.type === d.PublicSubreddit
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
				j = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				y = n.n(j);
			const I = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var S = Object(i.b)(I)(e => a.a.createElement(C.default, {
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
				R = n("./src/lib/lessComponent.tsx"),
				M = n("./src/lib/opener/index.ts"),
				P = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				L = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				A = n.n(L);
			const F = R.a.a("ExternalLink", A.a),
				B = R.a.wrapped(C.default, "InternalLink", A.a);
			var D = () => a.a.createElement(P.a, {
				title: v.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, a.a.createElement(F, {
				href: N.a.redditModHelpUrl,
				rel: M.c,
				target: M.d.BLANK
			}, v.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), a.a.createElement(F, {
				href: `${N.a.redditUrl}/help/healthycommunities/`,
				rel: M.c,
				target: M.d.BLANK
			}, v.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), a.a.createElement(B, {
				to: "/r/modsupport",
				rel: M.c,
				target: M.d.BLANK
			}, "r/modsupport"), a.a.createElement(F, {
				href: `${N.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: M.c,
				target: M.d.BLANK
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
						return r()([...Object(c.a)(n.search)])
					}
				}),
				V = Object(d.a)(H, b.S, x.o, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.pageName
				}, (e, t, n, s) => {
					let {
						queryParams: r
					} = e;
					const o = r.subreddit,
						a = r.profile,
						i = r.only,
						d = r.sort,
						c = `${r.page||f.b}`;
					return {
						after: r.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: c,
						pageName: s,
						postTypeFilter: i,
						postSort: d,
						profileName: a,
						subredditName: o
					}
				}),
				Q = Object(i.b)(V);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(g.Z)(t)
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
						postSort: c,
						subredditName: u
					} = this.props, b = u && `r/${u}` || i && `user/${i}`, f = "unmoderated" !== o, x = f ? d : void 0;
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
							page: r,
							pageName: o,
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
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.mb:
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
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
									s = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									i = a.filter(o.b),
									d = i.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
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
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const r = s.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
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
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s;
					return n ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n] : null
				},
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s, r;
					return n ? null === (r = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: n,
						userId: s
					} = t;
					var r, o;
					return n && s ? null === (o = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[n]) || void 0 === o ? void 0 : o[s] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, u], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([i, c], (e, t) => {
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
						supporterFlairs: x(n, o, r, c || i),
						achievementFlairs: x(s, a, r, l || d)
					}
				}),
				h = Object(s.a)([c], e => !!e && e.isHidden),
				f = Object(s.a)([i, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				x = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, t) => {
					let {
						commentId: n
					} = t;
					const s = Object(r.b)(e, {
							commentId: n
						}),
						o = null == s ? void 0 : s.subredditId,
						a = null == s ? void 0 : s.authorId;
					return !(!o || !a) && !!((e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var r, o, a;
						return n && s ? null === (a = null === (o = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === o ? void 0 : o[s]) || void 0 === a ? void 0 : a[n] : null
					})(e, {
						subredditId: o,
						userId: a
					})
				}
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
				r = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = n("./src/lib/objectSelector/index.ts"),
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
			const c = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(o.a)((e, t) => {
					var n, s, r;
					const {
						pageName: o,
						page: a
					} = t, i = c(0, t);
					if (!(null === (r = null === (s = null === (n = e.pages.modHub.modQueue[o]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === r ? void 0 : r[a])) return;
					const d = e.pages.modHub.modQueue[o].itemOrder[i][a];
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
					return t && t.meta && (t.meta.name === s.Nb.MODERATION_PAGES || t.meta.name === s.Nb.MODQUEUE_PAGES)
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
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.vf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Cf.SmIcon || t === s.Cf.SmIconHc
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
					const s = Object(a.Y)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.507545834b46c6fbb162.js.map