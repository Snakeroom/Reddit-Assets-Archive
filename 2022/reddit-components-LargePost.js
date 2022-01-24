// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.9592673b7598ad1f7a74.js
// Retrieved at 1/24/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
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
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !r && !l && /macintosh/i.test(t),
						x = !i && !u && !p && !m && /linux/i.test(t),
						_ = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						E = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !E && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : f ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, _ ? (o.msedge = e, o.version = _) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? o = {
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
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
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, y && (o.version = y)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, y && (o.version = y)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var g = "";
					o.windows ? g = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? g = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? g = (g = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? g = (g = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? g = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? g = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? g = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? g = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (g = n(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (o.osversion = g);
					var S = !o.windows && g.split(".")[0];
					return E || c || "ipad" == r || i && (3 == S || S >= 4 && !v) || o.silk ? o.tablet = e : (v || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, s = null == e ? 0 : e.length; ++n < s;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return s(e, (function(e, s, o) {
					return n = !!t(e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				o = n("./node_modules/lodash/_baseEvery.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : o;
				return n && a(e, t, n) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/react/index.js");

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

			function r(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = r(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof r(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
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
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + s)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
					f = o(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== r(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((x = o(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
					x: f.left + h.scrollLeft - x.x,
					y: f.top + h.scrollTop - x.y,
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

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(x(h(i)))
			}

			function _(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function E(e) {
				for (var t = r(e), n = y(e); n && _(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var v = "top",
				O = "bottom",
				g = "right",
				S = "left",
				P = "auto",
				C = [v, O, g, S],
				T = "start",
				w = "end",
				j = "clippingParents",
				k = "viewport",
				I = "popper",
				N = "reference",
				A = C.reduce((function(e, t) {
					return e.concat([t + "-" + T, t + "-" + w])
				}), []),
				L = [].concat(C, [P]).reduce((function(e, t) {
					return e.concat([t, t + "-" + T, t + "-" + w])
				}), []),
				D = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function M(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var o = t.get(s);
								o && e(o)
							}
						})), s.push(o)
					}(e)
				})), s
			}
			var R = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function F() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function B(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					o = t.defaultOptions,
					r = void 0 === o ? R : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, R), r),
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
							setOptions: function(n) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var o = function(e) {
									var t = M(e);
									return D.reduce((function(e, n) {
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
								}([].concat(s, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: c,
											name: t,
											instance: u,
											options: s
										});
										d.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (F(t, n)) {
										c.rects = {
											reference: f(t, E(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[s],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
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
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var U = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function Y(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? V(o) : null,
					i = o ? W(o) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case v:
						t = {
							x: a,
							y: n.y - s.height
						};
						break;
					case O:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case g:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case S:
						t = {
							x: n.x - s.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = r ? Y(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case T:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case w:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
					}
				}
				return t
			}
			var q = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function z(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							s = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * s) / s || 0,
							y: Math.round(n * s) / s || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = S,
					x = v,
					_ = window;
				if (d) {
					var y = E(n);
					y === r(n) && (y = l(n)), o === v && (x = O, m -= y.clientHeight - s.height, m *= c ? 1 : -1), o === S && (h = g, p -= y.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var P, C = Object.assign({
					position: a
				}, d && q);
				return c ? Object.assign(Object.assign({}, C), {}, ((P = {})[x] = b ? "0" : "", P[h] = f ? "0" : "", P.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", P)) : Object.assign(Object.assign({}, C), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
				}))
			}
			var J = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return J[e]
				}))
			}

			function Z(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var s = t;
					do {
						if (s && e.isSameNode(s)) return !0;
						s = s.parentNode || s.host
					} while (s)
				}
				return !1
			}

			function Q(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === k ? Q(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? E(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Z(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(s, [n]),
					r = o[0],
					i = o.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
					}), $(e, r));
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

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function se(e, t) {
				void 0 === t && (t = {});
				var n = t,
					s = n.placement,
					r = void 0 === s ? e.placement : s,
					i = n.boundary,
					c = void 0 === i ? j : i,
					d = n.rootBoundary,
					u = void 0 === d ? k : d,
					p = n.elementContext,
					m = void 0 === p ? I : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					_ = te("number" != typeof x ? x : ne(x, C)),
					y = m === I ? N : I,
					E = e.elements.reference,
					S = e.rects.popper,
					P = e.elements[b ? y : m],
					T = ee(a(P) ? P : P.contextElement || l(e.elements.popper), c, u),
					w = o(E),
					A = H({
						reference: w,
						element: S,
						strategy: "absolute",
						placement: r
					}),
					L = Q(Object.assign(Object.assign({}, S), A)),
					D = m === I ? L : w,
					M = {
						top: T.top - D.top + _.top,
						bottom: D.bottom - T.bottom + _.bottom,
						left: T.left - D.left + _.left,
						right: D.right - T.right + _.right
					},
					R = e.modifiersData.offset;
				if (m === I && R) {
					var F = R[r];
					Object.keys(M).forEach((function(e) {
						var t = [g, O].indexOf(e) >= 0 ? 1 : -1,
							n = [v, O].indexOf(e) >= 0 ? "y" : "x";
						M[e] += F[n] * t
					}))
				}
				return M
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function re(e, t, n) {
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

			function ie(e) {
				return [v, g, O, S].some((function(t) {
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
								n = e.instance,
								s = e.options,
								o = s.scroll,
								i = void 0 === o || o,
								a = s.resize,
								c = void 0 === a || a,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), c && d.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), c && d.removeEventListener("resize", n.update, U)
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
								s = n.gpuAcceleration,
								o = void 0 === s || s,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), z(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), z(Object.assign(Object.assign({}, a), {}, {
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
									s = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
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
										var s = t.elements[e],
											o = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(s) && d(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
											s.removeAttribute(e)
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
								s = e.name,
								o = n.offset,
								r = void 0 === o ? [0, 0] : o,
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = V(e),
											o = [S, v].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [S, g].indexOf(s) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name;
							if (!t.modifiersData[s]._skip) {
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), _ = c || (x === h || !f ? [K(h)] : function(e) {
										if (V(e) === P) return [];
										var t = K(e);
										return [X(e), t, X(t)]
									}(h)), y = [h].concat(_).reduce((function(e, n) {
										return e.concat(V(n) === P ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = W(s),
												u = (l ? a ? A : A.filter((function(e) {
													return W(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
														rootBoundary: r,
														padding: i
													})[V(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), E = t.rects.reference, w = t.rects.popper, j = new Map, k = !0, I = y[0], N = 0; N < y.length; N++) {
									var D = y[N],
										M = V(D),
										R = W(D) === T,
										F = [v, O].indexOf(M) >= 0,
										B = F ? "width" : "height",
										U = se(t, {
											placement: D,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										Y = F ? R ? g : S : R ? O : v;
									E[B] > w[B] && (Y = K(Y));
									var H = K(Y),
										q = [];
									if (r && q.push(U[M] <= 0), a && q.push(U[Y] <= 0, U[H] <= 0), q.every((function(e) {
											return e
										}))) {
										I = D, k = !1;
										break
									}
									j.set(D, q)
								}
								if (k)
									for (var z = function(e) {
											var t = y.find((function(t) {
												var n = j.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return I = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === z(G)) break
									}
								t.placement !== I && (t.modifiersData[s]._skip = !0, t.placement = I, t.reset = !0)
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
								s = e.name,
								o = n.mainAxis,
								r = void 0 === o || o,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								_ = V(t.placement),
								y = W(t.placement),
								P = !y,
								C = Y(_),
								w = "x" === C ? "y" : "x",
								j = t.modifiersData.popperOffsets,
								k = t.rects.reference,
								I = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (j) {
								if (r) {
									var L = "y" === C ? v : S,
										D = "y" === C ? O : g,
										M = "y" === C ? "height" : "width",
										R = j[C],
										F = j[C] + x[L],
										B = j[C] - x[D],
										U = m ? -I[M] / 2 : 0,
										H = y === T ? k[M] : I[M],
										q = y === T ? -I[M] : -k[M],
										z = t.elements.arrow,
										G = m && z ? b(z) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = K[L],
										X = K[D],
										Z = oe(0, k[M], G[M]),
										Q = P ? k[M] / 2 - U - Z - J - N : H - Z - J - N,
										$ = P ? -k[M] / 2 + U + Z + X + N : q + Z + X + N,
										ee = t.elements.arrow && E(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										re = j[C] + Q - ne - te,
										ie = j[C] + $ - ne,
										ae = oe(m ? Math.min(F, re) : F, R, m ? Math.max(B, ie) : B);
									j[C] = ae, A[C] = ae - R
								}
								if (a) {
									var ce = "x" === C ? v : S,
										de = "x" === C ? O : g,
										le = j[w],
										ue = oe(le + x[ce], le, le - x[de]);
									j[w] = ue, A[w] = ue - le
								}
								t.modifiersData[s] = A
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								s = e.name,
								o = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = Y(i),
								c = [S, g].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? v : S,
									p = "y" === a ? O : g,
									m = n.rects.reference[c] + n.rects.reference[a] - r[a] - n.rects.popper[c],
									f = r[a] - n.rects.reference[a],
									h = E(o),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									_ = m / 2 - f / 2,
									y = d[u],
									P = x - l[c] - d[p],
									C = x / 2 - l[c] / 2 + _,
									T = oe(y, C, P),
									w = a;
								n.modifiersData[s] = ((t = {})[w] = T, t.centerOffset = T - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								o = n.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Z(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, C))
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
								s = t.rects.reference,
								o = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								a = se(t, {
									altBoundary: !0
								}),
								c = re(i, s),
								d = re(a, o, r),
								l = ie(c),
								u = ie(d);
							t.modifiersData[n] = {
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
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							s = t[1];
						return e[n] = s, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? s.useLayoutEffect : s.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var o = s.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = s.useState({
							styles: {
								popper: {
									position: r.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = s.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									c({
										styles: le(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						l = s.useMemo((function() {
							var e = {
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
						u = s.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var s = (n.createPopper || ae)(e, t, l);
							return u.current = s,
								function() {
									s.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				s = "function" == typeof Map,
				o = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (s && t instanceof Map && i instanceof Map) {
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
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
							if (n && t instanceof Element) return !1;
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
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(s.D)(e)
				} else i = Object(s.D)(e);
				const a = r.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.pc, o.pb, o.B, o.Q, o.kb, o.Rb],
				i = {
					[o.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.pc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.pc]: "",
						[o.pb]: "",
						[o.B]: "",
						[o.Q]: "",
						[o.kb]: "",
						[o.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const p = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? p : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return O
			}));
			const s = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				y = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				v = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				O = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const c = i();
				Object(s.a)(e, a, c) ? n(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					m(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(a.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return P
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				_ = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CrosspostBox/index.m.less"),
				v = n.n(E),
				O = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 8,
				P = 1,
				C = O.a.div("Container", v.a),
				T = O.a.div("PostMetaWrapper", v.a),
				w = O.a.wrapped(m.c, "PostTitle", v.a),
				j = O.a.div("FlatList", v.a),
				k = O.a.div("FlatItem", v.a),
				I = O.a.span("FlatListDotSpacer", v.a),
				N = O.a.wrapped(C, "LinkContainer", v.a),
				A = O.a.div("Content", v.a),
				L = O.a.div("ThumbnailContainer", v.a),
				D = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Mb.TOPIC),
					shouldOpenPostInNewTab: y.cb
				}),
				M = Object(i.b)(D);
			t.c = Object(x.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: s,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return i && !i.media ? r.a.createElement(N, {
					className: d
				}, r.a.createElement(A, null, r.a.createElement(T, null, r.a.createElement(p.a, c)), R(i), i.source && r.a.createElement(f.a, {
					post: i
				}), B(e)), V(e)) : r.a.createElement(C, {
					className: d
				}, r.a.createElement(T, null, r.a.createElement(p.a, c)), R(i), F(e), B(e))
			}));
			const R = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: m.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, s = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, g({}, s, {
						className: v.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(j, null, r.a.createElement(k, null, s.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [s.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(k, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, s.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [s.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(L, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("EconHelperActions~index~reddit-components-Econ-Prediction"), n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("EconHelperActions~index~reddit-components-Econ-Prediction"), n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => u._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [u._param("total participated users", Object(l.b)(e)), u._plural(e)], {
				hk: "1yrPLH"
			});
			var m = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				f = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					n = t.status === c.a.Live,
					o = t.status === c.a.Closed,
					l = Object(i.e)(t => Object(d.V)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: f.a.container
				}, r.a.createElement("div", {
					className: f.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), n && r.a.createElement("span", {
					className: Object(s.a)(f.a.badge, f.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(s.a)(f.a.badge, f.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: f.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: f.a.title
				}, t.name))
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/Econ/Audio/async.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				_ = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/reddit/selectors/experiments/econ/index.ts"),
				S = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/ads/index.ts"),
				j = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				I = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = n("./src/reddit/components/AwardBadges/index.tsx"),
				A = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				W = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Y = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = n("./src/reddit/components/PostContainer/index.tsx"),
				q = n("./src/reddit/components/PostLeftRail/index.tsx"),
				z = n("./src/reddit/components/PostMedia/index.tsx"),
				G = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				K = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				J = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => o.a.createElement("div", {
					className: X.a.container
				}, o.a.createElement(K.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: X.a.metaText
				}, Z._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = n("./src/reddit/components/PostTitle/index.tsx"),
				te = n("./src/reddit/components/PostTopLine/index.tsx"),
				ne = n("./src/reddit/components/SourceLink/index.tsx"),
				se = n("./src/reddit/constants/postLayout.ts"),
				oe = n("./src/reddit/contexts/InsideOverlay.tsx"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/helpers/isCrosspost.ts"),
				ce = n("./src/reddit/helpers/postEvent.ts"),
				de = n("./src/reddit/models/Audio/index.ts"),
				le = n("./src/reddit/constants/experiments.ts"),
				ue = n("./src/reddit/helpers/chooseVariant/index.ts"),
				pe = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const me = Object(a.a)(C.O, e => e.some(pe.c)),
				fe = Object(a.a)(me, e => e),
				be = (e, t) => Object(ue.c)(e, {
					experimentName: le.hc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && fe(e, {
							listingKey: n
						})
					}
				});
			var he = n("./src/reddit/selectors/postFlair.ts"),
				xe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				_e = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ye = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = n.n(ye),
				ve = n("./src/reddit/selectors/i18n/index.ts"),
				Oe = n("./src/reddit/components/LargePost/index.m.less"),
				ge = n.n(Oe);
			const Se = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(C.O)(e, {
						listingKey: n
					}) : void 0
				},
				Pe = Object(r.b)(() => Object(a.c)({
					autoplayPref: T.b,
					activeModalId: O.a,
					hideNSFWPref: T.C,
					flairStyleTemplate: re.V,
					isCurrentUserProfilePost: C.l,
					isLoggedIn: T.J,
					isActive: C.j,
					showPromotedCTA: xe.a,
					moderatorPermissions: P.l,
					modModeEnabled: re.T,
					posts: Se,
					postHeightVariant: be,
					shouldShowNsfwListingBelow: ve.b,
					showEditFlair: he.a,
					showAwardsPlaque: S.a,
					isAudioRoomPostEnabled: g.a,
					isRecordingEnabled: g.z
				}), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const s = n === v.a.upvoted ? Object(p.jb)(t) : Object(p.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(p.fb)(t)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				Ce = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: m,
						forceLoadMedia: v,
						hideNSFWPref: O,
						hostPostData: g,
						imageGalleryCurrentItem: S,
						inSubredditOrProfile: P = !1,
						isCommentsPage: C,
						isCurrentUserProfilePost: T,
						isFrontpage: K,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: X,
						isOverlay: Z,
						isTopicPage: oe,
						isAudioRoomPostEnabled: re,
						isCommentCountAnimationEnabled: ie,
						isVoteCountAnimationEnabled: ue,
						isCountAnimShadowTestEnabled: pe,
						isRecordingEnabled: me,
						listingIndex: fe,
						listingKey: be,
						moderatorPermissions: he,
						modModeEnabled: xe,
						onClickPost: ye,
						onIgnoreReports: ve,
						onOpenReportsDropdown: Oe,
						post: Se,
						postHeightVariant: Pe,
						scrollerItemRef: Ce,
						shouldShowGalleryTileOption: Te,
						shouldShowNsfwListingBelow: we,
						showAwardsPlaque: je,
						showEditFlair: ke,
						showPromotedCTA: Ie,
						subredditOrProfile: Ne,
						userIsOp: Ae,
						postId: Le,
						postIds: De,
						onceInViewport: Me
					} = e, Re = !!e.redditStyle || !!e["data-redditstyle"], Fe = Re ? void 0 : m, Be = Object(l.a)(he), Ue = xe && Be, Ve = Object(c.a)(he), We = Object(d.a)(he), Ye = Object(V.c)(Se), He = Object(B.d)(Se), qe = !!Se.media && Se.media.type === y.o.RTJSON, ze = Ae && qe, Ge = n ? n - q.a : void 0, Ke = !!Se.recommendationContext, Je = !(K && X || oe) || Ke && X, Xe = (e => e === le.me.OnlyTitles)(Pe) && !Object(ae.a)(Se), Ze = (e => e === le.me.MediumHeight)(Pe) && !Object(ae.a)(Se), Qe = (e => {
						var t;
						const {
							post: n,
							postIds: s,
							posts: o
						} = e;
						if (!Object(E.r)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = s && 0 === s.indexOf(n.id),
							i = s && 1 === s.indexOf(n.id),
							a = o && o[1] && Object(E.r)(o[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), $e = !!(null == g ? void 0 : g.shouldShowLinkedPosts), et = (!P || $e || we) && !Se.isSponsored, tt = Object(w.t)(Se, S), {
						source: nt
					} = tt, st = Object(s.useRef)(null), ot = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Me || Me(fe))
						})
					}, [Me, fe]);
					return Object(_.a)(st, ot), o.a.createElement(x.b, null, o.a.createElement(H.a, {
						className: Object(j.a)(ge.a.container, r, Ee.a.largeAndMediumPostStyles, Ee.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[Ee.a.mUseRedditTheme]: Re,
							promotedvideolink: Se.isSponsored && !(Se.media && y.a.has(Se.media.type)),
							[ge.a.topCompactPost]: Qe && Qe.hasTopCompactPostStyles,
							[ge.a.bottomCompactPost]: Qe && Qe.hasBottomCompactPostStyles
						}),
						isOverlay: Z,
						style: Object(u.b)(e.flairStyleTemplate),
						post: Se,
						onClick: ye,
						eventFactory: p
					}, o.a.createElement("div", {
						ref: st
					}), o.a.createElement($.a, {
						model: Se,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: pe,
						isVoteCountAnimation: ue,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Fe,
						redditStyle: Re,
						postId: Le
					}), o.a.createElement(Y.a, {
						className: Object(j.a)(ge.a.backgroundWrapper, {
							[ge.a.isEvent]: Object(ce.a)(Se)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Fe,
						post: Se,
						redditStyle: Re
					}, o.a.createElement(D.a, {
						post: Se
					}), Qe && Qe.showPinnnedHeader && o.a.createElement(Q, null), Object(i.c)(Se) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: Se
					}), o.a.createElement(b.a, {
						post: Se
					})), !Object(i.c)(Se) && o.a.createElement(o.a.Fragment, null, !!Se.recommendationContext && o.a.createElement(W.a, {
						content: Se.recommendationContext.content,
						layout: se.g.Large,
						post: Se
					}), o.a.createElement(te.a, {
						className: ge.a.postTopLine,
						hideAwards: je,
						hideNSFWPref: O,
						hostPostData: g,
						iconClassName: ge.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!C,
						isCompactPinnedPost: !!Qe,
						isCurrentUserProfilePost: T,
						isOverlay: !!Z,
						isTopicPage: !!oe,
						listingKey: be,
						post: Se,
						shouldShowSubscribeButton: Je,
						showSubreddit: et,
						showSubredditIcon: !0,
						subredditOrProfile: Ne
					}), o.a.createElement(ee.c, {
						className: ge.a.postTitle,
						post: Se,
						redditStyle: Re,
						size: ee.b.Large,
						titleColor: Fe && Fe.postTitleColor,
						isOverlay: Z
					}), Se.source && !Se.isSponsored && !(Se.media && Object(y.H)(Se.media)) && o.a.createElement(ne.a, {
						className: ge.a.sourceLink,
						post: Se
					})), o.a.createElement("div", {
						className: ge.a.postMediaWrapper
					}, !Qe && o.a.createElement(z.a, {
						isGalleryTileLayoutDefault: J,
						isListing: !0,
						isMediumHeight: Ze,
						isNotCardView: !!Z,
						isTitleOnly: Xe,
						showCentered: !0,
						flairStyleTemplate: Fe,
						post: Se,
						availableWidth: Ge,
						shouldLoad: v,
						scrollerItemRef: Ce,
						autoplayPref: t,
						shouldShowGalleryTileOption: Te,
						showPromotedCTA: Ie
					})), Ie && nt && nt.url && o.a.createElement(k.a, {
						className: ge.a.adLinkWrapper
					}, o.a.createElement(I.a, {
						post: Se,
						adLinkContent: tt
					})), xe && Be && He && o.a.createElement("div", {
						className: ge.a.modModeBannerWrapper
					}, o.a.createElement(F.a, {
						thing: Se
					})), xe && Be && Ye && o.a.createElement("div", {
						className: ge.a.modModeBannerWrapper
					}, o.a.createElement(U.a, {
						onIgnoreReports: ve,
						reportable: Se
					})), Object(de.b)(Se) && re && o.a.createElement(f.a, {
						post: Se,
						isRecordingEnabled: me
					}), o.a.createElement(R.d, null), je && o.a.createElement(N.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Se,
						tooltipType: Z ? _e.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: ge.a.flatListContainer
					}, o.a.createElement(L.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Fe,
						model: Se,
						onVoteClick: e.handleVote
					}), o.a.createElement(M.c, {
						currentUser: a,
						hasModFlairPerms: Ve,
						hasModFullPerms: We,
						hasModPostPerms: Be,
						hostPostData: g,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: pe,
						isLargePost: !0,
						isOverlay: !!Z,
						listingKey: be,
						modModeEnabled: xe,
						onIgnoreReports: ve,
						onOpenReportsDropdown: Oe,
						post: Se,
						showEditPost: ze,
						showEditFlair: ke,
						useFlatlistBreakpoints: Object(G.b)({
							editPost: !1,
							save: !Ue,
							hide: !1,
							report: !1
						})
					}))), K && o.a.createElement(A.a, {
						post: Se,
						postIds: null != De ? De : [],
						subredditId: null == Ne ? void 0 : Ne.id
					})))
				});
			Ce.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(Pe(Object(oe.b)(Ce)))
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: s,
						hasTooltip: d,
						tooltipText: u,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(d);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => o.a.createElement(a.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: u(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Rb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/models/Subreddit/index.ts"),
				y = n("./src/reddit/components/PostMeta/index.m.less"),
				E = n.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: y,
					isOverlay: v,
					isTopicPage: O,
					post: g,
					shouldShowSubscribeButton: S,
					subredditOrProfile: P,
					tooltipType: C
				} = e, T = !!O, w = Object(x.a)();
				return o.a.createElement("div", {
					className: E.a.metaContainer
				}, !s && !g.isSponsored && P && o.a.createElement(i.a, {
					postId: g.id,
					subredditName: P.name
				}, o.a.createElement(u.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: w
					}
				}, P.displayText)), P && P.isQuarantined && o.a.createElement(l.a, null), !s && !g.isSponsored && P && S && !y && o.a.createElement(p.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(h.h)(g.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(_.h)(P) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: g.id,
					size: f.d.XXS,
					small: !0
				}), !s && !g.isSponsored && o.a.createElement(b.b, null), !s && !g.isSponsored && o.a.createElement(a.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				}), o.a.createElement(d.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: g,
					tooltipType: C
				}), o.a.createElement(c.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!s,
					post: g,
					tooltipType: C
				}), !T && o.a.createElement(r.a, {
					hideCta: n,
					thing: g,
					tooltipType: v ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: _,
					postId: y,
					isReadingIndicatorsExperimentEnabled: E
				} = e, v = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && o.a.createElement(c.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: v,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: E
					}),
					isReadingIndicatorsExperimentEnabled: E
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return L
			})), n.d(t, "a", (function() {
				return K
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = n("./src/reddit/actions/post.ts"),
				_ = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/lib/getShortenedLink.ts"),
				T = n("./src/reddit/components/FlairWrapper/index.tsx"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				I = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				N = n.n(I);
			const A = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var L, D = Object(i.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, N.a.proposalMetaData)
					}, r.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(j.a)(s)), w.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(k.a, {
						className: N.a.proposalExpiry,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/PostTitle/index.m.less"),
				U = n.n(B),
				V = n("./src/config.ts"),
				W = n("./src/reddit/hooks/useClickSourceData.ts"),
				Y = n("./src/reddit/hooks/useExperimentVariant.ts"),
				H = n("./src/reddit/hooks/usePostContext.ts"),
				q = n("./src/reddit/hooks/useTheme.ts"),
				z = n("./src/telemetry/models/Outbound.ts");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(L || (L = {}));
			const K = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(q.a)();
					let d = "";
					switch (e) {
						case L.ExtraLarge:
							d = U.a.ExtraLarge;
							break;
						case L.Large:
							d = U.a.Large;
							break;
						case L.Medium:
							d = U.a.Medium;
							break;
						case L.Small:
							d = U.a.Small;
							break;
						case L.ExtraSmall:
							d = U.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(l.a)(U.a.Title, i, d, {
							[U.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(P.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? r.a.createElement(M.b, {
						type: n
					}, o) : o)
				},
				J = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...o
				}) => r.a.createElement(a.a, G({}, o, {
					className: Object(l.a)(e, U.a.styledLink, {
						[U.a.isVisitedEnabled]: !t
					})
				}), s),
				X = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => r.a.createElement("div", {
					className: Object(l.a)(U.a.titleContainer, n, {
						[U.a.isNoWrap]: t,
						[U.a.isVisitedEnabled]: !e
					})
				}, s),
				Z = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.cb
				}),
				Q = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, o = Object(i.d)(), a = Object(W.a)(), c = Object(Y.a)(p.fd) === p.md.Enabled, l = Object(i.e)(R.b), u = e => {
						!l || t.media && Object(g.H)(t.media) || (e.preventDefault(), o(Object(x.ab)(Object(y.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(X, {
						nowrap: e.nowrap
					}, r.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, r.a.createElement($, e)); {
						const o = t.media && Object(g.H)(t.media) ? Object(E.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(y.b)(o) : c ? Object(h.a)(o, void 0, a) : Object(h.a)(o);
						return r.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? r.a.createElement(f.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, r.a.createElement($, t)) : r.a.createElement($, t)
						})(t, e) : r.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, r.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return r.a.createElement(K, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent
					}), o)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, o = e.isCommentsPage ? z.SourceElement.PostLink : z.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== L.Large && !n.isSponsored && !(n.media && Object(g.H)(n.media)) && (n.source || n.media && (n.media.type === g.o.GIFVIDEO || n.media.type === g.o.IMAGE || n.media.type === g.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(g.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(C.a)(n), !n.isSponsored && r.a.createElement(v.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== L.Large && e.size !== L.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(C.a)(n), !n.isSponsored && r.a.createElement(v.a, {
						name: "external_link",
						className: U.a.outboundLinkIcon
					}));
					return null
				};
			class te extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${U.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: o,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === O.b.Left, u = Object(T.b)(a), p = c ? u.filter(e => e.type === O.f.Nsfw || e.type === O.f.Spoiler) : d ? u.filter(e => Object(_.q)(e.type)) : [], m = c ? [] : d ? u.filter(e => !Object(_.q)(e.type)) : u, f = !o && !s, b = !t && p && p.length > 0 && f, h = !t && m && m.length > 0 && f;
					return r.a.createElement("div", {
						className: Object(l.a)(U.a.Component, e, a.id),
						ref: this.props.innerRef
					}, !c && b && r.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), !Object(S.b)(a) && r.a.createElement(Q, G({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && r.a.createElement(D, {
						className: U.a.pollMeta,
						pollId: i.id
					}), r.a.createElement(ee, this.props), h && r.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), r.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${V.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(m.fb)(),
					n = Object(m.w)(t),
					s = Object(H.a)(),
					o = Object(i.e)(o => Z(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(q.a)(),
					c = Object(u.b)();
				return s ? r.a.createElement(te, G({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				E = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/components/PostTopLine/index.m.less"),
				P = n.n(S);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: n,
				hideAwards: o,
				hideNSFWPref: S,
				hostPostData: C,
				iconClassName: T,
				inSubredditOrProfile: w,
				isCommentsPage: j,
				isCompactPinnedPost: k,
				isCurrentUserProfilePost: I,
				isOverlay: N,
				isTopicPage: A,
				listingKey: L,
				post: D,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: R,
				showSubreddit: F,
				showSubredditIcon: B,
				subredditOrProfile: U,
				isFollowed: V,
				shouldShowFollowButton: W,
				onFollowPostClick: Y
			}) => {
				const H = o || A,
					q = U && Object(O.h)(U),
					z = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(g.sb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(P.a.container, e)
				}, F && U && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, B && r.a.createElement(m.b, {
					className: Object(a.a)(P.a.subredditIcon, T),
					shouldHideNsfwIcon: S,
					subredditOrProfile: U
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, F && r.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), r.a.createElement(p.d, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: t,
					tooltipType: N ? p.c.Lightbox : void 0,
					post: D,
					showSub: F,
					subredditOrProfile: U
				}), r.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: k,
					post: D,
					tooltipType: N ? p.c.Lightbox : void 0
				}), !H && r.a.createElement(c.a, {
					isPostDetail: j,
					thing: D,
					tooltipType: N ? p.c.Lightbox : void 0
				})), U && z && F && M && !I && r.a.createElement(b.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(D.id, e ? "unsubscribe" : "subscribe", "post", L, C),
					identifier: {
						name: U.name,
						type: q ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS
				}), R && r.a.createElement(_.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(v.D)(D),
					source: D.source
				}, r.a.createElement(E.a, {
					className: P.a.outboundLinkIcon
				})), W && z && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: Y,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
				},
				r = e => {
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
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.m(e),
					screen: o.Y(e),
					subreddit: o.hb(e),
					userSubreddit: o.qb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				y = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				E = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.c(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				O = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : v[e],
					...r(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				S = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...r(i),
					actionInfo: o.c(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				P = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				k = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				N = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e, t = o.a) {
				return Object(s.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(s.useContext)(o.b)
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "p", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				p = e => e.__typename === o.a.Subreddit;
			var m, f, b, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const x = e => f[h[e]],
				_ = e => h[f[e]],
				y = e => b[f[e]],
				E = e => f[b[e]],
				v = e => h[b[e]];
			var O;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const g = e => {
					switch (e) {
						case O.Hourly:
						case O.Daily:
						case O.Weekly:
						case O.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				P = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				C = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
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
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
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
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(p).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
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
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
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
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
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
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.g
					}) === s.a.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.m
					}) === s.Vc
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.n
					}) === s.Vc
				}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.tc
				});
				return !(!t || Object(s.mf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.mf)(t)
				},
				c = Object(s.a)(a, r.d, (e, t) => e && !t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.9592673b7598ad1f7a74.js.map