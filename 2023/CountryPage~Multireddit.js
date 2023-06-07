// https://www.redditstatic.com/desktop2x/CountryPage~Multireddit.db47526d23740ec3540e.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Multireddit", "reddit-components-ContentGate"], {
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
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						_ = !i && !d && /macintosh/i.test(t),
						f = !o && !u && !m && !p && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !y && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
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
					} : h ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? s = {
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : d ? s = {
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
					} : p ? (s = {
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
					} : o ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : i ? (s = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && i ? (s[i] = e, s.ios = e, s.osname = "iOS") : _ ? (s.mac = e, s.osname = "macOS") : k ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var w = !s.windows && E.split(".")[0];
					return y || c || "ipad" == i || o && (3 == w || w >= 4 && !x) || s.silk ? s.tablet = e : (x || "iphone" == i || "ipod" == i || o || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
								l = s.entry,
								d = t && c && this._computeTargetAndRootIntersection(i, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: d
								});
							l ? t && c ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, c, d, u, m, p, h = a(n), b = l(n), _ = !1; !_;) {
								var f = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (_ = !0, f = r) : b != t.body && b != t.documentElement && "visible" != g.overflow && (f = a(b)), f && (s = f, i = h, o = void 0, c = void 0, d = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(s.top, i.top), c = Math.min(s.bottom, i.bottom), d = Math.max(s.left, i.left), u = Math.min(s.right, i.right), p = c - o, !(h = (m = u - d) >= 0 && p >= 0 && {
										top: o,
										bottom: c,
										left: d,
										right: u,
										width: m,
										height: p
									}))) break;
								b = l(b)
							}
							return h
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
						n = l(n)
					}
					return !1
				}

				function l(e) {
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
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(l), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function d(e, t) {
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
						}(n.validate) ? i(n.validate) ? r.validate = n.validate : d(t, n) : r.validate = function(e) {
							return function(t, n) {
								var r = t.slice(n);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(n.validate), void(i(n.normalize) ? r.normalize = n.normalize : n.normalize ? d(t, n) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(n) ? d(t, n): c.push(t)
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

			function p(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, r, s, i, o, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var r = t ? e.slice(t) : e; this.test(r);) n.push(p(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
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
					l = arguments.length < 3;
				return c(e, i(t, 4), n, l, s)
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
					l = c(e, a);
				t = s(t), e -= a;
				for (var d = r(l, t); ++n < e;) t(n);
				return d
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
					var l = i[c];
					if (!a(l)) return !1;
					var d = e[l],
						u = t[l];
					if (!1 === (s = n ? n.call(r, d, u, l) : void 0) || void 0 === s && d !== u) return !1
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
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/contentGate.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/selectors/userPrefs.ts");
			const d = 3e4;
			let u;

			function m(e) {
				return t => {
					const n = Object(i.f)().getState(),
						m = Object(i.d)(),
						p = Object(l.a)(n),
						h = Object(c.S)(n),
						b = Object(a.c)(n),
						_ = () => {
							Object(a.b)() && (m(o.o({
								over18: !1
							})), u && window.clearInterval(u))
						};
					return Object(r.useEffect)(() => (!h && b.isNewDesignVariant && p && (u = window.setInterval(_, d), _()), () => window.clearInterval(u)), [b.isNewDesignVariant, _, h, p]), s.a.createElement(e, t)
				}
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return E
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				i = n("./node_modules/tlds/index.js"),
				o = n.n(i),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				l = n.n(c);
			const d = e => l()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				_ = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				f = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [..._.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				E = e => {
					const t = p.match(e);
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var l, d = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(l || (l = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/featureFlags/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/user.ts");
			const f = [],
				g = (Object(m.a)((e, t) => {
					const n = g(e, t);
					if (!n) return f;
					const r = Object(b.bb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : f
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(b.X)(e, {
						subredditId: n
					}) : null
				}),
				v = (e, t, n, r, s) => {
					const i = s.find(e => e <= t) || -1,
						o = s.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + n > t) && (!(t + n > o) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							i = s && Object(h.F)(e, {
								postId: r
							}) || null,
							o = s && Object(h.F)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, r)))
				},
				y = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: r
				} = t;
				const s = n.slice().sort();
				let i = -1;
				const o = Object(h.y)(e, {
						listingKey: r.listingKey
					}),
					a = [];
				return y.forEach(t => {
					let n = i + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !v(e, n, t, o, s);) n += 1;
						n < o.length && (a.push(n), i = n)
					}
				}), a
			});
			var x = n("./src/reddit/selectors/platform.ts");
			const k = Object(s.a)(o.f),
				E = Object(s.a)(o.d),
				w = Object(s.a)(o.g),
				C = Object(s.a)(o.c),
				j = Object(s.a)(o.e),
				O = (Object(s.a)(o.i), Object(s.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						l = (e => {
							const t = Object(_.R)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								r = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && r
						})(i),
						m = Object(_.R)(i);
					if (o || !l) return;
					e(w());
					let h = !1;
					try {
						const t = m ? r.LoggedInGeo : r.LoggedOutGeo,
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
							if (F(t)) {
								if (D(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), h = !0
								} else if (S(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: i
										} = n.focusRecommendations[0],
										o = [r, s],
										a = Object(u.d)(o),
										c = Object(d.b)(o),
										l = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: l,
											category: i,
											lastLoadedEnv: "client"
										};
									e(k(m)), h = !0
								}
							} else h = !1
						}
					} catch (b) {
						h = !1
					}
					h || e(E({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				F = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				D = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !D(e) && r === l.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				T = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === a || "client" === a) {
						const n = null === (s = null === (r = Object(x.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(_.S)(o);
						return Object(i.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(j({
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
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
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
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				y = n("./node_modules/lodash/flatMap.js"),
				x = n.n(y),
				k = n("./src/lib/linkMatchers/index.ts"),
				E = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(C);
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
					return e.parseMdLinks && (t = x()(t, j)), e.parseRegularLinks && (t = x()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return i.a.createElement(w.b, {
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
				F = n("./src/reddit/constants/parameters.ts"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => i.a.createElement(T.a, L({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				z = n("./src/reddit/selectors/user.ts");
			var A = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(R);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = d.a.wrapped(I, "PrivateKey", M.a), H = d.a.div("ButtonsContainer", M.a), W = d.a.div("Container", M.a), Z = d.a.div("ContainerExp", M.a), V = d.a.div("Description", M.a), G = d.a.div("PrivateSubredditDetails", M.a), K = d.a.div("PrivateSubredditDescription", M.a), Q = d.a.h3("PrivateSubredditName", M.a), X = d.a.a("Link", M.a), J = d.a.wrapped(S.n, "LinkRouterButton", M.a), Y = d.a.wrapped(S.m, "LinkButton", M.a), $ = d.a.wrapped(S.p, "SecondaryLinkButton", M.a), ee = d.a.wrapped(J, "GoHomeLinkButton", M.a), te = d.a.wrapped(b.a, "CreateCommunityButton", M.a), ne = d.a.img("Image", M.a), re = d.a.img("ImagePlaceholder", M.a), se = d.a.wrapped(J, "LeftLinkRouterButton", M.a), ie = d.a.wrapped(Y, "LeftLinkButton", M.a), oe = d.a.wrapped($, "SecondaryLeftLinkButton", M.a), ae = d.a.h3("Title", M.a), ce = d.a.div("PageBody", M.a), le = d.a.div("InterstitialMessageWrapper", M.a), de = d.a.div("QuarantineLearnMore", M.a), ue = Object(l.c)({
				isLoggedIn: z.R,
				origin: A.l,
				user: z.m,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(z.S)(e)) return !1;
					const t = Object(P.d)(e);
					if (!t) return !1;
					const n = Object(z.h)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * N.E;
					return r > Date.now() - s
				})(e),
				isSeo: A.h
			}), me = Object(D.v)(), pe = Object(o.b)(ue, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					continueToGatedSubreddit: a,
					isLoggedIn: c,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: p,
					location: b,
					origin: _,
					pageLayer: y,
					quarantineRequiresEmail: x,
					quarantineMessage: k,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: D,
					setNSFWPreference: S,
					subredditDescription: T,
					subredditName: L,
					user: I
				} = e, N = async () => {
					if (c ? await S() : await Object(m.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(F.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case B.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ae, null, q._("r/{community name} is a Reddit Premium community", [q._param("community name", L)], {
							hk: "2lyDwB"
						})), i.a.createElement(V, null, q._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(H, null, I ? i.a.createElement(oe, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, q._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ie, {
							href: Object(u.a)(b, _),
							redditStyle: !0
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), I ? i.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement($, {
							href: Object(u.a)(b, _),
							redditStyle: !0
						}, q._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ae, null, s === B.a.Nsfw ? q._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : q._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(V, null, q._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(H, null, i.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, q._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement($, {
							onClick: N,
							redditStyle: !0
						}, q._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(ae, null, "r/", L, " ", q._("is a private community", null, {
							hk: "7zZmq"
						})), T && T.length && i.a.createElement(G, null, i.a.createElement(Q, null, "r/", L), i.a.createElement(K, null, i.a.createElement("div", null, T))), i.a.createElement(V, null, q._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", q._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), q._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(H, null, I ? i.a.createElement(i.a.Fragment, null, !l && i.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: M.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(oe, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, q._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(oe, {
							href: Object(u.a)(b, _),
							redditStyle: !0
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, q._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && i.a.createElement(v.a, {
							subredditName: L
						}));
					case B.a.QuarantinedSubreddit:
						const c = I && I.hasVerifiedEmail;
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), i.a.createElement(ae, null, q._("r/{subredditName} is quarantined", [q._param("subredditName", L)], {
							hk: "2pxhFx"
						})), i.a.createElement(V, null, i.a.createElement(le, null, w ? i.a.createElement(g.b, {
							content: w,
							rtJsonElementProps: {
								pageLayer: y
							}
						}) : E ? i.a.createElement(f.a, {
							html: E
						}) : k || q._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !x || c ? q._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : I ? q._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : q._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), i.a.createElement(H, null, ((e, t, n) => {
							const s = e && e.hasVerifiedEmail;
							return !n || s ? i.a.createElement(H, null, i.a.createElement(se, {
								to: "/",
								redditStyle: !0
							}, q._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement($, {
								onClick: t,
								redditStyle: !0
							}, q._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : i.a.createElement(H, null, i.a.createElement(se, {
								to: "/",
								redditStyle: !0
							}, q._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement($, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, q._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(I, o, x)), i.a.createElement(de, null, q._("Learn more about {=quarantined communities}.", [q._param("=quarantined communities", i.a.createElement(X, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, q._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case B.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ae, null, q._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(V, null, i.a.createElement(le, null, D ? i.a.createElement(g.b, {
							content: D,
							rtJsonElementProps: {
								pageLayer: y
							}
						}) : j ? i.a.createElement(f.a, {
							html: j
						}) : C), q._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(H, null, i.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, q._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement($, {
							onClick: a,
							redditStyle: !0
						}, q._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case B.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ae, null, n), (e => i.a.createElement(V, null, e ? i.a.createElement(O, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : q._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(H, null, i.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ae, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(H, null, i.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(re, null), i.a.createElement(ae, null, q._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(V, null, q._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(H, null, I && i.a.createElement(te, {
							eventSource: "content_gate"
						}), i.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return q._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return q._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, q._("This account has been {=suspended} .", [q._param("=suspended", i.a.createElement(X, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, q._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ae, null, q._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(V, null, q._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(H, null, i.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ae, null, q._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(H, null, i.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ae, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(H, null, i.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, q._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = me(pe(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? Z : W;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(ce, null, he(e))), i.a.createElement(_.b, null))
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
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(_),
				g = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				y = g.a.wrapped(d.c, "StyledTooltip", f.a),
				x = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.sb)(e),
					userIsSuspended: b.Z
				});
			t.a = Object(o.b)(x, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
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
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				l = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", l.a), m = a.a.a("UserAgreementLink", l.a), p = a.a.a("PrivacyLink", l.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(o.a)(l.a.FooterContainer, {
					[l.a.mIsGrey]: e.textColor === h.Grey,
					[l.a.mIsWhite]: e.textColor === h.White
				})
			}, s.a.createElement(u, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} Reddit, Inc. © {year}. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "1Dc18v"
			}))), d._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1Ubjrd"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "yxLlI"
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
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
				l = n("./src/reddit/actions/urlRequested.ts"),
				d = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const h = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(l.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(d.a)();
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
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
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
				l = e => {
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
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = n("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				y = n("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				x = n("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				k = n("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				E = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				w = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				C = n("./src/reddit/actions/contentGate.ts"),
				j = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				O = n.n(j);
			const F = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				D = () => s.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				S = () => s.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				T = e => {
					const t = Object(a.d)(),
						n = Object(b.b)(),
						r = Object(a.e)(E.g),
						d = Object(i.useCallback)(() => {
							r === E.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						u = (e => e ? o.a.createElement("div", {
							className: O.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), o.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : o.a.createElement("div", {
							className: O.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === E.a.Blurred);
					return Object(i.useEffect)(() => {
						Object(g.d)(r)
					}, [r]), o.a.createElement("div", {
						className: O.a.mainCta
					}, o.a.createElement(k.b, null), u, o.a.createElement("div", {
						className: O.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: O.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: O.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: O.a.logIn,
						onClick: () => {
							n(Object(x.a)()), d(), Object(g.c)(g.a.Login), t(Object(m.openLoginModal)())
						}
					}, D()), o.a.createElement(f.j, {
						className: O.a.cancel,
						onClick: () => {
							Object(l.b)(), n(Object(x.b)()), Object(g.c)(g.a.Dismiss), t(Object(c.b)("/"))
						}
					}, S())))
				},
				L = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return o.a.createElement("div", {
						className: O.a.qrCodeOuter
					}, o.a.createElement("div", {
						className: O.a.qrCodeInner
					}, o.a.createElement("img", {
						className: O.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), o.a.createElement("div", {
						className: O.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), o.a.createElement("div", {
						className: O.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), o.a.createElement("img", {
						className: O.a.sneakySnoo,
						src: t
					})))
				}),
				I = e => {
					const t = Object(b.b)(),
						{
							contentTitle: n
						} = e,
						r = Object(a.e)(E.i),
						s = Object(a.e)(E.j),
						i = Object(a.e)(E.g),
						c = Object(a.e)(w.c);
					o.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(y.d)()) : t(Object(x.c)())
					}, [c, t]);
					const l = i === E.a.Blurred ? h.a.White : i === E.a.NoPreview ? h.a.Grey : void 0;
					return o.a.createElement("div", {
						className: O.a.container
					}, c.isNewDesignVariant ? o.a.createElement(B, {
						contentTitle: n
					}) : o.a.createElement(T, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: Object(d.a)(O.a.footerWrapper, {
							[O.a.mIsModal]: i === E.a.Blurred
						})
					}, o.a.createElement(h.b, {
						textColor: l
					})), o.a.createElement(L, {
						qrCodeAsset: (() => r === _.jd.Enabled || s === _.kb.BlurredPreview || s === _.kb.NoPreview ? F.d2x_nsfw_signup_blocking_de_v1 : F.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				B = e => {
					const t = Object(a.d)(),
						n = Object(b.b)(),
						r = Object(a.e)(E.h);
					return Object(i.useEffect)(() => {
						Object(v.c)(r)
					}, [r]), o.a.createElement("div", {
						className: Object(d.a)(O.a.mainCta, {
							[O.a.skippable_buttons]: r === _.lb.SkippableButtons,
							[O.a.skippable_text]: r === _.lb.SkippableText
						})
					}, o.a.createElement("div", {
						className: O.a.contentDescription
					}, o.a.createElement(k.b, {
						fill: k.a.BLACK
					}), o.a.createElement("span", {
						className: O.a.cta
					}, e.contentTitle), o.a.createElement("span", {
						className: Object(d.a)(O.a.warning, O.a.warning__bypassable)
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), o.a.createElement("div", {
						className: O.a.cta
					}, (() => s.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), o.a.createElement("div", {
						className: O.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: O.a.logIn,
						onClick: () => {
							n(Object(y.a)()), Object(v.b)(v.a.Login), t(Object(m.openLoginModal)())
						}
					}, D()), r === _.lb.SkippableButtons && o.a.createElement("div", {
						className: O.a.divider
					}, o.a.createElement("div", {
						className: O.a.dividerLine
					}), o.a.createElement("div", {
						className: O.a.dividerText
					}, (() => s.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), o.a.createElement("div", {
						className: O.a.dividerLine
					})), o.a.createElement(f.j, {
						className: O.a.continue,
						onClick: async () => {
							n(Object(y.b)()), Object(v.b)(v.a.Continue), Object(C.q)(), Object(w.d)(), window.location.reload()
						}
					}, (() => s.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), o.a.createElement(f.j, {
						className: Object(d.a)(O.a.continue, O.a.dismiss, {
							[O.a.no_border]: r === _.lb.SkippableText
						}),
						onClick: () => {
							n(Object(y.c)()), Object(v.b)(v.a.Dismiss), t(Object(c.b)("/"))
						}
					}, r === _.lb.SkippableText ? (() => s.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : S())))
				}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return F
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(h.a, {
					className: Object(l.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(F, C({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(_.t, {
					className: w.a.bottomButton,
					kind: _.b.Button,
					priority: _.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				O = Object(c.c)({
					hideNSFWPref: x.H,
					nightmode: x.fb
				}),
				F = Object(o.b)(O)(e => i.a.createElement("div", {
					className: Object(l.a)(w.a.communityItemContainer, {
						[w.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(v.a, {
					className: w.a.communityItemExpandCenter,
					widthRight: b.s
				}, i.a.createElement("div", {
					className: w.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: w.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: w.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: w.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), i.a.createElement("div", {
					className: w.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: w.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(d.c, {
					className: w.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(l.a)(w.a.communityCta, w.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(_.t, {
					className: w.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
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
					className: w.a.communityDescription
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
				return w
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "b", (function() {
				return F
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				l = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				_ = n("./src/reddit/components/PostList/Placeholder.tsx"),
				f = n("./src/reddit/featureFlags/index.ts"),
				g = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/tracking.ts"),
				E = n("./src/reddit/selectors/user.ts");

			function w() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const C = w(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: y.S,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(y.C)(e, n, r, s)
					}),
					subredditsById: x.eb,
					viewportDataLoaded: k.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => _.a,
					isNpsScrollSurveyEnabled: g.e,
					isLoggedIn: E.S
				},
				O = Object(s.c)(j),
				F = e => ({
					onBottomViewed: (t, n) => e(d.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(l.K(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(l.y(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(l.M(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(l.N(t, r, s))
					},
					showModalOnScroll: () => e(l.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				D = e => Object(h.b)({
					...e
				}),
				S = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(b.n)(e, t, "post", s, i, o, void 0)
				},
				T = Object(r.b)(O, F, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: D,
					postClickEventFactory: S
				}));
			t.a = e => Object(m.c)(C(T(e)))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const r = "comment",
				s = "comment-submission-form-markdown",
				i = "comment-submission-form-richtext",
				o = "comments-page-link-num-comments",
				a = "language-prompt-close",
				c = "post-content"
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
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/sample/index.ts"),
				o = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				a = n("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(r || (r = {}));
			const c = e => {
					Object(o.b)() || Object(a.b)(s.o.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!Object(o.b)() && e && Object(i.b)(10) && Object(a.b)(s.o.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: r.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog_bypassable",
				i = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "login"
					}
				}),
				a = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "back"
					}
				}),
				c = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog",
				i = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				a = () => e => ({
					...Object(r.o)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
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
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				i = n.n(s);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(r || (r = {}));
			t.b = e => i.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, i.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || r.DEFAULT
			}), i.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || r.DEFAULT
			}), i.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || r.DEFAULT
			}))
		},
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
				return qe
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/multireddit/index.ts"),
				h = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/reddit/helpers/trackers/screenview.ts"),
				_ = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				v = n("./src/reddit/components/ListingPostList/index.tsx"),
				y = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				x = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/Flair/index.tsx"),
				E = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				F = n("./src/reddit/models/Multireddit/index.ts"),
				D = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				S = n.n(D);
			const T = Object(c.b)(null, e => ({
					onEditClicked: () => e(Object(E.h)(w.a.MULTIREDDIT_EDIT))
				})),
				L = {
					[F.e.Public]: {
						icon: a.a.createElement(O.a, {
							className: Object(x.a)(S.a.icon, S.a.public)
						}),
						text: r.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[F.e.Hidden]: {
						icon: a.a.createElement(O.a, {
							className: Object(x.a)(S.a.icon, S.a.public)
						}),
						text: r.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[F.e.Private]: {
						icon: a.a.createElement(j.a, {
							className: Object(x.a)(S.a.icon, S.a.private)
						}),
						text: r.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var I = T(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, L[t.visibility].icon, L[t.visibility].text, a.a.createElement("button", {
						className: S.a.button,
						onClick: n
					}, a.a.createElement(C.a, {
						className: S.a.pencilIcon
					})))
				}),
				B = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				N = n("./src/reddit/components/RichTextJson/index.tsx"),
				P = n("./src/reddit/constants/postLayout.ts"),
				z = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/controls/InternalLink/index.tsx"),
				R = n("./src/reddit/helpers/name/index.ts"),
				M = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/selectors/multireddit.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/actions/subscription/index.ts"),
				W = n("./src/reddit/components/MultiredditTopBar/Button/index.m.less"),
				Z = n.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var G = a.a.memo(e => {
					let {
						className: t,
						onClick: n,
						children: r,
						hoverText: s,
						text: i,
						icon: o,
						...c
					} = e;
					return a.a.createElement("button", V({
						className: Object(x.a)(t, Z.a.button, s ? Z.a.withHover : null),
						onClick: n
					}, c), a.a.createElement("span", {
						className: Z.a.icon
					}, o), i && a.a.createElement("span", {
						className: Z.a.text
					}, i), s && a.a.createElement("span", {
						className: Z.a.hoverText
					}, s), r)
				}),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx");
			const J = Object(c.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(H.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(Q.g)(t.multireddit.url)) : t.sendEvent(Object(Q.d)(t.multireddit.url))
				}
			}));
			var Y = Object(K.c)(J(e => a.a.createElement(G, {
					hoverText: e.multireddit.isFollowed ? r.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: a.a.createElement(X.a, {
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
			const ie = Object(l.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ne.a)(e),
				showOwnerButtons: (e, t) => Object(q.c)(e, t.multireddit.url)
			});
			var oe = Object(c.b)(ie, (e, t) => ({
					deleteConfirmed: () => e(Object(p.deleteRequested)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(E.h)(w.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(E.h)(w.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(E.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(K.c)(e => {
					const {
						className: t,
						deleteConfirmed: n,
						isConfirmDeleteOpen: s,
						multireddit: i,
						onDuplicateClicked: o,
						onEdit: c,
						sendEvent: l,
						showOwnerButtons: d,
						toggleConfirmDelete: u
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(ee.b, {
						className: Object(x.a)(se.a.button, t),
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, d && a.a.createElement(te.b, {
						displayText: r.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: c
					}), a.a.createElement(te.b, {
						displayText: r.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: o
					}), d && a.a.createElement(te.b, {
						className: Object(x.a)(se.a.warning),
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
							l(Object(Q.a)(i.url))
						},
						withOverlay: !0
					}))
				})),
				ae = n("./node_modules/lodash/noop.js"),
				ce = n.n(ae),
				le = n("./src/config.ts"),
				de = n("./src/lib/copyToClipboard/index.ts"),
				ue = n("./src/reddit/actions/toaster.ts"),
				me = n("./src/reddit/actions/tooltip.ts"),
				pe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				he = n("./src/reddit/controls/Dropdown/index.tsx"),
				be = n("./src/reddit/icons/fonts/Share/index.tsx"),
				_e = n("./src/reddit/models/Toast/index.ts"),
				fe = n("./src/reddit/selectors/tooltip.ts");
			const ge = "MULTIREDDIT_TOP_BAR_SHARE",
				ve = Object(pe.a)(he.a),
				ye = Object(l.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ne.a)(e),
					isDropdownOpen: Object(fe.b)(ge),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				xe = Object(c.b)(ye, (e, t) => ({
					copyLink: () => {
						if (Object(de.a)(le.a.redditUrl + t.multireddit.url)) {
							const t = Object(ue.e)(r.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), _e.b.SuccessCommunity);
							e(Object(ue.f)(t))
						} else {
							const t = Object(ue.e)(r.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), _e.b.Error);
							e(Object(ue.f)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(E.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(me.h)({
							tooltipId: ge
						})), t.sendEvent(Object(Q.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(p.editRequested)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class ke extends a.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === F.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(F.e.Public)
					}
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(G, {
						disabled: this.props.isUpdatePending,
						icon: a.a.createElement(be.a, null),
						id: ge,
						onClick: this.onShareButtonClick,
						text: r.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, a.a.createElement(ve, {
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
			var Ee = Object(K.c)(xe(ke)),
				we = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Ce = n.n(we);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(l.c)({
				isLoggedIn: U.S,
				layout: (e, t) => P.e[Object(z.U)(e, t)],
				userIsOwner: (e, t) => Object(q.c)(e, t.multireddit.url)
			}), Fe = Object(c.b)(Oe), De = Object(z.v)(), Se = {};
			var Te = De(Fe(e => a.a.createElement("div", {
					className: Ce.a.container
				}, a.a.createElement("div", {
					className: Object(x.a)(Ce.a.layoutContainer, e.layout === P.d.Card ? Ce.a.layoutCard : null)
				}, a.a.createElement("img", {
					className: Ce.a.icon,
					src: e.multireddit.icon
				}), a.a.createElement("div", {
					className: Ce.a.content
				}, a.a.createElement("div", {
					className: Ce.a.header
				}, a.a.createElement("h1", {
					className: Ce.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && a.a.createElement(k.c, {
					className: Ce.a.flair,
					flair: {
						type: M.f.Nsfw,
						text: "nsfw"
					}
				})), a.a.createElement("div", {
					className: Ce.a.meta
				}, e.multireddit.subredditCount && a.a.createElement(a.a.Fragment, null, je._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [je._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), a.a.createElement("span", null, " • ")), e.userIsOwner ? a.a.createElement(I, {
					multireddit: e.multireddit
				}) : a.a.createElement(a.a.Fragment, null, je._("Curated by {multiredditFeedAuthorLink}", [je._param("multiredditFeedAuthorLink", a.a.createElement(A.default, {
					className: Ce.a.usernameLink,
					to: `/${Object(R.e)(Object(F.i)(e.multireddit.url))}`
				}, Object(R.e)(Object(F.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), a.a.createElement("div", {
					className: Ce.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? a.a.createElement(N.b, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Se
				}) : a.a.createElement(B.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), a.a.createElement("div", {
					className: Ce.a.actions
				}, !e.userIsOwner && e.isLoggedIn && a.a.createElement(Y, {
					multireddit: e.multireddit
				}), a.a.createElement(Ee, {
					multireddit: e.multireddit
				}), e.isLoggedIn && a.a.createElement(oe, {
					multireddit: e.multireddit,
					className: Ce.a.overflowMenu
				})))))),
				Le = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Be = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ne = n("./src/reddit/models/ContentGate.ts"),
				Pe = n("./src/higherOrderComponents/withLSWatcher.tsx"),
				ze = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ae = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Re = n("./src/reddit/pages/Multireddit/index.m.less"),
				Me = n.n(Re);
			const qe = e => a.a.createElement("div", {
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
				Ue = Object(z.v)({
					currentMultireddit: z.d,
					pageLayer: e => e
				}),
				He = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || d.cb.HOT
				},
				We = (e, t) => {
					let {
						location: n
					} = t;
					return i()([...Object(u.a)(n.search)])
				},
				Ze = (e, t) => {
					const n = Object(z.e)(e, {
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
						return Object(F.h)(r || "me", n)
					}
				},
				Ve = Object(l.a)(He, We, Ze, (e, t, n) => Object(m.a)(n, e, t)),
				Ge = Object(l.a)(We, e => {
					const t = h.H in e && e[h.H].toUpperCase();
					return "string" == typeof t && t in d.oc ? d.oc[t] : d.pc
				}),
				Ke = Object(l.c)({
					isNsfwBlurSubreddit: ze.e,
					isAllNsfwPagesEnabled: ze.f,
					listingKey: Ve,
					listingName: Ze,
					multireddit: z.e,
					over18Prefs: U.mb,
					showNewDesignBlocking: Ae.a,
					sort: He,
					timeSort: Ge
				});
			class Qe extends a.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => {
						var e;
						return a.a.createElement(qe, {
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
						timeSort: l,
						showNewDesignBlocking: d
					} = this.props;
					if (!i) return a.a.createElement(_.default, {
						contentGateType: Ne.a.CustomFeedDoesNotExist
					});
					if (i.isNSFW && !o) {
						if (t && d) return a.a.createElement(Le.a, {
							contentTitle: r
						});
						if (!e) return a.a.createElement(_.default, {
							contentGateType: Ne.a.NsfwCustomFeed
						})
					}
					return a.a.createElement(Be.a, {
						className: this.props.className,
						content: a.a.createElement(a.a.Fragment, null, i && a.a.createElement(f.a, {
							sort: c,
							baseUrl: s ? i.url.replace(/\/$/, "") : `/me/m/${i.name}`,
							timeSort: l
						}), a.a.createElement(g.a, null), a.a.createElement(v.a, {
							listingKey: n,
							listingName: r,
							listingViewed: (e, t) => Object(b.e)({
								key: n,
								sort: c,
								timerType: t,
								timerMillis: e,
								timeSort: l
							}),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: i ? a.a.createElement(a.a.Fragment, null, Object(F.f)(i) && a.a.createElement(Te, {
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
			const Xe = Ue(Object(c.b)(Ke, (e, t) => ({
				onLoadMorePosts: () => e(Object(p.moreOfMyMultiRequested)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Qe));
			t.default = Object(Pe.a)(e => a.a.createElement(Xe, e))
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
						experimentEligibilitySelector: i.S,
						experimentName: r.Cd
					});
					return !(!t || Object(r.yg)(t))
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.S,
						experimentName: r.Cd
					}) === r.Xd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/localStorage.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts"),
				l = n("./node_modules/reselect/es/index.js");
			const d = 30 * r.qb,
				u = () => {
					localStorage.setItem(o.b.XpromoConsolidation, (new Date).toString())
				},
				m = () => {
					if (!Object(s.a)()) return !1;
					const e = localStorage.getItem(o.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(o.b.XpromoConsolidation), !0) : Date.now() > t + d
				},
				p = (e, t) => t === a.a.NoPreview && (e === i.lb.SkippableButtons || e === i.lb.SkippableText),
				h = (e, t) => t === a.a.NoPreview && e === i.lb.NoUpsell,
				b = Object(l.a)(a.h, a.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === a.a.NoPreview && !p(e, t) && !h(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && p(e, t),
						isOldDesignVariant: !(!e || !t) && h(e, t),
						variant: e
					}
				}),
				_ = Object(l.a)(b, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Multireddit.db47526d23740ec3540e.js.map