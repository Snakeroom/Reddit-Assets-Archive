// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.fda24a5263a6823cb07e.js
// Retrieved at 3/23/2021, 9:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, o) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function o(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[1] || ""
					}

					function n(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[2] || ""
					}
					var s, i = o(/(ipod|iphone|ipad)/i).toLowerCase(),
						r = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						x = !i && !l && /macintosh/i.test(t),
						f = !r && !m && !p && !u && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = o(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !g && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: E || o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: E || o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: o(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : m ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: o(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: o(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: o(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: o(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: E || o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: o(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : r ? s = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, E && (s.version = E)) : i ? (s = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, E && (s.version = E)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: o(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: o(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || o(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !r && !s.silk ? !s.windowsphone && i ? (s[i] = e, s.ios = e, s.osname = "iOS") : x ? (s.mac = e, s.osname = "macOS") : k ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? C = o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? C = (C = o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? C = (C = o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : r ? C = o(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? C = o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? C = o(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? C = o(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (C = o(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (s.osversion = C);
					var y = !s.windows && C.split(".")[0];
					return g || d || "ipad" == i || r && (3 == y || y >= 4 && !_) || s.silk ? s.tablet = e : (_ || "iphone" == i || "ipod" == i || r || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var o = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var o, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (o = 0; o < e.length; o++) n.push(t(e[o]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), o = s(e, (function(e) {
							var o = t - n(e);
							return s((e += new Array(o + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (o[0][t] > o[1][t]) return 1;
						if (o[0][t] !== o[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function r(e, n, s) {
					var r = o;
					"string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (r = t(s));
					var a = "" + r.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && r[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return n
				}
				return o.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in o) return !0
					}
					return !1
				}, o.isUnsupportedBrowser = r, o.compareVersions = i, o.check = function(e, t, o) {
					return !r(e, t, o)
				}, o._detect = t, o.detect = t, o
			}, e.exports ? e.exports = n() : o("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
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
					var o = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, o) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== o[t - 1]
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							o = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var i = s.element,
								r = a(i),
								d = this._rootContainsTarget(i),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, o),
								m = s.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: r,
									rootBounds: o,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != e.getComputedStyle(o).display) {
							for (var s, i, r, d, l, m, p, u, b = a(o), h = c(o), x = !1; !x;) {
								var f = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (x = !0, f = n) : h != t.body && h != t.documentElement && "visible" != v.overflow && (f = a(h)), f && (s = f, i = b, r = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, r = Math.max(s.top, i.top), d = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), m = Math.min(s.right, i.right), u = d - r, !(b = (p = m - l) >= 0 && u >= 0 && {
										top: r,
										bottom: d,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								h = c(h)
							}
							return b
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var o = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: o.clientWidth || n.clientWidth,
								width: o.clientWidth || n.clientWidth,
								bottom: o.clientHeight || n.clientHeight,
								height: o.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, o) {
								return "px" == t.unit ? t.value : t.value * (o % 2 ? e.width : e.height) / 100
							})),
							o = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return o.width = o.right - o.left, o.height = o.bottom - o.top, o
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (o !== n)
							for (var s = 0; s < this.thresholds.length; s++) {
								var i = this.thresholds[s];
								if (i == o || i == n || i < o != i < n) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						o.indexOf(this) < 0 && o.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = o.indexOf(this); - 1 != e && o.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = n
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
						o = t.width * t.height,
						n = this.intersectionRect,
						s = n.width * n.height;
					this.intersectionRatio = o ? s / o : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var o, n, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							o(), s = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, o, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, o, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, o)
				}

				function r(e, t, o, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, o, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, o)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (o) {}
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
					for (var o = t; o;) {
						if (o == e) return !0;
						o = c(o)
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
			e.exports = function(e, t, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, o, n, s) {
				return s(e, (function(e, s, i) {
					o = n ? (n = !1, e) : t(o, e, s, i)
				})), o
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				s = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return void 0 === o && (o = t, t = void 0), void 0 !== o && (o = (o = s(o)) == o ? o : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), n(s(e), t, o)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayReduce.js"),
				s = o("./node_modules/lodash/_baseEach.js"),
				i = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/_baseReduce.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var d = a(e) ? n : r,
					c = arguments.length < 3;
				return d(e, i(t, 4), o, c, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > r) return [];
				var o = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = n(c, t); ++o < e;) t(o);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var n = o("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return c
			})), o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "d", (function() {
				return p
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/components/TrackingHelper/index.tsx"),
				r = o("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, o) => (n = (() => {})) => s => {
				const i = p(s.target, s.currentTarget),
					a = u(s.target, s.currentTarget);
				i && o && t && (m(s.target, s.currentTarget, l.anchors) ? o(t(e, i, a)) : o(o => {
					const n = t(e, i, a)(o);
					let s;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						s = t
					}
					return {
						...n,
						actionInfo: Object(r.previousPageActionInfo)(o, s)
					}
				})), m(s.target, s.currentTarget, l.anchorsAndButtons) && n(s)
			};

			function c(e) {
				return Object(i.c)(t => {
					const {
						sendEvent: o,
						eventFactory: i,
						clickTrackingId: r,
						...c
					} = t, l = Object(n.useCallback)(d(r, i, o), [r, i, o]);
					return s.a.createElement(e, a({}, c, {
						afterClickTracking: l
					}))
				})
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, o) => !o.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, o)),
				p = (e, t) => {
					const o = e.dataset.clickId;
					return o || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				u = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && u(e.parentElement, t))
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return b
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "e", (function() {
				return v
			})), o.d(t, "g", (function() {
				return E
			})), o.d(t, "b", (function() {
				return g
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				r = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				d = o("./src/reddit/constants/modals.ts"),
				c = o("./src/reddit/endpoints/comment/index.tsx"),
				l = o("./src/reddit/selectors/user.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				p = o("./src/reddit/actions/comment/constants.ts");
			const u = Object(s.a)(p.m),
				b = e => async (t, o, {
					apiContext: n
				}) => {
					o().features.comments.models[e] && (await Object(c.h)(n(), e)).ok && t((e => async t => {
						t(u({
							commentId: e
						}))
					})(e))
				}, h = e => async (t, o, {
					apiContext: n
				}) => {
					if (!Object(l.J)(o())) return void t(Object(r.i)(d.a.LOGIN_MODAL_ID));
					const s = o().features.comments.models[e];
					if (!s) return;
					const i = s.isLocked ? c.j : c.d;
					t(Object(m.h)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await i(n(), e)).ok || t(Object(m.h)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, x = Object(s.a)(p.C), f = e => async (t, o, {
					apiContext: n
				}) => {
					const s = o(),
						i = s.features.comments.models[e],
						r = s.user.account ? s.user.account.displayText : null;
					i && r && (t(Object(m.h)({
						[e]: {
							isApproved: !0,
							approvedBy: r,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(c.a)(n(), e)).ok || t(Object(m.h)({
						[e]: {
							isApproved: i.isApproved,
							approvedBy: null,
							bannedBy: i.bannedBy,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							modReasonBy: i.modReasonBy,
							modRemovalReason: i.modRemovalReason,
							numReports: i.numReports || null
						}
					})), Object(a.d)())
				}, v = (e, t) => async (o, n, {
					apiContext: s
				}) => {
					const i = n(),
						r = i.features.comments.models[e],
						d = i.user.account ? i.user.account.displayText : null;
					r && d && (o(Object(m.h)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(c.f)(s(), e, t)).ok || o(Object(m.h)({
						[e]: {
							approvedBy: r.approvedBy,
							bannedBy: r.bannedBy,
							isApproved: r.isApproved,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam
						}
					})), Object(a.d)())
				}, E = e => async (t, o, {
					apiContext: n
				}) => {
					const s = o().features.comments.models[e];
					if (!s) return;
					const i = s.ignoreReports ? c.i : c.c;
					t(Object(m.h)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await i(n(), e)).ok || t(Object(m.h)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, g = (e, t, o) => async (s, r, {
					apiContext: a
				}) => {
					const d = r(),
						l = d.features.comments.models[e];
					if (!l) return;
					const p = l.postId,
						u = d.postStickiedComments.data[p],
						b = n.g[t];
					s(Object(m.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.C.ADMIN,
							isMod: t === n.C.MODERATOR,
							isStickied: !!o
						}
					})), o && u && u !== e && s(Object(m.h)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(c.b)(a(), e, b, o || null)).ok ? o && s(x({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: n.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (s(Object(m.h)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), s(Object(m.h)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, o) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = o.n(n);
			const i = o("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = i
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, o) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/config.ts"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./src/reddit/components/CallToActionButton/index.tsx"),
				a = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = o("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = o.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: o,
					isCompact: s
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !s && i.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), i.a.createElement(a.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: o.isSponsored,
					postId: o.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && i.a.createElement(r.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: o.isSponsored,
					postId: o.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = o("./src/reddit/components/CallToActionButton/index.m.less"),
				d = o.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement(r.a, c({
				className: Object(i.a)(e, d.a.CallToActionButton, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, o) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/reddit/actions/comment/moderation.ts"),
				d = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/helpers/trackers/modTools.ts"),
				p = o("./src/reddit/selectors/tooltip.ts"),
				u = o("./node_modules/fbt/lib/FbtPublic.js"),
				b = o("./src/lib/lessComponent.tsx"),
				h = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = o("./src/reddit/icons/svgs/Show/index.tsx"),
				f = o("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = o.n(f);
			const E = b.a.wrapped(x.a, "Show", v.a);
			var g = e => s.a.createElement(h.e, null, !e.comment.isApproved && s.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, s.a.createElement(h.a, null)), !e.comment.bannedBy && s.a.createElement(s.a.Fragment, null, s.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, s.a.createElement(h.g, null)), s.a.createElement(h.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, s.a.createElement(h.h, null)), s.a.createElement(h.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, s.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && s.a.createElement(h.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, s.a.createElement(E, null)));
			const _ = b.a.wrapped(l.a, "StyledDropdown", v.a),
				k = Object(r.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				C = Object(i.b)(k, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(a.a)(t.id)),
					onLockComment: () => e(Object(a.c)(t.id)),
					onRemoveComment: () => e(Object(a.e)(t.id, !1)),
					onSpamComment: () => e(Object(a.e)(t.id, !0)),
					onShowComment: () => e(Object(a.d)(t.id))
				})),
				y = Object(d.a)(_),
				w = C(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: o,
						onApproveComment: n,
						onLockComment: i,
						onRemoveComment: r,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return s.a.createElement(y, {
						isOpen: o,
						tooltipId: l
					}, s.a.createElement(g, {
						onApproveComment: () => {
							n(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							r(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							i(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = w
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/comment/moderation.ts"),
				p = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = o("./src/reddit/components/ModModeReports/helpers.ts"),
				h = o("./src/reddit/components/TrackingHelper/index.tsx"),
				x = o("./src/reddit/contexts/PageLayer/index.tsx"),
				f = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = o("./src/reddit/helpers/trackers/modTools.ts"),
				E = o("./src/reddit/selectors/moderatingComments.ts"),
				g = o("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = o("./src/reddit/selectors/tooltip.ts"),
				k = o("./src/reddit/selectors/user.ts"),
				C = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = o("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				w = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				T = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				I = o("./src/reddit/icons/svgs/Show/index.tsx"),
				j = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				S = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = o.n(S);
			const N = Object(x.t)(),
				A = e => `Distinguish--Dropdown--${e}`,
				L = Object(a.c)({
					currentUser: k.i,
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
							comment: o
						} = t;
						return Object(x.g)(e, t) || Object(g.k)(e, {
							subredditId: o.subredditId
						})
					},
					modModeEnabled: x.Q
				}),
				B = Object(r.b)(L, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (o, n) => e(Object(m.b)(t.id, o, n)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(p.h)({
						tooltipId: A(t.id)
					}))
				}));
			t.a = N(B(l.a.wrapped(Object(h.c)(({
				className: e,
				comment: t,
				currentUser: o,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: r,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: p,
				onLockComment: h,
				onRemoveComment: x,
				onShowComment: E,
				onSpamComment: g,
				onToggleDistinguishDropdown: _,
				sendEvent: k,
				...S
			}) => {
				const N = Object(f.a)(a),
					L = Object(b.b)(t),
					B = t.isApproved && L,
					P = !!o && o.isEmployee,
					R = !t.isRemoved || t.bannedBy === c.k,
					D = r,
					F = e => k(Object(v.a)(e, t.id));
				return i.a.createElement("div", {
					className: e
				}, (t.bannedBy || L) && i.a.createElement(j.a, {
					text: B ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), F("approve")
					}
				}, i.a.createElement(C.a, {
					className: M.a.icon
				})), R && i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, {
					text: t.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						x(), t.bannedBy === c.k ? F("confirm_remove") : F("remove")
					}
				}, i.a.createElement(T.a, {
					className: M.a.icon
				})), i.a.createElement(j.a, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), F("spam")
					}
				}, i.a.createElement(O.a, {
					className: M.a.icon
				}))), i.a.createElement(j.a, {
					text: t.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), F(t.isLocked ? "unlock" : "lock")
					}
				}, i.a.createElement(w.a, {
					className: M.a.icon
				})), s && !P && !t.bannedBy && i.a.createElement(j.a, {
					className: Object(d.a)({
						[M.a.selected]: S.isDistinguishDropdownOpen
					}),
					onClick: () => {
						F("mod_distinguish_menu"), _()
					}
				}, i.a.createElement(y.a, null), i.a.createElement(u.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: S.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: P,
					isUserMod: N,
					onDistinguishComment: p,
					sendEventWithName: F,
					tooltipId: A(t.id)
				})), D && i.a.createElement(j.a, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						E()
					}
				}, i.a.createElement(I.a, {
					className: Object(d.a)(M.a.icon, M.a.Show)
				})))
			}), "CommentModToolsFlatlist", M.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ApproveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				approveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				LockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				lockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AutomoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				automoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				RemoveIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				removeIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				ReportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				reportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				SpamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				spamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/hooks/useTracking.ts"),
				c = o("./src/reddit/actions/gold/powerups.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/lib/addQueryParams/index.ts"),
				p = o("./src/lib/classNames/index.ts"),
				u = o("./src/lib/constants/index.ts"),
				b = o("./src/lib/humanizeDateTime/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				x = o("./src/lib/timeAgo/index.ts"),
				f = o("./src/reddit/helpers/trackers/powerups.ts"),
				v = o("./src/reddit/components/AuthorLink/index.tsx"),
				E = o("./src/reddit/components/AwardBadges/index.tsx"),
				g = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				_ = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				k = o("./src/reddit/components/Flair/index.tsx"),
				C = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = o("./src/reddit/components/PostTopMeta/index.tsx"),
				I = o("./src/reddit/selectors/economics.ts"),
				j = o("./src/reddit/helpers/isRemoved.ts"),
				S = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				N = o("./src/reddit/actions/comment/index.ts"),
				A = o("./src/reddit/models/AutomatedReporting/index.ts"),
				L = o("./src/reddit/models/Comment/index.ts"),
				B = o("./src/reddit/models/Flair/index.ts"),
				P = o("./src/reddit/icons/fonts/index.tsx"),
				R = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				D = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				H = o("./src/reddit/icons/fonts/Op/index.tsx"),
				U = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				W = o("./src/reddit/icons/fonts/Report/index.tsx"),
				z = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				V = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				G = o("./src/reddit/icons/svgs/Cake/index.tsx"),
				Q = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = o("./src/reddit/icons/svgs/Powerup/index.tsx"),
				q = o("./src/reddit/controls/MetaData/index.tsx"),
				J = o("./src/reddit/selectors/experiments/coreStyles.ts"),
				Z = o("./src/reddit/selectors/subreddit.ts"),
				K = o("./src/reddit/selectors/userFlair.ts"),
				Y = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				$ = o.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = h.a.wrapped(k.b, "RightPositionedAuthorFlair", $.a),
				oe = h.a.wrapped(R.a, "AdminIcon", $.a),
				ne = h.a.wrapped(D.a, "ApproveIcon", $.a),
				se = h.a.wrapped(F.a, "LockIcon", $.a),
				ie = h.a.div("AdminEmeritus", $.a),
				re = h.a.wrapped(V.a, "AutomoderatorIcon", $.a),
				ae = h.a.wrapped(X.a, "TopSupporterIcon", $.a),
				de = h.a.wrapped(G.a, "CakeIcon", $.a),
				ce = h.a.wrapped(Q.a, "ModeratorIcon", $.a),
				le = h.a.wrapped(U.a, "RemoveIcon", $.a),
				me = h.a.wrapped(W.a, "ReportIcon", $.a),
				pe = h.a.wrapped(z.a, "SpamIcon", $.a),
				ue = h.a.wrapped(H.a, "OpIcon", $.a),
				be = h.a.wrapped(R.a, "ContractorIcon", $.a),
				he = h.a.a("MetaLink", $.a),
				xe = h.a.wrapped(q.a, "EditedText", $.a),
				fe = h.a.wrapped(q.a, "StickiedText", $.a),
				ve = h.a.span("DeletedText", $.a),
				Ee = h.a.wrapped(q.a, "MetaSeparator", $.a),
				ge = h.a.wrapped(q.a, "CrowdControlText", $.a),
				_e = h.a.wrapped(y.b, "AuthorHoverCard", $.a),
				ke = h.a.a("RemovalReason", $.a),
				Ce = h.a.wrapped(g.b, "Component", $.a),
				ye = e => (t, {
					comment: o,
					renderedInOverlay: n
				}) => `${e}${o.id}${n?"inOverlay":""}`,
				we = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Te = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Oe = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ie = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				je = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Se = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Me = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Ne = Object(r.b)(() => Object(a.c)({
					adminTooltipId: ye("CommentTopMeta--Admin--"),
					cakedayTooltipId: ye("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ye("CommentTopMeta--AdEm--"),
					automodTooltipId: ye("CommentTopMeta--Automod--"),
					approveTooltipId: ye("CommentTopMeta--Approve--"),
					createdTooltipId: ye("CommentTopMeta--Created--"),
					contractorTooltipId: ye("CommentTopMeta--Contractor--"),
					gildedTooltipId: ye("CommentTopMeta--Gold--"),
					lockedTooltipId: ye("CommentTopMeta--Locked--"),
					modTooltipId: ye("CommentTopMeta--Mod--"),
					opTooltipId: ye("CommentTopMeta--OP--"),
					removeTooltipId: ye("CommentTopMeta--Remove--"),
					reportTooltipId: ye("CommentTopMeta--Report--"),
					spamTooltipId: ye("CommentTopMeta--Spam--"),
					topSupporterTooltipId: ye("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(I.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Z.I)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(K.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: J.a
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function o() {
							((e, t, o) => {
								window.removeEventListener("focus", o), e(Object(N.f)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(N.f)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, o)
						}))
					},
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.b)()),
					openRemovalReasonModal: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(o => e(o.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Ne(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					approveTooltipId: n,
					automodTooltipId: s,
					cakedayTooltipId: r,
					children: a,
					className: c,
					collapsed: l,
					collapsedBecauseCrowdControl: m,
					comment: b,
					commentsPageKey: h,
					contractorTooltipId: x,
					compact: v,
					flair: g,
					flairPosition: y,
					hasBadges: w,
					isAvatarsInCommentsEnabled: I,
					isInIcons2020: j,
					isLivestreaming: S,
					ignoreFlairPosition: M,
					ignoreLock: N,
					lockedTooltipId: A,
					modTooltipId: P,
					onHideTooltip: R,
					onShowTooltip: D,
					opTooltipId: F,
					openPowerupsModal: H,
					openRemovalReasonModal: U,
					removeTooltipId: W,
					renderContractorBadge: z,
					renderTopSupporterBadge: V,
					renderedInOverlay: G,
					reportTooltipId: Q,
					spamTooltipId: X,
					subredditDisplayText: J,
					topSupporterTooltipId: Z
				} = e, K = Object(d.a)();
				if (b.isDeleted) return i.a.createElement(Ae, ee({}, e, {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				if (l) return i.a.createElement(Le, ee({}, e, {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				const Y = !M && y === B.b.Left;
				return i.a.createElement("div", {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l,
						[$.a.hasBadges]: w,
						[$.a.liveStreaming]: S
					})
				}, g && Y && i.a.createElement(k.b, {
					flair: g,
					forceSmallEmojis: v
				}), !Object(L.e)(b) && i.a.createElement(Ce, {
					showAddCustom: !0,
					subredditId: b.subredditId,
					userId: b.authorId,
					uniqueIdentifier: b.id
				}), i.a.createElement(_e, {
					postOrComment: b,
					tooltipType: G ? O.c.Lightbox : void 0
				}, i.a.createElement(_.b, {
					ignore: Object(L.e)(b) || !!b.distinguishType && b.distinguishType !== u.C.NONE,
					subredditId: b.subredditId,
					userId: b.authorId
				}, i.a.createElement(Pe, {
					comment: b,
					isLivestreaming: S,
					isStrong: !!v,
					isAuthorDeleted: Object(L.e)(b)
				}, a && a))), m && i.a.createElement(ge, null, "Crowd Control"), m && i.a.createElement(q.c, {
					className: $.a.metaText,
					key: "crowdControlSeparator"
				}), g && !Y && i.a.createElement(te, {
					flair: g,
					forceSmallEmojis: v
				}), !v && i.a.createElement(C.a, {
					className: $.a.publicPoints,
					contentId: b.id,
					metaSeparator: i.a.createElement(q.c, {
						className: $.a.metaText
					}),
					subredditId: b.subredditId,
					userId: b.authorId,
					username: b.author
				}), i.a.createElement(i.a.Fragment, null, i.a.createElement(T.b, {
					commentId: b.id
				}), i.a.createElement(T.a, {
					commentId: b.id,
					commentsPageKey: h
				}), i.a.createElement(Fe, {
					comment: b,
					compact: v,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: r,
					contractorTooltipId: x,
					modTooltipId: P,
					onHideTooltip: R,
					onShowTooltip: D,
					openPowerupsModal: () => {
						K(Object(f.k)("comment")), H()
					},
					opTooltipId: F,
					renderContractorBadge: z,
					renderTopSupporterBadge: V,
					subredditDisplayText: J,
					topSupporterTooltipId: Z,
					isInIcons2020: j
				})), !v && i.a.createElement(i.a.Fragment, null, !b.isDeleted && !I && i.a.createElement(q.b, {
					className: $.a.metaText,
					isScoreHidden: b.isScoreHidden,
					score: b.score
				}), !I && i.a.createElement(q.c, {
					className: $.a.metaText,
					key: "scoreCreatedSeparator"
				}), i.a.createElement(Re, ee({
					key: "Created"
				}, e)), b.isStickied && Ue(), b.editedAt && Be(b.editedAt)), i.a.createElement(i.a.Fragment, null, i.a.createElement(He, {
					comment: b,
					approveTooltipId: n,
					automodTooltipId: s,
					ignoreLock: N,
					lockedTooltipId: A,
					onHideTooltip: R,
					onShowTooltip: D,
					openRemovalReasonModal: U,
					removeTooltipId: W,
					reportTooltipId: Q,
					spamTooltipId: X,
					isInIcons2020: j
				})), i.a.createElement(E.a, {
					thing: b,
					tooltipType: G ? O.c.Lightbox : void 0
				}))
			});
			const Ae = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: s,
						comment: r
					} = e;
					return i.a.createElement("div", {
						className: s
					}, i.a.createElement(ve, null, r.deletedBy === L.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), i.a.createElement(Re, ee({
						key: "Created"
					}, e)), o && De({
						childrenInfo: t
					}))
				},
				Le = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n
					} = e;
					return i.a.createElement("div", {
						className: o
					}, i.a.createElement("div", null, i.a.createElement(Pe, {
						comment: t,
						isAuthorDeleted: Object(L.e)(t)
					})), i.a.createElement(q.b, {
						className: $.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), i.a.createElement(q.c, {
						className: $.a.metaText,
						key: "scoreCreatedSeparator"
					}), i.a.createElement(Re, ee({
						key: "Created"
					}, e)), De({
						childrenInfo: n
					}))
				},
				Be = e => i.a.createElement(s.Fragment, null, i.a.createElement(q.c, {
					className: $.a.metaText
				}), i.a.createElement(xe, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(x.d)(e))], {
					hk: "1tiB0u"
				}))),
				Pe = e => i.a.createElement(v.a, {
					className: $.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Re extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const {
						comment: e,
						onCreatedClick: t,
						...o
					} = this.props;
					return i.a.createElement(he, {
						href: Object(m.a)(e.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: o.createdTooltipId,
						onClick: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: o.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, Object(x.d)(e.created), We(o.createdTooltipId, Object(b.a)(e.created)))
				}
			}
			const De = e => {
				const {
					hasContinueThread: t,
					numChildren: o
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return i.a.createElement(Ee, {
					className: $.a.metaText
				}, t ? n.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [n.fbt._plural(o, "number")], {
					hk: "13XC7a"
				}) : n.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [n.fbt._plural(o, "number")], {
					hk: "dhX9w"
				}))
			};
			class Fe extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						...o
					} = this.props;
					return i.a.createElement(s.Fragment, null, e.isAuthorCakeday && (t ? i.a.createElement(P.a, {
						name: "cake",
						isFilled: !0,
						className: $.a.CakeIcon,
						"aria-label": Te(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(de, {
						"aria-label": Te(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					})), e.isAuthorCakeday && We(o.cakedayTooltipId, Te()), e.isAdmin && i.a.createElement(oe, {
						desc: we(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isAdmin && We(o.adminTooltipId, we()), e.distinguishType === u.C.ALUMNI_ADMIN && i.a.createElement(ie, {
						"aria-label": Oe(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), e.distinguishType === u.C.ALUMNI_ADMIN && We(o.adminEmeritusTooltipId, Oe()), e.isMod && (t ? i.a.createElement(P.a, {
						name: "mod",
						isFilled: !0,
						className: $.a.ModeratorIcon,
						"aria-label": Ie(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(ce, {
						desc: Ie(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					})), e.isMod && We(o.modTooltipId, Ie(o.subredditDisplayText)), e.isOp && i.a.createElement(ue, {
						desc: je(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isOp && We(o.opTooltipId, je()), o.renderContractorBadge && i.a.createElement(be, {
						desc: Se(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), o.renderContractorBadge && We(o.contractorTooltipId, Se()), o.renderTopSupporterBadge && (t ? i.a.createElement(P.a, {
						name: "powerup",
						isFilled: !0,
						className: $.a.TopSupporterIcon,
						"aria-label": Me(),
						id: o.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: o.onHideTooltip,
						onClick: o.openPowerupsModal
					}) : i.a.createElement(ae, {
						desc: Me(),
						id: o.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: o.onHideTooltip,
						onClick: o.openPowerupsModal
					})), o.renderTopSupporterBadge && We(o.topSupporterTooltipId, Me()))
				}
			}
			class He extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						...o
					} = this.props, r = e.bannedBy && Object(A.b)(e.bannedBy);
					return i.a.createElement(s.Fragment, null, (e.approvedBy || e.isApproved) && i.a.createElement(ne, {
						desc: Object(S.a)(e),
						id: o.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), (e.approvedBy || e.isApproved) && We(o.approveTooltipId, Object(S.a)(e)), Object(j.a)(e) && !r && i.a.createElement(le, {
						desc: Object(S.c)(e),
						id: o.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), Object(j.a)(e) && We(o.removeTooltipId, Object(S.c)(e)), Object(j.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && i.a.createElement(ke, {
						onClick: o.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(j.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !r && i.a.createElement(ke, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), e.isLocked && !o.ignoreLock && i.a.createElement(se, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: o.lockedTooltipId,
						onMouseEnter: () => {
							o.onShowTooltip(o.lockedTooltipId)
						},
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.bannedBy && e.isSpam && i.a.createElement(pe, {
						desc: Object(S.e)(e),
						id: o.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.bannedBy && e.isSpam && We(o.spamTooltipId, Object(S.e)(e)), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (t ? i.a.createElement(P.a, {
						name: "bot",
						isFilled: !0,
						className: Object(p.a)($.a.AutomoderatorIcon, {
							[$.a.removed]: !!e.bannedBy
						}),
						"aria-label": S.b,
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(re, {
						className: Object(p.a)({
							[$.a.removed]: !!e.bannedBy
						}),
						desc: S.b,
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && We(o.automodTooltipId, S.b), Object(M.a)(e) && i.a.createElement(me, {
						desc: Object(S.d)(e.numReports),
						id: o.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), Object(M.a)(e) && We(o.reportTooltipId, Object(S.d)(e.numReports)), r && i.a.createElement(ke, null, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", r)], {
						hk: "3C408F"
					})))
				}
			}
			const Ue = () => i.a.createElement(s.Fragment, null, i.a.createElement(q.c, {
					className: $.a.metaText
				}), i.a.createElement(fe, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				We = (e, t) => i.a.createElement(w.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, o) {
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
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = o("./src/reddit/layout/row/Inline/index.tsx"),
				p = o("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = o.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				f = a.a.wrapped(l.a, "RadioOn", u.a),
				v = e => s.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(f, null) : s.a.createElement(x, null), e.text),
				E = a.a.wrapped(e => {
					const {
						className: t,
						style: o,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: o
					}, s.a.createElement(v, {
						onClick: () => p(i.C.NONE, null),
						selected: !c && !n,
						text: r.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(v, {
						onClick: () => p(i.C.MODERATOR, null),
						selected: c && !l,
						text: r.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && s.a.createElement(v, {
						onClick: () => p(i.C.MODERATOR, !0),
						selected: c && l,
						text: r.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && s.a.createElement(v, {
						onClick: () => p(i.C.ADMIN, null),
						selected: n && !l,
						text: r.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && s.a.createElement(v, {
						onClick: () => p(i.C.ADMIN, !0),
						selected: n && l,
						text: r.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var g = Object(d.a)(E);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: o,
					isUserEmployee: n,
					isUserMod: r,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: p
				}, s.a.createElement(g, {
					isAdminDistinguished: o,
					isUserEmployee: n,
					isUserMod: r,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === i.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === i.C.ADMIN ? m("admin_distinguish") : a && e !== i.C.MODERATOR ? m("undistinguish") : o && e !== i.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = o("./src/reddit/components/PostFollow/index.tsx"),
				l = o("./src/reddit/helpers/postCollection.ts"),
				m = o("./src/reddit/helpers/postEvent.ts"),
				p = o("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = o.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: o
			}) => {
				if (!Object(m.a)(o)) return null;
				const n = o && o.eventInfo,
					a = Object(l.a)(o),
					p = n && Object(r.c)(n.eventStart, n.eventEnd);
				return s.a.createElement("div", {
					className: Object(i.a)(u.a.container, e, {
						[u.a.isCompact]: !!t
					})
				}, s.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, s.a.createElement(d.a, {
					post: o
				}), !a && p && s.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/eventTools/index.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = o("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = o("./src/reddit/icons/fonts/Live/index.tsx"),
				p = o("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = o.n(p),
				b = o("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				f = b.a.span("PostEventNowText", u.a),
				v = b.a.span("Container", u.a),
				E = b.a.wrapped(l.a, "CalendarIcon", u.a),
				g = b.a.wrapped(m.a, "LiveIcon", u.a),
				_ = b.a.div("LoadingState", u.a);
			class k extends n.Component {
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
						eventInfo: o
					} = t;
					if (!o) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: m
					} = o, p = Object(i.e)(m, n);
					let u, b;
					if (this.state.mounted || p === i.a.Live) u = function(e, t, o) {
						const n = Object(i.e)(e, t),
							s = new Date(e * a.Hb);
						let c;
						return n === i.a.Live || o ? r.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (n === i.a.Future ? c = Object(i.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(i.b)(e) >= 5 ? d(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === i.a.Past && (c = Object(i.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(s)), `${c} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(m, n, l);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						u = s.a.createElement(_, {
							className: e
						})
					}
					if (l) b = s.a.createElement(f, null, s.a.createElement(g, null), u);
					else if (p === i.a.Future) b = s.a.createElement(h, null, s.a.createElement(E, null), u);
					else {
						if (p !== i.a.Past) return null;
						b = s.a.createElement(x, null, s.a.createElement(E, null), u)
					}
					return s.a.createElement(v, {
						className: e
					}, b)
				}
			}
			t.a = k
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, o) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/controls/OutboundLink/index.tsx"),
				p = o("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = o("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				f = o("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				v = o("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				E = o("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				g = o("./src/reddit/icons/fonts/Gif/index.tsx"),
				_ = o("./src/reddit/icons/fonts/Link/index.tsx"),
				k = o("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = o("./src/reddit/icons/fonts/Photos/index.tsx"),
				y = o("./src/reddit/icons/fonts/Text/index.tsx"),
				w = o("./src/reddit/icons/svgs/Gallery/index.tsx"),
				T = o("./src/reddit/icons/svgs/Poll/index.tsx"),
				O = o("./src/reddit/models/Media/index.ts"),
				I = o("./src/reddit/components/ExpandoButton/index.m.less"),
				j = o.n(I);
			const S = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				M = (e, t = !1, o, n) => {
					const s = Object(d.a)(j.a.icon, j.a.hideOnHover);
					if (t) return i.a.createElement(h.a, {
						className: s
					});
					if (o.pollData) return n ? i.a.createElement(b.a, {
						name: "poll_post",
						isFilled: !0
					}) : i.a.createElement(T.a, {
						className: s
					});
					switch (e) {
						case O.o.GIFVIDEO:
							return i.a.createElement(g.a, {
								className: s
							});
						case O.o.IMAGE:
							return i.a.createElement(C.a, {
								className: s
							});
						case O.o.TEXT:
						case O.o.RTJSON:
							return i.a.createElement(y.a, {
								className: s
							});
						case O.o.VIDEO:
							return i.a.createElement(E.a, {
								className: s
							});
						case O.o.GALLERY:
							return n ? i.a.createElement(b.a, {
								name: "media_gallery",
								isFilled: !0
							}) : i.a.createElement(w.a, {
								className: s
							});
						case O.o.EMBED:
						default:
							return i.a.createElement(_.a, {
								className: s
							})
					}
				};
			t.a = S(e => {
				const {
					className: t,
					crosspost: o,
					enableCrosspostIcon: s,
					isExpanded: r,
					post: l,
					toggle: b,
					useMediaIcons: h
				} = e, E = Object(u.a)(), g = o || l, _ = s && !!o;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) || !!l.pollData ? i.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, j.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: b
				}, r ? i.a.createElement(x.a, {
					className: j.a.icon,
					isFilled: !0
				}) : h ? i.a.createElement(i.a.Fragment, null, M(g.media && g.media.type, _, l, E), i.a.createElement(f.a, {
					className: Object(d.a)(j.a.icon, j.a.showOnHover)
				})) : i.a.createElement(f.a, {
					className: j.a.icon,
					isFilled: E
				})) : g.source && g.source.url ? i.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, i.a.createElement(k.a, {
					className: Object(d.a)(j.a.icon, j.a.outboundLinkIcon),
					isFilled: E
				})) : i.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(g.permalink),
					rel: "nofollow"
				}, i.a.createElement(v.a, {
					className: j.a.icon,
					isFilled: E
				}))
			})
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, o) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/ModModeReports/index.m.less"),
				d = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.div("Text", d.a), m = r.a.div("Placeholder", d.a), p = () => i.a.createElement(m, null, i.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = o("./src/reddit/actions/post.ts"),
				c = o("./src/reddit/actions/reportFlow/index.ts"),
				l = o("./src/reddit/components/Popup/index.tsx"),
				m = o("./src/reddit/components/Popup/Button.tsx"),
				p = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = o("./src/reddit/hooks/useTracking.ts"),
				b = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: h
				} = e, [x, f] = Object(s.useState)(!0), v = Object(b.b)(o.id, h), E = Object(r.d)(), g = Object(u.a)(), _ = Object(b.a)(o, h), k = (e, n) => g(Object(p.a)(t, o.id, e, n));
				Object(s.useEffect)(() => {
					_ && k("modal", "show")
				}, [_]);
				if (!_ || !x) return null;
				const C = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return i.a.createElement(l.a, {
					id: v,
					title: C,
					onClose: () => {
						f(!1), k("close", "click"), E(Object(d.A)()), E(Object(d.L)({
							[o.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						E(Object(d.A)())
					}
				}, i.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", i.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", i.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), i.a.createElement(m.a, {
					onClick: () => (f(!1), k("report", "click"), void E(Object(c.c)(o.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return x
			}));
			var n, s = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/react/index.js"),
				r = o.n(i),
				a = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/Popup/index.tsx"),
				p = o("./src/reddit/components/Popup/Button.tsx"),
				u = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: x
				} = e, [f, v] = Object(i.useState)(n.Survey), E = Object(h.b)(o.id, x), g = Object(a.d)(), _ = Object(b.a)(), k = Object(h.a)(o, x), C = (e, n) => _(Object(u.b)(t, o.id, e, n));
				Object(i.useEffect)(() => {
					k && C("modal", "show")
				}, [k]);
				const y = e => {
					v(n.Closed), C("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), g(Object(l.c)(o.id, void 0, e))
				};
				if (!k) return null;
				let w = null;
				const T = {
					id: E,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(n.Closed), C("close", "click"), g(Object(c.A)())
					},
					onClickOutside: () => {
						g(Object(c.A)())
					}
				};
				switch (f) {
					case n.Survey:
						w = r.a.createElement(m.a, T, r.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), r.a.createElement(p.a, {
							onClick: () => {
								v(n.OffTopic), C("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), r.a.createElement(p.a, {
							onClick: () => {
								v(n.DontLike), C("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), r.a.createElement(p.a, {
							onClick: () => {
								v(n.BreaksRules), C("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						w = r.a.createElement(m.a, T, r.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						w = r.a.createElement(m.a, T, r.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						w = r.a.createElement(m.a, T, r.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", r.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), r.a.createElement(p.a, {
							onClick: () => y("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), r.a.createElement(p.a, {
							onClick: () => y("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return w
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/components/Popup/index.m.less"),
				r = o.n(i);

			function a(e) {
				return s.a.createElement("button", {
					className: r.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, o) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/uuid/v4.js"),
				r = o.n(i),
				a = o("./src/reddit/hooks/useOnClickOutside.ts"),
				d = o("./src/reddit/components/Popup/index.m.less"),
				c = o.n(d);

			function l(e) {
				const {
					id: t = r()(),
					onClose: o,
					onClickOutside: n,
					title: i,
					children: d
				} = e;
				return Object(a.a)(t, n), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: c.a.header
				}, s.a.createElement("span", {
					className: c.a.title
				}, i), s.a.createElement("button", {
					className: c.a.closeButton,
					onClick: o
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, o) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/ads/index.ts"),
				a = o("./src/reddit/components/AdViewability/index.tsx"),
				d = o("./src/reddit/helpers/trackers/gallery.ts"),
				c = o("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = o("./src/reddit/hooks/useTracking.ts");
			var m = s.a.memo(e => {
					const t = Object(n.useRef)(null),
						o = Object(l.a)(),
						i = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && o(d.d(e.postId))
							})
						}, [o, e.postId]),
						r = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, i, r), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = o("./src/reddit/components/TrackingHelper/index.tsx"),
				u = o("./src/reddit/connectors/PostViewable/index.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				h = o("./src/reddit/selectors/posts.ts"),
				x = o("./src/lib/classNames/index.ts"),
				f = o("./src/lib/objectSelector/index.ts"),
				v = o("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = o("./src/reddit/components/PostContainer/index.m.less"),
				g = o.n(E);
			const _ = Object(u.a)(() => Object(i.c)({
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
				k = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						o = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && o
				};
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: o,
						className: n,
						imageGalleryCurrentItem: i,
						makePostContainerId: c,
						post: l,
						onClick: p,
						onPostContentClick: u,
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
						onClick: o => {
							if (!this.cancelClick && o.button < 2 && (e(() => p && p(o, l, t, i))(o), u && k(o) && u(o, l)), l.id && i) {
								const {
									source: e
								} = Object(r.t)(l, i);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(g.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, o), _ = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || _ ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, E) : l.media && Object(b.E)(l.media) ? s.a.createElement(m, {
						postId: l.id
					}, E) : E
				}
			}
			t.a = _(Object(v.c)(Object(p.c)(C)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, o) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/helpers/trackers/postCollection.ts"),
				p = o("./src/reddit/components/PostFollow/index.m.less"),
				u = o.n(p);
			class b extends i.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: o,
								isFollowed: n
							},
							sendEvent: s
						} = this.props, i = !!n;
						s(e ? Object(m.o)({
							postId: o,
							isFollowed: i
						}) : Object(m.g)({
							postId: o,
							isFollowed: i
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
						post: o
					} = this.props, s = this.state.isHovered, r = o.isFollowed;
					let a = r ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && s && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), i.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!o.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(r.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(c.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/components/CrosspostBox/index.tsx"),
				r = o("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(i.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return b
			})), o.d(t, "d", (function() {
				return h
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "g", (function() {
				return f
			})), o.d(t, "h", (function() {
				return v
			})), o.d(t, "i", (function() {
				return E
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "e", (function() {
				return k
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				i = o("./src/reddit/controls/Dropdown/Row.tsx"),
				r = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = o("./src/reddit/icons/fonts/Envelope/index.tsx"),
				d = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = o("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = o.n(p);
			const b = n.a.wrapped(r.a, "Icon", u.a),
				h = n.a.wrapped(a.a, "Icon", u.a),
				x = n.a.wrapped(d.a, "Icon", u.a),
				f = n.a.wrapped(c.a, "Icon", u.a),
				v = n.a.wrapped(l.a, "Icon", u.a),
				E = n.a.wrapped(m.a, "Icon", u.a),
				g = n.a.wrapped(s.b, "CheckboxMenuItem", u.a),
				_ = n.a.wrapped(i.b, "DropdownRow", u.a),
				k = n.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, o) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				r = o("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = o("./src/reddit/components/PopupPortal/index.tsx"),
				d = o("./src/reddit/components/PostLeftRail/index.tsx"),
				c = o("./src/reddit/components/VerticalVotes/index.tsx"),
				l = o("./src/reddit/controls/Checkbox/index.tsx"),
				m = o("./src/reddit/helpers/isPost.ts"),
				p = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = o("./src/reddit/components/PostRailAndVotes/index.m.less"),
				b = o.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: o,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: x,
					redditStyle: f,
					subreddit: v,
					isOverlay: E,
					isActionBarAnimationEnabled: g,
					postId: _,
					isForceSelected: k
				} = e, C = `upvote-button-${t.id}${E?"-overlay":""}`, {
					moderationPrompt: y
				} = t;
				return s.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && s.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: h
				}), s.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: o,
					redditStyle: f,
					upvoteTooltipId: C,
					isActionBarAnimationEnabled: g,
					postId: _,
					isForceSelected: k,
					scoreClassName: b.a.score
				}), y && s.a.createElement(a.b, {
					rightOf: C
				}, "survey" === y ? s.a.createElement(r.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				}) : s.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				})))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, o) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = o.n(n),
				i = o("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, o) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./src/reddit/controls/Button/index.tsx"),
				a = o("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = o("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = o.n(d),
				l = o("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ({
					border: e,
					small: t,
					...o
				}) => i.a.createElement(r.q, m({}, o, {
					priority: e ? r.b.Primary : r.b.Plain,
					className: Object(l.a)(o.className, c.a.BaseButton),
					size: t ? r.c.S : r.c.M
				})),
				u = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: o,
					...n
				}) => i.a.createElement(r.q, m({}, n, {
					priority: t ? r.b.Secondary : r.b.Plain,
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: o ? r.c.S : r.c.M,
					text: u(e)
				}));
			class h extends i.a.Component {
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
						id: o,
						small: n = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? i.a.createElement(b, m({}, s, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(p, m({}, s, {
						id: o
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				r = ({
					type: e,
					key: t
				}) => i[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/reddit/components/TrackingHelper/index.tsx"),
				s = o("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = o("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(n.c)(i.a))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, o) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/components/SEOTitle/index.tsx"),
				a = o("./src/reddit/components/Widgets/Base/index.m.less"),
				d = o.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(r.b, {
					type: r.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return I
			})), o.d(t, "a", (function() {
				return S
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/components/Flair/index.tsx"),
				m = o("./src/reddit/components/SubscribeButton/index.tsx"),
				p = o("./src/reddit/actions/subscription/index.ts");
			var u = Object(r.b)(null, (e, t) => {
					const o = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, o)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, o))
					}
				})(o("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = o("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = o("./src/reddit/constants/componentSizes.ts"),
				x = o("./src/reddit/controls/Button/index.tsx"),
				f = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				E = o("./src/reddit/icons/fonts/index.tsx"),
				g = o("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = o("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				k = o("./src/reddit/models/Flair/index.ts"),
				C = o("./src/reddit/selectors/user.ts"),
				y = o("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = o("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				T = o.n(w);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => i.a.createElement(b.a, {
					className: Object(c.a)(T.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: T.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: T.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: T.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, O({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(x.o, {
					className: T.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: C.B,
					nightmode: C.V
				}),
				S = Object(r.b)(j)(e => {
					const t = Object(v.a)();
					return i.a.createElement("div", {
						className: T.a.communityItemContainer
					}, i.a.createElement(_.a, {
						widthRight: h.t
					}, i.a.createElement("div", {
						className: T.a.iconContainer
					}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
						className: T.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? i.a.createElement(E.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(T.a.defaultCommunityIcon, {
							[T.a.mNightmode]: e.nightmode
						})
					}) : i.a.createElement(g.a, {
						className: T.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: T.a.communityDescriptionContainer
					}, i.a.createElement(a.a, {
						className: T.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(y.b)(e.name, e.type),
						to: Object(y.a)(e.name, e.type)
					}, Object(y.b)(e.name, e.type)), i.a.createElement("div", {
						className: T.a.communityInfoContainer
					}, !!e.subscribers && i.a.createElement("p", {
						className: T.a.subscriberCount
					}, n.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [n.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && i.a.createElement(l.b, {
						flair: {
							type: k.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
						className: Object(c.a)(T.a.communityCta, T.a.smallLoadingIcon),
						sizePx: 12
					}) : i.a.createElement(x.o, {
						className: Object(c.a)(T.a.communityCta, {
							[T.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? i.a.createElement(u, {
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
					}) : i.a.createElement(m.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && i.a.createElement("p", {
						title: e.description,
						className: T.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return r
			}));
			var n = o("./src/reddit/constants/posts.ts"),
				s = o("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function r(e, t) {
				return t === n.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, o) {
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
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-redux/es/index.js"),
				s = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/actions/subscription/index.ts"),
				r = o("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				userIsSubscriber: r.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
		},
		"./src/reddit/constants/gold.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "e", (function() {
				return r
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "i", (function() {
				return c
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				s = "ModerationPage--Modal--DeleteAwardConfirmation",
				i = 20,
				r = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, o) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = o("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = o("./src/reddit/controls/Checkbox/index.m.less"),
				l = o.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: o,
						disabled: n,
						redditStyle: r,
						"data-redditstyle": a,
						...d
					} = t, c = ((e, t, o) => {
						const n = !(!t && !o);
						let s = "";
						return s = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, r, a);
					return s.a.createElement(e, m({
						className: Object(i.a)(l.a.CheckboxIcon, c, o)
					}, d))
				},
				u = p(d.a),
				b = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? u : r.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(i.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(i.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, o) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = o.n(r);
			t.a = ({
				center: e,
				className: t,
				sizePx: o = 10
			}) => s.a.createElement("div", {
				className: Object(i.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${o}px`
				}
			})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, o) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				r = o("./src/lib/lessComponent.tsx"),
				a = o("./src/lib/prettyPrintNumber/index.ts"),
				d = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				c = o.n(d);
			const l = r.a.span("metaText", c.a),
				m = e => i.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: o,
					...s
				}) => {
					const r = Object(a.b)(t),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						c = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return i.a.createElement(l, s, c)
				},
				u = e => i.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/reddit/featureFlags/index.ts");

			function d(e, t, o) {
				const n = Object(r.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(n)(e => {
					const {
						featureEnabled: n,
						...i
					} = e, r = i;
					return n ? s.a.createElement(t, r) : void 0 !== o ? s.a.createElement(o, r) : null
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, o, s) => i => ({
					source: "report_prompt",
					noun: o,
					action: s,
					subreddit: n.subredditByName(i, e),
					post: n.post(i, t)
				}),
				i = (e, t, o, s) => i => ({
					source: "report_survey",
					noun: o,
					action: s,
					subreddit: n.subredditByName(i, e),
					post: n.post(i, t)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, o) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				c = o.n(d);
			t.a = e => {
				const t = Object(r.a)();
				return s.a.createElement("i", {
					className: Object(i.a)(c.a.DistinguishShield, Object(a.b)(t ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, o) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = o.n(a);
			t.a = e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: `${Object(r.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, o) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = o.n(r),
				d = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = d.a.wrapped(e => {
				const t = Object(c.a)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, o) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = o.n(r),
				d = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = d.a.wrapped(e => {
				const t = Object(c.a)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, o) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = o.n(r);
			const d = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(i.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, o) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = o.n(r);
			const d = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(i.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/Op/index.m.less"),
				d = o.n(a);
			const c = o("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: `${Object(r.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(r.a, null, e.desc))
			}, "OpIcon", d.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, o) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, o) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = o.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(r.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.fda24a5263a6823cb07e.js.map