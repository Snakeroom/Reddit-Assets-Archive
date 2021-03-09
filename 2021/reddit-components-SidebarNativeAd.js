// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.e5246b8047a1cd1580d6.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function n(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var s, o = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						u = /silk/i.test(t),
						l = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !o && !u && /macintosh/i.test(t),
						g = !i && !l && !p && !m && /linux/i.test(t),
						O = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = r(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: _ || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: _ || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, O ? (s.msedge = e, s.version = O) : (s.msie = e, s.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: O
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : l ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : u ? s = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, _ && (s.version = _)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, _ && (s.version = _)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && _ && (s.version = _)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : E ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? w = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? w = (w = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? w = (w = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? w = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? w = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? w = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (w = r(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (s.osversion = w);
					var x = !s.windows && w.split(".")[0];
					return y || c || "ipad" == o || i && (3 == x || x >= 4 && !v) || s.silk ? s.tablet = e : (v || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var r, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) n.push(t(e[r]));
					return n
				}

				function o(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), r = s(e, (function(e) {
							var r = t - n(e);
							return s((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, n, s) {
					var i = r;
					"string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = i, r.compareVersions = o, r.check = function(e, t, r) {
					return !i(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, s) {
				return s(e, (function(e, s, o) {
					r = n ? (n = !1, e) : t(r, e, s, o)
				})), r
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				s = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = s(r)) == r ? r : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), n(s(e), t, r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				s = r("./node_modules/lodash/_baseEach.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), r, d, s)
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return me
			}));
			var n = r("./node_modules/react/index.js");

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

			function o(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = o(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof o(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function u(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function l(e) {
				return s(u(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return o(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					r = t.overflow,
					n = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + s + n)
			}

			function f(e, t, r) {
				void 0 === r && (r = !1);
				var n, a, p = u(t),
					f = s(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					g = {
						x: 0,
						y: 0
					};
				return (b || !b && !r) && (("body" !== d(t) || m(p)) && (h = (n = t) !== o(n) && c(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : i(n)), c(t) ? ((g = s(t)).x += t.clientLeft, g.y += t.clientTop) : p && (g.x = l(p))), {
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
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || u(e)
			}

			function g(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					n = "body" === d(r),
					s = o(r),
					i = n ? [s].concat(s.visualViewport || [], m(r) ? r : []) : r,
					a = t.concat(i);
				return n ? a : a.concat(g(h(i)))
			}

			function O(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function _(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = o(e), r = _(e); r && O(r) && "static" === p(r).position;) r = _(r);
				return r && "body" === d(r) && "static" === p(r).position ? t : r || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var r = p(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var v = "top",
				E = "bottom",
				w = "right",
				x = "left",
				j = "auto",
				S = [v, E, w, x],
				C = "start",
				I = "end",
				k = "clippingParents",
				T = "viewport",
				P = "popper",
				A = "reference",
				N = S.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + I])
				}), []),
				R = [].concat(S, [j]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + I])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function L(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(s) {
						r.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var s = t.get(n);
								s && e(s)
							}
						})), n.push(s)
					}(e)
				})), n
			}
			var D = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function F() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					s = t.defaultOptions,
					o = void 0 === s ? D : s;
				return function(e, t, r) {
					void 0 === r && (r = o);
					var s, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, D), o),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						d = [],
						u = !1,
						l = {
							state: c,
							setOptions: function(r) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), r), c.scrollParents = {
									reference: a(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var s = function(e) {
									var t = L(e);
									return M.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, c.options.modifiers)));
								return c.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										s = e.effect;
									if ("function" == typeof s) {
										var o = s({
											state: c,
											name: t,
											instance: l,
											options: n
										});
										d.push(o || function() {})
									}
								})), l.update()
							},
							forceUpdate: function() {
								if (!u) {
									var e = c.elements,
										t = e.reference,
										r = e.popper;
									if (F(t, r)) {
										c.rects = {
											reference: f(t, y(r), "fixed" === c.options.strategy),
											popper: b(r)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var s = c.orderedModifiers[n],
													o = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													d = s.name;
												"function" == typeof o && (c = o({
													state: c,
													options: a,
													name: d,
													instance: l
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									l.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								p(), u = !0
							}
						};
					if (!F(e, t)) return l;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return l.setOptions(r).then((function(e) {
						!u && r.onFirstUpdate && r.onFirstUpdate(e)
					})), l
				}
			}
			var B = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function q(e) {
				return e.split("-")[1]
			}

			function z(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function V(e) {
				var t, r = e.reference,
					n = e.element,
					s = e.placement,
					o = s ? G(s) : null,
					i = s ? q(s) : null,
					a = r.x + r.width / 2 - n.width / 2,
					c = r.y + r.height / 2 - n.height / 2;
				switch (o) {
					case v:
						t = {
							x: a,
							y: r.y - n.height
						};
						break;
					case E:
						t = {
							x: a,
							y: r.y + r.height
						};
						break;
					case w:
						t = {
							x: r.x + r.width,
							y: c
						};
						break;
					case x:
						t = {
							x: r.x - n.width,
							y: c
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var d = o ? z(o) : null;
				if (null != d) {
					var u = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(r[u] / 2 - n[u] / 2);
							break;
						case I:
							t[d] = Math.floor(t[d]) + Math.ceil(r[u] / 2 - n[u] / 2)
					}
				}
				return t
			}
			var W = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function H(e) {
				var t, r = e.popper,
					n = e.popperRect,
					s = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					l = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(i),
					p = l.x,
					m = l.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = x,
					g = v,
					O = window;
				if (d) {
					var _ = y(r);
					_ === o(r) && (_ = u(r)), s === v && (g = E, m -= _.clientHeight - n.height, m *= c ? 1 : -1), s === x && (h = w, p -= _.clientWidth - n.width, p *= c ? 1 : -1)
				}
				var j, S = Object.assign({
					position: a
				}, d && W);
				return c ? Object.assign(Object.assign({}, S), {}, ((j = {})[g] = b ? "0" : "", j[h] = f ? "0" : "", j.transform = (O.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", j)) : Object.assign(Object.assign({}, S), {}, ((t = {})[g] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
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

			function J(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function Q(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
				}
				return !1
			}

			function $(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Z(e, t) {
				return t === T ? $(function(e) {
					var t = o(e),
						r = u(e),
						n = t.visualViewport,
						s = r.clientWidth,
						i = r.clientHeight,
						a = 0,
						c = 0;
					return n && (s = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, c = n.offsetTop)), {
						width: s,
						height: i,
						x: a + l(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : $(function(e) {
					var t = u(e),
						r = i(e),
						n = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -r.scrollLeft + l(e),
						c = -r.scrollTop;
					return "rtl" === p(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - s), {
						width: s,
						height: o,
						x: a,
						y: c
					}
				}(u(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = g(e),
							r = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return a(r) ? t.filter((function(e) {
							return a(e) && Q(e, r)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(n, [r]),
					o = s[0],
					i = s.reduce((function(t, r) {
						var n = Z(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Z(e, o));
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

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					o = void 0 === n ? e.placement : n,
					i = r.boundary,
					c = void 0 === i ? k : i,
					d = r.rootBoundary,
					l = void 0 === d ? T : d,
					p = r.elementContext,
					m = void 0 === p ? P : p,
					f = r.altBoundary,
					b = void 0 !== f && f,
					h = r.padding,
					g = void 0 === h ? 0 : h,
					O = te("number" != typeof g ? g : re(g, S)),
					_ = m === P ? A : P,
					y = e.elements.reference,
					x = e.rects.popper,
					j = e.elements[b ? _ : m],
					C = ee(a(j) ? j : j.contextElement || u(e.elements.popper), c, l),
					I = s(y),
					N = V({
						reference: I,
						element: x,
						strategy: "absolute",
						placement: o
					}),
					R = $(Object.assign(Object.assign({}, x), N)),
					M = m === P ? R : I,
					L = {
						top: C.top - M.top + O.top,
						bottom: M.bottom - C.bottom + O.bottom,
						left: C.left - M.left + O.left,
						right: M.right - C.right + O.right
					},
					D = e.modifiersData.offset;
				if (m === P && D) {
					var F = D[o];
					Object.keys(L).forEach((function(e) {
						var t = [w, E].indexOf(e) >= 0 ? 1 : -1,
							r = [v, E].indexOf(e) >= 0 ? "y" : "x";
						L[e] += F[r] * t
					}))
				}
				return L
			}

			function se(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function oe(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function ie(e) {
				return [v, w, E, x].some((function(t) {
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
								r = e.instance,
								n = e.options,
								s = n.scroll,
								i = void 0 === s || s,
								a = n.resize,
								c = void 0 === a || a,
								d = o(t.elements.popper),
								u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && u.forEach((function(e) {
									e.addEventListener("scroll", r.update, B)
								})), c && d.addEventListener("resize", r.update, B),
								function() {
									i && u.forEach((function(e) {
										e.removeEventListener("scroll", r.update, B)
									})), c && d.removeEventListener("resize", r.update, B)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = V({
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
								r = e.options,
								n = r.gpuAcceleration,
								s = void 0 === n || n,
								o = r.adaptive,
								i = void 0 === o || o,
								a = {
									placement: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), H(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), H(Object.assign(Object.assign({}, a), {}, {
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
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									s = t.elements[e];
								c(s) && d(s) && (Object.assign(s.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
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
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											s = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && d(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(e) {
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
								r = e.options,
								n = e.name,
								s = r.offset,
								o = void 0 === s ? [0, 0] : s,
								i = R.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = G(e),
											s = [x, v].indexOf(n) >= 0 ? -1 : 1,
											o = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * s, [x, w].indexOf(n) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(r, t.rects, o), e
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
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var s = r.mainAxis, o = void 0 === s || s, i = r.altAxis, a = void 0 === i || i, c = r.fallbackPlacements, d = r.padding, u = r.boundary, l = r.rootBoundary, p = r.altBoundary, m = r.flipVariations, f = void 0 === m || m, b = r.allowedAutoPlacements, h = t.options.placement, g = G(h), O = c || (g === h || !f ? [K(h)] : function(e) {
										if (G(e) === j) return [];
										var t = K(e);
										return [J(e), t, J(t)]
									}(h)), _ = [h].concat(O).reduce((function(e, r) {
										return e.concat(G(r) === j ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												s = r.boundary,
												o = r.rootBoundary,
												i = r.padding,
												a = r.flipVariations,
												c = r.allowedAutoPlacements,
												d = void 0 === c ? R : c,
												u = q(n),
												l = (u ? a ? N : N.filter((function(e) {
													return q(e) === u
												})) : S).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: s,
														rootBoundary: o,
														padding: i
													})[G(r)], t
												}), {});
											return Object.keys(l).sort((function(e, t) {
												return l[e] - l[t]
											}))
										}(t, {
											placement: r,
											boundary: u,
											rootBoundary: l,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : r)
									}), []), y = t.rects.reference, I = t.rects.popper, k = new Map, T = !0, P = _[0], A = 0; A < _.length; A++) {
									var M = _[A],
										L = G(M),
										D = q(M) === C,
										F = [v, E].indexOf(L) >= 0,
										U = F ? "width" : "height",
										B = ne(t, {
											placement: M,
											boundary: u,
											rootBoundary: l,
											altBoundary: p,
											padding: d
										}),
										z = F ? D ? w : x : D ? E : v;
									y[U] > I[U] && (z = K(z));
									var V = K(z),
										W = [];
									if (o && W.push(B[L] <= 0), a && W.push(B[z] <= 0, B[V] <= 0), W.every((function(e) {
											return e
										}))) {
										P = M, T = !1;
										break
									}
									k.set(M, W)
								}
								if (T)
									for (var H = function(e) {
											var t = _.find((function(t) {
												var r = k.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return P = t, "break"
										}, Y = f ? 3 : 1; Y > 0; Y--) {
										if ("break" === H(Y)) break
									}
								t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0)
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
								r = e.options,
								n = e.name,
								s = r.mainAxis,
								o = void 0 === s || s,
								i = r.altAxis,
								a = void 0 !== i && i,
								c = r.boundary,
								d = r.rootBoundary,
								u = r.altBoundary,
								l = r.padding,
								p = r.tether,
								m = void 0 === p || p,
								f = r.tetherOffset,
								h = void 0 === f ? 0 : f,
								g = ne(t, {
									boundary: c,
									rootBoundary: d,
									padding: l,
									altBoundary: u
								}),
								O = G(t.placement),
								_ = q(t.placement),
								j = !_,
								S = z(O),
								I = "x" === S ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								T = t.rects.reference,
								P = t.rects.popper,
								A = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								N = {
									x: 0,
									y: 0
								};
							if (k) {
								if (o) {
									var R = "y" === S ? v : x,
										M = "y" === S ? E : w,
										L = "y" === S ? "height" : "width",
										D = k[S],
										F = k[S] + g[R],
										U = k[S] - g[M],
										B = m ? -P[L] / 2 : 0,
										V = _ === C ? T[L] : P[L],
										W = _ === C ? -P[L] : -T[L],
										H = t.elements.arrow,
										Y = m && H ? b(H) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[R],
										J = K[M],
										Q = se(0, T[L], Y[L]),
										$ = j ? T[L] / 2 - B - Q - X - A : V - Q - X - A,
										Z = j ? -T[L] / 2 + B + Q + J + A : W + Q + J + A,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === S ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
										oe = k[S] + $ - re - te,
										ie = k[S] + Z - re,
										ae = se(m ? Math.min(F, oe) : F, D, m ? Math.max(U, ie) : U);
									k[S] = ae, N[S] = ae - D
								}
								if (a) {
									var ce = "x" === S ? v : x,
										de = "x" === S ? E : w,
										ue = k[I],
										le = se(ue + g[ce], ue, ue - g[de]);
									k[I] = le, N[I] = le - ue
								}
								t.modifiersData[n] = N
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								s = r.elements.arrow,
								o = r.modifiersData.popperOffsets,
								i = G(r.placement),
								a = z(i),
								c = [x, w].indexOf(i) >= 0 ? "height" : "width";
							if (s && o) {
								var d = r.modifiersData[n + "#persistent"].padding,
									u = b(s),
									l = "y" === a ? v : x,
									p = "y" === a ? E : w,
									m = r.rects.reference[c] + r.rects.reference[a] - o[a] - r.rects.popper[c],
									f = o[a] - r.rects.reference[a],
									h = y(s),
									g = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									O = m / 2 - f / 2,
									_ = d[l],
									j = g - u[c] - d[p],
									S = g / 2 - u[c] / 2 + O,
									C = se(_, S, j),
									I = a;
								r.modifiersData[n] = ((t = {})[I] = C, t.centerOffset = C - S, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								s = r.element,
								o = void 0 === s ? "[data-popper-arrow]" : s,
								i = r.padding,
								a = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && Q(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : re(a, S))
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
								r = e.name,
								n = t.rects.reference,
								s = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								i = ne(t, {
									elementContext: "reference"
								}),
								a = ne(t, {
									altBoundary: !0
								}),
								c = oe(i, n),
								d = oe(a, s, o),
								u = ie(c),
								l = ie(d);
							t.modifiersData[r] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: u,
								hasPopperEscaped: l
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": u,
								"data-popper-escaped": l
							})
						}
					}]
				}),
				ce = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = r.n(ce),
				ue = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				le = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				pe = [],
				me = function(e, t, r) {
					void 0 === r && (r = {});
					var s = n.useRef(null),
						o = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || pe
						},
						i = n.useState({
							styles: {
								popper: {
									position: o.strategy,
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
										r = Object.keys(t.elements);
									c({
										styles: ue(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ue(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						u = n.useMemo((function() {
							var e = {
								onFirstUpdate: o.onFirstUpdate,
								placement: o.placement,
								strategy: o.strategy,
								modifiers: [].concat(o.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]),
						l = n.useRef();
					return le((function() {
						l.current && l.current.setOptions(u)
					}), [u]), le((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || ae)(e, t, u);
							return l.current = n,
								function() {
									n.destroy(), l.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: l.current ? l.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: l.current ? l.current.update : null,
						forceUpdate: l.current ? l.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				s = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, c, d, u;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (n && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
							if (r && t instanceof Element) return !1;
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
		"./src/graphql/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, r) => (n = (() => {})) => s => {
				const o = p(s.target, s.currentTarget),
					a = m(s.target, s.currentTarget);
				o && r && t && (l(s.target, s.currentTarget, u.anchors) ? r(t(e, o, a)) : r(r => {
					const n = t(e, o, a)(r);
					let s;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						s = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(r, s)
					}
				})), l(s.target, s.currentTarget, u.anchorsAndButtons) && n(s)
			};

			function d(e) {
				return Object(o.c)(t => {
					const {
						sendEvent: r,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, u = Object(n.useCallback)(c(i, o, r), [i, o, r]);
					return s.a.createElement(e, a({}, d, {
						afterClickTracking: u
					}))
				})
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				l = (e, t, r) => !r.includes(e.tagName) && (e === t || !!e.parentElement && l(e.parentElement, t, r)),
				p = (e, t) => {
					const r = e.dataset.clickId;
					return r || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Media/index.ts"),
				s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = r.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: s
				} = e;
				let i = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = s || Object(n.D)(e)
				} else i = Object(n.D)(e);
				const a = o.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts");
			const o = [s.dc, s.hb, s.x, s.J, s.db, s.Hb],
				i = {
					[s.Hb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.db]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.hb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.dc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Hb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.db]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, r = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					u = {
						[s.dc]: "",
						[s.hb]: "",
						[s.x]: "",
						[s.J]: "",
						[s.db]: "",
						[s.Hb]: ""
					};
				let l = d - c;
				if (l <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(l / n);
					e && (u[n] = (t ? a : i)[n](e).toString()), l -= e * n
				}
				const p = o.map(e => u[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? p : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			})), r.d(t, "b", (function() {
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/camelCase.js"),
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/graphql/operations/FetchContentControls.json"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/models/AutomatedReporting/index.ts");
			const m = e => {
				switch (e) {
					case "LENIENT":
						return p.a.Lenient;
					case "MODERATE":
						return p.a.Moderate;
					case "STRICT":
						return p.a.Strict;
					default:
						return p.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = r("./node_modules/lodash/isEmpty.js"),
				b = r.n(f),
				h = r("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				g = r("./src/graphql/operations/UpdatePostRequirements.json"),
				O = r("./src/reddit/endpoints/subreddit/about.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/selectors/contentControls.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/actions/contentControls/constants.ts");
			const w = Object(a.a)(E.b),
				x = Object(a.a)(E.c),
				j = Object(a.a)(E.a),
				S = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = {
						subredditName: e.toLowerCase()
					};
					if (Object(y.a)(r(), s)) return;
					t(x(s));
					let o = Object(v.F)(r(), e);
					if (!o) {
						const r = await Object(O.a)(n(), e, !1);
						if (r.ok) {
							o = r.body.data.subreddit.id
						}
						if (!o) {
							const e = r.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void t(j({
								...s,
								error: e
							}))
						}
					}
					let a = null;
					const d = await ((e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: m(null == n ? void 0 : n.automatedReportingLevelAbuse),
												levelHate: m(null == n ? void 0 : n.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == n ? void 0 : n.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(n(), {
						subredditId: o
					});
					if (d.ok) {
						const e = d.body;
						a = e.data.subreddit && e.data.subreddit
					}
					if (a) t(w({
						...s,
						...a
					}));
					else {
						const r = d.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(j({
							...s,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: d.body,
								responseOk: d.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, C = Object(a.a)(E.d), I = (e, t) => async (r, s, {
					gqlContext: o
				}) => {
					const i = e.toLowerCase(),
						a = Object(v.F)(s(), e);
					if (!a) return {
						success: !1
					};
					const c = await ((e, t, r) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !b()(r.postRequirements)) {
							const s = {
								subredditId: t,
								...r.postRequirements
							};
							n[0] = Object(l.a)(e, {
								...g,
								variables: {
									input: s
								}
							})
						}
						if (r.automatedReporting && !b()(r.automatedReporting)) {
							const s = {
								subredditId: t
							};
							r.automatedReporting.levelAbuse && (s.automatedReportingLevelAbuse = r.automatedReporting.levelAbuse), r.automatedReporting.levelHate && (s.automatedReportingLevelHate = r.automatedReporting.levelHate), n[1] = Object(l.a)(e, {
								...h,
								variables: {
									input: s
								}
							})
						}
						return Promise.all(n).then(([e, t]) => {
							let r = !0,
								n = [];
							if (e) {
								const t = e.body,
									s = t.data.updatePostRequirements.fieldErrors;
								r = r && t.data.updatePostRequirements.ok, s && (n = n.concat(s))
							}
							if (t) {
								const e = t.body,
									s = e.data.updateSubredditSettings.fieldErrors;
								r = r && e.data.updateSubredditSettings.ok, s && (n = n.concat(s))
							}
							return {
								ok: r,
								fieldErrors: n.length ? n : null
							}
						})
					})(o(), a, t);
					if (c.ok) return r(C({
						subredditName: i,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = k(c.fieldErrors);
						return r(Object(d.e)({
							duration: d.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: _.b.Error,
							text: e && e.length ? e[0].message : n.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, k = e => e && e.map(e => ({
					...e,
					field: o()(e.field)
				}))
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(s("awardSheetInfoRequested")),
				i = Object(n.a)(s("manageableAwardsRequested")),
				a = Object(n.a)(s("createCommunityAward")),
				c = Object(n.a)(s("createGlobalAward")),
				d = Object(n.a)(s("createModAward")),
				u = Object(n.a)(s("createAwardFailed")),
				l = Object(n.a)(s("createAwardSuccessful")),
				p = Object(n.a)(s("removeCommunityAward")),
				m = Object(n.a)(s("disableAwardinCommunity")),
				f = Object(n.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/selectors/communityAwards.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(b.L),
				g = Object(n.a)(b.g),
				O = () => async (e, t) => {
					const n = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(s()(n))
				}, _ = Object(n.a)(b.K), y = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, s) => {
					const a = s(),
						c = e ? Object(l.a)(a, e) : void 0;
					n(_({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(u.h)(i.a.GOLD_GILD_MODAL));
					const f = Object(m.J)(a, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(o.a)(r)) {
						const e = Object(p.I)(a, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, v = Object(n.a)(b.f), E = Object(n.a)(b.J), w = () => async (e, t) => {
					const n = t(),
						o = Object(a.d)(n);
					if (Object(a.g)(n)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(v()), e(Object(u.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(n)), Object(c.b)(c.a.GildingFlow)
				}, x = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return M
			})), r.d(t, "PAGE_LOADED", (function() {
				return L
			})), r.d(t, "PAGE_FAILED", (function() {
				return D
			})), r.d(t, "pagePending", (function() {
				return F
			})), r.d(t, "pageLoaded", (function() {
				return U
			})), r.d(t, "pageFailed", (function() {
				return B
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return q
			})), r.d(t, "postCreationPageRequested", (function() {
				return z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/filterQueryParams/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makePostCreationPageKey/index.ts"),
				d = r("./src/lib/pageTitle.ts"),
				u = r("./src/reddit/actions/contentControls/index.ts"),
				l = r("./src/reddit/actions/economics/helpers/async.ts"),
				p = r("./src/reddit/actions/externalAccount.ts"),
				m = r("./src/reddit/actions/gold/powerups.ts"),
				f = r("./src/reddit/actions/platform.ts"),
				b = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/actions/postCreation/general.ts"),
				g = r("./src/reddit/actions/profile/index.ts"),
				O = r("./src/reddit/actions/subreddit.ts"),
				_ = r("./src/reddit/actions/subredditDuplicates.ts"),
				y = r("./src/config.ts"),
				v = r("./src/lib/makeApiRequest/index.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				x = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/contentControls.ts"),
				I = r("./src/reddit/selectors/postCollection.ts"),
				k = r("./src/reddit/selectors/postCreations.ts"),
				T = r("./src/reddit/selectors/posts.ts"),
				P = r("./src/reddit/selectors/profile.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts");
			const R = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(A.A)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(d.i)(r)
				},
				M = "POST_CREATION__PAGE_PENDING",
				L = "POST_CREATION__PAGE_LOADED",
				D = "POST_CREATION__PAGE_FAILED",
				F = Object(a.a)(M),
				U = Object(a.a)(L),
				B = Object(a.a)(D),
				G = () => async (e, t) => {
					const r = t(),
						n = Object(k.a)(r);
					n !== Object(k.fb)(r) && e(Object(h.g)({
						submissionType: n
					}))
				}, q = e => async (t, r, n) => {
					const {
						collectionId: o,
						profileName: a,
						subredditName: d
					} = e, l = Object(c.a)(e), f = r(), b = f.creations.api.page.pending[l], h = f.creations.api.page.fetched[l], _ = f.creations.api.page.error[l];
					if (b) return;
					if (h && !_) return void t(G());
					const w = [];
					t(F({
						key: l
					}));
					let j = d;
					!d && a && (j = `u_${a}`), w.push(((e, t) => Object(v.a)(e, {
						method: s.cb.GET,
						endpoint: Object(E.a)(`${y.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: j,
						collectionId: o
					})), a && (w.push(t(g.d(a))), w.push(t(g.b(a))));
					const [I] = await Object(x.a)("postCreation", () => Promise.all(w));
					if (I.ok) {
						const e = I.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(U({
								key: l,
								meta: f.meta,
								...e,
								posts: n
							})), !Object(N.J)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(m.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(G());
						const o = [];
						o.push(t(p.o()));
						const a = Object(N.i)(r());
						if (a && a.hasUserProfile && o.push(t(g.d(Object(S.e)(a)))), d && !Object(i.a)(d)) {
							o.push(t(O.o(d))), !!Object(C.b)(r(), {
								subredditName: d
							}) || o.push(t(Object(u.a)(d)))
						}
						await Promise.all(o)
					} else t(B({
						error: I.error,
						key: l
					}))
				}, z = e => async (t, r) => {
					const {
						subredditName: i,
						profileName: a
					} = e.params, c = e.queryParams, d = c.collection;
					if (await t(q({
							collectionId: d,
							profileName: a,
							subredditName: i
						})), !Object(N.J)(r())) return void Object(w.a)(t, r());
					let u;
					if (i ? (u = Object(A.A)(r(), {
							subredditName: i
						}), await t(Object(l.a)({
							subredditName: i
						}))) : a && (u = Object(P.j)(r(), {
							profileName: a
						})), c.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: o
						} = e, i = [];
						let a;
						s ? a = Object(A.F)(n(), s) : o && (a = Object(N.db)(n(), {
							userName: o
						})), a && i.push(r(Object(_.b)(a, t))), i.push(r(Object(b.K)(t))), await Promise.all(i);
						const c = Object(T.f)(n(), {
							postId: t
						});
						r(Object(h.k)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, c.source_id));
					else if (d) {
						const s = Object(I.q)(r(), {
							collectionId: d
						});
						u && s && s.subredditId === u.id || t(Object(n.c)(Object(o.a)(e.url, ["collection"])))
					}((e, t) => {
						const r = e.platform.lastPage;
						t && r && r.meta && r.meta.name === s.Db.POST_CREATION && j.x(e)
					})(r(), i), t(f.l({
						title: R(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return m
			})), r.d(t, "PAGE_LOADED", (function() {
				return f
			})), r.d(t, "PAGE_FAILED", (function() {
				return b
			})), r.d(t, "pagePending", (function() {
				return h
			})), r.d(t, "pageLoaded", (function() {
				return g
			})), r.d(t, "pageFailed", (function() {
				return O
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return _
			})), r.d(t, "postDraftRequested", (function() {
				return y
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				o = r("./src/reddit/actions/profile/index.ts"),
				i = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				p = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const m = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				b = "POST_DRAFT__PAGE_FAILED",
				h = Object(n.a)(m),
				g = Object(n.a)(f),
				O = Object(n.a)(b),
				_ = e => async (t, r, n) => {
					const {
						draftId: m,
						profileName: f
					} = e, b = Object(s.a)(e), h = r(), _ = h.creations.api.page.pending[b], y = h.creations.api.page.fetched[b], v = h.creations.api.page.error[b];
					if (_ || y && !v || !m) return;
					t(o.d(f));
					const E = await Object(p.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(d.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: a.cb.GET
					}))(n.apiContext(), m, f));
					if (E.ok) {
						const e = E.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(g({
							...e,
							key: b
						}))
					} else t(O({
						error: E.error,
						key: b
					}))
				}, y = e => async (t, r, n) => {
					await t(_(e.params))
				}
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return b
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "u", (function() {
				return A
			})), r.d(t, "v", (function() {
				return N
			})), r.d(t, "x", (function() {
				return R
			})), r.d(t, "y", (function() {
				return M
			})), r.d(t, "z", (function() {
				return L
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "p", (function() {
				return F
			})), r.d(t, "o", (function() {
				return B
			})), r.d(t, "w", (function() {
				return G
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "l", (function() {
				return z
			}));
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/isUrl/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/endpoints/post/index.tsx"),
				d = r("./src/reddit/models/PostCreationForm/index.ts"),
				u = r("./src/reddit/routes/postCreation/constants.ts"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				p = r("./src/reddit/selectors/postCollection.ts"),
				m = r("./src/reddit/selectors/postCreations.ts"),
				f = r("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(o.a)(f.n),
				h = Object(o.a)(f.z),
				g = (Object(o.a)(f.s), e => {
					switch (e) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				O = Object(o.a)(f.b),
				_ = Object(o.a)(f.c),
				y = Object(o.a)(f.d),
				v = Object(o.a)(f.e),
				E = Object(o.a)(f.f),
				w = Object(o.a)(f.g),
				x = Object(o.a)(f.h),
				j = Object(o.a)(f.i),
				S = Object(o.a)(f.j),
				C = Object(o.a)(f.q),
				I = Object(o.a)(f.O),
				k = Object(o.a)(f.N),
				T = (Object(o.a)(f.P), Object(o.a)(f.Q)),
				P = Object(o.a)(f.R),
				A = Object(o.a)(f.S),
				N = Object(o.a)(f.T),
				R = Object(o.a)(f.U),
				M = Object(o.a)(f.V),
				L = Object(o.a)(f.W),
				D = Object(o.a)(f.r),
				F = e => async (t, r, {
					apiContext: n
				}) => {
					t(y(e)), Object(s.a)(e) && t((e => async (t, r, {
						apiContext: n
					}) => {
						const s = await Object(c.f)(n(), e);
						s.ok && s.body && s.body.json && s.body.json.data && t(h(s.body.json.data))
					})(e))
				}, U = Object(o.a)(f.A), B = (e, t) => async (r, s) => {
					r(U()), r(e ? Object(n.b)(u.b) : Object(n.b)(Object(m.V)(s(), {
						pageLayer: t
					})))
				}, G = e => async t => {
					t(i.i(e))
				}, q = e => async (t, r) => {
					const n = r(),
						s = Object(a.D)(e),
						o = Object(m.B)(n);
					if (s && o) {
						Object(l.a)(n) !== d.c && t(G(d.c))
					} else t(B(!1, e))
				}, z = e => async (t, r) => {
					const n = r();
					Object(p.m)(n, {
						subredditId: e
					}) ? t(i.i(d.a)) : t(i.i(d.b))
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/config.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/reddit/models/Post/index.ts");
			var c = r("./src/reddit/models/Duplicates/index.ts"),
				d = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(p)),
				f = (e, t) => async (r, n, {
					apiContext: p
				}) => {
					const f = Object(l.T)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!f) return;
					const b = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(d.g)(f) ? s.Wb + f.name : f.name
						},
						h = await ((e, t, r) => Object(i.a)(e, {
							data: r,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(a.s)(t)}`,
							method: s.cb.GET
						}))(p(), t, b);
					if (h.ok) {
						const n = h.body;
						r(m({
							distinguishKey: Object(c.a)(t, b),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return y
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				y = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = r.n(u);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.d, null, o.a.createElement(a.h, null, o.a.createElement(d.a, null, o.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.k, null, o.a.createElement(a.o, {
				className: l.a.ModalText
			}, e.modalText)), o.a.createElement(a.f, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.t, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, i] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? s.a.createElement("div", c({
					className: Object(o.a)(a.a.tooltip, {
						[a.a.visible]: r
					})
				}, t.popperProps), t.children, r && s.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/lib/timeUntil/index.ts"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(s.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, r) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/ads/index.ts"),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/helpers/trackers/gallery.ts"),
				d = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = r("./src/reddit/hooks/useTracking.ts");
			var l = s.a.memo(e => {
					const t = Object(n.useRef)(null),
						r = Object(u.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && r(c.d(e.postId))
							})
						}, [r, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/connectors/PostViewable/index.ts"),
				f = r("./src/reddit/models/Media/index.ts"),
				b = r("./src/reddit/selectors/media.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/video.ts"),
				O = r("./src/lib/classNames/index.ts"),
				_ = r("./src/lib/objectSelector/index.ts"),
				y = r("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = r("./src/reddit/components/PostContainer/index.m.less"),
				E = r.n(v);
			const w = Object(m.a)(() => Object(o.c)({
					basePixelMetadata: Object(_.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(b.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(g.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(g.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(g.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					})
				})),
				x = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						r = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && r
				};
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: r,
						className: n,
						currentIndex: o,
						imageGalleryCurrentItem: d,
						makePostContainerId: u,
						post: p,
						onClick: m,
						onPostContentClick: b,
						sendEvent: h,
						style: g,
						ref: _
					} = this.props, y = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: _,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: r => {
							if (!this.cancelClick && r.button < 2 && (e(() => m && m(r, p, t, d))(r), b && x(r) && b(r, p)), p.id && d) {
								const {
									source: e
								} = Object(i.t)(p, d);
								if (e && e.outboundUrl) {
									const t = o + 1;
									h(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(O.a)(E.a.WrappedPost, n, `Post ${p.id}`, {
							promotedlink: p.isSponsored
						}),
						id: u ? u(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, r), v = !!p.media && p.media.type === f.o.VIDEO;
					return p.isSponsored || v ? s.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, y) : p.media && Object(f.E)(p.media) ? s.a.createElement(l, {
						postId: p.id
					}, y) : y
				}
			}
			t.a = w(Object(y.c)(Object(p.c)(j)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/CrosspostBox/index.tsx"),
				i = r("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return N
			})), r.d(t, "a", (function() {
				return z
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				g = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				O = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/path/index.ts"),
				y = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = r("./src/reddit/models/Flair/index.ts"),
				w = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = r("./src/lib/getShortenedLink.ts"),
				S = r("./src/reddit/components/FlairWrapper/index.tsx"),
				C = r("./node_modules/fbt/lib/FbtPublic.js"),
				I = r("./src/lib/prettyPrintNumber/index.ts"),
				k = r("./src/reddit/components/Poll/MetaData/index.tsx"),
				T = r("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				P = r.n(T);
			const A = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var N, R = Object(i.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, n = r ? r.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(e.className, P.a.proposalMetaData)
					}, o.a.createElement("span", null, C.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [C.fbt._param("count", Object(I.a)(n)), C.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(k.a, {
						className: P.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = r("./src/reddit/components/SEOTitle/index.tsx"),
				L = r("./src/reddit/selectors/posts.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/components/PostTitle/index.m.less"),
				B = r.n(U),
				G = r("./src/config.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(N || (N = {}));
			const z = p.a.wrapped(Object(l.a)(({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: n,
					children: s,
					className: i,
					redditStyle: a,
					theme: c,
					...d
				}) => {
					let l = "";
					switch (e) {
						case N.ExtraLarge:
							l = B.a.ExtraLarge;
							break;
						case N.Large:
							l = B.a.Large;
							break;
						case N.Medium:
							l = B.a.Medium;
							break;
						case N.Small:
							l = B.a.Small;
							break;
						case N.ExtraSmall:
							l = B.a.ExtraSmall
					}
					return o.a.createElement("div", q({
						className: Object(u.a)(i, l, {
							[B.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(x.a)({
								redditStyle: a,
								theme: c,
								...d
							}).titleText
						}
					}, d), r ? o.a.createElement(M.b, {
						type: r
					}, s) : s)
				}), "Title", B.a),
				V = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					...n
				}) => o.a.createElement(a.a, q({}, n, {
					className: Object(u.a)(e, B.a.styledLink, {
						[B.a.isVisitedEnabled]: !t
					})
				}), n.children),
				W = ({
					disableVisited: e,
					nowrap: t,
					...r
				}) => o.a.createElement("div", q({}, r, {
					className: Object(u.a)(B.a.titleContainer, r.className, {
						[B.a.isNoWrap]: t,
						[B.a.isVisitedEnabled]: !e
					})
				})),
				H = Object(f.t)({
					isCommentPermalink: f.v,
					pageLayer: e => e
				}),
				Y = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(f.p)(e, {
						pageLayer: t
					}),
					isMeta: (e, {
						post: t
					}) => Object(L.q)(e, {
						postId: t.id
					}),
					subredditName: (e, {
						post: t
					}) => Object(D.T)(e, {
						subredditId: t.belongsTo.id
					}).name,
					shouldOpenPostInNewTab: F.ab,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(L.i)(e, {
						postId: t.id
					})
				}),
				K = Object(i.b)(Y),
				X = e => {
					const {
						post: t,
						subredditName: r
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(W, {
						nowrap: e.nowrap
					}, o.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(J, e)); {
						const s = t.media && Object(w.G)(t.media) ? Object(y.c)(t.id, r) : t.permalink,
							i = e.isCommentPermalink ? Object(_.b)(s) : Object(g.a)(s);
						return o.a.createElement(W, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: r
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return r ? o.a.createElement(b.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, o.a.createElement(J, t)) : o.a.createElement(J, t)
						})(t, e) : o.a.createElement(V, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, o.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: n
					} = e;
					let s = e.format ? e.format(n) : n.title;
					r && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return o.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(S.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), s)
				},
				Q = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: n
					} = r, s = !t && !e.isCrosspost && e.size !== N.Large && !r.isSponsored && !(r.media && Object(w.G)(r.media)) && (r.source || r.media && (r.media.type === w.o.GIFVIDEO || r.media.type === w.o.IMAGE || r.media.type === w.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (s) return o.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(w.D)(r),
							isSponsored: n,
							postId: r.id,
							source: r.source
						}, Object(j.a)(r), !r.isSponsored && o.a.createElement(v.a, {
							className: B.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== N.Large && e.size !== N.ExtraLarge) return o.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: n,
						postId: r.id,
						source: r.source
					}, Object(j.a)(r), !r.isSponsored && o.a.createElement(v.a, {
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${B.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(x.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(x.a)(this.props).titleText,Object(x.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: n,
						isMeta: s,
						isOverlay: i,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, l = r === E.b.Left, p = Object(S.b)(s, c), m = d ? p.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : l ? p.filter(e => Object(O.p)(e.type)) : [], f = d ? [] : l ? p.filter(e => !Object(O.p)(e.type)) : p, b = !i && !n, h = !t && m && m.length > 0 && b, g = !t && f && f.length > 0 && b;
					return o.a.createElement("div", {
						className: Object(u.a)(e, c.id)
					}, !d && h && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(X, q({}, this.props, {
						leftFlair: d ? m : void 0
					})), a && o.a.createElement(R, {
						className: B.a.pollMeta,
						pollId: a.id
					}), o.a.createElement(Q, this.props), g && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${G.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = p.a.wrapped(H(K(Object(l.a)(Object(m.c)($)))), "Component", B.a)
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = r.n(a);
			const d = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && s.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				u = i.a.wrapped(d, "ApproveButton", c.a),
				l = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "SidebarNativeAd", (function() {
				return Q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/PostMedia/index.tsx"),
				c = r("./src/reddit/components/PostTitle/index.tsx"),
				d = r("./src/reddit/components/PostTopMeta/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/getShortenedLink.ts"),
				p = r("./src/lib/lessComponent.tsx"),
				m = r("./src/lib/opener/index.ts"),
				f = r("./src/reddit/actions/ads/index.ts"),
				b = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/components/PostContainer/index.tsx"),
				g = r("./src/reddit/constants/adEvents.ts"),
				O = r("./src/reddit/contexts/InsideOverlay.tsx"),
				_ = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = r("./src/reddit/helpers/adCount/index.ts"),
				v = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				E = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = r("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				x = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				S = r("./src/reddit/models/Theme/index.ts"),
				C = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/lib/constants/index.ts"),
				k = r("./src/reddit/models/Media/index.ts"),
				T = r("./src/reddit/components/NativeBannerAd/index.m.less"),
				P = r.n(T);
			const A = p.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", P.a);
			class N extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(k.K)(e.media) || Object(k.G)(e.media) ? "" : e.media.content,
						{
							type: r
						} = e.media;
					if (!t || !r) return null;
					switch (r) {
						case I.ib.IMAGE:
							return o.a.createElement(A, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var R = r("./src/reddit/components/SidebarNativeAd/index.m.less"),
				M = r.n(R);
			const L = p.a.wrapped(d.d, "PostTopMeta", M.a),
				D = p.a.div("BannerAdContainer", M.a),
				F = ({
					children: e
				}) => o.a.createElement("div", null, e),
				U = p.a.div("PromotedPostContainer", M.a),
				B = p.a.wrapped(x.a, "OutboundLinkIcon", M.a),
				G = p.a.div("SourceLinkWrapper", M.a),
				q = p.a.div("TopLine", M.a),
				z = p.a.wrapped(c.c, "PostTitle", M.a),
				V = p.a.div("PostMediaWrapper", M.a),
				W = p.a.div("BackgroundWrapper", M.a),
				H = p.a.wrapped(h.a, "PostContainer", M.a),
				Y = 640,
				K = e => Object(w.a)(e.title, 100),
				X = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(E.a)(Object(v.a)(e), j.a.actionIcon, j.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				J = e => ({
					background: Object(S.g)(Object(C.a)(e).body, null, null) || ""
				});
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, g.a.Click), t.source ? t.source.outboundUrl ? Object(m.d)(t.source.outboundUrl, m.c.BLANK) : Object(m.d)(t.source.url, m.c.BLANK) : Object(m.d)(t.permalink, m.c.BLANK)
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
						eventFactory: r,
						isOverlay: s
					} = this.props;
					let i, u, p = {};
					return e.isBlank ? (i = F, u = null) : e.isMediaOnly ? (i = D, p = {
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, u = o.a.createElement(N, {
						post: e
					})) : (i = U, u = o.a.createElement(W, {
						style: J(this.props)
					}, o.a.createElement(q, null, o.a.createElement(L, {
						tooltipType: s ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(z, {
						post: e,
						size: c.b.Large,
						format: K
					}), e.source && o.a.createElement(G, null, o.a.createElement(_.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(l.a)(e), o.a.createElement(B, null))), o.a.createElement(V, null, e.media && o.a.createElement(a.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: Y,
						shouldLoad: !0
					})))), o.a.createElement(i, p, o.a.createElement(H, {
						className: t,
						isOverlay: s,
						post: e,
						onClick: this.onClick,
						eventFactory: r,
						style: X(this.props)
					}, u))
				}
			}
			const $ = Object(i.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, r) => {
					e(Object(b.u)(t, r))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: r,
						placementIndex: n,
						isOverlay: s
					} = t;
					e(Object(f.c)(Object(y.a)(r, !!s, n)))
				}
			}));
			t.default = $(Object(O.b)(Object(u.a)(Q)))
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
			const o = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				i = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				a = e => {
					switch (e.kind) {
						case s.b.Link:
							return "link";
						case s.b.Markdown:
							return "markdown";
						case s.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				c = e => {
					switch (e) {
						case "link":
							return s.b.Link;
						case "markdown":
							return s.b.Markdown;
						case "richtext":
							return s.b.RichText;
						default:
							return "self"
					}
				},
				d = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case s.b.Link:
						case s.b.Markdown:
							return e.body;
						case s.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(n.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				p = e => ({
					id: e.draftId || void 0,
					...i(e),
					kind: a(e),
					title: d(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var n = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${n.a.accountManagerOrigin}/login/`;
				const o = window.location.origin;
				r && (s += `?dest=${encodeURIComponent(`${o}${r}`)}`), window.location.href = s
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.E.NO_STRIPE_SUBSCRIPTION:
							case n.E.USER_DOESNT_EXIST:
							case n.E.USER_REQUIRED_ERROR:
							case n.E.VALIDATION_ERROR:
								return e;
							case n.E.NO_USER:
							case n.E.NO_TEXT:
							case n.E.NO_URL:
								return n.E.VALIDATION_ERROR;
							case n.E.CREDIT_CARD_FAILURE:
							case n.E.CREDIT_CARD_FAILURE_GENERIC:
								return n.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.E.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				u = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				l = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				p = (e, t, r, n) => s => ({
					...a(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
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
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				m = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
					goldPurchase: r ? c(r) : null
				}),
				f = (e, t, r) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...a(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: s.profileById(n, t),
					subreddit: s.subredditById(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return p
			})), r.d(t, "clickRpanGiveAward", (function() {
				return m
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return _
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return v
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return E
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return x
			})), r.d(t, "clickCancelReportAward", (function() {
				return j
			})), r.d(t, "clickConfirmReportAward", (function() {
				return S
			})), r.d(t, "viewGildModalEvent", (function() {
				return C
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return k
			})), r.d(t, "clickMessageInputEvent", (function() {
				return T
			})), r.d(t, "typeMessageInputEvent", (function() {
				return P
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return M
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), r.d(t, "clickFilterEvent", (function() {
				return B
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return q
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				u = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				l = (e, t) => ({
					...s.defaults(e),
					comment: t ? s.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				p = e => t => ({
					...l(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				m = e => t => ({
					...l(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...l(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...l(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: u(e)
				}),
				h = (e, t) => r => ({
					...l(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: u(e)
				}),
				g = (e, t) => r => ({
					...l(r, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: u(e)
				}),
				O = e => (t, r) => n => ({
					...l(n, r),
					source: Object(a.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: u(t)
				}),
				_ = O("award_hovercard_report"),
				y = O("cancel_award_hovercard_report"),
				v = O("flag_award"),
				E = O("cancel_flag_award"),
				w = O("confirm_flag_award"),
				x = O("report_community_award"),
				j = O("cancel_report_community_award"),
				S = O("confirm_report_community_award"),
				C = (e, t, r) => n => ({
					...l(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, r) => n => ({
					...l(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: u(e, r)
				}),
				k = (e, t) => r => ({
					...l(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				R = (e, t) => r => ({
					...l(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...u(t)
					}
				}),
				M = (e, t) => r => ({
					...l(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...u(t)
					}
				}),
				L = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				D = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...l(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: s
				}) => o => ({
					...l(o, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...u(e)
					}
				}),
				B = e => t => ({
					...l(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...l(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				q = () => e => ({
					...l(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				u = r("./src/telemetry/models/Payment.ts"),
				l = r("./src/reddit/helpers/trackers/gild.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: u
					} = t, b = !!r, h = o.b(e), g = h ? Object(l.getAwardTypeFromAward)(h) : null, O = b ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = r ? Object(m.a)(r) ? "comment" : "post" : void 0, y = u || a.s(e), v = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === y)[0], E = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.c)(v, b)), w = v ? Math.round(1e4 * (v.baselinePennies - v.pennies) / v.baselinePennies) / 100 : 0, x = v ? Math.round(1e4 * (v.coins - v.baselineCoins) / v.coins) / 100 : 0, j = v ? v.baselinePennies !== v.pennies ? `${w}_percent_price` : v.baselineCoins !== v.coins ? `${x}_percent_bonus` : void 0 : void 0, S = O === d.GoldPurchaseType.Premium ? n.pb : v ? v.pennies : void 0;
					return {
						...c.defaults(e),
						comment: r ? c.comment(e, r) : null,
						correlationId: a.q(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: r ? c.post(e, r) : null,
						screen: c.screen(e),
						subreddit: r ? c.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: O,
							gildedContent: b,
							contentType: _,
							numberCoins: v ? v.coins : void 0,
							offerContext: E,
							offerType: j
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: S
						},
						purchase: {
							priceMicros: S
						}
					}
				},
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
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
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				w = (e, t, r) => n => {
					const s = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: u.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : a.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				x = e => t => {
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: t.platform.currentPage.queryParams.thanks ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./src/reddit/hooks/useTooltip.ts");
			const i = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, r);
					return s.observe(n), () => {
						s.unobserve(n)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, r] = Object(s.useState)(null), [i, c] = Object(s.useState)(null), [d, u] = Object(s.useState)(null), [l, p] = Object(s.useState)(!1), m = Object(s.useCallback)(async () => p(!0), []), f = Object(s.useCallback)(() => p(!1), []), b = Object(s.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g
				} = Object(o.a)(t, i, b);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: u,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: c,
						style: g.popper,
						...h.popper
					},
					show: m,
					target: {
						element: t,
						ref: r
					},
					visible: l
				}), [u, h, c, f, m, g, t, r, l])
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = r.n(i);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(c);
			t.a = e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: Object(o.a)(Object(a.b)(t ? "pin" : "sticky", e.isFilled), d.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(a.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {
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
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), s.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(n || (n = {}));
			const s = e => {
				switch (e) {
					case "harassment_comments_in_model":
					case "harassment_posts_in_model":
						return "Abuse Filter";
					case "hate_comments_in_model":
					case "hate_posts_in_model":
						return "Identity Filter";
					default:
						return null
				}
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s, o, i = r("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function c(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, r) {
				const n = r.media[0],
					s = Object.keys(n);
				if (n["0x0"]) return n["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(r => {
						const s = n[r],
							[i, a] = r.split("x").map(e => parseInt(e));
						(i < o.width && i >= e || a < o.height && a >= t) && (o = {
							height: a,
							width: i,
							url: s
						})
					}), !o.url && s.length) {
					const e = Object.keys(n)[0],
						t = n[e],
						[r, s] = e.split("x").map(e => parseInt(e));
					o = {
						height: s,
						width: r,
						url: t
					}
				}
				return o.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${i.a.assetPath}/${e}`
			}

			function l(e, t, r) {
				const n = d(e, t, r),
					s = d(2 * e, 2 * t, r);
				return {
					url: u(n),
					url2x: u(s)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(n || (n = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			var n, s, o = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})), r.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(n || (n = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(s || (s = {}));
			const o = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					o = "new_purchaser" === r,
					i = "repeat_purchaser" === r;
				return t ? s.GildFlow : n ? s.LowCoinBalance : o ? s.NewUserTargetedOffer : i ? s.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][s] : n[c.a.Achievement][s] : u(e) ? n[c.a.Cosmetic][c.c.MyBadges][s] : n[c.a.Cosmetic][c.c.Gallery][s]) && (u(e) ? r.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(i.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(p).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(i.b)(n, s)
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
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), l(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
					collections: {
						[c.a.Loyalty]: m(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: m(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: m(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: m(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = r("./src/reddit/actions/modQueue/constants.ts"),
				a = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				u = r("./src/reddit/actions/pages/subreddit.ts"),
				l = r("./src/reddit/actions/userFlair/constants.ts");
			const p = {};
			t.a = (e = p, t) => {
				switch (t.type) {
					case u.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case l.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n,
								displaySettings: s
							}
						}
					}
					case o.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case l.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case l.d: {
						const {
							subredditId: r,
							canAssignOwn: n
						} = t.payload, s = {
							...e[r].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: s
							}
						}
					}
					case l.q: {
						const r = t.payload,
							n = e[r.subredditId],
							s = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							i = {
								...s,
								[r.template.id]: r.template
							},
							a = [...o];
						return a.includes(r.template.id) || a.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...n,
								templates: i,
								templateIds: a
							}
						}
					}
					case l.g: {
						const r = t.payload,
							n = e[r.subredditId],
							o = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							a = s()(o, r.templateId),
							c = i.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case l.m:
					case l.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const s = t.author;
					return s && n[s] || null
				},
				s = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				u = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				l = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => e.awardSubType === n.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let s = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						s = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(s, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) : u(e, r, t),
				p = (e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const o = Object(c.c)(e),
						a = d.find(e => e >= r),
						u = n ? Object(i.I)(e, {
							postId: n
						}) || Object(s.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = l({
						award: t,
						size: a,
						prefersReducedMotion: o,
						postOrComment: u
					})), e), {})
				},
				m = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					postOrComment: t,
					minSizes: r
				}) => {
					const n = Object.keys(t.awardCountsById || {}).reduce((t, r) => {
						const n = e.awards.models[r];
						return n && t.push(n), t
					}, []);
					return r.reduce((r, s) => {
						const o = p(e, {
							awards: n,
							minSize: s,
							postOrCommentId: t.id
						});
						return r[`icon${s}`] = o, r
					}, {})
				},
				b = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(a.lb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return m(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				h = e => {
					const t = Object(o.b)(e),
						r = Object(o.a)(e);
					return m(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return i
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "q", (function() {
				return c
			})), r.d(t, "t", (function() {
				return d
			})), r.d(t, "s", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "y", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "v", (function() {
				return O
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => {
					const t = Object(n.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.updateCardModal.pending,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				E = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				w = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				x = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				j = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				S = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				k = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/userFlair/index.ts");
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
				u = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				l = Object(n.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r) return {
						type: s.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						n = l(e, {
							subredditId: t
						}),
						s = c(e, {
							subredditId: t
						});
					if (!r || !n || !s) return !1;
					if (s.applied) return !0;
					const i = Object(o.d)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = n.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || i
					}) && a
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.e5246b8047a1cd1580d6.js.map