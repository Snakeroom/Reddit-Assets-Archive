// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.7e7be66c54d616df087c.js
// Retrieved at 12/6/2021, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var o, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						v = !i && !m && !u && !p && /linux/i.test(t),
						b = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !w && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, b ? (o.msedge = e, o.version = b) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: b
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, g && (o.version = g)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (o.version = g)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : x ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var O = "";
					o.windows ? O = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (o.osversion = O);
					var j = !o.windows && O.split(".")[0];
					return w || c || "ipad" == r || i && (3 == j || j >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = o(e, (function(e) {
							var s = t - n(e);
							return o((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, n, o) {
					var i = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, o) {
				return o(e, (function(e, o, r) {
					s = n ? (n = !1, e) : t(s, e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = o(s)) == s ? s : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return pe
			}));
			var n = s("./node_modules/react/index.js");

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

			function m(e) {
				return o(l(e)).left + i(e).scrollLeft
			}

			function u(e) {
				return r(e).getComputedStyle(e)
			}

			function p(e) {
				var t = u(e),
					s = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(s + o + n)
			}

			function f(e, t, s) {
				void 0 === s && (s = !1);
				var n, a, u = l(t),
					f = o(e),
					x = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (x || !x && !s) && (("body" !== d(t) || p(u)) && (h = (n = t) !== r(n) && c(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : i(n)), c(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : u && (v.x = m(u))), {
					x: f.left + h.scrollLeft - v.x,
					y: f.top + h.scrollTop - v.y,
					width: f.width,
					height: f.height
				}
			}

			function x(e) {
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

			function v(e, t) {
				void 0 === t && (t = []);
				var s = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					n = "body" === d(s),
					o = r(s),
					i = n ? [o].concat(o.visualViewport || [], p(s) ? s : []) : s,
					a = t.concat(i);
				return n ? a : a.concat(v(h(i)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== u(e).position ? e.offsetParent : null
			}

			function w(e) {
				for (var t = r(e), s = g(e); s && b(s) && "static" === u(s).position;) s = g(s);
				return s && "body" === d(s) && "static" === u(s).position ? t : s || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var s = u(t);
						if ("none" !== s.transform || "none" !== s.perspective || "auto" !== s.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var y = "top",
				E = "bottom",
				O = "right",
				j = "left",
				k = "auto",
				P = [y, E, O, j],
				C = "start",
				_ = "end",
				N = "clippingParents",
				M = "viewport",
				S = "popper",
				F = "reference",
				T = P.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + _])
				}), []),
				A = [].concat(P, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + _])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function I(e) {
				var t = new Map,
					s = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					s.has(e.name) || function e(o) {
						s.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!s.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var B = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function V() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function W(e) {
				void 0 === e && (e = {});
				var t = e,
					s = t.defaultModifiers,
					n = void 0 === s ? [] : s,
					o = t.defaultOptions,
					r = void 0 === o ? B : o;
				return function(e, t, s) {
					void 0 === s && (s = r);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), r),
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
								u(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), s), c.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = I(e);
									return L.reduce((function(e, s) {
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
								}([].concat(n, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										s = e.options,
										n = void 0 === s ? {} : s,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: c,
											name: t,
											instance: m,
											options: n
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
									if (V(t, s)) {
										c.rects = {
											reference: f(t, w(s), "fixed" === c.options.strategy),
											popper: x(s)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[n],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: m
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									m.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								u(), l = !0
							}
						};
					if (!V(e, t)) return m;

					function u() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return m.setOptions(s).then((function(e) {
						!l && s.onFirstUpdate && s.onFirstUpdate(e)
					})), m
				}
			}
			var R = {
				passive: !0
			};

			function H(e) {
				return e.split("-")[0]
			}

			function D(e) {
				return e.split("-")[1]
			}

			function U(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, s = e.reference,
					n = e.element,
					o = e.placement,
					r = o ? H(o) : null,
					i = o ? D(o) : null,
					a = s.x + s.width / 2 - n.width / 2,
					c = s.y + s.height / 2 - n.height / 2;
				switch (r) {
					case y:
						t = {
							x: a,
							y: s.y - n.height
						};
						break;
					case E:
						t = {
							x: a,
							y: s.y + s.height
						};
						break;
					case O:
						t = {
							x: s.x + s.width,
							y: c
						};
						break;
					case j:
						t = {
							x: s.x - n.width,
							y: c
						};
						break;
					default:
						t = {
							x: s.x,
							y: s.y
						}
				}
				var d = r ? U(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(s[l] / 2 - n[l] / 2);
							break;
						case _:
							t[d] = Math.floor(t[d]) + Math.ceil(s[l] / 2 - n[l] / 2)
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

			function Z(e) {
				var t, s = e.popper,
					n = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					m = function(e) {
						var t = e.x,
							s = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(s * n) / n || 0
						}
					}(i),
					u = m.x,
					p = m.y,
					f = i.hasOwnProperty("x"),
					x = i.hasOwnProperty("y"),
					h = j,
					v = y,
					b = window;
				if (d) {
					var g = w(s);
					g === r(s) && (g = l(s)), o === y && (v = E, p -= g.clientHeight - n.height, p *= c ? 1 : -1), o === j && (h = O, u -= g.clientWidth - n.width, u *= c ? 1 : -1)
				}
				var k, P = Object.assign({
					position: a
				}, d && q);
				return c ? Object.assign(Object.assign({}, P), {}, ((k = {})[v] = x ? "0" : "", k[h] = f ? "0" : "", k.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", k)) : Object.assign(Object.assign({}, P), {}, ((t = {})[v] = x ? p + "px" : "", t[h] = f ? u + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function G(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
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

			function Y(e, t) {
				var s = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (s) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
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
					var t = r(e),
						s = l(e),
						n = t.visualViewport,
						o = s.clientWidth,
						i = s.clientHeight,
						a = 0,
						c = 0;
					return n && (o = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, c = n.offsetTop)), {
						width: o,
						height: i,
						x: a + m(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						s = i(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -s.scrollLeft + m(e),
						c = -s.scrollTop;
					return "rtl" === u(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, s) {
				var n = "clippingParents" === t ? function(e) {
						var t = v(e),
							s = ["absolute", "fixed"].indexOf(u(e).position) >= 0 && c(e) ? w(e) : e;
						return a(s) ? t.filter((function(e) {
							return a(e) && Y(e, s)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [s]),
					r = o[0],
					i = o.reduce((function(t, s) {
						var n = $(e, s);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
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

			function se(e, t) {
				return t.reduce((function(t, s) {
					return t[s] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var s = t,
					n = s.placement,
					r = void 0 === n ? e.placement : n,
					i = s.boundary,
					c = void 0 === i ? N : i,
					d = s.rootBoundary,
					m = void 0 === d ? M : d,
					u = s.elementContext,
					p = void 0 === u ? S : u,
					f = s.altBoundary,
					x = void 0 !== f && f,
					h = s.padding,
					v = void 0 === h ? 0 : h,
					b = te("number" != typeof v ? v : se(v, P)),
					g = p === S ? F : S,
					w = e.elements.reference,
					j = e.rects.popper,
					k = e.elements[x ? g : p],
					C = ee(a(k) ? k : k.contextElement || l(e.elements.popper), c, m),
					_ = o(w),
					T = z({
						reference: _,
						element: j,
						strategy: "absolute",
						placement: r
					}),
					A = Q(Object.assign(Object.assign({}, j), T)),
					L = p === S ? A : _,
					I = {
						top: C.top - L.top + b.top,
						bottom: L.bottom - C.bottom + b.bottom,
						left: C.left - L.left + b.left,
						right: L.right - C.right + b.right
					},
					B = e.modifiersData.offset;
				if (p === S && B) {
					var V = B[r];
					Object.keys(I).forEach((function(e) {
						var t = [O, E].indexOf(e) >= 0 ? 1 : -1,
							s = [y, E].indexOf(e) >= 0 ? "y" : "x";
						I[e] += V[s] * t
					}))
				}
				return I
			}

			function oe(e, t, s) {
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

			function ie(e) {
				return [y, O, E, j].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = W({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								s = e.instance,
								n = e.options,
								o = n.scroll,
								i = void 0 === o || o,
								a = n.resize,
								c = void 0 === a || a,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", s.update, R)
								})), c && d.addEventListener("resize", s.update, R),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", s.update, R)
									})), c && d.removeEventListener("resize", s.update, R)
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
							t.modifiersData[s] = z({
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
								n = s.gpuAcceleration,
								o = void 0 === n || n,
								r = s.adaptive,
								i = void 0 === r || r,
								a = {
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), Z(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), Z(Object.assign(Object.assign({}, a), {}, {
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
									n = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, s), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
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
										var n = t.elements[e],
											o = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && d(n) && (Object.assign(n.style, r), Object.keys(o).forEach((function(e) {
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
								s = e.options,
								n = e.name,
								o = s.offset,
								r = void 0 === o ? [0, 0] : o,
								i = A.reduce((function(e, s) {
									return e[s] = function(e, t, s) {
										var n = H(e),
											o = [j, y].indexOf(n) >= 0 ? -1 : 1,
											r = "function" == typeof s ? s(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : s,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [j, O].indexOf(n) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(s, t.rects, r), e
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
								s = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = s.mainAxis, r = void 0 === o || o, i = s.altAxis, a = void 0 === i || i, c = s.fallbackPlacements, d = s.padding, l = s.boundary, m = s.rootBoundary, u = s.altBoundary, p = s.flipVariations, f = void 0 === p || p, x = s.allowedAutoPlacements, h = t.options.placement, v = H(h), b = c || (v === h || !f ? [G(h)] : function(e) {
										if (H(e) === k) return [];
										var t = G(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(b).reduce((function(e, s) {
										return e.concat(H(s) === k ? function(e, t) {
											void 0 === t && (t = {});
											var s = t,
												n = s.placement,
												o = s.boundary,
												r = s.rootBoundary,
												i = s.padding,
												a = s.flipVariations,
												c = s.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = D(n),
												m = (l ? a ? T : T.filter((function(e) {
													return D(e) === l
												})) : P).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, s) {
													return t[s] = ne(e, {
														placement: s,
														boundary: o,
														rootBoundary: r,
														padding: i
													})[H(s)], t
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
											allowedAutoPlacements: x
										}) : s)
									}), []), w = t.rects.reference, _ = t.rects.popper, N = new Map, M = !0, S = g[0], F = 0; F < g.length; F++) {
									var L = g[F],
										I = H(L),
										B = D(L) === C,
										V = [y, E].indexOf(I) >= 0,
										W = V ? "width" : "height",
										R = ne(t, {
											placement: L,
											boundary: l,
											rootBoundary: m,
											altBoundary: u,
											padding: d
										}),
										U = V ? B ? O : j : B ? E : y;
									w[W] > _[W] && (U = G(U));
									var z = G(U),
										q = [];
									if (r && q.push(R[I] <= 0), a && q.push(R[U] <= 0, R[z] <= 0), q.every((function(e) {
											return e
										}))) {
										S = L, M = !1;
										break
									}
									N.set(L, q)
								}
								if (M)
									for (var Z = function(e) {
											var t = g.find((function(t) {
												var s = N.get(t);
												if (s) return s.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return S = t, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === Z(K)) break
									}
								t.placement !== S && (t.modifiersData[n]._skip = !0, t.placement = S, t.reset = !0)
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
								n = e.name,
								o = s.mainAxis,
								r = void 0 === o || o,
								i = s.altAxis,
								a = void 0 !== i && i,
								c = s.boundary,
								d = s.rootBoundary,
								l = s.altBoundary,
								m = s.padding,
								u = s.tether,
								p = void 0 === u || u,
								f = s.tetherOffset,
								h = void 0 === f ? 0 : f,
								v = ne(t, {
									boundary: c,
									rootBoundary: d,
									padding: m,
									altBoundary: l
								}),
								b = H(t.placement),
								g = D(t.placement),
								k = !g,
								P = U(b),
								_ = "x" === P ? "y" : "x",
								N = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								S = t.rects.popper,
								F = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								T = {
									x: 0,
									y: 0
								};
							if (N) {
								if (r) {
									var A = "y" === P ? y : j,
										L = "y" === P ? E : O,
										I = "y" === P ? "height" : "width",
										B = N[P],
										V = N[P] + v[A],
										W = N[P] - v[L],
										R = p ? -S[I] / 2 : 0,
										z = g === C ? M[I] : S[I],
										q = g === C ? -S[I] : -M[I],
										Z = t.elements.arrow,
										K = p && Z ? x(Z) : {
											width: 0,
											height: 0
										},
										G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = G[A],
										X = G[L],
										Y = oe(0, M[I], K[I]),
										Q = k ? M[I] / 2 - R - Y - J - F : z - Y - J - F,
										$ = k ? -M[I] / 2 + R + Y + X + F : q + Y + X + F,
										ee = t.elements.arrow && w(t.elements.arrow),
										te = ee ? "y" === P ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][P] : 0,
										re = N[P] + Q - se - te,
										ie = N[P] + $ - se,
										ae = oe(p ? Math.min(V, re) : V, B, p ? Math.max(W, ie) : W);
									N[P] = ae, T[P] = ae - B
								}
								if (a) {
									var ce = "x" === P ? y : j,
										de = "x" === P ? E : O,
										le = N[_],
										me = oe(le + v[ce], le, le - v[de]);
									N[_] = me, T[_] = me - le
								}
								t.modifiersData[n] = T
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, s = e.state,
								n = e.name,
								o = s.elements.arrow,
								r = s.modifiersData.popperOffsets,
								i = H(s.placement),
								a = U(i),
								c = [j, O].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = s.modifiersData[n + "#persistent"].padding,
									l = x(o),
									m = "y" === a ? y : j,
									u = "y" === a ? E : O,
									p = s.rects.reference[c] + s.rects.reference[a] - r[a] - s.rects.popper[c],
									f = r[a] - s.rects.reference[a],
									h = w(o),
									v = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									b = p / 2 - f / 2,
									g = d[m],
									k = v - l[c] - d[u],
									P = v / 2 - l[c] / 2 + b,
									C = oe(g, P, k),
									_ = a;
								s.modifiersData[n] = ((t = {})[_] = C, t.centerOffset = C - P, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								s = e.options,
								n = e.name,
								o = s.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = s.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : se(a, P))
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
								n = t.rects.reference,
								o = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = ne(t, {
									elementContext: "reference"
								}),
								a = ne(t, {
									altBoundary: !0
								}),
								c = re(i, n),
								d = re(a, o, r),
								l = ie(c),
								m = ie(d);
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
							n = t[1];
						return e[s] = n, e
					}), {})
				},
				me = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				ue = [],
				pe = function(e, t, s) {
					void 0 === s && (s = {});
					var o = n.useRef(null),
						r = {
							onFirstUpdate: s.onFirstUpdate,
							placement: s.placement || "bottom",
							strategy: s.strategy || "absolute",
							modifiers: s.modifiers || ue
						},
						i = n.useState({
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
						d = n.useMemo((function() {
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
						l = n.useMemo((function() {
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
						m = n.useRef();
					return me((function() {
						m.current && m.current.setOptions(l)
					}), [l]), me((function() {
						if (null != e && null != t) {
							var n = (s.createPopper || ae)(e, t, l);
							return m.current = n,
								function() {
									n.destroy(), m.current = null
								}
						}
					}), [e, t, s.createPopper]), {
						state: m.current ? m.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: m.current ? m.current.update : null,
						forceUpdate: m.current ? m.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var s = "undefined" != typeof Element,
				n = "function" == typeof Map,
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
							if (s && t instanceof Element) return !1;
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
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				o = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (s, i, {
				routes: a
			}) => {
				const c = i();
				Object(n.a)(e, a, c) ? s(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.b, d({
				className: Object(r.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= a && !m.has(t) && (r = o, m.add(t), o === l && (u = !0))
				}
				return u ? o.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				v2Container: "_3Ck2ZoZ2ImMBMvI1gp5MaL",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => u._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [u._param("total participated users", Object(m.b)(e)), u._plural(e)], {
				hk: "1yrPLH"
			});
			var f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				x = s.n(f);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === c.a.Live,
					o = t.status === c.a.Closed,
					m = Object(i.e)(d.y),
					u = Object(i.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return m ? r.a.createElement("div", {
					className: x.a.v2Container
				}, r.a.createElement("div", {
					className: x.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), s && r.a.createElement("span", {
					className: Object(n.a)(x.a.badge, x.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(n.a)(x.a.badge, x.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), t.totalParticipantsCount && r.a.createElement("span", {
					className: x.a.predictions
				}, r.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				})), r.a.createElement(a.a, {
					className: x.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: x.a.title
				}, t.name)) : r.a.createElement("div", {
					className: x.a.container
				}, r.a.createElement("h3", {
					className: x.a.title
				}, t.name), r.a.createElement("div", {
					className: x.a.label
				}, r.a.createElement("span", null, h._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && r.a.createElement("span", {
					className: Object(n.a)(x.a.badge, x.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(n.a)(x.a.badge, x.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(a.a, {
					className: x.a.awards,
					thing: e
				}))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const f = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(m.a)(s)) return null;
				const n = s && s.eventInfo,
					a = Object(l.a)(s),
					u = n && Object(i.c)(n.eventStart, n.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, o.a.createElement(f, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: s
				}), !a && u && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var m = e => o.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => o.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				f = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				x = s.n(f),
				h = s("./src/lib/lessComponent.tsx");
			const v = h.a.span("PostEventFutureText", x.a),
				b = h.a.span("PostEventPastText", x.a),
				g = h.a.span("PostEventNowText", x.a),
				w = h.a.span("Container", x.a),
				y = h.a.wrapped(m, "CalendarIcon", x.a),
				E = h.a.wrapped(u, "LiveIcon", x.a),
				O = h.a.div("LoadingState", x.a);
			class j extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: a,
						eventStart: c
					} = s, d = Object(r.e)(c, n);
					let l, m;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(O, {
							className: e
						})
					}
					if (a) m = o.a.createElement(g, null, o.a.createElement(E, null), l);
					else if (d === r.a.Future) m = o.a.createElement(v, null, o.a.createElement(y, null), l);
					else {
						if (d !== r.a.Past) return null;
						m = o.a.createElement(b, null, o.a.createElement(y, null), l)
					}
					return o.a.createElement(w, {
						className: e
					}, m)
				}
			}
			t.a = j
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				f = s("./src/reddit/components/Econ/Audio/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/econ/index.ts"),
				j = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				F = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				A = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				U = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				K = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				J = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = s.n(J);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => o.a.createElement("div", {
					className: X.a.container
				}, o.a.createElement(G.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: X.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopLine/index.tsx"),
				se = s("./src/reddit/components/SourceLink/index.tsx"),
				ne = s("./src/reddit/constants/postLayout.ts"),
				oe = s("./src/reddit/contexts/InsideOverlay.tsx"),
				re = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/contexts/Post/index.tsx"),
				ae = s("./src/reddit/helpers/isCrosspost.ts"),
				ce = s("./src/reddit/helpers/postEvent.ts"),
				de = s("./src/reddit/models/Audio/index.ts"),
				le = s("./src/reddit/constants/experiments.ts"),
				me = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ue = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const pe = Object(a.a)(P.N, e => e.some(ue.c)),
				fe = Object(a.a)(pe, e => e),
				xe = (e, t) => Object(me.c)(e, {
					experimentName: le.mc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && fe(e, {
							listingKey: s
						})
					}
				});
			var he = s("./src/reddit/selectors/postFlair.ts"),
				ve = s("./src/reddit/selectors/showPromotedCTA.ts"),
				be = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				we = s.n(ge),
				ye = s("./src/reddit/selectors/i18n/index.ts"),
				Ee = s("./src/reddit/components/LargePost/index.m.less"),
				Oe = s.n(Ee);
			const je = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(P.N)(e, {
						listingKey: s
					}) : void 0
				},
				ke = Object(r.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: E.a,
					hideNSFWPref: C.C,
					flairStyleTemplate: re.U,
					isCurrentUserProfilePost: P.l,
					isLoggedIn: C.K,
					isActive: P.j,
					showPromotedCTA: ve.a,
					moderatorPermissions: k.l,
					modModeEnabled: re.S,
					posts: je,
					postHeightVariant: xe,
					shouldShowNsfwListingBelow: ye.b,
					showEditFlair: he.a,
					showAwardsPlaque: j.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(O.x)(e),
					isAudioRoomPostEnabled: O.c,
					isRecordingEnabled: O.E
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === y.a.upvoted ? Object(u.db)(t) : Object(u.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(u.Z)(t)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				Pe = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: a,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: y,
						hideNSFWPref: E,
						hostPostData: O,
						imageGalleryCurrentItem: j,
						inSubredditOrProfile: k = !1,
						isCommentsPage: P,
						isCurrentUserProfilePost: C,
						isFrontpage: G,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: X,
						isOverlay: Y,
						isTopicPage: oe,
						isTournamentPost: re,
						isAudioRoomPostEnabled: ie,
						isCommentCountAnimationEnabled: me,
						isVoteCountAnimationEnabled: ue,
						isCountAnimShadowTestEnabled: pe,
						isRecordingEnabled: fe,
						listingIndex: xe,
						listingKey: he,
						moderatorPermissions: ve,
						modModeEnabled: ge,
						onClickPost: ye,
						onIgnoreReports: Ee,
						onOpenReportsDropdown: je,
						post: ke,
						postHeightVariant: Pe,
						scrollerItemRef: Ce,
						shouldShowGalleryTileOption: _e,
						shouldShowNsfwListingBelow: Ne,
						showAwardsPlaque: Me,
						showEditFlair: Se,
						showPromotedCTA: Fe,
						subredditOrProfile: Te,
						userIsOp: Ae,
						postId: Le,
						postIds: Ie,
						onceInViewport: Be
					} = e, Ve = !!e.redditStyle || !!e["data-redditstyle"], We = Ve ? void 0 : p, Re = Object(l.a)(ve), He = ge && Re, De = Object(c.a)(ve), Ue = Object(d.a)(ve), ze = Object(H.c)(ke), qe = Object(W.c)(ke), Ze = !!ke.media && ke.media.type === g.o.RTJSON, Ke = Ae && Ze, Ge = s ? s - q.a : void 0, Je = !!ke.recommendationContext, Xe = !(G && X || oe) || Je && X, Ye = (e => e === le.Be.OnlyTitles)(Pe) && !Object(ae.a)(ke), Qe = (e => e === le.Be.MediumHeight)(Pe) && !Object(ae.a)(ke), $e = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(w.r)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = o && o[1] && Object(w.r)(o[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), et = !!(null == O ? void 0 : O.shouldShowLinkedPosts), tt = (!k || et || Ne) && !ke.isSponsored, st = Object(_.t)(ke, j), {
						source: nt
					} = st, ot = Object(n.useRef)(null), rt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Be || Be(xe))
						})
					}, [Be, xe]);
					return Object(b.a)(ot, rt), o.a.createElement(v.b, null, o.a.createElement(z.a, {
						className: Object(N.a)(Oe.a.container, r, we.a.largeAndMediumPostStyles, we.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[we.a.mUseRedditTheme]: Ve,
							promotedvideolink: ke.isSponsored && !(ke.media && g.a.has(ke.media.type)),
							[Oe.a.topCompactPost]: $e && $e.hasTopCompactPostStyles,
							[Oe.a.bottomCompactPost]: $e && $e.hasBottomCompactPostStyles
						}),
						isOverlay: Y,
						style: Object(m.b)(e.flairStyleTemplate),
						post: ke,
						onClick: ye,
						eventFactory: u
					}, o.a.createElement("div", {
						ref: ot
					}), o.a.createElement($.a, {
						model: ke,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: pe,
						isVoteCountAnimation: ue,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: We,
						redditStyle: Ve,
						postId: Le
					}), o.a.createElement(U.a, {
						className: Object(N.a)(Oe.a.backgroundWrapper, {
							[Oe.a.isEvent]: Object(ce.a)(ke)
						}),
						"data-click-id": "background",
						flairStyleTemplate: We,
						post: ke,
						redditStyle: Ve
					}, o.a.createElement(L.a, {
						post: ke
					}), $e && $e.showPinnnedHeader && o.a.createElement(Q, null), re && Object(i.c)(ke) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: ke
					}), o.a.createElement(x.a, {
						post: ke
					})), !re && o.a.createElement(o.a.Fragment, null, !!ke.recommendationContext && o.a.createElement(D.a, {
						content: ke.recommendationContext.content,
						layout: ne.g.Large,
						post: ke
					}), o.a.createElement(te.a, {
						className: Oe.a.postTopLine,
						hideAwards: Me,
						hideNSFWPref: E,
						hostPostData: O,
						iconClassName: Oe.a.postTopLineIcon,
						inSubredditOrProfile: k,
						isCommentsPage: !!P,
						isCompactPinnedPost: !!$e,
						isCurrentUserProfilePost: C,
						isOverlay: !!Y,
						isTopicPage: !!oe,
						listingKey: he,
						post: ke,
						shouldShowSubscribeButton: Xe,
						showSubreddit: tt,
						showSubredditIcon: !0,
						subredditOrProfile: Te
					}), o.a.createElement(ee.c, {
						className: Oe.a.postTitle,
						post: ke,
						redditStyle: Ve,
						size: ee.b.Large,
						titleColor: We && We.postTitleColor,
						isOverlay: Y
					}), ke.source && !ke.isSponsored && !(ke.media && Object(g.H)(ke.media)) && o.a.createElement(se.a, {
						className: Oe.a.sourceLink,
						post: ke
					})), o.a.createElement("div", {
						className: Oe.a.postMediaWrapper
					}, !$e && o.a.createElement(Z.a, {
						isGalleryTileLayoutDefault: J,
						isListing: !0,
						isMediumHeight: Qe,
						isNotCardView: !!Y,
						isTitleOnly: Ye,
						showCentered: !0,
						flairStyleTemplate: We,
						post: ke,
						availableWidth: Ge,
						shouldLoad: y,
						scrollerItemRef: Ce,
						autoplayPref: t,
						shouldShowGalleryTileOption: _e,
						showPromotedCTA: Fe
					})), Fe && nt && nt.url && o.a.createElement(M.a, {
						className: Oe.a.adLinkWrapper
					}, o.a.createElement(S.a, {
						post: ke,
						adLinkContent: st
					})), ge && Re && qe && o.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, o.a.createElement(V.a, {
						thing: ke
					})), ge && Re && ze && o.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, o.a.createElement(R.a, {
						onIgnoreReports: Ee,
						reportable: ke
					})), Object(de.b)(ke) && ie && o.a.createElement(f.a, {
						post: ke,
						isRecordingEnabled: fe
					}), o.a.createElement(B.d, null), Me && o.a.createElement(F.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: ke,
						tooltipType: Y ? be.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: Oe.a.flatListContainer
					}, o.a.createElement(A.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: We,
						model: ke,
						onVoteClick: e.handleVote
					}), o.a.createElement(I.c, {
						currentUser: a,
						hasModFlairPerms: De,
						hasModFullPerms: Ue,
						hasModPostPerms: Re,
						hostPostData: O,
						isCommentCountAnimation: me,
						isCountAnimShadowTestEnabled: pe,
						isLargePost: !0,
						isOverlay: !!Y,
						listingKey: he,
						modModeEnabled: ge,
						onIgnoreReports: Ee,
						onOpenReportsDropdown: je,
						post: ke,
						showEditPost: Ke,
						showEditFlair: Se,
						useFlatlistBreakpoints: Object(K.b)({
							editPost: !1,
							save: !He,
							hide: !1,
							report: !1
						})
					}))), G && o.a.createElement(T.a, {
						post: ke,
						postIds: null != Ie ? Ie : [],
						subredditId: null == Te ? void 0 : Te.id
					})))
				});
			Pe.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(ke(Object(oe.b)(Pe)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = s("./src/lib/constants/index.ts").l.toLowerCase(),
				o = e => "string" == typeof e.bannedBy && e.bannedBy.toLowerCase() === n,
				r = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				i = e => o(e) || r(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: m,
						className: u
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), d && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = s.n(d);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: s
			}) => o.a.createElement(a.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: m(s),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(w);
			const E = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(b.a)((e, {
					post: t
				}) => Object(x.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(x.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(h.actionInfo)(e).pageType
			}));
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: x,
						style: h,
						ref: b,
						shouldAddGalleryViewability: g = !0
					} = this.props, w = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && x(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), E = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, w) : l.media && Object(f.E)(l.media) && g ? o.a.createElement(m, {
						postId: l.id
					}, w) : w
				}
			}
			t.a = E(Object(g.a)(Object(u.c)(O)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class f extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const x = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

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
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: b,
					postId: g,
					isReadingIndicatorsExperimentEnabled: w
				} = e, y = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: y,
					isVoteCountAnimation: b,
					isCountAnimShadowTestEnabled: p,
					postId: g,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: w
					}),
					isReadingIndicatorsExperimentEnabled: w
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				isInExperimentStyles: "yM5jY9oh36Af0F7EUOj4L"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				w = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(j);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: o,
				hideNSFWPref: j,
				hostPostData: P,
				iconClassName: C,
				inSubredditOrProfile: _,
				isCommentsPage: N,
				isCompactPinnedPost: M,
				isCurrentUserProfilePost: S,
				isOverlay: F,
				isTopicPage: T,
				listingKey: A,
				post: L,
				shouldShowSubscribeButton: I,
				showCornerOutboundLink: B,
				showSubreddit: V,
				showSubredditIcon: W,
				subredditOrProfile: R,
				isFollowed: H,
				shouldShowFollowButton: D,
				onFollowPostClick: U
			}) => {
				const z = o || T,
					q = R && Object(E.h)(R),
					Z = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(O.tb)(e, L.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(k.a.container, e)
				}, V && R && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, W && r.a.createElement(p.b, {
					className: Object(a.a)(k.a.subredditIcon, C),
					shouldHideNsfwIcon: j,
					subredditOrProfile: R
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, V && r.a.createElement(d.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), r.a.createElement(u.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: F ? u.c.Lightbox : void 0,
					post: L,
					showSub: V,
					subredditOrProfile: R
				}), r.a.createElement(m.a, {
					className: k.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: M,
					post: L,
					tooltipType: F ? u.c.Lightbox : void 0
				}), !z && r.a.createElement(c.a, {
					isPostDetail: N,
					thing: L,
					tooltipType: F ? u.c.Lightbox : void 0
				})), R && Z && V && I && !S && r.a.createElement(x.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(g.h)(L.id, e ? "unsubscribe" : "subscribe", "post", A, P),
					identifier: {
						name: R.name,
						type: q ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: L.id,
					size: v.d.XS
				}), B && r.a.createElement(b.b, {
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(y.D)(L),
					source: L.source
				}, r.a.createElement(w.a, {
					className: k.a.outboundLinkIcon
				})), D && Z && r.a.createElement(l.a, {
					isFilled: !!H,
					onClick: U,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				f = s("./src/reddit/controls/Dropdown/row.m.less"),
				x = s.n(f);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(x.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(x.a.row, e, {
					[x.a.mIsInteractive]: !t.noHover,
					[x.a.mIsSelected]: t.isSelected,
					[x.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(v, h({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, i = r;
					return n ? o.a.createElement(t, i) : void 0 !== s ? o.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} = e;
				return t && s && n && o ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.f)(s));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				f = e => Object(n.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, o.a.createElement("g", {
				fill: "none"
			}, o.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
			})))
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
			})))
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), o.a.createElement("rect", {
				x: "3",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
			})))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#fff",
				d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M13.43,13.02125 C12.5683333,13.02125 11.8675,12.3204167 11.8675,11.45875 C11.8675,10.5970833 12.5683333,9.89583333 13.43,9.89583333 C14.2916667,9.89583333 14.9925,10.5970833 14.9925,11.45875 C14.9925,12.3204167 14.2916667,13.02125 13.43,13.02125 M13.705,15.5875 C12.63875,16.6525 10.595,16.735 9.99416667,16.735 C9.39333333,16.735 7.34958333,16.6525 6.28458333,15.5870833 C6.12625,15.4291667 6.12625,15.1725 6.28458333,15.0145833 C6.4425,14.8566667 6.69916667,14.85625 6.85708333,15.0145833 C7.52916667,15.6866667 8.96708333,15.9254167 9.99416667,15.9254167 C11.02125,15.9254167 12.4595833,15.6866667 13.1329167,15.0141667 C13.29125,14.85625 13.5475,14.8566667 13.7054167,15.0145833 C13.8633333,15.1729167 13.8633333,15.4291667 13.705,15.5875 M4.9925,11.45875 C4.9925,10.5970833 5.69375,9.89583333 6.55583333,9.89583333 C7.41666667,9.89583333 8.1175,10.5970833 8.1175,11.45875 C8.1175,12.32 7.41666667,13.0208333 6.55583333,13.0208333 C5.69375,13.0208333 4.9925,12.32 4.9925,11.45875 M19.99,9.89583333 C19.99,8.68791667 19.0108333,7.70833333 17.8025,7.70833333 C17.2129167,7.70833333 16.67875,7.94291667 16.2854167,8.32208333 C14.79,7.24333333 12.73,6.54625 10.4354167,6.46625 L11.4316667,1.77833333 L14.6875,2.47041667 C14.7270833,3.29791667 15.405,3.95833333 16.2425,3.95833333 C17.1054167,3.95833333 17.805,3.25875 17.805,2.39583333 C17.805,1.53291667 17.1054167,0.833333333 16.2425,0.833333333 C15.62875,0.833333333 15.1029167,1.19083333 14.8475,1.70541667 L11.2120833,0.932916667 C11.1108333,0.910833333 11.005,0.930833333 10.9183333,0.987083333 C10.83125,1.04375 10.7704167,1.1325 10.74875,1.23375 L9.65541667,6.37791667 C9.64916667,6.4075 9.65416667,6.43541667 9.65458333,6.46458333 C7.31875,6.52583333 5.21875,7.22458333 3.7,8.31833333 C3.30708333,7.94125 2.775,7.70833333 2.1875,7.70833333 C0.979166667,7.70833333 0,8.68791667 0,9.89583333 C0,10.785 0.530833333,11.5483333 1.29208333,11.8904167 C1.25833333,12.1079167 1.24,12.32875 1.24,12.5520833 C1.24,15.9179167 5.1575,18.6458333 9.99,18.6458333 C14.8225,18.6458333 18.74,15.9179167 18.74,12.5520833 C18.74,12.33 18.7220833,12.1108333 18.68875,11.895 C19.455,11.5545833 19.99,10.7883333 19.99,9.89583333"
			})))
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.yc
				});
				return !(!t || Object(n.Ef)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Ef)(t)
				},
				c = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.xe,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.Ge.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.H, a, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.7e7be66c54d616df087c.js.map