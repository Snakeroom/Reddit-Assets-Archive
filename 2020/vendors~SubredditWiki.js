// https://www.redditstatic.com/desktop2x/vendors~SubredditWiki.a80bbffef7314328c7de.js
// Retrieved at 2/29/2020, 12:36:29 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~SubredditWiki", "vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, o) {
			var n, i, r;
			i = [t, e], void 0 === (r = "function" == typeof(n = function(e, t) {
				"use strict";
				var o, n, i = "function" == typeof Map ? new Map : (o = [], n = [], {
						has: function(e) {
							return o.indexOf(e) > -1
						},
						get: function(e) {
							return n[o.indexOf(e)]
						},
						set: function(e, t) {
							-1 === o.indexOf(e) && (o.push(e), n.push(t))
						},
						delete: function(e) {
							var t = o.indexOf(e);
							t > -1 && (o.splice(t, 1), n.splice(t, 1))
						}
					}),
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function s(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
						var t, o = null,
							n = e.clientWidth,
							s = null,
							a = function() {
								e.clientWidth !== n && c()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", c, !1), e.removeEventListener("keyup", c, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", c, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
								})), i.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", c, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", c, !1), e.addEventListener("autosize:update", c, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
							destroy: d,
							update: c
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), o = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(o) && (o = 0), c()
					}

					function u(t) {
						var o = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = o, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							i = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var s = e.scrollHeight + o;
						0 !== e.scrollHeight ? (e.style.height = s + "px", n = e.clientWidth, i.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function c() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							o = window.getComputedStyle(e, null),
							n = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === o.overflowY && (u("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (u("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), s !== n) {
							s = n;
							var i = r("autosize:resized");
							try {
								e.dispatchEvent(i)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = i.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = i.get(e);
					t && t.update()
				}
				var u = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((u = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, u.update = function(e) {
					return e
				}) : ((u = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return s(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, u.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = u
			}) ? n.apply(t, i) : n) || (e.exports = r)
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, o) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function o(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[1] || ""
					}

					function n(e) {
						var o = t.match(e);
						return o && o.length > 1 && o[2] || ""
					}
					var i, r = o(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						u = /CrOS/.test(t),
						l = /silk/i.test(t),
						c = /sailfish/i.test(t),
						h = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						m = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						v = !r && !l && /macintosh/i.test(t),
						g = !s && !c && !h && !p && /linux/i.test(t),
						y = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						b = o(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !_ && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? i = {
						name: "Opera",
						opera: e,
						version: b || o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? i = {
						name: "Opera",
						opera: e,
						version: o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
					} : /SamsungBrowser/i.test(t) ? i = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: b || o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? i = {
						name: "Opera Coast",
						coast: e,
						version: b || o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? i = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: b || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? i = {
						name: "UC Browser",
						ucbrowser: e,
						version: o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? i = {
						name: "Maxthon",
						maxthon: e,
						version: o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? i = {
						name: "Epiphany",
						epiphany: e,
						version: o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? i = {
						name: "Puffin",
						puffin: e,
						version: o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? i = {
						name: "Sleipnir",
						sleipnir: e,
						version: o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? i = {
						name: "K-Meleon",
						kMeleon: e,
						version: o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (i = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, y ? (i.msedge = e, i.version = y) : (i.msie = e, i.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
						name: "Internet Explorer",
						msie: e,
						version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : u ? i = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? i = {
						name: "Microsoft Edge",
						msedge: e,
						version: y
					} : /vivaldi/i.test(t) ? i = {
						name: "Vivaldi",
						vivaldi: e,
						version: o(/vivaldi\/(\d+(\.\d+)?)/i) || b
					} : c ? i = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? i = {
						name: "SeaMonkey",
						seamonkey: e,
						version: o(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (i = {
						name: "Firefox",
						firefox: e,
						version: o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = e, i.osname = "Firefox OS")) : l ? i = {
						name: "Amazon Silk",
						silk: e,
						version: o(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? i = {
						name: "PhantomJS",
						phantom: e,
						version: o(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? i = {
						name: "SlimerJS",
						slimer: e,
						version: o(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: b || o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (i = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: b || o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (i.touchpad = e)) : /bada/i.test(t) ? i = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: o(/dolfin\/(\d+(\.\d+)?)/i)
					} : h ? i = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
					} : /qupzilla/i.test(t) ? i = {
						name: "QupZilla",
						qupzilla: e,
						version: o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
					} : /chromium/i.test(t) ? i = {
						name: "Chromium",
						chromium: e,
						version: o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
					} : /chrome|crios|crmo/i.test(t) ? i = {
						name: "Chrome",
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? i = {
						name: "Android",
						version: b
					} : /safari|applewebkit/i.test(t) ? (i = {
						name: "Safari",
						safari: e
					}, b && (i.version = b)) : r ? (i = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, b && (i.version = b)) : i = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: o(/googlebot\/(\d+(\.\d+))/i) || b
					} : {
						name: o(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && b && (i.version = b)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || o(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !s && !i.silk ? !i.windowsphone && r ? (i[r] = e, i.ios = e, i.osname = "iOS") : v ? (i.mac = e, i.osname = "macOS") : x ? (i.xbox = e, i.osname = "Xbox") : m ? (i.windows = e, i.osname = "Windows") : g && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
					var E = "";
					i.windows ? E = function(e) {
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
					}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? E = o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? E = (E = o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? E = (E = o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? E = o(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? E = o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? E = o(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? E = o(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (E = o(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (i.osversion = E);
					var O = !i.windows && E.split(".")[0];
					return _ || d || "ipad" == r || s && (3 == O || O >= 4 && !w) || i.silk ? i.tablet = e : (w || "iphone" == r || "ipod" == r || s || a || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
				}
				var o = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function i(e, t) {
					var o, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (o = 0; o < e.length; o++) n.push(t(e[o]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), o = i(e, (function(e) {
							var o = t - n(e);
							return i((e += new Array(o + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (o[0][t] > o[1][t]) return 1;
						if (o[0][t] !== o[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, n, i) {
					var s = o;
					"string" == typeof n && (i = n, n = void 0), void 0 === n && (n = !1), i && (s = t(i));
					var a = "" + s.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && s[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return n
				}
				return o.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in o) return !0
					}
					return !1
				}, o.isUnsupportedBrowser = s, o.compareVersions = r, o.check = function(e, t, o) {
					return !s(e, t, o)
				}, o._detect = t, o.detect = t, o
			}, e.exports ? e.exports = n() : o("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, o) {
				return ((o = window.getComputedStyle) ? o(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
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
					i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, i.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, i.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, i.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, i.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, o) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== o[t - 1]
						}))
					}, i.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, i.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, i.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, i.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							o = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(i) {
							var r = i.element,
								s = a(r),
								d = this._rootContainsTarget(r),
								u = i.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, o),
								c = i.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: l
								});
							u ? t && d ? this._hasCrossedThreshold(u, c) && this._queuedEntries.push(c) : u && u.isIntersecting && this._queuedEntries.push(c) : this._queuedEntries.push(c)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, i.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != e.getComputedStyle(o).display) {
							for (var i, r, s, d, l, c, h, p, f = a(o), m = u(o), v = !1; !v;) {
								var g = null,
									y = 1 == m.nodeType ? e.getComputedStyle(m) : {};
								if ("none" == y.display) return;
								if (m == this.root || m == t ? (v = !0, g = n) : m != t.body && m != t.documentElement && "visible" != y.overflow && (g = a(m)), g && (i = g, r = f, s = void 0, d = void 0, l = void 0, c = void 0, h = void 0, p = void 0, s = Math.max(i.top, r.top), d = Math.min(i.bottom, r.bottom), l = Math.max(i.left, r.left), c = Math.min(i.right, r.right), p = d - s, !(f = (h = c - l) >= 0 && p >= 0 && {
										top: s,
										bottom: d,
										left: l,
										right: c,
										width: h,
										height: p
									}))) break;
								m = u(m)
							}
							return f
						}
					}, i.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var o = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: o.clientWidth || n.clientWidth,
								width: o.clientWidth || n.clientWidth,
								bottom: o.clientHeight || n.clientHeight,
								height: o.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, i.prototype._expandRectByRootMargin = function(e) {
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
					}, i.prototype._hasCrossedThreshold = function(e, t) {
						var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (o !== n)
							for (var i = 0; i < this.thresholds.length; i++) {
								var r = this.thresholds[i];
								if (r == o || r == n || r < o != r < n) return !0
							}
					}, i.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, i.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, i.prototype._registerInstance = function() {
						o.indexOf(this) < 0 && o.push(this)
					}, i.prototype._unregisterInstance = function() {
						var e = o.indexOf(this); - 1 != e && o.splice(e, 1)
					}, e.IntersectionObserver = i, e.IntersectionObserverEntry = n
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
						o = t.width * t.height,
						n = this.intersectionRect,
						i = n.width * n.height;
					this.intersectionRatio = o ? i / o : this.isIntersecting ? 1 : 0
				}

				function i(e, t) {
					var o, n, i, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function() {
						i || (i = setTimeout((function() {
							o(), i = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, o, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, o, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, o)
				}

				function s(e, t, o, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, o, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, o)
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
						o = u(o)
					}
					return !1
				}

				function u(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, o) {
			var n = o("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					o = parseFloat(t, 10);
				if (t === o + "") {
					var i = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), o = parseFloat(t, 10), i ? e.style.lineHeight = i : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (o *= 4, o /= 3) : -1 !== t.indexOf("mm") ? (o *= 96, o /= 25.4) : -1 !== t.indexOf("cm") ? (o *= 96, o /= 2.54) : -1 !== t.indexOf("in") ? o *= 96 : -1 !== t.indexOf("pc") && (o *= 16), o = Math.round(o), "normal" === t) {
					var r = e.nodeName,
						s = document.createElement(r);
					s.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && s.setAttribute("rows", "1");
					var a = n(e, "font-size");
					s.style.fontSize = a, s.style.padding = "0px", s.style.border = "0px";
					var d = document.body;
					d.appendChild(s), o = s.offsetHeight, d.removeChild(s)
				}
				return o
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var o = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, i, r) {
				for (var s = -1, a = n(o((t - e) / (i || 1)), 0), d = Array(a); a--;) d[r ? a : ++s] = e, e += i;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, o, n, i) {
				return i(e, (function(e, i, r) {
					o = n ? (n = !1, e) : t(o, e, i, r)
				})), o
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRange.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, o, s) {
					return s && "number" != typeof s && i(t, o, s) && (o = s = void 0), t = r(t), void 0 === o ? (o = t, t = 0) : o = r(o), s = void 0 === s ? t < o ? 1 : -1 : r(s), n(t, o, s, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				i = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return void 0 === o && (o = t, t = void 0), void 0 !== o && (o = (o = i(o)) == o ? o : 0), void 0 !== t && (t = (t = i(t)) == t ? t : 0), n(i(e), t, o)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFlatten.js"),
				i = o("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(i(e, t), 1)
			}
		},
		"./node_modules/lodash/orderBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseOrderBy.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o, r) {
				return null == e ? [] : (i(t) || (t = null == t ? [] : [t]), i(o = r ? void 0 : o) || (o = null == o ? [] : [o]), n(e, t, o))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRandom.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toFinite.js"),
				s = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, o) {
				if (o && "boolean" != typeof o && i(e, t, o) && (t = o = void 0), void 0 === o && ("boolean" == typeof t ? (o = t, t = void 0) : "boolean" == typeof e && (o = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var u = e;
					e = t, t = u
				}
				if (o || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + s("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayReduce.js"),
				i = o("./node_modules/lodash/_baseEach.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseReduce.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var d = a(e) ? n : s,
					u = arguments.length < 3;
				return d(e, r(t, 4), o, u, i)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				i = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > s) return [];
				var o = a,
					u = d(e, a);
				t = i(t), e -= a;
				for (var l = n(u, t); ++o < e;) t(o);
				return l
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, i, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				s = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}(),
				a = c(o("./node_modules/react/index.js")),
				d = c(o("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				u = c(o("./node_modules/autosize/dist/autosize.js")),
				l = c(o("./node_modules/line-height/lib/line-height.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function h(e, t) {
				var o = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
				return o
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var f = (i = n = function(e) {
				function t() {
					var e, o, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
					return o = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							o = e.value;
						return t ? t.value : o
					}, n.updateLineHeight = function() {
						n.setState({
							lineHeight: (0, l.default)(n.textarea)
						})
					}, n.onChange = function(e) {
						n.currentValue = e.target.value, n.props.onChange && n.props.onChange(e)
					}, n.saveDOMNodeRef = function(e) {
						var t = n.props.innerRef;
						t && t(e), n.textarea = e
					}, n.getLocals = function() {
						var e = n,
							t = e.props,
							o = (t.onResize, t.maxRows),
							i = (t.onChange, t.style),
							s = (t.innerRef, h(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							u = o && a ? a * o : null;
						return r({}, s, {
							saveDOMNodeRef: d,
							style: u ? r({}, i, {
								maxHeight: u
							}) : i,
							onChange: n.onChange
						})
					}, p(n, o)
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
				}(t, e), s(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							o = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, u.default)(e.textarea)
						}))) : (0, u.default)(this.textarea), o && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							o = e.saveDOMNodeRef,
							n = h(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", r({}, n, {
							ref: o
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), n.defaultProps = {
				rows: 1
			}, i);
			t.default = f, f.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, i = o("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (n = i) && n.__esModule ? n : {
					default: n
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}
			e.exports = function() {
				function e(e, t, o, i, r, s) {
					if (s !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return o.checkPropTypes = i, o.PropTypes = o, o
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=vendors~SubredditWiki.a80bbffef7314328c7de.js.map