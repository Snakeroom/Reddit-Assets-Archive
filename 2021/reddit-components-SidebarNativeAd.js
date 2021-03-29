// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.59b92e43ec625d4324f8.js
// Retrieved at 3/29/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
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
					var o, s = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !s && !l && /macintosh/i.test(t),
						g = !i && !u && !p && !m && /linux/i.test(t),
						y = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = r(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !_ && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
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
					} : f ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, y ? (o.msedge = e, o.version = y) : (o.msie = e, o.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: y
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? o = {
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
					} : m ? (o = {
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
					} : i ? o = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, v && (o.version = v)) : s ? (o = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, v && (o.version = v)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || r(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : g && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var w = "";
					o.windows ? w = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? w = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? w = (w = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? w = (w = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = r(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? w = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? w = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? w = r(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (w = r(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (o.osversion = w);
					var x = !o.windows && w.split(".")[0];
					return _ || c || "ipad" == s || i && (3 == x || x >= 4 && !E) || o.silk ? o.tablet = e : (E || "iphone" == s || "ipod" == s || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function s(e) {
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

				function i(e, n, o) {
					var i = r;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([a, e[c]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = i, r.compareVersions = s, r.check = function(e, t, r) {
					return !i(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, o) {
				return o(e, (function(e, o, s) {
					r = n ? (n = !1, e) : t(r, e, o, s)
				})), r
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				o = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = o(r)) == r ? r : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				o = r("./node_modules/lodash/_baseEach.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, s(t, 4), r, d, o)
			}
		},
		"./node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, c, d, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (n && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== i[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (d = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(i, d[c])) return !1;
							if (r && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], i[d[c]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return me
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

			function s(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = s(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return o(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function f(e, t, r) {
				void 0 === r && (r = !1);
				var n, a, p = l(t),
					f = o(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					g = {
						x: 0,
						y: 0
					};
				return (b || !b && !r) && (("body" !== d(t) || m(p)) && (h = (n = t) !== s(n) && c(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : i(n)), c(t) ? ((g = o(t)).x += t.clientLeft, g.y += t.clientTop) : p && (g.x = u(p))), {
					x: f.left + h.scrollLeft - g.x,
					y: f.top + h.scrollTop - g.y,
					width: f.width,
					height: f.height
				}
			}

			function b(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function h(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function g(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					n = "body" === d(r),
					o = s(r),
					i = n ? [o].concat(o.visualViewport || [], m(r) ? r : []) : r,
					a = t.concat(i);
				return n ? a : a.concat(g(h(i)))
			}

			function y(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function v(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function _(e) {
				for (var t = s(e), r = v(e); r && y(r) && "static" === p(r).position;) r = v(r);
				return r && "body" === d(r) && "static" === p(r).position ? t : r || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var r = p(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var E = "top",
				O = "bottom",
				w = "right",
				x = "left",
				S = "auto",
				j = [E, O, w, x],
				C = "start",
				k = "end",
				I = "clippingParents",
				T = "viewport",
				P = "popper",
				A = "reference",
				M = j.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + k])
				}), []),
				N = [].concat(j, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + k])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

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
			var D = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function F() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function B(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					s = void 0 === o ? D : o;
				return function(e, t, r) {
					void 0 === r && (r = s);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, D), s),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						d = [],
						l = !1,
						u = {
							state: c,
							setOptions: function(r) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), r), c.scrollParents = {
									reference: a(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var o = function(e) {
									var t = R(e);
									return L.reduce((function(e, r) {
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
								}([].concat(n, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: c,
											name: t,
											instance: u,
											options: n
										});
										d.push(s || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										r = e.popper;
									if (F(t, r)) {
										c.rects = {
											reference: f(t, _(r), "fixed" === c.options.strategy),
											popper: b(r)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[n],
													s = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof s && (c = s({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!F(e, t)) return u;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(r).then((function(e) {
						!l && r.onFirstUpdate && r.onFirstUpdate(e)
					})), u
				}
			}
			var U = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function z(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function W(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					s = o ? G(o) : null,
					i = o ? z(o) : null,
					a = r.x + r.width / 2 - n.width / 2,
					c = r.y + r.height / 2 - n.height / 2;
				switch (s) {
					case E:
						t = {
							x: a,
							y: r.y - n.height
						};
						break;
					case O:
						t = {
							x: a,
							y: r.y + r.height
						};
						break;
					case w:
						t = {
							x: r.x + r.width,
							y: c
						};
						break;
					case x:
						t = {
							x: r.x - n.width,
							y: c
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var d = s ? V(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(r[l] / 2 - n[l] / 2);
							break;
						case k:
							t[d] = Math.floor(t[d]) + Math.ceil(r[l] / 2 - n[l] / 2)
					}
				}
				return t
			}
			var H = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = x,
					g = E,
					y = window;
				if (d) {
					var v = _(r);
					v === s(r) && (v = l(r)), o === E && (g = O, m -= v.clientHeight - n.height, m *= c ? 1 : -1), o === x && (h = w, p -= v.clientWidth - n.width, p *= c ? 1 : -1)
				}
				var S, j = Object.assign({
					position: a
				}, d && H);
				return c ? Object.assign(Object.assign({}, j), {}, ((S = {})[g] = b ? "0" : "", S[h] = f ? "0" : "", S.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", S)) : Object.assign(Object.assign({}, j), {}, ((t = {})[g] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var Y = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Y[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Q(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function Z(e, t) {
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

			function $(e, t) {
				return t === T ? J(function(e) {
					var t = s(e),
						r = l(e),
						n = t.visualViewport,
						o = r.clientWidth,
						i = r.clientHeight,
						a = 0,
						c = 0;
					return n && (o = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, c = n.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						r = i(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -r.scrollLeft + u(e),
						c = -r.scrollTop;
					return "rtl" === p(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = g(e),
							r = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? _(e) : e;
						return a(r) ? t.filter((function(e) {
							return a(e) && Z(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					s = o[0],
					i = o.reduce((function(t, r) {
						var n = $(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), $(e, s));
				return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
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
					s = void 0 === n ? e.placement : n,
					i = r.boundary,
					c = void 0 === i ? I : i,
					d = r.rootBoundary,
					u = void 0 === d ? T : d,
					p = r.elementContext,
					m = void 0 === p ? P : p,
					f = r.altBoundary,
					b = void 0 !== f && f,
					h = r.padding,
					g = void 0 === h ? 0 : h,
					y = te("number" != typeof g ? g : re(g, j)),
					v = m === P ? A : P,
					_ = e.elements.reference,
					x = e.rects.popper,
					S = e.elements[b ? v : m],
					C = ee(a(S) ? S : S.contextElement || l(e.elements.popper), c, u),
					k = o(_),
					M = W({
						reference: k,
						element: x,
						strategy: "absolute",
						placement: s
					}),
					N = J(Object.assign(Object.assign({}, x), M)),
					L = m === P ? N : k,
					R = {
						top: C.top - L.top + y.top,
						bottom: L.bottom - C.bottom + y.bottom,
						left: C.left - L.left + y.left,
						right: L.right - C.right + y.right
					},
					D = e.modifiersData.offset;
				if (m === P && D) {
					var F = D[s];
					Object.keys(R).forEach((function(e) {
						var t = [w, O].indexOf(e) >= 0 ? 1 : -1,
							r = [E, O].indexOf(e) >= 0 ? "y" : "x";
						R[e] += F[r] * t
					}))
				}
				return R
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function se(e, t, r) {
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

			function ie(e) {
				return [E, w, O, x].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = B({
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
								i = void 0 === o || o,
								a = n.resize,
								c = void 0 === a || a,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", r.update, U)
								})), c && d.addEventListener("resize", r.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", r.update, U)
									})), c && d.removeEventListener("resize", r.update, U)
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
							t.modifiersData[r] = W({
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
								s = r.adaptive,
								i = void 0 === s || s,
								a = {
									placement: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, a), {}, {
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
								c(o) && d(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
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
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && d(n) && (Object.assign(n.style, s), Object.keys(o).forEach((function(e) {
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
								s = void 0 === o ? [0, 0] : o,
								i = N.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = G(e),
											o = [x, E].indexOf(n) >= 0 ? -1 : 1,
											s = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [x, w].indexOf(n) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(r, t.rects, s), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = i
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
								for (var o = r.mainAxis, s = void 0 === o || o, i = r.altAxis, a = void 0 === i || i, c = r.fallbackPlacements, d = r.padding, l = r.boundary, u = r.rootBoundary, p = r.altBoundary, m = r.flipVariations, f = void 0 === m || m, b = r.allowedAutoPlacements, h = t.options.placement, g = G(h), y = c || (g === h || !f ? [K(h)] : function(e) {
										if (G(e) === S) return [];
										var t = K(e);
										return [Q(e), t, Q(t)]
									}(h)), v = [h].concat(y).reduce((function(e, r) {
										return e.concat(G(r) === S ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												s = r.rootBoundary,
												i = r.padding,
												a = r.flipVariations,
												c = r.allowedAutoPlacements,
												d = void 0 === c ? N : c,
												l = z(n),
												u = (l ? a ? M : M.filter((function(e) {
													return z(e) === l
												})) : j).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: s,
														padding: i
													})[G(r)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: r,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : r)
									}), []), _ = t.rects.reference, k = t.rects.popper, I = new Map, T = !0, P = v[0], A = 0; A < v.length; A++) {
									var L = v[A],
										R = G(L),
										D = z(L) === C,
										F = [E, O].indexOf(R) >= 0,
										B = F ? "width" : "height",
										U = ne(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										V = F ? D ? w : x : D ? O : E;
									_[B] > k[B] && (V = K(V));
									var W = K(V),
										H = [];
									if (s && H.push(U[R] <= 0), a && H.push(U[V] <= 0, U[W] <= 0), H.every((function(e) {
											return e
										}))) {
										P = L, T = !1;
										break
									}
									I.set(L, H)
								}
								if (T)
									for (var q = function(e) {
											var t = v.find((function(t) {
												var r = I.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return P = t, "break"
										}, Y = f ? 3 : 1; Y > 0; Y--) {
										if ("break" === q(Y)) break
									}
								t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0)
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
								s = void 0 === o || o,
								i = r.altAxis,
								a = void 0 !== i && i,
								c = r.boundary,
								d = r.rootBoundary,
								l = r.altBoundary,
								u = r.padding,
								p = r.tether,
								m = void 0 === p || p,
								f = r.tetherOffset,
								h = void 0 === f ? 0 : f,
								g = ne(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								y = G(t.placement),
								v = z(t.placement),
								S = !v,
								j = V(y),
								k = "x" === j ? "y" : "x",
								I = t.modifiersData.popperOffsets,
								T = t.rects.reference,
								P = t.rects.popper,
								A = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								M = {
									x: 0,
									y: 0
								};
							if (I) {
								if (s) {
									var N = "y" === j ? E : x,
										L = "y" === j ? O : w,
										R = "y" === j ? "height" : "width",
										D = I[j],
										F = I[j] + g[N],
										B = I[j] - g[L],
										U = m ? -P[R] / 2 : 0,
										W = v === C ? T[R] : P[R],
										H = v === C ? -P[R] : -T[R],
										q = t.elements.arrow,
										Y = m && q ? b(q) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[N],
										Q = K[L],
										Z = oe(0, T[R], Y[R]),
										J = S ? T[R] / 2 - U - Z - X - A : W - Z - X - A,
										$ = S ? -T[R] / 2 + U + Z + Q + A : H + Z + Q + A,
										ee = t.elements.arrow && _(t.elements.arrow),
										te = ee ? "y" === j ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][j] : 0,
										se = I[j] + J - re - te,
										ie = I[j] + $ - re,
										ae = oe(m ? Math.min(F, se) : F, D, m ? Math.max(B, ie) : B);
									I[j] = ae, M[j] = ae - D
								}
								if (a) {
									var ce = "x" === j ? E : x,
										de = "x" === j ? O : w,
										le = I[k],
										ue = oe(le + g[ce], le, le - g[de]);
									I[k] = ue, M[k] = ue - le
								}
								t.modifiersData[n] = M
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
								s = r.modifiersData.popperOffsets,
								i = G(r.placement),
								a = V(i),
								c = [x, w].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var d = r.modifiersData[n + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? E : x,
									p = "y" === a ? O : w,
									m = r.rects.reference[c] + r.rects.reference[a] - s[a] - r.rects.popper[c],
									f = s[a] - r.rects.reference[a],
									h = _(o),
									g = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									y = m / 2 - f / 2,
									v = d[u],
									S = g - l[c] - d[p],
									j = g / 2 - l[c] / 2 + y,
									C = oe(v, j, S),
									k = a;
								r.modifiersData[n] = ((t = {})[k] = C, t.centerOffset = C - j, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								s = void 0 === o ? "[data-popper-arrow]" : o,
								i = r.padding,
								a = void 0 === i ? 0 : i;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Z(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : re(a, j))
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
								s = t.modifiersData.preventOverflow,
								i = ne(t, {
									elementContext: "reference"
								}),
								a = ne(t, {
									altBoundary: !0
								}),
								c = se(i, n),
								d = se(a, o, s),
								l = ie(c),
								u = ie(d);
							t.modifiersData[r] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				ce = r("./node_modules/react-fast-compare/index.js"),
				de = r.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				pe = [],
				me = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						s = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || pe
						},
						i = n.useState({
							styles: {
								popper: {
									position: s.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									c({
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
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, d]),
						u = n.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || ae)(e, t, l);
							return u.current = n,
								function() {
									n.destroy(), u.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, r) => (n = (() => {})) => o => {
				const s = p(o.target, o.currentTarget),
					a = m(o.target, o.currentTarget);
				s && r && t && (u(o.target, o.currentTarget, l.anchors) ? r(t(e, s, a)) : r(r => {
					const n = t(e, s, a)(r);
					let o;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						o = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(r, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && n(o)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: r,
						eventFactory: s,
						clickTrackingId: i,
						...d
					} = t, l = Object(n.useCallback)(c(i, s, r), [i, s, r]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(s.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, r) => !r.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, r)),
				p = (e, t) => {
					const r = e.dataset.clickId;
					return r || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Media/index.ts"),
				o = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = r.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: o
				} = e;
				let i = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(n.D)(e)
				} else i = Object(n.D)(e);
				const a = s.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/constants/index.ts");
			const s = [o.dc, o.hb, o.x, o.J, o.db, o.Hb],
				i = {
					[o.Hb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.db]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.hb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.dc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Hb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.db]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, r = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.dc]: "",
						[o.hb]: "",
						[o.x]: "",
						[o.J]: "",
						[o.db]: "",
						[o.Hb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of s) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? a : i)[n](e).toString()), u -= e * n
				}
				const p = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? p : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const o = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(n.a)(o("awardSheetInfoRequested")),
				i = Object(n.a)(o("manageableAwardsRequested")),
				a = Object(n.a)(o("createCommunityAward")),
				c = Object(n.a)(o("createGlobalAward")),
				d = Object(n.a)(o("createModAward")),
				l = Object(n.a)(o("createAwardFailed")),
				u = Object(n.a)(o("createAwardSuccessful")),
				p = Object(n.a)(o("removeCommunityAward")),
				m = Object(n.a)(o("disableAwardinCommunity")),
				f = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/postParentMessage/index.ts"),
				s = r("./src/reddit/helpers/isPost.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(b.L),
				g = Object(n.a)(b.g),
				y = () => async (e, t) => {
					const n = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(n))
				}, v = Object(n.a)(b.K), _ = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const a = o(),
						c = e ? Object(u.a)(a, e) : void 0;
					n(v({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const f = Object(m.J)(a, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(s.a)(r)) {
						const e = Object(p.D)(a, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, E = Object(n.a)(b.f), O = Object(n.a)(b.J), w = () => async (e, t) => {
					const n = t(),
						s = Object(a.d)(n);
					if (Object(a.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(n)), Object(c.b)(c.a.GildingFlow)
				}, x = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "k", (function() {
				return _
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				s = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				y = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				_ = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = r.n(l);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.d, null, s.a.createElement(a.h, null, s.a.createElement(d.a, null, s.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.k, null, s.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.f, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, i] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(s.a)(a.a.tooltip, {
						[a.a.visible]: r
					})
				}, t.popperProps), t.children, r && o.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/timeAgo/index.ts"),
				s = r("./src/lib/timeUntil/index.ts"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(o.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(s.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, r) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/ads/index.ts"),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/helpers/trackers/gallery.ts"),
				d = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = r("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						r = Object(l.a)(),
						s = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && r(c.d(e.postId))
							})
						}, [r, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/connectors/PostViewable/index.ts"),
				f = r("./src/reddit/models/Media/index.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/lib/classNames/index.ts"),
				g = r("./src/lib/objectSelector/index.ts"),
				y = r("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = r("./src/reddit/components/PostContainer/index.m.less"),
				_ = r.n(v);
			const E = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(g.a)((e, {
						post: t
					}) => Object(b.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(b.i)(e, {
						postId: t.id
					})
				})),
				O = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						r = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && r
				};
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: r,
						className: n,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: p,
						onPostContentClick: m,
						sendEvent: b,
						style: g,
						ref: y
					} = this.props, v = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: y,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: r => {
							if (!this.cancelClick && r.button < 2 && (e(() => p && p(r, l, t, s))(r), m && O(r) && m(r, l)), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(_.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, r), E = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, v) : l.media && Object(f.E)(l.media) ? o.a.createElement(u, {
						postId: l.id
					}, v) : v
				}
			}
			t.a = E(Object(y.c)(Object(p.c)(w)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/components/CrosspostBox/index.tsx"),
				i = r("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(s.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return P
			})), r.d(t, "a", (function() {
				return G
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/ads/index.ts"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = r("./src/reddit/helpers/flair.ts"),
				g = r("./src/reddit/helpers/path/index.ts"),
				y = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				E = r("./src/reddit/models/Media/index.ts"),
				O = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = r("./src/lib/getShortenedLink.ts"),
				x = r("./src/reddit/components/FlairWrapper/index.tsx"),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				j = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/Poll/MetaData/index.tsx"),
				k = r("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				I = r.n(k);
			const T = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, A = Object(i.b)(T)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, n = r ? r.totalVotes : "0";
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, I.a.proposalMetaData)
					}, s.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(j.a)(n)), S.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && s.a.createElement(C.a, {
						className: I.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = r("./src/reddit/components/SEOTitle/index.tsx"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/components/PostTitle/index.m.less"),
				R = r.n(L),
				D = r("./src/config.ts"),
				F = r("./src/reddit/hooks/usePostContext.ts"),
				B = r("./src/reddit/hooks/useTheme.ts");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const G = ({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: n,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(B.a)();
					let d = "";
					switch (e) {
						case P.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case P.Large:
							d = R.a.Large;
							break;
						case P.Medium:
							d = R.a.Medium;
							break;
						case P.Small:
							d = R.a.Small;
							break;
						case P.ExtraSmall:
							d = R.a.ExtraSmall
					}
					return s.a.createElement("div", {
						className: Object(l.a)(R.a.Title, i, d, {
							[R.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, r ? s.a.createElement(M.b, {
						type: r
					}, o) : o)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					children: n,
					...o
				}) => s.a.createElement(a.a, U({}, o, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), n),
				V = ({
					disableVisited: e,
					nowrap: t,
					className: r,
					children: n
				}) => s.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, r, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, n),
				W = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: N.bb
				}),
				H = e => {
					const {
						post: t,
						subreddit: r
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return s.a.createElement(V, {
						nowrap: e.nowrap
					}, s.a.createElement(q, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return s.a.createElement(m.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, s.a.createElement(q, e)); {
						const o = t.media && Object(E.G)(t.media) ? Object(y.c)(t.id, r.name) : t.permalink,
							i = e.isCommentPermalink ? Object(g.b)(o) : Object(b.a)(o);
						return s.a.createElement(V, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: r
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return r ? s.a.createElement(m.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, s.a.createElement(q, t)) : s.a.createElement(q, t)
						})(t, e) : s.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, s.a.createElement(q, e)))
					}
				},
				q = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: n
					} = e;
					let o = e.format ? e.format(n) : n.title;
					r && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return s.a.createElement(G, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && s.a.createElement(x.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				Y = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: n
					} = r, o = !t && !e.isCrosspost && e.size !== P.Large && !r.isSponsored && !(r.media && Object(E.G)(r.media)) && (r.source || r.media && (r.media.type === E.o.GIFVIDEO || r.media.type === E.o.IMAGE || r.media.type === E.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return s.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(E.D)(r),
							isSponsored: n,
							postId: r.id,
							source: r.source
						}, Object(w.a)(r), !r.isSponsored && s.a.createElement(v.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return s.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: n,
						postId: r.id,
						source: r.source
					}, Object(w.a)(r), !r.isSponsored && s.a.createElement(v.a, {
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class K extends s.a.Component {
				getDynamicStyleTags() {
					return s.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: n,
						isOverlay: o,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = r === _.b.Left, u = Object(x.b)(a), p = c ? u.filter(e => e.type === _.f.Nsfw || e.type === _.f.Spoiler) : d ? u.filter(e => Object(h.p)(e.type)) : [], m = c ? [] : d ? u.filter(e => !Object(h.p)(e.type)) : u, f = !o && !n, b = !t && p && p.length > 0 && f, g = !t && m && m.length > 0 && f;
					return s.a.createElement("div", {
						className: Object(l.a)(R.a.Component, e, a.id)
					}, !c && b && s.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement(H, U({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && s.a.createElement(A, {
						className: R.a.pollMeta,
						pollId: i.id
					}), s.a.createElement(Y, this.props), g && s.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${D.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = s.a.memo((function(e) {
				const t = Object(p.Z)(),
					r = Object(p.v)(t),
					n = Object(F.a)(),
					o = Object(i.e)(o => W(o, {
						...n,
						...e,
						isCommentPermalink: r,
						pageLayer: t
					})),
					a = Object(B.a)(),
					c = Object(u.b)();
				return s.a.createElement(K, U({
					pageLayer: t,
					isCommentPermalink: r
				}, n, o, e, {
					theme: a,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, r) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = r.n(a);
			const d = e => o.a.createElement("button", {
					className: Object(s.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => o.a.createElement("button", {
					className: Object(s.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, r) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "SidebarNativeAd", (function() {
				return Z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/PostMedia/index.tsx"),
				c = r("./src/reddit/components/PostTitle/index.tsx"),
				d = r("./src/reddit/components/PostTopMeta/index.tsx"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/lib/getShortenedLink.ts"),
				p = r("./src/lib/lessComponent.tsx"),
				m = r("./src/lib/opener/index.ts"),
				f = r("./src/reddit/actions/ads/index.ts"),
				b = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/components/PostContainer/index.tsx"),
				g = r("./src/reddit/constants/adEvents.ts"),
				y = r("./src/reddit/contexts/InsideOverlay.tsx"),
				v = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = r("./src/reddit/helpers/adCount/index.ts"),
				E = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				O = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = r("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				x = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				S = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				j = r("./src/reddit/models/Theme/index.ts"),
				C = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = r("./src/lib/constants/index.ts"),
				I = r("./src/reddit/models/Media/index.ts"),
				T = r("./src/reddit/components/NativeBannerAd/index.m.less"),
				P = r.n(T);
			const A = p.a.wrapped(e => s.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", P.a);
			class M extends s.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(I.K)(e.media) || Object(I.G)(e.media) ? "" : e.media.content,
						{
							type: r
						} = e.media;
					if (!t || !r) return null;
					switch (r) {
						case k.ib.IMAGE:
							return s.a.createElement(A, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var N = r("./src/reddit/components/SidebarNativeAd/index.m.less"),
				L = r.n(N);
			const R = p.a.wrapped(d.d, "PostTopMeta", L.a),
				D = p.a.div("BannerAdContainer", L.a),
				F = ({
					children: e
				}) => s.a.createElement("div", null, e),
				B = p.a.div("PromotedPostContainer", L.a),
				U = p.a.wrapped(x.a, "OutboundLinkIcon", L.a),
				G = p.a.div("SourceLinkWrapper", L.a),
				z = p.a.div("TopLine", L.a),
				V = p.a.wrapped(c.c, "PostTitle", L.a),
				W = p.a.div("PostMediaWrapper", L.a),
				H = p.a.div("BackgroundWrapper", L.a),
				q = p.a.wrapped(h.a, "PostContainer", L.a),
				Y = 640,
				K = e => Object(w.a)(e.title, 100),
				X = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(O.a)(Object(E.a)(e), S.a.actionIcon, S.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				Q = e => ({
					background: Object(j.g)(Object(C.a)(e).body, null, null) || ""
				});
			class Z extends s.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, g.a.Click), t.source ? t.source.outboundUrl ? Object(m.d)(t.source.outboundUrl, m.c.BLANK) : Object(m.d)(t.source.url, m.c.BLANK) : Object(m.d)(t.permalink, m.c.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: r,
						isOverlay: o
					} = this.props;
					let i, l, p = {};
					return e.isBlank ? (i = F, l = null) : e.isMediaOnly ? (i = D, p = {
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = s.a.createElement(M, {
						post: e
					})) : (i = B, l = s.a.createElement(H, {
						style: Q(this.props)
					}, s.a.createElement(z, null, s.a.createElement(R, {
						tooltipType: o ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), s.a.createElement(V, {
						post: e,
						size: c.b.Large,
						format: K
					}), e.source && s.a.createElement(G, null, s.a.createElement(v.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), s.a.createElement(U, null))), s.a.createElement(W, null, e.media && s.a.createElement(a.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: Y,
						shouldLoad: !0
					})))), s.a.createElement(i, p, s.a.createElement(q, {
						className: t,
						isOverlay: o,
						post: e,
						onClick: this.onClick,
						eventFactory: r,
						style: X(this.props)
					}, l))
				}
			}
			const J = Object(i.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, r) => {
					e(Object(b.u)(t, r))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: r,
						placementIndex: n,
						isOverlay: o
					} = t;
					e(Object(f.c)(Object(_.a)(r, !!o, n)))
				}
			}));
			t.default = J(Object(y.b)(Object(l.a)(Z)))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function o(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.E.NO_STRIPE_SUBSCRIPTION:
							case n.E.USER_DOESNT_EXIST:
							case n.E.USER_REQUIRED_ERROR:
							case n.E.VALIDATION_ERROR:
								return e;
							case n.E.NO_USER:
							case n.E.NO_TEXT:
							case n.E.NO_URL:
								return n.E.VALIDATION_ERROR;
							case n.E.CREDIT_CARD_FAILURE:
							case n.E.CREDIT_CARD_FAILURE_GENERIC:
								return n.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.E.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				p = (e, t, r, n) => o => ({
					...a(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				m = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? c(r) : null
				}),
				f = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...a(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: o.profileById(n, t),
					subreddit: o.subredditById(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return p
			})), r.d(t, "clickRpanGiveAward", (function() {
				return m
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return v
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return _
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return x
			})), r.d(t, "clickCancelReportAward", (function() {
				return S
			})), r.d(t, "clickConfirmReportAward", (function() {
				return j
			})), r.d(t, "viewGildModalEvent", (function() {
				return C
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return I
			})), r.d(t, "clickMessageInputEvent", (function() {
				return T
			})), r.d(t, "typeMessageInputEvent", (function() {
				return P
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return L
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return U
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return z
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/GoldPurchase.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.defaults(e),
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				p = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				m = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				y = e => (t, r) => n => ({
					...u(n, r),
					source: Object(a.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = y("award_hovercard_report"),
				_ = y("cancel_award_hovercard_report"),
				E = y("flag_award"),
				O = y("cancel_flag_award"),
				w = y("confirm_flag_award"),
				x = y("report_community_award"),
				S = y("cancel_report_community_award"),
				j = y("confirm_report_community_award"),
				C = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				I = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => s => ({
					...u(s, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				z = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, h = s.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, y = b ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = r ? Object(m.a)(r) ? "comment" : "post" : void 0, _ = l || a.s(e), E = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === _)[0], O = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.c)(E, b)), w = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, x = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, S = E ? E.baselinePennies !== E.pennies ? `${w}_percent_price` : E.baselineCoins !== E.coins ? `${x}_percent_bonus` : void 0 : void 0, j = y === d.GoldPurchaseType.Premium ? n.pb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: r ? c.comment(e, r) : null,
						correlationId: a.q(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: r ? c.post(e, r) : null,
						screen: c.screen(e),
						subreddit: r ? c.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: y,
							gildedContent: b,
							contentType: v,
							numberCoins: E ? E.coins : void 0,
							offerContext: O,
							offerType: S
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: j
						},
						purchase: {
							priceMicros: j
						}
					}
				},
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				E = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				w = (e, t, r) => n => {
					const o = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : a.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				x = e => t => {
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./src/reddit/hooks/useTooltip.ts");
			const i = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, i))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return Object(n.useContext)(o.b)
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, r] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, p] = Object(o.useState)(!1), m = Object(o.useCallback)(async () => p(!0), []), f = Object(o.useCallback)(() => p(!1), []), b = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g
				} = Object(s.a)(t, i, b);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: c,
						style: g.popper,
						...h.popper
					},
					show: m,
					target: {
						element: t,
						ref: r
					},
					visible: u
				}), [l, h, c, f, m, g, t, r, u])
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = r.n(i);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(c);
			t.a = e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(s.a)(Object(a.b)(t ? "pin" : "sticky", e.isFilled), d.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(a.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? s.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), o.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			var n, o, s = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[n.Loyalty]: s.a.First,
					[n.Achievement]: s.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === s.a.First ? n.Loyalty : e === s.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			var n, o;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return o
				})), r.d(t, "c", (function() {
					return s
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(n || (n = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(o || (o = {}));
			const s = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					s = "new_purchaser" === r,
					i = "repeat_purchaser" === r;
				return t ? o.GildFlow : n ? o.LowCoinBalance : s ? o.NewUserTargetedOffer : i ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, o = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const s = {
				status: n.NotFetched
			};
			t.b = (e = s, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case o.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case o.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, o = r("./src/lib/constants/specialMembership.ts"),
				s = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let s;
						(s = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? r.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(i.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(p).sort((e, r) => {
					const n = t[e.id],
						o = t[r.id];
					return Object(i.b)(n, o)
				})
			}

			function f(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						o = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][r] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), u(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
					collections: {
						[c.a.Loyalty]: m(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: m(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: m(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: m(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case s.a: {
						const {
							subredditId: r
						} = t.payload, o = e[r];
						return o && o.status === n.Fetched ? {
							...e,
							[r]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case s.h: {
						const {
							subredditId: r
						} = t.payload, o = e[r];
						return o && o.status === n.Fetched ? {
							...e,
							[r]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case s.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				o = r.n(n),
				s = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = r("./src/reddit/actions/modQueue/constants.ts"),
				a = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const p = {};
			t.a = (e = p, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, o = {
							...e
						};
						return Object.keys(n).forEach(e => {
							o[e] || (o[e] = n[e])
						}), o
					}
					case u.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n,
								displaySettings: o
							}
						}
					}
					case s.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, o = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: o
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: n
						} = t.payload, o = {
							...e[r].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: o
							}
						}
					}
					case u.q: {
						const r = t.payload,
							n = e[r.subredditId],
							o = e[r.subredditId].templates,
							s = e[r.subredditId].templateIds,
							i = {
								...o,
								[r.template.id]: r.template
							},
							a = [...s];
						return a.includes(r.template.id) || a.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...n,
								templates: i,
								templateIds: a
							}
						}
					}
					case u.g: {
						const r = t.payload,
							n = e[r.subredditId],
							s = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							a = o()(s, r.templateId),
							c = i.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const o = t.author;
					return o && n[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/commentSelector.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: o
				}) => e.awardSubType === n.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let o = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						o = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return l(o, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: o
				}) : l(e, r, t),
				p = (e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const s = Object(c.c)(e),
						a = d.find(e => e >= r),
						l = n ? Object(i.D)(e, {
							postId: n
						}) || Object(o.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: a,
						prefersReducedMotion: s,
						postOrComment: l
					})), e), {})
				},
				m = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(a.mb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return m(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(s.b)(e),
						r = Object(s.a)(e);
					return m(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return i
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "q", (function() {
				return c
			})), r.d(t, "t", (function() {
				return d
			})), r.d(t, "s", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "y", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "v", (function() {
				return y
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => {
					const t = Object(n.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.updateCardModal.pending,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				E = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				w = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				x = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				j = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				k = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/models/Flair/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : o.b.Right,
				u = Object(n.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r) return {
						type: o.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						n = u(e, {
							subredditId: t
						}),
						o = c(e, {
							subredditId: t
						});
					if (!r || !n || !o) return !1;
					if (o.applied) return !0;
					const i = Object(s.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = n.permissions;
					return !!o.templateIds.find(e => {
						return !o.templates[e].modOnly || i
					}) && a
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.59b92e43ec625d4324f8.js.map