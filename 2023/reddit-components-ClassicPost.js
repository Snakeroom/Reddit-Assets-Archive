// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.54b867afc69af5cd0bd9.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						x = !a && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !O && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
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
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: v
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
					} : m ? o = {
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
					} : a ? o = {
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : j ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? w = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? w = (w = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? w = (w = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? w = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? w = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? w = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? w = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (w = s(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (o.osversion = w);
					var C = !o.windows && w.split(".")[0];
					return O || c || "ipad" == r || a && (3 == C || C >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function a(e, n, o) {
					var a = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
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
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
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

			function u(e) {
				return o(l(e)).left + a(e).scrollLeft
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

			function f(e, t, s) {
				void 0 === s && (s = !1);
				var n, i, m = l(t),
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
				return (b || !b && !s) && (("body" !== d(t) || p(m)) && (h = (n = t) !== r(n) && c(n) ? {
					scrollLeft: (i = n).scrollLeft,
					scrollTop: i.scrollTop
				} : a(n)), c(t) ? ((x = o(t)).x += t.clientLeft, x.y += t.clientTop) : m && (x.x = u(m))), {
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
				var s = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					n = "body" === d(s),
					o = r(s),
					a = n ? [o].concat(o.visualViewport || [], p(s) ? s : []) : s,
					i = t.concat(a);
				return n ? i : i.concat(x(h(a)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = r(e), s = g(e); s && v(s) && "static" === m(s).position;) s = g(s);
				return s && "body" === d(s) && "static" === m(s).position ? t : s || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var s = m(t);
						if ("none" !== s.transform || "none" !== s.perspective || "auto" !== s.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var y = "top",
				j = "bottom",
				w = "right",
				C = "left",
				P = "auto",
				E = [y, j, w, C],
				_ = "start",
				k = "end",
				S = "clippingParents",
				N = "viewport",
				L = "popper",
				I = "reference",
				M = E.reduce((function(e, t) {
					return e.concat([t + "-" + _, t + "-" + k])
				}), []),
				T = [].concat(E, [P]).reduce((function(e, t) {
					return e.concat([t, t + "-" + _, t + "-" + k])
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
					n = void 0 === s ? [] : s,
					o = t.defaultOptions,
					r = void 0 === o ? D : o;
				return function(e, t, s) {
					void 0 === s && (s = r);
					var o, a, c = {
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
						u = {
							state: c,
							setOptions: function(s) {
								m(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), s), c.scrollParents = {
									reference: i(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
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
											instance: u,
											options: n
										});
										d.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										s = e.popper;
									if (R(t, s)) {
										c.rects = {
											reference: f(t, O(s), "fixed" === c.options.strategy),
											popper: b(s)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[n],
													r = o.fn,
													a = o.options,
													i = void 0 === a ? {} : a,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: i,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(o())
									}))
								}))), a
							}),
							destroy: function() {
								m(), l = !0
							}
						};
					if (!R(e, t)) return u;

					function m() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(s).then((function(e) {
						!l && s.onFirstUpdate && s.onFirstUpdate(e)
					})), u
				}
			}
			var U = {
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

			function z(e) {
				var t, s = e.reference,
					n = e.element,
					o = e.placement,
					r = o ? F(o) : null,
					a = o ? V(o) : null,
					i = s.x + s.width / 2 - n.width / 2,
					c = s.y + s.height / 2 - n.height / 2;
				switch (r) {
					case y:
						t = {
							x: i,
							y: s.y - n.height
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
					case C:
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
				var d = r ? H(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case _:
							t[d] = Math.floor(t[d]) - Math.floor(s[l] / 2 - n[l] / 2);
							break;
						case k:
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

			function J(e) {
				var t, s = e.popper,
					n = e.popperRect,
					o = e.placement,
					a = e.offsets,
					i = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							s = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(s * n) / n || 0
						}
					}(a),
					m = u.x,
					p = u.y,
					f = a.hasOwnProperty("x"),
					b = a.hasOwnProperty("y"),
					h = C,
					x = y,
					v = window;
				if (d) {
					var g = O(s);
					g === r(s) && (g = l(s)), o === y && (x = j, p -= g.clientHeight - n.height, p *= c ? 1 : -1), o === C && (h = w, m -= g.clientWidth - n.width, m *= c ? 1 : -1)
				}
				var P, E = Object.assign({
					position: i
				}, d && q);
				return c ? Object.assign(Object.assign({}, E), {}, ((P = {})[x] = b ? "0" : "", P[h] = f ? "0" : "", P.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", P)) : Object.assign(Object.assign({}, E), {}, ((t = {})[x] = b ? p + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Y(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function K(e, t) {
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
				return t === N ? Q(function(e) {
					var t = r(e),
						s = l(e),
						n = t.visualViewport,
						o = s.clientWidth,
						a = s.clientHeight,
						i = 0,
						c = 0;
					return n && (o = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = n.offsetLeft, c = n.offsetTop)), {
						width: o,
						height: a,
						x: i + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						s = a(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						i = -s.scrollLeft + u(e),
						c = -s.scrollTop;
					return "rtl" === m(n || t).direction && (i += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, s) {
				var n = "clippingParents" === t ? function(e) {
						var t = x(e),
							s = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? O(e) : e;
						return i(s) ? t.filter((function(e) {
							return i(e) && K(e, s)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [s]),
					r = o[0],
					a = o.reduce((function(t, s) {
						var n = $(e, s);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
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

			function ne(e, t) {
				void 0 === t && (t = {});
				var s = t,
					n = s.placement,
					r = void 0 === n ? e.placement : n,
					a = s.boundary,
					c = void 0 === a ? S : a,
					d = s.rootBoundary,
					u = void 0 === d ? N : d,
					m = s.elementContext,
					p = void 0 === m ? L : m,
					f = s.altBoundary,
					b = void 0 !== f && f,
					h = s.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : se(x, E)),
					g = p === L ? I : L,
					O = e.elements.reference,
					C = e.rects.popper,
					P = e.elements[b ? g : p],
					_ = ee(i(P) ? P : P.contextElement || l(e.elements.popper), c, u),
					k = o(O),
					M = z({
						reference: k,
						element: C,
						strategy: "absolute",
						placement: r
					}),
					T = Q(Object.assign(Object.assign({}, C), M)),
					A = p === L ? T : k,
					B = {
						top: _.top - A.top + v.top,
						bottom: A.bottom - _.bottom + v.bottom,
						left: _.left - A.left + v.left,
						right: A.right - _.right + v.right
					},
					D = e.modifiersData.offset;
				if (p === L && D) {
					var R = D[r];
					Object.keys(B).forEach((function(e) {
						var t = [w, j].indexOf(e) >= 0 ? 1 : -1,
							s = [y, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[s] * t
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

			function ae(e) {
				return [y, w, j, C].some((function(t) {
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
								n = e.options,
								o = n.scroll,
								a = void 0 === o || o,
								i = n.resize,
								c = void 0 === i || i,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", s.update, U)
								})), c && d.addEventListener("resize", s.update, U),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", s.update, U)
									})), c && d.removeEventListener("resize", s.update, U)
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
								a = void 0 === r || r,
								i = {
									placement: F(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
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
								a = T.reduce((function(e, s) {
									return e[s] = function(e, t, s) {
										var n = F(e),
											o = [C, y].indexOf(n) >= 0 ? -1 : 1,
											r = "function" == typeof s ? s(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : s,
											a = r[0],
											i = r[1];
										return a = a || 0, i = (i || 0) * o, [C, w].indexOf(n) >= 0 ? {
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
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = a
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
								for (var o = s.mainAxis, r = void 0 === o || o, a = s.altAxis, i = void 0 === a || a, c = s.fallbackPlacements, d = s.padding, l = s.boundary, u = s.rootBoundary, m = s.altBoundary, p = s.flipVariations, f = void 0 === p || p, b = s.allowedAutoPlacements, h = t.options.placement, x = F(h), v = c || (x === h || !f ? [Z(h)] : function(e) {
										if (F(e) === P) return [];
										var t = Z(e);
										return [Y(e), t, Y(t)]
									}(h)), g = [h].concat(v).reduce((function(e, s) {
										return e.concat(F(s) === P ? function(e, t) {
											void 0 === t && (t = {});
											var s = t,
												n = s.placement,
												o = s.boundary,
												r = s.rootBoundary,
												a = s.padding,
												i = s.flipVariations,
												c = s.allowedAutoPlacements,
												d = void 0 === c ? T : c,
												l = V(n),
												u = (l ? i ? M : M.filter((function(e) {
													return V(e) === l
												})) : E).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, s) {
													return t[s] = ne(e, {
														placement: s,
														boundary: o,
														rootBoundary: r,
														padding: a
													})[F(s)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: s,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : s)
									}), []), O = t.rects.reference, k = t.rects.popper, S = new Map, N = !0, L = g[0], I = 0; I < g.length; I++) {
									var A = g[I],
										B = F(A),
										D = V(A) === _,
										R = [y, j].indexOf(B) >= 0,
										W = R ? "width" : "height",
										U = ne(t, {
											placement: A,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										H = R ? D ? w : C : D ? j : y;
									O[W] > k[W] && (H = Z(H));
									var z = Z(H),
										q = [];
									if (r && q.push(U[B] <= 0), i && q.push(U[H] <= 0, U[z] <= 0), q.every((function(e) {
											return e
										}))) {
										L = A, N = !1;
										break
									}
									S.set(A, q)
								}
								if (N)
									for (var J = function(e) {
											var t = g.find((function(t) {
												var s = S.get(t);
												if (s) return s.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return L = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === J(G)) break
									}
								t.placement !== L && (t.modifiersData[n]._skip = !0, t.placement = L, t.reset = !0)
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
								a = s.altAxis,
								i = void 0 !== a && a,
								c = s.boundary,
								d = s.rootBoundary,
								l = s.altBoundary,
								u = s.padding,
								m = s.tether,
								p = void 0 === m || m,
								f = s.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = ne(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = F(t.placement),
								g = V(t.placement),
								P = !g,
								E = H(v),
								k = "x" === E ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								N = t.rects.reference,
								L = t.rects.popper,
								I = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								M = {
									x: 0,
									y: 0
								};
							if (S) {
								if (r) {
									var T = "y" === E ? y : C,
										A = "y" === E ? j : w,
										B = "y" === E ? "height" : "width",
										D = S[E],
										R = S[E] + x[T],
										W = S[E] - x[A],
										U = p ? -L[B] / 2 : 0,
										z = g === _ ? N[B] : L[B],
										q = g === _ ? -L[B] : -N[B],
										J = t.elements.arrow,
										G = p && J ? b(J) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = Z[T],
										Y = Z[A],
										K = oe(0, N[B], G[B]),
										Q = P ? N[B] / 2 - U - K - X - I : z - K - X - I,
										$ = P ? -N[B] / 2 + U + K + Y + I : q + K + Y + I,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === E ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0,
										re = S[E] + Q - se - te,
										ae = S[E] + $ - se,
										ie = oe(p ? Math.min(R, re) : R, D, p ? Math.max(W, ae) : W);
									S[E] = ie, M[E] = ie - D
								}
								if (i) {
									var ce = "x" === E ? y : C,
										de = "x" === E ? j : w,
										le = S[k],
										ue = oe(le + x[ce], le, le - x[de]);
									S[k] = ue, M[k] = ue - le
								}
								t.modifiersData[n] = M
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
								a = F(s.placement),
								i = H(a),
								c = [C, w].indexOf(a) >= 0 ? "height" : "width";
							if (o && r) {
								var d = s.modifiersData[n + "#persistent"].padding,
									l = b(o),
									u = "y" === i ? y : C,
									m = "y" === i ? j : w,
									p = s.rects.reference[c] + s.rects.reference[i] - r[i] - s.rects.popper[c],
									f = r[i] - s.rects.reference[i],
									h = O(o),
									x = h ? "y" === i ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = p / 2 - f / 2,
									g = d[u],
									P = x - l[c] - d[m],
									E = x / 2 - l[c] / 2 + v,
									_ = oe(g, E, P),
									k = i;
								s.modifiersData[n] = ((t = {})[k] = _, t.centerOffset = _ - E, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								s = e.options,
								n = e.name,
								o = s.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								a = s.padding,
								i = void 0 === a ? 0 : a;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && K(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof i ? i : se(i, E))
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
								a = ne(t, {
									elementContext: "reference"
								}),
								i = ne(t, {
									altBoundary: !0
								}),
								c = re(a, n),
								d = re(i, o, r),
								l = ae(c),
								u = ae(d);
							t.modifiersData[s] = {
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
				ce = s("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = s.n(ce),
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
						a = n.useState({
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
						u = n.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var n = (s.createPopper || ie)(e, t, l);
							return u.current = n,
								function() {
									n.destroy(), u.current = null
								}
						}
					}), [e, t, s.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: i.styles,
						attributes: i.attributes,
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
							if (n && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && a instanceof Set) {
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				f = s("./src/reddit/components/CreatorStats/loader.tsx");
			var b = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "none",
					className: t
				}, o.a.createElement("g", {
					clipPath: "url(#clip0_826_294874)"
				}, o.a.createElement("path", {
					d: "M9.13086 15.2315V18.9725C9.1307 19.0439 9.1119 19.114 9.07631 19.1759C9.04072 19.2378 8.98958 19.2893 8.92795 19.3254C8.86633 19.3615 8.79635 19.3808 8.72495 19.3815C8.65354 19.3822 8.58319 19.3643 8.52086 19.3295L1.19986 15.2324C1.10316 15.178 1.02266 15.0989 0.966602 15.0031C0.910549 14.9074 0.880958 14.7984 0.88086 14.6874V6.53545C0.880748 6.46296 0.899904 6.39175 0.936365 6.3291C0.972825 6.26645 1.02528 6.21461 1.08836 6.1789C1.15144 6.14319 1.22288 6.12488 1.29536 6.12586C1.36784 6.12683 1.43876 6.14705 1.50086 6.18445L4.66786 8.08445C4.80909 8.16923 4.92596 8.28912 5.00709 8.43247C5.08823 8.57582 5.13087 8.73773 5.13086 8.90245V12.5145L8.63086 14.3934C8.78199 14.4751 8.90824 14.5961 8.99625 14.7436C9.08427 14.8911 9.13078 15.0597 9.13086 15.2315ZM9.88086 4.93145L13.3809 6.81345C13.5262 6.89146 13.6893 6.93044 13.8543 6.92658C14.0192 6.92273 14.1803 6.87617 14.3219 6.79145L17.5089 4.87945C17.5704 4.84257 17.6211 4.79016 17.656 4.72746C17.6909 4.66477 17.7087 4.59401 17.7076 4.52228C17.7064 4.45055 17.6865 4.38037 17.6497 4.31879C17.6129 4.25721 17.5605 4.2064 17.4979 4.17145L10.1869 0.0794502C10.0933 0.0273472 9.98796 0 9.88086 0C9.77376 0 9.66843 0.0273472 9.57486 0.0794502L2.25886 4.17945C2.19626 4.21449 2.14398 4.26538 2.10726 4.32701C2.07055 4.38863 2.05069 4.45884 2.04967 4.53057C2.04866 4.6023 2.06653 4.67303 2.10149 4.73567C2.13645 4.79831 2.18728 4.85066 2.24886 4.88745L5.43486 6.79945C5.57661 6.88416 5.73788 6.93071 5.90296 6.93457C6.06805 6.93842 6.23131 6.89945 6.37686 6.82145L9.88086 4.93145ZM14.6309 12.5104L11.1309 14.3895C10.9796 14.4712 10.8532 14.5923 10.7652 14.74C10.6772 14.8877 10.6308 15.0565 10.6309 15.2284V18.9694C10.6308 19.0408 10.6495 19.111 10.6849 19.1729C10.7204 19.2349 10.7714 19.2864 10.833 19.3225C10.8946 19.3586 10.9645 19.378 11.0359 19.3787C11.1073 19.3794 11.1776 19.3614 11.2399 19.3265L18.5609 15.2264C18.6579 15.1723 18.7387 15.0933 18.795 14.9975C18.8512 14.9016 18.8809 14.7926 18.8809 14.6814V6.53545C18.881 6.46296 18.8618 6.39175 18.8254 6.3291C18.7889 6.26645 18.7364 6.21461 18.6734 6.1789C18.6103 6.14319 18.5388 6.12488 18.4664 6.12586C18.3939 6.12683 18.323 6.14705 18.2609 6.18445L15.0939 8.08445C14.9526 8.16923 14.8358 8.28912 14.7546 8.43247C14.6735 8.57582 14.6308 8.73773 14.6309 8.90245V12.5104Z",
					fill: "#0F1A1C"
				})), o.a.createElement("defs", null, o.a.createElement("clipPath", {
					id: "clip0_826_294874"
				}, o.a.createElement("rect", {
					width: "20",
					height: "20",
					fill: "white"
				}))))
			};
			var h = () => o.a.createElement("div", {
					className: "flex items-center justify-center w-full rounded p-sm bg-[color:var(--newCommunityTheme-bodyTextAlpha03)]"
				}, o.a.createElement(b, {
					className: "h-[18px]"
				})),
				x = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(x),
				g = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => o.a.createElement("div", {
					className: v.a.endedClassicContainer
				}, o.a.createElement(g.a, {
					className: v.a.muteIcon
				})),
				j = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				w = s("./src/reddit/components/ExpandoButton/index.tsx"),
				C = s("./src/reddit/components/Flatlist/index.tsx"),
				P = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				k = s("./src/reddit/components/ModModeReports/index.tsx"),
				S = s("./src/reddit/components/ModModeReports/helpers.ts"),
				N = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				L = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				M = s("./src/reddit/components/PostMeta/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				R = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = s("./src/reddit/models/Audio/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				H = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				q = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				J = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Z = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				X = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(Y),
				Q = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/redditGQL/types.ts"),
				ee = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				te = s("./src/reddit/components/ClassicPost/index.m.less"),
				se = s.n(te);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: v,
					eventFactory: g,
					flairStyleTemplate: O,
					formatTitle: V,
					hostPostData: Y,
					isCheckboxSelected: te,
					isCurrentUserProfilePost: oe,
					isFrontpage: re,
					isGalleryTileLayoutDefault: ae,
					isLoggedIn: ie,
					isOverlay: ce,
					imageGalleryCurrentItem: de,
					moderatorPermissions: le,
					modModeEnabled: ue,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: fe,
					onSizeChanged: be,
					poll: he,
					post: xe,
					postId: ve,
					redditStyle: ge,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: ye,
					showEditFlair: je,
					showMedia: we,
					shouldShowInsightsButton: Ce,
					subredditOrProfile: Pe,
					toggleCheckbox: Ee,
					userIsOp: _e,
					shouldShowGalleryTileOption: ke,
					showCTAExperimentDesign: Se
				} = e, Ne = Object(l.a)(), Le = Object(d.a)(x);
				Object(n.useEffect)(() => {
					be && Le !== x && be(xe.id)
				}, [x, be, xe.id, Le]);
				const Ie = ge ? void 0 : O,
					Me = s || void 0,
					Te = Object(J.a)(le),
					Ae = Object(z.a)(le),
					Be = Object(q.a)(le),
					De = ue && J.a,
					Re = Object(_.a)(xe),
					We = Object(S.c)(xe),
					Ue = !!xe.media && xe.media.type === U.o.RTJSON,
					Fe = _e && Ue,
					Ve = v && !we,
					He = !!xe.recommendationContext,
					ze = {
						flairStyleTemplate: Ie,
						post: xe,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: oe,
						isOverlay: ce,
						shouldShowSubscribeButton: !(re && ie) || He && ie,
						subredditOrProfile: Pe
					},
					qe = Object(r.t)(xe, de),
					[Je, Ge] = Object(n.useState)(!1),
					Ze = Object(n.useCallback)(() => {
						Ge(!Je), Ne(Object(X.d)(ve))
					}, [Je, ve, Ne]);
				let Xe = o.a.createElement(F.a, {
					className: se.a.classicThumbnail,
					crosspost: Me && xe,
					isMeta: xe.isMeta,
					post: Me || xe,
					redditStyle: ge,
					templatePlaceholderImage: Ie && Ie.postPlaceholderImage
				});
				Object(W.b)(xe) ? Xe = o.a.createElement(y, null) : Object(U.G)(xe) && (Xe = o.a.createElement(h, null));
				const Ye = Object(Q.r)(xe);
				return o.a.createElement(I.b, {
					className: Object(a.a)(K.a.classicPostStyles, se.a.postContainer, Object(Z.a)(e), {
						[se.a.shouldShowOverflow]: Ce
					}, t),
					isOverlay: ce,
					style: {
						...Object(Z.d)(e),
						...Object(Z.b)(Ie)
					},
					post: xe,
					onClick: me,
					eventFactory: g
				}, o.a.createElement(A.a, {
					model: xe,
					handleVote: b,
					showBulkActionCheckbox: ye,
					isCheckboxSelected: te,
					toggleCheckbox: Ee,
					flairStyleTemplate: Ie,
					redditStyle: ge,
					postId: ve
				}), o.a.createElement(L.a, {
					className: Ce ? se.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ie
				}, o.a.createElement(j.a, {
					className: se.a.eventMeta,
					post: xe
				}), o.a.createElement("div", {
					className: se.a.mainBody
				}, o.a.createElement("div", {
					className: Ve ? se.a.expandoContainer : se.a.thumbnailContainer
				}, !Ve && Xe, o.a.createElement(w.a, {
					crosspost: Me,
					className: se.a.rightExpando,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(se.a.content, {
						[se.a.showBulkActionCheckbox]: ye
					}),
					"data-click-id": "body"
				}, Ye && o.a.createElement(N.a, {
					content: xe.recommendationContext.content,
					layout: H.g.Classic,
					post: xe
				}), o.a.createElement(B.c, {
					className: he ? se.a.titleWithPoll : void 0,
					format: V,
					poll: he,
					post: xe,
					redditStyle: ge,
					size: B.b.Medium,
					titleColor: Ie && Ie.postTitleColor,
					isOverlay: ce
				}, xe.source && !Me && !xe.isSurveyAd && o.a.createElement(R.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(c.a)(xe))), o.a.createElement(M.a, ne({
					key: "PostMeta"
				}, ze)), ue && Te && Re && o.a.createElement(E.a, {
					thing: xe
				}), ue && Te && We && o.a.createElement(k.a, {
					onIgnoreReports: pe,
					reportable: xe
				}), Object(r.v)(xe, de) && o.a.createElement(u.a, {
					ctaExperimentDesign: Se && "classic",
					className: Object(a.a)(se.a.adLinkWrapper, {
						[se.a.ctaExperiment]: Se
					})
				}, o.a.createElement(m.a, {
					post: xe,
					adLinkContent: qe,
					ctaExperimentDesign: Se && "classic"
				})), xe.discussionType === $.n.Chat && o.a.createElement(ee.a, {
					postId: xe.id
				}), o.a.createElement("div", {
					className: se.a.flatlistContainer
				}, o.a.createElement(w.a, {
					className: se.a.leftExpando,
					crosspost: Me,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: se.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ie,
					model: xe,
					onVoteClick: b
				}), o.a.createElement(C.a, {
					className: se.a.flatlistSeparator
				}), !xe.isSurveyAd && o.a.createElement(C.c, {
					className: se.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: Te,
					hasModFullPerms: Be,
					hostPostData: Y,
					isOverlay: !!ce,
					modModeEnabled: ue,
					onClickInsightsButton: Ze,
					onIgnoreReports: pe,
					onOpenReportsDropdown: fe,
					post: xe,
					shouldShowInsightsButton: Ce,
					showEditPost: Fe,
					showEditFlair: je,
					tooltipType: ce ? D.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(T.b)({
						editPost: !De,
						hide: !De,
						report: !De,
						mute: !De,
						save: !De
					})
				})), o.a.createElement(P.d, null))), Object(G.a)(xe, se.a, Oe, x, ke, ae), Pe && Je && o.a.createElement(f.a, {
					className: se.a.creatorStatsContainer,
					post: xe,
					subreddit: Pe,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(V.a)(oe)
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
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
				return C
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 8,
				P = 1,
				E = j.a.div("Container", y.a),
				_ = j.a.div("PostMetaWrapper", y.a),
				k = j.a.wrapped(p.c, "PostTitle", y.a),
				S = j.a.div("FlatList", y.a),
				N = j.a.div("FlatItem", y.a),
				L = j.a.span("FlatListDotSpacer", y.a),
				I = j.a.wrapped(E, "LinkContainer", y.a),
				M = j.a.div("Content", y.a),
				T = j.a.div("ThumbnailContainer", y.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: g.lb
				}),
				B = Object(a.b)(A);
			t.c = Object(x.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(I, {
					className: d
				}, r.a.createElement(M, null, r.a.createElement(_, null, r.a.createElement(m.a, c)), D(a), a.source && r.a.createElement(f.a, {
					post: a
				}), W(e)), F(e)) : r.a.createElement(E, {
					className: d
				}, r.a.createElement(_, null, r.a.createElement(m.a, c)), D(a), R(e), W(e))
			}));
			const D = e => r.a.createElement(k, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, w({}, n, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				W = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(S, null, r.a.createElement(N, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(L, null), r.a.createElement(N, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				F = e => r.a.createElement(T, null, r.a.createElement(b.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
				return Object(a.G)(t) ? o.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, o.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, o.a.createElement("div", {
					className: "max-w-[294px] my-md leading-5 text-neutral-content"
				}, o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("We're launching a new type of custom post. For now, it must be opened in a new window.", null, {
					hk: "v8S8Z"
				})), o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("It's us, not you.", null, {
					hk: "4wyEYD"
				}))), o.a.createElement(r.a, {
					className: "m-auto mt-sm",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(O);
			const j = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(m.b)(t.permalink), t.id))
				})),
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(y.a.icon, y.a.hideOnHover);
					if (t) return r.a.createElement(f.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(f.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(f.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(f.a, {
								name: "gif_post",
								className: n
							});
						case b.o.IMAGE:
							return r.a.createElement(f.a, {
								name: "image_post",
								className: n
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(f.a, {
								name: "text_post",
								className: n
							});
						case b.o.VIDEO:
							return r.a.createElement(f.a, {
								name: "video_post",
								className: n
							});
						case b.o.GALLERY:
							return r.a.createElement(f.a, {
								name: "media_gallery",
								className: n
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(f.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = j(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: m,
					post: b,
					toggle: O,
					useMediaIcons: j
				} = e, C = s || b, P = Object(a.e)(x.b), E = Object(a.e)(x.c), _ = t => {
					(P || E) && (t.preventDefault(), e.showModalOnPostLinkClick(C))
				}, k = C.media, S = Object(h.q)(b), N = o && !!s;
				return k && !S && !(("rtjson" === k.type || "text" === k.type || "liveaudio" === k.type) && !Object(p.a)(C)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					"data-adclicklocation": g.a.MEDIA,
					onClick: O
				}, m ? r.a.createElement(f.a, {
					name: "collapse",
					className: y.a.icon
				}) : j ? r.a.createElement(r.a.Fragment, null, w(C.media && C.media.type, N, b), r.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : r.a.createElement(f.a, {
					name: "expand",
					className: y.a.icon
				})) : C.source && C.source.url ? r.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: C.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(C.permalink),
					rel: "nofollow",
					onClick: _
				}, r.a.createElement(f.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				u = s.n(l);
			const m = () => a.a.createElement("span", {
				className: u.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				f = s.n(p);
			const b = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(f.a.liveParticipation, s)
				}, a.a.createElement(m, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var h = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(h.e)(e => Object(x.a)(e, t));
				return Object(h.e)(v.e) ? a.a.createElement(b, {
					userCount: n,
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === c.g.Classic,
						[u.a.compactLayout]: s === c.g.Compact,
						[u.a.largeLayout]: s === c.g.Large
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: f,
					...b
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: f || Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
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
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/chooseVariant/index.ts"),
				b = s("./node_modules/reselect/es/index.js");
			const h = Object(b.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: p.zc
			}), e => e === p.Rd);
			var x = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				C = s.n(w);
			const P = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(y.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(j.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(g.a, {
					className: Object(v.a)(C.a.link, s),
					to: r.url
				}, x.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(O.b, {
					className: C.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: C.a.subredditName
				}, r.displayText)) : null
			};
			var E = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = s("./src/reddit/connectors/PostViewable/index.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				N = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/hooks/useClickSourceData.ts"),
				I = s("./src/reddit/hooks/useIsOverlay.ts"),
				M = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				B = s.n(A);
			const D = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${x.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(T.b)(t.numComments)} ${x.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: B.a.postInformation
				}, o.a.createElement("h5", {
					className: B.a.title
				}, t.title), o.a.createElement("div", {
					className: B.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var R = s("./src/lib/isUrl/index.ts"),
				W = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				F = s("./src/reddit/components/UserIcon/index.tsx"),
				V = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				H = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				z = s("./src/reddit/selectors/profile.ts"),
				q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				J = s.n(q);
			const G = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(z.l)(t.author)),
					u = Object(n.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					m = Object(n.useMemo)(() => Object(R.a)(u), [u]);
				Object(n.useEffect)(() => {
					m || c(Object(W.d)(t.author))
				}, [c, t.author, m]);
				const p = !m && Object(H.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					f = Object(V.c)(null === (r = null == d ? void 0 : d.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: J.a.media
				}, m ? o.a.createElement(U.b, {
					post: t,
					url: u,
					className: J.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: J.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: J.a.userIconContainer
				}, o.a.createElement(F.a, {
					className: Object(v.a)({
						[J.a.snoovatarUserIcon]: p,
						[J.a.defaultUserIcon]: f
					}, J.a.userIcon),
					iconUrl: null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url,
					userName: d.name,
					wrapperClassName: J.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var Z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				X = s.n(Z);
			const Y = Object(_.a)(null);
			var K = Object(S.b)(Y(e => {
					let {
						post: t
					} = e;
					const s = Object(M.a)(),
						n = Object(I.a)(),
						r = Object(L.a)(),
						a = Object(k.x)(s) && !n;
					return o.a.createElement(g.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(N.b)(t.permalink) : Object(E.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: X.a.container
					}, o.a.createElement(D, {
						post: t
					}), o.a.createElement(G, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(Q);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(K, {
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
				if (!Object(l.e)(h) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(u.y)(t, m.a.Click))
				}, o.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(P, {
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
				}) : Object(c.B)(t) && Object(c.A)(t) ? o.a.createElement(ne, {
					post: t
				}) : Object(i.G)(t) ? o.a.createElement(d.a, {
					post: t
				}) : o.a.createElement(a.a, {
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
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/components/PostMeta/index.m.less"),
				w = s.n(j);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: j,
					isOverlay: C,
					isTopicPage: P,
					post: E,
					shouldShowSubscribeButton: _,
					subredditOrProfile: k,
					tooltipType: S
				} = e, N = !!P, L = Object(O.a)(), I = Object(r.e)(e => !!k && Object(a.i)(e, k.id)), M = !(!k || !Object(y.i)(k));
				return o.a.createElement("div", {
					className: w.a.metaContainer
				}, !n && !E.isSponsored && k && o.a.createElement(d.a, {
					postId: E.id,
					subredditName: k.name,
					isProfile: M
				}, o.a.createElement(f.a, {
					className: w.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: k.url,
						state: L
					}
				}, k.displayText)), k && k.isQuarantined && o.a.createElement(p.a, null), !n && !E.isSponsored && k && _ && !j && o.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(g.n)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(y.i)(k) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: E.id,
					size: x.d.XXS,
					small: !0
				}), !n && !E.isSponsored && o.a.createElement(v.b, null), !n && !E.isSponsored && o.a.createElement(l.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), o.a.createElement(m.g, {
					className: w.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: S,
					isModWithUserNotesPermissions: I
				}), o.a.createElement(u.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!n,
					post: E,
					tooltipType: S
				}), !N && o.a.createElement(i.a, {
					hideCta: s,
					thing: E,
					tooltipType: C ? m.f.Lightbox : void 0
				}), I && o.a.createElement(c.a, {
					postOrComment: E,
					className: w.a.addModNote
				}))
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
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: g,
					shouldShowUpvoteRatioOnHover: O
				} = e, y = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: y,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: g,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
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
			t.a = f(Object(i.a)(b))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: x.d,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: x.S,
					moderatorPermissions: f.m,
					modModeEnabled: d.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: d.t,
					flairStyleTemplate: d.Y,
					showCTAExperimentDesign: p.a
				},
				g = Object(n.b)(() => Object(o.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(g(Object(c.b)(e)))
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, r, a) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, n) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.f)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.f)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				f = e => Object(n.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return i
			})), s.d(t, "b", (function() {
				return c
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
			const a = e => {
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
				i = (e, t) => s => ({
					...Object(r.q)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.nb)(s),
					post: Object(r.M)(s, e),
					userSubreddit: Object(r.wb)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.q)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.M)(s, t),
					subreddit: Object(r.nb)(s),
					userSubreddit: Object(r.wb)(s)
				}),
				d = e => {
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
						reason: d(t)
					}),
					post: Object(r.M)(n, e, void 0, s)
				}),
				m = (e, t, s, n, a, i) => c => ({
					...Object(r.q)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.M)(c, e, void 0, i),
					subreddit: Object(r.nb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.q)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.M)(n, e, void 0, s),
					subreddit: Object(r.nb)(n)
				})
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.ng,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.hg)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.54b867afc69af5cd0bd9.js.map