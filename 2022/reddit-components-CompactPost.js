// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.46cb4ecf3b1940525436.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
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
					var r, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !s && !l && /macintosh/i.test(t),
						x = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, g && (r.version = g)) : s ? (r = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, g && (r.version = g)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					var _ = !r.windows && E.split(".")[0];
					return y || c || "ipad" == s || a && (3 == _ || _ >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == s || "ipod" == s || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
				return ue
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

			function m(e) {
				return s(e).getComputedStyle(e)
			}

			function u(e) {
				var t = m(e),
					n = t.overflow,
					o = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, i, m = l(t),
					f = r(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || u(m)) && (h = (o = t) !== s(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : m && (x.x = p(m))), {
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
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && u(t) ? t : e(h(t))
					}(e),
					o = "body" === d(n),
					r = s(n),
					a = o ? [r].concat(r.visualViewport || [], u(n) ? n : []) : n,
					i = t.concat(a);
				return o ? i : i.concat(x(h(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = s(e), n = g(e); n && v(n) && "static" === m(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				w = "bottom",
				E = "right",
				_ = "left",
				j = "auto",
				k = [O, w, E, _],
				P = "start",
				C = "end",
				S = "clippingParents",
				T = "viewport",
				M = "popper",
				N = "reference",
				L = k.reduce((function(e, t) {
					return e.concat([t + "-" + P, t + "-" + C])
				}), []),
				I = [].concat(k, [j]).reduce((function(e, t) {
					return e.concat([t, t + "-" + P, t + "-" + C])
				}), []),
				B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
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
			var A = {
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
					s = void 0 === r ? A : r;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var r, a, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, A), s),
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
								m(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: i(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = R(e);
									return B.reduce((function(e, n) {
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
											reference: f(t, y(n), "fixed" === c.options.strategy),
											popper: b(n)
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
								m(), l = !0
							}
						};
					if (!F(e, t)) return p;

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

			function V(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function z(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function G(e) {
				var t, n = e.reference,
					o = e.element,
					r = e.placement,
					s = r ? V(r) : null,
					a = r ? H(r) : null,
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
				var d = s ? z(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case P:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case C:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var U = {
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
					m = p.x,
					u = p.y,
					f = a.hasOwnProperty("x"),
					b = a.hasOwnProperty("y"),
					h = _,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === s(n) && (g = l(n)), r === O && (x = w, u -= g.clientHeight - o.height, u *= c ? 1 : -1), r === _ && (h = E, m -= g.clientWidth - o.width, m *= c ? 1 : -1)
				}
				var j, k = Object.assign({
					position: i
				}, d && U);
				return c ? Object.assign(Object.assign({}, k), {}, ((j = {})[x] = b ? "0" : "", j[h] = f ? "0" : "", j.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + u + "px)" : "translate3d(" + m + "px, " + u + "px, 0)", j)) : Object.assign(Object.assign({}, k), {}, ((t = {})[x] = b ? u + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
			}
			var q = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return q[e]
				}))
			}
			var K = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return K[e]
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
				return t === T ? Q(function(e) {
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
					return "rtl" === m(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - r), {
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
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? y(e) : e;
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
					p = void 0 === d ? T : d,
					m = n.elementContext,
					u = void 0 === m ? M : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, k)),
					g = u === M ? N : M,
					y = e.elements.reference,
					_ = e.rects.popper,
					j = e.elements[b ? g : u],
					P = ee(i(j) ? j : j.contextElement || l(e.elements.popper), c, p),
					C = r(y),
					L = G({
						reference: C,
						element: _,
						strategy: "absolute",
						placement: s
					}),
					I = Q(Object.assign(Object.assign({}, _), L)),
					B = u === M ? I : C,
					R = {
						top: P.top - B.top + v.top,
						bottom: B.bottom - P.bottom + v.bottom,
						left: P.left - B.left + v.left,
						right: B.right - P.right + v.right
					},
					A = e.modifiersData.offset;
				if (u === M && A) {
					var F = A[s];
					Object.keys(R).forEach((function(e) {
						var t = [E, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						R[e] += F[n] * t
					}))
				}
				return R
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
				return [O, E, w, _].some((function(t) {
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
							t.modifiersData[n] = G({
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
								a = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											r = [_, O].indexOf(o) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = s[0],
											i = s[1];
										return a = a || 0, i = (i || 0) * r, [_, E].indexOf(o) >= 0 ? {
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
								for (var r = n.mainAxis, s = void 0 === r || r, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, m = n.altBoundary, u = n.flipVariations, f = void 0 === u || u, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), v = c || (x === h || !f ? [Z(h)] : function(e) {
										if (V(e) === j) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === j ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												r = n.boundary,
												s = n.rootBoundary,
												a = n.padding,
												i = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? I : c,
												l = H(o),
												p = (l ? i ? L : L.filter((function(e) {
													return H(e) === l
												})) : k).filter((function(e) {
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
											allowedAutoPlacements: b
										}) : n)
									}), []), y = t.rects.reference, C = t.rects.popper, S = new Map, T = !0, M = g[0], N = 0; N < g.length; N++) {
									var B = g[N],
										R = V(B),
										A = H(B) === P,
										F = [O, w].indexOf(R) >= 0,
										D = F ? "width" : "height",
										W = oe(t, {
											placement: B,
											boundary: l,
											rootBoundary: p,
											altBoundary: m,
											padding: d
										}),
										z = F ? A ? E : _ : A ? w : O;
									y[D] > C[D] && (z = Z(z));
									var G = Z(z),
										U = [];
									if (s && U.push(W[R] <= 0), i && U.push(W[z] <= 0, W[G] <= 0), U.every((function(e) {
											return e
										}))) {
										M = B, T = !1;
										break
									}
									S.set(B, U)
								}
								if (T)
									for (var J = function(e) {
											var t = g.find((function(t) {
												var n = S.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, q = f ? 3 : 1; q > 0; q--) {
										if ("break" === J(q)) break
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
								r = n.mainAxis,
								s = void 0 === r || r,
								a = n.altAxis,
								i = void 0 !== a && a,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								p = n.padding,
								m = n.tether,
								u = void 0 === m || m,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: p,
									altBoundary: l
								}),
								v = V(t.placement),
								g = H(t.placement),
								j = !g,
								k = z(v),
								C = "x" === k ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								T = t.rects.reference,
								M = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (S) {
								if (s) {
									var I = "y" === k ? O : _,
										B = "y" === k ? w : E,
										R = "y" === k ? "height" : "width",
										A = S[k],
										F = S[k] + x[I],
										D = S[k] - x[B],
										W = u ? -M[R] / 2 : 0,
										G = g === P ? T[R] : M[R],
										U = g === P ? -M[R] : -T[R],
										J = t.elements.arrow,
										q = u && J ? b(J) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										K = Z[I],
										X = Z[B],
										Y = re(0, T[R], q[R]),
										Q = j ? T[R] / 2 - W - Y - K - N : G - Y - K - N,
										$ = j ? -T[R] / 2 + W + Y + X + N : U + Y + X + N,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										se = S[k] + Q - ne - te,
										ae = S[k] + $ - ne,
										ie = re(u ? Math.min(F, se) : F, A, u ? Math.max(D, ae) : D);
									S[k] = ie, L[k] = ie - A
								}
								if (i) {
									var ce = "x" === k ? O : _,
										de = "x" === k ? w : E,
										le = S[C],
										pe = re(le + x[ce], le, le - x[de]);
									S[C] = pe, L[C] = pe - le
								}
								t.modifiersData[o] = L
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
								i = z(a),
								c = [_, E].indexOf(a) >= 0 ? "height" : "width";
							if (r && s) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(r),
									p = "y" === i ? O : _,
									m = "y" === i ? w : E,
									u = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c],
									f = s[i] - n.rects.reference[i],
									h = y(r),
									x = h ? "y" === i ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = u / 2 - f / 2,
									g = d[p],
									j = x - l[c] - d[m],
									k = x / 2 - l[c] / 2 + v,
									P = re(g, k, j),
									C = i;
								n.modifiersData[o] = ((t = {})[C] = P, t.centerOffset = P - k, t)
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
				me = [],
				ue = function(e, t, n) {
					void 0 === n && (n = {});
					var r = o.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
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
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
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
				}, m)), l && s.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
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
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
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
				h = n("./src/reddit/models/User/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/actions/postFlair.ts"),
				y = n("./src/reddit/actions/tooltip.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				C = n("./src/reddit/components/AwardBadges/index.tsx"),
				S = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				T = n("./src/reddit/components/CommentsLink/index.tsx"),
				M = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				L = n("./src/reddit/components/ExpandoButton/index.tsx"),
				I = n("./src/reddit/components/Flatlist/index.tsx"),
				B = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				H = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				z = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				G = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = n("./src/reddit/components/PostBadges/index.tsx"),
				J = n("./src/reddit/components/PostContainer/index.tsx"),
				q = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				K = n("./src/reddit/components/PostMedia/index.tsx"),
				X = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Y = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = n("./src/reddit/components/PostTitle/index.tsx"),
				$ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				te = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				oe = n("./src/reddit/components/SubredditIcon/index.tsx"),
				re = n("./src/reddit/components/VerticalVotes/index.tsx"),
				se = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
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
				he = n("./src/reddit/hooks/useUserContext.ts"),
				xe = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ve = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ge = n("./src/reddit/selectors/showPromotedCTA.ts"),
				ye = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = n.n(ye),
				we = n("./src/reddit/components/CompactPost/index.m.less"),
				Ee = n.n(we);

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
				}) => r.a.createElement(L.a, _e({
					className: Object(d.a)(Ee.a.responsiveExpandoButton, {
						[Ee.a.mHideAboveSmallTablets]: !!e,
						[Ee.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				ke = () => Object(i.c)({
					activeModalId: O.a,
					crosspost: j.d,
					flairStyleTemplate: ae.V,
					isActive: j.j,
					isExpanded: j.m,
					showPromotedCTA: ge.a,
					layout: ae.R,
					moderatorPermissions: E.l,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: _.a,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(w.b)(e, t.id)
				}),
				Pe = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					}) => e(Object(g.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					})),
					handleVote: n => {
						const o = n === x.a.upvoted ? Object(v.jb)(t) : Object(v.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(v.fb)(t)),
					onOpenReportsDropdown: t => e(Object(y.h)({
						tooltipId: t
					}))
				});
			class Ce extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: o,
						currentUser: s,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						imageGalleryCurrentItem: x,
						isCheckboxSelected: v = !1,
						isCommentsPage: g,
						isCommentPermalink: y,
						isExpanded: O,
						isGalleryTileLayoutDefault: w,
						isInModNotesExperiment: E,
						isOverlay: _,
						isProfilePostListing: j,
						inSubredditOrProfile: L = !1,
						layout: K,
						moderatorPermissions: ne,
						modModeEnabled: oe,
						onClickPost: ae,
						onFlairChanged: ie,
						onIgnoreReports: de,
						poll: fe,
						post: be,
						subredditOrProfile: he,
						userIsOp: ge,
						hideModTools: ye,
						scrollerItemRef: we,
						showBulkActionCheckbox: _e,
						showEditFlair: ke,
						toggleCheckbox: Pe,
						tooltipType: Ce,
						sendEvent: Te,
						shouldShowGalleryTileOption: Me,
						showPromotedCTA: Le
					} = this.props, Ie = !!be.media && be.media.type === b.o.RTJSON, Be = ge && Ie, Re = Object(q.b)(be.id, _), Ae = Object(me.a)(ne), Fe = Object(le.a)(ne), De = Object(pe.a)(ne), We = `-mod-actions-menu-${be.id}`, Ve = `voting-arrows-${be.id}`, He = !!s && Object(h.e)(s) === be.author, ze = Object(D.d)(be), Ge = Object(V.c)(be), Ue = Object(B.a)("View--Reports", be.id, Ce), Je = Object(V.a)(be), qe = !(_ || g || y), Ze = be.media && be.media.type === b.o.LIVEVIDEO, Ke = e => Te(Object(f.h)(be.id, e)), Xe = Object(c.t)(be, x), {
						source: Ye
					} = Xe, Qe = r.a.createElement(J.a, {
						className: Object(d.a)(Oe.a.compactPostStyles, Ee.a.postContainer, Object(u.a)(this.props), t),
						isOverlay: _,
						style: {
							...Object(u.d)(this.props),
							...Object(u.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: ae,
						eventFactory: a
					}, r.a.createElement("div", {
						className: Ee.a.compactWrapper
					}, r.a.createElement("div", {
						className: Ee.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: Ee.a.leftRail,
						style: {
							borderColor: Object(Z.c)({
								isRemoved: !!be.bannedBy,
								isReported: Object(m.a)(be),
								isSponsored: be.isSponsored,
								theme: this.props.theme
							})
						}
					}, _e && r.a.createElement(ce.a, {
						className: Ee.a.bulkActionCheckbox,
						isCheckboxSelected: v,
						toggleCheckbox: Pe
					}), r.a.createElement(re.a, {
						className: Ee.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: l
					}), r.a.createElement(M.a, {
						className: Ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: l,
						upvoteTooltipId: Ve
					}))), r.a.createElement(G.a, {
						className: Object(d.a)(Ee.a.content, {
							[Ee.a.isEvent]: Object(ue.a)(be)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(N.a, {
						isCompactMode: !0,
						post: be
					}), r.a.createElement("div", {
						className: Ee.a.compactPostRow
					}, !ye && r.a.createElement(je, {
						crosspost: o,
						isCommentsPage: g,
						isCompact: !1,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}), !L && !be.isSponsored && r.a.createElement(R.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), r.a.createElement("div", {
						className: Ee.a.topLine,
						"data-click-id": "body"
					}, !!be.recommendationContext && r.a.createElement(z.a, {
						content: be.recommendationContext.content,
						layout: p.g.Compact,
						post: be
					}), r.a.createElement(Q.c, {
						post: be,
						poll: fe,
						size: Q.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Ne(be, he), r.a.createElement($.d, {
						className: Ee.a.postTopMeta,
						flairStyleTemplate: i,
						isInModNotesExperiment: E,
						post: be,
						showSub: !!he && !L && !be.isSponsored,
						subredditOrProfile: he
					}), r.a.createElement(U.a, {
						className: Ee.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: L,
						post: be
					}), r.a.createElement(C.a, {
						thing: be,
						tooltipType: _ ? $.c.Lightbox : void 0
					})), qe && !Ze && r.a.createElement("div", null, r.a.createElement(S.a, {
						className: Ee.a.liveDiscussionIcon,
						isMod: Ae,
						postId: be.postId
					})), r.a.createElement("div", {
						className: Ee.a.flatList
					}, r.a.createElement(T.a, {
						className: Ee.a.commentsLink,
						hasModPostPerms: Ae,
						isCommentsPage: g,
						isCommentPermalink: y,
						isOverlay: _,
						postId: be.id,
						modModeEnabled: oe,
						numComments: be.numComments,
						type: p.g.Compact
					}), r.a.createElement(H.a, {
						className: Ee.a.modToolsFlatlist,
						isOverlay: !1,
						layout: K,
						modModeEnabled: oe,
						post: be,
						sendEvent: Te,
						showIconsOnly: !0
					}), Ae && r.a.createElement(A.a, {
						dropdownId: We,
						onClick: () => Ke("post_mod_action_menu")
					}, r.a.createElement(I.b, null), r.a.createElement(X.a, {
						canEditFlair: Fe && ke,
						hasModPostPerms: Ae,
						hasModFullPerms: De,
						isOverlay: !1,
						isPostAuthor: He,
						modModeEnabled: oe,
						post: be,
						tooltipId: We
					})), Ae && Ge && !oe && r.a.createElement(te.c, {
						text: `${Je}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ue), Ke("post_report_menu")
						},
						id: Ue
					}, r.a.createElement(se.a, {
						model: be,
						onIgnoreReports: () => {
							de(), Ke(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ue
					}), be.ignoreReports ? r.a.createElement(xe.a, null) : r.a.createElement(ve.a, null)), r.a.createElement(Y.a, {
						currentProfileName: n,
						isCommentsPage: g,
						isOverlay: !1,
						isProfilePostListing: j,
						isRecommendationPost: !!be.recommendationContext,
						layout: K,
						permalink: be.permalink,
						sendEvent: Te,
						showEditPost: Be,
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
					}), !ye && r.a.createElement(je, {
						crosspost: o,
						isCommentsPage: g,
						isCompact: !0,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}))), Le && Ye && Ye.url && r.a.createElement(k.a, {
						className: Ee.a.adLinkWrapper
					}, r.a.createElement(P.a, {
						post: be,
						adLinkContent: Xe,
						isCompact: !0
					})), oe && Ae && ze && r.a.createElement("div", {
						className: Ee.a.modModeBannerWrapper
					}, r.a.createElement(F.a, {
						thing: be
					})), oe && Ae && Ge && r.a.createElement("div", {
						className: Ee.a.modModeBannerWrapper
					}, r.a.createElement(W.a, {
						onIgnoreReports: de,
						reportable: be
					})), r.a.createElement(R.d, null))), O && r.a.createElement(Se, {
						post: be,
						scrollerItemRef: we,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Me,
						isGalleryTileLayoutDefault: w
					}), e === Re && r.a.createElement(q.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: Re,
						onFlairChanged: ie
					}));
					return r.a.createElement(ee.b, null, Qe)
				}
			}
			const Se = e => r.a.createElement(G.a, {
					className: Object(d.a)(e.className, Ee.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: Ee.a.crosspostMediaWrapper
				}, Te(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Te(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Te = (e, t, n, o) => r.a.createElement(K.a, {
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
				Me = e => r.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(oe.b, {
					className: Ee.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ne = (e, t) => r.a.createElement("div", {
					className: Ee.a.responsiveMeta
				}, r.a.createElement(de.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(de.c, null), Object(de.d)(e.numComments), r.a.createElement(de.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(de.a, null, t.displayText)), e.isSponsored && [r.a.createElement(ne.a, {
					key: "label"
				}), r.a.createElement(de.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(de.a, null, " Posted by "), r.a.createElement($.b, {
					post: e
				}));
			t.default = Object(ie.b)(r.a.memo((function(e) {
				const t = Object(he.a)(),
					n = Object(o.useMemo)(() => ke(), []),
					a = Object(s.e)(o => n(o, {
						...e,
						...t
					})),
					i = Object(s.d)(),
					c = Pe(i, {
						...e,
						...t
					});
				return r.a.createElement(Ce, _e({}, e, t, a, c, {
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				h = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(y),
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
			const _ = 8,
				j = 1,
				k = w.a.div("Container", O.a),
				P = w.a.div("PostMetaWrapper", O.a),
				C = w.a.wrapped(u.c, "PostTitle", O.a),
				S = w.a.div("FlatList", O.a),
				T = w.a.div("FlatItem", O.a),
				M = w.a.span("FlatListDotSpacer", O.a),
				N = w.a.wrapped(k, "LinkContainer", O.a),
				L = w.a.div("Content", O.a),
				I = w.a.div("ThumbnailContainer", O.a),
				B = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Nb.TOPIC),
					shouldOpenPostInNewTab: g.hb
				}),
				R = Object(a.b)(B);
			t.c = Object(x.b)(R(e => {
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
				return a && !a.media ? s.a.createElement(N, {
					className: d
				}, s.a.createElement(L, null, s.a.createElement(P, null, s.a.createElement(m.a, c)), A(a), a.source && s.a.createElement(f.a, {
					post: a
				}), D(e)), V(e)) : s.a.createElement(k, {
					className: d
				}, s.a.createElement(P, null, s.a.createElement(m.a, c)), A(a), F(e), D(e))
			}));
			const A = e => s.a.createElement(C, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
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
					return s.a.createElement(S, null, s.a.createElement(T, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), s.a.createElement(M, null), s.a.createElement(T, null, W(e)))
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
				V = e => s.a.createElement(I, null, s.a.createElement(b.a, {
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/reddit/components/ExpandoButton/index.m.less"),
				g = n.n(v);
			const y = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(m.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, n) => {
					const o = Object(c.a)(g.a.icon, g.a.hideOnHover);
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
						case b.o.GIFVIDEO:
							return s.a.createElement(f.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return s.a.createElement(f.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return s.a.createElement(f.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return s.a.createElement(f.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return s.a.createElement(f.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return s.a.createElement(f.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = y(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: m,
					post: b,
					toggle: v,
					useMediaIcons: y
				} = e, w = n || b, E = Object(a.e)(h.b), _ = t => {
					E && (t.preventDefault(), e.showModalOnPostLinkClick(w))
				}, j = r && !!n;
				return w.media && !(("rtjson" === w.media.type || "text" === w.media.type || "liveaudio" === w.media.type) && !Object(u.a)(w)) || !!b.pollData ? s.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					onClick: v
				}, m ? s.a.createElement(f.a, {
					name: "collapse",
					className: g.a.icon
				}) : y ? s.a.createElement(s.a.Fragment, null, O(w.media && w.media.type, j, b), s.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(g.a.icon, g.a.showOnHover)
				})) : s.a.createElement(f.a, {
					name: "expand",
					className: g.a.icon
				})) : w.source && w.source.url ? s.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: w.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : s.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(w.permalink),
					rel: "nofollow",
					onClick: _
				}, s.a.createElement(f.a, {
					name: "text_post",
					className: g.a.icon
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
				m = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/components/PostMeta/index.m.less"),
				y = n.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: g,
					isOverlay: O,
					isTopicPage: w,
					post: E,
					shouldShowSubscribeButton: _,
					subredditOrProfile: j,
					tooltipType: k
				} = e, P = !!w, C = Object(x.a)();
				return r.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !E.isSponsored && j && r.a.createElement(a.a, {
					postId: E.id,
					subredditName: j.name
				}, r.a.createElement(p.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: j.url,
						state: C
					}
				}, j.displayText)), j && j.isQuarantined && r.a.createElement(l.a, null), !o && !E.isSponsored && j && _ && !g && r.a.createElement(m.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(h.h)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(v.h)(j) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: E.id,
					size: f.d.XXS,
					small: !0
				}), !o && !E.isSponsored && r.a.createElement(b.b, null), !o && !E.isSponsored && r.a.createElement(i.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), r.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: k
				}), r.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					post: E,
					tooltipType: k
				}), !P && r.a.createElement(s.a, {
					hideCta: n,
					thing: E,
					tooltipType: O ? d.c.Lightbox : void 0
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				p = e => s.a.createElement(l, e, " · "),
				m = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...r
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
					return s.a.createElement(l, r, d)
				},
				u = e => s.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.46cb4ecf3b1940525436.js.map