// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.4d8342167a3c77ac0a7b.js
// Retrieved at 8/30/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"], {
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
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						v = !i && !m && !u && !p && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						k = !C && /[^-]mobi/i.test(t),
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
					} : h ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (o.msedge = e, o.version = x) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: x
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var _ = "";
					o.windows ? _ = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (o.osversion = _);
					var y = !o.windows && _.split(".")[0];
					return C || d || "ipad" == r || i && (3 == y || y >= 4 && !k) || o.silk ? o.tablet = e : (k || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
							for (var o, r, i, d, l, m, u, p, h = a(n), b = c(n), f = !1; !f;) {
								var v = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (f = !0, v = s) : b != t.body && b != t.documentElement && "visible" != x.overflow && (v = a(b)), v && (o = v, r = h, i = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), p = d - i, !(h = (u = m - l) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: m,
										width: u,
										height: p
									}))) break;
								b = c(b)
							}
							return h
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
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
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
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
				...i.n(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.q(e),
				geo: i.s(e),
				platform: i.H(e),
				referrer: i.X(e),
				request: i.Y(e),
				screen: i.ab(e),
				session: i.eb(e),
				user: i.qb(e),
				media: n ? i.B(e, n) : null,
				post: n ? i.J(e, n) : null
			});
			var d = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = n("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const n = Object(r.f)().getState(),
						{
							post: s
						} = {
							...t
						};
					return s && s.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, s) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : d.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, d.b) ? Object(c.a)(a(s)(n, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(c.a)(a(s)(n, d.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
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
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const C = Object(r.a)(g.p),
				k = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(m.l)(o(), e)).ok && t((e => async t => {
						t(C({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(v.Q)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.n : m.g;
					t(Object(x.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, _ = Object(r.a)(g.J), y = e => async (t, n, o) => {
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
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(f.a)(a) ? await Object(m.a)(i(), e) : await Object(m.b)(r(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, O = (e, t) => async (n, o, r) => {
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
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(f.a)(l) ? await Object(m.i)(a(), e, t) : await Object(m.j)(i(), e, t)).ok ? n(Object(c.f)({
						kind: h.b.SuccessMod,
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
							isSpam: u.isSpam
						}
					})), Object(d.d)())
				}, w = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.m : m.f;
					t(Object(x.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, j = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(b.b)(i(), {
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
						})).ok) r(Object(x.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						r(Object(c.f)(e))
					}
				}, T = (e, t, n) => async (s, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						h = l.postStickiedComments.data[p];
					s(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.H.ADMIN,
							isMod: t === o.H.MODERATOR,
							isStickied: !!n
						}
					})), n && h && h !== e && s(Object(x.j)({
						[h]: {
							isStickied: !1
						}
					}));
					const b = Object(m.d)(c(), e, t),
						f = Object(m.e)(c(), e, !!n),
						v = [b];
					(n || !n && e === h) && v.push(f), (await Promise.all(v)).every(e => e.ok) ? n && s(_({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.u.CONFIDENCE,
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
						[h]: {
							isStickied: l.features.comments.models[h].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
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
				h = Object(o.a)(a.t),
				b = e => {
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
			const v = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: o,
					undoCallback: a
				} = e;
				return async (e, l, v) => {
					let {
						gqlContext: x
					} = v;
					var g, C, k;
					e(p());
					const E = b(n),
						_ = await Object(c.b)(x(), t, E);
					if ((null === (C = null === (g = _.error) || void 0 === g ? void 0 : g.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(_.body) && (null === (k = _.body.data.updateSubredditNotificationSettings.errors) || void 0 === k ? void 0 : k.length)) return e(h()), e(Object(d.f)({
						kind: m.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					_.ok && (e(Object(r.c)({
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
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
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
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: n,
					children: s,
					...a
				} = e, l = Object(r.a)(d.a.adLinkWrapper, t, {
					[d.a.ctaExperiment]: !!n,
					[d.a.borders]: "classic" === n,
					[d.a.borderTop]: "compact" === n || "conversation" === n,
					[d.a.borderBottom]: "card" === n
				});
				return o.a.createElement("div", c({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), s)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/BackToTop/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, c.a.container),
					style: s
				}, o.a.createElement(a.l, {
					className: c.a.button,
					onClick: () => m(n)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
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
					showCTAExperiment: n,
					...s
				} = e;
				return o.a.createElement(i.b, l({
					className: Object(r.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: s.isNotCardView,
						[c.a.ctaExperiment]: !!n
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, s))
			}
		},
		"./src/reddit/components/CommentModModeDropdown/CommentModModeList.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/helpers.ts"),
				d = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				c = n("./src/reddit/icons/svgs/Show/index.tsx"),
				l = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				m = n.n(l);
			const u = i.a.wrapped(c.a, "Show", m.a);
			t.a = e => {
				const t = Object(a.b)(e.comment),
					n = e.comment.isApproved && t;
				return r.a.createElement(d.g, null, (!e.comment.isApproved || t) && r.a.createElement(d.e, {
					displayText: n ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: e.onApproveComment
				}, r.a.createElement(d.a, null)), !e.comment.bannedBy && r.a.createElement(r.a.Fragment, null, r.a.createElement(d.e, {
					displayText: e.comment.isRemoved ? s.fbt._("Removed", null, {
						hk: "17pv2n"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: e.onRemoveComment
				}, r.a.createElement(d.i, null)), r.a.createElement(d.e, {
					displayText: e.comment.isSpam ? s.fbt._("Removed as spam", null, {
						hk: "2Kv9DF"
					}) : s.fbt._("Remove as spam", null, {
						hk: "OOps6"
					}),
					onClick: e.onSpamComment
				}, r.a.createElement(d.j, null)), r.a.createElement(d.e, {
					displayText: e.comment.isLocked ? s.fbt._("Unlock comment", null, {
						hk: "1canPl"
					}) : s.fbt._("Lock comment", null, {
						hk: "Qp5a0"
					}),
					onClick: e.onLockComment
				}, r.a.createElement(d.h, null))), e.comment.collapsedBecauseCrowdControl && r.a.createElement(d.e, {
					displayText: s.fbt._("Show comment", null, {
						hk: "9SB86"
					}),
					onClick: e.onShowComment
				}, r.a.createElement(u, null)))
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				d = n("./src/reddit/actions/comment/moderation.ts"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/helpers/trackers/modTools.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/CommentModModeDropdown/CommentModModeList.tsx"),
				b = n("./src/devPlatform/singleton/constants.ts"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const g = Object(a.a)({
					resolved: {},
					chunkName: () => "DevPlatform",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~AdminPanel~DevPlatform"), n.e("DevPlatform")]).then(n.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/devPlatform/components/ContextActions/index.tsx"
					}
				}, {
					ssr: !1
				}),
				C = x.a.wrapped(m.a, "StyledDropdown", v.a),
				k = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				E = (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(d.a)(n.id)),
						onLockComment: () => e(Object(d.c)(n.id)),
						onRemoveComment: () => e(Object(d.e)(n.id, !1)),
						onSpamComment: () => e(Object(d.e)(n.id, !0)),
						onShowComment: () => e(Object(d.d)(n.id))
					}
				},
				_ = Object(r.b)(k, E),
				y = Object(c.a)(C),
				O = _(Object(l.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: s,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(y, {
						isOpen: n,
						tooltipId: l
					}, o.a.createElement(h.a, {
						onApproveComment: () => {
							s(), c(Object(u.d)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(u.d)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(u.d)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(u.d)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(u.d)("showComment", t.id))
						},
						comment: t
					}), o.a.createElement(g, {
						contextType: b.a.COMMENT,
						contextData: t,
						moderator: !0
					}))
				}));
			t.a = O
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
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/trackers/modTools.ts"),
				v = n("./src/reddit/selectors/moderatingComments.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				O = n("./src/reddit/icons/svgs/Show/index.tsx"),
				w = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				T = n.n(j);
			const I = Object(b.u)(),
				N = e => `Distinguish--Dropdown--${e}`,
				M = Object(a.c)({
					currentUser: C.k,
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
						return Object(g.b)(N(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(b.h)(e, t) || Object(x.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: b.U
				}),
				S = Object(i.b)(M, (e, t) => {
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
							tooltipId: N(n.id)
						}))
					}
				});
			t.a = I(S(l.a.wrapped(Object(h.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: h,
					onLockComment: b,
					onRemoveComment: v,
					onShowComment: x,
					onSpamComment: g,
					onToggleDistinguishDropdown: C,
					sendEvent: j,
					pageLayer: I,
					...N
				} = e;
				const M = Object(p.b)(n),
					S = n.isApproved && M,
					R = !n.isRemoved || n.bannedBy === c.l,
					A = a,
					L = e => j(Object(f.b)(e, n.id)),
					P = "chat_comments" === (null == I ? void 0 : I.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || M) && r.a.createElement(w.a, {
					text: S ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), P && j(Object(f.a)("approve", n.id)), L("approve")
					}
				}, r.a.createElement(k.a, {
					className: T.a.icon
				})), R && r.a.createElement(r.a.Fragment, null, r.a.createElement(w.a, {
					text: n.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						v(), P && j(Object(f.a)("remove", n.id)), n.bannedBy === c.l ? L("confirm_remove") : L("remove")
					}
				}, r.a.createElement(_.a, {
					className: T.a.icon
				})), r.a.createElement(w.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), L("spam")
					}
				}, r.a.createElement(y.a, {
					className: T.a.icon
				}))), r.a.createElement(w.a, {
					text: n.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), L(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(E.a, {
					className: T.a.icon
				})), A && r.a.createElement(w.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(O.a, {
					className: Object(d.a)(T.a.icon, T.a.Show)
				})))
			}), "CommentModToolsFlatlist", T.a)))
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
			const h = e => {
				const {
					className: t,
					collapsed: n,
					comment: o,
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					isEmbeddedLiveChat: l,
					isStrong: u,
					onClick: h,
					style: b
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
					onClick: h,
					style: b
				}, o.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				C = n("./src/reddit/components/PostTopMeta/index.tsx"),
				k = n("./src/reddit/controls/MetaData/index.tsx"),
				E = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				w = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(N);
			const S = e => {
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
				const u = Object(O.f)(s),
					p = r.a.createElement(T.b, {
						ignore: u || !!s.distinguishType && s.distinguishType !== j.H.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: o,
						comment: s,
						isAuthorDeleted: Object(O.f)(s),
						isCommentAuthorBlocked: Object(O.g)(s),
						isLivestreaming: i,
						isEmbeddedLiveChat: a,
						isStrong: c,
						onClick: l
					}));
				return u || a ? p : r.a.createElement(I.b, {
					className: Object(d.a)(M.a.authorHoverCard, n),
					collapsed: o,
					isCommentAuthorBlocked: Object(O.g)(s),
					postOrComment: s,
					tooltipType: m ? C.c.Lightbox : void 0
				}, p)
			};
			var R = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				D = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var F = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(F);
			const H = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: o
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(A.h)({
						tooltipId: l
					})),
					l = P("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(B.a.cakedayIcon, t),
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
			var U = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				z = n("./src/reddit/components/HumanDate/index.tsx"),
				X = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(i.d)(), m = P("CommentTopMeta--Created--", n.id, d), u = () => l(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == o || o(e), J(l, n.id), c && (e.preventDefault(), l(Object(V.Z)(Object(X.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(z.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(L.c, {
						tooltipId: m
					}, r.a.createElement(z.b, {
						seconds: n.created
					})))
				},
				J = (e, t) => {
					window.addEventListener("focus", (function n() {
						q(e, t, n)
					}))
				},
				q = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var K = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(K);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(k.a, {
				className: Q.a.crowdControlText
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
				return r.a.createElement(k.a, {
					className: ee.a.editedText
				}, te._("edited {time}", [te._param("time", r.a.createElement(z.d, {
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
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ue = n.n(me);
			const pe = e => {
				let {
					comment: t,
					ignoreLock: o,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					l = e => () => c(Object(A.f)({
						tooltipId: e
					})),
					m = () => c(Object(A.i)()),
					u = e => P(e, t.id, a),
					p = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					b = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					v = l(h);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
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
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: h,
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
					onMouseEnter: v,
					onMouseLeave: m
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(ae.a, {
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
					id: b,
					onMouseEnter: l(b),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: b,
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
			var he, be = n("./src/lib/colors/constants.ts"),
				fe = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				xe = n.n(ve);
			const ge = {
					[he.Admin]: {
						color: be.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: be.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[he.ModTeam]: {
						color: be.d,
						getLabel: () => s.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[he.Op]: {
						color: be.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: be.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
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
				Ce = e => {
					const t = Object(i.d)(),
						n = function(e) {
							if (e.isAdmin) return he.Admin;
							const t = e.isMod || e.distinguishType === j.H.MODERATOR;
							return t && e.author && Object(fe.a)(e.author) ? he.ModTeam : t ? he.Mod : e.isOp ? he.Op : e.distinguishType === j.H.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						getLabel: a,
						tooltipTemplate: c
					} = ge[n], l = a(), m = P(s, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(xe.a.role, e.className),
						style: {
							color: o
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), (n === he.Mod || n === he.ModTeam) && r.a.createElement(ke, null)), r.a.createElement(L.c, {
						tooltipId: m,
						text: u
					}))
				},
				ke = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: xe.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = n.n(Ee);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = () => r.a.createElement(k.a, {
				className: _e.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				je = n.n(we);
			const Te = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: j,
					permalink: T,
					renderContractorBadge: I,
					renderedInOverlay: N,
					subredditDisplayText: M,
					isAdmin: R
				} = e, A = Object(y.a)(), L = a.subredditId, P = Object(i.e)(e => Object(w.m)(e, {
					subredditId: L
				}));
				if (a.isDeleted && !R) return r.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, r.a.createElement("span", {
					className: je.a.metaText
				}, a.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: je.a.metaText,
					comment: a,
					compact: !0,
					permalink: T,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, !Object(O.f)(a) && r.a.createElement(f.b, {
					className: je.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: je.a.baselineItem
				}, r.a.createElement(S, {
					authorClassName: je.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(O.f)(a) && u && r.a.createElement(g.a, {
					postOrComment: a,
					className: je.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(Z, null), r.a.createElement(Ce, {
					className: je.a.role,
					comment: a,
					subredditDisplayText: M,
					renderContractorBadge: I,
					renderedInOverlay: N
				}), a.isAuthorCakeday ? r.a.createElement(H, {
					className: je.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: N
				}) : !Object(O.f)(a) && P && r.a.createElement(b.a, {
					className: je.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						A(Object(_.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(x.a, {
					className: je.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: je.a.metaText,
					comment: a,
					compact: !0,
					onClick: j,
					permalink: T,
					renderedInOverlay: N
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(Oe, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: a.editedAt
				})), r.a.createElement(pe, {
					comment: a,
					ignoreLock: m,
					renderedInOverlay: N,
					isAdmin: R
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: N ? C.c.Lightbox : void 0
				})), c && !Object(E.o)(c) && r.a.createElement("span", {
					className: je.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: je.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Se = n("./src/reddit/selectors/comments.ts"),
				Re = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Le = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./src/reddit/selectors/userFlair.ts"),
				De = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Fe = n.n(De);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const He = c.a.wrapped(v.b, "RightPositionedAuthorFlair", Fe.a),
				Ue = c.a.span("DeletedText", Fe.a),
				We = c.a.wrapped(k.a, "MetaSeparator", Fe.a),
				Ve = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Ne.q)(e, n.subredditId, n.authorId).length
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
						return Object(Pe.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Se.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Re.b,
					isBlockingInterstitialV2Enabled: Re.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.i)(e, n.subredditId)
					}
				}));
			t.a = Ve(e => {
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
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: g,
					ignoreLock: E,
					isAdmin: _,
					isBlockingInterstitialEnabled: y,
					isBlockingInterstitialV2Enabled: w,
					isModWithUserNotesPermissions: j,
					isLivestreaming: T,
					isEmbeddedLiveChat: I,
					isPostComment: N,
					onCommentAuthorClick: M,
					onCommentTimestampClick: R,
					renderContractorBadge: A,
					renderedInOverlay: L,
					subredditDisplayText: P,
					userHasNft: D
				} = e, F = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie.b, {
					commentId: i.id
				}), r.a.createElement(Ie.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (N) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Te, {
					className: Object(d.a)(n, {
						[Fe.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: u || null,
					ignoreLock: E,
					isAdmin: _,
					isModWithUserNotesPermissions: j,
					isLivestreaming: T,
					onCommentAuthorClick: M,
					onCommentTimestampClick: R,
					permalink: a,
					renderContractorBadge: !!A,
					renderedInOverlay: L,
					subredditDisplayText: P
				}), F);
				if (i.isDeleted) return r.a.createElement(ze, Be({}, e, {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Xe, Be({}, e, {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s
					})
				}));
				const B = !g && p === Me.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s,
						[Fe.a.hasBadges]: h,
						[Fe.a.liveStreaming]: T
					}),
					"data-testid": "comment-top-meta"
				}, u && B && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(i) && r.a.createElement(f.b, {
					className: Fe.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(S, {
					authorClassName: D ? Fe.a.NftAuthor : void 0,
					collapsed: s,
					comment: i,
					isLivestreaming: T,
					isEmbeddedLiveChat: I,
					isStrong: !!m,
					onClick: M,
					renderedInOverlay: L
				}), o && r.a.createElement(Z, null), o && r.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !B && r.a.createElement(He, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(x.a, {
					className: Fe.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(k.c, {
						className: Fe.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), F, r.a.createElement(Ce, {
					className: Fe.a.authorRole,
					comment: i,
					subredditDisplayText: P,
					renderContractorBadge: !!A,
					renderedInOverlay: L
				}), !m && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !N && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.b, {
					className: Fe.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Fe.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: L,
					isBlockingInterstitialEnabled: y || w
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: Fe.a.separator
				}), r.a.createElement(Oe, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: Fe.a.separator
				}), r.a.createElement(ne, {
					editedAt: i.editedAt
				}))), r.a.createElement(pe, {
					comment: i,
					ignoreLock: E,
					renderedInOverlay: L
				}), !b && r.a.createElement(l.a, {
					thing: i,
					tooltipType: L ? C.c.Lightbox : void 0
				}))
			});
			const ze = e => {
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
					}, r.a.createElement(Ue, null, i.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && Ge({
						childrenInfo: t
					}))
				},
				Xe = e => {
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
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: i
					})), r.a.createElement(k.b, {
						className: Fe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(k.c, {
						className: Fe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: t,
						permalink: a,
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
					return r.a.createElement(We, {
						className: Fe.a.metaText
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
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const h = a.a.div("DistinguishWrapper", p.a),
				b = a.a.wrapped(m.a, "Inline", p.a),
				f = a.a.wrapped(c.a, "RadioOff", p.a),
				v = a.a.wrapped(l.a, "RadioOn", p.a),
				x = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(v, null) : o.a.createElement(f, null), e.text),
				g = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: n
					}, o.a.createElement(x, {
						onClick: () => u(r.H.NONE, null),
						selected: !c && !s,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(x, {
						onClick: () => u(r.H.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(x, {
						onClick: () => u(r.H.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(x, {
						onClick: () => u(r.H.ADMIN, null),
						selected: s && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(x, {
						onClick: () => u(r.H.ADMIN, !0),
						selected: s && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var C = Object(d.a)(g);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: u
				}, o.a.createElement(C, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.H.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.H.ADMIN ? m("admin_distinguish") : a && e !== r.H.MODERATOR ? m("undistinguish") : n && e !== r.H.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
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
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const h = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(m.a)(s)) return null;
				const a = s && s.eventInfo,
					u = Object(l.a)(s),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!n
					})
				}, o.a.createElement(h, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: s
				}), !u && b && o.a.createElement(c.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			var m = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				h = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const v = f.a.span("PostEventFutureText", b.a),
				x = f.a.span("PostEventPastText", b.a),
				g = f.a.span("PostEventNowText", b.a),
				C = f.a.span("Container", b.a),
				k = f.a.wrapped(m, "CalendarIcon", b.a),
				E = f.a.wrapped(u, "LiveIcon", b.a),
				_ = f.a.div("LoadingState", b.a);
			class y extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: a,
						eventStart: d
					} = n, c = Object(r.e)(d, s);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = o.a.createElement(p.c, {
						startTime: d,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(_, {
							className: e
						})
					}
					if (a) m = o.a.createElement(g, null, o.a.createElement(E, null), l);
					else if (c === r.a.Future) m = o.a.createElement(v, null, o.a.createElement(k, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = o.a.createElement(x, null, o.a.createElement(k, null), l)
					}
					return o.a.createElement(C, {
						className: e
					}, m)
				}
			}
			t.a = y
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
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/objectSelector/index.ts"),
				g = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				k = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = n("./src/reddit/components/PostContainer/index.m.less"),
				_ = n.n(E);
			const y = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(b.b)(e, n.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(b.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(f.d)(e).pageType
				})),
				O = "post-container";
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: b,
						style: f,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, C = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => u && u(n, l, t, r, p))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(_.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": O,
						id: c ? c(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": k.a.BACKGROUND
					}, n), E = !!l.media && l.media.type === h.o.VIDEO;
					return (e => l.media && Object(h.E)(l.media) && g ? o.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(C))
				}
			}
			t.a = y(Object(C.a)(Object(g.a)(Object(u.c)(w))))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class h extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(m.o)({
							postId: n,
							isFollowed: r
						}) : Object(m.g)({
							postId: n,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: n
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(c.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(h))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "g", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				b = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				f = n.n(b);
			const v = r.a.wrapped(d.a, "Icon", f.a),
				x = r.a.wrapped(c.a, "Icon", f.a),
				g = r.a.wrapped(l.a, "Icon", f.a),
				C = r.a.wrapped(m.a, "Icon", f.a),
				k = r.a.wrapped(u.a, "Icon", f.a),
				E = r.a.wrapped(p.a, "Icon", f.a),
				_ = () => o.a.createElement(a.a, {
					name: "mod_mute",
					className: f.a.Icon
				}),
				y = () => o.a.createElement(a.a, {
					name: "calendar",
					className: f.a.Icon
				}),
				O = () => o.a.createElement(h.a, {
					className: f.a.svgIcon
				}),
				w = r.a.wrapped(i.b, "DropdownRow", f.a),
				j = r.a.div("ListContainer", f.a)
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(u);
			const h = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									o && s(n, o), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(m.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(m.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				v = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				C = n.n(g);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = d.a.a("Link", C.a), _ = Object(i.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: b.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: v.a
			}), y = Object(r.b)(_), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), w = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return o.a.createElement("div", {
					className: C.a.GreyRereddit
				}, n, !!u.c[t] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, k._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), o.a.createElement("div", {
					className: C.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(y(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					n = Object(b.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.Yc.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.Yc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.Yc.LargeImagePreview ? e.reredditButtons : [];
					return o.a.createElement(w, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? o.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return o.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, k._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, s("en"), s("fr"), s("it")), o.a.createElement("div", {
					className: C.a.Column
				}, s("de"), s("es"), s("pt"))), o.a.createElement("div", {
					className: C.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				h = n.n(p),
				b = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = d.f[1] + 24,
				x = m.f + 8,
				g = x + 152 + 16,
				C = g + v + 8,
				k = b.a.div("Container", h.a),
				E = b.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return a.a.createElement(c.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", h.a),
				_ = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: o,
						isSticky: r,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(n, {
							[h.a.BottomStickyStyles]: i,
							[h.a.StickyStyles]: !i && r && !o,
							[h.a.StickyStylesFakeOverlay]: !i && !!o
						})
					}, t)
				};
			class y extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > g
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: o,
							hideFooter: r,
							pageLayer: i,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, m = this.state.isAdSticky && !(!t && !s), u = this.state.isBottomSticky;
					return a.a.createElement(k, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: n,
						isSticky: m,
						shouldStickToBottom: u
					}, t, s, d, !r && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(E, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(u.u)();
			t.a = O(y)
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
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = C(e);
					return Object(x.f)(t)
				},
				_ = e => {
					const t = k(e);
					return Object(x.f)(t)
				};
			var y = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = n.n(y);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(m.u)(), T = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(v.db)(e);
					return s || o
				},
				nigtmode: v.db,
				subredditId: m.n,
				topPostVariant: b.d
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = _(this.props), e
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
						truncateThreshold: h
					} = this.props, b = n ? O.a.widgetContentOnly : O.a.widgetContent, f = !s && this.props.styles, v = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: v
					}, m && o.a.createElement("div", {
						className: Object(a.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: i,
						style: x,
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(b, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(T(Object(d.a)(Object(l.c)(I))))
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
						...i.n(a),
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
					...i.n(e)
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
					widget: Object(i.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				d = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.J(n, e),
					subreddit: i.ib(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...i.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
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
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(r.f)(e),
					experimentName: s.uc
				}), i.a),
				l = Object(d.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(r.f)(e),
					experimentName: s.tc
				}), i.a),
				m = Object(d.a)(c, l, (e, t) => e || t),
				u = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.mf,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.uf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(s.a)(i.G, a, (e, t) => d(e, t));
			Object(s.a)((e, t) => t, a, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.4d8342167a3c77ac0a7b.js.map