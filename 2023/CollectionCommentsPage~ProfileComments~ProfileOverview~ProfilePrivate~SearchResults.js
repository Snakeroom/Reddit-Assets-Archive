// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.b29f8706a90dbb2fa4d4.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
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
						C = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						k = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: C || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || C
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: C || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: C || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: C || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || C
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
						version: C || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: C || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || C
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || C
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || C
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: C
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, C && (s.version = C)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, C && (s.version = C)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || C
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && C && (s.version = C)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : _ ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var O = "";
					s.windows ? O = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? O = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? O = (O = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? O = (O = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? O = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? O = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? O = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (O = n(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (s.osversion = O);
					var y = !s.windows && O.split(".")[0];
					return g || d || "ipad" == r || i && (3 == y || y >= 4 && !k) || s.silk ? s.tablet = e : (k || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
				return g
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
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
			const C = Object(r.a)(x.p),
				g = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					n().features.comments.models[e] && (await Object(l.j)(s(), e)).ok && t((e => async t => {
						t(C({
							commentId: e
						}))
					})(e))
				}, k = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.S)(n())) return void t(Object(a.i)(m.a.LOGIN_MODAL_ID));
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
				}, _ = Object(r.a)(x.J), O = e => async (t, n, s) => {
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
				}, y = (e, t) => async (n, s, r) => {
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
							isSpam: t,
							numReports: 0
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
							isSpam: u.isSpam,
							numReports: u.numReports
						}
					})), Object(d.d)())
				}, E = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? l.k : l.e;
					i.ignoreReports || t(O(e)), t(Object(v.j)({
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
				}, j = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const m = Object(b.c)(i(), {
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
				}, I = (e, t, n) => async (o, r, a) => {
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
							isAdmin: t === s.I.ADMIN,
							isMod: t === s.I.MODERATOR,
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
							sort: s.v.CONFIDENCE,
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
				C = n.n(x);
			const g = h.a.wrapped(v.a, "Show", C.a);
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
					}, s.a.createElement(g, null)))
				},
				_ = n("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				O = n("./src/devPlatform/constants.ts");
			const y = h.a.wrapped(m.a, "StyledDropdown", C.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(u.b)(n)(e)
					}
				}),
				j = Object(r.b)(E, (e, t) => {
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
				I = Object(d.a)(y),
				w = j(Object(c.c)(e => {
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
					return s.a.createElement(I, {
						isOpen: n,
						tooltipId: m
					}, s.a.createElement(k, {
						onApproveComment: () => {
							o(), c(Object(l.e)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(l.e)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(l.e)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(l.e)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(l.e)("showComment", t.id))
						},
						comment: t
					}), s.a.createElement(_.a, {
						contextType: O.a.COMMENT,
						contextData: t,
						moderator: !0
					}))
				}));
			t.a = w
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
				C = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				O = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(I);
			const T = Object(b.v)(),
				M = e => `Distinguish--Dropdown--${e}`,
				N = Object(a.c)({
					currentUser: g.m,
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
						return Object(C.b)(M(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(b.i)(e, t) || Object(x.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: b.W
				}),
				R = Object(i.b)(N, (e, t) => {
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
							tooltipId: M(n.id)
						}))
					}
				});
			t.a = T(R(m.a.wrapped(Object(h.c)(e => {
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
					onSpamComment: C,
					onToggleDistinguishDropdown: g,
					sendEvent: I,
					pageLayer: T,
					...M
				} = e;
				const N = Object(p.b)(n),
					R = n.isApproved && N,
					A = !n.isRemoved || n.bannedBy === c.l,
					D = a,
					L = e => I(Object(f.c)(e, n.id)),
					S = "chat_comments" === (null == T ? void 0 : T.queryParams.only);
				return r.a.createElement("div", {
					className: t
				}, (n.bannedBy || N) && r.a.createElement(j.a, {
					text: R ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), S && I(Object(f.b)("approve", n.id)), L("approve")
					}
				}, r.a.createElement(k.a, {
					className: w.a.icon
				})), A && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: n.bannedBy === c.l ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						v(), S && I(Object(f.b)("remove", n.id)), n.bannedBy === c.l ? L("confirm_remove") : L("remove")
					}
				}, r.a.createElement(O.a, {
					className: w.a.icon
				})), r.a.createElement(j.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						C(), L("spam")
					}
				}, r.a.createElement(y.a, {
					className: w.a.icon
				}))), r.a.createElement(j.a, {
					text: n.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), L(n.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(_.a, {
					className: w.a.icon
				})), D && r.a.createElement(j.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(E.a, {
					className: Object(d.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Author.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/models/Comment/index.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				p = n.n(u);
			const h = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: u,
					isEmbeddedLiveChat: h,
					isStrong: b,
					onClick: f,
					renderedInOverlay: v
				} = e;
				const x = Object(a.f)(o),
					C = s.a.createElement(d.b, {
						ignore: x || !!o.distinguishType && o.distinguishType !== i.I.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, s.a.createElement(l.a, {
						className: t,
						collapsed: u,
						comment: o,
						isAuthorDeleted: Object(a.f)(o),
						isCommentAuthorBlocked: Object(a.g)(o),
						isEmbeddedLiveChat: h,
						isStrong: b,
						onClick: f
					}));
				return x || h ? C : s.a.createElement(c.b, {
					className: Object(r.a)(p.a.authorHoverCard, n),
					collapsed: u,
					isCommentAuthorBlocked: Object(a.g)(o),
					postOrComment: o,
					tooltipType: v ? m.f.Lightbox : void 0
				}, C)
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/AuthorLink/index.tsx"),
				d = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				c = n.n(d);
			const m = e => {
				const {
					className: t,
					collapsed: n,
					comment: r,
					isAuthorDeleted: d,
					isCommentAuthorBlocked: m,
					isEmbeddedLiveChat: l,
					isStrong: u,
					onClick: p,
					style: h
				} = e;
				return n && m ? i.a.createElement("p", {
					className: Object(s.a)(c.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : i.a.createElement(a.a, {
					author: r.author,
					className: Object(s.a)(c.a.commentAuthorLink, t),
					isAuthorDeleted: d,
					isCommentAuthorBlocked: m,
					forceOpenInNewTab: l,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: p,
					style: h
				}, r.author)
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Created.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/reddit/actions/comment/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts");
			const h = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: a,
						permalink: h,
						renderedInOverlay: f,
						isBlockingInterstitialEnabled: v
					} = e, x = Object(r.d)(), C = Object(p.d)("CommentTopMeta--Created--", n.id, f), g = () => x(Object(c.h)({
						tooltipId: C
					}));
					return s.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(i.a)(h, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: C,
						onClick: e => {
							null == a || a(e), b(x, n.id), v && (e.preventDefault(), x(Object(d.X)(Object(u.b)(h), n.postId)))
						},
						onMouseEnter: g,
						onMouseLeave: g,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, s.a.createElement(m.d, {
						seconds: n.created,
						shortenedUnit: o
					}), s.a.createElement(l.c, {
						tooltipId: C
					}, s.a.createElement(m.b, {
						seconds: n.created
					})))
				},
				b = (e, t) => {
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
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/HumanDate/index.tsx"),
				a = n("./src/reddit/controls/MetaData/index.tsx"),
				d = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				c = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					compact: n,
					editedAt: o
				} = e;
				return s.a.createElement(a.a, {
					className: Object(r.a)(c.a.editedText, t)
				}, m._("edited {time}", [m._param("time", s.a.createElement(i.d, {
					seconds: o,
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
				return C
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/colors/constants.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				b = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(o || (o = {}));
			var f = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				v = n.n(f);
			const x = {
					[o.Admin]: {
						color: m.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: u.b
					},
					[o.Mod]: {
						color: m.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => Object(u.e)(e.subredditDisplayText)
					},
					[o.ModTeam]: {
						color: m.d,
						getLabel: () => s.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => Object(u.e)(e.subredditDisplayText)
					},
					[o.Op]: {
						color: m.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: u.f
					},
					[o.AlumniAdmin]: {
						color: m.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: u.a
					},
					[o.Contractor]: {
						color: m.a,
						getLabel: () => s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: u.c
					}
				},
				C = e => {
					const t = Object(a.d)(),
						n = function(e) {
							if (e.isAdmin) return o.Admin;
							const t = e.isMod || e.distinguishType === h.I.MODERATOR;
							return t && e.author && Object(b.a)(e.author) ? o.ModTeam : t ? o.Mod : e.isOp ? o.Op : e.distinguishType === h.I.ALUMNI_ADMIN ? o.AlumniAdmin : e.authorIsContractor ? o.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === o.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: r,
						getLabel: d,
						tooltipTemplate: m
					} = x[n], f = d(), C = Object(u.d)(s, e.comment.id, e.renderedInOverlay), k = m(e), _ = () => t(Object(l.h)({
						tooltipId: C
					}));
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
						className: Object(c.a)(v.a.role, e.className),
						style: {
							color: r
						},
						id: C,
						onMouseEnter: _,
						onMouseLeave: _
					}, i.a.createElement("span", null, f), (n === o.Mod || n === o.ModTeam) && i.a.createElement(g, null)), i.a.createElement(p.c, {
						tooltipId: C,
						text: k
					}))
				},
				g = () => i.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: v.a.modAchievement,
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/AwardBadges/index.tsx"),
				l = n("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/CommentAuthorLink.tsx"),
				p = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				h = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				b = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				v = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				x = n("./src/reddit/components/PostTopMeta/index.tsx"),
				C = n("./src/reddit/controls/MetaData/index.tsx"),
				g = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				E = n("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				j = n("./src/config.ts"),
				I = n("./src/reddit/actions/tooltip.ts"),
				w = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				N = n.n(M);
			const R = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(I.h)({
						tooltipId: m
					})),
					m = Object(T.d)("CommentTopMeta--cakeday--", n, s),
					l = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(N.a.cakedayIcon, t),
					src: `${j.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: m,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(w.c, {
					tooltipId: m,
					text: l
				}))
			};
			var A = n("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				D = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				L = n.n(D);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = () => r.a.createElement(C.a, {
				className: L.a.crowdControlText
			}, S._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				F = n("./src/reddit/constants/postLayout.ts"),
				H = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				U = n("./src/reddit/helpers/isRemoved.ts"),
				V = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				X = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				W = n("./src/reddit/hooks/usePageLayer.ts"),
				z = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				q = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				J = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Q = n("./src/reddit/icons/fonts/Report/index.tsx"),
				K = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				G = n("./src/reddit/selectors/modQueue.ts"),
				Y = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				Z = n.n(Y);
			const $ = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					m = Object(W.a)(),
					l = Object(i.e)(e => F.e[Object(H.V)(e, {
						pageLayer: m
					})] === F.d.Card),
					u = Object(i.e)(e => Object(G.b)(e, l)),
					p = e => () => c(Object(I.f)({
						tooltipId: e
					})),
					h = () => c(Object(I.i)()),
					b = e => Object(T.d)(e, t.id, a),
					f = b("CommentTopMeta--Approve--"),
					v = b("CommentTopMeta--Remove--"),
					x = b("CommentTopMeta--Report--"),
					C = b("CommentTopMeta--Spam--"),
					g = p(v);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(z.a, {
					className: Z.a.approveIcon,
					desc: Object(V.a)(t),
					id: f,
					onMouseEnter: p(f),
					onMouseLeave: h,
					isFilled: !0
				}), r.a.createElement(w.c, {
					tooltipId: f,
					text: Object(V.a)(t)
				})), Object(U.a)(t) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(J.a, {
					className: Z.a.removeIcon,
					desc: Object(V.b)(t),
					id: v,
					onMouseEnter: g,
					onMouseLeave: h,
					isFilled: !0
				}), r.a.createElement(w.c, {
					tooltipId: v,
					text: Object(V.b)(t)
				})), Object(U.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !u && r.a.createElement("a", {
					className: Z.a.removalReason,
					onClick: () => {
						Promise.all([n.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), n.e("removalReasonActions")]).then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(U.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !u && r.a.createElement("a", {
					className: Z.a.removalReason,
					onMouseEnter: g,
					onMouseLeave: h
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && r.a.createElement(q.a, {
					className: Z.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, {
					className: Z.a.spamIcon,
					desc: Object(V.d)(t),
					id: C,
					onMouseEnter: p(C),
					onMouseLeave: h,
					isFilled: !0
				}), r.a.createElement(w.c, {
					tooltipId: C,
					text: Object(V.d)(t)
				})), Object(X.a)(t) && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					className: Z.a.reportIcon,
					desc: Object(V.c)(t.numReports),
					id: x,
					onMouseEnter: p(x),
					onMouseLeave: h,
					isFilled: !0
				}), r.a.createElement(w.c, {
					tooltipId: x,
					text: Object(V.c)(t.numReports)
				})), t.isDeleted && d && !u && r.a.createElement(r.a.Fragment, null, r.a.createElement(J.a, {
					className: Z.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: Z.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var ee = n("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				te = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ne = n.n(te);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = () => r.a.createElement(C.a, {
				className: ne.a.stickiedText
			}, oe._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var re = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ie = n.n(re);
			const ae = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: c,
					ignoreLock: l,
					isModWithUserNotesPermissions: u,
					onCommentAuthorClick: j,
					onCommentTimestampClick: I,
					permalink: w,
					renderContractorBadge: T,
					renderedInOverlay: M,
					subredditDisplayText: N,
					isAdmin: D
				} = e, L = Object(_.a)(), S = a.subredditId, F = Object(i.e)(e => Object(y.e)(e, {
					subredditId: S
				}));
				if (a.isDeleted && !D) return r.a.createElement("div", {
					className: Object(d.a)(ie.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ie.a.authorLine
				}, r.a.createElement("span", {
					className: ie.a.metaText
				}, a.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(C.c, {
					className: ie.a.separator
				}), r.a.createElement(A.a, {
					key: "Created",
					className: ie.a.metaText,
					comment: a,
					compact: !0,
					permalink: w,
					renderedInOverlay: M
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(ie.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ie.a.authorLine
				}, !Object(O.f)(a) && r.a.createElement(h.b, {
					className: ie.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), r.a.createElement("div", {
					className: ie.a.baselineItem
				}, r.a.createElement(E.a, {
					authorClassName: ie.a.author,
					collapsed: n,
					comment: a,
					onClick: j,
					renderedInOverlay: M
				})), !Object(O.f)(a) && u && r.a.createElement(v.a, {
					postOrComment: a,
					className: ie.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(B, null), r.a.createElement(ee.a, {
					className: ie.a.role,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: M
				}), a.isAuthorCakeday ? r.a.createElement(R, {
					className: ie.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: M
				}) : !Object(O.f)(a) && F && r.a.createElement(p.a, {
					className: ie.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						L(Object(k.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: ie.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), r.a.createElement(C.c, {
					className: ie.a.separator
				}), r.a.createElement(A.a, {
					key: "Created",
					className: ie.a.metaText,
					comment: a,
					compact: !0,
					onClick: I,
					permalink: w,
					renderedInOverlay: M
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.c, {
					className: ie.a.separator
				}), r.a.createElement(se, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.c, {
					className: ie.a.separator
				}), r.a.createElement(P.a, {
					compact: !0,
					editedAt: a.editedAt
				})), r.a.createElement($, {
					comment: a,
					ignoreLock: l,
					renderedInOverlay: M,
					isAdmin: D
				}), r.a.createElement(m.a, {
					thing: a,
					tooltipType: M ? x.f.Lightbox : void 0
				})), c && !Object(g.o)(c) && r.a.createElement("span", {
					className: ie.a.userFlairLine
				}, r.a.createElement(b.c, {
					className: ie.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var de = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				ce = n("./src/reddit/selectors/economics.ts"),
				me = n("./src/reddit/models/Flair/index.ts"),
				le = n("./src/reddit/selectors/comments.ts"),
				ue = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				pe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				he = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/selectors/userFlair.ts"),
				fe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ve = n.n(fe);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = c.a.wrapped(b.c, "RightPositionedAuthorFlair", ve.a),
				ge = c.a.span("DeletedText", ve.a),
				ke = c.a.wrapped(C.a, "MetaSeparator", ve.a),
				_e = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(ce.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(he.N)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(be.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(le.m)(e, {
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
			t.a = _e(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: u,
					flair: p,
					flairPosition: v,
					hasBadges: g,
					hideAwards: k = !1,
					ignoreFlairPosition: _,
					ignoreLock: y,
					isAdmin: j,
					isBlockingInterstitialEnabled: I,
					isBlockingInterstitialV2Enabled: w,
					isModWithUserNotesPermissions: T,
					isEmbeddedLiveChat: M,
					isPostComment: N,
					onCommentAuthorClick: R,
					onCommentTimestampClick: D,
					renderContractorBadge: L,
					renderedInOverlay: S,
					subredditDisplayText: F,
					userHasNft: H
				} = e, U = r.a.createElement(r.a.Fragment, null, r.a.createElement(de.b, {
					commentId: i.id
				}), r.a.createElement(de.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (N) return r.a.createElement(r.a.Fragment, null, r.a.createElement(ae, {
					className: Object(d.a)(n, {
						[ve.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: p || null,
					ignoreLock: y,
					isAdmin: j,
					isModWithUserNotesPermissions: T,
					onCommentAuthorClick: R,
					onCommentTimestampClick: D,
					permalink: a,
					renderContractorBadge: !!L,
					renderedInOverlay: S,
					subredditDisplayText: F
				}), U);
				if (i.isDeleted) return r.a.createElement(Oe, xe({}, e, {
					className: Object(d.a)(n, ve.a.container, {
						[ve.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(ye, xe({}, e, {
					className: Object(d.a)(n, ve.a.container, {
						[ve.a.collapsed]: o
					})
				}));
				const V = !_ && v === me.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, ve.a.container, {
						[ve.a.collapsed]: o,
						[ve.a.hasBadges]: g
					}),
					"data-testid": "comment-top-meta"
				}, p && V && r.a.createElement(b.c, {
					flair: p,
					forceSmallEmojis: u
				}), !Object(O.f)(i) && r.a.createElement(h.b, {
					className: ve.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, r.a.createElement(E.a, {
					authorClassName: H ? ve.a.NftAuthor : void 0,
					collapsed: o,
					comment: i,
					isEmbeddedLiveChat: M,
					isStrong: !!u,
					onClick: R,
					renderedInOverlay: S
				}), s && r.a.createElement(B, null), s && r.a.createElement(C.c, {
					className: ve.a.metaText,
					key: "crowdControlSeparator"
				}), p && !V && r.a.createElement(Ce, {
					flair: p,
					forceSmallEmojis: u
				}), !u && r.a.createElement(f.a, {
					className: ve.a.publicPoints,
					contentId: i.id,
					metaSeparator: r.a.createElement(C.c, {
						className: ve.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), U, r.a.createElement(ee.a, {
					className: ve.a.authorRole,
					comment: i,
					subredditDisplayText: F,
					renderContractorBadge: !!L,
					renderedInOverlay: S
				}), !u && r.a.createElement(r.a.Fragment, null, !i.isDeleted && !N && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.b, {
					className: ve.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), r.a.createElement(C.c, {
					className: ve.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(A.a, {
					key: "Created",
					className: ve.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: S,
					isBlockingInterstitialEnabled: I || w
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.c, {
					className: ve.a.separator
				}), r.a.createElement(se, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.c, {
					className: ve.a.separator
				}), r.a.createElement(P.a, {
					editedAt: i.editedAt
				}))), r.a.createElement($, {
					comment: i,
					ignoreLock: y,
					renderedInOverlay: S
				}), !k && r.a.createElement(m.a, {
					thing: i,
					tooltipType: S ? x.f.Lightbox : void 0
				}), T && r.a.createElement(l.a, {
					postOrComment: i,
					className: ve.a.addModNote
				}))
			});
			const Oe = e => {
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
					}, r.a.createElement(ge, null, i.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(A.a, {
						key: "Created",
						className: ve.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: m,
						isBlockingInterstitialEnabled: d || c
					}), n && Ee({
						childrenInfo: t
					}))
				},
				ye = e => {
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
					}, r.a.createElement("div", null, r.a.createElement(u.a, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: i
					})), r.a.createElement(C.b, {
						className: ve.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(C.c, {
						className: ve.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(A.a, {
						key: "Created",
						className: ve.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: d || c
					}), Ee({
						childrenInfo: o
					}))
				},
				Ee = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(ke, {
						className: ve.a.metaText
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
		"./src/reddit/components/Comments/Comment/TopMeta/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				r = () => o.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				i = () => o.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				a = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				d = () => o.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				c = () => o.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				})
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
				C = a.a.wrapped(e => {
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
						onClick: () => u(r.I.NONE, null),
						selected: !c && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(x, {
						onClick: () => u(r.I.MODERATOR, null),
						selected: c && !m,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), l && d && s.a.createElement(x, {
						onClick: () => u(r.I.MODERATOR, !0),
						selected: c && m,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && s.a.createElement(x, {
						onClick: () => u(r.I.ADMIN, null),
						selected: o && !m,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && l && s.a.createElement(x, {
						onClick: () => u(r.I.ADMIN, !0),
						selected: o && m,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var g = Object(d.a)(C);
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
				}, s.a.createElement(g, {
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						m(e, t), e === r.I.MODERATOR ? l(!d && t ? "distinguish_sticky" : "distinguish") : e === r.I.ADMIN ? l("admin_distinguish") : a && e !== r.I.MODERATOR ? l("undistinguish") : n && e !== r.I.ADMIN && l("admin_undistinguish"), d && !t && l("unsticky")
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = n.n(m);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(d.a)(Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					overrideBackgroundColor: h,
					...b
				} = e;
				return s.a.createElement("div", u({
					className: Object(r.a)(l.a.backgroundWrapper, n),
					style: h || Object(a.c)(o, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, b), t)
			}))
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
				return C
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "g", (function() {
				return I
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
				C = r.a.wrapped(m.a, "Icon", f.a),
				g = r.a.wrapped(l.a, "Icon", f.a),
				k = r.a.wrapped(u.a, "Icon", f.a),
				_ = r.a.wrapped(p.a, "Icon", f.a),
				O = () => s.a.createElement(a.a, {
					name: "mod_mute",
					className: f.a.Icon
				}),
				y = () => s.a.createElement(a.a, {
					name: "calendar",
					className: f.a.Icon
				}),
				E = () => s.a.createElement(h.a, {
					className: f.a.svgIcon
				}),
				j = r.a.wrapped(i.b, "DropdownRow", f.a),
				I = r.a.div("ListContainer", f.a)
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				m = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(u);
			const h = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(m.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, o, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									s && o(n, s), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(o.f)(Object(l.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(o.f)(Object(l.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: s
					} of t) n.push(Object(o.f)(s));
				return n
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				m = n.n(c);
			const l = {},
				u = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				h = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : l,
				f = e => e.isActive ? m.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
						c = Object(r.f)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...i.p(a),
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
					...i.p(e)
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
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentName: s.pg,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(o.a)(i, e => e === s.jg)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults.b29f8706a90dbb2fa4d4.js.map