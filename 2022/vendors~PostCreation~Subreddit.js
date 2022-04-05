// https://www.redditstatic.com/desktop2x/vendors~PostCreation~Subreddit.0bcea02e0168fc22fa2f.js
// Retrieved at 4/5/2022, 2:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation~Subreddit", "vendors~Reddit~StandalonePostPage"], {
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
					var o, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						l = !a && /nexus\s*[0-9]+/i.test(t),
						u = /CrOS/.test(t),
						c = /silk/i.test(t),
						f = /sailfish/i.test(t),
						d = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						m = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
						y = !i && !c && /macintosh/i.test(t),
						v = !s && !f && !d && !p && /linux/i.test(t),
						b = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !w && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : m ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, b ? (o.msedge = e, o.version = b) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: b
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : f ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : c ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? o = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, g && (o.version = g)) : i ? (o = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, g && (o.version = g)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !s && !o.silk ? !o.windowsphone && i ? (o[i] = e, o.ios = e, o.osname = "iOS") : y ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var j = "";
					o.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var x = !o.windows && j.split(".")[0];
					return w || l || "ipad" == i || s && (3 == x || x >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == i || "ipod" == i || s || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function i(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = o(e, (function(e) {
							var n = t - r(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, r, o) {
					var s = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (s = t(o));
					var a = "" + s.version;
					for (var l in e)
						if (e.hasOwnProperty(l) && s[l]) {
							if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
							return i([a, e[l]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = s, n.compareVersions = i, n.check = function(e, t, n) {
					return !s(e, t, n)
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
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
							n = t ? this._getRootRect() : {
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
								l = this._rootContainsTarget(i),
								u = o.entry,
								c = t && l && this._computeTargetAndRootIntersection(i, n),
								f = o.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: n,
									intersectionRect: c
								});
							u ? t && l ? this._hasCrossedThreshold(u, f) && this._queuedEntries.push(f) : u && u.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, i, s, l, c, f, d, p, m = a(n), h = u(n), y = !1; !y;) {
								var v = null,
									b = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == b.display) return;
								if (h == this.root || h == t ? (y = !0, v = r) : h != t.body && h != t.documentElement && "visible" != b.overflow && (v = a(h)), v && (o = v, i = m, s = void 0, l = void 0, c = void 0, f = void 0, d = void 0, p = void 0, s = Math.max(o.top, i.top), l = Math.min(o.bottom, i.bottom), c = Math.max(o.left, i.left), f = Math.min(o.right, i.right), p = l - s, !(m = (d = f - c) >= 0 && p >= 0 && {
										top: s,
										bottom: l,
										left: c,
										right: f,
										width: d,
										height: p
									}))) break;
								h = u(h)
							}
							return m
						}
					}, o.prototype._getRootRect = function() {
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
					}, o.prototype._expandRectByRootMargin = function(e) {
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
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var i = this.thresholds[o];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || l(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return l(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = r
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
						o = r.width * r.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, r, o, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function s(e, t, n, r) {
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

				function l(e, t) {
					for (var n = t; n;) {
						if (n == e) return !0;
						n = u(n)
					}
					return !1
				}

				function u(e) {
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
			e.exports = function(e, t, n, r, o) {
				return o(e, (function(e, o, i) {
					n = r ? (r = !1, e) : t(n, e, o, i)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), r(o(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var l = a(e) ? r : s,
					u = arguments.length < 3;
				return l(e, i(t, 4), n, u, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				a = 4294967295,
				l = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > s) return [];
				var n = a,
					u = l(e, a);
				t = o(t), e -= a;
				for (var c = r(u, t); ++n < e;) t(n);
				return c
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = i(n("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = i(n("./node_modules/react-motion/lib/stepper.js")),
				u = i(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = i(n("./node_modules/raf/index.js")),
				f = i(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				d = i(n("./node_modules/react/index.js")),
				p = i(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				h = function(e) {
					function t(n) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = o.state,
								i = n.currentStyle,
								s = n.currentVelocity,
								a = n.lastIdealStyle,
								l = n.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var c = e[u];
									"number" == typeof c && (t || (t = !0, i = r({}, i), s = r({}, s), a = r({}, a), l = r({}, l)), i[u] = c, s[u] = 0, a[u] = c, l[u] = 0)
								} t && o.setState({
								currentStyle: i,
								currentVelocity: s,
								lastIdealStyle: a,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							o.animationID = c.default((function(e) {
								var t = o.props.style;
								if (f.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
								o.wasAnimating = !0;
								var n = e || u.default(),
									r = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m,
									s = Math.floor(o.accumulatedTime / m),
									a = {},
									c = {},
									d = {},
									p = {};
								for (var h in t)
									if (Object.prototype.hasOwnProperty.call(t, h)) {
										var y = t[h];
										if ("number" == typeof y) d[h] = y, p[h] = 0, a[h] = y, c[h] = 0;
										else {
											for (var v = o.state.lastIdealStyle[h], b = o.state.lastIdealVelocity[h], g = 0; g < s; g++) {
												var w = l.default(m / 1e3, v, b, y.val, y.stiffness, y.damping, y.precision);
												v = w[0], b = w[1]
											}
											var _ = l.default(m / 1e3, v, b, y.val, y.stiffness, y.damping, y.precision),
												O = _[0],
												j = _[1];
											d[h] = v + (O - v) * i, p[h] = b + (j - b) * i, a[h] = v, c[h] = b
										}
									} o.animationID = null, o.accumulatedTime -= s * m, o.setState({
									currentStyle: d,
									currentVelocity: p,
									lastIdealStyle: a,
									lastIdealVelocity: c
								}), o.unreadPropStyle = null, o.startAnimationIfNecessary()
							}))
						}, this.state = this.defaultState()
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), o(t, null, [{
						key: "propTypes",
						value: {
							defaultStyle: p.default.objectOf(p.default.number),
							style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired,
							children: p.default.func.isRequired,
							onRest: p.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							n = e.style,
							r = t || a.default(n),
							o = s.default(r);
						return {
							currentStyle: r,
							currentVelocity: o,
							lastIdealStyle: r,
							lastIdealVelocity: o
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = u.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && d.default.Children.only(e)
					}, t
				}(d.default.Component);
			t.default = h, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = i(n("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = i(n("./node_modules/react-motion/lib/stepper.js")),
				u = i(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = i(n("./node_modules/raf/index.js")),
				f = i(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				d = i(n("./node_modules/react/index.js")),
				p = i(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var h = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, n = t.currentStyles, i = t.currentVelocities, s = t.lastIdealStyles, a = t.lastIdealVelocities, l = !1, u = 0; u < e.length; u++) {
							var c = e[u],
								f = !1;
							for (var d in c)
								if (Object.prototype.hasOwnProperty.call(c, d)) {
									var p = c[d];
									"number" == typeof p && (f || (f = !0, l = !0, n[u] = r({}, n[u]), i[u] = r({}, i[u]), s[u] = r({}, s[u]), a[u] = r({}, a[u])), n[u][d] = p, i[u][d] = 0, s[u][d] = p, a[u][d] = 0)
								}
						}
						l && o.setState({
							currentStyles: n,
							currentVelocities: i,
							lastIdealStyles: s,
							lastIdealVelocities: a
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = c.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var r = 0; r < e.length; r++)
										if (!f.default(e[r], t[r], n[r])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var n = e || u.default(),
								r = n - o.prevTime;
							if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m, s = Math.floor(o.accumulatedTime / m), a = [], c = [], d = [], p = [], h = 0; h < t.length; h++) {
								var y = t[h],
									v = {},
									b = {},
									g = {},
									w = {};
								for (var _ in y)
									if (Object.prototype.hasOwnProperty.call(y, _)) {
										var O = y[_];
										if ("number" == typeof O) v[_] = O, b[_] = 0, g[_] = O, w[_] = 0;
										else {
											for (var j = o.state.lastIdealStyles[h][_], x = o.state.lastIdealVelocities[h][_], S = 0; S < s; S++) {
												var T = l.default(m / 1e3, j, x, O.val, O.stiffness, O.damping, O.precision);
												j = T[0], x = T[1]
											}
											var I = l.default(m / 1e3, j, x, O.val, O.stiffness, O.damping, O.precision),
												k = I[0],
												P = I[1];
											v[_] = j + (k - j) * i, b[_] = x + (P - x) * i, g[_] = j, w[_] = x
										}
									} d[h] = v, p[h] = b, a[h] = g, c[h] = w
							}
							o.animationID = null, o.accumulatedTime -= s * m, o.setState({
								currentStyles: d,
								currentVelocities: p,
								lastIdealStyles: a,
								lastIdealVelocities: c
							}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
						}))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
						styles: p.default.func.isRequired,
						children: p.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = t || n().map(a.default),
						o = r.map((function(e) {
							return s.default(e)
						}));
					return {
						currentStyles: r,
						currentVelocities: o,
						lastIdealStyles: r,
						lastIdealVelocities: o
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = u.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && d.default.Children.only(e)
				}, t
			}(d.default.Component);
			t.default = h, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = i(n("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = i(n("./node_modules/react-motion/lib/stepper.js")),
				u = i(n("./node_modules/react-motion/lib/mergeDiff.js")),
				c = i(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				f = i(n("./node_modules/raf/index.js")),
				d = i(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = i(n("./node_modules/react/index.js")),
				m = i(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				h = 1e3 / 60;

			function y(e, t, n) {
				var r = t;
				return null == r ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var o = 0; o < r.length; o++)
						if (r[o].key === e.key) return {
							key: r[o].key,
							data: r[o].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function v(e, t, n, r, o, i, a, l, c) {
				for (var f = u.default(r, o, (function(e, r) {
						var o = t(r);
						return null == o ? (n({
							key: r.key,
							data: r.data
						}), null) : d.default(i[e], o, a[e]) ? (n({
							key: r.key,
							data: r.data
						}), null) : {
							key: r.key,
							data: r.data,
							style: o
						}
					})), p = [], m = [], h = [], y = [], v = 0; v < f.length; v++) {
					for (var b = f[v], g = null, w = 0; w < r.length; w++)
						if (r[w].key === b.key) {
							g = w;
							break
						} if (null == g) {
						var _ = e(b);
						p[v] = _, h[v] = _;
						var O = s.default(b.style);
						m[v] = O, y[v] = O
					} else p[v] = i[g], h[v] = l[g], m[v] = a[g], y[v] = c[g]
				}
				return [f, p, m, h, y]
			}
			var b = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), n = t[0], i = t[1], s = t[2], a = t[3], l = t[4], u = 0; u < e.length; u++) {
							var c = e[u].style,
								f = !1;
							for (var d in c)
								if (Object.prototype.hasOwnProperty.call(c, d)) {
									var p = c[d];
									"number" == typeof p && (f || (f = !0, i[u] = r({}, i[u]), s[u] = r({}, s[u]), a[u] = r({}, a[u]), l[u] = r({}, l[u]), n[u] = {
										key: n[u].key,
										data: n[u].data,
										style: r({}, n[u].style)
									}), i[u][d] = p, s[u][d] = 0, a[u][d] = p, l[u][d] = 0, n[u].style[d] = p)
								}
						}
						o.setState({
							currentStyles: i,
							currentVelocities: s,
							mergedPropsStyles: n,
							lastIdealStyles: a,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = f.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									n = "function" == typeof t ? t(y(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, n, r) {
										if (r.length !== t.length) return !1;
										for (var o = 0; o < r.length; o++)
											if (r[o].key !== t[o].key) return !1;
										for (o = 0; o < r.length; o++)
											if (!d.default(e[o], t[o].style, n[o])) return !1;
										return !0
									}(o.state.currentStyles, n, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var r = e || c.default(),
									i = r - o.prevTime;
								if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + i, o.accumulatedTime > 10 * h && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var s = (o.accumulatedTime - Math.floor(o.accumulatedTime / h) * h) / h, a = Math.floor(o.accumulatedTime / h), u = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), f = u[0], p = u[1], m = u[2], b = u[3], g = u[4], w = 0; w < f.length; w++) {
									var _ = f[w].style,
										O = {},
										j = {},
										x = {},
										S = {};
									for (var T in _)
										if (Object.prototype.hasOwnProperty.call(_, T)) {
											var I = _[T];
											if ("number" == typeof I) O[T] = I, j[T] = 0, x[T] = I, S[T] = 0;
											else {
												for (var k = b[w][T], P = g[w][T], E = 0; E < a; E++) {
													var M = l.default(h / 1e3, k, P, I.val, I.stiffness, I.damping, I.precision);
													k = M[0], P = M[1]
												}
												var D = l.default(h / 1e3, k, P, I.val, I.stiffness, I.damping, I.precision),
													R = D[0],
													A = D[1];
												O[T] = k + (R - k) * s, j[T] = P + (A - P) * s, x[T] = k, S[T] = P
											}
										} b[w] = x, g[w] = S, p[w] = O, m[w] = j
								}
								o.animationID = null, o.accumulatedTime -= a * h, o.setState({
									currentStyles: p,
									currentVelocities: m,
									lastIdealStyles: b,
									lastIdealVelocities: g,
									mergedPropsStyles: f
								}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
							}
						})))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.number).isRequired
						})),
						styles: m.default.oneOfType([m.default.func, m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.oneOfType([m.default.number, m.default.object])).isRequired
						}))]).isRequired,
						children: m.default.func.isRequired,
						willEnter: m.default.func,
						willLeave: m.default.func,
						didLeave: m.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return a.default(e.style)
						},
						willLeave: function() {
							return null
						},
						didLeave: function() {}
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = e.willEnter,
						o = e.willLeave,
						i = e.didLeave,
						l = "function" == typeof n ? n(t) : n,
						u = void 0;
					u = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var c = null == t ? l.map((function(e) {
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						f = null == t ? l.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						d = v(r, o, i, u, l, c, f, c, f),
						p = d[0];
					return {
						currentStyles: d[1],
						currentVelocities: d[2],
						lastIdealStyles: d[3],
						lastIdealVelocities: d[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (f.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n) {
				for (var r = {}, o = 0; o < e.length; o++) r[e[o].key] = o;
				var i = {};
				for (o = 0; o < t.length; o++) i[t[o].key] = o;
				var s = [];
				for (o = 0; o < t.length; o++) s[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(i, e[o].key)) {
						var a = n(o, e[o]);
						null != a && s.push(a)
					} return s.sort((function(e, n) {
					var o = i[e.key],
						s = i[n.key],
						a = r[e.key],
						l = r[n.key];
					if (null != o && null != s) return i[e.key] - i[n.key];
					if (null != a && null != l) return r[e.key] - r[n.key];
					if (null != o) {
						for (var u = 0; u < t.length; u++) {
							var c = t[u].key;
							if (Object.prototype.hasOwnProperty.call(r, c)) {
								if (o < i[c] && l > r[c]) return -1;
								if (o > i[c] && l < r[c]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						c = t[u].key;
						if (Object.prototype.hasOwnProperty.call(r, c)) {
							if (s < i[c] && a > r[c]) return 1;
							if (s > i[c] && a < r[c]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = {
				noWobble: {
					stiffness: 170,
					damping: 26
				},
				gentle: {
					stiffness: 120,
					damping: 14
				},
				wobbly: {
					stiffness: 180,
					damping: 12
				},
				stiff: {
					stiffness: 210,
					damping: 20
				}
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, n) {
			"use strict";

			function r(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var o = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = r(o);
			var i = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = r(i);
			var s = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = r(s);
			var a = n("./node_modules/react-motion/lib/spring.js");
			t.spring = r(a);
			var l = n("./node_modules/react-motion/lib/presets.js");
			t.presets = r(l);
			var u = n("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = r(u);
			var c = n("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = r(c)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n) {
				for (var r in t)
					if (Object.prototype.hasOwnProperty.call(t, r)) {
						if (0 !== n[r]) return !1;
						var o = "number" == typeof t[r] ? t[r] : t[r].val;
						if (e[r] !== o) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			};
			t.default = function(e, t) {
				return r({}, a, t, {
					val: e
				})
			};
			var o, i = n("./node_modules/react-motion/lib/presets.js"),
				s = (o = i) && o.__esModule ? o : {
					default: o
				},
				a = r({}, s.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, o, i, s, a) {
				var l = n + (-i * (t - o) + -s * n) * e,
					u = t + l * e;
				if (Math.abs(l) < a && Math.abs(u - o) < a) return r[0] = o, r[1] = 0, r;
				return r[0] = u, r[1] = l, r
			};
			var r = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" == typeof e[n] ? e[n] : e[n].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, n) {
			(function(t) {
				(function() {
					var n, r, o;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - o) / 1e6
					}, r = t.hrtime, o = (n = function() {
						var e;
						return 1e9 * (e = r())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - o
					}, o = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - o
					}, o = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, i, s) {
					if (s !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: i,
					resetWarningCache: o
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var r = n("./node_modules/react/index.js");

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

			function l(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function u(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function c(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function f(e) {
				return o(c(e)).left + s(e).scrollLeft
			}

			function d(e) {
				return i(e).getComputedStyle(e)
			}

			function p(e) {
				var t = d(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function m(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, d = c(t),
					m = o(e),
					h = l(t),
					y = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== u(t) || p(d)) && (y = (r = t) !== i(r) && l(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : s(r)), l(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : d && (v.x = f(d))), {
					x: m.left + y.scrollLeft - v.x,
					y: m.top + y.scrollTop - v.y,
					width: m.width,
					height: m.height
				}
			}

			function h(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function y(e) {
				return "html" === u(e) ? e : e.assignedSlot || e.parentNode || e.host || c(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(u(t)) >= 0 ? t.ownerDocument.body : l(t) && p(t) ? t : e(y(t))
					}(e),
					r = "body" === u(n),
					o = i(n),
					s = r ? [o].concat(o.visualViewport || [], p(n) ? n : []) : n,
					a = t.concat(s);
				return r ? a : a.concat(v(y(s)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(u(e)) >= 0
			}

			function g(e) {
				return l(e) && "fixed" !== d(e).position ? e.offsetParent : null
			}

			function w(e) {
				for (var t = i(e), n = g(e); n && b(n) && "static" === d(n).position;) n = g(n);
				return n && "body" === u(n) && "static" === d(n).position ? t : n || function(e) {
					for (var t = y(e); l(t) && ["html", "body"].indexOf(u(t)) < 0;) {
						var n = d(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var _ = "top",
				O = "bottom",
				j = "right",
				x = "left",
				S = "auto",
				T = [_, O, j, x],
				I = "start",
				k = "end",
				P = "clippingParents",
				E = "viewport",
				M = "popper",
				D = "reference",
				R = T.reduce((function(e, t) {
					return e.concat([t + "-" + I, t + "-" + k])
				}), []),
				A = [].concat(T, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + I, t + "-" + k])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function V(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
			}
			var B = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function C() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function N(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					i = void 0 === o ? B : o;
				return function(e, t, n) {
					void 0 === n && (n = i);
					var o, s, l = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						u = [],
						c = !1,
						f = {
							state: l,
							setOptions: function(n) {
								d(), l.options = Object.assign(Object.assign(Object.assign({}, i), l.options), n), l.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = V(e);
									return L.reduce((function(e, n) {
										return e.concat(t.filter((function(e) {
											return e.phase === n
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var n = e[t.name];
										return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
											options: Object.assign(Object.assign({}, n.options), t.options),
											data: Object.assign(Object.assign({}, n.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(r, l.options.modifiers)));
								return l.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: l,
											name: t,
											instance: f,
											options: r
										});
										u.push(i || function() {})
									}
								})), f.update()
							},
							forceUpdate: function() {
								if (!c) {
									var e = l.elements,
										t = e.reference,
										n = e.popper;
									if (C(t, n)) {
										l.rects = {
											reference: m(t, w(n), "fixed" === l.options.strategy),
											popper: h(n)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < l.orderedModifiers.length; r++)
											if (!0 !== l.reset) {
												var o = l.orderedModifiers[r],
													i = o.fn,
													s = o.options,
													a = void 0 === s ? {} : s,
													u = o.name;
												"function" == typeof i && (l = i({
													state: l,
													options: a,
													name: u,
													instance: f
												}) || l)
											} else l.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									f.forceUpdate(), e(l)
								}))
							}, function() {
								return s || (s = new Promise((function(e) {
									Promise.resolve().then((function() {
										s = void 0, e(o())
									}))
								}))), s
							}),
							destroy: function() {
								d(), c = !0
							}
						};
					if (!C(e, t)) return f;

					function d() {
						u.forEach((function(e) {
							return e()
						})), u = []
					}
					return f.setOptions(n).then((function(e) {
						!c && n.onFirstUpdate && n.onFirstUpdate(e)
					})), f
				}
			}
			var W = {
				passive: !0
			};

			function q(e) {
				return e.split("-")[0]
			}

			function U(e) {
				return e.split("-")[1]
			}

			function F(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					i = o ? q(o) : null,
					s = o ? U(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					l = n.y + n.height / 2 - r.height / 2;
				switch (i) {
					case _:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case O:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case j:
						t = {
							x: n.x + n.width,
							y: l
						};
						break;
					case x:
						t = {
							x: n.x - r.width,
							y: l
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var u = i ? F(i) : null;
				if (null != u) {
					var c = "y" === u ? "height" : "width";
					switch (s) {
						case I:
							t[u] = Math.floor(t[u]) - Math.floor(n[c] / 2 - r[c] / 2);
							break;
						case k:
							t[u] = Math.floor(t[u]) + Math.ceil(n[c] / 2 - r[c] / 2)
					}
				}
				return t
			}
			var z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function X(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					s = e.offsets,
					a = e.position,
					l = e.gpuAcceleration,
					u = e.adaptive,
					f = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(s),
					d = f.x,
					p = f.y,
					m = s.hasOwnProperty("x"),
					h = s.hasOwnProperty("y"),
					y = x,
					v = _,
					b = window;
				if (u) {
					var g = w(n);
					g === i(n) && (g = c(n)), o === _ && (v = O, p -= g.clientHeight - r.height, p *= l ? 1 : -1), o === x && (y = j, d -= g.clientWidth - r.width, d *= l ? 1 : -1)
				}
				var S, T = Object.assign({
					position: a
				}, u && z);
				return l ? Object.assign(Object.assign({}, T), {}, ((S = {})[v] = h ? "0" : "", S[y] = m ? "0" : "", S.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", S)) : Object.assign(Object.assign({}, T), {}, ((t = {})[v] = h ? p + "px" : "", t[y] = m ? d + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var Y = {
				start: "end",
				end: "start"
			};

			function $(e) {
				return e.replace(/start|end/g, (function(e) {
					return Y[e]
				}))
			}

			function G(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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
				return t === E ? J(function(e) {
					var t = i(e),
						n = c(e),
						r = t.visualViewport,
						o = n.clientWidth,
						s = n.clientHeight,
						a = 0,
						l = 0;
					return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, l = r.offsetTop)), {
						width: o,
						height: s,
						x: a + f(e),
						y: l
					}
				}(e)) : l(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = c(e),
						n = s(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + f(e),
						l = -n.scrollTop;
					return "rtl" === d(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: a,
						y: l
					}
				}(c(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && l(e) ? w(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && G(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					i = o[0],
					s = o.reduce((function(t, n) {
						var r = Q(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					i = void 0 === r ? e.placement : r,
					s = n.boundary,
					l = void 0 === s ? P : s,
					u = n.rootBoundary,
					f = void 0 === u ? E : u,
					d = n.elementContext,
					p = void 0 === d ? M : d,
					m = n.altBoundary,
					h = void 0 !== m && m,
					y = n.padding,
					v = void 0 === y ? 0 : y,
					b = te("number" != typeof v ? v : ne(v, T)),
					g = p === M ? D : M,
					w = e.elements.reference,
					x = e.rects.popper,
					S = e.elements[h ? g : p],
					I = ee(a(S) ? S : S.contextElement || c(e.elements.popper), l, f),
					k = o(w),
					R = H({
						reference: k,
						element: x,
						strategy: "absolute",
						placement: i
					}),
					A = J(Object.assign(Object.assign({}, x), R)),
					L = p === M ? A : k,
					V = {
						top: I.top - L.top + b.top,
						bottom: L.bottom - I.bottom + b.bottom,
						left: I.left - L.left + b.left,
						right: L.right - I.right + b.right
					},
					B = e.modifiersData.offset;
				if (p === M && B) {
					var C = B[i];
					Object.keys(V).forEach((function(e) {
						var t = [j, O].indexOf(e) >= 0 ? 1 : -1,
							n = [_, O].indexOf(e) >= 0 ? "y" : "x";
						V[e] += C[n] * t
					}))
				}
				return V
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function ie(e, t, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - n.y,
					right: e.right - t.width + n.x,
					bottom: e.bottom - t.height + n.y,
					left: e.left - t.width - n.x
				}
			}

			function se(e) {
				return [_, j, O, x].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = N({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								o = r.scroll,
								s = void 0 === o || o,
								a = r.resize,
								l = void 0 === a || a,
								u = i(t.elements.popper),
								c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return s && c.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), l && u.addEventListener("resize", n.update, W),
								function() {
									s && c.forEach((function(e) {
										e.removeEventListener("scroll", n.update, W)
									})), l && u.removeEventListener("resize", n.update, W)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = H({
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
								n = e.options,
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								i = n.adaptive,
								s = void 0 === i || i,
								a = {
									placement: q(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), X(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: s
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), X(Object.assign(Object.assign({}, a), {}, {
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
								var n = t.styles[e] || {},
									r = t.attributes[e] || {},
									o = t.elements[e];
								l(o) && u(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								n = {
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
							return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var r = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										l(r) && u(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								n = e.options,
								r = e.name,
								o = n.offset,
								i = void 0 === o ? [0, 0] : o,
								s = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = q(e),
											o = [x, _].indexOf(r) >= 0 ? -1 : 1,
											i = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											s = i[0],
											a = i[1];
										return s = s || 0, a = (a || 0) * o, [x, j].indexOf(r) >= 0 ? {
											x: a,
											y: s
										} : {
											x: s,
											y: a
										}
									}(n, t.rects, i), e
								}), {}),
								a = s[t.placement],
								l = a.x,
								u = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, i = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, y = t.options.placement, v = q(y), b = l || (v === y || !m ? [Z(y)] : function(e) {
										if (q(e) === S) return [];
										var t = Z(e);
										return [$(e), t, $(t)]
									}(y)), g = [y].concat(b).reduce((function(e, n) {
										return e.concat(q(n) === S ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												i = n.rootBoundary,
												s = n.padding,
												a = n.flipVariations,
												l = n.allowedAutoPlacements,
												u = void 0 === l ? A : l,
												c = U(r),
												f = (c ? a ? R : R.filter((function(e) {
													return U(e) === c
												})) : T).filter((function(e) {
													return u.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: i,
														padding: s
													})[q(n)], t
												}), {});
											return Object.keys(f).sort((function(e, t) {
												return f[e] - f[t]
											}))
										}(t, {
											placement: n,
											boundary: c,
											rootBoundary: f,
											padding: u,
											flipVariations: m,
											allowedAutoPlacements: h
										}) : n)
									}), []), w = t.rects.reference, k = t.rects.popper, P = new Map, E = !0, M = g[0], D = 0; D < g.length; D++) {
									var L = g[D],
										V = q(L),
										B = U(L) === I,
										C = [_, O].indexOf(V) >= 0,
										N = C ? "width" : "height",
										W = re(t, {
											placement: L,
											boundary: c,
											rootBoundary: f,
											altBoundary: d,
											padding: u
										}),
										F = C ? B ? j : x : B ? O : _;
									w[N] > k[N] && (F = Z(F));
									var H = Z(F),
										z = [];
									if (i && z.push(W[V] <= 0), a && z.push(W[F] <= 0, W[H] <= 0), z.every((function(e) {
											return e
										}))) {
										M = L, E = !1;
										break
									}
									P.set(L, z)
								}
								if (E)
									for (var X = function(e) {
											var t = g.find((function(t) {
												var n = P.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, K = m ? 3 : 1; K > 0; K--) {
										if ("break" === X(K)) break
									}
								t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0)
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
								n = e.options,
								r = e.name,
								o = n.mainAxis,
								i = void 0 === o || o,
								s = n.altAxis,
								a = void 0 !== s && s,
								l = n.boundary,
								u = n.rootBoundary,
								c = n.altBoundary,
								f = n.padding,
								d = n.tether,
								p = void 0 === d || d,
								m = n.tetherOffset,
								y = void 0 === m ? 0 : m,
								v = re(t, {
									boundary: l,
									rootBoundary: u,
									padding: f,
									altBoundary: c
								}),
								b = q(t.placement),
								g = U(t.placement),
								S = !g,
								T = F(b),
								k = "x" === T ? "y" : "x",
								P = t.modifiersData.popperOffsets,
								E = t.rects.reference,
								M = t.rects.popper,
								D = "function" == typeof y ? y(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : y,
								R = {
									x: 0,
									y: 0
								};
							if (P) {
								if (i) {
									var A = "y" === T ? _ : x,
										L = "y" === T ? O : j,
										V = "y" === T ? "height" : "width",
										B = P[T],
										C = P[T] + v[A],
										N = P[T] - v[L],
										W = p ? -M[V] / 2 : 0,
										H = g === I ? E[V] : M[V],
										z = g === I ? -M[V] : -E[V],
										X = t.elements.arrow,
										K = p && X ? h(X) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Y = Z[A],
										$ = Z[L],
										G = oe(0, E[V], K[V]),
										J = S ? E[V] / 2 - W - G - Y - D : H - G - Y - D,
										Q = S ? -E[V] / 2 + W + G + $ + D : z + G + $ + D,
										ee = t.elements.arrow && w(t.elements.arrow),
										te = ee ? "y" === T ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][T] : 0,
										ie = P[T] + J - ne - te,
										se = P[T] + Q - ne,
										ae = oe(p ? Math.min(C, ie) : C, B, p ? Math.max(N, se) : N);
									P[T] = ae, R[T] = ae - B
								}
								if (a) {
									var le = "x" === T ? _ : x,
										ue = "x" === T ? O : j,
										ce = P[k],
										fe = oe(ce + v[le], ce, ce - v[ue]);
									P[k] = fe, R[k] = fe - ce
								}
								t.modifiersData[r] = R
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								i = n.modifiersData.popperOffsets,
								s = q(n.placement),
								a = F(s),
								l = [x, j].indexOf(s) >= 0 ? "height" : "width";
							if (o && i) {
								var u = n.modifiersData[r + "#persistent"].padding,
									c = h(o),
									f = "y" === a ? _ : x,
									d = "y" === a ? O : j,
									p = n.rects.reference[l] + n.rects.reference[a] - i[a] - n.rects.popper[l],
									m = i[a] - n.rects.reference[a],
									y = w(o),
									v = y ? "y" === a ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
									b = p / 2 - m / 2,
									g = u[f],
									S = v - c[l] - u[d],
									T = v / 2 - c[l] / 2 + b,
									I = oe(g, T, S),
									k = a;
								n.modifiersData[r] = ((t = {})[k] = I, t.centerOffset = I - T, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								s = n.padding,
								a = void 0 === s ? 0 : s;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && G(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, T))
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
								n = e.name,
								r = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								l = ie(s, r),
								u = ie(a, o, i),
								c = se(l),
								f = se(u);
							t.modifiersData[n] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: u,
								isReferenceHidden: c,
								hasPopperEscaped: f
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": c,
								"data-popper-escaped": f
							})
						}
					}]
				}),
				le = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ue = n.n(le),
				ce = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				fe = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				de = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						i = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || de
						},
						s = r.useState({
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
						l = s[1],
						u = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									l({
										styles: ce(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ce(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						c = r.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [u, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ue()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]),
						f = r.useRef();
					return fe((function() {
						f.current && f.current.setOptions(c)
					}), [c]), fe((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ae)(e, t, c);
							return f.current = r,
								function() {
									r.destroy(), f.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: f.current ? f.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: f.current ? f.current.update : null,
						forceUpdate: f.current ? f.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, s) {
						if (t === s) return !0;
						if (t && s && "object" == typeof t && "object" == typeof s) {
							if (t.constructor !== s.constructor) return !1;
							var a, l, u, c;
							if (Array.isArray(t)) {
								if ((a = t.length) != s.length) return !1;
								for (l = a; 0 != l--;)
									if (!e(t[l], s[l])) return !1;
								return !0
							}
							if (r && t instanceof Map && s instanceof Map) {
								if (t.size !== s.size) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!s.has(l.value[0])) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!e(l.value[1], s.get(l.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && s instanceof Set) {
								if (t.size !== s.size) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!s.has(l.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(s)) {
								if ((a = t.length) != s.length) return !1;
								for (l = a; 0 != l--;)
									if (t[l] !== s[l]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
							if ((a = (u = Object.keys(t)).length) !== Object.keys(s).length) return !1;
							for (l = a; 0 != l--;)
								if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
							if (n && t instanceof Element) return !1;
							for (l = a; 0 != l--;)
								if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !t.$$typeof) && !e(t[u[l]], s[u[l]])) return !1;
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
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var o = n ? n.call(r, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					s = Object.keys(t);
				if (i.length !== s.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
					var u = i[l];
					if (!a(u)) return !1;
					var c = e[u],
						f = t[u];
					if (!1 === (o = n ? n.call(r, c, f, u) : void 0) || void 0 === o && c !== f) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~PostCreation~Subreddit.0bcea02e0168fc22fa2f.js.map