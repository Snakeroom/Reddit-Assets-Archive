// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.a7b37fbe189f4306a0ca.js
// Retrieved at 8/14/2023, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost", "vendors~reddit-components-MediumPost"], {
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
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						x = !r && !l && /macintosh/i.test(t),
						h = !i && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: y || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: y || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? o = {
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
						version: y || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
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
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : x ? (o.mac = e, o.osname = "macOS") : j ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : h && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var P = "";
					o.windows ? P = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? P = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? P = (P = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? P = (P = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? P = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? P = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? P = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? P = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (P = s(/tizen[\/\s](\d+(\.\d+)*)/i)), P && (o.osversion = P);
					var E = !o.windows && P.split(".")[0];
					return g || d || "ipad" == r || i && (3 == E || E >= 4 && !O) || o.silk ? o.tablet = e : (O || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
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
		"./node_modules/lodash/map.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayMap.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, o)
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
				return o(l(e)).left + i(e).scrollLeft
			}

			function m(e) {
				return r(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					s = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(s + o + n)
			}

			function b(e, t, s) {
				void 0 === s && (s = !1);
				var n, a, m = l(t),
					b = o(e),
					f = d(t),
					x = {
						scrollLeft: 0,
						scrollTop: 0
					},
					h = {
						x: 0,
						y: 0
					};
				return (f || !f && !s) && (("body" !== c(t) || p(m)) && (x = (n = t) !== r(n) && d(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : i(n)), d(t) ? ((h = o(t)).x += t.clientLeft, h.y += t.clientTop) : m && (h.x = u(m))), {
					x: b.left + x.scrollLeft - h.x,
					y: b.top + x.scrollTop - h.y,
					width: b.width,
					height: b.height
				}
			}

			function f(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function x(e) {
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function h(e, t) {
				void 0 === t && (t = []);
				var s = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : d(t) && p(t) ? t : e(x(t))
					}(e),
					n = "body" === c(s),
					o = r(s),
					i = n ? [o].concat(o.visualViewport || [], p(s) ? s : []) : s,
					a = t.concat(i);
				return n ? a : a.concat(h(x(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return d(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = r(e), s = y(e); s && v(s) && "static" === m(s).position;) s = y(s);
				return s && "body" === c(s) && "static" === m(s).position ? t : s || function(e) {
					for (var t = x(e); d(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var s = m(t);
						if ("none" !== s.transform || "none" !== s.perspective || "auto" !== s.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				j = "bottom",
				P = "right",
				E = "left",
				w = "auto",
				_ = [O, j, P, E],
				C = "start",
				S = "end",
				k = "clippingParents",
				I = "viewport",
				T = "popper",
				N = "reference",
				L = _.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + S])
				}), []),
				M = [].concat(_, [w]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + S])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
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
			var R = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function D() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					s = t.defaultModifiers,
					n = void 0 === s ? [] : s,
					o = t.defaultOptions,
					r = void 0 === o ? R : o;
				return function(e, t, s) {
					void 0 === s && (s = r);
					var o, i, d = {
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
							setOptions: function(s) {
								m(), d.options = Object.assign(Object.assign(Object.assign({}, r), d.options), s), d.scrollParents = {
									reference: a(e) ? h(e) : e.contextElement ? h(e.contextElement) : [],
									popper: h(t)
								};
								var o = function(e) {
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
								}([].concat(n, d.options.modifiers)));
								return d.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										s = e.options,
										n = void 0 === s ? {} : s,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: d,
											name: t,
											instance: u,
											options: n
										});
										c.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = d.elements,
										t = e.reference,
										s = e.popper;
									if (D(t, s)) {
										d.rects = {
											reference: b(t, g(s), "fixed" === d.options.strategy),
											popper: f(s)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < d.orderedModifiers.length; n++)
											if (!0 !== d.reset) {
												var o = d.orderedModifiers[n],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													c = o.name;
												"function" == typeof r && (d = r({
													state: d,
													options: a,
													name: c,
													instance: u
												}) || d)
											} else d.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(d)
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
					if (!D(e, t)) return u;

					function m() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return u.setOptions(s).then((function(e) {
						!l && s.onFirstUpdate && s.onFirstUpdate(e)
					})), u
				}
			}
			var W = {
				passive: !0
			};

			function F(e) {
				return e.split("-")[0]
			}

			function V(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, s = e.reference,
					n = e.element,
					o = e.placement,
					r = o ? F(o) : null,
					i = o ? V(o) : null,
					a = s.x + s.width / 2 - n.width / 2,
					d = s.y + s.height / 2 - n.height / 2;
				switch (r) {
					case O:
						t = {
							x: a,
							y: s.y - n.height
						};
						break;
					case j:
						t = {
							x: a,
							y: s.y + s.height
						};
						break;
					case P:
						t = {
							x: s.x + s.width,
							y: d
						};
						break;
					case E:
						t = {
							x: s.x - n.width,
							y: d
						};
						break;
					default:
						t = {
							x: s.x,
							y: s.y
						}
				}
				var c = r ? H(r) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case C:
							t[c] = Math.floor(t[c]) - Math.floor(s[l] / 2 - n[l] / 2);
							break;
						case S:
							t[c] = Math.floor(t[c]) + Math.ceil(s[l] / 2 - n[l] / 2)
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

			function G(e) {
				var t, s = e.popper,
					n = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					c = e.adaptive,
					u = function(e) {
						var t = e.x,
							s = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(s * n) / n || 0
						}
					}(i),
					m = u.x,
					p = u.y,
					b = i.hasOwnProperty("x"),
					f = i.hasOwnProperty("y"),
					x = E,
					h = O,
					v = window;
				if (c) {
					var y = g(s);
					y === r(s) && (y = l(s)), o === O && (h = j, p -= y.clientHeight - n.height, p *= d ? 1 : -1), o === E && (x = P, m -= y.clientWidth - n.width, m *= d ? 1 : -1)
				}
				var w, _ = Object.assign({
					position: a
				}, c && z);
				return d ? Object.assign(Object.assign({}, _), {}, ((w = {})[h] = f ? "0" : "", w[x] = b ? "0" : "", w.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", w)) : Object.assign(Object.assign({}, _), {}, ((t = {})[h] = f ? p + "px" : "", t[x] = b ? m + "px" : "", t.transform = "", t))
			}
			var J = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return J[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function Z(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
				}))
			}

			function X(e, t) {
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

			function Y(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === I ? Y(function(e) {
					var t = r(e),
						s = l(e),
						n = t.visualViewport,
						o = s.clientWidth,
						i = s.clientHeight,
						a = 0,
						d = 0;
					return n && (o = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, d = n.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: d
					}
				}(e)) : d(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						s = i(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -s.scrollLeft + u(e),
						d = -s.scrollTop;
					return "rtl" === m(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, s) {
				var n = "clippingParents" === t ? function(e) {
						var t = h(e),
							s = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && d(e) ? g(e) : e;
						return a(s) ? t.filter((function(e) {
							return a(e) && X(e, s)
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
					d = void 0 === i ? k : i,
					c = s.rootBoundary,
					u = void 0 === c ? I : c,
					m = s.elementContext,
					p = void 0 === m ? T : m,
					b = s.altBoundary,
					f = void 0 !== b && b,
					x = s.padding,
					h = void 0 === x ? 0 : x,
					v = te("number" != typeof h ? h : se(h, _)),
					y = p === T ? N : T,
					g = e.elements.reference,
					E = e.rects.popper,
					w = e.elements[f ? y : p],
					C = ee(a(w) ? w : w.contextElement || l(e.elements.popper), d, u),
					S = o(g),
					L = q({
						reference: S,
						element: E,
						strategy: "absolute",
						placement: r
					}),
					M = Y(Object.assign(Object.assign({}, E), L)),
					A = p === T ? M : S,
					B = {
						top: C.top - A.top + v.top,
						bottom: A.bottom - C.bottom + v.bottom,
						left: C.left - A.left + v.left,
						right: A.right - C.right + v.right
					},
					R = e.modifiersData.offset;
				if (p === T && R) {
					var D = R[r];
					Object.keys(B).forEach((function(e) {
						var t = [P, j].indexOf(e) >= 0 ? 1 : -1,
							s = [O, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += D[s] * t
					}))
				}
				return B
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
				return [O, P, j, E].some((function(t) {
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
								s = e.instance,
								n = e.options,
								o = n.scroll,
								i = void 0 === o || o,
								a = n.resize,
								d = void 0 === a || a,
								c = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", s.update, W)
								})), d && c.addEventListener("resize", s.update, W),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", s.update, W)
									})), d && c.removeEventListener("resize", s.update, W)
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
							t.modifiersData[s] = q({
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
									placement: F(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), G(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), G(Object.assign(Object.assign({}, a), {}, {
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
								d(o) && c(o) && (Object.assign(o.style, s), Object.keys(n).forEach((function(e) {
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
										d(n) && c(n) && (Object.assign(n.style, r), Object.keys(o).forEach((function(e) {
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
								i = M.reduce((function(e, s) {
									return e[s] = function(e, t, s) {
										var n = F(e),
											o = [E, O].indexOf(n) >= 0 ? -1 : 1,
											r = "function" == typeof s ? s(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : s,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [E, P].indexOf(n) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(s, t.rects, r), e
								}), {}),
								a = i[t.placement],
								d = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i
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
								for (var o = s.mainAxis, r = void 0 === o || o, i = s.altAxis, a = void 0 === i || i, d = s.fallbackPlacements, c = s.padding, l = s.boundary, u = s.rootBoundary, m = s.altBoundary, p = s.flipVariations, b = void 0 === p || p, f = s.allowedAutoPlacements, x = t.options.placement, h = F(x), v = d || (h === x || !b ? [K(x)] : function(e) {
										if (F(e) === w) return [];
										var t = K(e);
										return [Z(e), t, Z(t)]
									}(x)), y = [x].concat(v).reduce((function(e, s) {
										return e.concat(F(s) === w ? function(e, t) {
											void 0 === t && (t = {});
											var s = t,
												n = s.placement,
												o = s.boundary,
												r = s.rootBoundary,
												i = s.padding,
												a = s.flipVariations,
												d = s.allowedAutoPlacements,
												c = void 0 === d ? M : d,
												l = V(n),
												u = (l ? a ? L : L.filter((function(e) {
													return V(e) === l
												})) : _).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, s) {
													return t[s] = ne(e, {
														placement: s,
														boundary: o,
														rootBoundary: r,
														padding: i
													})[F(s)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: s,
											boundary: l,
											rootBoundary: u,
											padding: c,
											flipVariations: b,
											allowedAutoPlacements: f
										}) : s)
									}), []), g = t.rects.reference, S = t.rects.popper, k = new Map, I = !0, T = y[0], N = 0; N < y.length; N++) {
									var A = y[N],
										B = F(A),
										R = V(A) === C,
										D = [O, j].indexOf(B) >= 0,
										U = D ? "width" : "height",
										W = ne(t, {
											placement: A,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: c
										}),
										H = D ? R ? P : E : R ? j : O;
									g[U] > S[U] && (H = K(H));
									var q = K(H),
										z = [];
									if (r && z.push(W[B] <= 0), a && z.push(W[H] <= 0, W[q] <= 0), z.every((function(e) {
											return e
										}))) {
										T = A, I = !1;
										break
									}
									k.set(A, z)
								}
								if (I)
									for (var G = function(e) {
											var t = y.find((function(t) {
												var s = k.get(t);
												if (s) return s.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, J = b ? 3 : 1; J > 0; J--) {
										if ("break" === G(J)) break
									}
								t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0)
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
								d = s.boundary,
								c = s.rootBoundary,
								l = s.altBoundary,
								u = s.padding,
								m = s.tether,
								p = void 0 === m || m,
								b = s.tetherOffset,
								x = void 0 === b ? 0 : b,
								h = ne(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								v = F(t.placement),
								y = V(t.placement),
								w = !y,
								_ = H(v),
								S = "x" === _ ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								I = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof x ? x(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : x,
								L = {
									x: 0,
									y: 0
								};
							if (k) {
								if (r) {
									var M = "y" === _ ? O : E,
										A = "y" === _ ? j : P,
										B = "y" === _ ? "height" : "width",
										R = k[_],
										D = k[_] + h[M],
										U = k[_] - h[A],
										W = p ? -T[B] / 2 : 0,
										q = y === C ? I[B] : T[B],
										z = y === C ? -T[B] : -I[B],
										G = t.elements.arrow,
										J = p && G ? f(G) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = K[M],
										Z = K[A],
										X = oe(0, I[B], J[B]),
										Y = w ? I[B] / 2 - W - X - Q - N : q - X - Q - N,
										$ = w ? -I[B] / 2 + W + X + Z + N : z + X + Z + N,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === _ ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
										re = k[_] + Y - se - te,
										ie = k[_] + $ - se,
										ae = oe(p ? Math.min(D, re) : D, R, p ? Math.max(U, ie) : U);
									k[_] = ae, L[_] = ae - R
								}
								if (a) {
									var de = "x" === _ ? O : E,
										ce = "x" === _ ? j : P,
										le = k[S],
										ue = oe(le + h[de], le, le - h[ce]);
									k[S] = ue, L[S] = ue - le
								}
								t.modifiersData[n] = L
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
								i = F(s.placement),
								a = H(i),
								d = [E, P].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var c = s.modifiersData[n + "#persistent"].padding,
									l = f(o),
									u = "y" === a ? O : E,
									m = "y" === a ? j : P,
									p = s.rects.reference[d] + s.rects.reference[a] - r[a] - s.rects.popper[d],
									b = r[a] - s.rects.reference[a],
									x = g(o),
									h = x ? "y" === a ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
									v = p / 2 - b / 2,
									y = c[u],
									w = h - l[d] - c[m],
									_ = h / 2 - l[d] / 2 + v,
									C = oe(y, _, w),
									S = a;
								s.modifiersData[n] = ((t = {})[S] = C, t.centerOffset = C - _, t)
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
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && X(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : se(a, _))
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
								d = re(i, n),
								c = re(a, o, r),
								l = ie(d),
								u = ie(c);
							t.modifiersData[s] = {
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
				de = s("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = s.n(de),
				le = function(e) {
					return e.reduce((function(e, t) {
						var s = t[0],
							n = t[1];
						return e[s] = n, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				me = [],
				pe = function(e, t, s) {
					void 0 === s && (s = {});
					var o = n.useRef(null),
						r = {
							onFirstUpdate: s.onFirstUpdate,
							placement: s.placement || "bottom",
							strategy: s.strategy || "absolute",
							modifiers: s.modifiers || me
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
						d = i[1],
						c = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										s = Object.keys(t.elements);
									d({
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
								modifiers: [].concat(r.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, c]),
						u = n.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var n = (s.createPopper || ae)(e, t, l);
							return u.current = n,
								function() {
									n.destroy(), u.current = null
								}
						}
					}), [e, t, s.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
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
							var a, d, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (!e(t[d], i[d])) return !1;
								return !0
							}
							if (n && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!e(d.value[1], i.get(d.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
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
							if (s && t instanceof Element) return !1;
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "b", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				v = s("./src/reddit/actions/comment/constants.ts");
			const y = Object(r.a)(v.p),
				g = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					s().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(y({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(x.S)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = s().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? u.l : u.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, j = Object(r.a)(v.J), P = e => async (t, s, n) => {
					let {
						apiContext: o,
						gqlContext: r
					} = n;
					const i = s(),
						a = i.features.comments.models[e],
						c = i.user.account ? i.user.account.displayText : null;
					a && c && (t(Object(h.j)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(r(), e)).ok || t(Object(h.j)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(d.d)())
				}, E = (e, t) => async (s, n, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = n(),
						c = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					c && l && (s(Object(h.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(i(), e, t)).ok || s(Object(h.j)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							numReports: c.numReports
						}
					})), Object(d.d)())
				}, w = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.k : u.e;
					i.ignoreReports || t(P(e)), t(Object(h.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, _ = (e, t, s) => async (r, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(f.c)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = s === o.jc.Snoozed,
						x = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(d(), {
							input: x
						})).ok) r(Object(h.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(c.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, C = (e, t, s) => async (n, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					n(Object(h.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.H.ADMIN,
							isMod: t === o.H.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(h.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.c)(c(), e, t),
						x = Object(u.d)(c(), e, !!s),
						v = [f];
					(s || !s && e === b) && v.push(x), (await Promise.all(v)).every(e => e.ok) ? s && n(j({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(h.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), n(Object(h.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, s) {
			e.exports = {
				AdSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				adSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				Content: "dND6Q1_345dpzB_NMYBC8",
				content: "dND6Q1_345dpzB_NMYBC8",
				ExtraLarge: "uh_X09jq4S7lMKSY8ZDii",
				extraLarge: "uh_X09jq4S7lMKSY8ZDii",
				Large: "_1l7lMJqbov2T29ncxpJBlP",
				large: "_1l7lMJqbov2T29ncxpJBlP"
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				m = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const f = e => {
				let t;
				switch (e) {
					case m.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case m.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const m = Object(r.d)();
				if (!Object(r.e)(u.a) || !Object(a.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(i.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && m(Object(d.y)(t, l.a.Click))
					}
				}, o.a.createElement(c.b, {
					className: Object(i.a)(b.a.Content, f(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = c[e].belongsTo.id;
					p(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(a.a, l({}, s, {
					className: Object(r.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(c.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
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
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(g),
				j = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				w = 1,
				_ = j.a.div("Container", O.a),
				C = j.a.div("PostMetaWrapper", O.a),
				S = j.a.wrapped(p.c, "PostTitle", O.a),
				k = j.a.div("FlatList", O.a),
				I = j.a.div("FlatItem", O.a),
				T = j.a.span("FlatListDotSpacer", O.a),
				N = j.a.wrapped(_, "LinkContainer", O.a),
				L = j.a.div("Content", O.a),
				M = j.a.div("ThumbnailContainer", O.a),
				A = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Sb.TOPIC),
					shouldOpenPostInNewTab: y.lb
				}),
				B = Object(i.b)(A);
			t.c = Object(h.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(N, {
					className: c
				}, r.a.createElement(L, null, r.a.createElement(C, null, r.a.createElement(m.a, d)), R(i), i.source && r.a.createElement(b.a, {
					post: i
				}), U(e)), F(e)) : r.a.createElement(_, {
					className: c
				}, r.a.createElement(C, null, r.a.createElement(m.a, d)), R(i), D(e), U(e))
			}));
			const R = e => r.a.createElement(S, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				D = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, P({}, n, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(I, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(I, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				F = e => r.a.createElement(M, null, r.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(i.G)(t) ? o.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, o.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, o.a.createElement("div", {
					className: "my-md leading-5 text-neutral-content"
				}, o.a.createElement("p", {
					className: "text-[16px] max-w-[260px]"
				}, d._("To view this interactive post, you'll need to open it in a new window.", null, {
					hk: "27Ub4M"
				}))), o.a.createElement(r.a, {
					className: "m-auto",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					className: "ml-0 m-xs"
				}), d._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
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
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					participantsCount: t
				} = e;
				return u._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [u._param("total participated users", Object(l.b)(t)), u._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					u = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(m, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RelatedCommunitiesRecommendationsUnit", (function() {
				return ze
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				f = s("./src/reddit/components/Econ/Audio/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				y = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				T = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				M = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				A = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				B = s("./src/reddit/components/BoostPost/index.ts"),
				R = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				U = s("./src/reddit/components/CreatorStats/loader.tsx"),
				W = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				H = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				q = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				z = s("./src/reddit/components/ModModeReports/index.tsx"),
				G = s("./src/reddit/components/ModModeReports/helpers.ts"),
				J = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				K = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				Q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				$ = s("./src/reddit/components/PostMedia/index.tsx"),
				ee = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				te = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				se = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				ne = s.n(se);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = () => o.a.createElement("div", {
					className: ne.a.container
				}, o.a.createElement(te.a, {
					className: ne.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: ne.a.metaText
				}, oe._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ie = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/PostTitle/index.tsx"),
				de = s("./src/reddit/components/PostTopLine/index.tsx"),
				ce = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				le = s("./src/reddit/components/SourceLink/index.tsx"),
				ue = s("./src/reddit/constants/postLayout.ts"),
				me = s("./src/reddit/contexts/InsideOverlay.tsx"),
				pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				be = s("./src/reddit/contexts/Post/index.tsx"),
				fe = s("./src/reddit/helpers/isCrosspost.ts"),
				xe = s("./src/reddit/helpers/path/index.ts"),
				he = s("./src/reddit/helpers/postEvent.ts"),
				ve = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ye = s.n(ve),
				ge = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Oe = s("./src/reddit/hooks/useClickSourceData.ts"),
				je = s("./src/reddit/models/Audio/index.ts"),
				Pe = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Ee = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				we = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_e = s("./src/reddit/constants/experiments.ts"),
				Ce = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Se = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ke = Object(a.a)(C.M, e => e.some(Se.c)),
				Ie = Object(a.a)(ke, e => e),
				Te = (e, t) => Object(Ce.c)(e, {
					experimentName: _e.qd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Ie(e, {
							listingKey: s
						})
					}
				});
			var Ne = s("./src/reddit/selectors/experiments/index.ts");

			function Le(e) {
				return e === _e.tf.Minimalist || e === _e.tf.Description || e === _e.tf.HotnessSignals
			}
			var Me = s("./src/reddit/selectors/modQueue.ts"),
				Ae = s("./src/reddit/selectors/postFlair.ts"),
				Be = s("./src/reddit/selectors/i18n/index.ts"),
				Re = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				De = s("./src/reddit/components/LargePost/index.m.less"),
				Ue = s.n(De);

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(N.a, We({}, r, {
						className: Object(I.a)(t, Ue.a.styledLink, {
							[Ue.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Ve = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.M)(e, {
						listingKey: s
					}) : void 0
				},
				He = Object(r.b)(() => Object(a.c)({
					autoplayPref: S.d,
					isModQueueDisplayEnabled: e => Object(Me.b)(e, !0),
					activeModalId: E.a,
					hideNSFWPref: S.H,
					flairStyleTemplate: pe.Y,
					isBlurredPreview: we.b,
					isCurrentUserProfilePost: C.l,
					isLoggedIn: S.S,
					isActive: C.j,
					moderatorPermissions: _.m,
					modModeEnabled: pe.W,
					posts: Ve,
					postHeightVariant: Te,
					shouldShowNsfwListingBelow: Be.b,
					showEditFlair: Ae.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(_.i)(e, s.id)
					},
					isOptionalTextEnabled: Pe.a,
					showCTAExperimentDesign: w.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, o;
						return !!(null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: S.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === P.a.upvoted ? Object(m.ib)(s) : Object(m.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(m.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				qe = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: i,
						children: a
					} = e;
					return i ? o.a.createElement(Fe, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, a)
				}),
				ze = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(Ce.c)(e, {
							experimentEligibilitySelector: Ne.e,
							experimentName: _e.Gc
						}) || _e.R.Control1;
						return {
							isEnabled: Le(t),
							variant: t
						}
					})(e), r.c);
					return t ? o.a.createElement(ce.b, We({}, e, {
						variant: s,
						pageType: ce.a.Home
					})) : null
				},
				Ge = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: a,
						currentUser: p,
						eventFactory: P,
						flairStyleTemplate: E,
						forceLoadMedia: w,
						hideNSFWPref: _,
						hostPostData: C,
						imageGalleryCurrentItem: N,
						inSubredditOrProfile: te = !1,
						isBlurredPreview: se,
						isCommentsPage: ne,
						isCurrentUserProfilePost: oe,
						isFrontpage: ce,
						isGalleryTileLayoutDefault: me,
						isModWithUserNotesPermissions: be,
						isLoggedIn: ve,
						isOverlay: Pe,
						isTopicPage: we,
						isCommentCountAnimationEnabled: Ce,
						isVoteCountAnimationEnabled: Se,
						isCountAnimShadowTestEnabled: ke,
						listingIndex: Ie,
						listingKey: Te,
						moderatorPermissions: Ne,
						modModeEnabled: Le,
						onClickPost: Me,
						onIgnoreReports: Ae,
						onOpenReportsDropdown: Be,
						post: De,
						postHeightVariant: We,
						scrollerItemRef: Fe,
						shouldShowGalleryTileOption: Ve,
						shouldShowInsightsButton: He,
						shouldShowNsfwListingBelow: Ge,
						showEditFlair: Je,
						subredditOrProfile: Ke,
						userIsOp: Qe,
						postId: Ze,
						postIds: Xe,
						onceInViewport: Ye,
						isOptionalTextEnabled: $e,
						showCTAExperimentDesign: et,
						isModQueueDisplayEnabled: tt,
						showRealtimeUpdateAnimation: st,
						isUpdatedContent: nt,
						isNightMode: ot,
						onSubscribe: rt = (() => {})
					} = e, it = Object(g.a)(), at = Object(pe.ib)(), dt = Object(r.e)(e => Object(pe.G)(e, {
						pageLayer: at
					})), ct = !!e.redditStyle || !!e["data-redditstyle"], lt = ct ? void 0 : E, ut = Object(l.a)(Ne), mt = Le && ut, pt = Object(d.a)(Ne), bt = Object(c.a)(Ne), ft = Object(G.c)(De), xt = Object(q.a)(De), ht = !!De.media && De.media.type === O.o.RTJSON, vt = Qe && ht, yt = s ? s - Y.a : void 0, gt = !!De.recommendationContext, Ot = !(ce && ve || we) || gt && ve, jt = (e => e === _e.jf.OnlyTitles)(We) && !Object(fe.a)(De), Pt = (e => e === _e.jf.MediumHeight)(We) && !Object(fe.a)(De), Et = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(j.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = o && o[1] && Object(j.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), wt = Object(r.d)(), _t = Object(r.e)(Ee.b), Ct = Object(r.e)(Ee.c), St = Object(r.e)(S.lb), kt = Object(Oe.a)(), It = De.permalink, Tt = e.isCommentPermalink ? Object(xe.b)(It) : Object(T.a)(It, void 0, kt), Nt = !!(null == C ? void 0 : C.shouldShowLinkedPosts), Lt = (!te || Nt || Ge) && !De.isSponsored, Mt = Object(k.t)(De, N), At = Object(n.useRef)(null), Bt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ye || Ye(Ie))
						})
					}, [Ye, Ie]);
					Object(y.a)(At, Bt);
					const [Rt, Dt] = Object(n.useState)(!1), Ut = Object(n.useCallback)(() => {
						Dt(!Rt), it(Object(ge.d)(Ze))
					}, [Rt, it, Ze]), Wt = !!(se && (null == Ke ? void 0 : Ke.isNSFW)), Ft = Object(n.useRef)({
						renderingObjectInfo: De
					}), Vt = Object(n.useCallback)(e => {
						(_t || Ct) && (e.preventDefault(), wt(Object(m.Z)(Object(xe.b)(De.permalink), De.id)))
					}, [wt, _t, Ct, De.id, De.permalink]), Ht = De && De.media && (De.media.type === O.o.TEXT || De.media.type === O.o.RTJSON), qt = Object(j.r)(De), [zt, Gt] = Object(n.useState)(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(X.b, {
						className: Object(I.a)(Ue.a.container, a, ye.a.largeAndMediumPostStyles, ye.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ye.a.mUseRedditTheme]: ct,
							[Ue.a.topCompactPost]: Et && Et.hasTopCompactPostStyles,
							[Ue.a.bottomCompactPost]: Et && Et.hasBottomCompactPostStyles,
							[Ue.a.shouldShowOverflow]: He,
							[Ue.a.realtimeAnimation]: st,
							[Ue.a.realtimeUpdated]: nt,
							[Ue.a.isNightMode]: ot
						}),
						isOverlay: Pe,
						style: tt && (st || nt) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(u.b)(e.flairStyleTemplate),
						post: De,
						onClick: Me,
						eventFactory: P
					}, o.a.createElement("div", {
						ref: At
					}), o.a.createElement(ie.a, {
						model: De,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ke,
						isVoteCountAnimation: Se,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: lt,
						redditStyle: ct,
						postId: Ze
					}), o.a.createElement(Z.a, {
						className: Object(I.a)(Ue.a.backgroundWrapper, {
							[Ue.a.isEvent]: Object(he.a)(De),
							[Ue.a.shouldUseRoundedBorder]: He,
							[Ue.a.realtimeAnimation]: st,
							[Ue.a.realtimeUpdated]: nt,
							[Ue.a.isNightMode]: ot
						}),
						"data-click-id": "background",
						flairStyleTemplate: lt,
						post: De,
						redditStyle: ct,
						overrideBackgroundColor: tt && (st || nt) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(W.a, {
						post: De
					}), Et && Et.showPinnnedHeader && o.a.createElement(re, null), Object(i.c)(De) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: De
					}), o.a.createElement(x.a, {
						post: De
					})), !Object(i.c)(De) && o.a.createElement(o.a.Fragment, null, qt && o.a.createElement(Q.a, {
						content: De.recommendationContext.content,
						layout: ue.g.Large,
						post: De
					}), o.a.createElement(de.a, {
						className: Ue.a.postTopLine,
						hideNSFWPref: _,
						hostPostData: C,
						iconClassName: Ue.a.postTopLineIcon,
						inSubredditOrProfile: te,
						isCommentsPage: !!ne,
						isCompactPinnedPost: !!Et,
						isCurrentUserProfilePost: oe,
						isModWithUserNotesPermissions: be,
						isOverlay: !!Pe,
						isTopicPage: !!we,
						listingKey: Te,
						post: De,
						shouldShowSubscribeButton: Ot,
						showSubreddit: Lt,
						showSubredditIcon: !0,
						subredditOrProfile: Ke,
						onSubscribed: () => {
							Gt(!0), rt()
						}
					}), o.a.createElement(ae.c, {
						className: Ue.a.postTitle,
						post: De,
						redditStyle: ct,
						size: ae.b.Large,
						titleColor: lt && lt.postTitleColor,
						isOverlay: Pe
					}), o.a.createElement(A.a, {
						className: Ue.a.adSupplementaryText,
						post: De,
						size: ae.b.Large
					}), De.source && !De.isSponsored && !Wt && o.a.createElement(o.a.Fragment, null, o.a.createElement(le.a, {
						className: Ue.a.sourceLink,
						post: De
					}), $e && De.media && De.media.type !== O.o.TEXT && De.media.type !== O.o.IMAGE && De.media.richtextContent && o.a.createElement(v.a, {
						content: De.media.richtextContent,
						rtJsonElementProps: Ft.current
					}))), o.a.createElement("div", {
						className: Ue.a.postMediaWrapper
					}, !Et && !Object(O.G)(De) && o.a.createElement(qe, {
						handlePostLinkClick: Vt,
						postPermalink: Tt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: St,
						shouldStylePostAfterVisitLink: Ht
					}, o.a.createElement($.a, {
						isGalleryTileLayoutDefault: me,
						isListing: !0,
						isMediumHeight: Pt,
						isNotCardView: !!Pe,
						isTitleOnly: jt,
						showCentered: !0,
						flairStyleTemplate: lt,
						post: De,
						availableWidth: yt,
						shouldLoad: w,
						scrollerItemRef: Fe,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ve
					})), Object(O.G)(De) && o.a.createElement(b.a, {
						post: De
					})), Object(k.v)(De, N) && o.a.createElement(L.a, {
						className: Ue.a.adLinkWrapper,
						ctaExperimentDesign: et && "card"
					}, o.a.createElement(M.a, {
						post: De,
						adLinkContent: Mt,
						ctaExperimentDesign: et && "card"
					})), Le && ut && xt && !tt && o.a.createElement("div", {
						className: Ue.a.modModeBannerWrapper
					}, o.a.createElement(H.a, {
						thing: De
					})), Le && ut && ft && !tt && o.a.createElement("div", {
						className: Ue.a.modModeBannerWrapper
					}, o.a.createElement(z.a, {
						onIgnoreReports: Ae,
						reportable: De
					})), Object(je.b)(De) && o.a.createElement(f.a, null), o.a.createElement(V.d, null), tt && o.a.createElement(K.a, {
						post: De
					}), De.discussionType === j.b.Chat && o.a.createElement(Re.a, {
						postId: De.id,
						className: Ue.a.liveLabel
					}), o.a.createElement("div", {
						className: Ue.a.flatListContainer
					}, o.a.createElement(D.a, {
						className: Ue.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: lt,
						model: De,
						onVoteClick: e.handleVote
					}), !De.isSurveyAd && (tt ? o.a.createElement(J.a, {
						content: De,
						listingKey: Te,
						hostPostData: C
					}) : o.a.createElement(F.c, {
						currentUser: p,
						hasModFlairPerms: pt,
						hasModFullPerms: bt,
						hasModPostPerms: ut,
						hostPostData: C,
						isCommentCountAnimation: Ce,
						isCountAnimShadowTestEnabled: ke,
						isLargePost: !0,
						isOverlay: !!Pe,
						listingKey: Te,
						modModeEnabled: Le,
						onClickInsightsButton: Ut,
						onIgnoreReports: Ae,
						onOpenReportsDropdown: Be,
						post: De,
						shouldShowInsightsButton: He,
						showEditPost: vt,
						showEditFlair: Je,
						useFlatlistBreakpoints: Object(ee.b)({
							editPost: !1,
							save: !mt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ke && Rt && o.a.createElement(U.a, {
						className: Ue.a.creatorStatsContainer,
						post: De,
						subreddit: Ke,
						isOwnProfileStats: !0
					})), (Object(j.s)(De) || dt) && Object(B.e)(De, p) && o.a.createElement(B.a, {
						postId: Ze,
						user: p
					}), ce && o.a.createElement(R.a, {
						post: De,
						postIds: null != Xe ? Xe : [],
						subredditId: null == Ke ? void 0 : Ke.id
					})), ce && qt && zt && Ke && o.a.createElement(ze, {
						postId: De.id,
						subredditId: Ke.id,
						subredditDisplayText: Ke.displayText,
						onDismiss: () => {
							Gt(!1)
						}
					}))
				});
			Ge.displayName = "LargePostMemoized";
			t.default = Object(be.b)(He(Object(me.b)(Ge)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(a);
			const c = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: d.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				u = s.n(l);
			const m = () => i.a.createElement("span", {
				className: u.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const f = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, i.a.createElement(m, null), i.a.createElement(c, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const y = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(x.e)(e => Object(h.a)(e, t));
				return Object(x.e)(v.e) ? i.a.createElement(f, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = s.n(i);
			const d = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: a.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
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
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: u,
						className: m
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), c && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
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
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === d.g.Classic,
						[u.a.compactLayout]: s === d.g.Compact,
						[u.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: m(n),
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(d.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: d,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: b || Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return oe
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./node_modules/reselect/es/index.js");
			const x = Object(f.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.zc
			}), e => e === p.Rd);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				y = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(P);
			const w = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(O.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(j.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(y.a, {
					className: Object(v.a)(E.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(g.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: E.a.subredditName
				}, r.displayText)) : null
			};
			var _ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				C = s("./src/reddit/connectors/PostViewable/index.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				T = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/hooks/useIsOverlay.ts"),
				L = s("./src/reddit/hooks/usePageLayer.ts"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				B = s.n(A);
			const R = e => {
				let {
					post: t
				} = e;
				const s = `${Object(M.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(M.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: B.a.postInformation
				}, o.a.createElement("h5", {
					className: B.a.title
				}, t.title), o.a.createElement("div", {
					className: B.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var D = s("./src/lib/isUrl/index.ts"),
				U = s("./src/reddit/actions/profile/index.ts"),
				W = s("./src/reddit/components/Thumbnail/index.tsx"),
				F = s("./src/reddit/components/UserIcon/index.tsx"),
				V = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				H = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				q = s("./src/reddit/selectors/profile.ts"),
				z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				G = s.n(z);
			const J = e => {
				let {
					post: t
				} = e;
				var s, r, i, a;
				const d = Object(l.d)(),
					c = Object(l.e)(Object(q.l)(t.author)),
					u = Object(n.useMemo)(() => Object(W.c)({
						post: t
					}), [t]),
					m = Object(n.useMemo)(() => Object(D.a)(u), [u]);
				Object(n.useEffect)(() => {
					m || d(Object(U.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(H.a)(null === (s = null == c ? void 0 : c.icon) || void 0 === s ? void 0 : s.url),
					b = Object(V.c)(null === (r = null == c ? void 0 : c.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: G.a.media
				}, m ? o.a.createElement(W.b, {
					post: t,
					url: u,
					className: G.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: G.a.mediaThumbnailContainer
				}) : null, !m && (null === (i = null == c ? void 0 : c.icon) || void 0 === i ? void 0 : i.url) && o.a.createElement("div", {
					className: G.a.userIconContainer
				}, o.a.createElement(F.a, {
					className: Object(v.a)({
						[G.a.snoovatarUserIcon]: p,
						[G.a.defaultUserIcon]: b
					}, G.a.userIcon),
					iconUrl: null === (a = null == c ? void 0 : c.icon) || void 0 === a ? void 0 : a.url,
					userName: c.name,
					wrapperClassName: G.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var K = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Q = s.n(K);
			const Z = Object(C.a)(null);
			var X = Object(k.b)(Z(e => {
					let {
						post: t
					} = e;
					const s = Object(L.a)(),
						n = Object(N.a)(),
						r = Object(T.a)(),
						i = Object(S.x)(s) && !n;
					return o.a.createElement(y.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(I.b)(t.permalink) : Object(_.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: Q.a.container
					}, o.a.createElement(R, {
						post: t
					}), o.a.createElement(J, {
						post: t
					})))
				})),
				Y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(Y);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(X, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const ne = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(x) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(u.y)(t, m.a.Click))
				}, o.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(w, {
					postId: n,
					className: se.a.communityLink
				}))
			};

			function oe(e) {
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
				}) : Object(d.B)(t) && Object(d.A)(t) ? o.a.createElement(ne, {
					post: t
				}) : Object(a.G)(t) ? o.a.createElement(c.a, {
					post: t
				}) : o.a.createElement(i.a, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/components/PostMeta/index.m.less"),
				P = s.n(j);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: j,
					isOverlay: E,
					isTopicPage: w,
					post: _,
					shouldShowSubscribeButton: C,
					subredditOrProfile: S,
					tooltipType: k
				} = e, I = !!w, T = Object(g.a)(), N = Object(r.e)(e => !!S && Object(i.i)(e, S.id)), L = !(!S || !Object(O.i)(S));
				return o.a.createElement("div", {
					className: P.a.metaContainer
				}, !n && !_.isSponsored && S && o.a.createElement(c.a, {
					postId: _.id,
					subredditName: S.name,
					isProfile: L
				}, o.a.createElement(b.a, {
					className: P.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: S.url,
						state: T
					}
				}, S.displayText)), S && S.isQuarantined && o.a.createElement(p.a, null), !n && !_.isSponsored && S && C && !j && o.a.createElement(f.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(y.n)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: S.name,
						type: Object(O.i)(S) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: _.id,
					size: h.d.XXS,
					small: !0
				}), !n && !_.isSponsored && o.a.createElement(v.b, null), !n && !_.isSponsored && o.a.createElement(l.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), o.a.createElement(m.g, {
					className: P.a.postTopMeta,
					flairStyleTemplate: t,
					post: _,
					tooltipType: k,
					isModWithUserNotesPermissions: N
				}), o.a.createElement(u.a, {
					displayText: S ? S.displayText : null,
					inSubredditOrProfile: !!n,
					post: _,
					tooltipType: k
				}), !I && o.a.createElement(a.a, {
					hideCta: s,
					thing: _,
					tooltipType: E ? m.f.Lightbox : void 0
				}), N && o.a.createElement(d.a, {
					postOrComment: _,
					className: P.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(_);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: _,
					hostPostData: S,
					iconClassName: k,
					inSubredditOrProfile: I,
					isCommentsPage: T,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: L,
					isModQueuePage: M,
					isModWithUserNotesPermissions: A,
					isOverlay: B,
					isTopicPage: R,
					listingKey: D,
					post: U,
					shouldShowSubscribeButton: W,
					showCornerOutboundLink: F,
					showSubreddit: V,
					showSubredditIcon: H,
					subredditOrProfile: q,
					isFollowed: z,
					shouldShowFollowButton: G,
					onFollowPostClick: J,
					onSubscribed: K
				} = e;
				const Q = R,
					Z = !(!q || !Object(P.i)(q)),
					X = Object(i.e)(e => {
						if (!Z) return !0;
						const t = Object(w.Jb)(e, U.author || "");
						return !t || t.enableFollowers
					}),
					Y = Object(i.e)(E.a);
				return r.a.createElement("div", {
					className: Object(a.a)(C.a.container, t)
				}, V && q && r.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: q.url
				}, H && r.a.createElement(b.b, {
					className: Object(a.a)(C.a.subredditIcon, k),
					shouldHideNsfwIcon: _,
					subredditOrProfile: q
				}))), r.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, V && r.a.createElement(l.h, {
					type: U.belongsTo.type,
					id: U.belongsTo.id
				}), r.a.createElement(p.g, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: A,
					tooltipType: B ? p.f.Lightbox : void 0,
					post: U,
					showSub: V,
					subredditOrProfile: q
				}), r.a.createElement(m.a, {
					className: C.a.postBadges,
					displayText: q ? q.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: N,
					post: U,
					tooltipType: B ? p.f.Lightbox : void 0
				}), !Q && r.a.createElement(d.a, {
					isPostDetail: T,
					thing: U,
					tooltipType: B ? p.f.Lightbox : void 0
				}), A && r.a.createElement(c.a, {
					postOrComment: U,
					className: C.a.addModNote
				})), q && X && V && W && !L && r.a.createElement(x.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => (K && !e && K(), Object(g.n)(U.id, e ? "unsubscribe" : "subscribe", "post", D, S)),
					identifier: {
						name: q.name,
						type: Z ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: U.id,
					size: v.d.XS,
					priority: Y ? v.c.Secondary : void 0,
					isShredditParityEnabled: Y
				}), F && r.a.createElement(y.b, {
					isSponsored: U.isSponsored,
					postId: U.id,
					href: Object(j.E)(U),
					source: U.source
				}, r.a.createElement(O.a, {
					className: C.a.outboundLinkIcon
				})), G && X && r.a.createElement(u.a, {
					isFilled: !!z,
					onClick: J,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
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
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				f = d.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									o && n(s, o), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(f))
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return J
			})), s.d(t, "b", (function() {
				return K
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/constants/tracking.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const h = "related_community_recommendations_v1",
				v = (e, t) => {
					let {
						postId: s,
						subredditId: n,
						variant: o,
						numberItems: r,
						seenItems: i,
						seen: a = !0,
						modelVersion: d = h,
						pageType: c
					} = e;
					return {
						...x.q(t),
						post: s ? x.M(t, s) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: c,
							reason: n
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: d,
							type: o
						},
						visibility: {
							number_items: r,
							number_seen_items: i.length,
							seen_items: i,
							seen: a
						}
					}
				};
			var y = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/lib/initializeClient/installReducer.ts"),
				j = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const P = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.b: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									pending: !0
								}
							}
						}
						case j.c: {
							const {
								subredditId: s,
								subreddits: n = {},
								modelVersion: o
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									modelVersion: o,
									subreddits: Object.keys(n),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case j.a: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				w = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./node_modules/reselect/es/index.js");
			Object(O.a)({
				features: {
					relatedCommunitiesRecommendations: E
				}
			});
			const C = Object(_.a)([(e, t) => {
					var s, n, o;
					return null !== (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.relatedCommunitiesRecommendations) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : P
				}], e => e),
				S = Object(_.a)([(e, t) => C(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				k = Object(_.a)([e => e, w.fb], (e, t) => t.map(t => ({
					...t,
					...Object(w.y)(e, {
						subredditId: t.id
					})
				})));
			var I = s("./src/config.ts");
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var N, L = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					n = [s, s + 1, s + 2];
				return i.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == n ? void 0 : n.map((e, t) => i.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${I.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: T._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function M(e) {
				switch (e) {
					case y.tf.Minimalist:
					case y.rf.Minimalist:
					case y.sf.Minimalist:
						return N.MINIMALIST;
					case y.tf.HotnessSignals:
					case y.rf.SocialSignals:
					case y.sf.SocialSignals:
						return N.SIGNALS;
					case y.tf.Description:
					case y.rf.Description:
					case y.sf.Description:
						return N.DESCRIPTION
				}
				return N.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(N || (N = {}));
			const A = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: s,
					variant: r,
					postId: c,
					originalSubredditId: h,
					pageType: y,
					columnLayout: O = "single",
					dismissCallback: j
				} = e;
				const P = Object(d.a)(),
					E = Object(l.e)(e => k(e, {
						subredditIds: t
					})),
					w = {
						postId: c,
						subredditId: h,
						variant: r,
						numberItems: t.length,
						seenItems: t.slice(0, s),
						pageType: y
					},
					_ = M(r);
				return i.a.createElement("ul", {
					className: `pb-[8px] ${"double"===O&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, E.map((e, t) => {
					let {
						id: r,
						subscribers: d,
						accountsActive: c,
						icon: l,
						communityIcon: h,
						name: y,
						url: E,
						displayText: C,
						publicDescription: S
					} = e;
					if (t >= s) return null;
					const k = o.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [o.fbt._param("Number of subscribers", Object(u.b)(d)), o.fbt._plural(d)], {
							hk: "3fAm5T"
						}),
						I = c ? `• ${o.fbt._("{Number of subscribers online} Online",[o.fbt._param("Number of subscribers online",Object(u.b)(c))],{hk:"4s9dx5"})}` : "",
						T = () => {
							j && j(), P(((e, t, s) => o => ({
								...v(e, o),
								subreddit: x.ob(o, t),
								action: f.c.CLICK,
								noun: n.TITLE_SUBREDDIT,
								actionInfo: {
									...v(e, o).actionInfo,
									position: s
								}
							}))(w, r, t))
						};
					return i.a.createElement("li", {
						key: r,
						className: "px-[16px] py-[8px] flex items-start"
					}, i.a.createElement("div", {
						onClick: T
					}, i.a.createElement(m.b, {
						iconUrl: (null == l ? void 0 : l.url) || h,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: E || `/${C}`
					})), i.a.createElement("div", {
						className: `${"single"===O&&"truncate"} flex flex-col w-100`
					}, i.a.createElement("div", {
						className: "flex items-start"
					}, i.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, i.a.createElement(g.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: E || `/${C}`,
						onClick: T
					}, C, i.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, _ === N.MINIMALIST && k, (_ === N.SIGNALS || _ === N.DESCRIPTION) && i.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, i.a.createElement(L, {
						seed: t
					}), i.a.createElement("div", null, `${k} ${I}`))))), i.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: r,
						identifier: {
							name: y,
							type: b.a.SUBREDDIT
						},
						size: a.d.XS,
						getEventFactory: e => e ? ((e, t, s) => o => ({
							...v(e, o),
							subreddit: x.ob(o, t),
							action: f.c.CLICK,
							noun: n.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...v(e, o).actionInfo,
								position: s
							}
						}))(w, r, t) : ((e, t, s) => o => ({
							...v(e, o),
							subreddit: x.ob(o, t),
							action: f.c.CLICK,
							noun: n.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...v(e, o).actionInfo,
								position: s
							}
						}))(w, r, t)
					})), _ === N.DESCRIPTION && i.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===O?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, i.a.createElement(g.default, {
						to: E || `/${C}`,
						onClick: T
					}, S))))
				}))
			};
			var B = s("./src/lib/makeActionCreator/index.ts"),
				R = s("./src/lib/makeGqlRequest/index.ts"),
				D = s("./src/lib/makeRequest/index.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				W = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				F = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const V = async (e, t) => {
				const s = await Object(R.a)(e, {
					...F,
					variables: t
				});
				if (!Object(D.c)(s)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, s, n, o;
					const r = {
						modelVersion: null !== (s = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== s ? s : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (o = null === (n = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === n ? void 0 : n.recommendations) || void 0 === o ? void 0 : o.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(W.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(U.a)(t)
						}
					}, r)
				})(s.body.data)
			};
			Object(O.a)({
				features: {
					relatedCommunitiesRecommendations: E
				}
			});
			const H = Object(B.a)(j.b),
				q = Object(B.a)(j.c),
				z = Object(B.a)(j.a),
				G = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					t(H({
						subredditId: e
					}));
					try {
						const s = await V(o(), {
							subredditId: e
						});
						t(q({
							subredditId: e,
							modelVersion: s.modelVersion,
							subreddits: s.models,
							subredditAboutInfo: s.aboutInfo
						}))
					} catch (r) {
						t(z({
							subredditId: e,
							ApiError: r
						}))
					}
				};
			var J;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(J || (J = {}));
			const K = e => {
				let {
					subredditDisplayText: t,
					variant: s,
					postId: u,
					subredditId: m,
					onDismiss: p,
					pageType: b
				} = e;
				const x = M(s),
					h = function(e) {
						let {
							pageType: t,
							activeUIVariant: s
						} = e;
						switch (t) {
							case J.Profile:
							case J.Community:
								return s === N.MINIMALIST ? "double" : "single";
							case J.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: x
					}),
					y = function(e, t) {
						return "double" === t ? e === N.DESCRIPTION ? 2 : 4 : 3
					}(x, h),
					[g, O] = Object(r.useState)(y),
					j = Object(d.a)(),
					{
						recommendations: P,
						fetchPending: E,
						recommendationsLoaded: w,
						fetchError: _,
						modelVersion: k
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const s = Object(l.d)(),
							n = Object(l.e)(e => S(e, t)),
							{
								pending: o,
								loaded: i,
								error: a,
								modelVersion: d
							} = Object(l.e)(e => C(e, t)),
							c = !i && !o;
						return Object(r.useEffect)(() => {
							c && s(G(t))
						}, [s, t, c]), {
							recommendations: n,
							fetchPending: o,
							recommendationsLoaded: i,
							fetchError: a,
							modelVersion: d
						}
					}({
						subredditId: m
					}),
					I = g < (P.length || 0),
					T = Object(r.useMemo)(() => !w || E ? null : _ || P.length <= 0 ? {
						modelVersion: k,
						seen: !1,
						postId: u,
						subredditId: m,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: k,
						seen: !0,
						postId: u,
						subredditId: m,
						variant: s,
						numberItems: P.length,
						seenItems: P.slice(0, y),
						pageType: b
					}, [w, E, _, P, k, u, m, s, y, b]);
				if (Object(r.useEffect)(() => {
						j && T && j((e => t => ({
							...v(e, t),
							action: f.c.VIEW,
							noun: n.RECOMMENDATION_MODULE
						}))(T))
					}, [j, T]), !w || P.length <= 0) return null;
				return i.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, i.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, i.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, o.fbt._("Similar to {subreddit display text}", [o.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), i.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": o.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), T && j((e => t => ({
							...v(e, t),
							action: f.c.CLICK,
							noun: n.CLOSE
						}))({
							...T,
							seenItems: null == P ? void 0 : P.slice(0, g)
						}))
					}
				}, i.a.createElement(c.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(A, {
					recommendedCommunities: P,
					numberOfVisibleItems: g,
					postId: u,
					originalSubredditId: m,
					variant: s,
					pageType: b,
					columnLayout: h,
					dismissCallback: p
				}), I && i.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, i.a.createElement(a.a, {
					kind: a.b.Button,
					priority: a.c.Tertiary,
					onClick: () => {
						const e = g + y;
						O(e), j((e => t => ({
							...v(e, t),
							action: f.c.CLICK,
							noun: n.SHOW_MORE
						}))({
							...T,
							seenItems: null == P ? void 0 : P.slice(0, e)
						}))
					}
				}, o.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/endpoints/redditor/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/redditGQL/operations/RedditorIdByName.json"),
				i = s("./src/redditGQL/operations/RedditorNameById.json");
			const a = async (e, t) => {
				var s;
				const i = await Object(n.a)(e, {
					...r,
					variables: t
				});
				return Object(o.c)(i) && (null === (s = i.body.data.redditorInfoByName) || void 0 === s ? void 0 : s.id) || null
			}, d = async (e, t) => {
				const s = await Object(n.a)(e, {
					...i,
					variables: t
				});
				return Object(o.c)(s) && s.body.data.redditorInfoById.name || null
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return h
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const u = {},
				m = e => Object(a.f)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.f)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				a = (e, t) => s => ({
					...Object(r.q)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.nb)(s),
					post: Object(r.M)(s, e),
					userSubreddit: Object(r.wb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.q)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.M)(s, t),
					subreddit: Object(r.nb)(s),
					userSubreddit: Object(r.wb)(s)
				}),
				c = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.q)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.M)(t, e, void 0, 0),
					profile: Object(r.V)(t)
				}),
				u = (e, t, s) => n => ({
					...Object(r.q)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: c(t)
					}),
					post: Object(r.M)(n, e, void 0, s)
				}),
				m = (e, t, s, n, i, a) => d => ({
					...Object(r.q)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.M)(d, e, void 0, a),
					subreddit: Object(r.nb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.q)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.M)(n, e, void 0, s),
					subreddit: Object(r.nb)(n)
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(d);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return b
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				a = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(i) || !!e.match(d),
				p = e => !e.match(d) && (!e.match(a) && (!!e.match(c) || !!e.match(l))),
				b = (e, t) => !!m(t) && [n.Wf.Enabled, n.Wf.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Ff
				})),
				f = (e, t) => !!t.match(a) && [n.Wf.Enabled, n.Wf.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Df
				})),
				x = (e, t) => !!p(t) && [n.Wf.Enabled, n.Wf.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Ef
				})),
				h = (e, t) => !(!p(t) && !m(t)) && Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.me
				}) === n.Rd,
				v = (e, t) => {
					if (!t.match(a) && !m(t)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Cf
					}) === n.Rd
				},
				y = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: n.Gf
					})
				},
				g = (e, t) => !!(e => !!e.match(u))(t) && (y(e) === n.Wf.Enabled || y(e) === n.Wf.HardReload),
				O = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Jf
					})
				},
				j = (e, t) => !!(e => !!e.match(u))(t) && O(e) === n.Wf.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/experiments/shredditMigration.ts"),
				a = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const l = e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				},
				u = (e, t) => {
					if (!l(t)) return !1;
					const s = (e => {
						return Object(d.c)(e, {
							experimentEligibilitySelector: c.e,
							experimentName: a.Bf
						})
					})(e);
					return s === a.Wf.Enabled || s === a.Wf.HardReload
				},
				m = Object(o.a)(r.S, e => !e),
				p = (e, t) => {
					const s = t();
					e.block(e => {
						let t = !1;
						if (Object(r.S)(s)) {
							const n = Object(i.h)(s, e.pathname),
								o = Object(i.b)(s, e.pathname);
							(n || o) && (t = !0)
						} else {
							const n = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								o = Object(i.c)(s, e.pathname),
								r = Object(i.f)(s, e.pathname),
								a = Object(i.d)(s, e.pathname),
								d = Object(i.e)(s, e.pathname),
								m = ((e, t) => l(t) && Object(c.f)(e))(s, e.pathname),
								p = u(s, e.pathname),
								b = Object(i.g)(s, e.pathname);
							(o || n || r || a || d || m || p || b) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(n.f)(s), window.location.href = t, !1
						}
					})
				}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.kg,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(n.a)(i, e => e === o.eg)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Bg)(t)
				},
				d = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/RedditorIdByName.json": function(e) {
			e.exports = JSON.parse('{"id":"a24cf5c8adf7"}')
		},
		"./src/redditGQL/operations/RedditorNameById.json": function(e) {
			e.exports = JSON.parse('{"id":"7206aafc3965"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.a7b37fbe189f4306a0ca.js.map