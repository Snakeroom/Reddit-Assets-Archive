// https://www.redditstatic.com/desktop2x/ModQueuePages.3fc0205f0ab343df9937.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function o(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						v = !i && !m && !u && !p && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !O && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
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
					}, x ? (s.msedge = e, s.version = x) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: x
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? s = {
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
					} : u ? s = {
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
					}, g && (s.version = g)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (s.version = g)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && g && (s.version = g)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : k ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var C = "";
					s.windows ? C = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? C = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? C = (C = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? C = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? C = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? C = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? C = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (C = n(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (s.osversion = C);
					var E = !s.windows && C.split(".")[0];
					return O || d || "ipad" == r || i && (3 == E || E >= 4 && !_) || s.silk ? s.tablet = e : (_ || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = s(e, (function(e) {
							var n = t - o(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, s) {
					var i = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = o() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var r = s.element,
								i = a(r),
								d = this._rootContainsTarget(r),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, n),
								m = s.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, o) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, r, i, d, l, m, u, p, b = a(n), h = c(n), f = !1; !f;) {
								var v = null,
									x = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == x.display) return;
								if (h == this.root || h == t ? (f = !0, v = o) : h != t.body && h != t.documentElement && "visible" != x.overflow && (v = a(h)), v && (s = v, r = b, i = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(s.top, r.top), d = Math.min(s.bottom, r.bottom), l = Math.max(s.left, r.left), m = Math.min(s.right, r.right), p = d - i, !(b = (u = m - l) >= 0 && p >= 0 && {
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
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								o = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || o.clientWidth,
								width: n.clientWidth || o.clientWidth,
								bottom: n.clientHeight || o.clientHeight,
								height: n.clientHeight || o.clientHeight
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
							o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== o)
							for (var s = 0; s < this.thresholds.length; s++) {
								var r = this.thresholds[s];
								if (r == n || r == o || r < n != r < o) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = o
				}

				function o(e) {
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
						o = this.intersectionRect,
						s = o.width * o.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, o, s, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), o))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, n, o) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, o || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, o) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, o || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, r) {
					n = o ? (o = !1, e) : t(n, e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js"),
				s = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = s(e) ? e : a(e), n = n && !c ? i(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && o(e, t, n) > -1
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var n = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = o(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, o) {
				var s = n ? n.call(o, e, t) : void 0;
				if (void 0 !== s) return !!s;
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
					if (!1 === (s = n ? n.call(o, l, m, c) : void 0) || void 0 === s && l !== m) return !1
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (function() {
				let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return s => {
					const r = u(s.target, s.currentTarget),
						a = p(s.target, s.currentTarget);
					r && n && t && (m(s.target, s.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
						const o = t(e, r, a)(n);
						let s;
						if (o && o.actionInfo) {
							const {
								pageType: e,
								...t
							} = o.actionInfo;
							s = t
						}
						return {
							...o,
							actionInfo: Object(i.S)(n, s)
						}
					})), m(s.target, s.currentTarget, l.anchorsAndButtons) && o(s)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(o.useCallback)(d(i, r, n), [i, r, n]);
					return s.a.createElement(e, a({}, c, {
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
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(s.c),
				i = Object(o.a)(s.b),
				a = Object(o.a)(s.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
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
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(x.p),
				O = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					n().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.R)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.l : m.f;
					t(Object(v.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, k = Object(r.a)(x.J), C = e => async (t, n, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
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
					})), (await Object(m.a)(i(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
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
				}, E = (e, t) => async (n, s, r) => {
					let {
						apiContext: i,
						gqlContext: a
					} = r;
					const l = s(),
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
					})), (await Object(m.h)(a(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
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
				}, j = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.k : m.e;
					t(Object(v.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, y = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === s.kc.Snoozed,
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
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, w = (e, t, n) => async (o, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.J.ADMIN,
							isMod: t === s.J.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && o(Object(v.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.c)(c(), e, t),
						f = Object(m.d)(c(), e, !!n),
						x = [h];
					(n || !n && e === b) && x.push(f), (await Promise.all(x)).every(e => e.ok) ? n && o(k({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(v.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(v.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return re
			})), n.d(t, "d", (function() {
				return de
			})), n.d(t, "f", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "c", (function() {
				return he
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
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
				v = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				O = n("./src/redditGQL/types.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const y = {
					[s.wb.Edited]: O.D.Edited,
					[s.wb.Modqueue]: O.D.Mod,
					[s.wb.Reports]: O.D.Reported,
					[s.wb.Spam]: O.D.Removed,
					[s.wb.Unmoderated]: O.D.Unmoderated
				},
				w = {
					comments: O.B.Comment,
					links: O.B.Post,
					chat_comments: O.B.ChatComment
				};

			function S(e) {
				let {
					getState: t,
					queueType: n,
					options: o
				} = e;
				const s = t();
				let r;
				o.only && (r = w[o.only]);
				const i = {};
				o.after && (i[o.sort === b.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const n = Object(h.a)(t) ? Object(v.G)(e, {
						postId: t
					}) : Object(f.b)(e, {
						commentId: t
					});
					if (n) return Object(p.btoa)(`${n.id}|${n.created}`)
				}(s, o.after));
				const a = {};
				o.sort === b.a.OldestFirst ? a.last = 25 : a.first = 25;
				const d = Object(g.a)(s);
				return {
					queueType: y[n],
					moderatedAfter: o.moderatedAfter,
					...a,
					...!!r && {
						itemTypes: r
					},
					...!!o.subreddit && {
						subredditNames: Array.isArray(o.subreddit) ? o.subreddit : [o.subreddit]
					},
					...!!o.profile && {
						subredditIds: [o.profile]
					},
					sort: o.sort === b.a.MostReportedFirst ? O.C.SortReports : O.C.SortDate,
					...i,
					includeModActivitySummaries: d
				}
			}
			var I;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(I || (I = {}));
			const R = e => ({
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
				N = e => {
					let {
						id: t,
						icon: n,
						profile: o,
						snoovatarIcon: s,
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
						profileId: null == o ? void 0 : o.id,
						snoovatarFullBodyAsset: (null == s ? void 0 : s.url) || null,
						username: d
					}
				};

			function M(e) {
				let {
					modQueueItems: t,
					identity: n
				} = e;
				var o, s, r, i, a;
				const d = {
					posts: {},
					comments: {},
					reports: {},
					modActivitySummaries: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (o = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === o ? void 0 : o.pageInfo.hasNextPage) ? null === (s = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === s ? void 0 : s.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {},
					users: {}
				};
				if (!t) return d;
				if (!t.edges) return d;
				const c = null === (r = null == n ? void 0 : n.redditor.moderatedSubredditActivity) || void 0 === r ? void 0 : r.edges.reduce((e, t) => {
					var n;
					if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.moderation)) return e;
					const {
						subreddit: o,
						summary: s
					} = Object(C.a)(t.node);
					return e.summaries[t.node.id] = s, e.subreddits[t.node.id] = o, e
				}, {
					subreddits: {},
					summaries: {}
				});
				d.modActivitySummaries = (null == c ? void 0 : c.summaries) || {};
				const l = null === (a = null === (i = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === i ? void 0 : i.edges) || void 0 === a ? void 0 : a.reduce((e, t) => {
					var n;
					if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.modPermissions)) return e;
					const o = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = R(o), e.subreddits[t.node.id] = Object(j.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return d.moderatingSubreddits = (null == l ? void 0 : l.moderatingSubreddits) || {}, d.subreddits = {
					...null == c ? void 0 : c.subreddits,
					...null == l ? void 0 : l.subreddits
				}, t.edges.forEach(e => {
					var t, n, o, s, r, i, a;
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
					if (d.subreddits[u] = Object(j.a)(m), d.moderatingSubreddits[u] || "Subreddit" !== (null == m ? void 0 : m.__typename) || (d.moderatingSubreddits[u] = R(m.modPermissions)), !d.postFlair[u] && "Subreddit" === m.__typename) {
						const {
							position: e,
							isEnabled: n
						} = (null == m ? void 0 : m.postFlairSettings) || {};
						d.postFlair[u] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: n
							},
							...(null === (t = null == m ? void 0 : m.postFlairTemplates) || void 0 === t ? void 0 : t.reduce((e, t) => {
								let {
									id: n,
									text: o,
									isEditable: s,
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
									text: o || "",
									textEditable: s,
									type: i || x.f.Text,
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
					if (l === I.Comment || l === I.ChatComment) {
						const {
							commentInfo: e
						} = c;
						if (!e) return;
						const t = Object(_.a)(e);
						if (null === (n = e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = N(null === (o = e.moderationInfo) || void 0 === o ? void 0 : o.verdictBy);
							t.username && (d.users[null == t ? void 0 : t.username] = t)
						}
						d.comments[t.id] = t, d.listingOrder.push({
							id: t.id,
							type: "comment"
						}), d.modqueue.push(t.id);
						const {
							authorInfo: r,
							authorFlair: i
						} = e, a = i ? null === (s = Object(k.a)(i)) || void 0 === s ? void 0 : s[0] : null;
						d.authorFlair[u] = {
							...d.authorFlair[u],
							...(null == r ? void 0 : r.name) ? {
								[null == r ? void 0 : r.name]: a
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
						}), d.reports[t.id] = l
					}
					if (l === I.Post) {
						const {
							postInfo: e
						} = c;
						if (null === (r = null == e ? void 0 : e.moderationInfo) || void 0 === r ? void 0 : r.verdictBy) {
							const t = N(null === (i = e.moderationInfo) || void 0 === i ? void 0 : i.verdictBy);
							t.username && (d.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(E.f)(e);
						d.posts[t.id] = t, d.listingOrder.push({
							id: t.id,
							type: "post"
						}), d.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: o
						} = e, s = o ? null === (a = Object(k.a)(o)) || void 0 === a ? void 0 : a[0] : null;
						d.authorFlair[u] = {
							...d.authorFlair[u],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: s
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
						}), d.reports[t.id] = l
					}
				}), d
			}
			var T = n("./src/reddit/models/ModQueue/index.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/modQueue.ts"),
				F = n("./src/reddit/selectors/subreddit.ts"),
				L = n("./src/reddit/selectors/telemetry.ts"),
				D = n("./src/telemetry/index.ts"),
				B = n("./src/lib/initializeClient/installReducer.ts"),
				U = n("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				q = n("./src/reddit/reducers/pages/modHub/index.ts"),
				W = n("./src/reddit/actions/modQueue/constants.ts");
			Object(B.a)({
				pages: {
					modHub: q.a
				}
			}), Object(B.a)({
				features: {
					modActivitySummaries: U.a
				}
			});
			const V = Object(r.a)(W.k),
				Q = Object(r.a)(W.j),
				H = Object(r.a)(W.i),
				G = Object(r.a)(W.h),
				z = Object(r.a)(W.g),
				J = Object(r.a)(W.f),
				K = Object(r.a)(W.e),
				X = Object(r.a)(W.p),
				Z = Object(r.a)(W.o),
				$ = Object(r.a)(W.n),
				Y = Object(r.a)(W.s),
				ee = Object(r.a)(W.r),
				te = Object(r.a)(W.q),
				ne = Object(r.a)(W.y),
				oe = Object(r.a)(W.x),
				se = Object(r.a)(W.w),
				re = (e, t, n) => async (r, i, a) => {
					let {
						apiContext: m,
						gqlContext: u
					} = a;
					var p;
					let b, h, f;
					switch (t) {
						case s.wb.Edited:
							b = z, h = K, f = J;
							break;
						case s.wb.Modqueue:
							b = Q, h = G, f = H;
							break;
						case s.wb.Reports:
							b = X, h = $, f = Z;
							break;
						case s.wb.Spam:
							b = Y, h = te, f = ee;
							break;
						case s.wb.Unmoderated:
							b = ne, h = se, f = oe;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (r(b()), n.profile) {
						const e = null === (p = (await Object(l.b)(m(), n.profile)).body[n.profile]) || void 0 === p ? void 0 : p.profileId;
						n.profile = e
					}
					const v = S({
							getState: i,
							queueType: t,
							options: n
						}),
						x = await Object(c.b)(u(), v);
					if (!x.ok) return r(h(x.error)), void r(Object(d.f)({
						kind: A.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: g,
						...O
					} = M(x.body.data);
					Object(P.b)(i()) && r(V(g)), r(f({
						listingKey: e,
						page: `${n.page||T.b}`,
						response: O
					}))
				}, ie = Object(r.a)(W.m), ae = Object(r.a)(W.b), de = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const i = n(),
						a = i.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						l = i.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = i.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = i.platform.currentPage.urlParams;
					if (e && l || m || !a) return;
					const p = S({
							getState: n,
							queueType: u,
							options: {
								moderatedAfter: a
							}
						}),
						b = await Object(c.b)(r(), p);
					if (!b.ok) return void t(Object(d.f)({
						kind: A.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const h = M(b.body.data);
					t(ie(h)), h.moderatedAfter ? t(de()) : t(ae())
				}, ce = Object(r.a)(W.v), le = Object(r.a)(W.u), me = Object(r.a)(W.t), ue = (e, t, n) => async (s, r, l) => {
					let {
						apiContext: p
					} = l;
					s(Object(i.c)());
					const b = r(),
						f = Object(P.i)(b),
						v = b.user.account && b.user.account.displayText;
					Object(m.d)(m.a.ModQueue);
					const x = Object(m.c)(m.a.ModQueue);
					Object(D.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...L.o(b),
						actionInfo: L.d(b, {
							count: f.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: L.bb(b),
						correlationId: x
					});
					for (let t = 0; t < f.length; t++) {
						const n = f[t];
						let o = e;
						[T.a.Approve, T.a.Remove, T.a.Spam].includes(e) && (Object(h.a)(n) ? o += "_link" : o += "_comment"), Object(D.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...L.o(b),
							actionInfo: L.d(b, {
								count: f.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: L.h({
								state: b,
								commentId: n
							}),
							post: L.K(b, n),
							profile: L.V(b, n),
							screen: L.bb(b),
							subreddit: L.mb(b, n),
							correlationId: x
						})
					}
					Object(m.b)(m.a.ModQueue);
					const g = {
						ids: f
					};
					t && (g.text = Object(u.g)(t) || "", g.flairTemplateId = ""), n && (g.cssClass = n, g.flairTemplateId = n);
					const O = await Object(c.a)(p(), e, g);
					if (O.ok) {
						s(Object(i.b)({
							...O.body,
							operation: e,
							ids: f,
							username: v,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case T.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case T.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case T.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case T.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case T.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case T.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case T.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case T.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case T.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case T.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case T.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case T.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case T.a.Unspoiler:
								case T.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== T.a.Approve && e !== T.a.Flair) {
							let t, r;
							const l = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = l && Object(F.I)(b, l);
							e === T.a.Remove && m && f.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(a.fetchReasonsAndOpenModal)(m, f));
							const u = Object(d.e)(n, A.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: s
								} = n;
								e(ce());
								const r = t(),
									a = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									l = r.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									m = r.user.account && r.user.account.displayText;
								e(Object(i.c)());
								const u = await Object(c.a)(s(), a, {
									ids: l
								});
								u.ok ? e(le({
									...u.body,
									operation: a,
									ids: l,
									username: m
								})) : (e(me(u.error)), e(Object(d.f)({
									kind: A.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							s(Object(d.f)(u))
						} else {
							const e = Object(d.e)(n, A.b.SuccessMod);
							s(Object(d.f)(e))
						}
					} else {
						s(Object(i.a)(O.error));
						const e = Object(d.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), A.b.Error);
						s(Object(d.f)(e))
					}
				}, pe = Object(r.a)(W.a), be = Object(r.a)(W.c), he = Object(r.a)(W.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return $
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
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
				return ve
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return ke
			})), n.d(t, "submitRemovalReason", (function() {
				return Ce
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
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
			var v = function() {
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
				x = Object(r.c)({
					error: f,
					pending: v
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
							data: o
						} = n;
						return {
							...e,
							...o
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
							[n]: o,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const _ = {};
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: n,
							response: o
						} = t.payload, {
							order: s
						} = o;
						return {
							...e,
							[n]: s
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: o
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], o.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: o
						} = t.payload, s = [...e[n]].filter(e => e !== o);
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			var C = function() {
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
				E = Object(r.c)({
					api: x,
					models: O,
					reasonOrder: k,
					removedItemIds: C
				}),
				j = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				w = n("./src/lib/makeCommentsPageKey/index.ts"),
				S = n("./src/lib/makeDraftKey/index.ts"),
				I = n("./src/reddit/actions/bulkActions/index.ts"),
				R = n("./src/reddit/actions/comment/index.ts"),
				N = n("./src/reddit/actions/comment/authoring.ts"),
				M = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				A = n("./src/reddit/actions/post.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/constants/modals.ts"),
				L = n("./src/lib/makeApiRequest/index.ts"),
				D = n("./src/lib/omitHeaders/index.ts"),
				B = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const q = (e, t) => Object(L.a)(Object(D.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: j.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, n) => Object(L.a)(Object(D.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: j.ob.POST,
					type: "json",
					data: t
				});
			var V = n("./src/reddit/helpers/isPost.ts"),
				Q = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				z = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RemovalReason/index.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				X = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: E
				}
			});
			const $ = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(y.a)(i),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = n().subreddits.models[e].name;
					t($());
					const i = await ((e, t) => Object(L.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: j.ob.GET
					}))(s(), r);
					i.ok ? t(Y({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, ne = Object(y.a)(a), oe = Object(y.a)(d), se = Object(y.a)(c), re = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: j.ob.POST,
						data: n
					}))(i(), a, t);
					if (d.ok) {
						const {
							id: s
						} = d.body, r = {
							...t,
							id: s
						};
						n(oe({
							subredditId: e,
							reason: r
						})), n(Object(P.f)({
							kind: K.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(d.error))
				}, ie = Object(y.a)(l), ae = Object(y.a)(m), de = Object(y.a)(u), ce = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s().subreddits.models[e].name;
					n(ie());
					const d = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: j.ob.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), a, t);
					d.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(P.f)({
						kind: K.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, le = Object(y.a)(p), me = Object(y.a)(b), ue = Object(y.a)(h), pe = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s().subreddits.models[e].name;
					n(le());
					const d = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: j.ob.DELETE
					}))(i(), a, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(P.f)({
						kind: K.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(F.a.ADD_REMOVAL_REASON))
				}, fe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ke = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, n, o, s, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? J.e.Post : J.e.Comment,
						b = p === J.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === J.e.Post ? A.R : R.j;
					if (!b || !m) return !1;
					i(fe()), i(h({
						[u]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const f = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						v = await q(c(), f);
					if (v.ok) {
						if (i(ve()), t) {
							i(ge());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: o
								},
								a = await W(c(), Object(J.h)(s, p), p);
							if (a.ok) {
								if ([J.f.Public, J.f.PublicAsSubreddit].includes(o)) {
									if (i(_e()), a.body) {
										const e = Object(Q.a)(a.body),
											t = {
												comment: e,
												parentId: u
											},
											n = Object(Z.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let s = n && o && Object(H.a)(o, l, l.posts.models[e.postId]);
										if (s || (s = Object(w.a)(e.postId, null, {
												sort: j.x,
												hasSortParam: !0
											})), p === J.e.Post) {
											const n = Object(S.a)(z.c.replyToPost, u);
											i(Object(N.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											}));
											const o = l.postStickiedComments.data[u];
											i(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && i(Object(R.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (p === J.e.Comment) {
											const e = Object(S.a)(z.c.replyToComment, b.id),
												n = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: s
												});
											i(Object(N.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else i(Oe());
								return !0
							}
							return i(ke(a.error)), !1
						}
					} else i(xe(v.error)), i(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, n, s, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(fe());
					const u = Object(P.f)({
							kind: K.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await q(c(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await W(c(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							r.ok ? (i(Oe()), i(u)) : i(ke(r.error))
						} else i(u)
					} else i(xe(b.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/loadableAction/index.ts");
			const s = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "b", (function() {
				return T
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/MutedSubreddits.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/subreddit/constants.ts"),
				h = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const v = e => Object(r.f)({
					id: e,
					kind: p.b.Error,
					duration: r.a,
					text: o.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(r.f)({
					kind: p.b.SuccessCommunityGreen,
					text: o.fbt._("Muted r/{subreddit name}", [o.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: o.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				g = (e, t) => Object(r.f)({
					kind: p.b.SuccessCommunityGreen,
					text: o.fbt._("Unmuted r/{subreddit name}", [o.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: o.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var O = n("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(s.a)(b.i),
				k = Object(s.a)(b.h),
				C = Object(s.a)(b.G),
				E = (Object(s.a)(b.j), Object(s.a)(b.F), Object(s.a)(b.g)),
				j = Object(s.a)(b.f),
				y = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: o
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await m(i(), t)).ok) o && o(), x(n, w({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(v(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: o
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await u(i(), t)).ok) o && o(), g(n, y({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(v(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: o
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await m(i(), t)).ok) o && o(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(n, I({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(v(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: o
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						if ((await u(i(), t)).ok) o && o(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(n, S({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(v(`error-muting-${t}`))
						}
					}
				},
				R = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: d
						} = a;
						const l = Object(h.a)(n);
						(await ((e, t, n) => Object(i.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(C({
							subredditId: t,
							notificationLevel: n
						})), e(Object(r.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(r.f)({
							kind: p.b.Error,
							text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const a = await (e => Object(i.a)(e, d))(s());
					if (a.ok && a.body) {
						const {
							data: t
						} = a.body;
						if (t) {
							const n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
							e(_({
								nodes: n
							}))
						} else e(k()), e(Object(r.f)({
							duration: r.a,
							kind: p.b.Error,
							text: o.fbt._("Failed to get muted subreddits, please try again.", null, {
								hk: "2dCj3Q"
							})
						}))
					}
				}, M = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, o, s) => {
						let {
							gqlContext: r
						} = s;
						const i = await u(r(), t),
							{
								data: a
							} = i.body;
						if (i.ok && a.deleteSubredditMuteSettings.ok) e(E(t)), e(g(n));
						else {
							e(v(`error-unmuting-${t}`))
						}
					}
				}, T = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const a = n(),
							d = Object(f.t)(a).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (d) {
							const t = d.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(r.f)({
								id: n,
								kind: p.b.Error,
								duration: r.a,
								text: o.fbt._("Sorry, r/{subreddit name} is already muted.", [o.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const c = await Object(O.a)(i(), t, !0),
							{
								data: l
							} = c.body,
							u = l && l.subreddit;
						if (!c.ok || null === u) {
							return e(((e, t) => Object(r.f)({
								id: e,
								kind: p.b.Error,
								duration: r.a,
								text: o.fbt._("Sorry, r/{subreddit name} isn't a community.", [o.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const b = u.id,
							h = await m(i(), b),
							{
								data: g
							} = h.body;
						if (h.ok && g.updateSubredditMuteSettings.ok) e(j([u])), e(x(u.name));
						else {
							e(v(`error-muting-${b}`))
						}
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
				return v
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts");
			const u = Object(s.a)(a.z),
				p = Object(s.a)(a.y),
				b = Object(s.a)(a.x),
				h = e => {
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
							return o.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return o.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return o.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const v = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: s,
					undoCallback: a
				} = e;
				return async (e, l, v) => {
					let {
						gqlContext: x
					} = v;
					var g, O, _;
					e(p());
					const k = h(n),
						C = await Object(c.b)(x(), t, k);
					if ((null === (O = null === (g = C.error) || void 0 === g ? void 0 : g.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(C.body) && (null === (_ = C.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					C.ok && (e(Object(r.c)({
						subredditId: t,
						notificationLevel: n
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), s && s(), e(a ? Object(d.f)(Object(d.e)(f(n), m.b.Undo, o.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(d.f)(Object(d.e)(f(n), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = n.n(r);
			const a = o.a.wrapped(s.c, "RestrictedButton", i.a);
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				v = n("./src/reddit/selectors/moderatingComments.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				C = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				w = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = n.n(w);
			const I = Object(h.u)(),
				R = e => `Distinguish--Dropdown--${e}`,
				N = Object(a.c)({
					currentUser: O.l,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(v.a)(e, {
							commentId: n.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(g.b)(R(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(x.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.U
				}),
				M = Object(i.b)(N, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(m.a)(n.id)),
						onDistinguishComment: (t, o) => e(Object(m.b)(n.id, t, o)),
						onLockComment: () => e(Object(m.c)(n.id)),
						onRemoveComment: () => e(Object(m.e)(n.id, !1)),
						onSpamComment: () => e(Object(m.e)(n.id, !0)),
						onShowComment: () => e(Object(m.d)(n.id)),
						onToggleDistinguishDropdown: () => e(Object(u.h)({
							tooltipId: R(n.id)
						}))
					}
				});
			t.a = I(M(l.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: s,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: b,
					onLockComment: h,
					onRemoveComment: v,
					onShowComment: x,
					onSpamComment: g,
					onToggleDistinguishDropdown: O,
					sendEvent: w,
					pageLayer: I,
					...R
				} = e;
				const N = Object(p.b)(n),
					M = n.isApproved && N,
					T = !n.isRemoved || n.bannedBy === c.m,
					A = a,
					P = e => w(Object(f.b)(e, n.id)),
					F = "chat_comments" === (null == I ? void 0 : I.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && r.a.createElement(y.a, {
					text: M ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), F && w(Object(f.a)("approve", n.id)), P("approve")
					}
				}, r.a.createElement(_.a, {
					className: S.a.icon
				})), T && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: n.bannedBy === c.m ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						v(), F && w(Object(f.a)("remove", n.id)), n.bannedBy === c.m ? P("confirm_remove") : P("remove")
					}
				}, r.a.createElement(C.a, {
					className: S.a.icon
				})), r.a.createElement(y.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), P("spam")
					}
				}, r.a.createElement(E.a, {
					className: S.a.icon
				}))), r.a.createElement(y.a, {
					text: n.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), P(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(k.a, {
					className: S.a.icon
				})), A && r.a.createElement(y.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(j.a, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					comment: s,
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
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: s.author,
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
				}, s.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				O = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				C = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				S = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				R = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(R);
			const M = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: i,
					isEmbeddedLiveChat: a,
					isStrong: c,
					onClick: l,
					renderedInOverlay: m
				} = e;
				const u = Object(j.f)(o),
					p = r.a.createElement(S.b, {
						ignore: u || !!o.distinguishType && o.distinguishType !== w.J.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, r.a.createElement(b, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(j.f)(o),
						isCommentAuthorBlocked: Object(j.g)(o),
						isLivestreaming: i,
						isEmbeddedLiveChat: a,
						isStrong: c,
						onClick: l
					}));
				return u || a ? p : r.a.createElement(I.b, {
					className: Object(d.a)(N.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(j.g)(o),
					postOrComment: o,
					tooltipType: m ? O.f.Lightbox : void 0
				}, p)
			};
			var T = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const F = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				L = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var D = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(D);
			const U = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(A.h)({
						tooltipId: l
					})),
					l = F("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(B.a.cakedayIcon, t),
					src: `${T.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(P.c, {
					tooltipId: l,
					text: m
				}))
			};
			var q = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				Q = n("./src/reddit/components/HumanDate/index.tsx"),
				H = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(i.d)(), m = F("CommentTopMeta--Created--", n.id, d), u = () => l(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(q.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == s || s(e), z(l, n.id), c && (e.preventDefault(), l(Object(V.Y)(Object(H.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(Q.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(P.c, {
						tooltipId: m
					}, r.a.createElement(Q.b, {
						seconds: n.created
					})))
				},
				z = (e, t) => {
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
			var K = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(K);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = () => r.a.createElement(_.a, {
				className: X.a.crowdControlText
			}, Z._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ee = n.n(Y);
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
			var oe = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
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
					ignoreLock: s,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					l = Object(i.e)(me.b),
					m = e => () => c(Object(A.f)({
						tooltipId: e
					})),
					u = () => c(Object(A.i)()),
					p = e => F(e, t.id, a),
					b = p("CommentTopMeta--Approve--"),
					h = p("CommentTopMeta--Remove--"),
					f = p("CommentTopMeta--Report--"),
					v = p("CommentTopMeta--Spam--"),
					x = m(h);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: pe.a.approveIcon,
					desc: Object(se.a)(t),
					id: b,
					onMouseEnter: m(b),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: b,
					text: Object(se.a)(t)
				})), Object(oe.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					desc: Object(se.b)(t),
					id: h,
					onMouseEnter: x,
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: h,
					text: Object(se.b)(t)
				})), Object(oe.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(oe.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onMouseEnter: x,
					onMouseLeave: u
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && r.a.createElement(ae.a, {
					className: pe.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: pe.a.spamIcon,
					desc: Object(se.d)(t),
					id: v,
					onMouseEnter: m(v),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: v,
					text: Object(se.d)(t)
				})), Object(re.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: pe.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: f,
					onMouseEnter: m(f),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: f,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && d && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: pe.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var he, fe = n("./src/lib/colors/constants.ts"),
				ve = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(xe);
			const Oe = {
					[he.Admin]: {
						color: fe.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: fe.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => L(e.subredditDisplayText)
					},
					[he.ModTeam]: {
						color: fe.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => L(e.subredditDisplayText)
					},
					[he.Op]: {
						color: fe.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: fe.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
						color: fe.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				_e = e => {
					const t = Object(i.d)(),
						n = function(e) {
							if (e.isAdmin) return he.Admin;
							const t = e.isMod || e.distinguishType === w.J.MODERATOR;
							return t && e.author && Object(ve.a)(e.author) ? he.ModTeam : t ? he.Mod : e.isOp ? he.Op : e.distinguishType === w.J.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: a,
						tooltipTemplate: c
					} = Oe[n], l = a(), m = F(o, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(ge.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), (n === he.Mod || n === he.ModTeam) && r.a.createElement(ke, null)), r.a.createElement(P.c, {
						tooltipId: m,
						text: u
					}))
				},
				ke = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${T.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ee = n.n(Ce);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = () => r.a.createElement(_.a, {
				className: Ee.a.stickiedText
			}, je._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Se = n.n(we);
			const Ie = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: w,
					permalink: S,
					renderContractorBadge: I,
					renderedInOverlay: R,
					subredditDisplayText: N,
					isAdmin: T
				} = e, A = Object(E.a)(), P = a.subredditId, F = Object(i.e)(e => Object(y.n)(e, {
					subredditId: P
				}));
				if (a.isDeleted && !T) return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, r.a.createElement("span", {
					className: Se.a.metaText
				}, a.deletedBy === j.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Se.a.metaText,
					comment: a,
					compact: !0,
					permalink: S,
					renderedInOverlay: R
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(Se.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Se.a.authorLine
				}, !Object(j.f)(a) && r.a.createElement(f.b, {
					className: Se.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: Se.a.baselineItem
				}, r.a.createElement(M, {
					authorClassName: Se.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: R
				})), !Object(j.f)(a) && u && r.a.createElement(g.a, {
					postOrComment: a,
					className: Se.a.LastAuthorModNoteIcon
				}), s && r.a.createElement($, null), r.a.createElement(_e, {
					className: Se.a.role,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: I,
					renderedInOverlay: R
				}), a.isAuthorCakeday ? r.a.createElement(U, {
					className: Se.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: R
				}) : !Object(j.f)(a) && F && r.a.createElement(h.a, {
					className: Se.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						A(Object(C.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(x.a, {
					className: Se.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), r.a.createElement(_.c, {
					className: Se.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Se.a.metaText,
					comment: a,
					compact: !0,
					onClick: w,
					permalink: S,
					renderedInOverlay: R
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
					renderedInOverlay: R,
					isAdmin: T
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: R ? O.f.Lightbox : void 0
				})), c && !Object(k.o)(c) && r.a.createElement("span", {
					className: Se.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: Se.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Re = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/selectors/comments.ts"),
				Ae = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Fe = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/selectors/userFlair.ts"),
				De = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Be = n.n(De);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const qe = c.a.wrapped(v.b, "RightPositionedAuthorFlair", Be.a),
				We = c.a.span("DeletedText", Be.a),
				Ve = c.a.wrapped(_.a, "MetaSeparator", Be.a),
				Qe = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Ne.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Fe.N)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Le.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Te.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ae.b,
					isBlockingInterstitialV2Enabled: Ae.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Pe.i)(e, n.subredditId)
					}
				}));
			t.a = Qe(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					hideAwards: h = !1,
					ignoreFlairPosition: g,
					ignoreLock: k,
					isAdmin: C,
					isBlockingInterstitialEnabled: E,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					isEmbeddedLiveChat: I,
					isPostComment: R,
					onCommentAuthorClick: N,
					onCommentTimestampClick: T,
					renderContractorBadge: A,
					renderedInOverlay: P,
					subredditDisplayText: F,
					userHasNft: L
				} = e, D = r.a.createElement(r.a.Fragment, null, r.a.createElement(Re.b, {
					commentId: i.id
				}), r.a.createElement(Re.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (R) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
					className: Object(d.a)(n, {
						[Be.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: u || null,
					ignoreLock: k,
					isAdmin: C,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					onCommentAuthorClick: N,
					onCommentTimestampClick: T,
					permalink: a,
					renderContractorBadge: !!A,
					renderedInOverlay: P,
					subredditDisplayText: F
				}), D);
				if (i.isDeleted) return r.a.createElement(He, Ue({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(Ge, Ue({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				const B = !g && p === Me.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o,
						[Be.a.hasBadges]: b,
						[Be.a.liveStreaming]: S
					}),
					"data-testid": "comment-top-meta"
				}, u && B && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(j.f)(i) && r.a.createElement(f.b, {
					className: Be.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(M, {
					authorClassName: L ? Be.a.NftAuthor : void 0,
					collapsed: o,
					comment: i,
					isLivestreaming: S,
					isEmbeddedLiveChat: I,
					isStrong: !!m,
					onClick: N,
					renderedInOverlay: P
				}), s && r.a.createElement($, null), s && r.a.createElement(_.c, {
					className: Be.a.metaText,
					key: "crowdControlSeparator"
				}), u && !B && r.a.createElement(qe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(x.a, {
					className: Be.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(_.c, {
						className: Be.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), D, r.a.createElement(_e, {
					className: Be.a.authorRole,
					comment: i,
					subredditDisplayText: F,
					renderContractorBadge: !!A,
					renderedInOverlay: P
				}), !m && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !R && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: Be.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(_.c, {
					className: Be.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Be.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: P,
					isBlockingInterstitialEnabled: E || y
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Be.a.separator
				}), r.a.createElement(ye, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Be.a.separator
				}), r.a.createElement(ne, {
					editedAt: i.editedAt
				}))), r.a.createElement(be, {
					comment: i,
					ignoreLock: k,
					renderedInOverlay: P
				}), !h && r.a.createElement(l.a, {
					thing: i,
					tooltipType: P ? O.f.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(We, null, i.deletedBy === j.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && ze({
						childrenInfo: t
					}))
				},
				Ge = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t),
						collapsed: i
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
						permalink: a,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: d || c
					}), ze({
						childrenInfo: o
					}))
				},
				ze = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ve, {
						className: Be.a.metaText
					}, t ? o.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : o.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [o.fbt._plural(n, "number")], {
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
				return T
			})), n.d(t, "b", (function() {
				return F
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				v = n("./src/reddit/components/ModModeReports/index.tsx"),
				x = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				k = n("./src/reddit/selectors/comments.ts"),
				C = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/modQueue.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				w = n.n(y),
				S = n("./src/lib/lessComponent.tsx");
			const I = S.a.div("VoteSpacer", w.a),
				R = S.a.div("ContentWrapper", w.a),
				N = S.a.div("CommentContentWrapper", w.a),
				M = S.a.div("CommentBody", w.a),
				T = S.a.div("ParentPostTitle", w.a),
				A = S.a.div("CommentParentWrapper", w.a),
				P = Object(i.c)({
					comment: (e, t) => Object(C.b)(e, t),
					commentPermalink: k.m,
					flair: k.e,
					subreddit: j.N,
					isModQueueDisplayEnabled: E.b
				}),
				F = Object(r.b)(P, (e, t) => {
					let {
						commentId: n,
						trackClick: o
					} = t;
					return {
						onIgnoreReports: () => e(Object(c.g)(n)),
						onVoteClick: t => {
							const [s, r] = t === _.a.upvoted ? [Object(d.s)(n), "upvote_comment"] : [Object(d.k)(n), "downvote_comment"];
							o(r)(), e(s)
						}
					}
				}),
				L = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = F(S.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: o,
					flair: r,
					hasReports: i,
					isCheckboxSelected: a = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: _,
					subreddit: k,
					showBulkActionCheckbox: C,
					toggleCheckbox: E
				} = e, j = Object(f.a)(n);
				return s.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: o
				}, s.a.createElement(x.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: C,
					isCheckboxSelected: a,
					toggleCheckbox: E
				}), s.a.createElement(I, null, s.a.createElement(R, null, s.a.createElement(A, null, n.postTitle && s.a.createElement(T, null, n.postTitle), n.postAuthor && s.a.createElement(b.a, {
					comment: n
				})), s.a.createElement(N, null, s.a.createElement(u.a, {
					comment: n
				}, s.a.createElement(M, null, s.a.createElement(g.b, {
					content: Object(O.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: L(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				})), s.a.createElement(p.a, {
					comment: n,
					flair: r,
					subredditName: k ? k.displayText : null
				}), j && s.a.createElement(h.a, {
					thing: n
				}), i && s.a.createElement(v.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && s.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", w.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...o
					} = this.props, r = o => e(() => o.metaKey || o.ctrlKey || 1 === o.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : n(Object(i.a)(t, {
						context: 3
					})))(o);
					return s.a.createElement("div", {
						className: o.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, o.children)
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = n.n(i);
			const d = r.a.div("DashWrapper", a.a);
			t.a = e => null === e.comment.parentId ? s.a.createElement(d, null, e.children) : s.a.createElement(d, null, s.a.createElement(d, null, e.children))
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					comment: s,
					flair: i,
					subredditOrProfile: a
				} = e;
				return r.a.createElement(u, {
					className: n
				}, a && r.a.createElement(b, null, a && r.a.createElement(m.b, {
					className: c.a.SubredditIcon,
					subredditOrProfile: a
				}), a && r.a.createElement(h, null, a.displayText)), t && !a && r.a.createElement(b, null, t && r.a.createElement(h, null, t)), r.a.createElement(p, null, r.a.createElement(h, null, `${o.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(f, {
					collapsedBecauseCrowdControl: s.collapsedBecauseCrowdControl,
					collapsed: !1,
					comment: s,
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(r.a, "AuthorLink", l.a), h = u.a.wrapped(d.a, "Inline", l.a), f = u.a.wrapped(d.a, "SubredditWrapper", l.a), v = u.a.div("TextContainer", l.a), x = u.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => s.a.createElement(h, null, e.subredditOrProfile && s.a.createElement(f, null, e.subredditOrProfile && s.a.createElement(x, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && s.a.createElement(v, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && s.a.createElement(i.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, s.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.H
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
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				x = e => {
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
						style: o,
						caretPosition: s,
						caretColor: i,
						onClick: a,
						hideCaret: c
					} = e;
					return r.a.createElement("div", {
						onClick: a,
						className: Object(d.a)(n, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === s,
							[h.a.caretOnLeft]: "left" === s,
							[h.a.caretOnRight]: "right" === s,
							[h.a.caretOnBottom]: "bottom" === s,
							[h.a.hideCaret]: c
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[s] ? i[s] : Object(u.a)(e).body
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
				_ = Object(m.a)(g, [o.a.Click, o.a.Keydown]),
				k = Object(i.b)(O);
			class C extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const o = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									s = o.left > t.width;
									break;
								case "right":
									s = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = o.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(_, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = k(C)
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				return Object(o.useEffect)(() => {
					n && l(Object(a.c)())
				}, [n, l]), n ? s.a.createElement(c.a, {
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
				}, s.a.createElement("div", {
					className: m.a.freeAwardContainer
				}, u._("Tap to give your {award name} Award", [u._param("award name", n.name)], {
					hk: "2EMqbP"
				}))) : null
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
				return s
			}));
			var o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const s = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(o.a)({
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
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(o.a)({
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
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				v = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(v);
			const g = c.a.wrapped(u.a, "_Dropdown", x.a),
				O = Object(m.a)(g),
				_ = c.a.button("MenuButton", x.a),
				k = c.a.wrapped(p.b, "DropdownRow", x.a),
				C = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				E = Object(i.b)(C, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => r.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
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
				return E
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				x = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				C = n.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				j = Object(d.c)({
					flairData: g.d,
					subreddit: O.Y
				});
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(v.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(v.b)()), this.setSelectedFlair(null)
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
						flairData: o,
						subreddit: r
					} = e, a = r.displayText, {
						templates: d,
						templateIds: c
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: r.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: C.a.buttonsRow
					}, i.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.o, {
						className: C.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const w = Object(a.b)(j, (e, t) => ({
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: v,
					isVoteCountAnimation: x,
					postId: g,
					shouldShowUpvoteRatioOnHover: O
				} = e, _ = `upvote-button-${t.id}${v?"-overlay":""}`;
				return s.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, o && s.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), s.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: _,
					isVoteCountAnimation: x,
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
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: s.a.overlayReportFlow
				},
				i = Object(o.a)({
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
				a = Object(o.a)({
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = O(e);
					return Object(x.f)(t)
				},
				C = e => {
					const t = _(e);
					return Object(x.f)(t)
				};
			var E = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.u)(), S = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.n)(e, t) || void 0,
						o = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(v.eb)(e);
					return o || s
				},
				nigtmode: v.eb,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? j.a.widgetContentOnly : j.a.widgetContent, f = !o && this.props.styles, v = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: o,
							[j.a.clickable]: !!d,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: d,
						style: v
					}, m && s.a.createElement("div", {
						className: Object(a.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: i,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, s.a.createElement("div", {
						className: Object(a.a)(j.a.widgetTitle, p)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), s.a.createElement("div", {
						className: Object(a.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(u.r, {
						className: j.a.seeMore,
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						useUpvotes: s,
						...i
					} = e;
					const d = Object(a.b)(n),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(n, "number", d)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, m)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === o.b.NO_ADS);
				return !n && !s
			}
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = e => {
				const {
					moderation: t,
					...n
				} = e, {
					lastModActionAt: s,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, i = [], a = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: n
					} = e.node;
					if (!n) return;
					const o = null == n ? void 0 : n.id;
					o && (i.push(o), a[o] || (a[o] = {
						info: {},
						lastModAction: {}
					}), a[o].info = n, a[o].lastModAction = {
						...t
					})
				});
				const d = {
					lastModActionAt: s,
					activeMods: i
				};
				return {
					subreddit: Object(o.a)(n),
					summary: {
						sub: d,
						mods: a
					}
				}
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
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(s);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(o.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(s.e)(a, {
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
							title: d ? Object(o.g)(d) : void 0,
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
			var o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(s.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(o.d)(o.a.GoldPayment, !1),
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
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			}));
			var o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const r = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				i = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				a = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				d = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				c = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				l = () => e => ({
					source: s.f.SubredditIdBanner,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				m = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
				}),
				u = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: o.rb(e).id
					},
					...o.o(e)
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
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(i.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: i.K(n, e),
					subreddit: i.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...i.o(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: o.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => t(!0), []), e
			}
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement("i", c({
					className: Object(r.a)(Object(i.b)("comment", n.isFilled), d.a.commentIcon, t)
				}, n))
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("i", c({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("path", {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const d = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function s(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
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
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 50,
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
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
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
			n.r(t), n.d(t, "select", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/realtime/GQLSubscription/async.tsx"),
				b = n("./src/reddit/actions/modQueue/realtime.ts"),
				h = n("./src/reddit/components/ModQueueList/index.tsx"),
				f = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/postLayout.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/layout/page/Listing/index.tsx"),
				_ = n("./src/reddit/models/ModQueue/index.ts"),
				k = n("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				C = n("./src/reddit/selectors/moderatorPermissions.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/lib/classNames/index.ts"),
				w = n("./node_modules/lodash/omit.js"),
				S = n.n(w),
				I = n("./src/lib/addQueryParams/index.ts"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				N = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				M = n.n(N);
			const T = Object(l.c)({
				currentPage: e => e.platform.currentPage
			});
			var A = Object(c.b)(T)(e => d.a.createElement(R.default, {
				className: Object(y.a)(M.a.navChild, {
					[M.a.mIsActive]: e.isActive
				}),
				to: Object(I.a)(`/r/mod/about/${e.pathName}`, S()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var P = e => d.a.createElement("div", {
					className: M.a.navContainer
				}, d.a.createElement("div", {
					className: Object(y.a)(M.a.innerContainer, {
						[M.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, d.a.createElement("h1", {
					className: M.a.title
				}, j.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), d.a.createElement(A, {
					title: j.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), d.a.createElement(A, {
					title: j.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), d.a.createElement(A, {
					title: j.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), d.a.createElement(A, {
					title: j.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), d.a.createElement(A, {
					title: j.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				F = n("./src/reddit/components/ModQueueActivitySummaryCards/async.ts"),
				L = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				D = n("./src/config.ts"),
				B = n("./src/lib/lessComponent.tsx"),
				U = n("./src/lib/opener/index.ts"),
				q = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				W = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				V = n.n(W);
			const Q = B.a.a("ExternalLink", V.a),
				H = B.a.wrapped(R.default, "InternalLink", V.a);
			var G = () => d.a.createElement(q.a, {
				title: j.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, d.a.createElement(Q, {
				href: D.a.redditModHelpUrl,
				rel: U.c,
				target: U.d.BLANK
			}, j.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), d.a.createElement(Q, {
				href: `${D.a.redditUrl}/help/healthycommunities/`,
				rel: U.c,
				target: U.d.BLANK
			}, j.fbt._("Moderator code of conduct", null, {
				hk: "259o41"
			})), d.a.createElement(H, {
				to: "/r/modsupport",
				rel: U.c,
				target: U.d.BLANK
			}, "r/modsupport"), d.a.createElement(Q, {
				href: `${D.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: U.c,
				target: U.d.BLANK
			}, j.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var z = e => d.a.createElement("div", {
				className: e.isRealtimeMQUpdatesExperimentEnabled ? void 0 : M.a.sidebar
			}, e.isRealtimeMQUpdatesExperimentEnabled && d.a.createElement(F.b, null), e.subredditOrProfileUrl && d.a.createElement(L.a, null, d.a.createElement(q.a, {
				title: j.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, d.a.createElement(Q, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, j.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), d.a.createElement(Q, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, j.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), d.a.createElement(L.a, null, d.a.createElement(G, null)));
			const J = Object(g.u)(),
				K = Object(l.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return s()([...Object(m.a)(n.search)])
					}
				}),
				X = Object(l.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return s()([...Object(m.a)(n.search)])
					},
					layout: g.S,
					isModerator: e => Object(C.o)(e, {}).length > 0,
					isRealtimeMQUpdatesExperimentEnabled: k.a,
					queryVariables: Object(u.a)(e => {
						var t;
						return Object.keys((null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries) || {}).map(e => ({
							input: {
								channel: {
									teamOwner: "MOD",
									subredditID: e,
									category: "MOD_UPDATE"
								}
							}
						}))
					})
				}),
				Z = Object(l.a)(K, g.S, C.o, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.pageName
				}, k.a, e => {
					var t;
					return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
				}, (e, t, n, o, s, r) => {
					let {
						queryParams: i
					} = e;
					const a = i.subreddit,
						d = i.profile,
						c = i.only,
						l = i.sort,
						m = `${i.page||_.b}`,
						u = i.after || "",
						p = n.length > 0,
						b = Object.keys(r || {}),
						h = b.map(e => ({
							input: {
								channel: {
									teamOwner: "MOD",
									subredditID: e,
									category: "MOD_UPDATE"
								}
							}
						}));
					return {
						after: u,
						layout: t,
						isModerator: p,
						moderatingSubredditIds: b,
						page: m,
						pageName: o,
						postTypeFilter: c,
						postSort: l,
						profileName: d,
						queryVariables: h,
						subredditName: a,
						isRealtimeMQUpdatesExperimentEnabled: s
					}
				}),
				$ = Object(c.b)(X, e => ({
					handleRealtimeUpdates: i()(t => e(Object(b.a)(t.subscribe.data.subredditID)), 1e3)
				}));
			class Y extends d.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(E.bb)(t)
					}))
				}
				render() {
					const {
						className: e,
						isModerator: t,
						layout: n,
						isRealtimeMQUpdatesExperimentEnabled: o,
						queryParams: s,
						queryVariables: r
					} = this.props, i = s.subreddit, a = s.profile, c = s.only, l = s.sort, m = `${s.page||_.b}`, u = s.after || "", b = this.props.match.params.pageName, v = i && `r/${i}` || a && `user/${a}`, g = "unmoderated" !== b, k = g ? c : void 0;
					return d.a.createElement("div", null, t && d.a.createElement(O.a, {
						className: e,
						fitPageToContent: !0,
						disableFullscreen: n === x.g.Large,
						navBar: d.a.createElement(P, {
							disableFullscreen: n === x.g.Large,
							pageName: b
						}),
						content: d.a.Children.toArray([d.a.createElement(f.a, {
							key: a,
							postTypeFilter: k,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: g,
							postSort: l,
							subredditName: i
						}), d.a.createElement(h.a, {
							after: u,
							key: `${a}-${i}`,
							layout: n,
							page: m,
							pageName: b,
							postSort: l,
							postTypeFilter: k,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							subredditName: i
						})]),
						sidebar: d.a.createElement(z, {
							subredditOrProfileUrl: v,
							isRealtimeMQUpdatesExperimentEnabled: o
						})
					}), t && r && o && r.map(e => d.a.createElement(p.a, {
						key: e.input.channel.subredditID,
						uniqueKey: e.input.channel.subredditID,
						variables: e,
						onData: this.props.handleRealtimeUpdates,
						queryKey: "onModUpdate"
					})))
				}
			}
			t.default = J($(Object(v.c)(Y)))
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.l: {
						const {
							summary: n,
							subreddit: o
						} = t.payload;
						return {
							...e,
							[o.id]: {
								...e[o.id],
								...n
							}
						}
					}
					case o.i:
					case o.f:
					case o.o:
					case o.r:
					case o.x: {
						const {
							response: n
						} = t.payload;
						return {
							...e,
							...n.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/realtimeMQUpdates.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			const a = e => Object(i.a)(e) && Object(s.c)(e, {
				experimentEligibilitySelector: r.R,
				experimentName: o.Cc
			}) === o.Qd
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.3fc0205f0ab343df9937.js.map