// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c.001541a68d6872cbe4e7.js
// Retrieved at 4/20/2022, 5:10:03 PM by Reddit Dataminer v1.0.0
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
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !s && !l && /macintosh/i.test(t),
						f = !i && !m && !u && !p && /linux/i.test(t),
						g = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						k = !y && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (r = {
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, x && (r.version = x)) : s ? (r = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, x && (r.version = x)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && x && (r.version = x)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : f && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					return y || d || "ipad" == s || i && (3 == O || O >= 4 && !k) || r.silk ? r.tablet = e : (k || "iphone" == s || "ipod" == s || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
							for (var r, s, i, d, l, m, u, p, h = a(n), b = c(n), v = !1; !v;) {
								var f = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (v = !0, f = o) : b != t.body && b != t.documentElement && "visible" != g.overflow && (f = a(b)), f && (r = f, s = h, i = void 0, d = void 0, l = void 0, m = void 0, u = void 0, p = void 0, i = Math.max(r.top, s.top), d = Math.min(r.bottom, s.bottom), l = Math.max(r.left, s.left), m = Math.min(r.right, s.right), p = d - i, !(h = (u = m - l) >= 0 && p >= 0 && {
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
				return k
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
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
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				v = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/comment/index.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const y = Object(s.a)(x.n),
				k = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					n().features.comments.models[e] && (await Object(m.j)(r(), e)).ok && t((e => async t => {
						t(y({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					if (!Object(f.R)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? m.l : m.e;
					t(Object(g.i)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(s(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
						text: i.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(g.i)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, I = Object(s.a)(x.G), O = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n(),
						a = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					a && l && (t(Object(g.i)({
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
						kind: h.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(g.i)({
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
				}, E = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const a = r(),
						l = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					l && u && (n(Object(g.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(i(), e, t)).ok ? n(Object(c.f)({
						kind: h.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(g.i)({
						[e]: {
							approvedBy: l.approvedBy,
							bannedBy: l.bannedBy,
							isApproved: l.isApproved,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam
						}
					})), Object(d.d)())
				}, C = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? m.k : m.d;
					t(Object(g.i)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(s(), e)).ok ? t(Object(c.f)({
						kind: h.b.SuccessMod,
						text: i.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(g.i)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, j = (e, t, n) => async (s, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(b.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === r.fc.Snoozed,
						v = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: v
						})).ok) s(Object(g.i)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						s(Object(c.f)(e))
					}
				}, w = (e, t, n) => async (o, s, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = s(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						h = l.postStickiedComments.data[p],
						b = r.g[t];
					let f;
					if (o(Object(g.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === r.H.ADMIN,
								isMod: t === r.H.MODERATOR,
								isStickied: !!n
							}
						})), n && h && h !== e && o(Object(g.i)({
							[h]: {
								isStickied: !1
							}
						})), Object(v.a)(s())) {
						const o = Object(m.b)(c(), e, t),
							r = Object(m.c)(c(), e, !!n),
							s = [o];
						(n || !n && e === h) && s.push(r), f = {
							ok: (await Promise.all(s)).every(e => e.ok)
						}
					} else f = await Object(m.g)(d(), e, b, n || null);
					f.ok ? n && o(I({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: r.u.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(g.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(g.i)({
						[h]: {
							isStickied: l.features.comments.models[h].isStickied
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
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = n("./src/reddit/icons/svgs/Show/index.tsx"),
				C = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(j);
			const T = Object(b.u)(),
				M = e => `Distinguish--Dropdown--${e}`,
				N = Object(a.c)({
					currentUser: y.l,
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
						return Object(x.b)(M(n.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(b.h)(e, t) || Object(g.n)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: b.T
				}),
				A = Object(i.b)(N, (e, t) => {
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
			t.a = T(A(l.a.wrapped(Object(h.c)(e => {
				let {
					className: t,
					comment: n,
					currentUser: r,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: h,
					onLockComment: b,
					onRemoveComment: f,
					onShowComment: g,
					onSpamComment: x,
					onToggleDistinguishDropdown: y,
					sendEvent: j,
					...T
				} = e;
				const M = Object(p.b)(n),
					N = n.isApproved && M,
					A = !n.isRemoved || n.bannedBy === c.l,
					R = a,
					L = e => j(Object(v.a)(e, n.id));
				return s.a.createElement("div", {
					className: t
				}, (n.bannedBy || M) && s.a.createElement(C.a, {
					text: N ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), L("approve")
					}
				}, s.a.createElement(k.a, {
					className: w.a.icon
				})), A && s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
					text: n.bannedBy === c.l ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						f(), n.bannedBy === c.l ? L("confirm_remove") : L("remove")
					}
				}, s.a.createElement(I.a, {
					className: w.a.icon
				})), s.a.createElement(C.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						x(), L("spam")
					}
				}, s.a.createElement(O.a, {
					className: w.a.icon
				}))), s.a.createElement(C.a, {
					text: n.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), L(n.isLocked ? "unlock" : "lock")
					}
				}, s.a.createElement(_.a, {
					className: w.a.icon
				})), R && s.a.createElement(C.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, s.a.createElement(E.a, {
					className: Object(d.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
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
			const h = e => {
				const {
					className: t,
					collapsed: n,
					comment: r,
					isAuthorDeleted: i,
					isCommentAuthorBlocked: a,
					isLivestreaming: c,
					isStrong: l,
					onClick: u,
					style: h
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
					style: h
				}, r.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				v = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				x = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				y = n("./src/reddit/components/PostTopMeta/index.tsx"),
				k = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				I = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/lib/constants/index.ts"),
				w = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(M);
			const A = e => {
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
					u = s.a.createElement(w.b, {
						ignore: m || !!o.distinguishType && o.distinguishType !== j.H.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, s.a.createElement(h, {
						className: t,
						collapsed: r,
						comment: o,
						isAuthorDeleted: Object(E.f)(o),
						isCommentAuthorBlocked: Object(E.g)(o),
						isLivestreaming: i,
						isStrong: a,
						onClick: c
					}));
				return m ? u : s.a.createElement(T.b, {
					className: Object(d.a)(N.a.authorHoverCard, n),
					collapsed: r,
					isCommentAuthorBlocked: Object(E.g)(o),
					postOrComment: o,
					tooltipType: l ? y.c.Lightbox : void 0
				}, u)
			};
			var R = n("./src/config.ts"),
				L = n("./src/reddit/actions/tooltip.ts"),
				S = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const B = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${n?"inOverlay":""}`
			};
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(P);
			const D = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: r
				} = e;
				const a = Object(i.d)(),
					c = () => a(Object(L.h)({
						tooltipId: l
					})),
					l = B("CommentTopMeta--cakeday--", n, r),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: c,
					onMouseLeave: c,
					"data-testid": "cakeday-icon"
				}), s.a.createElement(S.c, {
					tooltipId: l,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				z = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: r,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(i.d)(), m = B("CommentTopMeta--Created--", n.id, d), u = () => l(Object(L.h)({
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
							null == r || r(e), X(l, n.id), c && (e.preventDefault(), l(Object(V.Z)(Object(z.b)(a), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, s.a.createElement(W.d, {
						seconds: n.created,
						shortenedUnit: o
					}), s.a.createElement(S.c, {
						tooltipId: m
					}, s.a.createElement(W.b, {
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
			var K = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(K);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => s.a.createElement(k.a, {
				className: Q.a.crowdControlText
			}, G._("Crowd Control", null, {
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
				return s.a.createElement(k.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", s.a.createElement(W.d, {
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
					renderedInOverlay: a
				} = e;
				const d = Object(i.d)(),
					c = e => () => d(Object(L.f)({
						tooltipId: e
					})),
					l = () => d(Object(L.i)()),
					m = e => B(e, t.id, a),
					u = m("CommentTopMeta--Approve--"),
					p = m("CommentTopMeta--Remove--"),
					h = m("CommentTopMeta--Report--"),
					b = m("CommentTopMeta--Spam--"),
					v = c(p);
				return s.a.createElement(s.a.Fragment, null, (t.approvedBy || t.isApproved) && s.a.createElement(s.a.Fragment, null, s.a.createElement(se.a, {
					className: me.a.approveIcon,
					desc: Object(oe.a)(t),
					id: u,
					onMouseEnter: c(u),
					onMouseLeave: l,
					isFilled: !0
				}), s.a.createElement(S.c, {
					tooltipId: u,
					text: Object(oe.a)(t)
				})), Object(ne.a)(t) && s.a.createElement(s.a.Fragment, null, s.a.createElement(ae.a, {
					className: me.a.removeIcon,
					desc: Object(oe.b)(t),
					id: p,
					onMouseEnter: v,
					onMouseLeave: l,
					isFilled: !0
				}), s.a.createElement(S.c, {
					tooltipId: p,
					text: Object(oe.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && s.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && s.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: l
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
					id: b,
					onMouseEnter: c(b),
					onMouseLeave: l,
					isFilled: !0
				}), s.a.createElement(S.c, {
					tooltipId: b,
					text: Object(oe.d)(t)
				})), Object(re.a)(t) && s.a.createElement(s.a.Fragment, null, s.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: l,
					isFilled: !0
				}), s.a.createElement(S.c, {
					tooltipId: h,
					text: Object(oe.c)(t.numReports)
				})))
			};
			var pe, he = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ve = n.n(be);
			const fe = {
					[pe.Admin]: {
						color: he.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: he.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: he.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: he.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: he.a,
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
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === j.H.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: r,
						getLabel: a,
						tooltipTemplate: c
					} = fe[n], l = a(), m = B(o, e.comment.id, e.renderedInOverlay), u = c(e), p = () => t(Object(L.h)({
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
					}, s.a.createElement("span", null, l), n === pe.Mod && s.a.createElement(xe, null)), s.a.createElement(S.c, {
						tooltipId: m,
						text: u
					}))
				},
				xe = () => s.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ve.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = n.n(ye);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = () => s.a.createElement(k.a, {
				className: ke.a.stickiedText
			}, _e._("Stickied comment", null, {
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
					onCommentAuthorClick: h,
					onCommentTimestampClick: j,
					permalink: w,
					renderContractorBadge: T,
					renderedInOverlay: M,
					subredditDisplayText: N
				} = e, R = Object(O.a)(), L = a.subredditId, S = Object(i.e)(e => Object(C.h)(e, {
					subredditId: L
				}));
				if (a.isDeleted) return s.a.createElement("div", {
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
				})), s.a.createElement(k.c, {
					className: Ee.a.separator
				}), s.a.createElement(q, {
					key: "Created",
					className: Ee.a.metaText,
					comment: a,
					compact: !0,
					permalink: w,
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
				}, s.a.createElement(A, {
					authorClassName: Ee.a.author,
					collapsed: n,
					comment: a,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: M
				})), !Object(E.f)(a) && u && s.a.createElement(x.a, {
					postOrComment: a,
					className: Ee.a.LastAuthorModNoteIcon
				}), r && s.a.createElement(Y, null), s.a.createElement(ge, {
					className: Ee.a.role,
					comment: a,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: M
				}), a.isAuthorCakeday ? s.a.createElement(D, {
					className: Ee.a.cakeDay,
					commentId: a.id,
					renderedInOverlay: M
				}) : !Object(E.f)(a) && S && s.a.createElement(b.a, {
					className: Ee.a.achievementFlair,
					subredditId: a.subredditId,
					userId: a.authorId,
					onHover: () => {
						R(Object(I.b)(a.id, a.subredditId, a.authorId))
					},
					showPopupOnHover: !0
				}), s.a.createElement(g.a, {
					className: Ee.a.cryptoPoints,
					contentId: a.id,
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), s.a.createElement(k.c, {
					className: Ee.a.separator
				}), s.a.createElement(q, {
					key: "Created",
					className: Ee.a.metaText,
					comment: a,
					compact: !0,
					onClick: j,
					permalink: w,
					renderedInOverlay: M
				}), a.isStickied && s.a.createElement(s.a.Fragment, null, s.a.createElement(k.c, {
					className: Ee.a.separator
				}), s.a.createElement(Ie, null)), a.editedAt && s.a.createElement(s.a.Fragment, null, s.a.createElement(k.c, {
					className: Ee.a.separator
				}), s.a.createElement(te, {
					compact: !0,
					editedAt: a.editedAt
				})), s.a.createElement(ue, {
					comment: a,
					ignoreLock: m,
					renderedInOverlay: M
				}), s.a.createElement(l.a, {
					thing: a,
					tooltipType: M ? y.c.Lightbox : void 0
				})), c && !Object(_.o)(c) && s.a.createElement("span", {
					className: Ee.a.userFlairLine
				}, s.a.createElement(f.b, {
					className: Ee.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var je = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				we = n("./src/reddit/selectors/economics.ts"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/selectors/userFlair.ts"),
				Se = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Be = n.n(Se);

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = c.a.wrapped(f.b, "RightPositionedAuthorFlair", Be.a),
				De = c.a.span("DeletedText", Be.a),
				Ue = c.a.wrapped(k.a, "MetaSeparator", Be.a),
				He = Object(i.b)(() => Object(a.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(we.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Re.I)(e, {
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
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ne.b,
					isBlockingInterstitialV2Enabled: Ne.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.i)(e, n.subredditId)
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
					hasBadges: h,
					ignoreFlairPosition: b,
					ignoreLock: x,
					isBlockingInterstitialEnabled: _,
					isBlockingInterstitialV2Enabled: I,
					isModWithUserNotesPermissions: O,
					isLivestreaming: C,
					isPostComment: j,
					onCommentAuthorClick: w,
					onCommentTimestampClick: T,
					renderContractorBadge: M,
					renderedInOverlay: N,
					subredditDisplayText: R,
					userHasNft: L
				} = e, S = s.a.createElement(s.a.Fragment, null, s.a.createElement(je.b, {
					commentId: i.id
				}), s.a.createElement(je.a, {
					commentId: i.id,
					commentsPageKey: c
				}));
				if (j) return s.a.createElement(s.a.Fragment, null, s.a.createElement(Ce, {
					className: Object(d.a)(n, {
						[Be.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: r,
					comment: i,
					flair: u || null,
					ignoreLock: x,
					isModWithUserNotesPermissions: O,
					isLivestreaming: C,
					onCommentAuthorClick: w,
					onCommentTimestampClick: T,
					permalink: a,
					renderContractorBadge: !!M,
					renderedInOverlay: N,
					subredditDisplayText: R
				}), S);
				if (i.isDeleted) return s.a.createElement(Ve, Pe({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				if (o) return s.a.createElement(We, Pe({}, e, {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				const B = !b && p === Te.b.Left;
				return s.a.createElement("div", {
					className: Object(d.a)(n, Be.a.container, {
						[Be.a.collapsed]: o,
						[Be.a.hasBadges]: h,
						[Be.a.liveStreaming]: C
					}),
					"data-testid": "comment-top-meta"
				}, u && B && s.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(E.f)(i) && s.a.createElement(v.b, {
					className: Be.a.userBadges,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), t && t, s.a.createElement(A, {
					authorClassName: L ? Be.a.NftAuthor : void 0,
					collapsed: o,
					comment: i,
					isLivestreaming: C,
					isStrong: !!m,
					onClick: w,
					renderedInOverlay: N
				}), r && s.a.createElement(Y, null), r && s.a.createElement(k.c, {
					className: Be.a.metaText,
					key: "crowdControlSeparator"
				}), u && !B && s.a.createElement(Fe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && s.a.createElement(g.a, {
					className: Be.a.publicPoints,
					contentId: i.id,
					metaSeparator: s.a.createElement(k.c, {
						className: Be.a.metaText
					}),
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), S, s.a.createElement(ge, {
					className: Be.a.authorRole,
					comment: i,
					subredditDisplayText: R,
					renderContractorBadge: !!M,
					renderedInOverlay: N
				}), !m && s.a.createElement(s.a.Fragment, null, !i.isDeleted && !j && s.a.createElement(s.a.Fragment, null, s.a.createElement(k.b, {
					className: Be.a.metaText,
					isScoreHidden: i.isScoreHidden,
					score: i.score
				}), s.a.createElement(k.c, {
					className: Be.a.metaText,
					key: "scoreCreatedSeparator"
				})), s.a.createElement(q, {
					key: "Created",
					className: Be.a.MetaLink,
					comment: i,
					permalink: a,
					renderedInOverlay: N,
					isBlockingInterstitialEnabled: _ || I
				}), i.isStickied && s.a.createElement(s.a.Fragment, null, s.a.createElement(k.c, {
					className: Be.a.separator
				}), s.a.createElement(Ie, null)), i.editedAt && s.a.createElement(s.a.Fragment, null, s.a.createElement(k.c, {
					className: Be.a.separator
				}), s.a.createElement(te, {
					editedAt: i.editedAt
				}))), s.a.createElement(ue, {
					comment: i,
					ignoreLock: x,
					renderedInOverlay: N
				}), s.a.createElement(l.a, {
					thing: i,
					tooltipType: N ? y.c.Lightbox : void 0
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
						className: Be.a.MetaLink,
						comment: i,
						permalink: a,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d || c
					}), n && ze({
						childrenInfo: t
					}))
				},
				We = e => {
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
					}, s.a.createElement("div", null, s.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(E.f)(t),
						collapsed: i
					})), s.a.createElement(k.b, {
						className: Be.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), s.a.createElement(k.c, {
						className: Be.a.metaText,
						key: "scoreCreatedSeparator"
					}), s.a.createElement(q, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: t,
						permalink: a,
						renderedInOverlay: r,
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
					return s.a.createElement(Ue, {
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
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
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
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD),
				s = e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL),
				i = e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT),
				a = e => r(e) || s(e) || i(e)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends i.a.Component {
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
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const o = Object(a.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !n.noHover,
					[b.a.mIsSelected]: n.isSelected,
					[b.a.topics]: n.isTopicsStyle
				});
				return i.a.createElement(f, v({
					className: o
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(s);
			t.a = o.a.wrapped(r.a, "unstyledInternalLink", i.a)
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL"
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
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
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
				h = Object(o.a)([d, c], (e, t) => {
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
				b = Object(o.a)([a, c], (e, t) => {
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
				x = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c.001541a68d6872cbe4e7.js.map