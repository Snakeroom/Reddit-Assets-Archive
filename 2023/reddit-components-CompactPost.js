// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.eb39997fa4ed9ee6fac5.js
// Retrieved at 8/3/2023, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						x = !r && !l && /macintosh/i.test(t),
						h = !a && !m && !p && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? n = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, g && (n.version = g)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (n.version = g)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && g && (n.version = g)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : x ? (n.mac = e, n.osname = "macOS") : j ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : h && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var w = "";
					n.windows ? w = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? w = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? w = (w = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? w = (w = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? w = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? w = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? w = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? w = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (w = s(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (n.osversion = w);
					var E = !n.windows && w.split(".")[0];
					return y || c || "ipad" == r || a && (3 == E || E >= 4 && !O) || n.silk ? n.tablet = e : (O || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = n(e, (function(e) {
							var s = t - o(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, n) {
					var a = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, n) {
				return n(e, (function(e, n, r) {
					s = o ? (o = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), o(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ue
			}));
			var o = s("./node_modules/react/index.js");

			function n(e) {
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

			function m(e) {
				return n(l(e)).left + a(e).scrollLeft
			}

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function u(e) {
				var t = p(e),
					s = t.overflow,
					o = t.overflowX,
					n = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(s + n + o)
			}

			function f(e, t, s) {
				void 0 === s && (s = !1);
				var o, i, p = l(t),
					f = n(e),
					b = c(t),
					x = {
						scrollLeft: 0,
						scrollTop: 0
					},
					h = {
						x: 0,
						y: 0
					};
				return (b || !b && !s) && (("body" !== d(t) || u(p)) && (x = (o = t) !== r(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((h = n(t)).x += t.clientLeft, h.y += t.clientTop) : p && (h.x = m(p))), {
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
				var s = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && u(t) ? t : e(x(t))
					}(e),
					o = "body" === d(s),
					n = r(s),
					a = o ? [n].concat(n.visualViewport || [], u(s) ? s : []) : s,
					i = t.concat(a);
				return o ? i : i.concat(h(x(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = r(e), s = g(e); s && v(s) && "static" === p(s).position;) s = g(s);
				return s && "body" === d(s) && "static" === p(s).position ? t : s || function(e) {
					for (var t = x(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var s = p(t);
						if ("none" !== s.transform || "none" !== s.perspective || "auto" !== s.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				j = "bottom",
				w = "right",
				E = "left",
				P = "auto",
				_ = [O, j, w, E],
				k = "start",
				C = "end",
				N = "clippingParents",
				S = "viewport",
				T = "popper",
				L = "reference",
				M = _.reduce((function(e, t) {
					return e.concat([t + "-" + k, t + "-" + C])
				}), []),
				I = [].concat(_, [P]).reduce((function(e, t) {
					return e.concat([t, t + "-" + k, t + "-" + C])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					s = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					s.has(e.name) || function e(n) {
						s.add(n.name), [].concat(n.requires || [], n.requiresIfExists || []).forEach((function(o) {
							if (!s.has(o)) {
								var n = t.get(o);
								n && e(n)
							}
						})), o.push(n)
					}(e)
				})), o
			}
			var D = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function R() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function W(e) {
				void 0 === e && (e = {});
				var t = e,
					s = t.defaultModifiers,
					o = void 0 === s ? [] : s,
					n = t.defaultOptions,
					r = void 0 === n ? D : n;
				return function(e, t, s) {
					void 0 === s && (s = r);
					var n, a, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, D), r),
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
						m = {
							state: c,
							setOptions: function(s) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), s), c.scrollParents = {
									reference: i(e) ? h(e) : e.contextElement ? h(e.contextElement) : [],
									popper: h(t)
								};
								var n = function(e) {
									var t = B(e);
									return A.reduce((function(e, s) {
										return e.concat(t.filter((function(e) {
											return e.phase === s
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var s = e[t.name];
										return e[t.name] = s ? Object.assign(Object.assign(Object.assign({}, s), t), {}, {
											options: Object.assign(Object.assign({}, s.options), t.options),
											data: Object.assign(Object.assign({}, s.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(o, c.options.modifiers)));
								return c.orderedModifiers = n.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										s = e.options,
										o = void 0 === s ? {} : s,
										n = e.effect;
									if ("function" == typeof n) {
										var r = n({
											state: c,
											name: t,
											instance: m,
											options: o
										});
										d.push(r || function() {})
									}
								})), m.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										s = e.popper;
									if (R(t, s)) {
										c.rects = {
											reference: f(t, y(s), "fixed" === c.options.strategy),
											popper: b(s)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < c.orderedModifiers.length; o++)
											if (!0 !== c.reset) {
												var n = c.orderedModifiers[o],
													r = n.fn,
													a = n.options,
													i = void 0 === a ? {} : a,
													d = n.name;
												"function" == typeof r && (c = r({
													state: c,
													options: i,
													name: d,
													instance: m
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (n = function() {
								return new Promise((function(e) {
									m.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(n())
									}))
								}))), a
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!R(e, t)) return m;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return m.setOptions(s).then((function(e) {
						!l && s.onFirstUpdate && s.onFirstUpdate(e)
					})), m
				}
			}
			var F = {
				passive: !0
			};

			function U(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function G(e) {
				var t, s = e.reference,
					o = e.element,
					n = e.placement,
					r = n ? U(n) : null,
					a = n ? H(n) : null,
					i = s.x + s.width / 2 - o.width / 2,
					c = s.y + s.height / 2 - o.height / 2;
				switch (r) {
					case O:
						t = {
							x: i,
							y: s.y - o.height
						};
						break;
					case j:
						t = {
							x: i,
							y: s.y + s.height
						};
						break;
					case w:
						t = {
							x: s.x + s.width,
							y: c
						};
						break;
					case E:
						t = {
							x: s.x - o.width,
							y: c
						};
						break;
					default:
						t = {
							x: s.x,
							y: s.y
						}
				}
				var d = r ? V(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case k:
							t[d] = Math.floor(t[d]) - Math.floor(s[l] / 2 - o[l] / 2);
							break;
						case C:
							t[d] = Math.floor(t[d]) + Math.ceil(s[l] / 2 - o[l] / 2)
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

			function Z(e) {
				var t, s = e.popper,
					o = e.popperRect,
					n = e.placement,
					a = e.offsets,
					i = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					m = function(e) {
						var t = e.x,
							s = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(s * o) / o || 0
						}
					}(a),
					p = m.x,
					u = m.y,
					f = a.hasOwnProperty("x"),
					b = a.hasOwnProperty("y"),
					x = E,
					h = O,
					v = window;
				if (d) {
					var g = y(s);
					g === r(s) && (g = l(s)), n === O && (h = j, u -= g.clientHeight - o.height, u *= c ? 1 : -1), n === E && (x = w, p -= g.clientWidth - o.width, p *= c ? 1 : -1)
				}
				var P, _ = Object.assign({
					position: i
				}, d && z);
				return c ? Object.assign(Object.assign({}, _), {}, ((P = {})[h] = b ? "0" : "", P[x] = f ? "0" : "", P.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + u + "px)" : "translate3d(" + p + "px, " + u + "px, 0)", P)) : Object.assign(Object.assign({}, _), {}, ((t = {})[h] = b ? u + "px" : "", t[x] = f ? p + "px" : "", t.transform = "", t))
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
			var q = {
				start: "end",
				end: "start"
			};

			function K(e) {
				return e.replace(/start|end/g, (function(e) {
					return q[e]
				}))
			}

			function Y(e, t) {
				var s = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (s) {
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
				return t === S ? Q(function(e) {
					var t = r(e),
						s = l(e),
						o = t.visualViewport,
						n = s.clientWidth,
						a = s.clientHeight,
						i = 0,
						c = 0;
					return o && (n = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, c = o.offsetTop)), {
						width: n,
						height: a,
						x: i + m(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = n(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						s = a(e),
						o = e.ownerDocument.body,
						n = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						i = -s.scrollLeft + m(e),
						c = -s.scrollTop;
					return "rtl" === p(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - n), {
						width: n,
						height: r,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, s) {
				var o = "clippingParents" === t ? function(e) {
						var t = h(e),
							s = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return i(s) ? t.filter((function(e) {
							return i(e) && Y(e, s)
						})) : []
					}(e) : [].concat(t),
					n = [].concat(o, [s]),
					r = n[0],
					a = n.reduce((function(t, s) {
						var o = $(e, s);
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

			function se(e, t) {
				return t.reduce((function(t, s) {
					return t[s] = e, t
				}), {})
			}

			function oe(e, t) {
				void 0 === t && (t = {});
				var s = t,
					o = s.placement,
					r = void 0 === o ? e.placement : o,
					a = s.boundary,
					c = void 0 === a ? N : a,
					d = s.rootBoundary,
					m = void 0 === d ? S : d,
					p = s.elementContext,
					u = void 0 === p ? T : p,
					f = s.altBoundary,
					b = void 0 !== f && f,
					x = s.padding,
					h = void 0 === x ? 0 : x,
					v = te("number" != typeof h ? h : se(h, _)),
					g = u === T ? L : T,
					y = e.elements.reference,
					E = e.rects.popper,
					P = e.elements[b ? g : u],
					k = ee(i(P) ? P : P.contextElement || l(e.elements.popper), c, m),
					C = n(y),
					M = G({
						reference: C,
						element: E,
						strategy: "absolute",
						placement: r
					}),
					I = Q(Object.assign(Object.assign({}, E), M)),
					A = u === T ? I : C,
					B = {
						top: k.top - A.top + v.top,
						bottom: A.bottom - k.bottom + v.bottom,
						left: k.left - A.left + v.left,
						right: A.right - k.right + v.right
					},
					D = e.modifiersData.offset;
				if (u === T && D) {
					var R = D[r];
					Object.keys(B).forEach((function(e) {
						var t = [w, j].indexOf(e) >= 0 ? 1 : -1,
							s = [O, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[s] * t
					}))
				}
				return B
			}

			function ne(e, t, s) {
				return Math.max(e, Math.min(t, s))
			}

			function re(e, t, s) {
				return void 0 === s && (s = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - s.y,
					right: e.right - t.width + s.x,
					bottom: e.bottom - t.height + s.y,
					left: e.left - t.width - s.x
				}
			}

			function ae(e) {
				return [O, w, j, E].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ie = W({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								s = e.instance,
								o = e.options,
								n = o.scroll,
								a = void 0 === n || n,
								i = o.resize,
								c = void 0 === i || i,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", s.update, F)
								})), c && d.addEventListener("resize", s.update, F),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", s.update, F)
									})), c && d.removeEventListener("resize", s.update, F)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								s = e.name;
							t.modifiersData[s] = G({
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
								s = e.options,
								o = s.gpuAcceleration,
								n = void 0 === o || o,
								r = s.adaptive,
								a = void 0 === r || r,
								i = {
									placement: U(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: n
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), Z(Object.assign(Object.assign({}, i), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), Z(Object.assign(Object.assign({}, i), {}, {
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
								var s = t.styles[e] || {},
									o = t.attributes[e] || {},
									n = t.elements[e];
								c(n) && d(n) && (Object.assign(n.style, s), Object.keys(o).forEach((function(e) {
									var t = o[e];
									!1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								s = {
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
							return Object.assign(t.elements.popper.style, s.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var o = t.elements[e],
											n = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(o) && d(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
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
								s = e.options,
								o = e.name,
								n = s.offset,
								r = void 0 === n ? [0, 0] : n,
								a = I.reduce((function(e, s) {
									return e[s] = function(e, t, s) {
										var o = U(e),
											n = [E, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof s ? s(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : s,
											a = r[0],
											i = r[1];
										return a = a || 0, i = (i || 0) * n, [E, w].indexOf(o) >= 0 ? {
											x: i,
											y: a
										} : {
											x: a,
											y: i
										}
									}(s, t.rects, r), e
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
								s = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (var n = s.mainAxis, r = void 0 === n || n, a = s.altAxis, i = void 0 === a || a, c = s.fallbackPlacements, d = s.padding, l = s.boundary, m = s.rootBoundary, p = s.altBoundary, u = s.flipVariations, f = void 0 === u || u, b = s.allowedAutoPlacements, x = t.options.placement, h = U(x), v = c || (h === x || !f ? [X(x)] : function(e) {
										if (U(e) === P) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(x)), g = [x].concat(v).reduce((function(e, s) {
										return e.concat(U(s) === P ? function(e, t) {
											void 0 === t && (t = {});
											var s = t,
												o = s.placement,
												n = s.boundary,
												r = s.rootBoundary,
												a = s.padding,
												i = s.flipVariations,
												c = s.allowedAutoPlacements,
												d = void 0 === c ? I : c,
												l = H(o),
												m = (l ? i ? M : M.filter((function(e) {
													return H(e) === l
												})) : _).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, s) {
													return t[s] = oe(e, {
														placement: s,
														boundary: n,
														rootBoundary: r,
														padding: a
													})[U(s)], t
												}), {});
											return Object.keys(m).sort((function(e, t) {
												return m[e] - m[t]
											}))
										}(t, {
											placement: s,
											boundary: l,
											rootBoundary: m,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : s)
									}), []), y = t.rects.reference, C = t.rects.popper, N = new Map, S = !0, T = g[0], L = 0; L < g.length; L++) {
									var A = g[L],
										B = U(A),
										D = H(A) === k,
										R = [O, j].indexOf(B) >= 0,
										W = R ? "width" : "height",
										F = oe(t, {
											placement: A,
											boundary: l,
											rootBoundary: m,
											altBoundary: p,
											padding: d
										}),
										V = R ? D ? w : E : D ? j : O;
									y[W] > C[W] && (V = X(V));
									var G = X(V),
										z = [];
									if (r && z.push(F[B] <= 0), i && z.push(F[V] <= 0, F[G] <= 0), z.every((function(e) {
											return e
										}))) {
										T = A, S = !1;
										break
									}
									N.set(A, z)
								}
								if (S)
									for (var Z = function(e) {
											var t = g.find((function(t) {
												var s = N.get(t);
												if (s) return s.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === Z(J)) break
									}
								t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0)
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
								s = e.options,
								o = e.name,
								n = s.mainAxis,
								r = void 0 === n || n,
								a = s.altAxis,
								i = void 0 !== a && a,
								c = s.boundary,
								d = s.rootBoundary,
								l = s.altBoundary,
								m = s.padding,
								p = s.tether,
								u = void 0 === p || p,
								f = s.tetherOffset,
								x = void 0 === f ? 0 : f,
								h = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: m,
									altBoundary: l
								}),
								v = U(t.placement),
								g = H(t.placement),
								P = !g,
								_ = V(v),
								C = "x" === _ ? "y" : "x",
								N = t.modifiersData.popperOffsets,
								S = t.rects.reference,
								T = t.rects.popper,
								L = "function" == typeof x ? x(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : x,
								M = {
									x: 0,
									y: 0
								};
							if (N) {
								if (r) {
									var I = "y" === _ ? O : E,
										A = "y" === _ ? j : w,
										B = "y" === _ ? "height" : "width",
										D = N[_],
										R = N[_] + h[I],
										W = N[_] - h[A],
										F = u ? -T[B] / 2 : 0,
										G = g === k ? S[B] : T[B],
										z = g === k ? -T[B] : -S[B],
										Z = t.elements.arrow,
										J = u && Z ? b(Z) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										q = X[I],
										K = X[A],
										Y = ne(0, S[B], J[B]),
										Q = P ? S[B] / 2 - F - Y - q - L : G - Y - q - L,
										$ = P ? -S[B] / 2 + F + Y + K + L : z + Y + K + L,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === _ ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
										re = N[_] + Q - se - te,
										ae = N[_] + $ - se,
										ie = ne(u ? Math.min(R, re) : R, D, u ? Math.max(W, ae) : W);
									N[_] = ie, M[_] = ie - D
								}
								if (i) {
									var ce = "x" === _ ? O : E,
										de = "x" === _ ? j : w,
										le = N[C],
										me = ne(le + h[ce], le, le - h[de]);
									N[C] = me, M[C] = me - le
								}
								t.modifiersData[o] = M
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, s = e.state,
								o = e.name,
								n = s.elements.arrow,
								r = s.modifiersData.popperOffsets,
								a = U(s.placement),
								i = V(a),
								c = [E, w].indexOf(a) >= 0 ? "height" : "width";
							if (n && r) {
								var d = s.modifiersData[o + "#persistent"].padding,
									l = b(n),
									m = "y" === i ? O : E,
									p = "y" === i ? j : w,
									u = s.rects.reference[c] + s.rects.reference[i] - r[i] - s.rects.popper[c],
									f = r[i] - s.rects.reference[i],
									x = y(n),
									h = x ? "y" === i ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
									v = u / 2 - f / 2,
									g = d[m],
									P = h - l[c] - d[p],
									_ = h / 2 - l[c] / 2 + v,
									k = ne(g, _, P),
									C = i;
								s.modifiersData[o] = ((t = {})[C] = k, t.centerOffset = k - _, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								s = e.options,
								o = e.name,
								n = s.element,
								r = void 0 === n ? "[data-popper-arrow]" : n,
								a = s.padding,
								i = void 0 === a ? 0 : a;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof i ? i : se(i, _))
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
								s = e.name,
								o = t.rects.reference,
								n = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								a = oe(t, {
									elementContext: "reference"
								}),
								i = oe(t, {
									altBoundary: !0
								}),
								c = re(a, o),
								d = re(i, n, r),
								l = ae(c),
								m = ae(d);
							t.modifiersData[s] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: m
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": m
							})
						}
					}]
				}),
				ce = s("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = s.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var s = t[0],
							o = t[1];
						return e[s] = o, e
					}), {})
				},
				me = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				pe = [],
				ue = function(e, t, s) {
					void 0 === s && (s = {});
					var n = o.useRef(null),
						r = {
							onFirstUpdate: s.onFirstUpdate,
							placement: s.placement || "bottom",
							strategy: s.strategy || "absolute",
							modifiers: s.modifiers || pe
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
										s = Object.keys(t.elements);
									c({
										styles: le(s.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(s.map((function(e) {
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
							return de()(n.current, e) ? n.current || e : (n.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
						m = o.useRef();
					return me((function() {
						m.current && m.current.setOptions(l)
					}), [l]), me((function() {
						if (null != e && null != t) {
							var o = (s.createPopper || ie)(e, t, l);
							return m.current = o,
								function() {
									o.destroy(), m.current = null
								}
						}
					}), [e, t, s.createPopper]), {
						state: m.current ? m.current.state : null,
						styles: i.styles,
						attributes: i.attributes,
						update: m.current ? m.current.update : null,
						forceUpdate: m.current ? m.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var s = "undefined" != typeof Element,
				o = "function" == typeof Map,
				n = "function" == typeof Set,
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
							if (n && t instanceof Set && a instanceof Set) {
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
							if (s && t instanceof Element) return !1;
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
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
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
				ctaExperiment: "_3xMykgG1y_Ln8tQs4ciV4i",
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
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Ae
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/postFlair.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				L = s("./src/reddit/components/CommentsLink/index.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				D = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				G = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostBadges/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				K = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Y = s("./src/reddit/components/PostMedia/index.tsx"),
				Q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopMeta/index.tsx"),
				se = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				oe = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = s("./src/reddit/components/SubredditIcon/index.tsx"),
				re = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/controls/Checkbox/index.tsx"),
				le = s("./src/reddit/controls/MetaData/index.tsx"),
				me = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				pe = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				be = s("./src/reddit/hooks/useIsOverlay.ts"),
				xe = s("./src/reddit/hooks/useTheme.ts"),
				he = s("./src/reddit/hooks/useUserContext.ts"),
				ve = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ge = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ye = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				Oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				je = s.n(Oe),
				we = s("./src/reddit/selectors/experiments/chat.ts"),
				Ee = s("./src/redditGQL/types.ts"),
				Pe = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				_e = s("./src/reddit/components/CompactPost/index.m.less"),
				ke = s.n(_e);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ne = e => {
					let {
						isCompact: t,
						...s
					} = e;
					return r.a.createElement(A.a, Ce({
						className: Object(l.a)(ke.a.responsiveExpandoButton, {
							[ke.a.mHideAboveSmallTablets]: !!t,
							[ke.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				Se = () => Object(c.c)({
					activeModalId: E.a,
					crosspost: k.d,
					flairStyleTemplate: ie.Y,
					isActive: k.j,
					isExpanded: k.m,
					layout: ie.U,
					moderatorPermissions: P.m,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: _.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(P.i)(e, s.id)
					},
					showCTAExperimentDesign: ye.a,
					isLiveChatUserCountEnabled: we.e
				}),
				Te = (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(j.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const o = t === y.a.upvoted ? Object(O.ib)(s) : Object(O.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(O.eb)(s)),
						onOpenReportsDropdown: t => e(Object(w.h)({
							tooltipId: t
						}))
					}
				};
			class Le extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: n,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: m,
						isCheckboxSelected: p = !1,
						isCommentsPage: y,
						isCommentPermalink: O,
						isExpanded: j,
						isGalleryTileLayoutDefault: w,
						isModWithUserNotesPermissions: E,
						isOverlay: P,
						isProfilePostListing: _,
						inSubredditOrProfile: k = !1,
						layout: A,
						moderatorPermissions: Y,
						modModeEnabled: oe,
						onClickPost: ne,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: le,
						post: be,
						subredditOrProfile: xe,
						userIsOp: he,
						hideModTools: ye,
						scrollerItemRef: Oe,
						showBulkActionCheckbox: we,
						showEditFlair: _e,
						toggleCheckbox: Ce,
						tooltipType: Se,
						sendEvent: Te,
						shouldShowGalleryTileOption: Le,
						showCTAExperimentDesign: Ie,
						isLiveChatUserCountEnabled: Ae
					} = this.props, De = !!be.media && be.media.type === h.o.RTJSON, Re = he && De, We = Object(q.b)(be.id, P), Fe = Object(ue.a)(Y), Ue = Object(me.a)(Y), He = Object(pe.a)(Y), Ve = `-mod-actions-menu-${be.id}`, Ge = `voting-arrows-${be.id}`, ze = !!n && Object(g.e)(n) === be.author, Ze = Object(U.a)(be), Je = Object(V.c)(be), Xe = Object(D.a)("View--Reports", be.id, Se), qe = Object(V.a)(be), Ke = !(P || y || O), Ye = e => Te(Object(x.n)(be.id, e)), Qe = Object(d.t)(be, m), $e = Object(v.r)(be);
					return r.a.createElement(X.b, {
						className: Object(l.a)(je.a.compactPostStyles, ke.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: P,
						style: {
							...Object(b.d)(this.props),
							...Object(b.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: ne,
						eventFactory: a
					}, r.a.createElement("div", {
						className: ke.a.compactWrapper
					}, r.a.createElement("div", {
						className: ke.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ke.a.leftRail,
						style: {
							borderColor: Object(K.c)({
								isRemoved: !!be.bannedBy,
								isReported: Object(f.a)(be),
								isSponsored: be.isSponsored,
								theme: this.props.theme
							})
						}
					}, we && r.a.createElement(de.a, {
						className: ke.a.bulkActionCheckbox,
						isCheckboxSelected: p,
						toggleCheckbox: Ce
					}), r.a.createElement(re.a, {
						className: ke.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: c
					}), r.a.createElement(M.a, {
						className: ke.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: c,
						upvoteTooltipId: Ge
					}))), r.a.createElement(Z.a, {
						className: Object(l.a)(ke.a.content, {
							[ke.a.isEvent]: Object(fe.a)(be)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(I.a, {
						isCompactMode: !0,
						post: be
					}), r.a.createElement("div", {
						className: ke.a.compactPostRow
					}, !ye && r.a.createElement(Ne, {
						crosspost: o,
						isCommentsPage: y,
						isCompact: !1,
						isExpanded: j,
						post: be,
						useMediaIcons: !0
					}), !k && !be.isSponsored && r.a.createElement(R.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), r.a.createElement("div", {
						className: ke.a.topLine,
						"data-click-id": "body"
					}, $e && r.a.createElement(z.a, {
						content: be.recommendationContext.content,
						layout: u.g.Compact,
						post: be
					}), r.a.createElement(ee.c, {
						post: be,
						poll: le,
						size: ee.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Be(be, xe), r.a.createElement(te.g, {
						className: ke.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: E,
						post: be,
						showSub: !!xe && !k && !be.isSponsored,
						subredditOrProfile: xe
					}), r.a.createElement(J.a, {
						className: ke.a.postBadges,
						displayText: xe ? xe.displayText : null,
						inSubredditOrProfile: k,
						post: be
					}), r.a.createElement(S.a, {
						thing: be,
						tooltipType: P ? te.f.Lightbox : void 0
					}), be.discussionType === Ee.n.Chat && r.a.createElement(Pe.a, {
						postId: be.id
					})), Ke && !Ae && r.a.createElement("div", null, r.a.createElement(T.a, {
						className: ke.a.liveDiscussionIcon,
						postId: be.postId
					})), !be.isSurveyAd && r.a.createElement("div", {
						className: ke.a.flatList
					}, r.a.createElement(L.a, {
						className: ke.a.commentsLink,
						hasModPostPerms: Fe,
						isCommentsPage: y,
						isCommentPermalink: O,
						isOverlay: P,
						postId: be.id,
						modModeEnabled: oe,
						numComments: be.numComments,
						type: u.g.Compact,
						impressionId: be.impressionId,
						isSponsored: be.isSponsored
					}), r.a.createElement(G.a, {
						className: ke.a.modToolsFlatlist,
						isOverlay: !1,
						layout: A,
						modModeEnabled: oe,
						post: be,
						sendEvent: Te,
						showIconsOnly: !0
					}), Fe && r.a.createElement(W.a, {
						dropdownId: Ve,
						onClick: () => Ye("post_mod_action_menu")
					}, r.a.createElement(B.b, null), r.a.createElement(Q.a, {
						canEditFlair: Ue && _e,
						hasModPostPerms: Fe,
						hasModFullPerms: He,
						isOverlay: !1,
						isPostAuthor: ze,
						modModeEnabled: oe,
						post: be,
						tooltipId: Ve
					})), Fe && Je && !oe && r.a.createElement(se.c, {
						text: `${qe}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Xe), Ye("post_report_menu")
						},
						id: Xe
					}, r.a.createElement(ae.a, {
						model: be,
						onIgnoreReports: () => {
							ce(), Ye(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Xe
					}), be.ignoreReports ? r.a.createElement(ve.a, null) : r.a.createElement(ge.a, null)), r.a.createElement($.a, {
						currentProfileName: s,
						isCommentsPage: y,
						isOverlay: !1,
						isProfilePostListing: _,
						isRecommendationPost: !!be.recommendationContext,
						layout: A,
						permalink: be.permalink,
						sendEvent: Te,
						showEditPost: Re,
						showEditFlair: _e,
						dropdownId: `${be.id}-overflow-menu`,
						useFlatlistBreakpoints: Object($.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1,
							mute: !1,
							promotePost: !1
						})
					}), !ye && r.a.createElement(Ne, {
						crosspost: o,
						isCommentsPage: y,
						isCompact: !0,
						isExpanded: j,
						post: be,
						useMediaIcons: !0
					}))), Object(d.v)(be, m) && r.a.createElement(C.a, {
						className: Object(l.a)(ke.a.adLinkWrapper, {
							[ke.a.ctaExperiment]: Ie
						}),
						ctaExperimentDesign: Ie && "compact"
					}, r.a.createElement(N.a, {
						post: be,
						adLinkContent: Qe,
						isCompact: !0,
						ctaExperimentDesign: Ie && "compact"
					})), oe && Fe && Ze && r.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, r.a.createElement(F.a, {
						thing: be
					})), oe && Fe && Je && r.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, r.a.createElement(H.a, {
						onIgnoreReports: ce,
						reportable: be
					})), r.a.createElement(R.d, null))), j && r.a.createElement(Me, {
						post: be,
						scrollerItemRef: Oe,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Le,
						isGalleryTileLayoutDefault: w
					}), e === We && r.a.createElement(q.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: We,
						onFlairChanged: ie
					}))
				}
			}
			const Me = e => r.a.createElement(Z.a, {
					className: Object(l.a)(e.className, ke.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ke.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, s, o) => r.a.createElement(Y.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				Ae = e => r.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(ne.b, {
					className: ke.a.subredditIcon,
					subredditOrProfile: e
				})),
				Be = (e, t) => r.a.createElement("div", {
					className: ke.a.responsiveMeta
				}, r.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(le.c, null), Object(le.d)(e.numComments), r.a.createElement(le.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(le.a, null, t.displayText)), e.isSponsored && [r.a.createElement(oe.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), r.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(le.a, null, " ", o.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), r.a.createElement(te.d, {
					post: e,
					isDeleted: e.author === m.F
				}));
			t.default = Object(ce.b)(r.a.memo((function(e) {
				const t = Object(he.a)(),
					s = Object(n.useMemo)(() => Se(), []),
					o = Object(a.e)(o => s(o, {
						...e,
						...t
					})),
					i = Object(a.d)(),
					c = Te(i, {
						...e,
						...t
					});
				return r.a.createElement(Le, Ce({}, e, t, o, c, {
					onFlairChanged: t => {
						let {
							previewFlair: s,
							selectedTemplateId: o
						} = t;
						return c.dispatchFlairChanged({
							post: e.post,
							previewFlair: s,
							selectedTemplateId: o
						})
					},
					sendEvent: Object(p.b)(),
					isOverlay: Object(be.a)(),
					theme: Object(xe.a)()
				}))
			})))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return P
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(y),
				j = s("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				P = 1,
				_ = j.a.div("Container", O.a),
				k = j.a.div("PostMetaWrapper", O.a),
				C = j.a.wrapped(u.c, "PostTitle", O.a),
				N = j.a.div("FlatList", O.a),
				S = j.a.div("FlatItem", O.a),
				T = j.a.span("FlatListDotSpacer", O.a),
				L = j.a.wrapped(_, "LinkContainer", O.a),
				M = j.a.div("Content", O.a),
				I = j.a.div("ThumbnailContainer", O.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Sb.TOPIC),
					shouldOpenPostInNewTab: g.lb
				}),
				B = Object(a.b)(A);
			t.c = Object(h.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(M, null, r.a.createElement(k, null, r.a.createElement(p.a, c)), D(a), a.source && r.a.createElement(f.a, {
					post: a
				}), W(e)), U(e)) : r.a.createElement(_, {
					className: d
				}, r.a.createElement(k, null, r.a.createElement(p.a, c)), D(a), R(e), W(e))
			}));
			const D = e => r.a.createElement(C, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, w({}, o, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				W = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(S, null, F(e)))
				},
				F = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(I, null, r.a.createElement(b.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(a.G)(t) ? n.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, n.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, n.a.createElement("div", {
					className: "my-md leading-5 text-neutral-content"
				}, n.a.createElement("p", {
					className: "text-[16px] max-w-[260px]"
				}, c._("To view this interactive post, you'll need to open it in a new window.", null, {
					hk: "27Ub4M"
				}))), n.a.createElement(r.a, {
					className: "m-auto",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, n.a.createElement(n.a.Fragment, null, n.a.createElement(i.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = s("./src/reddit/components/ExpandoButton/index.m.less"),
				O = s.n(y);
			const j = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(p.b)(t.permalink), t.id))
				})),
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(c.a)(O.a.icon, O.a.hideOnHover);
					if (t) return r.a.createElement(f.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(f.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(f.a, {
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
			t.a = j(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: y,
					useMediaIcons: j
				} = e, E = s || b, P = Object(a.e)(h.b), _ = Object(a.e)(h.c), k = t => {
					(P || _) && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, C = E.media, N = Object(x.q)(b), S = n && !!s;
				return C && !N && !(("rtjson" === C.type || "text" === C.type || "liveaudio" === C.type) && !Object(u.a)(E)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": g.a.MEDIA,
					onClick: y
				}, p ? r.a.createElement(f.a, {
					name: "collapse",
					className: O.a.icon
				}) : j ? r.a.createElement(r.a.Fragment, null, w(E.media && E.media.type, S, b), r.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(O.a.icon, O.a.showOnHover)
				})) : r.a.createElement(f.a, {
					name: "expand",
					className: O.a.icon
				})) : E.source && E.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(O.a.icon, O.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(E.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(f.a, {
					name: "text_post",
					className: O.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? n.fbt._("{userCount} here now", [n.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : n.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const p = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, n.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var u = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				f = s.n(u);
			const b = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(f.a.liveParticipation, s)
				}, a.a.createElement(p, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(x.e)(e => Object(h.a)(e, t));
				return Object(x.e)(v.e) ? a.a.createElement(b, {
					userCount: o,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : n.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: u,
					overrideBackgroundColor: f,
					...b
				} = e;
				return n.a.createElement("div", p({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: f || Object(i.c)(o, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ne
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/chooseVariant/index.ts"),
				b = s("./node_modules/reselect/es/index.js");
			const x = Object(b.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: u.zc
			}), e => e === u.Rd);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(w);
			const P = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(l.e)(e => Object(O.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(j.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(g.a, {
					className: Object(v.a)(E.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(y.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: E.a.subredditName
				}, r.displayText)) : null
			};
			var _ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/connectors/PostViewable/index.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/contexts/Post/index.tsx"),
				S = s("./src/reddit/helpers/path/index.ts"),
				T = s("./src/reddit/hooks/useClickSourceData.ts"),
				L = s("./src/reddit/hooks/useIsOverlay.ts"),
				M = s("./src/reddit/hooks/usePageLayer.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				B = s.n(A);
			const D = e => {
				let {
					post: t
				} = e;
				const s = `${Object(I.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(I.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: B.a.postInformation
				}, n.a.createElement("h5", {
					className: B.a.title
				}, t.title), n.a.createElement("div", {
					className: B.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var R = s("./src/lib/isUrl/index.ts"),
				W = s("./src/reddit/actions/profile/index.ts"),
				F = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				H = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				G = s("./src/reddit/selectors/profile.ts"),
				z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				Z = s.n(z);
			const J = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(G.l)(t.author)),
					m = Object(o.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					p = Object(o.useMemo)(() => Object(R.a)(m), [m]);
				Object(o.useEffect)(() => {
					p || c(Object(W.d)(t.author))
				}, [c, t.author, p]);
				const u = !p && Object(V.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					f = Object(H.c)(null === (r = null == d ? void 0 : d.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: Z.a.media
				}, p ? n.a.createElement(F.b, {
					post: t,
					url: m,
					className: Z.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: Z.a.mediaThumbnailContainer
				}) : null, !p && (null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url) && n.a.createElement("div", {
					className: Z.a.userIconContainer
				}, n.a.createElement(U.a, {
					className: Object(v.a)({
						[Z.a.snoovatarUserIcon]: u,
						[Z.a.defaultUserIcon]: f
					}, Z.a.userIcon),
					iconUrl: null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url,
					userName: d.name,
					wrapperClassName: Z.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(X);
			const K = Object(k.a)(null);
			var Y = Object(N.b)(K(e => {
					let {
						post: t
					} = e;
					const s = Object(M.a)(),
						o = Object(L.a)(),
						r = Object(T.a)(),
						a = Object(C.x)(s) && !o;
					return n.a.createElement(g.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(S.b)(t.permalink) : Object(_.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: q.a.container
					}, n.a.createElement(D, {
						post: t
					}), n.a.createElement(J, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(Q);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(Y, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const oe = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(x) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(m.y)(t, p.a.Click))
				}, n.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(P, {
					postId: o,
					className: se.a.communityLink
				}))
			};

			function ne(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(c.B)(t) && Object(c.A)(t) ? n.a.createElement(oe, {
					post: t
				}) : Object(i.G)(t) ? n.a.createElement(d.a, {
					post: t
				}) : n.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/components/PostMeta/index.m.less"),
				w = s.n(j);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: j,
					isOverlay: E,
					isTopicPage: P,
					post: _,
					shouldShowSubscribeButton: k,
					subredditOrProfile: C,
					tooltipType: N
				} = e, S = !!P, T = Object(y.a)(), L = Object(r.e)(e => !!C && Object(a.i)(e, C.id)), M = !(!C || !Object(O.i)(C));
				return n.a.createElement("div", {
					className: w.a.metaContainer
				}, !o && !_.isSponsored && C && n.a.createElement(d.a, {
					postId: _.id,
					subredditName: C.name,
					isProfile: M
				}, n.a.createElement(f.a, {
					className: w.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: C.url,
						state: T
					}
				}, C.displayText)), C && C.isQuarantined && n.a.createElement(u.a, null), !o && !_.isSponsored && C && k && !j && n.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(g.n)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(O.i)(C) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: _.id,
					size: h.d.XXS,
					small: !0
				}), !o && !_.isSponsored && n.a.createElement(v.b, null), !o && !_.isSponsored && n.a.createElement(l.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), n.a.createElement(p.g, {
					className: w.a.postTopMeta,
					flairStyleTemplate: t,
					post: _,
					tooltipType: N,
					isModWithUserNotesPermissions: L
				}), n.a.createElement(m.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!o,
					post: _,
					tooltipType: N
				}), !S && n.a.createElement(i.a, {
					hideCta: s,
					thing: _,
					tooltipType: E ? p.f.Lightbox : void 0
				}), L && n.a.createElement(c.a, {
					postOrComment: _,
					className: w.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				u = s.n(p);
			const f = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, o, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									n && o(s, n), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(o.f)(Object(m.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(o.f)(Object(m.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", u.a);
			t.a = f(Object(i.a)(b))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return u
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				p = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: n,
						...a
					} = e;
					const c = Object(i.b)(s),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, m)
				},
				u = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return h
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.f)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.f)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				f = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.kg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(o.a)(a, e => e === n.eg)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.eb39997fa4ed9ee6fac5.js.map