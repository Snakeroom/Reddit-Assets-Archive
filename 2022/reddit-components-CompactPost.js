// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.4ee4af3cccc8daeea0ee.js
// Retrieved at 3/7/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function o(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						x = !r && !l && /macintosh/i.test(t),
						h = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : f ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : p ? s = {
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
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? s = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, y && (s.version = y)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, y && (s.version = y)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && y && (s.version = y)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : x ? (s.mac = e, s.osname = "macOS") : E ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : h && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var w = "";
					s.windows ? w = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (s.osversion = w);
					var _ = !s.windows && w.split(".")[0];
					return g || c || "ipad" == r || a && (3 == _ || _ >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == r || "ipod" == r || a || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = s(e, (function(e) {
							var n = t - o(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, s) {
					var a = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (a = t(s));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = r, n.check = function(e, t, n) {
					return !a(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = o() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, r) {
					n = o ? (o = !1, e) : t(n, e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, s)
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ue
			}));
			var o = n("./node_modules/react/index.js");

			function s(e) {
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

			function a(e) {
				var t = r(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function i(e) {
				return e instanceof r(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (i(e) ? e.ownerDocument : e.document).documentElement
			}

			function p(e) {
				return s(l(e)).left + a(e).scrollLeft
			}

			function m(e) {
				return r(e).getComputedStyle(e)
			}

			function u(e) {
				var t = m(e),
					n = t.overflow,
					o = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, i, m = l(t),
					f = s(e),
					b = c(t),
					x = {
						scrollLeft: 0,
						scrollTop: 0
					},
					h = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || u(m)) && (x = (o = t) !== r(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((h = s(t)).x += t.clientLeft, h.y += t.clientTop) : m && (h.x = p(m))), {
					x: f.left + x.scrollLeft - h.x,
					y: f.top + x.scrollTop - h.y,
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

			function x(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function h(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && u(t) ? t : e(x(t))
					}(e),
					o = "body" === d(n),
					s = r(n),
					a = o ? [s].concat(s.visualViewport || [], u(n) ? n : []) : n,
					i = t.concat(a);
				return o ? i : i.concat(h(x(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = r(e), n = y(e); n && v(n) && "static" === m(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = x(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				E = "bottom",
				w = "right",
				_ = "left",
				j = "auto",
				k = [O, E, w, _],
				P = "start",
				S = "end",
				C = "clippingParents",
				I = "viewport",
				M = "popper",
				L = "reference",
				T = k.reduce((function(e, t) {
					return e.concat([t + "-" + P, t + "-" + S])
				}), []),
				N = [].concat(k, [j]).reduce((function(e, t) {
					return e.concat([t, t + "-" + P, t + "-" + S])
				}), []),
				R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(s) {
						n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(o) {
							if (!n.has(o)) {
								var s = t.get(o);
								s && e(s)
							}
						})), o.push(s)
					}(e)
				})), o
			}
			var F = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function A() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function D(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					s = t.defaultOptions,
					r = void 0 === s ? F : s;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var s, a, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), r),
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
						p = {
							state: c,
							setOptions: function(n) {
								m(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: i(e) ? h(e) : e.contextElement ? h(e.contextElement) : [],
									popper: h(t)
								};
								var s = function(e) {
									var t = B(e);
									return R.reduce((function(e, n) {
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
								}([].concat(o, c.options.modifiers)));
								return c.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var r = s({
											state: c,
											name: t,
											instance: p,
											options: o
										});
										d.push(r || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (A(t, n)) {
										c.rects = {
											reference: f(t, g(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < c.orderedModifiers.length; o++)
											if (!0 !== c.reset) {
												var s = c.orderedModifiers[o],
													r = s.fn,
													a = s.options,
													i = void 0 === a ? {} : a,
													d = s.name;
												"function" == typeof r && (c = r({
													state: c,
													options: i,
													name: d,
													instance: p
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									p.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(s())
									}))
								}))), a
							}),
							destroy: function() {
								m(), l = !0
							}
						};
					if (!A(e, t)) return p;

					function m() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return p.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), p
				}
			}
			var W = {
				passive: !0
			};

			function H(e) {
				return e.split("-")[0]
			}

			function V(e) {
				return e.split("-")[1]
			}

			function U(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					o = e.element,
					s = e.placement,
					r = s ? H(s) : null,
					a = s ? V(s) : null,
					i = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (r) {
					case O:
						t = {
							x: i,
							y: n.y - o.height
						};
						break;
					case E:
						t = {
							x: i,
							y: n.y + n.height
						};
						break;
					case w:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case _:
						t = {
							x: n.x - o.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = r ? U(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case P:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case S:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var G = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, n = e.popper,
					o = e.popperRect,
					s = e.placement,
					a = e.offsets,
					i = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					p = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(a),
					m = p.x,
					u = p.y,
					f = a.hasOwnProperty("x"),
					b = a.hasOwnProperty("y"),
					x = _,
					h = O,
					v = window;
				if (d) {
					var y = g(n);
					y === r(n) && (y = l(n)), s === O && (h = E, u -= y.clientHeight - o.height, u *= c ? 1 : -1), s === _ && (x = w, m -= y.clientWidth - o.width, m *= c ? 1 : -1)
				}
				var j, k = Object.assign({
					position: i
				}, d && G);
				return c ? Object.assign(Object.assign({}, k), {}, ((j = {})[h] = b ? "0" : "", j[x] = f ? "0" : "", j.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + u + "px)" : "translate3d(" + m + "px, " + u + "px, 0)", j)) : Object.assign(Object.assign({}, k), {}, ((t = {})[h] = b ? u + "px" : "", t[x] = f ? m + "px" : "", t.transform = "", t))
			}
			var J = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return J[e]
				}))
			}
			var Z = {
				start: "end",
				end: "start"
			};

			function K(e) {
				return e.replace(/start|end/g, (function(e) {
					return Z[e]
				}))
			}

			function Y(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var o = t;
					do {
						if (o && e.isSameNode(o)) return !0;
						o = o.parentNode || o.host
					} while (o)
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
				return t === I ? Q(function(e) {
					var t = r(e),
						n = l(e),
						o = t.visualViewport,
						s = n.clientWidth,
						a = n.clientHeight,
						i = 0,
						c = 0;
					return o && (s = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, c = o.offsetTop)), {
						width: s,
						height: a,
						x: i + p(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = a(e),
						o = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						i = -n.scrollLeft + p(e),
						c = -n.scrollTop;
					return "rtl" === m(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - s), {
						width: s,
						height: r,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = h(e),
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? g(e) : e;
						return i(n) ? t.filter((function(e) {
							return i(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(o, [n]),
					r = s[0],
					a = s.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, r));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
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

			function oe(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					r = void 0 === o ? e.placement : o,
					a = n.boundary,
					c = void 0 === a ? C : a,
					d = n.rootBoundary,
					p = void 0 === d ? I : d,
					m = n.elementContext,
					u = void 0 === m ? M : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					x = n.padding,
					h = void 0 === x ? 0 : x,
					v = te("number" != typeof h ? h : ne(h, k)),
					y = u === M ? L : M,
					g = e.elements.reference,
					_ = e.rects.popper,
					j = e.elements[b ? y : u],
					P = ee(i(j) ? j : j.contextElement || l(e.elements.popper), c, p),
					S = s(g),
					T = z({
						reference: S,
						element: _,
						strategy: "absolute",
						placement: r
					}),
					N = Q(Object.assign(Object.assign({}, _), T)),
					R = u === M ? N : S,
					B = {
						top: P.top - R.top + v.top,
						bottom: R.bottom - P.bottom + v.bottom,
						left: P.left - R.left + v.left,
						right: R.right - P.right + v.right
					},
					F = e.modifiersData.offset;
				if (u === M && F) {
					var A = F[r];
					Object.keys(B).forEach((function(e) {
						var t = [w, E].indexOf(e) >= 0 ? 1 : -1,
							n = [O, E].indexOf(e) >= 0 ? "y" : "x";
						B[e] += A[n] * t
					}))
				}
				return B
			}

			function se(e, t, n) {
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

			function ae(e) {
				return [O, w, E, _].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ie = D({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								s = o.scroll,
								a = void 0 === s || s,
								i = o.resize,
								c = void 0 === i || i,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), c && d.addEventListener("resize", n.update, W),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, W)
									})), c && d.removeEventListener("resize", n.update, W)
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
								o = n.gpuAcceleration,
								s = void 0 === o || o,
								r = n.adaptive,
								a = void 0 === r || r,
								i = {
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, i), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, i), {}, {
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
									o = t.attributes[e] || {},
									s = t.elements[e];
								c(s) && d(s) && (Object.assign(s.style, n), Object.keys(o).forEach((function(e) {
									var t = o[e];
									!1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
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
										var o = t.elements[e],
											s = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(o) && d(o) && (Object.assign(o.style, r), Object.keys(s).forEach((function(e) {
											o.removeAttribute(e)
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
								o = e.name,
								s = n.offset,
								r = void 0 === s ? [0, 0] : s,
								a = N.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = H(e),
											s = [_, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = r[0],
											i = r[1];
										return a = a || 0, i = (i || 0) * s, [_, w].indexOf(o) >= 0 ? {
											x: i,
											y: a
										} : {
											x: a,
											y: i
										}
									}(n, t.rects, r), e
								}), {}),
								i = a[t.placement],
								c = i.x,
								d = i.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = a
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (var s = n.mainAxis, r = void 0 === s || s, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, m = n.altBoundary, u = n.flipVariations, f = void 0 === u || u, b = n.allowedAutoPlacements, x = t.options.placement, h = H(x), v = c || (h === x || !f ? [X(x)] : function(e) {
										if (H(e) === j) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(x)), y = [x].concat(v).reduce((function(e, n) {
										return e.concat(H(n) === j ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												s = n.boundary,
												r = n.rootBoundary,
												a = n.padding,
												i = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? N : c,
												l = V(o),
												p = (l ? i ? T : T.filter((function(e) {
													return V(e) === l
												})) : k).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: s,
														rootBoundary: r,
														padding: a
													})[H(n)], t
												}), {});
											return Object.keys(p).sort((function(e, t) {
												return p[e] - p[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: p,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), g = t.rects.reference, S = t.rects.popper, C = new Map, I = !0, M = y[0], L = 0; L < y.length; L++) {
									var R = y[L],
										B = H(R),
										F = V(R) === P,
										A = [O, E].indexOf(B) >= 0,
										D = A ? "width" : "height",
										W = oe(t, {
											placement: R,
											boundary: l,
											rootBoundary: p,
											altBoundary: m,
											padding: d
										}),
										U = A ? F ? w : _ : F ? E : O;
									g[D] > S[D] && (U = X(U));
									var z = X(U),
										G = [];
									if (r && G.push(W[B] <= 0), i && G.push(W[U] <= 0, W[z] <= 0), G.every((function(e) {
											return e
										}))) {
										M = R, I = !1;
										break
									}
									C.set(R, G)
								}
								if (I)
									for (var q = function(e) {
											var t = y.find((function(t) {
												var n = C.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === q(J)) break
									}
								t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0)
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
								o = e.name,
								s = n.mainAxis,
								r = void 0 === s || s,
								a = n.altAxis,
								i = void 0 !== a && a,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								p = n.padding,
								m = n.tether,
								u = void 0 === m || m,
								f = n.tetherOffset,
								x = void 0 === f ? 0 : f,
								h = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: p,
									altBoundary: l
								}),
								v = H(t.placement),
								y = V(t.placement),
								j = !y,
								k = U(v),
								S = "x" === k ? "y" : "x",
								C = t.modifiersData.popperOffsets,
								I = t.rects.reference,
								M = t.rects.popper,
								L = "function" == typeof x ? x(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : x,
								T = {
									x: 0,
									y: 0
								};
							if (C) {
								if (r) {
									var N = "y" === k ? O : _,
										R = "y" === k ? E : w,
										B = "y" === k ? "height" : "width",
										F = C[k],
										A = C[k] + h[N],
										D = C[k] - h[R],
										W = u ? -M[B] / 2 : 0,
										z = y === P ? I[B] : M[B],
										G = y === P ? -M[B] : -I[B],
										q = t.elements.arrow,
										J = u && q ? b(q) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = X[N],
										K = X[R],
										Y = se(0, I[B], J[B]),
										Q = j ? I[B] / 2 - W - Y - Z - L : z - Y - Z - L,
										$ = j ? -I[B] / 2 + W + Y + K + L : G + Y + K + L,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										re = C[k] + Q - ne - te,
										ae = C[k] + $ - ne,
										ie = se(u ? Math.min(A, re) : A, F, u ? Math.max(D, ae) : D);
									C[k] = ie, T[k] = ie - F
								}
								if (i) {
									var ce = "x" === k ? O : _,
										de = "x" === k ? E : w,
										le = C[S],
										pe = se(le + h[ce], le, le - h[de]);
									C[S] = pe, T[S] = pe - le
								}
								t.modifiersData[o] = T
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								o = e.name,
								s = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								a = H(n.placement),
								i = U(a),
								c = [_, w].indexOf(a) >= 0 ? "height" : "width";
							if (s && r) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(s),
									p = "y" === i ? O : _,
									m = "y" === i ? E : w,
									u = n.rects.reference[c] + n.rects.reference[i] - r[i] - n.rects.popper[c],
									f = r[i] - n.rects.reference[i],
									x = g(s),
									h = x ? "y" === i ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
									v = u / 2 - f / 2,
									y = d[p],
									j = h - l[c] - d[m],
									k = h / 2 - l[c] / 2 + v,
									P = se(y, k, j),
									S = i;
								n.modifiersData[o] = ((t = {})[S] = P, t.centerOffset = P - k, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.element,
								r = void 0 === s ? "[data-popper-arrow]" : s,
								a = n.padding,
								i = void 0 === a ? 0 : a;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof i ? i : ne(i, k))
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
								o = t.rects.reference,
								s = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								a = oe(t, {
									elementContext: "reference"
								}),
								i = oe(t, {
									altBoundary: !0
								}),
								c = re(a, o),
								d = re(i, s, r),
								l = ae(c),
								p = ae(d);
							t.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: p
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": p
							})
						}
					}]
				}),
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							o = t[1];
						return e[n] = o, e
					}), {})
				},
				pe = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				me = [],
				ue = function(e, t, n) {
					void 0 === n && (n = {});
					var s = o.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
						},
						a = o.useState({
							styles: {
								popper: {
									position: r.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						i = a[0],
						c = a[1],
						d = o.useMemo((function() {
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
						l = o.useMemo((function() {
							var e = {
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
						p = o.useRef();
					return pe((function() {
						p.current && p.current.setOptions(l)
					}), [l]), pe((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ie)(e, t, l);
							return p.current = o,
								function() {
									o.destroy(), p.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: p.current ? p.current.state : null,
						styles: i.styles,
						attributes: i.attributes,
						update: p.current ? p.current.update : null,
						forceUpdate: p.current ? p.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				o = "function" == typeof Map,
				s = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, a) {
						if (t === a) return !0;
						if (t && a && "object" == typeof t && "object" == typeof a) {
							if (t.constructor !== a.constructor) return !1;
							var i, c, d, l;
							if (Array.isArray(t)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (!e(t[c], a[c])) return !1;
								return !0
							}
							if (o && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (t[c] !== a[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
							if ((i = (d = Object.keys(t)).length) !== Object.keys(a).length) return !1;
							for (c = i; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(a, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = i; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], a[d[c]])) return !1;
							return !0
						}
						return t != t && a != a
					}(e, t)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
				}
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: i
			}) => {
				const c = a();
				Object(o.a)(e, i, c) ? n(Object(r.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
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
			var o = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: p
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, p && !s && r.a.createElement("span", {
					className: d.a.caption,
					title: p
				}, p), r.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && r.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Me
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/User/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/actions/post.ts"),
				y = n("./src/reddit/actions/postFlair.ts"),
				g = n("./src/reddit/actions/tooltip.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				w = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				S = n("./src/reddit/components/AwardBadges/index.tsx"),
				C = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = n("./src/reddit/components/CommentsLink/index.tsx"),
				M = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = n("./src/reddit/components/ExpandoButton/index.tsx"),
				N = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				B = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				A = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				H = n("./src/reddit/components/ModModeReports/helpers.ts"),
				V = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				U = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				z = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = n("./src/reddit/components/PostBadges/index.tsx"),
				q = n("./src/reddit/components/PostContainer/index.tsx"),
				J = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				X = n("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = n("./src/reddit/components/PostMedia/index.tsx"),
				K = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Y = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = n("./src/reddit/components/PostTitle/index.tsx"),
				$ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				te = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				oe = n("./src/reddit/components/SubredditIcon/index.tsx"),
				se = n("./src/reddit/components/VerticalVotes/index.tsx"),
				re = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ae = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ce = n("./src/reddit/controls/Checkbox/index.tsx"),
				de = n("./src/reddit/controls/MetaData/index.tsx"),
				le = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				pe = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ue = n("./src/reddit/helpers/postEvent.ts"),
				fe = n("./src/reddit/hooks/useIsOverlay.ts"),
				be = n("./src/reddit/hooks/useTheme.ts"),
				xe = n("./src/reddit/hooks/useUserContext.ts"),
				he = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ve = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ye = n("./src/reddit/selectors/showPromotedCTA.ts"),
				ge = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = n.n(ge),
				Ee = n("./src/reddit/components/CompactPost/index.m.less"),
				we = n.n(Ee);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const je = ({
					isCompact: e,
					...t
				}) => s.a.createElement(T.a, _e({
					className: Object(d.a)(we.a.responsiveExpandoButton, {
						[we.a.mHideAboveSmallTablets]: !!e,
						[we.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				ke = () => Object(i.c)({
					activeModalId: O.a,
					crosspost: j.d,
					flairStyleTemplate: ae.V,
					isActive: j.j,
					isExpanded: j.m,
					showPromotedCTA: ye.a,
					layout: ae.R,
					moderatorPermissions: w.l,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: _.a,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(E.a)(e, t.id)
				}),
				Pe = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					}) => e(Object(y.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					})),
					handleVote: n => {
						const o = n === h.a.upvoted ? Object(v.jb)(t) : Object(v.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(v.fb)(t)),
					onOpenReportsDropdown: t => e(Object(g.h)({
						tooltipId: t
					}))
				});
			class Se extends s.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: o,
						currentUser: r,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						imageGalleryCurrentItem: h,
						isCheckboxSelected: v = !1,
						isCommentsPage: y,
						isCommentPermalink: g,
						isExpanded: O,
						isGalleryTileLayoutDefault: E,
						isInModNotesExperiment: w,
						isOverlay: _,
						isProfilePostListing: j,
						inSubredditOrProfile: T = !1,
						layout: Z,
						moderatorPermissions: ne,
						modModeEnabled: oe,
						onClickPost: ae,
						onFlairChanged: ie,
						onIgnoreReports: de,
						poll: fe,
						post: be,
						subredditOrProfile: xe,
						userIsOp: ye,
						hideModTools: ge,
						scrollerItemRef: Ee,
						showBulkActionCheckbox: _e,
						showEditFlair: ke,
						toggleCheckbox: Pe,
						tooltipType: Se,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Me,
						showPromotedCTA: Te
					} = this.props, Ne = !!be.media && be.media.type === b.o.RTJSON, Re = ye && Ne, Be = Object(J.b)(be.id, _), Fe = Object(me.a)(ne), Ae = Object(le.a)(ne), De = Object(pe.a)(ne), We = `-mod-actions-menu-${be.id}`, He = `voting-arrows-${be.id}`, Ve = !!r && Object(x.e)(r) === be.author, Ue = Object(D.d)(be), ze = Object(H.c)(be), Ge = Object(R.a)("View--Reports", be.id, Se), qe = Object(H.a)(be), Je = !(_ || y || g), Xe = be.media && be.media.type === b.o.LIVEVIDEO, Ze = e => Ie(Object(f.h)(be.id, e)), Ke = Object(c.t)(be, h), {
						source: Ye
					} = Ke, Qe = s.a.createElement(q.a, {
						className: Object(d.a)(Oe.a.compactPostStyles, we.a.postContainer, Object(u.a)(this.props), t),
						isOverlay: _,
						style: {
							...Object(u.d)(this.props),
							...Object(u.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: ae,
						eventFactory: a
					}, s.a.createElement("div", {
						className: we.a.compactWrapper
					}, s.a.createElement("div", {
						className: we.a.leftRailWrapper
					}, s.a.createElement("div", {
						className: we.a.leftRail,
						style: {
							borderColor: Object(X.c)({
								isRemoved: !!be.bannedBy,
								isReported: Object(m.a)(be),
								isSponsored: be.isSponsored,
								theme: this.props.theme
							})
						}
					}, _e && s.a.createElement(ce.a, {
						className: we.a.bulkActionCheckbox,
						isCheckboxSelected: v,
						toggleCheckbox: Pe
					}), s.a.createElement(se.a, {
						className: we.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: l
					}), s.a.createElement(M.a, {
						className: we.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: l,
						upvoteTooltipId: He
					}))), s.a.createElement(z.a, {
						className: Object(d.a)(we.a.content, {
							[we.a.isEvent]: Object(ue.a)(be)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, s.a.createElement(L.a, {
						isCompactMode: !0,
						post: be
					}), s.a.createElement("div", {
						className: we.a.compactPostRow
					}, !ge && s.a.createElement(je, {
						crosspost: o,
						isCommentsPage: y,
						isCompact: !1,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}), !T && !be.isSponsored && s.a.createElement(B.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), s.a.createElement("div", {
						className: we.a.topLine,
						"data-click-id": "body"
					}, !!be.recommendationContext && s.a.createElement(U.a, {
						content: be.recommendationContext.content,
						layout: p.g.Compact,
						post: be
					}), s.a.createElement(Q.c, {
						post: be,
						poll: fe,
						size: Q.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Le(be, xe), s.a.createElement($.d, {
						className: we.a.postTopMeta,
						flairStyleTemplate: i,
						isInModNotesExperiment: w,
						post: be,
						showSub: !!xe && !T && !be.isSponsored,
						subredditOrProfile: xe
					}), s.a.createElement(G.a, {
						className: we.a.postBadges,
						displayText: xe ? xe.displayText : null,
						inSubredditOrProfile: T,
						post: be
					}), s.a.createElement(S.a, {
						thing: be,
						tooltipType: _ ? $.c.Lightbox : void 0
					})), Je && !Xe && s.a.createElement("div", null, s.a.createElement(C.a, {
						className: we.a.liveDiscussionIcon,
						isMod: Fe,
						postId: be.postId
					})), s.a.createElement("div", {
						className: we.a.flatList
					}, s.a.createElement(I.a, {
						className: we.a.commentsLink,
						hasModPostPerms: Fe,
						isCommentsPage: y,
						isCommentPermalink: g,
						isOverlay: _,
						postId: be.id,
						modModeEnabled: oe,
						numComments: be.numComments,
						type: p.g.Compact
					}), s.a.createElement(V.a, {
						className: we.a.modToolsFlatlist,
						isOverlay: !1,
						layout: Z,
						modModeEnabled: oe,
						post: be,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Fe && s.a.createElement(F.a, {
						dropdownId: We,
						onClick: () => Ze("post_mod_action_menu")
					}, s.a.createElement(N.b, null), s.a.createElement(K.a, {
						canEditFlair: Ae && ke,
						hasModPostPerms: Fe,
						hasModFullPerms: De,
						isOverlay: !1,
						isPostAuthor: Ve,
						modModeEnabled: oe,
						post: be,
						tooltipId: We
					})), Fe && ze && !oe && s.a.createElement(te.c, {
						text: `${qe}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ge), Ze("post_report_menu")
						},
						id: Ge
					}, s.a.createElement(re.a, {
						model: be,
						onIgnoreReports: () => {
							de(), Ze(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge
					}), be.ignoreReports ? s.a.createElement(he.a, null) : s.a.createElement(ve.a, null)), s.a.createElement(Y.a, {
						currentProfileName: n,
						isCommentsPage: y,
						isOverlay: !1,
						isProfilePostListing: j,
						isRecommendationPost: !!be.recommendationContext,
						layout: Z,
						permalink: be.permalink,
						sendEvent: Ie,
						showEditPost: Re,
						showEditFlair: ke,
						dropdownId: `${be.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Y.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ge && s.a.createElement(je, {
						crosspost: o,
						isCommentsPage: y,
						isCompact: !0,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}))), Te && Ye && Ye.url && s.a.createElement(k.a, {
						className: we.a.adLinkWrapper
					}, s.a.createElement(P.a, {
						post: be,
						adLinkContent: Ke,
						isCompact: !0
					})), oe && Fe && Ue && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(A.a, {
						thing: be
					})), oe && Fe && ze && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(W.a, {
						onIgnoreReports: de,
						reportable: be
					})), s.a.createElement(B.d, null))), O && s.a.createElement(Ce, {
						post: be,
						scrollerItemRef: Ee,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Me,
						isGalleryTileLayoutDefault: E
					}), e === Be && s.a.createElement(J.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: Be,
						onFlairChanged: ie
					}));
					return s.a.createElement(ee.b, null, Qe)
				}
			}
			const Ce = e => s.a.createElement(z.a, {
					className: Object(d.a)(e.className, we.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? s.a.createElement("div", {
					className: we.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, n, o) => s.a.createElement(Z.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0,
					showPromotedCTA: !0
				}),
				Me = e => s.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, s.a.createElement(oe.b, {
					className: we.a.subredditIcon,
					subredditOrProfile: e
				})),
				Le = (e, t) => s.a.createElement("div", {
					className: we.a.responsiveMeta
				}, s.a.createElement(de.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), s.a.createElement(de.c, null), Object(de.d)(e.numComments), s.a.createElement(de.c, null), t && s.a.createElement("a", {
					href: t.url
				}, s.a.createElement(de.a, null, t.displayText)), e.isSponsored && [s.a.createElement(ne.a, {
					key: "label"
				}), s.a.createElement(de.c, {
					key: "separator"
				})], !e.isSponsored && s.a.createElement(de.a, null, " Posted by "), s.a.createElement($.b, {
					post: e
				}));
			t.default = Object(ie.b)(s.a.memo((function(e) {
				const t = Object(xe.a)(),
					n = Object(o.useMemo)(() => ke(), []),
					a = Object(r.e)(o => n(o, {
						...e,
						...t
					})),
					i = Object(r.d)(),
					c = Pe(i, {
						...e,
						...t
					});
				return s.a.createElement(Se, _e({}, e, t, a, c, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => c.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(l.b)(),
					isOverlay: Object(fe.a)(),
					theme: Object(be.a)()
				}))
			})))
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
				return _
			})), n.d(t, "a", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/reddit/components/Media/index.tsx"),
				m = n("./src/reddit/components/PostMeta/index.tsx"),
				u = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(g),
				E = n("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 8,
				j = 1,
				k = E.a.div("Container", O.a),
				P = E.a.div("PostMetaWrapper", O.a),
				S = E.a.wrapped(u.c, "PostTitle", O.a),
				C = E.a.div("FlatList", O.a),
				I = E.a.div("FlatItem", O.a),
				M = E.a.span("FlatListDotSpacer", O.a),
				L = E.a.wrapped(k, "LinkContainer", O.a),
				T = E.a.div("Content", O.a),
				N = E.a.div("ThumbnailContainer", O.a),
				R = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: y.hb
				}),
				B = Object(a.b)(R);
			t.c = Object(h.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: o,
					mediaProps: s,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(T, null, r.a.createElement(P, null, r.a.createElement(m.a, c)), F(a), a.source && r.a.createElement(f.a, {
					post: a
				}), D(e)), H(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(P, null, r.a.createElement(m.a, c)), F(a), A(e), D(e))
			}));
			const F = e => r.a.createElement(S, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: n
					} = e, o = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(p.a, w({}, o, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(C, null, r.a.createElement(I, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(M, null), r.a.createElement(I, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(s, "comment count", Object(l.b)(s))], {
						hk: "xPYWL"
					}))
				},
				H = e => r.a.createElement(N, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/path/index.ts"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				h = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/reddit/components/ExpandoButton/index.m.less"),
				y = n.n(v);
			const g = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(m.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, n) => {
					const o = Object(c.a)(y.a.icon, y.a.hideOnHover);
					if (t) return r.a.createElement(f.a, {
						name: "crosspost",
						className: o
					});
					if (n.pollData) return r.a.createElement(f.a, {
						name: "poll_post",
						className: o
					});
					if (n.audioRoom) return r.a.createElement(f.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(f.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return r.a.createElement(f.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(f.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return r.a.createElement(f.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return r.a.createElement(f.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(f.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = g(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isCommentsPage: l,
					isExpanded: m,
					post: b,
					toggle: v,
					useMediaIcons: g
				} = e, E = n || b, w = Object(a.e)(x.b), _ = t => {
					w && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, j = s && !!n;
				return E.media && !(("rtjson" === E.media.type || "text" === E.media.type || "liveaudio" === E.media.type) && !Object(u.a)(E)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					onClick: v
				}, m ? r.a.createElement(f.a, {
					name: "collapse",
					className: y.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, O(E.media && E.media.type, j, b), r.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : r.a.createElement(f.a, {
					name: "expand",
					className: y.a.icon
				})) : E.source && E.source.url ? r.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(E.permalink),
					rel: "nofollow",
					onClick: _
				}, r.a.createElement(f.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(d);
			const p = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => s.a.createElement(i.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: p(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/isRemoved.ts"),
				v = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				y = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				w = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = n("./src/reddit/icons/fonts/Report/index.tsx"),
				k = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				M = n("./src/reddit/components/PostBadges/index.m.less"),
				L = n.n(M);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => r.a.createElement("span", T({
					className: L.a.removalReason
				}, e), e.children),
				R = () => o.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				B = () => o.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				F = e => o.fbt._("Moderator of {community name}", [o.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => o.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				D = () => o.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				W = (e, t, n) => {
					const o = `PostBadges--${e}--${t}`;
					return n ? `${o}--${n}` : o
				},
				H = Object(x.u)({
					isProfilePostListing: x.L,
					isSubreddit: x.N,
					pageLayer: e => e
				}),
				V = Object(i.c)({
					isPinned: (e, {
						post: t
					}) => Object(I.q)(e, {
						postId: t.id
					}),
					modModeEnabled: x.T
				}),
				U = Object(a.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(p.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = H(U(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: p,
				isPinned: x,
				isProfilePostListing: I,
				modModeEnabled: M,
				onHideTooltip: H,
				onOpenRemovalReasonModal: V,
				onShowTooltip: U,
				post: z,
				tooltipType: G,
				pageLayer: q
			}) => {
				const J = {
						caretOnTop: !1
					},
					X = Object(a.e)(C.a),
					Z = (z.isSponsored || Object(c.u)(q)) && (X === f.u.NoLockIcon || X === f.u.PromotedGrey),
					K = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === b.a.SUBREDDIT,
					Y = W("Approve", z.id, G),
					Q = W("Archived", z.id, G),
					$ = W("Lock", z.id, G),
					ee = W("Mod", z.id, G),
					te = W("Remove", z.id, G),
					ne = W("Report", z.id, G),
					oe = W("Spam", z.id, G),
					se = W("Sticky", z.id, G),
					re = W("Pinned", z.id, G);
				return r.a.createElement("div", {
					className: e
				}, i && t && z.distinguishType === l.G.MODERATOR && r.a.createElement(s.Fragment, null, r.a.createElement(g.a, {
					name: "mod",
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.modIcon)
				}), r.a.createElement(m.c, T({
					tooltipId: ee,
					text: F(t)
				}, J))), z.isArchived && r.a.createElement(s.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.archivedIcon),
					desc: R(),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: Q,
					text: R()
				}, J))), z.isLocked && !Z && r.a.createElement(s.Fragment, null, r.a.createElement(w.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.lockIcon),
					desc: B(),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: $,
					text: B()
				}, J))), n && Object(S.r)(z) && !p && r.a.createElement(s.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.stickyIcon),
					desc: A(),
					id: se,
					onMouseEnter: U(se),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: se,
					text: A()
				}, J))), I && x && r.a.createElement(s.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.stickyIcon),
					desc: D(),
					id: re,
					onMouseEnter: U(re),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: re,
					text: D()
				}, J))), (z.isApproved || z.approvedBy) && r.a.createElement(s.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.approveIcon),
					desc: Object(v.a)(z),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: Y,
					text: Object(v.a)(z)
				}, J))), Object(h.a)(z) && r.a.createElement(s.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.removeIcon),
					desc: Object(v.b)(z),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: H
				}), K && r.a.createElement(u.a, {
					className: L.a.addRemovalReason,
					onClick: V,
					text: o.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && r.a.createElement(N, {
					onMouseEnter: U(te),
					onMouseLeave: H
				}, o.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, T({
					tooltipId: te,
					text: Object(v.b)(z)
				}, J))), z.bannedBy && z.isSpam && r.a.createElement(s.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.spamIcon),
					desc: Object(v.d)(z),
					id: oe,
					onMouseEnter: U(oe),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: oe,
					text: Object(v.d)(z)
				}, J))), Object(y.a)(z) && !M && r.a.createElement(s.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(d.a)(L.a.icon, L.a.reportIcon),
					desc: Object(v.c)(z.numReports),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: H
				}), r.a.createElement(m.c, T({
					tooltipId: ne,
					text: Object(v.c)(z.numReports)
				}, J))))
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(a.a, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Subreddit/index.ts"),
				y = n("./src/reddit/components/PostMeta/index.m.less"),
				g = n.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: y,
					isOverlay: O,
					isTopicPage: E,
					post: w,
					shouldShowSubscribeButton: _,
					subredditOrProfile: j,
					tooltipType: k
				} = e, P = !!E, S = Object(h.a)();
				return s.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !w.isSponsored && j && s.a.createElement(a.a, {
					postId: w.id,
					subredditName: j.name
				}, s.a.createElement(p.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: j.url,
						state: S
					}
				}, j.displayText)), j && j.isQuarantined && s.a.createElement(l.a, null), !o && !w.isSponsored && j && _ && !y && s.a.createElement(m.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(v.h)(j) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: w.id,
					size: f.d.XXS,
					small: !0
				}), !o && !w.isSponsored && s.a.createElement(b.b, null), !o && !w.isSponsored && s.a.createElement(i.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), s.a.createElement(d.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: w,
					tooltipType: k
				}), s.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					post: w,
					tooltipType: k
				}), !P && s.a.createElement(r.a, {
					hideCta: n,
					thing: w,
					tooltipType: O ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: b
			}) => {
				const v = Object(l.b)(),
					y = Object(a.d)(),
					g = i && i.id,
					O = i && i.voteState;
				let E = null;
				g || (E = e ? "user_hovercard" : "profile_overview");
				const w = Object(s.useCallback)(() => v(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return r.a.createElement(p.t, {
					onClick: () => {
						n ? (v(m.h), g && O === f.a.notVoted && y(Object(c.jb)(g))) : w();
						const e = n ? "postify" : "copy";
						y(Object(d.b)({
							clickSource: E,
							share: b,
							source: e
						}))
					},
					className: Object(o.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, r.a.createElement(u.a, {
					className: Object(o.a)({
						[x.a.shirtIcon]: !n,
						[x.a.avatarPostButtonShirtIcon]: n
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/ads/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				p = "snoovatars",
				m = "avatars";
			var u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/AvatarPost/index.m.less"),
				b = n.n(f);
			var x = ({
					sourceUrl: e,
					username: t,
					post: n
				}) => {
					const [o, r] = new URL(e).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?m:p}/shared/${e}.png`
					}(r);
					return s.a.createElement("div", {
						className: b.a.avatarPostContainer
					}, s.a.createElement("img", {
						className: b.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), s.a.createElement(u.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: n,
						share: {
							username: o,
							avatarId: r
						}
					}))
				},
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				y = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = n("./src/reddit/components/SourceLink/index.m.less"),
				O = n.n(g),
				E = n("./src/lib/lessComponent.tsx"),
				w = n("./src/telemetry/models/Outbound.ts");
			const _ = E.a.wrapped(y.a, "OutboundLinkIcon", O.a),
				j = E.a.div("SourceLinkWrapper", O.a);

			function k(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: o,
					pageLayer: c
				} = e, d = o ? w.SourceElement.PostLink : w.SourceElement.ListingPostLink, {
					source: l
				} = n, p = n.isSponsored || Object(r.u)(c), m = Object(v.a)(n);
				return l ? m ? s.a.createElement(x, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : s.a.createElement(j, {
					className: Object(a.a)({
						[O.a["m-comment"]]: o
					}, t)
				}, s.a.createElement(h.a, {
					href: l.url,
					isSponsored: p,
					postId: n.id,
					source: l,
					sourceElement: d
				}, Object(i.a)({
					...n,
					isSponsored: p
				}), s.a.createElement(_, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class u extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: o,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: u,
							onSubscriptionsRequested: f,
							...b
						} = this.props, x = this.state.isHovered, h = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return s.a.createElement(i.t, p({
							className: e,
							priority: b.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: h,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, b))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: o,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: u,
							onSubscriptionsRequested: f,
							...b
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return s.a.createElement(i.t, p({
							className: e,
							priority: b.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: x,
							onClick: this.onClick
						}, b, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(a.a)(Object(r.c)(u))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				p = e => r.a.createElement(l, e, " · "),
				m = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const a = Object(i.b)(t),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						d = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, d)
				},
				u = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(o.f)(n));
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
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react-redux/es/index.js");
			const s = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = n("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(o.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: n
				}) => {
					const o = a.test(n.trim()),
						i = s.includes(e),
						c = r.includes(t);
					return o && i && c
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.c)(t)
			})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.4ee4af3cccc8daeea0ee.js.map