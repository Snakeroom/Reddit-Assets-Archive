// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.c3f66d0a1219c5d01a03.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"], {
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
						m = /silk/i.test(t),
						l = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !r && !m && /macintosh/i.test(t),
						v = !i && !l && !u && !p && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						k = !C && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
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
					} : h ? (s = {
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
					} : l ? s = {
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : m ? s = {
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
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && g && (s.version = g)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : _ ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var O = !s.windows && E.split(".")[0];
					return C || d || "ipad" == r || i && (3 == O || O >= 4 && !k) || s.silk ? s.tablet = e : (k || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
								m = t && d && this._computeTargetAndRootIntersection(r, n),
								l = s.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: m
								});
							c ? t && d ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, o) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, r, i, d, m, l, u, p, h = a(n), b = c(n), f = !1; !f;) {
								var v = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (f = !0, v = o) : b != t.body && b != t.documentElement && "visible" != x.overflow && (v = a(b)), v && (s = v, r = h, i = void 0, d = void 0, m = void 0, l = void 0, u = void 0, p = void 0, i = Math.max(s.top, r.top), d = Math.min(s.bottom, r.bottom), m = Math.max(s.left, r.left), l = Math.min(s.right, r.right), p = d - i, !(h = (u = l - m) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: m,
										right: l,
										width: u,
										height: p
									}))) break;
								b = c(b)
							}
							return h
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
				for (var m = o(c, t); ++n < e;) t(n);
				return m
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
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
					var m = e[c],
						l = t[c];
					if (!1 === (s = n ? n.call(o, m, l, c) : void 0) || void 0 === s && m !== l) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return I
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
				m = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(x.p),
				C = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					n().features.comments.models[e] && (await Object(l.j)(s(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, k = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.R)(n())) return void t(Object(a.i)(m.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? l.l : l.f;
					t(Object(v.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, _ = Object(r.a)(x.J), E = e => async (t, n, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
					const a = n(),
						m = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					m && u && (t(Object(v.j)({
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
					})), (await Object(l.a)(i(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.j)({
						[e]: {
							isApproved: m.isApproved,
							approvedBy: null,
							bannedBy: m.bannedBy,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							modNote: m.modNote,
							modReasonBy: m.modReasonBy,
							modRemovalReason: m.modRemovalReason,
							numReports: m.numReports || null
						}
					})), Object(d.d)())
				}, O = (e, t) => async (n, s, r) => {
					let {
						apiContext: i,
						gqlContext: a
					} = r;
					const m = s(),
						u = m.features.comments.models[e],
						p = m.user.account ? m.user.account.displayText : null;
					u && p && (n(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(a(), e, t)).ok ? n(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, y = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? l.k : l.e;
					t(Object(v.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
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
				}, I = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const m = Object(b.b)(i(), {
						commentId: e
					});
					if (!m) return;
					const l = n === s.kc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(d(), {
							input: f
						})).ok) r(Object(v.j)({
						[e]: {
							userReports: Object(p.a)(m.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						r(Object(c.f)(e))
					}
				}, w = (e, t, n) => async (o, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const m = r(),
						u = m.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						h = m.postStickiedComments.data[p];
					o(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.J.ADMIN,
							isMod: t === s.J.MODERATOR,
							isStickied: !!n
						}
					})), n && h && h !== e && o(Object(v.j)({
						[h]: {
							isStickied: !1
						}
					}));
					const b = Object(l.c)(c(), e, t),
						f = Object(l.d)(c(), e, !!n),
						x = [b];
					(n || !n && e === h) && x.push(f), (await Promise.all(x)).every(e => e.ok) ? n && o(_({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.w.CONFIDENCE,
							...m.platform.currentPage.queryParams
						})
					})) : (o(Object(v.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(v.j)({
						[h]: {
							isStickied: m.features.comments.models[h].isStickied
						}
					})))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/comment/moderation.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/helpers/trackers/modTools.ts"),
				u = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/ModModeReports/helpers.ts"),
				f = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				v = n("./src/reddit/icons/svgs/Show/index.tsx"),
				x = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				g = n.n(x);
			const C = h.a.wrapped(v.a, "Show", g.a);
			var k = e => {
					const t = Object(b.b)(e.comment),
						n = e.comment.isApproved && t;
					return s.a.createElement(f.g, null, (!e.comment.isApproved || t) && s.a.createElement(f.e, {
						displayText: n ? p.fbt._("Reapprove", null, {
							hk: "1XngBU"
						}) : p.fbt._("Approve", null, {
							hk: "2219Nh"
						}),
						onClick: e.onApproveComment
					}, s.a.createElement(f.a, null)), !e.comment.bannedBy && s.a.createElement(s.a.Fragment, null, s.a.createElement(f.e, {
						displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
							hk: "17pv2n"
						}) : p.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						onClick: e.onRemoveComment
					}, s.a.createElement(f.i, null)), s.a.createElement(f.e, {
						displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
							hk: "2Kv9DF"
						}) : p.fbt._("Remove as spam", null, {
							hk: "OOps6"
						}),
						onClick: e.onSpamComment
					}, s.a.createElement(f.j, null)), s.a.createElement(f.e, {
						displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
							hk: "1canPl"
						}) : p.fbt._("Lock comment", null, {
							hk: "Qp5a0"
						}),
						onClick: e.onLockComment
					}, s.a.createElement(f.h, null))), e.comment.collapsedBecauseCrowdControl && s.a.createElement(f.e, {
						displayText: p.fbt._("Show comment", null, {
							hk: "9SB86"
						}),
						onClick: e.onShowComment
					}, s.a.createElement(C, null)))
				},
				_ = n("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				E = n("./src/devPlatform/constants.ts");
			const O = h.a.wrapped(m.a, "StyledDropdown", g.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(u.b)(n)(e)
					}
				}),
				I = Object(r.b)(y, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(n.id)),
						onLockComment: () => e(Object(a.c)(n.id)),
						onRemoveComment: () => e(Object(a.e)(n.id, !1)),
						onSpamComment: () => e(Object(a.e)(n.id, !0)),
						onShowComment: () => e(Object(a.d)(n.id))
					}
				}),
				w = Object(d.a)(O),
				j = I(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: m
					} = e;
					return s.a.createElement(w, {
						isOpen: n,
						tooltipId: m
					}, s.a.createElement(k, {
						onApproveComment: () => {
							o(), c(Object(l.d)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(l.d)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(l.d)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(l.d)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(l.d)("showComment", t.id))
						},
						comment: t
					}), s.a.createElement(_.a, {
						contextType: E.a.COMMENT,
						contextData: t,
						moderator: !0
					}))
				}));
			t.a = j
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
				m = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/comment/moderation.ts"),
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
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = n("./src/reddit/icons/svgs/Show/index.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				w = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				j = n.n(w);
			const M = Object(b.u)(),
				T = e => `Distinguish--Dropdown--${e}`,
				N = Object(a.c)({
					currentUser: C.l,
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
						return Object(g.b)(T(n.id))(e)
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
				A = Object(i.b)(N, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(l.a)(n.id)),
						onDistinguishComment: (t, o) => e(Object(l.b)(n.id, t, o)),
						onLockComment: () => e(Object(l.c)(n.id)),
						onRemoveComment: () => e(Object(l.e)(n.id, !1)),
						onSpamComment: () => e(Object(l.e)(n.id, !0)),
						onShowComment: () => e(Object(l.d)(n.id)),
						onToggleDistinguishDropdown: () => e(Object(u.h)({
							tooltipId: T(n.id)
						}))
					}
				});
			t.a = M(A(m.a.wrapped(Object(h.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: s,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: m,
					modModeEnabled: l,
					onApproveComment: u,
					onDistinguishComment: h,
					onLockComment: b,
					onRemoveComment: v,
					onShowComment: x,
					onSpamComment: g,
					onToggleDistinguishDropdown: C,
					sendEvent: w,
					pageLayer: M,
					...T
				} = e;
				const N = Object(p.b)(n),
					A = n.isApproved && N,
					R = !n.isRemoved || n.bannedBy === c.m,
					D = a,
					L = e => w(Object(f.b)(e, n.id)),
					S = "chat_comments" === (null == M ? void 0 : M.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && r.a.createElement(I.a, {
					text: A ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), S && w(Object(f.a)("approve", n.id)), L("approve")
					}
				}, r.a.createElement(k.a, {
					className: j.a.icon
				})), R && r.a.createElement(r.a.Fragment, null, r.a.createElement(I.a, {
					text: n.bannedBy === c.m ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						v(), S && w(Object(f.a)("remove", n.id)), n.bannedBy === c.m ? L("confirm_remove") : L("remove")
					}
				}, r.a.createElement(E.a, {
					className: j.a.icon
				})), r.a.createElement(I.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), L("spam")
					}
				}, r.a.createElement(O.a, {
					className: j.a.icon
				}))), r.a.createElement(I.a, {
					text: n.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), L(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(_.a, {
					className: j.a.icon
				})), D && r.a.createElement(I.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(y.a, {
					className: Object(d.a)(j.a.icon, j.a.Show)
				})))
			}), "CommentModToolsFlatlist", j.a)))
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
				m = n("./src/reddit/components/AwardBadges/index.tsx"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const h = e => {
				const {
					className: t,
					collapsed: n,
					comment: s,
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					isEmbeddedLiveChat: m,
					isStrong: u,
					onClick: h,
					style: b
				} = e;
				return n && a ? r.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(l.a, {
					author: s.author,
					className: Object(d.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					forceOpenInNewTab: m,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: h,
					style: b
				}, s.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				C = n("./src/reddit/components/PostTopMeta/index.tsx"),
				k = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(T);
			const A = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: i,
					isEmbeddedLiveChat: a,
					isStrong: c,
					onClick: m,
					renderedInOverlay: l
				} = e;
				const u = Object(y.f)(o),
					p = r.a.createElement(j.b, {
						ignore: u || !!o.distinguishType && o.distinguishType !== w.J.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(y.f)(o),
						isCommentAuthorBlocked: Object(y.g)(o),
						isLivestreaming: i,
						isEmbeddedLiveChat: a,
						isStrong: c,
						onClick: m
					}));
				return u || a ? p : r.a.createElement(M.b, {
					className: Object(d.a)(N.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(y.g)(o),
					postOrComment: o,
					tooltipType: l ? C.f.Lightbox : void 0
				}, p)
			};
			var R = n("./src/config.ts"),
				D = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const S = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				B = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(P);
			const U = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(D.h)({
						tooltipId: m
					})),
					m = S("CommentTopMeta--cakeday--", n, s),
					l = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: m,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(L.c, {
					tooltipId: m,
					text: l
				}))
			};
			var V = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				J = n("./src/reddit/actions/post.ts"),
				X = n("./src/reddit/components/HumanDate/index.tsx"),
				z = n("./src/reddit/helpers/path/index.ts");
			const W = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, m = Object(i.d)(), l = S("CommentTopMeta--Created--", n.id, d), u = () => m(Object(D.h)({
						tooltipId: l
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(V.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							null == s || s(e), q(m, n.id), c && (e.preventDefault(), m(Object(J.Y)(Object(z.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(X.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(L.c, {
						tooltipId: l
					}, r.a.createElement(X.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						Q(e, t, n)
					}))
				},
				Q = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var K = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				G = n.n(K);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(k.a, {
				className: G.a.crowdControlText
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
				}, te._("edited {time}", [te._param("time", r.a.createElement(X.d, {
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
				me = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/selectors/modQueue.ts"),
				ue = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				pe = n.n(ue);
			const he = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					m = Object(i.e)(le.b),
					l = e => () => c(Object(D.f)({
						tooltipId: e
					})),
					u = () => c(Object(D.i)()),
					p = e => S(e, t.id, a),
					h = p("CommentTopMeta--Approve--"),
					b = p("CommentTopMeta--Remove--"),
					f = p("CommentTopMeta--Report--"),
					v = p("CommentTopMeta--Spam--"),
					x = l(b);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !m && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: pe.a.approveIcon,
					desc: Object(se.a)(t),
					id: h,
					onMouseEnter: l(h),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: h,
					text: Object(se.a)(t)
				})), Object(oe.a)(t) && !m && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					desc: Object(se.b)(t),
					id: b,
					onMouseEnter: x,
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: b,
					text: Object(se.b)(t)
				})), Object(oe.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !m && r.a.createElement("a", {
					className: pe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(oe.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !m && r.a.createElement("a", {
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
				}), t.bannedBy && t.isSpam && !m && r.a.createElement(r.a.Fragment, null, r.a.createElement(me.a, {
					className: pe.a.spamIcon,
					desc: Object(se.d)(t),
					id: v,
					onMouseEnter: l(v),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: v,
					text: Object(se.d)(t)
				})), Object(re.a)(t) && !m && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: pe.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: f,
					onMouseEnter: l(f),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: f,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && d && !m && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: pe.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var be, fe = n("./src/lib/colors/constants.ts"),
				ve = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(be || (be = {}));
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(xe);
			const Ce = {
					[be.Admin]: {
						color: fe.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[be.Mod]: {
						color: fe.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[be.ModTeam]: {
						color: fe.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[be.Op]: {
						color: fe.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[be.AlumniAdmin]: {
						color: fe.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[be.Contractor]: {
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
				ke = e => {
					const t = Object(i.d)(),
						n = function(e) {
							if (e.isAdmin) return be.Admin;
							const t = e.isMod || e.distinguishType === w.J.MODERATOR;
							return t && e.author && Object(ve.a)(e.author) ? be.ModTeam : t ? be.Mod : e.isOp ? be.Op : e.distinguishType === w.J.ALUMNI_ADMIN ? be.AlumniAdmin : e.authorIsContractor ? be.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === be.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: a,
						tooltipTemplate: c
					} = Ce[n], m = a(), l = S(o, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(D.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(ge.a.role, e.className),
						style: {
							color: s
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, m), (n === be.Mod || n === be.ModTeam) && r.a.createElement(_e, null)), r.a.createElement(L.c, {
						tooltipId: l,
						text: u
					}))
				},
				_e = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Oe = n.n(Ee);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = () => r.a.createElement(k.a, {
				className: Oe.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				je = n.n(we);
			const Me = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: c,
					ignoreLock: l,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: w,
					permalink: j,
					renderContractorBadge: M,
					renderedInOverlay: T,
					subredditDisplayText: N,
					isAdmin: R
				} = e, D = Object(O.a)(), L = a.subredditId, S = Object(i.e)(e => Object(I.n)(e, {
					subredditId: L
				}));
				if (a.isDeleted && !R) return r.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, r.a.createElement("span", {
					className: je.a.metaText
				}, a.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(W, {
					key: "Created",
					className: je.a.metaText,
					comment: a,
					compact: !0,
					permalink: j,
					renderedInOverlay: T
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(je.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, !Object(y.f)(a) && r.a.createElement(f.b, {
					className: je.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: je.a.baselineItem
				}, r.a.createElement(A, {
					authorClassName: je.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: T
				})), !Object(y.f)(a) && u && r.a.createElement(g.a, {
					postOrComment: a,
					className: je.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(Z, null), r.a.createElement(ke, {
					className: je.a.role,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: M,
					renderedInOverlay: T
				}), a.isAuthorCakeday ? r.a.createElement(U, {
					className: je.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: T
				}) : !Object(y.f)(a) && S && r.a.createElement(b.a, {
					className: je.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						D(Object(E.b)(a.id, a.subredditId, a.authorId))
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
				}), r.a.createElement(W, {
					key: "Created",
					className: je.a.metaText,
					comment: a,
					compact: !0,
					onClick: w,
					permalink: j,
					renderedInOverlay: T
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(Ie, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: je.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: a.editedAt
				})), r.a.createElement(he, {
					comment: a,
					ignoreLock: l,
					renderedInOverlay: T,
					isAdmin: R
				}), r.a.createElement(m.a, {
					thing: a,
					tooltipType: T ? C.f.Lightbox : void 0
				})), c && !Object(_.o)(c) && r.a.createElement("span", {
					className: je.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: je.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				Ae = n("./src/reddit/models/Flair/index.ts"),
				Re = n("./src/reddit/selectors/comments.ts"),
				De = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Le = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Be = n("./src/reddit/selectors/userFlair.ts"),
				Pe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Fe = n.n(Pe);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ve = c.a.wrapped(v.b, "RightPositionedAuthorFlair", Fe.a),
				He = c.a.span("DeletedText", Fe.a),
				Je = c.a.wrapped(k.a, "MetaSeparator", Fe.a),
				Xe = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Ne.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Se.N)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Be.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Re.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: De.b,
					isBlockingInterstitialV2Enabled: De.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Le.i)(e, n.subredditId)
					}
				}));
			t.a = Xe(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: l,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: g,
					ignoreLock: _,
					isAdmin: E,
					isBlockingInterstitialEnabled: O,
					isBlockingInterstitialV2Enabled: I,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					isEmbeddedLiveChat: M,
					isPostComment: T,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					renderContractorBadge: D,
					renderedInOverlay: L,
					subredditDisplayText: S,
					userHasNft: B
				} = e, P = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te.b, {
					commentId: i.id
				}), r.a.createElement(Te.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (T) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Me, {
					className: Object(d.a)(n, {
						[Fe.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: u || null,
					ignoreLock: _,
					isAdmin: E,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					permalink: a,
					renderContractorBadge: !!D,
					renderedInOverlay: L,
					subredditDisplayText: S
				}), P);
				if (i.isDeleted) return r.a.createElement(ze, Ue({}, e, {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(We, Ue({}, e, {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o
					})
				}));
				const F = !g && p === Ae.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o,
						[Fe.a.hasBadges]: h,
						[Fe.a.liveStreaming]: j
					}),
					"data-testid": "comment-top-meta"
				}, u && F && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: l
				}), !Object(y.f)(i) && r.a.createElement(f.b, {
					className: Fe.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(A, {
					authorClassName: B ? Fe.a.NftAuthor : void 0,
					collapsed: o,
					comment: i,
					isLivestreaming: j,
					isEmbeddedLiveChat: M,
					isStrong: !!l,
					onClick: N,
					renderedInOverlay: L
				}), s && r.a.createElement(Z, null), s && r.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !F && r.a.createElement(Ve, {
					flair: u,
					forceSmallEmojis: l
				}), !l && r.a.createElement(x.a, {
					className: Fe.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(k.c, {
						className: Fe.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), P, r.a.createElement(ke, {
					className: Fe.a.authorRole,
					comment: i,
					subredditDisplayText: S,
					renderContractorBadge: !!D,
					renderedInOverlay: L
				}), !l && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !T && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.b, {
					className: Fe.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(W, {
					key: "Created",
					className: Fe.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: L,
					isBlockingInterstitialEnabled: O || I
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: Fe.a.separator
				}), r.a.createElement(Ie, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(k.c, {
					className: Fe.a.separator
				}), r.a.createElement(ne, {
					editedAt: i.editedAt
				}))), r.a.createElement(he, {
					comment: i,
					ignoreLock: _,
					renderedInOverlay: L
				}), !b && r.a.createElement(m.a, {
					thing: i,
					tooltipType: L ? C.f.Lightbox : void 0
				}))
			});
			const ze = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: m
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(He, null, i.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(W, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: m,
						isBlockingInterstitialEnabled: d || c
					}), n && qe({
						childrenInfo: t
					}))
				},
				We = e => {
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
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: i
					})), r.a.createElement(k.b, {
						className: Fe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(k.c, {
						className: Fe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(W, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: d || c
					}), qe({
						childrenInfo: o
					}))
				},
				qe = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Je, {
						className: Fe.a.metaText
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				m = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const h = a.a.div("DistinguishWrapper", p.a),
				b = a.a.wrapped(l.a, "Inline", p.a),
				f = a.a.wrapped(c.a, "RadioOff", p.a),
				v = a.a.wrapped(m.a, "RadioOn", p.a),
				x = e => s.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(v, null) : s.a.createElement(f, null), e.text),
				g = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: o,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: m,
						isTopLevelComment: l,
						onDistinguishComment: u
					} = e;
					return s.a.createElement(h, {
						className: t,
						style: n
					}, s.a.createElement(x, {
						onClick: () => u(r.J.NONE, null),
						selected: !c && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(x, {
						onClick: () => u(r.J.MODERATOR, null),
						selected: c && !m,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), l && d && s.a.createElement(x, {
						onClick: () => u(r.J.MODERATOR, !0),
						selected: c && m,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && s.a.createElement(x, {
						onClick: () => u(r.J.ADMIN, null),
						selected: o && !m,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && l && s.a.createElement(x, {
						onClick: () => u(r.J.ADMIN, !0),
						selected: o && m,
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
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: m,
					sendEventWithName: l,
					tooltipId: u
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: u
				}, s.a.createElement(C, {
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						m(e, t), e === r.J.MODERATOR ? l(!d && t ? "distinguish_sticky" : "distinguish") : e === r.J.ADMIN ? l("admin_distinguish") : a && e !== r.J.MODERATOR ? l("undistinguish") : n && e !== r.J.ADMIN && l("admin_undistinguish"), d && !t && l("unsticky")
					}
				}))
			}
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
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return w
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				l = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				b = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				f = n.n(b);
			const v = r.a.wrapped(d.a, "Icon", f.a),
				x = r.a.wrapped(c.a, "Icon", f.a),
				g = r.a.wrapped(m.a, "Icon", f.a),
				C = r.a.wrapped(l.a, "Icon", f.a),
				k = r.a.wrapped(u.a, "Icon", f.a),
				_ = r.a.wrapped(p.a, "Icon", f.a),
				E = () => s.a.createElement(a.a, {
					name: "mod_mute",
					className: f.a.Icon
				}),
				O = () => s.a.createElement(a.a, {
					name: "calendar",
					className: f.a.Icon
				}),
				y = () => s.a.createElement(h.a, {
					className: f.a.svgIcon
				}),
				I = r.a.wrapped(i.b, "DropdownRow", f.a),
				w = r.a.div("ListContainer", f.a)
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
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return l
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
			const m = i.a.span("metaText", c.a),
				l = e => r.a.createElement(m, e, " · "),
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
						l = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, i, l)
				},
				p = e => r.a.createElement(m, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => !!e && e.endsWith("-ModTeam")
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
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const r = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.c3f66d0a1219c5d01a03.js.map