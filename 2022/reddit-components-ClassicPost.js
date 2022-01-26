// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.9b8cebc11a68623ab662.js
// Retrieved at 1/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
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
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						b = !r && !l && /macintosh/i.test(t),
						x = !a && !p && !u && !m && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? s = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, g && (s.version = g)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (s.version = g)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && g && (s.version = g)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : b ? (s.mac = e, s.osname = "macOS") : w ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var E = "";
					s.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var j = !s.windows && E.split(".")[0];
					return y || c || "ipad" == r || a && (3 == j || j >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == r || "ipod" == r || a || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
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

			function u(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = u(e),
					n = t.overflow,
					o = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, i, u = l(t),
					f = s(e),
					h = c(t),
					b = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== d(t) || m(u)) && (b = (o = t) !== r(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((x = s(t)).x += t.clientLeft, x.y += t.clientTop) : u && (x.x = p(u))), {
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
					s = r(n),
					a = o ? [s].concat(s.visualViewport || [], m(n) ? n : []) : n,
					i = t.concat(a);
				return o ? i : i.concat(x(b(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== u(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = r(e), n = g(e); n && v(n) && "static" === u(n).position;) n = g(n);
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
				P = "auto",
				k = [O, w, E, j],
				C = "start",
				_ = "end",
				S = "clippingParents",
				M = "viewport",
				N = "popper",
				T = "reference",
				L = k.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + _])
				}), []),
				I = [].concat(k, [P]).reduce((function(e, t) {
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
					s = t.defaultOptions,
					r = void 0 === s ? R : s;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var s, a, c = {
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
						p = {
							state: c,
							setOptions: function(n) {
								u(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: i(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var s = function(e) {
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
									if (F(t, n)) {
										c.rects = {
											reference: f(t, y(n), "fixed" === c.options.strategy),
											popper: h(n)
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

			function H(e) {
				return e.split("-")[1]
			}

			function U(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					o = e.element,
					s = e.placement,
					r = s ? V(s) : null,
					a = s ? H(s) : null,
					i = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (r) {
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
				var d = r ? U(r) : null;
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
			var J = {
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
					u = p.x,
					m = p.y,
					f = a.hasOwnProperty("x"),
					h = a.hasOwnProperty("y"),
					b = j,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === r(n) && (g = l(n)), s === O && (x = w, m -= g.clientHeight - o.height, m *= c ? 1 : -1), s === j && (b = E, u -= g.clientWidth - o.width, u *= c ? 1 : -1)
				}
				var P, k = Object.assign({
					position: i
				}, d && J);
				return c ? Object.assign(Object.assign({}, k), {}, ((P = {})[x] = h ? "0" : "", P[b] = f ? "0" : "", P.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + m + "px)" : "translate3d(" + u + "px, " + m + "px, 0)", P)) : Object.assign(Object.assign({}, k), {}, ((t = {})[x] = h ? m + "px" : "", t[b] = f ? u + "px" : "", t.transform = "", t))
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

			function Q(e, t) {
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

			function Y(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === M ? Y(function(e) {
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
				}(t) : Y(function(e) {
					var t = l(e),
						n = a(e),
						o = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						i = -n.scrollLeft + p(e),
						c = -n.scrollTop;
					return "rtl" === u(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - s), {
						width: s,
						height: r,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(u(e).position) >= 0 && c(e) ? y(e) : e;
						return i(n) ? t.filter((function(e) {
							return i(e) && Q(e, n)
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
					c = void 0 === a ? S : a,
					d = n.rootBoundary,
					p = void 0 === d ? M : d,
					u = n.elementContext,
					m = void 0 === u ? N : u,
					f = n.altBoundary,
					h = void 0 !== f && f,
					b = n.padding,
					x = void 0 === b ? 0 : b,
					v = te("number" != typeof x ? x : ne(x, k)),
					g = m === N ? T : N,
					y = e.elements.reference,
					j = e.rects.popper,
					P = e.elements[h ? g : m],
					C = ee(i(P) ? P : P.contextElement || l(e.elements.popper), c, p),
					_ = s(y),
					L = z({
						reference: _,
						element: j,
						strategy: "absolute",
						placement: r
					}),
					I = Y(Object.assign(Object.assign({}, j), L)),
					A = m === N ? I : _,
					B = {
						top: C.top - A.top + v.top,
						bottom: A.bottom - C.bottom + v.bottom,
						left: C.left - A.left + v.left,
						right: A.right - C.right + v.right
					},
					R = e.modifiersData.offset;
				if (m === N && R) {
					var F = R[r];
					Object.keys(B).forEach((function(e) {
						var t = [E, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						B[e] += F[n] * t
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
									placement: V(t.placement),
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
								a = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											s = [j, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = r[0],
											i = r[1];
										return a = a || 0, i = (i || 0) * s, [j, E].indexOf(o) >= 0 ? {
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
								for (var s = n.mainAxis, r = void 0 === s || s, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, u = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, h = n.allowedAutoPlacements, b = t.options.placement, x = V(b), v = c || (x === b || !f ? [X(b)] : function(e) {
										if (V(e) === P) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(b)), g = [b].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === P ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												s = n.boundary,
												r = n.rootBoundary,
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
														boundary: s,
														rootBoundary: r,
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
									}), []), y = t.rects.reference, _ = t.rects.popper, S = new Map, M = !0, N = g[0], T = 0; T < g.length; T++) {
									var A = g[T],
										B = V(A),
										R = H(A) === C,
										F = [O, w].indexOf(B) >= 0,
										D = F ? "width" : "height",
										W = oe(t, {
											placement: A,
											boundary: l,
											rootBoundary: p,
											altBoundary: u,
											padding: d
										}),
										U = F ? R ? E : j : R ? w : O;
									y[D] > _[D] && (U = X(U));
									var z = X(U),
										J = [];
									if (r && J.push(W[B] <= 0), i && J.push(W[U] <= 0, W[z] <= 0), J.every((function(e) {
											return e
										}))) {
										N = A, M = !1;
										break
									}
									S.set(A, J)
								}
								if (M)
									for (var q = function(e) {
											var t = g.find((function(t) {
												var n = S.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === q(G)) break
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
								s = n.mainAxis,
								r = void 0 === s || s,
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
								g = H(t.placement),
								P = !g,
								k = U(v),
								_ = "x" === k ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								N = t.rects.popper,
								T = "function" == typeof b ? b(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : b,
								L = {
									x: 0,
									y: 0
								};
							if (S) {
								if (r) {
									var I = "y" === k ? O : j,
										A = "y" === k ? w : E,
										B = "y" === k ? "height" : "width",
										R = S[k],
										F = S[k] + x[I],
										D = S[k] - x[A],
										W = m ? -N[B] / 2 : 0,
										z = g === C ? M[B] : N[B],
										J = g === C ? -N[B] : -M[B],
										q = t.elements.arrow,
										G = m && q ? h(q) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = X[I],
										K = X[A],
										Q = se(0, M[B], G[B]),
										Y = P ? M[B] / 2 - W - Q - Z - T : z - Q - Z - T,
										$ = P ? -M[B] / 2 + W + Q + K + T : J + Q + K + T,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										re = S[k] + Y - ne - te,
										ae = S[k] + $ - ne,
										ie = se(m ? Math.min(F, re) : F, R, m ? Math.max(D, ae) : D);
									S[k] = ie, L[k] = ie - R
								}
								if (i) {
									var ce = "x" === k ? O : j,
										de = "x" === k ? w : E,
										le = S[_],
										pe = se(le + x[ce], le, le - x[de]);
									S[_] = pe, L[_] = pe - le
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
								s = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								a = V(n.placement),
								i = U(a),
								c = [j, E].indexOf(a) >= 0 ? "height" : "width";
							if (s && r) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = h(s),
									p = "y" === i ? O : j,
									u = "y" === i ? w : E,
									m = n.rects.reference[c] + n.rects.reference[i] - r[i] - n.rects.popper[c],
									f = r[i] - n.rects.reference[i],
									b = y(s),
									x = b ? "y" === i ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									g = d[p],
									P = x - l[c] - d[u],
									k = x / 2 - l[c] / 2 + v,
									C = se(g, k, P),
									_ = i;
								n.modifiersData[o] = ((t = {})[_] = C, t.centerOffset = C - k, t)
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
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Q(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
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
				ue = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var s = o.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || ue
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
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
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
				}, u)), l && r.a.createElement(a.a, {
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
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
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
			}) => s.a.createElement("div", {
				className: Object(r.a)(c.a.thumbnailContainer, e)
			}, s.a.createElement(a.a, {
				className: Object(r.a)(c.a.thumbnail, t),
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
			n.r(t), n.d(t, "SearchResultsClassicPost", (function() {
				return se
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/ads/index.ts"),
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
				g = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, n = () => Math.floor(10 * Math.random() + 1), r = Object(f.e)(h.W), [i, c] = Object(o.useState)(!1), [d, l] = Object(o.useState)(n());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), l(n())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? s.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, s.a.createElement("div", {
						className: x.a.classicSpeaker
					}, i && s.a.createElement(g.a, {
						className: Object(a.a)(x.a.speakerRings, {
							[x.a.nightMode]: r
						})
					}), s.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: x.a.snoovatar,
						src: `${m.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: y._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && s.a.createElement("div", {
						className: x.a.muteContainer
					}, s.a.createElement(v.a, {
						className: x.a.muteIcon
					})))) : s.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, s.a.createElement(v.a, {
						className: x.a.muteIcon
					}))
				},
				w = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = n("./src/reddit/components/ExpandoButton/index.tsx"),
				j = n("./src/reddit/components/Flatlist/index.tsx"),
				P = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				C = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				_ = n("./src/reddit/components/ModModeReports/index.tsx"),
				S = n("./src/reddit/components/ModModeReports/helpers.ts"),
				M = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = n("./src/reddit/components/PostContainer/index.tsx"),
				L = n("./src/reddit/components/PostMeta/index.tsx"),
				I = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/PostTopMeta/index.tsx"),
				F = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				D = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = n("./src/reddit/models/Audio/index.ts"),
				V = n("./src/reddit/models/Media/index.ts"),
				H = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				U = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = n("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				J = n("./src/reddit/constants/postLayout.ts"),
				q = n("./src/reddit/contexts/Post/index.tsx"),
				G = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				K = n("./src/reddit/helpers/search/renderMedia.tsx"),
				Q = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = n.n(Y),
				ee = n("./src/reddit/components/ClassicPost/index.m.less"),
				te = n.n(ee);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = Object(i.a)(e => {
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
						formatTitle: g,
						hostPostData: y,
						isCheckboxSelected: U,
						isCurrentUserProfilePost: z,
						isFrontpage: q,
						isGalleryTileLayoutDefault: Y,
						isLoggedIn: ee,
						isOverlay: oe,
						imageGalleryCurrentItem: se,
						moderatorPermissions: re,
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
						subredditOrProfile: ge,
						toggleCheckbox: ye,
						userIsOp: Oe,
						shouldShowGalleryTileOption: we,
						showPromotedCTA: Ee
					} = e, je = Object(d.a)(f);
					Object(o.useEffect)(() => {
						le && je !== f && le(ue.id)
					}, [f, le, ue.id, je]);
					const Pe = fe ? void 0 : v,
						ke = n || void 0,
						Ce = Object(Z.a)(re),
						_e = Object(G.a)(re),
						Se = Object(X.a)(re),
						Me = ae && Z.a,
						Ne = Object(C.d)(ue),
						Te = Object(S.c)(ue),
						Le = !!ue.media && ue.media.type === V.o.RTJSON,
						Ie = Oe && Le,
						Ae = h && !ve,
						Be = !!ue.media && Object(V.H)(ue.media),
						Re = !!ue.recommendationContext,
						Fe = {
							flairStyleTemplate: Pe,
							post: ue,
							inSubredditOrProfile: h,
							isCurrentUserProfilePost: z,
							isOverlay: oe,
							shouldShowSubscribeButton: !(q && ee) || Re && ee,
							subredditOrProfile: ge
						},
						De = Object(r.t)(ue, se),
						{
							source: We
						} = De;
					let Ve = s.a.createElement(H.a, {
						className: te.a.classicThumbnail,
						crosspost: ke && ue,
						isMeta: ue.isMeta,
						post: ke || ue,
						redditStyle: fe,
						templatePlaceholderImage: Pe && Pe.postPlaceholderImage,
						removeLink: Be
					});
					Object(W.b)(ue) && (Ve = s.a.createElement(O, {
						post: ue
					}));
					const He = s.a.createElement(T.a, {
						className: Object(a.a)($.a.classicPostStyles, te.a.postContainer, Object(Q.a)(e), x ? te.a.mFirst : void 0, t),
						isOverlay: oe,
						style: {
							...Object(Q.d)(e),
							...Object(Q.b)(Pe)
						},
						post: ue,
						onClick: ie,
						eventFactory: b
					}, s.a.createElement(A.a, {
						model: ue,
						handleVote: m,
						showBulkActionCheckbox: be,
						isCheckboxSelected: U,
						toggleCheckbox: ye,
						flairStyleTemplate: Pe,
						redditStyle: fe,
						postId: me
					}), s.a.createElement(N.a, {
						"data-click-id": "background",
						flairStyleTemplate: Pe
					}, s.a.createElement(w.a, {
						className: te.a.eventMeta,
						post: ue
					}), s.a.createElement("div", {
						className: te.a.mainBody
					}, s.a.createElement("div", {
						className: Ae ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Ae && Ve, s.a.createElement(E.a, {
						crosspost: ke,
						className: te.a.rightExpando,
						isExpanded: !!f,
						post: ue,
						useMediaIcons: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: be
						}),
						"data-click-id": "body"
					}, !!ue.recommendationContext && s.a.createElement(M.a, {
						content: ue.recommendationContext.content,
						layout: J.g.Classic,
						post: ue
					}), s.a.createElement(B.c, {
						className: pe ? te.a.titleWithPoll : void 0,
						format: g,
						poll: pe,
						post: ue,
						redditStyle: fe,
						size: B.b.Medium,
						titleColor: Pe && Pe.postTitleColor,
						isOverlay: oe
					}, ue.source && !ke && s.a.createElement(D.a, {
						href: ue.source.url,
						isSponsored: ue.isSponsored,
						postId: ue.id,
						source: ue.source
					}, Object(c.a)(ue))), s.a.createElement(L.a, ne({
						key: "PostMeta"
					}, Fe)), ae && Ce && Ne && s.a.createElement(k.a, {
						thing: ue
					}), ae && Ce && Te && s.a.createElement(_.a, {
						onIgnoreReports: ce,
						reportable: ue
					}), Ee && We && We.url && s.a.createElement(l.a, {
						className: te.a.adLinkWrapper
					}, s.a.createElement(p.a, {
						post: ue,
						adLinkContent: De
					})), s.a.createElement("div", {
						className: te.a.flatlistContainer
					}, s.a.createElement(E.a, {
						className: te.a.leftExpando,
						crosspost: ke,
						isExpanded: !!f,
						post: ue,
						useMediaIcons: !1
					}), s.a.createElement(u.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Pe,
						model: ue,
						onVoteClick: m
					}), s.a.createElement(j.a, {
						className: te.a.flatlistSeparator
					}), s.a.createElement(j.c, {
						className: te.a.flatlist,
						currentUser: i,
						hasModFlairPerms: _e,
						hasModPostPerms: Ce,
						hasModFullPerms: Se,
						hostPostData: y,
						isOverlay: !!oe,
						modModeEnabled: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: ue,
						showEditPost: Ie,
						showEditFlair: xe,
						tooltipType: oe ? R.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(I.b)({
							editPost: !Me,
							hide: !Me,
							report: !Me
						})
					})), s.a.createElement(P.d, null))), Object(K.a)(ue, te.a, he, f, we, Y)));
					return s.a.createElement(F.b, null, He)
				}),
				se = Object(q.b)(Object(z.a)(oe));
			t.default = Object(U.a)(oe)
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
				return P
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
				u = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				h = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/lib/constants/index.ts"),
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
			const j = 8,
				P = 1,
				k = w.a.div("Container", O.a),
				C = w.a.div("PostMetaWrapper", O.a),
				_ = w.a.wrapped(m.c, "PostTitle", O.a),
				S = w.a.div("FlatList", O.a),
				M = w.a.div("FlatItem", O.a),
				N = w.a.span("FlatListDotSpacer", O.a),
				T = w.a.wrapped(k, "LinkContainer", O.a),
				L = w.a.div("Content", O.a),
				I = w.a.div("ThumbnailContainer", O.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== b.Mb.TOPIC),
					shouldOpenPostInNewTab: g.cb
				}),
				B = Object(a.b)(A);
			t.c = Object(x.b)(B(e => {
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
				return a && !a.media ? r.a.createElement(T, {
					className: d
				}, r.a.createElement(L, null, r.a.createElement(C, null, r.a.createElement(u.a, c)), R(a), a.source && r.a.createElement(f.a, {
					post: a
				}), D(e)), V(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(C, null, r.a.createElement(u.a, c)), R(a), F(e), D(e))
			}));
			const R = e => r.a.createElement(_, {
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
					return r.a.createElement("div", null, r.a.createElement(p.a, E({}, o, {
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
					return r.a.createElement(S, null, r.a.createElement(M, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(M, null, W(e)))
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
				V = e => r.a.createElement(I, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), s.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), s.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				opacity: "0.8"
			}, s.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), s.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), s.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), s.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), s.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				g = n.n(v);
			const y = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, n) => {
					const o = Object(c.a)(g.a.icon, g.a.hideOnHover);
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
						case h.o.GIFVIDEO:
							return r.a.createElement(f.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return r.a.createElement(f.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(f.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return r.a.createElement(f.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return r.a.createElement(f.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(f.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = y(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: v,
					useMediaIcons: y
				} = e, w = n || h, E = Object(a.e)(b.b), j = t => {
					E && (t.preventDefault(), e.showModalOnPostLinkClick(w))
				}, P = s && !!n;
				return w.media && !(("rtjson" === w.media.type || "text" === w.media.type || "liveaudio" === w.media.type) && !Object(m.a)(w)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: v
				}, u ? r.a.createElement(f.a, {
					name: "collapse",
					className: g.a.icon
				}) : y ? r.a.createElement(r.a.Fragment, null, O(w.media && w.media.type, P, h), r.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(g.a.icon, g.a.showOnHover)
				})) : r.a.createElement(f.a, {
					name: "expand",
					className: g.a.icon
				})) : w.source && w.source.url ? r.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: w.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(w.permalink),
					rel: "nofollow",
					onClick: j
				}, r.a.createElement(f.a, {
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
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
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
					shouldShowSubscribeButton: j,
					subredditOrProfile: P,
					tooltipType: k
				} = e, C = !!w, _ = Object(x.a)();
				return s.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !E.isSponsored && P && s.a.createElement(a.a, {
					postId: E.id,
					subredditName: P.name
				}, s.a.createElement(p.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: _
					}
				}, P.displayText)), P && P.isQuarantined && s.a.createElement(l.a, null), !o && !E.isSponsored && P && j && !g && s.a.createElement(u.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(b.h)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(v.h)(P) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: E.id,
					size: f.d.XXS,
					small: !0
				}), !o && !E.isSponsored && s.a.createElement(h.b, null), !o && !E.isSponsored && s.a.createElement(i.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), s.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: k
				}), s.a.createElement(c.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!o,
					post: E,
					tooltipType: k
				}), !C && s.a.createElement(r.a, {
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
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
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
					postId: g,
					isReadingIndicatorsExperimentEnabled: y
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return s.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: b
				}, o && s.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: f
				}), s.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: b,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: g,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: y
					}),
					isReadingIndicatorsExperimentEnabled: y
				}))
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/post.ts"),
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
					isLoggedIn: x.J,
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
				g = (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const o = n === i.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(r.fb)(t)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}),
				y = Object(o.b)(() => Object(s.c)(v), g, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(y(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = n("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(i.u)({
					searchQuery: i.Z
				}),
				p = Object(r.b)(() => Object(a.c)(d.c), d.b, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: Object(c.a)(n.searchQuery || "", e => s.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => s.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(p(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/LRUCache/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const a = new o.a(250),
				i = (e, t, n) => {
					const o = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${o}`;
						let i = a.get(s);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${o}\\b)`, "gi"),
								d = e.title.split(c);
							i = n(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(d.map((e, n) => n % 2 != 0 ? t(e) : e)))), a.set(s, i)
						}
						return i
					}
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, n, o, r, a) => o ? e.crosspostRootId ? s.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, r, a)) : i(e, n, r, a) : null,
				i = (e, t, n, o) => s.a.createElement(r.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.9b8cebc11a68623ab662.js.map