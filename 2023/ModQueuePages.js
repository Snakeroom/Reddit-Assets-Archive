// https://www.redditstatic.com/desktop2x/ModQueuePages.5b989af1866aa97c9566.js
// Retrieved at 1/25/2023, 11:30:04 AM by Reddit Dataminer v1.0.0
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
					var j = "";
					o.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var C = !o.windows && j.split(".")[0];
					return O || d || "ipad" == r || i && (3 == C || C >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return y
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
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(v.p),
				O = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(f.S)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.l : m.f;
					t(Object(x.j)({
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
					})) : t(Object(x.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, E = Object(r.a)(v.J), j = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = n(),
						l = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					l && u && (t(Object(x.j)({
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
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(x.j)({
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
					u && p && (n(Object(x.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(m.h)(a(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(x.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam,
							numReports: u.numReports
						}
					})), Object(d.d)())
				}, k = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.k : m.e;
					i.ignoreReports || t(j(e)), t(Object(x.j)({
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
					})) : t(Object(x.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, y = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.c)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === o.kc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: f
						})).ok) r(Object(x.j)({
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
					s(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.J.ADMIN,
							isMod: t === o.J.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(x.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.c)(c(), e, t),
						f = Object(m.d)(c(), e, !!n),
						v = [h];
					(n || !n && e === b) && v.push(f), (await Promise.all(v)).every(e => e.ok) ? n && s(E({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(x.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), s(Object(x.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return he
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "f", (function() {
				return Ee
			})), n.d(t, "a", (function() {
				return je
			})), n.d(t, "b", (function() {
				return Ce
			})), n.d(t, "c", (function() {
				return ke
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/bulkActions/index.ts"),
				a = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				m = n("./src/reddit/endpoints/modQueue/index.ts"),
				u = n("./src/reddit/endpoints/user/index.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/flair.ts"),
				h = n("./node_modules/Base64/base64.js"),
				f = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				x = n("./src/reddit/helpers/isPost.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				E = n("./src/redditGQL/types.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const I = {
					[o.wb.Edited]: E.H.Edited,
					[o.wb.Modqueue]: E.H.Mod,
					[o.wb.Reports]: E.H.Reported,
					[o.wb.Spam]: E.H.Removed,
					[o.wb.Unmoderated]: E.H.Unmoderated
				},
				w = {
					comments: E.F.Comment,
					links: E.F.Post,
					chat_comments: E.F.ChatComment
				};

			function M(e) {
				let {
					getState: t,
					queueType: n,
					options: s
				} = e;
				var r, i;
				const a = t();
				let d;
				s.only && (d = w[s.only]);
				const c = {};
				s.after && (c[s.sort === f.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const n = Object(x.a)(t) ? Object(g.G)(e, {
						postId: t
					}) : Object(v.c)(e, {
						commentId: t
					});
					if (n) return Object(h.btoa)(`${n.id}|${n.created}`)
				}(a, s.after));
				const l = {};
				s.sort === f.a.OldestFirst ? l.last = 25 : l.first = 25;
				const m = Object(_.a)(a),
					u = s.subreddit ? [s.subreddit] : [],
					p = (null == a ? void 0 : a.platform) && (null === (r = null == a ? void 0 : a.platform) || void 0 === r ? void 0 : r.currentPage),
					b = (null === (i = null == p ? void 0 : p.meta) || void 0 === i ? void 0 : i.name) === o.Sb.MODQUEUE_PAGES;
				return {
					queueType: I[n],
					moderatedAfter: s.moderatedAfter,
					...l,
					...!!d && {
						itemTypes: d
					},
					subredditNames: u,
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === f.a.MostReportedFirst ? E.G.SortReports : E.G.SortDate,
					...c,
					includeAllModActivitySummaries: m && b,
					includeModActivitySummariesByNames: m && !b,
					isModqueueListing: 0 === u.length
				}
			}
			var N;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(N || (N = {}));
			const T = e => ({
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
				R = e => {
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

			function A(e) {
				let {
					modQueueItems: t,
					identity: n,
					moderatedSubredditActivityByNames: s
				} = e;
				var o, r, i, a, d;
				const c = {
					posts: {},
					comments: {},
					reports: {},
					modActivitySummaries: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (o = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === o ? void 0 : o.pageInfo.hasNextPage) ? null === (r = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {},
					users: {}
				};
				if (!t) return c;
				if (!t.edges) return c;
				const l = null === (i = null == n ? void 0 : n.redditor.moderatedSubredditActivity) || void 0 === i ? void 0 : i.edges.reduce((e, t) => {
						var n;
						if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.moderation)) return e;
						const {
							subreddit: s,
							summary: o
						} = Object(k.a)(t.node);
						return e.summaries[t.node.id] = o, e.subreddits[t.node.id] = s, e
					}, {
						subreddits: {},
						summaries: {}
					}),
					m = null == s ? void 0 : s.reduce((e, t) => {
						if (!(t && "modPermissions" in t && (null == t ? void 0 : t.modPermissions))) return e;
						if (e.moderatingSubreddits[t.id] = T(t.modPermissions), !(null == t ? void 0 : t.moderation)) return e;
						const {
							subreddit: n,
							summary: s
						} = Object(k.a)(t);
						return e.summaries[t.id] = s, e.subreddits[t.id] = n, e
					}, {
						subreddits: {},
						summaries: {},
						moderatingSubreddits: {}
					});
				c.modActivitySummaries = {
					...null == l ? void 0 : l.summaries,
					...null == m ? void 0 : m.summaries
				};
				const u = null === (d = null === (a = null == n ? void 0 : n.redditor.moderatedSubreddits) || void 0 === a ? void 0 : a.edges) || void 0 === d ? void 0 : d.reduce((e, t) => {
					var n;
					if (!(null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = T(s), e.subreddits[t.node.id] = Object(S.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return c.moderatingSubreddits = {
					...null == u ? void 0 : u.moderatingSubreddits,
					...null == m ? void 0 : m.moderatingSubreddits
				}, c.subreddits = {
					...null == l ? void 0 : l.subreddits,
					...null == u ? void 0 : u.subreddits
				}, t.edges.forEach(e => {
					var t, n, s, o, r, i, a;
					if (!e) return;
					const {
						node: d
					} = e;
					if (!d) return;
					const {
						__typename: l,
						subredditInfo: m
					} = d;
					if (!m) return;
					const {
						id: u
					} = m;
					if (c.subreddits[u] = Object(S.a)(m), c.moderatingSubreddits[u] || "Subreddit" !== (null == m ? void 0 : m.__typename) || (c.moderatingSubreddits[u] = T(m.modPermissions)), !c.postFlair[u] && "Subreddit" === m.__typename) {
						const {
							position: e,
							isEnabled: n
						} = (null == m ? void 0 : m.postFlairSettings) || {};
						c.postFlair[u] = {
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
									type: i || O.f.Text,
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
					if (l === N.Comment || l === N.ChatComment) {
						const {
							commentInfo: e
						} = d;
						if (!e) return;
						const t = Object(j.a)(e);
						if (null === (n = e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = R(null === (s = e.moderationInfo) || void 0 === s ? void 0 : s.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						c.comments[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "comment"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: r,
							authorFlair: i
						} = e, a = i ? null === (o = Object(C.a)(i)) || void 0 === o ? void 0 : o[0] : null;
						c.authorFlair[u] = {
							...c.authorFlair[u],
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
						}), c.reports[t.id] = l
					}
					if (l === N.Post) {
						const {
							postInfo: e
						} = d;
						if (null === (r = null == e ? void 0 : e.moderationInfo) || void 0 === r ? void 0 : r.verdictBy) {
							const t = R(null === (i = e.moderationInfo) || void 0 === i ? void 0 : i.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(y.f)(e);
						c.posts[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "post"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: s
						} = e, o = s ? null === (a = Object(C.a)(s)) || void 0 === a ? void 0 : a[0] : null;
						c.authorFlair[u] = {
							...c.authorFlair[u],
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
						}), c.reports[t.id] = l
					}
				}), c
			}
			var P = n("./src/reddit/models/ModQueue/index.ts"),
				L = n("./src/reddit/models/Toast/index.ts"),
				F = n("./src/reddit/selectors/modQueue.ts"),
				B = n("./src/reddit/selectors/subreddit.ts"),
				D = n("./src/reddit/selectors/telemetry.ts"),
				U = n("./src/telemetry/index.ts"),
				H = n("./src/lib/initializeClient/installReducer.ts"),
				W = n("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				V = n("./node_modules/redux/es/redux.js"),
				q = n("./node_modules/icepick/icepick.js"),
				G = n("./src/reddit/actions/modQueue/constants.ts");
			const J = {};
			var Q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.i:
					case G.f:
					case G.r:
					case G.u:
					case G.A: {
						const {
							response: n
						} = t.payload, {
							comments: s,
							posts: o
						} = n, r = {};
						return [...Object.values(s), ...Object.values(o)].forEach(e => {
							var t;
							const n = null === (t = e.previousActions) || void 0 === t ? void 0 : t.actions;
							n && n.length && n.forEach(e => e.modAction ? r[e.modAction.id] = e.modAction : !!e.reportAction && (r[e.reportAction.id] = e.reportAction))
						}), Object(q.merge)(e, r)
					}
					case G.l: {
						const {
							summary: n
						} = t.payload, {
							mods: s
						} = n, o = {};
						return Object.values(s).forEach(e => {
							const {
								lastModAction: t,
								info: n
							} = e;
							t && t.id && (o[t.id] = {
								...t,
								__typename: "ModAction",
								moderatorInfo: n
							})
						}), Object(q.merge)(e, o)
					}
					default:
						return e
				}
			};
			const K = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.i:
						case G.f:
						case G.r:
						case G.u:
						case G.A: {
							const {
								response: n
							} = t.payload, {
								comments: s,
								posts: o
							} = n, r = [...Object.values(s), ...Object.values(o)].reduce((e, t) => {
								var n;
								const s = null === (n = t.previousActions) || void 0 === n ? void 0 : n.actions;
								return s && s.length && (e[t.id] = s.map(e => {
									var t, n;
									return (null === (t = e.modAction) || void 0 === t ? void 0 : t.id) || (null === (n = e.reportAction) || void 0 === n ? void 0 : n.id)
								}).filter(e => !!e).splice(0, 5)), e
							}, {});
							return Object(q.merge)(e, r)
						}
						case G.l: {
							const {
								summary: n
							} = t.payload, {
								mods: s
							} = n, o = {};
							return Object.values(s).forEach(t => {
								const {
									lastModAction: n
								} = t;
								n && n.id && n.target && (o[n.target.id] = [n.id, ...e[n.target.id] || []].splice(0, 5))
							}), Object(q.merge)(e, o)
						}
						default:
							return e
					}
				},
				X = Object(V.c)({
					models: Q,
					order: z
				}),
				Y = n("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				Z = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(H.a)({
				pages: {
					modHub: Z.a
				}
			}), Object(H.a)({
				features: {
					modActivitySummaries: W.a
				}
			}), Object(H.a)({
				features: {
					modPreviousActions: X
				}
			}), Object(H.a)({
				features: {
					realtimeModqueue: Y.a
				}
			});
			const $ = Object(r.a)(G.k),
				ee = Object(r.a)(G.j),
				te = Object(r.a)(G.i),
				ne = Object(r.a)(G.h),
				se = Object(r.a)(G.g),
				oe = Object(r.a)(G.f),
				re = Object(r.a)(G.e),
				ie = Object(r.a)(G.s),
				ae = Object(r.a)(G.r),
				de = Object(r.a)(G.q),
				ce = Object(r.a)(G.v),
				le = Object(r.a)(G.u),
				me = Object(r.a)(G.t),
				ue = Object(r.a)(G.B),
				pe = Object(r.a)(G.A),
				be = Object(r.a)(G.z),
				he = (e, t, n) => async (r, i, a) => {
					let {
						apiContext: p,
						gqlContext: b
					} = a;
					var h;
					let f, x, v;
					switch (t) {
						case o.wb.Edited:
							f = se, x = re, v = oe;
							break;
						case o.wb.Modqueue:
							f = ee, x = ne, v = te;
							break;
						case o.wb.Reports:
							f = ie, x = de, v = ae;
							break;
						case o.wb.Spam:
							f = ce, x = me, v = le;
							break;
						case o.wb.Unmoderated:
							f = ue, x = be, v = pe;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (r(f()), n.profile) {
						const e = null === (h = (await Object(u.b)(p(), n.profile)).body[n.profile]) || void 0 === h ? void 0 : h.profileId;
						n.profile = e
					}
					const g = M({
							getState: i,
							queueType: t,
							options: n
						}),
						O = await Object(m.b)(b(), g);
					if (!O.ok) return r(x(O.error)), void r(Object(d.f)({
						kind: L.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: _,
						...E
					} = A(O.body.data), j = i(), C = c.e[Object(l.V)(j, {})] === c.d.Card;
					Object(F.b)(j, C) && r($(_)), r(v({
						listingKey: e,
						page: `${n.page||P.b}`,
						response: E
					}))
				}, fe = Object(r.a)(G.n), xe = Object(r.a)(G.b), ve = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const i = n(),
						a = i.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						c = i.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = i.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = i.platform.currentPage.urlParams;
					if (e && c || l || !a) return;
					const p = M({
							getState: n,
							queueType: u,
							options: {
								moderatedAfter: a
							}
						}),
						b = await Object(m.b)(r(), p);
					if (!b.ok) return void t(Object(d.f)({
						kind: L.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const h = A(b.body.data);
					t(fe(h)), h.moderatedAfter ? t(ve()) : t(xe())
				}, ge = Object(r.a)(G.y), Oe = Object(r.a)(G.x), _e = Object(r.a)(G.w), Ee = (e, t, n) => async (o, r, c) => {
					let {
						apiContext: l
					} = c;
					o(Object(i.c)());
					const u = r(),
						h = Object(F.i)(u),
						f = u.user.account && u.user.account.displayText;
					Object(p.d)(p.a.ModQueue);
					const v = Object(p.c)(p.a.ModQueue);
					Object(U.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...D.o(u),
						actionInfo: D.d(u, {
							count: h.length,
							paneName: u.platform.currentPage ? u.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: D.cb(u),
						correlationId: v
					});
					for (let t = 0; t < h.length; t++) {
						const n = h[t];
						let s = e;
						[P.a.Approve, P.a.Remove, P.a.Spam].includes(e) && (Object(x.a)(n) ? s += "_link" : s += "_comment"), Object(U.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...D.o(u),
							actionInfo: D.d(u, {
								count: h.length,
								paneName: u.platform.currentPage ? u.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: D.h({
								state: u,
								commentId: n
							}),
							post: D.K(u, n),
							profile: D.V(u, n),
							screen: D.cb(u),
							subreddit: D.ob(u, n),
							correlationId: v
						})
					}
					Object(p.b)(p.a.ModQueue);
					const g = {
						ids: h
					};
					t && (g.text = Object(b.g)(t) || "", g.flairTemplateId = ""), n && (g.cssClass = n, g.flairTemplateId = n);
					const O = await Object(m.a)(l(), e, g);
					if (O.ok) {
						o(Object(i.b)({
							...O.body,
							operation: e,
							ids: h,
							username: f,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case P.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case P.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case P.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case P.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case P.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case P.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case P.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case P.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case P.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case P.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case P.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case P.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case P.a.Unspoiler:
								case P.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, h.length);
						if (e !== P.a.Approve && e !== P.a.Flair) {
							let t, r;
							const c = u.platform.currentPage && u.platform.currentPage.queryParams && u.platform.currentPage.queryParams.subreddit,
								l = c && Object(B.I)(u, c);
							e === P.a.Remove && l && h.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(a.fetchReasonsAndOpenModal)(l, h));
							const p = Object(d.e)(n, L.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: o
								} = n;
								e(ge());
								const r = t(),
									a = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = r.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									l = r.user.account && r.user.account.displayText;
								e(Object(i.c)());
								const u = await Object(m.a)(o(), a, {
									ids: c
								});
								u.ok ? e(Oe({
									...u.body,
									operation: a,
									ids: c,
									username: l
								})) : (e(_e(u.error)), e(Object(d.f)({
									kind: L.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							o(Object(d.f)(p))
						} else {
							const e = Object(d.e)(n, L.b.SuccessMod);
							o(Object(d.f)(e))
						}
					} else {
						o(Object(i.a)(O.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), L.b.Error);
						o(Object(d.f)(e))
					}
				}, je = Object(r.a)(G.a), Ce = Object(r.a)(G.c), ke = Object(r.a)(G.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return $
			})), n.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), n.d(t, "removalReasonsFailed", (function() {
				return te
			})), n.d(t, "removalReasonsRequested", (function() {
				return ne
			})), n.d(t, "removalReasonAddedPending", (function() {
				return se
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), n.d(t, "addRemovalReason", (function() {
				return ie
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), n.d(t, "editRemovalReason", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), n.d(t, "deleteRemovalReason", (function() {
				return be
			})), n.d(t, "removedItemsSelected", (function() {
				return he
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return xe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), n.d(t, "removalReasonMessagePending", (function() {
				return Oe
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return je
			})), n.d(t, "submitRemovalReason", (function() {
				return Ce
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ke
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
			var j = function() {
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
					api: v,
					models: O,
					reasonOrder: E,
					removedItemIds: j
				}),
				k = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				S = n("./src/lib/makeCommentsPageKey/index.ts"),
				I = n("./src/lib/makeDraftKey/index.ts"),
				w = n("./src/reddit/actions/bulkActions/index.ts"),
				M = n("./src/reddit/actions/comment/index.ts"),
				N = n("./src/reddit/actions/comment/authoring.ts"),
				T = n("./src/reddit/actions/comment/moderation.ts"),
				R = n("./src/reddit/actions/modal.ts"),
				A = n("./src/reddit/actions/post.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				B = n("./src/lib/omitHeaders/index.ts"),
				D = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				H = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: k.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
					endpoint: Object(U.a)(Object(H.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`)),
					method: k.ob.POST,
					type: "json",
					data: t
				});
			var q = n("./src/reddit/helpers/isPost.ts"),
				G = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = n("./src/reddit/helpers/routeKey/index.ts"),
				Q = n("./src/reddit/models/ModQueue/index.ts"),
				K = n("./src/reddit/models/PostDraft/index.ts"),
				z = n("./src/reddit/models/RemovalReason/index.ts"),
				X = n("./src/reddit/models/Toast/index.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
				}
			});
			const $ = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(y.a)(i),
				te = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ne = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t($());
					const i = await ((e, t) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.ob.GET
					}))(o(), r);
					i.ok ? t(ee({
						subredditId: e,
						response: i.body
					})) : t(te(i.error))
				}, se = Object(y.a)(a), oe = Object(y.a)(d), re = Object(y.a)(c), ie = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(se());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: k.ob.POST,
						data: n
					}))(i(), a, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, r = {
							...t,
							id: o
						};
						n(oe({
							subredditId: e,
							reason: r
						})), n(Object(P.f)({
							kind: X.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(re(d.error))
				}, ae = Object(y.a)(l), de = Object(y.a)(m), ce = Object(y.a)(u), le = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ae());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`),
						method: k.ob.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), a, t);
					d.ok ? (n(de({
						subredditId: e,
						reason: t
					})), n(Object(P.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ce(d.error))
				}, me = Object(y.a)(p), ue = Object(y.a)(b), pe = Object(y.a)(h), be = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(me());
					const d = await ((e, t, n) => Object(F.a)(Object(B.a)(e, [D.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`),
						method: k.ob.DELETE
					}))(i(), a, t);
					d.ok ? (n(ue({
						subredditId: e,
						reasonId: t
					})), n(Object(P.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(pe(d.error))
				}, he = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(ne(e)), n(he({
						subredditId: e,
						itemIds: t
					})), n(Object(R.i)(L.a.ADD_REMOVAL_REASON))
				}, xe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), je = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, n, s, o, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(q.a)(u) ? z.e.Post : z.e.Comment,
						b = p === z.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === z.e.Post ? A.Q : M.j;
					if (!b || !m) return !1;
					i(xe()), i(h({
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
						if (i(ve()), t) {
							i(Oe());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								a = await V(c(), Object(z.h)(o, p), p);
							if (a.ok) {
								if ([z.f.Public, z.f.PublicAsSubreddit].includes(s)) {
									if (i(Ee()), a.body) {
										const e = Object(G.a)(a.body),
											t = {
												comment: e,
												parentId: u
											},
											n = Object(Z.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(J.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: k.x,
												hasSortParam: !0
											})), p === z.e.Post) {
											const n = Object(I.a)(K.c.replyToPost, u);
											i(Object(N.r)({
												...t,
												headCommentId: Object(Y.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[u];
											i(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && i(Object(M.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === z.e.Comment) {
											const e = Object(I.a)(K.c.replyToComment, b.id),
												n = Object(Y.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											i(Object(N.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else i(_e());
								return !0
							}
							return i(je(a.error)), !1
						}
					} else i(ge(x.error)), i(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, n, o, r) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(xe());
					const u = Object(P.f)({
							kind: X.b.SuccessMod,
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
							operation: Q.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(w.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await V(c(), Object(z.h)(s, z.e.Bulk), z.e.Bulk);
							r.ok ? (i(_e()), i(u)) : i(je(r.error))
						} else i(u)
					} else i(ge(b.error))
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
			const o = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
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
			const x = e => Object(r.f)({
					id: e,
					kind: p.b.Error,
					duration: r.a,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				v = (e, t) => Object(r.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				g = (e, t) => Object(r.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var O = n("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(o.a)(b.i),
				E = Object(o.a)(b.h),
				j = Object(o.a)(b.G),
				C = (Object(o.a)(b.j), Object(o.a)(b.F), Object(o.a)(b.g)),
				k = Object(o.a)(b.f),
				y = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await m(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(v(n, S({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await u(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(g(n, y({
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
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await m(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(v(n, w({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await u(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
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
				M = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, o, a) => {
						let {
							gqlContext: d
						} = a;
						var l, m;
						const u = Object(h.a)(n),
							b = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									input: {
										...n,
										subredditId: t
									}
								}
							}))(d(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(j({
							subredditId: t,
							notificationLevel: n
						})), e(Object(r.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(r.f)({
							kind: p.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const a = await (e => Object(i.a)(e, d))(o());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: n
						}))
					} else e(E()), e(Object(r.f)({
						duration: r.a,
						kind: p.b.Error,
						text: s.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: r
						} = o;
						var i, a;
						const d = await u(r(), t);
						if (d.ok && d.body && (null === (a = null === (i = d.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(C(t)), e(g(n));
						else {
							e(x(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, o) => {
						let {
							gqlContext: i
						} = o;
						var a, d;
						const c = n(),
							l = Object(f.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(r.f)({
								id: n,
								kind: p.b.Error,
								duration: r.a,
								text: s.fbt._("Sorry, r/{subreddit name} is already muted.", [s.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(O.a)(i(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(r.f)({
								id: e,
								kind: p.b.Error,
								duration: r.a,
								text: s.fbt._("Sorry, r/{subreddit name} isn't a community.", [s.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const g = h.id,
							_ = await m(i(), g);
						if (_.ok && _.body && (null === (d = null === (a = _.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(k([h])), e(v(h.name));
						else {
							e(x(`error-muting-${g}`))
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
			const u = Object(o.a)(a.z),
				p = Object(o.a)(a.y),
				b = Object(o.a)(a.x),
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
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
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
						j = await Object(c.b)(v(), t, E);
					if ((null === (O = null === (g = j.error) || void 0 === g ? void 0 : g.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(j.body) && (null === (_ = j.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					j.ok && (e(Object(r.c)({
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
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/helpers/trackers/modTools.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				p = n("./src/reddit/components/Hovercards/helpers.ts"),
				b = n("./src/reddit/components/PostTopMeta/index.tsx"),
				h = n("./src/reddit/hooks/useIsOverlay.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/redditGQL/types.ts");
			const v = Object(l.v)();
			t.a = v(e => {
				let {
					pageLayer: t,
					postOrComment: n,
					className: l
				} = e;
				var v;
				const g = Object(h.a)(),
					O = Object(i.d)(),
					_ = Object(a.a)(),
					E = (null === (v = null == t ? void 0 : t.urlParams) || void 0 === v ? void 0 : v.pageName) === c.wb.Modqueue,
					j = Object(o.useCallback)(() => {
						const e = Object(p.b)({
							itemId: n.id,
							tooltipIdPrefix: u.a,
							tooltipType: g ? b.f.Lightbox : void 0
						});
						O(Object(m.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: x.A.Note
							}
						})), _(Object(d.a)(n.id, n.authorId))
					}, [n, O, g, _]);
				return !E || Object(f.p)(n.author) ? null : r.a.createElement("button", {
					className: l,
					onClick: j
				}, s.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
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
				j = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				S = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				I = n.n(S);
			const w = Object(h.v)(),
				M = e => `Distinguish--Dropdown--${e}`,
				N = Object(a.c)({
					currentUser: O.m,
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
						return Object(g.b)(M(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.i)(e, t) || Object(v.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.W
				}),
				T = Object(i.b)(N, (e, t) => {
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
							tooltipId: M(n.id)
						}))
					}
				});
			t.a = w(T(l.a.wrapped(Object(b.c)(e => {
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
					sendEvent: S,
					pageLayer: w,
					...M
				} = e;
				const N = Object(p.b)(n),
					T = n.isApproved && N,
					R = !n.isRemoved || n.bannedBy === c.m,
					A = a,
					P = e => S(Object(f.c)(e, n.id)),
					L = "chat_comments" === (null == w ? void 0 : w.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && r.a.createElement(y.a, {
					text: T ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), L && S(Object(f.b)("approve", n.id)), P("approve")
					}
				}, r.a.createElement(_.a, {
					className: I.a.icon
				})), R && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: n.bannedBy === c.m ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), L && S(Object(f.b)("remove", n.id)), n.bannedBy === c.m ? P("confirm_remove") : P("remove")
					}
				}, r.a.createElement(j.a, {
					className: I.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), P("spam")
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
						h(), P(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(E.a, {
					className: I.a.icon
				})), A && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(k.a, {
					className: Object(d.a)(I.a.icon, I.a.Show)
				})))
			}), "CommentModToolsFlatlist", I.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Author.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/models/Comment/index.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				p = n.n(u);
			const b = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: u,
					isEmbeddedLiveChat: b,
					isStrong: h,
					onClick: f,
					renderedInOverlay: x
				} = e;
				const v = Object(a.f)(s),
					g = o.a.createElement(d.b, {
						ignore: v || !!s.distinguishType && s.distinguishType !== i.J.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, o.a.createElement(m.a, {
						className: t,
						collapsed: u,
						comment: s,
						isAuthorDeleted: Object(a.f)(s),
						isCommentAuthorBlocked: Object(a.g)(s),
						isEmbeddedLiveChat: b,
						isStrong: h,
						onClick: f
					}));
				return v || b ? g : o.a.createElement(c.b, {
					className: Object(r.a)(p.a.authorHoverCard, n),
					collapsed: u,
					isCommentAuthorBlocked: Object(a.g)(s),
					postOrComment: s,
					tooltipType: x ? l.f.Lightbox : void 0
				}, g)
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/AuthorLink/index.tsx"),
				d = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				c = n.n(d);
			const l = e => {
				const {
					className: t,
					collapsed: n,
					comment: r,
					isAuthorDeleted: d,
					isCommentAuthorBlocked: l,
					isEmbeddedLiveChat: m,
					isStrong: u,
					onClick: p,
					style: b
				} = e;
				return n && l ? i.a.createElement("p", {
					className: Object(o.a)(c.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : i.a.createElement(a.a, {
					author: r.author,
					className: Object(o.a)(c.a.commentAuthorLink, t),
					isAuthorDeleted: d,
					isCommentAuthorBlocked: l,
					forceOpenInNewTab: m,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: p,
					style: b
				}, r.author)
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Created.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/reddit/actions/comment/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/HumanDate/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts");
			const b = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: a,
						permalink: b,
						renderedInOverlay: f,
						isBlockingInterstitialEnabled: x
					} = e, v = Object(r.d)(), g = Object(p.d)("CommentTopMeta--Created--", n.id, f), O = () => v(Object(c.h)({
						tooltipId: g
					}));
					return o.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(i.a)(b, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: g,
						onClick: e => {
							null == a || a(e), h(v, n.id), x && (e.preventDefault(), v(Object(d.X)(Object(u.b)(b), n.postId)))
						},
						onMouseEnter: O,
						onMouseLeave: O,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, o.a.createElement(l.d, {
						seconds: n.created,
						shortenedUnit: s
					}), o.a.createElement(m.c, {
						tooltipId: g
					}, o.a.createElement(l.b, {
						seconds: n.created
					})))
				},
				h = (e, t) => {
					window.addEventListener("focus", (function n() {
						f(e, t, n)
					}))
				},
				f = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(a.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(a.h)({
						commentListNodeId: t
					})), 5e3)
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/HumanDate/index.tsx"),
				a = n("./src/reddit/controls/MetaData/index.tsx"),
				d = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					compact: n,
					editedAt: s
				} = e;
				return o.a.createElement(a.a, {
					className: Object(r.a)(c.a.editedText, t)
				}, l._("edited {time}", [l._param("time", o.a.createElement(i.d, {
					seconds: s,
					shortenedUnit: n
				}))], {
					hk: "1tiB0u"
				}))
			}
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
		"./src/reddit/components/Comments/Comment/TopMeta/Role.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/colors/constants.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(s || (s = {}));
			var f = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				x = n.n(f);
			const v = {
					[s.Admin]: {
						color: l.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: u.b
					},
					[s.Mod]: {
						color: l.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => Object(u.e)(e.subredditDisplayText)
					},
					[s.ModTeam]: {
						color: l.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => Object(u.e)(e.subredditDisplayText)
					},
					[s.Op]: {
						color: l.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: u.f
					},
					[s.AlumniAdmin]: {
						color: l.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: u.a
					},
					[s.Contractor]: {
						color: l.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: u.c
					}
				},
				g = e => {
					const t = Object(a.d)(),
						n = function(e) {
							if (e.isAdmin) return s.Admin;
							const t = e.isMod || e.distinguishType === b.J.MODERATOR;
							return t && e.author && Object(h.a)(e.author) ? s.ModTeam : t ? s.Mod : e.isOp ? s.Op : e.distinguishType === b.J.ALUMNI_ADMIN ? s.AlumniAdmin : e.authorIsContractor ? s.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === s.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: r,
						getLabel: d,
						tooltipTemplate: l
					} = v[n], f = d(), g = Object(u.d)(o, e.comment.id, e.renderedInOverlay), _ = l(e), E = () => t(Object(m.h)({
						tooltipId: g
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
						className: Object(c.a)(x.a.role, e.className),
						style: {
							color: r
						},
						id: g,
						onMouseEnter: E,
						onMouseLeave: E
					}, i.a.createElement("span", null, f), (n === s.Mod || n === s.ModTeam) && i.a.createElement(O, null)), i.a.createElement(p.c, {
						tooltipId: g,
						text: _
					}))
				},
				O = () => i.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: x.a.modAchievement,
					src: `${d.a.assetPath}/img/powerups/moderator-achievement.svg`
				})
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
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR",
				addModNote: "_3xk2cMvsSpPHBinHNwkDHi"
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
				m = n("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx"),
				p = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				b = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				x = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				v = n("./src/reddit/components/PostTopMeta/index.tsx"),
				g = n("./src/reddit/controls/MetaData/index.tsx"),
				O = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/selectors/gold/powerups/index.ts"),
				k = n("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				y = n("./src/config.ts"),
				S = n("./src/reddit/actions/tooltip.ts"),
				I = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				N = n.n(M);
			const T = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: o
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(S.h)({
						tooltipId: l
					})),
					l = Object(w.d)("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(N.a.cakedayIcon, t),
					src: `${y.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(I.c, {
					tooltipId: l,
					text: m
				}))
			};
			var R = n("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				A = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				P = n.n(A);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = () => r.a.createElement(g.a, {
				className: P.a.crowdControlText
			}, L._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				D = n("./src/reddit/constants/postLayout.ts"),
				U = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				H = n("./src/reddit/helpers/isRemoved.ts"),
				W = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				V = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = n("./src/reddit/hooks/usePageLayer.ts"),
				G = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				J = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				Q = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				K = n("./src/reddit/icons/fonts/Report/index.tsx"),
				z = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				X = n("./src/reddit/selectors/modQueue.ts"),
				Y = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				Z = n.n(Y);
			const $ = e => {
				let {
					comment: t,
					ignoreLock: o,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					l = Object(q.a)(),
					m = Object(i.e)(e => D.e[Object(U.V)(e, {
						pageLayer: l
					})] === D.d.Card),
					u = Object(i.e)(e => Object(X.b)(e, m)),
					p = e => () => c(Object(S.f)({
						tooltipId: e
					})),
					b = () => c(Object(S.i)()),
					h = e => Object(w.d)(e, t.id, a),
					f = h("CommentTopMeta--Approve--"),
					x = h("CommentTopMeta--Remove--"),
					v = h("CommentTopMeta--Report--"),
					g = h("CommentTopMeta--Spam--"),
					O = p(x);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(G.a, {
					className: Z.a.approveIcon,
					desc: Object(W.a)(t),
					id: f,
					onMouseEnter: p(f),
					onMouseLeave: b,
					isFilled: !0
				}), r.a.createElement(I.c, {
					tooltipId: f,
					text: Object(W.a)(t)
				})), Object(H.a)(t) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					className: Z.a.removeIcon,
					desc: Object(W.b)(t),
					id: x,
					onMouseEnter: O,
					onMouseLeave: b,
					isFilled: !0
				}), r.a.createElement(I.c, {
					tooltipId: x,
					text: Object(W.b)(t)
				})), Object(H.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !u && r.a.createElement("a", {
					className: Z.a.removalReason,
					onClick: () => {
						Promise.all([n.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), n.e("removalReasonActions")]).then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(H.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !u && r.a.createElement("a", {
					className: Z.a.removalReason,
					onMouseEnter: O,
					onMouseLeave: b
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(J.a, {
					className: Z.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(z.a, {
					className: Z.a.spamIcon,
					desc: Object(W.d)(t),
					id: g,
					onMouseEnter: p(g),
					onMouseLeave: b,
					isFilled: !0
				}), r.a.createElement(I.c, {
					tooltipId: g,
					text: Object(W.d)(t)
				})), Object(V.a)(t) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, {
					className: Z.a.reportIcon,
					desc: Object(W.c)(t.numReports),
					id: v,
					onMouseEnter: p(v),
					onMouseLeave: b,
					isFilled: !0
				}), r.a.createElement(I.c, {
					tooltipId: v,
					text: Object(W.c)(t.numReports)
				})), t.isDeleted && d && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					className: Z.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: Z.a.userDeletion
				}, s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var ee = n("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				te = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = () => r.a.createElement(g.a, {
				className: ne.a.stickiedText
			}, se._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var re = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ie = n.n(re);
			const ae = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					onCommentAuthorClick: y,
					onCommentTimestampClick: S,
					permalink: I,
					renderContractorBadge: w,
					renderedInOverlay: M,
					subredditDisplayText: N,
					isAdmin: A
				} = e, P = Object(E.a)(), L = a.subredditId, D = Object(i.e)(e => Object(C.e)(e, {
					subredditId: L
				}));
				if (a.isDeleted && !A) return r.a.createElement("div", {
					className: Object(d.a)(ie.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ie.a.authorLine
				}, r.a.createElement("span", {
					className: ie.a.metaText
				}, a.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(g.c, {
					className: ie.a.separator
				}), r.a.createElement(R.a, {
					key: "Created",
					className: ie.a.metaText,
					comment: a,
					compact: !0,
					permalink: I,
					renderedInOverlay: M
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(ie.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ie.a.authorLine
				}, !Object(j.f)(a) && r.a.createElement(b.b, {
					className: ie.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: ie.a.baselineItem
				}, r.a.createElement(k.a, {
					authorClassName: ie.a.author,
					collapsed: n,
					comment: a,
					onClick: y,
					renderedInOverlay: M
				})), !Object(j.f)(a) && u && r.a.createElement(x.a, {
					postOrComment: a,
					className: ie.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(F, null), r.a.createElement(ee.a, {
					className: ie.a.role,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: w,
					renderedInOverlay: M
				}), a.isAuthorCakeday ? r.a.createElement(T, {
					className: ie.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: M
				}) : !Object(j.f)(a) && D && r.a.createElement(p.a, {
					className: ie.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						P(Object(_.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: ie.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), r.a.createElement(g.c, {
					className: ie.a.separator
				}), r.a.createElement(R.a, {
					key: "Created",
					className: ie.a.metaText,
					comment: a,
					compact: !0,
					onClick: S,
					permalink: I,
					renderedInOverlay: M
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: ie.a.separator
				}), r.a.createElement(oe, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: ie.a.separator
				}), r.a.createElement(B.a, {
					compact: !0,
					editedAt: a.editedAt
				})), r.a.createElement($, {
					comment: a,
					ignoreLock: m,
					renderedInOverlay: M,
					isAdmin: A
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: M ? v.f.Lightbox : void 0
				})), c && !Object(O.o)(c) && r.a.createElement("span", {
					className: ie.a.userFlairLine
				}, r.a.createElement(h.c, {
					className: ie.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var de = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				ce = n("./src/reddit/selectors/economics.ts"),
				le = n("./src/reddit/models/Flair/index.ts"),
				me = n("./src/reddit/selectors/comments.ts"),
				ue = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				pe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				be = n("./src/reddit/selectors/subreddit.ts"),
				he = n("./src/reddit/selectors/userFlair.ts"),
				fe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				xe = n.n(fe);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = c.a.wrapped(h.c, "RightPositionedAuthorFlair", xe.a),
				Oe = c.a.span("DeletedText", xe.a),
				_e = c.a.wrapped(g.a, "MetaSeparator", xe.a),
				Ee = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(ce.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(be.N)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(he.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: ue.b,
					isBlockingInterstitialV2Enabled: ue.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(pe.i)(e, n.subredditId)
					}
				}));
			t.a = Ee(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: u,
					flair: p,
					flairPosition: x,
					hasBadges: O,
					hideAwards: _ = !1,
					ignoreFlairPosition: E,
					ignoreLock: C,
					isAdmin: y,
					isBlockingInterstitialEnabled: S,
					isBlockingInterstitialV2Enabled: I,
					isModWithUserNotesPermissions: w,
					isEmbeddedLiveChat: M,
					isPostComment: N,
					onCommentAuthorClick: T,
					onCommentTimestampClick: A,
					renderContractorBadge: P,
					renderedInOverlay: L,
					subredditDisplayText: D,
					userHasNft: U
				} = e, H = r.a.createElement(r.a.Fragment, null, r.a.createElement(de.b, {
					commentId: i.id
				}), r.a.createElement(de.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (N) return r.a.createElement(r.a.Fragment, null, r.a.createElement(ae, {
					className: Object(d.a)(n, {
						[xe.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: p || null,
					ignoreLock: C,
					isAdmin: y,
					isModWithUserNotesPermissions: w,
					onCommentAuthorClick: T,
					onCommentTimestampClick: A,
					permalink: a,
					renderContractorBadge: !!P,
					renderedInOverlay: L,
					subredditDisplayText: D
				}), H);
				if (i.isDeleted) return r.a.createElement(je, ve({}, e, {
					className: Object(d.a)(n, xe.a.container, {
						[xe.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Ce, ve({}, e, {
					className: Object(d.a)(n, xe.a.container, {
						[xe.a.collapsed]: s
					})
				}));
				const W = !E && x === le.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, xe.a.container, {
						[xe.a.collapsed]: s,
						[xe.a.hasBadges]: O
					}),
					"data-testid": "comment-top-meta"
				}, p && W && r.a.createElement(h.c, {
					flair: p,
					forceSmallEmojis: u
				}), !Object(j.f)(i) && r.a.createElement(b.b, {
					className: xe.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(k.a, {
					authorClassName: U ? xe.a.NftAuthor : void 0,
					collapsed: s,
					comment: i,
					isEmbeddedLiveChat: M,
					isStrong: !!u,
					onClick: T,
					renderedInOverlay: L
				}), o && r.a.createElement(F, null), o && r.a.createElement(g.c, {
					className: xe.a.metaText,
					key: "crowdControlSeparator"
				}), p && !W && r.a.createElement(ge, {
					flair: p,
					forceSmallEmojis: u
				}), !u && r.a.createElement(f.a, {
					className: xe.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(g.c, {
						className: xe.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), H, r.a.createElement(ee.a, {
					className: xe.a.authorRole,
					comment: i,
					subredditDisplayText: D,
					renderContractorBadge: !!P,
					renderedInOverlay: L
				}), !u && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !N && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.b, {
					className: xe.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(g.c, {
					className: xe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(R.a, {
					key: "Created",
					className: xe.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: L,
					isBlockingInterstitialEnabled: S || I
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: xe.a.separator
				}), r.a.createElement(oe, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: xe.a.separator
				}), r.a.createElement(B.a, {
					editedAt: i.editedAt
				}))), r.a.createElement($, {
					comment: i,
					ignoreLock: C,
					renderedInOverlay: L
				}), !_ && r.a.createElement(l.a, {
					thing: i,
					tooltipType: L ? v.f.Lightbox : void 0
				}), w && r.a.createElement(m.a, {
					postOrComment: i,
					className: xe.a.addModNote
				}))
			});
			const je = e => {
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
					}, r.a.createElement(Oe, null, i.deletedBy === j.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(R.a, {
						key: "Created",
						className: xe.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && ke({
						childrenInfo: t
					}))
				},
				Ce = e => {
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
					}, r.a.createElement("div", null, r.a.createElement(u.a, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t),
						collapsed: i
					})), r.a.createElement(g.b, {
						className: xe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(g.c, {
						className: xe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(R.a, {
						key: "Created",
						className: xe.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d || c
					}), ke({
						childrenInfo: s
					}))
				},
				ke = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(_e, {
						className: xe.a.metaText
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
		"./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				r = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				i = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				a = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				d = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				c = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				})
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
				return F
			})), n.d(t, "b", (function() {
				return U
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/moderation.ts"),
				m = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				b = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				h = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				f = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				x = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				v = n("./src/reddit/components/ModModeReports/index.tsx"),
				g = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				O = n("./src/reddit/components/RichTextJson/index.tsx"),
				_ = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				C = n("./src/reddit/models/Vote/index.ts"),
				k = n("./src/reddit/selectors/comments.ts"),
				y = n("./src/reddit/selectors/commentSelector.ts"),
				S = n("./src/reddit/selectors/modQueue.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				N = n.n(M),
				T = n("./src/lib/lessComponent.tsx");
			const R = T.a.div("VoteSpacer", N.a),
				A = T.a.div("ContentWrapper", N.a),
				P = T.a.div("CommentContentWrapper", N.a),
				L = T.a.div("CommentBody", N.a),
				F = T.a.div("ParentPostTitle", N.a),
				B = T.a.div("CommentParentWrapper", N.a),
				D = Object(i.c)({
					comment: (e, t) => Object(y.c)(e, t),
					commentPermalink: k.m,
					flair: k.e,
					subreddit: I.N,
					isModQueueDisplayEnabled: e => {
						const t = _.e[Object(E.U)(e, {})] === _.d.Card;
						return Object(S.b)(e, t)
					},
					isUpdatedContent: (e, t) => {
						let {
							commentId: n
						} = t;
						var s, o;
						return !!(null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(n))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							commentId: n
						} = t;
						var s;
						return (null === (s = e.features) || void 0 === s ? void 0 : s.realtimeUpdateAnimationId) === n
					},
					isNightMode: w.fb
				}),
				U = Object(r.b)(D, (e, t) => {
					let {
						commentId: n,
						trackClick: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(l.g)(n)),
						onVoteClick: t => {
							const [o, r] = t === C.a.upvoted ? [Object(c.s)(n), "upvote_comment"] : [Object(c.k)(n), "downvote_comment"];
							s(r)(), e(o)
						}
					}
				}),
				H = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = U(T.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: i,
					isCheckboxSelected: d = !1,
					onIgnoreReports: c,
					onVoteClick: l,
					showModTools: _,
					subreddit: E,
					showBulkActionCheckbox: C,
					toggleCheckbox: k
				} = e, y = Object(x.a)(n);
				return o.a.createElement(u.a, {
					className: Object(a.a)(t, "UnthreadedComment"),
					clickTrackingId: n.id,
					permalink: s
				}, o.a.createElement(g.a, {
					model: n,
					handleVote: l,
					showBulkActionCheckbox: C,
					isCheckboxSelected: d,
					toggleCheckbox: k
				}), o.a.createElement(R, null, o.a.createElement(A, null, o.a.createElement(B, null, n.postTitle && o.a.createElement(F, null, n.postTitle), n.postAuthor && o.a.createElement(h.a, {
					comment: n
				})), o.a.createElement(P, null, o.a.createElement(p.a, {
					comment: n
				}, o.a.createElement(L, null, o.a.createElement(O.b, {
					content: Object(j.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: H(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				})), o.a.createElement(b.a, {
					comment: n,
					flair: r,
					subredditName: E ? E.displayText : null
				}), y && o.a.createElement(f.a, {
					thing: n
				}), i && o.a.createElement(v.a, {
					onIgnoreReports: c,
					reportable: n
				}), _ && !n.isDeleted && o.a.createElement(m.a, {
					comment: n
				}))))))
			}, "Component", N.a))
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
			class j extends r.a.Component {
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
			t.a = E(j)
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
					isNightmodeOn: u.fb
				}));
			t.a = f(e => {
				const {
					isResponsive: t,
					source: n
				} = e, s = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, r = new URL(n), i = t && !r.searchParams.has("s") ? Object(a.a)(Object(c.a)(n), s) : Object(c.a)(n), u = {
					overflow: "hidden"
				};
				return u.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (u.margin = "0 auto"), e.isListing || (u.maxHeight = `${m.d}px`), void 0 !== e.maxHeight && (u.maxHeight = e.maxHeight || void 0), e.isTweet || (u.height = "100%"), o.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: i,
					style: u,
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
				h = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				O = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = n.n(S);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => e > 2 * _.d,
				N = e => r.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[I.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				T = e => {
					const t = Object(c.a)(I.a.image, f.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${_.j}px`), e.isListing || e.isTall && M(e.height) || (n.maxHeight = `${e.maxHeight||_.d}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
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
					Object(O.a)(i, l, m.current);
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
					const h = Object(o.useRef)({
						height: b
					});
					return e.renderSmallMedia ? r.a.createElement("div", {
						ref: i,
						style: h.current
					}, a && r.a.createElement(N, w({}, e, {
						className: t
					}))) : r.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				R = e => {
					const t = {};
					return (!e.showFull && Object(_.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${_.j}px`, e.shouldBlur && (t.maxWidth = Object(_.M)(e.height, e.width) ? `${_.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(c.a)(I.a.container, e.className, {
							[I.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				A = Object(i.b)(() => Object(d.a)(E.F, C.lb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(E.b)(e, s) : null
				}, j.d, E.G, (e, t, n, s, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: o
				})));
			t.a = A(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": y.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(v.a)(e.post, e.pageType))
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const P = (e, t) => r.a.createElement(T, {
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				L = e => {
					let {
						onClick: t,
						...n
					} = e;
					const o = Object(_.M)(n.height, n.width),
						i = M(n.height) && o;
					return r.a.createElement(R, w({}, n, {
						className: `${o?`${k.a} `:""}${n.className||""}`
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
						className: I.a.imageLink
					}, P(o, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && r.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > _.j && Object(_.M)(n.height, n.width) && r.a.createElement("div", {
						className: I.a.seeMore
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
					d = Object(a.C)(e.height, e.width, e.forceAspectRatio);
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
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
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
					onClick: u,
					...p
				} = e;
				const b = Object(r.useRef)(),
					h = Object(r.useRef)(),
					_ = Object(g.a)(d);

				function E(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(r.useEffect)(() => {
					if (E(!d && (t || s)), h.current && o) return b.current = function(e, t) {
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
					}(h.current, o), () => {
						b.current && b.current()
					}
				}, []), Object(r.useEffect)(() => {
					_ !== d && E(!d && (t || s))
				}, [_, d, t, s]), i.a.createElement("video", O({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: u
				}), i.a.createElement("source", {
					src: Object(v.a)(m || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(E);
			const C = Object(d.c)({
				autoplayPref: b.d,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function k(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: r,
					started: d
				} = Object(a.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: v,
					showFull: g,
					shouldPause: O,
					width: E,
					isListing: k,
					className: y,
					showCentered: S,
					originalSource: I,
					isPromoted: w,
					renderSmallMedia: M,
					onClick: N
				} = e, T = t && !(w && Object(c.hasAcceptableAds)()), R = Object(a.d)();

				function A(e) {
					R(e ? Object(m.s)(b) : Object(m.Q)(b))
				}

				function P() {
					return R(Object(m.L)({
						postId: b
					}))
				}
				const L = o()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && R(Object(m.D)(b))
				}, 200);

				function F(e) {
					e.persist(), L(e)
				}

				function B(e) {
					var t;
					(r || U(e), d) || (t = e.timeStamp, R(Object(m.M)(b, t)))
				}

				function D(e) {
					R(Object(m.r)(b, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						R(Object(m.P)({
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

				function H(e) {
					s || B(e), r || U(e), R(Object(m.O)(b))
				}

				function W() {
					const e = {};
					return S && (e.margin = "0 auto"), k || (e.maxHeight = `${p.d}px`), i.a.createElement(_, {
						autoplay: T,
						className: Object(l.a)(u.a, j.a.styledVideo, {
							[j.a.renderSmallMedia]: M
						}),
						height: M ? void 0 : x,
						isListing: k,
						isNotCardView: v,
						key: b,
						loop: !0,
						onBufferingChange: A,
						onClick: N,
						onLoadStart: D,
						onLoadedData: B,
						onLoadedMetadata: U,
						onPause: P,
						onPlaying: H,
						onTimeUpdate: F,
						shouldLoad: h,
						shouldPause: O,
						showCentered: S,
						showFull: g,
						source: f,
						style: M ? void 0 : e,
						width: M ? void 0 : E
					})
				}
				return k ? W() : i.a.createElement("div", {
					className: Object(l.a)(j.a.container, y, {
						[j.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, W()))
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
				j = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				C = Object(i.b)(j, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => r.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
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
				return C
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
				j = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				k = Object(d.c)({
					flairData: g.d,
					subreddit: O.X
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
						className: j.a.buttonsRow
					}, i.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.o, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const S = Object(a.b)(k, (e, t) => ({
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
					importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, n) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
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
				return j
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return R
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
				j = d.a.sub("Sub", a.a),
				C = d.a.sup("Sup", a.a),
				k = d.a.table("Table", a.a),
				y = d.a.tr("Tr", a.a),
				S = d.a.td("Tdl", a.a),
				I = d.a.td("Tdc", a.a),
				w = d.a.td("Tdr", a.a),
				M = d.a.th("Thl", a.a),
				N = d.a.th("Thc", a.a),
				T = (d.a.th("Thr", a.a), d.a.wrapped(e => o.a.createElement(r.b, e), "A", a.a)),
				R = d.a.wrapped(c.a, "A", a.a)
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
				return j
			})), n.d(t, "b", (function() {
				return C
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
				O = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				_ = e => r()(e, O),
				E = e => null == e ? void 0 : e.findIndex(O),
				j = e => {
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
						rtJsonElementProps: j,
						useExplicitTextColor: C,
						shouldBlur: k,
						onClickRevealSpoilerText: y,
						mediaProps: S
					} = e, I = s.document, w = [], M = e.mediaMetadata || null, N = E(I), T = _(I);
					if (k && !o && !i) return a.a.createElement(v, {
						className: Object(d.a)(u.j, n)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!r, !!c))));
					if (-1 !== N)
						for (let a = N; a <= T; a++) {
							const e = I[a];
							switch (e.e) {
								case p.k:
									w.push(h.c(e, j, a));
									break;
								case p.l:
									w.push(h.d(a));
									break;
								case p.b:
									w.push(h.a(e, M, j, a));
									break;
								case p.c:
									w.push(h.b(e, a));
									break;
								case p.p:
									w.push(h.f(e, M, j, a, y));
									break;
								case p.A:
									w.push(h.h(e, M, j, a, y));
									break;
								case p.v:
									w.push(h.g(e, M, j, a, y, S));
									break;
								case p.h:
									w.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									w.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: j,
										mediaMetadata: M,
										renderMediaAsLinks: O,
										postId: f,
										altText: t,
										mediaProps: S
									}))
							}
						}
					return C ? a.a.createElement(v, {
						className: Object(d.a)(u.j, n)
					}, w) : a.a.createElement(g, {
						className: Object(d.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, w)
				};
			class C extends a.a.Component {
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
						return j(t)
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
				CommentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				commentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return U
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
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/RichTextJson/index.ts"),
				v = n("./src/reddit/components/RichTextJson/elements.tsx"),
				g = n("./src/reddit/endpoints/giphy/index.ts"),
				O = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = n("./src/reddit/hooks/useMounted.ts");
			var E = e => r.a.createElement("svg", {
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
				j = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				C = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					let {
						id: t,
						mp4Url: n,
						className: s,
						externalLink: i,
						onClick: a
					} = e;
					const d = i || Object(b.g)(t),
						c = Object(o.useRef)(null),
						[l, m] = Object(o.useState)(!1),
						[u, p] = Object(o.useState)(null),
						h = Object(_.b)(),
						f = Object(o.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!l && n && (m(!0), async function(e, t) {
									const n = Object(b.f)(e);
									t((await Object(g.a)(n)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [m, t, l, h]);
					Object(O.a)(c, f);
					const x = (null == u ? void 0 : u.display_name) || (null == u ? void 0 : u.username);
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(v.a, {
						href: d,
						target: "_blank",
						className: C.a.anchor
					}, n ? r.a.createElement("video", {
						className: C.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: a,
						ref: c
					}, r.a.createElement("source", {
						src: n
					})) : d), r.a.createElement("div", {
						className: C.a.attributionRow
					}, r.a.createElement(E, {
						className: C.a.giphyLogo
					}), r.a.createElement("span", {
						className: C.a.attributionText
					}, (null == u ? void 0 : u.profile_url) && x && r.a.createElement(r.a.Fragment, null, k._("by {=[name]}", [k._param("=[name]", r.a.createElement(v.a, {
						href: u.profile_url,
						target: "_blank"
					}, k._("{name}", [k._param("name", x)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), k._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				S = n("./src/reddit/components/RichTextJson/media.m.less"),
				I = n.n(S),
				w = n("./src/lib/lessComponent.tsx"),
				M = n("./src/reddit/helpers/media/index.ts");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const T = /\/(\w+)\/asset\/(\w+)\//,
				R = w.a.wrapped(v.a, "A", I.a),
				A = w.a.wrapped(l.a, "ImageBox", I.a),
				P = w.a.wrapped(e => r.a.createElement("p", e), "Caption", I.a),
				L = w.a.div("Placeholder", I.a),
				F = w.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = n === x.E ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[m, u] = Object(o.useState)(!1);
					return Object(o.useEffect)(() => {
						d && setTimeout(() => {
							u(!0)
						}, 1500)
					}), r.a.createElement(L, N({
						className: Object(i.a)(t, {
							[I.a.renderSmallMedia]: a,
							[I.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && m && r.a.createElement(p.t, {
						priority: p.c.Plain,
						className: I.a.ModalTopicsErrorButton,
						Icon: Object(h.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", I.a),
				B = (e, t) => {
					let {
						c: n,
						x: s,
						y: o
					} = e;
					return r.a.createElement("div", {
						className: I.a.MediaWrapper
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
				D = (e, t, n) => {
					const s = e.c;
					let o = "";
					return n && (n.e === x.s ? o = n.s.u : n.e === x.r ? o = n.s.gif : n.e === x.t && (o = (e => {
						const t = T.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), o ? r.a.createElement(R, {
						href: o,
						key: t,
						title: s
					}, s || o) : null
				},
				U = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: o,
						renderMediaAsLinks: a,
						postId: c,
						altText: l,
						mediaProps: p
					} = e;
					const h = x.F(o, t.id);
					if (a) return [D(t, n, h)];
					const v = [];
					return !h || h.e === x.s && null === h.s.x && null === h.s.y ? v.push(((e, t, n, s) => r.a.createElement(F, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : h.e === x.s ? v.push(((e, t, n, s, o) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: u,
							onClick: p
						} = o || {};
						let b = d;
						return u && (b = Object(M.i)(240, 20, d, c)), r.a.createElement("div", {
							className: Object(i.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n,
								[I.a.hasSmallMedia]: u
							})
						}, r.a.createElement(m.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, r.a.createElement(A, {
							altText: s,
							originalSource: d.u,
							postId: a,
							source: b.u,
							maxHeight: f.w,
							height: b.y,
							width: b.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: u,
							onClick: p
						})))
					})(h, n, !!t.c, l, p)) : h.e === x.r ? v.push(((e, t, n, s, o) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						return Object(b.h)(a) ? r.a.createElement(y, {
							key: t,
							id: a,
							mp4Url: c.mp4,
							className: I.a.CommentGiphyWrapper,
							externalLink: d,
							onClick: null == o ? void 0 : o.onClick
						}) : r.a.createElement("div", {
							className: Object(i.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n,
								[I.a.hasSmallMedia]: null == o ? void 0 : o.renderSmallMedia
							})
						}, r.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, r.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: a,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !(null == o ? void 0 : o.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == o ? void 0 : o.renderSmallMedia,
							onClick: null == o ? void 0 : o.onClick
						})))
					})(h, n, !!t.c, 0, p)) : h.e === x.t && v.push(((e, t, n, s) => {
						let {
							hlsUrl: o,
							dashUrl: a,
							x: c,
							y: l,
							isGif: u
						} = e;
						return r.a.createElement("div", {
							className: Object(i.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n
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
					})(h, n, !!t.c, c)), t.c && v.push(((e, t) => r.a.createElement(P, {
						key: t
					}, e))(t.c, `caption${n}`)), v
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return N
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "f", (function() {
				return P
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
								subreddit: p.lb(t)
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
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = n("./src/reddit/components/SubredditMention/index.tsx"),
				y = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts"),
				M = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const N = (e, t, n) => {
					const s = e.c || [],
						o = e.l,
						r = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						r.push(e.e === u.x ? e.t : U(e, t, a))
					}
					const c = d.x[o - 1];
					return a.a.createElement(c, {
						key: n
					}, r)
				},
				T = e => a.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, n, s, o) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						c = [];
					for (let a = 0; a < i; a++) c.push(L(r[a], t, n, a, o));
					return a.a.createElement(d.c, {
						key: s
					}, c)
				},
				A = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				P = (e, t, n, s, o) => {
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
							return R(e, t, n, s, o);
						case u.c:
							return A(e, s);
						case u.k:
							return N(e, n, s);
						case u.l:
							return T(s);
						case u.p:
							return P(e, t, n, s, o);
						case u.v:
							return B(e, t, n, s, o);
						case u.A:
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
				B = (e, t, n, s, o, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const i = e.c[0];
					return i.e !== u.m && i.e !== u.a || !Object(w.h)(i.id) ? a.a.createElement(d.j, {
						key: s
					}, D(e.c, t, n, o)) : Object(j.b)({
						node: i,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: r
					})
				},
				D = (e, t, n, s) => {
					const o = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === u.B) o.push(H(r, i));
						else if (r.e === u.y) o.push(a.a.createElement(C.a, {
							key: i,
							onClickReveal: s
						}, D(r.c, t, n, s)));
						else if (r.e === u.n) o.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === u.m || r.e === u.a) {
							if (r.id.startsWith("emote|")) {
								const e = u.F(t, r.id);
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
							const i = Object(M.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(I.b)(c) && (o = c.postId), c && Object(S.b)(c) && (r = c.id, o = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: o,
								commentId: r
							}, s);
						case u.z:
							return a.a.createElement(k.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case u.C:
						case u.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case u.g:
						case u.w:
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
						case h.Hf.SmIcon:
							return o.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case h.Hf.SmIconHc:
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
				j = e => {
					const t = _(e);
					return Object(v.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(C);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.v)(), I = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.o)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(x.fb)(e);
					return s || o
				},
				nigtmode: x.fb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class w extends o.a.Component {
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
					return e.backgroundColor = _(this.props), e.color = e.fill = j(this.props), e
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
					} = this.props, h = n ? k.a.widgetContentOnly : k.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, v = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: x
					}, m && o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: i,
						style: {
							...v,
							...this.props.headerStyles
						},
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(h, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, y._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(I(Object(d.a)(Object(l.c)(w))))
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
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...n
				} = e, {
					lastModAction: o,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, i = [], a = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: n
					} = e.node;
					if (!n) return;
					const s = null == n ? void 0 : n.id;
					s && (i.push(s), a[s] || (a[s] = {
						info: {},
						lastModAction: {}
					}), a[s].info = n, a[s].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: o,
					activeMods: i
				};
				return {
					subreddit: Object(s.a)(n),
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
						c = Object(r.f)(a, {
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
					subreddit: i.lb(e)
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
				if (t && (Object(o.b)(t) || Object(r.b)(t))) return Object(o.b)(t) ? i.SourceElement.Comment : Object(s.y)(n) ? i.SourceElement.PostDetail : Object(s.J)(n) ? i.SourceElement.ListingPostDetail : void 0
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
					screen: m.cb(e),
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
						c = Object(l.C)(e, {
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
						subreddit: m.mb(e, s),
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
					subreddit: m.nb(t, e),
					screen: m.cb(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: s.ITEM_POST,
					post: m.K(n, t),
					subreddit: m.nb(n, e),
					screen: m.cb(n)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: m.K(n, t),
					subreddit: m.nb(n, e),
					screen: m.cb(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: m.mb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.mb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.mb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const r = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: o.f.SubredditMuting,
						action: o.d.Mute,
						noun: o.e.Subreddit,
						subreddit: {
							id: t
						},
						...s.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				},
				i = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: o.f.SubredditMuting,
						action: o.d.Unmute,
						noun: o.e.Subreddit,
						subreddit: {
							id: t
						},
						...s.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				}
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
					widget: Object(i.yb)(n, {
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
					subreddit: i.lb(n),
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
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}

			function r() {
				const e = Object(s.useRef)(!0);
				return Object(s.useEffect)(() => () => {
					e.current = !1
				}, []), e
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
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement("i", c({
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
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
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", c({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), d.a.modActions, e.className)
			}))
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
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
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
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), d.a.stickyIcon, e.className),
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
			n.r(t), n.d(t, "select", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
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
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/constants/postLayout.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/layout/page/Listing/index.tsx"),
				_ = n("./src/reddit/models/ModQueue/index.ts"),
				E = n("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				j = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/lib/classNames/index.ts"),
				S = n("./node_modules/lodash/omit.js"),
				I = n.n(S),
				w = n("./src/lib/addQueryParams/index.ts"),
				M = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				R = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				A = n.n(R);
			const P = Object(l.c)({
				currentPage: e => e.platform.currentPage
			});
			var L = Object(c.b)(P)(e => {
				const t = e.currentPage.queryParams.sort === T.a.MostReportedFirst && ![M.wb.Modqueue, M.wb.Reports].includes(e.pathName),
					n = I()(e.currentPage.queryParams, t ? ["after", "before", "page", "sort"] : ["after", "before", "page"]);
				return d.a.createElement(N.default, {
					className: Object(y.a)(A.a.navChild, {
						[A.a.mIsActive]: e.isActive
					}),
					to: Object(w.a)(`/r/mod/about/${e.pathName}`, n)
				}, e.title)
			});
			var F = e => d.a.createElement("div", {
					className: A.a.navContainer
				}, d.a.createElement("div", {
					className: Object(y.a)(A.a.innerContainer, {
						[A.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, d.a.createElement("h1", {
					className: A.a.title
				}, k.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), d.a.createElement(L, {
					title: k.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), d.a.createElement(L, {
					title: k.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), d.a.createElement(L, {
					title: k.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), d.a.createElement(L, {
					title: k.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), d.a.createElement(L, {
					title: k.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				B = n("./src/reddit/components/ModQueueActivitySummaryCards/async.ts"),
				D = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				U = n("./src/config.ts"),
				H = n("./src/lib/lessComponent.tsx"),
				W = n("./src/lib/opener/index.ts"),
				V = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				q = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				G = n.n(q);
			const J = H.a.a("ExternalLink", G.a),
				Q = H.a.wrapped(N.default, "InternalLink", G.a);
			var K = () => d.a.createElement(V.a, {
				title: k.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, d.a.createElement(J, {
				href: U.a.redditModHelpUrl,
				rel: W.c,
				target: W.d.BLANK
			}, k.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), d.a.createElement(J, {
				href: `${U.a.redditUrl}/help/healthycommunities/`,
				rel: W.c,
				target: W.d.BLANK
			}, k.fbt._("Moderator code of conduct", null, {
				hk: "259o41"
			})), d.a.createElement(Q, {
				to: "/r/modsupport",
				rel: W.c,
				target: W.d.BLANK
			}, "r/modsupport"), d.a.createElement(J, {
				href: `${U.a.redditHelpUrl}/hc/en-us/requests/new`,
				rel: W.c,
				target: W.d.BLANK
			}, k.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var z = e => d.a.createElement("div", {
				className: e.isRealtimeMQUpdatesExperimentEnabled ? void 0 : A.a.sidebar
			}, e.isRealtimeMQUpdatesExperimentEnabled && d.a.createElement(B.b, null), e.subredditOrProfileUrl && d.a.createElement(D.a, null, d.a.createElement(V.a, {
				title: k.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, d.a.createElement(J, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, k.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), d.a.createElement(J, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, k.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), d.a.createElement(D.a, null, d.a.createElement(K, null)));
			const X = Object(g.v)(),
				Y = Object(l.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return o()([...Object(m.a)(n.search)])
					}
				}),
				Z = Object(l.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return o()([...Object(m.a)(n.search)])
					},
					layout: g.U,
					isModerator: e => Object(j.o)(e, {}).length > 0,
					isRealtimeMQUpdatesExperimentEnabled: E.a,
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
				$ = Object(l.a)(Y, g.U, j.o, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.pageName
				}, E.a, e => {
					var t;
					return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
				}, (e, t, n, s, o, r) => {
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
						pageName: s,
						postTypeFilter: c,
						postSort: l,
						profileName: d,
						queryVariables: h,
						subredditName: a,
						isRealtimeMQUpdatesExperimentEnabled: o
					}
				}),
				ee = Object(c.b)(Z, e => ({
					handleRealtimeUpdates: i()(t => {
						e(Object(b.a)(t.subscribe.data.subredditID)), e(Object(b.c)(t))
					}, 1e3)
				}));
			class te extends d.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(C.cb)(t)
					}))
				}
				render() {
					const {
						className: e,
						isModerator: t,
						layout: n,
						isRealtimeMQUpdatesExperimentEnabled: s,
						queryParams: o,
						queryVariables: r
					} = this.props, i = o.subreddit, a = o.profile, c = o.only, l = o.sort, m = `${o.page||_.b}`, u = o.after || "", b = this.props.match.params.pageName, x = i && `r/${i}` || a && `user/${a}`, g = "unmoderated" !== b, E = g ? c : void 0;
					return d.a.createElement("div", null, t && d.a.createElement(O.a, {
						className: e,
						fitPageToContent: !0,
						disableFullscreen: n === v.g.Large,
						navBar: d.a.createElement(F, {
							disableFullscreen: n === v.g.Large,
							pageName: b
						}),
						content: d.a.Children.toArray([d.a.createElement(f.a, {
							key: a,
							postTypeFilter: E,
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
							postTypeFilter: E,
							profileName: a,
							sendEventWithName: this.sendEventWithName,
							subredditName: i
						})]),
						sidebar: d.a.createElement(z, {
							subredditOrProfileUrl: x,
							isRealtimeMQUpdatesExperimentEnabled: s
						})
					}), t && r && s && r.map(e => d.a.createElement(p.a, {
						key: e.input.channel.subredditID,
						uniqueKey: e.input.channel.subredditID,
						variables: e,
						onData: this.props.handleRealtimeUpdates,
						queryKey: "onModUpdate"
					})))
				}
			}
			t.default = X(ee(Object(x.c)(te)))
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.l: {
						const {
							summary: n,
							subreddit: s
						} = t.payload;
						return {
							...e,
							[s.id]: {
								...e[s.id],
								...n
							}
						}
					}
					case s.i:
					case s.f:
					case s.r:
					case s.u:
					case s.A: {
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
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: n
							} = t.payload;
							return e.includes(n) ? e : [...e, n]
						}
						case o.p: {
							const {
								targetID: n
							} = t.payload, s = e.indexOf(n);
							return s > -1 && e.splice(s, 1), e
						}
						default:
							return e
					}
				},
				i = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/comment/constants.ts")),
				a = n("./src/reddit/actions/platform.ts"),
				d = n("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.q:
					case d.k: {
						const n = t.payload;
						return Object.keys(n).map(t => {
							const s = Object.keys(n[t]);
							let o = !1;
							s.map(e => {
								c.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: n
						} = t.payload;
						return e.includes(n) ? e : [...e, n]
					}
					case a.g:
						return [];
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				toUpdate: r,
				updated: l
			})
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.D
				}) === s.Id
			}
		},
		"./src/reddit/selectors/experiments/cnc/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.hc
					});
					return !(!t || Object(s.hg)(t))
				},
				i = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Ub
					});
					return !(!t || Object(s.hg)(t))
				}
		},
		"./src/reddit/selectors/experiments/realtimeMQUpdates.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			const a = e => Object(i.a)(e) && Object(o.c)(e, {
				experimentEligibilitySelector: r.S,
				experimentName: s.vc
			}) === s.Id
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
						experimentName: s.Bf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Hf.SmIcon || t === s.Hf.SmIconHc
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
					const s = Object(i.bb)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.5b989af1866aa97c9566.js.map