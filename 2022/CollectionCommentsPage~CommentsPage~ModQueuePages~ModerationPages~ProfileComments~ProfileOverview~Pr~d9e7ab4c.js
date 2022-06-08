// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c.af74583611d550b7074b.js
// Retrieved at 6/8/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"], {
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
					var r, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						v = !s && !l && /macintosh/i.test(t),
						f = !i && !m && !u && !p && /linux/i.test(t),
						g = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !_ && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
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
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : s ? (r = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : k ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : f && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var I = "";
					r.windows ? I = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? I = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? I = (I = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? I = (I = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? I = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? I = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? I = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? I = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (I = n(/tizen[\/\s](\d+(\.\d+)*)/i)), I && (r.osversion = I);
					var O = !r.windows && I.split(".")[0];
					return _ || d || "ipad" == s || i && (3 == O || O >= 4 && !x) || r.silk ? r.tablet = e : (x || "iphone" == s || "ipod" == s || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function s(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = r(e, (function(e) {
							var n = t - o(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, r) {
					var i = n;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return s([a, e[d]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = s, n.check = function(e, t, n) {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var s = r.element,
								i = a(s),
								d = this._rootContainsTarget(s),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(s, n),
								m = r.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, o) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, s, i, d, l, m, u, p, b = a(n), h = c(n), v = !1; !v;) {
								var f = null,
									g = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == g.display) return;
								if (h == this.root || h == t ? (v = !0, f = o) : h != t.body && h != t.documentElement && "visible" != g.overflow && (f = a(h)), f && (r = f, s = b, i = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(r.top, s.top), d = Math.min(r.bottom, s.bottom), l = Math.max(r.left, s.left), m = Math.min(r.right, s.right), p = d - i, !(b = (u = m - l) >= 0 && p >= 0 && {
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
					}, r.prototype._getRootRect = function() {
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
							o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== o)
							for (var r = 0; r < this.thresholds.length; r++) {
								var s = this.thresholds[r];
								if (s == n || s == o || s < n != s < o) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = o
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
						r = o.width * o.height;
					this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var n, o, r, s = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), o))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function s(e, t, n, o) {
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
			e.exports = function(e, t, n, o, r) {
				return r(e, (function(e, r, s) {
					n = o ? (o = !1, e) : t(n, e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, s(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > i) return [];
				var n = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = o(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, o) {
				var r = n ? n.call(o, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var s = Object.keys(e),
					i = Object.keys(t);
				if (s.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < s.length; d++) {
					var c = s[d];
					if (!a(c)) return !1;
					var l = e[c],
						m = t[c];
					if (!1 === (r = n ? n.call(o, l, m, c) : void 0) || void 0 === r && l !== m) return !1
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
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "b", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
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
				v = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const y = Object(s.a)(g.n),
				_ = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					n().features.comments.models[e] && (await Object(m.i)(r(), e)).ok && t((e => async t => {
						t(y({
							commentId: e
						}))
					})(e))
				}, x = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					if (!Object(v.Q)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.k : m.e;
					t(Object(f.i)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.i)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, k = Object(s.a)(g.G), I = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n(),
						a = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					a && l && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: l,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.i)({
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
				}, O = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const a = r(),
						l = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					l && u && (n(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.g)(i(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(f.i)({
						[e]: {
							approvedBy: l.approvedBy,
							bannedBy: l.bannedBy,
							isApproved: l.isApproved,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam
						}
					})), Object(d.d)())
				}, E = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.j : m.d;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.i)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, C = (e, t, n) => async (s, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === r.ec.Snoozed,
						v = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: v
						})).ok) s(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						s(Object(c.f)(e))
					}
				}, T = (e, t, n) => async (o, s, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = s(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.G.ADMIN,
							isMod: t === r.G.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && o(Object(f.i)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.b)(c(), e, t),
						v = Object(m.c)(c(), e, !!n),
						g = [h];
					(n || !n && e === b) && g.push(v), (await Promise.all(g)).every(e => e.ok) ? n && o(k({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: r.t.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(f.i)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = n("./src/reddit/icons/svgs/Show/index.tsx"),
				C = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				T = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				j = n.n(T);
			const w = Object(h.u)(),
				M = e => `Distinguish--Dropdown--${e}`,
				A = Object(a.c)({
					currentUser: _.k,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(f.a)(e, {
							commentId: n.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(y.b)(M(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(g.o)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.U
				}),
				N = Object(i.b)(A, (e, t) => {
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
							tooltipId: M(n.id)
						}))
					}
				});
			t.a = w(N(l.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: r,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: b,
					onLockComment: h,
					onRemoveComment: f,
					onShowComment: g,
					onSpamComment: y,
					onToggleDistinguishDropdown: _,
					sendEvent: T,
					...w
				} = e;
				const M = Object(p.b)(n),
					A = n.isApproved && M,
					N = !n.isRemoved || n.bannedBy === c.k,
					R = a,
					S = e => T(Object(v.a)(e, n.id));
				return s.a.createElement("div", {
					className: t
				}, (n.bannedBy || M) && s.a.createElement(C.a, {
					text: A ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), S("approve")
					}
				}, s.a.createElement(x.a, {
					className: j.a.icon
				})), N && s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
					text: n.bannedBy === c.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						f(), n.bannedBy === c.k ? S("confirm_remove") : S("remove")
					}
				}, s.a.createElement(I.a, {
					className: j.a.icon
				})), s.a.createElement(C.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						y(), S("spam")
					}
				}, s.a.createElement(O.a, {
					className: j.a.icon
				}))), s.a.createElement(C.a, {
					text: n.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), S(n.isLocked ? "unlock" : "lock")
					}
				}, s.a.createElement(k.a, {
					className: j.a.icon
				})), R && s.a.createElement(C.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, s.a.createElement(E.a, {
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					comment: r,
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					isStrong: l,
					onClick: u,
					style: b
				} = e;
				return n && a ? s.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : s.a.createElement(m.a, {
					author: r.author,
					className: Object(d.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
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
				v = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				_ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				x = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				I = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				A = n.n(M);
			const N = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: r,
					isLivestreaming: i,
					isStrong: a,
					onClick: c,
					renderedInOverlay: l
				} = e;
				const m = Object(E.f)(o),
					u = s.a.createElement(j.b, {
						ignore: m || !!o.distinguishType && o.distinguishType !== T.G.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, s.a.createElement(b, {
						className: t,
						collapsed: r,
						comment: o,
						isAuthorDeleted: Object(E.f)(o),
						isCommentAuthorBlocked: Object(E.g)(o),
						isLivestreaming: i,
						isStrong: a,
						onClick: c
					}));
				return m ? u : s.a.createElement(w.b, {
					className: Object(d.a)(A.a.authorHoverCard, n),
					collapsed: r,
					isCommentAuthorBlocked: Object(E.g)(o),
					postOrComment: o,
					tooltipType: l ? _.c.Lightbox : void 0
				}, u)
			};
			var R = n("./src/config.ts"),
				S = n("./src/reddit/actions/tooltip.ts"),
				B = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${n?"inOverlay":""}`
			};
			var F = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				P = n.n(F);
			const D = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: r
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(S.h)({
						tooltipId: l
					})),
					l = L("CommentTopMeta--cakeday--", n, r),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("img", {
					className: Object(d.a)(P.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), s.a.createElement(B.c, {
					tooltipId: l,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				z = n("./src/reddit/components/HumanDate/index.tsx"),
				W = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: r,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(i.d)(), m = L("CommentTopMeta--Created--", n.id, d), u = () => l(Object(S.h)({
						tooltipId: m
					}));
					return s.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == r || r(e), X(l, n.id), c && (e.preventDefault(), l(Object(V.Z)(Object(W.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, s.a.createElement(z.d, {
						seconds: n.created,
						shortenedUnit: o
					}), s.a.createElement(B.c, {
						tooltipId: m
					}, s.a.createElement(z.b, {
						seconds: n.created
					})))
				},
				X = (e, t) => {
					window.addEventListener("focus", (function n() {
						J(e, t, n)
					}))
				},
				J = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				G = n.n(Q);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => s.a.createElement(x.a, {
				className: G.a.crowdControlText
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
				return s.a.createElement(x.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", s.a.createElement(z.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				re = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				se = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = e => {
				let {
					comment: t,
					ignoreLock: r,
					renderedInOverlay: a,
					isAdmin: d
				} = e;
				const c = Object(i.d)(),
					l = e => () => c(Object(S.f)({
						tooltipId: e
					})),
					m = () => c(Object(S.i)()),
					u = e => L(e, t.id, a),
					p = u("CommentTopMeta--Approve--"),
					b = u("CommentTopMeta--Remove--"),
					h = u("CommentTopMeta--Report--"),
					v = u("CommentTopMeta--Spam--"),
					f = l(b);
				return s.a.createElement(s.a.Fragment, null, (t.approvedBy || t.isApproved) && s.a.createElement(s.a.Fragment, null, s.a.createElement(se.a, {
					className: me.a.approveIcon,
					desc: Object(oe.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), s.a.createElement(B.c, {
					tooltipId: p,
					text: Object(oe.a)(t)
				})), Object(ne.a)(t) && s.a.createElement(s.a.Fragment, null, s.a.createElement(ae.a, {
					className: me.a.removeIcon,
					desc: Object(oe.b)(t),
					id: b,
					onMouseEnter: f,
					onMouseLeave: m,
					isFilled: !0
				}), s.a.createElement(B.c, {
					tooltipId: b,
					text: Object(oe.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && s.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && s.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: m
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !r && s.a.createElement(ie.a, {
					className: me.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && s.a.createElement(s.a.Fragment, null, s.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(oe.d)(t),
					id: v,
					onMouseEnter: l(v),
					onMouseLeave: m,
					isFilled: !0
				}), s.a.createElement(B.c, {
					tooltipId: v,
					text: Object(oe.d)(t)
				})), Object(re.a)(t) && s.a.createElement(s.a.Fragment, null, s.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: h,
					onMouseEnter: l(h),
					onMouseLeave: m,
					isFilled: !0
				}), s.a.createElement(B.c, {
					tooltipId: h,
					text: Object(oe.c)(t.numReports)
				})), t.isDeleted && d && s.a.createElement(s.a.Fragment, null, s.a.createElement(ae.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), s.a.createElement("span", {
					className: me.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var pe, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ve = n.n(he);
			const fe = {
					[pe.Admin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: be.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: be.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: be.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ge = e => {
					const t = Object(i.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === T.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: r,
						getLabel: a,
						tooltipTemplate: c
					} = fe[n], l = a(), m = L(o, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(S.h)({
						tooltipId: m
					}));
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
						className: Object(d.a)(ve.a.role, e.className),
						style: {
							color: r
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, s.a.createElement("span", null, l), n === pe.Mod && s.a.createElement(ye, null)), s.a.createElement(B.c, {
						tooltipId: m,
						text: u
					}))
				},
				ye = () => s.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ve.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				xe = n.n(_e);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = () => s.a.createElement(x.a, {
				className: xe.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ee = n.n(Oe);
			const Ce = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: r,
					comment: a,
					flair: c,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: T,
					permalink: j,
					renderContractorBadge: w,
					renderedInOverlay: M,
					subredditDisplayText: A,
					isAdmin: R
				} = e, S = Object(O.a)(), B = a.subredditId, L = Object(i.e)(e => Object(C.h)(e, {
					subredditId: B
				}));
				if (a.isDeleted && !R) return s.a.createElement("div", {
					className: Object(d.a)(Ee.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, s.a.createElement("span", {
					className: Ee.a.authorLine
				}, s.a.createElement("span", {
					className: Ee.a.metaText
				}, a.deletedBy === E.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), s.a.createElement(x.c, {
					className: Ee.a.separator
				}), s.a.createElement(q, {
					key: "Created",
					className: Ee.a.metaText,
					comment: a,
					compact: !0,
					permalink: j,
					renderedInOverlay: M
				})));
				return s.a.createElement("div", {
					className: Object(d.a)(Ee.a.container, t),
					"data-testid": "post-comment-header"
				}, s.a.createElement("span", {
					className: Ee.a.authorLine
				}, !Object(E.f)(a) && s.a.createElement(v.b, {
					className: Ee.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), s.a.createElement("div", {
					className: Ee.a.baselineItem
				}, s.a.createElement(N, {
					authorClassName: Ee.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: M
				})), !Object(E.f)(a) && u && s.a.createElement(y.a, {
					postOrComment: a,
					className: Ee.a.LastAuthorModNoteIcon
				}), r && s.a.createElement(Y, null), s.a.createElement(ge, {
					className: Ee.a.role,
					comment: a,
					subredditDisplayText: A,
					renderContractorBadge: w,
					renderedInOverlay: M
				}), a.isAuthorCakeday ? s.a.createElement(D, {
					className: Ee.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: M
				}) : !Object(E.f)(a) && L && s.a.createElement(h.a, {
					className: Ee.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						S(Object(I.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), s.a.createElement(g.a, {
					className: Ee.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), s.a.createElement(x.c, {
					className: Ee.a.separator
				}), s.a.createElement(q, {
					key: "Created",
					className: Ee.a.metaText,
					comment: a,
					compact: !0,
					onClick: T,
					permalink: j,
					renderedInOverlay: M
				}), a.isStickied && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.c, {
					className: Ee.a.separator
				}), s.a.createElement(Ie, null)), a.editedAt && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.c, {
					className: Ee.a.separator
				}), s.a.createElement(te, {
					compact: !0,
					editedAt: a.editedAt
				})), s.a.createElement(ue, {
					comment: a,
					ignoreLock: m,
					renderedInOverlay: M,
					isAdmin: R
				}), s.a.createElement(l.a, {
					thing: a,
					tooltipType: M ? _.c.Lightbox : void 0
				})), c && !Object(k.o)(c) && s.a.createElement("span", {
					className: Ee.a.userFlairLine
				}, s.a.createElement(f.b, {
					className: Ee.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Ae = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/userFlair.ts"),
				Be = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Le = n.n(Be);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = c.a.wrapped(f.b, "RightPositionedAuthorFlair", Le.a),
				De = c.a.span("DeletedText", Le.a),
				Ue = c.a.wrapped(x.a, "MetaSeparator", Le.a),
				He = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(je.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Re.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Se.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ae.b,
					isBlockingInterstitialV2Enabled: Ae.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ne.j)(e, n.subredditId)
					}
				}));
			t.a = He(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: r,
					comment: i,
					commentPermalink: a,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					ignoreFlairPosition: h,
					ignoreLock: y,
					isAdmin: k,
					isBlockingInterstitialEnabled: I,
					isBlockingInterstitialV2Enabled: O,
					isModWithUserNotesPermissions: C,
					isLivestreaming: T,
					isPostComment: j,
					onCommentAuthorClick: w,
					onCommentTimestampClick: M,
					renderContractorBadge: A,
					renderedInOverlay: R,
					subredditDisplayText: S,
					userHasNft: B
				} = e, L = s.a.createElement(s.a.Fragment, null, s.a.createElement(Te.b, {
					commentId: i.id
				}), s.a.createElement(Te.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (j) return s.a.createElement(s.a.Fragment, null, s.a.createElement(Ce, {
					className: Object(d.a)(n, {
						[Le.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: r,
					comment: i,
					flair: u || null,
					ignoreLock: y,
					isAdmin: k,
					isModWithUserNotesPermissions: C,
					isLivestreaming: T,
					onCommentAuthorClick: w,
					onCommentTimestampClick: M,
					permalink: a,
					renderContractorBadge: !!A,
					renderedInOverlay: R,
					subredditDisplayText: S
				}), L);
				if (i.isDeleted) return s.a.createElement(Ve, Fe({}, e, {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: o
					})
				}));
				if (o) return s.a.createElement(ze, Fe({}, e, {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: o
					})
				}));
				const F = !h && p === we.b.Left;
				return s.a.createElement("div", {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: o,
						[Le.a.hasBadges]: b,
						[Le.a.liveStreaming]: T
					}),
					"data-testid": "comment-top-meta"
				}, u && F && s.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(E.f)(i) && s.a.createElement(v.b, {
					className: Le.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, s.a.createElement(N, {
					authorClassName: B ? Le.a.NftAuthor : void 0,
					collapsed: o,
					comment: i,
					isLivestreaming: T,
					isStrong: !!m,
					onClick: w,
					renderedInOverlay: R
				}), r && s.a.createElement(Y, null), r && s.a.createElement(x.c, {
					className: Le.a.metaText,
					key: "crowdControlSeparator"
				}), u && !F && s.a.createElement(Pe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && s.a.createElement(g.a, {
					className: Le.a.publicPoints,
					contentId: i.id,
					metaSeparator: s.a.createElement(x.c, {
						className: Le.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), L, s.a.createElement(ge, {
					className: Le.a.authorRole,
					comment: i,
					subredditDisplayText: S,
					renderContractorBadge: !!A,
					renderedInOverlay: R
				}), !m && s.a.createElement(s.a.Fragment, null, !i.isDeleted && !j && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.b, {
					className: Le.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), s.a.createElement(x.c, {
					className: Le.a.metaText,
					key: "scoreCreatedSeparator"
				})), s.a.createElement(q, {
					key: "Created",
					className: Le.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: R,
					isBlockingInterstitialEnabled: I || O
				}), i.isStickied && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.c, {
					className: Le.a.separator
				}), s.a.createElement(Ie, null)), i.editedAt && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.c, {
					className: Le.a.separator
				}), s.a.createElement(te, {
					editedAt: i.editedAt
				}))), s.a.createElement(ue, {
					comment: i,
					ignoreLock: y,
					renderedInOverlay: R
				}), s.a.createElement(l.a, {
					thing: i,
					tooltipType: R ? _.c.Lightbox : void 0
				}))
			});
			const Ve = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: r,
						comment: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c,
						renderedInOverlay: l
					} = e;
					return s.a.createElement("div", {
						className: r
					}, s.a.createElement(De, null, i.deletedBy === E.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), s.a.createElement(q, {
						key: "Created",
						className: Le.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && We({
						childrenInfo: t
					}))
				},
				ze = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: r,
						collapsed: i,
						commentPermalink: a,
						isBlockingInterstitialEnabled: d,
						isBlockingInterstitialV2Enabled: c
					} = e;
					return s.a.createElement("div", {
						className: n
					}, s.a.createElement("div", null, s.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(E.f)(t),
						collapsed: i
					})), s.a.createElement(x.b, {
						className: Le.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), s.a.createElement(x.c, {
						className: Le.a.metaText,
						key: "scoreCreatedSeparator"
					}), s.a.createElement(q, {
						key: "Created",
						className: Le.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: r,
						isBlockingInterstitialEnabled: d || c
					}), We({
						childrenInfo: o
					}))
				},
				We = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return s.a.createElement(Ue, {
						className: Le.a.metaText
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
			var o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(d.a.banner, d.a.staticBanner)
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
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(d.a.banner, d.a.staticBanner)
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = i.a.span("metaText", c.a),
				m = e => s.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: r,
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
						}) : r ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", d)], {
							hk: "gf67v"
						});
					return s.a.createElement(l, i, m)
				},
				p = e => s.a.createElement(l, null, o.fbt._({
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
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(o)(e => {
					const {
						featureEnabled: o,
						...s
					} = e, i = s;
					return o ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === o.b.NO_ADS);
				return !n && !r
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
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(s.a.loadingBackground, {
						[s.a["m-loading"]]: t
					})
				},
				a = e => Object(o.a)(s.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(r.e)(a, {
							commentId: e
						}),
						c = Object(s.g)(a, {
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
					...i.n(e)
				})
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(o || (o = {}));
			const r = e => e.category === o.Supporter,
				s = e => e.category === o.Achievement
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function r(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts"),
				s = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const i = {};
			var a = n("./node_modules/icepick/icepick.js"),
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
			t.a = Object(o.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.pb:
							const {
								subredditId: n, subredditAchievementFlairs: o
							} = t.payload;
							if (!(null == o ? void 0 : o.length)) return e;
							const i = o.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								a = o.filter(s.a).map(e => e.type),
								d = o.filter(s.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: i,
									achievementTypes: a,
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
								userAchievementFlairsByRedditorIds: o
							} = t.payload;
							let r = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: i
								} of o) {
								const n = i.filter(s.a),
									o = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									a = i.filter(s.b),
									d = a.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									c = l(n),
									m = l(a);
								r = {
									...r,
									[e]: {
										achievementTypes: o,
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
								userId: o,
								achievementFlairType: r,
								supporterFlairType: s
							} = t.payload;
							return Object(a.updateIn)(e, [n, o], e => ({
								...e,
								pendingAchievementType: r,
								pendingSupporterType: s
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: o,
								achievementFlairType: r,
								supporterFlairType: s
							} = t.payload;
							return Object(a.updateIn)(e, [n, o], e => ({
								...e,
								preferredAchievementType: r,
								preferredSupporterType: s,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: o
							} = t.payload;
							return Object(a.updateIn)(e, [n, o], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: o,
								isHidden: r
							} = t.payload;
							return Object(a.updateIn)(e, [n, o], e => ({
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
									o = e.powerups;
								if (!t || !o) return;
								const r = o.supportedSubreddits.filter(e => {
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
				return v
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(s.a)({
				features: {
					powerups: i.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: n
					} = t;
					var o;
					return n ? null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[n] : null
				},
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					var o, r;
					return n ? null === (r = null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[n]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: n,
						userId: o
					} = t;
					var r, s;
					return n && o ? null === (s = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[n]) || void 0 === s ? void 0 : s[o] : null
				},
				l = Object(o.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(o.a)([d, l], (e, t) => e && t ? e[t] : null),
				u = Object(o.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(o.a)([d, u], (e, t) => e && t ? e[t] : null),
				b = Object(o.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						o = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						r = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === o || e.type === r
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(o.a)([a, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: o,
						flairsByType: r
					} = e, {
						supporterTypes: s,
						achievementTypes: i,
						preferredSupporterType: a,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, s, r, c || a),
						achievementFlairs: g(o, i, r, l || d)
					}
				}),
				v = Object(o.a)([c], e => !!e && e.isHidden),
				f = Object(o.a)([a, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const o = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...o] : o
				}),
				g = (e, t, n, o) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === o
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				y = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(r.b)(e, {
							commentId: n
						}),
						s = null == o ? void 0 : o.subredditId,
						i = null == o ? void 0 : o.authorId;
					return !(!s || !i) && !!((e, t) => {
						let {
							subredditId: n,
							userId: o
						} = t;
						var r, s, i;
						return n && o ? null === (i = null === (s = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === s ? void 0 : s[o]) || void 0 === i ? void 0 : i[n] : null
					})(e, {
						subredditId: s,
						userId: i
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c.af74583611d550b7074b.js.map