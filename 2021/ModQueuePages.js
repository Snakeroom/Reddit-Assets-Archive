// https://www.redditstatic.com/desktop2x/ModQueuePages.5bde94f62468fdd3c0a9.js
// Retrieved at 5/4/2021, 5:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var r, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						g = !i && !u && !m && !h && /linux/i.test(t),
						x = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !C && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : p ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (r.msedge = e, r.version = x) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
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
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : O ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var y = !r.windows && E.split(".")[0];
					return C || d || "ipad" == o || i && (3 == y || y >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function o(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = t - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, n, r) {
					var i = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
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
							s = t ? this._getRootRect() : {
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
								l = t && d && this._computeTargetAndRootIntersection(o, s),
								u = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, o, i, d, l, u, m, h, p = a(s), b = c(s), f = !1; !f;) {
								var g = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (f = !0, g = n) : b != t.body && b != t.documentElement && "visible" != x.overflow && (g = a(b)), g && (r = g, o = p, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, h = void 0, i = Math.max(r.top, o.top), d = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), h = d - i, !(p = (m = u - l) >= 0 && h >= 0 && {
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
							var s = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || n.clientWidth,
								width: s.clientWidth || n.clientWidth,
								bottom: s.clientHeight || n.clientHeight,
								height: s.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, r.prototype._expandRectByRootMargin = function(e) {
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
					}, r.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var r = 0; r < this.thresholds.length; r++) {
								var o = this.thresholds[r];
								if (o == s || o == n || o < s != o < n) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = n
				}

				function n(e) {
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
						n = this.intersectionRect,
						r = n.width * n.height;
					this.intersectionRatio = s ? r / s : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var s, n, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
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

				function d(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = c(s)
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
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, o) {
					s = n ? (n = !1, e) : t(s, e, r, o)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				r = s("./node_modules/lodash/isArrayLike.js"),
				o = s("./node_modules/lodash/isString.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				a = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, c) {
				e = r(e) ? e : a(e), s = s && !c ? i(s) : 0;
				var l = e.length;
				return s < 0 && (s = d(l + s, 0)), o(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const r = new Map,
				o = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!o.get(t)) {
						o.set(t, s);
						const n = r.get(t);
						if (n) {
							n(e, s && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						r.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						r.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return F
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return q
			})), s.d(t, "c", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/bulkActions/index.ts"),
				a = s("./src/reddit/actions/removalReasons/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/modQueue/index.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/isPost.ts"),
				h = s("./src/reddit/models/ModQueue/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/modQueue.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/telemetry/index.ts"),
				v = s("./src/lib/initializeClient/installReducer.ts"),
				C = s("./src/reddit/reducers/pages/modHub/index.ts"),
				_ = s("./src/reddit/actions/modQueue/constants.ts");
			Object(v.a)({
				pages: {
					modHub: C.a
				}
			});
			const O = Object(o.a)(_.j),
				E = Object(o.a)(_.i),
				y = Object(o.a)(_.h),
				w = Object(o.a)(_.g),
				I = Object(o.a)(_.f),
				S = Object(o.a)(_.e),
				R = Object(o.a)(_.n),
				j = Object(o.a)(_.m),
				P = Object(o.a)(_.l),
				k = Object(o.a)(_.q),
				T = Object(o.a)(_.p),
				M = Object(o.a)(_.o),
				N = Object(o.a)(_.w),
				L = Object(o.a)(_.v),
				A = Object(o.a)(_.u),
				F = (e, t, s) => async (o, i, {
					apiContext: a
				}) => {
					let l, u, m;
					switch (t) {
						case r.mb.Edited:
							l = w, u = S, m = I;
							break;
						case r.mb.Modqueue:
							l = O, u = y, m = E;
							break;
						case r.mb.Reports:
							l = R, u = P, m = j;
							break;
						case r.mb.Spam:
							l = k, u = M, m = T;
							break;
						case r.mb.Unmoderated:
							l = N, u = A, m = L;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(l());
					const b = await Object(c.b)(a(), t, s);
					if (b.ok) {
						o(m({
							listingKey: e,
							page: `${s.page||h.b}`,
							response: b.body
						}))
					} else o(u(b.error)), o(Object(d.f)({
						kind: p.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, B = Object(o.a)(_.k), D = Object(o.a)(_.b), V = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = o.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						a = o.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = o.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = o.platform.currentPage.urlParams,
						m = u;
					if (e && a || l || !i) return;
					const h = await Object(c.b)(r(), m, {
						moderated_after: i
					});
					h.ok ? (t(B(h.body)), h.body.moderatedAfter ? t(V()) : t(D())) : t(Object(d.f)({
						kind: p.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(o.a)(_.t), W = Object(o.a)(_.s), U = Object(o.a)(_.r), G = (e, t, s) => async (r, o, {
					apiContext: v
				}) => {
					r(Object(i.c)());
					const C = o(),
						_ = Object(b.g)(C),
						O = C.user.account && C.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const E = Object(l.c)(l.a.ModQueue);
					Object(x.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...g.defaults(C),
						actionInfo: g.actionInfo(C, {
							count: _.length,
							paneName: C.platform.currentPage ? C.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: g.screen(C),
						correlationId: E
					});
					for (let t = 0; t < _.length; t++) {
						const s = _[t];
						let n = e;
						[h.a.Approve, h.a.Remove, h.a.Spam].includes(e) && (Object(m.a)(s) ? n += "_link" : n += "_comment"), Object(x.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: n,
							...g.defaults(C),
							actionInfo: g.actionInfo(C, {
								count: _.length,
								paneName: C.platform.currentPage ? C.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: g.comment(C, s),
							post: g.post(C, s),
							profile: g.profileByPostOrCommentId(C, s),
							screen: g.screen(C),
							subreddit: g.subredditByPostOrCommentId(C, s),
							correlationId: E
						})
					}
					Object(l.b)(l.a.ModQueue);
					const y = {
						ids: _
					};
					t && (y.text = Object(u.g)(t) || "", y.flairTemplateId = ""), s && (y.cssClass = s, y.flairTemplateId = s);
					const w = await Object(c.a)(v(), e, y);
					if (w.ok) {
						r(Object(i.b)({
							...w.body,
							operation: e,
							ids: _,
							username: O,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case h.a.Approve:
									return n.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [n.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case h.a.Flair:
									return n.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case h.a.IgnoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case h.a.Lock:
									return n.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [n.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case h.a.MarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case h.a.RemovalReason:
									return n.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case h.a.Remove:
									return n.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [n.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case h.a.Spam:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [n.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case h.a.Spoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case h.a.UnignoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case h.a.Unlock:
									return n.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [n.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case h.a.UnmarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case h.a.Unspoiler:
								case h.a.Unspoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, _.length);
						if (e !== h.a.Approve && e !== h.a.Flair) {
							let t, o;
							const l = C.platform.currentPage && C.platform.currentPage.queryParams && C.platform.currentPage.queryParams.subreddit,
								u = l && Object(f.F)(C, l);
							e === h.a.Remove && u && _.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(a.fetchReasonsAndOpenModal)(u, _));
							const m = Object(d.e)(s, p.b.Undo, n.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: s
							}) => {
								e(H());
								const r = t(),
									o = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									a = r.pages.modHub.modQueue.bulkAction.undoLastAction[o],
									l = r.user.account && r.user.account.displayText;
								e(Object(i.c)());
								const u = await Object(c.a)(s(), o, {
									ids: a
								});
								u.ok ? e(W({
									...u.body,
									operation: o,
									ids: a,
									username: l
								})) : (e(U(u.error)), e(Object(d.f)({
									kind: p.b.Error,
									text: n.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							r(Object(d.f)(m))
						} else {
							const e = Object(d.e)(s, p.b.SuccessMod);
							r(Object(d.f)(e))
						}
					} else {
						r(Object(i.a)(w.error));
						const e = Object(d.e)(n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), p.b.Error);
						r(Object(d.f)(e))
					}
				}, z = Object(o.a)(_.a), q = Object(o.a)(_.c), K = Object(o.a)(_.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), s.d(t, "removalReasonsFailed", (function() {
				return $
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return oe
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), s.d(t, "deleteRemovalReason", (function() {
				return me
			})), s.d(t, "removedItemsSelected", (function() {
				return he
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return pe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), s.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ce
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), s.d(t, "submitRemovalReason", (function() {
				return Oe
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				h = "REMOVALREASONS__DELETE_SUCCESS",
				p = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case i:
					case a:
					case c:
					case l:
					case m:
					case h:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case p:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case c:
						case m:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
						case l:
						case u:
						case h:
						case p:
							return !1;
						default:
							return e
					}
				},
				g = Object(o.c)({
					error: b,
					pending: f
				});
			const x = {};
			var v = (e = x, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case a:
					case l: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case h: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const C = {};
			var _ = (e = C, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: r
						} = n;
						return {
							...e,
							[s]: r
						}
					}
					case a: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case h: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, r = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var O = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				E = Object(o.c)({
					api: g,
					models: v,
					reasonOrder: _,
					removedItemIds: O
				}),
				y = s("./src/lib/constants/index.ts"),
				w = s("./src/lib/makeActionCreator/index.ts"),
				I = s("./src/lib/makeCommentsPageKey/index.ts"),
				S = s("./src/lib/makeDraftKey/index.ts"),
				R = s("./src/reddit/actions/bulkActions/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				k = s("./src/reddit/actions/comment/moderation.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				A = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				D = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(A.a)(Object(F.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: y.eb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(A.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(D.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: y.eb.POST,
					type: "json",
					data: t
				});
			var W = s("./src/reddit/helpers/isPost.ts"),
				U = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				z = s("./src/reddit/models/ModQueue/index.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: E
				}
			});
			const Z = Object(w.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(w.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(w.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().subreddits.models[e].name;
					t(Z());
					const o = await ((e, t) => Object(A.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.eb.GET
					}))(n(), r);
					o.ok ? t(Y({
						subredditId: e,
						response: o.body
					})) : t($(o.error))
				}, te = Object(w.a)(i), se = Object(w.a)(a), ne = Object(w.a)(d), re = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].name;
					s(te());
					const a = await ((e, t, s) => Object(A.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: y.eb.POST,
						data: s
					}))(o(), i, t);
					if (a.ok) {
						const {
							id: r
						} = a.body, o = {
							...t,
							id: r
						};
						s(se({
							subredditId: e,
							reason: o
						})), s(Object(N.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ne(a.error))
				}, oe = Object(w.a)(c), ie = Object(w.a)(l), ae = Object(w.a)(u), de = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].name;
					s(oe());
					const a = await ((e, t, s) => Object(A.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: y.eb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(o(), i, t);
					a.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(N.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ae(a.error))
				}, ce = Object(w.a)(m), le = Object(w.a)(h), ue = Object(w.a)(p), me = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].name;
					s(ce());
					const a = await ((e, t, s) => Object(A.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: y.eb.DELETE
					}))(o(), i, t);
					a.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(N.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(a.error))
				}, he = Object(w.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(he({
						subredditId: e,
						itemIds: t
					})), s(Object(T.i)(L.a.ADD_REMOVAL_REASON))
				}, be = Object(w.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(w.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(w.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(w.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(w.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ce = Object(w.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(w.a)("REMOVALREASONS__MESSAGE_FAILED"), Oe = (e, t, s, n, r) => async (o, i, {
					apiContext: a
				}) => {
					const d = i(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						u = Object(W.a)(l) ? K.e.Post : K.e.Comment,
						m = u === K.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						h = u === K.e.Post ? M.P : j.i;
					if (!m || !c) return !1;
					o(be()), o(h({
						[l]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await V(a(), p);
					if (b.ok) {
						if (o(fe()), t) {
							o(xe());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								i = await H(a(), Object(K.h)(r, u), u);
							if (i.ok) {
								if (n === K.f.Public) {
									if (o(Ce()), i.body) {
										const e = Object(U.a)(i.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(Q.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let r = s && n && Object(G.a)(n, d, d.posts.models[e.postId]);
										if (r || (r = Object(I.a)(e.postId, null, {
												sort: y.s,
												hasSortParam: !0
											})), u === K.e.Post) {
											const s = Object(S.a)(q.c.replyToPost, l);
											o(Object(P.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const n = d.postStickiedComments.data[l];
											o(Object(k.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), n && n !== e.id && o(Object(j.i)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === K.e.Comment) {
											const e = Object(S.a)(q.c.replyToComment, m.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: r
												});
											o(Object(P.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else o(ve());
								return !0
							}
							return o(_e(i.error)), !1
						}
					} else o(ge(b.error)), o(h({
						[l]: {
							modNote: m.modNote,
							modRemovalReason: m.modRemovalReason,
							modReasonBy: m.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, s, r, o) => async (i, a, {
					apiContext: d
				}) => {
					const c = a(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					i(be());
					const u = Object(N.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						m = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						h = await V(d(), m);
					if (h.ok) {
						const n = {
							ids: e,
							operation: z.a.RemovalReason,
							username: l,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (i(Object(R.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								o = await H(d(), Object(K.h)(n, K.e.Bulk), K.e.Bulk);
							o.ok ? (i(ve()), i(u)) : i(_e(o.error))
						} else i(u)
					} else i(ge(h.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(h),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				f = s.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(l.t)(),
				v = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				C = Object(o.b)(v),
				_ = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(a.a)(e.className, f.a.emptyVerticalVotes)
					}, r.a.createElement(c.d, g({
						key: "u"
					}, t)), e.children, r.a.createElement(c.c, g({
						key: "d"
					}, t)))
				},
				O = () => r.a.createElement(_, null, r.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = x(C(e => r.a.createElement("div", {
				className: Object(a.a)(e.className, p.a.classicPostStyles, p.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement(d.b, null, r.a.createElement(O, null)), r.a.createElement("div", {
				className: f.a.mainBody
			}, r.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(f.a.thumbnail, Object(u.b)(e))
			})), r.a.createElement("div", {
				className: f.a.content
			}, r.a.createElement("div", {
				key: "a"
			}, r.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(f.a.title, Object(u.b)(e))
			}), r.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(f.a.meta, Object(u.b)(e))
			})), r.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, r.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(f.a.flatlistExpando, Object(u.b)(e))
			}), r.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), r.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(f.a.flatListItemOne, Object(u.b)(e))
			}), r.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(f.a.flatListItemTwo, Object(u.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(o);
			const a = n.a.wrapped(r.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				h = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/RichTextJson/index.tsx"),
				x = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/comments.ts"),
				_ = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = s.n(E),
				w = s("./src/lib/lessComponent.tsx");
			const I = w.a.div("VoteSpacer", y.a),
				S = w.a.div("ContentWrapper", y.a),
				R = w.a.div("CommentContentWrapper", y.a),
				j = w.a.div("CommentBody", y.a),
				P = w.a.div("ParentPostTitle", y.a),
				k = w.a.div("CommentParentWrapper", y.a),
				T = Object(i.c)({
					comment: (e, t) => Object(_.a)(e, t),
					flair: C.e,
					subreddit: O.I
				}),
				M = Object(o.b)(T, (e, {
					commentId: t,
					trackClick: s
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: n => {
						const [r, o] = n === v.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						s(o)(), e(r)
					}
				})),
				N = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = M(w.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					flair: n,
					hasReports: o,
					isCheckboxSelected: i = !1,
					onIgnoreReports: a,
					onVoteClick: d,
					showModTools: c,
					subreddit: v,
					showBulkActionCheckbox: C,
					toggleCheckbox: _
				} = e;
				return r.a.createElement(u.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: s.permalink
				}, r.a.createElement(f.a, {
					model: s,
					handleVote: d,
					showBulkActionCheckbox: C,
					isCheckboxSelected: i,
					toggleCheckbox: _,
					subreddit: v
				}), r.a.createElement(I, null, r.a.createElement(S, null, r.a.createElement(k, null, s.postTitle && r.a.createElement(P, null, s.postTitle), s.postAuthor && r.a.createElement(p.a, {
					comment: s
				})), r.a.createElement(R, null, r.a.createElement(m.a, {
					comment: s
				}, r.a.createElement(j, null, r.a.createElement(g.a, {
					content: Object(x.a)(s),
					rtJsonElementProps: N(e)
				})), r.a.createElement(h.a, {
					comment: s,
					flair: n,
					subredditName: v ? v.displayText : null
				}), o && r.a.createElement(b.a, {
					onIgnoreReports: a,
					reportable: s
				}), c && !s.isDeleted && r.a.createElement(l.a, {
					comment: s
				}))))))
			}, "Component", y.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts");
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
						openLightbox: s,
						...n
					} = this.props, o = n => e(() => n.metaKey || n.ctrlKey || 1 === n.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : s(Object(i.a)(t, {
						context: 3
					})))(n);
					return r.a.createElement("div", {
						className: n.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, n.children)
				}
			}
			t.a = c(Object(a.c)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = s.n(i);
			const d = o.a.div("DashWrapper", a.a);
			t.a = e => null === e.comment.parentId ? r.a.createElement(d, null, e.children) : r.a.createElement(d, null, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				a = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(a.a, "Inline", c.a),
				m = l.a.wrapped(a.a, "PostedInfo", c.a),
				h = l.a.wrapped(a.a, "SubredditWrapper", c.a),
				p = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(i.a, "TopMeta", c.a);
			t.a = e => o.a.createElement(u, {
				className: e.className
			}, e.subredditName && o.a.createElement(h, null, e.subredditName && o.a.createElement(p, null, e.subredditName)), o.a.createElement(m, null, o.a.createElement(p, null, `${n.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/AuthorLink/index.tsx"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				c = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = s.n(c),
				u = s("./src/lib/lessComponent.tsx");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = u.a.wrapped(o.a, "AuthorLink", l.a), p = u.a.wrapped(d.a, "Inline", l.a), b = u.a.wrapped(d.a, "SubredditWrapper", l.a), f = u.a.div("TextContainer", l.a), g = u.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => r.a.createElement(p, null, e.subredditOrProfile && r.a.createElement(b, null, e.subredditOrProfile && r.a.createElement(g, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && r.a.createElement(f, null, e.subredditOrProfile.displayText)), m._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && r.a.createElement(i.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, r.a.createElement(h, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.d, null, o.a.createElement(a.h, null, o.a.createElement(c.a, null, o.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.k, null, o.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(a.f, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
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
				i = Object(r.a)("spBurnLinks", Object(n.a)({
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = s.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: s,
					style: n,
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
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = s("./src/reddit/components/PlayButton/index.tsx"),
				p = s("./src/reddit/constants/elementClassNames.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/constants/tracking.ts"),
				O = s("./src/reddit/components/Media/blurredContent.ts"),
				E = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				y = s.n(E);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * g.e,
				S = e => {
					const t = Object(c.a)(y.a.image, p.g, e.className, {
							[y.a.mShowCentered]: e.showCentered,
							[y.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && I(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				R = e => {
					const t = {};
					return (!e.showFull && Object(g.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.I)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(y.a.container, e.className),
						style: t
					}, e.children)
				},
				j = Object(i.b)(() => Object(d.a)(v.E, C.bb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(v.b)(e, s) : null, x.a, (e, t, s, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n
				})));
			t.a = j(e => {
				const t = e.sendGoodVisitEvent ? Object(f.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					}
				}, k(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, k(e)) : k(e)
			});
			const P = (e, t) => o.a.createElement(S, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[_.a]: !e
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
				k = ({
					onClick: e,
					...t
				}) => {
					const s = Object(g.I)(t.height, t.width),
						r = I(t.height) && s;
					return o.a.createElement(R, w({}, t, {
						className: `${s?`${_.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, P(s, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, P(s, t)), t.isListing && !t.showFull && t.height > g.j && Object(g.I)(t.height, t.width) && o.a.createElement("div", {
						className: y.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(h.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: y.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: y.a.unblurButton
					}, Object(O.a)(!!t.isNSFW, !!t.isSpoiler))))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
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
					n = e.blurSrc ? r.a.createElement("img", {
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
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
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
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var g = s("./src/lib/forceHttps/index.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(a = d);
							if (e.paused || e.seeking || !s) return void(a = d);
							const r = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + f ? i = !0 : i && d >= a && d > a + f && (i = !1), a = d, r !== i && t(i)
						}, b);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: s,
						onBufferingChange: n,
						shouldLoad: r,
						shouldPause: o,
						showCentered: a,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return i.a.createElement("video", x({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(g.a)(this.props.source || "")
					}))
				}
			}
			var C = v,
				_ = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = s.n(_);
			const E = Object(d.c)({
					autoplayPref: h.b,
					consumed: p.a,
					loadTimes: p.f,
					metadata: p.h,
					started: p.k
				}),
				y = Object(a.b)(E, (e, {
					postId: t
				}) => ({
					onBufferingChanged: s => {
						e(s ? l.r(t) : l.E(t))
					},
					onLoadStarted: s => e(l.q(t, s)),
					onMetadataReceived: s => e(l.D({
						metadata: s,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: s => e(l.A(t, s)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: s => e(l.N(s, t))
				}));
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, s = {};
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${m.e}px`), i.a.createElement(C, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, O.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: s,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : i.a.createElement("div", {
						className: Object(c.a)(O.a.container, this.props.className, {
							[O.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = y(w)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				h = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				p = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const w = (e, t = !1, s = n.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				I = Object(d.c)({
					flairData: v.d,
					subreddit: C.T,
					isMod: (e, t) => !!Object(x.k)(e, t)
				});
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(_.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(O.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(O.c)(this.props.flairs) || null;
					return Object(O.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, a = o.displayText, {
						templates: d,
						templateIds: c
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(h.a, {
						className: s
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select {subredditName} flair", [r.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(p.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: r.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: o.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: y.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !l,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const R = Object(a.b)(I, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(S);
			t.a = Object(l.a)(Object(c.c)(R))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.m.less"),
				c = s.n(d);
			const l = 40,
				u = e => e.isRemoved ? a.b.removed : e.isReported ? a.b.reported : "transparent",
				m = Object(i.a)(e => {
					const t = u(e),
						s = {
							width: `${l}px`,
							borderLeft: `4px solid ${t}`
						};
					return r.a.createElement("div", {
						className: Object(o.a)(c.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = m
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = s.n(a);
			const c = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && r.a.createElement("span", {
					className: d.a.TextWrapper
				}, e.text, " ")),
				l = i.a.wrapped(c, "ApproveButton", d.a),
				u = i.a.wrapped(c, "RemoveButton", d.a),
				m = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => o.a.createElement(x, h({}, s, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				C = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
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
					}, o.a.createElement(f, null, o.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(C, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = _
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
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return R
			})), s.d(t, "o", (function() {
				return j
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "s", (function() {
				return k
			})), s.d(t, "r", (function() {
				return T
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "w", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				m = d.a.hr("Hr", a.a),
				h = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				f = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				x = d.a.ul("Ul", a.a),
				v = d.a.ol("Ol", a.a),
				C = d.a.strong("B", a.a),
				_ = d.a.em("I", a.a),
				O = d.a.span("U", a.a),
				E = e => r.a.createElement("del", e),
				y = d.a.sub("Sub", a.a),
				w = d.a.sup("Sup", a.a),
				I = d.a.table("Table", a.a),
				S = d.a.tr("Tr", a.a),
				R = d.a.td("Tdl", a.a),
				j = d.a.td("Tdc", a.a),
				P = d.a.td("Tdr", a.a),
				k = d.a.th("Thl", a.a),
				T = d.a.th("Thc", a.a),
				M = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				N = d.a.wrapped(c.a, "A", a.a)
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
				return E
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				f = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = s("./src/reddit/components/RichTextJson/index.m.less"),
				x = s.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = s("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				_ = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => i.a.createElement(C, v({}, s, {
					style: {
						color: Object(h.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				O = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				E = e => r()(e, O),
				y = e => e.findIndex(O),
				w = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: h,
						rtJsonElementProps: g,
						useExplicitTextColor: v,
						shouldBlur: O
					} = e, w = n.document, I = [], S = e.mediaMetadata || null, R = y(w), j = E(w);
					if (O && !r) return i.a.createElement(C, {
						className: Object(a.a)(u.j, s)
					}, i.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!o, !!d))));
					if (-1 !== R)
						for (let i = R; i <= j; i++) {
							const e = w[i];
							switch (e.e) {
								case p.k:
									I.push(f.c(e, g, i));
									break;
								case p.l:
									I.push(f.d(i));
									break;
								case p.b:
									I.push(f.a(e, S, g, i));
									break;
								case p.c:
									I.push(f.b(e, i));
									break;
								case p.p:
									I.push(f.f(e, S, g, i));
									break;
								case p.z:
									I.push(f.h(e, S, g, i));
									break;
								case p.u:
									I.push(f.g(e, S, g, i));
									break;
								case p.h:
									I.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									I.push(...Object(b.b)(e, i, S, h, m, t))
							}
						}
					return v ? i.a.createElement(C, {
						className: Object(a.a)(u.j, s)
					}, I) : i.a.createElement(_, {
						className: Object(a.a)(u.j, s),
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
						return w(t)
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
				return I
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				g = s.n(f),
				x = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = /\/(\w+)\/asset\/(\w+)\//,
				_ = x.a.wrapped(b.a, "A", g.a),
				O = x.a.wrapped(l.a, "ImageBox", g.a),
				E = x.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				y = x.a.div("Placeholder", g.a),
				w = x.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const r = t === p.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(y, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, s))
				}, "Placeholder", g.a),
				I = ({
					c: e,
					x: t,
					y: s
				}, n) => o.a.createElement("div", {
					className: g.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				S = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === p.s ? r = s.s.u : s.e === p.r ? r = s.s.gif : s.e === p.t && (r = (e => {
						const t = C.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(_, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				R = (e, t, s, n, r, a) => {
					const c = p.E(s, e.id);
					if (n) return [S(e, t, c)];
					const l = [];
					return c ? c.e === p.s ? l.push((({
						id: e,
						s: t
					}, s, n, r) => o.a.createElement("div", {
						className: Object(i.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: n
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(O, {
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
						s
					}, n, r) => {
						if (Object(h.f)(e)) {
							const a = t || Object(h.e)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: r
								})
							}, o.a.createElement(_, {
								href: a,
								key: n,
								target: "_blank"
							}, s.mp4 ? o.a.createElement("video", {
								className: g.a.giphy,
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
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
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
					})(c, t, !!e.c)) : c.e === p.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: r
					}, a, c, l) => o.a.createElement("div", {
						className: Object(i.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: c
						})
					}, o.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(w, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(E, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return F
			})), s.d(t, "e", (function() {
				return B
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = s.n(g);
			const v = 1e3,
				C = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class O extends a.a.Component {
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
						}, C)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
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
					let s, n, r;
					t.e === h.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === h.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
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
			var E = Object(u.c)(O),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				w = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				I = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				R = s("./src/reddit/helpers/richTextJson/index.ts");
			const j = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === h.w ? e.t : B(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: s
					}, o)
				},
				P = e => a.a.createElement(d.e, {
					key: e
				}),
				k = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(N(r[a], t, s, a));
					return a.a.createElement(d.c, {
						key: n
					}, i)
				},
				T = (e, t) => {
					const s = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				M = (e, t, {
					renderingObjectInfo: s
				}, n) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, n) => N(e, t, {
							renderingObjectInfo: s
						}, n))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: n
					}, o)
				},
				N = (e, t, s, n) => {
					switch (e.e) {
						case h.b:
							return k(e, t, s, n);
						case h.c:
							return T(e, n);
						case h.k:
							return j(e, s, n);
						case h.l:
							return P(n);
						case h.p:
							return M(e, t, s, n);
						case h.u:
							return A(e, t, s, n);
						case h.z:
							return L(e, t, s, n)
					}
				},
				L = (e, t, s, n) => {
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
								H: n,
								D: r
							} = W(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(n, {
							key: d
						}, F(i, t, s))), m[d] = r
					}
					for (let h = 0; h < i; h++) {
						const e = r[h],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(n, {
								key: r
							}, F(i, t, s)))
						}
						u.push(a.a.createElement(d.t, {
							key: h
						}, o))
					}
					return a.a.createElement(d.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				A = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== h.m && r.e !== h.a || !Object(R.f)(r.id) ? a.a.createElement(d.j, {
						key: n
					}, F(e.c, t, s)) : Object(y.b)(r, n, t)
				},
				F = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === h.A) n.push(D(r, o));
						else if (r.e === h.x) n.push(a.a.createElement(w.a, {
							key: o
						}, F(r.c, t, s)));
						else if (r.e === h.n) n.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === h.m || r.e === h.a) {
							if (r.id.startsWith("emote|")) {
								const e = h.E(t, r.id);
								e && n.push(a.a.createElement(E, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(B(r, s, o))
					}
					return n
				},
				B = (e, t, s) => {
					switch (e.e) {
						case h.o:
							const n = D({
								t: e.t,
								f: e.f
							}, 0);
							return Object(S.b)(e.u) ? a.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n) : a.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a
							}, n);
						case h.y:
							return a.a.createElement(I.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				D = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return H(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						d = 0;
					const c = s.length;
					for (; a < c; a++) {
						const [e, t, n] = s[a], c = t + n, l = i[t], u = i[c] - l;
						l > d && o.push(H(0, r.substr(d, l - d), `between${a}`)), o.push(H(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && o.push(H(0, r.substr(d), `remaining${a}`)), o
				},
				V = {
					[h.j.monospace]: d.h,
					[h.j.bold]: d.b,
					[h.j.italic]: d.f,
					[h.j.underline]: d.u,
					[h.j.strikethrough]: d.d,
					[h.j.subscript]: d.l,
					[h.j.superscript]: d.m
				},
				H = (e, t, s) => {
					let n = t;
					return n = o()(V, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				W = e => {
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
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return J
			}));
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isNil.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-dom/index.js"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/request-idle-callback/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				h = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				f = s.n(b);
			const g = 500,
				x = 1e3,
				v = 40;
			var C;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(C || (C = {}));
			const _ = () => ({
					[C.Max10]: 0,
					[C.Max20]: 0,
					[C.Max30]: 0,
					[C.Max40]: 0,
					[C.Max50]: 0,
					[C.Max60]: 0
				}),
				O = [C.Max10, C.Max20, C.Max30, C.Max40, C.Max50, C.Max60],
				E = e => ({
					eventHandler: e
				});

			function y({
				fn: e,
				subscriber: t,
				timeout: s
			}) {
				const n = [];
				let r, o, i;
				const a = () => {
						if (n.length < v) return;
						const e = _(),
							s = Math.min(x, n.length),
							r = n.splice(0, s);
						n.splice(0, n.length);
						const o = r[s - 1] - r[0];
						for (let t = r.shift(); r.length > 0; t = r.shift()) {
							const s = r[0] - t,
								n = Math.min(60, Math.ceil(1e3 / s));
							e[n <= 10 ? C.Max10 : 60 === n ? C.Max60 : O[Math.ceil(n / 10) - 1]] += s
						}
						const i = _();
						for (const t in e) i[t] = e[t] / o;
						t(i)
					},
					d = () => {
						void 0 !== i && (window.clearTimeout(i), i = void 0)
					},
					c = () => {
						void 0 !== r && (cancelAnimationFrame(r), r = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), d(), a()
					},
					l = () => {
						r = requestAnimationFrame(() => {
							n.push(performance.now()), l()
						})
					},
					u = f()(() => {
						d(), i = window.setTimeout(c, s)
					}, h.G);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === o ? (l(), u(), o = window.setInterval(a, g)) : u(), e(t)
					}
				}
			}
			var w = s("./src/lib/scheduler/index.ts"),
				I = s("./src/lib/domUtils/index.ts"),
				S = s("./src/lib/LinkedListMap/index.ts");
			const R = (e, t) => e < 0 ? t + e : e % t;
			class j {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = R(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = R(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? R(this.head - this.size, this.maxSize) : this.head;
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, n, r) => {
						t[n] = e(s, n, r)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var P = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class k {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: s
				}) {
					this.height = t, this.heightWithSuffix = s, this.top = e, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const T = ({
				buffer: e,
				container: t
			} = {}) => {
				const s = i()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
					return new k({
						top: e,
						height: window.innerHeight
					})
				}
				return new k({
					top: 0,
					height: s
				})
			};
			var M = s("./src/reddit/components/ResizeSensor/index.tsx"),
				N = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/constants/elementClassNames.ts"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/telemetry/helpers/sendEvent.ts"),
				D = s("./src/telemetry/helpers/sendTiming.ts"),
				V = s("./src/reddit/components/Scroller/Simple.m.less"),
				H = s.n(V);
			const W = N.g,
				U = 5 * h.G,
				G = 3,
				z = Object(m.c)({
					isOverlayOpen: F.h
				}),
				q = Object(l.b)(z),
				K = {};

			function J(e) {
				return e === document
			}

			function X(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Q = 10,
				Z = .9,
				Y = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * h.G,
				ne = 400,
				re = 8,
				oe = 5 * h.G,
				ie = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function ce(e, t) {
				return S.a.fromArray(e.children.map((e, s) => {
					const n = t && t.get(e.id);
					return n ? (n.isFocusable = !!e.isFocusable, n.trackOnEnteredViewport = e.trackOnEnteredViewport, n.trackOnExitedViewport = e.trackOnExitedViewport, n) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class le extends d.a.Component {
				constructor(e) {
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						B.b.enqueue(new w.a({
							args: [e, t],
							cb: (e, t) => Object(D.a)(h.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let n = this.nextVisibleChildrenIndex;
						for (; e < t && n < this.props.children.length;) {
							const t = this.props.children[n];
							s.push(t), e += t.estHeight, n++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ne / e), re)
						} else this.renderableChildrenIndexIncrement = re
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = oe, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, s) => {
						const n = s || this.props.children;
						if (this.state.renderableChildren.length < n.length || e)
							if (this.hasScrolledWithinThreshold()) p.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, s ? n : void 0)
								}, se)
							});
							else {
								this.nextVisibleChildrenIndex + t <= n.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), p.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = ie) => {
						let t = 0,
							s = this.state.renderableChildren.length;
						for (; t < e && s < this.props.children.length;) t += this.props.children[s].estHeight, s++;
						const n = s - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = r()(() => {
						this.handleScroll()
					}, h.G), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), p.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new S.a("id");
						return this.state.renderableChildren.forEach(s => {
							const n = this.childMap.get(s.id);
							n && e(n) && t.push(n)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, h.G))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							n = t.getBoundingClientRect().height,
							r = new k({
								top: s,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = r, r
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? X(this.containerRef) : 0, this.handleContentContainerResize = r()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = p.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, h.G), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = p.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(I.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Z,
								s = e < Y,
								n = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const r = new S.a("id");
							let o, i;
							const a = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let c;
								if (d && d.el) {
									if (!(c = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(c) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = c.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: l,
									itemRef: u,
									trackOnEnteredViewport: m
								} = d, h = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(c)) u && h && d.loaded && d.isFocusable && a.push(u.pauseContent);
								else if (u && this.loadItemIfPossible(d, u, t, s, n, a), this.elementIsVisible(c)) {
									r.push(d), !h && m && B.b.enqueue(new w.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(c);
									e && !i && (i = d.id), t && d.isFocusable && !o && e ? (o = d.id, d.focused || (d.focused = !0, u && a.push(u.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, u && a.push(u.pauseContent))
								} else h && d.loaded && d.isFocusable && (d.focused = !1, u && a.push(u.stopContent))
							}), p.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !r.has(e) && B.b.enqueue(new w.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = r, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = i, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, U), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * oe, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const n = this.getChildRectangle(s);
								n && this.elementIsUnmountable(n) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / G), t.length),
							n = [];
						for (let r = 0; r < s; r++) {
							const e = t[r];
							n.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(c.unstable_batchedUpdates)(() => {
							this.scrollContainer && n.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = r()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, h.G), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const n = s.el.firstChild;
						n && (t !== s.el.style.height && (s.el.style.height = t), n.classList.add(H.a.Hidden), this.hiddenChildren[e] = t, s.loaded && p.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(H.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, p.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const n = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(I.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, h.G)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, n = window.innerHeight - s, {
								top: r
							} = t.el.getBoundingClientRect();
							return r >= s + e && r < n
						}
						return !1
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new S.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(Q), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && p.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? y({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: U
					}) : E(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (p.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (p.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(I.c)(this.scrollContainer, 0), this.setupScrollHandler(), p.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = K[e];
							i()(t) || (K[e] = void 0, this.scrollContainer && Object(I.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), p.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && p.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = ce(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						K[e] = this.lastRenderPosition
					}
					this.childMap = new S.a("id"), this.itemsInViewport = new S.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						n = e.bottom + t - s,
						r = e.top + t - s,
						o = Math.min(this.viewport.bottom, n) - Math.max(this.viewport.top, r),
						i = o / e.height,
						a = o / this.viewport.height;
					return i > .75 || a > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? J(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new k({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const n = 4 * t;
						this.renderableViewport = new k({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						n = e - this.lastScrollTime,
						r = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, r ? this.pixelsPerMSRing.push(s / n) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const n = this.childMap.get(e);
					n && (n.itemRef = t, n.loaded = !!t && (void 0 !== s ? s : n.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, n, r, o) {
					if (t.contentIsHeavyToMount() ? n : r) {
						const n = !e.isFocusable || s;
						!e.loaded && n && (e.loaded = !0, o.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && B.b.enqueue(new w.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = X(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return d.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => d.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, d.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? H.a.Hidden : void 0
					}, e.render({
						className: L.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: W
					})))), !!e && d.a.createElement(M.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = q(Object(A.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
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
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.wrapped(i.b, "SubredditIcon", c.a),
				m = o.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
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
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var h = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
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
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = s("./src/reddit/selectors/subredditMention.ts");
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: s
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
			const v = Object(p.c)(x),
				C = Object(i.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				_ = Object(o.b)(C),
				O = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (n) {
						case b.nd.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.nd.SmIconHc:
							return r.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = _(O)
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, s) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/trackers/widgets.ts"),
				p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = C(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = _(e);
					return Object(x.f)(t)
				};
			var y = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(y);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.t)(), R = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						r = Object(g.V)(e);
					return n || r
				},
				nigtmode: g.V,
				subredditId: u.m,
				topPostVariant: b.d
			}));
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(h.b)(e, t)), this.setState({
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, h = s ? w.a.widgetContentOnly : w.a.widgetContent, p = !n && this.props.styles, b = p ? this.getWidgetBackgroundStyles() : {}, f = p ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!i,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: b
					}, d && r.a.createElement("div", {
						className: w.a.widgetHeader,
						style: f
					}, r.a.createElement("div", {
						className: Object(a.a)(w.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.o, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, I._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(R(Object(d.a)(Object(l.c)(j))))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				h = s.n(m),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(p);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends i.a.Component {
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
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, f({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(o);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				d = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/models/Media/index.ts");
			const l = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-BlankPost")]).then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: h,
					[d.g.Medium]: p,
					[d.g.Classic]: u,
					[d.g.Compact]: m
				},
				f = e => o.a.createElement(l, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				x = e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === c.o.EMBED && !(c.b.has(e.media.provider) || x(e)),
				C = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case d.g.Medium:
							return 188;
						case d.g.Classic:
							return 96;
						case d.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function _({
				isCrosspost: e,
				isFirstPost: t,
				layout: s,
				post: n
			}) {
				if (n.isBlank) return f;
				const r = !n.media && !!n.source && Object(i.a)(n.source.url),
					o = e && r;
				s === d.g.Large && v(n) && !o && (s = d.g.Medium);
				const c = b[s];
				return void 0 === c ? (Object(a.a)(void 0, `Could not find component for layout ${s}.`), f) : t && n.isSponsored && s === d.g.Large ? p : c
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh",
				singleLineEllipsis: "_2RFRmGwuh0BemW7iUA3-VB"
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				a = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/helpers/isComment.ts"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const h = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, {
					renderingObjectInfo: t,
					pageLayer: s
				}) => {
					if (t && (Object(a.b)(t) || Object(d.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(i.w)(s) ? m.SourceElement.PostDetail : Object(i.E)(s) ? m.SourceElement.ListingPostDetail : void 0
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(d.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(d.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: b(0, t),
							subredditName: n,
							[r]: s.id
						},
						i = Object(l.A)(e, {
							subredditName: n
						});
					return i ? {
						outbound: {
							...o,
							url: i.url,
							subredditId: i.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(d.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(d.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...f(e, t)
					}
				},
				x = e => t => ({
					...h(t),
					...g(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				C = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				_ = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.post(s, e),
					subreddit: i.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.defaults(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return r.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			}), "TagIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const r = 20,
				o = 50,
				i = 1e4,
				a = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				u = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/reddit/components/ModQueueList/index.tsx"),
				u = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/layout/page/Listing/index.tsx"),
				f = s("./src/reddit/models/ModQueue/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./src/lib/classNames/index.ts"),
				_ = s("./node_modules/lodash/omit.js"),
				O = s.n(_),
				E = s("./src/lib/addQueryParams/index.ts"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/pages/ModQueuePages/index.m.less"),
				I = s.n(w);
			const S = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var R = Object(a.b)(S)(e => i.a.createElement(y.a, {
				className: Object(C.a)(I.a.navChild, {
					[I.a.mIsActive]: e.isActive
				}),
				to: Object(E.a)(`/r/mod/about/${e.pathName}`, O()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var j = e => i.a.createElement("div", {
					className: I.a.navContainer
				}, i.a.createElement("div", {
					className: Object(C.a)(I.a.innerContainer, {
						[I.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, i.a.createElement("h1", {
					className: I.a.title
				}, v.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), i.a.createElement(R, {
					title: v.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), i.a.createElement(R, {
					title: v.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), i.a.createElement(R, {
					title: v.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), i.a.createElement(R, {
					title: v.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), i.a.createElement(R, {
					title: v.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				P = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				k = s("./src/config.ts"),
				T = s("./src/lib/lessComponent.tsx"),
				M = s("./src/lib/opener/index.ts"),
				N = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				L = s("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				A = s.n(L);
			const F = T.a.a("ExternalLink", A.a),
				B = T.a.wrapped(y.a, "InternalLink", A.a);
			var D = () => i.a.createElement(N.a, {
				title: v.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, i.a.createElement(F, {
				href: k.a.redditModHelpUrl,
				rel: M.b,
				target: M.c.BLANK
			}, v.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), i.a.createElement(F, {
				href: `${k.a.redditUrl}/help/healthycommunities/`,
				rel: M.b,
				target: M.c.BLANK
			}, v.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), i.a.createElement(B, {
				to: "/r/modsupport",
				rel: M.b,
				target: M.c.BLANK
			}, "r/modsupport"), i.a.createElement(F, {
				href: `${k.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: M.b,
				target: M.c.BLANK
			}, v.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var V = e => i.a.createElement("div", {
				className: I.a.sidebar
			}, e.subredditOrProfileUrl && i.a.createElement(P.a, null, i.a.createElement(N.a, {
				title: v.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, i.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, v.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), i.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, v.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), i.a.createElement(P.a, null, i.a.createElement(D, null)));
			const H = Object(p.t)(),
				W = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => r()([...Object(c.a)(t.search)])
				}),
				U = Object(d.a)(W, p.O, g.l, (e, {
					match: t
				}) => t.params.pageName, ({
					queryParams: e
				}, t, s, n) => {
					const r = e.subreddit,
						o = e.profile,
						i = e.only,
						a = `${e.page||f.b}`;
					return {
						after: e.after || "",
						layout: t,
						isModerator: s.length > 0,
						page: a,
						pageName: n,
						postTypeFilter: i,
						profileName: o,
						subredditName: r
					}
				}),
				G = Object(a.b)(U);
			class z extends i.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(x.screen)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: s,
						layout: n,
						page: r,
						pageName: o,
						profileName: a,
						postTypeFilter: d,
						subredditName: c
					} = this.props, m = c && `r/${c}` || a && `user/${a}`, p = "unmoderated" !== o, f = p ? d : void 0;
					return i.a.createElement("div", null, s && i.a.createElement(b.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: n === h.g.Large,
						navBar: i.a.createElement(j, {
							disableFullscreen: n === h.g.Large,
							pageName: o
						}),
						content: i.a.Children.toArray([i.a.createElement(u.a, {
							key: a,
							postTypeFilter: f,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: p,
							subredditName: c
						}), i.a.createElement(l.a, {
							after: e,
							key: `${a}-${c}`,
							layout: n,
							page: r,
							pageName: o,
							postTypeFilter: f,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							subredditName: c
						})]),
						sidebar: i.a.createElement(V, {
							subredditOrProfileUrl: m
						})
					}))
				}
			}
			t.default = H(G(Object(m.c)(z)))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.id
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.nd.SmIcon || t === n.nd.SmIconHc
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
					const s = Object(i.X)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.5bde94f62468fdd3c0a9.js.map