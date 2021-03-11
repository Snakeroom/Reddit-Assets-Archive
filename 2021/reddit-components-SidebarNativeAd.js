// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.bbe68a54979ca48a4b91.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
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
					var o, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !s && !l && /macintosh/i.test(t),
						g = !i && !u && !m && !p && /linux/i.test(t),
						v = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !_ && /[^-]mobi/i.test(t),
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
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: v
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
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
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
					}, y && (o.version = y)) : s ? (o = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, y && (o.version = y)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : g && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (o.osversion = w);
					var x = !o.windows && w.split(".")[0];
					return _ || c || "ipad" == s || i && (3 == x || x >= 4 && !E) || o.silk ? o.tablet = e : (E || "iphone" == s || "ipod" == s || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function s(e) {
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

				function i(e, r, o) {
					var i = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = s, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, o) {
				return o(e, (function(e, o, s) {
					n = r ? (r = !1, e) : t(n, e, o, s)
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
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, o)
			}
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

			function m(e) {
				return s(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, m = l(t),
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
				return (b || !b && !n) && (("body" !== d(t) || p(m)) && (h = (r = t) !== s(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), c(t) ? ((g = o(t)).x += t.clientLeft, g.y += t.clientTop) : m && (g.x = u(m))), {
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
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					r = "body" === d(n),
					o = s(n),
					i = r ? [o].concat(o.visualViewport || [], p(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(g(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function _(e) {
				for (var t = s(e), n = y(e); n && v(n) && "static" === m(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
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
				L = [].concat(j, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + k])
				}), []),
				N = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
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
			var D = {
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

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					s = void 0 === o ? D : o;
				return function(e, t, n) {
					void 0 === n && (n = s);
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
							setOptions: function(n) {
								m(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: a(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var o = function(e) {
									var t = R(e);
									return N.reduce((function(e, n) {
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
								}([].concat(r, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: c,
											name: t,
											instance: u,
											options: r
										});
										d.push(s || function() {})
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
											reference: f(t, _(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
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
											} else c.reset = !1, r = -1
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
								m(), l = !0
							}
						};
					if (!F(e, t)) return u;

					function m() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var B = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function V(e) {
				return e.split("-")[1]
			}

			function W(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? G(o) : null,
					i = o ? V(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (s) {
					case E:
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
					case w:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case x:
						t = {
							x: n.x - r.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = s ? W(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case k:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - r[l] / 2)
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
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(i),
					m = u.x,
					p = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = x,
					g = E,
					v = window;
				if (d) {
					var y = _(n);
					y === s(n) && (y = l(n)), o === E && (g = O, p -= y.clientHeight - r.height, p *= c ? 1 : -1), o === x && (h = w, m -= y.clientWidth - r.width, m *= c ? 1 : -1)
				}
				var S, j = Object.assign({
					position: a
				}, d && H);
				return c ? Object.assign(Object.assign({}, j), {}, ((S = {})[g] = b ? "0" : "", S[h] = f ? "0" : "", S.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", S)) : Object.assign(Object.assign({}, j), {}, ((t = {})[g] = b ? p + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
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

			function $(e, t) {
				return t === T ? J(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
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
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === m(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = g(e),
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? _(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Z(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					s = o[0],
					i = o.reduce((function(t, n) {
						var r = $(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					s = void 0 === r ? e.placement : r,
					i = n.boundary,
					c = void 0 === i ? I : i,
					d = n.rootBoundary,
					u = void 0 === d ? T : d,
					m = n.elementContext,
					p = void 0 === m ? P : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					g = void 0 === h ? 0 : h,
					v = te("number" != typeof g ? g : ne(g, j)),
					y = p === P ? A : P,
					_ = e.elements.reference,
					x = e.rects.popper,
					S = e.elements[b ? y : p],
					C = ee(a(S) ? S : S.contextElement || l(e.elements.popper), c, u),
					k = o(_),
					M = z({
						reference: k,
						element: x,
						strategy: "absolute",
						placement: s
					}),
					L = J(Object.assign(Object.assign({}, x), M)),
					N = p === P ? L : k,
					R = {
						top: C.top - N.top + v.top,
						bottom: N.bottom - C.bottom + v.bottom,
						left: C.left - N.left + v.left,
						right: N.right - C.right + v.right
					},
					D = e.modifiersData.offset;
				if (p === P && D) {
					var F = D[s];
					Object.keys(R).forEach((function(e) {
						var t = [w, O].indexOf(e) >= 0 ? 1 : -1,
							n = [E, O].indexOf(e) >= 0 ? "y" : "x";
						R[e] += F[n] * t
					}))
				}
				return R
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function se(e, t, n) {
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
				return [E, w, O, x].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = U({
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
								i = void 0 === o || o,
								a = r.resize,
								c = void 0 === a || a,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, B)
								})), c && d.addEventListener("resize", n.update, B),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, B)
									})), c && d.removeEventListener("resize", n.update, B)
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
							t.modifiersData[n] = z({
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
								s = n.adaptive,
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
								var n = t.styles[e] || {},
									r = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && d(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(e) {
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
								s = void 0 === o ? [0, 0] : o,
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = G(e),
											o = [x, E].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [x, w].indexOf(r) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, s), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i
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
								for (var o = n.mainAxis, s = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, m = n.altBoundary, p = n.flipVariations, f = void 0 === p || p, b = n.allowedAutoPlacements, h = t.options.placement, g = G(h), v = c || (g === h || !f ? [K(h)] : function(e) {
										if (G(e) === S) return [];
										var t = K(e);
										return [Q(e), t, Q(t)]
									}(h)), y = [h].concat(v).reduce((function(e, n) {
										return e.concat(G(n) === S ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = V(r),
												u = (l ? a ? M : M.filter((function(e) {
													return V(e) === l
												})) : j).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
														padding: i
													})[G(n)], t
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
									}), []), _ = t.rects.reference, k = t.rects.popper, I = new Map, T = !0, P = y[0], A = 0; A < y.length; A++) {
									var N = y[A],
										R = G(N),
										D = V(N) === C,
										F = [E, O].indexOf(R) >= 0,
										U = F ? "width" : "height",
										B = re(t, {
											placement: N,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										W = F ? D ? w : x : D ? O : E;
									_[U] > k[U] && (W = K(W));
									var z = K(W),
										H = [];
									if (s && H.push(B[R] <= 0), a && H.push(B[W] <= 0, B[z] <= 0), H.every((function(e) {
											return e
										}))) {
										P = N, T = !1;
										break
									}
									I.set(N, H)
								}
								if (T)
									for (var q = function(e) {
											var t = y.find((function(t) {
												var n = I.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return P = t, "break"
										}, Y = f ? 3 : 1; Y > 0; Y--) {
										if ("break" === q(Y)) break
									}
								t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0)
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
								s = void 0 === o || o,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								m = n.tether,
								p = void 0 === m || m,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								g = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = G(t.placement),
								y = V(t.placement),
								S = !y,
								j = W(v),
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
									var L = "y" === j ? E : x,
										N = "y" === j ? O : w,
										R = "y" === j ? "height" : "width",
										D = I[j],
										F = I[j] + g[L],
										U = I[j] - g[N],
										B = p ? -P[R] / 2 : 0,
										z = y === C ? T[R] : P[R],
										H = y === C ? -P[R] : -T[R],
										q = t.elements.arrow,
										Y = p && q ? b(q) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[L],
										Q = K[N],
										Z = oe(0, T[R], Y[R]),
										J = S ? T[R] / 2 - B - Z - X - A : z - Z - X - A,
										$ = S ? -T[R] / 2 + B + Z + Q + A : H + Z + Q + A,
										ee = t.elements.arrow && _(t.elements.arrow),
										te = ee ? "y" === j ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][j] : 0,
										se = I[j] + J - ne - te,
										ie = I[j] + $ - ne,
										ae = oe(p ? Math.min(F, se) : F, D, p ? Math.max(U, ie) : U);
									I[j] = ae, M[j] = ae - D
								}
								if (a) {
									var ce = "x" === j ? E : x,
										de = "x" === j ? O : w,
										le = I[k],
										ue = oe(le + g[ce], le, le - g[de]);
									I[k] = ue, M[k] = ue - le
								}
								t.modifiersData[r] = M
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
								s = n.modifiersData.popperOffsets,
								i = G(n.placement),
								a = W(i),
								c = [x, w].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? E : x,
									m = "y" === a ? O : w,
									p = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
									f = s[a] - n.rects.reference[a],
									h = _(o),
									g = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = p / 2 - f / 2,
									y = d[u],
									S = g - l[c] - d[m],
									j = g / 2 - l[c] / 2 + v,
									C = oe(y, j, S),
									k = a;
								n.modifiersData[r] = ((t = {})[k] = C, t.centerOffset = C - j, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								s = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Z(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, j))
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
								s = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = se(i, r),
								d = se(a, o, s),
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
				ce = n("./node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				me = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
						},
						i = r.useState({
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
						d = r.useMemo((function() {
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
						l = r.useMemo((function() {
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
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ae)(e, t, l);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
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
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (r = (() => {})) => o => {
				const s = m(o.target, o.currentTarget),
					a = p(o.target, o.currentTarget);
				s && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, s, a)) : n(n => {
					const r = t(e, s, a)(n);
					let o;
					if (r && r.actionInfo) {
						const {
							pageType: e,
							...t
						} = r.actionInfo;
						o = t
					}
					return {
						...r,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && r(o)
			};

			function d(e) {
				return Object(s.c)(t => {
					const {
						sendEvent: n,
						eventFactory: s,
						clickTrackingId: i,
						...d
					} = t, l = Object(r.useCallback)(c(i, s, n), [i, s, n]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				})
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				m = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(r.D)(e)
				} else i = Object(r.D)(e);
				const a = s.a.parse(i),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const s = [o.dc, o.hb, o.x, o.J, o.db, o.Hb],
				i = {
					[o.Hb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.db]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.J]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.x]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.hb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.dc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Hb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.db]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.J]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.x]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.hb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.hb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.dc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
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
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of s) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
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
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(r.a)(o("awardSheetInfoRequested")),
				i = Object(r.a)(o("manageableAwardsRequested")),
				a = Object(r.a)(o("createCommunityAward")),
				c = Object(r.a)(o("createGlobalAward")),
				d = Object(r.a)(o("createModAward")),
				l = Object(r.a)(o("createAwardFailed")),
				u = Object(r.a)(o("createAwardSuccessful")),
				m = Object(r.a)(o("removeCommunityAward")),
				p = Object(r.a)(o("disableAwardinCommunity")),
				f = Object(r.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return x
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				s = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(r.a)(b.L),
				g = Object(r.a)(b.g),
				v = () => async (e, t) => {
					const r = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(r))
				}, y = Object(r.a)(b.K), _ = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (r, o) => {
					const a = o(),
						c = e ? Object(u.a)(a, e) : void 0;
					r(y({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), r(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const f = Object(p.J)(a, {
						thingId: n
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(s.a)(n)) {
						const e = Object(m.D)(a, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, E = Object(r.a)(b.f), O = Object(r.a)(b.J), w = () => async (e, t) => {
					const r = t(),
						s = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(r)), Object(c.b)(c.a.GildingFlow)
				}, x = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "k", (function() {
				return _
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				s = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				y = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				_ = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.d, null, s.a.createElement(a.h, null, s.a.createElement(d.a, null, s.a.createElement(a.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.k, null, s.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.f, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, i] = Object(r.useState)(e);
				return Object(r.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(s.a)(a.a.tooltip, {
						[a.a.visible]: n
					})
				}, t.popperProps), t.children, n && o.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? r.fbt._("Voting closed {timeAgo}", [r.fbt._param("timeAgo", Object(o.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(s.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						s = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = n("./src/reddit/components/PostContainer/index.m.less"),
				_ = n.n(y);
			const E = Object(p.a)(() => Object(s.c)({
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
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: m,
						onPostContentClick: p,
						sendEvent: b,
						style: g,
						ref: v
					} = this.props, y = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, l, t, s))(n), p && O(n) && p(n, l)), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(_.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), E = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, y) : l.media && Object(f.E)(l.media) ? o.a.createElement(u, {
						postId: l.id
					}, y) : y
				}
			}
			t.a = E(Object(v.c)(Object(m.c)(w)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

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
				return P
			})), n.d(t, "a", (function() {
				return G
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/helpers/flair.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/lib/getShortenedLink.ts"),
				x = n("./src/reddit/components/FlairWrapper/index.tsx"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				C = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				k = n("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				I = n.n(k);
			const T = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, A = Object(i.b)(T)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, I.a.proposalMetaData)
					}, s.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(j.a)(r)), S.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && s.a.createElement(C.a, {
						className: I.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				L = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/PostTitle/index.m.less"),
				R = n.n(N),
				D = n("./src/config.ts"),
				F = n("./src/reddit/hooks/usePostContext.ts"),
				U = n("./src/reddit/hooks/useTheme.ts");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const G = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: r,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(U.a)();
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
							[R.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? s.a.createElement(M.b, {
						type: n
					}, o) : o)
				},
				V = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: r,
					...o
				}) => s.a.createElement(a.a, B({}, o, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), r),
				W = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: r
				}) => s.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, n, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, r),
				z = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: L.bb
				}),
				H = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return s.a.createElement(W, {
						nowrap: e.nowrap
					}, s.a.createElement(q, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return s.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, s.a.createElement(q, e)); {
						const o = t.media && Object(E.G)(t.media) ? Object(v.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(g.b)(o) : Object(b.a)(o);
						return s.a.createElement(W, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? s.a.createElement(p.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, s.a.createElement(q, t)) : s.a.createElement(q, t)
						})(t, e) : s.a.createElement(V, {
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
						isCommentsPageAd: n,
						post: r
					} = e;
					let o = e.format ? e.format(r) : r.title;
					n && "string" == typeof o && (o = (e => {
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
						post: r,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				Y = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: r
					} = n, o = !t && !e.isCrosspost && e.size !== P.Large && !n.isSponsored && !(n.media && Object(E.G)(n.media)) && (n.source || n.media && (n.media.type === E.o.GIFVIDEO || n.media.type === E.o.IMAGE || n.media.type === E.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return s.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(E.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source
						}, Object(w.a)(n), !n.isSponsored && s.a.createElement(y.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return s.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source
					}, Object(w.a)(n), !n.isSponsored && s.a.createElement(y.a, {
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class K extends s.a.Component {
				getDynamicStyleTags() {
					return s.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: o,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === _.b.Left, u = Object(x.b)(a), m = c ? u.filter(e => e.type === _.f.Nsfw || e.type === _.f.Spoiler) : d ? u.filter(e => Object(h.p)(e.type)) : [], p = c ? [] : d ? u.filter(e => !Object(h.p)(e.type)) : u, f = !o && !r, b = !t && m && m.length > 0 && f, g = !t && p && p.length > 0 && f;
					return s.a.createElement("div", {
						className: Object(l.a)(R.a.Component, e, a.id)
					}, !c && b && s.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement(H, B({}, this.props, {
						leftFlair: c ? m : void 0
					})), i && s.a.createElement(A, {
						className: R.a.pollMeta,
						pollId: i.id
					}), s.a.createElement(Y, this.props), g && s.a.createElement(x.a, {
						isFlairFilter: !0,
						titleFlair: p,
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
				const t = Object(m.Z)(),
					n = Object(m.v)(t),
					r = Object(F.a)(),
					o = Object(i.e)(o => z(o, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(U.a)(),
					c = Object(u.b)();
				return s.a.createElement(K, B({
					pageLayer: t,
					isCommentPermalink: n
				}, r, o, e, {
					theme: a,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
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
				m = e => o.a.createElement("button", {
					className: Object(s.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SidebarNativeAd", (function() {
				return Z
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/PostMedia/index.tsx"),
				c = n("./src/reddit/components/PostTitle/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/getShortenedLink.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/opener/index.ts"),
				f = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/components/PostContainer/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				v = n("./src/reddit/contexts/InsideOverlay.tsx"),
				y = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = n("./src/reddit/helpers/adCount/index.ts"),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				O = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = n("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				S = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				j = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/lib/constants/index.ts"),
				I = n("./src/reddit/models/Media/index.ts"),
				T = n("./src/reddit/components/NativeBannerAd/index.m.less"),
				P = n.n(T);
			const A = m.a.wrapped(e => s.a.createElement("img", {
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
							type: n
						} = e.media;
					if (!t || !n) return null;
					switch (n) {
						case k.ib.IMAGE:
							return s.a.createElement(A, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var L = n("./src/reddit/components/SidebarNativeAd/index.m.less"),
				N = n.n(L);
			const R = m.a.wrapped(d.d, "PostTopMeta", N.a),
				D = m.a.div("BannerAdContainer", N.a),
				F = ({
					children: e
				}) => s.a.createElement("div", null, e),
				U = m.a.div("PromotedPostContainer", N.a),
				B = m.a.wrapped(x.a, "OutboundLinkIcon", N.a),
				G = m.a.div("SourceLinkWrapper", N.a),
				V = m.a.div("TopLine", N.a),
				W = m.a.wrapped(c.c, "PostTitle", N.a),
				z = m.a.div("PostMediaWrapper", N.a),
				H = m.a.div("BackgroundWrapper", N.a),
				q = m.a.wrapped(h.a, "PostContainer", N.a),
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
						this.props.fireAdPixelsOfType(t, g.a.Click), t.source ? t.source.outboundUrl ? Object(p.d)(t.source.outboundUrl, p.c.BLANK) : Object(p.d)(t.source.url, p.c.BLANK) : Object(p.d)(t.permalink, p.c.BLANK)
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
						eventFactory: n,
						isOverlay: o
					} = this.props;
					let i, l, m = {};
					return e.isBlank ? (i = F, l = null) : e.isMediaOnly ? (i = D, m = {
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = s.a.createElement(M, {
						post: e
					})) : (i = U, l = s.a.createElement(H, {
						style: Q(this.props)
					}, s.a.createElement(V, null, s.a.createElement(R, {
						tooltipType: o ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), s.a.createElement(W, {
						post: e,
						size: c.b.Large,
						format: K
					}), e.source && s.a.createElement(G, null, s.a.createElement(y.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), s.a.createElement(B, null))), s.a.createElement(z, null, e.media && s.a.createElement(a.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: Y,
						shouldLoad: !0
					})))), s.a.createElement(i, m, s.a.createElement(q, {
						className: t,
						isOverlay: o,
						post: e,
						onClick: this.onClick,
						eventFactory: n,
						style: X(this.props)
					}, l))
				}
			}
			const J = Object(i.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, n) => {
					e(Object(b.u)(t, n))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: n,
						placementIndex: r,
						isOverlay: o
					} = t;
					e(Object(f.c)(Object(_.a)(n, !!o, r)))
				}
			}));
			t.default = J(Object(v.b)(Object(l.a)(Z)))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return e;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
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
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
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
				u = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => o => ({
					...a(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => r => ({
					...a(r),
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
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: o.profileById(r, t),
					subreddit: o.subredditById(r, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return b
			})), n.d(t, "clickConfirmHideAward", (function() {
				return h
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return y
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), n.d(t, "clickReportAward", (function() {
				return x
			})), n.d(t, "clickCancelReportAward", (function() {
				return S
			})), n.d(t, "clickConfirmReportAward", (function() {
				return j
			})), n.d(t, "viewGildModalEvent", (function() {
				return C
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return I
			})), n.d(t, "clickMessageInputEvent", (function() {
				return T
			})), n.d(t, "typeMessageInputEvent", (function() {
				return P
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), n.d(t, "clickNextButtonEvent", (function() {
				return D
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), n.d(t, "clickFilterEvent", (function() {
				return B
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
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
				m = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
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
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				v = e => (t, n) => r => ({
					...u(r, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				y = v("award_hovercard_report"),
				_ = v("cancel_award_hovercard_report"),
				E = v("flag_award"),
				O = v("cancel_flag_award"),
				w = v("confirm_flag_award"),
				x = v("report_community_award"),
				S = v("cancel_report_community_award"),
				j = v("confirm_report_community_award"),
				C = (e, t, n) => r => ({
					...u(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, n) => r => ({
					...u(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				I = (e, t) => n => ({
					...u(n, t),
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
				L = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				N = (e, t) => n => ({
					...u(n, e),
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
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: r,
					thingId: o
				}) => s => ({
					...u(s, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: r,
						...l(e)
					}
				}),
				B = e => t => ({
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
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "j", (function() {
				return x
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				f = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, h = s.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, v = b ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, y = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = l || a.s(e), E = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === _)[0], O = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.c)(E, b)), w = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, x = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, S = E ? E.baselinePennies !== E.pennies ? `${w}_percent_price` : E.baselineCoins !== E.coins ? `${x}_percent_bonus` : void 0 : void 0, j = v === d.GoldPurchaseType.Premium ? r.pb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.q(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: v,
							gildedContent: b,
							contentType: y,
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
				h = (e, t, n) => r => ({
					...b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
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
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				y = e => t => ({
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
				E = (e, t) => n => ({
					...b(n, {
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
				w = (e, t, n) => r => {
					const o = b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
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
							source: e ? d.GiveGold : a.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				x = e => t => {
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/hooks/useTooltip.ts");
			const i = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, i))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(r.useEffect)(() => {
					const r = e && e.current;
					if (!r || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, n);
					return o.observe(r), () => {
						o.unobserve(r)
					}
				}, [e, t, n])
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return Object(r.useContext)(o.b)
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), f = Object(o.useCallback)(() => m(!1), []), b = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
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
					show: p,
					target: {
						element: t,
						ref: n
					},
					visible: u
				}), [l, h, c, f, p, g, t, n, u])
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(c);
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
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
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
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/colors.ts");
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, o, s = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[r.Loyalty]: s.a.First,
					[r.Achievement]: s.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === s.a.First ? r.Loyalty : e === s.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			var r, o;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "c", (function() {
					return s
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(r || (r = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(o || (o = {}));
			const s = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					s = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? o.GildFlow : r ? o.LowCoinBalance : s ? o.NewUserTargetedOffer : i ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const s = {
				status: r.NotFetched
			};
			t.b = (e = s, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
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
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
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
							error: t.payload.error, status: r.Failure
						};
					case o.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case o.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, o = n("./src/lib/constants/specialMembership.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let s;
						(s = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][o] : r[c.a.Achievement][o] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][o] : r[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const r = t[e.id],
						o = t[n.id];
					return Object(i.b)(r, o)
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
					const r = e.collections[n],
						o = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
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
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === r.Fetched ? {
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
					case s.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === r.Fetched ? {
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
					case s.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/omit.js"),
				o = n.n(r),
				s = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
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
							response: n
						} = t.payload, {
							userFlair: r
						} = n, o = {
							...e
						};
						return Object.keys(r).forEach(e => {
							o[e] || (o[e] = r[e])
						}), o
					}
					case u.r: {
						const {
							subredditId: n,
							applied: r,
							displaySettings: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r,
								displaySettings: o
							}
						}
					}
					case s.h: {
						const {
							subredditId: n,
							applied: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: r
						} = t.payload, o = {
							...e[n].displaySettings,
							isEnabled: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: o
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: r
						} = t.payload, o = {
							...e[n].permissions,
							canAssignOwn: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: o
							}
						}
					}
					case u.q: {
						const n = t.payload,
							r = e[n.subredditId],
							o = e[n.subredditId].templates,
							s = e[n.subredditId].templateIds,
							i = {
								...o,
								[n.template.id]: n.template
							},
							a = [...s];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...r,
								templates: i,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							r = e[n.subredditId],
							s = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							a = o()(s, n.templateId),
							c = i.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...r,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							r = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...r,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					if (!r) return null;
					const o = t.author;
					return o && r[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const r = e.authorFlair.models[t];
					return r ? r[n] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) => {
					let o = e;
					if ((null == r ? void 0 : r.awardCountsById) && r.awardCountsById[e.id] && e.tiers) {
						const t = r.awardCountsById[e.id];
						o = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return l(o, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) : l(e, n, t),
				m = (e, {
					awards: t,
					minSize: n,
					postOrCommentId: r
				}) => {
					const s = Object(c.c)(e),
						a = d.find(e => e >= n),
						l = r ? Object(i.D)(e, {
							postId: r
						}) || Object(o.a)(e, {
							commentId: r
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: a,
						prefersReducedMotion: s,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: n,
					postOrCommentId: r
				}) => t ? m(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: r
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: n
				}) => {
					const r = Object(a.mb)(e, {
						userName: n
					});
					if (r && r.awardedLastMonth && r.awardedLastMonth.topAward) return p(e, {
						award: r.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(s.b)(e),
						n = Object(s.a)(e);
					return p(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return i
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "s", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "y", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/goldPurchase/index.ts");
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
				m = e => {
					const t = Object(r.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				p = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.updateCardModal.pending,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.savedCardsPending,
				y = e => e.features.goldPurchase.payment.savedCards,
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
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Flair/index.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/userFlair/index.ts");
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
				u = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n) return {
						type: o.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						r = u(e, {
							subredditId: t
						}),
						o = c(e, {
							subredditId: t
						});
					if (!n || !r || !o) return !1;
					if (o.applied) return !0;
					const i = Object(s.d)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = r.permissions;
					return !!o.templateIds.find(e => {
						return !o.templates[e].modOnly || i
					}) && a
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.bbe68a54979ca48a4b91.js.map