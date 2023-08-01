// https://www.redditstatic.com/desktop2x/vendors~ModerationPages.e2f789646ede67afeaba.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModerationPages", "vendors~PostCreation~Subreddit", "vendors~reddit-components-MediumPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function n(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var o, i = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						u = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						d = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						f = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						m = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						_ = !i && !l && /macintosh/i.test(t),
						g = !s && !d && !p && !f && /linux/i.test(t),
						b = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = r(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !y && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: v || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: v || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, b ? (o.msedge = e, o.version = b) : (o.msie = e, o.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: b
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : d ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : f ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? o = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, v && (o.version = v)) : i ? (o = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (o.version = v)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || r(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !s && !o.silk ? !o.windowsphone && i ? (o[i] = e, o.ios = e, o.osname = "iOS") : _ ? (o.mac = e, o.osname = "macOS") : x ? (o.xbox = e, o.osname = "Xbox") : m ? (o.windows = e, o.osname = "Windows") : g && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var k = "";
					o.windows ? k = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? k = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? k = (k = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? k = (k = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? k = r(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? k = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? k = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? k = r(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (k = r(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (o.osversion = k);
					var j = !o.windows && k.split(".")[0];
					return y || u || "ipad" == i || s && (3 == j || j >= 4 && !w) || o.silk ? o.tablet = e : (w || "iphone" == i || "ipod" == i || s || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var r, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) n.push(t(e[r]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), r = o(e, (function(e) {
							var r = t - n(e);
							return o((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, n, o) {
					var s = r;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (s = t(o));
					var a = "" + s.version;
					for (var u in e)
						if (e.hasOwnProperty(u) && s[u]) {
							if ("string" != typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
							return i([a, e[u]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = s, r.compareVersions = i, r.check = function(e, t, r) {
					return !s(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/classnames/index.js": function(e, t, r) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function o() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var i = typeof n;
							if ("string" === i || "number" === i) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var s = o.apply(null, n);
									s && e.push(s)
								}
							} else if ("object" === i)
								if (n.toString === Object.prototype.toString)
									for (var a in n) r.call(n, a) && n[a] && e.push(a);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
					return o
				}.apply(t, [])) || (e.exports = n)
			}()
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
					var r = [];
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var i = o.element,
								s = a(i),
								u = this._rootContainsTarget(i),
								c = o.entry,
								l = t && u && this._computeTargetAndRootIntersection(i, r),
								d = o.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: r,
									intersectionRect: l
								});
							c ? t && u ? this._hasCrossedThreshold(c, d) && this._queuedEntries.push(d) : c && c.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(r, n) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var o, i, s, u, l, d, p, f, h = a(r), m = c(r), _ = !1; !_;) {
								var g = null,
									b = 1 == m.nodeType ? e.getComputedStyle(m) : {};
								if ("none" == b.display) return;
								if (m == this.root || m == t ? (_ = !0, g = n) : m != t.body && m != t.documentElement && "visible" != b.overflow && (g = a(m)), g && (o = g, i = h, s = void 0, u = void 0, l = void 0, d = void 0, p = void 0, f = void 0, s = Math.max(o.top, i.top), u = Math.min(o.bottom, i.bottom), l = Math.max(o.left, i.left), d = Math.min(o.right, i.right), f = u - s, !(h = (p = d - l) >= 0 && f >= 0 && {
										top: s,
										bottom: u,
										left: l,
										right: d,
										width: p,
										height: f
									}))) break;
								m = c(m)
							}
							return h
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var r = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || n.clientWidth,
								width: r.clientWidth || n.clientWidth,
								bottom: r.clientHeight || n.clientHeight,
								height: r.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, o.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, r) {
								return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
							})),
							r = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== n)
							for (var o = 0; o < this.thresholds.length; o++) {
								var i = this.thresholds[o];
								if (i == r || i == n || i < r != i < n) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || u(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return u(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = n
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
						r = t.width * t.height,
						n = this.intersectionRect,
						o = n.width * n.height;
					this.intersectionRatio = r ? o / r : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var r, n, o, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							r(), o = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, r, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function s(e, t, r, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (r) {}
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

				function u(e, t) {
					for (var r = t; r;) {
						if (r == e) return !0;
						r = c(r)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function o(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === o(e)
			}

			function s(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var u = {
					"http:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function d(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var u = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === o(r)) return ! function(e) {
							return "[object RegExp]" === o(e)
						}(r.validate) ? i(r.validate) ? n.validate = r.validate : l(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? n.normalize = r.normalize : r.normalize ? l(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === o(e)
						}(r) ? l(t, r): u.push(t)
					}
				})), u.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var d = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(s).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function p(e, t) {
				var r = e.__index__,
					n = e.__last_index__,
					o = e.__text_cache__.slice(r, n);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
			}

			function f(e, t) {
				var r = new p(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, u, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, d(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, d(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, o, i, s, a, u;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (u = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || u < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, s = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(f(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(f(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = r("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = r("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = r("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = r("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_arrayAggregator.js": function(e, t) {
			e.exports = function(e, t, r, n) {
				for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
					var s = e[o];
					t(n, s, r(s), e)
				}
				return n
			}
		},
		"./node_modules/lodash/_baseAggregator.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t, r, o) {
				return n(e, (function(e, n, i) {
					t(o, e, r(e), i)
				})), o
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = [];
				return n(e, (function(e, n, o) {
					t(e, n, o) && r.push(e)
				})), r
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var r = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, o, i) {
				for (var s = -1, a = n(r((t - e) / (o || 1)), 0), u = Array(a); a--;) u[i ? a : ++s] = e, e += o;
				return u
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, o) {
				return o(e, (function(e, o, i) {
					r = n ? (n = !1, e) : t(r, e, o, i)
				})), r
			}
		},
		"./node_modules/lodash/_createAggregator.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayAggregator.js"),
				o = r("./node_modules/lodash/_baseAggregator.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return function(r, a) {
					var u = s(r) ? n : o,
						c = t ? t() : {};
					return u(r, e, i(a, 2), c)
				}
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRange.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, r, s) {
					return s && "number" != typeof s && o(t, r, s) && (r = s = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), s = void 0 === s ? t < r ? 1 : -1 : i(s), n(t, r, s, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				o = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = o(r)) == r ? r : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, r)
			}
		},
		"./node_modules/lodash/countBy.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseAssignValue.js"),
				o = r("./node_modules/lodash/_createAggregator.js"),
				i = Object.prototype.hasOwnProperty,
				s = o((function(e, t, r) {
					i.call(e, r) ? ++e[r] : n(e, r, 1)
				}));
			e.exports = s
		},
		"./node_modules/lodash/filter.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayFilter.js"),
				o = r("./node_modules/lodash/_baseFilter.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (s(e) ? n : o)(e, i(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				o = r("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseIndexOf.js"),
				o = r("./node_modules/lodash/isArrayLike.js"),
				i = r("./node_modules/lodash/isString.js"),
				s = r("./node_modules/lodash/toInteger.js"),
				a = r("./node_modules/lodash/values.js"),
				u = Math.max;
			e.exports = function(e, t, r, c) {
				e = o(e) ? e : a(e), r = r && !c ? s(r) : 0;
				var l = e.length;
				return r < 0 && (r = u(l + r, 0)), i(e) ? r <= l && e.indexOf(t, r) > -1 : !!l && n(e, t, r) > -1
			}
		},
		"./node_modules/lodash/map.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayMap.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/_baseMap.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (s(e) ? n : i)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/range.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				o = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var u = a(e) ? n : s,
					c = arguments.length < 3;
				return u(e, i(t, 4), r, c, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				o = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				a = 4294967295,
				u = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > s) return [];
				var r = a,
					c = u(e, a);
				t = o(t), e -= a;
				for (var l = n(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/lodash/transform.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayEach.js"),
				o = r("./node_modules/lodash/_baseCreate.js"),
				i = r("./node_modules/lodash/_baseForOwn.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/_getPrototype.js"),
				u = r("./node_modules/lodash/isArray.js"),
				c = r("./node_modules/lodash/isBuffer.js"),
				l = r("./node_modules/lodash/isFunction.js"),
				d = r("./node_modules/lodash/isObject.js"),
				p = r("./node_modules/lodash/isTypedArray.js");
			e.exports = function(e, t, r) {
				var f = u(e),
					h = f || c(e) || p(e);
				if (t = s(t, 4), null == r) {
					var m = e && e.constructor;
					r = h ? f ? new m : [] : d(e) && l(m) ? o(a(e)) : {}
				}
				return (h ? n : i)(e, (function(e, n, o) {
					return t(r, e, n, o)
				})), r
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/p-debounce/index.js": function(e, t, r) {
			"use strict";
			const n = (e, t, r = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, o, i = [];
				return function(...s) {
					return new Promise(a => {
						const u = r.leading && !o;
						clearTimeout(o), o = setTimeout(() => {
							o = null;
							const t = r.leading ? n : e.apply(this, s);
							for (a of i) a(t);
							i = []
						}, t), u ? (n = e.apply(this, s), a(n)) : i.push(a)
					})
				}
			};
			e.exports = n, e.exports.default = n
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return fe
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function i(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function s(e) {
				var t = i(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof i(e).Element || e instanceof Element
			}

			function u(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function d(e) {
				return o(l(e)).left + s(e).scrollLeft
			}

			function p(e) {
				return i(e).getComputedStyle(e)
			}

			function f(e) {
				var t = p(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function h(e, t, r) {
				void 0 === r && (r = !1);
				var n, a, p = l(t),
					h = o(e),
					m = u(t),
					_ = {
						scrollLeft: 0,
						scrollTop: 0
					},
					g = {
						x: 0,
						y: 0
					};
				return (m || !m && !r) && (("body" !== c(t) || f(p)) && (_ = (n = t) !== i(n) && u(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : s(n)), u(t) ? ((g = o(t)).x += t.clientLeft, g.y += t.clientTop) : p && (g.x = d(p))), {
					x: h.left + _.scrollLeft - g.x,
					y: h.top + _.scrollTop - g.y,
					width: h.width,
					height: h.height
				}
			}

			function m(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function _(e) {
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function g(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : u(t) && f(t) ? t : e(_(t))
					}(e),
					n = "body" === c(r),
					o = i(r),
					s = n ? [o].concat(o.visualViewport || [], f(r) ? r : []) : r,
					a = t.concat(s);
				return n ? a : a.concat(g(_(s)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function v(e) {
				return u(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = i(e), r = v(e); r && b(r) && "static" === p(r).position;) r = v(r);
				return r && "body" === c(r) && "static" === p(r).position ? t : r || function(e) {
					for (var t = _(e); u(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var r = p(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var w = "top",
				x = "bottom",
				k = "right",
				j = "left",
				D = "auto",
				F = [w, x, k, j],
				E = "start",
				O = "end",
				z = "clippingParents",
				A = "viewport",
				C = "popper",
				B = "reference",
				I = F.reduce((function(e, t) {
					return e.concat([t + "-" + E, t + "-" + O])
				}), []),
				M = [].concat(F, [D]).reduce((function(e, t) {
					return e.concat([t, t + "-" + E, t + "-" + O])
				}), []),
				T = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var P = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function S() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function L(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					i = void 0 === o ? P : o;
				return function(e, t, r) {
					void 0 === r && (r = i);
					var o, s, u = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, P), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						c = [],
						l = !1,
						d = {
							state: u,
							setOptions: function(r) {
								p(), u.options = Object.assign(Object.assign(Object.assign({}, i), u.options), r), u.scrollParents = {
									reference: a(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var o = function(e) {
									var t = R(e);
									return T.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, u.options.modifiers)));
								return u.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), u.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: u,
											name: t,
											instance: d,
											options: n
										});
										c.push(i || function() {})
									}
								})), d.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = u.elements,
										t = e.reference,
										r = e.popper;
									if (S(t, r)) {
										u.rects = {
											reference: h(t, y(r), "fixed" === u.options.strategy),
											popper: m(r)
										}, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach((function(e) {
											return u.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < u.orderedModifiers.length; n++)
											if (!0 !== u.reset) {
												var o = u.orderedModifiers[n],
													i = o.fn,
													s = o.options,
													a = void 0 === s ? {} : s,
													c = o.name;
												"function" == typeof i && (u = i({
													state: u,
													options: a,
													name: c,
													instance: d
												}) || u)
											} else u.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									d.forceUpdate(), e(u)
								}))
							}, function() {
								return s || (s = new Promise((function(e) {
									Promise.resolve().then((function() {
										s = void 0, e(o())
									}))
								}))), s
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!S(e, t)) return d;

					function p() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return d.setOptions(r).then((function(e) {
						!l && r.onFirstUpdate && r.onFirstUpdate(e)
					})), d
				}
			}
			var q = {
				passive: !0
			};

			function Z(e) {
				return e.split("-")[0]
			}

			function N(e) {
				return e.split("-")[1]
			}

			function W(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					i = o ? Z(o) : null,
					s = o ? N(o) : null,
					a = r.x + r.width / 2 - n.width / 2,
					u = r.y + r.height / 2 - n.height / 2;
				switch (i) {
					case w:
						t = {
							x: a,
							y: r.y - n.height
						};
						break;
					case x:
						t = {
							x: a,
							y: r.y + r.height
						};
						break;
					case k:
						t = {
							x: r.x + r.width,
							y: u
						};
						break;
					case j:
						t = {
							x: r.x - n.width,
							y: u
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var c = i ? W(i) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (s) {
						case E:
							t[c] = Math.floor(t[c]) - Math.floor(r[l] / 2 - n[l] / 2);
							break;
						case O:
							t[c] = Math.floor(t[c]) + Math.ceil(r[l] / 2 - n[l] / 2)
					}
				}
				return t
			}
			var V = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function U(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					s = e.offsets,
					a = e.position,
					u = e.gpuAcceleration,
					c = e.adaptive,
					d = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(s),
					p = d.x,
					f = d.y,
					h = s.hasOwnProperty("x"),
					m = s.hasOwnProperty("y"),
					_ = j,
					g = w,
					b = window;
				if (c) {
					var v = y(r);
					v === i(r) && (v = l(r)), o === w && (g = x, f -= v.clientHeight - n.height, f *= u ? 1 : -1), o === j && (_ = k, p -= v.clientWidth - n.width, p *= u ? 1 : -1)
				}
				var D, F = Object.assign({
					position: a
				}, c && V);
				return u ? Object.assign(Object.assign({}, F), {}, ((D = {})[g] = m ? "0" : "", D[_] = h ? "0" : "", D.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + f + "px)" : "translate3d(" + p + "px, " + f + "px, 0)", D)) : Object.assign(Object.assign({}, F), {}, ((t = {})[g] = m ? f + "px" : "", t[_] = h ? p + "px" : "", t.transform = "", t))
			}
			var $ = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return $[e]
				}))
			}
			var K = {
				start: "end",
				end: "start"
			};

			function Y(e) {
				return e.replace(/start|end/g, (function(e) {
					return K[e]
				}))
			}

			function G(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
				}
				return !1
			}

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Q(e, t) {
				return t === A ? J(function(e) {
					var t = i(e),
						r = l(e),
						n = t.visualViewport,
						o = r.clientWidth,
						s = r.clientHeight,
						a = 0,
						u = 0;
					return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, u = n.offsetTop)), {
						width: o,
						height: s,
						x: a + d(e),
						y: u
					}
				}(e)) : u(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						r = s(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -r.scrollLeft + d(e),
						u = -r.scrollTop;
					return "rtl" === p(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: a,
						y: u
					}
				}(l(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = g(e),
							r = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && u(e) ? y(e) : e;
						return a(r) ? t.filter((function(e) {
							return a(e) && G(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					i = o[0],
					s = o.reduce((function(t, r) {
						var n = Q(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Q(e, i));
				return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					i = void 0 === n ? e.placement : n,
					s = r.boundary,
					u = void 0 === s ? z : s,
					c = r.rootBoundary,
					d = void 0 === c ? A : c,
					p = r.elementContext,
					f = void 0 === p ? C : p,
					h = r.altBoundary,
					m = void 0 !== h && h,
					_ = r.padding,
					g = void 0 === _ ? 0 : _,
					b = te("number" != typeof g ? g : re(g, F)),
					v = f === C ? B : C,
					y = e.elements.reference,
					j = e.rects.popper,
					D = e.elements[m ? v : f],
					E = ee(a(D) ? D : D.contextElement || l(e.elements.popper), u, d),
					O = o(y),
					I = H({
						reference: O,
						element: j,
						strategy: "absolute",
						placement: i
					}),
					M = J(Object.assign(Object.assign({}, j), I)),
					T = f === C ? M : O,
					R = {
						top: E.top - T.top + b.top,
						bottom: T.bottom - E.bottom + b.bottom,
						left: E.left - T.left + b.left,
						right: T.right - E.right + b.right
					},
					P = e.modifiersData.offset;
				if (f === C && P) {
					var S = P[i];
					Object.keys(R).forEach((function(e) {
						var t = [k, x].indexOf(e) >= 0 ? 1 : -1,
							r = [w, x].indexOf(e) >= 0 ? "y" : "x";
						R[e] += S[r] * t
					}))
				}
				return R
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ie(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function se(e) {
				return [w, k, x, j].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = L({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								r = e.instance,
								n = e.options,
								o = n.scroll,
								s = void 0 === o || o,
								a = n.resize,
								u = void 0 === a || a,
								c = i(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return s && l.forEach((function(e) {
									e.addEventListener("scroll", r.update, q)
								})), u && c.addEventListener("resize", r.update, q),
								function() {
									s && l.forEach((function(e) {
										e.removeEventListener("scroll", r.update, q)
									})), u && c.removeEventListener("resize", r.update, q)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = H({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								i = r.adaptive,
								s = void 0 === i || i,
								a = {
									placement: Z(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), U(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: s
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), U(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								u(o) && c(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										u(n) && c(n) && (Object.assign(n.style, i), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.offset,
								i = void 0 === o ? [0, 0] : o,
								s = M.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = Z(e),
											o = [j, w].indexOf(n) >= 0 ? -1 : 1,
											i = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											s = i[0],
											a = i[1];
										return s = s || 0, a = (a || 0) * o, [j, k].indexOf(n) >= 0 ? {
											x: a,
											y: s
										} : {
											x: s,
											y: a
										}
									}(r, t.rects, i), e
								}), {}),
								a = s[t.placement],
								u = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, i = void 0 === o || o, s = r.altAxis, a = void 0 === s || s, u = r.fallbackPlacements, c = r.padding, l = r.boundary, d = r.rootBoundary, p = r.altBoundary, f = r.flipVariations, h = void 0 === f || f, m = r.allowedAutoPlacements, _ = t.options.placement, g = Z(_), b = u || (g === _ || !h ? [X(_)] : function(e) {
										if (Z(e) === D) return [];
										var t = X(e);
										return [Y(e), t, Y(t)]
									}(_)), v = [_].concat(b).reduce((function(e, r) {
										return e.concat(Z(r) === D ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												i = r.rootBoundary,
												s = r.padding,
												a = r.flipVariations,
												u = r.allowedAutoPlacements,
												c = void 0 === u ? M : u,
												l = N(n),
												d = (l ? a ? I : I.filter((function(e) {
													return N(e) === l
												})) : F).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: i,
														padding: s
													})[Z(r)], t
												}), {});
											return Object.keys(d).sort((function(e, t) {
												return d[e] - d[t]
											}))
										}(t, {
											placement: r,
											boundary: l,
											rootBoundary: d,
											padding: c,
											flipVariations: h,
											allowedAutoPlacements: m
										}) : r)
									}), []), y = t.rects.reference, O = t.rects.popper, z = new Map, A = !0, C = v[0], B = 0; B < v.length; B++) {
									var T = v[B],
										R = Z(T),
										P = N(T) === E,
										S = [w, x].indexOf(R) >= 0,
										L = S ? "width" : "height",
										q = ne(t, {
											placement: T,
											boundary: l,
											rootBoundary: d,
											altBoundary: p,
											padding: c
										}),
										W = S ? P ? k : j : P ? x : w;
									y[L] > O[L] && (W = X(W));
									var H = X(W),
										V = [];
									if (i && V.push(q[R] <= 0), a && V.push(q[W] <= 0, q[H] <= 0), V.every((function(e) {
											return e
										}))) {
										C = T, A = !1;
										break
									}
									z.set(T, V)
								}
								if (A)
									for (var U = function(e) {
											var t = v.find((function(t) {
												var r = z.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return C = t, "break"
										}, $ = h ? 3 : 1; $ > 0; $--) {
										if ("break" === U($)) break
									}
								t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								i = void 0 === o || o,
								s = r.altAxis,
								a = void 0 !== s && s,
								u = r.boundary,
								c = r.rootBoundary,
								l = r.altBoundary,
								d = r.padding,
								p = r.tether,
								f = void 0 === p || p,
								h = r.tetherOffset,
								_ = void 0 === h ? 0 : h,
								g = ne(t, {
									boundary: u,
									rootBoundary: c,
									padding: d,
									altBoundary: l
								}),
								b = Z(t.placement),
								v = N(t.placement),
								D = !v,
								F = W(b),
								O = "x" === F ? "y" : "x",
								z = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								C = t.rects.popper,
								B = "function" == typeof _ ? _(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : _,
								I = {
									x: 0,
									y: 0
								};
							if (z) {
								if (i) {
									var M = "y" === F ? w : j,
										T = "y" === F ? x : k,
										R = "y" === F ? "height" : "width",
										P = z[F],
										S = z[F] + g[M],
										L = z[F] - g[T],
										q = f ? -C[R] / 2 : 0,
										H = v === E ? A[R] : C[R],
										V = v === E ? -C[R] : -A[R],
										U = t.elements.arrow,
										$ = f && U ? m(U) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										K = X[M],
										Y = X[T],
										G = oe(0, A[R], $[R]),
										J = D ? A[R] / 2 - q - G - K - B : H - G - K - B,
										Q = D ? -A[R] / 2 + q + G + Y + B : V + G + Y + B,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === F ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][F] : 0,
										ie = z[F] + J - re - te,
										se = z[F] + Q - re,
										ae = oe(f ? Math.min(S, ie) : S, P, f ? Math.max(L, se) : L);
									z[F] = ae, I[F] = ae - P
								}
								if (a) {
									var ue = "x" === F ? w : j,
										ce = "x" === F ? x : k,
										le = z[O],
										de = oe(le + g[ue], le, le - g[ce]);
									z[O] = de, I[O] = de - le
								}
								t.modifiersData[n] = I
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								i = r.modifiersData.popperOffsets,
								s = Z(r.placement),
								a = W(s),
								u = [j, k].indexOf(s) >= 0 ? "height" : "width";
							if (o && i) {
								var c = r.modifiersData[n + "#persistent"].padding,
									l = m(o),
									d = "y" === a ? w : j,
									p = "y" === a ? x : k,
									f = r.rects.reference[u] + r.rects.reference[a] - i[a] - r.rects.popper[u],
									h = i[a] - r.rects.reference[a],
									_ = y(o),
									g = _ ? "y" === a ? _.clientHeight || 0 : _.clientWidth || 0 : 0,
									b = f / 2 - h / 2,
									v = c[d],
									D = g - l[u] - c[p],
									F = g / 2 - l[u] / 2 + b,
									E = oe(v, F, D),
									O = a;
								r.modifiersData[n] = ((t = {})[O] = E, t.centerOffset = E - F, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								s = r.padding,
								a = void 0 === s ? 0 : s;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && G(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : re(a, F))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = ne(t, {
									elementContext: "reference"
								}),
								a = ne(t, {
									altBoundary: !0
								}),
								u = ie(s, n),
								c = ie(a, o, i),
								l = se(u),
								d = se(c);
							t.modifiersData[r] = {
								referenceClippingOffsets: u,
								popperEscapeOffsets: c,
								isReferenceHidden: l,
								hasPopperEscaped: d
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": d
							})
						}
					}]
				}),
				ue = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = r.n(ue),
				le = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				de = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				pe = [],
				fe = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						i = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || pe
						},
						s = n.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = s[0],
						u = s[1],
						c = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									u({
										styles: le(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						l = n.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]),
						d = n.useRef();
					return de((function() {
						d.current && d.current.setOptions(l)
					}), [l]), de((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || ae)(e, t, l);
							return d.current = n,
								function() {
									n.destroy(), d.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: d.current ? d.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: d.current ? d.current.update : null,
						forceUpdate: d.current ? d.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, s) {
						if (t === s) return !0;
						if (t && s && "object" == typeof t && "object" == typeof s) {
							if (t.constructor !== s.constructor) return !1;
							var a, u, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != s.length) return !1;
								for (u = a; 0 != u--;)
									if (!e(t[u], s[u])) return !1;
								return !0
							}
							if (n && t instanceof Map && s instanceof Map) {
								if (t.size !== s.size) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!s.has(u.value[0])) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!e(u.value[1], s.get(u.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && s instanceof Set) {
								if (t.size !== s.size) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!s.has(u.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(s)) {
								if ((a = t.length) != s.length) return !1;
								for (u = a; 0 != u--;)
									if (t[u] !== s[u]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
							if ((a = (c = Object.keys(t)).length) !== Object.keys(s).length) return !1;
							for (u = a; 0 != u--;)
								if (!Object.prototype.hasOwnProperty.call(s, c[u])) return !1;
							if (r && t instanceof Element) return !1;
							for (u = a; 0 != u--;)
								if (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u] || !t.$$typeof) && !e(t[c[u]], s[c[u]])) return !1;
							return !0
						}
						return t != t && s != s
					}(e, t)
				} catch (s) {
					if ((s.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw s
				}
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				o = function() {
					var e = 1,
						t = new WeakMap,
						r = function(n, o) {
							return "number" == typeof n || "string" == typeof n ? o ? "idx-" + o : "val-" + n : t.has(n) ? "uid" + t.get(n) : (t.set(n, e++), r(n))
						};
					return r
				},
				i = (o(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: o()
					}
				}),
				s = i(),
				a = n.createContext(i()),
				u = function() {
					return n.useState((e = n.useContext(a), {
						uid: r = function(e) {
							return e ? e.prefix : ""
						}(t = e || s) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return r + t.uid(e)
						}
					}));
					var e, t, r
				},
				c = function() {
					return u()[0].uid
				},
				l = function() {
					return u()[0].gen
				}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, n) {
				var o = r ? r.call(n, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					s = Object.keys(t);
				if (i.length !== s.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), u = 0; u < i.length; u++) {
					var c = i[u];
					if (!a(c)) return !1;
					var l = e[c],
						d = t[c];
					if (!1 === (o = r ? r.call(n, l, d, c) : void 0) || void 0 === o && l !== d) return !1
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~ModerationPages.e2f789646ede67afeaba.js.map