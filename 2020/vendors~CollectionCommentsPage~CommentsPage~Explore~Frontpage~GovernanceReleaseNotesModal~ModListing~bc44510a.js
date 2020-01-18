// https://www.redditstatic.com/desktop2x/vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~bc44510a.a7e4df1d25079ceac148.js
// Retrieved at 1/18/2020, 6:00:27 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~bc44510a"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, o) {
			var i;
			i = function() {
				var e = !0;

				function t(t) {
					function o(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[1] || ""
					}

					function i(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[2] || ""
					}
					var n, r = o(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						h = /silk/i.test(t),
						u = /sailfish/i.test(t),
						l = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						v = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						f = !r && !h && /macintosh/i.test(t),
						b = !s && !u && !l && !m && /linux/i.test(t),
						g = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = o(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !w && /[^-]mobi/i.test(t),
						I = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: _ || o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: _ || o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : p ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (n.msedge = e, n.version = g) : (n.msie = e, n.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: o(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: o(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : h ? n = {
						name: "Amazon Silk",
						silk: e,
						version: o(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: o(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: o(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: o(/dolfin\/(\d+(\.\d+)?)/i)
					} : l ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? n = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, _ && (n.version = _)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, _ && (n.version = _)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: o(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: o(/^(.*)\/(.*) /),
						version: i(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && _ && (n.version = _)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || o(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !s && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : I ? (n.xbox = e, n.osname = "Xbox") : v ? (n.windows = e, n.osname = "Windows") : b && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var k = "";
					n.windows ? k = function(e) {
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
					}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? k = o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? k = (k = o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? k = (k = o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? k = o(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? k = o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? k = o(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? k = o(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (k = o(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (n.osversion = k);
					var x = !n.windows && k.split(".")[0];
					return w || d || "ipad" == r || s && (3 == x || x >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == r || "ipod" == r || s || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var o = t("undefined" != typeof navigator && navigator.userAgent || "");

				function i(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var o, i = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (o = 0; o < e.length; o++) i.push(t(e[o]));
					return i
				}

				function r(e) {
					for (var t = Math.max(i(e[0]), i(e[1])), o = n(e, (function(e) {
							var o = t - i(e);
							return n((e += new Array(o + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (o[0][t] > o[1][t]) return 1;
						if (o[0][t] !== o[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, i, n) {
					var s = o;
					"string" == typeof i && (n = i, i = void 0), void 0 === i && (i = !1), n && (s = t(n));
					var a = "" + s.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && s[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return i
				}
				return o.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var i = e[t];
						if ("string" == typeof i && i in o) return !0
					}
					return !1
				}, o.isUnsupportedBrowser = s, o.compareVersions = r, o.check = function(e, t, o) {
					return !s(e, t, o)
				}, o._detect = t, o.detect = t, o
			}, e.exports ? e.exports = i() : o("./node_modules/webpack/buildin/amd-define.js")("bowser", i)
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
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, n.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, o) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== o[t - 1]
						}))
					}, n.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							o = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var r = n.element,
								s = a(r),
								d = this._rootContainsTarget(r),
								c = n.entry,
								h = t && d && this._computeTargetAndRootIntersection(r, o),
								u = n.entry = new i({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: h
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(o, i) {
						if ("none" != e.getComputedStyle(o).display) {
							for (var n, r, s, d, h, u, l, m, p = a(o), v = c(o), f = !1; !f;) {
								var b = null,
									g = 1 == v.nodeType ? e.getComputedStyle(v) : {};
								if ("none" == g.display) return;
								if (v == this.root || v == t ? (f = !0, b = i) : v != t.body && v != t.documentElement && "visible" != g.overflow && (b = a(v)), b && (n = b, r = p, s = void 0, d = void 0, h = void 0, u = void 0, l = void 0, m = void 0, s = Math.max(n.top, r.top), d = Math.min(n.bottom, r.bottom), h = Math.max(n.left, r.left), u = Math.min(n.right, r.right), m = d - s, !(p = (l = u - h) >= 0 && m >= 0 && {
										top: s,
										bottom: d,
										left: h,
										right: u,
										width: l,
										height: m
									}))) break;
								v = c(v)
							}
							return p
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var o = t.documentElement,
								i = t.body;
							e = {
								top: 0,
								left: 0,
								right: o.clientWidth || i.clientWidth,
								width: o.clientWidth || i.clientWidth,
								bottom: o.clientHeight || i.clientHeight,
								height: o.clientHeight || i.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
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
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (o !== i)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == o || r == i || r < o != r < i) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						o.indexOf(this) < 0 && o.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = o.indexOf(this); - 1 != e && o.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = i
				}

				function i(e) {
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
						i = this.intersectionRect,
						n = i.width * i.height;
					this.intersectionRatio = o ? n / o : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var o, i, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							o(), n = null
						}), i))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, o, i) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, o, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, o)
				}

				function s(e, t, o, i) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, o, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, o)
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
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, o) {
				var i;
				return o(e, (function(e, o, n) {
					if (t(e, o, n)) return i = o, !1
				})), i
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, o, i, n) {
				return n(e, (function(e, n, r) {
					o = i ? (i = !1, e) : t(o, e, n, r)
				})), o
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, o) {
			var i = o("./node_modules/lodash/_baseClamp.js"),
				n = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return void 0 === o && (o = t, t = void 0), void 0 !== o && (o = (o = n(o)) == o ? o : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), i(n(e), t, o)
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, o) {
			var i = o("./node_modules/lodash/_baseFindKey.js"),
				n = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return i(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, o) {
			var i = o("./node_modules/lodash/_arrayReduce.js"),
				n = o("./node_modules/lodash/_baseEach.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseReduce.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var d = a(e) ? i : s,
					c = arguments.length < 3;
				return d(e, r(t, 4), o, c, n)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~bc44510a.a7e4df1d25079ceac148.js.map