// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.1210eb3202e29093e89f.js
// Retrieved at 3/23/2021, 9:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						x = !i && !u && !m && !h && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !y && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : p ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: g
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? s = {
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
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : _ ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var O = !s.windows && E.split(".")[0];
					return y || d || "ipad" == o || i && (3 == O || O >= 4 && !w) || s.silk ? s.tablet = e : (w || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var o = s.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, o, i, d, l, u, m, h, p = a(n), b = c(n), f = !1; !f;) {
								var x = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (f = !0, x = r) : b != t.body && b != t.documentElement && "visible" != g.overflow && (x = a(b)), x && (s = x, o = p, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, h = void 0, i = Math.max(s.top, o.top), d = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), h = d - i, !(p = (m = u - l) >= 0 && h >= 0 && {
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
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
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
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var o = this.thresholds[s];
								if (o == n || o == r || o < n != o < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
				}

				function r(e) {
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
						r = this.intersectionRect,
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? r : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), n, c, s)
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (s = n ? n.call(r, l, u, c) : void 0) || void 0 === s && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let r;
			const s = new Map,
				o = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), r = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!o.get(t)) {
						o.set(t, n);
						const r = s.get(t);
						if (r) {
							r(e, n && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						s.set(e, t), r && r.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						s.delete(e), r && r.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const d = i();
				Object(r.a)(e, a, d) ? n(Object(o.b)(e)) : t ? Object(s.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(o.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(a.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(d.a, {
					className: Object(i.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				a = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(a);

			function c(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.children), s.a.createElement(i.a, {
					className: d.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less": function(e, t, n) {
			e.exports = {
				date: "_1by4A-0PLBX13RXvipwRcH"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less": function(e, t, n) {
			e.exports = {
				media: "MIDgJ92fubZO3ngkh6ERh",
				text: "_3cbhcaToRzSvS3AZHJJvLi",
				title: "_1nM99kzHmBctirluJKfGFl"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_16aq4YoQYc6_O-E66cDxvD",
				container: "sBFMqVph7JM7fhtn8VIiv",
				prev: "_29Q_dDO_ANxqcMkzCOmsm-"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1eV0V57guaBVMeKljYRDZV",
				dot: "_1W94VLaridFHpaS6aIPX0M",
				dotSelected: "_8B-dKG9AXPQlHigF1i1sJ"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.m.less": function(e, t, n) {
			e.exports = {
				controls: "_1d3JALELQYjabIq8gl2EoW",
				controlBox: "_3yJ4xUsPnm94-kYEcZTx2F",
				title: "_1j-YFVTgvDYE6azr1ERUw9"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = n("./src/reddit/constants/keycodes.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/selectors/gov.ts"),
				h = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./node_modules/shallowequal/index.js"),
				f = n.n(b),
				x = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				g = n.n(x);

			function v(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function y(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), s = new Date(e.date), f()(v(n), v(s)));
				var n, s;
				return o.a.createElement("div", {
					className: Object(p.a)(g.a.date, e.className)
				}, t ? r.fbt._("today", null, {
					hk: "4pfpUs"
				}) : function(e) {
					const [t, , n] = v(e);
					return `${e.toLocaleString("en-US",{month:"short"})} ${t}, ${n}`
				}(new Date(e.date)))
			}
			var w = n("./src/reddit/components/Media/index.tsx"),
				_ = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				O = n.n(E);
			const j = {};

			function I(e) {
				return o.a.createElement("div", {
					className: e.className
				}, o.a.createElement("div", {
					className: O.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? o.a.createElement("div", {
					className: O.a.text
				}, o.a.createElement(_.a, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: j
				})) : o.a.createElement("div", {
					className: O.a.media
				}, o.a.createElement(w.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var T = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				C = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				N = n.n(C);

			function S(e) {
				return o.a.createElement("div", {
					className: Object(p.a)(N.a.container, e.className)
				}, !e.isFirst && o.a.createElement(T.l, {
					className: N.a.prev,
					onClick: e.onPrevSlide
				}, o.a.createElement(k.a, {
					className: N.a.arrow
				})), o.a.createElement(T.i, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? r.fbt._("done", null, {
					hk: "2XjG3a"
				}) : r.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var M = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				L = n.n(M);

			function R(e) {
				return o.a.createElement("div", {
					className: Object(p.a)(L.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => o.a.createElement("div", {
					className: Object(p.a)(L.a.dot, {
						[L.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var P = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				B = n.n(P);
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case l.b.ArrowRight:
								return this.handleViewNextSlide();
							case l.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case l.b.Escape:
								return this.props.onClose()
						}
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleKeyDown)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleKeyDown)
				}
				render() {
					if (!this.props.subreddit) return null;
					const e = this.props.releaseNotes[this.state.currentlyViewingIndex];
					return o.a.createElement("div", null, o.a.createElement(c.a, {
						className: B.a.title
					}, r.fbt._("What's New in {subredditName}?", [r.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), o.a.createElement(I, {
						releaseNote: e
					}), o.a.createElement("div", {
						className: B.a.controls
					}, o.a.createElement(y, {
						className: B.a.controlBox,
						date: e.created
					}), o.a.createElement(R, {
						className: B.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), o.a.createElement(S, {
						className: B.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const H = Object(h.c)({
					releaseNotes: m.i,
					subreddit: u.q
				}),
				A = Object(i.b)(H, e => ({
					onClose: () => e(Object(d.f)())
				})),
				U = Object(u.t)();
			t.default = Object(a.a)(U(A(D)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
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
				i = Object(s.a)("spBurnLinks", Object(r.a)({
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), s.a.createElement("iframe", {
					className: Object(d.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				p = n("./src/reddit/constants/elementClassNames.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/components/Media/blurredContent.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = n.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * f.e,
				j = e => {
					const t = Object(c.a)(_.a.image, p.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${f.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(f.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${f.j}px`, e.shouldBlur && (t.maxWidth = Object(f.I)(e.height, e.width) ? `${f.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(i.b)(() => Object(d.a)(x.C, g.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(x.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = T(e => e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, C(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, C(e)) : C(e));
			const k = (e, t) => o.a.createElement(j, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[v.a]: !e
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
				C = ({
					onClick: e,
					...t
				}) => {
					const n = Object(f.I)(t.height, t.width),
						s = O(t.height) && n;
					return o.a.createElement(I, E({}, t, {
						className: `${n?`${v.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, k(n, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: s ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, k(n, t)), t.isListing && !t.showFull && t.height > f.j && Object(f.I)(t.height, t.width) && o.a.createElement("div", {
						className: _.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(h.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: _.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: _.a.unblurButton
					}, Object(y.a)(!!t.isNSFW, !!t.isSpoiler))))
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
					r = e.blurSrc ? s.a.createElement("img", {
						className: c.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						let n = !1,
							r = !1;
						const s = () => n = !0,
							o = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, r) return r = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const s = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + f ? i = !0 : i && d >= a && d > a + f && (i = !1), a = d, s !== i && t(i)
						}, b);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", s)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: r,
						shouldLoad: s,
						shouldPause: o,
						showCentered: a,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return i.a.createElement("video", g({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var y = v,
				w = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(w);
			const E = Object(d.c)({
					autoplayPref: h.b,
					consumed: p.a,
					loadTimes: p.f,
					metadata: p.h,
					started: p.k
				}),
				O = Object(a.b)(E, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = s()(e => {
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
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), i.a.createElement(y, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, _.a.styledVideo),
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
							style: n,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : i.a.createElement("div", {
						className: Object(c.a)(_.a.container, this.props.className, {
							[_.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = O(j)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? r.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? r.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const h = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				p = d.a.wrapped(e => o.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = h(Object(a.a)(p))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => o.a.createElement(g, h({}, n, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class w extends o.a.Component {
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
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = w
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
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return R
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
				x = d.a.li("Li", a.a),
				g = d.a.ul("Ul", a.a),
				v = d.a.ol("Ol", a.a),
				y = d.a.strong("B", a.a),
				w = d.a.em("I", a.a),
				_ = d.a.span("U", a.a),
				E = e => s.a.createElement("del", e),
				O = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				I = d.a.table("Table", a.a),
				T = d.a.tr("Tr", a.a),
				k = d.a.td("Tdl", a.a),
				C = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				S = d.a.th("Thl", a.a),
				M = d.a.th("Thc", a.a),
				L = (d.a.th("Thr", a.a), d.a.wrapped(e => s.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				R = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/lodash/findLastIndex.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				w = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => i.a.createElement(y, v({}, n, {
					style: {
						color: Object(h.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				_ = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				E = e => s()(e, _),
				O = e => e.findIndex(_),
				j = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: o,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: h,
						rtJsonElementProps: x,
						useExplicitTextColor: v,
						shouldBlur: _
					} = e, j = r.document, I = [], T = e.mediaMetadata || null, k = O(j), C = E(j);
					if (_ && !s) return i.a.createElement(y, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!o, !!d))));
					if (-1 !== k)
						for (let i = k; i <= C; i++) {
							const e = j[i];
							switch (e.e) {
								case p.k:
									I.push(f.c(e, x, i));
									break;
								case p.l:
									I.push(f.d(i));
									break;
								case p.b:
									I.push(f.a(e, T, x, i));
									break;
								case p.c:
									I.push(f.b(e, i));
									break;
								case p.p:
									I.push(f.f(e, T, x, i));
									break;
								case p.z:
									I.push(f.h(e, T, x, i));
									break;
								case p.u:
									I.push(f.g(e, T, x, i));
									break;
								case p.h:
									I.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									I.push(...Object(b.b)(e, i, T, h, m, t))
							}
						}
					return v ? i.a.createElement(y, {
						className: Object(a.a)(u.j, n)
					}, I) : i.a.createElement(w, {
						className: Object(a.a)(u.j, n),
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
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				w = g.a.wrapped(b.a, "A", x.a),
				_ = g.a.wrapped(l.a, "ImageBox", x.a),
				E = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				O = g.a.div("Placeholder", x.a),
				j = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const s = t === p.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(O, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${s}'`
						}
					}, n))
				}, "Placeholder", x.a),
				I = ({
					c: e,
					x: t,
					y: n
				}, r) => o.a.createElement("div", {
					className: x.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: r,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				T = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === p.s ? s = n.s.u : n.e === p.r ? s = n.s.gif : n.e === p.t && (s = (e => {
						const t = y.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? o.a.createElement(w, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				k = (e, t, n, r, s, a) => {
					const c = p.E(n, e.id);
					if (r) return [T(e, t, c)];
					const l = [];
					return c ? c.e === p.s ? l.push((({
						id: e,
						s: t
					}, n, r, s) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: r
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(_, {
						altText: s,
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
						s: n
					}, r, s) => {
						if (Object(h.f)(e)) {
							const a = t || Object(h.e)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: s
								})
							}, o.a.createElement(w, {
								href: a,
								key: r,
								target: "_blank"
							}, n.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: r,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, o.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === p.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: r,
						isGif: s
					}, a, c, l) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: s,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: s
					}))))(c, t, !!e.c, s)) : l.push(((e, t) => o.a.createElement(j, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(E, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "e", (function() {
				return H
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const v = 1e3,
				y = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = w.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = w.Inside, setTimeout(() => {
							this.mouseLocation === w.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = w.Outside, setTimeout(() => {
							this.mouseLocation !== w.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
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
					let n, r, s;
					t.e === h.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === h.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return s ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: s,
						width: n,
						height: r,
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
			var E = Object(u.c)(_),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				I = n("./src/reddit/components/SubredditMention/index.tsx"),
				T = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = n("./src/reddit/helpers/richTextJson/index.ts");
			const C = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						o = [],
						i = r.length;
					for (let a = 0; a < i; a++) {
						const e = r[a];
						o.push(e.e === h.w ? e.t : H(e, t, a))
					}
					const c = d.x[s - 1];
					return a.a.createElement(c, {
						key: n
					}, o)
				},
				N = e => a.a.createElement(d.e, {
					key: e
				}),
				S = (e, t, n, r) => {
					const s = e.c;
					if (!s) return;
					const o = s.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(R(s[a], t, n, a));
					return a.a.createElement(d.c, {
						key: r
					}, i)
				},
				M = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, r) => {
					const s = e.c,
						o = [],
						i = s.length;
					for (let l = 0; l < i; l++) {
						const e = s[l].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, r) => R(e, t, {
							renderingObjectInfo: n
						}, r))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: r
					}, o)
				},
				R = (e, t, n, r) => {
					switch (e.e) {
						case h.b:
							return S(e, t, n, r);
						case h.c:
							return M(e, r);
						case h.k:
							return C(e, n, r);
						case h.l:
							return N(r);
						case h.p:
							return L(e, t, n, r);
						case h.u:
							return B(e, t, n, r);
						case h.z:
							return P(e, t, n, r)
					}
				},
				P = (e, t, n, r) => {
					const s = e.c,
						o = e.h,
						i = s.length,
						c = o.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = o[d],
							{
								H: r,
								D: s
							} = V(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(r, {
							key: d
						}, D(i, t, n))), m[d] = s
					}
					for (let h = 0; h < i; h++) {
						const e = s[h],
							r = e.length,
							o = [];
						for (let s = 0; s < r; s++) {
							const r = m[s],
								{
									c: i = []
								} = e[s];
							o.push(a.a.createElement(r, {
								key: s
							}, D(i, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: h
						}, o))
					}
					return a.a.createElement(d.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				B = (e, t, n, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const s = e.c[0];
					return s.e !== h.m && s.e !== h.a || !Object(k.f)(s.id) ? a.a.createElement(d.j, {
						key: r
					}, D(e.c, t, n)) : Object(O.b)(s, r, t)
				},
				D = (e, t, n) => {
					const r = [],
						s = e.length;
					for (let o = 0; o < s; o++) {
						const s = e[o];
						if (s.e === h.A) r.push(A(s, o));
						else if (s.e === h.x) r.push(a.a.createElement(j.a, {
							key: o
						}, D(s.c, t, n)));
						else if (s.e === h.n) r.push(a.a.createElement("br", {
							key: o
						}));
						else if (s.e === h.m || s.e === h.a) {
							if (s.id.startsWith("emote|")) {
								const e = h.E(t, s.id);
								e && r.push(a.a.createElement(E, {
									key: o,
									node: s,
									media: e
								}))
							}
						} else r.push(H(s, n, o))
					}
					return r
				},
				H = (e, t, n) => {
					switch (e.e) {
						case h.o:
							const r = A({
								t: e.t,
								f: e.f
							}, 0);
							return Object(T.b)(e.u) ? a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r) : a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, r);
						case h.y:
							return a.a.createElement(I.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: s
					} = e, o = [];
					if (!n) return F(0, s, t);
					const i = Object(r.a)(s);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, r] = n[a], c = t + r, l = i[t], u = i[c] - l;
						l > d && o.push(F(0, s.substr(d, l - d), `between${a}`)), o.push(F(e, s.substr(l, u), a)), d = l + u
					}
					return d < s.length && o.push(F(0, s.substr(d), `remaining${a}`)), o
				},
				U = {
					[h.j.monospace]: d.h,
					[h.j.bold]: d.b,
					[h.j.italic]: d.f,
					[h.j.underline]: d.u,
					[h.j.strikethrough]: d.d,
					[h.j.subscript]: d.l,
					[h.j.superscript]: d.m
				},
				F = (e, t, n) => {
					let r = t;
					return r = o()(U, (t, r, s) => e & parseInt(s, 10) ? a.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				V = e => {
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
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.wrapped(i.b, "SubredditIcon", c.a),
				m = o.a.wrapped(e => s.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
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
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => s.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, s.a.createElement(l.a, {
						href: `/r/${e}/`
					}, s.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, s.a.createElement(l.b, null)), `r/${e}`))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends s.a.PureComponent {
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
					return s.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(p.c)(g),
				y = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				w = Object(o.b)(y),
				_ = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: r,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return s.a.createElement(v, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (r) {
						case b.md.SmIcon:
							return s.a.createElement(h, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case b.md.SmIconHc:
							return s.a.createElement(h, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(v, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				};
			t.b = w(_)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return x
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function x(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "|downsized";

			function i(e, t) {
				return s + e + (t ? o : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(s)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function c(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, r.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === r.o).map(e => e.u)
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const i = ({
					isLoading: e
				}) => Object(r.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				a = e => Object(r.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts"),
				o = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.gallery(e, t, n),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				d = (e, t) => n => ({
					...a(n, e, t),
					action: r.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(n, e)
				}),
				c = (e, t) => n => {
					const d = Object(s.a)(t),
						c = Object(o.b)(n, e) + 1;
					return {
						...a(n, e, c),
						action: r.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(n, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, n) => s => ({
					...a(s, e, n),
					action: r.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return O
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const h = e => ({
					...u.defaults(e),
					source: s.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: s,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(a.b)(t) || Object(d.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(i.w)(n) ? m.SourceElement.PostDetail : Object(i.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const s = Object(d.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: b(0, t),
							subredditName: r,
							[s]: n.id
						},
						i = Object(l.A)(e, {
							subredditName: r
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
				x = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {};
					const r = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, r),
						...f(e, t)
					}
				},
				g = e => t => ({
					...h(t),
					...x(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				y = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				w = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "j", (function() {
				return I
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				i = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = w(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const n = v(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const n = m(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				p = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				b = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				g = (e, t) => {
					const n = O(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const n = y(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = w(e, t),
						r = y(e, t);
					return n && n.provider || r && r.provider
				},
				E = (e, t) => {
					const n = _(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				O = (e, t) => {
					const n = w(e, t),
						r = _(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				j = (e, {
					subredditId: t
				}) => {
					const n = w(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const n = y(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
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
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => s.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.fd
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === r.md.SmIcon || t === r.md.SmIconHc
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
					const n = Object(i.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.1210eb3202e29093e89f.js.map