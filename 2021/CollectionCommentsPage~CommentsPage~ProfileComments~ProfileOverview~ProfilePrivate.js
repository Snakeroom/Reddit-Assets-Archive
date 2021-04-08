// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.1dc3e278be3011195e47.js
// Retrieved at 4/8/2021, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"], {
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
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						x = !r && !l && /macintosh/i.test(t),
						f = !i && !m && !u && !p && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !g && /[^-]mobi/i.test(t),
						C = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: E || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: E || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, E && (s.version = E)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, E && (s.version = E)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : x ? (s.mac = e, s.osname = "macOS") : C ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var k = "";
					s.windows ? k = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (s.osversion = k);
					var y = !s.windows && k.split(".")[0];
					return g || c || "ipad" == r || i && (3 == y || y >= 4 && !_) || s.silk ? s.tablet = e : (_ || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
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
								c = this._rootContainsTarget(r),
								d = s.entry,
								l = t && c && this._computeTargetAndRootIntersection(r, n),
								m = s.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, o) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, r, i, c, l, m, u, p, b = a(n), h = d(n), x = !1; !x;) {
								var f = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (x = !0, f = o) : h != t.body && h != t.documentElement && "visible" != v.overflow && (f = a(h)), f && (s = f, r = b, i = void 0, c = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(s.top, r.top), c = Math.min(s.bottom, r.bottom), l = Math.max(s.left, r.left), m = Math.min(s.right, r.right), p = c - i, !(b = (u = m - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: m,
										width: u,
										height: p
									}))) break;
								h = d(h)
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
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
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
				var c = a(e) ? o : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var l = o(d, t); ++n < e;) t(n);
				return l
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
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
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
			const c = (e, t, n) => (o = (() => {})) => s => {
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
						actionInfo: Object(i.previousPageActionInfo)(n, s)
					}
				})), m(s.target, s.currentTarget, l.anchorsAndButtons) && o(s)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(o.useCallback)(c(i, r, n), [i, r, n]);
					return s.a.createElement(e, a({}, d, {
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return g
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/comment/constants.ts");
			const p = Object(s.a)(u.m),
				b = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(d.h)(o(), e)).ok && t((e => async t => {
						t(p({
							commentId: e
						}))
					})(e))
				}, h = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(l.J)(n())) return void t(Object(i.i)(c.a.LOGIN_MODAL_ID));
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? d.j : d.d;
					t(Object(m.h)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(m.h)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, x = Object(s.a)(u.C), f = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = s.features.comments.models[e],
						i = s.user.account ? s.user.account.displayText : null;
					r && i && (t(Object(m.h)({
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
					})), (await Object(d.a)(o(), e)).ok || t(Object(m.h)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(a.d)())
				}, v = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					i && c && (n(Object(m.h)({
						[e]: {
							approvedBy: null,
							bannedBy: c,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(d.f)(s(), e, t)).ok || n(Object(m.h)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(a.d)())
				}, E = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? d.i : d.c;
					t(Object(m.h)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(m.h)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, g = (e, t, n) => async (s, i, {
					apiContext: a
				}) => {
					const c = i(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						b = o.g[t];
					s(Object(m.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.C.ADMIN,
							isMod: t === o.C.MODERATOR,
							isStickied: !!n
						}
					})), n && p && p !== e && s(Object(m.h)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(d.b)(a(), e, b, n || null)).ok ? n && s(x({
						id: e,
						postId: u,
						commentsPageKey: Object(r.a)(u, null, {
							sort: o.r.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (s(Object(m.h)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), s(Object(m.h)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = n.n(o);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !s && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement(i.a, d({
				className: Object(r.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
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
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				u = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(f);
			const E = b.a.wrapped(x.a, "Show", v.a);
			var g = e => s.a.createElement(h.e, null, !e.comment.isApproved && s.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? p.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : p.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, s.a.createElement(h.a, null)), !e.comment.bannedBy && s.a.createElement(s.a.Fragment, null, s.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : p.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, s.a.createElement(h.g, null)), s.a.createElement(h.c, {
				displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : p.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, s.a.createElement(h.h, null)), s.a.createElement(h.c, {
				displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : p.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, s.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && s.a.createElement(h.c, {
				displayText: p.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, s.a.createElement(E, null)));
			const _ = b.a.wrapped(l.a, "StyledDropdown", v.a),
				C = Object(i.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				k = Object(r.b)(C, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(a.a)(t.id)),
					onLockComment: () => e(Object(a.c)(t.id)),
					onRemoveComment: () => e(Object(a.e)(t.id, !1)),
					onSpamComment: () => e(Object(a.e)(t.id, !0)),
					onShowComment: () => e(Object(a.d)(t.id))
				})),
				y = Object(c.a)(_),
				O = k(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return s.a.createElement(y, {
						isOpen: n,
						tooltipId: l
					}, s.a.createElement(g, {
						onApproveComment: () => {
							o(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = O
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = n("./src/reddit/components/ModModeReports/helpers.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				E = n("./src/reddit/selectors/moderatingComments.ts"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				O = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = n("./src/reddit/icons/svgs/Show/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				M = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = n.n(M);
			const N = Object(x.t)(),
				A = e => `Distinguish--Dropdown--${e}`,
				L = Object(a.c)({
					currentUser: C.i,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(E.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(_.b)(A(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(x.g)(e, t) || Object(g.k)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: x.Q
				}),
				B = Object(i.b)(L, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, o) => e(Object(m.b)(t.id, n, o)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: A(t.id)
					}))
				}));
			t.a = N(B(l.a.wrapped(Object(h.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: i,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: h,
				onRemoveComment: x,
				onShowComment: E,
				onSpamComment: g,
				onToggleDistinguishDropdown: _,
				sendEvent: C,
				...M
			}) => {
				const N = Object(f.a)(a),
					L = Object(b.b)(t),
					B = t.isApproved && L,
					P = !!n && n.isEmployee,
					F = !t.isRemoved || t.bannedBy === d.k,
					R = i,
					D = e => C(Object(v.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || L) && r.a.createElement(T.a, {
					text: B ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), D("approve")
					}
				}, r.a.createElement(k.a, {
					className: S.a.icon
				})), F && r.a.createElement(r.a.Fragment, null, r.a.createElement(T.a, {
					text: t.bannedBy === d.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						x(), t.bannedBy === d.k ? D("confirm_remove") : D("remove")
					}
				}, r.a.createElement(I.a, {
					className: S.a.icon
				})), r.a.createElement(T.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), D("spam")
					}
				}, r.a.createElement(w.a, {
					className: S.a.icon
				}))), r.a.createElement(T.a, {
					text: t.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), D(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(O.a, {
					className: S.a.icon
				})), s && !P && !t.bannedBy && r.a.createElement(T.a, {
					className: Object(c.a)({
						[S.a.selected]: M.isDistinguishDropdownOpen
					}),
					onClick: () => {
						D("mod_distinguish_menu"), _()
					}
				}, r.a.createElement(y.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: M.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: P,
					isUserMod: N,
					onDistinguishComment: u,
					sendEventWithName: D,
					tooltipId: A(t.id)
				})), R && r.a.createElement(T.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						E()
					}
				}, r.a.createElement(j.a, {
					className: Object(c.a)(S.a.icon, S.a.Show)
				})))
			}), "CommentModToolsFlatlist", S.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				userBadges: "R8aGxV4Lc_7mA2dO5oWDL"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
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
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/actions/gold/powerups.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/helpers/trackers/powerups.ts"),
				h = n("./src/reddit/components/AwardBadges/index.tsx"),
				x = n("./src/reddit/components/AuthorLink/index.tsx"),
				f = n("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				v = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				E = n.n(v);
			const g = e => {
				const t = Object(i.e)(f.a),
					{
						className: n,
						comment: o,
						children: s,
						isAuthorDeleted: a,
						isLivestreaming: c,
						isStrong: d,
						style: l
					} = e;
				return r.a.createElement(x.a, {
					className: Object(m.a)(E.a.commentAuthorLink, n),
					author: o.author,
					isAdmin: o.isAdmin,
					isAdminEmeritus: o.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: a,
					isLivestreaming: c,
					isMod: o.isMod,
					isOp: o.isOp,
					isStrong: d,
					isUnstyled: t,
					style: l
				}, s, o.author)
			};
			var _ = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/components/Flair/index.tsx"),
				k = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = n("./src/reddit/components/PostTopMeta/index.tsx"),
				O = n("./src/reddit/controls/MetaData/index.tsx"),
				I = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				w = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(T);
			const S = ({
				authorClassName: e,
				children: t,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				renderedInOverlay: i
			}) => r.a.createElement(r.a.Fragment, null, !Object(_.e)(n) && r.a.createElement(I.b, {
				className: M.a.userBadges,
				showAddCustom: !0,
				subredditId: n.subredditId,
				userId: n.authorId,
				uniqueIdentifier: n.id
			}), r.a.createElement(j.b, {
				className: M.a.authorHoverCard,
				postOrComment: n,
				tooltipType: i ? y.c.Lightbox : void 0
			}, r.a.createElement(w.b, {
				ignore: Object(_.e)(n) || n.distinguishType !== u.C.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(g, {
				className: e,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				isAuthorDeleted: Object(_.e)(n)
			}, t))));
			var N = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				L = n("./src/reddit/icons/svgs/Cake/index.tsx");
			const B = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(P);
			const R = ({
				commentId: e,
				isInIcons2020: t,
				renderedInOverlay: n
			}) => {
				const s = Object(i.d)(),
					a = () => s(Object(l.h)({
						tooltipId: c
					})),
					c = B("CommentTopMeta--cakeday--", e, n),
					d = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, t ? r.a.createElement(A.a, {
					name: "cake",
					isFilled: !0,
					className: F.a.cakeIcon,
					"aria-label": d,
					id: c,
					onMouseEnter: a,
					onMouseLeave: a
				}) : r.a.createElement(L.a, {
					"aria-label": d,
					className: F.a.cakeIcon,
					id: c,
					onMouseEnter: a,
					onMouseLeave: a
				}), r.a.createElement(N.c, {
					tooltipId: c,
					text: d
				}))
			};
			var D = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/lib/humanizeDateTime/index.ts"),
				U = n("./src/lib/timeAgo/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts");
			const V = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						renderedInOverlay: s
					} = e, a = Object(i.d)(), c = B("CommentTopMeta--Created--", n.id, s), d = () => a(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(D.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							z(a, n.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(U.d)(n.created, {
						noPostfix: o,
						shortenedUnit: o
					}), r.a.createElement(N.c, {
						tooltipId: c,
						text: Object(H.a)(n.created)
					}))
				},
				z = (e, t) => {
					window.addEventListener("focus", (function n() {
						X(e, t, n)
					}))
				},
				X = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.f)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.f)({
						commentListNodeId: t
					})), 5e3)
				};
			var G = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				J = n.n(G);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(O.a, {
				className: J.a.crowdControlText
			}, q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Y = n.n(Q);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(O.a, {
				className: Y.a.editedText
			}, K._("edited {time}", [K._param("time", Object(U.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ee = n("./src/reddit/helpers/isRemoved.ts"),
				te = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ne = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				se = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				re = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				de = n("./src/reddit/models/AutomatedReporting/index.ts"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = ({
				comment: e,
				ignoreLock: t,
				isInIcons2020: s,
				renderedInOverlay: a
			}) => {
				const c = Object(i.d)(),
					d = e => () => c(Object(l.f)({
						tooltipId: e
					})),
					u = () => c(Object(l.i)()),
					p = t => B(t, e.id, a),
					b = p("CommentTopMeta--Automod--"),
					h = p("CommentTopMeta--Approve--"),
					x = p("CommentTopMeta--Remove--"),
					f = p("CommentTopMeta--Report--"),
					v = p("CommentTopMeta--Spam--"),
					E = e.bannedBy && Object(de.b)(e.bannedBy),
					g = d(x);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(te.a)(e),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: u,
					isFilled: s
				}), r.a.createElement(N.c, {
					tooltipId: h,
					text: Object(te.a)(e)
				})), Object(ee.a)(e) && !E && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.removeIcon,
					desc: Object(te.c)(e),
					id: x,
					onMouseEnter: g,
					onMouseLeave: u,
					isFilled: s
				}), r.a.createElement(N.c, {
					tooltipId: x,
					text: Object(te.c)(e)
				})), Object(ee.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => c(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ee.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !E && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: g,
					onMouseLeave: u
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(se.a, {
					className: me.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: s
				}), e.bannedBy && e.isSpam && r.a.createElement(ae.a, {
					className: me.a.spamIcon,
					desc: Object(te.e)(e),
					id: v,
					onMouseEnter: d(v),
					onMouseLeave: u,
					isFilled: s
				}), e.bannedBy && e.isSpam && r.a.createElement(N.c, {
					tooltipId: v,
					text: Object(te.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (s ? r.a.createElement(A.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					"aria-label": te.b,
					id: b,
					key: b,
					onMouseEnter: d(b),
					onMouseLeave: u
				}) : r.a.createElement(ce.a, {
					className: Object(m.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					desc: te.b,
					id: b,
					key: b,
					onMouseEnter: d(b),
					onMouseLeave: u
				})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(N.c, {
					tooltipId: b,
					text: te.b
				}), Object(ne.a)(e) && r.a.createElement(ie.a, {
					className: me.a.reportIcon,
					desc: Object(te.d)(e.numReports),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: u,
					isFilled: s
				}), Object(ne.a)(e) && r.a.createElement(N.c, {
					tooltipId: f,
					text: Object(te.d)(e.numReports)
				}), E && r.a.createElement("a", {
					className: me.a.removalReason
				}, o.fbt._("• Removed by the Automated {filterName}", [o.fbt._param("filterName", E)], {
					hk: "3C408F"
				})))
			};
			var pe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				be = n.n(pe);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = () => r.a.createElement(O.a, {
				className: be.a.stickiedText
			}, he._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var fe = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ve = n.n(fe);
			const Ee = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: s,
					flair: i,
					ignoreLock: a,
					isInIcons2020: c,
					isLivestreaming: d,
					renderedInOverlay: l
				} = e;
				return s.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(ve.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ve.a.authorLine
				}, r.a.createElement("span", {
					className: ve.a.metaText
				}, s.deletedBy === _.b.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(O.c, {
					className: ve.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: ve.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}))) : r.a.createElement("div", {
					className: Object(m.a)(ve.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ve.a.authorLine
				}, r.a.createElement(S, {
					authorClassName: ve.a.author,
					comment: s,
					isLivestreaming: d,
					renderedInOverlay: l
				}), n && r.a.createElement(Z, null), s.isAuthorCakeday && r.a.createElement(R, {
					commentId: s.id,
					isInIcons2020: c,
					renderedInOverlay: l
				}), r.a.createElement(k.a, {
					className: ve.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), r.a.createElement(O.c, {
					className: ve.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: ve.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(O.c, {
					className: ve.a.separator
				}), r.a.createElement(xe, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(O.c, {
					className: ve.a.separator
				}), r.a.createElement($, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(ue, {
					comment: s,
					ignoreLock: a,
					isInIcons2020: c,
					renderedInOverlay: l
				}), r.a.createElement(h.a, {
					thing: s,
					tooltipType: l ? y.c.Lightbox : void 0
				})), i && r.a.createElement("span", {
					className: ve.a.userFlairLine
				}, r.a.createElement(C.b, {
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var ge = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				_e = n("./src/reddit/selectors/economics.ts"),
				Ce = n("./src/reddit/models/Flair/index.ts"),
				ke = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				ye = n("./src/reddit/icons/fonts/Op/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ie = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				we = n("./src/reddit/selectors/subreddit.ts"),
				je = n("./src/reddit/selectors/userFlair.ts"),
				Te = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Me = n.n(Te);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ne = p.a.wrapped(C.b, "RightPositionedAuthorFlair", Me.a),
				Ae = p.a.wrapped(ke.a, "AdminIcon", Me.a),
				Le = p.a.div("AdminEmeritus", Me.a),
				Be = p.a.wrapped(Oe.a, "ModeratorIcon", Me.a),
				Pe = p.a.wrapped(ye.a, "OpIcon", Me.a),
				Fe = p.a.wrapped(ke.a, "ContractorIcon", Me.a),
				Re = p.a.span("DeletedText", Me.a),
				De = p.a.wrapped(O.a, "MetaSeparator", Me.a),
				He = e => (t, {
					comment: n,
					renderedInOverlay: o
				}) => B(e, n.id, o),
				Ue = () => o.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				We = () => o.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ve = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				ze = () => o.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Xe = () => o.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Ge = Object(i.b)(() => Object(a.c)({
					adminTooltipId: He("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: He("CommentTopMeta--AdEm--"),
					contractorTooltipId: He("CommentTopMeta--Contractor--"),
					gildedTooltipId: He("CommentTopMeta--Gold--"),
					modTooltipId: He("CommentTopMeta--Mod--"),
					opTooltipId: He("CommentTopMeta--OP--"),
					topSupporterTooltipId: He("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(_e.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(we.I)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(je.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: Ie.a,
					isCommentHeaderRedesignEnabled: f.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.c)())
				}));
			t.a = Ge(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					children: o,
					className: s,
					collapsed: i,
					collapsedBecauseCrowdControl: a,
					comment: d,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: x,
					flairPosition: f,
					hasBadges: v,
					isCommentHeaderRedesignEnabled: E,
					isInIcons2020: g,
					isLivestreaming: _,
					isPostComment: I,
					ignoreFlairPosition: w,
					ignoreLock: j,
					modTooltipId: T,
					onHideTooltip: M,
					onShowTooltip: N,
					opTooltipId: A,
					openPowerupsModal: L,
					renderContractorBadge: B,
					renderedInOverlay: P,
					subredditDisplayText: F,
					topSupporterTooltipId: R
				} = e, D = Object(c.a)(), H = r.a.createElement(r.a.Fragment, null, r.a.createElement(ge.b, {
					commentId: d.id
				}), r.a.createElement(ge.a, {
					commentId: d.id,
					commentsPageKey: l
				}));
				if (I && E) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ee, {
					className: Object(m.a)(s, {
						[Me.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: d,
					flair: x || null,
					ignoreLock: j,
					isInIcons2020: g,
					isLivestreaming: _,
					renderedInOverlay: P
				}), H);
				if (d.isDeleted) return r.a.createElement(Je, Se({}, e, {
					className: Object(m.a)(s, Me.a.container, {
						[Me.a.collapsed]: i
					})
				}));
				if (i) return r.a.createElement(qe, Se({}, e, {
					className: Object(m.a)(s, Me.a.container, {
						[Me.a.collapsed]: i
					})
				}));
				const U = !w && f === Ce.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, Me.a.container, {
						[Me.a.collapsed]: i,
						[Me.a.hasBadges]: v,
						[Me.a.liveStreaming]: _
					}),
					"data-testid": "comment-top-meta"
				}, x && U && r.a.createElement(C.b, {
					flair: x,
					forceSmallEmojis: p
				}), o && o, r.a.createElement(S, {
					comment: d,
					isLivestreaming: _,
					isStrong: !!p,
					renderedInOverlay: P
				}), a && r.a.createElement(Z, null), a && r.a.createElement(O.c, {
					className: Me.a.metaText,
					key: "crowdControlSeparator"
				}), x && !U && r.a.createElement(Ne, {
					flair: x,
					forceSmallEmojis: p
				}), !p && r.a.createElement(k.a, {
					className: Me.a.publicPoints,
					contentId: d.id,
					metaSeparator: r.a.createElement(O.c, {
						className: Me.a.metaText
					}),
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), r.a.createElement(r.a.Fragment, null, H, r.a.createElement(Qe, {
					comment: d,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: T,
					onHideTooltip: M,
					onShowTooltip: N,
					openPowerupsModal: () => {
						D(Object(b.k)("comment")), L()
					},
					opTooltipId: A,
					renderContractorBadge: B,
					renderedInOverlay: P,
					subredditDisplayText: F,
					topSupporterTooltipId: R,
					isInIcons2020: g
				})), !p && r.a.createElement(r.a.Fragment, null, !d.isDeleted && !I && r.a.createElement(r.a.Fragment, null, r.a.createElement(O.b, {
					className: Me.a.metaText,
					isScoreHidden: d.isScoreHidden,
					score: d.score
				}), r.a.createElement(O.c, {
					className: Me.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(V, {
					key: "Created",
					className: Me.a.MetaLink,
					comment: d,
					renderedInOverlay: P
				}), d.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(O.c, {
					className: Me.a.separator
				}), r.a.createElement(xe, null)), d.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(O.c, {
					className: Me.a.separator
				}), r.a.createElement($, {
					editedAt: d.editedAt
				}))), r.a.createElement(ue, {
					comment: d,
					ignoreLock: j,
					isInIcons2020: g,
					renderedInOverlay: P
				}), r.a.createElement(h.a, {
					thing: d,
					tooltipType: P ? y.c.Lightbox : void 0
				}))
			});
			const Je = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: i,
						renderedInOverlay: a
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Re, null, i.deletedBy === _.b.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(V, {
						key: "Created",
						className: Me.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), n && Ze({
						childrenInfo: t
					}))
				},
				qe = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(g, {
						comment: t,
						isAuthorDeleted: Object(_.e)(t)
					})), r.a.createElement(O.b, {
						className: Me.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(O.c, {
						className: Me.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(V, {
						key: "Created",
						className: Me.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), Ze({
						childrenInfo: o
					}))
				},
				Ze = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(De, {
						className: Me.a.metaText
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
				};
			class Qe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						renderedInOverlay: n,
						...o
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(R, {
						commentId: e.id,
						isInIcons2020: t,
						renderedInOverlay: n
					}), e.isAdmin && r.a.createElement(Ae, {
						desc: Ue(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isAdmin && Ye(o.adminTooltipId, Ue()), e.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(Le, {
						"aria-label": We(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), e.distinguishType === u.C.ALUMNI_ADMIN && Ye(o.adminEmeritusTooltipId, We()), e.isMod && (t ? r.a.createElement(A.a, {
						name: "mod",
						isFilled: !0,
						className: Me.a.ModeratorIcon,
						"aria-label": Ve(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}) : r.a.createElement(Be, {
						desc: Ve(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					})), e.isMod && Ye(o.modTooltipId, Ve(o.subredditDisplayText)), e.isOp && r.a.createElement(Pe, {
						desc: ze(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isOp && Ye(o.opTooltipId, ze()), o.renderContractorBadge && r.a.createElement(Fe, {
						desc: Xe(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), o.renderContractorBadge && Ye(o.contractorTooltipId, Xe()))
				}
			}
			const Ye = (e, t) => r.a.createElement(N.c, {
				tooltipId: e,
				text: t
			})
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
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const b = a.a.div("DistinguishWrapper", p.a),
				h = a.a.wrapped(m.a, "Inline", p.a),
				x = a.a.wrapped(d.a, "RadioOff", p.a),
				f = a.a.wrapped(l.a, "RadioOn", p.a),
				v = e => s.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(f, null) : s.a.createElement(x, null), e.text),
				E = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: o,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: n
					}, s.a.createElement(v, {
						onClick: () => u(r.C.NONE, null),
						selected: !d && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && s.a.createElement(v, {
						onClick: () => u(r.C.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && s.a.createElement(v, {
						onClick: () => u(r.C.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && s.a.createElement(v, {
						onClick: () => u(r.C.ADMIN, null),
						selected: o && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && m && s.a.createElement(v, {
						onClick: () => u(r.C.ADMIN, !0),
						selected: o && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var g = Object(c.a)(E);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: u
				}, s.a.createElement(g, {
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : a && e !== r.C.MODERATOR ? m("undistinguish") : n && e !== r.C.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(m.a)(n)) return null;
				const o = n && n.eventInfo,
					a = Object(l.a)(n),
					u = o && Object(i.c)(o.eventStart, o.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, s.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(c.a, {
					post: n
				}), !a && u && s.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = n("./src/reddit/icons/fonts/Live/index.tsx"),
				u = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = n.n(u),
				b = n("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", p.a),
				x = b.a.span("PostEventPastText", p.a),
				f = b.a.span("PostEventNowText", p.a),
				v = b.a.span("Container", p.a),
				E = b.a.wrapped(l.a, "CalendarIcon", p.a),
				g = b.a.wrapped(m.a, "LiveIcon", p.a),
				_ = b.a.div("LoadingState", p.a);
			class C extends o.Component {
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
						eventEnd: o,
						eventIsLive: l,
						eventStart: m
					} = n, u = Object(r.e)(m, o);
					let p, b;
					if (this.state.mounted || u === r.a.Live) p = function(e, t, n) {
						const o = Object(r.e)(e, t),
							s = new Date(e * a.Ib);
						let d;
						return o === r.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (o === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : o === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(s)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(m, o, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = s.a.createElement(_, {
							className: e
						})
					}
					if (l) b = s.a.createElement(f, null, s.a.createElement(g, null), p);
					else if (u === r.a.Future) b = s.a.createElement(h, null, s.a.createElement(E, null), p);
					else {
						if (u !== r.a.Past) return null;
						b = s.a.createElement(x, null, s.a.createElement(E, null), p)
					}
					return s.a.createElement(v, {
						className: e
					}, b)
				}
			}
			t.a = C
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				f = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				v = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				E = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				g = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Link/index.tsx"),
				C = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				k = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				y = n("./src/reddit/icons/fonts/Text/index.tsx"),
				O = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				I = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				w = n("./src/reddit/models/Media/index.ts"),
				j = n("./src/reddit/components/ExpandoButton/index.m.less"),
				T = n.n(j);
			const M = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				S = (e, t = !1, n, o) => {
					const s = Object(c.a)(T.a.icon, T.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						className: s
					});
					if (n.pollData) return o ? r.a.createElement(b.a, {
						name: "poll_post",
						isFilled: !0
					}) : r.a.createElement(I.a, {
						className: s
					});
					switch (e) {
						case w.o.GIFVIDEO:
							return r.a.createElement(g.a, {
								className: s
							});
						case w.o.IMAGE:
							return r.a.createElement(k.a, {
								className: s
							});
						case w.o.TEXT:
						case w.o.RTJSON:
							return r.a.createElement(y.a, {
								className: s
							});
						case w.o.VIDEO:
							return r.a.createElement(E.a, {
								className: s
							});
						case w.o.GALLERY:
							return o ? r.a.createElement(b.a, {
								name: "media_gallery",
								isFilled: !0
							}) : r.a.createElement(O.a, {
								className: s
							});
						case w.o.EMBED:
						default:
							return r.a.createElement(_.a, {
								className: s
							})
					}
				};
			t.a = M(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isExpanded: i,
					post: l,
					toggle: b,
					useMediaIcons: h
				} = e, E = Object(p.a)(), g = n || l, _ = s && !!n;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(u.a)(g)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, T.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: b
				}, i ? r.a.createElement(x.a, {
					className: T.a.icon,
					isFilled: !0
				}) : h ? r.a.createElement(r.a.Fragment, null, S(g.media && g.media.type, _, l, E), r.a.createElement(f.a, {
					className: Object(c.a)(T.a.icon, T.a.showOnHover)
				})) : r.a.createElement(f.a, {
					className: T.a.icon,
					isFilled: E
				})) : g.source && g.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(C.a, {
					className: Object(c.a)(T.a.icon, T.a.outboundLinkIcon),
					isFilled: E
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, r.a.createElement(v.a, {
					className: T.a.icon,
					isFilled: E
				}))
			})
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), m = i.a.div("Placeholder", c.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(o.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: r.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [x, f] = Object(s.useState)(!0), v = Object(b.b)(n.id, h), E = Object(i.d)(), g = Object(p.a)(), _ = Object(b.a)(n, h), C = (e, o) => g(Object(u.a)(t, n.id, e, o));
				Object(s.useEffect)(() => {
					_ && C("modal", "show")
				}, [_]);
				if (!_ || !x) return null;
				const k = o.fbt._("Help r/{subredditName} mods", [o.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: v,
					title: k,
					onClose: () => {
						f(!1), C("close", "click"), E(Object(c.A)()), E(Object(c.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						E(Object(c.A)())
					}
				}, r.a.createElement("p", null, o.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), o.fbt._param("=community", r.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, o.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), C("report", "click"), void E(Object(d.c)(n.id)))
				}, o.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: x
				} = e, [f, v] = Object(r.useState)(o.Survey), E = Object(h.b)(n.id, x), g = Object(a.d)(), _ = Object(b.a)(), C = Object(h.a)(n, x), k = (e, o) => _(Object(p.b)(t, n.id, e, o));
				Object(r.useEffect)(() => {
					C && k("modal", "show")
				}, [C]);
				const y = e => {
					v(o.Closed), k("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), g(Object(l.c)(n.id, void 0, e))
				};
				if (!C) return null;
				let O = null;
				const I = {
					id: E,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(o.Closed), k("close", "click"), g(Object(d.A)())
					},
					onClickOutside: () => {
						g(Object(d.A)())
					}
				};
				switch (f) {
					case o.Survey:
						O = i.a.createElement(m.a, I, i.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.OffTopic), k("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.DontLike), k("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.BreaksRules), k("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case o.OffTopic:
						O = i.a.createElement(m.a, I, i.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case o.DontLike:
						O = i.a.createElement(m.a, I, i.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case o.BreaksRules:
						O = i.a.createElement(m.a, I, i.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(u.a, {
							onClick: () => y("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
							onClick: () => y("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case o.Closed:
				}
				return O
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(o || (o = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function a(e) {
				return s.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: o,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, o), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: d.a.header
				}, s.a.createElement("span", {
					className: d.a.title
				}, r), s.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var m = s.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = n("./src/reddit/components/PostContainer/index.m.less"),
				g = n.n(E);
			const _ = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(f.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					})
				})),
				C = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class k extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: u,
						onPostContentClick: p,
						sendEvent: h,
						style: f,
						ref: v
					} = this.props, E = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => u && u(n, l, t, r))(n), p && C(n) && p(n, l)), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(g.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), _ = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || _ ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, E) : l.media && Object(b.E)(l.media) ? s.a.createElement(m, {
						postId: l.id
					}, E) : E
				}
			}
			t.a = _(Object(v.c)(Object(u.c)(k)))
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
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: o
							},
							sendEvent: s
						} = this.props, r = !!o;
						s(e ? Object(m.o)({
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
					} = this.props, s = this.state.isHovered, i = n.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && s && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return C
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				u = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = n.n(u);
			const b = o.a.wrapped(i.a, "Icon", p.a),
				h = o.a.wrapped(a.a, "Icon", p.a),
				x = o.a.wrapped(c.a, "Icon", p.a),
				f = o.a.wrapped(d.a, "Icon", p.a),
				v = o.a.wrapped(l.a, "Icon", p.a),
				E = o.a.wrapped(m.a, "Icon", p.a),
				g = o.a.wrapped(s.b, "CheckboxMenuItem", p.a),
				_ = o.a.wrapped(r.b, "DropdownRow", p.a),
				C = o.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: p = !1,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: x,
					redditStyle: f,
					subreddit: v,
					isOverlay: E,
					isActionBarAnimationEnabled: g,
					postId: _,
					isForceSelected: C
				} = e, k = `upvote-button-${t.id}${E?"-overlay":""}`, {
					moderationPrompt: y
				} = t;
				return s.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, o && s.a.createElement(l.a, {
					isCheckboxSelected: p,
					toggleCheckbox: h
				}), s.a.createElement(d.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: k,
					isActionBarAnimationEnabled: g,
					postId: _,
					isForceSelected: C,
					scoreClassName: b.a.score
				}), y && s.a.createElement(a.b, {
					rightOf: k
				}, "survey" === y ? s.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				}) : s.a.createElement(r.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				})))
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
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					border: e,
					small: t,
					...n
				}) => r.a.createElement(i.q, m({}, n, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? o.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : o.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? o.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : o.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...o
				}) => r.a.createElement(i.q, m({}, o, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(o.className, d.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: o = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? r.a.createElement(b, m({}, s, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(u, m({}, s, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(o.c)(r.a))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = r.a.div("WidgetBackground", c.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return M
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				u = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				I = n.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(d.a)(I.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: I.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: I.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: I.a.errorMsg
				}, e.errorMsg || o.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(M, w({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.o, {
					className: I.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(c.c)({
					hideNSFWPref: k.B,
					nightmode: k.V
				}),
				M = Object(i.b)(T)(e => {
					const t = Object(v.a)();
					return r.a.createElement("div", {
						className: I.a.communityItemContainer
					}, r.a.createElement(_.a, {
						widthRight: h.t
					}, r.a.createElement("div", {
						className: I.a.iconContainer
					}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
						className: I.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? r.a.createElement(E.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(d.a)(I.a.defaultCommunityIcon, {
							[I.a.mNightmode]: e.nightmode
						})
					}) : r.a.createElement(g.a, {
						className: I.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: I.a.communityDescriptionContainer
					}, r.a.createElement(a.a, {
						className: I.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(y.b)(e.name, e.type),
						to: Object(y.a)(e.name, e.type)
					}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
						className: I.a.communityInfoContainer
					}, !!e.subscribers && r.a.createElement("p", {
						className: I.a.subscriberCount
					}, o.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [o.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && r.a.createElement(l.b, {
						flair: {
							type: C.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
						className: Object(d.a)(I.a.communityCta, I.a.smallLoadingIcon),
						sizePx: 12
					}) : r.a.createElement(x.o, {
						className: Object(d.a)(I.a.communityCta, {
							[I.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : r.a.createElement(m.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && r.a.createElement("p", {
						title: e.description,
						className: I.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === o.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === o.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(s.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				s = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				c = .2,
				d = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => t => {
					const {
						className: n,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const o = !(!t && !n);
						let s = "";
						return s = e ? o ? l.a.mDisabledRedditStyle : l.a.mDisabled : o ? l.a.mActiveRedditStyle : l.a.mActive
					})(o, i, a);
					return s.a.createElement(e, m({
						className: Object(r.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				p = u(c.a),
				b = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : i.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
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
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = i.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const i = Object(a.b)(t),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						d = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, d)
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
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, n, s) => r => ({
					source: "report_prompt",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				}),
				r = (e, t, n, s) => r => ({
					source: "report_survey",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, n) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: Object(r.a)(d.a.DistinguishShield, Object(a.b)(t ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				c = n.n(a);
			t.a = e => {
				const t = Object(r.a)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"message":"envelope",e.isFilled)} ${c.a.Envelope} ${e.className}`
				})
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
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return s.a.createElement("i", {
					className: `${Object(r.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", a.a);
			t.a = l
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
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return s.a.createElement("i", {
					className: `${Object(r.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, n) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Op/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(i.a, null, e.desc))
			}, "OpIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(s.a)(o.pb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.1dc3e278be3011195e47.js.map