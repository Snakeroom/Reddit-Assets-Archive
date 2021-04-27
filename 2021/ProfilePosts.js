// https://www.redditstatic.com/desktop2x/ProfilePosts.d7a441505d48fe9b4b0f.js
// Retrieved at 4/27/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts", "reddit-components-ContentGate"], {
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
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !o && !l && /macintosh/i.test(t),
						g = !i && !u && !m && !p && /linux/i.test(t),
						_ = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !y && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
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
					}, _ ? (r.msedge = e, r.version = _) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: _
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : u ? r = {
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
					} : m ? r = {
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
					}, x && (r.version = x)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, x && (r.version = x)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && x && (r.version = x)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var k = !r.windows && E.split(".")[0];
					return y || d || "ipad" == o || i && (3 == k || k >= 4 && !v) || r.silk ? r.tablet = e : (v || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function o(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, r) {
					var i = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var o = r.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, n),
								u = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, o, i, d, l, u, m, p, h = a(n), b = c(n), f = !1; !f;) {
								var g = null,
									_ = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == _.display) return;
								if (b == this.root || b == t ? (f = !0, g = s) : b != t.body && b != t.documentElement && "visible" != _.overflow && (g = a(b)), g && (r = g, o = h, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(r.top, o.top), d = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), p = d - i, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: u,
										width: m,
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
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== s)
							for (var r = 0; r < this.thresholds.length; r++) {
								var o = this.thresholds[r];
								if (o == n || o == s || o < n != o < s) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = s
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
						r = s.width * s.height;
					this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var n, s, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, s) {
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
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function s(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function o(e) {
				return "[object Function]" === r(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
					"http:": {
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(s) ? s.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(s) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : s.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(s) ? s.match(n.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					s = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || s.push(c), s.push(t.src_xn), t.src_tlds = s.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var n = e.__schemas__[t];
					if (null !== n) {
						var s = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = s, "[object Object]" === r(n)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(n.validate) ? o(n.validate) ? s.validate = n.validate : l(t, n) : s.validate = function(e) {
							return function(t, n) {
								var s = t.slice(n);
								return e.test(s) ? s.match(e)[0].length : 0
							}
						}(n.validate), void(o(n.normalize) ? s.normalize = n.normalize : n.normalize ? l(t, n) : s.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(n) ? l(t, n): d.push(t)
					}
				})), d.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var n = e.__index__,
					s = e.__last_index__,
					r = e.__text_cache__.slice(n, s);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = s + t, this.raw = r, this.text = r, this.url = r
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
				}), !1) && (t = e, e = {})), this.__opts__ = s({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = s({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = s(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, s, r, o, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = n.index + n[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (s = e.match(this.re.email_fuzzy)) && (o = s.index + s[1].length, i = s.index + s[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var s = t ? e.slice(t) : e; this.test(s);) n.push(p(this, t)), s = s.slice(this.__last_index__), t += this.__last_index__;
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
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseSlice.js"),
				r = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : r(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: i
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
		"./src/graphql/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"82081dd6c286"}')
		},
		"./src/graphql/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"44f4cf20bf0d"}')
		},
		"./src/graphql/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"35e920023b55"}')
		},
		"./src/graphql/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"167ad3e0f2a0"}')
		},
		"./src/graphql/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"dd2a0fa52533"}')
		},
		"./src/graphql/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4d54ab124a04"}')
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
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
				return f
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "i", (function() {
				return E
			}));
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				o = n("./node_modules/tlds/index.js"),
				i = n.n(o),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
			const l = e => c()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				_ = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				w = (e, t) => {
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
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(r.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${i}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
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
				return C
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var c, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				g = Object(r.a)(i.h),
				_ = Object(r.a)(i.c),
				x = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				w = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t(),
						o = Object(m.e)(r),
						i = Object(m.d)(r),
						c = Object(h.I)(r);
					if (o || !i) return;
					e(g());
					let p = !1;
					try {
						const t = c ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, n) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (E(t)) {
								if (k(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (O(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										i = [s, r],
										a = Object(u.d)(i),
										d = Object(l.b)(i),
										c = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(m)), p = !0
								}
							} else p = !1
						}
					} catch (x) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !k(e) && s === c.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, C = () => async (e, t, n) => {
					var s, r;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.J)(i);
						return Object(o.i)(() => e(w()), {
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
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "privateListingPending", (function() {
				return H
			})), n.d(t, "privateMixedListingLoaded", (function() {
				return U
			})), n.d(t, "privatePostListingLoaded", (function() {
				return W
			})), n.d(t, "privateListingFailed", (function() {
				return q
			})), n.d(t, "profilePrivateRequested", (function() {
				return G
			})), n.d(t, "morePending", (function() {
				return V
			})), n.d(t, "moreMixedLoaded", (function() {
				return K
			})), n.d(t, "morePostLoaded", (function() {
				return Z
			})), n.d(t, "moreFailed", (function() {
				return J
			})), n.d(t, "moreProfilePrivateRequested", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/externalAccount.ts"),
				o = n("./src/reddit/actions/pages/profileShared.ts"),
				i = n("./src/reddit/actions/profile/index.ts"),
				a = n("./src/graphql/operations/ProfileDownvoted.json"),
				d = n("./src/graphql/operations/ProfileGivenGildings.json"),
				c = n("./src/graphql/operations/ProfileHidden.json"),
				l = n("./src/graphql/operations/ProfileReceivedGildings.json"),
				u = n("./src/graphql/operations/ProfileSaved.json"),
				m = n("./src/graphql/operations/ProfileUpvoted.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var h = n("./src/reddit/models/Comment/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/Profile/index.ts"),
				g = n("./src/lib/constants/index.ts"),
				_ = n("./src/reddit/helpers/graphql/helpers.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/models/User/index.ts");
			const k = e => ({
					richtextContent: e.content && e.content.richtext ? Object(_.e)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: w.h.RICH_TEXT
				}),
				O = (e, t) => !(!e || !t || Object(y.d)(t) || !t.authorInfo) && Object(v.b)(e) === Object(v.b)(t.authorInfo),
				C = e => e && !Object(y.d)(e) && e.authorInfo ? Object(v.b)(e.authorInfo) : null;
			var j = e => {
					const {
						associatedAward: t,
						authorInfo: n,
						awardings: s,
						content: r,
						createdAt: o,
						distinguishedAs: i,
						editedAt: a,
						id: d,
						isGildable: c,
						isScoreHidden: l,
						isStickied: u,
						isSaved: m,
						parent: p,
						permalink: h,
						postInfo: f,
						score: y,
						voteState: w
					} = e, j = "ADMIN" === i, S = "MODERATOR" === i, P = s ? Object(_.b)(s) : void 0, I = n && n.__typename === E.c.AvailableRedditor && n.isCakeDayNow || !1, N = n && n.__typename === E.c.AvailableRedditor && n.isPremiumMember || !1, L = {
						allAwardings: P,
						associatedAward: t,
						author: n && Object(v.b)(n) || g.A,
						authorId: n && n.id || "",
						body: r && r.html || "",
						bodyMD: r && r.markdown || "",
						created: Object(_.d)(o) / 1e3,
						distinguishType: i || "",
						editedAt: Object(_.d)(a) / 1e3 || null,
						id: d,
						isAdmin: j,
						isAuthorCakeday: I,
						isAuthorPremium: N,
						isGildable: c,
						isMod: S,
						isOp: O(n, f),
						isSaved: m,
						isScoreHidden: l,
						isStickied: u,
						markdown: r && r.markdown || "",
						media: k(e),
						parentId: p && p.id,
						permalink: `https://www.reddit.com${h}`,
						postAuthor: C(f),
						postId: f && f.id || "",
						postTitle: f && f.title || null,
						score: y || 0,
						subredditId: "",
						voteState: Object(_.c)(w),
						...Object(x.a)(e),
						collapsed: !1,
						collapsedReason: null,
						collapsedBecauseCrowdControl: !1,
						isDeleted: !1,
						isLocked: !1,
						deletedBy: null,
						sendReplies: !0,
						modReports: [],
						userReports: [],
						isSystem: !1
					};
					return e.postInfo && Object(b.m)(e.postInfo) ? L.subredditId = e.postInfo.subreddit.id : e.postInfo && Object(b.l)(e.postInfo) && (L.subredditId = e.postInfo.profile.id), L
				},
				S = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				P = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				I = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				N = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				L = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var T = e => {
					const {
						listingType: t,
						rawData: n,
						includeIdentity: s,
						includeModerated: r
					} = e, {
						identity: o
					} = n, i = (e => {
						const t = {
							account: null,
							authorFlair: {},
							moderatedPageInfo: void 0,
							moderatedSubredditIds: void 0,
							postFlair: {},
							posts: {},
							preferences: void 0,
							profiles: {},
							pageInfo: void 0,
							subreddits: {},
							itemIds: []
						};
						return e !== f.a.Saved && e !== f.a.ReceivedGildings && e !== f.a.GivenGildings || (t.comments = {}), t
					})(t);
					if (!o) return i;
					if (s && (i.account = Object(v.a)(o) || null, i.preferences = Object(I.a)(o.preferences, o.interactions) || null, o.redditor.profile && (i.profiles[o.redditor.profile.id] = Object(N.a)(o.redditor.profile))), r && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: n
						} = Object(N.b)(o.redditor.moderatedSubreddits);
						i.moderatedPageInfo = t, i.moderatedSubredditIds = e, i.subreddits = n
					}
					const a = ((e, t) => {
						switch (t) {
							case f.a.Downvoted:
								return e.identity.downvotedPosts;
							case f.a.Hidden:
								return e.identity.hiddenPosts;
							case f.a.Saved:
								return e.identity.saved;
							case f.a.Upvoted:
								return e.identity.upvotedPosts;
							case f.a.ReceivedGildings:
								return e.identity.receivedGildings;
							case f.a.GivenGildings:
								return e.identity.givenGildings
						}
					})(n, t);
					if (!a) return i;
					i.pageInfo = a.pageInfo;
					for (const {
							node: d
						} of a.edges) {
						let e;
						if (d.__typename === h.d.Comment) {
							const t = j(d);
							if (i.comments || (i.comments = {}), i.comments[t.id] = t, i.itemIds || (i.itemIds = []), i.itemIds.push(t.id), d.authorFlair && (i.authorFlair[t.subredditId] || (i.authorFlair[t.subredditId] = {}), i.authorFlair[t.subredditId][t.author] = Object(S.a)(d.authorFlair)[0]), e = d.postInfo, d.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(y.a)(d.postInfo);
								i.posts[e.id] = e, t && (i.posts[t.id] = t)
							}
						} else e = d, i.itemIds || (i.itemIds = []), i.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: n
						} = e && Object(y.a)(e);
						i.posts[t.id] = t, n && (i.posts[n.id] = n), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (i.authorFlair[t.belongsTo.id] || (i.authorFlair[t.belongsTo.id] = {}), i.authorFlair[t.belongsTo.id][t.author] = Object(S.a)(e.authorFlair)[0]), Object(b.l)(e) ? i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(N.a)(e.profile)) : Object(b.m)(e) && (i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(L.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(P.a)(e.subreddit))))
					}
					return i
				},
				D = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				F = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				B = n("./src/lib/initializeClient/installReducer.ts"),
				R = n("./src/reddit/reducers/features/comments/index.ts");
			Object(B.a)({
				features: {
					comments: R.a
				}
			});
			const A = {
					[f.a.Downvoted]: (e, t) => Object(p.a)(e, {
						...a,
						variables: t
					}),
					[f.a.Hidden]: (e, t) => Object(p.a)(e, {
						...c,
						variables: t
					}),
					[f.a.Saved]: (e, t) => Object(p.a)(e, {
						...u,
						variables: t
					}),
					[f.a.Upvoted]: (e, t) => Object(p.a)(e, {
						...m,
						variables: t
					}),
					[f.a.ReceivedGildings]: (e, t) => Object(p.a)(e, {
						...l,
						variables: t
					}),
					[f.a.GivenGildings]: (e, t) => Object(p.a)(e, {
						...d,
						variables: t
					})
				},
				M = (e, t) => {
					switch (e) {
						case f.a.Downvoted:
						case f.a.Hidden:
						case f.a.Saved:
						case f.a.Upvoted:
						case f.a.ReceivedGildings:
						case f.a.GivenGildings:
							return t.body.data
					}
				},
				z = e => {
					switch (e.listingType) {
						case f.a.Downvoted:
						case f.a.Hidden:
						case f.a.Saved:
						case f.a.Upvoted:
						case f.a.ReceivedGildings:
						case f.a.GivenGildings:
							return T(e)
					}
				},
				H = Object(s.a)(F.b),
				U = Object(s.a)(F.c),
				W = Object(s.a)(F.i),
				q = Object(s.a)(F.a),
				G = e => async (t, n, s) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, c = n(), l = Object(D.b)(a.toLowerCase(), d), u = c.profilePrivatePage.ids[l] && c.profilePrivatePage.ids[l].length > 0, m = !!c.profilePrivatePage.api.error[l];
					if (c.profilePrivatePage.api.pending[l] || u && !m) return;
					const {
						account: p
					} = c.user, h = !p, b = !(p && p.displayText && c.profiles.moderated.models[p.displayText.toLowerCase()] && c.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(H({
						listingKey: l
					}));
					const g = {
							includeIdentity: h,
							includeModerated: b,
							first: F.h,
							after: null
						},
						_ = await A[d](s.gqlContext(), g);
					if (_.ok && _.body) {
						const e = z({
							rawData: M(d, _),
							listingType: d,
							includeIdentity: h,
							includeModerated: b
						});
						d === f.a.Saved || d === f.a.ReceivedGildings || d === f.a.GivenGildings ? await t(U({
							listingKey: l,
							profileName: a,
							...e
						})) : await t(W({
							listingKey: l,
							profileName: a,
							...e
						})), await Promise.all([t(Object(o.d)(a)), t(Object(r.o)(a)), t(Object(i.d)(a))])
					} else t(q({
						listingKey: l,
						error: _.error
					}))
				}, V = Object(s.a)(F.f), K = Object(s.a)(F.e), Z = Object(s.a)(F.g), J = Object(s.a)(F.d), Y = e => async (t, n, s) => {
					const r = n(),
						o = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!o) return;
					const i = Object(D.b)(o, e);
					if (!r.profilePrivatePage.ids[i] || !r.profilePrivatePage.ids[i].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[i].hasNextPage || r.profilePrivatePage.api.error[i] || r.profilePrivatePage.api.pending[i]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[i].endCursor,
						first: F.h
					};
					t(V({
						listingKey: i
					}));
					const d = await A[e](s.gqlContext(), a);
					if (d.ok && d.body) {
						const n = z({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === f.a.Saved || e === f.a.ReceivedGildings || e === f.a.GivenGildings ? await t(K({
							listingKey: i,
							profileName: o,
							...n
						})) : await t(Z({
							listingKey: i,
							profileName: o,
							...n
						}))
					} else t(J({
						listingKey: i,
						error: d.error
					}))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const d = i();
				Object(s.a)(e, a, d) ? n(Object(o.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = c.a.div("FooterContainer", f.a), x = c.a.div("UserAgreement", f.a), y = c.a.a("UserAgreementLink", f.a), v = c.a.a("PrivacyLink", f.a);
			var w = () => o.a.createElement(_, null, o.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", o.a.createElement(y, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", o.a.createElement(v, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				k = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./node_modules/lodash/flatMap.js"),
				C = n.n(O),
				j = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				P = n("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, o] = t.slice(s, s + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var L = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, N)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return o.a.createElement(P.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/chat/controls/Svg/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => o.a.createElement(F.a, B({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				A = n("./src/reddit/models/ContentGate.ts"),
				M = n("./src/lib/constants/index.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var U = n("./src/reddit/selectors/meta.ts"),
				W = n("./src/reddit/components/ContentGate/index.m.less"),
				q = n.n(W);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), V = c.a.wrapped(R, "PrivateKey", q.a), K = c.a.div("ButtonsContainer", q.a), Z = c.a.div("Container", q.a), J = c.a.div("Description", q.a), Y = c.a.div("PrivateSubredditDetails", q.a), $ = c.a.div("PrivateSubredditDescription", q.a), X = c.a.h3("PrivateSubredditName", q.a), Q = c.a.a("Link", q.a), ee = c.a.wrapped(D.k, "LinkRouterButton", q.a), te = c.a.wrapped(D.j, "LinkButton", q.a), ne = c.a.wrapped(D.n, "SecondaryLinkRouterButton", q.a), se = c.a.wrapped(D.m, "SecondaryLinkButton", q.a), re = c.a.wrapped(ee, "GoHomeLinkButton", q.a), oe = c.a.img("Image", q.a), ie = c.a.img("ImagePlaceholder", q.a), ae = c.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = c.a.wrapped(te, "LeftLinkButton", q.a), ce = c.a.wrapped(se, "SecondaryLeftLinkButton", q.a), le = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", q.a), ue = c.a.h3("Title", q.a), me = c.a.div("PageBody", q.a), pe = c.a.div("QuarantineMessageWrapper", q.a), he = Object(d.c)({
				isLoggedIn: H.I,
				origin: U.i,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(z.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * M.x;
					return s > Date.now() - r
				})(e)
			}), be = Object(T.t)(), fe = Object(i.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: i,
					isContributorRequestsDisabled: a,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: f,
					quarantineMessage: g,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: x,
					setNSFWPreference: y,
					subredditDescription: v,
					subredditName: w,
					user: O
				} = e, C = async () => {
					i ? await y() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case A.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ue, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", w)], {
							hk: "2lyDwB"
						})), o.a.createElement(J, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(K, null, O ? o.a.createElement(ce, {
							href: `${s.a.redditUrl}/premium`
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(de, {
							href: Object(l.a)(c, m)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? o.a.createElement(ee, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(se, {
							href: Object(l.a)(c, m)
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case A.a.Nsfw:
					case A.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ue, null, n === A.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(J, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(K, null, o.a.createElement(ae, {
							to: "/"
						}, G._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(se, {
							onClick: C
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case A.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(V, null), o.a.createElement(ue, null, "r/", w, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), v && v.length && o.a.createElement(Y, null, o.a.createElement(X, null, "r/", w), o.a.createElement($, null, o.a.createElement("div", null, v))), o.a.createElement(J, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", w, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(K, null, O ? o.a.createElement(o.a.Fragment, null, !a && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ce, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${w}`
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ce, {
							href: Object(l.a)(c, m)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ee, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case A.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ue, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(J, null, G._("This community is {=quarantined}", [G._param("=quarantined", o.a.createElement(Q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(pe, null, x ? o.a.createElement(k.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : _ ? o.a.createElement(E.a, {
							html: _
						}) : g || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(K, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(K, null, o.a.createElement(le, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(te, {
								href: `${s.a.redditUrl}/prefs/update`
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(K, null, o.a.createElement(ae, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(se, {
								onClick: t
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, r, f)));
					case A.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ue, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", w)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(J, null, e ? o.a.createElement(L, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ie, null), o.a.createElement(ue, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(J, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(K, null, O && o.a.createElement(h.a, {
							eventSource: "content_gate"
						}), o.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.ProfileDoesNotExist:
					case A.a.ProfileDeleted:
					case A.a.ProfileSuspended:
					case A.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case A.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case A.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case A.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", o.a.createElement(Q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case A.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ue, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(J, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(K, null, o.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(K, null, o.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(fe(Object(a.i)(e => o.a.createElement(Z, null, o.a.createElement("div", null, o.a.createElement(me, null, ge(e))), o.a.createElement(w, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				x = g.a.wrapped(c.c, "StyledTooltip", f.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.gb)(e),
					userIsSuspended: h.O
				});
			t.a = Object(i.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: _
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: i,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => o.a.createElement(u.l, {
				className: e,
				disabled: c || d,
				onClick: () => i(a),
				onMouseEnter: n,
				onMouseLeave: r,
				id: _,
				isFullWidth: !0
			}, s.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? o.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: _,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? o.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: _,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(l);
			const m = a.a.div("PrimaryText", u.a),
				p = a.a.wrapped(d.a, "BackgroundPlaceholder", u.a),
				h = a.a.div("Wrapper", u.a);
			var b = ({
				children: e,
				className: t
			}) => o.a.createElement(h, {
				className: t
			}, o.a.createElement(p, {
				isLoading: !1,
				layout: c.g.Classic
			}), o.a.createElement(m, null, e));
			var f = ({
				className: e,
				profileName: t,
				timeSort: n = i.Wb.ALL
			}) => o.a.createElement(b, {
				className: e
			}, n === i.Wb.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "1MHn3t"
			}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "qN3uL"
			}));
			var g = ({
				className: e,
				profileName: t,
				timeSort: n = i.Wb.ALL
			}) => o.a.createElement(b, {
				className: e
			}, n === i.Wb.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "28vBEd"
			}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "38GhqN"
			}));
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = ({
					className: e,
					verb: t
				}) => o.a.createElement(b, {
					className: e
				}, _._("hmm... looks like you haven't {verb} yet", [_._param("verb", t)], {
					hk: "142tKN"
				})),
				y = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				v = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				w = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = () => o.a.createElement("div", {
				className: w.a.container
			}, o.a.createElement(y.a, {
				className: w.a.hideIcon
			}), o.a.createElement("h3", {
				className: w.a.title
			}, E._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: w.a.subtitle
			}, E._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				w = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				E = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = n.n(C);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				N = Object(d.a)(g.a),
				L = {
					[h.d.Card]: w.a,
					[h.d.Classic]: y.a,
					[h.d.Compact]: v.a
				},
				T = {
					[h.d.Card]: function(e) {
						return o.a.createElement(x.a, S({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(x.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(x.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				D = {
					[h.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				F = Object(b.t)(),
				B = Object(a.c)({
					dropdownIsOpen: Object(O.b)(I),
					isInIcons2020: E.a,
					postLayout: b.O,
					redditStyle: b.A
				}),
				R = Object(i.b)(B, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: I
					}))
				}));
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(k.screen)(t),
							subreddit: Object(k.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: n,
							layout: s,
							onLayoutClick: r,
							postLayout: i
						} = this.props, a = s || h.e[i], d = e === a, l = n ? T[e] : L[e], u = D[e];
						return o.a.createElement(_.b, S({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: d
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: d,
							noHover: d,
							onClick: d ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: j.a.LayoutIcon,
							onClick: d ? void 0 : r,
							isFilled: n && d && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(N, S({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: I
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || h.e[s];
					return o.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: P
					}, o.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: I,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = F(R(Object(p.c)(Object(l.a)(A))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				h = n("./src/lib/addQueryParams/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				f = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/actions/tooltip.ts"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/higherOrderComponents/asTooltip.tsx"),
				y = n("./src/reddit/constants/listingSorts.ts"),
				v = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/trackers/navigation.ts"),
				C = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				S = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				T = n.n(L),
				D = n("./src/lib/lessComponent.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				R = Object(x.a)(D.a.wrapped(w.a, "Dropdown", T.a)),
				A = D.a.wrapped(N.a, "ListingSortIcon", T.a),
				M = (D.a.wrapped(C.b, "DropdownTriangle", T.a), D.a.div("Title", T.a)),
				z = D.a.wrapped(e => r.a.createElement(E.b, F({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", F({}, t, {
					className: Object(i.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				U = D.a.div("DropdownRowDisabled", T.a),
				W = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				q = Object(p.c)({
					isAwardListingExperimentEnabled: S.a,
					isBestSortPopularEnabled: j.a,
					user: I.i,
					dropdownIsOpen: (e, t) => Object(P.b)(t.dropdownId || B)(e),
					isPopularPage: l.C
				}),
				G = Object(o.b)(q, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: t || B
					}))
				}));
			var V = D.a.wrapped(W(G(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(M, null, _.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, r.a.createElement(A, {
					sort: e.sort
				}))), r.a.createElement(v.a.Consumer, null, t => r.a.createElement(R, F({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(U, null, _.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.P.BEST), t && r && o.splice(3, 0, b.P.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(E.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(k.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(A, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				K = n("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[b.Tb.AllStates]: () => _.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Tb.Alaska]: () => _.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Tb.Alabama]: () => _.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Tb.Arkansas]: () => _.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Tb.Arizona]: () => _.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Tb.California]: () => _.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Tb.Colorado]: () => _.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Tb.Connecticut]: () => _.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Tb.DistrictOfColumbia]: () => _.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Tb.Delaware]: () => _.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Tb.Florida]: () => _.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Tb.Georgia]: () => _.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Tb.Hawaii]: () => _.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Tb.Iowa]: () => _.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Tb.Idaho]: () => _.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Tb.Illinois]: () => _.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Tb.Indiana]: () => _.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Tb.Kansas]: () => _.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Tb.Kentucky]: () => _.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Tb.Louisiana]: () => _.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Tb.Massachusetts]: () => _.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Tb.Maryland]: () => _.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Tb.Maine]: () => _.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Tb.Michigan]: () => _.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Tb.Minnesota]: () => _.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Tb.Missouri]: () => _.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Tb.Mississippi]: () => _.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Tb.Montana]: () => _.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Tb.NorthCarolina]: () => _.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Tb.NorthDakota]: () => _.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Tb.Nebraska]: () => _.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Tb.NewHampshire]: () => _.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Tb.NewJersey]: () => _.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Tb.NewMexico]: () => _.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Tb.Nevada]: () => _.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Tb.NewYork]: () => _.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Tb.Ohio]: () => _.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Tb.Oklahoma]: () => _.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Tb.Oregon]: () => _.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Tb.Pennsylvania]: () => _.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Tb.RhodeIsland]: () => _.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Tb.SouthCarolina]: () => _.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Tb.SouthDakota]: () => _.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Tb.Tennessee]: () => _.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Tb.Texas]: () => _.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Tb.Utah]: () => _.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Tb.Virginia]: () => _.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Tb.Vermont]: () => _.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Tb.Washington]: () => _.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Tb.Wisconsin]: () => _.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Tb.WestVirginia]: () => _.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Tb.Wyoming]: () => _.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Y = n("./src/reddit/components/StateSort/index.m.less"),
				$ = n.n(Y);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Q = D.a.wrapped(w.a, "_Dropdown", $.a),
				ee = Object(x.a)(Q),
				te = e => {
					return e.indexOf("_") > 0 && se(e) === b.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Tb.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = se(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				oe = Object(l.t)(),
				ie = Object(p.c)({
					dropdownIsOpen: Object(P.b)("StateSort--StateSortPicker")
				}),
				ae = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(d.u)(b.w.UnitedStates + "_" + n))
					}
				}));
			var de = D.a.wrapped(oe(ae(e => {
				const t = `${e.baseUrl}?${K.h}=${b.w.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(z, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(v.a.Consumer, null, n => r.a.createElement(ee, X({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.Tb).map(n => {
					const s = b.Tb[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Tb.AllStates ? t : `${t}_${e}`)(s), re(s))
					}, r.a.createElement(E.b, {
						className: Object(i.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: Z(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", $.a);
			const ce = {
				[b.w.Everywhere]: () => _.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.w.UnitedStates]: () => _.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.w.Argentina]: () => _.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.w.Australia]: () => _.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.w.Bulgaria]: () => _.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.w.Canada]: () => _.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.w.Chile]: () => _.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.w.Colombia]: () => _.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.w.Croatia]: () => _.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.w.CzechRepublic]: () => _.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.w.Finland]: () => _.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.w.France]: () => _.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.w.Germany]: () => _.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.w.Greece]: () => _.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.w.Hungary]: () => _.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.w.Iceland]: () => _.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.w.India]: () => _.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.w.Ireland]: () => _.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.w.Italy]: () => _.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.w.Japan]: () => _.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.w.Malaysia]: () => _.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.w.Mexico]: () => _.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.w.NewZealand]: () => _.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.w.Philippines]: () => _.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.w.Poland]: () => _.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.w.Portugal]: () => _.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.w.PuertoRico]: () => _.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.w.Romania]: () => _.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.w.Serbia]: () => _.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.w.Singapore]: () => _.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.w.Spain]: () => _.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.w.Sweden]: () => _.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.w.Taiwan]: () => _.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.w.Thailand]: () => _.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.w.Turkey]: () => _.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.w.UnitedKingdom]: () => _.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = n("./src/reddit/components/CountrySort/index.m.less"),
				ue = n.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(l.t)(),
				be = Object(p.c)({
					dropdownIsOpen: Object(P.b)(pe)
				});
			var fe = he(Object(o.b)(be, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(d.u)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ne(e.sort),
						s = `${e.baseUrl}?${K.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(i.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(z, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[b.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, n => r.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.w).map(n => {
						const o = b.w[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${re(o)}`, o)
						}, r.a.createElement(E.b, {
							className: Object(i.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: ce[o](),
							isSelected: t === o
						}))
					})))), t === b.w.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ge = n("./node_modules/path-browserify/index.js"),
				_e = n.n(ge),
				xe = n("./src/reddit/components/TimeSort/index.m.less"),
				ye = n.n(xe);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(x.a)(w.a),
				Ee = (e, t, n) => {
					let s = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (s = _e.a.join(s, t)), Object(h.a)(s, {
						[K.x]: n
					})
				},
				ke = D.a.div("ListingSortContainer", ye.a),
				Oe = Object(l.t)(),
				Ce = Object(p.c)({
					dropdownIsOpen: Object(P.b)("TimeSort--SortPicker")
				});
			var je = Oe(Object(o.b)(Ce, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(v.a.Consumer, null, t => r.a.createElement(we, ve({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.Wb.HOUR, b.Wb.DAY, b.Wb.WEEK, b.Wb.MONTH, b.Wb.YEAR, b.Wb.ALL].map(t => r.a.createElement(E.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.b)(t),
					href: Ee(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.c)(t))
					}
				})))))))),
				Se = n("./src/reddit/constants/listings.ts"),
				Pe = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ie = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/index.tsx"),
				Le = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = n.n(Te);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([b.P.CONTROVERSIAL, b.P.TOP]),
				Re = new Set([b.P.CONTROVERSIAL, b.P.RISING]),
				Ae = "ListingSort--Overflow",
				Me = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				ze = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, I.i, l.C, S.a, (e, t, n, s, r, o) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const i = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.P.BEST), r && o && i.splice(3, 0, b.P.AWARDED), {
						isPopularPage: r,
						sortOptions: i
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(O.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(k.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Ie.q, {
							className: Object(i.a)(De.a.SortLink, e === t && De.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: n => r.a.createElement(A, Fe({}, n, {
								className: Object(i.a)(De.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, i = s && !!n && e === b.P.HOT && o === b.P.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && r.a.createElement(fe, {
							baseUrl: Se.c[Se.b.Popular],
							buttonClassName: De.a.DropdownButton,
							className: De.a.CountrySort,
							disabled: t,
							dropdownClassName: De.a.Dropdown,
							rowClassName: De.a.DropdownRow,
							rowSelectedClassName: De.a.DropdownRowSelected,
							wrapperClassName: De.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: De.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: a
					} = this.props, d = !t && Be.has(s), c = Re.has(s), l = o.filter(e => !Re.has(e)), u = o.filter(e => Re.has(e) && e !== s);
					return r.a.createElement(Pe.b.Consumer, null, ({
						icons2020: t
					}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(V, Fe({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(i.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(i.a)(De.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && r.a.createElement(je, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: a || b.Xb,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(V, Fe({}, this.props, {
						className: Object(i.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: Ae,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: Ae
					}, t ? r.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}) : r.a.createElement(Le.a, null)))))
				}
			}
			var Ue = Me(Object(o.b)(ze)(Object(c.c)(He))),
				We = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = n.n(We);
			const Ge = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ve = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, s) => {
						if (t) {
							const r = Object(a.c)({
								sort: n,
								timeSort: s
							});
							e(Object(d.I)(t, r))
						}
					}
				}));
			class Ke extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ue, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: d,
						timeSort: l
					}), !o && r.a.createElement(m.a, {
						className: qe.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(Ve(Object(c.c)(Ke)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
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
				i = Object(r.a)("spBurnLinks", Object(s.a)({
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
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = Object(u.t)(),
				f = Object(i.c)({
					layout: u.O
				}),
				g = Object(o.b)(f);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						n = d.g - t,
						s = l.a + n + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.q+d.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.r}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.q+d.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(g(h.a.wrapped(_, "Component", p.a)))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				h = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				b = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				g = n.n(f);
			const _ = {
					[i.P.BEST]: l.a,
					[i.P.HOT]: m.a,
					[i.P.NEW]: p.a,
					[i.P.CONTROVERSIAL]: u.a,
					[i.P.TOP]: b.a,
					[i.P.RISING]: h.a,
					[i.P.AWARDED]: c.a
				},
				x = {
					[i.P.BEST]: "best",
					[i.P.HOT]: "hot",
					[i.P.NEW]: "new",
					[i.P.CONTROVERSIAL]: "controversial",
					[i.P.TOP]: "top",
					[i.P.RISING]: "rising",
					[i.P.AWARDED]: "award"
				};

			function y({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(a.a)() && void 0 !== x[n]) return r.a.createElement(d.a, {
					name: x[n],
					isFilled: t,
					className: Object(o.a)(e, g.a.iconStyles)
				});
				const s = _[n];
				return s ? r.a.createElement(s, {
					className: Object(o.a)(e, g.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
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
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: s,
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
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/components/Media/blurredContent.ts"),
				v = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = n.n(v);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * f.e,
				O = e => {
					const t = Object(c.a)(w.a.image, h.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${f.j}px`), e.isListing || e.isTall && k(e.height) || (n.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				C = e => {
					const t = {};
					return (!e.showFull && Object(f.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${f.j}px`, e.shouldBlur && (t.maxWidth = Object(f.I)(e.height, e.width) ? `${f.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className),
						style: t
					}, e.children)
				},
				j = Object(i.b)(() => Object(d.a)(g.E, _.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(g.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = j(e => e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, P(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, P(e)) : P(e));
			const S = (e, t) => o.a.createElement(O, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[x.a]: !e
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
				P = ({
					onClick: e,
					...t
				}) => {
					const n = Object(f.I)(t.height, t.width),
						r = k(t.height) && n;
					return o.a.createElement(C, E({}, t, {
						className: `${n?`${x.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, S(n, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, S(n, t)), t.isListing && !t.showFull && t.height > f.j && Object(f.I)(t.height, t.width) && o.a.createElement("div", {
						className: w.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: w.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: w.a.unblurButton
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
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
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends i.a.Component {
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
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + f ? i = !0 : i && d >= a && d > a + f && (i = !1), a = d, r !== i && t(i)
						}, b);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: s,
						shouldLoad: r,
						shouldPause: o,
						showCentered: a,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return i.a.createElement("video", _({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(g.a)(this.props.source || "")
					}))
				}
			}
			var y = x,
				v = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = n.n(v);
			const E = Object(d.c)({
					autoplayPref: p.b,
					consumed: h.a,
					loadTimes: h.f,
					metadata: h.h,
					started: h.k
				}),
				k = Object(a.b)(E, (e, {
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
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
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
							className: Object(c.a)(u.a, w.a.styledVideo),
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
						className: Object(c.a)(w.a.container, this.props.className, {
							[w.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = k(O)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? s.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? s.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return Z
			})), n.d(t, "a", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/lodash/debounce.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/last.js"),
				a = n.n(i),
				d = n("./node_modules/lodash/throttle.js"),
				c = n.n(d),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/ads/index.ts"),
				h = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/fastdom/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/lib/opener/index.ts"),
				x = n("./src/lib/sentry/index.ts"),
				y = n("./src/reddit/components/PostList/LoadMore.tsx"),
				v = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				w = n("./src/reddit/components/Scroller/Simple.tsx"),
				E = n("./src/reddit/constants/adEvents.ts"),
				k = n("./src/reddit/constants/componentSizes.ts"),
				O = n("./src/reddit/constants/postLayout.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx"),
				S = n("./src/reddit/helpers/getClickInfo.ts"),
				P = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = n("./src/reddit/models/Media/index.ts"),
				L = n("./src/reddit/helpers/brandSafety/index.ts"),
				T = n("./src/lib/LRUCache/index.ts"),
				D = n("./src/telemetry/index.ts"),
				F = n("./src/telemetry/models/Timer.ts"),
				B = n("./src/reddit/components/PostList/index.m.less"),
				R = n.n(B);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = 500, z = new T.a(M), H = new T.a(M), U = new T.a(M), W = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, q = g.a.div("SeeMore", R.a), G = g.a.wrapped(I.a, "ArrowRight", R.a), V = (e, t, n, s, r, o, i, a) => {
				const d = `entered-${e}-${t}-${n?`last-${s}-${r}`:""}-${o}`;
				let c = z.get(d);
				return void 0 === c && (c = () => {
					n && i.onBottomViewed(s, r), i.trackOnPostEnteredViewport(e, t, a)
				}, z.set(d, c)), c
			}, K = (e, t, n, s, r) => {
				const o = `left-${e}-${t}`;
				let i = H.get(o);
				return void 0 === i && (i = o => {
					n.trackOnPostExitedViewport(e, t, o, s, r)
				}, H.set(o, i)), i
			}, Z = (e, t) => {
				const n = `click-${e}`;
				let s = U.get(n);
				return void 0 === s && (s = (e, n, s, r) => {
					if (n.isSponsored) {
						t.fireAdPixelsOfType(n, E.a.Click);
						const {
							source: e
						} = Object(p.t)(n, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							s && (t = Object(j.a)(n.id, s, t).url), Object(_.d)(t, _.c.BLANK)
						}
					} else t.openPost({
						postOrComment: n,
						clickInfo: Object(S.a)(e)
					})
				}, U.set(n, s)), s
			}, J = (e, t) => {
				const n = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					n.splice(e, 0, t[e])
				}), n
			};
			class Y extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(M), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: n
						} = this.props, s = e(), r = [];
						s.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							i = o.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(L.a)(o, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && D.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = D.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = D.c.end(this.timerId);
						setTimeout(() => Object(D.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && D.c.cancel(this.timerId), e.postIds.length && (this.timerId = D.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, n;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && D.c.has(this.timerId)) {
						const e = D.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(D.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const s = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					s && s !== (null === (n = e.postIds) || void 0 === n ? void 0 : n[0]) && this.props.onFirstPostChanged(s)
				}
				componentWillUnmount() {
					this.timerId && D.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: n
					} = this.props;
					return D.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = D.c.end(e);
					setTimeout(() => {
						n(t(s, F.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n
					} = this.props;
					return !n && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...n
					} = this.props, {
						postsById: s,
						...r
					} = e, o = Object.keys(n), i = Object.keys(r);
					if (i.length !== o.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (t === s) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: n
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const i = 0 === o;
							return n({
								isFirstPost: i,
								layout: e,
								post: t[r]
							}) !== n({
								isFirstPost: i,
								layout: e,
								post: s[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, n, s) {
					const {
						currentProfileName: r,
						hostPostId: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: _,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: v,
						postIds: w
					} = this.props, E = 0 === t, k = `post-${s}-${e}-${t}-${n?"last-index":""}-${p}-${m}-${f}`;
					let C;
					if (void 0 === (C = this.scrollChildCache.get(k))) {
						const {
							inSubredditOrProfile: j,
							postsById: S
						} = this.props, I = S[e], L = I.crosspostRootId && S[I.crosspostRootId] ? S[I.crosspostRootId] : I;
						I.crosspostRootId && !S[I.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${I.id} is crosspost of ${I.crosspostRootId}, but ` + `${I.crosspostRootId} details are missing in the state`), x.c.captureMessage("Crosspost parent details are missing")
						});
						const T = this.props.postComponentForLayout({
								isCrosspost: !!I.crosspostRootId,
								isFirstPost: E,
								layout: s,
								post: L
							}),
							D = `post-list-item-[layout: ${s}]-[postId: ${e}]`,
							F = V(e, s, n, m, p, f, this.props, t),
							B = K(e, s, this.props, t, h),
							R = Z(e, this.props),
							A = L.media && L.media.type === N.o.EMBED ? L.media.provider : null;
						C = {
							estHeight: Object(P.c)(I, s),
							id: e,
							isFocusable: !(!L.media || !(s === O.g.Large || s === O.g.Classic && Object(N.G)(L.media))) && (N.d.has(L.media.type) && (!A || !N.s.has(A)) && !L.isSpoiler && !L.isNSFW),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: B,
							render: ({
								className: t,
								height: s,
								width: b,
								remeasure: f,
								setScrollerChildRef: x,
								shouldLoadInitially: k
							}) => u.a.createElement(T, {
								className: t,
								currentProfileName: r,
								key: D,
								availableWidth: b,
								eventFactory: g,
								first: E,
								forceLoadMedia: k,
								hostPostId: o,
								inSubredditOrProfile: j,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: m,
								listingName: p,
								pageLayer: h,
								last: n,
								onClickPost: R,
								onSizeChanged: f,
								postId: e,
								postIds: w,
								redditStyle: _,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: x,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(k, C)
					}
					return C
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: n,
						layout: s,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (n) return;
					const i = o;
					return u.a.createElement("div", {
						className: R.a.placeholder
					}, u.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && u.a.createElement(v.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n,
						layout: s,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!n) return u.a.createElement("div", {
						className: R.a.placeholder
					}, u.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: s,
						countOverride: W[s]
					}), !!e && u.a.createElement(v.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: n,
						injectChildren: r,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: p
					} = this.props;
					let f = c.map((e, t, n) => {
						const s = t === c.length - 1;
						return this.scrollChildForPost(e, t, s, i)
					});
					r && (f = J(f, r));
					const g = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						_ = a ? Object(s.e)(a) : null,
						x = _ || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(w.b, {
						innerRef: this.updateScrollerRef,
						className: x ? R.a.truncatedPostList : Object(h.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: n,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: k.f
					}, f), _ && u.a.createElement(q, {
						className: R.a.seeMoreButton
					}, u.a.createElement(C.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(_, {
							type: b.Qb.Posts
						})
					}, A._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				h = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				w = n("./src/reddit/models/Profile/index.ts"),
				E = n("./src/reddit/featureFlags/index.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/selectors/userPrefs.ts"),
				j = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				S = n.n(j);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(f.t)({
					routeName: f.V,
					privateListingType: f.i
				}),
				N = Object(d.c)({
					isDropdownMenuOpen: e => Object(k.a)(e) === T,
					isOwnProfile: (e, t) => Object(O.N)(e, t.profileName),
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: C.b
				}),
				L = Object(l.a)(g.a),
				T = "profile-nav-menu-tooltip";
			t.a = I(Object(i.b)(N, e => ({
				toggleTooltip: t => e(Object(p.h)({
					tooltipId: t
				}))
			}))(({
				isDropdownMenuOpen: e,
				isOwnProfile: t,
				privateListingType: n,
				profileName: s,
				routeName: r,
				toggleTooltip: i,
				isSnoovatar30Enabled: a,
				isSubscriptionsPinned: d
			}) => {
				const c = Object(x.a)();
				return o.a.createElement("div", {
					className: S.a.container
				}, o.a.createElement(h.a, {
					bladeOpen: !1,
					offsetLeft: d ? b.u : 0,
					render: () => o.a.createElement(o.a.Fragment, null, B({
						profileName: s,
						isOwnProfile: t,
						routeName: r,
						privateListingType: n,
						isSnoovatar30Enabled: a
					}).map(e => o.a.createElement(D, P({}, e, {
						key: e.key
					}))), o.a.createElement("button", {
						className: Object(u.a)(S.a.mainLink, S.a.overflowMenuButton),
						id: T,
						onClick: () => i(T)
					}, c ? o.a.createElement(y.a, {
						name: "overflow_horizontal"
					}) : o.a.createElement(v.a, null)), o.a.createElement(L, {
						className: S.a.dropdown,
						isOpen: e,
						tooltipId: T
					}, R({
						profileName: s,
						isOwnProfile: t,
						routeName: r,
						privateListingType: n
					}).map(e => o.a.createElement(F, P({}, e, {
						key: e.key
					})))))
				}))
			}));
			const D = ({
					hideOnNarrow: e,
					isActive: t,
					text: n,
					url: s,
					internal: r
				}) => r ? o.a.createElement(_.a, {
					className: Object(u.a)(S.a.mainLink, {
						[S.a.hideOnNarrow]: !!e,
						[S.a.isActive]: t
					}),
					to: s
				}, n) : o.a.createElement("a", {
					className: Object(u.a)(S.a.mainLink, {
						[S.a.hideOnNarrow]: !!e,
						[S.a.isActive]: t
					}),
					href: s
				}, n),
				F = ({
					isActive: e,
					internal: t,
					key: n,
					url: s,
					showOnNarrow: r,
					text: i
				}) => t ? o.a.createElement(a.a, {
					className: Object(u.a)(S.a.dropdownLink, {
						[S.a.isActive]: e,
						[S.a.showOnNarrow]: !!r
					}),
					to: s,
					key: n,
					rel: "nofollow noopener noreferrer",
					role: "listitem"
				}, i) : o.a.createElement("a", {
					className: Object(u.a)(S.a.dropdownLink, {
						[S.a.showOnNarrow]: !!r
					}),
					href: s,
					key: n,
					rel: "nofollow noopener noreferrer",
					role: "listitem",
					target: "_blank"
				}, i),
				B = ({
					profileName: e,
					isOwnProfile: t,
					routeName: n,
					privateListingType: r,
					isSnoovatar30Enabled: o
				}) => {
					const i = t ? [{
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${e}/saved/`
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${e}/hidden/`
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${e}/upvoted/`
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${e}/downvoted/`
					}] : [];
					t ? (i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${e}/gilded/`
					}), i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${e}/gilded/given/`
					})) : i.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${c.a.oldRedditUrl}/user/${e}/gilded/`
					});
					const a = o ? [{
						internal: !0,
						isActive: n === m.Eb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: s.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: `/user/${e}/snoo/`
					}] : [];
					return [{
						internal: !0,
						isActive: n === m.Eb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${e}/`
					}, {
						internal: !0,
						isActive: n === m.Eb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${e}/posts/`
					}, {
						internal: !0,
						isActive: n === m.Eb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${e}/comments/`
					}, ...a, ...i]
				},
				R = ({
					profileName: e,
					isOwnProfile: t,
					routeName: n,
					privateListingType: r
				}) => {
					const o = t ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Hidden,
						key: "profile.dropdownmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${e}/hidden/`
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Upvoted,
						key: "profile.dropdownmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "J0TzC"
						}),
						url: `/user/${e}/upvoted/`
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.Downvoted,
						key: "profile.dropdownmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2sxum6"
						}),
						url: `/user/${e}/downvoted/`
					}] : [];
					return t ? (o.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.ReceivedGildings,
						key: "profile.dropdownmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "31obau"
						}),
						url: `/user/${e}/gilded/`
					}), o.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: n === m.Eb.PROFILE_PRIVATE && r === w.a.GivenGildings,
						key: "profile.dropdownmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${e}/gilded/given/`
					}), o) : [...o, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.dropdownmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "2KdewZ"
						}),
						url: `${c.a.oldRedditUrl}/user/${e}/gilded/`
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/SidebarContainer/index.tsx"),
				a = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				h = n("./src/reddit/constants/posts.ts");
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				f = e => o.a.createElement(i.a, {
					className: e.className
				}, o.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), o.a.createElement(p.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: h.a.PROFILE
					}
				}), o.a.createElement(a.a, {
					profileName: e.profileName
				}), o.a.createElement(d.a, {
					profileName: e.profileName
				}), o.a.createElement(l.a, null, o.a.createElement(c.a, {
					profileName: e.profileName
				})), o.a.createElement(l.a, null, o.a.createElement(m.a, {
					profileName: e.profileName
				})), o.a.createElement(u.a, {
					hideBackToTop: e.hideBackToTop
				}));
			f.defaultProps = {
				isOverlay: !1
			}, t.a = f
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => o.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(a.a)(h))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				_ = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => o.a.createElement(_, p({}, n, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class v extends o.a.Component {
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
					return o.a.createElement(x, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
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
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return D
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				m = d.a.hr("Hr", a.a),
				p = d.a.code("M", a.a),
				h = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				f = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				_ = d.a.ul("Ul", a.a),
				x = d.a.ol("Ol", a.a),
				y = d.a.strong("B", a.a),
				v = d.a.em("I", a.a),
				w = d.a.span("U", a.a),
				E = e => r.a.createElement("del", e),
				k = d.a.sub("Sub", a.a),
				O = d.a.sup("Sup", a.a),
				C = d.a.table("Table", a.a),
				j = d.a.tr("Tr", a.a),
				S = d.a.td("Tdl", a.a),
				P = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				N = d.a.th("Thl", a.a),
				L = d.a.th("Thc", a.a),
				T = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				D = d.a.wrapped(c.a, "A", a.a)
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
				return k
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				_ = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", _.a),
				v = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => i.a.createElement(y, x({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				w = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				E = e => r()(e, w),
				k = e => e.findIndex(w),
				O = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: x,
						shouldBlur: w
					} = e, O = s.document, C = [], j = e.mediaMetadata || null, S = k(O), P = E(O);
					if (w && !r) return i.a.createElement(y, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: _.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: _.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!o, !!d))));
					if (-1 !== S)
						for (let i = S; i <= P; i++) {
							const e = O[i];
							switch (e.e) {
								case h.k:
									C.push(f.c(e, g, i));
									break;
								case h.l:
									C.push(f.d(i));
									break;
								case h.b:
									C.push(f.a(e, j, g, i));
									break;
								case h.c:
									C.push(f.b(e, i));
									break;
								case h.p:
									C.push(f.f(e, j, g, i));
									break;
								case h.z:
									C.push(f.h(e, j, g, i));
									break;
								case h.u:
									C.push(f.g(e, j, g, i));
									break;
								case h.h:
									C.push(Object(b.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									C.push(...Object(b.b)(e, i, j, p, m, t))
							}
						}
					return x ? i.a.createElement(y, {
						className: Object(a.a)(u.j, n)
					}, C) : i.a.createElement(v, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, C)
				};
			class C extends i.a.Component {
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
						return O(t)
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
				return C
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(f),
				_ = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				v = _.a.wrapped(b.a, "A", g.a),
				w = _.a.wrapped(l.a, "ImageBox", g.a),
				E = _.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				k = _.a.div("Placeholder", g.a),
				O = _.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(k, x({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", g.a),
				C = ({
					c: e,
					x: t,
					y: n
				}, s) => o.a.createElement("div", {
					className: g.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
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
				j = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === h.s ? r = n.s.u : n.e === h.r ? r = n.s.gif : n.e === h.t && (r = (e => {
						const t = y.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(v, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				S = (e, t, n, s, r, a) => {
					const c = h.E(n, e.id);
					if (s) return [j(e, t, c)];
					const l = [];
					return c ? c.e === h.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => o.a.createElement("div", {
						className: Object(i.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: s
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(w, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, a)) : c.e === h.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: r
								})
							}, o.a.createElement(v, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? o.a.createElement("video", {
								className: g.a.giphy,
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
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
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
					})(c, t, !!e.c)) : c.e === h.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, a, c, l) => o.a.createElement("div", {
						className: Object(i.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: c
						})
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(O, {
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
				return P
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "e", (function() {
				return A
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				_ = n.n(g);
			const x = 1e3,
				y = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: _.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
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
			var E = Object(u.c)(w),
				k = n("./src/reddit/components/RichTextJson/media.tsx"),
				O = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				j = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts");
			const P = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === p.w ? e.t : A(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, o)
				},
				I = e => a.a.createElement(d.e, {
					key: e
				}),
				N = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(D(r[a], t, n, a));
					return a.a.createElement(d.c, {
						key: s
					}, i)
				},
				L = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				T = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => D(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, o)
				},
				D = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return N(e, t, n, s);
						case p.c:
							return L(e, s);
						case p.k:
							return P(e, n, s);
						case p.l:
							return I(s);
						case p.p:
							return T(e, t, n, s);
						case p.u:
							return B(e, t, n, s);
						case p.z:
							return F(e, t, n, s)
					}
				},
				F = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						c = o.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = o[d],
							{
								H: s,
								D: r
							} = U(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, R(i, t, n))), m[d] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, R(i, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, o))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				B = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(S.f)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, R(e.c, t, n)) : Object(k.b)(r, s, t)
				},
				R = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(M(r, o));
						else if (r.e === p.x) s.push(a.a.createElement(O.a, {
							key: o
						}, R(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(E, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(A(r, n, o))
					}
					return s
				},
				A = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = M({
								t: e.t,
								f: e.f
							}, 0);
							return Object(j.b)(e.u) ? a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return a.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				M = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return H(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = i[t], u = i[c] - l;
						l > d && o.push(H(0, r.substr(d, l - d), `between${a}`)), o.push(H(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && o.push(H(0, r.substr(d), `remaining${a}`)), o
				},
				z = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				H = (e, t, n) => {
					let s = t;
					return s = o()(z, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				U = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/take.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = 10;
			class b extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && n && n()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n,
							pending: r
						} = this.props, o = !e || t && n ? s.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : s.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return a.a.createElement(l.o, {
							onClick: this.onButtonClick
						}, r ? a.a.createElement(u.a, {
							sizePx: h
						}) : o)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: n,
						items: s,
						minimizedLength: r,
						renderItem: i,
						title: d
					} = this.props, {
						expanded: l
					} = this.state, u = s.length > r || t, h = (!u || l ? s : o()(s, r)).map(e => i({
						item: e
					}));
					return a.a.createElement(c.a, {
						className: e,
						headerButton: n,
						title: d
					}, h, a.a.createElement(m.a, null, a.a.createElement(p.a, null, u && this.renderToggleButton())))
				}
			}
			b.defaultProps = {
				minimizedLength: d.Jb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = n.n(b);
			const g = Object(a.c)({
					currentUser: h.i,
					moderated: m.n,
					subscriptions: p.f,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				_ = Object(i.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				x = ({
					item: e
				}) => o.a.createElement(l.a, {
					id: e.id,
					iconUrl: e.iconUrl,
					isNSFW: e.isNSFW,
					key: `${e.type}-${e.name}`,
					name: e.name,
					subscribers: e.subscribers,
					isSubscribed: e.isSubscribed,
					widget: void 0,
					sendEvent: () => void 0,
					type: e.type
				});
			t.a = _(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: r,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === r.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(i));
				return o.a.createElement(c.a, {
					className: f.a.container,
					title: m,
					items: p,
					renderItem: x,
					hasMoreItems: a,
					onLoadMore: d,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = n.n(p);
			const b = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(i.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				g = ({
					item: e
				}) => o.a.createElement("div", {
					className: h.a.listItem,
					key: e.url
				}, o.a.createElement("img", {
					className: h.a.icon,
					src: e.icon
				}), o.a.createElement("div", {
					className: h.a.description
				}, o.a.createElement(a.a, {
					className: h.a.name,
					to: e.url
				}, e.displayText), o.a.createElement("div", {
					className: h.a.meta
				}, s.fbt._({
					"*": "{communities} communities",
					_1: "1 community"
				}, [s.fbt._plural(e.subredditCount, "communities")], {
					hk: "1eyxrS"
				}))));
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: r,
					onLoadMore: i,
					profileName: a
				} = e;
				return r && r.length ? o.a.createElement(u.a, null, o.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: i,
					pending: n,
					renderItem: g,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = n("./src/reddit/selectors/gold/powerups.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = n.n(h);
			const f = Object(p.c)({
				subreddits: function(e, {
					profileName: t
				}) {
					const n = Object(m.mb)(e, {
							userName: t
						}),
						s = Object(u.f)(e);
					return (n && s ? s[n.id] : null) || []
				}
			});

			function g({
				item: e
			}) {
				const t = e.subredditInfo,
					n = o.a.createElement(c.b, {
						iconUrl: t.styles.icon,
						className: b.a.subredditIcon
					});
				return o.a.createElement(l.a, {
					className: b.a.communityItemContainer,
					key: t.id
				}, o.a.createElement("div", {
					className: b.a.iconContainer
				}, o.a.createElement(a.a, {
					to: t.path
				}, n)), o.a.createElement("div", {
					className: b.a.communityDescription
				}, o.a.createElement("div", {
					className: b.a.communityName
				}, o.a.createElement(a.a, {
					to: t.path
				}, t.prefixedName)), o.a.createElement("div", {
					className: b.a.subscriberCount
				}, s.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [s.fbt._plural(e.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(i.b)(f)(({
				subreddits: e
			}) => ! function(e) {
				return e.length > 0 && e.every(e => e.subredditInfo)
			}(e) ? null : o.a.createElement(d.a, {
				title: s.fbt._("Supports Communities", null, {
					hk: "1vCNdZ"
				}),
				items: e,
				renderItem: g
			}))
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
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/controls/OutboundLink/index.tsx"),
				l = n("./src/reddit/controls/Typography/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = n("./node_modules/lodash/isEqual.js"),
				p = n.n(m);
			const h = Object(a.b)(a.d, p.a);
			var b = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = n.n(f),
				_ = n("./src/lib/lessComponent.tsx");
			const x = Object(a.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(b.r)(e, Object(b.m)(e, t))
			}, h);
			t.a = Object(i.b)(x)(({
				trophyCase: e
			}) => 0 === e.length ? null : o.a.createElement(d.a, {
				title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: O
			}));
			const y = _.a.wrapped(u.a, "TrophyItem", g.a),
				v = _.a.div("TrophyIcon", g.a),
				w = _.a.h5("TrophyName", g.a),
				E = _.a.div("TrophyContent", g.a),
				k = _.a.wrapped(l.c, "Description", g.a);

			function O({
				item: e
			}) {
				const t = o.a.createElement("img", {
					src: e.icon,
					title: e.name
				});
				return o.a.createElement(y, {
					key: e.id
				}, o.a.createElement(v, null, e.url ? o.a.createElement(c.b, {
					href: e.url,
					source: void 0,
					isSponsored: !1
				}, t) : t), o.a.createElement(E, null, o.a.createElement(w, null, e.name), o.a.createElement(k, null, e.description)))
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
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
			const u = o.a.wrapped(i.b, "SubredditIcon", c.a),
				m = o.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
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
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class _ extends r.a.PureComponent {
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
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const x = Object(h.c)(_),
				y = Object(i.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				v = Object(o.b)(y),
				w = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(x, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (s) {
						case b.jd.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case b.jd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(x, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				};
			t.b = v(w)
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
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => o.a.createElement(i.q, u({}, n, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					small: n,
					...s
				}) => o.a.createElement(i.q, u({}, s, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(s.className, c.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class b extends o.a.Component {
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
						small: s = !1,
						isFullWidth: r = !1
					} = this.props, i = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s,
						isFullWidth: r
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, i, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, i, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = o.a.div("WidgetBackground", d.a),
				l = o.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				w = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = n.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => o.a.createElement(h.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? o.a.createElement(g.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(I, j({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.q, {
					className: C.a.bottomButton,
					kind: f.a.Button,
					priority: f.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(d.c)({
					hideNSFWPref: E.B,
					nightmode: E.V
				}),
				I = Object(i.b)(P)(e => {
					const t = Object(_.a)();
					return o.a.createElement("div", {
						className: Object(c.a)(C.a.communityItemContainer, {
							[C.a.withBottomFlair]: e.isNSFW
						})
					}, o.a.createElement(v.a, {
						className: C.a.communityItemExpandCenter,
						widthRight: b.t
					}, o.a.createElement("div", {
						className: C.a.iconContainer
					}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
						className: C.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? o.a.createElement(x.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(C.a.defaultCommunityIcon, {
							[C.a.mNightmode]: e.nightmode
						})
					}) : o.a.createElement(y.a, {
						className: C.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: C.a.communityDescriptionContainer
					}, o.a.createElement(a.a, {
						className: C.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(k.b)(e.name, e.type),
						to: Object(k.a)(e.name, e.type)
					}, Object(k.b)(e.name, e.type)), o.a.createElement("div", {
						className: C.a.communityInfoContainer
					}, !!e.subscribers && o.a.createElement("p", {
						className: C.a.subscriberCount
					}, s.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [s.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && o.a.createElement(l.b, {
						className: C.a.nsfwFlair,
						flair: {
							type: w.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(g.a, {
						className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
						sizePx: 12
					}) : o.a.createElement(f.q, {
						className: Object(c.a)(C.a.communityCta, {
							[C.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
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
					}) : o.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && o.a.createElement("p", {
						title: e.description,
						className: C.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				x = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				v = n.n(y);
			var w = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let o, i = t.username,
						a = "";
					return s !== m.a.Twitter ? null : (o = r.a.createElement(_.a, {
						className: v.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, r.a.createElement(x.a, null, r.a.createElement("span", {
						className: v.a.icon
					}, o), r.a.createElement(f.b, {
						className: v.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: n
					}, r.a.createElement("div", {
						className: v.a.linkTitle
					}, r.a.createElement("span", {
						className: v.a.name
					}, i), r.a.createElement(g.a, {
						className: v.a.linkIcon
					})), r.a.createElement("div", {
						className: v.a.linkDescription
					}, a))))
				},
				E = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				k = n.n(E);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(i.c)({
				twitterAccount: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(p.c)(e, {
					profileName: t.name
				}) : null,
				user: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(h.mb)(e, {
					userName: t.name
				}) : null
			}), j = Object(o.b)(C, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.k(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(a.a, null, r.a.createElement(c.b, null, r.a.createElement(c.a, null, O._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && r.a.createElement("div", {
					className: k.a.account
				}, r.a.createElement(w, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				d = n("./src/reddit/actions/gold/tooltips.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/selectors/experiments/survey.ts"),
				x = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = n("./src/reddit/selectors/listings.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isPredictionsPage: p.L,
					isProfilePostListing: p.I,
					isTopicPage: p.N,
					pageLayer: e => e
				})
			}
			const O = k(),
				C = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(y.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const n = Object(w.F)(e, t.listingName);
							return Object(x.k)(e, {
								subredditId: n
							})
						}
						return Object(v.P)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: n,
						isPredictionsPage: s,
						inSubredditOrProfile: r
					}) => {
						if (s) {
							const t = Object(w.F)(e, n);
							return Object(x.j)(e, {
								subredditId: t
							})
						}
						return Object(v.C)(e, t, n, r)
					}),
					subredditsById: w.ab,
					viewportDataLoaded: E.a,
					pageReferrer: p.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: _.d
				},
				j = Object(r.c)(C),
				S = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: n => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.I(n))
					},
					fireAdPixelsOfType: (t, n) => {
						e(c.x(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s) => {
						e(c.L(t, s))
					},
					trackOnPostExitedViewport: (t, n, s, r, o) => {
						e(c.M(t, s, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				P = Object(s.b)(j, S, (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(b.g)(e, t, "post", n.listingKey, n.hostPostId, n.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(m.c)(O(P(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.P.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = o[e];
					return t && t() || ""
				},
				a = {
					[r.Wb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Wb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Wb.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Wb.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Wb.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Wb.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				d = e => {
					const t = a[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
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
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "|downsized";

			function i(e, t) {
				return r + e + (t ? o : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(r)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function c(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
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
						subredditName: s
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(d.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: b(0, t),
							subredditName: s,
							[r]: n.id
						},
						i = Object(l.A)(e, {
							subredditName: s
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
				g = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...f(e, t)
					}
				},
				_ = e => t => ({
					...p(t),
					...g(t, e)
				}),
				x = e => t => ({
					...h(t),
					source: "global",
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				y = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				v = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				w = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				k = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = d.a.wrapped(e => {
				const t = Object(c.a)();
				return r.a.createElement("i", {
					className: `${Object(o.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(o.a, null, e.desc))
			}, "GiftIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("rightAligned", o.a)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
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
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: o,
					gutter: a,
					...l
				} = e;
				return r.a.createElement("div", c({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: o,
						height: s,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(a);
			const c = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(i.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(i.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/profilePosts.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				b = n("./src/reddit/components/EmptyProfile/index.ts"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				_ = n("./src/reddit/components/ListingPostList/index.tsx"),
				x = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				y = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/helpers/trackers/screenview.ts"),
				E = n("./src/reddit/layout/page/Listing/index.tsx"),
				k = n("./src/reddit/models/ContentGate.ts"),
				O = n("./src/reddit/pages/ErrorPages/index.tsx"),
				C = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/user.ts");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(v.t)(),
				I = Object(d.a)(v.B, j.cb, (e, {
					location: t
				}) => r()([...Object(l.a)(t.search)]), v.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(C.j)(e, {
					profileName: t.params.profileName
				}), j.J, (e, {
					match: t
				}) => Object(j.e)(e, c.Yb + t.params.profileName), (e, t, n, s, r, o, i, a) => {
					const {
						sort: d,
						t: c
					} = Object(p.b)(n), l = Object(u.a)(`u_${r}`, d, n);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: s,
						listingKey: l,
						profileName: r,
						sort: d,
						timeSort: c
					}
				}),
				N = Object(a.b)(I, (e, t) => ({
					onLoadMore: () => e(m.morePostsRequested()),
					onLayoutChange: () => e(m.profilePostsRequested({
						...t.match,
						queryParams: r()([...Object(l.a)(t.location.search)])
					}))
				}));
			class L extends i.a.Component {
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isOwnProfile: n,
						isProfileNSFW: s,
						listingKey: r,
						onLoadMore: o,
						onLayoutChange: a,
						pageLayer: d,
						profileName: l,
						sort: u,
						timeSort: m
					} = this.props;
					if (!d || !l) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return i.a.createElement(h.default, {
						contentGateType: e.profileDeleted ? k.a.ProfileDeleted : k.a.ProfileSuspended,
						profileName: l
					});
					if (403 === d.status) return i.a.createElement(O.a, null);
					if (404 === d.status) return i.a.createElement(h.default, {
						contentGateType: k.a.ProfileDoesNotExist,
						profileName: l
					});
					const p = l.toLowerCase(),
						v = `/user/${l}/posts/`,
						C = {
							listingKey: r,
							listingName: p
						};
					if (!t && s && !n) return i.a.createElement(h.default, {
						contentGateType: k.a.Nsfw,
						subredditName: l
					});
					const j = {
						sort: u,
						baseUrl: v,
						sortOptions: c.vb,
						subredditId: this.props.subredditId,
						timeSort: m
					};
					return i.a.createElement(E.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, {
							profileName: l
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(f.a, j), i.a.createElement(g.a, null), i.a.createElement(_.a, {
							listingKey: r,
							listingName: p,
							listingViewed: (e, t) => Object(w.r)(r, u, t, e, m),
							noPostsComponent: () => i.a.createElement(b.c, {
								profileName: l,
								timeSort: m
							}),
							onLoadMore: o,
							onTryAgain: a,
							inSubredditOrProfile: !1
						})),
						sidebar: i.a.createElement(y.a, S({}, C, {
							profileName: l
						}))
					})
				}
			}
			t.default = P(N(L))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.zb
					});
					return !(!t || Object(s.xd)(t))
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.zb
					}) === s.Pb.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			}));
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.T)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const n = m(e, t);
					if (!n) return l;
					const s = Object(o.X)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : l
				},
				m = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.T)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, s, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + n > t) && (!(t + n > a) && !((e, t, n) => {
						const s = n[t - 1],
							o = n[t],
							i = o && Object(r.F)(e, {
								postId: s
							}) || null,
							a = o && Object(r.F)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, s)))
				},
				h = [3],
				b = (e, t, {
					listingKey: n
				}) => {
					const s = t.slice().sort();
					let o = -1;
					const i = Object(r.y)(e, {
							listingKey: n
						}),
						a = [];
					return h.forEach(t => {
						let n = o + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !p(e, n, t, i, s);) n += 1;
							n < i.length && (a.push(n), o = n)
						}
					}), a
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.I)(e),
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
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.ed
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.jd.SmIcon || t === s.jd.SmIconHc
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePosts.d7a441505d48fe9b4b0f.js.map