// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.d2a2ccc7771a7b2cdf4d.js
// Retrieved at 2/3/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
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
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						x = !i && !u && !p && !m && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						P = /xbox/i.test(t);
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
					} : c ? s = {
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
					} : u ? s = {
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
					} : m ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? s = {
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
					} : i ? s = {
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
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && y && (s.version = y)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : P ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (s.osversion = w);
					var j = !s.windows && w.split(".")[0];
					return g || d || "ipad" == r || i && (3 == j || j >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function i(e, o, s) {
					var i = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
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
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, s)
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

			function d(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return s(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					o = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, a, p = l(t),
					f = s(e),
					b = d(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== c(t) || m(p)) && (h = (o = t) !== r(o) && d(o) ? {
					scrollLeft: (a = o).scrollLeft,
					scrollTop: a.scrollTop
				} : i(o)), d(t) ? ((x = s(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
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
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : d(t) && m(t) ? t : e(h(t))
					}(e),
					o = "body" === c(n),
					s = r(n),
					i = o ? [s].concat(s.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return o ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return d(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = r(e), n = y(e); n && v(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === c(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); d(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				P = "bottom",
				w = "right",
				j = "left",
				E = "auto",
				S = [O, P, w, j],
				C = "start",
				_ = "end",
				T = "clippingParents",
				k = "viewport",
				L = "popper",
				N = "reference",
				A = S.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + _])
				}), []),
				I = [].concat(S, [E]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + _])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

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
					var s, i, d = {
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
						c = [],
						l = !1,
						u = {
							state: d,
							setOptions: function(n) {
								p(), d.options = Object.assign(Object.assign(Object.assign({}, r), d.options), n), d.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var s = function(e) {
									var t = B(e);
									return M.reduce((function(e, n) {
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
								}([].concat(o, d.options.modifiers)));
								return d.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var r = s({
											state: d,
											name: t,
											instance: u,
											options: o
										});
										c.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = d.elements,
										t = e.reference,
										n = e.popper;
									if (F(t, n)) {
										d.rects = {
											reference: f(t, g(n), "fixed" === d.options.strategy),
											popper: b(n)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < d.orderedModifiers.length; o++)
											if (!0 !== d.reset) {
												var s = d.orderedModifiers[o],
													r = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													c = s.name;
												"function" == typeof r && (d = r({
													state: d,
													options: a,
													name: c,
													instance: u
												}) || d)
											} else d.reset = !1, o = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(d)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!F(e, t)) return u;

					function p() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
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

			function q(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function U(e) {
				var t, n = e.reference,
					o = e.element,
					s = e.placement,
					r = s ? V(s) : null,
					i = s ? H(s) : null,
					a = n.x + n.width / 2 - o.width / 2,
					d = n.y + n.height / 2 - o.height / 2;
				switch (r) {
					case O:
						t = {
							x: a,
							y: n.y - o.height
						};
						break;
					case P:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case w:
						t = {
							x: n.x + n.width,
							y: d
						};
						break;
					case j:
						t = {
							x: n.x - o.width,
							y: d
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = r ? q(r) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case C:
							t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case _:
							t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - o[l] / 2)
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

			function J(e) {
				var t, n = e.popper,
					o = e.popperRect,
					s = e.placement,
					i = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					c = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = j,
					x = O,
					v = window;
				if (c) {
					var y = g(n);
					y === r(n) && (y = l(n)), s === O && (x = P, m -= y.clientHeight - o.height, m *= d ? 1 : -1), s === j && (h = w, p -= y.clientWidth - o.width, p *= d ? 1 : -1)
				}
				var E, S = Object.assign({
					position: a
				}, c && z);
				return d ? Object.assign(Object.assign({}, S), {}, ((E = {})[x] = b ? "0" : "", E[h] = f ? "0" : "", E.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", E)) : Object.assign(Object.assign({}, S), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var G = {
				start: "end",
				end: "start"
			};

			function Z(e) {
				return e.replace(/start|end/g, (function(e) {
					return G[e]
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
				return t === k ? Q(function(e) {
					var t = r(e),
						n = l(e),
						o = t.visualViewport,
						s = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						d = 0;
					return o && (s = o.width, i = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, d = o.offsetTop)), {
						width: s,
						height: i,
						x: a + u(e),
						y: d
					}
				}(e)) : d(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						o = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						d = -n.scrollTop;
					return "rtl" === p(o || t).direction && (a += Math.max(t.clientWidth, o ? o.clientWidth : 0) - s), {
						width: s,
						height: r,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && d(e) ? g(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(o, [n]),
					r = s[0],
					i = s.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
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

			function oe(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					r = void 0 === o ? e.placement : o,
					i = n.boundary,
					d = void 0 === i ? T : i,
					c = n.rootBoundary,
					u = void 0 === c ? k : c,
					p = n.elementContext,
					m = void 0 === p ? L : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, S)),
					y = m === L ? N : L,
					g = e.elements.reference,
					j = e.rects.popper,
					E = e.elements[b ? y : m],
					C = ee(a(E) ? E : E.contextElement || l(e.elements.popper), d, u),
					_ = s(g),
					A = U({
						reference: _,
						element: j,
						strategy: "absolute",
						placement: r
					}),
					I = Q(Object.assign(Object.assign({}, j), A)),
					M = m === L ? I : _,
					B = {
						top: C.top - M.top + v.top,
						bottom: M.bottom - C.bottom + v.bottom,
						left: C.left - M.left + v.left,
						right: M.right - C.right + v.right
					},
					R = e.modifiersData.offset;
				if (m === L && R) {
					var F = R[r];
					Object.keys(B).forEach((function(e) {
						var t = [w, P].indexOf(e) >= 0 ? 1 : -1,
							n = [O, P].indexOf(e) >= 0 ? "y" : "x";
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

			function ie(e) {
				return [O, w, P, j].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = D({
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
								i = void 0 === s || s,
								a = o.resize,
								d = void 0 === a || a,
								c = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), d && c.addEventListener("resize", n.update, W),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, W)
									})), d && c.removeEventListener("resize", n.update, W)
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
								s = void 0 === o || o,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), J(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), J(Object.assign(Object.assign({}, a), {}, {
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
								d(s) && c(s) && (Object.assign(s.style, n), Object.keys(o).forEach((function(e) {
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
										d(o) && c(o) && (Object.assign(o.style, r), Object.keys(s).forEach((function(e) {
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
								i = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											s = [j, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * s, [j, w].indexOf(o) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
								}), {}),
								a = i[t.placement],
								d = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = i
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
								for (var s = n.mainAxis, r = void 0 === s || s, i = n.altAxis, a = void 0 === i || i, d = n.fallbackPlacements, c = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), v = d || (x === h || !f ? [X(h)] : function(e) {
										if (V(e) === E) return [];
										var t = X(e);
										return [Z(e), t, Z(t)]
									}(h)), y = [h].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === E ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												s = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												d = n.allowedAutoPlacements,
												c = void 0 === d ? I : d,
												l = H(o),
												u = (l ? a ? A : A.filter((function(e) {
													return H(e) === l
												})) : S).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: s,
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
											padding: c,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), g = t.rects.reference, _ = t.rects.popper, T = new Map, k = !0, L = y[0], N = 0; N < y.length; N++) {
									var M = y[N],
										B = V(M),
										R = H(M) === C,
										F = [O, P].indexOf(B) >= 0,
										D = F ? "width" : "height",
										W = oe(t, {
											placement: M,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: c
										}),
										q = F ? R ? w : j : R ? P : O;
									g[D] > _[D] && (q = X(q));
									var U = X(q),
										z = [];
									if (r && z.push(W[B] <= 0), a && z.push(W[q] <= 0, W[U] <= 0), z.every((function(e) {
											return e
										}))) {
										L = M, k = !1;
										break
									}
									T.set(M, z)
								}
								if (k)
									for (var J = function(e) {
											var t = y.find((function(t) {
												var n = T.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return L = t, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === J(K)) break
									}
								t.placement !== L && (t.modifiersData[o]._skip = !0, t.placement = L, t.reset = !0)
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
								i = n.altAxis,
								a = void 0 !== i && i,
								d = n.boundary,
								c = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = oe(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								v = V(t.placement),
								y = H(t.placement),
								E = !y,
								S = q(v),
								_ = "x" === S ? "y" : "x",
								T = t.modifiersData.popperOffsets,
								k = t.rects.reference,
								L = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (T) {
								if (r) {
									var I = "y" === S ? O : j,
										M = "y" === S ? P : w,
										B = "y" === S ? "height" : "width",
										R = T[S],
										F = T[S] + x[I],
										D = T[S] - x[M],
										W = m ? -L[B] / 2 : 0,
										U = y === C ? k[B] : L[B],
										z = y === C ? -L[B] : -k[B],
										J = t.elements.arrow,
										K = m && J ? b(J) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										G = X[I],
										Z = X[M],
										Y = se(0, k[B], K[B]),
										Q = E ? k[B] / 2 - W - Y - G - N : U - Y - G - N,
										$ = E ? -k[B] / 2 + W + Y + Z + N : z + Y + Z + N,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === S ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
										re = T[S] + Q - ne - te,
										ie = T[S] + $ - ne,
										ae = se(m ? Math.min(F, re) : F, R, m ? Math.max(D, ie) : D);
									T[S] = ae, A[S] = ae - R
								}
								if (a) {
									var de = "x" === S ? O : j,
										ce = "x" === S ? P : w,
										le = T[_],
										ue = se(le + x[de], le, le - x[ce]);
									T[_] = ue, A[_] = ue - le
								}
								t.modifiersData[o] = A
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
								i = V(n.placement),
								a = q(i),
								d = [j, w].indexOf(i) >= 0 ? "height" : "width";
							if (s && r) {
								var c = n.modifiersData[o + "#persistent"].padding,
									l = b(s),
									u = "y" === a ? O : j,
									p = "y" === a ? P : w,
									m = n.rects.reference[d] + n.rects.reference[a] - r[a] - n.rects.popper[d],
									f = r[a] - n.rects.reference[a],
									h = g(s),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									y = c[u],
									E = x - l[d] - c[p],
									S = x / 2 - l[d] / 2 + v,
									C = se(y, S, E),
									_ = a;
								n.modifiersData[o] = ((t = {})[_] = C, t.centerOffset = C - S, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.element,
								r = void 0 === s ? "[data-popper-arrow]" : s,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, S))
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
								i = oe(t, {
									elementContext: "reference"
								}),
								a = oe(t, {
									altBoundary: !0
								}),
								d = re(i, o),
								c = re(a, s, r),
								l = ie(d),
								u = ie(c);
							t.modifiersData[n] = {
								referenceClippingOffsets: d,
								popperEscapeOffsets: c,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				de = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = n.n(de),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							o = t[1];
						return e[n] = o, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var s = o.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = o.useState({
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
						d = i[1],
						c = o.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									d({
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
								modifiers: [].concat(r.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, c]),
						u = o.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ae)(e, t, l);
							return u.current = o,
								function() {
									o.destroy(), u.current = null
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
				o = "function" == typeof Map,
				s = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, d, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (!e(t[d], i[d])) return !1;
								return !0
							}
							if (o && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!e(d.value[1], i.get(d.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (t[d] !== i[d]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (c = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (d = a; 0 != d--;)
								if (!Object.prototype.hasOwnProperty.call(i, c[d])) return !1;
							if (n && t instanceof Element) return !1;
							for (d = a; 0 != d--;)
								if (("_owner" !== c[d] && "__v" !== c[d] && "__o" !== c[d] || !t.$$typeof) && !e(t[c[d]], i[c[d]])) return !1;
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
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const d = i();
				Object(o.a)(e, a, d) ? n(Object(r.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
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
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: d,
					callToAction: l,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !s && r.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: o
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let s = 0, r = -999; s <= l; s += 1) {
					const e = n[s],
						t = c[e].belongsTo.id;
					m(e) && s - r >= a && !u.has(t) && (r = s, u.add(t), s === l && (p = !0))
				}
				return p ? s.a.createElement(i.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
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
			t.a = s
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
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(g),
				P = n("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				E = 1,
				S = P.a.div("Container", O.a),
				C = P.a.div("PostMetaWrapper", O.a),
				_ = P.a.wrapped(m.c, "PostTitle", O.a),
				T = P.a.div("FlatList", O.a),
				k = P.a.div("FlatItem", O.a),
				L = P.a.span("FlatListDotSpacer", O.a),
				N = P.a.wrapped(S, "LinkContainer", O.a),
				A = P.a.div("Content", O.a),
				I = P.a.div("ThumbnailContainer", O.a),
				M = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Mb.TOPIC),
					shouldOpenPostInNewTab: y.db
				}),
				B = Object(i.b)(M);
			t.c = Object(x.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: o,
					mediaProps: s,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(N, {
					className: c
				}, r.a.createElement(A, null, r.a.createElement(C, null, r.a.createElement(p.a, d)), R(i), i.source && r.a.createElement(f.a, {
					post: i
				}), D(e)), V(e)) : r.a.createElement(S, {
					className: c
				}, r.a.createElement(C, null, r.a.createElement(p.a, d)), R(i), F(e), D(e))
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
					return r.a.createElement("div", null, r.a.createElement(u.a, w({}, o, {
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
					return r.a.createElement(T, null, r.a.createElement(k, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(L, null), r.a.createElement(k, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(s, "comment count", Object(l.b)(s))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(I, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
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
					n = t.status === d.a.Live,
					s = t.status === d.a.Closed,
					l = Object(i.e)(t => Object(c.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: f.a.container
				}, r.a.createElement("div", {
					className: f.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), n && r.a.createElement("span", {
					className: Object(o.a)(f.a.badge, f.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), s && r.a.createElement("span", {
					className: Object(o.a)(f.a.badge, f.a.ended)
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/Econ/Audio/async.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				P = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/lib/ads/index.ts"),
				T = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				L = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = n("./src/reddit/components/AwardBadges/index.tsx"),
				A = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				I = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				H = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				J = n("./src/reddit/components/PostMedia/index.tsx"),
				K = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				G = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Z = n.n(G);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => s.a.createElement("div", {
					className: Z.a.container
				}, s.a.createElement(X.a, {
					className: Z.a.pinnedIcon,
					isFilled: !0
				}), s.a.createElement("span", {
					className: Z.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = n("./src/reddit/components/PostTitle/index.tsx"),
				te = n("./src/reddit/components/PostTopLine/index.tsx"),
				ne = n("./src/reddit/components/SourceLink/index.tsx"),
				oe = n("./src/reddit/constants/postLayout.ts"),
				se = n("./src/reddit/contexts/InsideOverlay.tsx"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/helpers/isCrosspost.ts"),
				de = n("./src/reddit/helpers/postEvent.ts"),
				ce = n("./src/reddit/models/Audio/index.ts"),
				le = n("./src/reddit/constants/experiments.ts"),
				ue = n("./src/reddit/helpers/chooseVariant/index.ts"),
				pe = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const me = Object(a.a)(S.N, e => e.some(pe.c)),
				fe = Object(a.a)(me, e => e),
				be = (e, t) => Object(ue.c)(e, {
					experimentName: le.ic,
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
				ve = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ye = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				ge = n.n(ye),
				Oe = n("./src/reddit/selectors/i18n/index.ts"),
				Pe = n("./src/reddit/components/LargePost/index.m.less"),
				we = n.n(Pe);
			const je = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(S.N)(e, {
						listingKey: n
					}) : void 0
				},
				Ee = Object(r.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: P.a,
					hideNSFWPref: C.C,
					flairStyleTemplate: re.V,
					isCurrentUserProfilePost: S.l,
					isLoggedIn: C.K,
					isActive: S.j,
					showPromotedCTA: xe.a,
					moderatorPermissions: E.l,
					modModeEnabled: re.T,
					posts: je,
					postHeightVariant: be,
					shouldShowNsfwListingBelow: Oe.b,
					showEditFlair: he.a,
					showAwardsPlaque: j.a,
					isAudioRoomPostEnabled: w.a,
					isRecordingEnabled: w.B
				}), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const o = n === O.a.upvoted ? Object(p.jb)(t) : Object(p.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(p.fb)(t)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				Se = s.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: m,
						forceLoadMedia: O,
						hideNSFWPref: P,
						hostPostData: w,
						imageGalleryCurrentItem: j,
						inSubredditOrProfile: E = !1,
						isCommentsPage: S,
						isCurrentUserProfilePost: C,
						isFrontpage: X,
						isGalleryTileLayoutDefault: G,
						isLoggedIn: Z,
						isOverlay: Y,
						isTopicPage: se,
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
						onIgnoreReports: Oe,
						onOpenReportsDropdown: Pe,
						post: je,
						postHeightVariant: Ee,
						scrollerItemRef: Se,
						shouldShowGalleryTileOption: Ce,
						shouldShowNsfwListingBelow: _e,
						showAwardsPlaque: Te,
						showEditFlair: ke,
						showPromotedCTA: Le,
						subredditOrProfile: Ne,
						userIsOp: Ae,
						postId: Ie,
						postIds: Me,
						onceInViewport: Be
					} = e, Re = !!e.redditStyle || !!e["data-redditstyle"], Fe = Re ? void 0 : m, De = Object(l.a)(he), We = xe && De, Ve = Object(d.a)(he), He = Object(c.a)(he), qe = Object(V.c)(je), Ue = Object(D.d)(je), ze = !!je.media && je.media.type === y.o.RTJSON, Je = Ae && ze, Ke = n ? n - z.a : void 0, Xe = !!je.recommendationContext, Ge = !(X && Z || se) || Xe && Z, Ze = (e => e === le.qe.OnlyTitles)(Ee) && !Object(ae.a)(je), Ye = (e => e === le.qe.MediumHeight)(Ee) && !Object(ae.a)(je), Qe = (e => {
						var t;
						const {
							post: n,
							postIds: o,
							posts: s
						} = e;
						if (!Object(g.r)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(n.id),
							i = o && 1 === o.indexOf(n.id),
							a = s && s[1] && Object(g.r)(s[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), $e = !!(null == w ? void 0 : w.shouldShowLinkedPosts), et = (!E || $e || _e) && !je.isSponsored, tt = Object(_.t)(je, j), {
						source: nt
					} = tt, ot = Object(o.useRef)(null), st = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Be || Be(fe))
						})
					}, [Be, fe]);
					return Object(v.a)(ot, st), s.a.createElement(x.b, null, s.a.createElement(U.a, {
						className: Object(T.a)(we.a.container, r, ge.a.largeAndMediumPostStyles, ge.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ge.a.mUseRedditTheme]: Re,
							promotedvideolink: je.isSponsored && !(je.media && y.a.has(je.media.type)),
							[we.a.topCompactPost]: Qe && Qe.hasTopCompactPostStyles,
							[we.a.bottomCompactPost]: Qe && Qe.hasBottomCompactPostStyles
						}),
						isOverlay: Y,
						style: Object(u.b)(e.flairStyleTemplate),
						post: je,
						onClick: ye,
						eventFactory: p
					}, s.a.createElement("div", {
						ref: ot
					}), s.a.createElement($.a, {
						model: je,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: pe,
						isVoteCountAnimation: ue,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Fe,
						redditStyle: Re,
						postId: Ie
					}), s.a.createElement(q.a, {
						className: Object(T.a)(we.a.backgroundWrapper, {
							[we.a.isEvent]: Object(de.a)(je)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Fe,
						post: je,
						redditStyle: Re
					}, s.a.createElement(M.a, {
						post: je
					}), Qe && Qe.showPinnnedHeader && s.a.createElement(Q, null), Object(i.c)(je) && s.a.createElement(s.a.Fragment, null, s.a.createElement(h.a, {
						post: je
					}), s.a.createElement(b.a, {
						post: je
					})), !Object(i.c)(je) && s.a.createElement(s.a.Fragment, null, !!je.recommendationContext && s.a.createElement(H.a, {
						content: je.recommendationContext.content,
						layout: oe.g.Large,
						post: je
					}), s.a.createElement(te.a, {
						className: we.a.postTopLine,
						hideAwards: Te,
						hideNSFWPref: P,
						hostPostData: w,
						iconClassName: we.a.postTopLineIcon,
						inSubredditOrProfile: E,
						isCommentsPage: !!S,
						isCompactPinnedPost: !!Qe,
						isCurrentUserProfilePost: C,
						isOverlay: !!Y,
						isTopicPage: !!se,
						listingKey: be,
						post: je,
						shouldShowSubscribeButton: Ge,
						showSubreddit: et,
						showSubredditIcon: !0,
						subredditOrProfile: Ne
					}), s.a.createElement(ee.c, {
						className: we.a.postTitle,
						post: je,
						redditStyle: Re,
						size: ee.b.Large,
						titleColor: Fe && Fe.postTitleColor,
						isOverlay: Y
					}), je.source && !je.isSponsored && !(je.media && Object(y.H)(je.media)) && s.a.createElement(ne.a, {
						className: we.a.sourceLink,
						post: je
					})), s.a.createElement("div", {
						className: we.a.postMediaWrapper
					}, !Qe && s.a.createElement(J.a, {
						isGalleryTileLayoutDefault: G,
						isListing: !0,
						isMediumHeight: Ye,
						isNotCardView: !!Y,
						isTitleOnly: Ze,
						showCentered: !0,
						flairStyleTemplate: Fe,
						post: je,
						availableWidth: Ke,
						shouldLoad: O,
						scrollerItemRef: Se,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ce,
						showPromotedCTA: Le
					})), Le && nt && nt.url && s.a.createElement(k.a, {
						className: we.a.adLinkWrapper
					}, s.a.createElement(L.a, {
						post: je,
						adLinkContent: tt
					})), xe && De && Ue && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(F.a, {
						thing: je
					})), xe && De && qe && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(W.a, {
						onIgnoreReports: Oe,
						reportable: je
					})), Object(ce.b)(je) && re && s.a.createElement(f.a, {
						post: je,
						isRecordingEnabled: me
					}), s.a.createElement(R.d, null), Te && s.a.createElement(N.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: je,
						tooltipType: Y ? ve.c.Lightbox : void 0
					}), s.a.createElement("div", {
						className: we.a.flatListContainer
					}, s.a.createElement(I.a, {
						className: we.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Fe,
						model: je,
						onVoteClick: e.handleVote
					}), s.a.createElement(B.c, {
						currentUser: a,
						hasModFlairPerms: Ve,
						hasModFullPerms: He,
						hasModPostPerms: De,
						hostPostData: w,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: pe,
						isLargePost: !0,
						isOverlay: !!Y,
						listingKey: be,
						modModeEnabled: xe,
						onIgnoreReports: Oe,
						onOpenReportsDropdown: Pe,
						post: je,
						showEditPost: Je,
						showEditFlair: ke,
						useFlatlistBreakpoints: Object(K.b)({
							editPost: !1,
							save: !We,
							hide: !1,
							report: !1
						})
					}))), X && s.a.createElement(A.a, {
						post: je,
						postIds: null != Me ? Me : [],
						subredditId: null == Ne ? void 0 : Ne.id
					})))
				});
			Se.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(Ee(Object(se.b)(Se)))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: o,
						hasTooltip: c,
						tooltipText: u,
						className: p
					} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, s.a.createElement(d.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), c && s.a.createElement(i.a, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(c);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => s.a.createElement(a.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === d.g.Classic,
					[l.a.compactLayout]: t === d.g.Compact,
					[l.a.largeLayout]: t === d.g.Large
				}),
				content: e,
				rtJsonElementProps: u(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				}) : s.a.createElement(i.a, {
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
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = n("./src/reddit/components/PostBadges/index.tsx"),
				c = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
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
					isTopicPage: P,
					post: w,
					shouldShowSubscribeButton: j,
					subredditOrProfile: E,
					tooltipType: S
				} = e, C = !!P, _ = Object(x.a)();
				return s.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !w.isSponsored && E && s.a.createElement(i.a, {
					postId: w.id,
					subredditName: E.name
				}, s.a.createElement(u.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: E.url,
						state: _
					}
				}, E.displayText)), E && E.isQuarantined && s.a.createElement(l.a, null), !o && !w.isSponsored && E && j && !y && s.a.createElement(p.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(h.h)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: E.name,
						type: Object(v.h)(E) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: w.id,
					size: f.d.XXS,
					small: !0
				}), !o && !w.isSponsored && s.a.createElement(b.b, null), !o && !w.isSponsored && s.a.createElement(a.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), s.a.createElement(c.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: w,
					tooltipType: S
				}), s.a.createElement(d.a, {
					displayText: E ? E.displayText : null,
					inSubredditOrProfile: !!o,
					post: w,
					tooltipType: S
				}), !C && s.a.createElement(r.a, {
					hideCta: n,
					thing: w,
					tooltipType: O ? c.c.Lightbox : void 0
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: y,
					isReadingIndicatorsExperimentEnabled: g
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return s.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && s.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), s.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					isReadingIndicatorsExperimentEnabled: g
				}))
			}
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/models/Subreddit/index.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/PostTopLine/index.m.less"),
				E = n.n(j);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: n,
				hideAwards: s,
				hideNSFWPref: j,
				hostPostData: S,
				iconClassName: C,
				inSubredditOrProfile: _,
				isCommentsPage: T,
				isCompactPinnedPost: k,
				isCurrentUserProfilePost: L,
				isOverlay: N,
				isTopicPage: A,
				listingKey: I,
				post: M,
				shouldShowSubscribeButton: B,
				showCornerOutboundLink: R,
				showSubreddit: F,
				showSubredditIcon: D,
				subredditOrProfile: W,
				isFollowed: V,
				shouldShowFollowButton: H,
				onFollowPostClick: q
			}) => {
				const U = s || A,
					z = W && Object(P.h)(W),
					J = Object(i.e)(e => {
						if (!z) return !0;
						const t = Object(w.yb)(e, M.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, e)
				}, F && W && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, D && r.a.createElement(m.b, {
					className: Object(a.a)(E.a.subredditIcon, C),
					shouldHideNsfwIcon: j,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, F && r.a.createElement(c.h, {
					type: M.belongsTo.type,
					id: M.belongsTo.id
				}), r.a.createElement(p.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: t,
					tooltipType: N ? p.c.Lightbox : void 0,
					post: M,
					showSub: F,
					subredditOrProfile: W
				}), r.a.createElement(u.a, {
					className: E.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: k,
					post: M,
					tooltipType: N ? p.c.Lightbox : void 0
				}), !U && r.a.createElement(d.a, {
					isPostDetail: T,
					thing: M,
					tooltipType: N ? p.c.Lightbox : void 0
				})), W && J && F && B && !L && r.a.createElement(b.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(M.id, e ? "unsubscribe" : "subscribe", "post", I, S),
					identifier: {
						name: W.name,
						type: z ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: M.id,
					size: x.d.XS
				}), R && r.a.createElement(v.b, {
					isSponsored: M.isSponsored,
					postId: M.id,
					href: Object(O.D)(M),
					source: M.source
				}, r.a.createElement(g.a, {
					className: E.a.outboundLinkIcon
				})), H && J && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: q,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
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
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.uc
				});
				return !(!t || Object(o.qf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(s.qf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.d2a2ccc7771a7b2cdf4d.js.map