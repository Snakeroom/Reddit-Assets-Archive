// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.90ed11ea63cd50b8a7f5.js
// Retrieved at 2/7/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
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
					var r, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						b = !s && !l && /macintosh/i.test(t),
						x = !a && !p && !u && !m && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : f ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : p ? r = {
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
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : s ? (r = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : b ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var j = !r.windows && E.split(".")[0];
					return g || c || "ipad" == s || a && (3 == j || j >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == s || "ipod" == s || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function s(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = r(e, (function(e) {
							var n = t - o(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, r) {
					var a = n;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([i, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = s, n.check = function(e, t, n) {
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
			e.exports = function(e, t, n, o, r) {
				return r(e, (function(e, r, s) {
					n = o ? (o = !1, e) : t(n, e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var o = n("./node_modules/react/index.js");

			function r(e) {
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

			function a(e) {
				var t = s(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function i(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (i(e) ? e.ownerDocument : e.document).documentElement
			}

			function p(e) {
				return r(l(e)).left + a(e).scrollLeft
			}

			function u(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = u(e),
					n = t.overflow,
					o = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, i, u = l(t),
					f = r(e),
					h = c(t),
					b = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== d(t) || m(u)) && (b = (o = t) !== s(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : u && (x.x = p(u))), {
					x: f.left + b.scrollLeft - x.x,
					y: f.top + b.scrollTop - x.y,
					width: f.width,
					height: f.height
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

			function b(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(b(t))
					}(e),
					o = "body" === d(n),
					r = s(n),
					a = o ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					i = t.concat(a);
				return o ? i : i.concat(x(b(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== u(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = s(e), n = y(e); n && v(n) && "static" === u(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === u(n).position ? t : n || function(e) {
					for (var t = b(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = u(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				w = "bottom",
				E = "right",
				j = "left",
				k = "auto",
				P = [O, w, E, j],
				C = "start",
				_ = "end",
				S = "clippingParents",
				M = "viewport",
				N = "popper",
				T = "reference",
				I = P.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + _])
				}), []),
				L = [].concat(P, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + _])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(r) {
						n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(o) {
							if (!n.has(o)) {
								var r = t.get(o);
								r && e(r)
							}
						})), o.push(r)
					}(e)
				})), o
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

			function D(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					r = t.defaultOptions,
					s = void 0 === r ? R : r;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var r, a, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, R), s),
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
								u(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: i(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = B(e);
									return A.reduce((function(e, n) {
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
								return c.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										r = e.effect;
									if ("function" == typeof r) {
										var s = r({
											state: c,
											name: t,
											instance: p,
											options: o
										});
										d.push(s || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (F(t, n)) {
										c.rects = {
											reference: f(t, g(n), "fixed" === c.options.strategy),
											popper: h(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < c.orderedModifiers.length; o++)
											if (!0 !== c.reset) {
												var r = c.orderedModifiers[o],
													s = r.fn,
													a = r.options,
													i = void 0 === a ? {} : a,
													d = r.name;
												"function" == typeof s && (c = s({
													state: c,
													options: i,
													name: d,
													instance: p
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									p.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(r())
									}))
								}))), a
							}),
							destroy: function() {
								u(), l = !0
							}
						};
					if (!F(e, t)) return p;

					function u() {
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

			function V(e) {
				return e.split("-")[0]
			}

			function z(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function U(e) {
				var t, n = e.reference,
					o = e.element,
					r = e.placement,
					s = r ? V(r) : null,
					a = r ? z(r) : null,
					i = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (s) {
					case O:
						t = {
							x: i,
							y: n.y - o.height
						};
						break;
					case w:
						t = {
							x: i,
							y: n.y + n.height
						};
						break;
					case E:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case j:
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
				var d = s ? H(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case _:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
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

			function J(e) {
				var t, n = e.popper,
					o = e.popperRect,
					r = e.placement,
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
					u = p.x,
					m = p.y,
					f = a.hasOwnProperty("x"),
					h = a.hasOwnProperty("y"),
					b = j,
					x = O,
					v = window;
				if (d) {
					var y = g(n);
					y === s(n) && (y = l(n)), r === O && (x = w, m -= y.clientHeight - o.height, m *= c ? 1 : -1), r === j && (b = E, u -= y.clientWidth - o.width, u *= c ? 1 : -1)
				}
				var k, P = Object.assign({
					position: i
				}, d && q);
				return c ? Object.assign(Object.assign({}, P), {}, ((k = {})[x] = h ? "0" : "", k[b] = f ? "0" : "", k.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + m + "px)" : "translate3d(" + u + "px, " + m + "px, 0)", k)) : Object.assign(Object.assign({}, P), {}, ((t = {})[x] = h ? m + "px" : "", t[b] = f ? u + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
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
				return t === M ? Q(function(e) {
					var t = s(e),
						n = l(e),
						o = t.visualViewport,
						r = n.clientWidth,
						a = n.clientHeight,
						i = 0,
						c = 0;
					return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, c = o.offsetTop)), {
						width: r,
						height: a,
						x: i + p(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = a(e),
						o = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						i = -n.scrollLeft + p(e),
						c = -n.scrollTop;
					return "rtl" === u(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - r), {
						width: r,
						height: s,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(u(e).position) >= 0 && c(e) ? g(e) : e;
						return i(n) ? t.filter((function(e) {
							return i(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(o, [n]),
					s = r[0],
					a = r.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, s));
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
					s = void 0 === o ? e.placement : o,
					a = n.boundary,
					c = void 0 === a ? S : a,
					d = n.rootBoundary,
					p = void 0 === d ? M : d,
					u = n.elementContext,
					m = void 0 === u ? N : u,
					f = n.altBoundary,
					h = void 0 !== f && f,
					b = n.padding,
					x = void 0 === b ? 0 : b,
					v = te("number" != typeof x ? x : ne(x, P)),
					y = m === N ? T : N,
					g = e.elements.reference,
					j = e.rects.popper,
					k = e.elements[h ? y : m],
					C = ee(i(k) ? k : k.contextElement || l(e.elements.popper), c, p),
					_ = r(g),
					I = U({
						reference: _,
						element: j,
						strategy: "absolute",
						placement: s
					}),
					L = Q(Object.assign(Object.assign({}, j), I)),
					A = m === N ? L : _,
					B = {
						top: C.top - A.top + v.top,
						bottom: A.bottom - C.bottom + v.bottom,
						left: C.left - A.left + v.left,
						right: A.right - C.right + v.right
					},
					R = e.modifiersData.offset;
				if (m === N && R) {
					var F = R[s];
					Object.keys(B).forEach((function(e) {
						var t = [E, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						B[e] += F[n] * t
					}))
				}
				return B
			}

			function re(e, t, n) {
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

			function ae(e) {
				return [O, E, w, j].some((function(t) {
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
								r = o.scroll,
								a = void 0 === r || r,
								i = o.resize,
								c = void 0 === i || i,
								d = s(t.elements.popper),
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
							t.modifiersData[n] = U({
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
								r = void 0 === o || o,
								s = n.adaptive,
								a = void 0 === s || s,
								i = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), J(Object.assign(Object.assign({}, i), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), J(Object.assign(Object.assign({}, i), {}, {
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
									r = t.elements[e];
								c(r) && d(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function(e) {
									var t = o[e];
									!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
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
											r = t.attributes[e] || {},
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(o) && d(o) && (Object.assign(o.style, s), Object.keys(r).forEach((function(e) {
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
								r = n.offset,
								s = void 0 === r ? [0, 0] : r,
								a = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											r = [j, O].indexOf(o) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = s[0],
											i = s[1];
										return a = a || 0, i = (i || 0) * r, [j, E].indexOf(o) >= 0 ? {
											x: i,
											y: a
										} : {
											x: a,
											y: i
										}
									}(n, t.rects, s), e
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
								for (var r = n.mainAxis, s = void 0 === r || r, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, u = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, h = n.allowedAutoPlacements, b = t.options.placement, x = V(b), v = c || (x === b || !f ? [X(b)] : function(e) {
										if (V(e) === k) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(b)), y = [b].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === k ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												r = n.boundary,
												s = n.rootBoundary,
												a = n.padding,
												i = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = z(o),
												p = (l ? i ? I : I.filter((function(e) {
													return z(e) === l
												})) : P).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: r,
														rootBoundary: s,
														padding: a
													})[V(n)], t
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
											allowedAutoPlacements: h
										}) : n)
									}), []), g = t.rects.reference, _ = t.rects.popper, S = new Map, M = !0, N = y[0], T = 0; T < y.length; T++) {
									var A = y[T],
										B = V(A),
										R = z(A) === C,
										F = [O, w].indexOf(B) >= 0,
										D = F ? "width" : "height",
										W = oe(t, {
											placement: A,
											boundary: l,
											rootBoundary: p,
											altBoundary: u,
											padding: d
										}),
										H = F ? R ? E : j : R ? w : O;
									g[D] > _[D] && (H = X(H));
									var U = X(H),
										q = [];
									if (s && q.push(W[B] <= 0), i && q.push(W[H] <= 0, W[U] <= 0), q.every((function(e) {
											return e
										}))) {
										N = A, M = !1;
										break
									}
									S.set(A, q)
								}
								if (M)
									for (var J = function(e) {
											var t = y.find((function(t) {
												var n = S.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === J(G)) break
									}
								t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0)
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
								r = n.mainAxis,
								s = void 0 === r || r,
								a = n.altAxis,
								i = void 0 !== a && a,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								p = n.padding,
								u = n.tether,
								m = void 0 === u || u,
								f = n.tetherOffset,
								b = void 0 === f ? 0 : f,
								x = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: p,
									altBoundary: l
								}),
								v = V(t.placement),
								y = z(t.placement),
								k = !y,
								P = H(v),
								_ = "x" === P ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								N = t.rects.popper,
								T = "function" == typeof b ? b(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : b,
								I = {
									x: 0,
									y: 0
								};
							if (S) {
								if (s) {
									var L = "y" === P ? O : j,
										A = "y" === P ? w : E,
										B = "y" === P ? "height" : "width",
										R = S[P],
										F = S[P] + x[L],
										D = S[P] - x[A],
										W = m ? -N[B] / 2 : 0,
										U = y === C ? M[B] : N[B],
										q = y === C ? -N[B] : -M[B],
										J = t.elements.arrow,
										G = m && J ? h(J) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = X[L],
										K = X[A],
										Y = re(0, M[B], G[B]),
										Q = k ? M[B] / 2 - W - Y - Z - T : U - Y - Z - T,
										$ = k ? -M[B] / 2 + W + Y + K + T : q + Y + K + T,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === P ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][P] : 0,
										se = S[P] + Q - ne - te,
										ae = S[P] + $ - ne,
										ie = re(m ? Math.min(F, se) : F, R, m ? Math.max(D, ae) : D);
									S[P] = ie, I[P] = ie - R
								}
								if (i) {
									var ce = "x" === P ? O : j,
										de = "x" === P ? w : E,
										le = S[_],
										pe = re(le + x[ce], le, le - x[de]);
									S[_] = pe, I[_] = pe - le
								}
								t.modifiersData[o] = I
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
								r = n.elements.arrow,
								s = n.modifiersData.popperOffsets,
								a = V(n.placement),
								i = H(a),
								c = [j, E].indexOf(a) >= 0 ? "height" : "width";
							if (r && s) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = h(r),
									p = "y" === i ? O : j,
									u = "y" === i ? w : E,
									m = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c],
									f = s[i] - n.rects.reference[i],
									b = g(r),
									x = b ? "y" === i ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									y = d[p],
									k = x - l[c] - d[u],
									P = x / 2 - l[c] / 2 + v,
									C = re(y, P, k),
									_ = i;
								n.modifiersData[o] = ((t = {})[_] = C, t.centerOffset = C - P, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								r = n.element,
								s = void 0 === r ? "[data-popper-arrow]" : r,
								a = n.padding,
								i = void 0 === a ? 0 : a;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Y(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof i ? i : ne(i, P))
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
								r = t.rects.popper,
								s = t.modifiersData.preventOverflow,
								a = oe(t, {
									elementContext: "reference"
								}),
								i = oe(t, {
									altBoundary: !0
								}),
								c = se(a, o),
								d = se(i, r, s),
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
				ue = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var r = o.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || ue
						},
						a = o.useState({
							styles: {
								popper: {
									position: s.strategy,
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
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(r.current, e) ? r.current || e : (r.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, d]),
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
				r = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (r && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
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
				r = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: i
			}) => {
				const c = a();
				Object(o.a)(e, i, c) ? n(Object(s.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: p
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: d.a.leftSideContent
				}, p && !r && s.a.createElement("span", {
					className: d.a.caption,
					title: p
				}, p), s.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && s.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: n,
				forceShowNSFW: o,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: p,
				templatePlaceholderImage: u,
				thumbnailContainerClassName: m,
				url: f,
				usePreview: h
			}) => r.a.createElement("div", {
				className: Object(s.a)(c.a.thumbnailContainer, e)
			}, r.a.createElement(a.a, {
				className: Object(s.a)(c.a.thumbnail, t),
				containerClassName: m,
				crosspost: n,
				forceShowNSFW: o,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: p,
				templatePlaceholderImage: u,
				url: p ? void 0 : f,
				usePreview: h
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/ads/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/getShortenedLink.ts"),
				d = n("./src/lib/hooks/usePrevious.ts"),
				l = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = n("./src/config.ts"),
				f = n("./node_modules/react-redux/es/index.js"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Audio/index.m.less"),
				x = n.n(b),
				v = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				y = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, n = () => Math.floor(10 * Math.random() + 1), s = Object(f.e)(h.X), [i, c] = Object(o.useState)(!1), [d, l] = Object(o.useState)(n());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), l(n())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? r.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, r.a.createElement("div", {
						className: x.a.classicSpeaker
					}, i && r.a.createElement(y.a, {
						className: Object(a.a)(x.a.speakerRings, {
							[x.a.nightMode]: s
						})
					}), r.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: x.a.snoovatar,
						src: `${m.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: g._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && r.a.createElement("div", {
						className: x.a.muteContainer
					}, r.a.createElement(v.a, {
						className: x.a.muteIcon
					})))) : r.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, r.a.createElement(v.a, {
						className: x.a.muteIcon
					}))
				},
				w = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = n("./src/reddit/components/ExpandoButton/index.tsx"),
				j = n("./src/reddit/components/Flatlist/index.tsx"),
				k = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				C = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				_ = n("./src/reddit/components/ModModeReports/index.tsx"),
				S = n("./src/reddit/components/ModModeReports/helpers.ts"),
				M = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = n("./src/reddit/components/PostContainer/index.tsx"),
				I = n("./src/reddit/components/PostMeta/index.tsx"),
				L = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/PostTopMeta/index.tsx"),
				F = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				D = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = n("./src/reddit/models/Audio/index.ts"),
				V = n("./src/reddit/models/Media/index.ts"),
				z = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = n("./src/reddit/constants/postLayout.ts"),
				q = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				J = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				G = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				X = n("./src/reddit/helpers/search/renderMedia.tsx"),
				Z = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				K = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = n.n(K),
				Q = n("./src/reddit/components/ClassicPost/index.m.less"),
				$ = n.n(Q);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(i.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: i,
					handleVote: m,
					isExpanded: f,
					inSubredditOrProfile: h,
					eventFactory: b,
					first: x,
					flairStyleTemplate: v,
					formatTitle: y,
					hostPostData: g,
					isCheckboxSelected: H,
					isCurrentUserProfilePost: K,
					isFrontpage: Q,
					isGalleryTileLayoutDefault: te,
					isLoggedIn: ne,
					isOverlay: oe,
					imageGalleryCurrentItem: re,
					moderatorPermissions: se,
					modModeEnabled: ae,
					onClickPost: ie,
					onIgnoreReports: ce,
					onOpenReportsDropdown: de,
					onSizeChanged: le,
					poll: pe,
					post: ue,
					postId: me,
					redditStyle: fe,
					scrollerItemRef: he,
					showBulkActionCheckbox: be,
					showEditFlair: xe,
					showMedia: ve,
					subredditOrProfile: ye,
					toggleCheckbox: ge,
					userIsOp: Oe,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Ee
				} = e, je = Object(d.a)(f);
				Object(o.useEffect)(() => {
					le && je !== f && le(ue.id)
				}, [f, le, ue.id, je]);
				const ke = fe ? void 0 : v,
					Pe = n || void 0,
					Ce = Object(G.a)(se),
					_e = Object(q.a)(se),
					Se = Object(J.a)(se),
					Me = ae && G.a,
					Ne = Object(C.d)(ue),
					Te = Object(S.c)(ue),
					Ie = !!ue.media && ue.media.type === V.o.RTJSON,
					Le = Oe && Ie,
					Ae = h && !ve,
					Be = !!ue.media && Object(V.H)(ue.media),
					Re = !!ue.recommendationContext,
					Fe = {
						flairStyleTemplate: ke,
						post: ue,
						inSubredditOrProfile: h,
						isCurrentUserProfilePost: K,
						isOverlay: oe,
						shouldShowSubscribeButton: !(Q && ne) || Re && ne,
						subredditOrProfile: ye
					},
					De = Object(s.t)(ue, re),
					{
						source: We
					} = De;
				let Ve = r.a.createElement(z.a, {
					className: $.a.classicThumbnail,
					crosspost: Pe && ue,
					isMeta: ue.isMeta,
					post: Pe || ue,
					redditStyle: fe,
					templatePlaceholderImage: ke && ke.postPlaceholderImage,
					removeLink: Be
				});
				Object(W.b)(ue) && (Ve = r.a.createElement(O, {
					post: ue
				}));
				const ze = r.a.createElement(T.a, {
					className: Object(a.a)(Y.a.classicPostStyles, $.a.postContainer, Object(Z.a)(e), x ? $.a.mFirst : void 0, t),
					isOverlay: oe,
					style: {
						...Object(Z.d)(e),
						...Object(Z.b)(ke)
					},
					post: ue,
					onClick: ie,
					eventFactory: b
				}, r.a.createElement(A.a, {
					model: ue,
					handleVote: m,
					showBulkActionCheckbox: be,
					isCheckboxSelected: H,
					toggleCheckbox: ge,
					flairStyleTemplate: ke,
					redditStyle: fe,
					postId: me
				}), r.a.createElement(N.a, {
					"data-click-id": "background",
					flairStyleTemplate: ke
				}, r.a.createElement(w.a, {
					className: $.a.eventMeta,
					post: ue
				}), r.a.createElement("div", {
					className: $.a.mainBody
				}, r.a.createElement("div", {
					className: Ae ? $.a.expandoContainer : $.a.thumbnailContainer
				}, !Ae && Ve, r.a.createElement(E.a, {
					crosspost: Pe,
					className: $.a.rightExpando,
					isExpanded: !!f,
					post: ue,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(a.a)($.a.content, {
						[$.a.showBulkActionCheckbox]: be
					}),
					"data-click-id": "body"
				}, !!ue.recommendationContext && r.a.createElement(M.a, {
					content: ue.recommendationContext.content,
					layout: U.g.Classic,
					post: ue
				}), r.a.createElement(B.c, {
					className: pe ? $.a.titleWithPoll : void 0,
					format: y,
					poll: pe,
					post: ue,
					redditStyle: fe,
					size: B.b.Medium,
					titleColor: ke && ke.postTitleColor,
					isOverlay: oe
				}, ue.source && !Pe && r.a.createElement(D.a, {
					href: ue.source.url,
					isSponsored: ue.isSponsored,
					postId: ue.id,
					source: ue.source
				}, Object(c.a)(ue))), r.a.createElement(I.a, ee({
					key: "PostMeta"
				}, Fe)), ae && Ce && Ne && r.a.createElement(P.a, {
					thing: ue
				}), ae && Ce && Te && r.a.createElement(_.a, {
					onIgnoreReports: ce,
					reportable: ue
				}), Ee && We && We.url && r.a.createElement(l.a, {
					className: $.a.adLinkWrapper
				}, r.a.createElement(p.a, {
					post: ue,
					adLinkContent: De
				})), r.a.createElement("div", {
					className: $.a.flatlistContainer
				}, r.a.createElement(E.a, {
					className: $.a.leftExpando,
					crosspost: Pe,
					isExpanded: !!f,
					post: ue,
					useMediaIcons: !1
				}), r.a.createElement(u.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ke,
					model: ue,
					onVoteClick: m
				}), r.a.createElement(j.a, {
					className: $.a.flatlistSeparator
				}), r.a.createElement(j.c, {
					className: $.a.flatlist,
					currentUser: i,
					hasModFlairPerms: _e,
					hasModPostPerms: Ce,
					hasModFullPerms: Se,
					hostPostData: g,
					isOverlay: !!oe,
					modModeEnabled: ae,
					onIgnoreReports: ce,
					onOpenReportsDropdown: de,
					post: ue,
					showEditPost: Le,
					showEditFlair: xe,
					tooltipType: oe ? R.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(L.b)({
						editPost: !Me,
						hide: !Me,
						report: !Me
					})
				})), r.a.createElement(k.d, null))), Object(X.a)(ue, $.a, he, f, we, te)));
				return r.a.createElement(F.b, null, ze)
			});
			t.default = Object(H.a)(te)
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
				return j
			})), n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/reddit/components/Media/index.tsx"),
				u = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				h = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(g),
				w = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				k = 1,
				P = w.a.div("Container", O.a),
				C = w.a.div("PostMetaWrapper", O.a),
				_ = w.a.wrapped(m.c, "PostTitle", O.a),
				S = w.a.div("FlatList", O.a),
				M = w.a.div("FlatItem", O.a),
				N = w.a.span("FlatListDotSpacer", O.a),
				T = w.a.wrapped(P, "LinkContainer", O.a),
				I = w.a.div("Content", O.a),
				L = w.a.div("ThumbnailContainer", O.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== b.Nb.TOPIC),
					shouldOpenPostInNewTab: y.db
				}),
				B = Object(a.b)(A);
			t.c = Object(x.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: o,
					mediaProps: r,
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
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return a && !a.media ? s.a.createElement(T, {
					className: d
				}, s.a.createElement(I, null, s.a.createElement(C, null, s.a.createElement(u.a, c)), R(a), a.source && s.a.createElement(f.a, {
					post: a
				}), D(e)), V(e)) : s.a.createElement(P, {
					className: d
				}, s.a.createElement(C, null, s.a.createElement(u.a, c)), R(a), F(e), D(e))
			}));
			const R = e => s.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: m.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, o = {
						...t,
						post: n,
						crosspost: t.post
					};
					return s.a.createElement("div", null, s.a.createElement(p.a, E({}, o, {
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
					return s.a.createElement(S, null, s.a.createElement(M, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), s.a.createElement(N, null), s.a.createElement(M, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = t;
					return s.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				V = e => s.a.createElement(L, null, s.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, r.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), r.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), r.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				opacity: "0.8"
			}, r.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), r.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), r.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), r.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), r.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/reddit/components/ExpandoButton/index.m.less"),
				y = n.n(v);
			const g = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, n) => {
					const o = Object(c.a)(y.a.icon, y.a.hideOnHover);
					if (t) return s.a.createElement(f.a, {
						name: "crosspost",
						className: o
					});
					if (n.pollData) return s.a.createElement(f.a, {
						name: "poll_post",
						className: o
					});
					if (n.audioRoom) return s.a.createElement(f.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return s.a.createElement(f.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return s.a.createElement(f.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return s.a.createElement(f.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return s.a.createElement(f.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return s.a.createElement(f.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return s.a.createElement(f.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = g(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: v,
					useMediaIcons: g
				} = e, w = n || h, E = Object(a.e)(b.b), j = t => {
					E && (t.preventDefault(), e.showModalOnPostLinkClick(w))
				}, k = r && !!n;
				return w.media && !(("rtjson" === w.media.type || "text" === w.media.type || "liveaudio" === w.media.type) && !Object(m.a)(w)) || !!h.pollData ? s.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: v
				}, u ? s.a.createElement(f.a, {
					name: "collapse",
					className: y.a.icon
				}) : g ? s.a.createElement(s.a.Fragment, null, O(w.media && w.media.type, k, h), s.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : s.a.createElement(f.a, {
					name: "expand",
					className: y.a.icon
				})) : w.source && w.source.url ? s.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: w.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : s.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(w.permalink),
					rel: "nofollow",
					onClick: j
				}, s.a.createElement(f.a, {
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
			}) => r.a.createElement(i.a, {
				className: Object(s.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: p(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(s.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * s.b - 2 * s.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(a.a, {
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
				r = n.n(o),
				s = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
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
					isTopicPage: w,
					post: E,
					shouldShowSubscribeButton: j,
					subredditOrProfile: k,
					tooltipType: P
				} = e, C = !!w, _ = Object(x.a)();
				return r.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !E.isSponsored && k && r.a.createElement(a.a, {
					postId: E.id,
					subredditName: k.name
				}, r.a.createElement(p.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: k.url,
						state: _
					}
				}, k.displayText)), k && k.isQuarantined && r.a.createElement(l.a, null), !o && !E.isSponsored && k && j && !y && r.a.createElement(u.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(b.h)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(v.h)(k) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: E.id,
					size: f.d.XXS,
					small: !0
				}), !o && !E.isSponsored && r.a.createElement(h.b, null), !o && !E.isSponsored && r.a.createElement(i.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), r.a.createElement(d.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: P
				}), r.a.createElement(c.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!o,
					post: E,
					tooltipType: P
				}), !C && r.a.createElement(s.a, {
					hideCta: n,
					thing: E,
					tooltipType: O ? d.c.Lightbox : void 0
				}))
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = n.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: p = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: h,
					redditStyle: b,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: y,
					isReadingIndicatorsExperimentEnabled: g
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: b
				}, o && r.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: f
				}), r.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: b,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(s.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					isReadingIndicatorsExperimentEnabled: g
				}))
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/Post/index.tsx"),
				p = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/chatPost.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/showPromotedCTA.ts"),
				x = n("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: x.b,
					activeModalId: p.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: x.K,
					showPromotedCTA: b.a,
					moderatorPermissions: m.l,
					modModeEnabled: d.T,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.V
				},
				y = Object(o.b)(() => Object(r.c)(v), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const o = n === i.a.upvoted ? Object(s.jb)(t) : Object(s.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(s.fb)(t)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(y(Object(c.b)(e)))
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, n, o, s, a) => o ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, s, a)) : i(e, n, s, a) : null,
				i = (e, t, n, o) => r.a.createElement(s.a, {
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
					showFull: !0
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.90ed11ea63cd50b8a7f5.js.map