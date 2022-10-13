// https://www.redditstatic.com/desktop2x/CountryPage~Multireddit.fad76e62219486a1d934.js
// Retrieved at 10/13/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Multireddit"], {
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
					var s, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						_ = !o && !u && !m && !h && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: g
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? s = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, x && (s.version = x)) : i ? (s = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, x && (s.version = x)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && x && (s.version = x)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && i ? (s[i] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : E ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : _ && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (s.osversion = k);
					var C = !s.windows && k.split(".")[0];
					return y || c || "ipad" == i || o && (3 == C || C >= 4 && !v) || s.silk ? s.tablet = e : (v || "iphone" == i || "ipod" == i || o || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function i(e) {
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

				function o(e, r, s) {
					var o = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (o = t(s));
					var a = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return i([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = i, n.check = function(e, t, n) {
					return !o(e, t, n)
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var i = s.element,
								o = a(i),
								c = this._rootContainsTarget(i),
								d = s.entry,
								l = t && c && this._computeTargetAndRootIntersection(i, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, c, l, u, m, h, p = a(n), b = d(n), f = !1; !f;) {
								var _ = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (f = !0, _ = r) : b != t.body && b != t.documentElement && "visible" != g.overflow && (_ = a(b)), _ && (s = _, i = p, o = void 0, c = void 0, l = void 0, u = void 0, m = void 0, h = void 0, o = Math.max(s.top, i.top), c = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), u = Math.min(s.right, i.right), h = c - o, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: h
									}))) break;
								b = d(b)
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
								var i = this.thresholds[s];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
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
					var n, r, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function o(e, t, n, r) {
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
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function r(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function s(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === s(e)
			}

			function o(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var c = {
					"http:": {
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(d), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var n = e.__schemas__[t];
					if (null !== n) {
						var r = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = r, "[object Object]" === s(n)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(n.validate) ? i(n.validate) ? r.validate = n.validate : l(t, n) : r.validate = function(e) {
							return function(t, n) {
								var r = t.slice(n);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(n.validate), void(i(n.normalize) ? r.normalize = n.normalize : n.normalize ? l(t, n) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(n) ? l(t, n): c.push(t)
					}
				})), c.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(o).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var n = e.__index__,
					r = e.__last_index__,
					s = e.__text_cache__.slice(n, r);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = s, this.text = s, this.url = s
			}

			function h(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function p(e, t) {
				if (!(this instanceof p)) return new p(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			p.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, p.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, p.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, r, s, i, o, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
			}, p.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, p.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, p.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(h(this, t)), t = this.__last_index__);
				for (var r = t ? e.slice(t) : e; this.test(r);) n.push(h(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, p.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, p.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, p.prototype.onCompile = function() {}, e.exports = p
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = n("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = n("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = n("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = n("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, i) {
					n = r ? (r = !1, e) : t(n, e, s, i)
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
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(s(e, t), 1)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : o,
					d = arguments.length < 3;
				return c(e, i(t, 4), n, d, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var l = r(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
					var d = i[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (s = n ? n.call(r, l, u, d) : void 0) || void 0 === s && l !== u) return !1
				}
				return !0
			}
		},
		"./node_modules/tlds/index.js": function(e, t) {
			e.exports = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", "セール", "佛山", "慈善", "集团", "在线", "한국", "大众汽车", "点看", "คอม", "ভারত", "八卦", "موقع", "বাংলা", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "қаз", "католик", "онлайн", "сайт", "联通", "срб", "бг", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "電訊盈科", "购物", "クラウド", "ભારત", "通販", "भारत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "العليان", "اتصالات", "امارات", "بازار", "پاکستان", "الاردن", "موبايلي", "بھارت", "المغرب", "ابوظبي", "السعودية", "كاثوليك", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "عرب", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ελ", "世界", "書籍", "ਭਾਰਤ", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"]
		},
		"./node_modules/uc.micro/categories/Cc/regex.js": function(e, t) {
			e.exports = /[\0-\x1F\x7F-\x9F]/
		},
		"./node_modules/uc.micro/categories/P/regex.js": function(e, t) {
			e.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
		},
		"./node_modules/uc.micro/categories/Z/regex.js": function(e, t) {
			e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
		},
		"./node_modules/uc.micro/properties/Any/regex.js": function(e, t) {
			e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return k
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				i = n("./node_modules/tlds/index.js"),
				o = n.n(i),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				h = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				_ = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				x = h.normalize;
			h.normalize = e => {
				x.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (_.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...p.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(s.e)(e),
					o = encodeURIComponent(`${t}${i}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return j
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = Object(s.a)(o.g),
				f = Object(s.a)(o.e),
				_ = Object(s.a)(o.h),
				g = Object(s.a)(o.c),
				x = Object(s.a)(o.f),
				y = Object(s.a)(o.j),
				v = Object(s.a)(o.i),
				E = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = t(),
						o = Object(m.e)(i),
						d = Object(m.d)(i),
						h = Object(p.P)(i);
					if (o || !d) return;
					e(_());
					let x = !1;
					try {
						const t = h ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (k(t)) {
								if (C(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (w(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: i
										} = n.focusRecommendations[0],
										o = [r, s],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(m)), x = !0
								}
							} else x = !1
						}
					} catch (y) {
						x = !1
					}
					x || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !C(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, j = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						a = Object(m.g)(o);
					if (Object(m.f)(o) || null === a || "client" === a) {
						const n = null === (s = null === (r = Object(h.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(p.Q)(o);
						return Object(i.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				_ = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				x = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				y = n("./node_modules/lodash/flatMap.js"),
				v = n.n(y),
				E = n("./src/lib/linkMatchers/index.ts"),
				k = n("./src/lib/linkMatchers/customLinks.ts"),
				C = n("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, i] = t.slice(r, r + 3);
						n.push(e), n.push([i, s])
					}
					return n
				};
			var O = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, j)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(k.g.subreddit.prefix, k.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return i.a.createElement(C.b, {
								className: e.linkClassName,
								href: r,
								key: n
							}, s)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				S = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => i.a.createElement(D.a, L({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				R = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/components/ContentGate/index.m.less"),
				z = n.n(A);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(I, "PrivateKey", z.a), q = l.a.div("ButtonsContainer", z.a), W = l.a.div("Container", z.a), V = l.a.div("ContainerExp", z.a), G = l.a.div("Description", z.a), Z = l.a.div("PrivateSubredditDetails", z.a), J = l.a.div("PrivateSubredditDescription", z.a), K = l.a.h3("PrivateSubredditName", z.a), Y = l.a.a("Link", z.a), X = l.a.wrapped(F.n, "LinkRouterButton", z.a), Q = l.a.wrapped(F.m, "LinkButton", z.a), $ = l.a.wrapped(F.q, "SecondaryLinkRouterButton", z.a), ee = l.a.wrapped(F.p, "SecondaryLinkButton", z.a), te = l.a.wrapped(X, "GoHomeLinkButton", z.a), ne = l.a.wrapped(b.a, "CreateCommunityButton", z.a), re = l.a.img("Image", z.a), se = l.a.img("ImagePlaceholder", z.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", z.a), oe = l.a.wrapped(Q, "LeftLinkButton", z.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", z.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", z.a), de = l.a.h3("Title", z.a), le = l.a.div("PageBody", z.a), ue = l.a.div("InterstitialMessageWrapper", z.a), me = Object(d.c)({
				isLoggedIn: R.P,
				origin: M.k,
				user: R.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(R.Q)(e)) return !1;
					const t = Object(P.d)(e);
					if (!t) return !1;
					const n = Object(R.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * N.E;
					return r > Date.now() - s
				})(e),
				isSeo: M.h
			}), he = Object(T.u)(), pe = Object(o.b)(me, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(h.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(h.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), be = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: o,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: h,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: v,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: k,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: w,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: T,
					subredditDescription: F,
					subredditName: D,
					user: L
				} = e, I = async () => {
					if (a ? await T() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(de, null, H._("r/{community name} is a Reddit Premium community", [H._param("community name", D)], {
							hk: "2lyDwB"
						})), i.a.createElement(G, null, H._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(q, null, L ? i.a.createElement(ae, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, H._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(oe, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), L ? i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ee, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, H._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(de, null, n === B.a.Nsfw ? H._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : H._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(G, null, H._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(q, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: I,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(de, null, "r/", D, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), F && F.length && i.a.createElement(Z, null, i.a.createElement(K, null, "r/", D), i.a.createElement(J, null, i.a.createElement("div", null, F))), i.a.createElement(G, null, H._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", D, " ", H._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), H._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(q, null, L ? i.a.createElement(i.a.Fragment, null, !c && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: z.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(ae, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${D}`,
							redditStyle: !0
						}, H._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ae, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), D && i.a.createElement(x.a, {
							subredditName: D
						}));
					case B.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(de, null, H._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(G, null, H._("This community is {=quarantined}", [H._param("=quarantined", i.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, H._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, k ? i.a.createElement(g.b, {
							content: k,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? i.a.createElement(_.a, {
							html: E
						}) : v || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), H._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(q, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(q, null, i.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Q, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, H._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(q, null, i.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, H._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(L, s, y)));
					case B.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(de, null, H._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(G, null, i.a.createElement(ue, null, j ? i.a.createElement(g.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : w ? i.a.createElement(_.a, {
							html: w
						}) : C), H._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(q, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: o,
							redditStyle: !0
						}, H._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case B.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(de, null, H._("r/{community name} has been banned from Reddit", [H._param("community name", D)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(G, null, e ? i.a.createElement(O, {
							linkClassName: z.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : H._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(q, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(de, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(q, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(se, null), i.a.createElement(de, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(G, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(q, null, L && i.a.createElement(ne, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return H._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", i.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, H._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(de, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(G, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(q, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(de, null, H._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(q, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(de, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(q, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(pe(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? V : W;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, be(e))), i.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				y = g.a.wrapped(l.c, "StyledTooltip", _.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.pb)(e),
					userIsSuspended: b.X
				});
			t.a = Object(o.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(h.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: h.c.Secondary,
					id: x,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", d.a), m = a.a.a("UserAgreementLink", d.a), h = a.a.a("PrivacyLink", d.a);
			var p;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(p || (p = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(o.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === p.Grey,
					[d.a.mIsWhite]: e.textColor === p.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", s.a.createElement(h, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
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
				o = Object(s.a)("spBurnLinks", Object(r.a)({
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
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(o);
			const c = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, n)))
				}
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
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
				return F
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				_ = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/constants/tracking.ts"),
				j = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(O);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => e > 2 * v.e,
				D = e => i.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[S.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				L = e => {
					const t = Object(d.a)(S.a.image, f.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && F(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(s.useRef)(null),
						[a, c] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && c(!0)
							})
						}, [a]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(y.a)(o, l, u.current);
					const {
						width: m,
						height: h
					} = e;
					let p = 240;
					if (m / h > 1)
						if (m < 240) p = h;
						else {
							(p = h * (240 / m)) < 20 && (p = 20)
						}
					else p = Math.min(p, h);
					const b = Object(s.useRef)({
						height: p
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: o,
						style: b.current
					}, a && i.a.createElement(D, T({}, e, {
						className: t
					}))) : i.a.createElement("img", {
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
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(d.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				B = Object(o.b)(() => Object(c.a)(E.F, C.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(E.b)(e, r) : null
				}, k.d, E.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = B(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": j.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(_.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(g.a)(e.post, e.pageType))
					}
				}, P(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const N = (e, t) => i.a.createElement(L, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[w.a]: !e
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
				P = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(v.L)(n.height, n.width),
						o = F(n.height) && s;
					return i.a.createElement(I, T({}, n, {
						className: `${s?`${w.a} `:""}${n.className||""}`
					}), n.isListing ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, N(s, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, N(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.L)(n.height, n.width) && i.a.createElement("div", {
						className: S.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(p.a, {
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
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
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(i.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), s.a.createElement("div", {
					className: Object(i.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
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
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const f = 100,
				_ = f / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				x = n("./src/lib/hooks/usePrevious.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function v(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const h = Object(i.useRef)(),
					p = Object(i.useRef)(),
					b = Object(x.a)(c);

				function v(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (v(!c && (t || r)), p.current && s) return h.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							i = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const s = o;
							4 === e.readyState ? o = !1 : !o && c >= a && c < a + _ ? o = !0 : o && c >= a && c > a + _ && (o = !1), a = c, s !== o && t(o)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", s)
						}
					}(p.current, s), () => {
						h.current && h.current()
					}
				}, []), Object(i.useEffect)(() => {
					b !== c && v(!c && (t || r))
				}, [b, c, t, r]), o.a.createElement("video", y({}, m, {
					ref: e => p.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				k = n.n(E);
			const C = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function w(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: i,
					started: c
				} = Object(a.e)(t => C(t, e)), {
					postId: p,
					shouldLoad: b,
					source: f,
					height: _,
					isNotCardView: g,
					showFull: x,
					shouldPause: y,
					width: E,
					isListing: w,
					className: j,
					showCentered: O,
					originalSource: S,
					isPromoted: T,
					renderSmallMedia: F
				} = e, D = t && !(T && Object(d.hasAcceptableAds)()), L = Object(a.d)();

				function I(e) {
					L(e ? Object(u.r)(p) : Object(u.E)(p))
				}

				function B() {
					return L(Object(u.z)({
						postId: p
					}))
				}
				const N = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && L(Object(u.s)(p))
				}, 200);

				function P(e) {
					e.persist(), N(e)
				}

				function R(e) {
					var t;
					(i || A(e), c) || (t = e.timeStamp, L(Object(u.A)(p, t)))
				}

				function M(e) {
					L(Object(u.q)(p, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						L(Object(u.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function z(e) {
					r || R(e), i || A(e), L(Object(u.C)(p))
				}

				function H() {
					const e = {};
					return O && (e.margin = "0 auto"), w || (e.maxHeight = `${h.e}px`), o.a.createElement(v, {
						autoplay: D,
						className: Object(l.a)(m.a, k.a.styledVideo, {
							[k.a.renderSmallMedia]: F
						}),
						height: F ? void 0 : _,
						isListing: w,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: I,
						onLoadStart: M,
						onLoadedData: R,
						onLoadedMetadata: A,
						onPause: B,
						onPlaying: z,
						onTimeUpdate: P,
						shouldLoad: b,
						shouldPause: y,
						showCentered: O,
						showFull: x,
						source: f,
						style: F ? void 0 : e,
						width: F ? void 0 : E
					})
				}
				return w ? H() : o.a.createElement("div", {
					className: Object(l.a)(k.a.container, j, {
						[k.a.centered]: O
					})
				}, o.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
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
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				overflowMenu: "_27e1BV0r3-wzYneMC7Io_V",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
			}
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				h = n.n(m);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, r, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									s && r(n, s), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(r.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(r.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", h.a);
			t.a = p(Object(a.a)(b))
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
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
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
				_ = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return i.a.createElement(g, h({}, r, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				y = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class v extends i.a.Component {
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
					return i.a.createElement(x, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(_, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(y, {
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
			t.a = v
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
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return F
			})), n.d(t, "r", (function() {
				return D
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				p = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				_ = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				x = c.a.strong("B", a.a),
				y = c.a.em("I", a.a),
				v = c.a.span("U", a.a),
				E = e => s.a.createElement("del", e),
				k = c.a.sub("Sub", a.a),
				C = c.a.sup("Sup", a.a),
				w = c.a.table("Table", a.a),
				j = c.a.tr("Tr", a.a),
				O = c.a.td("Tdl", a.a),
				S = c.a.td("Tdc", a.a),
				T = c.a.td("Tdr", a.a),
				F = c.a.th("Thl", a.a),
				D = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => s.a.createElement(i.b, e), "A", a.a)),
				I = c.a.wrapped(d.a, "A", a.a)
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
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				_ = n.n(f);
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", _.a),
				x = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return a.a.createElement(g, r)
				}),
				y = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				v = e => i()(e, y),
				E = e => e.findIndex(y),
				k = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: y,
						rtJsonElementProps: k,
						useExplicitTextColor: C,
						shouldBlur: w,
						onClickRevealSpoilerText: j,
						mediaProps: O
					} = e, S = r.document, T = [], F = e.mediaMetadata || null, D = E(S), L = v(S);
					if (w && !s && !o) return a.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, a.a.createElement("div", {
						className: _.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: _.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!d))));
					if (-1 !== D)
						for (let a = D; a <= L; a++) {
							const e = S[a];
							switch (e.e) {
								case h.k:
									T.push(b.c(e, k, a));
									break;
								case h.l:
									T.push(b.d(a));
									break;
								case h.b:
									T.push(b.a(e, F, k, a));
									break;
								case h.c:
									T.push(b.b(e, a));
									break;
								case h.p:
									T.push(b.f(e, F, k, a, j));
									break;
								case h.z:
									T.push(b.h(e, F, k, a, j));
									break;
								case h.u:
									T.push(b.g(e, F, k, a, j));
									break;
								case h.h:
									T.push(Object(p.a)(e, a));
									break;
								case h.m:
								case h.a:
								case h.D:
									T.push(...Object(p.b)(e, a, k, F, y, f, t, O))
							}
						}
					return C ? a.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, T) : a.a.createElement(x, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, T)
				};
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
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
						return k(t)
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
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return D
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/models/RichTextJson/index.ts");
			var g = e => i.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, i.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), i.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), i.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), i.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), i.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), i.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				x = n("./src/reddit/components/RichTextJson/elements.tsx"),
				y = n("./src/reddit/components/RichTextJson/media.m.less"),
				v = n.n(y),
				E = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/helpers/media/index.ts");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = /\/(\w+)\/asset\/(\w+)\//,
				j = E.a.wrapped(x.a, "A", v.a),
				O = E.a.wrapped(l.a, "ImageBox", v.a),
				S = E.a.wrapped(e => i.a.createElement("p", e), "Caption", v.a),
				T = E.a.div("Placeholder", v.a),
				F = E.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: c,
						...d
					} = e;
					const l = n === _.D ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(T, C({
						className: Object(o.a)(t, {
							[v.a.renderSmallMedia]: a,
							[v.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && i.a.createElement(h.t, {
						priority: h.c.Plain,
						className: v.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", v.a),
				D = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return i.a.createElement("div", {
						className: v.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, i.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				L = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === _.s ? s = n.s.u : n.e === _.r ? s = n.s.gif : n.e === _.t && (s = (e => {
						const t = w.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? i.a.createElement(j, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				I = (e, t, n, r, s, a, d, l) => {
					const h = _.E(r, e.id);
					if (s) return [L(e, t, h)];
					const f = [];
					return !h || h.e === _.s && null === h.s.x && null === h.s.y ? f.push(((e, t, n, r) => i.a.createElement(F, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : h.e === _.s ? f.push(((e, t, n, r, s) => {
						let {
							id: a,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = s || {};
						let h = c;
						return m && (h = Object(k.i)(240, 20, c, d)), i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n,
								[v.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: h.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: h.x
						}, i.a.createElement(O, {
							altText: r,
							originalSource: c.u,
							postId: a,
							source: h.u,
							height: h.y,
							width: h.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(h, t, !!e.c, d, l)) : h.e === _.r ? f.push(((e, t, n, r, s) => {
						let {
							id: a,
							ext: c,
							s: d
						} = e;
						if (Object(b.h)(a)) {
							const e = r.renderingObjectInfo,
								s = !!e && Object(p.b)(e),
								l = c || Object(b.g)(a);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[v.a.MediaWrapper]: !s,
									[v.a.CommentGifWrapper]: s,
									[v.a.mHasCaption]: n
								})
							}, i.a.createElement(j, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? i.a.createElement("video", {
								className: v.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: d.mp4
							})) : l), i.a.createElement(g, {
								className: v.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n,
								[v.a.hasSmallMedia]: s
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: a,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !s,
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: s
						})))
					})(h, t, !!e.c, n, null == l ? void 0 : l.renderSmallMedia)) : h.e === _.t && f.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, i.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: s,
							mpegDashSource: a,
							postId: r,
							isGif: m
						})))
					})(h, t, !!e.c, a)), e.c && f.push(((e, t) => i.a.createElement(S, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return D
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return z
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(p.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				_ = n.n(f);
			const g = 1e3,
				x = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, x)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.jb(t)
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
					t.e === m.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === m.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const i = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return s ? a.a.createElement("div", {
						className: _.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${i}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var E = Object(l.c)(v),
				k = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = n("./src/reddit/components/SubredditMention/index.tsx"),
				j = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				O = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				T = n("./src/reddit/helpers/richTextJson/index.ts"),
				F = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const D = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						i = [],
						o = r.length;
					for (let a = 0; a < o; a++) {
						const e = r[a];
						i.push(e.e === m.w ? e.t : z(e, t, a))
					}
					const d = c.x[s - 1];
					return a.a.createElement(d, {
						key: n
					}, i)
				},
				L = e => a.a.createElement(c.e, {
					key: e
				}),
				I = (e, t, n, r, s) => {
					const i = e.c;
					if (!i) return;
					const o = i.length,
						d = [];
					for (let a = 0; a < o; a++) d.push(P(i[a], t, n, a, s));
					return a.a.createElement(c.c, {
						key: r
					}, d)
				},
				B = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				N = (e, t, n, r, s) => {
					const i = e.c,
						o = [],
						d = i.length;
					for (let u = 0; u < d; u++) {
						const e = i[u].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: u
						}, e.map((e, r) => P(e, t, n, r, s))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: r
					}, o)
				},
				P = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return I(e, t, n, r, s);
						case m.c:
							return B(e, r);
						case m.k:
							return D(e, n, r);
						case m.l:
							return L(r);
						case m.p:
							return N(e, t, n, r, s);
						case m.u:
							return M(e, t, n, r, s);
						case m.z:
							return R(e, t, n, r, s)
					}
				},
				R = (e, t, n, r, s) => {
					const i = e.c,
						o = e.h,
						d = i.length,
						l = o.length,
						u = [],
						m = [],
						h = [];
					for (let c = 0; c < l; c++) {
						const e = o[c],
							{
								H: r,
								D: i
							} = W(e.a),
							{
								c: d = []
							} = e;
						u.push(a.a.createElement(r, {
							key: c
						}, A(d, t, n, s))), h[c] = i
					}
					for (let p = 0; p < d; p++) {
						const e = i[p],
							r = e.length,
							o = [];
						for (let i = 0; i < r; i++) {
							const r = h[i],
								{
									c = []
								} = e[i];
							o.push(a.a.createElement(r, {
								key: i
							}, A(c, t, n, s)))
						}
						m.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, u)), a.a.createElement("tbody", null, m))
				},
				M = (e, t, n, r, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const i = e.c[0];
					return i.e !== m.m && i.e !== m.a || !Object(T.h)(i.id) ? a.a.createElement(c.j, {
						key: r
					}, A(e.c, t, n, s)) : Object(k.b)(i, r, n, t)
				},
				A = (e, t, n, r) => {
					const s = [],
						i = e.length;
					for (let o = 0; o < i; o++) {
						const i = e[o];
						if (i.e === m.A) s.push(H(i, o));
						else if (i.e === m.x) s.push(a.a.createElement(C.a, {
							key: o,
							onClickReveal: r
						}, A(i.c, t, n, r)));
						else if (i.e === m.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.E(t, i.id);
								e && s.push(a.a.createElement(E, {
									key: o,
									node: i,
									media: e
								}))
							}
						} else s.push(z(i, n, o))
					}
					return s
				},
				z = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const r = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, i;
							const o = Object(F.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(S.b)(d) && (s = d.postId), d && Object(O.b)(d) && (i = d.id, s = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: i
							}, r);
						case m.y:
							return a.a.createElement(w.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.B:
						case m.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: s
					} = e, i = [];
					if (!n) return q(0, s, t);
					const o = Object(r.a)(s);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, r] = n[a], d = t + r, l = o[t], u = o[d] - l;
						l > c && i.push(q(0, s.substr(c, l - c), `between${a}`)), i.push(q(e, s.substr(l, u), a)), c = l + u
					}
					return c < s.length && i.push(q(0, s.substr(c), `remaining${a}`)), i
				},
				U = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				q = (e, t, n) => {
					let r = t;
					return r = i()(U, (t, r, s) => e & parseInt(s, 10) ? a.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				W = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
						default:
							return {
								H: c.r, D: c.p
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
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = i.a.wrapped(o.b, "SubredditIcon", d.a),
				u = i.a.wrapped(e => s.a.createElement(a.b, e), "S", d.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				_ = n("./src/reddit/selectors/subredditMention.ts");
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
			const x = Object(p.c)(g),
				y = Object(o.c)({
					isFeatureFlagEnabled: _.b,
					isUserInTreatment: _.e,
					userVariant: _.a
				}),
				v = Object(i.b)(y),
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return s.a.createElement(x, {
						subredditName: r,
						rtJsonElementProps: o
					});
					switch (i) {
						case b.Xf.SmIcon:
							return s.a.createElement(h, {
								subredditName: r,
								rtJsonElementProps: o
							});
						case b.Xf.SmIconHc:
							return s.a.createElement(h, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(x, {
								subredditName: r,
								rtJsonElementProps: o
							})
					}
				};
			t.b = v(E)
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(o.e)(a.e),
						n = Object(o.e)(a.a);
					return t || n ? i.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/Footer/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				x = n("./src/reddit/selectors/telemetry.ts");
			const y = "nsfw_dialog";
			var v = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, o.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), o.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), o.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				E = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				k = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				C = n.n(k);
			const w = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				j = e => {
					const t = Object(a.d)(),
						n = Object(b.b)(),
						r = Object(a.e)(E.g),
						u = Object(i.useCallback)(() => {
							r === E.a.Blurred && t(Object(h.k)({
								actionSource: h.a.NsfwBlockingModal
							}))
						}, [t, r]),
						p = (e => e ? o.a.createElement("div", {
							className: C.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), o.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : o.a.createElement("div", {
							className: C.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === E.a.Blurred);
					return Object(i.useEffect)(() => {
						Object(g.c)(r)
					}, [r]), o.a.createElement("div", {
						className: Object(l.a)(C.a.mainCta)
					}, o.a.createElement(v, null), p, o.a.createElement("div", {
						className: C.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: C.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: C.a.buttonContainer
					}, o.a.createElement(_.j, {
						className: Object(l.a)(C.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "click",
								noun: y,
								actionInfo: {
									...Object(x.d)(e)
								}
							}))()), u(), Object(g.b)(g.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(_.j, {
						className: C.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: y,
								actionInfo: {
									...Object(x.d)(e)
								}
							}))()), Object(g.b)(g.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				O = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return o.a.createElement("div", {
						className: C.a.qrCodeOuter
					}, o.a.createElement("div", {
						className: C.a.qrCodeInner
					}, o.a.createElement("img", {
						className: C.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), o.a.createElement("div", {
						className: C.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), o.a.createElement("div", {
						className: C.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), o.a.createElement("img", {
						className: C.a.sneakySnoo,
						src: t
					})))
				}),
				S = e => {
					const t = Object(b.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(x.o)(e),
							source: "xpromo",
							action: "view",
							noun: y,
							actionInfo: {
								...Object(x.d)(e)
							}
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(a.e)(E.h), s = Object(a.e)(E.i), i = Object(a.e)(E.g), c = i === E.a.Blurred ? p.a.White : i === E.a.NoPreview ? p.a.Grey : void 0;
					return o.a.createElement("div", {
						className: C.a.container
					}, o.a.createElement(j, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: Object(l.a)(C.a.footerWrapper, {
							[C.a.mIsModal]: i === E.a.Blurred
						})
					}, o.a.createElement(p.b, {
						textColor: c
					})), o.a.createElement(O, {
						qrCodeAsset: (() => r === f.Yc.Enabled || s === f.sb.BlurredPreview || s === f.sb.NoPreview ? w.d2x_nsfw_signup_blocking_de_v1 : w.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var h = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = n.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(p.a, {
					className: Object(d.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? i.a.createElement(_.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, w({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.t, {
					className: C.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				O = Object(c.c)({
					hideNSFWPref: v.F,
					nightmode: v.db
				}),
				S = Object(o.b)(O)(e => i.a.createElement("div", {
					className: Object(d.a)(C.a.communityItemContainer, {
						[C.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(x.a, {
					className: C.a.communityItemExpandCenter,
					widthRight: b.s
				}, i.a.createElement("div", {
					className: C.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: C.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(C.a.defaultCommunityIcon, {
						[C.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: C.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: C.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), i.a.createElement("div", {
					className: C.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: C.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: C.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(_.a, {
					className: Object(d.a)(C.a.communityCta, C.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: C.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(h, {
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
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: C.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === r.a.PROFILE ? Object(s.e)(e) : Object(s.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
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
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return O
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				_ = n("./src/reddit/featureFlags/index.ts"),
				g = n("./src/reddit/selectors/experiments/survey.ts"),
				x = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(h.u)({
					currentProfileName: h.i,
					isCommentPermalink: h.w,
					isCommentsPage: h.x,
					isFrontpage: h.A,
					isProfilePostListing: h.L,
					isTopicPage: h.R,
					pageLayer: e => e
				})
			}
			const C = k(),
				w = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: _.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(h.S)(e, t),
					loadMore: x.g,
					postsById: y.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(y.D)(e, n, r, s)
					}),
					subredditsById: v.eb,
					viewportDataLoaded: E.a,
					pageReferrer: h.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.e
				},
				j = Object(s.c)(w),
				O = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.y(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(d.N(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.O(t, r, s))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				S = e => Object(p.b)({
					...e
				}),
				T = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(b.k)(e, t, "post", s, i, o, void 0)
				},
				F = Object(r.b)(j, O, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: S,
					postClickEventFactory: T
				}));
			t.a = e => Object(m.c)(C(F(e)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, o = i;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(i.b)(t))) return Object(s.b)(t) ? o.SourceElement.Comment : Object(r.x)(n) ? o.SourceElement.PostDetail : Object(r.H)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return E
			}));
			var r, s, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: i.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				h = e => ({
					...u.o(e),
					source: s,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const s = Object(a.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[s]: n.id
						},
						d = Object(l.B)(e, {
							subredditName: r
						});
					return d ? {
						outbound: {
							...i,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {};
					const r = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.kb(e, r),
						...p(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...b(t, e)
				}),
				_ = e => t => ({
					...h(t),
					source: "global",
					action: i.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				x = (e, t) => n => ({
					...h(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				y = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("title", null, "Planet"), s.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
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
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "EmptyMessage", (function() {
				return Ae
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				h = n("./src/reddit/actions/multireddit/index.ts"),
				p = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/reddit/helpers/trackers/screenview.ts"),
				f = n("./src/reddit/components/ContentGate/index.tsx"),
				_ = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				x = n("./src/reddit/components/ListingPostList/index.tsx"),
				y = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				v = n("./src/lib/classNames/index.ts"),
				E = n("./src/reddit/components/Flair/index.tsx"),
				k = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/constants/modals.ts"),
				w = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				S = n("./src/reddit/models/Multireddit/index.ts"),
				T = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				F = n.n(T);
			const D = Object(c.b)(null, e => ({
					onEditClicked: () => e(Object(k.h)(C.a.MULTIREDDIT_EDIT))
				})),
				L = {
					[S.e.Public]: {
						icon: a.a.createElement(O.a, {
							className: Object(v.a)(F.a.icon, F.a.public)
						}),
						text: r.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[S.e.Hidden]: {
						icon: a.a.createElement(O.a, {
							className: Object(v.a)(F.a.icon, F.a.public)
						}),
						text: r.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[S.e.Private]: {
						icon: a.a.createElement(j.a, {
							className: Object(v.a)(F.a.icon, F.a.private)
						}),
						text: r.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var I = D(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, L[t.visibility].icon, L[t.visibility].text, a.a.createElement("button", {
						className: F.a.button,
						onClick: n
					}, a.a.createElement(w.a, {
						className: F.a.pencilIcon
					})))
				}),
				B = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				N = n("./src/reddit/components/RichTextJson/index.tsx"),
				P = n("./src/reddit/constants/postLayout.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				M = n("./src/reddit/controls/InternalLink/index.tsx"),
				A = n("./src/reddit/helpers/name/index.ts"),
				z = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/selectors/multireddit.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/actions/subscription/index.ts"),
				W = n("./src/reddit/components/MultiredditTopBar/Button/index.m.less"),
				V = n.n(W);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = a.a.memo(e => {
					let {
						className: t,
						onClick: n,
						children: r,
						hoverText: s,
						text: i,
						icon: o,
						...c
					} = e;
					return a.a.createElement("button", G({
						className: Object(v.a)(t, V.a.button, s ? V.a.withHover : null),
						onClick: n
					}, c), a.a.createElement("span", {
						className: V.a.icon
					}, o), i && a.a.createElement("span", {
						className: V.a.text
					}, i), s && a.a.createElement("span", {
						className: V.a.hoverText
					}, s), r)
				}),
				J = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Y = n("./src/reddit/icons/fonts/index.tsx");
			const X = Object(c.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(q.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(K.g)(t.multireddit.url)) : t.sendEvent(Object(K.d)(t.multireddit.url))
				}
			}));
			var Q = Object(J.c)(X(e => a.a.createElement(Z, {
					hoverText: e.multireddit.isFollowed ? r.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: a.a.createElement(Y.a, {
						name: e.multireddit.isFollowed ? "checkmark" : "add"
					}),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? r.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : r.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				$ = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ee = n("./src/reddit/components/OverflowMenu/index.tsx"),
				te = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ne = n("./src/reddit/selectors/activeModalId.ts"),
				re = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				se = n.n(re);
			const ie = Object(d.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ne.a)(e),
				showOwnerButtons: (e, t) => Object(H.c)(e, t.multireddit.url)
			});
			var oe = Object(c.b)(ie, (e, t) => ({
					deleteConfirmed: () => e(Object(h.deleteRequested)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(k.h)(C.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(k.h)(C.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(k.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(J.c)(e => {
					const {
						className: t,
						deleteConfirmed: n,
						isConfirmDeleteOpen: s,
						multireddit: i,
						onDuplicateClicked: o,
						onEdit: c,
						sendEvent: d,
						showOwnerButtons: l,
						toggleConfirmDelete: u
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(ee.b, {
						className: Object(v.a)(se.a.button, t),
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, l && a.a.createElement(te.b, {
						displayText: r.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: c
					}), a.a.createElement(te.b, {
						displayText: r.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: o
					}), l && a.a.createElement(te.b, {
						className: Object(v.a)(se.a.warning),
						displayText: r.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: u
					})), s && a.a.createElement($.a, {
						toggleModal: u,
						onConfirm: n,
						actionText: r.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: r.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: r.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: r.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							d(Object(K.a)(i.url))
						},
						withOverlay: !0
					}))
				})),
				ae = n("./node_modules/lodash/noop.js"),
				ce = n.n(ae),
				de = n("./src/config.ts"),
				le = n("./src/lib/copyToClipboard/index.ts"),
				ue = n("./src/reddit/actions/toaster.ts"),
				me = n("./src/reddit/actions/tooltip.ts"),
				he = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				pe = n("./src/reddit/controls/Dropdown/index.tsx"),
				be = n("./src/reddit/icons/fonts/Share/index.tsx"),
				fe = n("./src/reddit/models/Toast/index.ts"),
				_e = n("./src/reddit/selectors/tooltip.ts");
			const ge = "MULTIREDDIT_TOP_BAR_SHARE",
				xe = Object(he.a)(pe.a),
				ye = Object(d.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ne.a)(e),
					isDropdownOpen: Object(_e.b)(ge),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				ve = Object(c.b)(ye, (e, t) => ({
					copyLink: () => {
						if (Object(le.a)(de.a.redditUrl + t.multireddit.url)) {
							const t = Object(ue.e)(r.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), fe.b.SuccessCommunity);
							e(Object(ue.f)(t))
						} else {
							const t = Object(ue.e)(r.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), fe.b.Error);
							e(Object(ue.f)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(k.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(me.h)({
							tooltipId: ge
						})), t.sendEvent(Object(K.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(h.editRequested)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class Ee extends a.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === S.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(S.e.Public)
					}
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Z, {
						disabled: this.props.isUpdatePending,
						icon: a.a.createElement(be.a, null),
						id: ge,
						onClick: this.onShareButtonClick,
						text: r.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, a.a.createElement(xe, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: ge,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(te.b, {
						displayText: r.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && a.a.createElement($.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: r.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: r.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: a.a.createElement(a.a.Fragment, null, r.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), a.a.createElement("br", null), a.a.createElement("br", null), r.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: ce.a,
						withOverlay: !0
					}))
				}
			}
			var ke = Object(J.c)(ve(Ee)),
				Ce = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				we = n.n(Ce);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(d.c)({
				isLoggedIn: U.Q,
				layout: (e, t) => P.e[Object(R.S)(e, t)],
				userIsOwner: (e, t) => Object(H.c)(e, t.multireddit.url)
			}), Se = Object(c.b)(Oe), Te = Object(R.u)(), Fe = {};
			var De = Te(Se(e => a.a.createElement("div", {
					className: we.a.container
				}, a.a.createElement("div", {
					className: Object(v.a)(we.a.layoutContainer, e.layout === P.d.Card ? we.a.layoutCard : null)
				}, a.a.createElement("img", {
					className: we.a.icon,
					src: e.multireddit.icon
				}), a.a.createElement("div", {
					className: we.a.content
				}, a.a.createElement("div", {
					className: we.a.header
				}, a.a.createElement("h1", {
					className: we.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && a.a.createElement(E.b, {
					className: we.a.flair,
					flair: {
						type: z.f.Nsfw,
						text: "nsfw"
					}
				})), a.a.createElement("div", {
					className: we.a.meta
				}, e.multireddit.subredditCount && a.a.createElement(a.a.Fragment, null, je._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [je._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), a.a.createElement("span", null, " • ")), e.userIsOwner ? a.a.createElement(I, {
					multireddit: e.multireddit
				}) : a.a.createElement(a.a.Fragment, null, je._("Curated by {multiredditFeedAuthorLink}", [je._param("multiredditFeedAuthorLink", a.a.createElement(M.default, {
					className: we.a.usernameLink,
					to: `/${Object(A.e)(Object(S.i)(e.multireddit.url))}`
				}, Object(A.e)(Object(S.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), a.a.createElement("div", {
					className: we.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? a.a.createElement(N.b, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Fe
				}) : a.a.createElement(B.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), a.a.createElement("div", {
					className: we.a.actions
				}, !e.userIsOwner && e.isLoggedIn && a.a.createElement(Q, {
					multireddit: e.multireddit
				}), a.a.createElement(ke, {
					multireddit: e.multireddit
				}), e.isLoggedIn && a.a.createElement(oe, {
					multireddit: e.multireddit,
					className: we.a.overflowMenu
				})))))),
				Le = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Be = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ne = n("./src/reddit/models/ContentGate.ts"),
				Pe = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Re = n("./src/reddit/pages/Multireddit/index.m.less"),
				Me = n.n(Re);
			const Ae = e => a.a.createElement("div", {
					className: Me.a.emptyMessage
				}, a.a.createElement(Ie.a, {
					className: Me.a.planetIcon
				}), a.a.createElement("div", {
					className: Me.a.emptyMessageText
				}, e.containsSubreddits ? r.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : r.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				ze = Object(R.u)({
					currentMultireddit: R.d,
					pageLayer: e => e
				}),
				He = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || l.bb.HOT
				},
				Ue = (e, t) => {
					let {
						location: n
					} = t;
					return i()([...Object(u.a)(n.search)])
				},
				qe = (e, t) => {
					const n = Object(R.e)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: r
						} = e;
						return Object(S.h)(r || "me", n)
					}
				},
				We = Object(d.a)(He, Ue, qe, (e, t, n) => Object(m.a)(n, e, t)),
				Ve = Object(d.a)(Ue, e => {
					const t = p.C in e && e[p.C].toUpperCase();
					return "string" == typeof t && t in l.oc ? l.oc[t] : l.pc
				}),
				Ge = Object(d.c)({
					isNsfwBlurSubreddit: Pe.e,
					isAllNsfwPagesEnabled: Pe.f,
					listingKey: We,
					listingName: qe,
					multireddit: R.e,
					over18Prefs: U.kb,
					sort: He,
					timeSort: Ve
				});
			class Ze extends a.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => {
						var e;
						return a.a.createElement(Ae, {
							containsSubreddits: !!((null === (e = this.props.multireddit) || void 0 === e ? void 0 : e.subredditCount) && this.props.multireddit.subredditCount > 0)
						})
					}
				}
				render() {
					const {
						isNsfwBlurSubreddit: e,
						isAllNsfwPagesEnabled: t,
						listingKey: n,
						listingName: r,
						match: {
							params: {
								username: s
							}
						},
						multireddit: i,
						over18Prefs: o,
						sort: c,
						timeSort: d
					} = this.props;
					if (!i) return a.a.createElement(f.default, {
						contentGateType: Ne.a.CustomFeedDoesNotExist
					});
					if (i.isNSFW && !o) {
						if (t) return a.a.createElement(Le.a, {
							contentTitle: r
						});
						if (!e) return a.a.createElement(f.default, {
							contentGateType: Ne.a.NsfwCustomFeed
						})
					}
					return a.a.createElement(Be.a, {
						className: this.props.className,
						content: a.a.createElement(a.a.Fragment, null, i && a.a.createElement(_.a, {
							sort: c,
							baseUrl: s ? i.url.replace(/\/$/, "") : `/me/m/${i.name}`,
							timeSort: d
						}), a.a.createElement(g.a, null), a.a.createElement(x.a, {
							listingKey: n,
							listingName: r,
							listingViewed: (e, t) => Object(b.f)({
								key: n,
								sort: c,
								timerType: t,
								timerMillis: e,
								timeSort: d
							}),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: i ? a.a.createElement(a.a.Fragment, null, Object(S.f)(i) && a.a.createElement(De, {
							multireddit: i
						})) : null,
						fitPageToContent: !0,
						sidebar: i ? a.a.createElement(y.a, {
							className: Me.a.sidebar,
							listingKey: n,
							listingName: r,
							multireddit: i,
							multiUsername: s
						}) : null
					})
				}
			}
			const Je = ze(Object(c.b)(Ge, (e, t) => ({
				onLoadMorePosts: () => e(Object(h.moreOfMyMultiRequested)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Ze));
			t.default = e => a.a.createElement(Je, e)
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: i.Q,
						experimentName: r.vd
					});
					return !(!t || Object(r.xg)(t))
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.Q,
						experimentName: r.vd
					}) === r.Wd.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.X)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = h(e, t);
					if (!n) return u;
					const r = Object(o.bb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				h = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.X)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, r, s) => {
					const o = s.find(e => e <= t) || -1,
						a = s.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + n > t) && (!(t + n > a) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							o = s && Object(i.G)(e, {
								postId: r
							}) || null,
							a = s && Object(i.G)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				b = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let o = -1;
					const a = Object(i.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return b.forEach(t => {
						let n = o + t;
						if (!(n >= a.length)) {
							for (; n < a.length && !p(e, n, t, a, s);) n += 1;
							n < a.length && (c.push(n), o = n)
						}
					}), c
				}),
				_ = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.Rf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Xf.SmIcon || t === r.Xf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = Object(o.bb)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"d1355352c639"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Multireddit.fad76e62219486a1d934.js.map